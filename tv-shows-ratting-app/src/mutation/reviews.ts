import { fetcher } from "@/fetchers/fetcher";
import { IReviewList } from "@/typings/Review.type";

export async function getReviews(url: string, { arg }: { arg?: any } = {}) : Promise<IReviewList>{
	return fetcher<IReviewList>(url, {
		method: 'GET',
	});
}
