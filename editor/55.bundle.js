(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[55],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/scala/scala.js":
/*!**************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/scala/scala.js ***!
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
    /*
     * `...` is allowed as an identifier.
     * $ is allowed in identifiers.
     * unary_<op> is allowed as an identifier.
     * <name>_= is allowed as an identifier.
     */
    wordPattern: /(unary_[@~!#%^&*()\-=+\\|:<>\/?]+)|([a-zA-Z_$][\w$]*?_=)|(`[^`]+`)|([a-zA-Z_$][\w$]*)/g,
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
        { open: "'", close: "'" }
    ],
    folding: {
        markers: {
            start: new RegExp('^\\s*//\\s*(?:(?:#?region\\b)|(?:<editor-fold\\b))'),
            end: new RegExp('^\\s*//\\s*(?:(?:#?endregion\\b)|(?:</editor-fold>))')
        }
    }
};
var language = {
    tokenPostfix: '.scala',
    // We can't easily add everything from Dotty, but we can at least add some of its keywords
    keywords: [
        'asInstanceOf',
        'catch',
        'class',
        'classOf',
        'def',
        'do',
        'else',
        'extends',
        'finally',
        'for',
        'foreach',
        'forSome',
        'if',
        'import',
        'isInstanceOf',
        'macro',
        'match',
        'new',
        'object',
        'package',
        'return',
        'throw',
        'trait',
        'try',
        'type',
        'until',
        'val',
        'var',
        'while',
        'with',
        'yield',
        // Dotty-specific:
        'given',
        'enum',
        'then'
    ],
    // Dotty-specific:
    softKeywords: ['as', 'export', 'extension', 'end', 'derives', 'on'],
    constants: ['true', 'false', 'null', 'this', 'super'],
    modifiers: [
        'abstract',
        'final',
        'implicit',
        'lazy',
        'override',
        'private',
        'protected',
        'sealed'
    ],
    // Dotty-specific:
    softModifiers: ['inline', 'opaque', 'open', 'transparent', 'using'],
    name: /(?:[a-z_$][\w$]*|`[^`]+`)/,
    type: /(?:[A-Z][\w$]*)/,
    // we include these common regular expressions
    symbols: /[=><!~?:&|+\-*\/^\\%@#]+/,
    digits: /\d+(_+\d+)*/,
    hexdigits: /[[0-9a-fA-F]+(_+[0-9a-fA-F]+)*/,
    // C# style strings
    escapes: /\\(?:[btnfr\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    fstring_conv: /[bBhHsScCdoxXeEfgGaAt]|[Tn](?:[HIklMSLNpzZsQ]|[BbhAaCYyjmde]|[RTrDFC])/,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            // strings
            [/\braw"""/, { token: 'string.quote', bracket: '@open', next: '@rawstringt' }],
            [/\braw"/, { token: 'string.quote', bracket: '@open', next: '@rawstring' }],
            [/\bs"""/, { token: 'string.quote', bracket: '@open', next: '@sstringt' }],
            [/\bs"/, { token: 'string.quote', bracket: '@open', next: '@sstring' }],
            [/\bf""""/, { token: 'string.quote', bracket: '@open', next: '@fstringt' }],
            [/\bf"/, { token: 'string.quote', bracket: '@open', next: '@fstring' }],
            [/"""/, { token: 'string.quote', bracket: '@open', next: '@stringt' }],
            [/"/, { token: 'string.quote', bracket: '@open', next: '@string' }],
            // numbers
            [/(@digits)[eE]([\-+]?(@digits))?[fFdD]?/, 'number.float', '@allowMethod'],
            [/(@digits)\.(@digits)([eE][\-+]?(@digits))?[fFdD]?/, 'number.float', '@allowMethod'],
            [/0[xX](@hexdigits)[Ll]?/, 'number.hex', '@allowMethod'],
            [/(@digits)[fFdD]/, 'number.float', '@allowMethod'],
            [/(@digits)[lL]?/, 'number', '@allowMethod'],
            [/\b_\*/, 'key'],
            [/\b(_)\b/, 'keyword', '@allowMethod'],
            // identifiers and keywords
            [/\bimport\b/, 'keyword', '@import'],
            [/\b(case)([ \t]+)(class)\b/, ['keyword.modifier', 'white', 'keyword']],
            [/\bcase\b/, 'keyword', '@case'],
            [/\bva[lr]\b/, 'keyword', '@vardef'],
            [
                /\b(def)([ \t]+)((?:unary_)?@symbols|@name(?:_=)|@name)/,
                ['keyword', 'white', 'identifier']
            ],
            [/@name(?=[ \t]*:(?!:))/, 'variable'],
            [/(\.)(@name|@symbols)/, ['operator', { token: '@rematch', next: '@allowMethod' }]],
            [/([{(])(\s*)(@name(?=\s*=>))/, ['@brackets', 'white', 'variable']],
            [
                /@name/,
                {
                    cases: {
                        '@keywords': 'keyword',
                        '@softKeywords': 'keyword',
                        '@modifiers': 'keyword.modifier',
                        '@softModifiers': 'keyword.modifier',
                        '@constants': {
                            token: 'constant',
                            next: '@allowMethod'
                        },
                        '@default': {
                            token: 'identifier',
                            next: '@allowMethod'
                        }
                    }
                }
            ],
            [/@type/, 'type', '@allowMethod'],
            // whitespace
            { include: '@whitespace' },
            // @ annotations.
            [/@[a-zA-Z_$][\w$]*(?:\.[a-zA-Z_$][\w$]*)*/, 'annotation'],
            // delimiters and operators
            [/[{(]/, '@brackets'],
            [/[})]/, '@brackets', '@allowMethod'],
            [/\[/, 'operator.square'],
            [/](?!\s*(?:va[rl]|def|type)\b)/, 'operator.square', '@allowMethod'],
            [/]/, 'operator.square'],
            [/([=-]>|<-|>:|<:|:>|<%)(?=[\s\w()[\]{},\."'`])/, 'keyword'],
            [/@symbols/, 'operator'],
            // delimiter: after number because of .\d floats
            [/[;,\.]/, 'delimiter'],
            // symbols
            [/'[a-zA-Z$][\w$]*(?!')/, 'attribute.name'],
            // characters
            [/'[^\\']'/, 'string', '@allowMethod'],
            [
                /(')(@escapes)(')/,
                ['string', 'string.escape', { token: 'string', next: '@allowMethod' }]
            ],
            [/'/, 'string.invalid']
        ],
        import: [
            [/;/, 'delimiter', '@pop'],
            [/^|$/, '', '@pop'],
            [/[ \t]+/, 'white'],
            [/[\n\r]+/, 'white', '@pop'],
            [/\/\*/, 'comment', '@comment'],
            [/@name|@type/, 'type'],
            [/[(){}]/, '@brackets'],
            [/[[\]]/, 'operator.square'],
            [/[\.,]/, 'delimiter']
        ],
        allowMethod: [
            [/^|$/, '', '@pop'],
            [/[ \t]+/, 'white'],
            [/[\n\r]+/, 'white', '@pop'],
            [/\/\*/, 'comment', '@comment'],
            [/(?==>[\s\w([{])/, 'keyword', '@pop'],
            [
                /(@name|@symbols)(?=[ \t]*[[({"'`]|[ \t]+(?:[+-]?\.?\d|\w))/,
                {
                    cases: {
                        '@keywords': { token: 'keyword', next: '@pop' },
                        '->|<-|>:|<:|<%': { token: 'keyword', next: '@pop' },
                        '@default': { token: '@rematch', next: '@pop' }
                    }
                }
            ],
            ['', '', '@pop']
        ],
        comment: [
            [/[^\/*]+/, 'comment'],
            [/\/\*/, 'comment', '@push'],
            [/\*\//, 'comment', '@pop'],
            [/[\/*]/, 'comment']
        ],
        case: [
            [/\b_\*/, 'key'],
            [/\b(_|true|false|null|this|super)\b/, 'keyword', '@allowMethod'],
            [/\bif\b|=>/, 'keyword', '@pop'],
            [/`[^`]+`/, 'identifier', '@allowMethod'],
            [/@name/, 'variable', '@allowMethod'],
            [/:::?|\||@(?![a-z_$])/, 'keyword'],
            { include: '@root' }
        ],
        vardef: [
            [/\b_\*/, 'key'],
            [/\b(_|true|false|null|this|super)\b/, 'keyword'],
            [/@name/, 'variable'],
            [/:::?|\||@(?![a-z_$])/, 'keyword'],
            [/=|:(?!:)/, 'operator', '@pop'],
            [/$/, 'white', '@pop'],
            { include: '@root' }
        ],
        string: [
            [/[^\\"\n\r]+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/\\./, 'string.escape.invalid'],
            [
                /"/,
                {
                    token: 'string.quote',
                    bracket: '@close',
                    switchTo: '@allowMethod'
                }
            ]
        ],
        stringt: [
            [/[^\\"\n\r]+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/\\./, 'string.escape.invalid'],
            [/"(?=""")/, 'string'],
            [
                /"""/,
                {
                    token: 'string.quote',
                    bracket: '@close',
                    switchTo: '@allowMethod'
                }
            ],
            [/"/, 'string']
        ],
        fstring: [
            [/@escapes/, 'string.escape'],
            [
                /"/,
                {
                    token: 'string.quote',
                    bracket: '@close',
                    switchTo: '@allowMethod'
                }
            ],
            [/\$\$/, 'string'],
            [/(\$)([a-z_]\w*)/, ['operator', 'identifier']],
            [/\$\{/, 'operator', '@interp'],
            [/%%/, 'string'],
            [
                /(%)([\-#+ 0,(])(\d+|\.\d+|\d+\.\d+)(@fstring_conv)/,
                ['metatag', 'keyword.modifier', 'number', 'metatag']
            ],
            [/(%)(\d+|\.\d+|\d+\.\d+)(@fstring_conv)/, ['metatag', 'number', 'metatag']],
            [/(%)([\-#+ 0,(])(@fstring_conv)/, ['metatag', 'keyword.modifier', 'metatag']],
            [/(%)(@fstring_conv)/, ['metatag', 'metatag']],
            [/./, 'string']
        ],
        fstringt: [
            [/@escapes/, 'string.escape'],
            [/"(?=""")/, 'string'],
            [
                /"""/,
                {
                    token: 'string.quote',
                    bracket: '@close',
                    switchTo: '@allowMethod'
                }
            ],
            [/\$\$/, 'string'],
            [/(\$)([a-z_]\w*)/, ['operator', 'identifier']],
            [/\$\{/, 'operator', '@interp'],
            [/%%/, 'string'],
            [
                /(%)([\-#+ 0,(])(\d+|\.\d+|\d+\.\d+)(@fstring_conv)/,
                ['metatag', 'keyword.modifier', 'number', 'metatag']
            ],
            [/(%)(\d+|\.\d+|\d+\.\d+)(@fstring_conv)/, ['metatag', 'number', 'metatag']],
            [/(%)([\-#+ 0,(])(@fstring_conv)/, ['metatag', 'keyword.modifier', 'metatag']],
            [/(%)(@fstring_conv)/, ['metatag', 'metatag']],
            [/./, 'string']
        ],
        sstring: [
            [/@escapes/, 'string.escape'],
            [
                /"/,
                {
                    token: 'string.quote',
                    bracket: '@close',
                    switchTo: '@allowMethod'
                }
            ],
            [/\$\$/, 'string'],
            [/(\$)([a-z_]\w*)/, ['operator', 'identifier']],
            [/\$\{/, 'operator', '@interp'],
            [/./, 'string']
        ],
        sstringt: [
            [/@escapes/, 'string.escape'],
            [/"(?=""")/, 'string'],
            [
                /"""/,
                {
                    token: 'string.quote',
                    bracket: '@close',
                    switchTo: '@allowMethod'
                }
            ],
            [/\$\$/, 'string'],
            [/(\$)([a-z_]\w*)/, ['operator', 'identifier']],
            [/\$\{/, 'operator', '@interp'],
            [/./, 'string']
        ],
        interp: [[/{/, 'operator', '@push'], [/}/, 'operator', '@pop'], { include: '@root' }],
        rawstring: [
            [/[^"]/, 'string'],
            [
                /"/,
                {
                    token: 'string.quote',
                    bracket: '@close',
                    switchTo: '@allowMethod'
                }
            ]
        ],
        rawstringt: [
            [/[^"]/, 'string'],
            [/"(?=""")/, 'string'],
            [
                /"""/,
                {
                    token: 'string.quote',
                    bracket: '@close',
                    switchTo: '@allowMethod'
                }
            ],
            [/"/, 'string']
        ],
        whitespace: [
            [/[ \t\r\n]+/, 'white'],
            [/\/\*/, 'comment', '@comment'],
            [/\/\/.*$/, 'comment']
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL3NjYWxhL3NjYWxhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxXQUFXLEtBQUs7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsWUFBWSxHQUFHO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUyxTQUFTLFlBQVksR0FBRztBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsSUFBSSxjQUFjLEVBQUUsY0FBYyxFQUFFO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsK0RBQStEO0FBQ3pGLHdCQUF3Qiw4REFBOEQ7QUFDdEYsd0JBQXdCLDZEQUE2RDtBQUNyRixzQkFBc0IsNERBQTREO0FBQ2xGLHlCQUF5Qiw2REFBNkQ7QUFDdEYsc0JBQXNCLDREQUE0RDtBQUNsRixxQkFBcUIsNERBQTREO0FBQ2pGLG1CQUFtQiwyREFBMkQ7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELDBDQUEwQztBQUM3RixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHlCQUF5QjtBQUN0QztBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2Qyx3Q0FBd0M7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQSxzQ0FBc0MsaUNBQWlDO0FBQ3ZFLDJDQUEyQyxpQ0FBaUM7QUFDNUUscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEIseUJBQXlCLG1CQUFtQjtBQUM1RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiI1NS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmV4cG9ydCB2YXIgY29uZiA9IHtcbiAgICAvKlxuICAgICAqIGAuLi5gIGlzIGFsbG93ZWQgYXMgYW4gaWRlbnRpZmllci5cbiAgICAgKiAkIGlzIGFsbG93ZWQgaW4gaWRlbnRpZmllcnMuXG4gICAgICogdW5hcnlfPG9wPiBpcyBhbGxvd2VkIGFzIGFuIGlkZW50aWZpZXIuXG4gICAgICogPG5hbWU+Xz0gaXMgYWxsb3dlZCBhcyBhbiBpZGVudGlmaWVyLlxuICAgICAqL1xuICAgIHdvcmRQYXR0ZXJuOiAvKHVuYXJ5X1tAfiEjJV4mKigpXFwtPStcXFxcfDo8PlxcLz9dKyl8KFthLXpBLVpfJF1bXFx3JF0qP189KXwoYFteYF0rYCl8KFthLXpBLVpfJF1bXFx3JF0qKS9nLFxuICAgIGNvbW1lbnRzOiB7XG4gICAgICAgIGxpbmVDb21tZW50OiAnLy8nLFxuICAgICAgICBibG9ja0NvbW1lbnQ6IFsnLyonLCAnKi8nXVxuICAgIH0sXG4gICAgYnJhY2tldHM6IFtcbiAgICAgICAgWyd7JywgJ30nXSxcbiAgICAgICAgWydbJywgJ10nXSxcbiAgICAgICAgWycoJywgJyknXVxuICAgIF0sXG4gICAgYXV0b0Nsb3NpbmdQYWlyczogW1xuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH0sXG4gICAgICAgIHsgb3BlbjogXCInXCIsIGNsb3NlOiBcIidcIiB9XG4gICAgXSxcbiAgICBzdXJyb3VuZGluZ1BhaXJzOiBbXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfSxcbiAgICAgICAgeyBvcGVuOiBcIidcIiwgY2xvc2U6IFwiJ1wiIH1cbiAgICBdLFxuICAgIGZvbGRpbmc6IHtcbiAgICAgICAgbWFya2Vyczoge1xuICAgICAgICAgICAgc3RhcnQ6IG5ldyBSZWdFeHAoJ15cXFxccyovL1xcXFxzKig/Oig/OiM/cmVnaW9uXFxcXGIpfCg/OjxlZGl0b3ItZm9sZFxcXFxiKSknKSxcbiAgICAgICAgICAgIGVuZDogbmV3IFJlZ0V4cCgnXlxcXFxzKi8vXFxcXHMqKD86KD86Iz9lbmRyZWdpb25cXFxcYil8KD86PC9lZGl0b3ItZm9sZD4pKScpXG4gICAgICAgIH1cbiAgICB9XG59O1xuZXhwb3J0IHZhciBsYW5ndWFnZSA9IHtcbiAgICB0b2tlblBvc3RmaXg6ICcuc2NhbGEnLFxuICAgIC8vIFdlIGNhbid0IGVhc2lseSBhZGQgZXZlcnl0aGluZyBmcm9tIERvdHR5LCBidXQgd2UgY2FuIGF0IGxlYXN0IGFkZCBzb21lIG9mIGl0cyBrZXl3b3Jkc1xuICAgIGtleXdvcmRzOiBbXG4gICAgICAgICdhc0luc3RhbmNlT2YnLFxuICAgICAgICAnY2F0Y2gnLFxuICAgICAgICAnY2xhc3MnLFxuICAgICAgICAnY2xhc3NPZicsXG4gICAgICAgICdkZWYnLFxuICAgICAgICAnZG8nLFxuICAgICAgICAnZWxzZScsXG4gICAgICAgICdleHRlbmRzJyxcbiAgICAgICAgJ2ZpbmFsbHknLFxuICAgICAgICAnZm9yJyxcbiAgICAgICAgJ2ZvcmVhY2gnLFxuICAgICAgICAnZm9yU29tZScsXG4gICAgICAgICdpZicsXG4gICAgICAgICdpbXBvcnQnLFxuICAgICAgICAnaXNJbnN0YW5jZU9mJyxcbiAgICAgICAgJ21hY3JvJyxcbiAgICAgICAgJ21hdGNoJyxcbiAgICAgICAgJ25ldycsXG4gICAgICAgICdvYmplY3QnLFxuICAgICAgICAncGFja2FnZScsXG4gICAgICAgICdyZXR1cm4nLFxuICAgICAgICAndGhyb3cnLFxuICAgICAgICAndHJhaXQnLFxuICAgICAgICAndHJ5JyxcbiAgICAgICAgJ3R5cGUnLFxuICAgICAgICAndW50aWwnLFxuICAgICAgICAndmFsJyxcbiAgICAgICAgJ3ZhcicsXG4gICAgICAgICd3aGlsZScsXG4gICAgICAgICd3aXRoJyxcbiAgICAgICAgJ3lpZWxkJyxcbiAgICAgICAgLy8gRG90dHktc3BlY2lmaWM6XG4gICAgICAgICdnaXZlbicsXG4gICAgICAgICdlbnVtJyxcbiAgICAgICAgJ3RoZW4nXG4gICAgXSxcbiAgICAvLyBEb3R0eS1zcGVjaWZpYzpcbiAgICBzb2Z0S2V5d29yZHM6IFsnYXMnLCAnZXhwb3J0JywgJ2V4dGVuc2lvbicsICdlbmQnLCAnZGVyaXZlcycsICdvbiddLFxuICAgIGNvbnN0YW50czogWyd0cnVlJywgJ2ZhbHNlJywgJ251bGwnLCAndGhpcycsICdzdXBlciddLFxuICAgIG1vZGlmaWVyczogW1xuICAgICAgICAnYWJzdHJhY3QnLFxuICAgICAgICAnZmluYWwnLFxuICAgICAgICAnaW1wbGljaXQnLFxuICAgICAgICAnbGF6eScsXG4gICAgICAgICdvdmVycmlkZScsXG4gICAgICAgICdwcml2YXRlJyxcbiAgICAgICAgJ3Byb3RlY3RlZCcsXG4gICAgICAgICdzZWFsZWQnXG4gICAgXSxcbiAgICAvLyBEb3R0eS1zcGVjaWZpYzpcbiAgICBzb2Z0TW9kaWZpZXJzOiBbJ2lubGluZScsICdvcGFxdWUnLCAnb3BlbicsICd0cmFuc3BhcmVudCcsICd1c2luZyddLFxuICAgIG5hbWU6IC8oPzpbYS16XyRdW1xcdyRdKnxgW15gXStgKS8sXG4gICAgdHlwZTogLyg/OltBLVpdW1xcdyRdKikvLFxuICAgIC8vIHdlIGluY2x1ZGUgdGhlc2UgY29tbW9uIHJlZ3VsYXIgZXhwcmVzc2lvbnNcbiAgICBzeW1ib2xzOiAvWz0+PCF+PzomfCtcXC0qXFwvXlxcXFwlQCNdKy8sXG4gICAgZGlnaXRzOiAvXFxkKyhfK1xcZCspKi8sXG4gICAgaGV4ZGlnaXRzOiAvW1swLTlhLWZBLUZdKyhfK1swLTlhLWZBLUZdKykqLyxcbiAgICAvLyBDIyBzdHlsZSBzdHJpbmdzXG4gICAgZXNjYXBlczogL1xcXFwoPzpbYnRuZnJcXFxcXCInXXx4WzAtOUEtRmEtZl17MSw0fXx1WzAtOUEtRmEtZl17NH18VVswLTlBLUZhLWZdezh9KS8sXG4gICAgZnN0cmluZ19jb252OiAvW2JCaEhzU2NDZG94WGVFZmdHYUF0XXxbVG5dKD86W0hJa2xNU0xOcHpac1FdfFtCYmhBYUNZeWptZGVdfFtSVHJERkNdKS8sXG4gICAgLy8gVGhlIG1haW4gdG9rZW5pemVyIGZvciBvdXIgbGFuZ3VhZ2VzXG4gICAgdG9rZW5pemVyOiB7XG4gICAgICAgIHJvb3Q6IFtcbiAgICAgICAgICAgIC8vIHN0cmluZ3NcbiAgICAgICAgICAgIFsvXFxicmF3XCJcIlwiLywgeyB0b2tlbjogJ3N0cmluZy5xdW90ZScsIGJyYWNrZXQ6ICdAb3BlbicsIG5leHQ6ICdAcmF3c3RyaW5ndCcgfV0sXG4gICAgICAgICAgICBbL1xcYnJhd1wiLywgeyB0b2tlbjogJ3N0cmluZy5xdW90ZScsIGJyYWNrZXQ6ICdAb3BlbicsIG5leHQ6ICdAcmF3c3RyaW5nJyB9XSxcbiAgICAgICAgICAgIFsvXFxic1wiXCJcIi8sIHsgdG9rZW46ICdzdHJpbmcucXVvdGUnLCBicmFja2V0OiAnQG9wZW4nLCBuZXh0OiAnQHNzdHJpbmd0JyB9XSxcbiAgICAgICAgICAgIFsvXFxic1wiLywgeyB0b2tlbjogJ3N0cmluZy5xdW90ZScsIGJyYWNrZXQ6ICdAb3BlbicsIG5leHQ6ICdAc3N0cmluZycgfV0sXG4gICAgICAgICAgICBbL1xcYmZcIlwiXCJcIi8sIHsgdG9rZW46ICdzdHJpbmcucXVvdGUnLCBicmFja2V0OiAnQG9wZW4nLCBuZXh0OiAnQGZzdHJpbmd0JyB9XSxcbiAgICAgICAgICAgIFsvXFxiZlwiLywgeyB0b2tlbjogJ3N0cmluZy5xdW90ZScsIGJyYWNrZXQ6ICdAb3BlbicsIG5leHQ6ICdAZnN0cmluZycgfV0sXG4gICAgICAgICAgICBbL1wiXCJcIi8sIHsgdG9rZW46ICdzdHJpbmcucXVvdGUnLCBicmFja2V0OiAnQG9wZW4nLCBuZXh0OiAnQHN0cmluZ3QnIH1dLFxuICAgICAgICAgICAgWy9cIi8sIHsgdG9rZW46ICdzdHJpbmcucXVvdGUnLCBicmFja2V0OiAnQG9wZW4nLCBuZXh0OiAnQHN0cmluZycgfV0sXG4gICAgICAgICAgICAvLyBudW1iZXJzXG4gICAgICAgICAgICBbLyhAZGlnaXRzKVtlRV0oW1xcLStdPyhAZGlnaXRzKSk/W2ZGZERdPy8sICdudW1iZXIuZmxvYXQnLCAnQGFsbG93TWV0aG9kJ10sXG4gICAgICAgICAgICBbLyhAZGlnaXRzKVxcLihAZGlnaXRzKShbZUVdW1xcLStdPyhAZGlnaXRzKSk/W2ZGZERdPy8sICdudW1iZXIuZmxvYXQnLCAnQGFsbG93TWV0aG9kJ10sXG4gICAgICAgICAgICBbLzBbeFhdKEBoZXhkaWdpdHMpW0xsXT8vLCAnbnVtYmVyLmhleCcsICdAYWxsb3dNZXRob2QnXSxcbiAgICAgICAgICAgIFsvKEBkaWdpdHMpW2ZGZERdLywgJ251bWJlci5mbG9hdCcsICdAYWxsb3dNZXRob2QnXSxcbiAgICAgICAgICAgIFsvKEBkaWdpdHMpW2xMXT8vLCAnbnVtYmVyJywgJ0BhbGxvd01ldGhvZCddLFxuICAgICAgICAgICAgWy9cXGJfXFwqLywgJ2tleSddLFxuICAgICAgICAgICAgWy9cXGIoXylcXGIvLCAna2V5d29yZCcsICdAYWxsb3dNZXRob2QnXSxcbiAgICAgICAgICAgIC8vIGlkZW50aWZpZXJzIGFuZCBrZXl3b3Jkc1xuICAgICAgICAgICAgWy9cXGJpbXBvcnRcXGIvLCAna2V5d29yZCcsICdAaW1wb3J0J10sXG4gICAgICAgICAgICBbL1xcYihjYXNlKShbIFxcdF0rKShjbGFzcylcXGIvLCBbJ2tleXdvcmQubW9kaWZpZXInLCAnd2hpdGUnLCAna2V5d29yZCddXSxcbiAgICAgICAgICAgIFsvXFxiY2FzZVxcYi8sICdrZXl3b3JkJywgJ0BjYXNlJ10sXG4gICAgICAgICAgICBbL1xcYnZhW2xyXVxcYi8sICdrZXl3b3JkJywgJ0B2YXJkZWYnXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvXFxiKGRlZikoWyBcXHRdKykoKD86dW5hcnlfKT9Ac3ltYm9sc3xAbmFtZSg/Ol89KXxAbmFtZSkvLFxuICAgICAgICAgICAgICAgIFsna2V5d29yZCcsICd3aGl0ZScsICdpZGVudGlmaWVyJ11cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbL0BuYW1lKD89WyBcXHRdKjooPyE6KSkvLCAndmFyaWFibGUnXSxcbiAgICAgICAgICAgIFsvKFxcLikoQG5hbWV8QHN5bWJvbHMpLywgWydvcGVyYXRvcicsIHsgdG9rZW46ICdAcmVtYXRjaCcsIG5leHQ6ICdAYWxsb3dNZXRob2QnIH1dXSxcbiAgICAgICAgICAgIFsvKFt7KF0pKFxccyopKEBuYW1lKD89XFxzKj0+KSkvLCBbJ0BicmFja2V0cycsICd3aGl0ZScsICd2YXJpYWJsZSddXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvQG5hbWUvLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdAa2V5d29yZHMnOiAna2V5d29yZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQHNvZnRLZXl3b3Jkcyc6ICdrZXl3b3JkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAbW9kaWZpZXJzJzogJ2tleXdvcmQubW9kaWZpZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0Bzb2Z0TW9kaWZpZXJzJzogJ2tleXdvcmQubW9kaWZpZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0Bjb25zdGFudHMnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW46ICdjb25zdGFudCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dDogJ0BhbGxvd01ldGhvZCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW46ICdpZGVudGlmaWVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0OiAnQGFsbG93TWV0aG9kJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFsvQHR5cGUvLCAndHlwZScsICdAYWxsb3dNZXRob2QnXSxcbiAgICAgICAgICAgIC8vIHdoaXRlc3BhY2VcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B3aGl0ZXNwYWNlJyB9LFxuICAgICAgICAgICAgLy8gQCBhbm5vdGF0aW9ucy5cbiAgICAgICAgICAgIFsvQFthLXpBLVpfJF1bXFx3JF0qKD86XFwuW2EtekEtWl8kXVtcXHckXSopKi8sICdhbm5vdGF0aW9uJ10sXG4gICAgICAgICAgICAvLyBkZWxpbWl0ZXJzIGFuZCBvcGVyYXRvcnNcbiAgICAgICAgICAgIFsvW3soXS8sICdAYnJhY2tldHMnXSxcbiAgICAgICAgICAgIFsvW30pXS8sICdAYnJhY2tldHMnLCAnQGFsbG93TWV0aG9kJ10sXG4gICAgICAgICAgICBbL1xcWy8sICdvcGVyYXRvci5zcXVhcmUnXSxcbiAgICAgICAgICAgIFsvXSg/IVxccyooPzp2YVtybF18ZGVmfHR5cGUpXFxiKS8sICdvcGVyYXRvci5zcXVhcmUnLCAnQGFsbG93TWV0aG9kJ10sXG4gICAgICAgICAgICBbL10vLCAnb3BlcmF0b3Iuc3F1YXJlJ10sXG4gICAgICAgICAgICBbLyhbPS1dPnw8LXw+Onw8Onw6Pnw8JSkoPz1bXFxzXFx3KClbXFxde30sXFwuXCInYF0pLywgJ2tleXdvcmQnXSxcbiAgICAgICAgICAgIFsvQHN5bWJvbHMvLCAnb3BlcmF0b3InXSxcbiAgICAgICAgICAgIC8vIGRlbGltaXRlcjogYWZ0ZXIgbnVtYmVyIGJlY2F1c2Ugb2YgLlxcZCBmbG9hdHNcbiAgICAgICAgICAgIFsvWzssXFwuXS8sICdkZWxpbWl0ZXInXSxcbiAgICAgICAgICAgIC8vIHN5bWJvbHNcbiAgICAgICAgICAgIFsvJ1thLXpBLVokXVtcXHckXSooPyEnKS8sICdhdHRyaWJ1dGUubmFtZSddLFxuICAgICAgICAgICAgLy8gY2hhcmFjdGVyc1xuICAgICAgICAgICAgWy8nW15cXFxcJ10nLywgJ3N0cmluZycsICdAYWxsb3dNZXRob2QnXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvKCcpKEBlc2NhcGVzKSgnKS8sXG4gICAgICAgICAgICAgICAgWydzdHJpbmcnLCAnc3RyaW5nLmVzY2FwZScsIHsgdG9rZW46ICdzdHJpbmcnLCBuZXh0OiAnQGFsbG93TWV0aG9kJyB9XVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFsvJy8sICdzdHJpbmcuaW52YWxpZCddXG4gICAgICAgIF0sXG4gICAgICAgIGltcG9ydDogW1xuICAgICAgICAgICAgWy87LywgJ2RlbGltaXRlcicsICdAcG9wJ10sXG4gICAgICAgICAgICBbL158JC8sICcnLCAnQHBvcCddLFxuICAgICAgICAgICAgWy9bIFxcdF0rLywgJ3doaXRlJ10sXG4gICAgICAgICAgICBbL1tcXG5cXHJdKy8sICd3aGl0ZScsICdAcG9wJ10sXG4gICAgICAgICAgICBbL1xcL1xcKi8sICdjb21tZW50JywgJ0Bjb21tZW50J10sXG4gICAgICAgICAgICBbL0BuYW1lfEB0eXBlLywgJ3R5cGUnXSxcbiAgICAgICAgICAgIFsvWygpe31dLywgJ0BicmFja2V0cyddLFxuICAgICAgICAgICAgWy9bW1xcXV0vLCAnb3BlcmF0b3Iuc3F1YXJlJ10sXG4gICAgICAgICAgICBbL1tcXC4sXS8sICdkZWxpbWl0ZXInXVxuICAgICAgICBdLFxuICAgICAgICBhbGxvd01ldGhvZDogW1xuICAgICAgICAgICAgWy9efCQvLCAnJywgJ0Bwb3AnXSxcbiAgICAgICAgICAgIFsvWyBcXHRdKy8sICd3aGl0ZSddLFxuICAgICAgICAgICAgWy9bXFxuXFxyXSsvLCAnd2hpdGUnLCAnQHBvcCddLFxuICAgICAgICAgICAgWy9cXC9cXCovLCAnY29tbWVudCcsICdAY29tbWVudCddLFxuICAgICAgICAgICAgWy8oPz09PltcXHNcXHcoW3tdKS8sICdrZXl3b3JkJywgJ0Bwb3AnXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvKEBuYW1lfEBzeW1ib2xzKSg/PVsgXFx0XSpbWyh7XCInYF18WyBcXHRdKyg/OlsrLV0/XFwuP1xcZHxcXHcpKS8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0BrZXl3b3Jkcyc6IHsgdG9rZW46ICdrZXl3b3JkJywgbmV4dDogJ0Bwb3AnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnLT58PC18Pjp8PDp8PCUnOiB7IHRva2VuOiAna2V5d29yZCcsIG5leHQ6ICdAcG9wJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogeyB0b2tlbjogJ0ByZW1hdGNoJywgbmV4dDogJ0Bwb3AnIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbJycsICcnLCAnQHBvcCddXG4gICAgICAgIF0sXG4gICAgICAgIGNvbW1lbnQ6IFtcbiAgICAgICAgICAgIFsvW15cXC8qXSsvLCAnY29tbWVudCddLFxuICAgICAgICAgICAgWy9cXC9cXCovLCAnY29tbWVudCcsICdAcHVzaCddLFxuICAgICAgICAgICAgWy9cXCpcXC8vLCAnY29tbWVudCcsICdAcG9wJ10sXG4gICAgICAgICAgICBbL1tcXC8qXS8sICdjb21tZW50J11cbiAgICAgICAgXSxcbiAgICAgICAgY2FzZTogW1xuICAgICAgICAgICAgWy9cXGJfXFwqLywgJ2tleSddLFxuICAgICAgICAgICAgWy9cXGIoX3x0cnVlfGZhbHNlfG51bGx8dGhpc3xzdXBlcilcXGIvLCAna2V5d29yZCcsICdAYWxsb3dNZXRob2QnXSxcbiAgICAgICAgICAgIFsvXFxiaWZcXGJ8PT4vLCAna2V5d29yZCcsICdAcG9wJ10sXG4gICAgICAgICAgICBbL2BbXmBdK2AvLCAnaWRlbnRpZmllcicsICdAYWxsb3dNZXRob2QnXSxcbiAgICAgICAgICAgIFsvQG5hbWUvLCAndmFyaWFibGUnLCAnQGFsbG93TWV0aG9kJ10sXG4gICAgICAgICAgICBbLzo6Oj98XFx8fEAoPyFbYS16XyRdKS8sICdrZXl3b3JkJ10sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAcm9vdCcgfVxuICAgICAgICBdLFxuICAgICAgICB2YXJkZWY6IFtcbiAgICAgICAgICAgIFsvXFxiX1xcKi8sICdrZXknXSxcbiAgICAgICAgICAgIFsvXFxiKF98dHJ1ZXxmYWxzZXxudWxsfHRoaXN8c3VwZXIpXFxiLywgJ2tleXdvcmQnXSxcbiAgICAgICAgICAgIFsvQG5hbWUvLCAndmFyaWFibGUnXSxcbiAgICAgICAgICAgIFsvOjo6P3xcXHx8QCg/IVthLXpfJF0pLywgJ2tleXdvcmQnXSxcbiAgICAgICAgICAgIFsvPXw6KD8hOikvLCAnb3BlcmF0b3InLCAnQHBvcCddLFxuICAgICAgICAgICAgWy8kLywgJ3doaXRlJywgJ0Bwb3AnXSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0Byb290JyB9XG4gICAgICAgIF0sXG4gICAgICAgIHN0cmluZzogW1xuICAgICAgICAgICAgWy9bXlxcXFxcIlxcblxccl0rLywgJ3N0cmluZyddLFxuICAgICAgICAgICAgWy9AZXNjYXBlcy8sICdzdHJpbmcuZXNjYXBlJ10sXG4gICAgICAgICAgICBbL1xcXFwuLywgJ3N0cmluZy5lc2NhcGUuaW52YWxpZCddLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9cIi8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ3N0cmluZy5xdW90ZScsXG4gICAgICAgICAgICAgICAgICAgIGJyYWNrZXQ6ICdAY2xvc2UnLFxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2hUbzogJ0BhbGxvd01ldGhvZCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIF0sXG4gICAgICAgIHN0cmluZ3Q6IFtcbiAgICAgICAgICAgIFsvW15cXFxcXCJcXG5cXHJdKy8sICdzdHJpbmcnXSxcbiAgICAgICAgICAgIFsvQGVzY2FwZXMvLCAnc3RyaW5nLmVzY2FwZSddLFxuICAgICAgICAgICAgWy9cXFxcLi8sICdzdHJpbmcuZXNjYXBlLmludmFsaWQnXSxcbiAgICAgICAgICAgIFsvXCIoPz1cIlwiXCIpLywgJ3N0cmluZyddLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9cIlwiXCIvLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46ICdzdHJpbmcucXVvdGUnLFxuICAgICAgICAgICAgICAgICAgICBicmFja2V0OiAnQGNsb3NlJyxcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoVG86ICdAYWxsb3dNZXRob2QnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFsvXCIvLCAnc3RyaW5nJ11cbiAgICAgICAgXSxcbiAgICAgICAgZnN0cmluZzogW1xuICAgICAgICAgICAgWy9AZXNjYXBlcy8sICdzdHJpbmcuZXNjYXBlJ10sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL1wiLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiAnc3RyaW5nLnF1b3RlJyxcbiAgICAgICAgICAgICAgICAgICAgYnJhY2tldDogJ0BjbG9zZScsXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaFRvOiAnQGFsbG93TWV0aG9kJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbL1xcJFxcJC8sICdzdHJpbmcnXSxcbiAgICAgICAgICAgIFsvKFxcJCkoW2Etel9dXFx3KikvLCBbJ29wZXJhdG9yJywgJ2lkZW50aWZpZXInXV0sXG4gICAgICAgICAgICBbL1xcJFxcey8sICdvcGVyYXRvcicsICdAaW50ZXJwJ10sXG4gICAgICAgICAgICBbLyUlLywgJ3N0cmluZyddLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC8oJSkoW1xcLSMrIDAsKF0pKFxcZCt8XFwuXFxkK3xcXGQrXFwuXFxkKykoQGZzdHJpbmdfY29udikvLFxuICAgICAgICAgICAgICAgIFsnbWV0YXRhZycsICdrZXl3b3JkLm1vZGlmaWVyJywgJ251bWJlcicsICdtZXRhdGFnJ11cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbLyglKShcXGQrfFxcLlxcZCt8XFxkK1xcLlxcZCspKEBmc3RyaW5nX2NvbnYpLywgWydtZXRhdGFnJywgJ251bWJlcicsICdtZXRhdGFnJ11dLFxuICAgICAgICAgICAgWy8oJSkoW1xcLSMrIDAsKF0pKEBmc3RyaW5nX2NvbnYpLywgWydtZXRhdGFnJywgJ2tleXdvcmQubW9kaWZpZXInLCAnbWV0YXRhZyddXSxcbiAgICAgICAgICAgIFsvKCUpKEBmc3RyaW5nX2NvbnYpLywgWydtZXRhdGFnJywgJ21ldGF0YWcnXV0sXG4gICAgICAgICAgICBbLy4vLCAnc3RyaW5nJ11cbiAgICAgICAgXSxcbiAgICAgICAgZnN0cmluZ3Q6IFtcbiAgICAgICAgICAgIFsvQGVzY2FwZXMvLCAnc3RyaW5nLmVzY2FwZSddLFxuICAgICAgICAgICAgWy9cIig/PVwiXCJcIikvLCAnc3RyaW5nJ10sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL1wiXCJcIi8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ3N0cmluZy5xdW90ZScsXG4gICAgICAgICAgICAgICAgICAgIGJyYWNrZXQ6ICdAY2xvc2UnLFxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2hUbzogJ0BhbGxvd01ldGhvZCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgWy9cXCRcXCQvLCAnc3RyaW5nJ10sXG4gICAgICAgICAgICBbLyhcXCQpKFthLXpfXVxcdyopLywgWydvcGVyYXRvcicsICdpZGVudGlmaWVyJ11dLFxuICAgICAgICAgICAgWy9cXCRcXHsvLCAnb3BlcmF0b3InLCAnQGludGVycCddLFxuICAgICAgICAgICAgWy8lJS8sICdzdHJpbmcnXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvKCUpKFtcXC0jKyAwLChdKShcXGQrfFxcLlxcZCt8XFxkK1xcLlxcZCspKEBmc3RyaW5nX2NvbnYpLyxcbiAgICAgICAgICAgICAgICBbJ21ldGF0YWcnLCAna2V5d29yZC5tb2RpZmllcicsICdudW1iZXInLCAnbWV0YXRhZyddXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgWy8oJSkoXFxkK3xcXC5cXGQrfFxcZCtcXC5cXGQrKShAZnN0cmluZ19jb252KS8sIFsnbWV0YXRhZycsICdudW1iZXInLCAnbWV0YXRhZyddXSxcbiAgICAgICAgICAgIFsvKCUpKFtcXC0jKyAwLChdKShAZnN0cmluZ19jb252KS8sIFsnbWV0YXRhZycsICdrZXl3b3JkLm1vZGlmaWVyJywgJ21ldGF0YWcnXV0sXG4gICAgICAgICAgICBbLyglKShAZnN0cmluZ19jb252KS8sIFsnbWV0YXRhZycsICdtZXRhdGFnJ11dLFxuICAgICAgICAgICAgWy8uLywgJ3N0cmluZyddXG4gICAgICAgIF0sXG4gICAgICAgIHNzdHJpbmc6IFtcbiAgICAgICAgICAgIFsvQGVzY2FwZXMvLCAnc3RyaW5nLmVzY2FwZSddLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9cIi8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ3N0cmluZy5xdW90ZScsXG4gICAgICAgICAgICAgICAgICAgIGJyYWNrZXQ6ICdAY2xvc2UnLFxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2hUbzogJ0BhbGxvd01ldGhvZCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgWy9cXCRcXCQvLCAnc3RyaW5nJ10sXG4gICAgICAgICAgICBbLyhcXCQpKFthLXpfXVxcdyopLywgWydvcGVyYXRvcicsICdpZGVudGlmaWVyJ11dLFxuICAgICAgICAgICAgWy9cXCRcXHsvLCAnb3BlcmF0b3InLCAnQGludGVycCddLFxuICAgICAgICAgICAgWy8uLywgJ3N0cmluZyddXG4gICAgICAgIF0sXG4gICAgICAgIHNzdHJpbmd0OiBbXG4gICAgICAgICAgICBbL0Blc2NhcGVzLywgJ3N0cmluZy5lc2NhcGUnXSxcbiAgICAgICAgICAgIFsvXCIoPz1cIlwiXCIpLywgJ3N0cmluZyddLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9cIlwiXCIvLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46ICdzdHJpbmcucXVvdGUnLFxuICAgICAgICAgICAgICAgICAgICBicmFja2V0OiAnQGNsb3NlJyxcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoVG86ICdAYWxsb3dNZXRob2QnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFsvXFwkXFwkLywgJ3N0cmluZyddLFxuICAgICAgICAgICAgWy8oXFwkKShbYS16X11cXHcqKS8sIFsnb3BlcmF0b3InLCAnaWRlbnRpZmllciddXSxcbiAgICAgICAgICAgIFsvXFwkXFx7LywgJ29wZXJhdG9yJywgJ0BpbnRlcnAnXSxcbiAgICAgICAgICAgIFsvLi8sICdzdHJpbmcnXVxuICAgICAgICBdLFxuICAgICAgICBpbnRlcnA6IFtbL3svLCAnb3BlcmF0b3InLCAnQHB1c2gnXSwgWy99LywgJ29wZXJhdG9yJywgJ0Bwb3AnXSwgeyBpbmNsdWRlOiAnQHJvb3QnIH1dLFxuICAgICAgICByYXdzdHJpbmc6IFtcbiAgICAgICAgICAgIFsvW15cIl0vLCAnc3RyaW5nJ10sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL1wiLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiAnc3RyaW5nLnF1b3RlJyxcbiAgICAgICAgICAgICAgICAgICAgYnJhY2tldDogJ0BjbG9zZScsXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaFRvOiAnQGFsbG93TWV0aG9kJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgXSxcbiAgICAgICAgcmF3c3RyaW5ndDogW1xuICAgICAgICAgICAgWy9bXlwiXS8sICdzdHJpbmcnXSxcbiAgICAgICAgICAgIFsvXCIoPz1cIlwiXCIpLywgJ3N0cmluZyddLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9cIlwiXCIvLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46ICdzdHJpbmcucXVvdGUnLFxuICAgICAgICAgICAgICAgICAgICBicmFja2V0OiAnQGNsb3NlJyxcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoVG86ICdAYWxsb3dNZXRob2QnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFsvXCIvLCAnc3RyaW5nJ11cbiAgICAgICAgXSxcbiAgICAgICAgd2hpdGVzcGFjZTogW1xuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rLywgJ3doaXRlJ10sXG4gICAgICAgICAgICBbL1xcL1xcKi8sICdjb21tZW50JywgJ0Bjb21tZW50J10sXG4gICAgICAgICAgICBbL1xcL1xcLy4qJC8sICdjb21tZW50J11cbiAgICAgICAgXVxuICAgIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9