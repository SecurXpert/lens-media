import { Veloura } from "./veloura.js";
import { Hyndav } from "./hyndav.js";
import { Manyavar } from "./manyavar.js";
import { Shoot } from "./shoot.js";
import { Pure } from "./pure.js";
import { Aroma } from "./aroma.js";

export const projectData = {
  veloura: Veloura,
  hyndav: Hyndav,
  manyavar: Manyavar,
  shoot: Shoot,
  pure: Pure,
  aroma: Aroma,
};

export const getProjectData = (slug) => {
  return projectData[slug] || null;
};

export const getAllProjects = () => {
  return Object.values(projectData);
};
