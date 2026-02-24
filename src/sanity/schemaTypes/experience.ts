import { defineType, defineField } from 'sanity'
import { GraduationCap } from 'lucide-react'

export const experienceType = defineType({
    name: 'experience',
    title: 'Experiencia',
    type: 'document',
    // @ts-ignore
    icon: GraduationCap,
    fields: [
        defineField({
            name: 'company',
            title: 'Empresa',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'role',
            title: 'Cargo',
            type: 'locale-string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'location',
            title: 'Ubicación',
            type: 'locale-string',
        }),
        defineField({
            name: 'dates',
            title: 'Fechas (ej: Octubre 2024 - Actualidad)',
            type: 'locale-string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'responsibilities',
            title: 'Responsabilidades',
            type: 'object',
            fields: [
                defineField({
                    name: 'es',
                    title: 'Español',
                    type: 'array',
                    of: [{ type: 'string' }],
                }),
                defineField({
                    name: 'en',
                    title: 'English',
                    type: 'array',
                    of: [{ type: 'string' }],
                }),
            ],
        }),
        defineField({
            name: 'skills',
            title: 'Skills',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'order',
            title: 'Orden (descendente)',
            type: 'number',
        }),
    ],
})
