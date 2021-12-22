export const fetchReadme = async (): Promise<string> => {
  return fetch(
    `https://raw.githubusercontent.com/wolffshots/wolffshots/main/README.md`
  )
    .then(async (res) => await res.text())
    .catch((err) => err);
};

export const fetchExperience = async (): Promise<string> => {
  return fetch(
    `https://raw.githubusercontent.com/wolffshots/wolffshots/main/EXPERIENCE.md`
  )
    .then(async (res) => await res.text())
    .catch((err) => err);
};

export const fetchProjects = async (): Promise<string> => {
  return fetch(
    `https://raw.githubusercontent.com/wolffshots/wolffshots/main/PROJECTS.md`
  )
    .then(async (res) => await res.text())
    .catch((err) => err);
};

export const fetchEducation = async (): Promise<string> => {
  return fetch(
    `https://raw.githubusercontent.com/wolffshots/wolffshots/main/EDUCATION.md`
  )
    .then(async (res) => await res.text())
    .catch((err) => err);
};