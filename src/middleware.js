import { NextResponse } from 'next/server'

const locales = ['es', 'en']
const defaultLocale = 'es'

export function middleware(request) {
  const { pathname } = request.nextUrl
  
  // Check if pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  // Redirect to default locale (always Spanish)
  return NextResponse.redirect(new URL(`/${defaultLocale}${pathname}`, request.url))
}

export const config = {
  matcher: [
    // Skip static files, api, next internals, etc.
    '/((?!api|_next/static|_next/image|favicon.ico|img|styles.css).*)',
  ],
}
