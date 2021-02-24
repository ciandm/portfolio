import fs from 'fs';
import path, { join } from 'path';
import matter from 'gray-matter';

const projectsDirectory = path.join(process.cwd(), '/projects');

// gets all files from the directory specified
export function getSlugsFromDirectory(dir) {
  return fs.readdirSync(dir);
}

// returns meta data and slugs of all of the portfolio projects, to be used on the portfolio page to display all of the projects. These will be filtered out into design/coding within the page itself.
export function getAllPortfolioProjects() {
  const fileNames = getSlugsFromDirectory(projectsDirectory);

  return fileNames.map(filename => {
    const filePath = path.join(projectsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    return {
      data,
      slug: filename.replace(/\.md$/, ''),
    };
  });
}

// returns the content of the page, as well as the meta data.
export function getContentsBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(projectsDirectory, `/${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    content,
    data,
  };
}

// returns a selected amount of projects and its meta data, given by an array.
export function getProjectsBySlug(slugs = []) {
  return slugs.map(slug => {
    const { data } = getContentsBySlug(slug);
    return {
      data,
      slug,
    };
  });
}
