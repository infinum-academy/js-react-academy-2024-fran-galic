import { Button, Input, Stack, Textarea } from "@chakra-ui/react";



export const ReviewForm = () => {

   return (
      <Stack spacing='4' maxW='container.sm'>
         <Textarea placeholder='Add review' borderRadius='xl' bg='white' fontSize='xs' color="black"/>
         <Input placeholder='Add rating' borderRadius='xl' bg='white' fontSize='xs' color="black" width={150} size='md'/>
         <Button bg="white" borderRadius='3xl' fontSize='xs' width={70}>Post</Button>
      </ Stack>
   );
}