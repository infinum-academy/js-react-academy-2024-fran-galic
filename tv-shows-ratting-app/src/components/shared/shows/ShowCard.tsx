"use client"

import { IShow } from "@/typings/show";
import { StarIcon } from "@chakra-ui/icons";
import { Card, CardBody, Heading, Stack, Image, Text, Flex } from "@chakra-ui/react";
import NextLink from 'next/link';

interface IShowCard {
   show: IShow,
}

export const ShowCard = ({show : {title, imageUrl, averageRating, id} } : IShowCard) => {

   return (
      <Card width='165px' borderRadius='2xl' color="#471ab6" overflow="hidden" height="250px" as={NextLink} href={`/all-shows/${id}`}>
         <Image
         src={imageUrl ?? "https://fakeimg.pl/600x400?text=No+Image"}
         alt='Series profile image'
         height="80%"
         objectFit="cover"
         />
         <CardBody py={2} px={3}>
            <Stack spacing='0.4'>
               <Heading fontSize='0.9rem' marginBottom="1px">
                  {title}
               </Heading>
               <Flex fontSize='xs' gap={1} align="baseline">
                  <StarIcon
                     color="#471ab6"
                  />
                  <Text textAlign="center">
                   {averageRating ? `  ${averageRating.toFixed(1)}/5` : "no ratings"}
                  </Text>
               </Flex>
            </Stack>
         </CardBody>
      </Card>
   );

}