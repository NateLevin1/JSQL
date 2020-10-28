(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[63],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/swift/swift.js":
/*!**************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/swift/swift.js ***!
  \**************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conf", function() { return conf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "language", function() { return language; });
/*!---------------------------------------------------------------------------------------------
 *  Copyright (C) David Owens II, owensd.io. All rights reserved.
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
    tokenPostfix: '.swift',
    // TODO(owensd): Support the full range of unicode valid identifiers.
    identifier: /[a-zA-Z_][\w$]*/,
    // TODO(owensd): Support the @availability macro properly.
    attributes: [
        '@autoclosure',
        '@noescape',
        '@noreturn',
        '@NSApplicationMain',
        '@NSCopying',
        '@NSManaged',
        '@objc',
        '@UIApplicationMain',
        '@noreturn',
        '@availability',
        '@IBAction',
        '@IBDesignable',
        '@IBInspectable',
        '@IBOutlet'
    ],
    accessmodifiers: ['public', 'private', 'internal'],
    keywords: [
        '__COLUMN__',
        '__FILE__',
        '__FUNCTION__',
        '__LINE__',
        'as',
        'as!',
        'as?',
        'associativity',
        'break',
        'case',
        'catch',
        'class',
        'continue',
        'convenience',
        'default',
        'deinit',
        'didSet',
        'do',
        'dynamic',
        'dynamicType',
        'else',
        'enum',
        'extension',
        'fallthrough',
        'final',
        'for',
        'func',
        'get',
        'guard',
        'if',
        'import',
        'in',
        'infix',
        'init',
        'inout',
        'internal',
        'is',
        'lazy',
        'left',
        'let',
        'mutating',
        'nil',
        'none',
        'nonmutating',
        'operator',
        'optional',
        'override',
        'postfix',
        'precedence',
        'prefix',
        'private',
        'protocol',
        'Protocol',
        'public',
        'repeat',
        'required',
        'return',
        'right',
        'self',
        'Self',
        'set',
        'static',
        'struct',
        'subscript',
        'super',
        'switch',
        'throw',
        'throws',
        'try',
        'try!',
        'Type',
        'typealias',
        'unowned',
        'var',
        'weak',
        'where',
        'while',
        'willSet',
        'FALSE',
        'TRUE'
    ],
    symbols: /[=(){}\[\].,:;@#\_&\-<>`?!+*\\\/]/,
    // Moved . to operatorstart so it can be a delimiter
    operatorstart: /[\/=\-+!*%<>&|^~?\u00A1-\u00A7\u00A9\u00AB\u00AC\u00AE\u00B0-\u00B1\u00B6\u00BB\u00BF\u00D7\u00F7\u2016-\u2017\u2020-\u2027\u2030-\u203E\u2041-\u2053\u2055-\u205E\u2190-\u23FF\u2500-\u2775\u2794-\u2BFF\u2E00-\u2E7F\u3001-\u3003\u3008-\u3030]/,
    operatorend: /[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE00-\uFE0F\uFE20-\uFE2F\uE0100-\uE01EF]/,
    operators: /(@operatorstart)((@operatorstart)|(@operatorend))*/,
    // TODO(owensd): These are borrowed from C#; need to validate correctness for Swift.
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    tokenizer: {
        root: [
            { include: '@whitespace' },
            { include: '@comment' },
            { include: '@attribute' },
            { include: '@literal' },
            { include: '@keyword' },
            { include: '@invokedmethod' },
            { include: '@symbol' }
        ],
        whitespace: [
            [/\s+/, 'white'],
            [/"""/, 'string.quote', '@endDblDocString']
        ],
        endDblDocString: [
            [/[^"]+/, 'string'],
            [/\\"/, 'string'],
            [/"""/, 'string.quote', '@popall'],
            [/"/, 'string']
        ],
        symbol: [
            [/[{}()\[\]]/, '@brackets'],
            [/[<>](?!@symbols)/, '@brackets'],
            [/[.]/, 'delimiter'],
            [/@operators/, 'operator'],
            [/@symbols/, 'operator']
        ],
        comment: [
            [/\/\/\/.*$/, 'comment.doc'],
            [/\/\*\*/, 'comment.doc', '@commentdocbody'],
            [/\/\/.*$/, 'comment'],
            [/\/\*/, 'comment', '@commentbody']
        ],
        commentdocbody: [
            [/\/\*/, 'comment', '@commentbody'],
            [/\*\//, 'comment.doc', '@pop'],
            [/\:[a-zA-Z]+\:/, 'comment.doc.param'],
            [/./, 'comment.doc']
        ],
        commentbody: [
            [/\/\*/, 'comment', '@commentbody'],
            [/\*\//, 'comment', '@pop'],
            [/./, 'comment']
        ],
        attribute: [
            [
                /\@@identifier/,
                {
                    cases: {
                        '@attributes': 'keyword.control',
                        '@default': ''
                    }
                }
            ]
        ],
        literal: [
            [/"/, { token: 'string.quote', next: '@stringlit' }],
            [/0[b]([01]_?)+/, 'number.binary'],
            [/0[o]([0-7]_?)+/, 'number.octal'],
            [/0[x]([0-9a-fA-F]_?)+([pP][\-+](\d_?)+)?/, 'number.hex'],
            [/(\d_?)*\.(\d_?)+([eE][\-+]?(\d_?)+)?/, 'number.float'],
            [/(\d_?)+/, 'number']
        ],
        stringlit: [
            [/\\\(/, { token: 'operator', next: '@interpolatedexpression' }],
            [/@escapes/, 'string'],
            [/\\./, 'string.escape.invalid'],
            [/"/, { token: 'string.quote', next: '@pop' }],
            [/./, 'string']
        ],
        interpolatedexpression: [
            [/\(/, { token: 'operator', next: '@interpolatedexpression' }],
            [/\)/, { token: 'operator', next: '@pop' }],
            { include: '@literal' },
            { include: '@keyword' },
            { include: '@symbol' }
        ],
        keyword: [
            [/`/, { token: 'operator', next: '@escapedkeyword' }],
            [
                /@identifier/,
                {
                    cases: {
                        '@keywords': 'keyword',
                        '[A-Z][a-zA-Z0-9$]*': 'type.identifier',
                        '@default': 'identifier'
                    }
                }
            ]
        ],
        escapedkeyword: [
            [/`/, { token: 'operator', next: '@pop' }],
            [/./, 'identifier']
        ],
        //		symbol: [
        //			[ /@symbols/, 'operator' ],
        //			[ /@operators/, 'operator' ]
        //		],
        invokedmethod: [
            [
                /([.])(@identifier)/,
                {
                    cases: {
                        $2: ['delimeter', 'type.identifier'],
                        '@default': ''
                    }
                }
            ]
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL3N3aWZ0L3N3aWZ0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLFdBQVcsS0FBSztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxZQUFZLEdBQUc7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTLFNBQVMsWUFBWSxHQUFHO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVM7QUFDVDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQsOENBQThDLElBQUksY0FBYyxFQUFFLGNBQWMsRUFBRTtBQUNsRjtBQUNBO0FBQ0EsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSxzQkFBc0I7QUFDbkMsYUFBYSx3QkFBd0I7QUFDckMsYUFBYSxzQkFBc0I7QUFDbkMsYUFBYSxzQkFBc0I7QUFDbkMsYUFBYSw0QkFBNEI7QUFDekMsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiw0Q0FBNEM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IscURBQXFEO0FBQzNFO0FBQ0E7QUFDQSxtQkFBbUIsc0NBQXNDO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixxREFBcUQ7QUFDekUsb0JBQW9CLGtDQUFrQztBQUN0RCxhQUFhLHNCQUFzQjtBQUNuQyxhQUFhLHNCQUFzQjtBQUNuQyxhQUFhO0FBQ2I7QUFDQTtBQUNBLG1CQUFtQiw2Q0FBNkM7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGtDQUFrQztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiI2My5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiEtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKEMpIERhdmlkIE93ZW5zIElJLCBvd2Vuc2QuaW8uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmV4cG9ydCB2YXIgY29uZiA9IHtcbiAgICBjb21tZW50czoge1xuICAgICAgICBsaW5lQ29tbWVudDogJy8vJyxcbiAgICAgICAgYmxvY2tDb21tZW50OiBbJy8qJywgJyovJ11cbiAgICB9LFxuICAgIGJyYWNrZXRzOiBbXG4gICAgICAgIFsneycsICd9J10sXG4gICAgICAgIFsnWycsICddJ10sXG4gICAgICAgIFsnKCcsICcpJ11cbiAgICBdLFxuICAgIGF1dG9DbG9zaW5nUGFpcnM6IFtcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9LFxuICAgICAgICB7IG9wZW46IFwiJ1wiLCBjbG9zZTogXCInXCIgfSxcbiAgICAgICAgeyBvcGVuOiAnYCcsIGNsb3NlOiAnYCcgfVxuICAgIF0sXG4gICAgc3Vycm91bmRpbmdQYWlyczogW1xuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH0sXG4gICAgICAgIHsgb3BlbjogXCInXCIsIGNsb3NlOiBcIidcIiB9LFxuICAgICAgICB7IG9wZW46ICdgJywgY2xvc2U6ICdgJyB9XG4gICAgXVxufTtcbmV4cG9ydCB2YXIgbGFuZ3VhZ2UgPSB7XG4gICAgZGVmYXVsdFRva2VuOiAnJyxcbiAgICB0b2tlblBvc3RmaXg6ICcuc3dpZnQnLFxuICAgIC8vIFRPRE8ob3dlbnNkKTogU3VwcG9ydCB0aGUgZnVsbCByYW5nZSBvZiB1bmljb2RlIHZhbGlkIGlkZW50aWZpZXJzLlxuICAgIGlkZW50aWZpZXI6IC9bYS16QS1aX11bXFx3JF0qLyxcbiAgICAvLyBUT0RPKG93ZW5zZCk6IFN1cHBvcnQgdGhlIEBhdmFpbGFiaWxpdHkgbWFjcm8gcHJvcGVybHkuXG4gICAgYXR0cmlidXRlczogW1xuICAgICAgICAnQGF1dG9jbG9zdXJlJyxcbiAgICAgICAgJ0Bub2VzY2FwZScsXG4gICAgICAgICdAbm9yZXR1cm4nLFxuICAgICAgICAnQE5TQXBwbGljYXRpb25NYWluJyxcbiAgICAgICAgJ0BOU0NvcHlpbmcnLFxuICAgICAgICAnQE5TTWFuYWdlZCcsXG4gICAgICAgICdAb2JqYycsXG4gICAgICAgICdAVUlBcHBsaWNhdGlvbk1haW4nLFxuICAgICAgICAnQG5vcmV0dXJuJyxcbiAgICAgICAgJ0BhdmFpbGFiaWxpdHknLFxuICAgICAgICAnQElCQWN0aW9uJyxcbiAgICAgICAgJ0BJQkRlc2lnbmFibGUnLFxuICAgICAgICAnQElCSW5zcGVjdGFibGUnLFxuICAgICAgICAnQElCT3V0bGV0J1xuICAgIF0sXG4gICAgYWNjZXNzbW9kaWZpZXJzOiBbJ3B1YmxpYycsICdwcml2YXRlJywgJ2ludGVybmFsJ10sXG4gICAga2V5d29yZHM6IFtcbiAgICAgICAgJ19fQ09MVU1OX18nLFxuICAgICAgICAnX19GSUxFX18nLFxuICAgICAgICAnX19GVU5DVElPTl9fJyxcbiAgICAgICAgJ19fTElORV9fJyxcbiAgICAgICAgJ2FzJyxcbiAgICAgICAgJ2FzIScsXG4gICAgICAgICdhcz8nLFxuICAgICAgICAnYXNzb2NpYXRpdml0eScsXG4gICAgICAgICdicmVhaycsXG4gICAgICAgICdjYXNlJyxcbiAgICAgICAgJ2NhdGNoJyxcbiAgICAgICAgJ2NsYXNzJyxcbiAgICAgICAgJ2NvbnRpbnVlJyxcbiAgICAgICAgJ2NvbnZlbmllbmNlJyxcbiAgICAgICAgJ2RlZmF1bHQnLFxuICAgICAgICAnZGVpbml0JyxcbiAgICAgICAgJ2RpZFNldCcsXG4gICAgICAgICdkbycsXG4gICAgICAgICdkeW5hbWljJyxcbiAgICAgICAgJ2R5bmFtaWNUeXBlJyxcbiAgICAgICAgJ2Vsc2UnLFxuICAgICAgICAnZW51bScsXG4gICAgICAgICdleHRlbnNpb24nLFxuICAgICAgICAnZmFsbHRocm91Z2gnLFxuICAgICAgICAnZmluYWwnLFxuICAgICAgICAnZm9yJyxcbiAgICAgICAgJ2Z1bmMnLFxuICAgICAgICAnZ2V0JyxcbiAgICAgICAgJ2d1YXJkJyxcbiAgICAgICAgJ2lmJyxcbiAgICAgICAgJ2ltcG9ydCcsXG4gICAgICAgICdpbicsXG4gICAgICAgICdpbmZpeCcsXG4gICAgICAgICdpbml0JyxcbiAgICAgICAgJ2lub3V0JyxcbiAgICAgICAgJ2ludGVybmFsJyxcbiAgICAgICAgJ2lzJyxcbiAgICAgICAgJ2xhenknLFxuICAgICAgICAnbGVmdCcsXG4gICAgICAgICdsZXQnLFxuICAgICAgICAnbXV0YXRpbmcnLFxuICAgICAgICAnbmlsJyxcbiAgICAgICAgJ25vbmUnLFxuICAgICAgICAnbm9ubXV0YXRpbmcnLFxuICAgICAgICAnb3BlcmF0b3InLFxuICAgICAgICAnb3B0aW9uYWwnLFxuICAgICAgICAnb3ZlcnJpZGUnLFxuICAgICAgICAncG9zdGZpeCcsXG4gICAgICAgICdwcmVjZWRlbmNlJyxcbiAgICAgICAgJ3ByZWZpeCcsXG4gICAgICAgICdwcml2YXRlJyxcbiAgICAgICAgJ3Byb3RvY29sJyxcbiAgICAgICAgJ1Byb3RvY29sJyxcbiAgICAgICAgJ3B1YmxpYycsXG4gICAgICAgICdyZXBlYXQnLFxuICAgICAgICAncmVxdWlyZWQnLFxuICAgICAgICAncmV0dXJuJyxcbiAgICAgICAgJ3JpZ2h0JyxcbiAgICAgICAgJ3NlbGYnLFxuICAgICAgICAnU2VsZicsXG4gICAgICAgICdzZXQnLFxuICAgICAgICAnc3RhdGljJyxcbiAgICAgICAgJ3N0cnVjdCcsXG4gICAgICAgICdzdWJzY3JpcHQnLFxuICAgICAgICAnc3VwZXInLFxuICAgICAgICAnc3dpdGNoJyxcbiAgICAgICAgJ3Rocm93JyxcbiAgICAgICAgJ3Rocm93cycsXG4gICAgICAgICd0cnknLFxuICAgICAgICAndHJ5IScsXG4gICAgICAgICdUeXBlJyxcbiAgICAgICAgJ3R5cGVhbGlhcycsXG4gICAgICAgICd1bm93bmVkJyxcbiAgICAgICAgJ3ZhcicsXG4gICAgICAgICd3ZWFrJyxcbiAgICAgICAgJ3doZXJlJyxcbiAgICAgICAgJ3doaWxlJyxcbiAgICAgICAgJ3dpbGxTZXQnLFxuICAgICAgICAnRkFMU0UnLFxuICAgICAgICAnVFJVRSdcbiAgICBdLFxuICAgIHN5bWJvbHM6IC9bPSgpe31cXFtcXF0uLDo7QCNcXF8mXFwtPD5gPyErKlxcXFxcXC9dLyxcbiAgICAvLyBNb3ZlZCAuIHRvIG9wZXJhdG9yc3RhcnQgc28gaXQgY2FuIGJlIGEgZGVsaW1pdGVyXG4gICAgb3BlcmF0b3JzdGFydDogL1tcXC89XFwtKyEqJTw+Jnxefj9cXHUwMEExLVxcdTAwQTdcXHUwMEE5XFx1MDBBQlxcdTAwQUNcXHUwMEFFXFx1MDBCMC1cXHUwMEIxXFx1MDBCNlxcdTAwQkJcXHUwMEJGXFx1MDBEN1xcdTAwRjdcXHUyMDE2LVxcdTIwMTdcXHUyMDIwLVxcdTIwMjdcXHUyMDMwLVxcdTIwM0VcXHUyMDQxLVxcdTIwNTNcXHUyMDU1LVxcdTIwNUVcXHUyMTkwLVxcdTIzRkZcXHUyNTAwLVxcdTI3NzVcXHUyNzk0LVxcdTJCRkZcXHUyRTAwLVxcdTJFN0ZcXHUzMDAxLVxcdTMwMDNcXHUzMDA4LVxcdTMwMzBdLyxcbiAgICBvcGVyYXRvcmVuZDogL1tcXHUwMzAwLVxcdTAzNkZcXHUxREMwLVxcdTFERkZcXHUyMEQwLVxcdTIwRkZcXHVGRTAwLVxcdUZFMEZcXHVGRTIwLVxcdUZFMkZcXHVFMDEwMC1cXHVFMDFFRl0vLFxuICAgIG9wZXJhdG9yczogLyhAb3BlcmF0b3JzdGFydCkoKEBvcGVyYXRvcnN0YXJ0KXwoQG9wZXJhdG9yZW5kKSkqLyxcbiAgICAvLyBUT0RPKG93ZW5zZCk6IFRoZXNlIGFyZSBib3Jyb3dlZCBmcm9tIEMjOyBuZWVkIHRvIHZhbGlkYXRlIGNvcnJlY3RuZXNzIGZvciBTd2lmdC5cbiAgICBlc2NhcGVzOiAvXFxcXCg/OlthYmZucnR2XFxcXFwiJ118eFswLTlBLUZhLWZdezEsNH18dVswLTlBLUZhLWZdezR9fFVbMC05QS1GYS1mXXs4fSkvLFxuICAgIHRva2VuaXplcjoge1xuICAgICAgICByb290OiBbXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAd2hpdGVzcGFjZScgfSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0Bjb21tZW50JyB9LFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGF0dHJpYnV0ZScgfSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BsaXRlcmFsJyB9LFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGtleXdvcmQnIH0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAaW52b2tlZG1ldGhvZCcgfSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BzeW1ib2wnIH1cbiAgICAgICAgXSxcbiAgICAgICAgd2hpdGVzcGFjZTogW1xuICAgICAgICAgICAgWy9cXHMrLywgJ3doaXRlJ10sXG4gICAgICAgICAgICBbL1wiXCJcIi8sICdzdHJpbmcucXVvdGUnLCAnQGVuZERibERvY1N0cmluZyddXG4gICAgICAgIF0sXG4gICAgICAgIGVuZERibERvY1N0cmluZzogW1xuICAgICAgICAgICAgWy9bXlwiXSsvLCAnc3RyaW5nJ10sXG4gICAgICAgICAgICBbL1xcXFxcIi8sICdzdHJpbmcnXSxcbiAgICAgICAgICAgIFsvXCJcIlwiLywgJ3N0cmluZy5xdW90ZScsICdAcG9wYWxsJ10sXG4gICAgICAgICAgICBbL1wiLywgJ3N0cmluZyddXG4gICAgICAgIF0sXG4gICAgICAgIHN5bWJvbDogW1xuICAgICAgICAgICAgWy9be30oKVxcW1xcXV0vLCAnQGJyYWNrZXRzJ10sXG4gICAgICAgICAgICBbL1s8Pl0oPyFAc3ltYm9scykvLCAnQGJyYWNrZXRzJ10sXG4gICAgICAgICAgICBbL1suXS8sICdkZWxpbWl0ZXInXSxcbiAgICAgICAgICAgIFsvQG9wZXJhdG9ycy8sICdvcGVyYXRvciddLFxuICAgICAgICAgICAgWy9Ac3ltYm9scy8sICdvcGVyYXRvciddXG4gICAgICAgIF0sXG4gICAgICAgIGNvbW1lbnQ6IFtcbiAgICAgICAgICAgIFsvXFwvXFwvXFwvLiokLywgJ2NvbW1lbnQuZG9jJ10sXG4gICAgICAgICAgICBbL1xcL1xcKlxcKi8sICdjb21tZW50LmRvYycsICdAY29tbWVudGRvY2JvZHknXSxcbiAgICAgICAgICAgIFsvXFwvXFwvLiokLywgJ2NvbW1lbnQnXSxcbiAgICAgICAgICAgIFsvXFwvXFwqLywgJ2NvbW1lbnQnLCAnQGNvbW1lbnRib2R5J11cbiAgICAgICAgXSxcbiAgICAgICAgY29tbWVudGRvY2JvZHk6IFtcbiAgICAgICAgICAgIFsvXFwvXFwqLywgJ2NvbW1lbnQnLCAnQGNvbW1lbnRib2R5J10sXG4gICAgICAgICAgICBbL1xcKlxcLy8sICdjb21tZW50LmRvYycsICdAcG9wJ10sXG4gICAgICAgICAgICBbL1xcOlthLXpBLVpdK1xcOi8sICdjb21tZW50LmRvYy5wYXJhbSddLFxuICAgICAgICAgICAgWy8uLywgJ2NvbW1lbnQuZG9jJ11cbiAgICAgICAgXSxcbiAgICAgICAgY29tbWVudGJvZHk6IFtcbiAgICAgICAgICAgIFsvXFwvXFwqLywgJ2NvbW1lbnQnLCAnQGNvbW1lbnRib2R5J10sXG4gICAgICAgICAgICBbL1xcKlxcLy8sICdjb21tZW50JywgJ0Bwb3AnXSxcbiAgICAgICAgICAgIFsvLi8sICdjb21tZW50J11cbiAgICAgICAgXSxcbiAgICAgICAgYXR0cmlidXRlOiBbXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL1xcQEBpZGVudGlmaWVyLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQGF0dHJpYnV0ZXMnOiAna2V5d29yZC5jb250cm9sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIF0sXG4gICAgICAgIGxpdGVyYWw6IFtcbiAgICAgICAgICAgIFsvXCIvLCB7IHRva2VuOiAnc3RyaW5nLnF1b3RlJywgbmV4dDogJ0BzdHJpbmdsaXQnIH1dLFxuICAgICAgICAgICAgWy8wW2JdKFswMV1fPykrLywgJ251bWJlci5iaW5hcnknXSxcbiAgICAgICAgICAgIFsvMFtvXShbMC03XV8/KSsvLCAnbnVtYmVyLm9jdGFsJ10sXG4gICAgICAgICAgICBbLzBbeF0oWzAtOWEtZkEtRl1fPykrKFtwUF1bXFwtK10oXFxkXz8pKyk/LywgJ251bWJlci5oZXgnXSxcbiAgICAgICAgICAgIFsvKFxcZF8/KSpcXC4oXFxkXz8pKyhbZUVdW1xcLStdPyhcXGRfPykrKT8vLCAnbnVtYmVyLmZsb2F0J10sXG4gICAgICAgICAgICBbLyhcXGRfPykrLywgJ251bWJlciddXG4gICAgICAgIF0sXG4gICAgICAgIHN0cmluZ2xpdDogW1xuICAgICAgICAgICAgWy9cXFxcXFwoLywgeyB0b2tlbjogJ29wZXJhdG9yJywgbmV4dDogJ0BpbnRlcnBvbGF0ZWRleHByZXNzaW9uJyB9XSxcbiAgICAgICAgICAgIFsvQGVzY2FwZXMvLCAnc3RyaW5nJ10sXG4gICAgICAgICAgICBbL1xcXFwuLywgJ3N0cmluZy5lc2NhcGUuaW52YWxpZCddLFxuICAgICAgICAgICAgWy9cIi8sIHsgdG9rZW46ICdzdHJpbmcucXVvdGUnLCBuZXh0OiAnQHBvcCcgfV0sXG4gICAgICAgICAgICBbLy4vLCAnc3RyaW5nJ11cbiAgICAgICAgXSxcbiAgICAgICAgaW50ZXJwb2xhdGVkZXhwcmVzc2lvbjogW1xuICAgICAgICAgICAgWy9cXCgvLCB7IHRva2VuOiAnb3BlcmF0b3InLCBuZXh0OiAnQGludGVycG9sYXRlZGV4cHJlc3Npb24nIH1dLFxuICAgICAgICAgICAgWy9cXCkvLCB7IHRva2VuOiAnb3BlcmF0b3InLCBuZXh0OiAnQHBvcCcgfV0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAbGl0ZXJhbCcgfSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BrZXl3b3JkJyB9LFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHN5bWJvbCcgfVxuICAgICAgICBdLFxuICAgICAgICBrZXl3b3JkOiBbXG4gICAgICAgICAgICBbL2AvLCB7IHRva2VuOiAnb3BlcmF0b3InLCBuZXh0OiAnQGVzY2FwZWRrZXl3b3JkJyB9XSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvQGlkZW50aWZpZXIvLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdAa2V5d29yZHMnOiAna2V5d29yZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnW0EtWl1bYS16QS1aMC05JF0qJzogJ3R5cGUuaWRlbnRpZmllcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnaWRlbnRpZmllcidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgXSxcbiAgICAgICAgZXNjYXBlZGtleXdvcmQ6IFtcbiAgICAgICAgICAgIFsvYC8sIHsgdG9rZW46ICdvcGVyYXRvcicsIG5leHQ6ICdAcG9wJyB9XSxcbiAgICAgICAgICAgIFsvLi8sICdpZGVudGlmaWVyJ11cbiAgICAgICAgXSxcbiAgICAgICAgLy9cdFx0c3ltYm9sOiBbXG4gICAgICAgIC8vXHRcdFx0WyAvQHN5bWJvbHMvLCAnb3BlcmF0b3InIF0sXG4gICAgICAgIC8vXHRcdFx0WyAvQG9wZXJhdG9ycy8sICdvcGVyYXRvcicgXVxuICAgICAgICAvL1x0XHRdLFxuICAgICAgICBpbnZva2VkbWV0aG9kOiBbXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLyhbLl0pKEBpZGVudGlmaWVyKS8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJDI6IFsnZGVsaW1ldGVyJywgJ3R5cGUuaWRlbnRpZmllciddLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgXVxuICAgIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9