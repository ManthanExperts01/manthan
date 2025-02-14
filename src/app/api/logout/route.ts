import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const url = new URL('/admin', req.url);
  const response = NextResponse.redirect(url);
  response.cookies.delete('auth');
  return response;
}
