import createMiddleware from 'next-intl/middleware';
import { routing, defaultLocale } from '@/i18n/routing';
import { NextRequest, NextResponse } from 'next/server';

export default async function middleware(request: NextRequest) {
    const locale = request.headers.get('x-custom-locale') || defaultLocale;
    if (request.method === 'POST') {
        const response = NextResponse.next();
        response.headers.set('x-custom-locale', defaultLocale);
        return response;
    }
    const handleI18nRouting = createMiddleware(routing);
    const response = handleI18nRouting(request);
    response.headers.set('x-custom-locale', locale);
    return response;
}

export const config = {
    // Match all pathnames except for
    // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    matcher: ['/', '/(en|pl)/:path*', '/((?!_next|_vercel|.*\\..*).*)'],
};
