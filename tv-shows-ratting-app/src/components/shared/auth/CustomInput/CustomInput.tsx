'use client';

import { FormControl, FormErrorMessage, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

interface ICustomInputProps {
  RegisterPart: any,
  isDisabled: boolean,
  testId: string;
  placeholder: string;
  icon: any;
  error?: string;
}

export const CustomInput = (props: ICustomInputProps) => {
  return (
    <FormControl isRequired isInvalid={!!props.error}>
      <InputGroup size='md'>
        <InputLeftElement pointerEvents="none">
          {props.icon}
        </InputLeftElement>
        <Input
          type='text'
          placeholder={props.placeholder}
          required
          borderRadius="20px"
          pl="10"
          color="white"
          _placeholder={{ color: 'white' }}
          {...props.RegisterPart}
          isDisabled={props.isDisabled}
          data-testid={props.testId}
        />
      </InputGroup>
      {props.error && <FormErrorMessage>{props.error}</FormErrorMessage>}
    </FormControl>
  );
}