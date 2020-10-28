(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/fsharp/fsharp.js":
/*!****************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/fsharp/fsharp.js ***!
  \****************************************************************************/
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
        lineComment: '//',
        blockComment: ['(*', '*)']
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
        { open: '"', close: '"' },
        { open: "'", close: "'" }
    ],
    folding: {
        markers: {
            start: new RegExp('^\\s*//\\s*#region\\b|^\\s*\\(\\*\\s*#region(.*)\\*\\)'),
            end: new RegExp('^\\s*//\\s*#endregion\\b|^\\s*\\(\\*\\s*#endregion\\s*\\*\\)')
        }
    }
};
var language = {
    defaultToken: '',
    tokenPostfix: '.fs',
    keywords: [
        'abstract',
        'and',
        'atomic',
        'as',
        'assert',
        'asr',
        'base',
        'begin',
        'break',
        'checked',
        'component',
        'const',
        'constraint',
        'constructor',
        'continue',
        'class',
        'default',
        'delegate',
        'do',
        'done',
        'downcast',
        'downto',
        'elif',
        'else',
        'end',
        'exception',
        'eager',
        'event',
        'external',
        'extern',
        'false',
        'finally',
        'for',
        'fun',
        'function',
        'fixed',
        'functor',
        'global',
        'if',
        'in',
        'include',
        'inherit',
        'inline',
        'interface',
        'internal',
        'land',
        'lor',
        'lsl',
        'lsr',
        'lxor',
        'lazy',
        'let',
        'match',
        'member',
        'mod',
        'module',
        'mutable',
        'namespace',
        'method',
        'mixin',
        'new',
        'not',
        'null',
        'of',
        'open',
        'or',
        'object',
        'override',
        'private',
        'parallel',
        'process',
        'protected',
        'pure',
        'public',
        'rec',
        'return',
        'static',
        'sealed',
        'struct',
        'sig',
        'then',
        'to',
        'true',
        'tailcall',
        'trait',
        'try',
        'type',
        'upcast',
        'use',
        'val',
        'void',
        'virtual',
        'volatile',
        'when',
        'while',
        'with',
        'yield'
    ],
    // we include these common regular expressions
    symbols: /[=><!~?:&|+\-*\^%;\.,\/]+/,
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    integersuffix: /[uU]?[yslnLI]?/,
    floatsuffix: /[fFmM]?/,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            // identifiers and keywords
            [
                /[a-zA-Z_]\w*/,
                {
                    cases: {
                        '@keywords': { token: 'keyword.$0' },
                        '@default': 'identifier'
                    }
                }
            ],
            // whitespace
            { include: '@whitespace' },
            // [< attributes >].
            [/\[<.*>\]/, 'annotation'],
            // Preprocessor directive
            [/^#(if|else|endif)/, 'keyword'],
            // delimiters and operators
            [/[{}()\[\]]/, '@brackets'],
            [/[<>](?!@symbols)/, '@brackets'],
            [/@symbols/, 'delimiter'],
            // numbers
            [/\d*\d+[eE]([\-+]?\d+)?(@floatsuffix)/, 'number.float'],
            [/\d*\.\d+([eE][\-+]?\d+)?(@floatsuffix)/, 'number.float'],
            [/0x[0-9a-fA-F]+LF/, 'number.float'],
            [/0x[0-9a-fA-F]+(@integersuffix)/, 'number.hex'],
            [/0b[0-1]+(@integersuffix)/, 'number.bin'],
            [/\d+(@integersuffix)/, 'number'],
            // delimiter: after number because of .\d floats
            [/[;,.]/, 'delimiter'],
            // strings
            [/"([^"\\]|\\.)*$/, 'string.invalid'],
            [/"""/, 'string', '@string."""'],
            [/"/, 'string', '@string."'],
            // literal string
            [/\@"/, { token: 'string.quote', next: '@litstring' }],
            // characters
            [/'[^\\']'B?/, 'string'],
            [/(')(@escapes)(')/, ['string', 'string.escape', 'string']],
            [/'/, 'string.invalid']
        ],
        whitespace: [
            [/[ \t\r\n]+/, ''],
            [/\(\*(?!\))/, 'comment', '@comment'],
            [/\/\/.*$/, 'comment']
        ],
        comment: [
            [/[^*(]+/, 'comment'],
            [/\*\)/, 'comment', '@pop'],
            [/\*/, 'comment'],
            [/\(\*\)/, 'comment'],
            [/\(/, 'comment']
        ],
        string: [
            [/[^\\"]+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/\\./, 'string.escape.invalid'],
            [
                /("""|"B?)/,
                {
                    cases: {
                        '$#==$S2': { token: 'string', next: '@pop' },
                        '@default': 'string'
                    }
                }
            ]
        ],
        litstring: [
            [/[^"]+/, 'string'],
            [/""/, 'string.escape'],
            [/"/, { token: 'string.quote', next: '@pop' }]
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL2ZzaGFycC9mc2hhcnAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxXQUFXLEtBQUs7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsWUFBWSxHQUFHO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUyxTQUFTLFlBQVksR0FBRztBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDLDhDQUE4QyxJQUFJLGNBQWMsRUFBRSxjQUFjLEVBQUU7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0Msc0JBQXNCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHlCQUF5QjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNENBQTRDO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGdDQUFnQztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHNDQUFzQztBQUN6RDtBQUNBO0FBQ0EiLCJmaWxlIjoiMTkuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5leHBvcnQgdmFyIGNvbmYgPSB7XG4gICAgY29tbWVudHM6IHtcbiAgICAgICAgbGluZUNvbW1lbnQ6ICcvLycsXG4gICAgICAgIGJsb2NrQ29tbWVudDogWycoKicsICcqKSddXG4gICAgfSxcbiAgICBicmFja2V0czogW1xuICAgICAgICBbJ3snLCAnfSddLFxuICAgICAgICBbJ1snLCAnXSddLFxuICAgICAgICBbJygnLCAnKSddXG4gICAgXSxcbiAgICBhdXRvQ2xvc2luZ1BhaXJzOiBbXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfVxuICAgIF0sXG4gICAgc3Vycm91bmRpbmdQYWlyczogW1xuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH0sXG4gICAgICAgIHsgb3BlbjogXCInXCIsIGNsb3NlOiBcIidcIiB9XG4gICAgXSxcbiAgICBmb2xkaW5nOiB7XG4gICAgICAgIG1hcmtlcnM6IHtcbiAgICAgICAgICAgIHN0YXJ0OiBuZXcgUmVnRXhwKCdeXFxcXHMqLy9cXFxccyojcmVnaW9uXFxcXGJ8XlxcXFxzKlxcXFwoXFxcXCpcXFxccyojcmVnaW9uKC4qKVxcXFwqXFxcXCknKSxcbiAgICAgICAgICAgIGVuZDogbmV3IFJlZ0V4cCgnXlxcXFxzKi8vXFxcXHMqI2VuZHJlZ2lvblxcXFxifF5cXFxccypcXFxcKFxcXFwqXFxcXHMqI2VuZHJlZ2lvblxcXFxzKlxcXFwqXFxcXCknKVxuICAgICAgICB9XG4gICAgfVxufTtcbmV4cG9ydCB2YXIgbGFuZ3VhZ2UgPSB7XG4gICAgZGVmYXVsdFRva2VuOiAnJyxcbiAgICB0b2tlblBvc3RmaXg6ICcuZnMnLFxuICAgIGtleXdvcmRzOiBbXG4gICAgICAgICdhYnN0cmFjdCcsXG4gICAgICAgICdhbmQnLFxuICAgICAgICAnYXRvbWljJyxcbiAgICAgICAgJ2FzJyxcbiAgICAgICAgJ2Fzc2VydCcsXG4gICAgICAgICdhc3InLFxuICAgICAgICAnYmFzZScsXG4gICAgICAgICdiZWdpbicsXG4gICAgICAgICdicmVhaycsXG4gICAgICAgICdjaGVja2VkJyxcbiAgICAgICAgJ2NvbXBvbmVudCcsXG4gICAgICAgICdjb25zdCcsXG4gICAgICAgICdjb25zdHJhaW50JyxcbiAgICAgICAgJ2NvbnN0cnVjdG9yJyxcbiAgICAgICAgJ2NvbnRpbnVlJyxcbiAgICAgICAgJ2NsYXNzJyxcbiAgICAgICAgJ2RlZmF1bHQnLFxuICAgICAgICAnZGVsZWdhdGUnLFxuICAgICAgICAnZG8nLFxuICAgICAgICAnZG9uZScsXG4gICAgICAgICdkb3duY2FzdCcsXG4gICAgICAgICdkb3dudG8nLFxuICAgICAgICAnZWxpZicsXG4gICAgICAgICdlbHNlJyxcbiAgICAgICAgJ2VuZCcsXG4gICAgICAgICdleGNlcHRpb24nLFxuICAgICAgICAnZWFnZXInLFxuICAgICAgICAnZXZlbnQnLFxuICAgICAgICAnZXh0ZXJuYWwnLFxuICAgICAgICAnZXh0ZXJuJyxcbiAgICAgICAgJ2ZhbHNlJyxcbiAgICAgICAgJ2ZpbmFsbHknLFxuICAgICAgICAnZm9yJyxcbiAgICAgICAgJ2Z1bicsXG4gICAgICAgICdmdW5jdGlvbicsXG4gICAgICAgICdmaXhlZCcsXG4gICAgICAgICdmdW5jdG9yJyxcbiAgICAgICAgJ2dsb2JhbCcsXG4gICAgICAgICdpZicsXG4gICAgICAgICdpbicsXG4gICAgICAgICdpbmNsdWRlJyxcbiAgICAgICAgJ2luaGVyaXQnLFxuICAgICAgICAnaW5saW5lJyxcbiAgICAgICAgJ2ludGVyZmFjZScsXG4gICAgICAgICdpbnRlcm5hbCcsXG4gICAgICAgICdsYW5kJyxcbiAgICAgICAgJ2xvcicsXG4gICAgICAgICdsc2wnLFxuICAgICAgICAnbHNyJyxcbiAgICAgICAgJ2x4b3InLFxuICAgICAgICAnbGF6eScsXG4gICAgICAgICdsZXQnLFxuICAgICAgICAnbWF0Y2gnLFxuICAgICAgICAnbWVtYmVyJyxcbiAgICAgICAgJ21vZCcsXG4gICAgICAgICdtb2R1bGUnLFxuICAgICAgICAnbXV0YWJsZScsXG4gICAgICAgICduYW1lc3BhY2UnLFxuICAgICAgICAnbWV0aG9kJyxcbiAgICAgICAgJ21peGluJyxcbiAgICAgICAgJ25ldycsXG4gICAgICAgICdub3QnLFxuICAgICAgICAnbnVsbCcsXG4gICAgICAgICdvZicsXG4gICAgICAgICdvcGVuJyxcbiAgICAgICAgJ29yJyxcbiAgICAgICAgJ29iamVjdCcsXG4gICAgICAgICdvdmVycmlkZScsXG4gICAgICAgICdwcml2YXRlJyxcbiAgICAgICAgJ3BhcmFsbGVsJyxcbiAgICAgICAgJ3Byb2Nlc3MnLFxuICAgICAgICAncHJvdGVjdGVkJyxcbiAgICAgICAgJ3B1cmUnLFxuICAgICAgICAncHVibGljJyxcbiAgICAgICAgJ3JlYycsXG4gICAgICAgICdyZXR1cm4nLFxuICAgICAgICAnc3RhdGljJyxcbiAgICAgICAgJ3NlYWxlZCcsXG4gICAgICAgICdzdHJ1Y3QnLFxuICAgICAgICAnc2lnJyxcbiAgICAgICAgJ3RoZW4nLFxuICAgICAgICAndG8nLFxuICAgICAgICAndHJ1ZScsXG4gICAgICAgICd0YWlsY2FsbCcsXG4gICAgICAgICd0cmFpdCcsXG4gICAgICAgICd0cnknLFxuICAgICAgICAndHlwZScsXG4gICAgICAgICd1cGNhc3QnLFxuICAgICAgICAndXNlJyxcbiAgICAgICAgJ3ZhbCcsXG4gICAgICAgICd2b2lkJyxcbiAgICAgICAgJ3ZpcnR1YWwnLFxuICAgICAgICAndm9sYXRpbGUnLFxuICAgICAgICAnd2hlbicsXG4gICAgICAgICd3aGlsZScsXG4gICAgICAgICd3aXRoJyxcbiAgICAgICAgJ3lpZWxkJ1xuICAgIF0sXG4gICAgLy8gd2UgaW5jbHVkZSB0aGVzZSBjb21tb24gcmVndWxhciBleHByZXNzaW9uc1xuICAgIHN5bWJvbHM6IC9bPT48IX4/OiZ8K1xcLSpcXF4lO1xcLixcXC9dKy8sXG4gICAgZXNjYXBlczogL1xcXFwoPzpbYWJmbnJ0dlxcXFxcIiddfHhbMC05QS1GYS1mXXsxLDR9fHVbMC05QS1GYS1mXXs0fXxVWzAtOUEtRmEtZl17OH0pLyxcbiAgICBpbnRlZ2Vyc3VmZml4OiAvW3VVXT9beXNsbkxJXT8vLFxuICAgIGZsb2F0c3VmZml4OiAvW2ZGbU1dPy8sXG4gICAgLy8gVGhlIG1haW4gdG9rZW5pemVyIGZvciBvdXIgbGFuZ3VhZ2VzXG4gICAgdG9rZW5pemVyOiB7XG4gICAgICAgIHJvb3Q6IFtcbiAgICAgICAgICAgIC8vIGlkZW50aWZpZXJzIGFuZCBrZXl3b3Jkc1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9bYS16QS1aX11cXHcqLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQGtleXdvcmRzJzogeyB0b2tlbjogJ2tleXdvcmQuJDAnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnaWRlbnRpZmllcidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAvLyB3aGl0ZXNwYWNlXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAd2hpdGVzcGFjZScgfSxcbiAgICAgICAgICAgIC8vIFs8IGF0dHJpYnV0ZXMgPl0uXG4gICAgICAgICAgICBbL1xcWzwuKj5cXF0vLCAnYW5ub3RhdGlvbiddLFxuICAgICAgICAgICAgLy8gUHJlcHJvY2Vzc29yIGRpcmVjdGl2ZVxuICAgICAgICAgICAgWy9eIyhpZnxlbHNlfGVuZGlmKS8sICdrZXl3b3JkJ10sXG4gICAgICAgICAgICAvLyBkZWxpbWl0ZXJzIGFuZCBvcGVyYXRvcnNcbiAgICAgICAgICAgIFsvW3t9KClcXFtcXF1dLywgJ0BicmFja2V0cyddLFxuICAgICAgICAgICAgWy9bPD5dKD8hQHN5bWJvbHMpLywgJ0BicmFja2V0cyddLFxuICAgICAgICAgICAgWy9Ac3ltYm9scy8sICdkZWxpbWl0ZXInXSxcbiAgICAgICAgICAgIC8vIG51bWJlcnNcbiAgICAgICAgICAgIFsvXFxkKlxcZCtbZUVdKFtcXC0rXT9cXGQrKT8oQGZsb2F0c3VmZml4KS8sICdudW1iZXIuZmxvYXQnXSxcbiAgICAgICAgICAgIFsvXFxkKlxcLlxcZCsoW2VFXVtcXC0rXT9cXGQrKT8oQGZsb2F0c3VmZml4KS8sICdudW1iZXIuZmxvYXQnXSxcbiAgICAgICAgICAgIFsvMHhbMC05YS1mQS1GXStMRi8sICdudW1iZXIuZmxvYXQnXSxcbiAgICAgICAgICAgIFsvMHhbMC05YS1mQS1GXSsoQGludGVnZXJzdWZmaXgpLywgJ251bWJlci5oZXgnXSxcbiAgICAgICAgICAgIFsvMGJbMC0xXSsoQGludGVnZXJzdWZmaXgpLywgJ251bWJlci5iaW4nXSxcbiAgICAgICAgICAgIFsvXFxkKyhAaW50ZWdlcnN1ZmZpeCkvLCAnbnVtYmVyJ10sXG4gICAgICAgICAgICAvLyBkZWxpbWl0ZXI6IGFmdGVyIG51bWJlciBiZWNhdXNlIG9mIC5cXGQgZmxvYXRzXG4gICAgICAgICAgICBbL1s7LC5dLywgJ2RlbGltaXRlciddLFxuICAgICAgICAgICAgLy8gc3RyaW5nc1xuICAgICAgICAgICAgWy9cIihbXlwiXFxcXF18XFxcXC4pKiQvLCAnc3RyaW5nLmludmFsaWQnXSxcbiAgICAgICAgICAgIFsvXCJcIlwiLywgJ3N0cmluZycsICdAc3RyaW5nLlwiXCJcIiddLFxuICAgICAgICAgICAgWy9cIi8sICdzdHJpbmcnLCAnQHN0cmluZy5cIiddLFxuICAgICAgICAgICAgLy8gbGl0ZXJhbCBzdHJpbmdcbiAgICAgICAgICAgIFsvXFxAXCIvLCB7IHRva2VuOiAnc3RyaW5nLnF1b3RlJywgbmV4dDogJ0BsaXRzdHJpbmcnIH1dLFxuICAgICAgICAgICAgLy8gY2hhcmFjdGVyc1xuICAgICAgICAgICAgWy8nW15cXFxcJ10nQj8vLCAnc3RyaW5nJ10sXG4gICAgICAgICAgICBbLygnKShAZXNjYXBlcykoJykvLCBbJ3N0cmluZycsICdzdHJpbmcuZXNjYXBlJywgJ3N0cmluZyddXSxcbiAgICAgICAgICAgIFsvJy8sICdzdHJpbmcuaW52YWxpZCddXG4gICAgICAgIF0sXG4gICAgICAgIHdoaXRlc3BhY2U6IFtcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy8sICcnXSxcbiAgICAgICAgICAgIFsvXFwoXFwqKD8hXFwpKS8sICdjb21tZW50JywgJ0Bjb21tZW50J10sXG4gICAgICAgICAgICBbL1xcL1xcLy4qJC8sICdjb21tZW50J11cbiAgICAgICAgXSxcbiAgICAgICAgY29tbWVudDogW1xuICAgICAgICAgICAgWy9bXiooXSsvLCAnY29tbWVudCddLFxuICAgICAgICAgICAgWy9cXCpcXCkvLCAnY29tbWVudCcsICdAcG9wJ10sXG4gICAgICAgICAgICBbL1xcKi8sICdjb21tZW50J10sXG4gICAgICAgICAgICBbL1xcKFxcKlxcKS8sICdjb21tZW50J10sXG4gICAgICAgICAgICBbL1xcKC8sICdjb21tZW50J11cbiAgICAgICAgXSxcbiAgICAgICAgc3RyaW5nOiBbXG4gICAgICAgICAgICBbL1teXFxcXFwiXSsvLCAnc3RyaW5nJ10sXG4gICAgICAgICAgICBbL0Blc2NhcGVzLywgJ3N0cmluZy5lc2NhcGUnXSxcbiAgICAgICAgICAgIFsvXFxcXC4vLCAnc3RyaW5nLmVzY2FwZS5pbnZhbGlkJ10sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLyhcIlwiXCJ8XCJCPykvLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICckIz09JFMyJzogeyB0b2tlbjogJ3N0cmluZycsIG5leHQ6ICdAcG9wJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ3N0cmluZydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgXSxcbiAgICAgICAgbGl0c3RyaW5nOiBbXG4gICAgICAgICAgICBbL1teXCJdKy8sICdzdHJpbmcnXSxcbiAgICAgICAgICAgIFsvXCJcIi8sICdzdHJpbmcuZXNjYXBlJ10sXG4gICAgICAgICAgICBbL1wiLywgeyB0b2tlbjogJ3N0cmluZy5xdW90ZScsIG5leHQ6ICdAcG9wJyB9XVxuICAgICAgICBdXG4gICAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=