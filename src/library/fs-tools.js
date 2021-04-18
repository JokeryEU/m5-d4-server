import fs from "fs-extra";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const { readJSON, writeJSON, writeFile, createReadStream } = fs;

const wholeData = join(dirname(fileURLToPath(import.meta.url)), "../data");
const studentsFiles = join(
  dirname(fileURLToPath(import.meta.url)),
  "../../public/img/students"
);
const projectsFiles = join(
  dirname(fileURLToPath(import.meta.url)),
  "../../public/img/projects"
);

export const getStudents = async () =>
  await readJSON(join(wholeData, "students.json"));

export const getProjects = async () =>
  await readJSON(join(wholeData, "projects.json"));

export const getReviews = async () =>
  await readJSON(join(wholeData, "reviews.json"));

export const writeStudents = async (content) =>
  await writeJSON(join(wholeData, "students.json"), content);

export const writeProjects = async (content) =>
  await writeJSON(join(wholeData, "projects.json"), content);

export const writeReviews = async (content) =>
  await writeJSON(join(wholeData, "reviews.json"), content);

export const writeStudentPics = async (fileName, content) =>
  await writeFile(join(studentsFiles, fileName), content);

export const writeProjectPics = async (fileName, content) =>
  await writeFile(join(projectsFiles, fileName), content);

export const getCurrentFile = (currentFile) =>
  dirname(fileURLToPath(currentFile));

export const readStudentPics = (fileName) =>
  createReadStream(join(studentsFiles, fileName));
