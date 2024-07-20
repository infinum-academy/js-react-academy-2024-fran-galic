// !!! treba jos rejsit onu jendu stavr sa navigacijama i sa local storgae da cisitti smao odgovarjauce podatke

import { swrKeys } from "@/fetchers/swrKeys";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { mutate } from "swr";

export const LogOutButton = () => {

   //za Modal prilikom Log out-a
   const { isOpen, onOpen, onClose } = useDisclosure();
   const router = useRouter();

   return (
   <>
      <Button width="50%" onClick={onOpen}>
         Log out
      </Button>
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
                     // Trebat cu ispravit   !!!!     -> problme za bolje koristenje swr i swrMutaiton da s ene krostie u isto vrijeme
                     onClick={() => {
                        localStorage.removeItem('userHeaders');
                        onClose()
                        router.push('/login');
                     }}
                     >
                     Yes Log me out
                     </Button>
                  </ModalFooter>
               </ModalContent>
            </Modal>
   </>
   );

}