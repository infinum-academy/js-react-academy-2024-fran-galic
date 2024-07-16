/* eslint-disable react/no-unescaped-entities */
'use client';
import React, { useState } from 'react';
import { Card, CardBody, Flex, chakra, FormControl, InputGroup, InputLeftElement, Input, Button, Text, FormHelperText, Spinner } from '@chakra-ui/react';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import { useForm } from 'react-hook-form';
import useSWRMutation from 'swr/mutation';
import { swrKeys } from '@/fetchers/swrKeys';
import { SuccessWindow } from '@/components/shared/auth/SuccessWidnow/SuccessWindow';
import { mutator } from '@/fetchers/mutators';
import { PasswordInput } from '@/components/shared/auth/PasswordInput/PasswordInput';
import { CustomInput } from '@/components/shared/auth/CustomInput/CustomInput';



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
    console.log("On register:", data);
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
              
              <CustomInput 
                RegisterPart={register('email')} 
                isDisabled={isSubmitting} 
                testId={"email"} 
                placeholder={'Email'} 
                icon={<EmailIcon color="white" />} 
              />

              <PasswordInput 
                RegisterPart={register('password')} 
                isDisabled={isSubmitting} 
                testId={"password"} 
                placeholder={"Password"}
                icon={<LockIcon color="white" />} 
              />

              <PasswordInput 
                RegisterPart={register('password_confirmation')} 
                isDisabled={isSubmitting} 
                testId={"password_confirmation"} 
                placeholder={"Confirm password"} 
                icon={<LockIcon color="white" />} 
              />

              <Button type="submit" px={7} borderRadius="20px" fontSize="sm" color="#371687" isDisabled={isSubmitting}>{isSubmitting ? <Spinner /> : 'SIGN UP'}</Button>
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