/* eslint-disable react/no-unescaped-entities */
'use client';
import React from 'react';
import { Card, CardBody, Flex, chakra, FormControl, InputGroup, InputLeftElement, Input, Button, Text, FormHelperText } from '@chakra-ui/react';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';

export const RegistrationForm = () => {
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
                  color="white"
                  _placeholder={{ color: 'white' }}
                />
                
              </InputGroup>
            </FormControl>

          {/*   loznika */}
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
                  _placeholder={{ color: 'white' }}
                />
              </InputGroup>
              <FormHelperText color="white" pl="20px" fontSize="xs">At least 8 characters</FormHelperText>
            </FormControl>
            
            {/* ponovljena loznika */}
            <FormControl isRequired>
              <InputGroup size='md'>
                <InputLeftElement pointerEvents="none">
                  <LockIcon color="white" />
                </InputLeftElement>
                <Input
                  type="password"

                  placeholder='Confirm password'
                  required
                  borderRadius="20px"
                  pl="10"
                  color="white"
                  _placeholder={{ color: 'white' }}
                />
              </InputGroup>
            </FormControl>

            <Button type="submit" px={7} borderRadius="20px" fontSize="sm" color="#371687">SIGN UP</Button>
          </chakra.form>
          <Text color="white">Already have an account? <Text as={NextLink} href="/login" fontWeight="bold">Login</Text></Text>
        </Flex>
      </CardBody>
    </Card>
  );
};