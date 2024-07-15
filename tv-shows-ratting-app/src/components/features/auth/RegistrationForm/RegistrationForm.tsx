/* eslint-disable react/no-unescaped-entities */
'use client';
import React, { useState } from 'react';
import { Card, CardBody, Flex, chakra, FormControl, InputGroup, InputLeftElement, Input, Button, Text, FormHelperText } from '@chakra-ui/react';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import { useForm } from 'react-hook-form';
import useSWRMutation from 'swr/mutation';
import { swrKeys } from '@/fetchers/swrKeys';
import { SuccessWindow } from '@/components/shared/auth/SuccessWidnow/SuccessWindow';
import { mutator } from '@/fetchers/mutators';



interface IRegistrationFormInputs {
  email: string,
  password: string,
  password_confirmation: string
}


export const RegistrationForm = () => {

  const { register, handleSubmit, formState: { isSubmitting } } = useForm<IRegistrationFormInputs>();
  const [errorMessage, setErrorMessage] = useState("");  // po defoultu je errorMessage "" sto je faoult vrijednost
  const [registered, setRegistered] = useState(false);

  const { trigger } = useSWRMutation(swrKeys.register, mutator<IRegistrationFormInputs>,
    {
      onSuccess: () => {
        setRegistered(true);
      },
    }
  ); 

  const onRegister = async (data: IRegistrationFormInputs) => {
    if (data.password.length < 8) {
      setErrorMessage("Password must be at least 8 characters");
      return;
    }
    if (data.password !== data.password_confirmation) {
      setErrorMessage("Passwords do not match");
      return;
    }
    //ukoliko je sve okej:
    setErrorMessage("");
    console.log(data);
    await trigger(data); 
  };

  return (
    registered ? (
      <SuccessWindow link={'/login'} description={'You have successfully registered!'} buttonText={'Log in'} />
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
              onSubmit={handleSubmit(onRegister)}
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
                  />
                </InputGroup>
                <FormHelperText color="white" pl="20px" fontSize="xs">At least 8 characters</FormHelperText>
              </FormControl>

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
                    {...register('password_confirmation')}
                  />
                </InputGroup>
              </FormControl>

              <Button type="submit" px={7} borderRadius="20px" fontSize="sm" color="#371687">SIGN UP</Button>
              {errorMessage && (
                <Text fontSize="sm" color="white">
                  {errorMessage}
                </Text>
              )}
            </chakra.form>
            <Text color="white">Already have an account? <Text as={NextLink} href="/login" fontWeight="bold">Login</Text></Text>
          </Flex>
        </CardBody>
      </Card>
    )
  );
};