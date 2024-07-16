/*
 * Testovi za LoginForm komponentu:
 * 1) Provjerava ima li email input
 * 2) Provjerava ima li password input
 * 3) Provjerava ima li login gumb
 * 4) Provjerava ima li link za registraciju
 * 5) Provjerava da spinner nije prikazan na početku
 * sigurno se jos neke stvari mogu testirat
 */

import { render, screen } from '@testing-library/react';
import { LoginForm } from './LoginForm';

describe('LoginForm', () => {
  // Test da li ima email input
  it('should render email input', () => {
    render(<LoginForm />); 
    const emailInput = screen.getByPlaceholderText('Email'); 
    expect(emailInput).toBeInTheDocument(); 
  });

  // Test da li ima password input
  it('should render password input', () => {
    render(<LoginForm />); 
    const passwordInput = screen.getByPlaceholderText('Password'); 
    expect(passwordInput).toBeInTheDocument(); 
  });

  // Test da li ima login gumb
  it('should render login button', () => {
    render(<LoginForm />); 
    const submitButton = screen.getByRole('button', { name: /log in/i }); // regEx koji ignorira case insesnitve stvari, pretrazje text unutar elementa
    expect(submitButton).toBeInTheDocument(); 
  });

  // Test da li ima link za registraciju
  it('should render register link', () => {
    render(<LoginForm />); 
    const registerLink = screen.getByRole('link', { name: /register/i }); 
    expect(registerLink).toBeInTheDocument(); 
  });

  // Test da spinner nije prikazan na početku
  it('should not show spinner initially', () => {
    render(<LoginForm />); 
    const spinner = screen.queryByRole('status'); 
    expect(spinner).not.toBeInTheDocument();
  });
});