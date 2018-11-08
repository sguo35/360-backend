import { Response, Request, NextFunction } from "express";
import ProjectGrade, { ProjectGradeModel } from "../models/ProjectGrade";
import { Prompt } from "../models/Prompt";
import Account from "../models/Account";
import { AccountModel } from "../models/Account";
import Project from "../models/Project";
import { ProjectModel } from "../models/Project";

import { populate } from "../util/spreadsheet";

import path from "path";

const uuidv4 = require("uuid/v4");

const promptsJson = require("../../prompts.json");
let ovalTemplates = promptsJson.ovalTemplates;
const newTemplateObj = {};
for (const template of ovalTemplates) {
  newTemplateObj[template.id] = template;
}
ovalTemplates = newTemplateObj;

const projectsJson = require("../../projects.json");
const email2name = {};
const name2email = {};
for (const project of projectsJson["projects"]) {
  for (const team of project["teams"]) {
    for (let i = 0; i < team["memberEmails"].length; i++) {
      email2name[team["memberEmails"][i]] = team["memberNames"][i];
    }
  }
}

for (const project of projectsJson["projects"]) {
  for (const team of project["teams"]) {
    for (let i = 0; i < team["memberEmails"].length; i++) {
      name2email[team["memberNames"][i]] = team["memberEmails"][i];
    }
  }
}

// update form/ProjectGrade w/incomplete results
interface UpdateProjectGradeRequest extends Request {
  body: {
    grader: string,
    project: string,
    graded: string,
    responses: Object,
    questionIndex: number
  };
}
/**
 * Updates the given ProjectGrade with the new responses. The client should send the entirety of all responses
 * for the given ProjectGrade to the server, even if some of them have not changed.
 */
export const updateProjectGrade = async (req: UpdateProjectGradeRequest, res: Response) => {
  let projectGrade = <ProjectGradeModel>await ProjectGrade.findOne({
    grader: req.body.grader,
    project: req.body.project,
    graded: req.body.graded
  });

  if (!projectGrade) {
    await ProjectGrade.create({
      id: uuidv4(),
      grader: req.body.grader,
      project: req.body.project,
      graded: req.body.graded,
      responses: {},
      done: false
    });
  }

  projectGrade = <ProjectGradeModel>await ProjectGrade.findOne({
    grader: req.body.grader,
    project: req.body.project,
    graded: req.body.graded
  });

  await ProjectGrade.findOne({
    grader: req.body.grader,
    project: req.body.project,
    graded: req.body.graded
  }).update({
    responses: { ...projectGrade.responses, ...req.body.responses }
  });

  console.log(await ProjectGrade.findOne({
    grader: req.body.grader,
    project: req.body.project,
    graded: req.body.graded
  }));
  res.status(200).end();
};

// submit ProjectGrade
interface SubmitProjectGradeRequest extends Request {
  body: {
    grader: string;
    graded: string;
    project: string;
  };
}
/**
 * Submits the final grading for ProjectGrade with id `id` and marks it as done.
 */
export const submitProjectGrade = async (req: SubmitProjectGradeRequest, res: Response) => {
  const projectGrade = await ProjectGrade.find({
    grader: req.body.grader,
    graded: req.body.graded,
    project: req.body.project
  }).update({
    done: true
  });
  res.status(200).end();
};

interface GetProjectGradeRequest extends Request {
  body: {
    grader: string;
    graded: string;
    project: string;
  };
}
/**
 * Submits the final grading for ProjectGrade with id `id` and marks it as done.
 */
export const getProjectGrade = async (req: GetProjectGradeRequest, res: Response) => {
  const projectGrade = await ProjectGrade.find({
    grader: req.body.grader,
    graded: req.body.graded,
    project: req.body.project
  });
  res.json(projectGrade).status(200).end();
};

// send grading dashboard emails

// send to everyone

// send to only test email

// send results emails

// populate the spreadsheet w/current results

// get dashboard data
// own avg, project avg 3 categories, all qualitative feedback
interface GetDashboardDataRequest extends Request {
  body: {
    email: string;
  };
}
export const getDashboardData = async (req: GetDashboardDataRequest, res: Response) => {
  const account = <AccountModel>await Account.findOne({
    email: req.body.email
  });
  // find all the account's project grades for both the account and their team
  const accountGrades = await account.projects.map(async (project: string) => {
    return await ProjectGrade.find({
      project: project
    });
  });

  // compute categorical grade for the user
  // TODO(Jeff): wait for point weights
  // compute the team's categorical grade

  // filter for the account's received feedback
};

