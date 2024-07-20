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

   const { data, error, isLoading } = useSWR(swrKeys.shows, getShows);

	if (isLoading) {
		return <LoadingScreen />;
	}

	if (error || !data) {
		return <div>Ups something went wrong...</div>
	}

   return ( <ShowsList shows={data.shows} /> );

}