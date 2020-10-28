(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[47],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/r/r.js":
/*!******************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/r/r.js ***!
  \******************************************************************/
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
        { open: '"', close: '"' }
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' }
    ]
};
var language = {
    defaultToken: '',
    tokenPostfix: '.r',
    roxygen: [
        '@param',
        '@return',
        '@name',
        '@rdname',
        '@examples',
        '@include',
        '@docType',
        '@S3method',
        '@TODO',
        '@aliases',
        '@alias',
        '@assignee',
        '@author',
        '@callGraphDepth',
        '@callGraph',
        '@callGraphPrimitives',
        '@concept',
        '@exportClass',
        '@exportMethod',
        '@exportPattern',
        '@export',
        '@formals',
        '@format',
        '@importClassesFrom',
        '@importFrom',
        '@importMethodsFrom',
        '@import',
        '@keywords',
        '@method',
        '@nord',
        '@note',
        '@references',
        '@seealso',
        '@setClass',
        '@slot',
        '@source',
        '@title',
        '@usage'
    ],
    constants: [
        'NULL',
        'FALSE',
        'TRUE',
        'NA',
        'Inf',
        'NaN ',
        'NA_integer_',
        'NA_real_',
        'NA_complex_',
        'NA_character_ ',
        'T',
        'F',
        'LETTERS',
        'letters',
        'month.abb',
        'month.name',
        'pi',
        'R.version.string'
    ],
    keywords: [
        'break',
        'next',
        'return',
        'if',
        'else',
        'for',
        'in',
        'repeat',
        'while',
        'array',
        'category',
        'character',
        'complex',
        'double',
        'function',
        'integer',
        'list',
        'logical',
        'matrix',
        'numeric',
        'vector',
        'data.frame',
        'factor',
        'library',
        'require',
        'attach',
        'detach',
        'source'
    ],
    special: ['\\n', '\\r', '\\t', '\\b', '\\a', '\\f', '\\v', "\\'", '\\"', '\\\\'],
    brackets: [
        { open: '{', close: '}', token: 'delimiter.curly' },
        { open: '[', close: ']', token: 'delimiter.bracket' },
        { open: '(', close: ')', token: 'delimiter.parenthesis' }
    ],
    tokenizer: {
        root: [
            { include: '@numbers' },
            { include: '@strings' },
            [/[{}\[\]()]/, '@brackets'],
            { include: '@operators' },
            [/#'/, 'comment.doc', '@roxygen'],
            [/(^#.*$)/, 'comment'],
            [/\s+/, 'white'],
            [/[,:;]/, 'delimiter'],
            [/@[a-zA-Z]\w*/, 'tag'],
            [
                /[a-zA-Z]\w*/,
                {
                    cases: {
                        '@keywords': 'keyword',
                        '@constants': 'constant',
                        '@default': 'identifier'
                    }
                }
            ]
        ],
        // Recognize Roxygen comments
        roxygen: [
            [
                /@\w+/,
                {
                    cases: {
                        '@roxygen': 'tag',
                        '@eos': { token: 'comment.doc', next: '@pop' },
                        '@default': 'comment.doc'
                    }
                }
            ],
            [
                /\s+/,
                {
                    cases: {
                        '@eos': { token: 'comment.doc', next: '@pop' },
                        '@default': 'comment.doc'
                    }
                }
            ],
            [/.*/, { token: 'comment.doc', next: '@pop' }]
        ],
        // Recognize positives, negatives, decimals, imaginaries, and scientific notation
        numbers: [
            [/0[xX][0-9a-fA-F]+/, 'number.hex'],
            [/-?(\d*\.)?\d+([eE][+\-]?\d+)?/, 'number']
        ],
        // Recognize operators
        operators: [
            [/<{1,2}-/, 'operator'],
            [/->{1,2}/, 'operator'],
            [/%[^%\s]+%/, 'operator'],
            [/\*\*/, 'operator'],
            [/%%/, 'operator'],
            [/&&/, 'operator'],
            [/\|\|/, 'operator'],
            [/<</, 'operator'],
            [/>>/, 'operator'],
            [/[-+=&|!<>^~*/:$]/, 'operator']
        ],
        // Recognize strings, including those broken across lines
        strings: [
            [/'/, 'string.escape', '@stringBody'],
            [/"/, 'string.escape', '@dblStringBody']
        ],
        stringBody: [
            [
                /\\./,
                {
                    cases: {
                        '@special': 'string',
                        '@default': 'error-token'
                    }
                }
            ],
            [/'/, 'string.escape', '@popall'],
            [/./, 'string']
        ],
        dblStringBody: [
            [
                /\\./,
                {
                    cases: {
                        '@special': 'string',
                        '@default': 'error-token'
                    }
                }
            ],
            [/"/, 'string.escape', '@popall'],
            [/./, 'string']
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL3Ivci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxXQUFXLEtBQUs7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsWUFBWSxHQUFHO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUyxTQUFTLFlBQVksR0FBRztBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTO0FBQ1Q7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsWUFBWSw2QkFBNkI7QUFDM0QsU0FBUyxvREFBb0Q7QUFDN0QsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGFBQWEsc0JBQXNCO0FBQ25DLGFBQWEsc0JBQXNCO0FBQ25DLGlCQUFpQjtBQUNqQixhQUFhLHdCQUF3QjtBQUNyQztBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMscUNBQXFDO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMscUNBQXFDO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHFDQUFxQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLElBQUk7QUFDcEIsaUJBQWlCLElBQUk7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjQ3LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuZXhwb3J0IHZhciBjb25mID0ge1xuICAgIGNvbW1lbnRzOiB7XG4gICAgICAgIGxpbmVDb21tZW50OiAnIydcbiAgICB9LFxuICAgIGJyYWNrZXRzOiBbXG4gICAgICAgIFsneycsICd9J10sXG4gICAgICAgIFsnWycsICddJ10sXG4gICAgICAgIFsnKCcsICcpJ11cbiAgICBdLFxuICAgIGF1dG9DbG9zaW5nUGFpcnM6IFtcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9XG4gICAgXSxcbiAgICBzdXJyb3VuZGluZ1BhaXJzOiBbXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfVxuICAgIF1cbn07XG5leHBvcnQgdmFyIGxhbmd1YWdlID0ge1xuICAgIGRlZmF1bHRUb2tlbjogJycsXG4gICAgdG9rZW5Qb3N0Zml4OiAnLnInLFxuICAgIHJveHlnZW46IFtcbiAgICAgICAgJ0BwYXJhbScsXG4gICAgICAgICdAcmV0dXJuJyxcbiAgICAgICAgJ0BuYW1lJyxcbiAgICAgICAgJ0ByZG5hbWUnLFxuICAgICAgICAnQGV4YW1wbGVzJyxcbiAgICAgICAgJ0BpbmNsdWRlJyxcbiAgICAgICAgJ0Bkb2NUeXBlJyxcbiAgICAgICAgJ0BTM21ldGhvZCcsXG4gICAgICAgICdAVE9ETycsXG4gICAgICAgICdAYWxpYXNlcycsXG4gICAgICAgICdAYWxpYXMnLFxuICAgICAgICAnQGFzc2lnbmVlJyxcbiAgICAgICAgJ0BhdXRob3InLFxuICAgICAgICAnQGNhbGxHcmFwaERlcHRoJyxcbiAgICAgICAgJ0BjYWxsR3JhcGgnLFxuICAgICAgICAnQGNhbGxHcmFwaFByaW1pdGl2ZXMnLFxuICAgICAgICAnQGNvbmNlcHQnLFxuICAgICAgICAnQGV4cG9ydENsYXNzJyxcbiAgICAgICAgJ0BleHBvcnRNZXRob2QnLFxuICAgICAgICAnQGV4cG9ydFBhdHRlcm4nLFxuICAgICAgICAnQGV4cG9ydCcsXG4gICAgICAgICdAZm9ybWFscycsXG4gICAgICAgICdAZm9ybWF0JyxcbiAgICAgICAgJ0BpbXBvcnRDbGFzc2VzRnJvbScsXG4gICAgICAgICdAaW1wb3J0RnJvbScsXG4gICAgICAgICdAaW1wb3J0TWV0aG9kc0Zyb20nLFxuICAgICAgICAnQGltcG9ydCcsXG4gICAgICAgICdAa2V5d29yZHMnLFxuICAgICAgICAnQG1ldGhvZCcsXG4gICAgICAgICdAbm9yZCcsXG4gICAgICAgICdAbm90ZScsXG4gICAgICAgICdAcmVmZXJlbmNlcycsXG4gICAgICAgICdAc2VlYWxzbycsXG4gICAgICAgICdAc2V0Q2xhc3MnLFxuICAgICAgICAnQHNsb3QnLFxuICAgICAgICAnQHNvdXJjZScsXG4gICAgICAgICdAdGl0bGUnLFxuICAgICAgICAnQHVzYWdlJ1xuICAgIF0sXG4gICAgY29uc3RhbnRzOiBbXG4gICAgICAgICdOVUxMJyxcbiAgICAgICAgJ0ZBTFNFJyxcbiAgICAgICAgJ1RSVUUnLFxuICAgICAgICAnTkEnLFxuICAgICAgICAnSW5mJyxcbiAgICAgICAgJ05hTiAnLFxuICAgICAgICAnTkFfaW50ZWdlcl8nLFxuICAgICAgICAnTkFfcmVhbF8nLFxuICAgICAgICAnTkFfY29tcGxleF8nLFxuICAgICAgICAnTkFfY2hhcmFjdGVyXyAnLFxuICAgICAgICAnVCcsXG4gICAgICAgICdGJyxcbiAgICAgICAgJ0xFVFRFUlMnLFxuICAgICAgICAnbGV0dGVycycsXG4gICAgICAgICdtb250aC5hYmInLFxuICAgICAgICAnbW9udGgubmFtZScsXG4gICAgICAgICdwaScsXG4gICAgICAgICdSLnZlcnNpb24uc3RyaW5nJ1xuICAgIF0sXG4gICAga2V5d29yZHM6IFtcbiAgICAgICAgJ2JyZWFrJyxcbiAgICAgICAgJ25leHQnLFxuICAgICAgICAncmV0dXJuJyxcbiAgICAgICAgJ2lmJyxcbiAgICAgICAgJ2Vsc2UnLFxuICAgICAgICAnZm9yJyxcbiAgICAgICAgJ2luJyxcbiAgICAgICAgJ3JlcGVhdCcsXG4gICAgICAgICd3aGlsZScsXG4gICAgICAgICdhcnJheScsXG4gICAgICAgICdjYXRlZ29yeScsXG4gICAgICAgICdjaGFyYWN0ZXInLFxuICAgICAgICAnY29tcGxleCcsXG4gICAgICAgICdkb3VibGUnLFxuICAgICAgICAnZnVuY3Rpb24nLFxuICAgICAgICAnaW50ZWdlcicsXG4gICAgICAgICdsaXN0JyxcbiAgICAgICAgJ2xvZ2ljYWwnLFxuICAgICAgICAnbWF0cml4JyxcbiAgICAgICAgJ251bWVyaWMnLFxuICAgICAgICAndmVjdG9yJyxcbiAgICAgICAgJ2RhdGEuZnJhbWUnLFxuICAgICAgICAnZmFjdG9yJyxcbiAgICAgICAgJ2xpYnJhcnknLFxuICAgICAgICAncmVxdWlyZScsXG4gICAgICAgICdhdHRhY2gnLFxuICAgICAgICAnZGV0YWNoJyxcbiAgICAgICAgJ3NvdXJjZSdcbiAgICBdLFxuICAgIHNwZWNpYWw6IFsnXFxcXG4nLCAnXFxcXHInLCAnXFxcXHQnLCAnXFxcXGInLCAnXFxcXGEnLCAnXFxcXGYnLCAnXFxcXHYnLCBcIlxcXFwnXCIsICdcXFxcXCInLCAnXFxcXFxcXFwnXSxcbiAgICBicmFja2V0czogW1xuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JywgdG9rZW46ICdkZWxpbWl0ZXIuY3VybHknIH0sXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nLCB0b2tlbjogJ2RlbGltaXRlci5icmFja2V0JyB9LFxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJywgdG9rZW46ICdkZWxpbWl0ZXIucGFyZW50aGVzaXMnIH1cbiAgICBdLFxuICAgIHRva2VuaXplcjoge1xuICAgICAgICByb290OiBbXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAbnVtYmVycycgfSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BzdHJpbmdzJyB9LFxuICAgICAgICAgICAgWy9be31cXFtcXF0oKV0vLCAnQGJyYWNrZXRzJ10sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAb3BlcmF0b3JzJyB9LFxuICAgICAgICAgICAgWy8jJy8sICdjb21tZW50LmRvYycsICdAcm94eWdlbiddLFxuICAgICAgICAgICAgWy8oXiMuKiQpLywgJ2NvbW1lbnQnXSxcbiAgICAgICAgICAgIFsvXFxzKy8sICd3aGl0ZSddLFxuICAgICAgICAgICAgWy9bLDo7XS8sICdkZWxpbWl0ZXInXSxcbiAgICAgICAgICAgIFsvQFthLXpBLVpdXFx3Ki8sICd0YWcnXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvW2EtekEtWl1cXHcqLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQGtleXdvcmRzJzogJ2tleXdvcmQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0Bjb25zdGFudHMnOiAnY29uc3RhbnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ2lkZW50aWZpZXInXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIF0sXG4gICAgICAgIC8vIFJlY29nbml6ZSBSb3h5Z2VuIGNvbW1lbnRzXG4gICAgICAgIHJveHlnZW46IFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvQFxcdysvLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdAcm94eWdlbic6ICd0YWcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0Blb3MnOiB7IHRva2VuOiAnY29tbWVudC5kb2MnLCBuZXh0OiAnQHBvcCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdjb21tZW50LmRvYydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL1xccysvLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZW9zJzogeyB0b2tlbjogJ2NvbW1lbnQuZG9jJywgbmV4dDogJ0Bwb3AnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnY29tbWVudC5kb2MnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgWy8uKi8sIHsgdG9rZW46ICdjb21tZW50LmRvYycsIG5leHQ6ICdAcG9wJyB9XVxuICAgICAgICBdLFxuICAgICAgICAvLyBSZWNvZ25pemUgcG9zaXRpdmVzLCBuZWdhdGl2ZXMsIGRlY2ltYWxzLCBpbWFnaW5hcmllcywgYW5kIHNjaWVudGlmaWMgbm90YXRpb25cbiAgICAgICAgbnVtYmVyczogW1xuICAgICAgICAgICAgWy8wW3hYXVswLTlhLWZBLUZdKy8sICdudW1iZXIuaGV4J10sXG4gICAgICAgICAgICBbLy0/KFxcZCpcXC4pP1xcZCsoW2VFXVsrXFwtXT9cXGQrKT8vLCAnbnVtYmVyJ11cbiAgICAgICAgXSxcbiAgICAgICAgLy8gUmVjb2duaXplIG9wZXJhdG9yc1xuICAgICAgICBvcGVyYXRvcnM6IFtcbiAgICAgICAgICAgIFsvPHsxLDJ9LS8sICdvcGVyYXRvciddLFxuICAgICAgICAgICAgWy8tPnsxLDJ9LywgJ29wZXJhdG9yJ10sXG4gICAgICAgICAgICBbLyVbXiVcXHNdKyUvLCAnb3BlcmF0b3InXSxcbiAgICAgICAgICAgIFsvXFwqXFwqLywgJ29wZXJhdG9yJ10sXG4gICAgICAgICAgICBbLyUlLywgJ29wZXJhdG9yJ10sXG4gICAgICAgICAgICBbLyYmLywgJ29wZXJhdG9yJ10sXG4gICAgICAgICAgICBbL1xcfFxcfC8sICdvcGVyYXRvciddLFxuICAgICAgICAgICAgWy88PC8sICdvcGVyYXRvciddLFxuICAgICAgICAgICAgWy8+Pi8sICdvcGVyYXRvciddLFxuICAgICAgICAgICAgWy9bLSs9JnwhPD5efiovOiRdLywgJ29wZXJhdG9yJ11cbiAgICAgICAgXSxcbiAgICAgICAgLy8gUmVjb2duaXplIHN0cmluZ3MsIGluY2x1ZGluZyB0aG9zZSBicm9rZW4gYWNyb3NzIGxpbmVzXG4gICAgICAgIHN0cmluZ3M6IFtcbiAgICAgICAgICAgIFsvJy8sICdzdHJpbmcuZXNjYXBlJywgJ0BzdHJpbmdCb2R5J10sXG4gICAgICAgICAgICBbL1wiLywgJ3N0cmluZy5lc2NhcGUnLCAnQGRibFN0cmluZ0JvZHknXVxuICAgICAgICBdLFxuICAgICAgICBzdHJpbmdCb2R5OiBbXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL1xcXFwuLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQHNwZWNpYWwnOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdlcnJvci10b2tlbidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbLycvLCAnc3RyaW5nLmVzY2FwZScsICdAcG9wYWxsJ10sXG4gICAgICAgICAgICBbLy4vLCAnc3RyaW5nJ11cbiAgICAgICAgXSxcbiAgICAgICAgZGJsU3RyaW5nQm9keTogW1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9cXFxcLi8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0BzcGVjaWFsJzogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnZXJyb3ItdG9rZW4nXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgWy9cIi8sICdzdHJpbmcuZXNjYXBlJywgJ0Bwb3BhbGwnXSxcbiAgICAgICAgICAgIFsvLi8sICdzdHJpbmcnXVxuICAgICAgICBdXG4gICAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=