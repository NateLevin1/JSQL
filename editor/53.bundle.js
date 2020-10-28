(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[53],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/rust/rust.js":
/*!************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/rust/rust.js ***!
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
        { open: '[', close: ']' },
        { open: '{', close: '}' },
        { open: '(', close: ')' },
        { open: "'", close: "'", notIn: ['string', 'comment'] },
        { open: '"', close: '"', notIn: ['string'] }
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
            start: new RegExp('^\\s*#pragma\\s+region\\b'),
            end: new RegExp('^\\s*#pragma\\s+endregion\\b')
        }
    }
};
var language = {
    tokenPostfix: '.rust',
    defaultToken: 'invalid',
    keywords: [
        'as',
        'box',
        'break',
        'const',
        'continue',
        'crate',
        'else',
        'enum',
        'extern',
        'false',
        'fn',
        'for',
        'if',
        'impl',
        'in',
        'let',
        'loop',
        'match',
        'mod',
        'move',
        'mut',
        'pub',
        'ref',
        'return',
        'self',
        'static',
        'struct',
        'super',
        'trait',
        'true',
        'type',
        'unsafe',
        'use',
        'where',
        'while',
        'catch',
        'default',
        'union',
        'static',
        'abstract',
        'alignof',
        'become',
        'do',
        'final',
        'macro',
        'offsetof',
        'override',
        'priv',
        'proc',
        'pure',
        'sizeof',
        'typeof',
        'unsized',
        'virtual',
        'yield'
    ],
    typeKeywords: [
        'Self',
        'm32',
        'm64',
        'm128',
        'f80',
        'f16',
        'f128',
        'int',
        'uint',
        'float',
        'char',
        'bool',
        'u8',
        'u16',
        'u32',
        'u64',
        'f32',
        'f64',
        'i8',
        'i16',
        'i32',
        'i64',
        'str',
        'Option',
        'Either',
        'c_float',
        'c_double',
        'c_void',
        'FILE',
        'fpos_t',
        'DIR',
        'dirent',
        'c_char',
        'c_schar',
        'c_uchar',
        'c_short',
        'c_ushort',
        'c_int',
        'c_uint',
        'c_long',
        'c_ulong',
        'size_t',
        'ptrdiff_t',
        'clock_t',
        'time_t',
        'c_longlong',
        'c_ulonglong',
        'intptr_t',
        'uintptr_t',
        'off_t',
        'dev_t',
        'ino_t',
        'pid_t',
        'mode_t',
        'ssize_t'
    ],
    constants: ['true', 'false', 'Some', 'None', 'Left', 'Right', 'Ok', 'Err'],
    supportConstants: [
        'EXIT_FAILURE',
        'EXIT_SUCCESS',
        'RAND_MAX',
        'EOF',
        'SEEK_SET',
        'SEEK_CUR',
        'SEEK_END',
        '_IOFBF',
        '_IONBF',
        '_IOLBF',
        'BUFSIZ',
        'FOPEN_MAX',
        'FILENAME_MAX',
        'L_tmpnam',
        'TMP_MAX',
        'O_RDONLY',
        'O_WRONLY',
        'O_RDWR',
        'O_APPEND',
        'O_CREAT',
        'O_EXCL',
        'O_TRUNC',
        'S_IFIFO',
        'S_IFCHR',
        'S_IFBLK',
        'S_IFDIR',
        'S_IFREG',
        'S_IFMT',
        'S_IEXEC',
        'S_IWRITE',
        'S_IREAD',
        'S_IRWXU',
        'S_IXUSR',
        'S_IWUSR',
        'S_IRUSR',
        'F_OK',
        'R_OK',
        'W_OK',
        'X_OK',
        'STDIN_FILENO',
        'STDOUT_FILENO',
        'STDERR_FILENO'
    ],
    supportMacros: [
        'format!',
        'print!',
        'println!',
        'panic!',
        'format_args!',
        'unreachable!',
        'write!',
        'writeln!'
    ],
    operators: [
        '!',
        '!=',
        '%',
        '%=',
        '&',
        '&=',
        '&&',
        '*',
        '*=',
        '+',
        '+=',
        '-',
        '-=',
        '->',
        '.',
        '..',
        '...',
        '/',
        '/=',
        ':',
        ';',
        '<<',
        '<<=',
        '<',
        '<=',
        '=',
        '==',
        '=>',
        '>',
        '>=',
        '>>',
        '>>=',
        '@',
        '^',
        '^=',
        '|',
        '|=',
        '||',
        '_',
        '?',
        '#'
    ],
    escapes: /\\([nrt0\"''\\]|x\h{2}|u\{\h{1,6}\})/,
    delimiters: /[,]/,
    symbols: /[\#\!\%\&\*\+\-\.\/\:\;\<\=\>\@\^\|_\?]+/,
    intSuffixes: /[iu](8|16|32|64|128|size)/,
    floatSuffixes: /f(32|64)/,
    tokenizer: {
        root: [
            [
                /[a-zA-Z][a-zA-Z0-9_]*!?|_[a-zA-Z0-9_]+/,
                {
                    cases: {
                        '@typeKeywords': 'keyword.type',
                        '@keywords': 'keyword',
                        '@supportConstants': 'keyword',
                        '@supportMacros': 'keyword',
                        '@constants': 'keyword',
                        '@default': 'identifier'
                    }
                }
            ],
            // Designator
            [/\$/, 'identifier'],
            // Lifetime annotations
            [/'[a-zA-Z_][a-zA-Z0-9_]*(?=[^\'])/, 'identifier'],
            // Byte literal
            [/'\S'/, 'string.byteliteral'],
            // Strings
            [/"/, { token: 'string.quote', bracket: '@open', next: '@string' }],
            { include: '@numbers' },
            // Whitespace + comments
            { include: '@whitespace' },
            [
                /@delimiters/,
                {
                    cases: {
                        '@keywords': 'keyword',
                        '@default': 'delimiter'
                    }
                }
            ],
            [/[{}()\[\]<>]/, '@brackets'],
            [/@symbols/, { cases: { '@operators': 'operator', '@default': '' } }]
        ],
        whitespace: [
            [/[ \t\r\n]+/, 'white'],
            [/\/\*/, 'comment', '@comment'],
            [/\/\/.*$/, 'comment']
        ],
        comment: [
            [/[^\/*]+/, 'comment'],
            [/\/\*/, 'comment', '@push'],
            ['\\*/', 'comment', '@pop'],
            [/[\/*]/, 'comment']
        ],
        string: [
            [/[^\\"]+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/\\./, 'string.escape.invalid'],
            [/"/, { token: 'string.quote', bracket: '@close', next: '@pop' }]
        ],
        numbers: [
            //Octal
            [/(0o[0-7_]+)(@intSuffixes)?/, { token: 'number' }],
            //Binary
            [/(0b[0-1_]+)(@intSuffixes)?/, { token: 'number' }],
            //Exponent
            [/[\d][\d_]*(\.[\d][\d_]*)?[eE][+-][\d_]+(@floatSuffixes)?/, { token: 'number' }],
            //Float
            [/\b(\d\.?[\d_]*)(@floatSuffixes)?\b/, { token: 'number' }],
            //Hexadecimal
            [/(0x[\da-fA-F]+)_?(@intSuffixes)?/, { token: 'number' }],
            //Integer
            [/[\d][\d_]*(@intSuffixes?)?/, { token: 'number' }]
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL3J1c3QvcnVzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLFdBQVcsS0FBSztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsU0FBUyxZQUFZLEdBQUc7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyxzREFBc0Q7QUFDL0QsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTLFNBQVMsWUFBWSxHQUFHO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLEVBQUUsSUFBSSxHQUFHLElBQUksRUFBRTtBQUNqRDtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMkRBQTJEO0FBQzlFLGFBQWEsc0JBQXNCO0FBQ25DO0FBQ0EsYUFBYSx5QkFBeUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLDBCQUEwQixTQUFTLDJDQUEyQyxFQUFFO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHlEQUF5RDtBQUM1RTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsa0JBQWtCO0FBQzlEO0FBQ0EsNENBQTRDLGtCQUFrQjtBQUM5RDtBQUNBLDBFQUEwRSxrQkFBa0I7QUFDNUY7QUFDQSxvREFBb0Qsa0JBQWtCO0FBQ3RFO0FBQ0Esa0RBQWtELGtCQUFrQjtBQUNwRTtBQUNBLDRDQUE0QyxrQkFBa0I7QUFDOUQ7QUFDQTtBQUNBIiwiZmlsZSI6IjUzLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuZXhwb3J0IHZhciBjb25mID0ge1xuICAgIGNvbW1lbnRzOiB7XG4gICAgICAgIGxpbmVDb21tZW50OiAnLy8nLFxuICAgICAgICBibG9ja0NvbW1lbnQ6IFsnLyonLCAnKi8nXVxuICAgIH0sXG4gICAgYnJhY2tldHM6IFtcbiAgICAgICAgWyd7JywgJ30nXSxcbiAgICAgICAgWydbJywgJ10nXSxcbiAgICAgICAgWycoJywgJyknXVxuICAgIF0sXG4gICAgYXV0b0Nsb3NpbmdQYWlyczogW1xuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxuICAgICAgICB7IG9wZW46IFwiJ1wiLCBjbG9zZTogXCInXCIsIG5vdEluOiBbJ3N0cmluZycsICdjb21tZW50J10gfSxcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJywgbm90SW46IFsnc3RyaW5nJ10gfVxuICAgIF0sXG4gICAgc3Vycm91bmRpbmdQYWlyczogW1xuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH0sXG4gICAgICAgIHsgb3BlbjogXCInXCIsIGNsb3NlOiBcIidcIiB9XG4gICAgXSxcbiAgICBmb2xkaW5nOiB7XG4gICAgICAgIG1hcmtlcnM6IHtcbiAgICAgICAgICAgIHN0YXJ0OiBuZXcgUmVnRXhwKCdeXFxcXHMqI3ByYWdtYVxcXFxzK3JlZ2lvblxcXFxiJyksXG4gICAgICAgICAgICBlbmQ6IG5ldyBSZWdFeHAoJ15cXFxccyojcHJhZ21hXFxcXHMrZW5kcmVnaW9uXFxcXGInKVxuICAgICAgICB9XG4gICAgfVxufTtcbmV4cG9ydCB2YXIgbGFuZ3VhZ2UgPSB7XG4gICAgdG9rZW5Qb3N0Zml4OiAnLnJ1c3QnLFxuICAgIGRlZmF1bHRUb2tlbjogJ2ludmFsaWQnLFxuICAgIGtleXdvcmRzOiBbXG4gICAgICAgICdhcycsXG4gICAgICAgICdib3gnLFxuICAgICAgICAnYnJlYWsnLFxuICAgICAgICAnY29uc3QnLFxuICAgICAgICAnY29udGludWUnLFxuICAgICAgICAnY3JhdGUnLFxuICAgICAgICAnZWxzZScsXG4gICAgICAgICdlbnVtJyxcbiAgICAgICAgJ2V4dGVybicsXG4gICAgICAgICdmYWxzZScsXG4gICAgICAgICdmbicsXG4gICAgICAgICdmb3InLFxuICAgICAgICAnaWYnLFxuICAgICAgICAnaW1wbCcsXG4gICAgICAgICdpbicsXG4gICAgICAgICdsZXQnLFxuICAgICAgICAnbG9vcCcsXG4gICAgICAgICdtYXRjaCcsXG4gICAgICAgICdtb2QnLFxuICAgICAgICAnbW92ZScsXG4gICAgICAgICdtdXQnLFxuICAgICAgICAncHViJyxcbiAgICAgICAgJ3JlZicsXG4gICAgICAgICdyZXR1cm4nLFxuICAgICAgICAnc2VsZicsXG4gICAgICAgICdzdGF0aWMnLFxuICAgICAgICAnc3RydWN0JyxcbiAgICAgICAgJ3N1cGVyJyxcbiAgICAgICAgJ3RyYWl0JyxcbiAgICAgICAgJ3RydWUnLFxuICAgICAgICAndHlwZScsXG4gICAgICAgICd1bnNhZmUnLFxuICAgICAgICAndXNlJyxcbiAgICAgICAgJ3doZXJlJyxcbiAgICAgICAgJ3doaWxlJyxcbiAgICAgICAgJ2NhdGNoJyxcbiAgICAgICAgJ2RlZmF1bHQnLFxuICAgICAgICAndW5pb24nLFxuICAgICAgICAnc3RhdGljJyxcbiAgICAgICAgJ2Fic3RyYWN0JyxcbiAgICAgICAgJ2FsaWdub2YnLFxuICAgICAgICAnYmVjb21lJyxcbiAgICAgICAgJ2RvJyxcbiAgICAgICAgJ2ZpbmFsJyxcbiAgICAgICAgJ21hY3JvJyxcbiAgICAgICAgJ29mZnNldG9mJyxcbiAgICAgICAgJ292ZXJyaWRlJyxcbiAgICAgICAgJ3ByaXYnLFxuICAgICAgICAncHJvYycsXG4gICAgICAgICdwdXJlJyxcbiAgICAgICAgJ3NpemVvZicsXG4gICAgICAgICd0eXBlb2YnLFxuICAgICAgICAndW5zaXplZCcsXG4gICAgICAgICd2aXJ0dWFsJyxcbiAgICAgICAgJ3lpZWxkJ1xuICAgIF0sXG4gICAgdHlwZUtleXdvcmRzOiBbXG4gICAgICAgICdTZWxmJyxcbiAgICAgICAgJ20zMicsXG4gICAgICAgICdtNjQnLFxuICAgICAgICAnbTEyOCcsXG4gICAgICAgICdmODAnLFxuICAgICAgICAnZjE2JyxcbiAgICAgICAgJ2YxMjgnLFxuICAgICAgICAnaW50JyxcbiAgICAgICAgJ3VpbnQnLFxuICAgICAgICAnZmxvYXQnLFxuICAgICAgICAnY2hhcicsXG4gICAgICAgICdib29sJyxcbiAgICAgICAgJ3U4JyxcbiAgICAgICAgJ3UxNicsXG4gICAgICAgICd1MzInLFxuICAgICAgICAndTY0JyxcbiAgICAgICAgJ2YzMicsXG4gICAgICAgICdmNjQnLFxuICAgICAgICAnaTgnLFxuICAgICAgICAnaTE2JyxcbiAgICAgICAgJ2kzMicsXG4gICAgICAgICdpNjQnLFxuICAgICAgICAnc3RyJyxcbiAgICAgICAgJ09wdGlvbicsXG4gICAgICAgICdFaXRoZXInLFxuICAgICAgICAnY19mbG9hdCcsXG4gICAgICAgICdjX2RvdWJsZScsXG4gICAgICAgICdjX3ZvaWQnLFxuICAgICAgICAnRklMRScsXG4gICAgICAgICdmcG9zX3QnLFxuICAgICAgICAnRElSJyxcbiAgICAgICAgJ2RpcmVudCcsXG4gICAgICAgICdjX2NoYXInLFxuICAgICAgICAnY19zY2hhcicsXG4gICAgICAgICdjX3VjaGFyJyxcbiAgICAgICAgJ2Nfc2hvcnQnLFxuICAgICAgICAnY191c2hvcnQnLFxuICAgICAgICAnY19pbnQnLFxuICAgICAgICAnY191aW50JyxcbiAgICAgICAgJ2NfbG9uZycsXG4gICAgICAgICdjX3Vsb25nJyxcbiAgICAgICAgJ3NpemVfdCcsXG4gICAgICAgICdwdHJkaWZmX3QnLFxuICAgICAgICAnY2xvY2tfdCcsXG4gICAgICAgICd0aW1lX3QnLFxuICAgICAgICAnY19sb25nbG9uZycsXG4gICAgICAgICdjX3Vsb25nbG9uZycsXG4gICAgICAgICdpbnRwdHJfdCcsXG4gICAgICAgICd1aW50cHRyX3QnLFxuICAgICAgICAnb2ZmX3QnLFxuICAgICAgICAnZGV2X3QnLFxuICAgICAgICAnaW5vX3QnLFxuICAgICAgICAncGlkX3QnLFxuICAgICAgICAnbW9kZV90JyxcbiAgICAgICAgJ3NzaXplX3QnXG4gICAgXSxcbiAgICBjb25zdGFudHM6IFsndHJ1ZScsICdmYWxzZScsICdTb21lJywgJ05vbmUnLCAnTGVmdCcsICdSaWdodCcsICdPaycsICdFcnInXSxcbiAgICBzdXBwb3J0Q29uc3RhbnRzOiBbXG4gICAgICAgICdFWElUX0ZBSUxVUkUnLFxuICAgICAgICAnRVhJVF9TVUNDRVNTJyxcbiAgICAgICAgJ1JBTkRfTUFYJyxcbiAgICAgICAgJ0VPRicsXG4gICAgICAgICdTRUVLX1NFVCcsXG4gICAgICAgICdTRUVLX0NVUicsXG4gICAgICAgICdTRUVLX0VORCcsXG4gICAgICAgICdfSU9GQkYnLFxuICAgICAgICAnX0lPTkJGJyxcbiAgICAgICAgJ19JT0xCRicsXG4gICAgICAgICdCVUZTSVonLFxuICAgICAgICAnRk9QRU5fTUFYJyxcbiAgICAgICAgJ0ZJTEVOQU1FX01BWCcsXG4gICAgICAgICdMX3RtcG5hbScsXG4gICAgICAgICdUTVBfTUFYJyxcbiAgICAgICAgJ09fUkRPTkxZJyxcbiAgICAgICAgJ09fV1JPTkxZJyxcbiAgICAgICAgJ09fUkRXUicsXG4gICAgICAgICdPX0FQUEVORCcsXG4gICAgICAgICdPX0NSRUFUJyxcbiAgICAgICAgJ09fRVhDTCcsXG4gICAgICAgICdPX1RSVU5DJyxcbiAgICAgICAgJ1NfSUZJRk8nLFxuICAgICAgICAnU19JRkNIUicsXG4gICAgICAgICdTX0lGQkxLJyxcbiAgICAgICAgJ1NfSUZESVInLFxuICAgICAgICAnU19JRlJFRycsXG4gICAgICAgICdTX0lGTVQnLFxuICAgICAgICAnU19JRVhFQycsXG4gICAgICAgICdTX0lXUklURScsXG4gICAgICAgICdTX0lSRUFEJyxcbiAgICAgICAgJ1NfSVJXWFUnLFxuICAgICAgICAnU19JWFVTUicsXG4gICAgICAgICdTX0lXVVNSJyxcbiAgICAgICAgJ1NfSVJVU1InLFxuICAgICAgICAnRl9PSycsXG4gICAgICAgICdSX09LJyxcbiAgICAgICAgJ1dfT0snLFxuICAgICAgICAnWF9PSycsXG4gICAgICAgICdTVERJTl9GSUxFTk8nLFxuICAgICAgICAnU1RET1VUX0ZJTEVOTycsXG4gICAgICAgICdTVERFUlJfRklMRU5PJ1xuICAgIF0sXG4gICAgc3VwcG9ydE1hY3JvczogW1xuICAgICAgICAnZm9ybWF0IScsXG4gICAgICAgICdwcmludCEnLFxuICAgICAgICAncHJpbnRsbiEnLFxuICAgICAgICAncGFuaWMhJyxcbiAgICAgICAgJ2Zvcm1hdF9hcmdzIScsXG4gICAgICAgICd1bnJlYWNoYWJsZSEnLFxuICAgICAgICAnd3JpdGUhJyxcbiAgICAgICAgJ3dyaXRlbG4hJ1xuICAgIF0sXG4gICAgb3BlcmF0b3JzOiBbXG4gICAgICAgICchJyxcbiAgICAgICAgJyE9JyxcbiAgICAgICAgJyUnLFxuICAgICAgICAnJT0nLFxuICAgICAgICAnJicsXG4gICAgICAgICcmPScsXG4gICAgICAgICcmJicsXG4gICAgICAgICcqJyxcbiAgICAgICAgJyo9JyxcbiAgICAgICAgJysnLFxuICAgICAgICAnKz0nLFxuICAgICAgICAnLScsXG4gICAgICAgICctPScsXG4gICAgICAgICctPicsXG4gICAgICAgICcuJyxcbiAgICAgICAgJy4uJyxcbiAgICAgICAgJy4uLicsXG4gICAgICAgICcvJyxcbiAgICAgICAgJy89JyxcbiAgICAgICAgJzonLFxuICAgICAgICAnOycsXG4gICAgICAgICc8PCcsXG4gICAgICAgICc8PD0nLFxuICAgICAgICAnPCcsXG4gICAgICAgICc8PScsXG4gICAgICAgICc9JyxcbiAgICAgICAgJz09JyxcbiAgICAgICAgJz0+JyxcbiAgICAgICAgJz4nLFxuICAgICAgICAnPj0nLFxuICAgICAgICAnPj4nLFxuICAgICAgICAnPj49JyxcbiAgICAgICAgJ0AnLFxuICAgICAgICAnXicsXG4gICAgICAgICdePScsXG4gICAgICAgICd8JyxcbiAgICAgICAgJ3w9JyxcbiAgICAgICAgJ3x8JyxcbiAgICAgICAgJ18nLFxuICAgICAgICAnPycsXG4gICAgICAgICcjJ1xuICAgIF0sXG4gICAgZXNjYXBlczogL1xcXFwoW25ydDBcXFwiJydcXFxcXXx4XFxoezJ9fHVcXHtcXGh7MSw2fVxcfSkvLFxuICAgIGRlbGltaXRlcnM6IC9bLF0vLFxuICAgIHN5bWJvbHM6IC9bXFwjXFwhXFwlXFwmXFwqXFwrXFwtXFwuXFwvXFw6XFw7XFw8XFw9XFw+XFxAXFxeXFx8X1xcP10rLyxcbiAgICBpbnRTdWZmaXhlczogL1tpdV0oOHwxNnwzMnw2NHwxMjh8c2l6ZSkvLFxuICAgIGZsb2F0U3VmZml4ZXM6IC9mKDMyfDY0KS8sXG4gICAgdG9rZW5pemVyOiB7XG4gICAgICAgIHJvb3Q6IFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvW2EtekEtWl1bYS16QS1aMC05X10qIT98X1thLXpBLVowLTlfXSsvLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdAdHlwZUtleXdvcmRzJzogJ2tleXdvcmQudHlwZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGtleXdvcmRzJzogJ2tleXdvcmQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BzdXBwb3J0Q29uc3RhbnRzJzogJ2tleXdvcmQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BzdXBwb3J0TWFjcm9zJzogJ2tleXdvcmQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0Bjb25zdGFudHMnOiAna2V5d29yZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnaWRlbnRpZmllcidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAvLyBEZXNpZ25hdG9yXG4gICAgICAgICAgICBbL1xcJC8sICdpZGVudGlmaWVyJ10sXG4gICAgICAgICAgICAvLyBMaWZldGltZSBhbm5vdGF0aW9uc1xuICAgICAgICAgICAgWy8nW2EtekEtWl9dW2EtekEtWjAtOV9dKig/PVteXFwnXSkvLCAnaWRlbnRpZmllciddLFxuICAgICAgICAgICAgLy8gQnl0ZSBsaXRlcmFsXG4gICAgICAgICAgICBbLydcXFMnLywgJ3N0cmluZy5ieXRlbGl0ZXJhbCddLFxuICAgICAgICAgICAgLy8gU3RyaW5nc1xuICAgICAgICAgICAgWy9cIi8sIHsgdG9rZW46ICdzdHJpbmcucXVvdGUnLCBicmFja2V0OiAnQG9wZW4nLCBuZXh0OiAnQHN0cmluZycgfV0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAbnVtYmVycycgfSxcbiAgICAgICAgICAgIC8vIFdoaXRlc3BhY2UgKyBjb21tZW50c1xuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHdoaXRlc3BhY2UnIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL0BkZWxpbWl0ZXJzLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQGtleXdvcmRzJzogJ2tleXdvcmQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ2RlbGltaXRlcidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbL1t7fSgpXFxbXFxdPD5dLywgJ0BicmFja2V0cyddLFxuICAgICAgICAgICAgWy9Ac3ltYm9scy8sIHsgY2FzZXM6IHsgJ0BvcGVyYXRvcnMnOiAnb3BlcmF0b3InLCAnQGRlZmF1bHQnOiAnJyB9IH1dXG4gICAgICAgIF0sXG4gICAgICAgIHdoaXRlc3BhY2U6IFtcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy8sICd3aGl0ZSddLFxuICAgICAgICAgICAgWy9cXC9cXCovLCAnY29tbWVudCcsICdAY29tbWVudCddLFxuICAgICAgICAgICAgWy9cXC9cXC8uKiQvLCAnY29tbWVudCddXG4gICAgICAgIF0sXG4gICAgICAgIGNvbW1lbnQ6IFtcbiAgICAgICAgICAgIFsvW15cXC8qXSsvLCAnY29tbWVudCddLFxuICAgICAgICAgICAgWy9cXC9cXCovLCAnY29tbWVudCcsICdAcHVzaCddLFxuICAgICAgICAgICAgWydcXFxcKi8nLCAnY29tbWVudCcsICdAcG9wJ10sXG4gICAgICAgICAgICBbL1tcXC8qXS8sICdjb21tZW50J11cbiAgICAgICAgXSxcbiAgICAgICAgc3RyaW5nOiBbXG4gICAgICAgICAgICBbL1teXFxcXFwiXSsvLCAnc3RyaW5nJ10sXG4gICAgICAgICAgICBbL0Blc2NhcGVzLywgJ3N0cmluZy5lc2NhcGUnXSxcbiAgICAgICAgICAgIFsvXFxcXC4vLCAnc3RyaW5nLmVzY2FwZS5pbnZhbGlkJ10sXG4gICAgICAgICAgICBbL1wiLywgeyB0b2tlbjogJ3N0cmluZy5xdW90ZScsIGJyYWNrZXQ6ICdAY2xvc2UnLCBuZXh0OiAnQHBvcCcgfV1cbiAgICAgICAgXSxcbiAgICAgICAgbnVtYmVyczogW1xuICAgICAgICAgICAgLy9PY3RhbFxuICAgICAgICAgICAgWy8oMG9bMC03X10rKShAaW50U3VmZml4ZXMpPy8sIHsgdG9rZW46ICdudW1iZXInIH1dLFxuICAgICAgICAgICAgLy9CaW5hcnlcbiAgICAgICAgICAgIFsvKDBiWzAtMV9dKykoQGludFN1ZmZpeGVzKT8vLCB7IHRva2VuOiAnbnVtYmVyJyB9XSxcbiAgICAgICAgICAgIC8vRXhwb25lbnRcbiAgICAgICAgICAgIFsvW1xcZF1bXFxkX10qKFxcLltcXGRdW1xcZF9dKik/W2VFXVsrLV1bXFxkX10rKEBmbG9hdFN1ZmZpeGVzKT8vLCB7IHRva2VuOiAnbnVtYmVyJyB9XSxcbiAgICAgICAgICAgIC8vRmxvYXRcbiAgICAgICAgICAgIFsvXFxiKFxcZFxcLj9bXFxkX10qKShAZmxvYXRTdWZmaXhlcyk/XFxiLywgeyB0b2tlbjogJ251bWJlcicgfV0sXG4gICAgICAgICAgICAvL0hleGFkZWNpbWFsXG4gICAgICAgICAgICBbLygweFtcXGRhLWZBLUZdKylfPyhAaW50U3VmZml4ZXMpPy8sIHsgdG9rZW46ICdudW1iZXInIH1dLFxuICAgICAgICAgICAgLy9JbnRlZ2VyXG4gICAgICAgICAgICBbL1tcXGRdW1xcZF9dKihAaW50U3VmZml4ZXM/KT8vLCB7IHRva2VuOiAnbnVtYmVyJyB9XVxuICAgICAgICBdXG4gICAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=