# JavaScript Query Languague
JSQL is a subset of [SQL](https://en.wikipedia.org/wiki/SQL) which allows developers to interface with IndexedDB using familiar SQL queries. It exposes a modern, promise-based API built on [DexieJS](https://dexie.org).

### Code Examples
```js
const db = new Table(`CREATE TABLE db (
	id AUTO_INCREMENT,
	firstName,
	lastName,
	email
)`);
await db.query(`INSERT INTO ${db.name} VALUES
('John', 'Doe', 'johndoe@example.com'),
('Jill', 'Doe', 'jilldoe@example.com')`);
const result = await db.query(`SELECT * FROM ${db.name}`);
console.log(result);
/* 
[
  { id:0, firstName: "John", lastName:"Doe", email:"johndoe@example.com"},
  { id:1, firstName: "Jill", lastName:"Doe", email:"jilldoe@example.com"}
] 
*/
```


# Docs
These docs contain all valid commands that can be used in JSQL. JSQL mimics the behavior of [MySQL](https://mysql.com) in many situations.


## Documentation Syntax
The syntax for this documentation is meant to be readable and simply understandable. I highly recommend you read [this](https://en.wikipedia.org/wiki/SQL_syntax#Language_elements) section on the language elements in SQL, as it can be very helpful in understanding the different elements of a statement.

Keywords are in all caps. 
```sql
SELECT
```
Optional items are wrapped in brackets.
```sql
[WHERE data = true]
```
Expressions are wrapped in parentheses. Inside the parentheses of an expression, a pipe (the | symbol) means a logical or.
```sql
FROM (identifier|*)
     [^^^^^^^^^^^^]
```
If an identifier has a specific use (e.g. it needs to be a table name or column name), the use is indicated in these docs via a colon and then the use.
```sql
FROM (identifier: tablename)
     [^^^^^^^^^^^^]
```

For example, a simple `SELECT` will look like the following in these docs
```sql
SELECT (identifier|*) FROM (identifier: tablename)
[WHERE identifer {=operator=} identifer]
```

## Term Definitions
<span name="def-statement">**Statement**</span>
A Statement is a collection of one or more [clauses](#def-clause). It is the string which is passed to JSQL. Statements can end in a semicolon, though it is not required.
```sql
SELECT * FROM months WHERE week = 1;
```
<span name="def-clause">**Clause**</span>
A Clause is a single part of a statement that typically looks like
```sql
KEYWORD (identifier|predicate)
```
<span name="def-statement">**Keyword**</span>
A Keyword is a command that can be run in JSQL.
```sql
SELECT * FROM months WHERE week = 1;
  ^       ^           ^
```

<span name="def-identifier">**Identifier**</span>
An Identifier is the name of something in the database. An identifier might be the name of a column or a database.
```sql
SELECT name FROM months WHERE week = 1;
        ^          ^            ^ 
```
<span name="def-predicate">**Predicate**</span>
A Predicate is something which evaluates to a true or false value. Notably, there is no `unknown` value, a predicate can only evaluate to `true` or `false`.
```sql
WHERE x = 1
     [^^^^]
```
<span name="def-expression">**Expression**</span>
An expression is a part of a clause or predicate that evaluates to anything that can be [structure cloned](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm). This includes strings, numbers, arrays, object literals, Blobs, and many other data types. Expressions can contain *javascript* operators. Note that at this time expressions cannot contain identifiers.
```js
'text', 5, [1,2,3,4] {object: "literal"}, new Blob(), 5+1
```

<span name="def-operator">**Operator**</span>
An operator is a part of an expression that sits between two expressions or identifiers and returns a new expression. It is evaluated at run time.
```sql
WHERE month = 1 + 1
                ^
```
```sql
SET num = num + 1
              ^
```

# Syntax

## Language Features

### Line termination
Lines can be terminated with a semicolon, though this is not required.

### Comments
Single line comments can be started with a `--`. Multiline comments are indicated with a `/*` followed by a `*/`. Unlike MySQL, single line comments do not need a space after them to be comments.
```sql
SELECT * FROM tableName -- this gets the data
/*

I'm a multiline comment!

*/
```
Internally, comments are removed via a regex in the first step of parsing.

## Data Types
All Javascript data types that can be [structure cloned](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) are valid in JSQL.

## Operators
| Operator     | Description                                  | Example                       |
|--------------|----------------------------------------------|-------------------------------|
| `=`          | Is equal<sup>1</sup>                         | `day = 'Thursday'`            |
| `IGNORECASE=`| Is equal, ignoring case                      | `day IGNORECASE= 'ThUrSdAy'`  |
| `<>` or `!=` | Not equal                                    | `day != 'Thursday'`           |
| `>`          | Greater than                                 | `dayNum > 2`                  |
| `<`          | Less than                                    | `dayNum < 2`                  |
| `>=`         | Greater than or equal to                     | `dayNum >= 2`                 |
| `<=`         | Less than or equal to                        | `dayNum <= 2`                 |

1: If part of a `SET` clause, it acts as an assignment operator.

# Keywords

## SELECT
**Syntax**
Get data from a table. The `FROM` keyword is required and is used to indicate which table the query should be executed on. The optional `WHERE` keyword is used to describe 
```sql
SELECT (identifier: columnName|*) FROM (identifier: tableName) [WHERE identifer {=operator=} expression]
```
**Return Value**
An array of objects that contain the matched data. The objects have the keys specified in the first identifier (or in the case of `*` have the keys of all columns in the database).

**Example**
```js
const result = await db.query(`SELECT name, lastName FROM ${db.name}`);
console.log(result == 
[
	{
		name: "John",
		lastName: "Doe"
	},
	{
		name: "Jill",
		lastName: "Doe"
	}
]
); // true
```
## CREATE TABLE
**Syntax**
Create a new table with the name `nameOfNewTable`. Each column is defined with an identifer and optional flags, which means **no datatypes**. Each column should be separated by a comma.
```sql
CREATE TABLE (identifier: nameOfNewTable) (
	(identifier: column1Name) [AUTO_INCREMENT] [NO_INDEX] [UNIQUE],
	(identifier: column2Name) [AUTO_INCREMENT] [NO_INDEX] [UNIQUE],
	...
)
```
`AUTO_INCREMENT`:
Automatically increments this column when new data is added. Column must be of type Number.
`NO_INDEX`:
Do not allow using a `WHERE` clause on this column. **All columns that are not searched for (large blobs etc) *must* have this flag, otherwise subsequent queries will fail.**
`UNIQUE`:
Will throw an error if two rows have the same value for this column.

**Return Value**
`null`.

**Example**
```js
const db = new Table(`CREATE TABLE db (
	title,
	author,
	coverPicture NO_INDEX,
	isbn UNIQUE
)`);
```

## INSERT INTO
**Syntax**
Insert data into the table with name `tableName`. The data is specified in the `VALUES` clause, where parentheses indicate a new row. Inside of these parentheses is a comma separated list of values to add to the table in the order that the table's columns were created in.
```sql
INSERT INTO (identifier: tableName) VALUES
((expression: column1Value), [(expression: column2Value)], [...] ),
((expression: column1Value), [(expression: column2Value)], [...] )
```
**Return Value**
`null`.

**Example**
```js
db.query(`INSERT INTO ${db.name} VALUES
('John', 'Doe', 'johndoe@example.com'),
('Jill', 'Doe', 'jilldoe@example.com')`);
```
