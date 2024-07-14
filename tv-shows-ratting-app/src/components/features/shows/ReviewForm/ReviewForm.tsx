'use client';

import { IReview } from "@/typings/review";
import { Box, Button, Input, Stack, Textarea, Text, Flex, Center } from "@chakra-ui/react";
import { StarRating } from "../../review/StarRating/StarRating";
import { useState } from "react";



interface IReviewFormProps {
   onAdd: (review: IReview) => void;
 }


export const ReviewForm = ({onAdd}: IReviewFormProps) => {

   const [isLocked, setLocked] = useState(false);
   const [numSelectedStars, setNumSelectedStars] = useState(0);
   const [numHoveredStars, setNumHoveredStars] = useState(0);

   const onClick = (index: number) => {
      setNumSelectedStars(index);
   }

   const onHover = (index: number) => {
      setNumHoveredStars(index);
   }

   const addShowReview = (event: any) => {
      // bez ovog bi se stranica ponovno ucitala, jer je to defoultno ponasanje stranice, mi to ne zelimo
      event.preventDefault();
   
       //uzimam podatke
       const inputText = document.getElementById("text-input") as HTMLInputElement;
       const description = inputText.value;
   
       const grade = numSelectedStars;
   
       const newReview: IReview = {
           rating: grade,
           comment: description,
       };

       //provjerim jeli unos ocjene dobar
       if (grade == 0) {
         alert("You have to Grade the Series/Movie before submitting the review");
         return;
       }

       onAdd(newReview);
       inputText.value = "";
       setNumSelectedStars(0);
   
       console.log("Adding");
   };
   
   return (
       <Stack as="form" spacing={4} maxW="container.sm" onSubmit={addShowReview}>
           <Textarea placeholder="Add review" borderRadius="xl" bg="white" fontSize="xs" color="black" id="text-input" required/>
           <Flex gap={4} align="baseline">
               <Text>Rating</Text>
               <Box maxWidth="105px" onMouseLeave={() => setLocked(true)} onMouseEnter={() => setLocked(false)}>
                  <StarRating noOfStars={isLocked? numSelectedStars : numHoveredStars} isStatic={false} onClick={onClick} onHover={onHover} />
               </Box>
            </Flex>
           <Button type="submit" bg="white" borderRadius="xl" fontSize="xs" width="70px" size="sm">Post</Button>
       </Stack>
   );
   };

   <Input placeholder="Add rating" borderRadius="xl" bg="white" fontSize="xs" color="black" width="150px" size="md" id="grade" required/>