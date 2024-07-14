import { IShowsList, ShowsList } from "@/components/shared/shows/ShowsList/ShowsList";
import { SidebarNavigation } from "@/components/shared/SidebarNavigation/SidebarNavigation";
import { Box, Flex } from "@chakra-ui/react";

const mockShows: IShowsList = {
   shows: [
      {
         title: "Breaking bad",
         description: "Breaking Bad follows Walter White, a struggling, frustrated high school chemistry teacher who becomes a crimelord in the local methamphetamine drug trade, driven to provide for his family financially after being diagnosed with inoperable lung cancer.",
         averageRating: 3,
         imageUrl: "https://www.3wallpapers.fr/wp-content/uploads/2013/10/Breaking-Bad-3Wallpapers-iPhone.jpg",
         id: 1
      },
      {
         title: "Breaking bad",
         description: "Breaking Bad follows Walter White, a struggling, frustrated high school chemistry teacher who becomes a crimelord in the local methamphetamine drug trade, driven to provide for his family financially after being diagnosed with inoperable lung cancer.",
         averageRating: 3,
         imageUrl: "https://www.3wallpapers.fr/wp-content/uploads/2013/10/Breaking-Bad-3Wallpapers-iPhone.jpg",
         id: 1
      },
      {
         title: "Breaking bad",
         description: "Breaking Bad follows Walter White, a struggling, frustrated high school chemistry teacher who becomes a crimelord in the local methamphetamine drug trade, driven to provide for his family financially after being diagnosed with inoperable lung cancer.",
         averageRating: 3,
         imageUrl: "https://www.3wallpapers.fr/wp-content/uploads/2013/10/Breaking-Bad-3Wallpapers-iPhone.jpg",
         id: 1
      },
      {
         title: "Breaking bad",
         description: "Breaking Bad follows Walter White, a struggling, frustrated high school chemistry teacher who becomes a crimelord in the local methamphetamine drug trade, driven to provide for his family financially after being diagnosed with inoperable lung cancer.",
         averageRating: 3,
         imageUrl: "https://www.3wallpapers.fr/wp-content/uploads/2013/10/Breaking-Bad-3Wallpapers-iPhone.jpg",
         id: 1
      },
      {
         title: "Breaking bad",
         description: "Breaking Bad follows Walter White, a struggling, frustrated high school chemistry teacher who becomes a crimelord in the local methamphetamine drug trade, driven to provide for his family financially after being diagnosed with inoperable lung cancer.",
         averageRating: 3,
         imageUrl: "https://www.3wallpapers.fr/wp-content/uploads/2013/10/Breaking-Bad-3Wallpapers-iPhone.jpg",
         id: 1
      },
      {
         title: "Breaking bad",
         description: "Breaking Bad follows Walter White, a struggling, frustrated high school chemistry teacher who becomes a crimelord in the local methamphetamine drug trade, driven to provide for his family financially after being diagnosed with inoperable lung cancer.",
         averageRating: 3,
         imageUrl: "https://www.3wallpapers.fr/wp-content/uploads/2013/10/Breaking-Bad-3Wallpapers-iPhone.jpg",
         id: 1
      },
      {
         title: "Breaking bad",
         description: "Breaking Bad follows Walter White, a struggling, frustrated high school chemistry teacher who becomes a crimelord in the local methamphetamine drug trade, driven to provide for his family financially after being diagnosed with inoperable lung cancer.",
         averageRating: 3,
         imageUrl: "https://www.3wallpapers.fr/wp-content/uploads/2013/10/Breaking-Bad-3Wallpapers-iPhone.jpg",
         id: 1
      },
      {
         title: "Breaking bad",
         description: "Breaking Bad follows Walter White, a struggling, frustrated high school chemistry teacher who becomes a crimelord in the local methamphetamine drug trade, driven to provide for his family financially after being diagnosed with inoperable lung cancer.",
         averageRating: 3,
         imageUrl: "https://www.3wallpapers.fr/wp-content/uploads/2013/10/Breaking-Bad-3Wallpapers-iPhone.jpg",
         id: 1
      },
      {
         title: "Breaking bad",
         description: "Breaking Bad follows Walter White, a struggling, frustrated high school chemistry teacher who becomes a crimelord in the local methamphetamine drug trade, driven to provide for his family financially after being diagnosed with inoperable lung cancer.",
         averageRating: 3,
         imageUrl: "https://www.3wallpapers.fr/wp-content/uploads/2013/10/Breaking-Bad-3Wallpapers-iPhone.jpg",
         id: 1
      },
/*       {
         title: "Breaking bad",
         description: "Breaking Bad follows Walter White, a struggling, frustrated high school chemistry teacher who becomes a crimelord in the local methamphetamine drug trade, driven to provide for his family financially after being diagnosed with inoperable lung cancer.",
         averageRating: 3,
         imageUrl: "https://www.3wallpapers.fr/wp-content/uploads/2013/10/Breaking-Bad-3Wallpapers-iPhone.jpg",
         id: 1
      },
      {
         title: "Breaking bad",
         description: "Breaking Bad follows Walter White, a struggling, frustrated high school chemistry teacher who becomes a crimelord in the local methamphetamine drug trade, driven to provide for his family financially after being diagnosed with inoperable lung cancer.",
         averageRating: 3,
         imageUrl: "https://www.3wallpapers.fr/wp-content/uploads/2013/10/Breaking-Bad-3Wallpapers-iPhone.jpg",
         id: 1
      },
      {
         title: "Breaking bad",
         description: "Breaking Bad follows Walter White, a struggling, frustrated high school chemistry teacher who becomes a crimelord in the local methamphetamine drug trade, driven to provide for his family financially after being diagnosed with inoperable lung cancer.",
         averageRating: 3,
         imageUrl: "https://www.3wallpapers.fr/wp-content/uploads/2013/10/Breaking-Bad-3Wallpapers-iPhone.jpg",
         id: 1
      },
      {
         title: "Breaking bad",
         description: "Breaking Bad follows Walter White, a struggling, frustrated high school chemistry teacher who becomes a crimelord in the local methamphetamine drug trade, driven to provide for his family financially after being diagnosed with inoperable lung cancer.",
         averageRating: 3,
         imageUrl: "https://www.3wallpapers.fr/wp-content/uploads/2013/10/Breaking-Bad-3Wallpapers-iPhone.jpg",
         id: 1
      },
      {
         title: "Breaking bad",
         description: "Breaking Bad follows Walter White, a struggling, frustrated high school chemistry teacher who becomes a crimelord in the local methamphetamine drug trade, driven to provide for his family financially after being diagnosed with inoperable lung cancer.",
         averageRating: 3,
         imageUrl: "https://www.3wallpapers.fr/wp-content/uploads/2013/10/Breaking-Bad-3Wallpapers-iPhone.jpg",
         id: 1
      },
      {
         title: "Breaking bad",
         description: "Breaking Bad follows Walter White, a struggling, frustrated high school chemistry teacher who becomes a crimelord in the local methamphetamine drug trade, driven to provide for his family financially after being diagnosed with inoperable lung cancer.",
         averageRating: 3,
         imageUrl: "https://www.3wallpapers.fr/wp-content/uploads/2013/10/Breaking-Bad-3Wallpapers-iPhone.jpg",
         id: 1
      },
      {
         title: "Breaking bad",
         description: "Breaking Bad follows Walter White, a struggling, frustrated high school chemistry teacher who becomes a crimelord in the local methamphetamine drug trade, driven to provide for his family financially after being diagnosed with inoperable lung cancer.",
         averageRating: 3,
         imageUrl: "https://www.3wallpapers.fr/wp-content/uploads/2013/10/Breaking-Bad-3Wallpapers-iPhone.jpg",
         id: 1
      }, 
      {
         title: "Breaking bad",
         description: "Breaking Bad follows Walter White, a struggling, frustrated high school chemistry teacher who becomes a crimelord in the local methamphetamine drug trade, driven to provide for his family financially after being diagnosed with inoperable lung cancer.",
         averageRating: 3,
         imageUrl: "https://www.3wallpapers.fr/wp-content/uploads/2013/10/Breaking-Bad-3Wallpapers-iPhone.jpg",
         id: 1
      },
      {
         title: "Breaking bad",
         description: "Breaking Bad follows Walter White, a struggling, frustrated high school chemistry teacher who becomes a crimelord in the local methamphetamine drug trade, driven to provide for his family financially after being diagnosed with inoperable lung cancer.",
         averageRating: 3,
         imageUrl: "https://www.3wallpapers.fr/wp-content/uploads/2013/10/Breaking-Bad-3Wallpapers-iPhone.jpg",
         id: 1
      },
      {
         title: "Breaking bad",
         description: "Breaking Bad follows Walter White, a struggling, frustrated high school chemistry teacher who becomes a crimelord in the local methamphetamine drug trade, driven to provide for his family financially after being diagnosed with inoperable lung cancer.",
         averageRating: 3,
         imageUrl: "https://www.3wallpapers.fr/wp-content/uploads/2013/10/Breaking-Bad-3Wallpapers-iPhone.jpg",
         id: 1
      },  */
   ]
 }




export const TopRatedShowsContainer = () => {

   return (
      <Flex width="100%" columnGap="7%" minHeight="100vh">
         <Box width="180px">
            <SidebarNavigation />
         </Box>
         <ShowsList shows={mockShows.shows}/>
      </Flex>
      
   );

}