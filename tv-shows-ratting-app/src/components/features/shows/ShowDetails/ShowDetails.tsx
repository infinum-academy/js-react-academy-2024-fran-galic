'use client';

import { IShow } from "@/typings/show";
import { Card, CardBody, Heading, Stack, Text, Image} from "@chakra-ui/react";


export interface IShowDetailsProps {
   show: IShow,
   avgRatting?: number
}

export const ShowDetails = ({show : {title, description, imageUrl}, avgRatting} : IShowDetailsProps) => {

   return (
      <Card maxW='container.sm' borderRadius='2xl' color="#471ab6" overflow="hidden">
         <Image
         src={imageUrl ?? "https://fakeimg.pl/600x400?text=No+Image"}
         alt='Series profile image'
         />
         <CardBody mt={2}>
            <Stack spacing='2'>
               <Heading size='lg'>
                  {title}
               </Heading>
               <Text pt='2' fontSize='xs'>
                  {description}
               </Text>
               <Text fontSize='xs'>
                  {avgRatting ? `${avgRatting.toFixed(1)}/5` : "no ratings"}
               </Text>
            </Stack>
         </CardBody>
      </Card>
   );
}


