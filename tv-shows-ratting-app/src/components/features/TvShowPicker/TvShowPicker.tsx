'use client';

import { Button, Flex, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, Text } from '@chakra-ui/react';
import { TvShowPickerStepper } from './components/TvShowPickerStepper';
import { TvShowPickerButtons } from './components/TvShowPickerButtons';
import { TvShowPickerProgress } from './components/TvShowPickerProgress';

/* import { PlannerButtons } from './components/PlannerButtons';
import { PlannerProgress } from './components/PlannerProgress';
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
						<TvShowPickerStepper />
					</ModalBody>
					<ModalFooter>
						<Flex direction="column" width="100%" gap={3}>
							<TvShowPickerProgress />
							<TvShowPickerButtons onClose={onClose} />
						</Flex>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</Flex>
	);
};