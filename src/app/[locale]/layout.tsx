import type { Metadata } from "next"
import { locales } from '@/i18n';
import { cn } from '@/lib/utils';
import { Fira_Code } from 'next/font/google';
import { notFound } from 'next/navigation';
import { LocaleInitializer } from './locale-initializer';
import { NextIntlClientProvider } from 'next-intl';
import Header from '@/components/layout/header';
import { MetaProps } from "@/types/layout";
import "./globals.css"
import { getTranslations } from "next-intl/server";

const firaCode = Fira_Code({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-fira-code',
});

export async function generateMetadata(
  { params }: MetaProps
): Promise<Metadata> {
  const { locale } = await params;

  const global = await getTranslations({
    locale,
    namespace: 'global.metadata'
  });

  return {
    title: global('title'),
    description: global('description')
  };
}

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
          className={cn("relative", firaCode.variable)}
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
