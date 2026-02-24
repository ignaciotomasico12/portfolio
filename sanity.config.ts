import { defineConfig, buildLegacyTheme } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { media } from 'sanity-plugin-media'
import { schema } from './src/sanity/schemaTypes'
import { projectId, dataset } from './src/sanity/env'
import { Logo } from './src/sanity/components/Logo'

const props = {
    '--my-white': '#fff',
    '--my-black': '#1E2D40', // Color fondo del app
    '--brand-primary': '#00ffc3', // Color principal
}

export const myTheme = buildLegacyTheme({
    '--black': props['--my-black'],
    '--white': props['--my-white'],
    '--gray': '#666',
    '--gray-base': '#666',
    '--component-bg': props['--my-black'],
    '--component-text-color': props['--my-white'],
    '--brand-primary': props['--brand-primary'],
    '--default-button-color': '#666',
    '--default-button-primary-color': props['--brand-primary'],
    '--main-navigation-color': props['--my-black'],
    '--main-navigation-color--inverted': props['--my-white'],
    '--focus-color': props['--brand-primary'],
})

export default defineConfig({
    basePath: '/studio',
    name: 'portfolio_studio',
    title: 'Portfolio Studio',
    projectId,
    dataset,
    schema,
    theme: myTheme,
    studio: {
        components: {
            logo: Logo,
        },
    },
    plugins: [
        structureTool({
            structure: (S) =>
                S.list()
                    .title('Contenido')
                    .items([
                        S.listItem()
                            .title('Configuración Global')
                            .id('global')
                            .child(S.document().schemaType('global').documentId('global')),
                        S.divider(),
                        ...S.documentTypeListItems().filter(
                            (listItem) => !['global', 'locale-string', 'locale-text'].includes(listItem.getId() || '')
                        ),
                    ]),
        }),
        visionTool(),
        media(),
    ],
})
