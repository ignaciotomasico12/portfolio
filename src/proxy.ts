import { defaultLocale, locales } from '@/i18n';
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales,
  defaultLocale,
  localeDetection: false,
  localePrefix: 'as-needed'
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
