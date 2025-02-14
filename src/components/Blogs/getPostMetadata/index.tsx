import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { PostMetadata } from "@/components/Blogs/PostMetadata";

const getPostMetadata = (): PostMetadata[] => {
  const folder = path.join(process.cwd(), "src", "shared", "posts");
  const files = fs.readdirSync(folder);
  
  console.log("Markdown Files Found:", files); // Yeh check karega ki files exist karti hain ya nahi

  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  const posts = markdownPosts.map((fileName) => {
    try {
      console.log(`Processing: ${fileName}`); // Yeh check karega ki file process ho rahi hai ya nahi

      const fileContents = fs.readFileSync(path.join(folder, fileName), "utf8");
      const matterResult = matter(fileContents);

      if (!matterResult.data.title || !matterResult.data.date) {
        console.warn(`Skipping ${fileName}: Missing title or date`);
        return null;
      }

      return {
        title: matterResult.data.title,
        date: matterResult.data.date,
        subtitle: matterResult.data.subtitle || "",
        slug: fileName.replace(".md", ""),
        category: matterResult.data.category || [],
        author: matterResult.data.author || "Unknown",
        featured_image: matterResult.data.featured_image || "/default.png",
      };
    } catch (err) {
      console.error(`Error reading ${fileName}:`, err);
      return null;
    }
  });

  return posts.filter(Boolean); // Remove null values
};

export default getPostMetadata;
