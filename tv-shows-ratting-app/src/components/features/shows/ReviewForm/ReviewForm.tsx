'use client';

import { IReview } from "@/typings/review";
import { Button, Input, Stack, Textarea } from "@chakra-ui/react";



interface IReviewFormProps {
   onAdd: (review: IReview) => void;
 }



export const ReviewForm = ({onAdd}: IReviewFormProps) => {

   const onClickHandler = () => {
      //dohvacanje podataka
      const inputText = document.getElementById(
        'text-input',
      ) as HTMLInputElement; //HTMLInputElement;
      const description = inputText.value;
      //
      const inputGrade = document.getElementById(
         'grade',
       ) as HTMLInputElement;
      const grade = inputGrade.value;
      // resetiraj mi text
      inputText.value = "";
      inputGrade.value = "";
      //provjera dali je grade dobar
      if(![1, 2, 3, 4, 5].includes(parseInt(grade))) return;

      const newReview: IReview = {
         //za sad se tu avatr i amil ne dodavaju je rih nemmao kako unjesti
         rating: parseInt(grade),
         comment: description,
      }
      console.log("sve radi", newReview);
      onAdd(newReview);
      console.log('Adding');
   };

   return (
      <Stack spacing='4' maxW='container.sm'>
         <Textarea placeholder='Add review' borderRadius='xl' bg='white' fontSize='xs' color="black" id="text-input"/>
         <Input placeholder='Add rating' borderRadius='xl' bg='white' fontSize='xs' color="black" width={150} size='md' id="grade"/>
         <Button bg="white" borderRadius='3xl' fontSize='xs' width={70} size='sm' onClick={onClickHandler}>Post</Button>
      </ Stack>
   );
}