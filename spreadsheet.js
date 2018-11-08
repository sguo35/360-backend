var GoogleSpreadsheet = require('./node_modules/google-spreadsheet/index.js');
var async = require('./node_modules/async/index.js');

// spreadsheet key is the long id in the sheets URL
var doc = new GoogleSpreadsheet('1SrkMdY0Y-XpzgYhkN_1oN313Z4OcCbHeRgqWH85WbEY');
var data = require('./data.json');

const projectToRow = {
  ":Icebreakers":10,
  ":Attendy":35,
  ":360":60
}

const emailToName = {
  'aadhrik.kuila@berkeley.edu': 'Aadhrik Kuila',
  'alara.guler@berkeley.edu': 'Alara Guler',
  'alexander.manes@berkeley.edu': 'Alexander Manes',
  'fonzy@berkeley.edu': 'Alfonso Sanchev',
  'amyguo@berkeley.edu': 'Amy Guo',
  'akirillo@berkeley.edu': 'Andrew Kirillov',
  'anikar@berkeley.edu': 'Anika Ramachandran',
  'ashvindhawan@berkeley.edu': 'Ashvin Dhawan',
  'austin.jsun@berkeley.edu ': 'Austin Sun',
  'ayush.jain@berkeley.edu': 'Ayush Jain',
  'birkaransachdev@berkeley.edu': 'Birkaran Sachdev',
  'chaigoyal@berkeley.edu': 'Chai Goyal',
  'charlie.faramarzi@berkeley.edu': 'Charlie Faramarzi',
  'chelsealo@berkeley.edu': 'Chelsea Lo',
  'daniel.jing@berkeley.edu': 'Daniel Jing',
  'Davidshau22@berkeley.edu': 'David Shau',
  'dev.ojha@berkeley.edu': 'Dev Ojha',
  'dnavani@berkeley.edu': 'Deven Navani',
  'd_gonzalez@berkeley.edu': 'Diego Gonzales',
  'elliot.larson@berkeley.edu': 'Elliot Larson',
  'erelsaul@berkeley.edu': 'Erel Saul',
  'ethanbmehta@berkeley.edu': 'Ethan Mehta',
  'findaheng@berkeley.edu': 'Francis Indaheng',
  'hvinh@berkeley.edu': 'Hannah Vinh',
  'harishpalani@berkeley.edu': 'Harish Palani',
  'isabellezhou@berkeley.edu': 'Isabelle Zhou',
  'jahnvidoshi@berkeley.edu': 'Jahnvi Doshi',
  'j.singh@berkeley.edu': 'Jaiveer Singh',
  'julius.vering@berkeley.edu': 'Julius Vering',
  'k.chorazewicz@berkeley.edu': 'Kai Chorazewicz',
  'kelly_han@berkeley.edu': 'Kelly Han',
  'chenluofei@berkeley.edu': 'Luofei Chen',
  'manav.rathod@berkeley.edu': 'Manav Rathod',
  'matthew.hallac@berkeley.edu': 'Matthew Hallac',
  'michael.mcnabb@berkeley.edu': 'Michael McNabb',
  'michael.trehan@berkeley.edu': 'Michael Trehan',
  'nhudait@berkeley.edu': 'Neha Hudait',
  'neha.nagabothu@berkeley.edu': 'Neha Nagabothu',
  'nikmandava@berkeley.edu': 'Nikhil Mandava',
  'nishikaza@berkeley.edu': 'Nishi Kaza',
  'prangan.tooteja@berkeley.edu': 'Prangan Tooteja',
  'quinetnyre@berkeley.edu': 'Quin Etnyre',
  'rahul.hayaran@berkeley.edu': 'Rahul Hayaran',
  'richard.y.liu@berkeley.edu': 'Richard Liu',
  'rimikabanerjee@berkeley.edu': 'Rimika Banerjee',
  'rishma.murugan@berkeley.edu': 'Rishma Murugan',
  'ryanwchen@berkeley.edu': 'Ryan Chen',
  'seanlin2000@berkeley.edu': 'Sean Lin',
  'sguo35@berkeley.edu': 'Shiyuan Guo',
  'sravyab@berkeley.edu': 'Sravya Basvapatri',
  'vshirsat@berkeley.edu': 'Vikram Shirsat',
  'v.wang@berkeley.edu': 'Vincent Wang'
};

