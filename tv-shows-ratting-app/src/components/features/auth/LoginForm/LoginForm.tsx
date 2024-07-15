/* eslint-disable react/no-unescaped-entities */
'use client';
import React, { useState } from 'react';
import { Card, CardBody, Flex, chakra, FormControl, InputGroup, InputLeftElement, Input, Button, Text, Spinner } from '@chakra-ui/react';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import { useForm } from 'react-hook-form';
import { swrKeys } from '@/fetchers/swrKeys';
import { mutator } from '@/fetchers/mutators';
import useSWRMutation from 'swr/mutation';
import { SuccessWindow } from '@/components/shared/auth/SuccessWidnow/SuccessWindow';

interface ILoginFormInputs {
  email: string,
  password: string
}

export const LoginForm = () => {

  const [loggedIn, setLoggedIn] = useState(false);
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<ILoginFormInputs>();
  const { trigger } = useSWRMutation(swrKeys.signIn, mutator<ILoginFormInputs>);
  

  const onLogin = async (data: ILoginFormInputs) => {
    const response = await trigger(data);
    localStorage.setItem('userId', response.data.user.id);
    localStorage.setItem('userHeaders', response.headers);
    console.log("Proso je login!!!!!!!!!!!!!");
    setLoggedIn(true);
  };

  return (
    loggedIn ? (
      <SuccessWindow link={'/all-shows'} description={'Congrats! You are logged in! Lets see what we are watching today!'} buttonText={'Lets rock!'} />
    ) : (
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
            onSubmit={handleSubmit(onLogin)}
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
                  {...register('email')}
                  isDisabled={isSubmitting}
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
                  _placeholder={{ color: 'white' }}
                  {...register('password')}
                  isDisabled={isSubmitting}
                />
              </InputGroup>
            </FormControl>

            <Button type="submit" px={7} borderRadius="20px" fontSize="sm" color="#371687" isDisabled={isSubmitting}>{isSubmitting ? <Spinner /> : 'LOG IN'}</Button>
          </chakra.form>
          <Text color="white">Don't have an account? <Text as={NextLink} href="/register" fontWeight="bold">Register</Text></Text>
        </Flex>
      </CardBody>
    </Card>
    )
  );
};