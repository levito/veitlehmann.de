import { slugifyWithCounter } from '@sindresorhus/slugify'
import { getCollection } from 'astro:content'
import { languages } from './content/config'

export { languages }
export const defaultLanguage = languages[0]
export type Language = typeof languages[number] | ''

export const getContent = async (lang: Language = defaultLanguage) => {
  const slugify = slugifyWithCounter()
  const sections = (
    await getCollection('sections', ({ id }) => id.startsWith(`${lang}/`))
  ).map((entry) => ({ ...entry, slug: slugify(entry.slug) }))
  const links = sections.map(({ data: { title }, slug }) => ({ title, slug }))

  return { links, sections }
}
