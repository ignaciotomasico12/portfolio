import { type SchemaTypeDefinition } from 'sanity'
import { projectType } from './project'
import { experienceType } from './experience'
import { globalType } from './global'
import { localeString, localeText } from './locale-string'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [globalType, projectType, experienceType, localeString, localeText],
}
