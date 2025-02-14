import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const formData = await req.formData();
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  if (email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD) {
    const response = NextResponse.json({ message: 'Invalid email or password' }, { status: 401 });
    return response;
  }

  const response = NextResponse.json({ message: 'Logged in successfully!' }, { status: 200 });
  response.cookies.set('auth', 'true', { httpOnly: true, secure: true, path: '/', maxAge: 60 * 60 });

  return response;
}
