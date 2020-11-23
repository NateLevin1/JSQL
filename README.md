<p align="center">
  <img src="https://raw.githubusercontent.com/UltimatePro-Grammer/JSQL/master/docs/jsQL_logo.png" width="90" height="90" alt="The JSQL Logo">
  <h1 align="center">SQL for the Browser</h1>
</p>
<p align="center">
<strong>JSQL</strong> allows developers to write SQL queries that run in the browser.
<br>
It exposes a modern, promise-based API built on <a href="https://dexie.org">DexieJS</a>.
</p>

## Features

 - Custom Databases and Tables
 - Unlimited database size and permanent changes through IndexedDB
 - ES Module based consumption allows for tree shaking and small bundle sizes
 - 100% test coverage in all metrics
 - Promise-based API which takes advantage of async/await
 
## Example
```js
const tbl = new Table(`CREATE TABLE tbl (
  id AUTO_INCREMENT,
  firstName,
  lastName,
  email
)`);
await tbl.create();
if(await tbl.isEmpty()) {
  await tbl.query(`INSERT INTO ${tbl.name} VALUES
  ('John', 'Doe', 'johndoe@example.com'),
  ('Jane', 'Doe', 'janedoe@example.com'),
  ('Joe', 'Schmoe', 'joeschmoe@example.com'),
  ('Jill', 'Schmoe', 'jillschmoe@example.com')`);
}
const result = await tbl.query(`SELECT * FROM ${tbl.name} WHERE lastName = 'Doe'`);
console.log(result);
/* 
[
  { id:1, firstName: "John", lastName:"Doe", email:"johndoe@example.com"},
  { id:2, firstName: "Jane", lastName:"Doe", email:"janedoe@example.com"}
] 
*/
```

### [Try these on the editor.](https://ultimatepro-grammer.github.io/JSQL/editor/index.html)

<br>

Click [here](https://ultimatepro-grammer.github.io/JSQL/language/index.html) to visit the JSQL language docs.

Click [here](https://ultimatepro-grammer.github.io/JSQL/docs/index.html) to see the API references.

Click [here](https://ultimatepro-grammer.github.io/JSQL/index.html) for more info on JSQL.