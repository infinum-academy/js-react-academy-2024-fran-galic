import { Button, Center, Modal, ModalBody, ModalContent, ModalFooter, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/navigation";






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
                     // Trebat cu ispravit   !!!!
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
   </>
   );

}