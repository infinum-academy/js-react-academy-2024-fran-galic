/* import { fetcher } from '@/fetchers/fetcher';
import { IShow } from '@/typings/Show.type';


export function getShows() {
	return fetcher<IShowsResponse>("/api/shows");
}

export function getTopRatedShows() {
	return fetcher<IShowsResponse>("/api/shows/top-rated");
}

export function getSpecificShow(id: string) {
	return fetcher<IShow>(`/api/shows/${id}`);
} */

import { IShow } from "@/typings/Show.type";
import { fetcher } from "./fetcher";

interface IShowsResponse {
   shows: Array<IShow>
}

export async function getShows(url: string, { arg }: { arg?: any } = {}) : Promise<IShowsResponse>{
	console.log("fetcham sa ", url);
	console.log("sa argumentima ", arg);

	return fetcher<IShowsResponse>(url, {
		method: 'GET',
	});
}
	