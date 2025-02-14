import Link from "next/link";
import { twMerge } from 'tailwind-merge';

const LinkWithAnimation = ({
  className,
  href,
  LinkText,
  icon: Icon,
  targetBlank,
}: {
  className?: string;
  href: string;
  LinkText?: string;
  icon?: React.ComponentType<{ className?: string }>;
  targetBlank?: boolean;
  
}) => {
  // Ensure href is an absolute path
  const absoluteHref = href.startsWith('#') ? `/${href}` : href;

  return (
    <Link
      href={absoluteHref}
      className={twMerge(
        `relative block w-fit text-base duration-300 after:absolute after:block after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:transition after:duration-300 after:content-[''] hover:after:scale-x-100 md:me-6 xl:me-4`,
        className
      )}
      target={targetBlank ? "_blank" : "_self"}
      rel={targetBlank ? "noopener noreferrer" : undefined}
    >
      {Icon && (
        <Icon className={`w-5 h-5 ${LinkText ? 'mr-1 -ml-1.5 rtl:ml-1 rtl:-mr-1.5' : ''}`} />
      )}
      {LinkText}
    </Link>
  );
};

export default LinkWithAnimation;
