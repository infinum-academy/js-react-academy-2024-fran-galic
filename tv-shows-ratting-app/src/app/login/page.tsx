import { Box, Center, Container } from '@chakra-ui/react';
import { LoginForm } from '../../components/features/auth/LoginForm/LoginForm';
import { Fragment } from 'react';

export default function Login() {
  return (
      <Center width="100vw" height="100vh">
         <LoginForm />
      </Center>
      
  );
}