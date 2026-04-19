import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const global = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/global" }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    publishDate: z.coerce.date(),
    heroImage: z.string(),
  }),
});

const palestine = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/palestine" }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    publishDate: z.coerce.date(),
    heroImage: z.string(),
  }),
});

export const collections = { global, palestine };
