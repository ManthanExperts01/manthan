import PostPreview from '@/components/Blogs/PostPreview';
import getPostMetadata from '@/components/Blogs/getPostMetadata';
import { SITE } from '@/utils/site';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Blogs',
  robots: 'index, follow',
  twitter: {
    card: 'summary_large_image',
  },
};

const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    // ... is spread operator to pass all values
    <PostPreview key={post.slug} {...post} />
  ));
  return <div className="container flex flex-wrap px-5 py-5 justify-center">{postPreviews}</div>;
};

export default HomePage;
