'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useMemo } from 'react';
import getScrollAnimation from '@/utils/getScrollAnimation';
import ScrollAnimationWrapper from '../ScrollAnimationWrapper';
import Link from 'next/link';
import { HelpfulBlogsProps } from '@/types/faq';

const HelpfulBlogs = ({ title, contents, lists }: HelpfulBlogsProps) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <section className="container">
      <div className="lg:flex lg:items-center lg:justify-center">
        <div className="w-full h-[490px] bg-[url('/images/helpful-blogs.png')] bg-cover">
          <div className="w-10/12 mx-auto mt-12 space-y-5 px-4 py-8 rounded-lg text-black  bg-white">
            <h5 className="font-bold text-center text-4xl">{title}</h5>
            {contents.map((content, i) => (
              <p key={i}>{content}</p>
            ))}
          </div>
        </div>
        <div className="w-full h-[490px] bg-secondary ">
          <div className="w-10/12 mx-auto mt-12 px-4 py-8 text-white">
            <ScrollAnimationWrapper className="space-y-12">
              <motion.div variants={scrollAnimation}>
                <div>
                  <h5 className="font-bold text-center text-4xl tracking-tight text-white dark:text-white">
                    Helpful Blogs
                  </h5>
                </div>
              </motion.div>
              <motion.div variants={scrollAnimation} className="underline font-semibold flex items-center">
                <ul className="flex pl-6 text-xl list-disc flex-col gap-6 ">
                  {lists.map((list, index) => (
                    <li key={index}>
                      <Link href={list.href}>{list.label}</Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpfulBlogs;
