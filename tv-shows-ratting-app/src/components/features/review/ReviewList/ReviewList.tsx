'use client';

import { IReview, IReviewList } from "@/typings/review";
import { Stack } from "@chakra-ui/react";
import { ReviewItem } from "../ReviewItem/ReviewItem";



interface IReviewListProps {
   reviewList: IReviewList,
   onDeleteReview: (review: IReview) => void;
}

export const ReviewList = ({reviewList, onDeleteReview}: IReviewListProps) => {

   return (
      <Stack spacing={5} direction="column" mb={7}>
      {reviewList.reviews.map((review, index) => {
         return (
            <ReviewItem
            key={index}
            review={review}
            onDelete={onDeleteReview}
            />
         );
      })}
      </Stack>
   );
}