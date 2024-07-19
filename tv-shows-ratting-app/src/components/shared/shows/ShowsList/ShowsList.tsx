"use client"

import { IShow } from "@/typings/show";
import { Flex } from "@chakra-ui/react";
import { ShowCard } from "../ShowCard/ShowCard";

export interface IShowsList {
   shows: Array<IShow>
}

export const ShowsList = ({ shows } : IShowsList) => {

   return (
      <Flex 
      direction="row"
      wrap="wrap"
      align="start"
      justify="start"
      gap={8}
      maxWidth="1000px"
      width={"100%"}
      my={8}
      >
         {shows.map((show) => {
            return <ShowCard show={show} key={ show.id } />
         })}
      </Flex>
   );

}


