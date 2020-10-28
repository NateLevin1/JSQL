(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/lexon/lexon.js":
/*!**************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/lexon/lexon.js ***!
  \**************************************************************************/
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
        lineComment: 'COMMENT'
        // blockComment: ['COMMENT', '.'],
    },
    brackets: [['(', ')']],
    autoClosingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
        { open: ':', close: '.' }
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '`', close: '`' },
        { open: '"', close: '"' },
        { open: "'", close: "'" },
        { open: ':', close: '.' }
    ],
    folding: {
        markers: {
            start: new RegExp('^\\s*(::\\s*|COMMENT\\s+)#region'),
            end: new RegExp('^\\s*(::\\s*|COMMENT\\s+)#endregion')
        }
    }
};
var language = {
    // Set defaultToken to invalid to see what you do not tokenize yet
    // defaultToken: 'invalid',
    tokenPostfix: '.lexon',
    ignoreCase: true,
    keywords: [
        'lexon',
        'lex',
        'clause',
        'terms',
        'contracts',
        'may',
        'pay',
        'pays',
        'appoints',
        'into',
        'to'
    ],
    typeKeywords: ['amount', 'person', 'key', 'time', 'date', 'asset', 'text'],
    operators: [
        'less',
        'greater',
        'equal',
        'le',
        'gt',
        'or',
        'and',
        'add',
        'added',
        'subtract',
        'subtracted',
        'multiply',
        'multiplied',
        'times',
        'divide',
        'divided',
        'is',
        'be',
        'certified'
    ],
    // we include these common regular expressions
    symbols: /[=><!~?:&|+\-*\/\^%]+/,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            // comment
            [/^(\s*)(comment:?(?:\s.*|))$/, ['', 'comment']],
            // special identifier cases
            [
                /"/,
                {
                    token: 'identifier.quote',
                    bracket: '@open',
                    next: '@quoted_identifier'
                }
            ],
            [
                'LEX$',
                {
                    token: 'keyword',
                    bracket: '@open',
                    next: '@identifier_until_period'
                }
            ],
            ['LEXON', { token: 'keyword', bracket: '@open', next: '@semver' }],
            [
                ':',
                {
                    token: 'delimiter',
                    bracket: '@open',
                    next: '@identifier_until_period'
                }
            ],
            // identifiers and keywords
            [
                /[a-z_$][\w$]*/,
                {
                    cases: {
                        '@operators': 'operator',
                        '@typeKeywords': 'keyword.type',
                        '@keywords': 'keyword',
                        '@default': 'identifier'
                    }
                }
            ],
            // whitespace
            { include: '@whitespace' },
            // delimiters and operators
            [/[{}()\[\]]/, '@brackets'],
            [/[<>](?!@symbols)/, '@brackets'],
            [/@symbols/, 'delimiter'],
            // numbers
            [/\d*\.\d*\.\d*/, 'number.semver'],
            [/\d*\.\d+([eE][\-+]?\d+)?/, 'number.float'],
            [/0[xX][0-9a-fA-F]+/, 'number.hex'],
            [/\d+/, 'number'],
            // delimiter: after number because of .\d floats
            [/[;,.]/, 'delimiter']
        ],
        quoted_identifier: [
            [/[^\\"]+/, 'identifier'],
            [/"/, { token: 'identifier.quote', bracket: '@close', next: '@pop' }]
        ],
        space_identifier_until_period: [
            [':', 'delimiter'],
            [' ', { token: 'white', next: '@identifier_rest' }]
        ],
        identifier_until_period: [
            { include: '@whitespace' },
            [':', { token: 'delimiter', next: '@identifier_rest' }],
            [/[^\\.]+/, 'identifier'],
            [/\./, { token: 'delimiter', bracket: '@close', next: '@pop' }]
        ],
        identifier_rest: [
            [/[^\\.]+/, 'identifier'],
            [/\./, { token: 'delimiter', bracket: '@close', next: '@pop' }]
        ],
        semver: [
            { include: '@whitespace' },
            [':', 'delimiter'],
            [/\d*\.\d*\.\d*/, { token: 'number.semver', bracket: '@close', next: '@pop' }]
        ],
        whitespace: [[/[ \t\r\n]+/, 'white']]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL2xleG9uL2xleG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxTQUFTLFNBQVMsWUFBWSxHQUFHO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUyxTQUFTLFlBQVksR0FBRztBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNEQUFzRDtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHlCQUF5QjtBQUN0QztBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiw2REFBNkQ7QUFDaEY7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDJDQUEyQztBQUM5RDtBQUNBO0FBQ0EsYUFBYSx5QkFBeUI7QUFDdEMsbUJBQW1CLCtDQUErQztBQUNsRTtBQUNBLG9CQUFvQixzREFBc0Q7QUFDMUU7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHNEQUFzRDtBQUMxRTtBQUNBO0FBQ0EsYUFBYSx5QkFBeUI7QUFDdEM7QUFDQSwrQkFBK0IsMERBQTBEO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjMwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuZXhwb3J0IHZhciBjb25mID0ge1xuICAgIGNvbW1lbnRzOiB7XG4gICAgICAgIGxpbmVDb21tZW50OiAnQ09NTUVOVCdcbiAgICAgICAgLy8gYmxvY2tDb21tZW50OiBbJ0NPTU1FTlQnLCAnLiddLFxuICAgIH0sXG4gICAgYnJhY2tldHM6IFtbJygnLCAnKSddXSxcbiAgICBhdXRvQ2xvc2luZ1BhaXJzOiBbXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfSxcbiAgICAgICAgeyBvcGVuOiAnOicsIGNsb3NlOiAnLicgfVxuICAgIF0sXG4gICAgc3Vycm91bmRpbmdQYWlyczogW1xuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxuICAgICAgICB7IG9wZW46ICdgJywgY2xvc2U6ICdgJyB9LFxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH0sXG4gICAgICAgIHsgb3BlbjogXCInXCIsIGNsb3NlOiBcIidcIiB9LFxuICAgICAgICB7IG9wZW46ICc6JywgY2xvc2U6ICcuJyB9XG4gICAgXSxcbiAgICBmb2xkaW5nOiB7XG4gICAgICAgIG1hcmtlcnM6IHtcbiAgICAgICAgICAgIHN0YXJ0OiBuZXcgUmVnRXhwKCdeXFxcXHMqKDo6XFxcXHMqfENPTU1FTlRcXFxccyspI3JlZ2lvbicpLFxuICAgICAgICAgICAgZW5kOiBuZXcgUmVnRXhwKCdeXFxcXHMqKDo6XFxcXHMqfENPTU1FTlRcXFxccyspI2VuZHJlZ2lvbicpXG4gICAgICAgIH1cbiAgICB9XG59O1xuZXhwb3J0IHZhciBsYW5ndWFnZSA9IHtcbiAgICAvLyBTZXQgZGVmYXVsdFRva2VuIHRvIGludmFsaWQgdG8gc2VlIHdoYXQgeW91IGRvIG5vdCB0b2tlbml6ZSB5ZXRcbiAgICAvLyBkZWZhdWx0VG9rZW46ICdpbnZhbGlkJyxcbiAgICB0b2tlblBvc3RmaXg6ICcubGV4b24nLFxuICAgIGlnbm9yZUNhc2U6IHRydWUsXG4gICAga2V5d29yZHM6IFtcbiAgICAgICAgJ2xleG9uJyxcbiAgICAgICAgJ2xleCcsXG4gICAgICAgICdjbGF1c2UnLFxuICAgICAgICAndGVybXMnLFxuICAgICAgICAnY29udHJhY3RzJyxcbiAgICAgICAgJ21heScsXG4gICAgICAgICdwYXknLFxuICAgICAgICAncGF5cycsXG4gICAgICAgICdhcHBvaW50cycsXG4gICAgICAgICdpbnRvJyxcbiAgICAgICAgJ3RvJ1xuICAgIF0sXG4gICAgdHlwZUtleXdvcmRzOiBbJ2Ftb3VudCcsICdwZXJzb24nLCAna2V5JywgJ3RpbWUnLCAnZGF0ZScsICdhc3NldCcsICd0ZXh0J10sXG4gICAgb3BlcmF0b3JzOiBbXG4gICAgICAgICdsZXNzJyxcbiAgICAgICAgJ2dyZWF0ZXInLFxuICAgICAgICAnZXF1YWwnLFxuICAgICAgICAnbGUnLFxuICAgICAgICAnZ3QnLFxuICAgICAgICAnb3InLFxuICAgICAgICAnYW5kJyxcbiAgICAgICAgJ2FkZCcsXG4gICAgICAgICdhZGRlZCcsXG4gICAgICAgICdzdWJ0cmFjdCcsXG4gICAgICAgICdzdWJ0cmFjdGVkJyxcbiAgICAgICAgJ211bHRpcGx5JyxcbiAgICAgICAgJ211bHRpcGxpZWQnLFxuICAgICAgICAndGltZXMnLFxuICAgICAgICAnZGl2aWRlJyxcbiAgICAgICAgJ2RpdmlkZWQnLFxuICAgICAgICAnaXMnLFxuICAgICAgICAnYmUnLFxuICAgICAgICAnY2VydGlmaWVkJ1xuICAgIF0sXG4gICAgLy8gd2UgaW5jbHVkZSB0aGVzZSBjb21tb24gcmVndWxhciBleHByZXNzaW9uc1xuICAgIHN5bWJvbHM6IC9bPT48IX4/OiZ8K1xcLSpcXC9cXF4lXSsvLFxuICAgIC8vIFRoZSBtYWluIHRva2VuaXplciBmb3Igb3VyIGxhbmd1YWdlc1xuICAgIHRva2VuaXplcjoge1xuICAgICAgICByb290OiBbXG4gICAgICAgICAgICAvLyBjb21tZW50XG4gICAgICAgICAgICBbL14oXFxzKikoY29tbWVudDo/KD86XFxzLip8KSkkLywgWycnLCAnY29tbWVudCddXSxcbiAgICAgICAgICAgIC8vIHNwZWNpYWwgaWRlbnRpZmllciBjYXNlc1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9cIi8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ2lkZW50aWZpZXIucXVvdGUnLFxuICAgICAgICAgICAgICAgICAgICBicmFja2V0OiAnQG9wZW4nLFxuICAgICAgICAgICAgICAgICAgICBuZXh0OiAnQHF1b3RlZF9pZGVudGlmaWVyJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgJ0xFWCQnLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46ICdrZXl3b3JkJyxcbiAgICAgICAgICAgICAgICAgICAgYnJhY2tldDogJ0BvcGVuJyxcbiAgICAgICAgICAgICAgICAgICAgbmV4dDogJ0BpZGVudGlmaWVyX3VudGlsX3BlcmlvZCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgWydMRVhPTicsIHsgdG9rZW46ICdrZXl3b3JkJywgYnJhY2tldDogJ0BvcGVuJywgbmV4dDogJ0BzZW12ZXInIH1dLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICc6JyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiAnZGVsaW1pdGVyJyxcbiAgICAgICAgICAgICAgICAgICAgYnJhY2tldDogJ0BvcGVuJyxcbiAgICAgICAgICAgICAgICAgICAgbmV4dDogJ0BpZGVudGlmaWVyX3VudGlsX3BlcmlvZCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgLy8gaWRlbnRpZmllcnMgYW5kIGtleXdvcmRzXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL1thLXpfJF1bXFx3JF0qLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQG9wZXJhdG9ycyc6ICdvcGVyYXRvcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQHR5cGVLZXl3b3Jkcyc6ICdrZXl3b3JkLnR5cGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BrZXl3b3Jkcyc6ICdrZXl3b3JkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdpZGVudGlmaWVyJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIC8vIHdoaXRlc3BhY2VcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B3aGl0ZXNwYWNlJyB9LFxuICAgICAgICAgICAgLy8gZGVsaW1pdGVycyBhbmQgb3BlcmF0b3JzXG4gICAgICAgICAgICBbL1t7fSgpXFxbXFxdXS8sICdAYnJhY2tldHMnXSxcbiAgICAgICAgICAgIFsvWzw+XSg/IUBzeW1ib2xzKS8sICdAYnJhY2tldHMnXSxcbiAgICAgICAgICAgIFsvQHN5bWJvbHMvLCAnZGVsaW1pdGVyJ10sXG4gICAgICAgICAgICAvLyBudW1iZXJzXG4gICAgICAgICAgICBbL1xcZCpcXC5cXGQqXFwuXFxkKi8sICdudW1iZXIuc2VtdmVyJ10sXG4gICAgICAgICAgICBbL1xcZCpcXC5cXGQrKFtlRV1bXFwtK10/XFxkKyk/LywgJ251bWJlci5mbG9hdCddLFxuICAgICAgICAgICAgWy8wW3hYXVswLTlhLWZBLUZdKy8sICdudW1iZXIuaGV4J10sXG4gICAgICAgICAgICBbL1xcZCsvLCAnbnVtYmVyJ10sXG4gICAgICAgICAgICAvLyBkZWxpbWl0ZXI6IGFmdGVyIG51bWJlciBiZWNhdXNlIG9mIC5cXGQgZmxvYXRzXG4gICAgICAgICAgICBbL1s7LC5dLywgJ2RlbGltaXRlciddXG4gICAgICAgIF0sXG4gICAgICAgIHF1b3RlZF9pZGVudGlmaWVyOiBbXG4gICAgICAgICAgICBbL1teXFxcXFwiXSsvLCAnaWRlbnRpZmllciddLFxuICAgICAgICAgICAgWy9cIi8sIHsgdG9rZW46ICdpZGVudGlmaWVyLnF1b3RlJywgYnJhY2tldDogJ0BjbG9zZScsIG5leHQ6ICdAcG9wJyB9XVxuICAgICAgICBdLFxuICAgICAgICBzcGFjZV9pZGVudGlmaWVyX3VudGlsX3BlcmlvZDogW1xuICAgICAgICAgICAgWyc6JywgJ2RlbGltaXRlciddLFxuICAgICAgICAgICAgWycgJywgeyB0b2tlbjogJ3doaXRlJywgbmV4dDogJ0BpZGVudGlmaWVyX3Jlc3QnIH1dXG4gICAgICAgIF0sXG4gICAgICAgIGlkZW50aWZpZXJfdW50aWxfcGVyaW9kOiBbXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAd2hpdGVzcGFjZScgfSxcbiAgICAgICAgICAgIFsnOicsIHsgdG9rZW46ICdkZWxpbWl0ZXInLCBuZXh0OiAnQGlkZW50aWZpZXJfcmVzdCcgfV0sXG4gICAgICAgICAgICBbL1teXFxcXC5dKy8sICdpZGVudGlmaWVyJ10sXG4gICAgICAgICAgICBbL1xcLi8sIHsgdG9rZW46ICdkZWxpbWl0ZXInLCBicmFja2V0OiAnQGNsb3NlJywgbmV4dDogJ0Bwb3AnIH1dXG4gICAgICAgIF0sXG4gICAgICAgIGlkZW50aWZpZXJfcmVzdDogW1xuICAgICAgICAgICAgWy9bXlxcXFwuXSsvLCAnaWRlbnRpZmllciddLFxuICAgICAgICAgICAgWy9cXC4vLCB7IHRva2VuOiAnZGVsaW1pdGVyJywgYnJhY2tldDogJ0BjbG9zZScsIG5leHQ6ICdAcG9wJyB9XVxuICAgICAgICBdLFxuICAgICAgICBzZW12ZXI6IFtcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B3aGl0ZXNwYWNlJyB9LFxuICAgICAgICAgICAgWyc6JywgJ2RlbGltaXRlciddLFxuICAgICAgICAgICAgWy9cXGQqXFwuXFxkKlxcLlxcZCovLCB7IHRva2VuOiAnbnVtYmVyLnNlbXZlcicsIGJyYWNrZXQ6ICdAY2xvc2UnLCBuZXh0OiAnQHBvcCcgfV1cbiAgICAgICAgXSxcbiAgICAgICAgd2hpdGVzcGFjZTogW1svWyBcXHRcXHJcXG5dKy8sICd3aGl0ZSddXVxuICAgIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9