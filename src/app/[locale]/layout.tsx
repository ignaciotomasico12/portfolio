import type { Metadata } from "next"
import { locales } from '@/i18n';
import { cn } from '@/lib/utils';
import { Fira_Code } from 'next/font/google';
import { notFound } from 'next/navigation';
import { LocaleInitializer } from './locale-initializer';
import { NextIntlClientProvider } from 'next-intl';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { MetaProps } from "@/types/layout";
import "./globals.css"
import { getTranslations } from "next-intl/server";
import ScrollToTop from '@/components/scroll-to-top';
import SplashCursor from '@/components/splash-cursor';
import CustomCursor from '@/components/custom-cursor';
import PageTransition from '@/components/layout/page-transition';
import { ParticlesBackground } from '@/components/ui/particles-background';

const firaCode = Fira_Code({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-fira-code',
});

import { getGlobalData } from "@/sanity/lib/fetch";
import { getLocalizedValue } from "@/sanity/lib/utils";

export async function generateMetadata(
  { params }: MetaProps
): Promise<Metadata> {
  const { locale } = await params;
  const globalData = await getGlobalData();

  const title = getLocalizedValue(globalData?.metadata?.title, locale);
  const description = getLocalizedValue(globalData?.metadata?.description, locale);

  return {
    title: title || "Ignacio Tomás | Frontend Developer",
    description: description || "Portfolio personal de Ignacio Tomás."
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
            <ParticlesBackground />
            <Header />
            <main className="relative z-10 w-full max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8">
              <PageTransition>
                {children}
              </PageTransition>
            </main>
            <Footer />
            <ScrollToTop />
            <SplashCursor />
            <CustomCursor />
          </NextIntlClientProvider>
        </body>
      </html>
    )
}
