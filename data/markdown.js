import { promises as fs } from 'fs';
import path, { join } from 'path';
import matter from 'gray-matter';

const projectsDirectory = path.join(process.cwd(), '/projects');

export async function getSlugsFromDirectory(dir) {
  return fs.readdir(dir);
}

export async function getAllPortfolioProjects() {
  const fileNames = await getSlugsFromDirectory(projectsDirectory);

  return fileNames.map(async filename => {
    const filePath = path.join(projectsDirectory, filename);
    const fileContents = await fs.readFile(filePath, 'utf8');
    const { data } = matter(fileContents);
    return {
      data,
      slug: filename.replace(/\.md$/, ''),
    };
  });
}

export async function getContentsBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(projectsDirectory, `/${realSlug}.md`);
  const fileContents = await fs.readFile(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    content,
    data,
  };
}

export async function getAllProjectPageSlugs() {
  const pages = await getSlugsFromDirectory(projectsDirectory);
  return pages.map(page => page.replace(/\.md$/, ''));
}

export function getPageContentsBySlug(slug) {
  return getContentsBySlug(projectsDirectory, slug);
}

export async function getProjectsBySlug(slugs = []) {
  return slugs.map(async slug => {
    const { data } = await getContentsBySlug(slug);
    return {
      data,
      slug,
    };
  });
}
