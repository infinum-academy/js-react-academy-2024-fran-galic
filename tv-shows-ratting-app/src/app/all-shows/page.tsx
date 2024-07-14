"use client"

import { ShowCard } from "@/components/shared/shows/ShowCard";
import { IShow } from "@/typings/show";

const mockShowIdea: IShow = {
   title: "Breaking bad",
   description: "Breaking Bad follows Walter White, a struggling, frustrated high school chemistry teacher who becomes a crimelord in the local methamphetamine drug trade, driven to provide for his family financially after being diagnosed with inoperable lung cancer.",
   averageRating: 3,
   imageUrl: "https://www.3wallpapers.fr/wp-content/uploads/2013/10/Breaking-Bad-3Wallpapers-iPhone.jpg"
 }

 
export default function AllShowsPage() {

   return <ShowCard show={mockShowIdea} />
}