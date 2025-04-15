import { file, glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const universities = defineCollection({
  loader: file("./src/content/universities.yaml"),
});

const colleges = defineCollection({
  loader: file("./src/content/colleges.yaml"),
});
const courses = defineCollection({
  loader: file("./src/content/courses.yaml"),
});

const subjects = defineCollection({
  loader: file("./src/content/subjects.yaml"),
});

export const collections = { universities, colleges, courses, subjects };
