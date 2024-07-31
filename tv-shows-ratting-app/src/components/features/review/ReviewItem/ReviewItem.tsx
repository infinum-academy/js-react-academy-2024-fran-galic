'use client';

import { IReview } from "@/typings/Review.type"
import { Avatar, Box, Button, Card, CardBody, Flex, Stack, Text} from "@chakra-ui/react";
import { StarRating } from "../StarRating/StarRating";
import useSWRMutation from "swr/mutation";
import { swrKeys } from "@/fetchers/swrKeys";
import { delteReview } from "@/mutation/reviews";
import { EditReviewButton } from "./EditReviewButton/EditReviewButton";

interface IReviewItemProps {
   review: IReview,
   mutate: () => Promise<any>;
   show_id: string
}

export const ReviewItem = ({review, mutate, show_id} : IReviewItemProps) => {

  //dio za useWSRMuation
  const { trigger } = useSWRMutation(swrKeys.deleteReviews(review.id) , delteReview,
   {
     onSuccess: () => {
       console.log("Reviews se brisu i onda revaliditiraiju");
       mutate();
     },
   }
 );

 //dohvacam korisnicke podatke:
 const userId = localStorage.getItem('user-id');

 const isMyReview =
  review.user.id == -1 ||
  userId == review.user?.id.toString();


   return (
      <Card maxW='container.sm' borderRadius='2xl' color="white" bg="purple.800" fontSize='xs' gap={4}> 
         <CardBody>
            <Stack spacing='4'>
            <Flex gap={5} alignItems="center">
               {review.user.image_url && <Avatar size='sm' src={review.user.image_url} />}
               {review.user.email && <Text fontSize='sm' align="center">{review.user.email}</Text>}
            </Flex>
               <Text fontSize='sm'>{review.comment}</Text>
               <Flex align={"center"} gap={2}>
                  <Box flexGrow={1}>
                  <StarRating noOfStars={review.rating} isStatic={true} onClick={() => {}} onHover={() => {}} data_testid="star-rating"/>
                  </Box>
                  {isMyReview && (
                     <>
                        <Button bg="white" borderRadius='3xl' fontSize='xs' width="70px" size='sm' onClick={trigger}>Remove</Button>
                        <EditReviewButton initialComment={review.comment} mutate={mutate} show_id={show_id} review_id={review.id}/>
                     </>
                     )}
               </Flex>
            </Stack>
         </CardBody>
      </Card>

   );
}