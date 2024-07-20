import { fetcher } from '@/fetchers/fetcher';
import { IShow } from '@/typings/Show.type';

interface IShowsResponse {
   shows: Array<IShow>
}

export function getShows() {
	return fetcher<IShowsResponse>("/api/shows");
}

export function getTopRatedShows() {
	return fetcher<IShowsResponse>("/api/shows/top-rated");
}

export function getSpecificShow(id: string) {
	return fetcher<IShow>(`/api/shows/${id}`);
}