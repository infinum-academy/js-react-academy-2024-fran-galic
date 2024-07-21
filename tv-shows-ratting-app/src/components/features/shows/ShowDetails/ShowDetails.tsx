'use client';

import { IShow } from "@/typings/Show.type";
import { StarIcon } from "@chakra-ui/icons";
import { Card, CardBody, Heading, Stack, Text, Image, Flex, Box} from "@chakra-ui/react";


export interface IShowDetailsProps {
   show: IShow,
}

export const ShowDetails = ({show : {title, description, image_url, average_rating} } : IShowDetailsProps) => {

   return (
      <Card maxW='container.sm' borderRadius='2xl' color="#471ab6" overflow="hidden">
         <Image
         src={image_url ?? "https://fakeimg.pl/600x400?text=No+Image"}
         alt='Series profile image'
         maxHeight="300px"
         objectFit="cover"
         width='container.sm'
         />
         <CardBody ml={2}>
            <Flex gap='5' justify="space-between" align="start">
               <Box pt={2}>
                  <Heading fontSize="1.7rem">
                     {title}
                  </Heading>
                  <Flex align="baseline">
                     <StarIcon color="#471ab6" height="12px" mr={1}/>
                     <Text fontSize='xs'>
                     {average_rating ? `${average_rating.toFixed(1)}/5` : "no ratings"}
                     </Text>
                  </Flex>
               </Box>
               <Text pt='2' fontSize='sm' width="300px">
                  {description}
               </Text>
            </Flex>
         </CardBody>
      </Card>
   );
}


