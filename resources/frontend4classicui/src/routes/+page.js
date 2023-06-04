// import { error } from '@sveltejs/kit';
import { PUBLIC_PLONE_BASE_URL } from '$env/static/public';
import { backend2FrontendUrl, backend2FrontendUrlInNavtree } from "$lib/utils"

export const prerender = true;


/** @type {import('./$types').PageLoad} */
export async function load(event) {
	let headers = new Headers();
	// headers.set('Content-type', 'application/json');
	headers.set('Accept', 'application/json');
	// headers.set('X-Requested-With', 'Fetch');
	const method = 'GET';
	const apiUrl =
		PUBLIC_PLONE_BASE_URL +
		'/' +
		'?expand=navigation,contextnavigation&expand.contextnavigation.topLevel=0&expand.contextnavigation.bottomLevel=6&expand.contextnavigation.name=Menu';
	console.log("apiURL: " + apiUrl);
	const response = await event.fetch(apiUrl, { method, headers });
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
	data['@components'].contextnavigation.items.forEach((item) => {
		item['@id'] = backend2FrontendUrl(item['@id']);
	});
	backend2FrontendUrlInNavtree(data['@components'].contextnavigation.items);
	pageData['contextnavigation'] = data['@components'].contextnavigation;
	pageData['items'] = data.items;
	console.log("final data: ",pageData);
  // debugger
	return pageData;

	// throw error(404, 'Not found');
}
