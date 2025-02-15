'use client';

import { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validationBlogSchema } from '@/schema';
import { useRouter } from 'next/navigation';
import { BlogValues } from '@/types/form';
import Editor from './editor';
import FormButton from '../FormButton';

const BlogForm = ({
  initialValues = {
    title: '',
    subtitle: '',
    date: new Date().toISOString().split('T')[0],
    author: 'NSt Writer',
    featured_image: null,
    category: [],
  },
  contentValues = '',
  edit = false,
}: {
  initialValues?: BlogValues;
  contentValues?: string;
  edit?: boolean;
}) => {
  const [content, setContent] = useState<string>(contentValues);
  const [saving, setSaving] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const router = useRouter();

  const handleSubmit = async (values: BlogValues) => {
    setSaving(true);
    const formData = new FormData();
    formData.append('title', values.title);
    formData.append('subtitle', values.subtitle);
    formData.append('date', values.date);
    formData.append('author', values.author);
    formData.append('featured_image', values.featured_image);
    formData.append('category', JSON.stringify(values.category));
    formData.append('content', content);
    const res = await fetch('/api/blogs', {
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
    setSaving(false);
  };

  return (
    <div className="w-full">
      <h1 className="text-2xl my-4">{edit ? 'Edit Blog' : 'Create Blog'}</h1>
      <Formik initialValues={initialValues} validationSchema={validationBlogSchema} onSubmit={handleSubmit}>
        {({ setFieldValue }) => (
          <Form className="blog-form">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label htmlFor="title">Title</label>
                  <Field className="w-full border p-2" id="title" name="title" type="text" disabled={edit} />
                  <ErrorMessage className="text-red-500" name="title" component="div" />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="subtitle">Subtitle</label>
                  <Field className="w-full border p-2" id="subtitle" name="subtitle" type="text" />
                  <ErrorMessage className="text-red-500" name="subtitle" component="div" />
                </div>

                <div className="">
                  <label htmlFor="date">Date</label>
                  <Field className="w-full border p-2" id="date" name="date" type="date" />
                  <ErrorMessage className="text-red-500" name="date" component="div" />
                </div>

                <div>
                  <label htmlFor="author">Author</label>
                  <Field className="w-full border p-2" id="author" name="author" type="text" disabled={true} />
                  <ErrorMessage className="text-red-500" name="author" component="div" />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="category">Category</label>
                  <Field className="w-full border p-2" as="select" name="category" multiple>
                    <option value="Cat-1">Cat-1</option>
                    <option value="Cat-2">Cat-2</option>
                    <option value="Cat-3">Cat-3</option>
                    <option value="Cat-4">Cat-4</option>
                    <option value="Cat-5">Cat-5</option>
                  </Field>
                  <ErrorMessage className="text-red-500" name="category" component="div" />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="featured_image">Featured Image</label>
                  <input
                    className="w-full border p-2"
                    id="featured_image"
                    name="featured_image"
                    type="file"
                    accept="image/png"
                    onChange={(e: any) => {
                      const file = e.target.files ? e.target.files[0] : null;
                      if (file) {
                        setFieldValue('featured_image', file);
                      }
                    }}
                  />
                  <ErrorMessage className="text-red-500" name="featured_image" component="div" />
                </div>
              </div>

              <div>
                <label>Content</label>
                <Editor value={content} onChange={setContent} />
              </div>

              <div className="md:col-start-2 flex justify-between items-center">
                <span className="text-lg">{message}</span>
                <FormButton className="w-48" text="Save Blog" alt="Saving..." state={saving} />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BlogForm;
