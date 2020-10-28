(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[52],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/ruby/ruby.js":
/*!************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/ruby/ruby.js ***!
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
        lineComment: '#',
        blockComment: ['=begin', '=end']
    },
    brackets: [
        ['(', ')'],
        ['{', '}'],
        ['[', ']']
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
    indentationRules: {
        increaseIndentPattern: new RegExp('^\\s*((begin|class|(private|protected)\\s+def|def|else|elsif|ensure|for|if|module|rescue|unless|until|when|while|case)|([^#]*\\sdo\\b)|([^#]*=\\s*(case|if|unless)))\\b([^#\\{;]|("|\'|/).*\\4)*(#.*)?$'),
        decreaseIndentPattern: new RegExp('^\\s*([}\\]]([,)]?\\s*(#|$)|\\.[a-zA-Z_]\\w*\\b)|(end|rescue|ensure|else|elsif|when)\\b)')
    }
};
/*
 * Ruby language definition
 *
 * Quite a complex language due to elaborate escape sequences
 * and quoting of literate strings/regular expressions, and
 * an 'end' keyword that does not always apply to modifiers like until and while,
 * and a 'do' keyword that sometimes starts a block, but sometimes is part of
 * another statement (like 'while').
 *
 * (1) end blocks:
 * 'end' may end declarations like if or until, but sometimes 'if' or 'until'
 * are modifiers where there is no 'end'. Also, 'do' sometimes starts a block
 * that is ended by 'end', but sometimes it is part of a 'while', 'for', or 'until'
 * To do proper brace matching we do some elaborate state manipulation.
 * some examples:
 *
 *   until bla do
 *     work until tired
 *     list.each do
 *       something if test
 *     end
 *   end
 *
 * or
 *
 * if test
 *  something (if test then x end)
 *  bar if bla
 * end
 *
 * or, how about using class as a property..
 *
 * class Test
 *   def endpoint
 *     self.class.endpoint || routes
 *   end
 * end
 *
 * (2) quoting:
 * there are many kinds of strings and escape sequences. But also, one can
 * start many string-like things as '%qx' where q specifies the kind of string
 * (like a command, escape expanded, regular expression, symbol etc.), and x is
 * some character and only another 'x' ends the sequence. Except for brackets
 * where the closing bracket ends the sequence.. and except for a nested bracket
 * inside the string like entity. Also, such strings can contain interpolated
 * ruby expressions again (and span multiple lines). Moreover, expanded
 * regular expression can also contain comments.
 */
var language = {
    tokenPostfix: '.ruby',
    keywords: [
        '__LINE__',
        '__ENCODING__',
        '__FILE__',
        'BEGIN',
        'END',
        'alias',
        'and',
        'begin',
        'break',
        'case',
        'class',
        'def',
        'defined?',
        'do',
        'else',
        'elsif',
        'end',
        'ensure',
        'for',
        'false',
        'if',
        'in',
        'module',
        'next',
        'nil',
        'not',
        'or',
        'redo',
        'rescue',
        'retry',
        'return',
        'self',
        'super',
        'then',
        'true',
        'undef',
        'unless',
        'until',
        'when',
        'while',
        'yield'
    ],
    keywordops: ['::', '..', '...', '?', ':', '=>'],
    builtins: [
        'require',
        'public',
        'private',
        'include',
        'extend',
        'attr_reader',
        'protected',
        'private_class_method',
        'protected_class_method',
        'new'
    ],
    // these are closed by 'end' (if, while and until are handled separately)
    declarations: [
        'module',
        'class',
        'def',
        'case',
        'do',
        'begin',
        'for',
        'if',
        'while',
        'until',
        'unless'
    ],
    linedecls: ['def', 'case', 'do', 'begin', 'for', 'if', 'while', 'until', 'unless'],
    operators: [
        '^',
        '&',
        '|',
        '<=>',
        '==',
        '===',
        '!~',
        '=~',
        '>',
        '>=',
        '<',
        '<=',
        '<<',
        '>>',
        '+',
        '-',
        '*',
        '/',
        '%',
        '**',
        '~',
        '+@',
        '-@',
        '[]',
        '[]=',
        '`',
        '+=',
        '-=',
        '*=',
        '**=',
        '/=',
        '^=',
        '%=',
        '<<=',
        '>>=',
        '&=',
        '&&=',
        '||=',
        '|='
    ],
    brackets: [
        { open: '(', close: ')', token: 'delimiter.parenthesis' },
        { open: '{', close: '}', token: 'delimiter.curly' },
        { open: '[', close: ']', token: 'delimiter.square' }
    ],
    // we include these common regular expressions
    symbols: /[=><!~?:&|+\-*\/\^%\.]+/,
    // escape sequences
    escape: /(?:[abefnrstv\\"'\n\r]|[0-7]{1,3}|x[0-9A-Fa-f]{1,2}|u[0-9A-Fa-f]{4})/,
    escapes: /\\(?:C\-(@escape|.)|c(@escape|.)|@escape)/,
    decpart: /\d(_?\d)*/,
    decimal: /0|@decpart/,
    delim: /[^a-zA-Z0-9\s\n\r]/,
    heredelim: /(?:\w+|'[^']*'|"[^"]*"|`[^`]*`)/,
    regexpctl: /[(){}\[\]\$\^|\-*+?\.]/,
    regexpesc: /\\(?:[AzZbBdDfnrstvwWn0\\\/]|@regexpctl|c[A-Z]|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4})?/,
    // The main tokenizer for our languages
    tokenizer: {
        // Main entry.
        // root.<decl> where decl is the current opening declaration (like 'class')
        root: [
            // identifiers and keywords
            // most complexity here is due to matching 'end' correctly with declarations.
            // We distinguish a declaration that comes first on a line, versus declarations further on a line (which are most likey modifiers)
            [
                /^(\s*)([a-z_]\w*[!?=]?)/,
                [
                    'white',
                    {
                        cases: {
                            'for|until|while': {
                                token: 'keyword.$2',
                                next: '@dodecl.$2'
                            },
                            '@declarations': {
                                token: 'keyword.$2',
                                next: '@root.$2'
                            },
                            end: { token: 'keyword.$S2', next: '@pop' },
                            '@keywords': 'keyword',
                            '@builtins': 'predefined',
                            '@default': 'identifier'
                        }
                    }
                ]
            ],
            [
                /[a-z_]\w*[!?=]?/,
                {
                    cases: {
                        'if|unless|while|until': {
                            token: 'keyword.$0x',
                            next: '@modifier.$0x'
                        },
                        for: { token: 'keyword.$2', next: '@dodecl.$2' },
                        '@linedecls': { token: 'keyword.$0', next: '@root.$0' },
                        end: { token: 'keyword.$S2', next: '@pop' },
                        '@keywords': 'keyword',
                        '@builtins': 'predefined',
                        '@default': 'identifier'
                    }
                }
            ],
            [/[A-Z][\w]*[!?=]?/, 'constructor.identifier'],
            [/\$[\w]*/, 'global.constant'],
            [/@[\w]*/, 'namespace.instance.identifier'],
            [/@@[\w]*/, 'namespace.class.identifier'],
            // here document
            [/<<[-~](@heredelim).*/, { token: 'string.heredoc.delimiter', next: '@heredoc.$1' }],
            [
                /[ \t\r\n]+<<(@heredelim).*/,
                { token: 'string.heredoc.delimiter', next: '@heredoc.$1' }
            ],
            [/^<<(@heredelim).*/, { token: 'string.heredoc.delimiter', next: '@heredoc.$1' }],
            // whitespace
            { include: '@whitespace' },
            // strings
            [/"/, { token: 'string.d.delim', next: '@dstring.d."' }],
            [/'/, { token: 'string.sq.delim', next: '@sstring.sq' }],
            // % literals. For efficiency, rematch in the 'pstring' state
            [/%([rsqxwW]|Q?)/, { token: '@rematch', next: 'pstring' }],
            // commands and symbols
            [/`/, { token: 'string.x.delim', next: '@dstring.x.`' }],
            [/:(\w|[$@])\w*[!?=]?/, 'string.s'],
            [/:"/, { token: 'string.s.delim', next: '@dstring.s."' }],
            [/:'/, { token: 'string.s.delim', next: '@sstring.s' }],
            // regular expressions. Lookahead for a (not escaped) closing forwardslash on the same line
            [/\/(?=(\\\/|[^\/\n])+\/)/, { token: 'regexp.delim', next: '@regexp' }],
            // delimiters and operators
            [/[{}()\[\]]/, '@brackets'],
            [
                /@symbols/,
                {
                    cases: {
                        '@keywordops': 'keyword',
                        '@operators': 'operator',
                        '@default': ''
                    }
                }
            ],
            [/[;,]/, 'delimiter'],
            // numbers
            [/0[xX][0-9a-fA-F](_?[0-9a-fA-F])*/, 'number.hex'],
            [/0[_oO][0-7](_?[0-7])*/, 'number.octal'],
            [/0[bB][01](_?[01])*/, 'number.binary'],
            [/0[dD]@decpart/, 'number'],
            [
                /@decimal((\.@decpart)?([eE][\-+]?@decpart)?)/,
                {
                    cases: {
                        $1: 'number.float',
                        '@default': 'number'
                    }
                }
            ]
        ],
        // used to not treat a 'do' as a block opener if it occurs on the same
        // line as a 'do' statement: 'while|until|for'
        // dodecl.<decl> where decl is the declarations started, like 'while'
        dodecl: [
            [/^/, { token: '', switchTo: '@root.$S2' }],
            [
                /[a-z_]\w*[!?=]?/,
                {
                    cases: {
                        end: { token: 'keyword.$S2', next: '@pop' },
                        do: { token: 'keyword', switchTo: '@root.$S2' },
                        '@linedecls': {
                            token: '@rematch',
                            switchTo: '@root.$S2'
                        },
                        '@keywords': 'keyword',
                        '@builtins': 'predefined',
                        '@default': 'identifier'
                    }
                }
            ],
            { include: '@root' }
        ],
        // used to prevent potential modifiers ('if|until|while|unless') to match
        // with 'end' keywords.
        // modifier.<decl>x where decl is the declaration starter, like 'if'
        modifier: [
            [/^/, '', '@pop'],
            [
                /[a-z_]\w*[!?=]?/,
                {
                    cases: {
                        end: { token: 'keyword.$S2', next: '@pop' },
                        'then|else|elsif|do': {
                            token: 'keyword',
                            switchTo: '@root.$S2'
                        },
                        '@linedecls': {
                            token: '@rematch',
                            switchTo: '@root.$S2'
                        },
                        '@keywords': 'keyword',
                        '@builtins': 'predefined',
                        '@default': 'identifier'
                    }
                }
            ],
            { include: '@root' }
        ],
        // single quote strings (also used for symbols)
        // sstring.<kind>  where kind is 'sq' (single quote) or 's' (symbol)
        sstring: [
            [/[^\\']+/, 'string.$S2'],
            [/\\\\|\\'|\\$/, 'string.$S2.escape'],
            [/\\./, 'string.$S2.invalid'],
            [/'/, { token: 'string.$S2.delim', next: '@pop' }]
        ],
        // double quoted "string".
        // dstring.<kind>.<delim> where kind is 'd' (double quoted), 'x' (command), or 's' (symbol)
        // and delim is the ending delimiter (" or `)
        dstring: [
            [/[^\\`"#]+/, 'string.$S2'],
            [/#/, 'string.$S2.escape', '@interpolated'],
            [/\\$/, 'string.$S2.escape'],
            [/@escapes/, 'string.$S2.escape'],
            [/\\./, 'string.$S2.escape.invalid'],
            [
                /[`"]/,
                {
                    cases: {
                        '$#==$S3': { token: 'string.$S2.delim', next: '@pop' },
                        '@default': 'string.$S2'
                    }
                }
            ]
        ],
        // literal documents
        // heredoc.<close> where close is the closing delimiter
        heredoc: [
            [
                /^(\s*)(@heredelim)$/,
                {
                    cases: {
                        '$2==$S2': [
                            'string.heredoc',
                            { token: 'string.heredoc.delimiter', next: '@pop' }
                        ],
                        '@default': ['string.heredoc', 'string.heredoc']
                    }
                }
            ],
            [/.*/, 'string.heredoc']
        ],
        // interpolated sequence
        interpolated: [
            [/\$\w*/, 'global.constant', '@pop'],
            [/@\w*/, 'namespace.class.identifier', '@pop'],
            [/@@\w*/, 'namespace.instance.identifier', '@pop'],
            [
                /[{]/,
                {
                    token: 'string.escape.curly',
                    switchTo: '@interpolated_compound'
                }
            ],
            ['', '', '@pop'] // just a # is interpreted as a #
        ],
        // any code
        interpolated_compound: [
            [/[}]/, { token: 'string.escape.curly', next: '@pop' }],
            { include: '@root' }
        ],
        // %r quoted regexp
        // pregexp.<open>.<close> where open/close are the open/close delimiter
        pregexp: [
            { include: '@whitespace' },
            // turns out that you can quote using regex control characters, aargh!
            // for example; %r|kgjgaj| is ok (even though | is used for alternation)
            // so, we need to match those first
            [
                /[^\(\{\[\\]/,
                {
                    cases: {
                        '$#==$S3': { token: 'regexp.delim', next: '@pop' },
                        '$#==$S2': { token: 'regexp.delim', next: '@push' },
                        '~[)}\\]]': '@brackets.regexp.escape.control',
                        '~@regexpctl': 'regexp.escape.control',
                        '@default': 'regexp'
                    }
                }
            ],
            { include: '@regexcontrol' }
        ],
        // We match regular expression quite precisely
        regexp: [
            { include: '@regexcontrol' },
            [/[^\\\/]/, 'regexp'],
            ['/[ixmp]*', { token: 'regexp.delim' }, '@pop']
        ],
        regexcontrol: [
            [
                /(\{)(\d+(?:,\d*)?)(\})/,
                [
                    '@brackets.regexp.escape.control',
                    'regexp.escape.control',
                    '@brackets.regexp.escape.control'
                ]
            ],
            [
                /(\[)(\^?)/,
                [
                    '@brackets.regexp.escape.control',
                    { token: 'regexp.escape.control', next: '@regexrange' }
                ]
            ],
            [/(\()(\?[:=!])/, ['@brackets.regexp.escape.control', 'regexp.escape.control']],
            [/\(\?#/, { token: 'regexp.escape.control', next: '@regexpcomment' }],
            [/[()]/, '@brackets.regexp.escape.control'],
            [/@regexpctl/, 'regexp.escape.control'],
            [/\\$/, 'regexp.escape'],
            [/@regexpesc/, 'regexp.escape'],
            [/\\\./, 'regexp.invalid'],
            [/#/, 'regexp.escape', '@interpolated']
        ],
        regexrange: [
            [/-/, 'regexp.escape.control'],
            [/\^/, 'regexp.invalid'],
            [/\\$/, 'regexp.escape'],
            [/@regexpesc/, 'regexp.escape'],
            [/[^\]]/, 'regexp'],
            [/\]/, '@brackets.regexp.escape.control', '@pop']
        ],
        regexpcomment: [
            [/[^)]+/, 'comment'],
            [/\)/, { token: 'regexp.escape.control', next: '@pop' }]
        ],
        // % quoted strings
        // A bit repetitive since we need to often special case the kind of ending delimiter
        pstring: [
            [/%([qws])\(/, { token: 'string.$1.delim', switchTo: '@qstring.$1.(.)' }],
            [/%([qws])\[/, { token: 'string.$1.delim', switchTo: '@qstring.$1.[.]' }],
            [/%([qws])\{/, { token: 'string.$1.delim', switchTo: '@qstring.$1.{.}' }],
            [/%([qws])</, { token: 'string.$1.delim', switchTo: '@qstring.$1.<.>' }],
            [/%([qws])(@delim)/, { token: 'string.$1.delim', switchTo: '@qstring.$1.$2.$2' }],
            [/%r\(/, { token: 'regexp.delim', switchTo: '@pregexp.(.)' }],
            [/%r\[/, { token: 'regexp.delim', switchTo: '@pregexp.[.]' }],
            [/%r\{/, { token: 'regexp.delim', switchTo: '@pregexp.{.}' }],
            [/%r</, { token: 'regexp.delim', switchTo: '@pregexp.<.>' }],
            [/%r(@delim)/, { token: 'regexp.delim', switchTo: '@pregexp.$1.$1' }],
            [/%(x|W|Q?)\(/, { token: 'string.$1.delim', switchTo: '@qqstring.$1.(.)' }],
            [/%(x|W|Q?)\[/, { token: 'string.$1.delim', switchTo: '@qqstring.$1.[.]' }],
            [/%(x|W|Q?)\{/, { token: 'string.$1.delim', switchTo: '@qqstring.$1.{.}' }],
            [/%(x|W|Q?)</, { token: 'string.$1.delim', switchTo: '@qqstring.$1.<.>' }],
            [/%(x|W|Q?)(@delim)/, { token: 'string.$1.delim', switchTo: '@qqstring.$1.$2.$2' }],
            [/%([rqwsxW]|Q?)./, { token: 'invalid', next: '@pop' }],
            [/./, { token: 'invalid', next: '@pop' }] // recover
        ],
        // non-expanded quoted string.
        // qstring.<kind>.<open>.<close>
        //  kind = q|w|s  (single quote, array, symbol)
        //  open = open delimiter
        //  close = close delimiter
        qstring: [
            [/\\$/, 'string.$S2.escape'],
            [/\\./, 'string.$S2.escape'],
            [
                /./,
                {
                    cases: {
                        '$#==$S4': { token: 'string.$S2.delim', next: '@pop' },
                        '$#==$S3': { token: 'string.$S2.delim', next: '@push' },
                        '@default': 'string.$S2'
                    }
                }
            ]
        ],
        // expanded quoted string.
        // qqstring.<kind>.<open>.<close>
        //  kind = Q|W|x  (double quote, array, command)
        //  open = open delimiter
        //  close = close delimiter
        qqstring: [[/#/, 'string.$S2.escape', '@interpolated'], { include: '@qstring' }],
        // whitespace & comments
        whitespace: [
            [/[ \t\r\n]+/, ''],
            [/^\s*=begin\b/, 'comment', '@comment'],
            [/#.*$/, 'comment']
        ],
        comment: [
            [/[^=]+/, 'comment'],
            [/^\s*=begin\b/, 'comment.invalid'],
            [/^\s*=end\b.*/, 'comment', '@pop'],
            [/[=]/, 'comment']
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL3J1YnkvcnVieS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxZQUFZLEdBQUc7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTLFNBQVMsWUFBWSxHQUFHO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVM7QUFDVDtBQUNBO0FBQ0EsME5BQTBOO0FBQzFOLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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RSxrQkFBa0IsSUFBSSw2Q0FBNkMsRUFBRSxHQUFHO0FBQ3hFLHFCQUFxQixrREFBa0Q7QUFDdkUsNEJBQTRCLG9EQUFvRDtBQUNoRiw2QkFBNkIseURBQXlEO0FBQ3RGLDZCQUE2Qix5REFBeUQ7QUFDdEYseUJBQXlCLElBQUksb0RBQW9ELEVBQUUsR0FBRztBQUN0Riw0QkFBNEIseURBQXlEO0FBQ3JGLG1DQUFtQywyREFBMkQ7QUFDOUYsaUNBQWlDLGlDQUFpQztBQUNsRSxtQkFBbUIsaUNBQWlDO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLDBDQUEwQztBQUM5RSxvQ0FBb0MsMkNBQTJDO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFLHNCQUFzQjtBQUN2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjUyLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuZXhwb3J0IHZhciBjb25mID0ge1xuICAgIGNvbW1lbnRzOiB7XG4gICAgICAgIGxpbmVDb21tZW50OiAnIycsXG4gICAgICAgIGJsb2NrQ29tbWVudDogWyc9YmVnaW4nLCAnPWVuZCddXG4gICAgfSxcbiAgICBicmFja2V0czogW1xuICAgICAgICBbJygnLCAnKSddLFxuICAgICAgICBbJ3snLCAnfSddLFxuICAgICAgICBbJ1snLCAnXSddXG4gICAgXSxcbiAgICBhdXRvQ2xvc2luZ1BhaXJzOiBbXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfSxcbiAgICAgICAgeyBvcGVuOiBcIidcIiwgY2xvc2U6IFwiJ1wiIH1cbiAgICBdLFxuICAgIHN1cnJvdW5kaW5nUGFpcnM6IFtcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9LFxuICAgICAgICB7IG9wZW46IFwiJ1wiLCBjbG9zZTogXCInXCIgfVxuICAgIF0sXG4gICAgaW5kZW50YXRpb25SdWxlczoge1xuICAgICAgICBpbmNyZWFzZUluZGVudFBhdHRlcm46IG5ldyBSZWdFeHAoJ15cXFxccyooKGJlZ2lufGNsYXNzfChwcml2YXRlfHByb3RlY3RlZClcXFxccytkZWZ8ZGVmfGVsc2V8ZWxzaWZ8ZW5zdXJlfGZvcnxpZnxtb2R1bGV8cmVzY3VlfHVubGVzc3x1bnRpbHx3aGVufHdoaWxlfGNhc2UpfChbXiNdKlxcXFxzZG9cXFxcYil8KFteI10qPVxcXFxzKihjYXNlfGlmfHVubGVzcykpKVxcXFxiKFteI1xcXFx7O118KFwifFxcJ3wvKS4qXFxcXDQpKigjLiopPyQnKSxcbiAgICAgICAgZGVjcmVhc2VJbmRlbnRQYXR0ZXJuOiBuZXcgUmVnRXhwKCdeXFxcXHMqKFt9XFxcXF1dKFssKV0/XFxcXHMqKCN8JCl8XFxcXC5bYS16QS1aX11cXFxcdypcXFxcYil8KGVuZHxyZXNjdWV8ZW5zdXJlfGVsc2V8ZWxzaWZ8d2hlbilcXFxcYiknKVxuICAgIH1cbn07XG4vKlxuICogUnVieSBsYW5ndWFnZSBkZWZpbml0aW9uXG4gKlxuICogUXVpdGUgYSBjb21wbGV4IGxhbmd1YWdlIGR1ZSB0byBlbGFib3JhdGUgZXNjYXBlIHNlcXVlbmNlc1xuICogYW5kIHF1b3Rpbmcgb2YgbGl0ZXJhdGUgc3RyaW5ncy9yZWd1bGFyIGV4cHJlc3Npb25zLCBhbmRcbiAqIGFuICdlbmQnIGtleXdvcmQgdGhhdCBkb2VzIG5vdCBhbHdheXMgYXBwbHkgdG8gbW9kaWZpZXJzIGxpa2UgdW50aWwgYW5kIHdoaWxlLFxuICogYW5kIGEgJ2RvJyBrZXl3b3JkIHRoYXQgc29tZXRpbWVzIHN0YXJ0cyBhIGJsb2NrLCBidXQgc29tZXRpbWVzIGlzIHBhcnQgb2ZcbiAqIGFub3RoZXIgc3RhdGVtZW50IChsaWtlICd3aGlsZScpLlxuICpcbiAqICgxKSBlbmQgYmxvY2tzOlxuICogJ2VuZCcgbWF5IGVuZCBkZWNsYXJhdGlvbnMgbGlrZSBpZiBvciB1bnRpbCwgYnV0IHNvbWV0aW1lcyAnaWYnIG9yICd1bnRpbCdcbiAqIGFyZSBtb2RpZmllcnMgd2hlcmUgdGhlcmUgaXMgbm8gJ2VuZCcuIEFsc28sICdkbycgc29tZXRpbWVzIHN0YXJ0cyBhIGJsb2NrXG4gKiB0aGF0IGlzIGVuZGVkIGJ5ICdlbmQnLCBidXQgc29tZXRpbWVzIGl0IGlzIHBhcnQgb2YgYSAnd2hpbGUnLCAnZm9yJywgb3IgJ3VudGlsJ1xuICogVG8gZG8gcHJvcGVyIGJyYWNlIG1hdGNoaW5nIHdlIGRvIHNvbWUgZWxhYm9yYXRlIHN0YXRlIG1hbmlwdWxhdGlvbi5cbiAqIHNvbWUgZXhhbXBsZXM6XG4gKlxuICogICB1bnRpbCBibGEgZG9cbiAqICAgICB3b3JrIHVudGlsIHRpcmVkXG4gKiAgICAgbGlzdC5lYWNoIGRvXG4gKiAgICAgICBzb21ldGhpbmcgaWYgdGVzdFxuICogICAgIGVuZFxuICogICBlbmRcbiAqXG4gKiBvclxuICpcbiAqIGlmIHRlc3RcbiAqICBzb21ldGhpbmcgKGlmIHRlc3QgdGhlbiB4IGVuZClcbiAqICBiYXIgaWYgYmxhXG4gKiBlbmRcbiAqXG4gKiBvciwgaG93IGFib3V0IHVzaW5nIGNsYXNzIGFzIGEgcHJvcGVydHkuLlxuICpcbiAqIGNsYXNzIFRlc3RcbiAqICAgZGVmIGVuZHBvaW50XG4gKiAgICAgc2VsZi5jbGFzcy5lbmRwb2ludCB8fCByb3V0ZXNcbiAqICAgZW5kXG4gKiBlbmRcbiAqXG4gKiAoMikgcXVvdGluZzpcbiAqIHRoZXJlIGFyZSBtYW55IGtpbmRzIG9mIHN0cmluZ3MgYW5kIGVzY2FwZSBzZXF1ZW5jZXMuIEJ1dCBhbHNvLCBvbmUgY2FuXG4gKiBzdGFydCBtYW55IHN0cmluZy1saWtlIHRoaW5ncyBhcyAnJXF4JyB3aGVyZSBxIHNwZWNpZmllcyB0aGUga2luZCBvZiBzdHJpbmdcbiAqIChsaWtlIGEgY29tbWFuZCwgZXNjYXBlIGV4cGFuZGVkLCByZWd1bGFyIGV4cHJlc3Npb24sIHN5bWJvbCBldGMuKSwgYW5kIHggaXNcbiAqIHNvbWUgY2hhcmFjdGVyIGFuZCBvbmx5IGFub3RoZXIgJ3gnIGVuZHMgdGhlIHNlcXVlbmNlLiBFeGNlcHQgZm9yIGJyYWNrZXRzXG4gKiB3aGVyZSB0aGUgY2xvc2luZyBicmFja2V0IGVuZHMgdGhlIHNlcXVlbmNlLi4gYW5kIGV4Y2VwdCBmb3IgYSBuZXN0ZWQgYnJhY2tldFxuICogaW5zaWRlIHRoZSBzdHJpbmcgbGlrZSBlbnRpdHkuIEFsc28sIHN1Y2ggc3RyaW5ncyBjYW4gY29udGFpbiBpbnRlcnBvbGF0ZWRcbiAqIHJ1YnkgZXhwcmVzc2lvbnMgYWdhaW4gKGFuZCBzcGFuIG11bHRpcGxlIGxpbmVzKS4gTW9yZW92ZXIsIGV4cGFuZGVkXG4gKiByZWd1bGFyIGV4cHJlc3Npb24gY2FuIGFsc28gY29udGFpbiBjb21tZW50cy5cbiAqL1xuZXhwb3J0IHZhciBsYW5ndWFnZSA9IHtcbiAgICB0b2tlblBvc3RmaXg6ICcucnVieScsXG4gICAga2V5d29yZHM6IFtcbiAgICAgICAgJ19fTElORV9fJyxcbiAgICAgICAgJ19fRU5DT0RJTkdfXycsXG4gICAgICAgICdfX0ZJTEVfXycsXG4gICAgICAgICdCRUdJTicsXG4gICAgICAgICdFTkQnLFxuICAgICAgICAnYWxpYXMnLFxuICAgICAgICAnYW5kJyxcbiAgICAgICAgJ2JlZ2luJyxcbiAgICAgICAgJ2JyZWFrJyxcbiAgICAgICAgJ2Nhc2UnLFxuICAgICAgICAnY2xhc3MnLFxuICAgICAgICAnZGVmJyxcbiAgICAgICAgJ2RlZmluZWQ/JyxcbiAgICAgICAgJ2RvJyxcbiAgICAgICAgJ2Vsc2UnLFxuICAgICAgICAnZWxzaWYnLFxuICAgICAgICAnZW5kJyxcbiAgICAgICAgJ2Vuc3VyZScsXG4gICAgICAgICdmb3InLFxuICAgICAgICAnZmFsc2UnLFxuICAgICAgICAnaWYnLFxuICAgICAgICAnaW4nLFxuICAgICAgICAnbW9kdWxlJyxcbiAgICAgICAgJ25leHQnLFxuICAgICAgICAnbmlsJyxcbiAgICAgICAgJ25vdCcsXG4gICAgICAgICdvcicsXG4gICAgICAgICdyZWRvJyxcbiAgICAgICAgJ3Jlc2N1ZScsXG4gICAgICAgICdyZXRyeScsXG4gICAgICAgICdyZXR1cm4nLFxuICAgICAgICAnc2VsZicsXG4gICAgICAgICdzdXBlcicsXG4gICAgICAgICd0aGVuJyxcbiAgICAgICAgJ3RydWUnLFxuICAgICAgICAndW5kZWYnLFxuICAgICAgICAndW5sZXNzJyxcbiAgICAgICAgJ3VudGlsJyxcbiAgICAgICAgJ3doZW4nLFxuICAgICAgICAnd2hpbGUnLFxuICAgICAgICAneWllbGQnXG4gICAgXSxcbiAgICBrZXl3b3Jkb3BzOiBbJzo6JywgJy4uJywgJy4uLicsICc/JywgJzonLCAnPT4nXSxcbiAgICBidWlsdGluczogW1xuICAgICAgICAncmVxdWlyZScsXG4gICAgICAgICdwdWJsaWMnLFxuICAgICAgICAncHJpdmF0ZScsXG4gICAgICAgICdpbmNsdWRlJyxcbiAgICAgICAgJ2V4dGVuZCcsXG4gICAgICAgICdhdHRyX3JlYWRlcicsXG4gICAgICAgICdwcm90ZWN0ZWQnLFxuICAgICAgICAncHJpdmF0ZV9jbGFzc19tZXRob2QnLFxuICAgICAgICAncHJvdGVjdGVkX2NsYXNzX21ldGhvZCcsXG4gICAgICAgICduZXcnXG4gICAgXSxcbiAgICAvLyB0aGVzZSBhcmUgY2xvc2VkIGJ5ICdlbmQnIChpZiwgd2hpbGUgYW5kIHVudGlsIGFyZSBoYW5kbGVkIHNlcGFyYXRlbHkpXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgICdtb2R1bGUnLFxuICAgICAgICAnY2xhc3MnLFxuICAgICAgICAnZGVmJyxcbiAgICAgICAgJ2Nhc2UnLFxuICAgICAgICAnZG8nLFxuICAgICAgICAnYmVnaW4nLFxuICAgICAgICAnZm9yJyxcbiAgICAgICAgJ2lmJyxcbiAgICAgICAgJ3doaWxlJyxcbiAgICAgICAgJ3VudGlsJyxcbiAgICAgICAgJ3VubGVzcydcbiAgICBdLFxuICAgIGxpbmVkZWNsczogWydkZWYnLCAnY2FzZScsICdkbycsICdiZWdpbicsICdmb3InLCAnaWYnLCAnd2hpbGUnLCAndW50aWwnLCAndW5sZXNzJ10sXG4gICAgb3BlcmF0b3JzOiBbXG4gICAgICAgICdeJyxcbiAgICAgICAgJyYnLFxuICAgICAgICAnfCcsXG4gICAgICAgICc8PT4nLFxuICAgICAgICAnPT0nLFxuICAgICAgICAnPT09JyxcbiAgICAgICAgJyF+JyxcbiAgICAgICAgJz1+JyxcbiAgICAgICAgJz4nLFxuICAgICAgICAnPj0nLFxuICAgICAgICAnPCcsXG4gICAgICAgICc8PScsXG4gICAgICAgICc8PCcsXG4gICAgICAgICc+PicsXG4gICAgICAgICcrJyxcbiAgICAgICAgJy0nLFxuICAgICAgICAnKicsXG4gICAgICAgICcvJyxcbiAgICAgICAgJyUnLFxuICAgICAgICAnKionLFxuICAgICAgICAnficsXG4gICAgICAgICcrQCcsXG4gICAgICAgICctQCcsXG4gICAgICAgICdbXScsXG4gICAgICAgICdbXT0nLFxuICAgICAgICAnYCcsXG4gICAgICAgICcrPScsXG4gICAgICAgICctPScsXG4gICAgICAgICcqPScsXG4gICAgICAgICcqKj0nLFxuICAgICAgICAnLz0nLFxuICAgICAgICAnXj0nLFxuICAgICAgICAnJT0nLFxuICAgICAgICAnPDw9JyxcbiAgICAgICAgJz4+PScsXG4gICAgICAgICcmPScsXG4gICAgICAgICcmJj0nLFxuICAgICAgICAnfHw9JyxcbiAgICAgICAgJ3w9J1xuICAgIF0sXG4gICAgYnJhY2tldHM6IFtcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScsIHRva2VuOiAnZGVsaW1pdGVyLnBhcmVudGhlc2lzJyB9LFxuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JywgdG9rZW46ICdkZWxpbWl0ZXIuY3VybHknIH0sXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nLCB0b2tlbjogJ2RlbGltaXRlci5zcXVhcmUnIH1cbiAgICBdLFxuICAgIC8vIHdlIGluY2x1ZGUgdGhlc2UgY29tbW9uIHJlZ3VsYXIgZXhwcmVzc2lvbnNcbiAgICBzeW1ib2xzOiAvWz0+PCF+PzomfCtcXC0qXFwvXFxeJVxcLl0rLyxcbiAgICAvLyBlc2NhcGUgc2VxdWVuY2VzXG4gICAgZXNjYXBlOiAvKD86W2FiZWZucnN0dlxcXFxcIidcXG5cXHJdfFswLTddezEsM318eFswLTlBLUZhLWZdezEsMn18dVswLTlBLUZhLWZdezR9KS8sXG4gICAgZXNjYXBlczogL1xcXFwoPzpDXFwtKEBlc2NhcGV8Lil8YyhAZXNjYXBlfC4pfEBlc2NhcGUpLyxcbiAgICBkZWNwYXJ0OiAvXFxkKF8/XFxkKSovLFxuICAgIGRlY2ltYWw6IC8wfEBkZWNwYXJ0LyxcbiAgICBkZWxpbTogL1teYS16QS1aMC05XFxzXFxuXFxyXS8sXG4gICAgaGVyZWRlbGltOiAvKD86XFx3K3wnW14nXSonfFwiW15cIl0qXCJ8YFteYF0qYCkvLFxuICAgIHJlZ2V4cGN0bDogL1soKXt9XFxbXFxdXFwkXFxefFxcLSorP1xcLl0vLFxuICAgIHJlZ2V4cGVzYzogL1xcXFwoPzpbQXpaYkJkRGZucnN0dndXbjBcXFxcXFwvXXxAcmVnZXhwY3RsfGNbQS1aXXx4WzAtOWEtZkEtRl17Mn18dVswLTlhLWZBLUZdezR9KT8vLFxuICAgIC8vIFRoZSBtYWluIHRva2VuaXplciBmb3Igb3VyIGxhbmd1YWdlc1xuICAgIHRva2VuaXplcjoge1xuICAgICAgICAvLyBNYWluIGVudHJ5LlxuICAgICAgICAvLyByb290LjxkZWNsPiB3aGVyZSBkZWNsIGlzIHRoZSBjdXJyZW50IG9wZW5pbmcgZGVjbGFyYXRpb24gKGxpa2UgJ2NsYXNzJylcbiAgICAgICAgcm9vdDogW1xuICAgICAgICAgICAgLy8gaWRlbnRpZmllcnMgYW5kIGtleXdvcmRzXG4gICAgICAgICAgICAvLyBtb3N0IGNvbXBsZXhpdHkgaGVyZSBpcyBkdWUgdG8gbWF0Y2hpbmcgJ2VuZCcgY29ycmVjdGx5IHdpdGggZGVjbGFyYXRpb25zLlxuICAgICAgICAgICAgLy8gV2UgZGlzdGluZ3Vpc2ggYSBkZWNsYXJhdGlvbiB0aGF0IGNvbWVzIGZpcnN0IG9uIGEgbGluZSwgdmVyc3VzIGRlY2xhcmF0aW9ucyBmdXJ0aGVyIG9uIGEgbGluZSAod2hpY2ggYXJlIG1vc3QgbGlrZXkgbW9kaWZpZXJzKVxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9eKFxccyopKFthLXpfXVxcdypbIT89XT8pLyxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICd3aGl0ZScsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Zvcnx1bnRpbHx3aGlsZSc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW46ICdrZXl3b3JkLiQyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dDogJ0Bkb2RlY2wuJDInXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQGRlY2xhcmF0aW9ucyc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW46ICdrZXl3b3JkLiQyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dDogJ0Byb290LiQyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiB7IHRva2VuOiAna2V5d29yZC4kUzInLCBuZXh0OiAnQHBvcCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQGtleXdvcmRzJzogJ2tleXdvcmQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdAYnVpbHRpbnMnOiAncHJlZGVmaW5lZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ2lkZW50aWZpZXInXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9bYS16X11cXHcqWyE/PV0/LyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnaWZ8dW5sZXNzfHdoaWxlfHVudGlsJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuOiAna2V5d29yZC4kMHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHQ6ICdAbW9kaWZpZXIuJDB4J1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcjogeyB0b2tlbjogJ2tleXdvcmQuJDInLCBuZXh0OiAnQGRvZGVjbC4kMicgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAbGluZWRlY2xzJzogeyB0b2tlbjogJ2tleXdvcmQuJDAnLCBuZXh0OiAnQHJvb3QuJDAnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IHsgdG9rZW46ICdrZXl3b3JkLiRTMicsIG5leHQ6ICdAcG9wJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BrZXl3b3Jkcyc6ICdrZXl3b3JkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAYnVpbHRpbnMnOiAncHJlZGVmaW5lZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnaWRlbnRpZmllcidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbL1tBLVpdW1xcd10qWyE/PV0/LywgJ2NvbnN0cnVjdG9yLmlkZW50aWZpZXInXSxcbiAgICAgICAgICAgIFsvXFwkW1xcd10qLywgJ2dsb2JhbC5jb25zdGFudCddLFxuICAgICAgICAgICAgWy9AW1xcd10qLywgJ25hbWVzcGFjZS5pbnN0YW5jZS5pZGVudGlmaWVyJ10sXG4gICAgICAgICAgICBbL0BAW1xcd10qLywgJ25hbWVzcGFjZS5jbGFzcy5pZGVudGlmaWVyJ10sXG4gICAgICAgICAgICAvLyBoZXJlIGRvY3VtZW50XG4gICAgICAgICAgICBbLzw8Wy1+XShAaGVyZWRlbGltKS4qLywgeyB0b2tlbjogJ3N0cmluZy5oZXJlZG9jLmRlbGltaXRlcicsIG5leHQ6ICdAaGVyZWRvYy4kMScgfV0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL1sgXFx0XFxyXFxuXSs8PChAaGVyZWRlbGltKS4qLyxcbiAgICAgICAgICAgICAgICB7IHRva2VuOiAnc3RyaW5nLmhlcmVkb2MuZGVsaW1pdGVyJywgbmV4dDogJ0BoZXJlZG9jLiQxJyB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgWy9ePDwoQGhlcmVkZWxpbSkuKi8sIHsgdG9rZW46ICdzdHJpbmcuaGVyZWRvYy5kZWxpbWl0ZXInLCBuZXh0OiAnQGhlcmVkb2MuJDEnIH1dLFxuICAgICAgICAgICAgLy8gd2hpdGVzcGFjZVxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHdoaXRlc3BhY2UnIH0sXG4gICAgICAgICAgICAvLyBzdHJpbmdzXG4gICAgICAgICAgICBbL1wiLywgeyB0b2tlbjogJ3N0cmluZy5kLmRlbGltJywgbmV4dDogJ0Bkc3RyaW5nLmQuXCInIH1dLFxuICAgICAgICAgICAgWy8nLywgeyB0b2tlbjogJ3N0cmluZy5zcS5kZWxpbScsIG5leHQ6ICdAc3N0cmluZy5zcScgfV0sXG4gICAgICAgICAgICAvLyAlIGxpdGVyYWxzLiBGb3IgZWZmaWNpZW5jeSwgcmVtYXRjaCBpbiB0aGUgJ3BzdHJpbmcnIHN0YXRlXG4gICAgICAgICAgICBbLyUoW3JzcXh3V118UT8pLywgeyB0b2tlbjogJ0ByZW1hdGNoJywgbmV4dDogJ3BzdHJpbmcnIH1dLFxuICAgICAgICAgICAgLy8gY29tbWFuZHMgYW5kIHN5bWJvbHNcbiAgICAgICAgICAgIFsvYC8sIHsgdG9rZW46ICdzdHJpbmcueC5kZWxpbScsIG5leHQ6ICdAZHN0cmluZy54LmAnIH1dLFxuICAgICAgICAgICAgWy86KFxcd3xbJEBdKVxcdypbIT89XT8vLCAnc3RyaW5nLnMnXSxcbiAgICAgICAgICAgIFsvOlwiLywgeyB0b2tlbjogJ3N0cmluZy5zLmRlbGltJywgbmV4dDogJ0Bkc3RyaW5nLnMuXCInIH1dLFxuICAgICAgICAgICAgWy86Jy8sIHsgdG9rZW46ICdzdHJpbmcucy5kZWxpbScsIG5leHQ6ICdAc3N0cmluZy5zJyB9XSxcbiAgICAgICAgICAgIC8vIHJlZ3VsYXIgZXhwcmVzc2lvbnMuIExvb2thaGVhZCBmb3IgYSAobm90IGVzY2FwZWQpIGNsb3NpbmcgZm9yd2FyZHNsYXNoIG9uIHRoZSBzYW1lIGxpbmVcbiAgICAgICAgICAgIFsvXFwvKD89KFxcXFxcXC98W15cXC9cXG5dKStcXC8pLywgeyB0b2tlbjogJ3JlZ2V4cC5kZWxpbScsIG5leHQ6ICdAcmVnZXhwJyB9XSxcbiAgICAgICAgICAgIC8vIGRlbGltaXRlcnMgYW5kIG9wZXJhdG9yc1xuICAgICAgICAgICAgWy9be30oKVxcW1xcXV0vLCAnQGJyYWNrZXRzJ10sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL0BzeW1ib2xzLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQGtleXdvcmRvcHMnOiAna2V5d29yZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQG9wZXJhdG9ycyc6ICdvcGVyYXRvcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFsvWzssXS8sICdkZWxpbWl0ZXInXSxcbiAgICAgICAgICAgIC8vIG51bWJlcnNcbiAgICAgICAgICAgIFsvMFt4WF1bMC05YS1mQS1GXShfP1swLTlhLWZBLUZdKSovLCAnbnVtYmVyLmhleCddLFxuICAgICAgICAgICAgWy8wW19vT11bMC03XShfP1swLTddKSovLCAnbnVtYmVyLm9jdGFsJ10sXG4gICAgICAgICAgICBbLzBbYkJdWzAxXShfP1swMV0pKi8sICdudW1iZXIuYmluYXJ5J10sXG4gICAgICAgICAgICBbLzBbZERdQGRlY3BhcnQvLCAnbnVtYmVyJ10sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL0BkZWNpbWFsKChcXC5AZGVjcGFydCk/KFtlRV1bXFwtK10/QGRlY3BhcnQpPykvLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQxOiAnbnVtYmVyLmZsb2F0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdudW1iZXInXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIF0sXG4gICAgICAgIC8vIHVzZWQgdG8gbm90IHRyZWF0IGEgJ2RvJyBhcyBhIGJsb2NrIG9wZW5lciBpZiBpdCBvY2N1cnMgb24gdGhlIHNhbWVcbiAgICAgICAgLy8gbGluZSBhcyBhICdkbycgc3RhdGVtZW50OiAnd2hpbGV8dW50aWx8Zm9yJ1xuICAgICAgICAvLyBkb2RlY2wuPGRlY2w+IHdoZXJlIGRlY2wgaXMgdGhlIGRlY2xhcmF0aW9ucyBzdGFydGVkLCBsaWtlICd3aGlsZSdcbiAgICAgICAgZG9kZWNsOiBbXG4gICAgICAgICAgICBbL14vLCB7IHRva2VuOiAnJywgc3dpdGNoVG86ICdAcm9vdC4kUzInIH1dLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9bYS16X11cXHcqWyE/PV0/LyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IHsgdG9rZW46ICdrZXl3b3JkLiRTMicsIG5leHQ6ICdAcG9wJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZG86IHsgdG9rZW46ICdrZXl3b3JkJywgc3dpdGNoVG86ICdAcm9vdC4kUzInIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGxpbmVkZWNscyc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ0ByZW1hdGNoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2hUbzogJ0Byb290LiRTMidcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGtleXdvcmRzJzogJ2tleXdvcmQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BidWlsdGlucyc6ICdwcmVkZWZpbmVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdpZGVudGlmaWVyJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0Byb290JyB9XG4gICAgICAgIF0sXG4gICAgICAgIC8vIHVzZWQgdG8gcHJldmVudCBwb3RlbnRpYWwgbW9kaWZpZXJzICgnaWZ8dW50aWx8d2hpbGV8dW5sZXNzJykgdG8gbWF0Y2hcbiAgICAgICAgLy8gd2l0aCAnZW5kJyBrZXl3b3Jkcy5cbiAgICAgICAgLy8gbW9kaWZpZXIuPGRlY2w+eCB3aGVyZSBkZWNsIGlzIHRoZSBkZWNsYXJhdGlvbiBzdGFydGVyLCBsaWtlICdpZidcbiAgICAgICAgbW9kaWZpZXI6IFtcbiAgICAgICAgICAgIFsvXi8sICcnLCAnQHBvcCddLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9bYS16X11cXHcqWyE/PV0/LyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IHsgdG9rZW46ICdrZXl3b3JkLiRTMicsIG5leHQ6ICdAcG9wJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3RoZW58ZWxzZXxlbHNpZnxkbyc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ2tleXdvcmQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaFRvOiAnQHJvb3QuJFMyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAbGluZWRlY2xzJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuOiAnQHJlbWF0Y2gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaFRvOiAnQHJvb3QuJFMyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAa2V5d29yZHMnOiAna2V5d29yZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGJ1aWx0aW5zJzogJ3ByZWRlZmluZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ2lkZW50aWZpZXInXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHJvb3QnIH1cbiAgICAgICAgXSxcbiAgICAgICAgLy8gc2luZ2xlIHF1b3RlIHN0cmluZ3MgKGFsc28gdXNlZCBmb3Igc3ltYm9scylcbiAgICAgICAgLy8gc3N0cmluZy48a2luZD4gIHdoZXJlIGtpbmQgaXMgJ3NxJyAoc2luZ2xlIHF1b3RlKSBvciAncycgKHN5bWJvbClcbiAgICAgICAgc3N0cmluZzogW1xuICAgICAgICAgICAgWy9bXlxcXFwnXSsvLCAnc3RyaW5nLiRTMiddLFxuICAgICAgICAgICAgWy9cXFxcXFxcXHxcXFxcJ3xcXFxcJC8sICdzdHJpbmcuJFMyLmVzY2FwZSddLFxuICAgICAgICAgICAgWy9cXFxcLi8sICdzdHJpbmcuJFMyLmludmFsaWQnXSxcbiAgICAgICAgICAgIFsvJy8sIHsgdG9rZW46ICdzdHJpbmcuJFMyLmRlbGltJywgbmV4dDogJ0Bwb3AnIH1dXG4gICAgICAgIF0sXG4gICAgICAgIC8vIGRvdWJsZSBxdW90ZWQgXCJzdHJpbmdcIi5cbiAgICAgICAgLy8gZHN0cmluZy48a2luZD4uPGRlbGltPiB3aGVyZSBraW5kIGlzICdkJyAoZG91YmxlIHF1b3RlZCksICd4JyAoY29tbWFuZCksIG9yICdzJyAoc3ltYm9sKVxuICAgICAgICAvLyBhbmQgZGVsaW0gaXMgdGhlIGVuZGluZyBkZWxpbWl0ZXIgKFwiIG9yIGApXG4gICAgICAgIGRzdHJpbmc6IFtcbiAgICAgICAgICAgIFsvW15cXFxcYFwiI10rLywgJ3N0cmluZy4kUzInXSxcbiAgICAgICAgICAgIFsvIy8sICdzdHJpbmcuJFMyLmVzY2FwZScsICdAaW50ZXJwb2xhdGVkJ10sXG4gICAgICAgICAgICBbL1xcXFwkLywgJ3N0cmluZy4kUzIuZXNjYXBlJ10sXG4gICAgICAgICAgICBbL0Blc2NhcGVzLywgJ3N0cmluZy4kUzIuZXNjYXBlJ10sXG4gICAgICAgICAgICBbL1xcXFwuLywgJ3N0cmluZy4kUzIuZXNjYXBlLmludmFsaWQnXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvW2BcIl0vLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICckIz09JFMzJzogeyB0b2tlbjogJ3N0cmluZy4kUzIuZGVsaW0nLCBuZXh0OiAnQHBvcCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdzdHJpbmcuJFMyJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICBdLFxuICAgICAgICAvLyBsaXRlcmFsIGRvY3VtZW50c1xuICAgICAgICAvLyBoZXJlZG9jLjxjbG9zZT4gd2hlcmUgY2xvc2UgaXMgdGhlIGNsb3NpbmcgZGVsaW1pdGVyXG4gICAgICAgIGhlcmVkb2M6IFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvXihcXHMqKShAaGVyZWRlbGltKSQvLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICckMj09JFMyJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzdHJpbmcuaGVyZWRvYycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0b2tlbjogJ3N0cmluZy5oZXJlZG9jLmRlbGltaXRlcicsIG5leHQ6ICdAcG9wJyB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogWydzdHJpbmcuaGVyZWRvYycsICdzdHJpbmcuaGVyZWRvYyddXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgWy8uKi8sICdzdHJpbmcuaGVyZWRvYyddXG4gICAgICAgIF0sXG4gICAgICAgIC8vIGludGVycG9sYXRlZCBzZXF1ZW5jZVxuICAgICAgICBpbnRlcnBvbGF0ZWQ6IFtcbiAgICAgICAgICAgIFsvXFwkXFx3Ki8sICdnbG9iYWwuY29uc3RhbnQnLCAnQHBvcCddLFxuICAgICAgICAgICAgWy9AXFx3Ki8sICduYW1lc3BhY2UuY2xhc3MuaWRlbnRpZmllcicsICdAcG9wJ10sXG4gICAgICAgICAgICBbL0BAXFx3Ki8sICduYW1lc3BhY2UuaW5zdGFuY2UuaWRlbnRpZmllcicsICdAcG9wJ10sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL1t7XS8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ3N0cmluZy5lc2NhcGUuY3VybHknLFxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2hUbzogJ0BpbnRlcnBvbGF0ZWRfY29tcG91bmQnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFsnJywgJycsICdAcG9wJ10gLy8ganVzdCBhICMgaXMgaW50ZXJwcmV0ZWQgYXMgYSAjXG4gICAgICAgIF0sXG4gICAgICAgIC8vIGFueSBjb2RlXG4gICAgICAgIGludGVycG9sYXRlZF9jb21wb3VuZDogW1xuICAgICAgICAgICAgWy9bfV0vLCB7IHRva2VuOiAnc3RyaW5nLmVzY2FwZS5jdXJseScsIG5leHQ6ICdAcG9wJyB9XSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0Byb290JyB9XG4gICAgICAgIF0sXG4gICAgICAgIC8vICVyIHF1b3RlZCByZWdleHBcbiAgICAgICAgLy8gcHJlZ2V4cC48b3Blbj4uPGNsb3NlPiB3aGVyZSBvcGVuL2Nsb3NlIGFyZSB0aGUgb3Blbi9jbG9zZSBkZWxpbWl0ZXJcbiAgICAgICAgcHJlZ2V4cDogW1xuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHdoaXRlc3BhY2UnIH0sXG4gICAgICAgICAgICAvLyB0dXJucyBvdXQgdGhhdCB5b3UgY2FuIHF1b3RlIHVzaW5nIHJlZ2V4IGNvbnRyb2wgY2hhcmFjdGVycywgYWFyZ2ghXG4gICAgICAgICAgICAvLyBmb3IgZXhhbXBsZTsgJXJ8a2dqZ2FqfCBpcyBvayAoZXZlbiB0aG91Z2ggfCBpcyB1c2VkIGZvciBhbHRlcm5hdGlvbilcbiAgICAgICAgICAgIC8vIHNvLCB3ZSBuZWVkIHRvIG1hdGNoIHRob3NlIGZpcnN0XG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL1teXFwoXFx7XFxbXFxcXF0vLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICckIz09JFMzJzogeyB0b2tlbjogJ3JlZ2V4cC5kZWxpbScsIG5leHQ6ICdAcG9wJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJyQjPT0kUzInOiB7IHRva2VuOiAncmVnZXhwLmRlbGltJywgbmV4dDogJ0BwdXNoJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ35bKX1cXFxcXV0nOiAnQGJyYWNrZXRzLnJlZ2V4cC5lc2NhcGUuY29udHJvbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnfkByZWdleHBjdGwnOiAncmVnZXhwLmVzY2FwZS5jb250cm9sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdyZWdleHAnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHJlZ2V4Y29udHJvbCcgfVxuICAgICAgICBdLFxuICAgICAgICAvLyBXZSBtYXRjaCByZWd1bGFyIGV4cHJlc3Npb24gcXVpdGUgcHJlY2lzZWx5XG4gICAgICAgIHJlZ2V4cDogW1xuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHJlZ2V4Y29udHJvbCcgfSxcbiAgICAgICAgICAgIFsvW15cXFxcXFwvXS8sICdyZWdleHAnXSxcbiAgICAgICAgICAgIFsnL1tpeG1wXSonLCB7IHRva2VuOiAncmVnZXhwLmRlbGltJyB9LCAnQHBvcCddXG4gICAgICAgIF0sXG4gICAgICAgIHJlZ2V4Y29udHJvbDogW1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC8oXFx7KShcXGQrKD86LFxcZCopPykoXFx9KS8sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAnQGJyYWNrZXRzLnJlZ2V4cC5lc2NhcGUuY29udHJvbCcsXG4gICAgICAgICAgICAgICAgICAgICdyZWdleHAuZXNjYXBlLmNvbnRyb2wnLFxuICAgICAgICAgICAgICAgICAgICAnQGJyYWNrZXRzLnJlZ2V4cC5lc2NhcGUuY29udHJvbCdcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC8oXFxbKShcXF4/KS8sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAnQGJyYWNrZXRzLnJlZ2V4cC5lc2NhcGUuY29udHJvbCcsXG4gICAgICAgICAgICAgICAgICAgIHsgdG9rZW46ICdyZWdleHAuZXNjYXBlLmNvbnRyb2wnLCBuZXh0OiAnQHJlZ2V4cmFuZ2UnIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgWy8oXFwoKShcXD9bOj0hXSkvLCBbJ0BicmFja2V0cy5yZWdleHAuZXNjYXBlLmNvbnRyb2wnLCAncmVnZXhwLmVzY2FwZS5jb250cm9sJ11dLFxuICAgICAgICAgICAgWy9cXChcXD8jLywgeyB0b2tlbjogJ3JlZ2V4cC5lc2NhcGUuY29udHJvbCcsIG5leHQ6ICdAcmVnZXhwY29tbWVudCcgfV0sXG4gICAgICAgICAgICBbL1soKV0vLCAnQGJyYWNrZXRzLnJlZ2V4cC5lc2NhcGUuY29udHJvbCddLFxuICAgICAgICAgICAgWy9AcmVnZXhwY3RsLywgJ3JlZ2V4cC5lc2NhcGUuY29udHJvbCddLFxuICAgICAgICAgICAgWy9cXFxcJC8sICdyZWdleHAuZXNjYXBlJ10sXG4gICAgICAgICAgICBbL0ByZWdleHBlc2MvLCAncmVnZXhwLmVzY2FwZSddLFxuICAgICAgICAgICAgWy9cXFxcXFwuLywgJ3JlZ2V4cC5pbnZhbGlkJ10sXG4gICAgICAgICAgICBbLyMvLCAncmVnZXhwLmVzY2FwZScsICdAaW50ZXJwb2xhdGVkJ11cbiAgICAgICAgXSxcbiAgICAgICAgcmVnZXhyYW5nZTogW1xuICAgICAgICAgICAgWy8tLywgJ3JlZ2V4cC5lc2NhcGUuY29udHJvbCddLFxuICAgICAgICAgICAgWy9cXF4vLCAncmVnZXhwLmludmFsaWQnXSxcbiAgICAgICAgICAgIFsvXFxcXCQvLCAncmVnZXhwLmVzY2FwZSddLFxuICAgICAgICAgICAgWy9AcmVnZXhwZXNjLywgJ3JlZ2V4cC5lc2NhcGUnXSxcbiAgICAgICAgICAgIFsvW15cXF1dLywgJ3JlZ2V4cCddLFxuICAgICAgICAgICAgWy9cXF0vLCAnQGJyYWNrZXRzLnJlZ2V4cC5lc2NhcGUuY29udHJvbCcsICdAcG9wJ11cbiAgICAgICAgXSxcbiAgICAgICAgcmVnZXhwY29tbWVudDogW1xuICAgICAgICAgICAgWy9bXildKy8sICdjb21tZW50J10sXG4gICAgICAgICAgICBbL1xcKS8sIHsgdG9rZW46ICdyZWdleHAuZXNjYXBlLmNvbnRyb2wnLCBuZXh0OiAnQHBvcCcgfV1cbiAgICAgICAgXSxcbiAgICAgICAgLy8gJSBxdW90ZWQgc3RyaW5nc1xuICAgICAgICAvLyBBIGJpdCByZXBldGl0aXZlIHNpbmNlIHdlIG5lZWQgdG8gb2Z0ZW4gc3BlY2lhbCBjYXNlIHRoZSBraW5kIG9mIGVuZGluZyBkZWxpbWl0ZXJcbiAgICAgICAgcHN0cmluZzogW1xuICAgICAgICAgICAgWy8lKFtxd3NdKVxcKC8sIHsgdG9rZW46ICdzdHJpbmcuJDEuZGVsaW0nLCBzd2l0Y2hUbzogJ0Bxc3RyaW5nLiQxLiguKScgfV0sXG4gICAgICAgICAgICBbLyUoW3F3c10pXFxbLywgeyB0b2tlbjogJ3N0cmluZy4kMS5kZWxpbScsIHN3aXRjaFRvOiAnQHFzdHJpbmcuJDEuWy5dJyB9XSxcbiAgICAgICAgICAgIFsvJShbcXdzXSlcXHsvLCB7IHRva2VuOiAnc3RyaW5nLiQxLmRlbGltJywgc3dpdGNoVG86ICdAcXN0cmluZy4kMS57Ln0nIH1dLFxuICAgICAgICAgICAgWy8lKFtxd3NdKTwvLCB7IHRva2VuOiAnc3RyaW5nLiQxLmRlbGltJywgc3dpdGNoVG86ICdAcXN0cmluZy4kMS48Lj4nIH1dLFxuICAgICAgICAgICAgWy8lKFtxd3NdKShAZGVsaW0pLywgeyB0b2tlbjogJ3N0cmluZy4kMS5kZWxpbScsIHN3aXRjaFRvOiAnQHFzdHJpbmcuJDEuJDIuJDInIH1dLFxuICAgICAgICAgICAgWy8lclxcKC8sIHsgdG9rZW46ICdyZWdleHAuZGVsaW0nLCBzd2l0Y2hUbzogJ0BwcmVnZXhwLiguKScgfV0sXG4gICAgICAgICAgICBbLyVyXFxbLywgeyB0b2tlbjogJ3JlZ2V4cC5kZWxpbScsIHN3aXRjaFRvOiAnQHByZWdleHAuWy5dJyB9XSxcbiAgICAgICAgICAgIFsvJXJcXHsvLCB7IHRva2VuOiAncmVnZXhwLmRlbGltJywgc3dpdGNoVG86ICdAcHJlZ2V4cC57Ln0nIH1dLFxuICAgICAgICAgICAgWy8lcjwvLCB7IHRva2VuOiAncmVnZXhwLmRlbGltJywgc3dpdGNoVG86ICdAcHJlZ2V4cC48Lj4nIH1dLFxuICAgICAgICAgICAgWy8lcihAZGVsaW0pLywgeyB0b2tlbjogJ3JlZ2V4cC5kZWxpbScsIHN3aXRjaFRvOiAnQHByZWdleHAuJDEuJDEnIH1dLFxuICAgICAgICAgICAgWy8lKHh8V3xRPylcXCgvLCB7IHRva2VuOiAnc3RyaW5nLiQxLmRlbGltJywgc3dpdGNoVG86ICdAcXFzdHJpbmcuJDEuKC4pJyB9XSxcbiAgICAgICAgICAgIFsvJSh4fFd8UT8pXFxbLywgeyB0b2tlbjogJ3N0cmluZy4kMS5kZWxpbScsIHN3aXRjaFRvOiAnQHFxc3RyaW5nLiQxLlsuXScgfV0sXG4gICAgICAgICAgICBbLyUoeHxXfFE/KVxcey8sIHsgdG9rZW46ICdzdHJpbmcuJDEuZGVsaW0nLCBzd2l0Y2hUbzogJ0BxcXN0cmluZy4kMS57Ln0nIH1dLFxuICAgICAgICAgICAgWy8lKHh8V3xRPyk8LywgeyB0b2tlbjogJ3N0cmluZy4kMS5kZWxpbScsIHN3aXRjaFRvOiAnQHFxc3RyaW5nLiQxLjwuPicgfV0sXG4gICAgICAgICAgICBbLyUoeHxXfFE/KShAZGVsaW0pLywgeyB0b2tlbjogJ3N0cmluZy4kMS5kZWxpbScsIHN3aXRjaFRvOiAnQHFxc3RyaW5nLiQxLiQyLiQyJyB9XSxcbiAgICAgICAgICAgIFsvJShbcnF3c3hXXXxRPykuLywgeyB0b2tlbjogJ2ludmFsaWQnLCBuZXh0OiAnQHBvcCcgfV0sXG4gICAgICAgICAgICBbLy4vLCB7IHRva2VuOiAnaW52YWxpZCcsIG5leHQ6ICdAcG9wJyB9XSAvLyByZWNvdmVyXG4gICAgICAgIF0sXG4gICAgICAgIC8vIG5vbi1leHBhbmRlZCBxdW90ZWQgc3RyaW5nLlxuICAgICAgICAvLyBxc3RyaW5nLjxraW5kPi48b3Blbj4uPGNsb3NlPlxuICAgICAgICAvLyAga2luZCA9IHF8d3xzICAoc2luZ2xlIHF1b3RlLCBhcnJheSwgc3ltYm9sKVxuICAgICAgICAvLyAgb3BlbiA9IG9wZW4gZGVsaW1pdGVyXG4gICAgICAgIC8vICBjbG9zZSA9IGNsb3NlIGRlbGltaXRlclxuICAgICAgICBxc3RyaW5nOiBbXG4gICAgICAgICAgICBbL1xcXFwkLywgJ3N0cmluZy4kUzIuZXNjYXBlJ10sXG4gICAgICAgICAgICBbL1xcXFwuLywgJ3N0cmluZy4kUzIuZXNjYXBlJ10sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLy4vLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICckIz09JFM0JzogeyB0b2tlbjogJ3N0cmluZy4kUzIuZGVsaW0nLCBuZXh0OiAnQHBvcCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICckIz09JFMzJzogeyB0b2tlbjogJ3N0cmluZy4kUzIuZGVsaW0nLCBuZXh0OiAnQHB1c2gnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnc3RyaW5nLiRTMidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgXSxcbiAgICAgICAgLy8gZXhwYW5kZWQgcXVvdGVkIHN0cmluZy5cbiAgICAgICAgLy8gcXFzdHJpbmcuPGtpbmQ+LjxvcGVuPi48Y2xvc2U+XG4gICAgICAgIC8vICBraW5kID0gUXxXfHggIChkb3VibGUgcXVvdGUsIGFycmF5LCBjb21tYW5kKVxuICAgICAgICAvLyAgb3BlbiA9IG9wZW4gZGVsaW1pdGVyXG4gICAgICAgIC8vICBjbG9zZSA9IGNsb3NlIGRlbGltaXRlclxuICAgICAgICBxcXN0cmluZzogW1svIy8sICdzdHJpbmcuJFMyLmVzY2FwZScsICdAaW50ZXJwb2xhdGVkJ10sIHsgaW5jbHVkZTogJ0Bxc3RyaW5nJyB9XSxcbiAgICAgICAgLy8gd2hpdGVzcGFjZSAmIGNvbW1lbnRzXG4gICAgICAgIHdoaXRlc3BhY2U6IFtcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy8sICcnXSxcbiAgICAgICAgICAgIFsvXlxccyo9YmVnaW5cXGIvLCAnY29tbWVudCcsICdAY29tbWVudCddLFxuICAgICAgICAgICAgWy8jLiokLywgJ2NvbW1lbnQnXVxuICAgICAgICBdLFxuICAgICAgICBjb21tZW50OiBbXG4gICAgICAgICAgICBbL1tePV0rLywgJ2NvbW1lbnQnXSxcbiAgICAgICAgICAgIFsvXlxccyo9YmVnaW5cXGIvLCAnY29tbWVudC5pbnZhbGlkJ10sXG4gICAgICAgICAgICBbL15cXHMqPWVuZFxcYi4qLywgJ2NvbW1lbnQnLCAnQHBvcCddLFxuICAgICAgICAgICAgWy9bPV0vLCAnY29tbWVudCddXG4gICAgICAgIF1cbiAgICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==