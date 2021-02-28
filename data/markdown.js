import fs from 'fs';
import path, { join } from 'path';
import matter from 'gray-matter';

const projectsDirectory = path.join(process.cwd(), '/portfolio-projects');

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

// Generate a random number to display random projects on project pages.
function generateRandomNumbers(arrayLength) {
  const generateNumber = () => {
    return Math.floor(Math.random() * arrayLength);
  };

  const numberOne = generateNumber();
  let numberTwo;
  do {
    numberTwo = generateNumber();
  } while (numberTwo === numberOne);

  return [numberOne, numberTwo];
}

// Filter projects by removing a specific project, specified through the arg, and then randomly choose two projects to display, using the generate random number function above.
export function getRandomProjects(excluded) {
  const fileNames = getSlugsFromDirectory(projectsDirectory)
    .map(file => file.replace(/\.md$/, ''))
    .filter(file => file !== excluded);
  const [numberOne, numberTwo] = generateRandomNumbers(fileNames.length);
  // Filter the correct files before mapping, instead of a condition in the map which could return null or undefined and cause an error.
  return fileNames
    .filter(
      slug =>
        fileNames.indexOf(slug) === numberOne ||
        fileNames.indexOf(slug) === numberTwo
    )
    .map(slug => {
      const { data } = getContentsBySlug(slug);
      return {
        data,
        slug,
      };
    });
}
