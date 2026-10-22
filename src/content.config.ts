import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog posts live in src/content/blog/<slug>.md and are served at /blog/<slug>/.
// Set `draft: true` to keep a post out of the build.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(), // the H1
    seoTitle: z.string().optional(), // <title>, 50 to 60 characters; falls back to the H1
    primaryKeyword: z.string().optional(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    topic: z.enum(['hypnosis', 'breathwork']),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
