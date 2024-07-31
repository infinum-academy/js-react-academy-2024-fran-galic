'use client';

import { Button, Flex, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, Text } from '@chakra-ui/react';

/* import { PlannerButtons } from './components/PlannerButtons';
import { PlannerProgress } from './components/PlannerProgress';
import { PlannerStepper } from './components/PlannerStepper';
 */

export const TvShowPicker = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Flex justify={"start"}>
			<Button 
         onClick={onOpen}
         fontSize={4}
         >
            Show picker
         </Button>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent borderRadius={2} p={2}>
					<ModalHeader>Lets see what we are watching tonight: </ModalHeader>
					<ModalBody>
						{/* <PlannerStepper /> */}
                  <div>Nesto</div>
					</ModalBody>
					<ModalFooter>
						<Flex direction="column" width="100%" gap={3}>
{/* 							<PlannerProgress />
							<PlannerButtons /> */}
                     <div>Nesto dolje</div>
						</Flex>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</Flex>
	);
};