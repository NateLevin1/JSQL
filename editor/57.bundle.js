(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[57],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/scss/scss.js":
/*!************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/scss/scss.js ***!
  \************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conf", function() { return conf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "language", function() { return language; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var conf = {
    wordPattern: /(#?-?\d*\.\d\w*%?)|([@$#!.:]?[\w-?]+%?)|[@#!.]/g,
    comments: {
        blockComment: ['/*', '*/'],
        lineComment: '//'
    },
    brackets: [
        ['{', '}'],
        ['[', ']'],
        ['(', ')']
    ],
    autoClosingPairs: [
        { open: '{', close: '}', notIn: ['string', 'comment'] },
        { open: '[', close: ']', notIn: ['string', 'comment'] },
        { open: '(', close: ')', notIn: ['string', 'comment'] },
        { open: '"', close: '"', notIn: ['string', 'comment'] },
        { open: "'", close: "'", notIn: ['string', 'comment'] }
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
        { open: "'", close: "'" }
    ],
    folding: {
        markers: {
            start: new RegExp('^\\s*\\/\\*\\s*#region\\b\\s*(.*?)\\s*\\*\\/'),
            end: new RegExp('^\\s*\\/\\*\\s*#endregion\\b.*\\*\\/')
        }
    }
};
var language = {
    defaultToken: '',
    tokenPostfix: '.scss',
    ws: '[ \t\n\r\f]*',
    identifier: '-?-?([a-zA-Z]|(\\\\(([0-9a-fA-F]{1,6}\\s?)|[^[0-9a-fA-F])))([\\w\\-]|(\\\\(([0-9a-fA-F]{1,6}\\s?)|[^[0-9a-fA-F])))*',
    brackets: [
        { open: '{', close: '}', token: 'delimiter.curly' },
        { open: '[', close: ']', token: 'delimiter.bracket' },
        { open: '(', close: ')', token: 'delimiter.parenthesis' },
        { open: '<', close: '>', token: 'delimiter.angle' }
    ],
    tokenizer: {
        root: [{ include: '@selector' }],
        selector: [
            { include: '@comments' },
            { include: '@import' },
            { include: '@variabledeclaration' },
            { include: '@warndebug' },
            ['[@](include)', { token: 'keyword', next: '@includedeclaration' }],
            [
                '[@](keyframes|-webkit-keyframes|-moz-keyframes|-o-keyframes)',
                { token: 'keyword', next: '@keyframedeclaration' }
            ],
            ['[@](page|content|font-face|-moz-document)', { token: 'keyword' }],
            ['[@](charset|namespace)', { token: 'keyword', next: '@declarationbody' }],
            ['[@](function)', { token: 'keyword', next: '@functiondeclaration' }],
            ['[@](mixin)', { token: 'keyword', next: '@mixindeclaration' }],
            ['url(\\-prefix)?\\(', { token: 'meta', next: '@urldeclaration' }],
            { include: '@controlstatement' },
            { include: '@selectorname' },
            ['[&\\*]', 'tag'],
            ['[>\\+,]', 'delimiter'],
            ['\\[', { token: 'delimiter.bracket', next: '@selectorattribute' }],
            ['{', { token: 'delimiter.curly', next: '@selectorbody' }]
        ],
        selectorbody: [
            ['[*_]?@identifier@ws:(?=(\\s|\\d|[^{;}]*[;}]))', 'attribute.name', '@rulevalue'],
            { include: '@selector' },
            ['[@](extend)', { token: 'keyword', next: '@extendbody' }],
            ['[@](return)', { token: 'keyword', next: '@declarationbody' }],
            ['}', { token: 'delimiter.curly', next: '@pop' }]
        ],
        selectorname: [
            ['#{', { token: 'meta', next: '@variableinterpolation' }],
            ['(\\.|#(?=[^{])|%|(@identifier)|:)+', 'tag'] // selector (.foo, div, ...)
        ],
        selectorattribute: [
            { include: '@term' },
            [']', { token: 'delimiter.bracket', next: '@pop' }]
        ],
        term: [
            { include: '@comments' },
            ['url(\\-prefix)?\\(', { token: 'meta', next: '@urldeclaration' }],
            { include: '@functioninvocation' },
            { include: '@numbers' },
            { include: '@strings' },
            { include: '@variablereference' },
            ['(and\\b|or\\b|not\\b)', 'operator'],
            { include: '@name' },
            ['([<>=\\+\\-\\*\\/\\^\\|\\~,])', 'operator'],
            [',', 'delimiter'],
            ['!default', 'literal'],
            ['\\(', { token: 'delimiter.parenthesis', next: '@parenthizedterm' }]
        ],
        rulevalue: [
            { include: '@term' },
            ['!important', 'literal'],
            [';', 'delimiter', '@pop'],
            ['{', { token: 'delimiter.curly', switchTo: '@nestedproperty' }],
            ['(?=})', { token: '', next: '@pop' }] // missing semicolon
        ],
        nestedproperty: [
            ['[*_]?@identifier@ws:', 'attribute.name', '@rulevalue'],
            { include: '@comments' },
            ['}', { token: 'delimiter.curly', next: '@pop' }]
        ],
        warndebug: [['[@](warn|debug)', { token: 'keyword', next: '@declarationbody' }]],
        import: [['[@](import)', { token: 'keyword', next: '@declarationbody' }]],
        variabledeclaration: [
            // sass variables
            ['\\$@identifier@ws:', 'variable.decl', '@declarationbody']
        ],
        urldeclaration: [
            { include: '@strings' },
            ['[^)\r\n]+', 'string'],
            ['\\)', { token: 'meta', next: '@pop' }]
        ],
        parenthizedterm: [
            { include: '@term' },
            ['\\)', { token: 'delimiter.parenthesis', next: '@pop' }]
        ],
        declarationbody: [
            { include: '@term' },
            [';', 'delimiter', '@pop'],
            ['(?=})', { token: '', next: '@pop' }] // missing semicolon
        ],
        extendbody: [
            { include: '@selectorname' },
            ['!optional', 'literal'],
            [';', 'delimiter', '@pop'],
            ['(?=})', { token: '', next: '@pop' }] // missing semicolon
        ],
        variablereference: [
            // sass variable reference
            ['\\$@identifier', 'variable.ref'],
            ['\\.\\.\\.', 'operator'],
            ['#{', { token: 'meta', next: '@variableinterpolation' }] // sass var resolve
        ],
        variableinterpolation: [
            { include: '@variablereference' },
            ['}', { token: 'meta', next: '@pop' }]
        ],
        comments: [
            ['\\/\\*', 'comment', '@comment'],
            ['\\/\\/+.*', 'comment']
        ],
        comment: [
            ['\\*\\/', 'comment', '@pop'],
            ['.', 'comment']
        ],
        name: [['@identifier', 'attribute.value']],
        numbers: [
            ['(\\d*\\.)?\\d+([eE][\\-+]?\\d+)?', { token: 'number', next: '@units' }],
            ['#[0-9a-fA-F_]+(?!\\w)', 'number.hex']
        ],
        units: [
            [
                '(em|ex|ch|rem|vmin|vmax|vw|vh|vm|cm|mm|in|px|pt|pc|deg|grad|rad|turn|s|ms|Hz|kHz|%)?',
                'number',
                '@pop'
            ]
        ],
        functiondeclaration: [
            ['@identifier@ws\\(', { token: 'meta', next: '@parameterdeclaration' }],
            ['{', { token: 'delimiter.curly', switchTo: '@functionbody' }]
        ],
        mixindeclaration: [
            // mixin with parameters
            ['@identifier@ws\\(', { token: 'meta', next: '@parameterdeclaration' }],
            // mixin without parameters
            ['@identifier', 'meta'],
            ['{', { token: 'delimiter.curly', switchTo: '@selectorbody' }]
        ],
        parameterdeclaration: [
            ['\\$@identifier@ws:', 'variable.decl'],
            ['\\.\\.\\.', 'operator'],
            [',', 'delimiter'],
            { include: '@term' },
            ['\\)', { token: 'meta', next: '@pop' }]
        ],
        includedeclaration: [
            { include: '@functioninvocation' },
            ['@identifier', 'meta'],
            [';', 'delimiter', '@pop'],
            ['(?=})', { token: '', next: '@pop' }],
            ['{', { token: 'delimiter.curly', switchTo: '@selectorbody' }]
        ],
        keyframedeclaration: [
            ['@identifier', 'meta'],
            ['{', { token: 'delimiter.curly', switchTo: '@keyframebody' }]
        ],
        keyframebody: [
            { include: '@term' },
            ['{', { token: 'delimiter.curly', next: '@selectorbody' }],
            ['}', { token: 'delimiter.curly', next: '@pop' }]
        ],
        controlstatement: [
            [
                '[@](if|else|for|while|each|media)',
                { token: 'keyword.flow', next: '@controlstatementdeclaration' }
            ]
        ],
        controlstatementdeclaration: [
            ['(in|from|through|if|to)\\b', { token: 'keyword.flow' }],
            { include: '@term' },
            ['{', { token: 'delimiter.curly', switchTo: '@selectorbody' }]
        ],
        functionbody: [
            ['[@](return)', { token: 'keyword' }],
            { include: '@variabledeclaration' },
            { include: '@term' },
            { include: '@controlstatement' },
            [';', 'delimiter'],
            ['}', { token: 'delimiter.curly', next: '@pop' }]
        ],
        functioninvocation: [['@identifier\\(', { token: 'meta', next: '@functionarguments' }]],
        functionarguments: [
            ['\\$@identifier@ws:', 'attribute.name'],
            ['[,]', 'delimiter'],
            { include: '@term' },
            ['\\)', { token: 'meta', next: '@pop' }]
        ],
        strings: [
            ['~?"', { token: 'string.delimiter', next: '@stringenddoublequote' }],
            ["~?'", { token: 'string.delimiter', next: '@stringendquote' }]
        ],
        stringenddoublequote: [
            ['\\\\.', 'string'],
            ['"', { token: 'string.delimiter', next: '@pop' }],
            ['.', 'string']
        ],
        stringendquote: [
            ['\\\\.', 'string'],
            ["'", { token: 'string.delimiter', next: '@pop' }],
            ['.', 'string']
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL3Njc3Mvc2Nzcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLFlBQVksaUNBQWlDO0FBQy9ELFNBQVMsc0RBQXNEO0FBQy9ELFNBQVMsc0RBQXNEO0FBQy9ELFNBQVMsc0RBQXNEO0FBQy9ELFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUyxTQUFTLFlBQVksR0FBRztBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELElBQUksbURBQW1ELElBQUk7QUFDN0c7QUFDQSxTQUFTLFNBQVMsWUFBWSw2QkFBNkI7QUFDM0QsU0FBUyxvREFBb0Q7QUFDN0QsU0FBUyx3REFBd0Q7QUFDakUsU0FBUztBQUNUO0FBQ0E7QUFDQSxnQkFBZ0IsdUJBQXVCO0FBQ3ZDO0FBQ0EsYUFBYSx1QkFBdUI7QUFDcEMsYUFBYSxxQkFBcUI7QUFDbEMsYUFBYSxrQ0FBa0M7QUFDL0MsYUFBYSx3QkFBd0I7QUFDckMsOEJBQThCLGdEQUFnRDtBQUM5RTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsMkRBQTJELG1CQUFtQjtBQUM5RSx3Q0FBd0MsNkNBQTZDO0FBQ3JGLCtCQUErQixpREFBaUQ7QUFDaEYsNEJBQTRCLDhDQUE4QztBQUMxRSxvQ0FBb0MseUNBQXlDO0FBQzdFLGFBQWEsK0JBQStCO0FBQzVDLGFBQWEsMkJBQTJCO0FB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cUIsMkRBQTJEO0FBQ2hGLHFCQUFxQixxREFBcUQ7QUFDMUU7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDBDQUEwQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwwQ0FBMEM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiNTcuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5leHBvcnQgdmFyIGNvbmYgPSB7XG4gICAgd29yZFBhdHRlcm46IC8oIz8tP1xcZCpcXC5cXGRcXHcqJT8pfChbQCQjIS46XT9bXFx3LT9dKyU/KXxbQCMhLl0vZyxcbiAgICBjb21tZW50czoge1xuICAgICAgICBibG9ja0NvbW1lbnQ6IFsnLyonLCAnKi8nXSxcbiAgICAgICAgbGluZUNvbW1lbnQ6ICcvLydcbiAgICB9LFxuICAgIGJyYWNrZXRzOiBbXG4gICAgICAgIFsneycsICd9J10sXG4gICAgICAgIFsnWycsICddJ10sXG4gICAgICAgIFsnKCcsICcpJ11cbiAgICBdLFxuICAgIGF1dG9DbG9zaW5nUGFpcnM6IFtcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScsIG5vdEluOiBbJ3N0cmluZycsICdjb21tZW50J10gfSxcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScsIG5vdEluOiBbJ3N0cmluZycsICdjb21tZW50J10gfSxcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScsIG5vdEluOiBbJ3N0cmluZycsICdjb21tZW50J10gfSxcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJywgbm90SW46IFsnc3RyaW5nJywgJ2NvbW1lbnQnXSB9LFxuICAgICAgICB7IG9wZW46IFwiJ1wiLCBjbG9zZTogXCInXCIsIG5vdEluOiBbJ3N0cmluZycsICdjb21tZW50J10gfVxuICAgIF0sXG4gICAgc3Vycm91bmRpbmdQYWlyczogW1xuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH0sXG4gICAgICAgIHsgb3BlbjogXCInXCIsIGNsb3NlOiBcIidcIiB9XG4gICAgXSxcbiAgICBmb2xkaW5nOiB7XG4gICAgICAgIG1hcmtlcnM6IHtcbiAgICAgICAgICAgIHN0YXJ0OiBuZXcgUmVnRXhwKCdeXFxcXHMqXFxcXC9cXFxcKlxcXFxzKiNyZWdpb25cXFxcYlxcXFxzKiguKj8pXFxcXHMqXFxcXCpcXFxcLycpLFxuICAgICAgICAgICAgZW5kOiBuZXcgUmVnRXhwKCdeXFxcXHMqXFxcXC9cXFxcKlxcXFxzKiNlbmRyZWdpb25cXFxcYi4qXFxcXCpcXFxcLycpXG4gICAgICAgIH1cbiAgICB9XG59O1xuZXhwb3J0IHZhciBsYW5ndWFnZSA9IHtcbiAgICBkZWZhdWx0VG9rZW46ICcnLFxuICAgIHRva2VuUG9zdGZpeDogJy5zY3NzJyxcbiAgICB3czogJ1sgXFx0XFxuXFxyXFxmXSonLFxuICAgIGlkZW50aWZpZXI6ICctPy0/KFthLXpBLVpdfChcXFxcXFxcXCgoWzAtOWEtZkEtRl17MSw2fVxcXFxzPyl8W15bMC05YS1mQS1GXSkpKShbXFxcXHdcXFxcLV18KFxcXFxcXFxcKChbMC05YS1mQS1GXXsxLDZ9XFxcXHM/KXxbXlswLTlhLWZBLUZdKSkpKicsXG4gICAgYnJhY2tldHM6IFtcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScsIHRva2VuOiAnZGVsaW1pdGVyLmN1cmx5JyB9LFxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJywgdG9rZW46ICdkZWxpbWl0ZXIuYnJhY2tldCcgfSxcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScsIHRva2VuOiAnZGVsaW1pdGVyLnBhcmVudGhlc2lzJyB9LFxuICAgICAgICB7IG9wZW46ICc8JywgY2xvc2U6ICc+JywgdG9rZW46ICdkZWxpbWl0ZXIuYW5nbGUnIH1cbiAgICBdLFxuICAgIHRva2VuaXplcjoge1xuICAgICAgICByb290OiBbeyBpbmNsdWRlOiAnQHNlbGVjdG9yJyB9XSxcbiAgICAgICAgc2VsZWN0b3I6IFtcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0Bjb21tZW50cycgfSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BpbXBvcnQnIH0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAdmFyaWFibGVkZWNsYXJhdGlvbicgfSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B3YXJuZGVidWcnIH0sXG4gICAgICAgICAgICBbJ1tAXShpbmNsdWRlKScsIHsgdG9rZW46ICdrZXl3b3JkJywgbmV4dDogJ0BpbmNsdWRlZGVjbGFyYXRpb24nIH1dLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICdbQF0oa2V5ZnJhbWVzfC13ZWJraXQta2V5ZnJhbWVzfC1tb3ota2V5ZnJhbWVzfC1vLWtleWZyYW1lcyknLFxuICAgICAgICAgICAgICAgIHsgdG9rZW46ICdrZXl3b3JkJywgbmV4dDogJ0BrZXlmcmFtZWRlY2xhcmF0aW9uJyB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgWydbQF0ocGFnZXxjb250ZW50fGZvbnQtZmFjZXwtbW96LWRvY3VtZW50KScsIHsgdG9rZW46ICdrZXl3b3JkJyB9XSxcbiAgICAgICAgICAgIFsnW0BdKGNoYXJzZXR8bmFtZXNwYWNlKScsIHsgdG9rZW46ICdrZXl3b3JkJywgbmV4dDogJ0BkZWNsYXJhdGlvbmJvZHknIH1dLFxuICAgICAgICAgICAgWydbQF0oZnVuY3Rpb24pJywgeyB0b2tlbjogJ2tleXdvcmQnLCBuZXh0OiAnQGZ1bmN0aW9uZGVjbGFyYXRpb24nIH1dLFxuICAgICAgICAgICAgWydbQF0obWl4aW4pJywgeyB0b2tlbjogJ2tleXdvcmQnLCBuZXh0OiAnQG1peGluZGVjbGFyYXRpb24nIH1dLFxuICAgICAgICAgICAgWyd1cmwoXFxcXC1wcmVmaXgpP1xcXFwoJywgeyB0b2tlbjogJ21ldGEnLCBuZXh0OiAnQHVybGRlY2xhcmF0aW9uJyB9XSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0Bjb250cm9sc3RhdGVtZW50JyB9LFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHNlbGVjdG9ybmFtZScgfSxcbiAgICAgICAgICAgIFsnWyZcXFxcKl0nLCAndGFnJ10sXG4gICAgICAgICAgICBbJ1s+XFxcXCssXScsICdkZWxpbWl0ZXInXSxcbiAgICAgICAgICAgIFsnXFxcXFsnLCB7IHRva2VuOiAnZGVsaW1pdGVyLmJyYWNrZXQnLCBuZXh0OiAnQHNlbGVjdG9yYXR0cmlidXRlJyB9XSxcbiAgICAgICAgICAgIFsneycsIHsgdG9rZW46ICdkZWxpbWl0ZXIuY3VybHknLCBuZXh0OiAnQHNlbGVjdG9yYm9keScgfV1cbiAgICAgICAgXSxcbiAgICAgICAgc2VsZWN0b3Jib2R5OiBbXG4gICAgICAgICAgICBbJ1sqX10/QGlkZW50aWZpZXJAd3M6KD89KFxcXFxzfFxcXFxkfFteezt9XSpbO31dKSknLCAnYXR0cmlidXRlLm5hbWUnLCAnQHJ1bGV2YWx1ZSddLFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHNlbGVjdG9yJyB9LFxuICAgICAgICAgICAgWydbQF0oZXh0ZW5kKScsIHsgdG9rZW46ICdrZXl3b3JkJywgbmV4dDogJ0BleHRlbmRib2R5JyB9XSxcbiAgICAgICAgICAgIFsnW0BdKHJldHVybiknLCB7IHRva2VuOiAna2V5d29yZCcsIG5leHQ6ICdAZGVjbGFyYXRpb25ib2R5JyB9XSxcbiAgICAgICAgICAgIFsnfScsIHsgdG9rZW46ICdkZWxpbWl0ZXIuY3VybHknLCBuZXh0OiAnQHBvcCcgfV1cbiAgICAgICAgXSxcbiAgICAgICAgc2VsZWN0b3JuYW1lOiBbXG4gICAgICAgICAgICBbJyN7JywgeyB0b2tlbjogJ21ldGEnLCBuZXh0OiAnQHZhcmlhYmxlaW50ZXJwb2xhdGlvbicgfV0sXG4gICAgICAgICAgICBbJyhcXFxcLnwjKD89W157XSl8JXwoQGlkZW50aWZpZXIpfDopKycsICd0YWcnXSAvLyBzZWxlY3RvciAoLmZvbywgZGl2LCAuLi4pXG4gICAgICAgIF0sXG4gICAgICAgIHNlbGVjdG9yYXR0cmlidXRlOiBbXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAdGVybScgfSxcbiAgICAgICAgICAgIFsnXScsIHsgdG9rZW46ICdkZWxpbWl0ZXIuYnJhY2tldCcsIG5leHQ6ICdAcG9wJyB9XVxuICAgICAgICBdLFxuICAgICAgICB0ZXJtOiBbXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAY29tbWVudHMnIH0sXG4gICAgICAgICAgICBbJ3VybChcXFxcLXByZWZpeCk/XFxcXCgnLCB7IHRva2VuOiAnbWV0YScsIG5leHQ6ICdAdXJsZGVjbGFyYXRpb24nIH1dLFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGZ1bmN0aW9uaW52b2NhdGlvbicgfSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BudW1iZXJzJyB9LFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHN0cmluZ3MnIH0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAdmFyaWFibGVyZWZlcmVuY2UnIH0sXG4gICAgICAgICAgICBbJyhhbmRcXFxcYnxvclxcXFxifG5vdFxcXFxiKScsICdvcGVyYXRvciddLFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQG5hbWUnIH0sXG4gICAgICAgICAgICBbJyhbPD49XFxcXCtcXFxcLVxcXFwqXFxcXC9cXFxcXlxcXFx8XFxcXH4sXSknLCAnb3BlcmF0b3InXSxcbiAgICAgICAgICAgIFsnLCcsICdkZWxpbWl0ZXInXSxcbiAgICAgICAgICAgIFsnIWRlZmF1bHQnLCAnbGl0ZXJhbCddLFxuICAgICAgICAgICAgWydcXFxcKCcsIHsgdG9rZW46ICdkZWxpbWl0ZXIucGFyZW50aGVzaXMnLCBuZXh0OiAnQHBhcmVudGhpemVkdGVybScgfV1cbiAgICAgICAgXSxcbiAgICAgICAgcnVsZXZhbHVlOiBbXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAdGVybScgfSxcbiAgICAgICAgICAgIFsnIWltcG9ydGFudCcsICdsaXRlcmFsJ10sXG4gICAgICAgICAgICBbJzsnLCAnZGVsaW1pdGVyJywgJ0Bwb3AnXSxcbiAgICAgICAgICAgIFsneycsIHsgdG9rZW46ICdkZWxpbWl0ZXIuY3VybHknLCBzd2l0Y2hUbzogJ0BuZXN0ZWRwcm9wZXJ0eScgfV0sXG4gICAgICAgICAgICBbJyg/PX0pJywgeyB0b2tlbjogJycsIG5leHQ6ICdAcG9wJyB9XSAvLyBtaXNzaW5nIHNlbWljb2xvblxuICAgICAgICBdLFxuICAgICAgICBuZXN0ZWRwcm9wZXJ0eTogW1xuICAgICAgICAgICAgWydbKl9dP0BpZGVudGlmaWVyQHdzOicsICdhdHRyaWJ1dGUubmFtZScsICdAcnVsZXZhbHVlJ10sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAY29tbWVudHMnIH0sXG4gICAgICAgICAgICBbJ30nLCB7IHRva2VuOiAnZGVsaW1pdGVyLmN1cmx5JywgbmV4dDogJ0Bwb3AnIH1dXG4gICAgICAgIF0sXG4gICAgICAgIHdhcm5kZWJ1ZzogW1snW0BdKHdhcm58ZGVidWcpJywgeyB0b2tlbjogJ2tleXdvcmQnLCBuZXh0OiAnQGRlY2xhcmF0aW9uYm9keScgfV1dLFxuICAgICAgICBpbXBvcnQ6IFtbJ1tAXShpbXBvcnQpJywgeyB0b2tlbjogJ2tleXdvcmQnLCBuZXh0OiAnQGRlY2xhcmF0aW9uYm9keScgfV1dLFxuICAgICAgICB2YXJpYWJsZWRlY2xhcmF0aW9uOiBbXG4gICAgICAgICAgICAvLyBzYXNzIHZhcmlhYmxlc1xuICAgICAgICAgICAgWydcXFxcJEBpZGVudGlmaWVyQHdzOicsICd2YXJpYWJsZS5kZWNsJywgJ0BkZWNsYXJhdGlvbmJvZHknXVxuICAgICAgICBdLFxuICAgICAgICB1cmxkZWNsYXJhdGlvbjogW1xuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHN0cmluZ3MnIH0sXG4gICAgICAgICAgICBbJ1teKVxcclxcbl0rJywgJ3N0cmluZyddLFxuICAgICAgICAgICAgWydcXFxcKScsIHsgdG9rZW46ICdtZXRhJywgbmV4dDogJ0Bwb3AnIH1dXG4gICAgICAgIF0sXG4gICAgICAgIHBhcmVudGhpemVkdGVybTogW1xuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHRlcm0nIH0sXG4gICAgICAgICAgICBbJ1xcXFwpJywgeyB0b2tlbjogJ2RlbGltaXRlci5wYXJlbnRoZXNpcycsIG5leHQ6ICdAcG9wJyB9XVxuICAgICAgICBdLFxuICAgICAgICBkZWNsYXJhdGlvbmJvZHk6IFtcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B0ZXJtJyB9LFxuICAgICAgICAgICAgWyc7JywgJ2RlbGltaXRlcicsICdAcG9wJ10sXG4gICAgICAgICAgICBbJyg/PX0pJywgeyB0b2tlbjogJycsIG5leHQ6ICdAcG9wJyB9XSAvLyBtaXNzaW5nIHNlbWljb2xvblxuICAgICAgICBdLFxuICAgICAgICBleHRlbmRib2R5OiBbXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAc2VsZWN0b3JuYW1lJyB9LFxuICAgICAgICAgICAgWychb3B0aW9uYWwnLCAnbGl0ZXJhbCddLFxuICAgICAgICAgICAgWyc7JywgJ2RlbGltaXRlcicsICdAcG9wJ10sXG4gICAgICAgICAgICBbJyg/PX0pJywgeyB0b2tlbjogJycsIG5leHQ6ICdAcG9wJyB9XSAvLyBtaXNzaW5nIHNlbWljb2xvblxuICAgICAgICBdLFxuICAgICAgICB2YXJpYWJsZXJlZmVyZW5jZTogW1xuICAgICAgICAgICAgLy8gc2FzcyB2YXJpYWJsZSByZWZlcmVuY2VcbiAgICAgICAgICAgIFsnXFxcXCRAaWRlbnRpZmllcicsICd2YXJpYWJsZS5yZWYnXSxcbiAgICAgICAgICAgIFsnXFxcXC5cXFxcLlxcXFwuJywgJ29wZXJhdG9yJ10sXG4gICAgICAgICAgICBbJyN7JywgeyB0b2tlbjogJ21ldGEnLCBuZXh0OiAnQHZhcmlhYmxlaW50ZXJwb2xhdGlvbicgfV0gLy8gc2FzcyB2YXIgcmVzb2x2ZVxuICAgICAgICBdLFxuICAgICAgICB2YXJpYWJsZWludGVycG9sYXRpb246IFtcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B2YXJpYWJsZXJlZmVyZW5jZScgfSxcbiAgICAgICAgICAgIFsnfScsIHsgdG9rZW46ICdtZXRhJywgbmV4dDogJ0Bwb3AnIH1dXG4gICAgICAgIF0sXG4gICAgICAgIGNvbW1lbnRzOiBbXG4gICAgICAgICAgICBbJ1xcXFwvXFxcXConLCAnY29tbWVudCcsICdAY29tbWVudCddLFxuICAgICAgICAgICAgWydcXFxcL1xcXFwvKy4qJywgJ2NvbW1lbnQnXVxuICAgICAgICBdLFxuICAgICAgICBjb21tZW50OiBbXG4gICAgICAgICAgICBbJ1xcXFwqXFxcXC8nLCAnY29tbWVudCcsICdAcG9wJ10sXG4gICAgICAgICAgICBbJy4nLCAnY29tbWVudCddXG4gICAgICAgIF0sXG4gICAgICAgIG5hbWU6IFtbJ0BpZGVudGlmaWVyJywgJ2F0dHJpYnV0ZS52YWx1ZSddXSxcbiAgICAgICAgbnVtYmVyczogW1xuICAgICAgICAgICAgWycoXFxcXGQqXFxcXC4pP1xcXFxkKyhbZUVdW1xcXFwtK10/XFxcXGQrKT8nLCB7IHRva2VuOiAnbnVtYmVyJywgbmV4dDogJ0B1bml0cycgfV0sXG4gICAgICAgICAgICBbJyNbMC05YS1mQS1GX10rKD8hXFxcXHcpJywgJ251bWJlci5oZXgnXVxuICAgICAgICBdLFxuICAgICAgICB1bml0czogW1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICcoZW18ZXh8Y2h8cmVtfHZtaW58dm1heHx2d3x2aHx2bXxjbXxtbXxpbnxweHxwdHxwY3xkZWd8Z3JhZHxyYWR8dHVybnxzfG1zfEh6fGtIenwlKT8nLFxuICAgICAgICAgICAgICAgICdudW1iZXInLFxuICAgICAgICAgICAgICAgICdAcG9wJ1xuICAgICAgICAgICAgXVxuICAgICAgICBdLFxuICAgICAgICBmdW5jdGlvbmRlY2xhcmF0aW9uOiBbXG4gICAgICAgICAgICBbJ0BpZGVudGlmaWVyQHdzXFxcXCgnLCB7IHRva2VuOiAnbWV0YScsIG5leHQ6ICdAcGFyYW1ldGVyZGVjbGFyYXRpb24nIH1dLFxuICAgICAgICAgICAgWyd7JywgeyB0b2tlbjogJ2RlbGltaXRlci5jdXJseScsIHN3aXRjaFRvOiAnQGZ1bmN0aW9uYm9keScgfV1cbiAgICAgICAgXSxcbiAgICAgICAgbWl4aW5kZWNsYXJhdGlvbjogW1xuICAgICAgICAgICAgLy8gbWl4aW4gd2l0aCBwYXJhbWV0ZXJzXG4gICAgICAgICAgICBbJ0BpZGVudGlmaWVyQHdzXFxcXCgnLCB7IHRva2VuOiAnbWV0YScsIG5leHQ6ICdAcGFyYW1ldGVyZGVjbGFyYXRpb24nIH1dLFxuICAgICAgICAgICAgLy8gbWl4aW4gd2l0aG91dCBwYXJhbWV0ZXJzXG4gICAgICAgICAgICBbJ0BpZGVudGlmaWVyJywgJ21ldGEnXSxcbiAgICAgICAgICAgIFsneycsIHsgdG9rZW46ICdkZWxpbWl0ZXIuY3VybHknLCBzd2l0Y2hUbzogJ0BzZWxlY3RvcmJvZHknIH1dXG4gICAgICAgIF0sXG4gICAgICAgIHBhcmFtZXRlcmRlY2xhcmF0aW9uOiBbXG4gICAgICAgICAgICBbJ1xcXFwkQGlkZW50aWZpZXJAd3M6JywgJ3ZhcmlhYmxlLmRlY2wnXSxcbiAgICAgICAgICAgIFsnXFxcXC5cXFxcLlxcXFwuJywgJ29wZXJhdG9yJ10sXG4gICAgICAgICAgICBbJywnLCAnZGVsaW1pdGVyJ10sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAdGVybScgfSxcbiAgICAgICAgICAgIFsnXFxcXCknLCB7IHRva2VuOiAnbWV0YScsIG5leHQ6ICdAcG9wJyB9XVxuICAgICAgICBdLFxuICAgICAgICBpbmNsdWRlZGVjbGFyYXRpb246IFtcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BmdW5jdGlvbmludm9jYXRpb24nIH0sXG4gICAgICAgICAgICBbJ0BpZGVudGlmaWVyJywgJ21ldGEnXSxcbiAgICAgICAgICAgIFsnOycsICdkZWxpbWl0ZXInLCAnQHBvcCddLFxuICAgICAgICAgICAgWycoPz19KScsIHsgdG9rZW46ICcnLCBuZXh0OiAnQHBvcCcgfV0sXG4gICAgICAgICAgICBbJ3snLCB7IHRva2VuOiAnZGVsaW1pdGVyLmN1cmx5Jywgc3dpdGNoVG86ICdAc2VsZWN0b3Jib2R5JyB9XVxuICAgICAgICBdLFxuICAgICAgICBrZXlmcmFtZWRlY2xhcmF0aW9uOiBbXG4gICAgICAgICAgICBbJ0BpZGVudGlmaWVyJywgJ21ldGEnXSxcbiAgICAgICAgICAgIFsneycsIHsgdG9rZW46ICdkZWxpbWl0ZXIuY3VybHknLCBzd2l0Y2hUbzogJ0BrZXlmcmFtZWJvZHknIH1dXG4gICAgICAgIF0sXG4gICAgICAgIGtleWZyYW1lYm9keTogW1xuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHRlcm0nIH0sXG4gICAgICAgICAgICBbJ3snLCB7IHRva2VuOiAnZGVsaW1pdGVyLmN1cmx5JywgbmV4dDogJ0BzZWxlY3RvcmJvZHknIH1dLFxuICAgICAgICAgICAgWyd9JywgeyB0b2tlbjogJ2RlbGltaXRlci5jdXJseScsIG5leHQ6ICdAcG9wJyB9XVxuICAgICAgICBdLFxuICAgICAgICBjb250cm9sc3RhdGVtZW50OiBbXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgJ1tAXShpZnxlbHNlfGZvcnx3aGlsZXxlYWNofG1lZGlhKScsXG4gICAgICAgICAgICAgICAgeyB0b2tlbjogJ2tleXdvcmQuZmxvdycsIG5leHQ6ICdAY29udHJvbHN0YXRlbWVudGRlY2xhcmF0aW9uJyB9XG4gICAgICAgICAgICBdXG4gICAgICAgIF0sXG4gICAgICAgIGNvbnRyb2xzdGF0ZW1lbnRkZWNsYXJhdGlvbjogW1xuICAgICAgICAgICAgWycoaW58ZnJvbXx0aHJvdWdofGlmfHRvKVxcXFxiJywgeyB0b2tlbjogJ2tleXdvcmQuZmxvdycgfV0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAdGVybScgfSxcbiAgICAgICAgICAgIFsneycsIHsgdG9rZW46ICdkZWxpbWl0ZXIuY3VybHknLCBzd2l0Y2hUbzogJ0BzZWxlY3RvcmJvZHknIH1dXG4gICAgICAgIF0sXG4gICAgICAgIGZ1bmN0aW9uYm9keTogW1xuICAgICAgICAgICAgWydbQF0ocmV0dXJuKScsIHsgdG9rZW46ICdrZXl3b3JkJyB9XSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B2YXJpYWJsZWRlY2xhcmF0aW9uJyB9LFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHRlcm0nIH0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAY29udHJvbHN0YXRlbWVudCcgfSxcbiAgICAgICAgICAgIFsnOycsICdkZWxpbWl0ZXInXSxcbiAgICAgICAgICAgIFsnfScsIHsgdG9rZW46ICdkZWxpbWl0ZXIuY3VybHknLCBuZXh0OiAnQHBvcCcgfV1cbiAgICAgICAgXSxcbiAgICAgICAgZnVuY3Rpb25pbnZvY2F0aW9uOiBbWydAaWRlbnRpZmllclxcXFwoJywgeyB0b2tlbjogJ21ldGEnLCBuZXh0OiAnQGZ1bmN0aW9uYXJndW1lbnRzJyB9XV0sXG4gICAgICAgIGZ1bmN0aW9uYXJndW1lbnRzOiBbXG4gICAgICAgICAgICBbJ1xcXFwkQGlkZW50aWZpZXJAd3M6JywgJ2F0dHJpYnV0ZS5uYW1lJ10sXG4gICAgICAgICAgICBbJ1ssXScsICdkZWxpbWl0ZXInXSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B0ZXJtJyB9LFxuICAgICAgICAgICAgWydcXFxcKScsIHsgdG9rZW46ICdtZXRhJywgbmV4dDogJ0Bwb3AnIH1dXG4gICAgICAgIF0sXG4gICAgICAgIHN0cmluZ3M6IFtcbiAgICAgICAgICAgIFsnfj9cIicsIHsgdG9rZW46ICdzdHJpbmcuZGVsaW1pdGVyJywgbmV4dDogJ0BzdHJpbmdlbmRkb3VibGVxdW90ZScgfV0sXG4gICAgICAgICAgICBbXCJ+PydcIiwgeyB0b2tlbjogJ3N0cmluZy5kZWxpbWl0ZXInLCBuZXh0OiAnQHN0cmluZ2VuZHF1b3RlJyB9XVxuICAgICAgICBdLFxuICAgICAgICBzdHJpbmdlbmRkb3VibGVxdW90ZTogW1xuICAgICAgICAgICAgWydcXFxcXFxcXC4nLCAnc3RyaW5nJ10sXG4gICAgICAgICAgICBbJ1wiJywgeyB0b2tlbjogJ3N0cmluZy5kZWxpbWl0ZXInLCBuZXh0OiAnQHBvcCcgfV0sXG4gICAgICAgICAgICBbJy4nLCAnc3RyaW5nJ11cbiAgICAgICAgXSxcbiAgICAgICAgc3RyaW5nZW5kcXVvdGU6IFtcbiAgICAgICAgICAgIFsnXFxcXFxcXFwuJywgJ3N0cmluZyddLFxuICAgICAgICAgICAgW1wiJ1wiLCB7IHRva2VuOiAnc3RyaW5nLmRlbGltaXRlcicsIG5leHQ6ICdAcG9wJyB9XSxcbiAgICAgICAgICAgIFsnLicsICdzdHJpbmcnXVxuICAgICAgICBdXG4gICAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=