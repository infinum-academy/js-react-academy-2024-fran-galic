'use client';

import React, { useState } from 'react';
import { Box, Button, Input, Stack, Textarea, Text, Flex, Spinner, FormControl, FormErrorMessage } from "@chakra-ui/react";
import { StarRating } from "../../review/StarRating/StarRating";
import { useForm } from "react-hook-form";
import { ICreateReviewData, IEditReviewData, IReview } from "@/typings/Review.type";
import useSWRMutation from 'swr/mutation';
import { swrKeys } from '@/fetchers/swrKeys';
import { postReview } from '@/mutation/reviews';
import { mutate } from 'swr';

interface IEditReviewFormProps {
  show_id: string
  initialComment: string
  onClose: () => void
  trigger: (data: IEditReviewData) => void
}

interface IReviewFormInputs {
  grade: number,
  description: string,
}

export const EditReviewForm = ({ show_id, initialComment, onClose, trigger }: IEditReviewFormProps) => {

  //stanja za zvijezde
  const [isLocked, setLocked] = useState(false);
  const [numSelectedStars, setNumSelectedStars] = useState(0);
  const [numHoveredStars, setNumHoveredStars] = useState(0);

  const { register, handleSubmit, setValue, formState: { errors, isSubmitting }, clearErrors } = useForm<IReviewFormInputs>();


  //funkcije za star rewiew
  const onClick = (index: number) => {
    setNumSelectedStars(index);
    setValue('grade', index); 
    clearErrors('grade');
  }
  const onHover = (index: number) => {
    setNumHoveredStars(index);
  }

  // 2. dio za useWSRMuation
  const editReview = async (data: IReviewFormInputs) => {
    const editedReviewData: IEditReviewData = {
      comment: data.description,
      rating: data.grade,
      show_id: show_id
    };
    
    setValue('grade', 0);
    setNumSelectedStars(0);
    setValue('description', "");

    await trigger(editedReviewData);
    console.log("Patching the review has finnshed");
    onClose();
  };

  return (
    <Stack as="form" spacing={4} maxW="container.sm" onSubmit={handleSubmit(editReview)}>
      <FormControl isInvalid={!!errors.description}>
        <Textarea 
          placeholder="Add review" 
          borderRadius="xl" 
          bg="white" 
          fontSize="sm" 
          color="black" 
          id="text-input"
          {...register('description', { required: 'Description is required' })} 
          isDisabled={isSubmitting}
          defaultValue={initialComment}
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
              color = "#280454"
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
      <Flex gap={3} justify={"end"} pb={2}>
         <Button 
         type="submit" 
         bg="#280454" 
         borderRadius="100px" 
         fontSize="sm" 
         width="100px"
         height="40px" 
         size="sm" 
         isDisabled={isSubmitting}
         color={"white"}
         _hover={{
            backgroundColor: "#280454", 
            opacity: 0.9, 
          }}
         >
         {isSubmitting ? <Spinner /> : 'Commit'}
         </Button>
         <Button 
         bg="#280454" 
         borderRadius="100px" 
         fontSize="sm" 
         width="100px"
         height="40px" 
         size="sm" 
         isDisabled={isSubmitting}
         color={"white"}
         _hover={{
            backgroundColor: "#280454", 
            opacity: 0.9, 
          }}
          onClick={onClose}
         >
            Close
         </Button>
      </Flex>
    </Stack>
  );
};