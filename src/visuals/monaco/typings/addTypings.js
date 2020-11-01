// to be run in node
const fs = require("fs");
const typingsLoc = __dirname+"/typings.ts"
fs.writeFileSync(typingsLoc, "export default `");

let newFileContent = "";

newFileContent += fs.readFileSync(__dirname+"/../../../lib/database/database.ts").toString()+"\n";
newFileContent += fs.readFileSync(__dirname+"/../../../lib/table/table.ts").toString();

newFileContent = newFileContent.replace(/`/g, "\\`");
newFileContent = newFileContent.replace(/\${/g, "\\${");
newFileContent = newFileContent.replace(/export default /g, "");
newFileContent = newFileContent.replace(/^import.*\n?/gm, "");

fs.appendFileSync(typingsLoc, newFileContent+"`;");