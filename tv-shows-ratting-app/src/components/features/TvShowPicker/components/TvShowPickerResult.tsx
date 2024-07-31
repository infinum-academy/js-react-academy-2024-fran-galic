import { useContext } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { TSPContext } from './TSPContextProvider';

export const TvShowPickerResult = () => {
  const { finalRanking } = useContext(TSPContext);
  return (
    <>
      <Text fontSize="title" color="white">
        This is your current show ranking:
      </Text>
      <Flex
        mt="10px"
        direction="column"
        overflow="auto"
        height="200px"
        backgroundColor="white"
        borderRadius="mdRadius"
        gap={2}
        padding={4}
      >
        {finalRanking.map((show, index) => (
          <Flex key={index}>
            <Text fontSize="body" fontWeight="bold" color="purple.500">
              {index + 1}.
            </Text>
            <Text
              ml="auto"
              fontSize="body"
              fontWeight="bold"
              color="purple.500"
            >
              {show.title}
            </Text>
          </Flex>
        ))}
      </Flex>
    </>
  );
};