import { z } from 'zod';

export const loginFormSchema = z.object({
  email: z.string().email({ message: 'Email must be valid.' }),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters.',
  }),
});

export const registerFormSchema = z
  .object({
    firstName: z.string().min(2, {
      message: 'First Name must be at least 2 characters.',
    }),
    lastName: z.string().min(2, {
      message: 'Last Name must be at least 2 characters.',
    }),
    role: z.enum(['buyer', 'seller'], {
      message: 'Role must be either Buyer or Seller.',
    }),
    email: z.string().email({ message: 'Email must be valid.' }),
    password: z.string().min(6, {
      message: 'Password must be at least 6 characters.',
    }),
    confirmPassword: z.string().min(6, {
      message: 'Confirm Password must be at least 6 characters.',
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match.',
    path: ['confirmPassword'],
  });

export const forgotPasswordFormSchema = z.object({
  email: z.string().email({ message: 'Email must be valid.' }),
});
