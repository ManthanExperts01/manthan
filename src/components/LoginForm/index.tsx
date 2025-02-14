'use client';

import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validationLoginSchema } from '@/schema';
import { useRouter } from 'next/navigation';
import { LoginValues } from '@/types/form';
import { useState } from 'react';
import FormButton from '../FormButton';

const LoginForm = () => {
  const [login, setLogin] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const router = useRouter();
  const initialValues: LoginValues = {
    email: '',
    password: '',
  };
  const handleSubmit = async (values: LoginValues) => {
    setLogin(true);
    const formData = new FormData();
    formData.append('email', values.email);
    formData.append('password', values.password);
    const res = await fetch('/api/login', {
      method: 'POST',
      body: formData,
    });
    const data = await res.json();
    setMessage(data.message);
    if (res.ok) {
      setTimeout(() => {
        router.push('/admin/blogs');
      }, 1000);
    }
    setLogin(false);
  };

  return (
    <div className="container md:max-w-96 my-12">
      <h1 className="text-2xl my-12 text-center ">Admin Login</h1>
      <Formik initialValues={initialValues} validationSchema={validationLoginSchema} onSubmit={handleSubmit}>
        {() => (
          <Form className="login-form">
            <div className="grid gap-4">
              <div className="">
                <label htmlFor="email">Email</label>
                <Field className="w-full border p-2" id="email" name="email" type="email" />
                <ErrorMessage className="text-red-500" name="email" component="div" />
              </div>
              <div className="">
                <label htmlFor="password">Password</label>
                <Field className="w-full text-xs border p-2" id="password" name="password" type="password" />
                <ErrorMessage className="text-red-500" name="password" component="div" />
              </div>
              <div>{message}</div>
              <FormButton className="my-4" text="Login" alt="..." state={login} />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
