import { defineCollection, z } from 'astro:content'

export const sections = defineCollection({
  slug: ({ data }) => (data.title || '').toLowerCase().replace(/\s/g, '-'),
  schema: {
    title: z.string().optional(),
  },
})

export const collections = { sections }
