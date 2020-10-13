import * as monaco from 'monaco-editor';
import "./monaco.css";
import zoom from "./zoom";
const editor = monaco.editor.create(document.getElementById('monaco-container'), {
    value: `// JSQL has been auto-imported and top level await is enabled
const db = new Table(\`CREATE TABLE db (
  id AUTO_INCREMENT,
  firstName,
  lastName,
  email
)\`);
await db.create();
if(await db.isEmpty()) {
  await db.query(\`INSERT INTO \${db.name} VALUES
  ('John', 'Doe', 'johndoe@example.com'),
  ('Jill', 'Doe', 'jilldoe@example.com')\`);
}
const result = await db.query(\`SELECT * FROM \${db.name}\`);
console.log(result);`,
    language: 'javascript',
    theme: "vs-dark",
    automaticLayout: true,
    fontSize: 16
});
document.onkeydown = (event)=>{
  const isCtrlDown = navigator.platform.toUpperCase().includes("MAC") ? event.metaKey : event.ctrlKey;
  if(isCtrlDown) {
    if(event.key == "=" || event.key == "+") {
      event.preventDefault();
      zoom(5);
    } else if(event.key == "-") {
      event.preventDefault();
      zoom(-5);
    }
  }
}
export default editor;