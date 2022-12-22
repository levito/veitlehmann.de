import { defineCollection, z } from 'astro:content'

// importing from utils breaks generating types, so languages are exported here
export const languages = ['de', 'en'] as const

export const sections = defineCollection({
  // prepare slug to be slugified with counter per language in utils
  slug: ({ data }) => data.slug || data.title,
  schema: {
    lang: z.enum(languages).optional(),
    slug: z.string().optional(),
    title: z.string(),
  },
})

export const collections = { sections }
