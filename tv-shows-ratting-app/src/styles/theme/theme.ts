import { extendTheme, space } from "@chakra-ui/react";
import { fonts } from "./foundations/fonts";
import { radii } from "./foundations/border-radius";
import { breakpoints } from "./foundations/breakpoints";
import { colors } from "./foundations/colors";
import { fontSizes } from "./foundations/font-sizes";
import { fontWeights } from "./foundations/font-weights";
import { Button } from "./components/button";
import { border_width } from "./foundations/border-width";

export const rattingAppTheme = extendTheme({
	components: {
      Button
	},
   fonts,
   fontSizes,
   fontWeights,
   colors, 
/*  	space, */
	 radii,
       border_width,
  /*  breakpoints  */
});