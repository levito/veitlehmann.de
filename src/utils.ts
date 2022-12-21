import { getCollection } from 'astro:content'

export const getContent = async (language = 'de') => {
  const sections = await getCollection('sections', ({ id }) =>
    id.startsWith(`${language}/`),
  )
  const links = sections.map(({ data: { title }, slug }) => ({ title, slug }))

  return { links, sections }
}
