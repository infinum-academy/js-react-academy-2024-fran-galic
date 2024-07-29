"use client"

import { IShow } from "@/typings/Show.type";
import { StarIcon } from "@chakra-ui/icons";
import { Card, CardBody, Heading, Stack, Image, Text, Flex } from "@chakra-ui/react";
import NextLink from 'next/link';

interface IShowCard {
   show: IShow
}

export const ShowCard = ({show : {title, image_url, average_rating, id} } : IShowCard) => {

   return (
      <Card width='165px' borderRadius='2xl' color="purple" overflow="hidden" height="250px" as={NextLink} href={`/all-shows/${id}`}>
         <Image
         src={image_url ?? "https://fakeimg.pl/600x400?text=No+Image"}
         alt='Series profile image'
         height="80%"
         objectFit="cover"
         />
         <CardBody py={2} px={3}>
            <Stack spacing='0.4'>
               <Heading fontSize='0.9rem' marginBottom="1px" whiteSpace="nowrap" isTruncated>
                  {title}
               </Heading>
               <Flex fontSize='xs' gap={1} align="baseline">
                  <StarIcon
                     color="purpule"
                  />
                  <Text textAlign="center">
                   {average_rating ? `  ${average_rating.toFixed(1)}/5` : "no ratings"}
                  </Text>
               </Flex>
            </Stack>
         </CardBody>
      </Card>
   );

}