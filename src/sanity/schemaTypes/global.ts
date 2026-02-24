import { defineType, defineField } from 'sanity'
import { Settings } from 'lucide-react'

export const globalType = defineType({
    name: 'global',
    title: 'Página Global',
    type: 'document',
    // @ts-ignore
    icon: Settings,
    fields: [
        defineField({
            name: 'title',
            title: 'Título de la web',
            type: 'string',
        }),
        defineField({
            name: 'metadata',
            title: 'Metadatos (SEO)',
            type: 'object',
            fields: [
                defineField({ name: 'title', title: 'Meta Title', type: 'locale-string' }),
                defineField({ name: 'description', title: 'Meta Description', type: 'locale-text' }),
            ]
        }),
        defineField({
            name: 'hero',
            title: 'Hero Section',
            type: 'object',
            fields: [
                defineField({ name: 'title', title: 'Título Hero (Nombre)', type: 'string' }),
                defineField({ name: 'subtitle', title: 'Subtítulo (Soy...)', type: 'locale-string' }),
                defineField({
                    name: 'words',
                    title: 'Palabras animadas',
                    type: 'object',
                    fields: [
                        defineField({ name: 'es', title: 'Español', type: 'array', of: [{ type: 'string' }] }),
                        defineField({ name: 'en', title: 'English', type: 'array', of: [{ type: 'string' }] }),
                    ]
                }),
                defineField({ name: 'description', title: 'Descripción Hero', type: 'locale-text' }),
            ]
        }),
        defineField({
            name: 'about',
            title: 'Sobre mí',
            type: 'object',
            fields: [
                defineField({ name: 'title', title: 'Título Sección', type: 'locale-string' }),
                defineField({
                    name: 'paragraphs',
                    title: 'Párrafos',
                    type: 'object',
                    fields: [
                        defineField({ name: 'es', title: 'Español', type: 'array', of: [{ type: 'text' }] }),
                        defineField({ name: 'en', title: 'English', type: 'array', of: [{ type: 'text' }] }),
                    ]
                }),
            ]
        }),
        defineField({
            name: 'logo',
            title: 'Logo/Favicon',
            type: 'image',
        }),
        defineField({
            name: 'social',
            title: 'Redes Sociales',
            type: 'object',
            fields: [
                defineField({ name: 'github', title: 'GitHub URL', type: 'url' }),
                defineField({ name: 'linkedin', title: 'LinkedIn URL', type: 'url' }),
                defineField({ name: 'email', title: 'Email', type: 'string' }),
                defineField({ name: 'cv', title: 'CV (URL o archivo)', type: 'file' }),
            ]
        })
    ],
})
