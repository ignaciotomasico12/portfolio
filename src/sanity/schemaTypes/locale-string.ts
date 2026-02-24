import { defineType, defineField } from 'sanity'

export const localeString = defineType({
    title: 'Localized String',
    name: 'locale-string',
    type: 'object',
    fields: [
        defineField({
            title: 'Español',
            name: 'es',
            type: 'string',
        }),
        defineField({
            title: 'English',
            name: 'en',
            type: 'string',
        }),
    ],
})

export const localeText = defineType({
    title: 'Localized Text',
    name: 'locale-text',
    type: 'object',
    fields: [
        defineField({
            title: 'Español',
            name: 'es',
            type: 'text',
        }),
        defineField({
            title: 'English',
            name: 'en',
            type: 'text',
        }),
    ],
})
