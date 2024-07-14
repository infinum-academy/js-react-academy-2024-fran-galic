"use client"

import { ShowDetails } from "@/components/features/shows/ShowDetails/ShowDetails";
import { Box, Flex, Stack } from "@chakra-ui/react";
import { ShowReviewSection } from "@/components/features/shows/ShowReviewSection/ShowReviewSection";
import { useState } from "react";
import { IShow } from "@/typings/show";
import { IReviewList } from "@/typings/review";
import { SidebarNavigation } from "@/components/shared/SidebarNavigation/SidebarNavigation";


// trebat ce napravit Container KOmponetu za ShowDetailes koja ce implemenitrat logiku i u kojoj ond amogu korsiitti mock liste
const mockShowIdea: IShow = {
  title: "Brekaing bad",
  description: "Breaking Bad follows Walter White, a struggling, frustrated high school chemistry teacher who becomes a crimelord in the local methamphetamine drug trade.",
  //averageRating: 3,
  imageUrl: "https://ntvb.tmsimg.com/assets/p8696131_b_h10_aa.jpg?w=960&h=540",
  id: 1
}

export default function ShowContainer() {

  const [show, setShow] = useState(mockShowIdea);

  const onCallAvgRatting = ({reviews}: IReviewList) => {
    if(reviews.length == 0) {
      let newShow = {
        ...show,
        averageRating: undefined
      }
      setShow(newShow);
    }
    //inace:
    let newShow = {
      ...show,
      averageRating: (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length)
    }
    setShow(newShow);
  };

  return (
   <Flex width="100%" columnGap="7%" minHeight="100vh">
      <Box width="180px">
         <SidebarNavigation />
      </Box>
      <Stack spacing={5} pt={7}>
        <ShowDetails show={show}/>
        <ShowReviewSection onCallRatting={onCallAvgRatting}/>
      </Stack>
   </Flex>
  );
} 