'use server';

import { LoginValues } from '@/types/form';

export const login = (values: LoginValues) => {
  if (values.email !== process.env.ADMIN_EMAIL || values.password !== process.env.ADMIN_PASSWORD) {
    return { success: false, message: 'Invalid email or password' };
  }
  return { success: true, message: 'Login successfully!' };
};

