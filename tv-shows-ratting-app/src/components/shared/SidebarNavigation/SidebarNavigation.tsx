"use client"

import { SiteLogo } from "@/components/core/SiteLogo/SiteLogo";
import { Button, Center, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, useDisclosure } from "@chakra-ui/react";
import NextLink from 'next/link';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export const SidebarNavigation = () => {

   const [path, setPath] = useState(window.location.pathname);
   //za Modal prilikom Log out-a
   const { isOpen, onOpen, onClose } = useDisclosure();
   const router = useRouter();

   useEffect(() => {
     setPath(window.location.pathname);
     console.log("Trigeralo se", window.location.pathname);
   }, []);

   return (
      <>
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
         <Flex direction="column" gap={3} flexGrow={1} fontSize="1.2rem">
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
         <Button width="50%" onClick={onOpen}>
            Log out
         </Button>
      </Flex>

      <Center>
            <Modal isOpen={isOpen} onClose={onClose}  >
               <ModalOverlay />
               <ModalContent borderRadius="20px">
                  <ModalBody>
                     <Text fontSize='xl'>
                     Are you sure you want to log out?
                     </Text>
                  </ModalBody>

                  <ModalFooter>
                     <Button bg={"#371687"} color={"white"} mr={3} onClick={onClose} _hover={{ bg: "#5a2ea6" }}>
                        I want to stay
                     </Button>
                     <Button 
                     variant='ghost' 
                     onClick={() => {
                        localStorage.clear();
                        onClose();
                        router.push('/login');
                     }}
                     >
                     Yes Log me out
                     </Button>
                  </ModalFooter>
               </ModalContent>
            </Modal>
         </Center>
      </>

   );
}