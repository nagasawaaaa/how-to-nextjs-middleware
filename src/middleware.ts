import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const basicAuth = req.headers.get('Authorization');
  const url = req.nextUrl;

  if (basicAuth) {
    const [username, password] = atob(basicAuth.split(' ')[1]).split(':');

    // NOTE: 本来は .env から取得するのが望ましいけど簡略化のためベタ書き
    if (username === 'user' && password === 'password') {
      return NextResponse.next();
    }

    return NextResponse.json(
      { error: 'Invalid credentials' },
      {
        headers: {
          'WWW-Authenticate': 'Basic realm="Secure Area"',
        },
        status: 401,
      }
    );
  } else {
    return NextResponse.json(
      { error: 'No credentials provided' },
      {
        headers: {
          'WWW-Authenticate': 'Basic realm="Secure Area"',
        },
        status: 401,
      }
    );
  }
}

/**
 * @see https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
 */
export const config = {
  matcher: '/secret/:path*',
};
