import { twMerge } from 'tailwind-merge';
import { WrapperTagProps } from '@/types/faq';

const WidgetWrapper = ({ children, id, containerClass }: WrapperTagProps) => (
  <section className="relative not-prose scroll-mt-[72px]" id={id}>
    <div
      className={twMerge(
        'relative mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16 lg:py-20 text-default',
        containerClass,
      )}
    >
      {children}
    </div>
  </section>
);

export default WidgetWrapper;
