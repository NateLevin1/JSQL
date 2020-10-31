import * as monaco from 'monaco-editor';
import "./monaco.css";
import zoom from "./zoom";
import libSource from "./typings/typings";

// @ts-ignore
monaco.editor.defineTheme('jsql-theme', {
	base: 'vs-dark',
	inherit: true,
	rules: [
		{ token: 'sql-keyword', foreground: '2a92e8', fontStyle: 'bold' },
		{ token: 'sql-operator', foreground: '2e8fff', fontStyle: 'bold' }
	]
});

const editor = monaco.editor.create(document.getElementById('monaco-container'), {
    value: `// JSQL has been auto-imported and top level await is enabled
const db = await (new Database(\`CREATE DATABASE db\`).create());
const tbl = new Table(\`CREATE TABLE tbl (
  id AUTO_INCREMENT,
  firstName,
  lastName,
  email
)\`, db);
await tbl.create();
if(await tbl.isEmpty()) {
  await tbl.query(\`INSERT INTO \${tbl.name} VALUES
  ('John', 'Doe', 'johndoe@example.com'),
  ('Jane', 'Doe', 'janedoe@example.com'),
  ('Joe', 'Schmoe', 'joeschmoe@example.com'),
  ('Jill', 'Schmoe', 'jillschmoe@example.com')\`);
}
const result = await tbl.query(\`SELECT * FROM \${tbl.name} WHERE lastName = 'Doe'\`);
console.log(result);`,
    language: 'jsql',
    theme: "jsql-theme",
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

// editor config: see https://microsoft.github.io/monaco-editor/playground.html#extending-language-services-configure-javascript-defaults
monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
	allowNonTsExtensions: true
});

let jsqlURI = 'ts:jsql/index.d.ts';
monaco.languages.typescript.javascriptDefaults.addExtraLib(libSource, jsqlURI);
monaco.editor.createModel(libSource, 'typescript', monaco.Uri.parse(jsqlURI));

// setup the SQL syntax highlighting
monaco.languages.register({ id: 'jsql' });

