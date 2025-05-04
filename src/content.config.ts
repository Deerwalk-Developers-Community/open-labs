import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const labs = defineCollection({
  loader: glob({ pattern: "**/*x", base: "/src/pages/labs" }),
  schema: z.object({
    title: z.string(),
    college_id: z.string(),
    college_name: z.string(),
    course: z.string(),
    semester: z.number().min(1).max(8),
    subject: z.string(),
    university_id: z.string(),
    university_name: z.string(),
  }),
});

export const collections = { labs };
