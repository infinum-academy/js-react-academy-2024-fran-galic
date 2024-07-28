"use client";

import { IShow } from "@/typings/Show.type";
import { Flex, Button, Text, Stack } from "@chakra-ui/react";
import { ShowCard } from "../ShowCard/ShowCard";

export interface IShowsList {
   shows: Array<IShow>,
   currentPage?: number,
   setCurrentPage?: (page: number | ((prevPage: number) => number)) => void,
   totalItems?: number,
   itemsPerPage?: number,
}

export const ShowsList = ({ shows, currentPage = 1, setCurrentPage = () => {}, totalItems = 0, itemsPerPage = 25 }: IShowsList) => {
   const totalPages = Math.ceil(totalItems / itemsPerPage);

   const handleNextPage = () => {
      setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
   };

   const handlePrevPage = () => {
      setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
   };

   return (
      <Stack spacing={2} direction="column" my={7}>
         <Flex 
            direction="row"
            wrap="wrap"
            align="start"
            justify="start"
            gap={8}
            maxWidth="1000px"
            width={"100%"}
            pb={6}
         >
            {shows.map((show) => {
               return <ShowCard show={show} key={ show.id } />
            })}
         </Flex>
         {totalPages > 1 && (
            <Flex justifyContent="end" align={"center"}>
               <Button onClick={handlePrevPage} isDisabled={currentPage === 1}>
                  Previous
               </Button>
               <Text mx={4} fontSize="lg">
                  Page {currentPage} of {totalPages}
               </Text>
               <Button onClick={handleNextPage} isDisabled={currentPage === totalPages} ml={2}>
                  Next
               </Button>
            </Flex>
         )}
      </Stack>
   );
}