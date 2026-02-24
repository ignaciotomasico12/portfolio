import { defineType, defineField } from 'sanity'
import { Briefcase } from 'lucide-react'

export const projectType = defineType({
    name: 'project',
    title: 'Proyectos',
    type: 'document',
    // @ts-ignore
    icon: Briefcase,
    fields: [
        defineField({
            name: 'title',
            title: 'Título',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Descripción',
            type: 'locale-text',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'image',
            title: 'Imagen',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'link',
            title: 'Enlace del Proyecto',
            type: 'url',
        }),
        defineField({
            name: 'github',
            title: 'GitHub Repo',
            type: 'url',
        }),
        defineField({
            name: 'technologies',
            title: 'Tecnologías',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'order',
            title: 'Orden',
            type: 'number',
        }),
    ],
})
