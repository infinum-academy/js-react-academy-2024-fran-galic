'use client';

import { FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useState } from "react";

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
        <FormControl isRequired isInvalid={!!props.error} maxWidth={"300px"}>
          <InputGroup size='md'>
            <InputLeftElement pointerEvents="none">
              {props.icon}
            </InputLeftElement>
            <Input
              type='text'
              placeholder={props.placeholder}
              required
              borderRadius={1}
              pl="10"
              color="white"
              _placeholder={{ color: 'white' }}
              borderColor={props.error ? "pink" : "white"}
              borderWidth={2}  // Dodano svojstvo za deblji obrub
              _hover={{ borderColor: props.error ? "pink" : "white" }}
              _focus={{ borderColor: props.error ? "pink" : "white", boxShadow: 'none' }}
              _invalid={{ borderColor: "pink" }}
              {...props.RegisterPart}
              isDisabled={props.isDisabled}
              data-testid={props.testId}
              fontSize={5}
              fontWeight={"normal"}
              maxWidth={"300px"}
            />
          </InputGroup>
          {props.error && <FormErrorMessage color="pink">{props.error}</FormErrorMessage>}
        </FormControl>
      );
    }