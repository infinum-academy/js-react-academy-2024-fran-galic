"use client"

import { IShow } from "@/typings/show";
import { Flex, Spacer } from "@chakra-ui/react";
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
      width="1000px"
      my={8}
      >
         {shows.map((show, index) => {
            return <ShowCard show={show} key={ show.id } />
         })}
      </Flex>
   );

}


