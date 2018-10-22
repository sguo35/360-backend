import mongoose from "mongoose";

import { Prompt } from "./Prompt";

export type ProjectTemplateModel = mongoose.Document & {
  name: string,
  description: string,
  id: string
};

const projectTemplateSchema = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  id: { type: String }
}, { timestamps: true });

const ProjectTemplate = mongoose.model("ProjectTemplate", projectTemplateSchema);
export default ProjectTemplate;
