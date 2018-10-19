import { Response, Request, NextFunction } from "express";
import ProjectGrade from "../models/ProjectGrade";
import { Prompt } from "../models/Prompt";

// update form/ProjectGrade w/incomplete results
interface UpdateProjectGradeRequest extends Request {
  body: {
    id: string;
    prompts: Array<Prompt>;
  };
}
/**
 * Updates the given ProjectGrade with the new responses. The client should send the entirety of all responses
 * for the given ProjectGrade to the server, even if some of them have not changed.
 */
export const updateProjectGrade = async (req: UpdateProjectGradeRequest, res: Response) => {
  const projectGrade = await ProjectGrade.find({
    id: req.body.id
  })
  .update({
    responses: req.body.prompts
  });
  res.status(200).end();
};

// submit ProjectGrade
interface SubmitProjectGradeRequest extends Request {
  body: {
    id: string; // the ProjectGrade id
  };
}
/**
 * Submits the final grading for ProjectGrade with id `id` and marks it as done.
 */
export const submitProjectGrade = async (req: SubmitProjectGradeRequest, res: Response) => {
  const projectGrade = await ProjectGrade.find({
    id: req.body.id
  }).update({
    done: true
  });
  res.status(200).end();
};

// send grading dashboard emails

// send to everyone

// send to only test email

// send results emails

// populate the spreadsheet w/current results

// get dashboard data
// own avg, team avg 3 categories

// get ProjectGrade id's for user and project