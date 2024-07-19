"use client"

import { ShowDetails } from "@/components/features/shows/ShowDetails/ShowDetails";
import { Box, Flex, Stack } from "@chakra-ui/react";
import { ShowReviewSection } from "@/components/features/shows/ShowReviewSection/ShowReviewSection";
import { useState } from "react";
import { IReviewList } from "@/typings/review";
import { SidebarNavigation } from "@/components/shared/SidebarNavigation/SidebarNavigation";
import { useParams } from "next/navigation";
import useSWR from "swr";
import { getSpecificShow } from "@/fetchers/shows";
import { LoadingScreen } from "@/components/shared/LoadingScreen/LoadingScreen";
import { IShow } from "@/typings/show";
import useSWRMutation from "swr/mutation";
import { swrKeys } from "@/fetchers/swrKeys";
import { getSignInMutator } from "@/fetchers/getSignInMutator";

interface IgetSignInMutatorParams2 {
  id: string
}

export default function ShowContainer() {
  const params = useParams();
  const id = params.id;

  const { trigger } = useSWRMutation(`https://tv-shows.infinum.academy/shows/${id}`, getSignInMutator<IgetSignInMutatorParams2>);

  async function getSpecificShow(params: IgetSignInMutatorParams2) {
    const response = await trigger(params);
    return response.data;
 }

 const { data, error, isLoading } = useSWR(`/api/shows/${id}`, () =>
  getSpecificShow({ id: id as string })  // jer je to defoult navedeno u dokumenaticiji, moze biti i druge vrijendosti
);

	if (isLoading) {
		return <LoadingScreen />;
	}

	if (error || !data) {
		return <div>Ups something went wrong...</div>;
	}

  return (
    <Stack spacing={5} pt={7} minHeight="100vh">
      <ShowDetails show={data.show}/>
      <ShowReviewSection onCallRatting={/* !!! vjeorvatno ce trebat promjenit, vjeorvanto mkanut tu opciju */ () => {}} showId={data.show.id} />
    </Stack>
  );
} 