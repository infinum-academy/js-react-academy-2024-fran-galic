import { cardAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(cardAnatomy.keys);

export const Card = defineMultiStyleConfig({
   //defolut nije potreban jer su siv cardovi jako razliciti
	variants: {
		showCard: {
			container: {
            width:'165px', 
            borderRadius:'2xl', 
            color:"purple", 
            overflow:"hidden", 
            height:"250px",
			},
			body: {
				py:"2",
            px:"3"
			},
		},
		reviewItemCard: {
			container: {
            maxW:'100%',
            borderRadius:'2xl',
            color:"white",
            bg:"purple",
            fontSize:'xs',
            p:"2"
			},
			body: {
            // u ovom slucaju netreba nista
         },
		},
      ShowDetailsCard: {
			container: {
            maxW:'1053px',
            borderRadius:'2xl',
            color:"purple",
            overflow:"hidden"
			},
			body: {
            pl: "10",
            py: "7"
         },
		},
	}
});