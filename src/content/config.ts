import { defineCollection, z, image } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    image: image(),
    status: z.string().optional(),
    description: z.string(),
    date: z.string(),
    priority: z.number(),
    videoUrl: z.string().url().optional(),
    githubUrl: z.string().url().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const research = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    image: image(),
    date: z.string(),
    topics: z.array(z.string()).optional(),
    linkUrl: z.string().url().optional(),
    linkText: z.string().optional(),
    advisor: z.string().optional(),
    advisorUrl: z.string().url().optional(),
  }),
});

const courses = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    level: z.enum(['Graduate', 'Undergraduate']),
    image: image(),
    description: z.string(),
  }),
});

const industry = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    company: z.string(),
    image: image(),
    dates: z.string(),
    date: z.string(),
  }),
});

const teaching = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    course: z.string(),
    image: image(),
    dates: z.string(),
    date: z.string(),
  }),
});

export const collections = { projects, research, courses, industry, teaching };
