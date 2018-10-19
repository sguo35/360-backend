import mongoose from "mongoose";

import { Prompt } from "./Prompt";

export type ProjectModel = mongoose.Document & {
  students: Array<string>,
  project: string
};

const projectSchema = new mongoose.Schema({
  students: { type: Array },
  project: { type: String }
}, { timestamps: true });

const Project = mongoose.model("Project", projectSchema);
export default Project;
