"use client"

/* import { ShowDetails } from "@/components/features/shows/ShowDetails/ShowDetails";
import styles from "./page.module.css";
import { Stack } from "@chakra-ui/react";
import { ShowReviewSection } from "@/components/features/shows/ShowReviewSection/ShowReviewSection";
import { useState } from "react";
import { IShow } from "@/typings/show";
import { IReviewList } from "@/typings/review";


// trebat ce napravit Container KOmponetu za ShowDetailes koja ce implemenitrat logiku i u kojoj ond amogu korsiitti mock liste
const mockShowIdea: IShow = {
  title: "Brekaing bad",
  description: "Breaking Bad follows Walter White, a struggling, frustrated high school chemistry teacher who becomes a crimelord in the local methamphetamine drug trade, driven to provide for his family financially after being diagnosed with inoperable lung cancer.",
  //averageRating: 3,
  imageUrl: "https://ntvb.tmsimg.com/assets/p8696131_b_h10_aa.jpg?w=960&h=540",
  id: 1
}

export default function Home() {

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
    <main className={styles.main}>
      <Stack spacing={6}>
        <ShowDetails show={show}/>
        <ShowReviewSection onCallRatting={onCallAvgRatting}/>
      </Stack>
    </main>
  );
} */

export default function HomeRedirect() {
  window.location.href = '/all-shows';
  return <></>;
}




