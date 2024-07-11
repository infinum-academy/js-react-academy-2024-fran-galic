'use client';

import { Stack } from "@chakra-ui/react";
import { ReviewForm } from "../ReviewForm/ReviewForm";
import { ReviewList } from "../../review/ReviewList/ReviewList";
import { IReview, IReviewList } from "@/typings/review";
import { useEffect, useState } from "react";

 
 //vjeroavtno ce trebat napravit i Container komponteu za ovo ali to cu jos vidit
 const mockReviewList: IReviewList = {
   reviews: [
     {
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
     },
 
   ]
 }

 interface IShowReviewSectionProps {
   callRatting: (reviewList: IReviewList) => void;
 }

export const ShowReviewSection = ({callRatting}: IShowReviewSectionProps) => {

   const [reviewList, setReviewList] = useState(mockReviewList);

   const saveToLocalStorage = (reviewList: IReviewList) => {
      localStorage.setItem('reviewList', JSON.stringify(reviewList));
   };

   const loadFromLocalStorage = () => {
      const reviewListString = localStorage.getItem('reviewList');
      if (! reviewListString) {
        callRatting(mockReviewList);
        return mockReviewList;
      }
      callRatting(mockReviewList);
      return JSON.parse(reviewListString);
   };

   //korstimo EffectHook da osigrmao da se akcija lodajnja iz local storaage moze odvijati Asinkorno i SAMO na browseru; akcija se poziva smao kad se komponenta prvi put mounta
   useEffect(() => {
      const loadedList = loadFromLocalStorage();
      setReviewList(loadedList);
      callRatting(loadedList);
    }, []);

   const onAddReview = (review: IReview) => {
      const newReviewList: IReviewList = {
         reviews: [...reviewList.reviews, review],
      };
      setReviewList(newReviewList);
      callRatting(newReviewList);
      saveToLocalStorage(newReviewList);
   };

   const onDeleteReview = (reviewToRemove: IReview) => {
      const newReviewList: IReviewList = {
         reviews: reviewList.reviews.filter((review) => review !== reviewToRemove),
      };
      setReviewList(newReviewList);
      callRatting(newReviewList);
      saveToLocalStorage(newReviewList);
   };


   return (
      <Stack spacing={6}>
        <ReviewForm  onAdd={onAddReview}/>
        <ReviewList reviewList={reviewList} onDeleteReview={onDeleteReview}/>
      </Stack>
   );
}