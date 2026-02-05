import { locales } from '@/i18n';
import { cn } from '@/lib/utils';
import { Montserrat } from 'next/font/google';
import { notFound } from 'next/navigation';
import { LocaleInitializer } from './locale-initializer';
import { NextIntlClientProvider } from 'next-intl';
import "./globals.css"
import Header from '@/components/layout/header';

const montserrat = Montserrat({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-montserrat',
});

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params
  
    if (!locales.includes(locale as any)) {
      notFound()
    }
  
    const messages = (await import(`../../messages/${locale}.json`)).default
  
    return (
      <html lang={locale}>
        <body
          className={cn("relative", montserrat.variable)}
          suppressHydrationWarning
        >
          <NextIntlClientProvider locale={locale} messages={messages} timeZone="Europe/Madrid">
            <LocaleInitializer />
            <div
              className="fixed inset-0 z-0"
              style={{
                backgroundImage: `radial-gradient(circle 500px at 50% 300px, rgba(16,185,129,0.35), transparent)`,
              }}
            />
            <Header />
            <main className="min-h-screen w-full relative z-10">
              {children}
            </main>
            <footer></footer>
          </NextIntlClientProvider>
        </body>
      </html>
    )
}
