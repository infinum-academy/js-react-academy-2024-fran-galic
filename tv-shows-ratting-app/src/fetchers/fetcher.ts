
export async function fetcher<T>(input: string | URL | globalThis.Request, init?: RequestInit): Promise<T> {
	let data;
	const oldHeadersString = localStorage.getItem('userHeaders');
	console.log("Headeri iz LocalStorage: ", oldHeadersString);
	const oldHeaders = oldHeadersString ? JSON.parse(oldHeadersString) : undefined;
	console.log(oldHeaders);

	try {
 		const response = await fetch(input, {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				...oldHeaders,
			},
			...init,
		}); 

		// Provjeravamo je li odgovor uspješan
		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}

		// Provjeravamo je li odgovor prazan (204 No Content)
		const isNoContent = response.status === 204;

		if (!isNoContent) {
			// Čekamo na parsiranje tijela odgovora kao JSON
			data = await response.json();
			console.log("Podaci iz tijela odgovora: ", data);
		}

		// Ažuriramo lokalnu pohranu novim zaglavljima
		const newHeaders = {
			'access-token': response.headers.get('access-token'),
			client: response.headers.get('client'),
			'token-type': response.headers.get('token-type'),
			expiry: response.headers.get('expiry'),
			uid: response.headers.get('uid'),
		};
		console.log("Podaci iz Headera odgovora: ", newHeaders);
		localStorage.setItem('userHeaders', JSON.stringify(newHeaders));
	} catch (error) {
		throw new Error(`${error}`);
	}

	// Vraćamo podatke ili undefined ako nije bilo sadržaja
	return data;
}