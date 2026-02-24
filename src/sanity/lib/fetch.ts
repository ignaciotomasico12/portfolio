import { client } from './client'
import { GLOBAL_QUERY, PROJECTS_QUERY, EXPERIENCE_QUERY } from './queries'

export async function getGlobalData() {
    return await client.fetch(GLOBAL_QUERY)
}

export async function getProjectsData() {
    return await client.fetch(PROJECTS_QUERY)
}

export async function getExperienceData() {
    return await client.fetch(EXPERIENCE_QUERY)
}
