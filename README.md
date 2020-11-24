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
 
## Examples
### [Try these on the editor!](https://ultimatepro-grammer.github.io/JSQL/editor/index.html)
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


```js
// create the database
const library = await new Database(`CREATE DATABASE library`).create();

// create the tables
const books = await new Table(`CREATE TABLE books (
  id AUTO_INCREMENT,
  title,
  author,
  isCheckedOut
)`, library).create();
const users = await new Table(`CREATE TABLE users (
  id AUTO_INCREMENT,
  firstName,
  lastName,
  hasCheckedOutBook,
  checkedOutBookTitle
)`, library).create();

// add data to the tables if they are empty
if(await books.isEmpty()) {
  await books.query(`INSERT INTO ${books.name} VALUES 
  ("Moby Dick", "Herman Melville",  false),
  ("War and Peace", "Leo Tolstoy",  false),
  ("Hamlet", "William Shakespeare", false)
  `)
}
if(await users.isEmpty()) {
  await users.query(`INSERT INTO ${users.name} VALUES
  ("Jane", "Doe", false, ""),
  ("John", "Doe", false, "")
  `);
}

// do something with that data
if(!(await users.query(`SELECT hasCheckedOutBook FROM ${users.name} WHERE id = 1`))[0]) {
  // if Jane hasn't checked out a book, check out Moby Dick for her
  users.query(`UPDATE ${users.name} SET hasCheckedOutBook = true, checkedOutBookTitle = "Moby Dick" WHERE id = 1`);
}

// log out the new user data
console.log(await users.query(`SELECT * FROM ${users.name}`));
```

<br>

Click [here](https://ultimatepro-grammer.github.io/JSQL/language/index.html) to visit the JSQL language docs.

Click [here](https://ultimatepro-grammer.github.io/JSQL/docs/index.html) to see the API references.

Click [here](https://ultimatepro-grammer.github.io/JSQL/index.html) for more info on JSQL.