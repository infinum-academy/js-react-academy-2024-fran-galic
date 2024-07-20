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

 
 //vjeroavtno ce trebat napravit i Container komponteu za ovo ali to cu jos vidit
 const mockReviewList: IReviewList = {
   reviews: [
/*      {
       reviewersEmail: "fran.galic7@gmail.com",
       avatar: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg",
       rating: 5,
       comment: "Vrlo zabvana i poucna serija",
     },
     {
       reviewersEmail: "pero.peric@gmail.com",
       avatar: "https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
       rating: 3,
       comment: "Nisam volio onaj dio di je Walter Slomio krevet",
     },
     {
       reviewersEmail: "ivica.kicmanovic@gmail.com",
       avatar: "https://img.freepik.com/premium-vector/man-character_665280-46970.jpg",
       rating: 4,
       comment: "Finaly some good fuc*** food",
     }, */
 
   ]
 }

 interface IShowReviewSectionProps {
   showId: string
 }

export const ShowReviewSection = ({ showId }: IShowReviewSectionProps) => {

/*    const [reviewList, setReviewList] = useState(mockReviewList);

   const saveToLocalStorage = (reviewList: IReviewList) => {
      localStorage.setItem(`reviewList/${showId}`, JSON.stringify(reviewList));
   };

   const loadFromLocalStorage = () => {
      const reviewListString = localStorage.getItem(`reviewList/${showId}`);
      if (! reviewListString) {
        onCallRatting(mockReviewList); 
        return mockReviewList;
      }
      //onCallRatting(mockReviewList);
      return JSON.parse(reviewListString);
   };

   //korstimo EffectHook da osigrmao da se akcija lodajnja iz local storaage moze odvijati Asinkorno i SAMO na browseru; akcija se poziva smao kad se komponenta prvi put mounta
   useEffect(() => {
      const loadedList = loadFromLocalStorage();
      setReviewList(loadedList);
      console.log(loadedList);
      onCallRatting(loadedList);
    }, []);

   const onAddReview = (review: IReview) => {
      const newReviewList: IReviewList = {
         reviews: [...reviewList.reviews, review],
      };
      setReviewList(newReviewList);
      onCallRatting(newReviewList);
      saveToLocalStorage(newReviewList);
   };

   const onDeleteReview = (reviewToRemove: IReview) => {
      const newReviewList: IReviewList = {
         reviews: reviewList.reviews.filter((review) => review !== reviewToRemove),
      };
      setReviewList(newReviewList);
      onCallRatting(newReviewList);
      saveToLocalStorage(newReviewList);
   };

 */

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
        <ReviewForm  onAdd={/* onAddReview */ () => {}}/>
        <ReviewList reviewList={data} onDeleteReview={/* onDeleteReview */ () => {}}/>
      </Stack>
   );
}