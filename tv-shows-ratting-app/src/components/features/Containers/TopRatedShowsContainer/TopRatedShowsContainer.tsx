import { LoadingScreen } from "@/components/shared/LoadingScreen/LoadingScreen";
import { IShowsList, ShowsList } from "@/components/shared/shows/ShowsList/ShowsList";
import { SidebarNavigation } from "@/components/shared/SidebarNavigation/SidebarNavigation";
import { getTopRatedShows } from "@/fetchers/shows";
import { swrKeys } from "@/fetchers/swrKeys";
import { Box, Flex } from "@chakra-ui/react";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import { IgetSignInMutatorParams } from "../AllShowsContainer/AllShowsContainer";
import { getSignInMutator } from "@/fetchers/getSignInMutator";


export const TopRatedShowsContainer = () => {

   const { trigger } = useSWRMutation(swrKeys.top_rated_shows, getSignInMutator<IgetSignInMutatorParams>);

   async function getTopRatedShows(params: IgetSignInMutatorParams) {
      const response = await trigger(params);
      return response.data;
   }

   const { data, error, isLoading } = useSWR(`/api/top-rated-shows`, () =>
      getTopRatedShows({ page: '1', items: '20' })  // jer je to defoult navedeno u dokumenaticiji, moze biti i druge vrijendosti
    );

	if (isLoading) {
		return <LoadingScreen />;
	}

	if (error || !data) {
		return <div>Ups something went wrong...</div>;
	}

   return (
      <ShowsList shows={data?.shows}/>
   );

}