monaco.languages.setMonarchTokensProvider("jsql", {
  // Set defaultToken to invalid to see what you do not tokenize yet
  defaultToken: 'invalid',
  tokenPostfix: '.js',

  keywords: [
      'break', 'case', 'catch', 'class', 'continue', 'const',
      'constructor', 'debugger', 'default', 'delete', 'do', 'else',
      'export', 'extends', 'false', 'finally', 'for', 'from', 'function',
      'get', 'if', 'import', 'in', 'instanceof', 'let', 'new', 'null',
      'return', 'set', 'super', 'switch', 'symbol', 'this', 'throw', 'true',
      'try', 'typeof', 'undefined', 'var', 'void', 'while', 'with', 'yield',
      'async', 'await', 'of'
  ],

  typeKeywords: [
      'any', 'boolean', 'number', 'object', 'string', 'undefined'
  ],

  operators: [
      '<=', '>=', '==', '!=', '===', '!==', '=>', '+', '-', '**',
      '*', '/', '%', '++', '--', '<<', '</', '>>', '>>>', '&',
      '|', '^', '!', '~', '&&', '||', '?', ':', '=', '+=', '-=',
      '*=', '**=', '/=', '%=', '<<=', '>>=', '>>>=', '&=', '|=',
      '^=', '@',
  ],

  // we include these common regular expressions
  symbols: /[=><!~?:&|+\-*\/\^%]+/,
  escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
  digits: /\d+(_+\d+)*/,
  octaldigits: /[0-7]+(_+[0-7]+)*/,
  binarydigits: /[0-1]+(_+[0-1]+)*/,
  hexdigits: /[[0-9a-fA-F]+(_+[0-9a-fA-F]+)*/,

  regexpctl: /[(){}\[\]\$\^|\-*+?\.]/,
  regexpesc: /\\(?:[bBdDfnrstvwWn0\\\/]|@regexpctl|c[A-Z]|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4})/,

  // The main tokenizer for our languages
  tokenizer: {
      root: [
          [/[{}]/, 'delimiter.bracket'],
          { include: 'common' }
      ],

      common: [
          // identifiers and keywords
          [/[a-z_$][\w$]*/, {
              cases: {
                  '@typeKeywords': 'keyword',
                  '@keywords': 'keyword',
                  '@default': 'identifier'
              }
          }],
          [/[A-Z][\w\$]*/, 'type.identifier'],  // to show class names nicely
          // [/[A-Z][\w\$]*/, 'identifier'],

          // whitespace
          { include: '@whitespace' },

          // regular expression: ensure it is terminated before beginning (otherwise it is an opeator)
          [/\/(?=([^\\\/]|\\.)+\/([gimsuy]*)(\s*)(\.|;|\/|,|\)|\]|\}|$))/, { token: 'regexp', bracket: '@open', next: '@regexp' }],

          // delimiters and operators
          [/[()\[\]]/, '@brackets'],
          [/[<>](?!@symbols)/, '@brackets'],
          [/@symbols/, {
              cases: {
                  '@operators': 'delimiter',
                  '@default': ''
              }
          }],

          // numbers
          [/(@digits)[eE]([\-+]?(@digits))?/, 'number.float'],
          [/(@digits)\.(@digits)([eE][\-+]?(@digits))?/, 'number.float'],
          [/0[xX](@hexdigits)/, 'number.hex'],
          [/0[oO]?(@octaldigits)/, 'number.octal'],
          [/0[bB](@binarydigits)/, 'number.binary'],
          [/(@digits)/, 'number'],

          // delimiter: after number because of .\d floats
          [/[;,.]/, 'delimiter'],

          // strings
          [/"([^"\\]|\\.)*$/, 'string.invalid'],  // non-teminated string
          [/'([^'\\]|\\.)*$/, 'string.invalid'],  // non-teminated string
          [/"/, 'string', '@string_double'],
          [/'/, 'string', '@string_single'],
          [/`/, 'string', '@string_backtick'],
      ],

      whitespace: [
          [/[ \t\r\n]+/, ''],
          [/\/\*\*(?!\/)/, 'comment.doc', '@jsdoc'],
          [/\/\*/, 'comment', '@comment'],
          [/\/\/.*$/, 'comment'],
      ],

      comment: [
          [/[^\/*]+/, 'comment'],
          [/\*\//, 'comment', '@pop'],
          [/[\/*]/, 'comment']
      ],

      jsdoc: [
          [/[^\/*]+/, 'comment.doc'],
          [/\*\//, 'comment.doc', '@pop'],
          [/[\/*]/, 'comment.doc']
      ],

      // We match regular expression quite precisely
      regexp: [
          [/(\{)(\d+(?:,\d*)?)(\})/, ['regexp.escape.control', 'regexp.escape.control', 'regexp.escape.control']],
          // @ts-ignore
          [/(\[)(\^?)(?=(?:[^\]\\\/]|\\.)+)/, ['regexp.escape.control', { token: 'regexp.escape.control', next: '@regexrange' }]],
          [/(\()(\?:|\?=|\?!)/, ['regexp.escape.control', 'regexp.escape.control']],
          [/[()]/, 'regexp.escape.control'],
          [/@regexpctl/, 'regexp.escape.control'],
          [/[^\\\/]/, 'regexp'],
          [/@regexpesc/, 'regexp.escape'],
          [/\\\./, 'regexp.invalid'],
          // @ts-ignore
          [/(\/)([gimsuy]*)/, [{ token: 'regexp', bracket: '@close', next: '@pop' }, 'keyword.other']],
      ],

      regexrange: [
          [/-/, 'regexp.escape.control'],
          [/\^/, 'regexp.invalid'],
          [/@regexpesc/, 'regexp.escape'],
          [/[^\]]/, 'regexp'],
          [/\]/, { token: 'regexp.escape.control', next: '@pop', bracket: '@close' }],
      ],

      string_double: [
          [/[^\\"]+/, 'string'],
          [/@escapes/, 'string.escape'],
          [/\\./, 'string.escape.invalid'],
          [/"/, 'string', '@pop']
      ],

      string_single: [
          [/[^\\']+/, 'string'],
          [/@escapes/, 'string.escape'],
          [/\\./, 'string.escape.invalid'],
          [/'/, 'string', '@pop']
      ],

      string_backtick: [
          [/(?:SELECT|select|FROM|from|WHERE|where|INSERT|insert|INTO|into|VALUES|values|CREATE|create)/, 'sql-keyword'],
          [/(?:DATABASE|database|TABLE|table) /, 'sql-keyword', "@name"],
          [/\$\{/, { token: 'delimiter.bracket', next: '@bracketCounting' }],
          [/(?:=|IGNORECASE=|<>|!=|>|<|<=|>=)/, "sql-operator"],
          [/[^\\`$](?!SELECT|select|FROM|from|WHERE|where|INSERT|insert|INTO|into|VALUES|values|CREATE|create)/, 'string'],
          [/@escapes/, 'string.escape'],
          [/\\./, 'string.escape.invalid'],
          [/`/, 'string', '@pop']
      ],

      name: [
          [/[a-zA-Z]/, "type.identifier"],
          [/(?: |)/, "", "@pop"],
      ],

      bracketCounting: [
          [/\{/, 'delimiter.bracket', '@bracketCounting'],
          [/\}/, 'delimiter.bracket', '@pop'],
          { include: 'common' }
      ],
  },
});