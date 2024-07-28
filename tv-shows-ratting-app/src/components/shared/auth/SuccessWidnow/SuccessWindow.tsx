import { Button, Card, CardBody, Flex, Stack, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

interface ISuccessWindow {
  link: string;
  description: string;
  buttonText: string
}

export const SuccessWindow = ({ link, description, buttonText }: ISuccessWindow) => (
   <Card maxW='md' p={5} borderRadius="20px" bg={"#371687"}>
      <CardBody>
         <Stack gap={5} color={"white"}>
            <Text>{description}</Text>
            <Button as={NextLink} href={link} bg={"white"}>{buttonText}</Button>
         </Stack>
      </CardBody>
   </Card>
);