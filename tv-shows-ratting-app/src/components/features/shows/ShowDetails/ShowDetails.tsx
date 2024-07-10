import { IShow, IShowProps } from "@/typings/show";
import { Box, Card, CardBody, Heading, Stack, StackDivider, Text, Image, CardHeader} from "@chakra-ui/react";


export const ShowDetails = ({show : {title, description, averageRating, imageUrl}} : IShowProps) => {

   return (
      <Card maxW='container.sm' borderRadius='2xl' color="#471ab6" >
         <Image
         src={imageUrl === undefined ? "https://fakeimg.pl/600x400?text=No+Image+:(" : imageUrl}
         alt='Series profile image'
         borderTopLeftRadius='2xl'
         borderTopRightRadius='2xl'
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
                  {averageRating === undefined ? "no ratings" : averageRating.toFixed(1) + "/5"}
               </Text>
            </Stack>
         </CardBody>
      </Card>
   );
}


