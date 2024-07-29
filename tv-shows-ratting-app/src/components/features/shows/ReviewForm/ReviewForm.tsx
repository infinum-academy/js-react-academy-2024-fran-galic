'use client';

import React, { useState } from 'react';
import { Box, Button, Input, Stack, Textarea, Text, Flex, Spinner, FormControl, FormErrorMessage } from "@chakra-ui/react";
import { StarRating } from "../../review/StarRating/StarRating";
import { useForm } from "react-hook-form";
import { ICreateReviewData, IReview } from "@/typings/Review.type";
import useSWRMutation from 'swr/mutation';
import { swrKeys } from '@/fetchers/swrKeys';
import { postReview } from '@/mutation/reviews';
import { mutate } from 'swr';

interface IReviewFormProps {
  show_id: string
}

interface IReviewFormInputs {
  grade: number,
  description: string,
}

export const ReviewForm = ({ show_id }: IReviewFormProps) => {

  //stanja za zvijezde
  const [isLocked, setLocked] = useState(false);
  const [numSelectedStars, setNumSelectedStars] = useState(0);
  const [numHoveredStars, setNumHoveredStars] = useState(0);

  const { register, handleSubmit, setValue, formState: { errors, isSubmitting }, clearErrors } = useForm<IReviewFormInputs>();

  //dio za useWSRMuation
  const { trigger } = useSWRMutation(swrKeys.reviews , postReview,
    {
      onSuccess: () => {
        //ukoliko si uspio postat na server novi Review, pozovi mutate koji ce revliditirat stvari u zajednickom SWR cashu i samim time ce se stranica re Renderat
        console.log("Reviews se revaliditiraju");
        mutate(swrKeys.allReviews(show_id, 1, 100));
      },
    }
  ); 

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
  const addShowReview = async (data: IReviewFormInputs) => {
    const newReviewData: ICreateReviewData = {
      comment: data.description,
      rating: data.grade,
      show_id: show_id
    };
    
    setValue('grade', 0);
    setNumSelectedStars(0);
    setValue('description', "");

    await trigger(newReviewData);
    console.log("Adding");
  };

  return (
    <Flex direction={"column"} justify={"start"} as="form" gap={4} onSubmit={handleSubmit(addShowReview)}>
      <FormControl isInvalid={!!errors.description} flexGrow={1}>
        <Textarea 
          placeholder="Add review" 
          borderRadius={2}
          bg="white" 
          fontSize={5} 
          color="purple" 
          id="text-input" 
          {...register('description', { required: 'Description is required' })} 
          isDisabled={isSubmitting}
          width={"100%"}
          pt={7}
          _placeholder={{ color: 'purple' }}
          borderColor="purple"
          borderWidth={2}  // Dodano svojstvo za deblji obrub
          _hover={{ borderColor: "purple" }}
          _focus={{ borderColor: "purple", boxShadow: 'none' }}
          _invalid={{ borderColor: "pink" }}
        />
        <FormErrorMessage color="pink">{errors.description?.message}</FormErrorMessage>
      </FormControl>

      <Flex justify={"space-between"} pl={10} pt={2} align={"center"}>
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
            {errors.grade && <FormErrorMessage color="pink">{errors.grade.message}</FormErrorMessage>}
            <Input type="hidden" {...register('grade', { 
              required: 'Rating is required', 
              validate: value => value > 0 || 'You must select a rating'
            })} /> {/* hidden input za rating */}
          </FormControl>

        <Button 
          type="submit" 
          isDisabled={isSubmitting}
          variant={"default"}
        >
          {isSubmitting ? <Spinner /> : 'Post'}
        </Button>
      </Flex>
    </Flex>
  );
};