import { LoadingScreen } from "@/components/shared/LoadingScreen/LoadingScreen";
import { ShowsList } from "@/components/shared/shows/ShowsList/ShowsList";
import { SidebarNavigation } from "@/components/shared/SidebarNavigation/SidebarNavigation";
import { getSignInMutator } from "@/fetchers/getSignInMutator";
import { getShows } from "@/fetchers/shows";
import { swrKeys } from "@/fetchers/swrKeys";
import { Box, Flex } from "@chakra-ui/react";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";

export interface IgetSignInMutatorParams {
   page: string;
   items: string;
 }

export const AllShowsContainer = () => {

   const { trigger } = useSWRMutation(swrKeys.shows, getSignInMutator<IgetSignInMutatorParams>);

   async function getShows(params: IgetSignInMutatorParams) {
      const response = await trigger(params);
      return response.data;
   }

   const { data, error, isLoading } = useSWR(`/api/shows`, () =>
      getShows({ page: '1', items: '20' })  // jer je to defoult navedeno u dokumenaticiji, moze biti i druge vrijendosti
    );

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