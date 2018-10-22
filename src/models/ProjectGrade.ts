import mongoose from "mongoose";

import { Prompt } from "./Prompt";

export type ProjectGradeModel = mongoose.Document & {
  grader: string,
  project: string,
  graded: string,
  responses: Array<Prompt>,
  done: boolean,
  id: string
};

const projectGradeSchema = new mongoose.Schema({
  grader: { type: String },
  project: { type: String },
  graded: { type: String },
  responses: { type: Array },
  done: { type: Boolean },
  id: { type: String }
}, { timestamps: true });

const ProjectGrade = mongoose.model("ProjectGrade", projectGradeSchema);
export default ProjectGrade;
