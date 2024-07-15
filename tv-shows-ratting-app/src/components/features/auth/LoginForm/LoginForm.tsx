'use client';
import React from 'react';
import { Card, CardBody, Flex, chakra, FormControl, InputGroup, InputLeftElement, Input, Button, Text } from '@chakra-ui/react';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';

export const LoginForm = () => {
  return (
    <Card maxW='md' p={5} borderRadius="20px" bg={"#371687"}>
      <CardBody>
        <Flex direction="column" gap={8} alignItems="center">
          <Text fontSize="2xl" fontWeight="bold" color="white">TV shows APP</Text>
          <chakra.form
            width="100%"
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={8}
            onSubmit={() => {}}
          >
            <FormControl isRequired>
              <InputGroup size='md'>
                <InputLeftElement pointerEvents="none">
                  <EmailIcon color="white" />
                </InputLeftElement>
                <Input
                  required
                  type="email"
                  placeholder='Email'
                  borderRadius="20px"
                  pl="10"
                />
              </InputGroup>
            </FormControl>

            <FormControl isRequired>
              <InputGroup size='md'>
                <InputLeftElement pointerEvents="none">
                  <LockIcon color="white" />
                </InputLeftElement>
                <Input
                  type="password"
                  placeholder='Password'
                  required
                  borderRadius="20px"
                  pl="10"
                  color="white"
                />
              </InputGroup>
            </FormControl>

            <Button type="submit" px={7} borderRadius="20px" fontSize="sm" color="#371687">LOG IN</Button>
          </chakra.form>
          <Text color="white">Don't have an account? <Text as={NextLink} href="/" fontWeight="bold">Register</Text></Text>
        </Flex>
      </CardBody>
    </Card>
  );
};