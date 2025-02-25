import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const authCookie = request.cookies.get('auth');

  if (url.pathname === '/admin') {
    if (authCookie) {
      return NextResponse.redirect(new URL('/admin/blogs', request.url));
    }
    return NextResponse.next();
  }
  if (url.pathname === '/api/login' || url.pathname === '/api/logout' || url.pathname === '/api/send-email') {
    return NextResponse.next();
  }
  if (url.pathname.startsWith('/admin')) {
    if (!authCookie) {
      return NextResponse.redirect(new URL('/admin', request.url));
    }
  }
  if (url.pathname.startsWith('/api')) {
    if (!authCookie) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/api/:path*'],
};
