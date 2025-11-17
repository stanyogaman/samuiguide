'use client'

import { useParams } from 'next/navigation'
import { Locale } from '@/i18n/config'
import { interpolate } from '@/lib/utils'

/**
 * Client-side translation hook
 * For server components, use getDictionary directly
 */
export function useTranslation(dictionary: any) {
  const params = useParams()
  const locale = (params?.lang as Locale) || 'en'

  const t = (key: string, values?: Record<string, any>): string => {
    const keys = key.split('.')
    let value = dictionary

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        console.warn(`Translation key not found: ${key}`)
        return key
      }
    }

    if (typeof value !== 'string') {
      console.warn(`Translation value is not a string: ${key}`)
      return key
    }

    return values ? interpolate(value, values) : value
  }

  return { t, locale }
}
