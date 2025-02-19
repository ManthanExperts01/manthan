import * as Yup from 'yup';

export const validationLoginSchema = Yup.object({
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

export const validationBlogSchema = Yup.object({
  title: Yup.string().required('Title is required'),
  subtitle: Yup.string().required('Subtitle is required'),
  date: Yup.date().required('Date is required'),
  author: Yup.string().required('Author is required'),
  featured_image: Yup.mixed()
    .required('Featured Image is required')
    .test('fileType', 'Only PNG images are allowed', (value) => {
      if (!value) return true;
      if (value instanceof File) {
        return value.type === 'image/png';
      }
      return true;
    }),
  category: Yup.array().of(Yup.string()).required('At least one category is required'),
});