async function populateGrade(data) {
  var newGraded = emailToName[data.graded];
  var newGrader = emailToName[data.grader];
  var projectHeaderRow = projectToRow[data.project];

  var sheet;
  var graderRowIndex;

  async.series([
    function findGradedSheet(step) {
      doc.getInfo(function(err, info) {
        console.log('Loaded doc: '+info.title+' by '+info.author.email);
        var i = 0;
        while (i < info.worksheets.length && info.worksheets[i].title !== newGraded) {
          i++;
        }
        sheet = info.worksheets[i];
        step();
      });
    },
    function findEmptyRaterSlot(step) {
      sheet.getCells({
        'min-row': 1 + projectHeaderRow,
        'max-row': 19 + projectHeaderRow,
        'min-col': 7,
        'max-col': 7
      }, function(err, cells) {
        var i = 0;
        while (i < cells.length) {
          if(cells[i].value === "Rater " + (i + 1)) {
            var graderCell = cells[i];
            graderRowIndex = graderCell.row;
            graderCell.value = newGrader;
            graderCell.save();
            break;
          }
          i++;
        }
        step();
      });
    },
    function populateScores(step) {
      sheet.getCells({
        'min-row': graderRowIndex,
        'max-row': graderRowIndex + 5,
        'min-col': 9,
        'max-col': 9,
        'return-empty':true
      }, function(err, cells) {
        cells[1].value = data.engagement.grade;
        cells[3].value = data.leadership.grade;
        cells[5].value = data.productivity.grade;
        sheet.bulkUpdateCells(cells);
        step();
      });
    },
    function populateEngagement(step) {
      sheet.getCells({
        'min-row': graderRowIndex + 0,
        'max-row': graderRowIndex + 0,
        'min-col': 9,
        'return-empty':true
      }, function(err, cells) {
        for(i = 0; i < data.engagement.qualitative.length; i++) {
          cells[i].value = data.engagement.qualitative[i]
        }
        sheet.bulkUpdateCells(cells);
        step();
      });
    },
    function populateLeadership(step) {
      sheet.getCells({
        'min-row': graderRowIndex + 2,
        'max-row': graderRowIndex + 2,
        'min-col': 9,
        'return-empty':true
      }, function(err, cells) {
        for(i = 0; i < data.leadership.qualitative.length; i++) {
          cells[i].value = data.leadership.qualitative[i]
        }
        sheet.bulkUpdateCells(cells);
        step();
      });
    },
    function populateProductivity(step) {
      sheet.getCells({
        'min-row': graderRowIndex + 4,
        'max-row': graderRowIndex + 4,
        'min-col': 9,
        'return-empty':true
      }, function(err, cells) {
        for(i = 0; i < data.productivity.qualitative.length; i++) {
          cells[i].value = data.productivity.qualitative[i]
        }
        sheet.bulkUpdateCells(cells);
        step();
      });
    }
  ], function(err){
    console.log("BEING RUN NOW" + i)
      if( err ) {
        console.log('Error: '+err);
      }
      else {
        nextData()
      }
  });
}

function setAuth() {
    // see notes below for authentication instructions!
    var creds = require('./client_secret.json');
    doc.useServiceAccountAuth(creds, async function callback() {
      populateGrade(data[0])
    });
}
var i = 0

function nextData() {
  i++;
  if (i < 5) {
    console.log("RUNNING WITH " + i)
    populateGrade(data[i])
  } else {
    console.log("doneBOBOBOBOBO");
  }
}
setAuth();


const populate = async (data) => {
  for (const entry of data) {
    await populateGrade(entry);
  }
}

module.exports = { populate: populate };