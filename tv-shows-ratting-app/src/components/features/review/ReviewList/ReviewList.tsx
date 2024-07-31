 'use client';

import React, { useState } from 'react';
import { IReview, IReviewList } from "@/typings/Review.type";
import { Stack, Button, Flex, Text } from "@chakra-ui/react";
import { ReviewItem } from "../ReviewItem/ReviewItem";
import { mutate } from 'swr';
import { swrKeys } from '@/fetchers/swrKeys';

interface IReviewListProps {
  reviewList: IReviewList,
  show_id: string,
}

export const ReviewList = ({ reviewList, show_id }: IReviewListProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 4;

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviewList.reviews.slice(indexOfFirstReview, indexOfLastReview);

  const totalPages = Math.ceil(reviewList.reviews.length / reviewsPerPage);

  const handleNextPage = () => {
   //u ovoj funkciji koristimo zapravo currentPage koji se predaje kao argument setCurrentPage() sma od sebe
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <Stack spacing={5} direction="column" mb={7}>
      {currentReviews.map((review, index) => {
        return (
          <ReviewItem
            key={index}
            review={review} 
            //pitanje je dlai to i tkaode rmutira podatke, mislim d abi trbealo raditi
            mutate={() => { return mutate(swrKeys.allReviews(show_id, 1, 100))}}    
            show_id= {show_id}      
          />
        );
      })}
      {totalPages > 1 && (
        <Flex justifyContent="end" mt={2} align={"center"}>
          <Button onClick={handlePrevPage} isDisabled={currentPage === 1}>
            Previous
          </Button>
          <Text mx={4} fontSize="lg">
            Page {currentPage} of {totalPages}
          </Text>
          <Button onClick={handleNextPage} isDisabled={currentPage === totalPages} ml={2}>
            Next
          </Button>
        </Flex>
      )}
    </Stack>
  );
};

