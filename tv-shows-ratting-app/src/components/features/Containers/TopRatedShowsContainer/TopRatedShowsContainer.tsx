import { LoadingScreen } from "@/components/shared/LoadingScreen/LoadingScreen";
import { IShowsList, ShowsList } from "@/components/shared/shows/ShowsList/ShowsList";
import { SidebarNavigation } from "@/components/shared/SidebarNavigation/SidebarNavigation";
import { getTopRatedShows } from "@/fetchers/shows";
import { Box, Flex } from "@chakra-ui/react";
import useSWR from "swr";


export const TopRatedShowsContainer = () => {
   const { data, error, isLoading } = useSWR('/shows/top-rated', getTopRatedShows);

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
         <ShowsList shows={data?.shows}/>
      </Flex>
      
   );

}