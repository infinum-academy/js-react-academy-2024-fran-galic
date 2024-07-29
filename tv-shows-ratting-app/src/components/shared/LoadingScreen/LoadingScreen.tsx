"use client"

import { SiteLogo } from "@/components/core/SiteLogo/SiteLogo";
import { Flex, Spinner, Text } from "@chakra-ui/react";


export const LoadingScreen = () => {

   return (
      <Flex 
         justify="center"
         align="center"
         height="100vh"
         width="100vw"
         direction="column"
         gap={5}
      >
         <Text>The page is loading</Text>
         <Spinner
         thickness='4px'
         speed='0.65s'
         emptyColor='lightpurple'
         color='pink'
         size='xl'
         />
      </Flex>
   );

}