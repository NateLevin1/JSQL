import * as monaco from 'monaco-editor';
import "./monaco.css";
monaco.editor.create(document.getElementById('monaco-container'), {
    value: [
      'function x() {',
      '\tconsole.log("Hello world!");',
      '}',
      'x();'
    ].join('\n'),
    language: 'javascript',
    theme: "vs-dark"
});