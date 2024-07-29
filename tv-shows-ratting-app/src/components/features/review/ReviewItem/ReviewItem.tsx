'use client';

import { IReview } from "@/typings/Review.type"
import { Avatar, Box, Button, Card, CardBody, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, Stack, Text} from "@chakra-ui/react";
import { StarRating } from "../StarRating/StarRating";
import useSWRMutation from "swr/mutation";
import { swrKeys } from "@/fetchers/swrKeys";
import { delteReview } from "@/mutation/reviews";
import { EditReviewButton } from "./EditReviewButton/EditReviewButton";
import { ChevronDownIcon, TriangleDownIcon } from "@chakra-ui/icons";
import { Icon } from '@chakra-ui/react'
import { HiDotsVertical } from "react-icons/hi";

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
      <Card maxW='100%' borderRadius='2xl' color="white" bg="purple" fontSize='xs' p={2} > 
         <CardBody>
            <Flex columnGap="100px" direction={"row"} wrap={"wrap"} rowGap={5}>
               <Flex gap={"4"}>
                  {review.user.image_url && <Avatar size='sm' src={review.user.image_url} />}
                  <Flex direction={"column"} justify={"start"} align={"start"} gap={2}>
                     {review.user.email && <Text fontSize='sm' align="center" fontWeight={"bold"}>{review.user.email}</Text>}
                     <Flex direction={"row"} gap={2}>
                        <Text>{`${review.rating}/5`}</Text>
                        <Box flexGrow={1} gap={1}>
                           <StarRating noOfStars={review.rating} isStatic={true} onClick={() => {}} onHover={() => {}} data_testid="star-rating"/>
                        </Box>
                     </Flex>
                  </Flex>
               </Flex>
               <Text 
                  fontSize="sm" 
                  isTruncated 
                  noOfLines={3} 
                  wordBreak="break-word"
                  flexGrow={1}
                  fontWeight={"regular"}
               >
                  {review.comment}
               </Text>

                  {isMyReview && (
                     <Menu>
                        <MenuButton
                        as={IconButton}
                        aria-label="Options"
                        icon={<Icon as={HiDotsVertical} />}
                        variant="noButton"
                        />
                        <MenuList borderRadius={2} p={3} display="inline-block" minW="auto">
                           <Flex direction="column" align="flex-start"  width={"100px"} gap={0}>
                           <EditReviewButton 
                              initialComment={review.comment} 
                              mutate={mutate} 
                              show_id={show_id} 
                              review_id={review.id}
                           />
                              <Button 
                              bg="white" 
                              borderRadius='3xl' 
                              fontSize='xs' 
                              width="70px" 
                              size='sm' 
                              onClick={trigger} 
                              variant={"noButton"} 
                              color={"purple"}
                              mr="100px"
                              sx={{ textAlign: 'left', justifyContent: 'flex-start' }}
                              pl={2}
                              >
                                 DELETE
                              </Button>
                           </Flex>
                        </MenuList>
                     </Menu>
                     )}
               
            </Flex>
         </CardBody>
      </Card>

   );
}

