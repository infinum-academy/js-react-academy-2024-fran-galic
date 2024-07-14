import { LoadingScreen } from "@/components/shared/LoadingScreen/LoadingScreen";
import { IShowsList, ShowsList } from "@/components/shared/shows/ShowsList/ShowsList";
import { SidebarNavigation } from "@/components/shared/SidebarNavigation/SidebarNavigation";
import { getShows } from "@/fetchers/shows";
import { Box, Flex } from "@chakra-ui/react";
import useSWR from "swr";


export const AllShowsContainer = () => {
   const { data, error, isLoading } = useSWR('/shows', getShows);

	if (isLoading) {
		return <LoadingScreen />;
	}

	if (error || !data) {
		return <div>Ups something went wrong...</div>;
	}

   return (
      <Flex width="100%" columnGap="7%" minHeight="100vh">
         <Box width="180px">
            <SidebarNavigation />
         </Box>
         <ShowsList shows={data?.shows} />
      </Flex>
   );

}