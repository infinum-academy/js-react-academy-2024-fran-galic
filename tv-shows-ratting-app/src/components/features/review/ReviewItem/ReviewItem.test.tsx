 /* 
   + 1.check if correct user email is rendered
   + 2. check if correct rating is rendered
   + 3. check if correct review comment is rendered
   + 4. check if delete button is rendered
   + 5. check if onDelete callback has beed called only once with the necessary data
*/
import { render, screen } from '@testing-library/react';
import { IReviewList } from '@/typings/Review.type';
import { ReviewItem } from './ReviewItem';

// !!! vratiti cu se na ovo za sad anije toliko bitno
describe("ReviewItem", () => {

  const mockReviewList: IReviewList = {
    reviews: [
      {
        id: 1,
        comment: "Vrlo zabavna i poucna serija",
        rating: 5,
        show_id: 101,
        user: {
          id: 1,
          email: "fran.galic7@gmail.com",
          image_url: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg",
        }
      }
    ]
  };

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