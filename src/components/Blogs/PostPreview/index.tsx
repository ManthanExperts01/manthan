import Link from 'next/link';
import { PostMetadata } from '@/components/Blogs/PostMetadata';
import DeleteButton from './delete-button';

const PostPreview = (props: PostMetadata & { admin?: boolean }) => {
  return (
    <div className="max-w-[400px] m-4">
      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5 flex flex-col h-full">
        <a href={`/${props.slug}`}>
          <img className="rounded-t-lg" src={props?.featured_image} alt="" />
        </a>
        <div className="p-5 flex flex-col flex-grow">
          <Link href={`/${props.slug}`} passHref>
            <h5 className="text-gray-900 font-bold text-lg tracking-tight mb-2">{props.title}</h5>
          </Link>
          <p className="font-normal text-black mb-3 flex-grow">{props.subtitle}</p>
          <div className="mx-auto space-x-2">
            <Link
              href={`/${props.slug}`}
              className="text-secondary bg-white hover:bg-secondary hover:text-white font-medium text-sm px-3 py-2 text-center inline-flex items-center border-2 border-secondary"
              passHref
            >
              Read more
            </Link>
            {props.admin && (
              <>
                <Link
                  href={`/admin/blogs/${props.slug}`}
                  className="text-secondary bg-white hover:bg-secondary hover:text-white font-medium text-sm px-3 py-2 text-center inline-flex items-center border-2 border-secondary"
                  passHref
                >
                  Edit blog
                </Link>
                <DeleteButton slug={props.slug} />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPreview;
