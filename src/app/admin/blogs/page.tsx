import getPostMetadata from '@/components/Blogs/getPostMetadata';
import PostPreview from '@/components/Blogs/PostPreview';
import Link from 'next/link';

const Page = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => <PostPreview key={post.slug} {...post} edit={true} />);
  return (
    <div className="container ">
      <div className="flex px-5 md:px-20 py-5 justify-between mt-4 items-center">
        <h1 className="text-xl md:text-2xl">My Blogs</h1>
        <Link
          href="/admin/blogs/create"
          className="bg-emerald-900 text-sm md:text-base hover:bg-emerald-950 text-white  py-2 px-4 rounded"
        >
          Create Blog
        </Link>
      </div>
      <div className="flex flex-wrap px-5 py-5 justify-center">{postPreviews}</div>
    </div>
  );
};

export default Page;
