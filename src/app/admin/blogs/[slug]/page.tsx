import BlogForm from '@/components/BlogForm';
import getPostContent from '@/components/Blogs/getPostContent';
import getPostMetadata from '@/components/Blogs/getPostMetadata';

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts?.map((post) => ({
    slug: post.slug,
  }));
};

const Page = async ({ params }: { params: { slug: string } }) => {
  const post = getPostContent(params.slug);

  if (!post) {
    return {
      title: '404: Page Not Found',
      description: 'This page does not exist. Go to the homepage to find the latest articles!',
    };
  }

  const initialValues = {
    title: post.data.title,
    subtitle: post.data.subtitle,
    date: post.data.date,
    author: post.data.author,
    featured_image: post.data.featured_image,
    category: post.data.category,
  };
  const contentValues = post.content;

  return (
    <div className="container flex flex-wrap px-5 py-5  justify-center">
      <BlogForm initialValues={initialValues} contentValues={contentValues} edit={true} />
    </div>
  );
};

export default Page;
