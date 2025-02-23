import { Metadata } from 'next';
import CTA from '@/components/Common/CTA';
import { CallToActionType } from '@/types/faq';
import ImageFallback from '@/components/ImageFallback';
import getPostContent from '@/components/Blogs/getPostContent';
import getPostMetadata from '@/components/Blogs/getPostMetadata';
import { generateToC } from '@/utils/generateToC';

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts?.map((post) => ({
    slug: post.slug,
  }));
};

export const generateMetadata = ({ params }: { params: { slug: string } }): Metadata => {
  const post = getPostContent(params.slug);

  if (!post) {
    return {
      title: '404: Page Not Found',
      description: 'This page does not exist. Go to the homepage to find the latest articles!',
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://manthanexperts.com';

  return {
    title: `${post.data.title} — ${post.data.subtitle}`,
    description: post.data.subtitle,
    alternates: {
      canonical: `${siteUrl}/${params.slug}`,
    },
  };
};

const PostPage = ({ params }: { params: { slug: string } }) => {
  const post = getPostContent(params.slug);
  const { tocs, content } = generateToC(post.content);

  const callToAction: CallToActionType = {
    text: 'Click Here To File Your ITR',
    href: '/contact',
  };

  if (!post) {
    return (
      <div className="py-5">
        <h1 className="text-center mb-5 title">404: This Page Does not Exist</h1>
        <article className="text-center article">Go to homepage to find latest articles!</article>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="my-1 text-center px-1 font-semibold text-secondary text-base md:text-lg tracking-wide">
        <span className="flex justify-center">
          {post.data.category.map((category: string, index: number) => (
            <div key={`category-${index}`} className="pr-4">
              {category}
            </div>
          ))}
        </span>
      </div>
      <h1 className="text-black text-center text-3xl md:text-4xl font-extrabold">{post.data.title}</h1>
      <div className="text-black text-base md:text-lg font-medium text-center my-3">
        <span>{post.data.subtitle}</span>
      </div>
      <article className="article">
        <figure className="flex justify-center">
          <ImageFallback src={post.data.featured_image} alt="" width={800} height={480} priority />
        </figure>
        <div className="my-2 space-y-2">
          <h2 className="text-4xl font-bold text-black">Table of Contents</h2>
          <ul className="list-disc pl-5">
            {tocs.map((item, index) => (
              <li className="underline text-xl" key={index}>
                <a href={`#${item.id}`} className="text-blue-500">
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="prose max-w-[100%] border">
          <div className="blog-preview prose prose-lg max-w-none prose-a:m-0" dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
      </article>
      {callToAction && (
        <CTA
          callToAction={callToAction}
          linkClass="btn bg-black dark:bg-white dark:text-black m-1 py-2 px-8 text-white text-md font-normal shadow-none md:px-6 mb-10"
        />
      )}
    </div>
  );
};

export default PostPage;
