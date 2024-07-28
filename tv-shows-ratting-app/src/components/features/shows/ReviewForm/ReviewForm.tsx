'use client';

import React, { useState } from 'react';
import { Box, Button, Input, Stack, Textarea, Text, Flex, Spinner, FormControl, FormErrorMessage } from "@chakra-ui/react";
import { StarRating } from "../../review/StarRating/StarRating";
import { useForm } from "react-hook-form";
import { IReview } from "@/typings/Review.type";

interface IReviewFormProps {
  onAdd: (review: IReview) => void;
}

interface IReviewFormInputs {
  grade: number,
  description: string,
}

export const ReviewForm = ({ onAdd }: IReviewFormProps) => {
  const [isLocked, setLocked] = useState(false);
  const [numSelectedStars, setNumSelectedStars] = useState(0);
  const [numHoveredStars, setNumHoveredStars] = useState(0);

  const { register, handleSubmit, setValue, formState: { errors, isSubmitting }, clearErrors } = useForm<IReviewFormInputs>();

  const onClick = (index: number) => {
    setNumSelectedStars(index);
    setValue('grade', index); 
    clearErrors('grade');
  }

  const onHover = (index: number) => {
    setNumHoveredStars(index);
  }

  const addShowReview = (data: IReviewFormInputs) => {
    const newReview: IReview = {
      rating: data.grade,
      comment: data.description,
    };

    onAdd(newReview);
    setValue('grade', 0);
    setNumSelectedStars(0);
    setValue('description', "");

    console.log("Adding");
  };

  return (
    <Stack as="form" spacing={4} maxW="container.sm" onSubmit={handleSubmit(addShowReview)}>
      <FormControl isInvalid={!!errors.description}>
        <Textarea 
          placeholder="Add review" 
          borderRadius="xl" 
          bg="white" 
          fontSize="xs" 
          color="black" 
          id="text-input" 
          {...register('description', { required: 'Description is required' })} 
          isDisabled={isSubmitting}
        />
        <FormErrorMessage>{errors.description?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.grade}>
        <Flex gap={4} align="baseline">
          <Text>Rating</Text>
          <Box maxWidth="105px" onMouseLeave={() => setLocked(true)} onMouseEnter={() => setLocked(false)}>
            <StarRating 
              noOfStars={isLocked ? numSelectedStars : numHoveredStars} 
              isStatic={isSubmitting} 
              onClick={onClick} 
              onHover={onHover} 
              data_testid="star-rating"
            />
          </Box>
        </Flex>
        {errors.grade && <FormErrorMessage>{errors.grade.message}</FormErrorMessage>}
        <Input type="hidden" {...register('grade', { 
          required: 'Rating is required', 
          validate: value => value > 0 || 'You must select a rating'
        })} /> {/* hidden input za rating */}
      </FormControl>
      <Button 
        type="submit" 
        bg="white" 
        borderRadius="100px" 
        fontSize="sm" 
        width="100px"
        height="40px" 
        size="sm" 
        isDisabled={isSubmitting}
      >
        {isSubmitting ? <Spinner /> : 'Post'}
      </Button>
    </Stack>
  );
};