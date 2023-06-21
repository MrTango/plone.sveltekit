import { PUBLIC_PLONE_BASE_URL } from '$env/static/public';
import { extractPageData } from "$lib/utils"

export const prerender = true;
// export const ssr = false;
export const csr = false;
export const trailingSlash = 'always';


/** @type {import('./$types').PageLoad} */
export async function load(event) {
	let headers = new Headers();
	headers.set('Accept', 'application/json');
	// headers.set('X-Requested-With', 'Fetch');
	const method = 'GET';
	let apiUrl =
		PUBLIC_PLONE_BASE_URL + '/';
  if(event.params.path != undefined){
	  apiUrl	= apiUrl + event.params.path;
  }
	apiUrl = apiUrl + '?expand=default_page&expand=navigation&expand=contextnavigation&expand.contextnavigation.topLevel=0&expand.contextnavigation.bottomLevel=6&expand.contextnavigation.name=Menu&expand=breadcrumbs';
	console.log("apiURL: " + apiUrl);
	const response = await event.fetch(apiUrl, { method, headers });
	const data = await response.json();
	console.log(data);
  return await extractPageData(data)
}
