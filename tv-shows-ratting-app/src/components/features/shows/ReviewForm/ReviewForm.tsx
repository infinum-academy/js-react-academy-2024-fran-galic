'use client';

import { IReview } from "@/typings/review";
import { Button, Input, Stack, Textarea } from "@chakra-ui/react";



interface IReviewFormProps {
   onAdd: (review: IReview) => void;
 }


export const ReviewForm = ({onAdd}: IReviewFormProps) => {

   const addShowReview = (event: any) => {
      // bez ovog bi se stranica ponovno ucitala, jer je to defoultno ponasanje stranice, mi to ne zelimo
      event.preventDefault();
   
       //uzimam podatke
       const inputText = document.getElementById("text-input") as HTMLInputElement;
       const description = inputText.value;
   
       const inputGrade = document.getElementById("grade") as HTMLInputElement;
       const grade = inputGrade.value;
   
       const newReview: IReview = {
           rating: parseInt(grade),
           comment: description,
       };

       //provjerim jeli unos ocjene dobar
       if (![1, 2, 3, 4, 5].includes(parseInt(grade))) {
         alert("Ratting must be between 1 and 5");
         inputGrade.value = "";
         return;
       }

       onAdd(newReview);
       inputText.value = "";
       inputGrade.value = "";
   
       console.log("Adding");
   };
   
   return (
       <Stack as="form" spacing={4} maxW="container.sm" onSubmit={addShowReview}>
           <Textarea placeholder="Add review" borderRadius="xl" bg="white" fontSize="xs" color="black" id="text-input" required/>
           <Input placeholder="Add rating" borderRadius="xl" bg="white" fontSize="xs" color="black" width="150px" size="md" id="grade" required/>
           <Button type="submit" bg="white" borderRadius="xl" fontSize="xs" width="70px" size="sm">Post</Button>
       </Stack>
   );
   };