import { error } from '@sveltejs/kit';
import { PUBLIC_PLONE_BASE_URL } from '$env/static/public';

export const prerender = true;

const base_url = 'http://localhost:8080/Plone';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	console.log("path: " + params.path);
	let headers = new Headers();
	headers.set('Content-type', 'application/json');
	headers.set('Accept', 'application/json');
	headers.set('X-Requested-With', 'Fetch');
	const method = 'GET';
	const apiUrl =
		PUBLIC_PLONE_BASE_URL +
		'/' +
		params.path +
		'?expand=navigation,contextnavigation&expand.contextnavigation.topLevel=0&expand.contextnavigation.bottomLevel=6&expand.contextnavigation.name=Menu';
	console.log("apiURL: " + apiUrl);
	const response = await fetch(apiUrl, { method, headers });
	const data = await response.json();
	console.log(data);
	let pageData = {};
	pageData.title = data.title;
	pageData['description'] = data.description;
	if (data.text) {
		pageData['text'] = data.text.data;
	} else {
		pageData['text'] = '';
	}
	data['@components'].navigation.items.forEach((item) => {
		item.href = backend2FrontendUrl(item['@id']);
	});
	pageData['navigation'] = data['@components'].navigation.items;
	// data['@components'].contextnavigation.items.forEach((item) => {
	// 	item['@id'] = backend2FrontendUrl(item['@id']);
	// });
	backend2FrontendUrlInNavtree(data['@components'].contextnavigation.items);
	pageData['contextnavigation'] = data['@components'].contextnavigation;
	pageData['items'] = data.items;
	console.log("final data: ",pageData);
	return pageData;

	throw error(404, 'Not found');
}

function backend2FrontendUrlInNavtree(items) {
	items.forEach((item) => {
		item.href = backend2FrontendUrl(item.href);
    console.log(item.href)
		if (item.items) {
      console.log("traverse items of: ", item.href)
			backend2FrontendUrlInNavtree(item.items);
		}
	});
}

function backend2FrontendUrl(url) {
	return url.replace(base_url, 'http://127.0.0.1:5173');
}
