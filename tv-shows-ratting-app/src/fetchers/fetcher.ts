// genericki fetcher koji nam rejsva 90 posot posla, i onda cmeo njega koristiti za izgrandju drugih fetchera

/* export async function fetcher<T>(input: string | URL | globalThis.Request, init?: RequestInit): Promise<T> {
	try {
		const response = await fetch(input, init);

		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}

		return response.json();
	} catch (error) {
		throw new Error(`Response status: ${error}`);
	}
}
 */

 export async function fetcher<T>(input: string | URL | globalThis.Request, init?: RequestInit): Promise<T> {
	let data;
	const oldHeadersString = localStorage.getItem('userHeaders');
	const oldHeaders =  oldHeadersString ? JSON.parse(oldHeadersString) : undefined;

	try {
		const response = await fetch(input, {
			headers: {
				...{'Content-Type': 'application/json'},
				...oldHeaders

			},
			...init,
		});

		// nemanista u response body ako dobijemo 204, ali je zahtjec obradne uspjesno
		const isNoContent = response.status === 204;

		if (!isNoContent) {
			//podaci u tijelu
			data = response.json();
			console.log("Podaci iz tijela: ", data);
		}

		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}

		// ako je i dalje sve okej:
		const newHeaders = {
			accessToken: response.headers.get('access-token'),
			client: response.headers.get('client'),
			tokenType: response.headers.get('token-type'),
			expiry: response.headers.get('expiry'),
			uid: response.headers.get('uid'),
		 };
		console.log("Podaci iz Headera odgovora: ", newHeaders);
		localStorage.setItem('userHeaders', JSON.stringify(newHeaders));


	} catch (error) {
		throw new Error(`${error}`);
	}

	//bit ce ili neki objekt s podacima ili undefined ako nije bilo sadrzaja unutra ili ce se prije svega tog abaciit eroor
	return data;
} 