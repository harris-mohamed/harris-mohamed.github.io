import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    image: z.string(),
    status: z.string().optional(),
    description: z.string(),
    videoUrl: z.string().url().optional(),
    githubUrl: z.string().url().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const research = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    image: z.string(),
    linkUrl: z.string().url().optional(),
    linkText: z.string().optional(),
    advisor: z.string().optional(),
    advisorUrl: z.string().url().optional(),
  }),
});

const courses = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    level: z.enum(['Graduate', 'Undergraduate']),
    image: z.string(),
    description: z.string(),
  }),
});

const industry = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    company: z.string(),
    image: z.string(),
    dates: z.string(),
  }),
});

export const collections = { projects, research, courses, industry };
