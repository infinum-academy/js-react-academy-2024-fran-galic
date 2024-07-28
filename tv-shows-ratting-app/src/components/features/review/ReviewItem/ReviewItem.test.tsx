 /* 
   + 1.check if correct user email is rendered
   + 2. check if correct rating is rendered
   + 3. check if correct review comment is rendered
   + 4. check if delete button is rendered
   + 5. check if onDelete callback has beed called only once with the necessary data
*/
import { render, screen } from '@testing-library/react';
import { IReviewList } from '@/typings/review';
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

      const stars = starRating.querySelectorAll('svg'); // Pretpostavljamo da StarIcon koristi SVG element
      expect(stars.length).toBe(5); // Uvijek će biti 5 zvjezdica

   }); 

   it("should render correct review comment", () => {
      //react testing library rendera stvari
      render(<ReviewItem review={mockReviewList.reviews[0]} onDelete={() => {}}  />);

      const comment = screen.getByText(mockReviewList.reviews[0].comment);
      expect(comment).toBeInTheDocument();
   });

   it("should render delete buttont", () => {
      //react testing library rendera stvari
      render(<ReviewItem review={mockReviewList.reviews[0]} onDelete={() => {}}  />);

      const deleteButton = screen.getByRole('button');
      expect(deleteButton).toBeInTheDocument();
   });

   it("should check if onDelete callback has beed called only once with the necessary data", () => {
		const mockOnDelete = jest.fn();
		render(<ReviewItem review={mockReviewList.reviews[0]} onDelete={mockOnDelete}  />);

		const deleteButton = screen.getByRole('button');
		deleteButton.click();

		expect(mockOnDelete).toHaveBeenCalled();
		expect(mockOnDelete).toHaveBeenCalledTimes(1);
		expect(mockOnDelete).toHaveBeenCalledWith(mockReviewList.reviews[0]);
	});
 
}) 