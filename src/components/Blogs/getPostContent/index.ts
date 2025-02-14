import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const getPostContent = (slug: string) => {
  const folder = path.join(process.cwd(), 'src', 'shared', 'posts');
  const file = path.join(folder, `${slug}.md`);
  try {
    const content = fs.readFileSync(file, 'utf8');
    const matterResult = matter(content);
    return matterResult;
  } catch (err) {
    return null;
  }
};

export default getPostContent;
