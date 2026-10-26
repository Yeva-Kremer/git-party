import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const workshopsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/workshops" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      image: image(),
    }),
});

const teamCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/team" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      function: z.string(),
      bio: z.string(),
      pic: image(),
    }),
});

const foundationsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/foundations" }),
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
    }),
});

const newsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/news" }),
  schema: () =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
    }),
});

export const collections = {
  team: teamCollection,
  foundations: foundationsCollection,
  workshops: workshopsCollection,
  news: newsCollection,
};
