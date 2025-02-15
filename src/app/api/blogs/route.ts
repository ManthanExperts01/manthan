import path from 'path';
import matter from 'gray-matter';
import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function POST(req: Request) {
  const formData = await req.formData();
  const title = formData.get('title') as string;
  const subtitle = formData.get('subtitle') as string;
  const date = formData.get('date') as string;
  const author = formData.get('author') as string;
  const category = JSON.parse(formData.get('category') as string) as string[];
  const featuredImage = formData.get('featured_image') as File | null;
  const content = formData.get('content') as string;
  const slug = title
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
  const frontMatter = matter.stringify(content, {
    title,
    subtitle,
    date,
    category,
    featured_image: `/images/manthan-exprerts/blogs/${slug}.png`,
    author,
  });
  try {
    const mdFilePath = path.join(process.cwd(), 'src', 'shared', 'posts', `${slug}.md`);
    await fs.mkdir(path.dirname(mdFilePath), { recursive: true });
    await fs.writeFile(mdFilePath, frontMatter, 'utf-8');
    if (featuredImage) {
      const imageFilePath = path.join(process.cwd(), 'public', 'images', 'manthan-exprerts', 'blogs', `${slug}.png`);
      await fs.mkdir(path.dirname(imageFilePath), { recursive: true });
      const arrayBuffer = await featuredImage.arrayBuffer();
      const buffer = new Uint8Array(arrayBuffer);
      await fs.writeFile(imageFilePath, buffer);
    }
    revalidatePath('/blogs');
    revalidatePath(`/${slug}`);
    revalidatePath('/admin/blogs');
    revalidatePath(`/admin/blogs/${slug}`);
    return NextResponse.json({ message: 'Blog saved successfully!' }, { status: 201 });
  } catch (err) {
    console.error('Failed to save blog!', err);
    return NextResponse.json({ message: 'Failed to save blog!' }, { status: 500 });
  }
}
