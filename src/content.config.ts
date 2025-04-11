import { file, glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const universities = defineCollection({
  loader: file("./src/content/universities.yaml"),
});

const colleges = defineCollection({
  loader: file("./src/content/colleges.yaml"),
});

export const collections = { universities, colleges };
