(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/pascal/pascal.js":
/*!****************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/pascal/pascal.js ***!
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
    // the default separators except `@$`
    wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\#\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,
    comments: {
        lineComment: '//',
        blockComment: ['{', '}']
    },
    brackets: [
        ['{', '}'],
        ['[', ']'],
        ['(', ')'],
        ['<', '>']
    ],
    autoClosingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '<', close: '>' },
        { open: "'", close: "'" }
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '<', close: '>' },
        { open: "'", close: "'" }
    ],
    folding: {
        markers: {
            start: new RegExp("^\\s*\\{\\$REGION(\\s\\'.*\\')?\\}"),
            end: new RegExp('^\\s*\\{\\$ENDREGION\\}')
        }
    }
};
var language = {
    defaultToken: '',
    tokenPostfix: '.pascal',
    ignoreCase: true,
    brackets: [
        { open: '{', close: '}', token: 'delimiter.curly' },
        { open: '[', close: ']', token: 'delimiter.square' },
        { open: '(', close: ')', token: 'delimiter.parenthesis' },
        { open: '<', close: '>', token: 'delimiter.angle' }
    ],
    keywords: [
        'absolute',
        'abstract',
        'all',
        'and_then',
        'array',
        'as',
        'asm',
        'attribute',
        'begin',
        'bindable',
        'case',
        'class',
        'const',
        'contains',
        'default',
        'div',
        'else',
        'end',
        'except',
        'exports',
        'external',
        'far',
        'file',
        'finalization',
        'finally',
        'forward',
        'generic',
        'goto',
        'if',
        'implements',
        'import',
        'in',
        'index',
        'inherited',
        'initialization',
        'interrupt',
        'is',
        'label',
        'library',
        'mod',
        'module',
        'name',
        'near',
        'not',
        'object',
        'of',
        'on',
        'only',
        'operator',
        'or_else',
        'otherwise',
        'override',
        'package',
        'packed',
        'pow',
        'private',
        'program',
        'protected',
        'public',
        'published',
        'interface',
        'implementation',
        'qualified',
        'read',
        'record',
        'resident',
        'requires',
        'resourcestring',
        'restricted',
        'segment',
        'set',
        'shl',
        'shr',
        'specialize',
        'stored',
        'then',
        'threadvar',
        'to',
        'try',
        'type',
        'unit',
        'uses',
        'var',
        'view',
        'virtual',
        'dynamic',
        'overload',
        'reintroduce',
        'with',
        'write',
        'xor',
        'true',
        'false',
        'procedure',
        'function',
        'constructor',
        'destructor',
        'property',
        'break',
        'continue',
        'exit',
        'abort',
        'while',
        'do',
        'for',
        'raise',
        'repeat',
        'until'
    ],
    typeKeywords: [
        'boolean',
        'double',
        'byte',
        'integer',
        'shortint',
        'char',
        'longint',
        'float',
        'string'
    ],
    operators: [
        '=',
        '>',
        '<',
        '<=',
        '>=',
        '<>',
        ':',
        ':=',
        'and',
        'or',
        '+',
        '-',
        '*',
        '/',
        '@',
        '&',
        '^',
        '%'
    ],
    // we include these common regular expressions
    symbols: /[=><:@\^&|+\-*\/\^%]+/,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            // identifiers and keywords
            [
                /[a-zA-Z_][\w]*/,
                {
                    cases: {
                        '@keywords': { token: 'keyword.$0' },
                        '@default': 'identifier'
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
            // numbers
            [/\d*\.\d+([eE][\-+]?\d+)?/, 'number.float'],
            [/\$[0-9a-fA-F]{1,16}/, 'number.hex'],
            [/\d+/, 'number'],
            // delimiter: after number because of .\d floats
            [/[;,.]/, 'delimiter'],
            // strings
            [/'([^'\\]|\\.)*$/, 'string.invalid'],
            [/'/, 'string', '@string'],
            // characters
            [/'[^\\']'/, 'string'],
            [/'/, 'string.invalid'],
            [/\#\d+/, 'string']
        ],
        comment: [
            [/[^\*\}]+/, 'comment'],
            //[/\(\*/,    'comment', '@push' ],    // nested comment  not allowed :-(
            [/\}/, 'comment', '@pop'],
            [/[\{]/, 'comment']
        ],
        string: [
            [/[^\\']+/, 'string'],
            [/\\./, 'string.escape.invalid'],
            [/'/, { token: 'string.quote', bracket: '@close', next: '@pop' }]
        ],
        whitespace: [
            [/[ \t\r\n]+/, 'white'],
            [/\{/, 'comment', '@comment'],
            [/\/\/.*$/, 'comment']
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL3Bhc2NhbC9wYXNjYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLGtFQUFrRSxJQUFJLE1BQU07QUFDNUU7QUFDQTtBQUNBLHlCQUF5QixLQUFLO0FBQzlCLEtBQUs7QUFDTDtBQUNBLFdBQVcsS0FBSztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLFlBQVksR0FBRztBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVMsU0FBUyxZQUFZLEdBQUc7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QywwQkFBMEI7QUFDakUscUNBQXFDLGVBQWU7QUFDcEQ7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxZQUFZLDZCQUE2QjtBQUMzRCxTQUFTLG1EQUFtRDtBQUM1RCxTQUFTLHdEQUF3RDtBQUNqRSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxzQkFBc0I7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEseUJBQXlCO0FBQ3RDO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixLQUFLO0FBQ2pDO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0EsZ0JBQWdCO0FBQ2hCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix5REFBeUQ7QUFDNUU7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjM3LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuZXhwb3J0IHZhciBjb25mID0ge1xuICAgIC8vIHRoZSBkZWZhdWx0IHNlcGFyYXRvcnMgZXhjZXB0IGBAJGBcbiAgICB3b3JkUGF0dGVybjogLygtP1xcZCpcXC5cXGRcXHcqKXwoW15cXGBcXH5cXCFcXCNcXCVcXF5cXCZcXCpcXChcXClcXC1cXD1cXCtcXFtcXHtcXF1cXH1cXFxcXFx8XFw7XFw6XFwnXFxcIlxcLFxcLlxcPFxcPlxcL1xcP1xcc10rKS9nLFxuICAgIGNvbW1lbnRzOiB7XG4gICAgICAgIGxpbmVDb21tZW50OiAnLy8nLFxuICAgICAgICBibG9ja0NvbW1lbnQ6IFsneycsICd9J11cbiAgICB9LFxuICAgIGJyYWNrZXRzOiBbXG4gICAgICAgIFsneycsICd9J10sXG4gICAgICAgIFsnWycsICddJ10sXG4gICAgICAgIFsnKCcsICcpJ10sXG4gICAgICAgIFsnPCcsICc+J11cbiAgICBdLFxuICAgIGF1dG9DbG9zaW5nUGFpcnM6IFtcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcbiAgICAgICAgeyBvcGVuOiAnPCcsIGNsb3NlOiAnPicgfSxcbiAgICAgICAgeyBvcGVuOiBcIidcIiwgY2xvc2U6IFwiJ1wiIH1cbiAgICBdLFxuICAgIHN1cnJvdW5kaW5nUGFpcnM6IFtcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcbiAgICAgICAgeyBvcGVuOiAnPCcsIGNsb3NlOiAnPicgfSxcbiAgICAgICAgeyBvcGVuOiBcIidcIiwgY2xvc2U6IFwiJ1wiIH1cbiAgICBdLFxuICAgIGZvbGRpbmc6IHtcbiAgICAgICAgbWFya2Vyczoge1xuICAgICAgICAgICAgc3RhcnQ6IG5ldyBSZWdFeHAoXCJeXFxcXHMqXFxcXHtcXFxcJFJFR0lPTihcXFxcc1xcXFwnLipcXFxcJyk/XFxcXH1cIiksXG4gICAgICAgICAgICBlbmQ6IG5ldyBSZWdFeHAoJ15cXFxccypcXFxce1xcXFwkRU5EUkVHSU9OXFxcXH0nKVxuICAgICAgICB9XG4gICAgfVxufTtcbmV4cG9ydCB2YXIgbGFuZ3VhZ2UgPSB7XG4gICAgZGVmYXVsdFRva2VuOiAnJyxcbiAgICB0b2tlblBvc3RmaXg6ICcucGFzY2FsJyxcbiAgICBpZ25vcmVDYXNlOiB0cnVlLFxuICAgIGJyYWNrZXRzOiBbXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nLCB0b2tlbjogJ2RlbGltaXRlci5jdXJseScgfSxcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScsIHRva2VuOiAnZGVsaW1pdGVyLnNxdWFyZScgfSxcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScsIHRva2VuOiAnZGVsaW1pdGVyLnBhcmVudGhlc2lzJyB9LFxuICAgICAgICB7IG9wZW46ICc8JywgY2xvc2U6ICc+JywgdG9rZW46ICdkZWxpbWl0ZXIuYW5nbGUnIH1cbiAgICBdLFxuICAgIGtleXdvcmRzOiBbXG4gICAgICAgICdhYnNvbHV0ZScsXG4gICAgICAgICdhYnN0cmFjdCcsXG4gICAgICAgICdhbGwnLFxuICAgICAgICAnYW5kX3RoZW4nLFxuICAgICAgICAnYXJyYXknLFxuICAgICAgICAnYXMnLFxuICAgICAgICAnYXNtJyxcbiAgICAgICAgJ2F0dHJpYnV0ZScsXG4gICAgICAgICdiZWdpbicsXG4gICAgICAgICdiaW5kYWJsZScsXG4gICAgICAgICdjYXNlJyxcbiAgICAgICAgJ2NsYXNzJyxcbiAgICAgICAgJ2NvbnN0JyxcbiAgICAgICAgJ2NvbnRhaW5zJyxcbiAgICAgICAgJ2RlZmF1bHQnLFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgJ2Vsc2UnLFxuICAgICAgICAnZW5kJyxcbiAgICAgICAgJ2V4Y2VwdCcsXG4gICAgICAgICdleHBvcnRzJyxcbiAgICAgICAgJ2V4dGVybmFsJyxcbiAgICAgICAgJ2ZhcicsXG4gICAgICAgICdmaWxlJyxcbiAgICAgICAgJ2ZpbmFsaXphdGlvbicsXG4gICAgICAgICdmaW5hbGx5JyxcbiAgICAgICAgJ2ZvcndhcmQnLFxuICAgICAgICAnZ2VuZXJpYycsXG4gICAgICAgICdnb3RvJyxcbiAgICAgICAgJ2lmJyxcbiAgICAgICAgJ2ltcGxlbWVudHMnLFxuICAgICAgICAnaW1wb3J0JyxcbiAgICAgICAgJ2luJyxcbiAgICAgICAgJ2luZGV4JyxcbiAgICAgICAgJ2luaGVyaXRlZCcsXG4gICAgICAgICdpbml0aWFsaXphdGlvbicsXG4gICAgICAgICdpbnRlcnJ1cHQnLFxuICAgICAgICAnaXMnLFxuICAgICAgICAnbGFiZWwnLFxuICAgICAgICAnbGlicmFyeScsXG4gICAgICAgICdtb2QnLFxuICAgICAgICAnbW9kdWxlJyxcbiAgICAgICAgJ25hbWUnLFxuICAgICAgICAnbmVhcicsXG4gICAgICAgICdub3QnLFxuICAgICAgICAnb2JqZWN0JyxcbiAgICAgICAgJ29mJyxcbiAgICAgICAgJ29uJyxcbiAgICAgICAgJ29ubHknLFxuICAgICAgICAnb3BlcmF0b3InLFxuICAgICAgICAnb3JfZWxzZScsXG4gICAgICAgICdvdGhlcndpc2UnLFxuICAgICAgICAnb3ZlcnJpZGUnLFxuICAgICAgICAncGFja2FnZScsXG4gICAgICAgICdwYWNrZWQnLFxuICAgICAgICAncG93JyxcbiAgICAgICAgJ3ByaXZhdGUnLFxuICAgICAgICAncHJvZ3JhbScsXG4gICAgICAgICdwcm90ZWN0ZWQnLFxuICAgICAgICAncHVibGljJyxcbiAgICAgICAgJ3B1Ymxpc2hlZCcsXG4gICAgICAgICdpbnRlcmZhY2UnLFxuICAgICAgICAnaW1wbGVtZW50YXRpb24nLFxuICAgICAgICAncXVhbGlmaWVkJyxcbiAgICAgICAgJ3JlYWQnLFxuICAgICAgICAncmVjb3JkJyxcbiAgICAgICAgJ3Jlc2lkZW50JyxcbiAgICAgICAgJ3JlcXVpcmVzJyxcbiAgICAgICAgJ3Jlc291cmNlc3RyaW5nJyxcbiAgICAgICAgJ3Jlc3RyaWN0ZWQnLFxuICAgICAgICAnc2VnbWVudCcsXG4gICAgICAgICdzZXQnLFxuICAgICAgICAnc2hsJyxcbiAgICAgICAgJ3NocicsXG4gICAgICAgICdzcGVjaWFsaXplJyxcbiAgICAgICAgJ3N0b3JlZCcsXG4gICAgICAgICd0aGVuJyxcbiAgICAgICAgJ3RocmVhZHZhcicsXG4gICAgICAgICd0bycsXG4gICAgICAgICd0cnknLFxuICAgICAgICAndHlwZScsXG4gICAgICAgICd1bml0JyxcbiAgICAgICAgJ3VzZXMnLFxuICAgICAgICAndmFyJyxcbiAgICAgICAgJ3ZpZXcnLFxuICAgICAgICAndmlydHVhbCcsXG4gICAgICAgICdkeW5hbWljJyxcbiAgICAgICAgJ292ZXJsb2FkJyxcbiAgICAgICAgJ3JlaW50cm9kdWNlJyxcbiAgICAgICAgJ3dpdGgnLFxuICAgICAgICAnd3JpdGUnLFxuICAgICAgICAneG9yJyxcbiAgICAgICAgJ3RydWUnLFxuICAgICAgICAnZmFsc2UnLFxuICAgICAgICAncHJvY2VkdXJlJyxcbiAgICAgICAgJ2Z1bmN0aW9uJyxcbiAgICAgICAgJ2NvbnN0cnVjdG9yJyxcbiAgICAgICAgJ2Rlc3RydWN0b3InLFxuICAgICAgICAncHJvcGVydHknLFxuICAgICAgICAnYnJlYWsnLFxuICAgICAgICAnY29udGludWUnLFxuICAgICAgICAnZXhpdCcsXG4gICAgICAgICdhYm9ydCcsXG4gICAgICAgICd3aGlsZScsXG4gICAgICAgICdkbycsXG4gICAgICAgICdmb3InLFxuICAgICAgICAncmFpc2UnLFxuICAgICAgICAncmVwZWF0JyxcbiAgICAgICAgJ3VudGlsJ1xuICAgIF0sXG4gICAgdHlwZUtleXdvcmRzOiBbXG4gICAgICAgICdib29sZWFuJyxcbiAgICAgICAgJ2RvdWJsZScsXG4gICAgICAgICdieXRlJyxcbiAgICAgICAgJ2ludGVnZXInLFxuICAgICAgICAnc2hvcnRpbnQnLFxuICAgICAgICAnY2hhcicsXG4gICAgICAgICdsb25naW50JyxcbiAgICAgICAgJ2Zsb2F0JyxcbiAgICAgICAgJ3N0cmluZydcbiAgICBdLFxuICAgIG9wZXJhdG9yczogW1xuICAgICAgICAnPScsXG4gICAgICAgICc+JyxcbiAgICAgICAgJzwnLFxuICAgICAgICAnPD0nLFxuICAgICAgICAnPj0nLFxuICAgICAgICAnPD4nLFxuICAgICAgICAnOicsXG4gICAgICAgICc6PScsXG4gICAgICAgICdhbmQnLFxuICAgICAgICAnb3InLFxuICAgICAgICAnKycsXG4gICAgICAgICctJyxcbiAgICAgICAgJyonLFxuICAgICAgICAnLycsXG4gICAgICAgICdAJyxcbiAgICAgICAgJyYnLFxuICAgICAgICAnXicsXG4gICAgICAgICclJ1xuICAgIF0sXG4gICAgLy8gd2UgaW5jbHVkZSB0aGVzZSBjb21tb24gcmVndWxhciBleHByZXNzaW9uc1xuICAgIHN5bWJvbHM6IC9bPT48OkBcXF4mfCtcXC0qXFwvXFxeJV0rLyxcbiAgICAvLyBUaGUgbWFpbiB0b2tlbml6ZXIgZm9yIG91ciBsYW5ndWFnZXNcbiAgICB0b2tlbml6ZXI6IHtcbiAgICAgICAgcm9vdDogW1xuICAgICAgICAgICAgLy8gaWRlbnRpZmllcnMgYW5kIGtleXdvcmRzXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL1thLXpBLVpfXVtcXHddKi8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0BrZXl3b3Jkcyc6IHsgdG9rZW46ICdrZXl3b3JkLiQwJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ2lkZW50aWZpZXInXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgLy8gd2hpdGVzcGFjZVxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHdoaXRlc3BhY2UnIH0sXG4gICAgICAgICAgICAvLyBkZWxpbWl0ZXJzIGFuZCBvcGVyYXRvcnNcbiAgICAgICAgICAgIFsvW3t9KClcXFtcXF1dLywgJ0BicmFja2V0cyddLFxuICAgICAgICAgICAgWy9bPD5dKD8hQHN5bWJvbHMpLywgJ0BicmFja2V0cyddLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9Ac3ltYm9scy8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0BvcGVyYXRvcnMnOiAnZGVsaW1pdGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgLy8gbnVtYmVyc1xuICAgICAgICAgICAgWy9cXGQqXFwuXFxkKyhbZUVdW1xcLStdP1xcZCspPy8sICdudW1iZXIuZmxvYXQnXSxcbiAgICAgICAgICAgIFsvXFwkWzAtOWEtZkEtRl17MSwxNn0vLCAnbnVtYmVyLmhleCddLFxuICAgICAgICAgICAgWy9cXGQrLywgJ251bWJlciddLFxuICAgICAgICAgICAgLy8gZGVsaW1pdGVyOiBhZnRlciBudW1iZXIgYmVjYXVzZSBvZiAuXFxkIGZsb2F0c1xuICAgICAgICAgICAgWy9bOywuXS8sICdkZWxpbWl0ZXInXSxcbiAgICAgICAgICAgIC8vIHN0cmluZ3NcbiAgICAgICAgICAgIFsvJyhbXidcXFxcXXxcXFxcLikqJC8sICdzdHJpbmcuaW52YWxpZCddLFxuICAgICAgICAgICAgWy8nLywgJ3N0cmluZycsICdAc3RyaW5nJ10sXG4gICAgICAgICAgICAvLyBjaGFyYWN0ZXJzXG4gICAgICAgICAgICBbLydbXlxcXFwnXScvLCAnc3RyaW5nJ10sXG4gICAgICAgICAgICBbLycvLCAnc3RyaW5nLmludmFsaWQnXSxcbiAgICAgICAgICAgIFsvXFwjXFxkKy8sICdzdHJpbmcnXVxuICAgICAgICBdLFxuICAgICAgICBjb21tZW50OiBbXG4gICAgICAgICAgICBbL1teXFwqXFx9XSsvLCAnY29tbWVudCddLFxuICAgICAgICAgICAgLy9bL1xcKFxcKi8sICAgICdjb21tZW50JywgJ0BwdXNoJyBdLCAgICAvLyBuZXN0ZWQgY29tbWVudCAgbm90IGFsbG93ZWQgOi0oXG4gICAgICAgICAgICBbL1xcfS8sICdjb21tZW50JywgJ0Bwb3AnXSxcbiAgICAgICAgICAgIFsvW1xce10vLCAnY29tbWVudCddXG4gICAgICAgIF0sXG4gICAgICAgIHN0cmluZzogW1xuICAgICAgICAgICAgWy9bXlxcXFwnXSsvLCAnc3RyaW5nJ10sXG4gICAgICAgICAgICBbL1xcXFwuLywgJ3N0cmluZy5lc2NhcGUuaW52YWxpZCddLFxuICAgICAgICAgICAgWy8nLywgeyB0b2tlbjogJ3N0cmluZy5xdW90ZScsIGJyYWNrZXQ6ICdAY2xvc2UnLCBuZXh0OiAnQHBvcCcgfV1cbiAgICAgICAgXSxcbiAgICAgICAgd2hpdGVzcGFjZTogW1xuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rLywgJ3doaXRlJ10sXG4gICAgICAgICAgICBbL1xcey8sICdjb21tZW50JywgJ0Bjb21tZW50J10sXG4gICAgICAgICAgICBbL1xcL1xcLy4qJC8sICdjb21tZW50J11cbiAgICAgICAgXVxuICAgIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9