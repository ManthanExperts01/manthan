import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request: NextRequest, { params }: { params: { path: string[] } }) {
  const filePath = params.path.join('/');
  const imagePath = path.join(process.cwd(), 'public', 'images', 'manthan-exprerts', 'blogs', filePath);

  if (fs.existsSync(imagePath)) {
    const fileContent = fs.readFileSync(imagePath);
    const contentType = path.extname(imagePath).toLowerCase() === '.png' ? 'image/png' : 'image/jpeg';

    return new NextResponse(fileContent, {
      headers: { 'Content-Type': contentType },
    });
  } else {
    return NextResponse.json({ message: 'Image not found' }, { status: 404 });
  }
}
