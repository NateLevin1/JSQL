(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[58],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/shell/shell.js":
/*!**************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/shell/shell.js ***!
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
        { open: '"', close: '"' },
        { open: "'", close: "'" },
        { open: '`', close: '`' }
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
        { open: "'", close: "'" },
        { open: '`', close: '`' }
    ]
};
var language = {
    defaultToken: '',
    ignoreCase: true,
    tokenPostfix: '.shell',
    brackets: [
        { token: 'delimiter.bracket', open: '{', close: '}' },
        { token: 'delimiter.parenthesis', open: '(', close: ')' },
        { token: 'delimiter.square', open: '[', close: ']' }
    ],
    keywords: [
        'if',
        'then',
        'do',
        'else',
        'elif',
        'while',
        'until',
        'for',
        'in',
        'esac',
        'fi',
        'fin',
        'fil',
        'done',
        'exit',
        'set',
        'unset',
        'export',
        'function'
    ],
    builtins: [
        'ab',
        'awk',
        'bash',
        'beep',
        'cat',
        'cc',
        'cd',
        'chown',
        'chmod',
        'chroot',
        'clear',
        'cp',
        'curl',
        'cut',
        'diff',
        'echo',
        'find',
        'gawk',
        'gcc',
        'get',
        'git',
        'grep',
        'hg',
        'kill',
        'killall',
        'ln',
        'ls',
        'make',
        'mkdir',
        'openssl',
        'mv',
        'nc',
        'node',
        'npm',
        'ping',
        'ps',
        'restart',
        'rm',
        'rmdir',
        'sed',
        'service',
        'sh',
        'shopt',
        'shred',
        'source',
        'sort',
        'sleep',
        'ssh',
        'start',
        'stop',
        'su',
        'sudo',
        'svn',
        'tee',
        'telnet',
        'top',
        'touch',
        'vi',
        'vim',
        'wall',
        'wc',
        'wget',
        'who',
        'write',
        'yes',
        'zsh'
    ],
    // we include these common regular expressions
    symbols: /[=><!~?&|+\-*\/\^;\.,]+/,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            { include: '@whitespace' },
            [
                /[a-zA-Z]\w*/,
                {
                    cases: {
                        '@keywords': 'keyword',
                        '@builtins': 'type.identifier',
                        '@default': ''
                    }
                }
            ],
            { include: '@strings' },
            { include: '@parameters' },
            { include: '@heredoc' },
            [/[{}\[\]()]/, '@brackets'],
            [/-+\w+/, 'attribute.name'],
            [/@symbols/, 'delimiter'],
            { include: '@numbers' },
            [/[,;]/, 'delimiter']
        ],
        whitespace: [
            [/\s+/, 'white'],
            [/(^#!.*$)/, 'metatag'],
            [/(^#.*$)/, 'comment']
        ],
        numbers: [
            [/\d*\.\d+([eE][\-+]?\d+)?/, 'number.float'],
            [/0[xX][0-9a-fA-F_]*[0-9a-fA-F]/, 'number.hex'],
            [/\d+/, 'number']
        ],
        // Recognize strings, including those broken across lines
        strings: [
            [/'/, 'string', '@stringBody'],
            [/"/, 'string', '@dblStringBody']
        ],
        stringBody: [
            [/'/, 'string', '@popall'],
            [/./, 'string']
        ],
        dblStringBody: [
            [/"/, 'string', '@popall'],
            [/./, 'string']
        ],
        heredoc: [
            [
                /(<<[-<]?)(\s*)(['"`]?)([\w\-]+)(['"`]?)/,
                [
                    'constants',
                    'white',
                    'string.heredoc.delimiter',
                    'string.heredoc',
                    'string.heredoc.delimiter'
                ]
            ]
        ],
        parameters: [
            [/\$\d+/, 'variable.predefined'],
            [/\$\w+/, 'variable'],
            [/\$[*@#?\-$!0_]/, 'variable'],
            [/\$'/, 'variable', '@parameterBodyQuote'],
            [/\$"/, 'variable', '@parameterBodyDoubleQuote'],
            [/\$\(/, 'variable', '@parameterBodyParen'],
            [/\$\{/, 'variable', '@parameterBodyCurlyBrace']
        ],
        parameterBodyQuote: [
            [/[^#:%*@\-!_']+/, 'variable'],
            [/[#:%*@\-!_]/, 'delimiter'],
            [/[']/, 'variable', '@pop']
        ],
        parameterBodyDoubleQuote: [
            [/[^#:%*@\-!_"]+/, 'variable'],
            [/[#:%*@\-!_]/, 'delimiter'],
            [/["]/, 'variable', '@pop']
        ],
        parameterBodyParen: [
            [/[^#:%*@\-!_)]+/, 'variable'],
            [/[#:%*@\-!_]/, 'delimiter'],
            [/[)]/, 'variable', '@pop']
        ],
        parameterBodyCurlyBrace: [
            [/[^#:%*@\-!_}]+/, 'variable'],
            [/[#:%*@\-!_]/, 'delimiter'],
            [/[}]/, 'variable', '@pop']
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL3NoZWxsL3NoZWxsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLFdBQVcsS0FBSztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxZQUFZLEdBQUc7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTLFNBQVMsWUFBWSxHQUFHO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVM7QUFDVDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMscUNBQXFDLFlBQVksR0FBRztBQUM3RCxTQUFTLHdEQUF3RDtBQUNqRSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsYUFBYSx5QkFBeUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHNCQUFzQjtBQUNuQyxhQUFhLHlCQUF5QjtBQUN0QyxhQUFhLHNCQUFzQjtBQUNuQyxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGFBQWEsc0JBQXNCO0FBQ25DLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQSIsImZpbGUiOiI1OC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmV4cG9ydCB2YXIgY29uZiA9IHtcbiAgICBjb21tZW50czoge1xuICAgICAgICBsaW5lQ29tbWVudDogJyMnXG4gICAgfSxcbiAgICBicmFja2V0czogW1xuICAgICAgICBbJ3snLCAnfSddLFxuICAgICAgICBbJ1snLCAnXSddLFxuICAgICAgICBbJygnLCAnKSddXG4gICAgXSxcbiAgICBhdXRvQ2xvc2luZ1BhaXJzOiBbXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfSxcbiAgICAgICAgeyBvcGVuOiBcIidcIiwgY2xvc2U6IFwiJ1wiIH0sXG4gICAgICAgIHsgb3BlbjogJ2AnLCBjbG9zZTogJ2AnIH1cbiAgICBdLFxuICAgIHN1cnJvdW5kaW5nUGFpcnM6IFtcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9LFxuICAgICAgICB7IG9wZW46IFwiJ1wiLCBjbG9zZTogXCInXCIgfSxcbiAgICAgICAgeyBvcGVuOiAnYCcsIGNsb3NlOiAnYCcgfVxuICAgIF1cbn07XG5leHBvcnQgdmFyIGxhbmd1YWdlID0ge1xuICAgIGRlZmF1bHRUb2tlbjogJycsXG4gICAgaWdub3JlQ2FzZTogdHJ1ZSxcbiAgICB0b2tlblBvc3RmaXg6ICcuc2hlbGwnLFxuICAgIGJyYWNrZXRzOiBbXG4gICAgICAgIHsgdG9rZW46ICdkZWxpbWl0ZXIuYnJhY2tldCcsIG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxuICAgICAgICB7IHRva2VuOiAnZGVsaW1pdGVyLnBhcmVudGhlc2lzJywgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXG4gICAgICAgIHsgdG9rZW46ICdkZWxpbWl0ZXIuc3F1YXJlJywgb3BlbjogJ1snLCBjbG9zZTogJ10nIH1cbiAgICBdLFxuICAgIGtleXdvcmRzOiBbXG4gICAgICAgICdpZicsXG4gICAgICAgICd0aGVuJyxcbiAgICAgICAgJ2RvJyxcbiAgICAgICAgJ2Vsc2UnLFxuICAgICAgICAnZWxpZicsXG4gICAgICAgICd3aGlsZScsXG4gICAgICAgICd1bnRpbCcsXG4gICAgICAgICdmb3InLFxuICAgICAgICAnaW4nLFxuICAgICAgICAnZXNhYycsXG4gICAgICAgICdmaScsXG4gICAgICAgICdmaW4nLFxuICAgICAgICAnZmlsJyxcbiAgICAgICAgJ2RvbmUnLFxuICAgICAgICAnZXhpdCcsXG4gICAgICAgICdzZXQnLFxuICAgICAgICAndW5zZXQnLFxuICAgICAgICAnZXhwb3J0JyxcbiAgICAgICAgJ2Z1bmN0aW9uJ1xuICAgIF0sXG4gICAgYnVpbHRpbnM6IFtcbiAgICAgICAgJ2FiJyxcbiAgICAgICAgJ2F3aycsXG4gICAgICAgICdiYXNoJyxcbiAgICAgICAgJ2JlZXAnLFxuICAgICAgICAnY2F0JyxcbiAgICAgICAgJ2NjJyxcbiAgICAgICAgJ2NkJyxcbiAgICAgICAgJ2Nob3duJyxcbiAgICAgICAgJ2NobW9kJyxcbiAgICAgICAgJ2Nocm9vdCcsXG4gICAgICAgICdjbGVhcicsXG4gICAgICAgICdjcCcsXG4gICAgICAgICdjdXJsJyxcbiAgICAgICAgJ2N1dCcsXG4gICAgICAgICdkaWZmJyxcbiAgICAgICAgJ2VjaG8nLFxuICAgICAgICAnZmluZCcsXG4gICAgICAgICdnYXdrJyxcbiAgICAgICAgJ2djYycsXG4gICAgICAgICdnZXQnLFxuICAgICAgICAnZ2l0JyxcbiAgICAgICAgJ2dyZXAnLFxuICAgICAgICAnaGcnLFxuICAgICAgICAna2lsbCcsXG4gICAgICAgICdraWxsYWxsJyxcbiAgICAgICAgJ2xuJyxcbiAgICAgICAgJ2xzJyxcbiAgICAgICAgJ21ha2UnLFxuICAgICAgICAnbWtkaXInLFxuICAgICAgICAnb3BlbnNzbCcsXG4gICAgICAgICdtdicsXG4gICAgICAgICduYycsXG4gICAgICAgICdub2RlJyxcbiAgICAgICAgJ25wbScsXG4gICAgICAgICdwaW5nJyxcbiAgICAgICAgJ3BzJyxcbiAgICAgICAgJ3Jlc3RhcnQnLFxuICAgICAgICAncm0nLFxuICAgICAgICAncm1kaXInLFxuICAgICAgICAnc2VkJyxcbiAgICAgICAgJ3NlcnZpY2UnLFxuICAgICAgICAnc2gnLFxuICAgICAgICAnc2hvcHQnLFxuICAgICAgICAnc2hyZWQnLFxuICAgICAgICAnc291cmNlJyxcbiAgICAgICAgJ3NvcnQnLFxuICAgICAgICAnc2xlZXAnLFxuICAgICAgICAnc3NoJyxcbiAgICAgICAgJ3N0YXJ0JyxcbiAgICAgICAgJ3N0b3AnLFxuICAgICAgICAnc3UnLFxuICAgICAgICAnc3VkbycsXG4gICAgICAgICdzdm4nLFxuICAgICAgICAndGVlJyxcbiAgICAgICAgJ3RlbG5ldCcsXG4gICAgICAgICd0b3AnLFxuICAgICAgICAndG91Y2gnLFxuICAgICAgICAndmknLFxuICAgICAgICAndmltJyxcbiAgICAgICAgJ3dhbGwnLFxuICAgICAgICAnd2MnLFxuICAgICAgICAnd2dldCcsXG4gICAgICAgICd3aG8nLFxuICAgICAgICAnd3JpdGUnLFxuICAgICAgICAneWVzJyxcbiAgICAgICAgJ3pzaCdcbiAgICBdLFxuICAgIC8vIHdlIGluY2x1ZGUgdGhlc2UgY29tbW9uIHJlZ3VsYXIgZXhwcmVzc2lvbnNcbiAgICBzeW1ib2xzOiAvWz0+PCF+PyZ8K1xcLSpcXC9cXF47XFwuLF0rLyxcbiAgICAvLyBUaGUgbWFpbiB0b2tlbml6ZXIgZm9yIG91ciBsYW5ndWFnZXNcbiAgICB0b2tlbml6ZXI6IHtcbiAgICAgICAgcm9vdDogW1xuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHdoaXRlc3BhY2UnIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL1thLXpBLVpdXFx3Ki8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0BrZXl3b3Jkcyc6ICdrZXl3b3JkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAYnVpbHRpbnMnOiAndHlwZS5pZGVudGlmaWVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHN0cmluZ3MnIH0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAcGFyYW1ldGVycycgfSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BoZXJlZG9jJyB9LFxuICAgICAgICAgICAgWy9be31cXFtcXF0oKV0vLCAnQGJyYWNrZXRzJ10sXG4gICAgICAgICAgICBbLy0rXFx3Ky8sICdhdHRyaWJ1dGUubmFtZSddLFxuICAgICAgICAgICAgWy9Ac3ltYm9scy8sICdkZWxpbWl0ZXInXSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BudW1iZXJzJyB9LFxuICAgICAgICAgICAgWy9bLDtdLywgJ2RlbGltaXRlciddXG4gICAgICAgIF0sXG4gICAgICAgIHdoaXRlc3BhY2U6IFtcbiAgICAgICAgICAgIFsvXFxzKy8sICd3aGl0ZSddLFxuICAgICAgICAgICAgWy8oXiMhLiokKS8sICdtZXRhdGFnJ10sXG4gICAgICAgICAgICBbLyheIy4qJCkvLCAnY29tbWVudCddXG4gICAgICAgIF0sXG4gICAgICAgIG51bWJlcnM6IFtcbiAgICAgICAgICAgIFsvXFxkKlxcLlxcZCsoW2VFXVtcXC0rXT9cXGQrKT8vLCAnbnVtYmVyLmZsb2F0J10sXG4gICAgICAgICAgICBbLzBbeFhdWzAtOWEtZkEtRl9dKlswLTlhLWZBLUZdLywgJ251bWJlci5oZXgnXSxcbiAgICAgICAgICAgIFsvXFxkKy8sICdudW1iZXInXVxuICAgICAgICBdLFxuICAgICAgICAvLyBSZWNvZ25pemUgc3RyaW5ncywgaW5jbHVkaW5nIHRob3NlIGJyb2tlbiBhY3Jvc3MgbGluZXNcbiAgICAgICAgc3RyaW5nczogW1xuICAgICAgICAgICAgWy8nLywgJ3N0cmluZycsICdAc3RyaW5nQm9keSddLFxuICAgICAgICAgICAgWy9cIi8sICdzdHJpbmcnLCAnQGRibFN0cmluZ0JvZHknXVxuICAgICAgICBdLFxuICAgICAgICBzdHJpbmdCb2R5OiBbXG4gICAgICAgICAgICBbLycvLCAnc3RyaW5nJywgJ0Bwb3BhbGwnXSxcbiAgICAgICAgICAgIFsvLi8sICdzdHJpbmcnXVxuICAgICAgICBdLFxuICAgICAgICBkYmxTdHJpbmdCb2R5OiBbXG4gICAgICAgICAgICBbL1wiLywgJ3N0cmluZycsICdAcG9wYWxsJ10sXG4gICAgICAgICAgICBbLy4vLCAnc3RyaW5nJ11cbiAgICAgICAgXSxcbiAgICAgICAgaGVyZWRvYzogW1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC8oPDxbLTxdPykoXFxzKikoWydcImBdPykoW1xcd1xcLV0rKShbJ1wiYF0/KS8sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAnY29uc3RhbnRzJyxcbiAgICAgICAgICAgICAgICAgICAgJ3doaXRlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3N0cmluZy5oZXJlZG9jLmRlbGltaXRlcicsXG4gICAgICAgICAgICAgICAgICAgICdzdHJpbmcuaGVyZWRvYycsXG4gICAgICAgICAgICAgICAgICAgICdzdHJpbmcuaGVyZWRvYy5kZWxpbWl0ZXInXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXVxuICAgICAgICBdLFxuICAgICAgICBwYXJhbWV0ZXJzOiBbXG4gICAgICAgICAgICBbL1xcJFxcZCsvLCAndmFyaWFibGUucHJlZGVmaW5lZCddLFxuICAgICAgICAgICAgWy9cXCRcXHcrLywgJ3ZhcmlhYmxlJ10sXG4gICAgICAgICAgICBbL1xcJFsqQCM/XFwtJCEwX10vLCAndmFyaWFibGUnXSxcbiAgICAgICAgICAgIFsvXFwkJy8sICd2YXJpYWJsZScsICdAcGFyYW1ldGVyQm9keVF1b3RlJ10sXG4gICAgICAgICAgICBbL1xcJFwiLywgJ3ZhcmlhYmxlJywgJ0BwYXJhbWV0ZXJCb2R5RG91YmxlUXVvdGUnXSxcbiAgICAgICAgICAgIFsvXFwkXFwoLywgJ3ZhcmlhYmxlJywgJ0BwYXJhbWV0ZXJCb2R5UGFyZW4nXSxcbiAgICAgICAgICAgIFsvXFwkXFx7LywgJ3ZhcmlhYmxlJywgJ0BwYXJhbWV0ZXJCb2R5Q3VybHlCcmFjZSddXG4gICAgICAgIF0sXG4gICAgICAgIHBhcmFtZXRlckJvZHlRdW90ZTogW1xuICAgICAgICAgICAgWy9bXiM6JSpAXFwtIV8nXSsvLCAndmFyaWFibGUnXSxcbiAgICAgICAgICAgIFsvWyM6JSpAXFwtIV9dLywgJ2RlbGltaXRlciddLFxuICAgICAgICAgICAgWy9bJ10vLCAndmFyaWFibGUnLCAnQHBvcCddXG4gICAgICAgIF0sXG4gICAgICAgIHBhcmFtZXRlckJvZHlEb3VibGVRdW90ZTogW1xuICAgICAgICAgICAgWy9bXiM6JSpAXFwtIV9cIl0rLywgJ3ZhcmlhYmxlJ10sXG4gICAgICAgICAgICBbL1sjOiUqQFxcLSFfXS8sICdkZWxpbWl0ZXInXSxcbiAgICAgICAgICAgIFsvW1wiXS8sICd2YXJpYWJsZScsICdAcG9wJ11cbiAgICAgICAgXSxcbiAgICAgICAgcGFyYW1ldGVyQm9keVBhcmVuOiBbXG4gICAgICAgICAgICBbL1teIzolKkBcXC0hXyldKy8sICd2YXJpYWJsZSddLFxuICAgICAgICAgICAgWy9bIzolKkBcXC0hX10vLCAnZGVsaW1pdGVyJ10sXG4gICAgICAgICAgICBbL1spXS8sICd2YXJpYWJsZScsICdAcG9wJ11cbiAgICAgICAgXSxcbiAgICAgICAgcGFyYW1ldGVyQm9keUN1cmx5QnJhY2U6IFtcbiAgICAgICAgICAgIFsvW14jOiUqQFxcLSFffV0rLywgJ3ZhcmlhYmxlJ10sXG4gICAgICAgICAgICBbL1sjOiUqQFxcLSFfXS8sICdkZWxpbWl0ZXInXSxcbiAgICAgICAgICAgIFsvW31dLywgJ3ZhcmlhYmxlJywgJ0Bwb3AnXVxuICAgICAgICBdXG4gICAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=