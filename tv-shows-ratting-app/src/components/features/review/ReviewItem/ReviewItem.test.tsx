 /* 
   + 1.check if correct user email is rendered
   2. check if correct rating is rendered
   3. check if correct review comment is rendered
   4. check if delete button is rendered
   5. check if onDelete callback has beed called only once with the necessary data
*/
import { render, screen } from '@testing-library/react';
import { Fragment } from 'react';
import { IReview, IReviewList } from '@/typings/review';
import { ReviewItem } from './ReviewItem';

describe("ReviewItem", () => {

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

   it("should render correct user email", () => {
      //react testing library rendera stvari
      render(<ReviewItem review={mockReviewList.reviews[0]} onDelete={() => {}}  />);

      const email = screen.getByText(mockReviewList.reviews[0].reviewersEmail as string);

      //jest s ovime testira stvari
      expect(email).toBeInTheDocument();
   });

    it("should render correct rating", () => {
      //react testing library rendera stvari
      render(<ReviewItem review={mockReviewList.reviews[0]} onDelete={() => {}}  />);

      const starRating = screen.getByTestId('star-rating');
      expect(starRating).toBeInTheDocument();
   }); 
 
}) 