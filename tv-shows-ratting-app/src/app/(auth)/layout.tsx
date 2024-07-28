import { SidebarNavigation } from "@/components/shared/SidebarNavigation/SidebarNavigation";
import { Box, Flex } from "@chakra-ui/react";

//kako bi se postavila odgovarajuca boja na neki token?
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <Flex height="100vh">
      <SidebarNavigation />
      <Box 
      flex="1" 
      overflowY="auto" 
      sx={{ '::-webkit-scrollbar': { display: 'none' }, '-ms-overflow-style': 'none', 'scrollbar-width': 'none' }} 
      >
        {children}
      </Box>
   </Flex>
  )
}
