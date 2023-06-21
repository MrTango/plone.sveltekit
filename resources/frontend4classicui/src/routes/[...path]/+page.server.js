import { PUBLIC_PLONE_BASE_URL } from '$env/static/public';
import { backend2FrontendSlug } from '$lib/utils';

/** @type {import('./$types').EntryGenerator} */
export async function entries() {
  const query = {
    "limit": 10000,
    "query": [
      {
        'i': 'path',
        'o': 'plone.app.querystring.operation.string.path',
        'v': '/',
      }
    ]
  }
	let headers = new Headers();
	headers.set('Accept', 'application/json');
	const method = 'POST';
	let apiUrl = PUBLIC_PLONE_BASE_URL + '/@querystring-search';
	console.log("apiURL: " + apiUrl);
  // debugger
	const response = await fetch(apiUrl, { method, headers,
    body: JSON.stringify(query)
  });
	const data = await response.json();
  let items = data.items || [];
  let entries = []
  items.forEach(item => {
    entries.push({path: backend2FrontendSlug(item['@id'])})
  });
  console.log(entries)
  return entries;
}

export const prerender = true;

