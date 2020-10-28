(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/graphql/graphql.js":
/*!******************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/graphql/graphql.js ***!
  \******************************************************************************/
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
    comments: {
        lineComment: '#'
    },
    brackets: [
        ['{', '}'],
        ['[', ']'],
        ['(', ')']
    ],
    autoClosingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"""', close: '"""', notIn: ['string', 'comment'] },
        { open: '"', close: '"', notIn: ['string', 'comment'] }
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"""', close: '"""' },
        { open: '"', close: '"' }
    ],
    folding: {
        offSide: true
    }
};
var language = {
    // Set defaultToken to invalid to see what you do not tokenize yet
    defaultToken: 'invalid',
    tokenPostfix: '.gql',
    keywords: [
        'null',
        'true',
        'false',
        'query',
        'mutation',
        'subscription',
        'extend',
        'schema',
        'directive',
        'scalar',
        'type',
        'interface',
        'union',
        'enum',
        'input',
        'implements',
        'fragment',
        'on'
    ],
    typeKeywords: ['Int', 'Float', 'String', 'Boolean', 'ID'],
    directiveLocations: [
        'SCHEMA',
        'SCALAR',
        'OBJECT',
        'FIELD_DEFINITION',
        'ARGUMENT_DEFINITION',
        'INTERFACE',
        'UNION',
        'ENUM',
        'ENUM_VALUE',
        'INPUT_OBJECT',
        'INPUT_FIELD_DEFINITION',
        'QUERY',
        'MUTATION',
        'SUBSCRIPTION',
        'FIELD',
        'FRAGMENT_DEFINITION',
        'FRAGMENT_SPREAD',
        'INLINE_FRAGMENT',
        'VARIABLE_DEFINITION'
    ],
    operators: ['=', '!', '?', ':', '&', '|'],
    // we include these common regular expressions
    symbols: /[=!?:&|]+/,
    // https://facebook.github.io/graphql/draft/#sec-String-Value
    escapes: /\\(?:["\\\/bfnrt]|u[0-9A-Fa-f]{4})/,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            // fields and argument names
            [
                /[a-z_][\w$]*/,
                {
                    cases: {
                        '@keywords': 'keyword',
                        '@default': 'key.identifier'
                    }
                }
            ],
            // identify typed input variables
            [
                /[$][\w$]*/,
                {
                    cases: {
                        '@keywords': 'keyword',
                        '@default': 'argument.identifier'
                    }
                }
            ],
            // to show class names nicely
            [
                /[A-Z][\w\$]*/,
                {
                    cases: {
                        '@typeKeywords': 'keyword',
                        '@default': 'type.identifier'
                    }
                }
            ],
            // whitespace
            { include: '@whitespace' },
            // delimiters and operators
            [/[{}()\[\]]/, '@brackets'],
            [/@symbols/, { cases: { '@operators': 'operator', '@default': '' } }],
            // @ annotations.
            // As an example, we emit a debugging log message on these tokens.
            // Note: message are supressed during the first load -- change some lines to see them.
            [/@\s*[a-zA-Z_\$][\w\$]*/, { token: 'annotation', log: 'annotation token: $0' }],
            // numbers
            [/\d*\.\d+([eE][\-+]?\d+)?/, 'number.float'],
            [/0[xX][0-9a-fA-F]+/, 'number.hex'],
            [/\d+/, 'number'],
            // delimiter: after number because of .\d floats
            [/[;,.]/, 'delimiter'],
            [/"""/, { token: 'string', next: '@mlstring', nextEmbedded: 'markdown' }],
            // strings
            [/"([^"\\]|\\.)*$/, 'string.invalid'],
            [/"/, { token: 'string.quote', bracket: '@open', next: '@string' }]
        ],
        mlstring: [
            [/[^"]+/, 'string'],
            ['"""', { token: 'string', next: '@pop', nextEmbedded: '@pop' }]
        ],
        string: [
            [/[^\\"]+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/\\./, 'string.escape.invalid'],
            [/"/, { token: 'string.quote', bracket: '@close', next: '@pop' }]
        ],
        whitespace: [
            [/[ \t\r\n]+/, ''],
            [/#.*$/, 'comment']
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL2dyYXBocWwvZ3JhcGhxbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxXQUFXLEtBQUs7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsWUFBWSxHQUFHO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsMERBQTBEO0FBQ25FLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUyxTQUFTLFlBQVksR0FBRztBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLDRCQUE0QjtBQUNyQyxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsRUFBRTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEseUJBQXlCO0FBQ3RDO0FBQ0EsaUJBQWlCO0FBQ2pCLDBCQUEwQixTQUFTLDJDQUEyQyxFQUFFO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxtREFBbUQ7QUFDM0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixxQkFBcUIsK0RBQStEO0FBQ3BGO0FBQ0E7QUFDQSxtQkFBbUIsMkRBQTJEO0FBQzlFO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixzREFBc0Q7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix5REFBeUQ7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiMjEuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5leHBvcnQgdmFyIGNvbmYgPSB7XG4gICAgY29tbWVudHM6IHtcbiAgICAgICAgbGluZUNvbW1lbnQ6ICcjJ1xuICAgIH0sXG4gICAgYnJhY2tldHM6IFtcbiAgICAgICAgWyd7JywgJ30nXSxcbiAgICAgICAgWydbJywgJ10nXSxcbiAgICAgICAgWycoJywgJyknXVxuICAgIF0sXG4gICAgYXV0b0Nsb3NpbmdQYWlyczogW1xuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxuICAgICAgICB7IG9wZW46ICdcIlwiXCInLCBjbG9zZTogJ1wiXCJcIicsIG5vdEluOiBbJ3N0cmluZycsICdjb21tZW50J10gfSxcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJywgbm90SW46IFsnc3RyaW5nJywgJ2NvbW1lbnQnXSB9XG4gICAgXSxcbiAgICBzdXJyb3VuZGluZ1BhaXJzOiBbXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXG4gICAgICAgIHsgb3BlbjogJ1wiXCJcIicsIGNsb3NlOiAnXCJcIlwiJyB9LFxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH1cbiAgICBdLFxuICAgIGZvbGRpbmc6IHtcbiAgICAgICAgb2ZmU2lkZTogdHJ1ZVxuICAgIH1cbn07XG5leHBvcnQgdmFyIGxhbmd1YWdlID0ge1xuICAgIC8vIFNldCBkZWZhdWx0VG9rZW4gdG8gaW52YWxpZCB0byBzZWUgd2hhdCB5b3UgZG8gbm90IHRva2VuaXplIHlldFxuICAgIGRlZmF1bHRUb2tlbjogJ2ludmFsaWQnLFxuICAgIHRva2VuUG9zdGZpeDogJy5ncWwnLFxuICAgIGtleXdvcmRzOiBbXG4gICAgICAgICdudWxsJyxcbiAgICAgICAgJ3RydWUnLFxuICAgICAgICAnZmFsc2UnLFxuICAgICAgICAncXVlcnknLFxuICAgICAgICAnbXV0YXRpb24nLFxuICAgICAgICAnc3Vic2NyaXB0aW9uJyxcbiAgICAgICAgJ2V4dGVuZCcsXG4gICAgICAgICdzY2hlbWEnLFxuICAgICAgICAnZGlyZWN0aXZlJyxcbiAgICAgICAgJ3NjYWxhcicsXG4gICAgICAgICd0eXBlJyxcbiAgICAgICAgJ2ludGVyZmFjZScsXG4gICAgICAgICd1bmlvbicsXG4gICAgICAgICdlbnVtJyxcbiAgICAgICAgJ2lucHV0JyxcbiAgICAgICAgJ2ltcGxlbWVudHMnLFxuICAgICAgICAnZnJhZ21lbnQnLFxuICAgICAgICAnb24nXG4gICAgXSxcbiAgICB0eXBlS2V5d29yZHM6IFsnSW50JywgJ0Zsb2F0JywgJ1N0cmluZycsICdCb29sZWFuJywgJ0lEJ10sXG4gICAgZGlyZWN0aXZlTG9jYXRpb25zOiBbXG4gICAgICAgICdTQ0hFTUEnLFxuICAgICAgICAnU0NBTEFSJyxcbiAgICAgICAgJ09CSkVDVCcsXG4gICAgICAgICdGSUVMRF9ERUZJTklUSU9OJyxcbiAgICAgICAgJ0FSR1VNRU5UX0RFRklOSVRJT04nLFxuICAgICAgICAnSU5URVJGQUNFJyxcbiAgICAgICAgJ1VOSU9OJyxcbiAgICAgICAgJ0VOVU0nLFxuICAgICAgICAnRU5VTV9WQUxVRScsXG4gICAgICAgICdJTlBVVF9PQkpFQ1QnLFxuICAgICAgICAnSU5QVVRfRklFTERfREVGSU5JVElPTicsXG4gICAgICAgICdRVUVSWScsXG4gICAgICAgICdNVVRBVElPTicsXG4gICAgICAgICdTVUJTQ1JJUFRJT04nLFxuICAgICAgICAnRklFTEQnLFxuICAgICAgICAnRlJBR01FTlRfREVGSU5JVElPTicsXG4gICAgICAgICdGUkFHTUVOVF9TUFJFQUQnLFxuICAgICAgICAnSU5MSU5FX0ZSQUdNRU5UJyxcbiAgICAgICAgJ1ZBUklBQkxFX0RFRklOSVRJT04nXG4gICAgXSxcbiAgICBvcGVyYXRvcnM6IFsnPScsICchJywgJz8nLCAnOicsICcmJywgJ3wnXSxcbiAgICAvLyB3ZSBpbmNsdWRlIHRoZXNlIGNvbW1vbiByZWd1bGFyIGV4cHJlc3Npb25zXG4gICAgc3ltYm9sczogL1s9IT86JnxdKy8sXG4gICAgLy8gaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vZ3JhcGhxbC9kcmFmdC8jc2VjLVN0cmluZy1WYWx1ZVxuICAgIGVzY2FwZXM6IC9cXFxcKD86W1wiXFxcXFxcL2JmbnJ0XXx1WzAtOUEtRmEtZl17NH0pLyxcbiAgICAvLyBUaGUgbWFpbiB0b2tlbml6ZXIgZm9yIG91ciBsYW5ndWFnZXNcbiAgICB0b2tlbml6ZXI6IHtcbiAgICAgICAgcm9vdDogW1xuICAgICAgICAgICAgLy8gZmllbGRzIGFuZCBhcmd1bWVudCBuYW1lc1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9bYS16X11bXFx3JF0qLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQGtleXdvcmRzJzogJ2tleXdvcmQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ2tleS5pZGVudGlmaWVyJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIC8vIGlkZW50aWZ5IHR5cGVkIGlucHV0IHZhcmlhYmxlc1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9bJF1bXFx3JF0qLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQGtleXdvcmRzJzogJ2tleXdvcmQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ2FyZ3VtZW50LmlkZW50aWZpZXInXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgLy8gdG8gc2hvdyBjbGFzcyBuYW1lcyBuaWNlbHlcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvW0EtWl1bXFx3XFwkXSovLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdAdHlwZUtleXdvcmRzJzogJ2tleXdvcmQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ3R5cGUuaWRlbnRpZmllcidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAvLyB3aGl0ZXNwYWNlXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAd2hpdGVzcGFjZScgfSxcbiAgICAgICAgICAgIC8vIGRlbGltaXRlcnMgYW5kIG9wZXJhdG9yc1xuICAgICAgICAgICAgWy9be30oKVxcW1xcXV0vLCAnQGJyYWNrZXRzJ10sXG4gICAgICAgICAgICBbL0BzeW1ib2xzLywgeyBjYXNlczogeyAnQG9wZXJhdG9ycyc6ICdvcGVyYXRvcicsICdAZGVmYXVsdCc6ICcnIH0gfV0sXG4gICAgICAgICAgICAvLyBAIGFubm90YXRpb25zLlxuICAgICAgICAgICAgLy8gQXMgYW4gZXhhbXBsZSwgd2UgZW1pdCBhIGRlYnVnZ2luZyBsb2cgbWVzc2FnZSBvbiB0aGVzZSB0b2tlbnMuXG4gICAgICAgICAgICAvLyBOb3RlOiBtZXNzYWdlIGFyZSBzdXByZXNzZWQgZHVyaW5nIHRoZSBmaXJzdCBsb2FkIC0tIGNoYW5nZSBzb21lIGxpbmVzIHRvIHNlZSB0aGVtLlxuICAgICAgICAgICAgWy9AXFxzKlthLXpBLVpfXFwkXVtcXHdcXCRdKi8sIHsgdG9rZW46ICdhbm5vdGF0aW9uJywgbG9nOiAnYW5ub3RhdGlvbiB0b2tlbjogJDAnIH1dLFxuICAgICAgICAgICAgLy8gbnVtYmVyc1xuICAgICAgICAgICAgWy9cXGQqXFwuXFxkKyhbZUVdW1xcLStdP1xcZCspPy8sICdudW1iZXIuZmxvYXQnXSxcbiAgICAgICAgICAgIFsvMFt4WF1bMC05YS1mQS1GXSsvLCAnbnVtYmVyLmhleCddLFxuICAgICAgICAgICAgWy9cXGQrLywgJ251bWJlciddLFxuICAgICAgICAgICAgLy8gZGVsaW1pdGVyOiBhZnRlciBudW1iZXIgYmVjYXVzZSBvZiAuXFxkIGZsb2F0c1xuICAgICAgICAgICAgWy9bOywuXS8sICdkZWxpbWl0ZXInXSxcbiAgICAgICAgICAgIFsvXCJcIlwiLywgeyB0b2tlbjogJ3N0cmluZycsIG5leHQ6ICdAbWxzdHJpbmcnLCBuZXh0RW1iZWRkZWQ6ICdtYXJrZG93bicgfV0sXG4gICAgICAgICAgICAvLyBzdHJpbmdzXG4gICAgICAgICAgICBbL1wiKFteXCJcXFxcXXxcXFxcLikqJC8sICdzdHJpbmcuaW52YWxpZCddLFxuICAgICAgICAgICAgWy9cIi8sIHsgdG9rZW46ICdzdHJpbmcucXVvdGUnLCBicmFja2V0OiAnQG9wZW4nLCBuZXh0OiAnQHN0cmluZycgfV1cbiAgICAgICAgXSxcbiAgICAgICAgbWxzdHJpbmc6IFtcbiAgICAgICAgICAgIFsvW15cIl0rLywgJ3N0cmluZyddLFxuICAgICAgICAgICAgWydcIlwiXCInLCB7IHRva2VuOiAnc3RyaW5nJywgbmV4dDogJ0Bwb3AnLCBuZXh0RW1iZWRkZWQ6ICdAcG9wJyB9XVxuICAgICAgICBdLFxuICAgICAgICBzdHJpbmc6IFtcbiAgICAgICAgICAgIFsvW15cXFxcXCJdKy8sICdzdHJpbmcnXSxcbiAgICAgICAgICAgIFsvQGVzY2FwZXMvLCAnc3RyaW5nLmVzY2FwZSddLFxuICAgICAgICAgICAgWy9cXFxcLi8sICdzdHJpbmcuZXNjYXBlLmludmFsaWQnXSxcbiAgICAgICAgICAgIFsvXCIvLCB7IHRva2VuOiAnc3RyaW5nLnF1b3RlJywgYnJhY2tldDogJ0BjbG9zZScsIG5leHQ6ICdAcG9wJyB9XVxuICAgICAgICBdLFxuICAgICAgICB3aGl0ZXNwYWNlOiBbXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvLCAnJ10sXG4gICAgICAgICAgICBbLyMuKiQvLCAnY29tbWVudCddXG4gICAgICAgIF1cbiAgICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==