const fs = require("fs");
let file = fs.readFileSync("vamstar.csv");
let fileSize = fs.statSync("vamstar.csv");
fileSize = fileSize.size;
console.log(`size of file is ${fileSize} in bytes`);
console.log(`size of file is ${fileSize / 1000} in kilobytes`);
file = file.toString().split("\r");
file = file.toString().split("\n");
let headers = file[0].split(";");
let json = [];
for (let i = 1; i < file.length; i++) {
  let cur = file[i].split(";");
  let obj = {};
  for (let i = 0; i < cur.length; i++) {
    obj[headers[i]] = cur[i];
  }
  json.push(obj);
}
//console.log(json);
console.log(`The total number of rows are ${json.length}`);
console.log(`The Total number of Columns are ${headers.length}`);
