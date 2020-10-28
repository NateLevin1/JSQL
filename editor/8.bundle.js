(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/apex/apex.js":
/*!************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/apex/apex.js ***!
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
    // the default separators except `@$`
    wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\#\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,
    comments: {
        lineComment: '//',
        blockComment: ['/*', '*/']
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
        { open: '"', close: '"' },
        { open: "'", close: "'" }
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
        { open: "'", close: "'" },
        { open: '<', close: '>' }
    ],
    folding: {
        markers: {
            start: new RegExp('^\\s*//\\s*(?:(?:#?region\\b)|(?:<editor-fold\\b))'),
            end: new RegExp('^\\s*//\\s*(?:(?:#?endregion\\b)|(?:</editor-fold>))')
        }
    }
};
var keywords = [
    'abstract',
    'activate',
    'and',
    'any',
    'array',
    'as',
    'asc',
    'assert',
    'autonomous',
    'begin',
    'bigdecimal',
    'blob',
    'boolean',
    'break',
    'bulk',
    'by',
    'case',
    'cast',
    'catch',
    'char',
    'class',
    'collect',
    'commit',
    'const',
    'continue',
    'convertcurrency',
    'decimal',
    'default',
    'delete',
    'desc',
    'do',
    'double',
    'else',
    'end',
    'enum',
    'exception',
    'exit',
    'export',
    'extends',
    'false',
    'final',
    'finally',
    'float',
    'for',
    'from',
    'future',
    'get',
    'global',
    'goto',
    'group',
    'having',
    'hint',
    'if',
    'implements',
    'import',
    'in',
    'inner',
    'insert',
    'instanceof',
    'int',
    'interface',
    'into',
    'join',
    'last_90_days',
    'last_month',
    'last_n_days',
    'last_week',
    'like',
    'limit',
    'list',
    'long',
    'loop',
    'map',
    'merge',
    'native',
    'new',
    'next_90_days',
    'next_month',
    'next_n_days',
    'next_week',
    'not',
    'null',
    'nulls',
    'number',
    'object',
    'of',
    'on',
    'or',
    'outer',
    'override',
    'package',
    'parallel',
    'pragma',
    'private',
    'protected',
    'public',
    'retrieve',
    'return',
    'returning',
    'rollback',
    'savepoint',
    'search',
    'select',
    'set',
    'short',
    'sort',
    'stat',
    'static',
    'strictfp',
    'super',
    'switch',
    'synchronized',
    'system',
    'testmethod',
    'then',
    'this',
    'this_month',
    'this_week',
    'throw',
    'throws',
    'today',
    'tolabel',
    'tomorrow',
    'transaction',
    'transient',
    'trigger',
    'true',
    'try',
    'type',
    'undelete',
    'update',
    'upsert',
    'using',
    'virtual',
    'void',
    'volatile',
    'webservice',
    'when',
    'where',
    'while',
    'yesterday'
];
// create case variations of the keywords - apex is case insensitive, but we can't make the highlighter case insensitive
// because we use a heuristic to assume that identifiers starting with an upper case letter are types.
var uppercaseFirstLetter = function (lowercase) {
    return lowercase.charAt(0).toUpperCase() + lowercase.substr(1);
};
var keywordsWithCaseVariations = [];
keywords.forEach(function (lowercase) {
    keywordsWithCaseVariations.push(lowercase);
    keywordsWithCaseVariations.push(lowercase.toUpperCase());
    keywordsWithCaseVariations.push(uppercaseFirstLetter(lowercase));
});
var language = {
    defaultToken: '',
    tokenPostfix: '.apex',
    keywords: keywordsWithCaseVariations,
    operators: [
        '=',
        '>',
        '<',
        '!',
        '~',
        '?',
        ':',
        '==',
        '<=',
        '>=',
        '!=',
        '&&',
        '||',
        '++',
        '--',
        '+',
        '-',
        '*',
        '/',
        '&',
        '|',
        '^',
        '%',
        '<<',
        '>>',
        '>>>',
        '+=',
        '-=',
        '*=',
        '/=',
        '&=',
        '|=',
        '^=',
        '%=',
        '<<=',
        '>>=',
        '>>>='
    ],
    // we include these common regular expressions
    symbols: /[=><!~?:&|+\-*\/\^%]+/,
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    digits: /\d+(_+\d+)*/,
    octaldigits: /[0-7]+(_+[0-7]+)*/,
    binarydigits: /[0-1]+(_+[0-1]+)*/,
    hexdigits: /[[0-9a-fA-F]+(_+[0-9a-fA-F]+)*/,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            // identifiers and keywords
            [
                /[a-z_$][\w$]*/,
                {
                    cases: {
                        '@keywords': { token: 'keyword.$0' },
                        '@default': 'identifier'
                    }
                }
            ],
            // assume that identifiers starting with an uppercase letter are types
            [
                /[A-Z][\w\$]*/,
                {
                    cases: {
                        '@keywords': { token: 'keyword.$0' },
                        '@default': 'type.identifier'
                    }
                }
            ],
            // whitespace
            { include: '@whitespace' },
            // delimiters and operators
            [/[{}()\[\]]/, '@brackets'],
            [/[<>](?!@symbols)/, '@brackets'],
            [
                /@symbols/,
                {
                    cases: {
                        '@operators': 'delimiter',
                        '@default': ''
                    }
                }
            ],
            // @ annotations.
            [/@\s*[a-zA-Z_\$][\w\$]*/, 'annotation'],
            // numbers
            [/(@digits)[eE]([\-+]?(@digits))?[fFdD]?/, 'number.float'],
            [/(@digits)\.(@digits)([eE][\-+]?(@digits))?[fFdD]?/, 'number.float'],
            [/(@digits)[fFdD]/, 'number.float'],
            [/(@digits)[lL]?/, 'number'],
            // delimiter: after number because of .\d floats
            [/[;,.]/, 'delimiter'],
            // strings
            [/"([^"\\]|\\.)*$/, 'string.invalid'],
            [/'([^'\\]|\\.)*$/, 'string.invalid'],
            [/"/, 'string', '@string."'],
            [/'/, 'string', "@string.'"],
            // characters
            [/'[^\\']'/, 'string'],
            [/(')(@escapes)(')/, ['string', 'string.escape', 'string']],
            [/'/, 'string.invalid']
        ],
        whitespace: [
            [/[ \t\r\n]+/, ''],
            [/\/\*\*(?!\/)/, 'comment.doc', '@apexdoc'],
            [/\/\*/, 'comment', '@comment'],
            [/\/\/.*$/, 'comment']
        ],
        comment: [
            [/[^\/*]+/, 'comment'],
            // [/\/\*/, 'comment', '@push' ],    // nested comment not allowed :-(
            // [/\/\*/,    'comment.invalid' ],    // this breaks block comments in the shape of /* //*/
            [/\*\//, 'comment', '@pop'],
            [/[\/*]/, 'comment']
        ],
        //Identical copy of comment above, except for the addition of .doc
        apexdoc: [
            [/[^\/*]+/, 'comment.doc'],
            [/\*\//, 'comment.doc', '@pop'],
            [/[\/*]/, 'comment.doc']
        ],
        string: [
            [/[^\\"']+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/\\./, 'string.escape.invalid'],
            [
                /["']/,
                {
                    cases: {
                        '$#==$S2': { token: 'string', next: '@pop' },
                        '@default': 'string'
                    }
                }
            ]
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL2FwZXgvYXBleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0Esa0VBQWtFLElBQUksTUFBTTtBQUM1RTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxXQUFXLEtBQUs7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsWUFBWSxHQUFHO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUyxTQUFTLFlBQVksR0FBRztBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDTTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsSUFBSSxjQUFjLEVBQUUsY0FBYyxFQUFFO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxzQkFBc0I7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLHNCQUFzQjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSx5QkFBeUI7QUFDdEM7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGdDQUFnQztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiI4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuZXhwb3J0IHZhciBjb25mID0ge1xuICAgIC8vIHRoZSBkZWZhdWx0IHNlcGFyYXRvcnMgZXhjZXB0IGBAJGBcbiAgICB3b3JkUGF0dGVybjogLygtP1xcZCpcXC5cXGRcXHcqKXwoW15cXGBcXH5cXCFcXCNcXCVcXF5cXCZcXCpcXChcXClcXC1cXD1cXCtcXFtcXHtcXF1cXH1cXFxcXFx8XFw7XFw6XFwnXFxcIlxcLFxcLlxcPFxcPlxcL1xcP1xcc10rKS9nLFxuICAgIGNvbW1lbnRzOiB7XG4gICAgICAgIGxpbmVDb21tZW50OiAnLy8nLFxuICAgICAgICBibG9ja0NvbW1lbnQ6IFsnLyonLCAnKi8nXVxuICAgIH0sXG4gICAgYnJhY2tldHM6IFtcbiAgICAgICAgWyd7JywgJ30nXSxcbiAgICAgICAgWydbJywgJ10nXSxcbiAgICAgICAgWycoJywgJyknXVxuICAgIF0sXG4gICAgYXV0b0Nsb3NpbmdQYWlyczogW1xuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH0sXG4gICAgICAgIHsgb3BlbjogXCInXCIsIGNsb3NlOiBcIidcIiB9XG4gICAgXSxcbiAgICBzdXJyb3VuZGluZ1BhaXJzOiBbXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfSxcbiAgICAgICAgeyBvcGVuOiBcIidcIiwgY2xvc2U6IFwiJ1wiIH0sXG4gICAgICAgIHsgb3BlbjogJzwnLCBjbG9zZTogJz4nIH1cbiAgICBdLFxuICAgIGZvbGRpbmc6IHtcbiAgICAgICAgbWFya2Vyczoge1xuICAgICAgICAgICAgc3RhcnQ6IG5ldyBSZWdFeHAoJ15cXFxccyovL1xcXFxzKig/Oig/OiM/cmVnaW9uXFxcXGIpfCg/OjxlZGl0b3ItZm9sZFxcXFxiKSknKSxcbiAgICAgICAgICAgIGVuZDogbmV3IFJlZ0V4cCgnXlxcXFxzKi8vXFxcXHMqKD86KD86Iz9lbmRyZWdpb25cXFxcYil8KD86PC9lZGl0b3ItZm9sZD4pKScpXG4gICAgICAgIH1cbiAgICB9XG59O1xudmFyIGtleXdvcmRzID0gW1xuICAgICdhYnN0cmFjdCcsXG4gICAgJ2FjdGl2YXRlJyxcbiAgICAnYW5kJyxcbiAgICAnYW55JyxcbiAgICAnYXJyYXknLFxuICAgICdhcycsXG4gICAgJ2FzYycsXG4gICAgJ2Fzc2VydCcsXG4gICAgJ2F1dG9ub21vdXMnLFxuICAgICdiZWdpbicsXG4gICAgJ2JpZ2RlY2ltYWwnLFxuICAgICdibG9iJyxcbiAgICAnYm9vbGVhbicsXG4gICAgJ2JyZWFrJyxcbiAgICAnYnVsaycsXG4gICAgJ2J5JyxcbiAgICAnY2FzZScsXG4gICAgJ2Nhc3QnLFxuICAgICdjYXRjaCcsXG4gICAgJ2NoYXInLFxuICAgICdjbGFzcycsXG4gICAgJ2NvbGxlY3QnLFxuICAgICdjb21taXQnLFxuICAgICdjb25zdCcsXG4gICAgJ2NvbnRpbnVlJyxcbiAgICAnY29udmVydGN1cnJlbmN5JyxcbiAgICAnZGVjaW1hbCcsXG4gICAgJ2RlZmF1bHQnLFxuICAgICdkZWxldGUnLFxuICAgICdkZXNjJyxcbiAgICAnZG8nLFxuICAgICdkb3VibGUnLFxuICAgICdlbHNlJyxcbiAgICAnZW5kJyxcbiAgICAnZW51bScsXG4gICAgJ2V4Y2VwdGlvbicsXG4gICAgJ2V4aXQnLFxuICAgICdleHBvcnQnLFxuICAgICdleHRlbmRzJyxcbiAgICAnZmFsc2UnLFxuICAgICdmaW5hbCcsXG4gICAgJ2ZpbmFsbHknLFxuICAgICdmbG9hdCcsXG4gICAgJ2ZvcicsXG4gICAgJ2Zyb20nLFxuICAgICdmdXR1cmUnLFxuICAgICdnZXQnLFxuICAgICdnbG9iYWwnLFxuICAgICdnb3RvJyxcbiAgICAnZ3JvdXAnLFxuICAgICdoYXZpbmcnLFxuICAgICdoaW50JyxcbiAgICAnaWYnLFxuICAgICdpbXBsZW1lbnRzJyxcbiAgICAnaW1wb3J0JyxcbiAgICAnaW4nLFxuICAgICdpbm5lcicsXG4gICAgJ2luc2VydCcsXG4gICAgJ2luc3RhbmNlb2YnLFxuICAgICdpbnQnLFxuICAgICdpbnRlcmZhY2UnLFxuICAgICdpbnRvJyxcbiAgICAnam9pbicsXG4gICAgJ2xhc3RfOTBfZGF5cycsXG4gICAgJ2xhc3RfbW9udGgnLFxuICAgICdsYXN0X25fZGF5cycsXG4gICAgJ2xhc3Rfd2VlaycsXG4gICAgJ2xpa2UnLFxuICAgICdsaW1pdCcsXG4gICAgJ2xpc3QnLFxuICAgICdsb25nJyxcbiAgICAnbG9vcCcsXG4gICAgJ21hcCcsXG4gICAgJ21lcmdlJyxcbiAgICAnbmF0aXZlJyxcbiAgICAnbmV3JyxcbiAgICAnbmV4dF85MF9kYXlzJyxcbiAgICAnbmV4dF9tb250aCcsXG4gICAgJ25leHRfbl9kYXlzJyxcbiAgICAnbmV4dF93ZWVrJyxcbiAgICAnbm90JyxcbiAgICAnbnVsbCcsXG4gICAgJ251bGxzJyxcbiAgICAnbnVtYmVyJyxcbiAgICAnb2JqZWN0JyxcbiAgICAnb2YnLFxuICAgICdvbicsXG4gICAgJ29yJyxcbiAgICAnb3V0ZXInLFxuICAgICdvdmVycmlkZScsXG4gICAgJ3BhY2thZ2UnLFxuICAgICdwYXJhbGxlbCcsXG4gICAgJ3ByYWdtYScsXG4gICAgJ3ByaXZhdGUnLFxuICAgICdwcm90ZWN0ZWQnLFxuICAgICdwdWJsaWMnLFxuICAgICdyZXRyaWV2ZScsXG4gICAgJ3JldHVybicsXG4gICAgJ3JldHVybmluZycsXG4gICAgJ3JvbGxiYWNrJyxcbiAgICAnc2F2ZXBvaW50JyxcbiAgICAnc2VhcmNoJyxcbiAgICAnc2VsZWN0JyxcbiAgICAnc2V0JyxcbiAgICAnc2hvcnQnLFxuICAgICdzb3J0JyxcbiAgICAnc3RhdCcsXG4gICAgJ3N0YXRpYycsXG4gICAgJ3N0cmljdGZwJyxcbiAgICAnc3VwZXInLFxuICAgICdzd2l0Y2gnLFxuICAgICdzeW5jaHJvbml6ZWQnLFxuICAgICdzeXN0ZW0nLFxuICAgICd0ZXN0bWV0aG9kJyxcbiAgICAndGhlbicsXG4gICAgJ3RoaXMnLFxuICAgICd0aGlzX21vbnRoJyxcbiAgICAndGhpc193ZWVrJyxcbiAgICAndGhyb3cnLFxuICAgICd0aHJvd3MnLFxuICAgICd0b2RheScsXG4gICAgJ3RvbGFiZWwnLFxuICAgICd0b21vcnJvdycsXG4gICAgJ3RyYW5zYWN0aW9uJyxcbiAgICAndHJhbnNpZW50JyxcbiAgICAndHJpZ2dlcicsXG4gICAgJ3RydWUnLFxuICAgICd0cnknLFxuICAgICd0eXBlJyxcbiAgICAndW5kZWxldGUnLFxuICAgICd1cGRhdGUnLFxuICAgICd1cHNlcnQnLFxuICAgICd1c2luZycsXG4gICAgJ3ZpcnR1YWwnLFxuICAgICd2b2lkJyxcbiAgICAndm9sYXRpbGUnLFxuICAgICd3ZWJzZXJ2aWNlJyxcbiAgICAnd2hlbicsXG4gICAgJ3doZXJlJyxcbiAgICAnd2hpbGUnLFxuICAgICd5ZXN0ZXJkYXknXG5dO1xuLy8gY3JlYXRlIGNhc2UgdmFyaWF0aW9ucyBvZiB0aGUga2V5d29yZHMgLSBhcGV4IGlzIGNhc2UgaW5zZW5zaXRpdmUsIGJ1dCB3ZSBjYW4ndCBtYWtlIHRoZSBoaWdobGlnaHRlciBjYXNlIGluc2Vuc2l0aXZlXG4vLyBiZWNhdXNlIHdlIHVzZSBhIGhldXJpc3RpYyB0byBhc3N1bWUgdGhhdCBpZGVudGlmaWVycyBzdGFydGluZyB3aXRoIGFuIHVwcGVyIGNhc2UgbGV0dGVyIGFyZSB0eXBlcy5cbnZhciB1cHBlcmNhc2VGaXJzdExldHRlciA9IGZ1bmN0aW9uIChsb3dlcmNhc2UpIHtcbiAgICByZXR1cm4gbG93ZXJjYXNlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbG93ZXJjYXNlLnN1YnN0cigxKTtcbn07XG52YXIga2V5d29yZHNXaXRoQ2FzZVZhcmlhdGlvbnMgPSBbXTtcbmtleXdvcmRzLmZvckVhY2goZnVuY3Rpb24gKGxvd2VyY2FzZSkge1xuICAgIGtleXdvcmRzV2l0aENhc2VWYXJpYXRpb25zLnB1c2gobG93ZXJjYXNlKTtcbiAgICBrZXl3b3Jkc1dpdGhDYXNlVmFyaWF0aW9ucy5wdXNoKGxvd2VyY2FzZS50b1VwcGVyQ2FzZSgpKTtcbiAgICBrZXl3b3Jkc1dpdGhDYXNlVmFyaWF0aW9ucy5wdXNoKHVwcGVyY2FzZUZpcnN0TGV0dGVyKGxvd2VyY2FzZSkpO1xufSk7XG5leHBvcnQgdmFyIGxhbmd1YWdlID0ge1xuICAgIGRlZmF1bHRUb2tlbjogJycsXG4gICAgdG9rZW5Qb3N0Zml4OiAnLmFwZXgnLFxuICAgIGtleXdvcmRzOiBrZXl3b3Jkc1dpdGhDYXNlVmFyaWF0aW9ucyxcbiAgICBvcGVyYXRvcnM6IFtcbiAgICAgICAgJz0nLFxuICAgICAgICAnPicsXG4gICAgICAgICc8JyxcbiAgICAgICAgJyEnLFxuICAgICAgICAnficsXG4gICAgICAgICc/JyxcbiAgICAgICAgJzonLFxuICAgICAgICAnPT0nLFxuICAgICAgICAnPD0nLFxuICAgICAgICAnPj0nLFxuICAgICAgICAnIT0nLFxuICAgICAgICAnJiYnLFxuICAgICAgICAnfHwnLFxuICAgICAgICAnKysnLFxuICAgICAgICAnLS0nLFxuICAgICAgICAnKycsXG4gICAgICAgICctJyxcbiAgICAgICAgJyonLFxuICAgICAgICAnLycsXG4gICAgICAgICcmJyxcbiAgICAgICAgJ3wnLFxuICAgICAgICAnXicsXG4gICAgICAgICclJyxcbiAgICAgICAgJzw8JyxcbiAgICAgICAgJz4+JyxcbiAgICAgICAgJz4+PicsXG4gICAgICAgICcrPScsXG4gICAgICAgICctPScsXG4gICAgICAgICcqPScsXG4gICAgICAgICcvPScsXG4gICAgICAgICcmPScsXG4gICAgICAgICd8PScsXG4gICAgICAgICdePScsXG4gICAgICAgICclPScsXG4gICAgICAgICc8PD0nLFxuICAgICAgICAnPj49JyxcbiAgICAgICAgJz4+Pj0nXG4gICAgXSxcbiAgICAvLyB3ZSBpbmNsdWRlIHRoZXNlIGNvbW1vbiByZWd1bGFyIGV4cHJlc3Npb25zXG4gICAgc3ltYm9sczogL1s9Pjwhfj86JnwrXFwtKlxcL1xcXiVdKy8sXG4gICAgZXNjYXBlczogL1xcXFwoPzpbYWJmbnJ0dlxcXFxcIiddfHhbMC05QS1GYS1mXXsxLDR9fHVbMC05QS1GYS1mXXs0fXxVWzAtOUEtRmEtZl17OH0pLyxcbiAgICBkaWdpdHM6IC9cXGQrKF8rXFxkKykqLyxcbiAgICBvY3RhbGRpZ2l0czogL1swLTddKyhfK1swLTddKykqLyxcbiAgICBiaW5hcnlkaWdpdHM6IC9bMC0xXSsoXytbMC0xXSspKi8sXG4gICAgaGV4ZGlnaXRzOiAvW1swLTlhLWZBLUZdKyhfK1swLTlhLWZBLUZdKykqLyxcbiAgICAvLyBUaGUgbWFpbiB0b2tlbml6ZXIgZm9yIG91ciBsYW5ndWFnZXNcbiAgICB0b2tlbml6ZXI6IHtcbiAgICAgICAgcm9vdDogW1xuICAgICAgICAgICAgLy8gaWRlbnRpZmllcnMgYW5kIGtleXdvcmRzXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL1thLXpfJF1bXFx3JF0qLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQGtleXdvcmRzJzogeyB0b2tlbjogJ2tleXdvcmQuJDAnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnaWRlbnRpZmllcidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAvLyBhc3N1bWUgdGhhdCBpZGVudGlmaWVycyBzdGFydGluZyB3aXRoIGFuIHVwcGVyY2FzZSBsZXR0ZXIgYXJlIHR5cGVzXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL1tBLVpdW1xcd1xcJF0qLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQGtleXdvcmRzJzogeyB0b2tlbjogJ2tleXdvcmQuJDAnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAndHlwZS5pZGVudGlmaWVyJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIC8vIHdoaXRlc3BhY2VcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B3aGl0ZXNwYWNlJyB9LFxuICAgICAgICAgICAgLy8gZGVsaW1pdGVycyBhbmQgb3BlcmF0b3JzXG4gICAgICAgICAgICBbL1t7fSgpXFxbXFxdXS8sICdAYnJhY2tldHMnXSxcbiAgICAgICAgICAgIFsvWzw+XSg/IUBzeW1ib2xzKS8sICdAYnJhY2tldHMnXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvQHN5bWJvbHMvLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdAb3BlcmF0b3JzJzogJ2RlbGltaXRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIC8vIEAgYW5ub3RhdGlvbnMuXG4gICAgICAgICAgICBbL0BcXHMqW2EtekEtWl9cXCRdW1xcd1xcJF0qLywgJ2Fubm90YXRpb24nXSxcbiAgICAgICAgICAgIC8vIG51bWJlcnNcbiAgICAgICAgICAgIFsvKEBkaWdpdHMpW2VFXShbXFwtK10/KEBkaWdpdHMpKT9bZkZkRF0/LywgJ251bWJlci5mbG9hdCddLFxuICAgICAgICAgICAgWy8oQGRpZ2l0cylcXC4oQGRpZ2l0cykoW2VFXVtcXC0rXT8oQGRpZ2l0cykpP1tmRmREXT8vLCAnbnVtYmVyLmZsb2F0J10sXG4gICAgICAgICAgICBbLyhAZGlnaXRzKVtmRmREXS8sICdudW1iZXIuZmxvYXQnXSxcbiAgICAgICAgICAgIFsvKEBkaWdpdHMpW2xMXT8vLCAnbnVtYmVyJ10sXG4gICAgICAgICAgICAvLyBkZWxpbWl0ZXI6IGFmdGVyIG51bWJlciBiZWNhdXNlIG9mIC5cXGQgZmxvYXRzXG4gICAgICAgICAgICBbL1s7LC5dLywgJ2RlbGltaXRlciddLFxuICAgICAgICAgICAgLy8gc3RyaW5nc1xuICAgICAgICAgICAgWy9cIihbXlwiXFxcXF18XFxcXC4pKiQvLCAnc3RyaW5nLmludmFsaWQnXSxcbiAgICAgICAgICAgIFsvJyhbXidcXFxcXXxcXFxcLikqJC8sICdzdHJpbmcuaW52YWxpZCddLFxuICAgICAgICAgICAgWy9cIi8sICdzdHJpbmcnLCAnQHN0cmluZy5cIiddLFxuICAgICAgICAgICAgWy8nLywgJ3N0cmluZycsIFwiQHN0cmluZy4nXCJdLFxuICAgICAgICAgICAgLy8gY2hhcmFjdGVyc1xuICAgICAgICAgICAgWy8nW15cXFxcJ10nLywgJ3N0cmluZyddLFxuICAgICAgICAgICAgWy8oJykoQGVzY2FwZXMpKCcpLywgWydzdHJpbmcnLCAnc3RyaW5nLmVzY2FwZScsICdzdHJpbmcnXV0sXG4gICAgICAgICAgICBbLycvLCAnc3RyaW5nLmludmFsaWQnXVxuICAgICAgICBdLFxuICAgICAgICB3aGl0ZXNwYWNlOiBbXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvLCAnJ10sXG4gICAgICAgICAgICBbL1xcL1xcKlxcKig/IVxcLykvLCAnY29tbWVudC5kb2MnLCAnQGFwZXhkb2MnXSxcbiAgICAgICAgICAgIFsvXFwvXFwqLywgJ2NvbW1lbnQnLCAnQGNvbW1lbnQnXSxcbiAgICAgICAgICAgIFsvXFwvXFwvLiokLywgJ2NvbW1lbnQnXVxuICAgICAgICBdLFxuICAgICAgICBjb21tZW50OiBbXG4gICAgICAgICAgICBbL1teXFwvKl0rLywgJ2NvbW1lbnQnXSxcbiAgICAgICAgICAgIC8vIFsvXFwvXFwqLywgJ2NvbW1lbnQnLCAnQHB1c2gnIF0sICAgIC8vIG5lc3RlZCBjb21tZW50IG5vdCBhbGxvd2VkIDotKFxuICAgICAgICAgICAgLy8gWy9cXC9cXCovLCAgICAnY29tbWVudC5pbnZhbGlkJyBdLCAgICAvLyB0aGlzIGJyZWFrcyBibG9jayBjb21tZW50cyBpbiB0aGUgc2hhcGUgb2YgLyogLy8qL1xuICAgICAgICAgICAgWy9cXCpcXC8vLCAnY29tbWVudCcsICdAcG9wJ10sXG4gICAgICAgICAgICBbL1tcXC8qXS8sICdjb21tZW50J11cbiAgICAgICAgXSxcbiAgICAgICAgLy9JZGVudGljYWwgY29weSBvZiBjb21tZW50IGFib3ZlLCBleGNlcHQgZm9yIHRoZSBhZGRpdGlvbiBvZiAuZG9jXG4gICAgICAgIGFwZXhkb2M6IFtcbiAgICAgICAgICAgIFsvW15cXC8qXSsvLCAnY29tbWVudC5kb2MnXSxcbiAgICAgICAgICAgIFsvXFwqXFwvLywgJ2NvbW1lbnQuZG9jJywgJ0Bwb3AnXSxcbiAgICAgICAgICAgIFsvW1xcLypdLywgJ2NvbW1lbnQuZG9jJ11cbiAgICAgICAgXSxcbiAgICAgICAgc3RyaW5nOiBbXG4gICAgICAgICAgICBbL1teXFxcXFwiJ10rLywgJ3N0cmluZyddLFxuICAgICAgICAgICAgWy9AZXNjYXBlcy8sICdzdHJpbmcuZXNjYXBlJ10sXG4gICAgICAgICAgICBbL1xcXFwuLywgJ3N0cmluZy5lc2NhcGUuaW52YWxpZCddLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9bXCInXS8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJyQjPT0kUzInOiB7IHRva2VuOiAnc3RyaW5nJywgbmV4dDogJ0Bwb3AnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICBdXG4gICAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=