// genericki fetcher koji nam rejsva 90 posot posla, i onda cmeo njega koristiti za izgrandju drugih fetchera

export async function fetcher<T>(input: string | URL | globalThis.Request, init?: RequestInit): Promise<T> {
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