import mongoose from "mongoose";

import { Prompt } from "./Prompt";

export type ProjectGradeModel = mongoose.Document & {
  grader: string,
  project: string,
  graded: string,
  responses: Array<Prompt>
};

const projectGradeSchema = new mongoose.Schema({
  grader: { type: String },
  project: { type: String },
  graded: { type: String },
  responses: { type: Array }
}, { timestamps: true });

const ProjectGrade = mongoose.model("ProjectGrade", projectGradeSchema);
export default ProjectGrade;
