(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/hcl/hcl.js":
/*!**********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/hcl/hcl.js ***!
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
        { open: '"', close: '"', notIn: ['string'] }
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
    tokenPostfix: '.hcl',
    keywords: [
        'var',
        'local',
        'path',
        'for_each',
        'any',
        'string',
        'number',
        'bool',
        'true',
        'false',
        'null',
        'if ',
        'else ',
        'endif ',
        'for ',
        'in',
        'endfor'
    ],
    operators: [
        '=',
        '>=',
        '<=',
        '==',
        '!=',
        '+',
        '-',
        '*',
        '/',
        '%',
        '&&',
        '||',
        '!',
        '<',
        '>',
        '?',
        '...',
        ':'
    ],
    symbols: /[=><!~?:&|+\-*\/\^%]+/,
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    terraformFunctions: /(abs|ceil|floor|log|max|min|pow|signum|chomp|format|formatlist|indent|join|lower|regex|regexall|replace|split|strrev|substr|title|trimspace|upper|chunklist|coalesce|coalescelist|compact|concat|contains|distinct|element|flatten|index|keys|length|list|lookup|map|matchkeys|merge|range|reverse|setintersection|setproduct|setunion|slice|sort|transpose|values|zipmap|base64decode|base64encode|base64gzip|csvdecode|jsondecode|jsonencode|urlencode|yamldecode|yamlencode|abspath|dirname|pathexpand|basename|file|fileexists|fileset|filebase64|templatefile|formatdate|timeadd|timestamp|base64sha256|base64sha512|bcrypt|filebase64sha256|filebase64sha512|filemd5|filemd1|filesha256|filesha512|md5|rsadecrypt|sha1|sha256|sha512|uuid|uuidv5|cidrhost|cidrnetmask|cidrsubnet|tobool|tolist|tomap|tonumber|toset|tostring)/,
    terraformMainBlocks: /(module|data|terraform|resource|provider|variable|output|locals)/,
    tokenizer: {
        root: [
            // highlight main blocks
            [
                /^@terraformMainBlocks([ \t]*)([\w-]+|"[\w-]+"|)([ \t]*)([\w-]+|"[\w-]+"|)([ \t]*)(\{)/,
                ['type', '', 'string', '', 'string', '', '@brackets']
            ],
            // highlight all the remaining blocks
            [
                /(\w+[ \t]+)([ \t]*)([\w-]+|"[\w-]+"|)([ \t]*)([\w-]+|"[\w-]+"|)([ \t]*)(\{)/,
                ['identifier', '', 'string', '', 'string', '', '@brackets']
            ],
            // highlight block
            [
                /(\w+[ \t]+)([ \t]*)([\w-]+|"[\w-]+"|)([ \t]*)([\w-]+|"[\w-]+"|)(=)(\{)/,
                ['identifier', '', 'string', '', 'operator', '', '@brackets']
            ],
            // terraform general highlight - shared with expressions
            { include: '@terraform' }
        ],
        terraform: [
            // highlight terraform functions
            [/@terraformFunctions(\()/, ['type', '@brackets']],
            // all other words are variables or keywords
            [
                /[a-zA-Z_]\w*-*/,
                {
                    cases: {
                        '@keywords': { token: 'keyword.$0' },
                        '@default': 'variable'
                    }
                }
            ],
            { include: '@whitespace' },
            { include: '@heredoc' },
            // delimiters and operators
            [/[{}()\[\]]/, '@brackets'],
            [/[<>](?!@symbols)/, '@brackets'],
            [
                /@symbols/,
                {
                    cases: {
                        '@operators': 'operator',
                        '@default': ''
                    }
                }
            ],
            // numbers
            [/\d*\d+[eE]([\-+]?\d+)?/, 'number.float'],
            [/\d*\.\d+([eE][\-+]?\d+)?/, 'number.float'],
            [/\d[\d']*/, 'number'],
            [/\d/, 'number'],
            [/[;,.]/, 'delimiter'],
            // strings
            [/"/, 'string', '@string'],
            [/'/, 'invalid']
        ],
        heredoc: [
            [
                /<<[-]*\s*["]?([\w\-]+)["]?/,
                { token: 'string.heredoc.delimiter', next: '@heredocBody.$1' }
            ]
        ],
        heredocBody: [
            [
                /^([\w\-]+)$/,
                {
                    cases: {
                        '$1==$S2': [
                            {
                                token: 'string.heredoc.delimiter',
                                next: '@popall'
                            }
                        ],
                        '@default': 'string.heredoc'
                    }
                }
            ],
            [/./, 'string.heredoc']
        ],
        whitespace: [
            [/[ \t\r\n]+/, ''],
            [/\/\*/, 'comment', '@comment'],
            [/\/\/.*$/, 'comment'],
            [/#.*$/, 'comment']
        ],
        comment: [
            [/[^\/*]+/, 'comment'],
            [/\*\//, 'comment', '@pop'],
            [/[\/*]/, 'comment']
        ],
        string: [
            [/\$\{/, { token: 'delimiter', next: '@stringExpression' }],
            [/[^\\"\$]+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/\\./, 'string.escape.invalid'],
            [/"/, 'string', '@popall']
        ],
        stringInsideExpression: [
            [/[^\\"]+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/\\./, 'string.escape.invalid'],
            [/"/, 'string', '@pop']
        ],
        stringExpression: [
            [/\}/, { token: 'delimiter', next: '@pop' }],
            [/"/, 'string', '@stringInsideExpression'],
            { include: '@terraform' }
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL2hjbC9oY2wuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxXQUFXLEtBQUs7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsWUFBWSxHQUFHO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUyxTQUFTLFlBQVksR0FBRztBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTO0FBQ1Q7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLElBQUksY0FBYyxFQUFFLGNBQWMsRUFBRTtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxR0FBcUc7QUFDckc7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRkFBMkY7QUFDM0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRkFBc0Y7QUFDdEY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxzQkFBc0I7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHlCQUF5QjtBQUN0QyxhQUFhLHNCQUFzQjtBQUNuQztBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsSUFBSSxnREFBZ0Q7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLElBQUksbUNBQW1DO0FBQ3ZEO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSIsImZpbGUiOiIyMy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmV4cG9ydCB2YXIgY29uZiA9IHtcbiAgICBjb21tZW50czoge1xuICAgICAgICBsaW5lQ29tbWVudDogJy8vJyxcbiAgICAgICAgYmxvY2tDb21tZW50OiBbJy8qJywgJyovJ11cbiAgICB9LFxuICAgIGJyYWNrZXRzOiBbXG4gICAgICAgIFsneycsICd9J10sXG4gICAgICAgIFsnWycsICddJ10sXG4gICAgICAgIFsnKCcsICcpJ11cbiAgICBdLFxuICAgIGF1dG9DbG9zaW5nUGFpcnM6IFtcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJywgbm90SW46IFsnc3RyaW5nJ10gfVxuICAgIF0sXG4gICAgc3Vycm91bmRpbmdQYWlyczogW1xuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH1cbiAgICBdXG59O1xuZXhwb3J0IHZhciBsYW5ndWFnZSA9IHtcbiAgICBkZWZhdWx0VG9rZW46ICcnLFxuICAgIHRva2VuUG9zdGZpeDogJy5oY2wnLFxuICAgIGtleXdvcmRzOiBbXG4gICAgICAgICd2YXInLFxuICAgICAgICAnbG9jYWwnLFxuICAgICAgICAncGF0aCcsXG4gICAgICAgICdmb3JfZWFjaCcsXG4gICAgICAgICdhbnknLFxuICAgICAgICAnc3RyaW5nJyxcbiAgICAgICAgJ251bWJlcicsXG4gICAgICAgICdib29sJyxcbiAgICAgICAgJ3RydWUnLFxuICAgICAgICAnZmFsc2UnLFxuICAgICAgICAnbnVsbCcsXG4gICAgICAgICdpZiAnLFxuICAgICAgICAnZWxzZSAnLFxuICAgICAgICAnZW5kaWYgJyxcbiAgICAgICAgJ2ZvciAnLFxuICAgICAgICAnaW4nLFxuICAgICAgICAnZW5kZm9yJ1xuICAgIF0sXG4gICAgb3BlcmF0b3JzOiBbXG4gICAgICAgICc9JyxcbiAgICAgICAgJz49JyxcbiAgICAgICAgJzw9JyxcbiAgICAgICAgJz09JyxcbiAgICAgICAgJyE9JyxcbiAgICAgICAgJysnLFxuICAgICAgICAnLScsXG4gICAgICAgICcqJyxcbiAgICAgICAgJy8nLFxuICAgICAgICAnJScsXG4gICAgICAgICcmJicsXG4gICAgICAgICd8fCcsXG4gICAgICAgICchJyxcbiAgICAgICAgJzwnLFxuICAgICAgICAnPicsXG4gICAgICAgICc/JyxcbiAgICAgICAgJy4uLicsXG4gICAgICAgICc6J1xuICAgIF0sXG4gICAgc3ltYm9sczogL1s9Pjwhfj86JnwrXFwtKlxcL1xcXiVdKy8sXG4gICAgZXNjYXBlczogL1xcXFwoPzpbYWJmbnJ0dlxcXFxcIiddfHhbMC05QS1GYS1mXXsxLDR9fHVbMC05QS1GYS1mXXs0fXxVWzAtOUEtRmEtZl17OH0pLyxcbiAgICB0ZXJyYWZvcm1GdW5jdGlvbnM6IC8oYWJzfGNlaWx8Zmxvb3J8bG9nfG1heHxtaW58cG93fHNpZ251bXxjaG9tcHxmb3JtYXR8Zm9ybWF0bGlzdHxpbmRlbnR8am9pbnxsb3dlcnxyZWdleHxyZWdleGFsbHxyZXBsYWNlfHNwbGl0fHN0cnJldnxzdWJzdHJ8dGl0bGV8dHJpbXNwYWNlfHVwcGVyfGNodW5rbGlzdHxjb2FsZXNjZXxjb2FsZXNjZWxpc3R8Y29tcGFjdHxjb25jYXR8Y29udGFpbnN8ZGlzdGluY3R8ZWxlbWVudHxmbGF0dGVufGluZGV4fGtleXN8bGVuZ3RofGxpc3R8bG9va3VwfG1hcHxtYXRjaGtleXN8bWVyZ2V8cmFuZ2V8cmV2ZXJzZXxzZXRpbnRlcnNlY3Rpb258c2V0cHJvZHVjdHxzZXR1bmlvbnxzbGljZXxzb3J0fHRyYW5zcG9zZXx2YWx1ZXN8emlwbWFwfGJhc2U2NGRlY29kZXxiYXNlNjRlbmNvZGV8YmFzZTY0Z3ppcHxjc3ZkZWNvZGV8anNvbmRlY29kZXxqc29uZW5jb2RlfHVybGVuY29kZXx5YW1sZGVjb2RlfHlhbWxlbmNvZGV8YWJzcGF0aHxkaXJuYW1lfHBhdGhleHBhbmR8YmFzZW5hbWV8ZmlsZXxmaWxlZXhpc3RzfGZpbGVzZXR8ZmlsZWJhc2U2NHx0ZW1wbGF0ZWZpbGV8Zm9ybWF0ZGF0ZXx0aW1lYWRkfHRpbWVzdGFtcHxiYXNlNjRzaGEyNTZ8YmFzZTY0c2hhNTEyfGJjcnlwdHxmaWxlYmFzZTY0c2hhMjU2fGZpbGViYXNlNjRzaGE1MTJ8ZmlsZW1kNXxmaWxlbWQxfGZpbGVzaGEyNTZ8ZmlsZXNoYTUxMnxtZDV8cnNhZGVjcnlwdHxzaGExfHNoYTI1NnxzaGE1MTJ8dXVpZHx1dWlkdjV8Y2lkcmhvc3R8Y2lkcm5ldG1hc2t8Y2lkcnN1Ym5ldHx0b2Jvb2x8dG9saXN0fHRvbWFwfHRvbnVtYmVyfHRvc2V0fHRvc3RyaW5nKS8sXG4gICAgdGVycmFmb3JtTWFpbkJsb2NrczogLyhtb2R1bGV8ZGF0YXx0ZXJyYWZvcm18cmVzb3VyY2V8cHJvdmlkZXJ8dmFyaWFibGV8b3V0cHV0fGxvY2FscykvLFxuICAgIHRva2VuaXplcjoge1xuICAgICAgICByb290OiBbXG4gICAgICAgICAgICAvLyBoaWdobGlnaHQgbWFpbiBibG9ja3NcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvXkB0ZXJyYWZvcm1NYWluQmxvY2tzKFsgXFx0XSopKFtcXHctXSt8XCJbXFx3LV0rXCJ8KShbIFxcdF0qKShbXFx3LV0rfFwiW1xcdy1dK1wifCkoWyBcXHRdKikoXFx7KS8sXG4gICAgICAgICAgICAgICAgWyd0eXBlJywgJycsICdzdHJpbmcnLCAnJywgJ3N0cmluZycsICcnLCAnQGJyYWNrZXRzJ11cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAvLyBoaWdobGlnaHQgYWxsIHRoZSByZW1haW5pbmcgYmxvY2tzXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLyhcXHcrWyBcXHRdKykoWyBcXHRdKikoW1xcdy1dK3xcIltcXHctXStcInwpKFsgXFx0XSopKFtcXHctXSt8XCJbXFx3LV0rXCJ8KShbIFxcdF0qKShcXHspLyxcbiAgICAgICAgICAgICAgICBbJ2lkZW50aWZpZXInLCAnJywgJ3N0cmluZycsICcnLCAnc3RyaW5nJywgJycsICdAYnJhY2tldHMnXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIC8vIGhpZ2hsaWdodCBibG9ja1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC8oXFx3K1sgXFx0XSspKFsgXFx0XSopKFtcXHctXSt8XCJbXFx3LV0rXCJ8KShbIFxcdF0qKShbXFx3LV0rfFwiW1xcdy1dK1wifCkoPSkoXFx7KS8sXG4gICAgICAgICAgICAgICAgWydpZGVudGlmaWVyJywgJycsICdzdHJpbmcnLCAnJywgJ29wZXJhdG9yJywgJycsICdAYnJhY2tldHMnXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIC8vIHRlcnJhZm9ybSBnZW5lcmFsIGhpZ2hsaWdodCAtIHNoYXJlZCB3aXRoIGV4cHJlc3Npb25zXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAdGVycmFmb3JtJyB9XG4gICAgICAgIF0sXG4gICAgICAgIHRlcnJhZm9ybTogW1xuICAgICAgICAgICAgLy8gaGlnaGxpZ2h0IHRlcnJhZm9ybSBmdW5jdGlvbnNcbiAgICAgICAgICAgIFsvQHRlcnJhZm9ybUZ1bmN0aW9ucyhcXCgpLywgWyd0eXBlJywgJ0BicmFja2V0cyddXSxcbiAgICAgICAgICAgIC8vIGFsbCBvdGhlciB3b3JkcyBhcmUgdmFyaWFibGVzIG9yIGtleXdvcmRzXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL1thLXpBLVpfXVxcdyotKi8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0BrZXl3b3Jkcyc6IHsgdG9rZW46ICdrZXl3b3JkLiQwJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ3ZhcmlhYmxlJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B3aGl0ZXNwYWNlJyB9LFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGhlcmVkb2MnIH0sXG4gICAgICAgICAgICAvLyBkZWxpbWl0ZXJzIGFuZCBvcGVyYXRvcnNcbiAgICAgICAgICAgIFsvW3t9KClcXFtcXF1dLywgJ0BicmFja2V0cyddLFxuICAgICAgICAgICAgWy9bPD5dKD8hQHN5bWJvbHMpLywgJ0BicmFja2V0cyddLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9Ac3ltYm9scy8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0BvcGVyYXRvcnMnOiAnb3BlcmF0b3InLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAvLyBudW1iZXJzXG4gICAgICAgICAgICBbL1xcZCpcXGQrW2VFXShbXFwtK10/XFxkKyk/LywgJ251bWJlci5mbG9hdCddLFxuICAgICAgICAgICAgWy9cXGQqXFwuXFxkKyhbZUVdW1xcLStdP1xcZCspPy8sICdudW1iZXIuZmxvYXQnXSxcbiAgICAgICAgICAgIFsvXFxkW1xcZCddKi8sICdudW1iZXInXSxcbiAgICAgICAgICAgIFsvXFxkLywgJ251bWJlciddLFxuICAgICAgICAgICAgWy9bOywuXS8sICdkZWxpbWl0ZXInXSxcbiAgICAgICAgICAgIC8vIHN0cmluZ3NcbiAgICAgICAgICAgIFsvXCIvLCAnc3RyaW5nJywgJ0BzdHJpbmcnXSxcbiAgICAgICAgICAgIFsvJy8sICdpbnZhbGlkJ11cbiAgICAgICAgXSxcbiAgICAgICAgaGVyZWRvYzogW1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC88PFstXSpcXHMqW1wiXT8oW1xcd1xcLV0rKVtcIl0/LyxcbiAgICAgICAgICAgICAgICB7IHRva2VuOiAnc3RyaW5nLmhlcmVkb2MuZGVsaW1pdGVyJywgbmV4dDogJ0BoZXJlZG9jQm9keS4kMScgfVxuICAgICAgICAgICAgXVxuICAgICAgICBdLFxuICAgICAgICBoZXJlZG9jQm9keTogW1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9eKFtcXHdcXC1dKykkLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnJDE9PSRTMic6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuOiAnc3RyaW5nLmhlcmVkb2MuZGVsaW1pdGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dDogJ0Bwb3BhbGwnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdzdHJpbmcuaGVyZWRvYydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbLy4vLCAnc3RyaW5nLmhlcmVkb2MnXVxuICAgICAgICBdLFxuICAgICAgICB3aGl0ZXNwYWNlOiBbXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvLCAnJ10sXG4gICAgICAgICAgICBbL1xcL1xcKi8sICdjb21tZW50JywgJ0Bjb21tZW50J10sXG4gICAgICAgICAgICBbL1xcL1xcLy4qJC8sICdjb21tZW50J10sXG4gICAgICAgICAgICBbLyMuKiQvLCAnY29tbWVudCddXG4gICAgICAgIF0sXG4gICAgICAgIGNvbW1lbnQ6IFtcbiAgICAgICAgICAgIFsvW15cXC8qXSsvLCAnY29tbWVudCddLFxuICAgICAgICAgICAgWy9cXCpcXC8vLCAnY29tbWVudCcsICdAcG9wJ10sXG4gICAgICAgICAgICBbL1tcXC8qXS8sICdjb21tZW50J11cbiAgICAgICAgXSxcbiAgICAgICAgc3RyaW5nOiBbXG4gICAgICAgICAgICBbL1xcJFxcey8sIHsgdG9rZW46ICdkZWxpbWl0ZXInLCBuZXh0OiAnQHN0cmluZ0V4cHJlc3Npb24nIH1dLFxuICAgICAgICAgICAgWy9bXlxcXFxcIlxcJF0rLywgJ3N0cmluZyddLFxuICAgICAgICAgICAgWy9AZXNjYXBlcy8sICdzdHJpbmcuZXNjYXBlJ10sXG4gICAgICAgICAgICBbL1xcXFwuLywgJ3N0cmluZy5lc2NhcGUuaW52YWxpZCddLFxuICAgICAgICAgICAgWy9cIi8sICdzdHJpbmcnLCAnQHBvcGFsbCddXG4gICAgICAgIF0sXG4gICAgICAgIHN0cmluZ0luc2lkZUV4cHJlc3Npb246IFtcbiAgICAgICAgICAgIFsvW15cXFxcXCJdKy8sICdzdHJpbmcnXSxcbiAgICAgICAgICAgIFsvQGVzY2FwZXMvLCAnc3RyaW5nLmVzY2FwZSddLFxuICAgICAgICAgICAgWy9cXFxcLi8sICdzdHJpbmcuZXNjYXBlLmludmFsaWQnXSxcbiAgICAgICAgICAgIFsvXCIvLCAnc3RyaW5nJywgJ0Bwb3AnXVxuICAgICAgICBdLFxuICAgICAgICBzdHJpbmdFeHByZXNzaW9uOiBbXG4gICAgICAgICAgICBbL1xcfS8sIHsgdG9rZW46ICdkZWxpbWl0ZXInLCBuZXh0OiAnQHBvcCcgfV0sXG4gICAgICAgICAgICBbL1wiLywgJ3N0cmluZycsICdAc3RyaW5nSW5zaWRlRXhwcmVzc2lvbiddLFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHRlcnJhZm9ybScgfVxuICAgICAgICBdXG4gICAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=