export interface IReview {
   reviewersEmail?: string,
   avatar?: string,
   rating: number,
   comment: string,
}

export interface IReviewList {
   reviews: Array<IReview>
}