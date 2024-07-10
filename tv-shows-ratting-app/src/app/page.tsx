import { ShowDetails } from "@/components/features/shows/ShowDetails/ShowDetails";
import styles from "./page.module.css";
import { Stack } from "@chakra-ui/react";
import { ReviewForm } from "@/components/features/shows/ReviewForm/ReviewForm";
import { ReviewItem } from "@/components/features/review/ReviewItem/ReviewItem";
import { ReviewList } from "@/components/features/review/ReviewList/ReviewList";
import { IReviewList } from "@/typings/review";

// trebat ce napravit Container KOmponetu za ShowDetailes koja ce implemenitrat logiku i u kojoj ond amogu korsiitti mock liste
const mockShow = {
  title: "Brekaing bad",
  description: "Breaking Bad follows Walter White, a struggling, frustrated high school chemistry teacher who becomes a crimelord in the local methamphetamine drug trade, driven to provide for his family financially after being diagnosed with inoperable lung cancer.",
  averageRating: 4.43,
  imageUrl: "https://ntvb.tmsimg.com/assets/p8696131_b_h10_aa.jpg?w=960&h=540"
}

//vjeroavtno ce trebat napravit i Container komponteu za ovo ali to cu jos vidit
const mockReviewList: IReviewList = {
  reviews: [
    {
      reviewersEmail: "fran.galic7@gmail.com",
      avatar: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg",
      rating: 5,
      comment: "Vrlo zabvana i poucna serija",
    },
    {
      reviewersEmail: "pero.peric@gmail.com",
      avatar: "https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
      rating: 3,
      comment: "Nisam volio onaj dio di je Walter Slomio krevet",
    },
    {
      reviewersEmail: "ivica.kicmanovic@gmail.com",
      avatar: "https://img.freepik.com/premium-vector/man-character_665280-46970.jpg",
      rating: 4,
      comment: "Finaly some good fuc*** food",
    },

  ]
}

export default function Home() {
  return (
    <main className={styles.main}>
      <Stack spacing={6}>
        <ShowDetails show={mockShow} />
        <ReviewForm />
        <ReviewList reviewList={mockReviewList}/>
      </Stack>
    </main>
  );
}
