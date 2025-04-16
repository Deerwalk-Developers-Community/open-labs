import { file, glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const universities = defineCollection({
  loader: file("./src/content/universities.yaml"),
  schema: z.object({
    name: z.string(),
  }),
});

const colleges = defineCollection({
  loader: file("./src/content/colleges.yaml"),
  schema: z.object({
    name: z.string(),
    affiliated_to: z.string(),
  }),
});

const courses = defineCollection({
  loader: file("./src/content/courses.yaml"),
  schema: z.object({
    name: z.string(),
    taught_at: z.array(z.string()),
  }),
});

const subjects = defineCollection({
  loader: file("./src/content/subjects.yaml"),
  schema: z.object({
    name: z.string(),
    taught_at: z.array(z.string()),
    courses: z.array(z.string()),
  }),
});

export const collections = { universities, colleges, courses, subjects };
