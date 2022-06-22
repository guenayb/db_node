const fs = require('fs');
const { parse } = require('csv-parse');
const csvFile = [];
const DB_PATH = './DBNetz.csv';

//Create an object for each line and use column names as key
let parser = parse({ delimiter: ';' }, function (err, records) {
  records.forEach((line) => {
    let betriebsstelle = {
      abk: line[1],
      Name: line[2],
      Kurzname: line[3],
      Typ: line[4],
    };
    csvFile.push(betriebsstelle);
  });
});

//Read CSV file and use the parser on the file content
fs.createReadStream(DB_PATH).pipe(parser);

module.exports = { csvFile };
