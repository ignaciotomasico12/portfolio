import { defineQuery } from 'next-sanity'

export const GLOBAL_QUERY = defineQuery(`*[_type == "global"][0]`)

export const PROJECTS_QUERY = defineQuery(`*[_type == "project"] | order(order asc)`)

export const EXPERIENCE_QUERY = defineQuery(`*[_type == "experience"] | order(order desc)`)
