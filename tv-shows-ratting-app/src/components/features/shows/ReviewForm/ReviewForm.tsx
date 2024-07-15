'use client';

import { IReview } from "@/typings/review";
import { Box, Button, Input, Stack, Textarea, Text, Flex, Center, Spinner } from "@chakra-ui/react";
import { StarRating } from "../../review/StarRating/StarRating";
import { useState } from "react";
import { useForm } from "react-hook-form";



interface IReviewFormProps {
   onAdd: (review: IReview) => void;
 }

interface IReviewFormInputs {
   grade: number,
   description: string,
}

export const ReviewForm = ({onAdd}: IReviewFormProps) => {

   const [isLocked, setLocked] = useState(false);
   const [numSelectedStars, setNumSelectedStars] = useState(0);
   const [numHoveredStars, setNumHoveredStars] = useState(0);
   //useForm Hook:
   const { register, handleSubmit, setValue, formState: { isSubmitting }} = useForm<IReviewFormInputs>();

   const onClick = (index: number) => {
      setNumSelectedStars(index);
      setValue('grade', index); // Ručno postavljanje vrijednosti
   }

   const onHover = (index: number) => {
      setNumHoveredStars(index);
   }

   const addShowReview = (data: IReviewFormInputs) => {
   
       const newReview: IReview = {
           rating: data.grade,
           comment: data.description,
       };

       //provjerim jeli unos ocjene dobar
       if (data.grade == 0) {
         alert("You have to Grade the Series/Movie before submitting the review");
         return;
       }

       onAdd(newReview);
       setValue('grade', 0);
       setNumSelectedStars(0);
       setValue('description', "");
   
       console.log("Adding");
   };
   
   return (
       <Stack as="form" spacing={4} maxW="container.sm" onSubmit={handleSubmit(addShowReview)}>
           <Textarea 
           placeholder="Add review" 
           borderRadius="xl" 
           bg="white" 
           fontSize="xs" 
           color="black" 
           id="text-input" 
           required {...register('description')} 
           isDisabled={isSubmitting}
           />
           <Flex gap={4} align="baseline">
               <Text>Rating</Text>
               <Box maxWidth="105px" onMouseLeave={() => setLocked(true)} onMouseEnter={() => setLocked(false)}>
                  <StarRating noOfStars={isLocked? numSelectedStars : numHoveredStars} isStatic={isSubmitting? true : false} onClick={onClick} onHover={onHover} data_testid="star-rating"/>
               </Box>
            </Flex>
           <Button 
           type="submit" 
           bg="white" 
           borderRadius="xl" 
           fontSize="xs" 
           width="70px" 
           size="sm" 
           isDisabled={isSubmitting}
           >
           {isSubmitting ? <Spinner /> : 'Post'}
           </Button>
           <Input type="hidden" {...register('grade')} /> {/* Skriveni input za registraciju ocjene */}
       </Stack>
   );
   };
