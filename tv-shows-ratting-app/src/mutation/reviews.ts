import { fetcher } from "@/fetchers/fetcher";
import { ICreateReviewData, IReviewList } from "@/typings/Review.type";

export async function getReviews(url: string, { arg }: { arg?: any } = {}) : Promise<IReviewList>{
	return fetcher<IReviewList>(url, {
		method: 'GET',
	});
}

export async function postReview(url: string, { arg }: { arg: ICreateReviewData } ){
	return fetcher<IReviewList>(url, {
		method: 'POST',
      body: JSON.stringify(arg)
	});
}
