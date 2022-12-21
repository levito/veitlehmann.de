import type { SectionData } from './components/Section.astro'

export const slugify = (string: string = '') =>
  string.toLowerCase().replace(/\s/g, '-')

export const getContent = async () => {
  const sections = await Promise.all(
    Object.values(import.meta.glob<SectionData>(`./content/*.md*`)).map(
      (resolve) => resolve(),
    ),
  )
  const links = sections.map(({ frontmatter }) => frontmatter?.title)
  const year = new Date().getFullYear()

  return { links, sections, year }
}
