import { until } from "async";

const GoogleSpreadsheet = require("google-spreadsheet");
const async = require("async");
import util from "util";

// spreadsheet key is the long id in the sheets URL
const doc = new GoogleSpreadsheet("1SrkMdY0Y-XpzgYhkN_1oN313Z4OcCbHeRgqWH85WbEY");
const data = require("./data.json");

const projectToRow = {
  ":Icebreakers": 10,
  ":Attendy": 35,
  ":360": 60
};

import { email2name } from "../controllers/api";

const emailToName = email2name;

async function populateGrade(data) {
  const newGraded = emailToName[data.graded];
  const newGrader = emailToName[data.grader];
  const projectHeaderRow = projectToRow[data.project];

  console.log(newGraded);

  let sheet;
  let graderRowIndex;

  doc.getInfo = util.promisify(doc.getInfo);
  const info = await doc.getInfo();
  console.log("Loaded doc: " + info.title + " by " + info.author.email);
  i = 0;
  while (i < info.worksheets.length && info.worksheets[i].title !== newGraded) {
    i++;
  }
  sheet = await info.worksheets[i];
  if (sheet) {
    sheet.getCells = util.promisify(sheet.getCells);
  } else {
    return;
  }
  let cells = await sheet.getCells({
    "min-row": 1 + projectHeaderRow,
    "max-row": 19 + projectHeaderRow,
    "min-col": 7,
    "max-col": 7
  });
  // console.log(cells);
  i = 0;
  while (i < cells.length) {
    if (cells[i].value === "Rater " + (i + 1)) {
      const graderCell = cells[i];
      graderRowIndex = graderCell.row;
      console.log("INDEX" + graderRowIndex);
      // graderCell.value = newGrader;
      graderCell.save = util.promisify(graderCell.save);
      await graderCell.save();
      break;
    }
    i++;
  }
  console.log(graderRowIndex);
  cells = await sheet.getCells({
    "min-row": graderRowIndex,
    "max-row": graderRowIndex + 5,
    "min-col": 9,
    "max-col": 9,
    "return-empty": true
  });
  cells[1].value = data.engagement.grade;
  cells[3].value = data.leadership.grade;
  cells[5].value = data.productivity.grade;
  sheet.bulkUpdateCells = util.promisify(sheet.bulkUpdateCells);
  await sheet.bulkUpdateCells(cells);
  cells = await sheet.getCells({
    "min-row": graderRowIndex + 0,
    "max-row": graderRowIndex + 0,
    "min-col": 9,
    "return-empty": true
  });
  for (i = 0; i < data.engagement.qualitative.length; i++) {
    cells[i].value = data.engagement.qualitative[i];
  }
  await sheet.bulkUpdateCells(cells);
  cells = await sheet.getCells({
    "min-row": graderRowIndex + 2,
    "max-row": graderRowIndex + 2,
    "min-col": 9,
    "return-empty": true
  });
  for (i = 0; i < data.leadership.qualitative.length; i++) {
    cells[i].value = data.leadership.qualitative[i];
  }
  await sheet.bulkUpdateCells(cells);
  cells = await sheet.getCells({
    "min-row": graderRowIndex + 4,
    "max-row": graderRowIndex + 4,
    "min-col": 9,
    "return-empty": true
  });
  for (i = 0; i < data.productivity.qualitative.length; i++) {
    cells[i].value = data.productivity.qualitative[i];
  }
  await sheet.bulkUpdateCells(cells);
  console.log("BEING RUN NOW" + i);
}

function setAuth() {
  // see notes below for authentication instructions!
  const creds = require("./client_secret.json");
  doc.useServiceAccountAuth(creds, async function callback() {
    // populateGrade(data[0]);
  });
}
let i = 0;

function nextData() {
  i++;
  if (i < 5) {
    console.log("RUNNING WITH " + i);
    populateGrade(data[i]);
  } else {
    console.log("doneBOBOBOBOBO");
  }
}
setAuth();


export const populate = async (data) => {
  for (const entry of data) {
    try {
      await populateGrade(entry);
    }
    catch (e) {
      console.log(e);
    }
  }
};

