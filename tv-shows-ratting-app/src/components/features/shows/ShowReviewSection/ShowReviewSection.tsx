'use client';

import { Stack, Text } from "@chakra-ui/react";
import { ReviewForm } from "../ReviewForm/ReviewForm";
import { ReviewList } from "../../review/ReviewList/ReviewList";
import { IReview, IReviewList } from "@/typings/Review.type";
import { useEffect, useState } from "react";
import { swrKeys } from "@/fetchers/swrKeys";
import useSWR from "swr";
import { getReviews } from "@/mutation/reviews";
import { LoadingScreen } from "@/components/shared/LoadingScreen/LoadingScreen";

 interface IShowReviewSectionProps {
   showId: string
 }

export const ShowReviewSection = ({ showId }: IShowReviewSectionProps) => {

   const { data, error, isLoading } = useSWR(swrKeys.allReviews(showId, 1, 100) , getReviews);

   if (isLoading) {
		return <LoadingScreen />;
	}

	if (error || !data) {
		return <div>Ups something went wrong...</div>;
	}

   return (
      <Stack spacing={5}>
        <Text fontSize="1.3rem">Reviews</Text>
        <ReviewForm show_id={showId} />
        <ReviewList reviewList={data} show_id={showId}/>
      </Stack>
   );
}