'use client';

import { IReview, IReviewList } from "@/typings/review";
import { Flex } from "@chakra-ui/react";
import { ReviewItem } from "../ReviewItem/ReviewItem";



interface IReviewListProps {
   reviewList: IReviewList,
}

export const ReviewList = ({reviewList}: IReviewListProps) => {

   return (
      <Flex gap={5} direction="column">
      {reviewList.reviews.map((review, index) => {
        return (
            <ReviewItem 
            key={index}
            review= {review} />
        );
      })}
    </Flex>
   );
}