"use client"

import { SiteLogo } from "@/components/core/SiteLogo/SiteLogo";
import { Flex, Text} from "@chakra-ui/react";
import NextLink from 'next/link';
import { usePathname} from "next/navigation";
import { LogOutButton } from "./LogOutButton/LogOutButton";


export const SidebarNavigation = () => {

   const pathname = usePathname();

   return (
      <Flex 
      direction="column" 
      height="100vh" 
      width="200px" 
      paddingTop={4}
      paddingBottom={6} 
      px={1} 
      gap={14} 
      fontSize="md"
      >
         <SiteLogo />
         <Flex direction="column" gap={3} flexGrow={1} fontSize="1.2rem">
            <Text 
            as={NextLink} 
            href="/all-shows" 
            backgroundColor={pathname == '/all-shows' ? 'purple.700' : 'transparent'}
            padding={2}
            paddingLeft={4}
            borderRadius="50px"
            width="150px"
            >
               All shows
            </Text>
            <Text 
            as={NextLink} 
            href="/top-rated"
            backgroundColor={pathname == '/top-rated' ? 'purple.700' : 'transparent'}
            padding={2}
            paddingLeft={4}
            borderRadius="50px"
            width="150px"
            >
               Top rated
            </Text>
            <Text 
            backgroundColor='transparent'
            padding={2}
            paddingLeft={4}
            borderRadius="50px"
            width="150px"
            >
               My profile
            </Text>
         </Flex>
         <LogOutButton />
      </Flex>
   );
}