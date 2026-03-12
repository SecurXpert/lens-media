import { project1 } from './veloura';
import { project2 } from './hyndav';
import { project3 } from './manyavar';
import { project4 } from './shoot';
import { project5 } from './pure';
import { project6 } from './aroma';         

export const projectData = {
  'project1': project1,
  'project2': project2,
  'project3': project3,
  'project4': project4,
  'project5': project5,
  'project6': project6
};

export const getProjectData = (slug) => {
  return projectData[slug] || null;
};

export const getAllProjects = () => {
  return Object.values(projectData);
};
