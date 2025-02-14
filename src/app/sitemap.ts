import { MetadataRoute } from 'next';
import getPostMetadata from '@/components/Blogs/getPostMetadata';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getPostMetadata();

  const sitemapEntries = posts.map((post) => ({
    url: `https://manthanexperts.com/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'yearly' as 'yearly', // Explicitly specifying the type
    priority: 0.8,
  }));

  return [
    {
      url: 'https://manthanexperts.com/',
      lastModified: new Date(),
      changeFrequency: 'yearly' as 'yearly',
      priority: 1,
    },
    ...sitemapEntries,
  ];
}
