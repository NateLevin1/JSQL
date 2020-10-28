(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/css/css.js":
/*!**********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/css/css.js ***!
  \**********************************************************************/
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
    wordPattern: /(#?-?\d*\.\d\w*%?)|((::|[@#.!:])?[\w-?]+%?)|::|[@#.!:]/g,
    comments: {
        blockComment: ['/*', '*/']
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
    tokenPostfix: '.css',
    ws: '[ \t\n\r\f]*',
    identifier: '-?-?([a-zA-Z]|(\\\\(([0-9a-fA-F]{1,6}\\s?)|[^[0-9a-fA-F])))([\\w\\-]|(\\\\(([0-9a-fA-F]{1,6}\\s?)|[^[0-9a-fA-F])))*',
    brackets: [
        { open: '{', close: '}', token: 'delimiter.bracket' },
        { open: '[', close: ']', token: 'delimiter.bracket' },
        { open: '(', close: ')', token: 'delimiter.parenthesis' },
        { open: '<', close: '>', token: 'delimiter.angle' }
    ],
    tokenizer: {
        root: [{ include: '@selector' }],
        selector: [
            { include: '@comments' },
            { include: '@import' },
            { include: '@strings' },
            [
                '[@](keyframes|-webkit-keyframes|-moz-keyframes|-o-keyframes)',
                { token: 'keyword', next: '@keyframedeclaration' }
            ],
            ['[@](page|content|font-face|-moz-document)', { token: 'keyword' }],
            ['[@](charset|namespace)', { token: 'keyword', next: '@declarationbody' }],
            [
                '(url-prefix)(\\()',
                ['attribute.value', { token: 'delimiter.parenthesis', next: '@urldeclaration' }]
            ],
            [
                '(url)(\\()',
                ['attribute.value', { token: 'delimiter.parenthesis', next: '@urldeclaration' }]
            ],
            { include: '@selectorname' },
            ['[\\*]', 'tag'],
            ['[>\\+,]', 'delimiter'],
            ['\\[', { token: 'delimiter.bracket', next: '@selectorattribute' }],
            ['{', { token: 'delimiter.bracket', next: '@selectorbody' }]
        ],
        selectorbody: [
            { include: '@comments' },
            ['[*_]?@identifier@ws:(?=(\\s|\\d|[^{;}]*[;}]))', 'attribute.name', '@rulevalue'],
            ['}', { token: 'delimiter.bracket', next: '@pop' }]
        ],
        selectorname: [
            ['(\\.|#(?=[^{])|%|(@identifier)|:)+', 'tag'] // selector (.foo, div, ...)
        ],
        selectorattribute: [
            { include: '@term' },
            [']', { token: 'delimiter.bracket', next: '@pop' }]
        ],
        term: [
            { include: '@comments' },
            [
                '(url-prefix)(\\()',
                ['attribute.value', { token: 'delimiter.parenthesis', next: '@urldeclaration' }]
            ],
            [
                '(url)(\\()',
                ['attribute.value', { token: 'delimiter.parenthesis', next: '@urldeclaration' }]
            ],
            { include: '@functioninvocation' },
            { include: '@numbers' },
            { include: '@name' },
            ['([<>=\\+\\-\\*\\/\\^\\|\\~,])', 'delimiter'],
            [',', 'delimiter']
        ],
        rulevalue: [
            { include: '@comments' },
            { include: '@strings' },
            { include: '@term' },
            ['!important', 'keyword'],
            [';', 'delimiter', '@pop'],
            ['(?=})', { token: '', next: '@pop' }] // missing semicolon
        ],
        warndebug: [['[@](warn|debug)', { token: 'keyword', next: '@declarationbody' }]],
        import: [['[@](import)', { token: 'keyword', next: '@declarationbody' }]],
        urldeclaration: [
            { include: '@strings' },
            ['[^)\r\n]+', 'string'],
            ['\\)', { token: 'delimiter.parenthesis', next: '@pop' }]
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
        comments: [
            ['\\/\\*', 'comment', '@comment'],
            ['\\/\\/+.*', 'comment']
        ],
        comment: [
            ['\\*\\/', 'comment', '@pop'],
            [/[^*/]+/, 'comment'],
            [/./, 'comment']
        ],
        name: [['@identifier', 'attribute.value']],
        numbers: [
            [
                '-?(\\d*\\.)?\\d+([eE][\\-+]?\\d+)?',
                { token: 'attribute.value.number', next: '@units' }
            ],
            ['#[0-9a-fA-F_]+(?!\\w)', 'attribute.value.hex']
        ],
        units: [
            [
                '(em|ex|ch|rem|vmin|vmax|vw|vh|vm|cm|mm|in|px|pt|pc|deg|grad|rad|turn|s|ms|Hz|kHz|%)?',
                'attribute.value.unit',
                '@pop'
            ]
        ],
        keyframedeclaration: [
            ['@identifier', 'attribute.value'],
            ['{', { token: 'delimiter.bracket', switchTo: '@keyframebody' }]
        ],
        keyframebody: [
            { include: '@term' },
            ['{', { token: 'delimiter.bracket', next: '@selectorbody' }],
            ['}', { token: 'delimiter.bracket', next: '@pop' }]
        ],
        functioninvocation: [
            ['@identifier\\(', { token: 'attribute.value', next: '@functionarguments' }]
        ],
        functionarguments: [
            ['\\$@identifier@ws:', 'attribute.name'],
            ['[,]', 'delimiter'],
            { include: '@term' },
            ['\\)', { token: 'attribute.value', next: '@pop' }]
        ],
        strings: [
            ['~?"', { token: 'string', next: '@stringenddoublequote' }],
            ["~?'", { token: 'string', next: '@stringendquote' }]
        ],
        stringenddoublequote: [
            ['\\\\.', 'string'],
            ['"', { token: 'string', next: '@pop' }],
            [/[^\\"]+/, 'string'],
            ['.', 'string']
        ],
        stringendquote: [
            ['\\\\.', 'string'],
            ["'", { token: 'string', next: '@pop' }],
            [/[^\\']+/, 'string'],
            ['.', 'string']
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL2Nzcy9jc3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxXQUFXLEtBQUs7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsWUFBWSxpQ0FBaUM7QUFDL0QsU0FBUyxzREFBc0Q7QUFDL0QsU0FBUyxzREFBc0Q7QUFDL0QsU0FBUyxzREFBc0Q7QUFDL0QsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTLFNBQVMsWUFBWSxHQUFHO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsSUFBSSxtREFBbUQsSUFBSTtBQUM3RztBQUNBLFNBQVMsU0FBUyxZQUFZLCtCQUErQjtBQUM3RCxTQUFTLG9EQUFvRDtBQUM3RCxTQUFTLHdEQUF3RDtBQUNqRSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLGdCQUFnQix1QkFBdUI7QUFDdkM7QUFDQSxhQUFhLHVCQUF1QjtBQUNwQyxhQUFhLHFCQUFxQjtBQUNsQyxhQUFhLHNCQUFzQjtBQUNuQztBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsMkRBQTJELG1CQUFtQjtBQUM5RSx3Q0FBd0MsNkNBQTZDO0FBQ3JGO0FBQ0E7QUFDQSxxQ0FBcUMsMERBQTBEO0FBQy9GO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQywwREFBMEQ7QUFDL0Y7QUFDQSxhQUFhLDJCQUEyQjtBQUN4QztBQUNBO0FBQ0EscUJBQXFCLHlEQUF5RDtBQUM5RSxlQUFlLElBQUksb0RBQW9EO0FBQ3ZFO0FBQ0E7QUFDQSxhQUFhLHVCQUF1QjtBQUNwQyxtREFBbUQsS0FBSztBQUN4RCxlQUFlLElBQUksMkNBQTJDO0FBQzlEO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBLGFBQWEsbUJBQW1CO0FBQ2hDLG1CQUFtQiwyQ0FBMkM7QUFDOUQ7QUFDQTtBQUNBLGFBQWEsdUJBQXVCO0FBQ3BDO0FBQ0E7QUFDQSxxQ0FBcUMsMERBQTBEO0FBQy9GO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQywwREFBMEQ7QUFDL0Y7QUFDQSxhQUFhLGlDQUFpQztBQUM5QyxhQUFhLHNCQUFzQjtBQUNuQyxhQUFhLG1CQUFtQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsdUJBQXVCO0FBQ3BDLGFBQWEsc0JBQXNCO0FBQ25DLGFBQWEsbUJBQW1CO0FBQ2hDO0FBQ0EsZUFBZTtBQUNmLGtCQUFrQixLQUFLLDBCQUEwQjtBQUNqRDtBQUNBLHlDQUF5Qyw2Q0FBNkM7QUFDdEYsa0NBQWtDLDZDQUE2QztBQUMvRTtBQUNBLGFBQWEsc0JBQXNCO0FBQ25DO0FBQ0EscUJBQXFCLCtDQUErQztBQUNwRTtBQUNBO0FBQ0EsYUFBYSxtQkFBbUI7QUFDaEMscUJBQXFCLCtDQUErQztBQUNwRTtBQUNBO0FBQ0EsYUFBYSxtQkFBbUI7QUFDaEMsZUFBZTtBQUNmLGtCQUFrQixLQUFLLDBCQUEwQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsSUFBSSx3REFBd0Q7QUFDM0U7QUFDQTtBQUNBLGFBQWEsbUJBQW1CO0FBQ2hDLGVBQWUsSUFBSSxvREFBb0Q7QUFDdkUsZUFBZSxJQUFJLDJDQUEyQztBQUM5RDtBQUNBO0FBQ0EsZ0NBQWdDLHVEQUF1RDtBQUN2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUJBQW1CO0FBQ2hDLHFCQUFxQix5Q0FBeUM7QUFDOUQ7QUFDQTtBQUNBLHFCQUFxQixpREFBaUQ7QUFDdEUscUJBQXFCLDJDQUEyQztBQUNoRTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZ0NBQWdDO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZ0NBQWdDO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiMTYuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5leHBvcnQgdmFyIGNvbmYgPSB7XG4gICAgd29yZFBhdHRlcm46IC8oIz8tP1xcZCpcXC5cXGRcXHcqJT8pfCgoOjp8W0AjLiE6XSk/W1xcdy0/XSslPyl8Ojp8W0AjLiE6XS9nLFxuICAgIGNvbW1lbnRzOiB7XG4gICAgICAgIGJsb2NrQ29tbWVudDogWycvKicsICcqLyddXG4gICAgfSxcbiAgICBicmFja2V0czogW1xuICAgICAgICBbJ3snLCAnfSddLFxuICAgICAgICBbJ1snLCAnXSddLFxuICAgICAgICBbJygnLCAnKSddXG4gICAgXSxcbiAgICBhdXRvQ2xvc2luZ1BhaXJzOiBbXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nLCBub3RJbjogWydzdHJpbmcnLCAnY29tbWVudCddIH0sXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nLCBub3RJbjogWydzdHJpbmcnLCAnY29tbWVudCddIH0sXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknLCBub3RJbjogWydzdHJpbmcnLCAnY29tbWVudCddIH0sXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicsIG5vdEluOiBbJ3N0cmluZycsICdjb21tZW50J10gfSxcbiAgICAgICAgeyBvcGVuOiBcIidcIiwgY2xvc2U6IFwiJ1wiLCBub3RJbjogWydzdHJpbmcnLCAnY29tbWVudCddIH1cbiAgICBdLFxuICAgIHN1cnJvdW5kaW5nUGFpcnM6IFtcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9LFxuICAgICAgICB7IG9wZW46IFwiJ1wiLCBjbG9zZTogXCInXCIgfVxuICAgIF0sXG4gICAgZm9sZGluZzoge1xuICAgICAgICBtYXJrZXJzOiB7XG4gICAgICAgICAgICBzdGFydDogbmV3IFJlZ0V4cCgnXlxcXFxzKlxcXFwvXFxcXCpcXFxccyojcmVnaW9uXFxcXGJcXFxccyooLio/KVxcXFxzKlxcXFwqXFxcXC8nKSxcbiAgICAgICAgICAgIGVuZDogbmV3IFJlZ0V4cCgnXlxcXFxzKlxcXFwvXFxcXCpcXFxccyojZW5kcmVnaW9uXFxcXGIuKlxcXFwqXFxcXC8nKVxuICAgICAgICB9XG4gICAgfVxufTtcbmV4cG9ydCB2YXIgbGFuZ3VhZ2UgPSB7XG4gICAgZGVmYXVsdFRva2VuOiAnJyxcbiAgICB0b2tlblBvc3RmaXg6ICcuY3NzJyxcbiAgICB3czogJ1sgXFx0XFxuXFxyXFxmXSonLFxuICAgIGlkZW50aWZpZXI6ICctPy0/KFthLXpBLVpdfChcXFxcXFxcXCgoWzAtOWEtZkEtRl17MSw2fVxcXFxzPyl8W15bMC05YS1mQS1GXSkpKShbXFxcXHdcXFxcLV18KFxcXFxcXFxcKChbMC05YS1mQS1GXXsxLDZ9XFxcXHM/KXxbXlswLTlhLWZBLUZdKSkpKicsXG4gICAgYnJhY2tldHM6IFtcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScsIHRva2VuOiAnZGVsaW1pdGVyLmJyYWNrZXQnIH0sXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nLCB0b2tlbjogJ2RlbGltaXRlci5icmFja2V0JyB9LFxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJywgdG9rZW46ICdkZWxpbWl0ZXIucGFyZW50aGVzaXMnIH0sXG4gICAgICAgIHsgb3BlbjogJzwnLCBjbG9zZTogJz4nLCB0b2tlbjogJ2RlbGltaXRlci5hbmdsZScgfVxuICAgIF0sXG4gICAgdG9rZW5pemVyOiB7XG4gICAgICAgIHJvb3Q6IFt7IGluY2x1ZGU6ICdAc2VsZWN0b3InIH1dLFxuICAgICAgICBzZWxlY3RvcjogW1xuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGNvbW1lbnRzJyB9LFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGltcG9ydCcgfSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BzdHJpbmdzJyB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICdbQF0oa2V5ZnJhbWVzfC13ZWJraXQta2V5ZnJhbWVzfC1tb3ota2V5ZnJhbWVzfC1vLWtleWZyYW1lcyknLFxuICAgICAgICAgICAgICAgIHsgdG9rZW46ICdrZXl3b3JkJywgbmV4dDogJ0BrZXlmcmFtZWRlY2xhcmF0aW9uJyB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgWydbQF0ocGFnZXxjb250ZW50fGZvbnQtZmFjZXwtbW96LWRvY3VtZW50KScsIHsgdG9rZW46ICdrZXl3b3JkJyB9XSxcbiAgICAgICAgICAgIFsnW0BdKGNoYXJzZXR8bmFtZXNwYWNlKScsIHsgdG9rZW46ICdrZXl3b3JkJywgbmV4dDogJ0BkZWNsYXJhdGlvbmJvZHknIH1dLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICcodXJsLXByZWZpeCkoXFxcXCgpJyxcbiAgICAgICAgICAgICAgICBbJ2F0dHJpYnV0ZS52YWx1ZScsIHsgdG9rZW46ICdkZWxpbWl0ZXIucGFyZW50aGVzaXMnLCBuZXh0OiAnQHVybGRlY2xhcmF0aW9uJyB9XVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAnKHVybCkoXFxcXCgpJyxcbiAgICAgICAgICAgICAgICBbJ2F0dHJpYnV0ZS52YWx1ZScsIHsgdG9rZW46ICdkZWxpbWl0ZXIucGFyZW50aGVzaXMnLCBuZXh0OiAnQHVybGRlY2xhcmF0aW9uJyB9XVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BzZWxlY3Rvcm5hbWUnIH0sXG4gICAgICAgICAgICBbJ1tcXFxcKl0nLCAndGFnJ10sXG4gICAgICAgICAgICBbJ1s+XFxcXCssXScsICdkZWxpbWl0ZXInXSxcbiAgICAgICAgICAgIFsnXFxcXFsnLCB7IHRva2VuOiAnZGVsaW1pdGVyLmJyYWNrZXQnLCBuZXh0OiAnQHNlbGVjdG9yYXR0cmlidXRlJyB9XSxcbiAgICAgICAgICAgIFsneycsIHsgdG9rZW46ICdkZWxpbWl0ZXIuYnJhY2tldCcsIG5leHQ6ICdAc2VsZWN0b3Jib2R5JyB9XVxuICAgICAgICBdLFxuICAgICAgICBzZWxlY3RvcmJvZHk6IFtcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0Bjb21tZW50cycgfSxcbiAgICAgICAgICAgIFsnWypfXT9AaWRlbnRpZmllckB3czooPz0oXFxcXHN8XFxcXGR8W157O31dKls7fV0pKScsICdhdHRyaWJ1dGUubmFtZScsICdAcnVsZXZhbHVlJ10sXG4gICAgICAgICAgICBbJ30nLCB7IHRva2VuOiAnZGVsaW1pdGVyLmJyYWNrZXQnLCBuZXh0OiAnQHBvcCcgfV1cbiAgICAgICAgXSxcbiAgICAgICAgc2VsZWN0b3JuYW1lOiBbXG4gICAgICAgICAgICBbJyhcXFxcLnwjKD89W157XSl8JXwoQGlkZW50aWZpZXIpfDopKycsICd0YWcnXSAvLyBzZWxlY3RvciAoLmZvbywgZGl2LCAuLi4pXG4gICAgICAgIF0sXG4gICAgICAgIHNlbGVjdG9yYXR0cmlidXRlOiBbXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAdGVybScgfSxcbiAgICAgICAgICAgIFsnXScsIHsgdG9rZW46ICdkZWxpbWl0ZXIuYnJhY2tldCcsIG5leHQ6ICdAcG9wJyB9XVxuICAgICAgICBdLFxuICAgICAgICB0ZXJtOiBbXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAY29tbWVudHMnIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgJyh1cmwtcHJlZml4KShcXFxcKCknLFxuICAgICAgICAgICAgICAgIFsnYXR0cmlidXRlLnZhbHVlJywgeyB0b2tlbjogJ2RlbGltaXRlci5wYXJlbnRoZXNpcycsIG5leHQ6ICdAdXJsZGVjbGFyYXRpb24nIH1dXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICcodXJsKShcXFxcKCknLFxuICAgICAgICAgICAgICAgIFsnYXR0cmlidXRlLnZhbHVlJywgeyB0b2tlbjogJ2RlbGltaXRlci5wYXJlbnRoZXNpcycsIG5leHQ6ICdAdXJsZGVjbGFyYXRpb24nIH1dXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGZ1bmN0aW9uaW52b2NhdGlvbicgfSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BudW1iZXJzJyB9LFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQG5hbWUnIH0sXG4gICAgICAgICAgICBbJyhbPD49XFxcXCtcXFxcLVxcXFwqXFxcXC9cXFxcXlxcXFx8XFxcXH4sXSknLCAnZGVsaW1pdGVyJ10sXG4gICAgICAgICAgICBbJywnLCAnZGVsaW1pdGVyJ11cbiAgICAgICAgXSxcbiAgICAgICAgcnVsZXZhbHVlOiBbXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAY29tbWVudHMnIH0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAc3RyaW5ncycgfSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B0ZXJtJyB9LFxuICAgICAgICAgICAgWychaW1wb3J0YW50JywgJ2tleXdvcmQnXSxcbiAgICAgICAgICAgIFsnOycsICdkZWxpbWl0ZXInLCAnQHBvcCddLFxuICAgICAgICAgICAgWycoPz19KScsIHsgdG9rZW46ICcnLCBuZXh0OiAnQHBvcCcgfV0gLy8gbWlzc2luZyBzZW1pY29sb25cbiAgICAgICAgXSxcbiAgICAgICAgd2FybmRlYnVnOiBbWydbQF0od2FybnxkZWJ1ZyknLCB7IHRva2VuOiAna2V5d29yZCcsIG5leHQ6ICdAZGVjbGFyYXRpb25ib2R5JyB9XV0sXG4gICAgICAgIGltcG9ydDogW1snW0BdKGltcG9ydCknLCB7IHRva2VuOiAna2V5d29yZCcsIG5leHQ6ICdAZGVjbGFyYXRpb25ib2R5JyB9XV0sXG4gICAgICAgIHVybGRlY2xhcmF0aW9uOiBbXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAc3RyaW5ncycgfSxcbiAgICAgICAgICAgIFsnW14pXFxyXFxuXSsnLCAnc3RyaW5nJ10sXG4gICAgICAgICAgICBbJ1xcXFwpJywgeyB0b2tlbjogJ2RlbGltaXRlci5wYXJlbnRoZXNpcycsIG5leHQ6ICdAcG9wJyB9XVxuICAgICAgICBdLFxuICAgICAgICBwYXJlbnRoaXplZHRlcm06IFtcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B0ZXJtJyB9LFxuICAgICAgICAgICAgWydcXFxcKScsIHsgdG9rZW46ICdkZWxpbWl0ZXIucGFyZW50aGVzaXMnLCBuZXh0OiAnQHBvcCcgfV1cbiAgICAgICAgXSxcbiAgICAgICAgZGVjbGFyYXRpb25ib2R5OiBbXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAdGVybScgfSxcbiAgICAgICAgICAgIFsnOycsICdkZWxpbWl0ZXInLCAnQHBvcCddLFxuICAgICAgICAgICAgWycoPz19KScsIHsgdG9rZW46ICcnLCBuZXh0OiAnQHBvcCcgfV0gLy8gbWlzc2luZyBzZW1pY29sb25cbiAgICAgICAgXSxcbiAgICAgICAgY29tbWVudHM6IFtcbiAgICAgICAgICAgIFsnXFxcXC9cXFxcKicsICdjb21tZW50JywgJ0Bjb21tZW50J10sXG4gICAgICAgICAgICBbJ1xcXFwvXFxcXC8rLionLCAnY29tbWVudCddXG4gICAgICAgIF0sXG4gICAgICAgIGNvbW1lbnQ6IFtcbiAgICAgICAgICAgIFsnXFxcXCpcXFxcLycsICdjb21tZW50JywgJ0Bwb3AnXSxcbiAgICAgICAgICAgIFsvW14qL10rLywgJ2NvbW1lbnQnXSxcbiAgICAgICAgICAgIFsvLi8sICdjb21tZW50J11cbiAgICAgICAgXSxcbiAgICAgICAgbmFtZTogW1snQGlkZW50aWZpZXInLCAnYXR0cmlidXRlLnZhbHVlJ11dLFxuICAgICAgICBudW1iZXJzOiBbXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgJy0/KFxcXFxkKlxcXFwuKT9cXFxcZCsoW2VFXVtcXFxcLStdP1xcXFxkKyk/JyxcbiAgICAgICAgICAgICAgICB7IHRva2VuOiAnYXR0cmlidXRlLnZhbHVlLm51bWJlcicsIG5leHQ6ICdAdW5pdHMnIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbJyNbMC05YS1mQS1GX10rKD8hXFxcXHcpJywgJ2F0dHJpYnV0ZS52YWx1ZS5oZXgnXVxuICAgICAgICBdLFxuICAgICAgICB1bml0czogW1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICcoZW18ZXh8Y2h8cmVtfHZtaW58dm1heHx2d3x2aHx2bXxjbXxtbXxpbnxweHxwdHxwY3xkZWd8Z3JhZHxyYWR8dHVybnxzfG1zfEh6fGtIenwlKT8nLFxuICAgICAgICAgICAgICAgICdhdHRyaWJ1dGUudmFsdWUudW5pdCcsXG4gICAgICAgICAgICAgICAgJ0Bwb3AnXG4gICAgICAgICAgICBdXG4gICAgICAgIF0sXG4gICAgICAgIGtleWZyYW1lZGVjbGFyYXRpb246IFtcbiAgICAgICAgICAgIFsnQGlkZW50aWZpZXInLCAnYXR0cmlidXRlLnZhbHVlJ10sXG4gICAgICAgICAgICBbJ3snLCB7IHRva2VuOiAnZGVsaW1pdGVyLmJyYWNrZXQnLCBzd2l0Y2hUbzogJ0BrZXlmcmFtZWJvZHknIH1dXG4gICAgICAgIF0sXG4gICAgICAgIGtleWZyYW1lYm9keTogW1xuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHRlcm0nIH0sXG4gICAgICAgICAgICBbJ3snLCB7IHRva2VuOiAnZGVsaW1pdGVyLmJyYWNrZXQnLCBuZXh0OiAnQHNlbGVjdG9yYm9keScgfV0sXG4gICAgICAgICAgICBbJ30nLCB7IHRva2VuOiAnZGVsaW1pdGVyLmJyYWNrZXQnLCBuZXh0OiAnQHBvcCcgfV1cbiAgICAgICAgXSxcbiAgICAgICAgZnVuY3Rpb25pbnZvY2F0aW9uOiBbXG4gICAgICAgICAgICBbJ0BpZGVudGlmaWVyXFxcXCgnLCB7IHRva2VuOiAnYXR0cmlidXRlLnZhbHVlJywgbmV4dDogJ0BmdW5jdGlvbmFyZ3VtZW50cycgfV1cbiAgICAgICAgXSxcbiAgICAgICAgZnVuY3Rpb25hcmd1bWVudHM6IFtcbiAgICAgICAgICAgIFsnXFxcXCRAaWRlbnRpZmllckB3czonLCAnYXR0cmlidXRlLm5hbWUnXSxcbiAgICAgICAgICAgIFsnWyxdJywgJ2RlbGltaXRlciddLFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHRlcm0nIH0sXG4gICAgICAgICAgICBbJ1xcXFwpJywgeyB0b2tlbjogJ2F0dHJpYnV0ZS52YWx1ZScsIG5leHQ6ICdAcG9wJyB9XVxuICAgICAgICBdLFxuICAgICAgICBzdHJpbmdzOiBbXG4gICAgICAgICAgICBbJ34/XCInLCB7IHRva2VuOiAnc3RyaW5nJywgbmV4dDogJ0BzdHJpbmdlbmRkb3VibGVxdW90ZScgfV0sXG4gICAgICAgICAgICBbXCJ+PydcIiwgeyB0b2tlbjogJ3N0cmluZycsIG5leHQ6ICdAc3RyaW5nZW5kcXVvdGUnIH1dXG4gICAgICAgIF0sXG4gICAgICAgIHN0cmluZ2VuZGRvdWJsZXF1b3RlOiBbXG4gICAgICAgICAgICBbJ1xcXFxcXFxcLicsICdzdHJpbmcnXSxcbiAgICAgICAgICAgIFsnXCInLCB7IHRva2VuOiAnc3RyaW5nJywgbmV4dDogJ0Bwb3AnIH1dLFxuICAgICAgICAgICAgWy9bXlxcXFxcIl0rLywgJ3N0cmluZyddLFxuICAgICAgICAgICAgWycuJywgJ3N0cmluZyddXG4gICAgICAgIF0sXG4gICAgICAgIHN0cmluZ2VuZHF1b3RlOiBbXG4gICAgICAgICAgICBbJ1xcXFxcXFxcLicsICdzdHJpbmcnXSxcbiAgICAgICAgICAgIFtcIidcIiwgeyB0b2tlbjogJ3N0cmluZycsIG5leHQ6ICdAcG9wJyB9XSxcbiAgICAgICAgICAgIFsvW15cXFxcJ10rLywgJ3N0cmluZyddLFxuICAgICAgICAgICAgWycuJywgJ3N0cmluZyddXG4gICAgICAgIF1cbiAgICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==