/*
 * Testovi za LoginForm komponentu:
 * 1) Provjerava ima li email input
 * 2) Provjerava ima li password input
 * 3) Provjerava ima li login gumb
 * 4) Provjerava ima li link za registraciju
 * 5) Provjerava da spinner nije prikazan na početku
 * 6) Simulira unos korisničkih podataka
 * 7) Provjerava da loginUser funkcija bude pozvana s ispravnim argumentima kada se forma pošalje
 */

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { LoginForm } from './LoginForm';
import { loginUser } from '@/mutation/auth';

// Mockiranje loginUser funkcije
jest.mock('@/mutation/auth', () => ({
  loginUser: jest.fn(),
}));

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
    const submitButton = screen.getByRole('button', { name: /log in/i });
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

  // Test da loginUser funkcija bude pozvana s ispravnim argumentima kada se forma pošalje
  it('should call loginUser with provided arguments when form is submitted', async () => {
    render(<LoginForm />);

    // Simuliraj unos korisničkih podataka
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const submitButton = screen.getByRole('button', { name: /log in/i });

    // Unos email-a
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });

    // Unos lozinke
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    // Simuliraj klik na gumb za prijavu
    fireEvent.click(submitButton);

    // Provjera da je loginUser funkcija pozvana s ispravnim argumentima
    await waitFor(() => {
      expect(loginUser).toHaveBeenCalledWith(expect.anything(), {
        arg: {
          email: 'test@example.com',
          password: 'password123',
        },
      });
    });
  });
});
