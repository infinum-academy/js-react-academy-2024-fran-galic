/* eslint-disable react/no-unescaped-entities */
'use client';

import React, { useState } from 'react';
import { Card, CardBody, Flex, chakra, FormControl, Button, Text, Spinner, FormErrorMessage } from '@chakra-ui/react';
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
  const { register, handleSubmit, formState: { isSubmitting, errors }, setError, clearErrors, getValues } = useForm<IRegistrationFormInputs>();
  const [registered, setRegistered] = useState(false);

  const { trigger } = useSWRMutation(swrKeys.register, mutator<IRegistrationFormInputs>,
    {
      onSuccess: () => {
        setRegistered(true);
      },
      onError: () => {
        setError("email", { type: "manual", message: "This account already exists" });
      }
    }
  ); 

  const onRegister = async (data: IRegistrationFormInputs) => {
    if (data.password.length < 8) {
      setError("password", { type: "manual", message: "Password must be at least 8 characters" });
      return;
    }
    if (data.password !== data.password_confirmation) {
      setError("password_confirmation", { type: "manual", message: "Passwords do not match" });
      return;
    }
    // Clear previous errors if any
    clearErrors();
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
                RegisterPart={register('email', { required: 'Email is required' })} 
                isDisabled={isSubmitting} 
                testId={"email"} 
                placeholder={'Email'} 
                icon={<EmailIcon color="white" />} 
                error={errors.email?.message}
              />

              <PasswordInput 
                RegisterPart={register('password', { required: 'Password is required', minLength: { value: 8, message: 'Password must be at least 8 characters' } })} 
                isDisabled={isSubmitting} 
                testId={"password"} 
                placeholder={"Password"}
                icon={<LockIcon color="white" />} 
                error={errors.password?.message}
              />

              <PasswordInput 
                RegisterPart={register('password_confirmation', { required: 'Password confirmation is required', validate: value => value === getValues('password') || 'Passwords do not match' })} 
                isDisabled={isSubmitting} 
                testId={"password_confirmation"} 
                placeholder={"Confirm password"} 
                icon={<LockIcon color="white" />} 
                error={errors.password_confirmation?.message}
              />

              <Button type="submit" px={7} borderRadius="20px" fontSize="sm" color="#371687" isDisabled={isSubmitting}>{isSubmitting ? <Spinner /> : 'SIGN UP'}</Button>
            </chakra.form>
            <Text color="white">Already have an account? <Text as={NextLink} href="/login" fontWeight="bold">Login</Text></Text>
          </Flex>
        </CardBody>
      </Card>
    )
  );
};