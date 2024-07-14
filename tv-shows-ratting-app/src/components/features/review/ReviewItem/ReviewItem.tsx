'use client';

import { IReview } from "@/typings/review"
import { Avatar, Box, Button, Card, CardBody, Flex, Stack, Text} from "@chakra-ui/react";
import { StarRating } from "../StarRating/StarRating";



interface IReviewItemProps {
   review: IReview,
   onDelete: (review: IReview) => void;
}


export const ReviewItem = ({review, onDelete} : IReviewItemProps) => {

   return (
      <Card maxW='container.sm' borderRadius='2xl' color="white" bg="purple.800" fontSize='xs' gap={4}> 
         <CardBody>
            <Stack spacing='4'>
               {
                  // uvjetoavano renderanje
                  review.avatar !== undefined && (
                        <Flex gap={5} alignContent="center">
                           <Avatar size='sm' src= {review.avatar} />
                           <Text fontSize='sm' alignContent="center">{review.reviewersEmail !== undefined ? review.reviewersEmail : ""}</Text>
                        </Flex>
                  )
               }
               <Text fontSize='sm'>{review.comment}</Text>
               <StarRating noOfStars={review.rating} isStatic={true} onClick={() => {}} onHover={() => {}} />
               <Button bg="white" borderRadius='3xl' fontSize='xs' width="70px" size='sm' onClick={() => {onDelete(review)}}>Remove</Button>
            </Stack>
         </CardBody>
      </Card>



   );
}