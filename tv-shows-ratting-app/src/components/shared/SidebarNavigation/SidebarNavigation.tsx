"use client"

import { SiteLogo } from "@/components/core/SiteLogo/SiteLogo";
import { Flex, Stack, Text } from "@chakra-ui/react";
import NextLink from 'next/link';
import { useEffect, useState } from "react";


export const SidebarNavigation = () => {

   const [path, setPath] = useState(window.location.pathname);

   useEffect(() => {
     setPath(window.location.pathname);
     console.log("Trigeralo se", window.location.pathname);
   }, []);

   return (
      <Flex 
      direction="column" 
      height="100%" 
      width="200px" 
      py={4} 
      px={1} 
      gap={14} 
      fontSize="md"
      >
         <SiteLogo />
         <Flex direction="column" gap={3} flexGrow={1}>
            <Text as={NextLink} href="/all-shows" textDecoration={path == '/all-shows' ? 'underline' : ''}>
               All shows
            </Text>
            <Text as={NextLink} href="/top-rated" textDecoration={path == '/top-rated' ? 'underline' : ''}>
               Top rated
            </Text>
            <Text>
               My profile
            </Text>
         </Flex>
         <Text>
            Log out
         </Text>
      </Flex>
   );
}