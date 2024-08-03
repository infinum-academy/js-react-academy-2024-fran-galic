"use client"

import { StarIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/react";

interface StarRatingProps {
  noOfStars: number;
  isStatic: boolean;
  onClick: (index: number) => void;
  onHover: (index: number) => void;
  data_testid?: string; // opcionlani promt za testiranje
  color?: string
}

export const StarRating = ({ noOfStars, isStatic, onClick, onHover, data_testid, color= "white" }: StarRatingProps) => {
  const renderStars = Array.from({ length: 5 }, (_, i) => {
      const index = i + 1;
      if(isStatic) {
        if(index <= noOfStars) {
          return (
            <StarIcon
              color={color}
              height="10%"
              key={index}
              onClick={undefined}
              onMouseOver={undefined}
            />
          );
        }
      }
      else {
          return (
          <StarIcon
            color={index <= noOfStars ? color : "purple"}
            height="10%"
            key={index}
            onClick={() => onClick(index)}
            onMouseOver={() => onHover(index)}
          />
        );
      }
    });

  return (
    <Flex flexDirection="row" gap="5px" width="25%" data-testid={data_testid}>
      {renderStars}
    </Flex>
  );
}