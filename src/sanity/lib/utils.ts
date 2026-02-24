export function getLocalizedValue(value: any, locale: string) {
    if (!value) return null
    return value[locale] || value['es'] || value['en'] || null
}

export function getLocalizedArray(value: any, locale: string) {
    if (!value) return []
    return value[locale] || value['es'] || value['en'] || []
}
