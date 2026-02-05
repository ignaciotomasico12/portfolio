'use client'

import { useEffect } from 'react'
import { usePathname, useRouter } from '@/navigation'
import { useLocale } from 'next-intl'
import { Locale, locales } from '@/i18n'
import { STORAGE_KEYS } from '@/lib/constants'
import { loadFromStorage } from '@/lib/storage'


export function LocaleInitializer() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const storedLocale = loadFromStorage<Locale>(STORAGE_KEYS.USER_LANGUAGE)

  useEffect(() => {
    if (storedLocale && locales.includes(storedLocale)) {
      if (locale !== storedLocale) {
        router.replace(pathname, { locale: storedLocale })
      }
    }
  }, [pathname, router, storedLocale])

  return null
}
