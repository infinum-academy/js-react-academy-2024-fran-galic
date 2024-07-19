import { SidebarNavigation } from "@/components/shared/SidebarNavigation/SidebarNavigation";
import { Flex } from "@chakra-ui/react";

//kako bi se postavila odgovarajuca boja na neki token?
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <Flex>
      <SidebarNavigation />
      { children }
   </Flex>
  )
}
