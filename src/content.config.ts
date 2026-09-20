import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// One markdown file per project in src/content/projects/.
// Files starting with "_" (like _TEMPLATE.md) are ignored.
const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      location: z.string(), // town / city shown on cards and the map
      sector: z.enum(['Industrial', 'Commercial', 'Domestic', 'Public sector']).or(z.string()),
      services: z.array(z.string()).default([]),
      summary: z.string(), // one or two sentences for cards + map hover preview
      date: z.coerce.date().optional(), // completion date, used for ordering
      lat: z.number(), // map pin
      lng: z.number(),
      cover: image().optional(),
      gallery: z.array(image()).default([]),
      featured: z.boolean().default(false), // show on the home page
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects };
