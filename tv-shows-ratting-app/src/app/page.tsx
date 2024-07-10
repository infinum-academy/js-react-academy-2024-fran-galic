import { ShowDetails } from "@/components/features/shows/ShowDetails/ShowDetails";
import styles from "./page.module.css";
import { Stack } from "@chakra-ui/react";
import { ReviewForm } from "@/components/features/shows/ReviewForm/ReviewForm";

const mockShow = {
  title: "Brekaing bad",
  description: "Breaking Bad follows Walter White, a struggling, frustrated high school chemistry teacher who becomes a crimelord in the local methamphetamine drug trade, driven to provide for his family financially after being diagnosed with inoperable lung cancer.",
  averageRating: 4.43,
  imageUrl: "https://ntvb.tmsimg.com/assets/p8696131_b_h10_aa.jpg?w=960&h=540"
}


export default function Home() {
  return (
    <main className={styles.main}>
      <Stack spacing={6}>
        <ShowDetails show={mockShow} />
        <ReviewForm />
      </Stack>
    </main>
  );
}
