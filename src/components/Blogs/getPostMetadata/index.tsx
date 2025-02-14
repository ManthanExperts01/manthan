import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { PostMetadata } from "@/components/Blogs/PostMetadata";

const getPostMetadata = (): PostMetadata[] => {
  const folder = path.join(process.cwd(), 'src', 'shared', 'posts');
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // Get gray matter data from each file
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(path.join(folder, fileName), "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace(".md", ""),
      category: matterResult.data.category,
      author: matterResult.data.author,
      featured_image: matterResult.data.featured_image,
    };
  });
  return posts;
};

export default getPostMetadata;
