import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get("image") as File | null;

  if (!file) {
    return NextResponse.json({ message: "No file uploaded" }, { status: 400 });
  }

  const fileName = `${Date.now()}-${file.name}`;
  const imagePath = path.join(process.cwd(), "public", "uploads", fileName);

  await fs.mkdir(path.dirname(imagePath), { recursive: true });

  const buffer = new Uint8Array(await file.arrayBuffer());
  await fs.writeFile(imagePath, buffer);

  const imageUrl = `/uploads/${fileName}`;
  console.log(imageUrl);
  
  return NextResponse.json({ imageUrl }, { status: 201 });
}
