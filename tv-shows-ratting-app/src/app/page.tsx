import { ShowDetails } from "@/components/features/shows/ShowDetails/ShowDetails";
import styles from "./page.module.css";
import { Stack } from "@chakra-ui/react";
import { ReviewForm } from "@/components/features/shows/ReviewForm/ReviewForm";
import { ReviewItem } from "@/components/features/review/ReviewItem/ReviewItem";

// trebat ce napravit Container KOmponetu za ShowDetailes koja ce implemenitrat logiku i u kojoj ond amogu korsiitti mock liste
const mockShow = {
  title: "Brekaing bad",
  description: "Breaking Bad follows Walter White, a struggling, frustrated high school chemistry teacher who becomes a crimelord in the local methamphetamine drug trade, driven to provide for his family financially after being diagnosed with inoperable lung cancer.",
  averageRating: 4.43,
  imageUrl: "https://ntvb.tmsimg.com/assets/p8696131_b_h10_aa.jpg?w=960&h=540"
}

//ista stvar i za review item, on je ovdje smao privremeno:
const mockReview = {
  reviewersEmail: "fran.galic7@gmail.com",
  avatar: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg",
  rating: 5,
  comment: "Vrlo zabvana i poucna serija",
}



export default function Home() {
  return (
    <main className={styles.main}>
      <Stack spacing={6}>
        <ShowDetails show={mockShow} />
        <ReviewForm />
        <ReviewItem review= {mockReview} />
      </Stack>
    </main>
  );
}
