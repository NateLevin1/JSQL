(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/mips/mips.js":
/*!************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/mips/mips.js ***!
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
    wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\@\#%\^\&\*\(\)\=\$\-\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,
    comments: {
        blockComment: ['###', '###'],
        lineComment: '#'
    },
    folding: {
        markers: {
            start: new RegExp('^\\s*#region\\b'),
            end: new RegExp('^\\s*#endregion\\b')
        }
    }
};
var language = {
    defaultToken: '',
    ignoreCase: false,
    tokenPostfix: '.mips',
    regEx: /\/(?!\/\/)(?:[^\/\\]|\\.)*\/[igm]*/,
    keywords: [
        '.data',
        '.text',
        'syscall',
        'trap',
        'add',
        'addu',
        'addi',
        'addiu',
        'and',
        'andi',
        'div',
        'divu',
        'mult',
        'multu',
        'nor',
        'or',
        'ori',
        'sll',
        'slv',
        'sra',
        'srav',
        'srl',
        'srlv',
        'sub',
        'subu',
        'xor',
        'xori',
        'lhi',
        'lho',
        'lhi',
        'llo',
        'slt',
        'slti',
        'sltu',
        'sltiu',
        'beq',
        'bgtz',
        'blez',
        'bne',
        'j',
        'jal',
        'jalr',
        'jr',
        'lb',
        'lbu',
        'lh',
        'lhu',
        'lw',
        'li',
        'la',
        'sb',
        'sh',
        'sw',
        'mfhi',
        'mflo',
        'mthi',
        'mtlo',
        'move'
    ],
    // we include these common regular expressions
    symbols: /[\.,\:]+/,
    escapes: /\\(?:[abfnrtv\\"'$]|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            // identifiers and keywords
            [/\$[a-zA-Z_]\w*/, 'variable.predefined'],
            [
                /[.a-zA-Z_]\w*/,
                {
                    cases: {
                        this: 'variable.predefined',
                        '@keywords': { token: 'keyword.$0' },
                        '@default': ''
                    }
                }
            ],
            // whitespace
            [/[ \t\r\n]+/, ''],
            // Comments
            [/#.*$/, 'comment'],
            // regular expressions
            ['///', { token: 'regexp', next: '@hereregexp' }],
            [/^(\s*)(@regEx)/, ['', 'regexp']],
            [/(\,)(\s*)(@regEx)/, ['delimiter', '', 'regexp']],
            [/(\:)(\s*)(@regEx)/, ['delimiter', '', 'regexp']],
            // delimiters
            [/@symbols/, 'delimiter'],
            // numbers
            [/\d+[eE]([\-+]?\d+)?/, 'number.float'],
            [/\d+\.\d+([eE][\-+]?\d+)?/, 'number.float'],
            [/0[xX][0-9a-fA-F]+/, 'number.hex'],
            [/0[0-7]+(?!\d)/, 'number.octal'],
            [/\d+/, 'number'],
            // delimiter: after number because of .\d floats
            [/[,.]/, 'delimiter'],
            // strings:
            [/"""/, 'string', '@herestring."""'],
            [/'''/, 'string', "@herestring.'''"],
            [
                /"/,
                {
                    cases: {
                        '@eos': 'string',
                        '@default': { token: 'string', next: '@string."' }
                    }
                }
            ],
            [
                /'/,
                {
                    cases: {
                        '@eos': 'string',
                        '@default': { token: 'string', next: "@string.'" }
                    }
                }
            ]
        ],
        string: [
            [/[^"'\#\\]+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/\./, 'string.escape.invalid'],
            [/\./, 'string.escape.invalid'],
            [
                /#{/,
                {
                    cases: {
                        '$S2=="': {
                            token: 'string',
                            next: 'root.interpolatedstring'
                        },
                        '@default': 'string'
                    }
                }
            ],
            [
                /["']/,
                {
                    cases: {
                        '$#==$S2': { token: 'string', next: '@pop' },
                        '@default': 'string'
                    }
                }
            ],
            [/#/, 'string']
        ],
        herestring: [
            [
                /("""|''')/,
                {
                    cases: {
                        '$1==$S2': { token: 'string', next: '@pop' },
                        '@default': 'string'
                    }
                }
            ],
            [/[^#\\'"]+/, 'string'],
            [/['"]+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/\./, 'string.escape.invalid'],
            [/#{/, { token: 'string.quote', next: 'root.interpolatedstring' }],
            [/#/, 'string']
        ],
        comment: [
            [/[^#]+/, 'comment'],
            [/#/, 'comment']
        ],
        hereregexp: [
            [/[^\\\/#]+/, 'regexp'],
            [/\\./, 'regexp'],
            [/#.*$/, 'comment'],
            ['///[igm]*', { token: 'regexp', next: '@pop' }],
            [/\//, 'regexp']
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL21pcHMvbWlwcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLHFFQUFxRSxJQUFJLE1BQU07QUFDL0U7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsSUFBSSxjQUFjLEVBQUUsY0FBYyxFQUFFO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLHNCQUFzQjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsdUNBQXVDO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxnQ0FBZ0M7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxnQ0FBZ0M7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixJQUFJLHlEQUF5RDtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixnQ0FBZ0M7QUFDM0Q7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiMzMuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5leHBvcnQgdmFyIGNvbmYgPSB7XG4gICAgd29yZFBhdHRlcm46IC8oLT9cXGQqXFwuXFxkXFx3Kil8KFteXFxgXFx+XFwhXFxAXFwjJVxcXlxcJlxcKlxcKFxcKVxcPVxcJFxcLVxcK1xcW1xce1xcXVxcfVxcXFxcXHxcXDtcXDpcXCdcXFwiXFwsXFwuXFw8XFw+XFwvXFw/XFxzXSspL2csXG4gICAgY29tbWVudHM6IHtcbiAgICAgICAgYmxvY2tDb21tZW50OiBbJyMjIycsICcjIyMnXSxcbiAgICAgICAgbGluZUNvbW1lbnQ6ICcjJ1xuICAgIH0sXG4gICAgZm9sZGluZzoge1xuICAgICAgICBtYXJrZXJzOiB7XG4gICAgICAgICAgICBzdGFydDogbmV3IFJlZ0V4cCgnXlxcXFxzKiNyZWdpb25cXFxcYicpLFxuICAgICAgICAgICAgZW5kOiBuZXcgUmVnRXhwKCdeXFxcXHMqI2VuZHJlZ2lvblxcXFxiJylcbiAgICAgICAgfVxuICAgIH1cbn07XG5leHBvcnQgdmFyIGxhbmd1YWdlID0ge1xuICAgIGRlZmF1bHRUb2tlbjogJycsXG4gICAgaWdub3JlQ2FzZTogZmFsc2UsXG4gICAgdG9rZW5Qb3N0Zml4OiAnLm1pcHMnLFxuICAgIHJlZ0V4OiAvXFwvKD8hXFwvXFwvKSg/OlteXFwvXFxcXF18XFxcXC4pKlxcL1tpZ21dKi8sXG4gICAga2V5d29yZHM6IFtcbiAgICAgICAgJy5kYXRhJyxcbiAgICAgICAgJy50ZXh0JyxcbiAgICAgICAgJ3N5c2NhbGwnLFxuICAgICAgICAndHJhcCcsXG4gICAgICAgICdhZGQnLFxuICAgICAgICAnYWRkdScsXG4gICAgICAgICdhZGRpJyxcbiAgICAgICAgJ2FkZGl1JyxcbiAgICAgICAgJ2FuZCcsXG4gICAgICAgICdhbmRpJyxcbiAgICAgICAgJ2RpdicsXG4gICAgICAgICdkaXZ1JyxcbiAgICAgICAgJ211bHQnLFxuICAgICAgICAnbXVsdHUnLFxuICAgICAgICAnbm9yJyxcbiAgICAgICAgJ29yJyxcbiAgICAgICAgJ29yaScsXG4gICAgICAgICdzbGwnLFxuICAgICAgICAnc2x2JyxcbiAgICAgICAgJ3NyYScsXG4gICAgICAgICdzcmF2JyxcbiAgICAgICAgJ3NybCcsXG4gICAgICAgICdzcmx2JyxcbiAgICAgICAgJ3N1YicsXG4gICAgICAgICdzdWJ1JyxcbiAgICAgICAgJ3hvcicsXG4gICAgICAgICd4b3JpJyxcbiAgICAgICAgJ2xoaScsXG4gICAgICAgICdsaG8nLFxuICAgICAgICAnbGhpJyxcbiAgICAgICAgJ2xsbycsXG4gICAgICAgICdzbHQnLFxuICAgICAgICAnc2x0aScsXG4gICAgICAgICdzbHR1JyxcbiAgICAgICAgJ3NsdGl1JyxcbiAgICAgICAgJ2JlcScsXG4gICAgICAgICdiZ3R6JyxcbiAgICAgICAgJ2JsZXonLFxuICAgICAgICAnYm5lJyxcbiAgICAgICAgJ2onLFxuICAgICAgICAnamFsJyxcbiAgICAgICAgJ2phbHInLFxuICAgICAgICAnanInLFxuICAgICAgICAnbGInLFxuICAgICAgICAnbGJ1JyxcbiAgICAgICAgJ2xoJyxcbiAgICAgICAgJ2xodScsXG4gICAgICAgICdsdycsXG4gICAgICAgICdsaScsXG4gICAgICAgICdsYScsXG4gICAgICAgICdzYicsXG4gICAgICAgICdzaCcsXG4gICAgICAgICdzdycsXG4gICAgICAgICdtZmhpJyxcbiAgICAgICAgJ21mbG8nLFxuICAgICAgICAnbXRoaScsXG4gICAgICAgICdtdGxvJyxcbiAgICAgICAgJ21vdmUnXG4gICAgXSxcbiAgICAvLyB3ZSBpbmNsdWRlIHRoZXNlIGNvbW1vbiByZWd1bGFyIGV4cHJlc3Npb25zXG4gICAgc3ltYm9sczogL1tcXC4sXFw6XSsvLFxuICAgIGVzY2FwZXM6IC9cXFxcKD86W2FiZm5ydHZcXFxcXCInJF18eFswLTlBLUZhLWZdezEsNH18dVswLTlBLUZhLWZdezR9fFVbMC05QS1GYS1mXXs4fSkvLFxuICAgIC8vIFRoZSBtYWluIHRva2VuaXplciBmb3Igb3VyIGxhbmd1YWdlc1xuICAgIHRva2VuaXplcjoge1xuICAgICAgICByb290OiBbXG4gICAgICAgICAgICAvLyBpZGVudGlmaWVycyBhbmQga2V5d29yZHNcbiAgICAgICAgICAgIFsvXFwkW2EtekEtWl9dXFx3Ki8sICd2YXJpYWJsZS5wcmVkZWZpbmVkJ10sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL1suYS16QS1aX11cXHcqLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzOiAndmFyaWFibGUucHJlZGVmaW5lZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGtleXdvcmRzJzogeyB0b2tlbjogJ2tleXdvcmQuJDAnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIC8vIHdoaXRlc3BhY2VcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy8sICcnXSxcbiAgICAgICAgICAgIC8vIENvbW1lbnRzXG4gICAgICAgICAgICBbLyMuKiQvLCAnY29tbWVudCddLFxuICAgICAgICAgICAgLy8gcmVndWxhciBleHByZXNzaW9uc1xuICAgICAgICAgICAgWycvLy8nLCB7IHRva2VuOiAncmVnZXhwJywgbmV4dDogJ0BoZXJlcmVnZXhwJyB9XSxcbiAgICAgICAgICAgIFsvXihcXHMqKShAcmVnRXgpLywgWycnLCAncmVnZXhwJ11dLFxuICAgICAgICAgICAgWy8oXFwsKShcXHMqKShAcmVnRXgpLywgWydkZWxpbWl0ZXInLCAnJywgJ3JlZ2V4cCddXSxcbiAgICAgICAgICAgIFsvKFxcOikoXFxzKikoQHJlZ0V4KS8sIFsnZGVsaW1pdGVyJywgJycsICdyZWdleHAnXV0sXG4gICAgICAgICAgICAvLyBkZWxpbWl0ZXJzXG4gICAgICAgICAgICBbL0BzeW1ib2xzLywgJ2RlbGltaXRlciddLFxuICAgICAgICAgICAgLy8gbnVtYmVyc1xuICAgICAgICAgICAgWy9cXGQrW2VFXShbXFwtK10/XFxkKyk/LywgJ251bWJlci5mbG9hdCddLFxuICAgICAgICAgICAgWy9cXGQrXFwuXFxkKyhbZUVdW1xcLStdP1xcZCspPy8sICdudW1iZXIuZmxvYXQnXSxcbiAgICAgICAgICAgIFsvMFt4WF1bMC05YS1mQS1GXSsvLCAnbnVtYmVyLmhleCddLFxuICAgICAgICAgICAgWy8wWzAtN10rKD8hXFxkKS8sICdudW1iZXIub2N0YWwnXSxcbiAgICAgICAgICAgIFsvXFxkKy8sICdudW1iZXInXSxcbiAgICAgICAgICAgIC8vIGRlbGltaXRlcjogYWZ0ZXIgbnVtYmVyIGJlY2F1c2Ugb2YgLlxcZCBmbG9hdHNcbiAgICAgICAgICAgIFsvWywuXS8sICdkZWxpbWl0ZXInXSxcbiAgICAgICAgICAgIC8vIHN0cmluZ3M6XG4gICAgICAgICAgICBbL1wiXCJcIi8sICdzdHJpbmcnLCAnQGhlcmVzdHJpbmcuXCJcIlwiJ10sXG4gICAgICAgICAgICBbLycnJy8sICdzdHJpbmcnLCBcIkBoZXJlc3RyaW5nLicnJ1wiXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvXCIvLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZW9zJzogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiB7IHRva2VuOiAnc3RyaW5nJywgbmV4dDogJ0BzdHJpbmcuXCInIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLycvLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZW9zJzogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiB7IHRva2VuOiAnc3RyaW5nJywgbmV4dDogXCJAc3RyaW5nLidcIiB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIF0sXG4gICAgICAgIHN0cmluZzogW1xuICAgICAgICAgICAgWy9bXlwiJ1xcI1xcXFxdKy8sICdzdHJpbmcnXSxcbiAgICAgICAgICAgIFsvQGVzY2FwZXMvLCAnc3RyaW5nLmVzY2FwZSddLFxuICAgICAgICAgICAgWy9cXC4vLCAnc3RyaW5nLmVzY2FwZS5pbnZhbGlkJ10sXG4gICAgICAgICAgICBbL1xcLi8sICdzdHJpbmcuZXNjYXBlLmludmFsaWQnXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvI3svLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICckUzI9PVwiJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0OiAncm9vdC5pbnRlcnBvbGF0ZWRzdHJpbmcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ3N0cmluZydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL1tcIiddLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnJCM9PSRTMic6IHsgdG9rZW46ICdzdHJpbmcnLCBuZXh0OiAnQHBvcCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgWy8jLywgJ3N0cmluZyddXG4gICAgICAgIF0sXG4gICAgICAgIGhlcmVzdHJpbmc6IFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvKFwiXCJcInwnJycpLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnJDE9PSRTMic6IHsgdG9rZW46ICdzdHJpbmcnLCBuZXh0OiAnQHBvcCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgWy9bXiNcXFxcJ1wiXSsvLCAnc3RyaW5nJ10sXG4gICAgICAgICAgICBbL1snXCJdKy8sICdzdHJpbmcnXSxcbiAgICAgICAgICAgIFsvQGVzY2FwZXMvLCAnc3RyaW5nLmVzY2FwZSddLFxuICAgICAgICAgICAgWy9cXC4vLCAnc3RyaW5nLmVzY2FwZS5pbnZhbGlkJ10sXG4gICAgICAgICAgICBbLyN7LywgeyB0b2tlbjogJ3N0cmluZy5xdW90ZScsIG5leHQ6ICdyb290LmludGVycG9sYXRlZHN0cmluZycgfV0sXG4gICAgICAgICAgICBbLyMvLCAnc3RyaW5nJ11cbiAgICAgICAgXSxcbiAgICAgICAgY29tbWVudDogW1xuICAgICAgICAgICAgWy9bXiNdKy8sICdjb21tZW50J10sXG4gICAgICAgICAgICBbLyMvLCAnY29tbWVudCddXG4gICAgICAgIF0sXG4gICAgICAgIGhlcmVyZWdleHA6IFtcbiAgICAgICAgICAgIFsvW15cXFxcXFwvI10rLywgJ3JlZ2V4cCddLFxuICAgICAgICAgICAgWy9cXFxcLi8sICdyZWdleHAnXSxcbiAgICAgICAgICAgIFsvIy4qJC8sICdjb21tZW50J10sXG4gICAgICAgICAgICBbJy8vL1tpZ21dKicsIHsgdG9rZW46ICdyZWdleHAnLCBuZXh0OiAnQHBvcCcgfV0sXG4gICAgICAgICAgICBbL1xcLy8sICdyZWdleHAnXVxuICAgICAgICBdXG4gICAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=