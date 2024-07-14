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

export default function ShowContainer() {
  const params = useParams();
  const id = params.id;
  const { data, error, isLoading } = useSWR(`/shows/${id}`, () => getSpecificShow(id as string));

	if (isLoading) {
		return <LoadingScreen />;
	}

	if (error || !data) {
		return <div>Ups something went wrong...</div>;
	}

  //izgleda da za sada vise nije potrebno zato sto bi se te stvair trebali izraucunait na serveskoj strani a mi bi smao trebali citait podatke
/*   const [show, setShow] = useState(data); // nije idelano ali ako je undefined onda ce se smao izaic izvan funckije

  //izgleda da za sada vise nije potrebno zato sto bi se te stvair trebali izraucunait na serveskoj strani a mi bi smao trebali citait podatke
  const onCallAvgRatting = ({reviews}: IReviewList) => {
    if(reviews.length == 0) {
      let newShow = {
        ...show,
        average_rating: undefined
      }
      setShow(newShow);
    }
    //inace:
    let newShow = {
      ...show,
      average_rating: (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length)
    }
    setShow(newShow);
  };  */

  return (
   <Flex width="100%" columnGap="7%" minHeight="100vh">
      <Box width="180px">
         <SidebarNavigation />
      </Box>
      <Stack spacing={5} pt={7}>
        <ShowDetails show={data}/>
        <ShowReviewSection onCallRatting={/* onCallAvgRatting */ () => {}} showId={data.id} />
      </Stack>
   </Flex>
  );
} 