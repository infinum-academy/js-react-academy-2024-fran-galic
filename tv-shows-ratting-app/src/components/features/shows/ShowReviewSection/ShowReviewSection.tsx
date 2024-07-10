'use client';

import { Stack } from "@chakra-ui/react";
import { ReviewForm } from "../ReviewForm/ReviewForm";
import { ReviewList } from "../../review/ReviewList/ReviewList";
import { IReviewList } from "@/typings/review";

 
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

export const ShowReviewSection = () => {

   return (
      <Stack spacing={6}>
        <ReviewForm />
        <ReviewList reviewList={mockReviewList}/>
      </Stack>
   );
}