// get ProjectGrade id's for user and project
interface GetProjectGradeIdsRequest extends Request {
  body: {
    email: string;
    projectId: string;
  };
}
/**
 * Returns the ProjectGrades for the given project and user.
 */
export const getProjectGradeIds = async (req: GetProjectGradeIdsRequest, res: Response) => {
  const projectGradeIds = await ProjectGrade.find({
    grader: req.body.email,
    project: req.body.projectId
  })
    .select("grader graded project responses done id");

  res.json(projectGradeIds).status(200).end();
};

/**
 * Returns Projects for the given Account
 */
interface GetAccount extends Request {
  body: {
    email: string;
  };
}

export const getAccount = async (req: GetAccount, res: Response) => {
  const account = await Account.findOne({
    email: req.body.email
  });
  res.json(account).status(200).end();
};

const { google } = require("googleapis");

const oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  "https://stephentorr.es/oauthCallback"
);
export const oauthToken = async (req: Request, res: Response) => {
  const url = await oauth2Client.generateAuthUrl({
    // 'online' (default) or 'offline' (gets refresh_token)
    access_type: "online",

    // If you only need one scope you can pass it as a string
    scope: [
      "https://www.googleapis.com/auth/plus.me",
      "https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/userinfo.profile"]
  });
  res.json({
    url: url
  }).status(200).end();
};

export const oauthCallback = async (req: Request, res: Response) => {
  const code = req.query.code;
  const { tokens } = await oauth2Client.getToken(code);
  oauth2Client.setCredentials(tokens);

  const plus = google.plus({
    version: "v1",
    auth: oauth2Client
  });

  const userInfo = await plus.people.get({ userId: "me" });
  console.log(userInfo.data);
  if (userInfo.data.domain !== "berkeley.edu") {
    res.status(403).end();
    return;
  }

  let outObj = {
    ...userInfo.data
  };
  outObj = JSON.stringify(outObj);
  res.redirect(`https://stephentorr.es/selectProject/:${outObj}`);
};


export const updateSpreadsheet = async (req: Request, res: Response) => {
  const projectList = [":Icebreakers", ":Attendy"];

  const outGrades = [];
  // process grades for each person
  for (const projectName of projectList) {
    const questionLookup = {
      "0": "leadership",
      "1": "productivity",
      "2": "engagement"
    };

    for (const email in email2name) {
      // compile quantitative feedback

      // get everything from the MongoDB
      let grades = await ProjectGrade.find({
        project: projectName,
        graded: email
      });
      grades = <Array<ProjectGradeModel>>grades;
      grades = grades.filter((grade) => {
        return grade["grader"] !== grade["graded"];
      });

      for (const grade of grades) {
        const gradeObject = {
          graded: email,
          grader: grade["grader"],
          leadership: {
            grade: 0,
            qualitative: []
          },
          productivity: {
            grade: 0,
            qualitative: []
          },
          engagement: {
            grade: 0,
            qualitative: []
          },
          project: projectName
        };
        const totalPoints = {
          "0": 0,
          "1": 0,
          "2": 0
        };
        const lengthDict = {
          "0": 0,
          "1": 0,
          "2": 0
        };
        for (const key in grade["responses"]) {
          for (let i = 0; i < grade["responses"][key]["prompts"].length; i++) {
            const prompt = grade["responses"][key]["prompts"][i];

            totalPoints[key] += ovalTemplates[prompt["ovalTemplate"]]["points"];
            lengthDict[key] += 1;

            let qualString = "";
            for (let j = 0; j < prompt["elements"].length; j++) {
              const element = prompt["elements"][j];

              if (element["type"] === "gradedName") {
                qualString += email2name[grade["graded"]];
              } else if (element["type"] === "text") {
                qualString += element["value"];
              } else if (element["type"] === "fillIn") {
                try {
                  if (grade["responses"][key]["promptResponses"][i][j]) {
                    qualString += grade["responses"][key]["promptResponses"][i][j];
                  }
                  else {
                    qualString += element["placeholder"];
                  }
                }
                catch (e) {
                  console.log(e);
                }
              }
            }

            gradeObject[questionLookup[key]]["qualitative"].push(qualString);
          }
        }
        for (let i = 0; i < 3; i++) {
          if (lengthDict[i] === 0) {
            lengthDict[i] = 1;
            totalPoints[i] = i === 0 ? 8 : (i === 1 ? 13 : 23);
          }
          totalPoints[i] = totalPoints[i] / lengthDict[i];
          gradeObject[questionLookup[i]]["grade"] = totalPoints[i];
        }
        outGrades.push(gradeObject);
      }
    }
  }
  await populate(outGrades);
  res.json(outGrades).status(200).end();
};