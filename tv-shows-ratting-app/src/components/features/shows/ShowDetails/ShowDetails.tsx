'use client';

import { IShow } from "@/typings/show";
import { StarIcon } from "@chakra-ui/icons";
import { Card, CardBody, Heading, Stack, Text, Image, Flex, Box} from "@chakra-ui/react";


export interface IShowDetailsProps {
   show: IShow,
}

export const ShowDetails = ({show : {title, description, imageUrl, averageRating} } : IShowDetailsProps) => {

   return (
      <Card maxW='container.sm' borderRadius='2xl' color="#471ab6" overflow="hidden">
         <Image
         src={imageUrl ?? "https://fakeimg.pl/600x400?text=No+Image"}
         alt='Series profile image'
         />
         <CardBody mt={2} ml={2}>
            <Flex gap='5' justify="space-between" align="start">
               <Box pt={2}>
                  <Heading fontSize="1.7rem">
                     {title}
                  </Heading>
                  <Flex align="baseline">
                     <StarIcon color="#471ab6" height="12px" mr={1}/>
                     <Text fontSize='xs'>
                     {averageRating ? `${averageRating.toFixed(1)}/5` : "no ratings"}
                     </Text>
                  </Flex>
               </Box>
               <Text pt='2' fontSize='xs' width="300px">
                  {description}
               </Text>
            </Flex>
         </CardBody>
      </Card>
   );
}


