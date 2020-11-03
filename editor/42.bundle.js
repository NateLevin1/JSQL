(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[42],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/postiats/postiats.js":
/*!********************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/postiats/postiats.js ***!
  \********************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conf", function() { return conf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "language", function() { return language; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Artyom Shalkhakov. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *
 *  Based on the ATS/Postiats lexer by Hongwei Xi.
 *--------------------------------------------------------------------------------------------*/
var conf = {
    comments: {
        lineComment: '//',
        blockComment: ['(*', '*)']
    },
    brackets: [
        ['{', '}'],
        ['[', ']'],
        ['(', ')'],
        ['<', '>']
    ],
    autoClosingPairs: [
        { open: '"', close: '"', notIn: ['string', 'comment'] },
        { open: '{', close: '}', notIn: ['string', 'comment'] },
        { open: '[', close: ']', notIn: ['string', 'comment'] },
        { open: '(', close: ')', notIn: ['string', 'comment'] }
    ]
};
var language = {
    tokenPostfix: '.pats',
    // TODO: staload and dynload are followed by a special kind of string literals
    // with {$IDENTIFER} variables, and it also may make sense to highlight
    // the punctuation (. and / and \) differently.
    // Set defaultToken to invalid to see what you do not tokenize yet
    defaultToken: 'invalid',
    // keyword reference: https://github.com/githwxi/ATS-Postiats/blob/master/src/pats_lexing_token.dats
    keywords: [
        //
        'abstype',
        'abst0ype',
        'absprop',
        'absview',
        'absvtype',
        'absviewtype',
        'absvt0ype',
        'absviewt0ype',
        //
        'as',
        //
        'and',
        //
        'assume',
        //
        'begin',
        //
        /*
                "case", // CASE
        */
        //
        'classdec',
        //
        'datasort',
        //
        'datatype',
        'dataprop',
        'dataview',
        'datavtype',
        'dataviewtype',
        //
        'do',
        //
        'end',
        //
        'extern',
        'extype',
        'extvar',
        //
        'exception',
        //
        'fn',
        'fnx',
        'fun',
        //
        'prfn',
        'prfun',
        //
        'praxi',
        'castfn',
        //
        'if',
        'then',
        'else',
        //
        'ifcase',
        //
        'in',
        //
        'infix',
        'infixl',
        'infixr',
        'prefix',
        'postfix',
        //
        'implmnt',
        'implement',
        //
        'primplmnt',
        'primplement',
        //
        'import',
        //
        /*
                "lam", // LAM
                "llam", // LLAM
                "fix", // FIX
        */
        //
        'let',
        //
        'local',
        //
        'macdef',
        'macrodef',
        //
        'nonfix',
        //
        'symelim',
        'symintr',
        'overload',
        //
        'of',
        'op',
        //
        'rec',
        //
        'sif',
        'scase',
        //
        'sortdef',
        /*
        // HX: [sta] is now deprecated
        */
        'sta',
        'stacst',
        'stadef',
        'static',
        /*
                "stavar", // T_STAVAR
        */
        //
        'staload',
        'dynload',
        //
        'try',
        //
        'tkindef',
        //
        /*
                "type", // TYPE
        */
        'typedef',
        'propdef',
        'viewdef',
        'vtypedef',
        'viewtypedef',
        //
        /*
                "val", // VAL
        */
        'prval',
        //
        'var',
        'prvar',
        //
        'when',
        'where',
        //
        /*
                "for", // T_FOR
                "while", // T_WHILE
        */
        //
        'with',
        //
        'withtype',
        'withprop',
        'withview',
        'withvtype',
        'withviewtype' // WITHVIEWTYPE
        //
    ],
    keywords_dlr: [
        '$delay',
        '$ldelay',
        //
        '$arrpsz',
        '$arrptrsize',
        //
        '$d2ctype',
        //
        '$effmask',
        '$effmask_ntm',
        '$effmask_exn',
        '$effmask_ref',
        '$effmask_wrt',
        '$effmask_all',
        //
        '$extern',
        '$extkind',
        '$extype',
        '$extype_struct',
        //
        '$extval',
        '$extfcall',
        '$extmcall',
        //
        '$literal',
        //
        '$myfilename',
        '$mylocation',
        '$myfunction',
        //
        '$lst',
        '$lst_t',
        '$lst_vt',
        '$list',
        '$list_t',
        '$list_vt',
        //
        '$rec',
        '$rec_t',
        '$rec_vt',
        '$record',
        '$record_t',
        '$record_vt',
        //
        '$tup',
        '$tup_t',
        '$tup_vt',
        '$tuple',
        '$tuple_t',
        '$tuple_vt',
        //
        '$break',
        '$continue',
        //
        '$raise',
        //
        '$showtype',
        //
        '$vcopyenv_v',
        '$vcopyenv_vt',
        //
        '$tempenver',
        //
        '$solver_assert',
        '$solver_verify' // T_DLRSOLVERIFY
    ],
    keywords_srp: [
        //
        '#if',
        '#ifdef',
        '#ifndef',
        //
        '#then',
        //
        '#elif',
        '#elifdef',
        '#elifndef',
        //
        '#else',
        '#endif',
        //
        '#error',
        //
        '#prerr',
        '#print',
        //
        '#assert',
        //
        '#undef',
        '#define',
        //
        '#include',
        '#require',
        //
        '#pragma',
        '#codegen2',
        '#codegen3' // T_SRPCODEGEN3 // for level-3 codegen
        //
        // HX: end of special tokens
        //
    ],
    irregular_keyword_list: [
        'val+',
        'val-',
        'val',
        'case+',
        'case-',
        'case',
        'addr@',
        'addr',
        'fold@',
        'free@',
        'fix@',
        'fix',
        'lam@',
        'lam',
        'llam@',
        'llam',
        'viewt@ype+',
        'viewt@ype-',
        'viewt@ype',
        'viewtype+',
        'viewtype-',
        'viewtype',
        'view+',
        'view-',
        'view@',
        'view',
        'type+',
        'type-',
        'type',
        'vtype+',
        'vtype-',
        'vtype',
        'vt@ype+',
        'vt@ype-',
        'vt@ype',
        'viewt@ype+',
        'viewt@ype-',
        'viewt@ype',
        'viewtype+',
        'viewtype-',
        'viewtype',
        'prop+',
        'prop-',
        'prop',
        'type+',
        'type-',
        'type',
        't@ype',
        't@ype+',
        't@ype-',
        'abst@ype',
        'abstype',
        'absviewt@ype',
        'absvt@ype',
        'for*',
        'for',
        'while*',
        'while'
    ],
    keywords_types: [
        'bool',
        'double',
        'byte',
        'int',
        'short',
        'char',
        'void',
        'unit',
        'long',
        'float',
        'string',
        'strptr'
    ],
    // TODO: reference for this?
    keywords_effects: [
        '0',
        'fun',
        'clo',
        'prf',
        'funclo',
        'cloptr',
        'cloref',
        'ref',
        'ntm',
        '1' // all effects
    ],
    operators: [
        '@',
        '!',
        '|',
        '`',
        ':',
        '$',
        '.',
        '=',
        '#',
        '~',
        //
        '..',
        '...',
        //
        '=>',
        // "=<", // T_EQLT
        '=<>',
        '=/=>',
        '=>>',
        '=/=>>',
        //
        '<',
        '>',
        //
        '><',
        //
        '.<',
        '>.',
        //
        '.<>.',
        //
        '->',
        //"-<", // T_MINUSLT
        '-<>' // T_MINUSLTGT
        //
        /*
                ":<", // T_COLONLT
        */
    ],
    brackets: [
        { open: ',(', close: ')', token: 'delimiter.parenthesis' },
        { open: '`(', close: ')', token: 'delimiter.parenthesis' },
        { open: '%(', close: ')', token: 'delimiter.parenthesis' },
        { open: "'(", close: ')', token: 'delimiter.parenthesis' },
        { open: "'{", close: '}', token: 'delimiter.parenthesis' },
        { open: '@(', close: ')', token: 'delimiter.parenthesis' },
        { open: '@{', close: '}', token: 'delimiter.brace' },
        { open: '@[', close: ']', token: 'delimiter.square' },
        { open: '#[', close: ']', token: 'delimiter.square' },
        { open: '{', close: '}', token: 'delimiter.curly' },
        { open: '[', close: ']', token: 'delimiter.square' },
        { open: '(', close: ')', token: 'delimiter.parenthesis' },
        { open: '<', close: '>', token: 'delimiter.angle' }
    ],
    // we include these common regular expressions
    symbols: /[=><!~?:&|+\-*\/\^%]+/,
    IDENTFST: /[a-zA-Z_]/,
    IDENTRST: /[a-zA-Z0-9_'$]/,
    symbolic: /[%&+-./:=@~`^|*!$#?<>]/,
    digit: /[0-9]/,
    digitseq0: /@digit*/,
    xdigit: /[0-9A-Za-z]/,
    xdigitseq0: /@xdigit*/,
    INTSP: /[lLuU]/,
    FLOATSP: /[fFlL]/,
    fexponent: /[eE][+-]?[0-9]+/,
    fexponent_bin: /[pP][+-]?[0-9]+/,
    deciexp: /\.[0-9]*@fexponent?/,
    hexiexp: /\.[0-9a-zA-Z]*@fexponent_bin?/,
    irregular_keywords: /val[+-]?|case[+-]?|addr\@?|fold\@|free\@|fix\@?|lam\@?|llam\@?|prop[+-]?|type[+-]?|view[+-@]?|viewt@?ype[+-]?|t@?ype[+-]?|v(iew)?t@?ype[+-]?|abst@?ype|absv(iew)?t@?ype|for\*?|while\*?/,
    ESCHAR: /[ntvbrfa\\\?'"\(\[\{]/,
    start: 'root',
    // The main tokenizer for ATS/Postiats
    // reference: https://github.com/githwxi/ATS-Postiats/blob/master/src/pats_lexing.dats
    tokenizer: {
        root: [
            // lexing_blankseq0
            { regex: /[ \t\r\n]+/, action: { token: '' } },
            // NOTE: (*) is an invalid ML-like comment!
            { regex: /\(\*\)/, action: { token: 'invalid' } },
            {
                regex: /\(\*/,
                action: { token: 'comment', next: 'lexing_COMMENT_block_ml' }
            },
            {
                regex: /\(/,
                action: '@brackets' /*{ token: 'delimiter.parenthesis' }*/
            },
            {
                regex: /\)/,
                action: '@brackets' /*{ token: 'delimiter.parenthesis' }*/
            },
            {
                regex: /\[/,
                action: '@brackets' /*{ token: 'delimiter.bracket' }*/
            },
            {
                regex: /\]/,
                action: '@brackets' /*{ token: 'delimiter.bracket' }*/
            },
            {
                regex: /\{/,
                action: '@brackets' /*{ token: 'delimiter.brace' }*/
            },
            {
                regex: /\}/,
                action: '@brackets' /*{ token: 'delimiter.brace' }*/
            },
            // lexing_COMMA
            {
                regex: /,\(/,
                action: '@brackets' /*{ token: 'delimiter.parenthesis' }*/
            },
            { regex: /,/, action: { token: 'delimiter.comma' } },
            { regex: /;/, action: { token: 'delimiter.semicolon' } },
            // lexing_AT
            {
                regex: /@\(/,
                action: '@brackets' /* { token: 'delimiter.parenthesis' }*/
            },
            {
                regex: /@\[/,
                action: '@brackets' /* { token: 'delimiter.bracket' }*/
            },
            {
                regex: /@\{/,
                action: '@brackets' /*{ token: 'delimiter.brace' }*/
            },
            // lexing_COLON
            {
                regex: /:</,
                action: { token: 'keyword', next: '@lexing_EFFECT_commaseq0' }
            },
            /*
            lexing_DOT:

            . // SYMBOLIC => lexing_IDENT_sym
            . FLOATDOT => lexing_FLOAT_deciexp
            . DIGIT => T_DOTINT
            */
            { regex: /\.@symbolic+/, action: { token: 'identifier.sym' } },
            // FLOATDOT case
            {
                regex: /\.@digit*@fexponent@FLOATSP*/,
                action: { token: 'number.float' }
            },
            { regex: /\.@digit+/, action: { token: 'number.float' } },
            // lexing_DOLLAR:
            // '$' IDENTFST IDENTRST* => lexing_IDENT_dlr, _ => lexing_IDENT_sym
            {
                regex: /\$@IDENTFST@IDENTRST*/,
                action: {
                    cases: {
                        '@keywords_dlr': { token: 'keyword.dlr' },
                        '@default': { token: 'namespace' } // most likely a module qualifier
                    }
                }
            },
            // lexing_SHARP:
            // '#' IDENTFST IDENTRST* => lexing_ident_srp, _ => lexing_IDENT_sym
            {
                regex: /\#@IDENTFST@IDENTRST*/,
                action: {
                    cases: {
                        '@keywords_srp': { token: 'keyword.srp' },
                        '@default': { token: 'identifier' }
                    }
                }
            },
            // lexing_PERCENT:
            { regex: /%\(/, action: { token: 'delimiter.parenthesis' } },
            {
                regex: /^%{(#|\^|\$)?/,
                action: {
                    token: 'keyword',
                    next: '@lexing_EXTCODE',
                    nextEmbedded: 'text/javascript'
                }
            },
            { regex: /^%}/, action: { token: 'keyword' } },
            // lexing_QUOTE
            { regex: /'\(/, action: { token: 'delimiter.parenthesis' } },
            { regex: /'\[/, action: { token: 'delimiter.bracket' } },
            { regex: /'\{/, action: { token: 'delimiter.brace' } },
            [/(')(\\@ESCHAR|\\[xX]@xdigit+|\\@digit+)(')/, ['string', 'string.escape', 'string']],
            [/'[^\\']'/, 'string'],
            // lexing_DQUOTE
            [/"/, 'string.quote', '@lexing_DQUOTE'],
            // lexing_BQUOTE
            {
                regex: /`\(/,
                action: '@brackets' /* { token: 'delimiter.parenthesis' }*/
            },
            // TODO: otherwise, try lexing_IDENT_sym
            { regex: /\\/, action: { token: 'punctuation' } },
            // lexing_IDENT_alp:
            // NOTE: (?!regex) is syntax for "not-followed-by" regex
            // to resolve ambiguity such as foreach$fwork being incorrectly lexed as [for] [each$fwork]!
            {
                regex: /@irregular_keywords(?!@IDENTRST)/,
                action: { token: 'keyword' }
            },
            {
                regex: /@IDENTFST@IDENTRST*[<!\[]?/,
                action: {
                    cases: {
                        // TODO: dynload and staload should be specially parsed
                        // dynload whitespace+ "special_string"
                        // this special string is really:
                        //  '/' '\\' '.' => punctuation
                        // ({\$)([a-zA-Z_][a-zA-Z_0-9]*)(}) => punctuation,keyword,punctuation
                        // [^"] => identifier/literal
                        '@keywords': { token: 'keyword' },
                        '@keywords_types': { token: 'type' },
                        '@default': { token: 'identifier' }
                    }
                }
            },
            // lexing_IDENT_sym:
            {
                regex: /\/\/\/\//,
                action: { token: 'comment', next: '@lexing_COMMENT_rest' }
            },
            { regex: /\/\/.*$/, action: { token: 'comment' } },
            {
                regex: /\/\*/,
                action: { token: 'comment', next: '@lexing_COMMENT_block_c' }
            },
            // AS-20160627: specifically for effect annotations
            {
                regex: /-<|=</,
                action: { token: 'keyword', next: '@lexing_EFFECT_commaseq0' }
            },
            {
                regex: /@symbolic+/,
                action: {
                    cases: {
                        '@operators': 'keyword',
                        '@default': 'operator'
                    }
                }
            },
            // lexing_ZERO:
            // FIXME: this one is quite messy/unfinished yet
            // TODO: lexing_INT_hex
            // - testing_hexiexp => lexing_FLOAT_hexiexp
            // - testing_fexponent_bin => lexing_FLOAT_hexiexp
            // - testing_intspseq0 => T_INT_hex
            // lexing_INT_hex:
            {
                regex: /0[xX]@xdigit+(@hexiexp|@fexponent_bin)@FLOATSP*/,
                action: { token: 'number.float' }
            },
            { regex: /0[xX]@xdigit+@INTSP*/, action: { token: 'number.hex' } },
            {
                regex: /0[0-7]+(?![0-9])@INTSP*/,
                action: { token: 'number.octal' }
            },
            //{regex: /0/, action: { token: 'number' } }, // INTZERO
            // lexing_INT_dec:
            // - testing_deciexp => lexing_FLOAT_deciexp
            // - testing_fexponent => lexing_FLOAT_deciexp
            // - otherwise => intspseq0 ([0-9]*[lLuU]?)
            {
                regex: /@digit+(@fexponent|@deciexp)@FLOATSP*/,
                action: { token: 'number.float' }
            },
            {
                regex: /@digit@digitseq0@INTSP*/,
                action: { token: 'number.decimal' }
            },
            // DIGIT, if followed by digitseq0, is lexing_INT_dec
            { regex: /@digit+@INTSP*/, action: { token: 'number' } }
        ],
        lexing_COMMENT_block_ml: [
            [/[^\(\*]+/, 'comment'],
            [/\(\*/, 'comment', '@push'],
            [/\(\*/, 'comment.invalid'],
            [/\*\)/, 'comment', '@pop'],
            [/\*/, 'comment']
        ],
        lexing_COMMENT_block_c: [
            [/[^\/*]+/, 'comment'],
            // [/\/\*/, 'comment', '@push' ],    // nested C-style block comments not allowed
            // [/\/\*/,    'comment.invalid' ],	// NOTE: this breaks block comments in the shape of /* //*/
            [/\*\//, 'comment', '@pop'],
            [/[\/*]/, 'comment']
        ],
        lexing_COMMENT_rest: [
            [/$/, 'comment', '@pop'],
            [/.*/, 'comment']
        ],
        // NOTE: added by AS, specifically for highlighting
        lexing_EFFECT_commaseq0: [
            {
                regex: /@IDENTFST@IDENTRST+|@digit+/,
                action: {
                    cases: {
                        '@keywords_effects': { token: 'type.effect' },
                        '@default': { token: 'identifier' }
                    }
                }
            },
            { regex: /,/, action: { token: 'punctuation' } },
            { regex: />/, action: { token: '@rematch', next: '@pop' } }
        ],
        lexing_EXTCODE: [
            {
                regex: /^%}/,
                action: {
                    token: '@rematch',
                    next: '@pop',
                    nextEmbedded: '@pop'
                }
            },
            { regex: /[^%]+/, action: '' }
        ],
        lexing_DQUOTE: [
            { regex: /"/, action: { token: 'string.quote', next: '@pop' } },
            // AS-20160628: additional hi-lighting for variables in staload/dynload strings
            {
                regex: /(\{\$)(@IDENTFST@IDENTRST*)(\})/,
                action: [
                    { token: 'string.escape' },
                    { token: 'identifier' },
                    { token: 'string.escape' }
                ]
            },
            { regex: /\\$/, action: { token: 'string.escape' } },
            {
                regex: /\\(@ESCHAR|[xX]@xdigit+|@digit+)/,
                action: { token: 'string.escape' }
            },
            { regex: /[^\\"]+/, action: { token: 'string' } }
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL3Bvc3RpYXRzL3Bvc3RpYXRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLFdBQVcsS0FBSztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxzREFBc0Q7QUFDL0QsU0FBUyxTQUFTLFlBQVksaUNBQWlDO0FBQy9ELFNBQVMsc0RBQXNEO0FBQy9ELFNBQVM7QUFDVDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsYUFBYSxXQUFXO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIsYUFBYTtBQUNiO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIsYUFBYTtBQUNiO0FBQ0EsYUFBYSxtQ0FBbUMsa0JBQWtCO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLHVCQUF1QjtBQUNyRSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBLGFBQWE7QUFDYixhQUFhLHNCQUFzQix1QkFBdUIsRUFBRTtBQUM1RCxhQUFhLHNCQUFzQixrQ0FBa0M7QUFDckU7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhLHNCQUFzQixzQ0FBc0MsRUFBRTtBQUMzRTtBQUNBO0FBQ0EsMkJBQTJCLDJCQUEyQjtBQUN0RDtBQUNBLHFCQUFxQix5QkFBeUI7QUFDOUMscUJBQXFCLHNCQUFzQjtBQUMzQyxxQkFBcUI7QUFDckI7QUFDQSxhQUFhO0FBQ2IsYUFBYSx3QkFBd0IseUJBQXlCLEVBQUU7QUFDaEU7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixhQUFhO0FBQ2IsYUFBYSw0QkFBNEIsa0JBQWtCO0FBQzNEO0FBQ0E7QUFDQSIsImZpbGUiOiI0Mi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgQXJ0eW9tIFNoYWxraGFrb3YuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiAgQmFzZWQgb24gdGhlIEFUUy9Qb3N0aWF0cyBsZXhlciBieSBIb25nd2VpIFhpLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5leHBvcnQgdmFyIGNvbmYgPSB7XG4gICAgY29tbWVudHM6IHtcbiAgICAgICAgbGluZUNvbW1lbnQ6ICcvLycsXG4gICAgICAgIGJsb2NrQ29tbWVudDogWycoKicsICcqKSddXG4gICAgfSxcbiAgICBicmFja2V0czogW1xuICAgICAgICBbJ3snLCAnfSddLFxuICAgICAgICBbJ1snLCAnXSddLFxuICAgICAgICBbJygnLCAnKSddLFxuICAgICAgICBbJzwnLCAnPiddXG4gICAgXSxcbiAgICBhdXRvQ2xvc2luZ1BhaXJzOiBbXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicsIG5vdEluOiBbJ3N0cmluZycsICdjb21tZW50J10gfSxcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScsIG5vdEluOiBbJ3N0cmluZycsICdjb21tZW50J10gfSxcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScsIG5vdEluOiBbJ3N0cmluZycsICdjb21tZW50J10gfSxcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScsIG5vdEluOiBbJ3N0cmluZycsICdjb21tZW50J10gfVxuICAgIF1cbn07XG5leHBvcnQgdmFyIGxhbmd1YWdlID0ge1xuICAgIHRva2VuUG9zdGZpeDogJy5wYXRzJyxcbiAgICAvLyBUT0RPOiBzdGFsb2FkIGFuZCBkeW5sb2FkIGFyZSBmb2xsb3dlZCBieSBhIHNwZWNpYWwga2luZCBvZiBzdHJpbmcgbGl0ZXJhbHNcbiAgICAvLyB3aXRoIHskSURFTlRJRkVSfSB2YXJpYWJsZXMsIGFuZCBpdCBhbHNvIG1heSBtYWtlIHNlbnNlIHRvIGhpZ2hsaWdodFxuICAgIC8vIHRoZSBwdW5jdHVhdGlvbiAoLiBhbmQgLyBhbmQgXFwpIGRpZmZlcmVudGx5LlxuICAgIC8vIFNldCBkZWZhdWx0VG9rZW4gdG8gaW52YWxpZCB0byBzZWUgd2hhdCB5b3UgZG8gbm90IHRva2VuaXplIHlldFxuICAgIGRlZmF1bHRUb2tlbjogJ2ludmFsaWQnLFxuICAgIC8vIGtleXdvcmQgcmVmZXJlbmNlOiBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHd4aS9BVFMtUG9zdGlhdHMvYmxvYi9tYXN0ZXIvc3JjL3BhdHNfbGV4aW5nX3Rva2VuLmRhdHNcbiAgICBrZXl3b3JkczogW1xuICAgICAgICAvL1xuICAgICAgICAnYWJzdHlwZScsXG4gICAgICAgICdhYnN0MHlwZScsXG4gICAgICAgICdhYnNwcm9wJyxcbiAgICAgICAgJ2Fic3ZpZXcnLFxuICAgICAgICAnYWJzdnR5cGUnLFxuICAgICAgICAnYWJzdmlld3R5cGUnLFxuICAgICAgICAnYWJzdnQweXBlJyxcbiAgICAgICAgJ2Fic3ZpZXd0MHlwZScsXG4gICAgICAgIC8vXG4gICAgICAgICdhcycsXG4gICAgICAgIC8vXG4gICAgICAgICdhbmQnLFxuICAgICAgICAvL1xuICAgICAgICAnYXNzdW1lJyxcbiAgICAgICAgLy9cbiAgICAgICAgJ2JlZ2luJyxcbiAgICAgICAgLy9cbiAgICAgICAgLypcbiAgICAgICAgICAgICAgICBcImNhc2VcIiwgLy8gQ0FTRVxuICAgICAgICAqL1xuICAgICAgICAvL1xuICAgICAgICAnY2xhc3NkZWMnLFxuICAgICAgICAvL1xuICAgICAgICAnZGF0YXNvcnQnLFxuICAgICAgICAvL1xuICAgICAgICAnZGF0YXR5cGUnLFxuICAgICAgICAnZGF0YXByb3AnLFxuICAgICAgICAnZGF0YXZpZXcnLFxuICAgICAgICAnZGF0YXZ0eXBlJyxcbiAgICAgICAgJ2RhdGF2aWV3dHlwZScsXG4gICAgICAgIC8vXG4gICAgICAgICdkbycsXG4gICAgICAgIC8vXG4gICAgICAgICdlbmQnLFxuICAgICAgICAvL1xuICAgICAgICAnZXh0ZXJuJyxcbiAgICAgICAgJ2V4dHlwZScsXG4gICAgICAgICdleHR2YXInLFxuICAgICAgICAvL1xuICAgICAgICAnZXhjZXB0aW9uJyxcbiAgICAgICAgLy9cbiAgICAgICAgJ2ZuJyxcbiAgICAgICAgJ2ZueCcsXG4gICAgICAgICdmdW4nLFxuICAgICAgICAvL1xuICAgICAgICAncHJmbicsXG4gICAgICAgICdwcmZ1bicsXG4gICAgICAgIC8vXG4gICAgICAgICdwcmF4aScsXG4gICAgICAgICdjYXN0Zm4nLFxuICAgICAgICAvL1xuICAgICAgICAnaWYnLFxuICAgICAgICAndGhlbicsXG4gICAgICAgICdlbHNlJyxcbiAgICAgICAgLy9cbiAgICAgICAgJ2lmY2FzZScsXG4gICAgICAgIC8vXG4gICAgICAgICdpbicsXG4gICAgICAgIC8vXG4gICAgICAgICdpbmZpeCcsXG4gICAgICAgICdpbmZpeGwnLFxuICAgICAgICAnaW5maXhyJyxcbiAgICAgICAgJ3ByZWZpeCcsXG4gICAgICAgICdwb3N0Zml4JyxcbiAgICAgICAgLy9cbiAgICAgICAgJ2ltcGxtbnQnLFxuICAgICAgICAnaW1wbGVtZW50JyxcbiAgICAgICAgLy9cbiAgICAgICAgJ3ByaW1wbG1udCcsXG4gICAgICAgICdwcmltcGxlbWVudCcsXG4gICAgICAgIC8vXG4gICAgICAgICdpbXBvcnQnLFxuICAgICAgICAvL1xuICAgICAgICAvKlxuICAgICAgICAgICAgICAgIFwibGFtXCIsIC8vIExBTVxuICAgICAgICAgICAgICAgIFwibGxhbVwiLCAvLyBMTEFNXG4gICAgICAgICAgICAgICAgXCJmaXhcIiwgLy8gRklYXG4gICAgICAgICovXG4gICAgICAgIC8vXG4gICAgICAgICdsZXQnLFxuICAgICAgICAvL1xuICAgICAgICAnbG9jYWwnLFxuICAgICAgICAvL1xuICAgICAgICAnbWFjZGVmJyxcbiAgICAgICAgJ21hY3JvZGVmJyxcbiAgICAgICAgLy9cbiAgICAgICAgJ25vbmZpeCcsXG4gICAgICAgIC8vXG4gICAgICAgICdzeW1lbGltJyxcbiAgICAgICAgJ3N5bWludHInLFxuICAgICAgICAnb3ZlcmxvYWQnLFxuICAgICAgICAvL1xuICAgICAgICAnb2YnLFxuICAgICAgICAnb3AnLFxuICAgICAgICAvL1xuICAgICAgICAncmVjJyxcbiAgICAgICAgLy9cbiAgICAgICAgJ3NpZicsXG4gICAgICAgICdzY2FzZScsXG4gICAgICAgIC8vXG4gICAgICAgICdzb3J0ZGVmJyxcbiAgICAgICAgLypcbiAgICAgICAgLy8gSFg6IFtzdGFdIGlzIG5vdyBkZXByZWNhdGVkXG4gICAgICAgICovXG4gICAgICAgICdzdGEnLFxuICAgICAgICAnc3RhY3N0JyxcbiAgICAgICAgJ3N0YWRlZicsXG4gICAgICAgICdzdGF0aWMnLFxuICAgICAgICAvKlxuICAgICAgICAgICAgICAgIFwic3RhdmFyXCIsIC8vIFRfU1RBVkFSXG4gICAgICAgICovXG4gICAgICAgIC8vXG4gICAgICAgICdzdGFsb2FkJyxcbiAgICAgICAgJ2R5bmxvYWQnLFxuICAgICAgICAvL1xuICAgICAgICAndHJ5JyxcbiAgICAgICAgLy9cbiAgICAgICAgJ3RraW5kZWYnLFxuICAgICAgICAvL1xuICAgICAgICAvKlxuICAgICAgICAgICAgICAgIFwidHlwZVwiLCAvLyBUWVBFXG4gICAgICAgICovXG4gICAgICAgICd0eXBlZGVmJyxcbiAgICAgICAgJ3Byb3BkZWYnLFxuICAgICAgICAndmlld2RlZicsXG4gICAgICAgICd2dHlwZWRlZicsXG4gICAgICAgICd2aWV3dHlwZWRlZicsXG4gICAgICAgIC8vXG4gICAgICAgIC8qXG4gICAgICAgICAgICAgICAgXCJ2YWxcIiwgLy8gVkFMXG4gICAgICAgICovXG4gICAgICAgICdwcnZhbCcsXG4gICAgICAgIC8vXG4gICAgICAgICd2YXInLFxuICAgICAgICAncHJ2YXInLFxuICAgICAgICAvL1xuICAgICAgICAnd2hlbicsXG4gICAgICAgICd3aGVyZScsXG4gICAgICAgIC8vXG4gICAgICAgIC8qXG4gICAgICAgICAgICAgICAgXCJmb3JcIiwgLy8gVF9GT1JcbiAgICAgICAgICAgICAgICBcIndoaWxlXCIsIC8vIFRfV0hJTEVcbiAgICAgICAgKi9cbiAgICAgICAgLy9cbiAgICAgICAgJ3dpdGgnLFxuICAgICAgICAvL1xuICAgICAgICAnd2l0aHR5cGUnLFxuICAgICAgICAnd2l0aHByb3AnLFxuICAgICAgICAnd2l0aHZpZXcnLFxuICAgICAgICAnd2l0aHZ0eXBlJyxcbiAgICAgICAgJ3dpdGh2aWV3dHlwZScgLy8gV0lUSFZJRVdUWVBFXG4gICAgICAgIC8vXG4gICAgXSxcbiAgICBrZXl3b3Jkc19kbHI6IFtcbiAgICAgICAgJyRkZWxheScsXG4gICAgICAgICckbGRlbGF5JyxcbiAgICAgICAgLy9cbiAgICAgICAgJyRhcnJwc3onLFxuICAgICAgICAnJGFycnB0cnNpemUnLFxuICAgICAgICAvL1xuICAgICAgICAnJGQyY3R5cGUnLFxuICAgICAgICAvL1xuICAgICAgICAnJGVmZm1hc2snLFxuICAgICAgICAnJGVmZm1hc2tfbnRtJyxcbiAgICAgICAgJyRlZmZtYXNrX2V4bicsXG4gICAgICAgICckZWZmbWFza19yZWYnLFxuICAgICAgICAnJGVmZm1hc2tfd3J0JyxcbiAgICAgICAgJyRlZmZtYXNrX2FsbCcsXG4gICAgICAgIC8vXG4gICAgICAgICckZXh0ZXJuJyxcbiAgICAgICAgJyRleHRraW5kJyxcbiAgICAgICAgJyRleHR5cGUnLFxuICAgICAgICAnJGV4dHlwZV9zdHJ1Y3QnLFxuICAgICAgICAvL1xuICAgICAgICAnJGV4dHZhbCcsXG4gICAgICAgICckZXh0ZmNhbGwnLFxuICAgICAgICAnJGV4dG1jYWxsJyxcbiAgICAgICAgLy9cbiAgICAgICAgJyRsaXRlcmFsJyxcbiAgICAgICAgLy9cbiAgICAgICAgJyRteWZpbGVuYW1lJyxcbiAgICAgICAgJyRteWxvY2F0aW9uJyxcbiAgICAgICAgJyRteWZ1bmN0aW9uJyxcbiAgICAgICAgLy9cbiAgICAgICAgJyRsc3QnLFxuICAgICAgICAnJGxzdF90JyxcbiAgICAgICAgJyRsc3RfdnQnLFxuICAgICAgICAnJGxpc3QnLFxuICAgICAgICAnJGxpc3RfdCcsXG4gICAgICAgICckbGlzdF92dCcsXG4gICAgICAgIC8vXG4gICAgICAgICckcmVjJyxcbiAgICAgICAgJyRyZWNfdCcsXG4gICAgICAgICckcmVjX3Z0JyxcbiAgICAgICAgJyRyZWNvcmQnLFxuICAgICAgICAnJHJlY29yZF90JyxcbiAgICAgICAgJyRyZWNvcmRfdnQnLFxuICAgICAgICAvL1xuICAgICAgICAnJHR1cCcsXG4gICAgICAgICckdHVwX3QnLFxuICAgICAgICAnJHR1cF92dCcsXG4gICAgICAgICckdHVwbGUnLFxuICAgICAgICAnJHR1cGxlX3QnLFxuICAgICAgICAnJHR1cGxlX3Z0JyxcbiAgICAgICAgLy9cbiAgICAgICAgJyRicmVhaycsXG4gICAgICAgICckY29udGludWUnLFxuICAgICAgICAvL1xuICAgICAgICAnJHJhaXNlJyxcbiAgICAgICAgLy9cbiAgICAgICAgJyRzaG93dHlwZScsXG4gICAgICAgIC8vXG4gICAgICAgICckdmNvcHllbnZfdicsXG4gICAgICAgICckdmNvcHllbnZfdnQnLFxuICAgICAgICAvL1xuICAgICAgICAnJHRlbXBlbnZlcicsXG4gICAgICAgIC8vXG4gICAgICAgICckc29sdmVyX2Fzc2VydCcsXG4gICAgICAgICckc29sdmVyX3ZlcmlmeScgLy8gVF9ETFJTT0xWRVJJRllcbiAgICBdLFxuICAgIGtleXdvcmRzX3NycDogW1xuICAgICAgICAvL1xuICAgICAgICAnI2lmJyxcbiAgICAgICAgJyNpZmRlZicsXG4gICAgICAgICcjaWZuZGVmJyxcbiAgICAgICAgLy9cbiAgICAgICAgJyN0aGVuJyxcbiAgICAgICAgLy9cbiAgICAgICAgJyNlbGlmJyxcbiAgICAgICAgJyNlbGlmZGVmJyxcbiAgICAgICAgJyNlbGlmbmRlZicsXG4gICAgICAgIC8vXG4gICAgICAgICcjZWxzZScsXG4gICAgICAgICcjZW5kaWYnLFxuICAgICAgICAvL1xuICAgICAgICAnI2Vycm9yJyxcbiAgICAgICAgLy9cbiAgICAgICAgJyNwcmVycicsXG4gICAgICAgICcjcHJpbnQnLFxuICAgICAgICAvL1xuICAgICAgICAnI2Fzc2VydCcsXG4gICAgICAgIC8vXG4gICAgICAgICcjdW5kZWYnLFxuICAgICAgICAnI2RlZmluZScsXG4gICAgICAgIC8vXG4gICAgICAgICcjaW5jbHVkZScsXG4gICAgICAgICcjcmVxdWlyZScsXG4gICAgICAgIC8vXG4gICAgICAgICcjcHJhZ21hJyxcbiAgICAgICAgJyNjb2RlZ2VuMicsXG4gICAgICAgICcjY29kZWdlbjMnIC8vIFRfU1JQQ09ERUdFTjMgLy8gZm9yIGxldmVsLTMgY29kZWdlblxuICAgICAgICAvL1xuICAgICAgICAvLyBIWDogZW5kIG9mIHNwZWNpYWwgdG9rZW5zXG4gICAgICAgIC8vXG4gICAgXSxcbiAgICBpcnJlZ3VsYXJfa2V5d29yZF9saXN0OiBbXG4gICAgICAgICd2YWwrJyxcbiAgICAgICAgJ3ZhbC0nLFxuICAgICAgICAndmFsJyxcbiAgICAgICAgJ2Nhc2UrJyxcbiAgICAgICAgJ2Nhc2UtJyxcbiAgICAgICAgJ2Nhc2UnLFxuICAgICAgICAnYWRkckAnLFxuICAgICAgICAnYWRkcicsXG4gICAgICAgICdmb2xkQCcsXG4gICAgICAgICdmcmVlQCcsXG4gICAgICAgICdmaXhAJyxcbiAgICAgICAgJ2ZpeCcsXG4gICAgICAgICdsYW1AJyxcbiAgICAgICAgJ2xhbScsXG4gICAgICAgICdsbGFtQCcsXG4gICAgICAgICdsbGFtJyxcbiAgICAgICAgJ3ZpZXd0QHlwZSsnLFxuICAgICAgICAndmlld3RAeXBlLScsXG4gICAgICAgICd2aWV3dEB5cGUnLFxuICAgICAgICAndmlld3R5cGUrJyxcbiAgICAgICAgJ3ZpZXd0eXBlLScsXG4gICAgICAgICd2aWV3dHlwZScsXG4gICAgICAgICd2aWV3KycsXG4gICAgICAgICd2aWV3LScsXG4gICAgICAgICd2aWV3QCcsXG4gICAgICAgICd2aWV3JyxcbiAgICAgICAgJ3R5cGUrJyxcbiAgICAgICAgJ3R5cGUtJyxcbiAgICAgICAgJ3R5cGUnLFxuICAgICAgICAndnR5cGUrJyxcbiAgICAgICAgJ3Z0eXBlLScsXG4gICAgICAgICd2dHlwZScsXG4gICAgICAgICd2dEB5cGUrJyxcbiAgICAgICAgJ3Z0QHlwZS0nLFxuICAgICAgICAndnRAeXBlJyxcbiAgICAgICAgJ3ZpZXd0QHlwZSsnLFxuICAgICAgICAndmlld3RAeXBlLScsXG4gICAgICAgICd2aWV3dEB5cGUnLFxuICAgICAgICAndmlld3R5cGUrJyxcbiAgICAgICAgJ3ZpZXd0eXBlLScsXG4gICAgICAgICd2aWV3dHlwZScsXG4gICAgICAgICdwcm9wKycsXG4gICAgICAgICdwcm9wLScsXG4gICAgICAgICdwcm9wJyxcbiAgICAgICAgJ3R5cGUrJyxcbiAgICAgICAgJ3R5cGUtJyxcbiAgICAgICAgJ3R5cGUnLFxuICAgICAgICAndEB5cGUnLFxuICAgICAgICAndEB5cGUrJyxcbiAgICAgICAgJ3RAeXBlLScsXG4gICAgICAgICdhYnN0QHlwZScsXG4gICAgICAgICdhYnN0eXBlJyxcbiAgICAgICAgJ2Fic3ZpZXd0QHlwZScsXG4gICAgICAgICdhYnN2dEB5cGUnLFxuICAgICAgICAnZm9yKicsXG4gICAgICAgICdmb3InLFxuICAgICAgICAnd2hpbGUqJyxcbiAgICAgICAgJ3doaWxlJ1xuICAgIF0sXG4gICAga2V5d29yZHNfdHlwZXM6IFtcbiAgICAgICAgJ2Jvb2wnLFxuICAgICAgICAnZG91YmxlJyxcbiAgICAgICAgJ2J5dGUnLFxuICAgICAgICAnaW50JyxcbiAgICAgICAgJ3Nob3J0JyxcbiAgICAgICAgJ2NoYXInLFxuICAgICAgICAndm9pZCcsXG4gICAgICAgICd1bml0JyxcbiAgICAgICAgJ2xvbmcnLFxuICAgICAgICAnZmxvYXQnLFxuICAgICAgICAnc3RyaW5nJyxcbiAgICAgICAgJ3N0cnB0cidcbiAgICBdLFxuICAgIC8vIFRPRE86IHJlZmVyZW5jZSBmb3IgdGhpcz9cbiAgICBrZXl3b3Jkc19lZmZlY3RzOiBbXG4gICAgICAgICcwJyxcbiAgICAgICAgJ2Z1bicsXG4gICAgICAgICdjbG8nLFxuICAgICAgICAncHJmJyxcbiAgICAgICAgJ2Z1bmNsbycsXG4gICAgICAgICdjbG9wdHInLFxuICAgICAgICAnY2xvcmVmJyxcbiAgICAgICAgJ3JlZicsXG4gICAgICAgICdudG0nLFxuICAgICAgICAnMScgLy8gYWxsIGVmZmVjdHNcbiAgICBdLFxuICAgIG9wZXJhdG9yczogW1xuICAgICAgICAnQCcsXG4gICAgICAgICchJyxcbiAgICAgICAgJ3wnLFxuICAgICAgICAnYCcsXG4gICAgICAgICc6JyxcbiAgICAgICAgJyQnLFxuICAgICAgICAnLicsXG4gICAgICAgICc9JyxcbiAgICAgICAgJyMnLFxuICAgICAgICAnficsXG4gICAgICAgIC8vXG4gICAgICAgICcuLicsXG4gICAgICAgICcuLi4nLFxuICAgICAgICAvL1xuICAgICAgICAnPT4nLFxuICAgICAgICAvLyBcIj08XCIsIC8vIFRfRVFMVFxuICAgICAgICAnPTw+JyxcbiAgICAgICAgJz0vPT4nLFxuICAgICAgICAnPT4+JyxcbiAgICAgICAgJz0vPT4+JyxcbiAgICAgICAgLy9cbiAgICAgICAgJzwnLFxuICAgICAgICAnPicsXG4gICAgICAgIC8vXG4gICAgICAgICc+PCcsXG4gICAgICAgIC8vXG4gICAgICAgICcuPCcsXG4gICAgICAgICc+LicsXG4gICAgICAgIC8vXG4gICAgICAgICcuPD4uJyxcbiAgICAgICAgLy9cbiAgICAgICAgJy0+JyxcbiAgICAgICAgLy9cIi08XCIsIC8vIFRfTUlOVVNMVFxuICAgICAgICAnLTw+JyAvLyBUX01JTlVTTFRHVFxuICAgICAgICAvL1xuICAgICAgICAvKlxuICAgICAgICAgICAgICAgIFwiOjxcIiwgLy8gVF9DT0xPTkxUXG4gICAgICAgICovXG4gICAgXSxcbiAgICBicmFja2V0czogW1xuICAgICAgICB7IG9wZW46ICcsKCcsIGNsb3NlOiAnKScsIHRva2VuOiAnZGVsaW1pdGVyLnBhcmVudGhlc2lzJyB9LFxuICAgICAgICB7IG9wZW46ICdgKCcsIGNsb3NlOiAnKScsIHRva2VuOiAnZGVsaW1pdGVyLnBhcmVudGhlc2lzJyB9LFxuICAgICAgICB7IG9wZW46ICclKCcsIGNsb3NlOiAnKScsIHRva2VuOiAnZGVsaW1pdGVyLnBhcmVudGhlc2lzJyB9LFxuICAgICAgICB7IG9wZW46IFwiJyhcIiwgY2xvc2U6ICcpJywgdG9rZW46ICdkZWxpbWl0ZXIucGFyZW50aGVzaXMnIH0sXG4gICAgICAgIHsgb3BlbjogXCIne1wiLCBjbG9zZTogJ30nLCB0b2tlbjogJ2RlbGltaXRlci5wYXJlbnRoZXNpcycgfSxcbiAgICAgICAgeyBvcGVuOiAnQCgnLCBjbG9zZTogJyknLCB0b2tlbjogJ2RlbGltaXRlci5wYXJlbnRoZXNpcycgfSxcbiAgICAgICAgeyBvcGVuOiAnQHsnLCBjbG9zZTogJ30nLCB0b2tlbjogJ2RlbGltaXRlci5icmFjZScgfSxcbiAgICAgICAgeyBvcGVuOiAnQFsnLCBjbG9zZTogJ10nLCB0b2tlbjogJ2RlbGltaXRlci5zcXVhcmUnIH0sXG4gICAgICAgIHsgb3BlbjogJyNbJywgY2xvc2U6ICddJywgdG9rZW46ICdkZWxpbWl0ZXIuc3F1YXJlJyB9LFxuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JywgdG9rZW46ICdkZWxpbWl0ZXIuY3VybHknIH0sXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nLCB0b2tlbjogJ2RlbGltaXRlci5zcXVhcmUnIH0sXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknLCB0b2tlbjogJ2RlbGltaXRlci5wYXJlbnRoZXNpcycgfSxcbiAgICAgICAgeyBvcGVuOiAnPCcsIGNsb3NlOiAnPicsIHRva2VuOiAnZGVsaW1pdGVyLmFuZ2xlJyB9XG4gICAgXSxcbiAgICAvLyB3ZSBpbmNsdWRlIHRoZXNlIGNvbW1vbiByZWd1bGFyIGV4cHJlc3Npb25zXG4gICAgc3ltYm9sczogL1s9Pjwhfj86JnwrXFwtKlxcL1xcXiVdKy8sXG4gICAgSURFTlRGU1Q6IC9bYS16QS1aX10vLFxuICAgIElERU5UUlNUOiAvW2EtekEtWjAtOV8nJF0vLFxuICAgIHN5bWJvbGljOiAvWyUmKy0uLzo9QH5gXnwqISQjPzw+XS8sXG4gICAgZGlnaXQ6IC9bMC05XS8sXG4gICAgZGlnaXRzZXEwOiAvQGRpZ2l0Ki8sXG4gICAgeGRpZ2l0OiAvWzAtOUEtWmEtel0vLFxuICAgIHhkaWdpdHNlcTA6IC9AeGRpZ2l0Ki8sXG4gICAgSU5UU1A6IC9bbEx1VV0vLFxuICAgIEZMT0FUU1A6IC9bZkZsTF0vLFxuICAgIGZleHBvbmVudDogL1tlRV1bKy1dP1swLTldKy8sXG4gICAgZmV4cG9uZW50X2JpbjogL1twUF1bKy1dP1swLTldKy8sXG4gICAgZGVjaWV4cDogL1xcLlswLTldKkBmZXhwb25lbnQ/LyxcbiAgICBoZXhpZXhwOiAvXFwuWzAtOWEtekEtWl0qQGZleHBvbmVudF9iaW4/LyxcbiAgICBpcnJlZ3VsYXJfa2V5d29yZHM6IC92YWxbKy1dP3xjYXNlWystXT98YWRkclxcQD98Zm9sZFxcQHxmcmVlXFxAfGZpeFxcQD98bGFtXFxAP3xsbGFtXFxAP3xwcm9wWystXT98dHlwZVsrLV0/fHZpZXdbKy1AXT98dmlld3RAP3lwZVsrLV0/fHRAP3lwZVsrLV0/fHYoaWV3KT90QD95cGVbKy1dP3xhYnN0QD95cGV8YWJzdihpZXcpP3RAP3lwZXxmb3JcXCo/fHdoaWxlXFwqPy8sXG4gICAgRVNDSEFSOiAvW250dmJyZmFcXFxcXFw/J1wiXFwoXFxbXFx7XS8sXG4gICAgc3RhcnQ6ICdyb290JyxcbiAgICAvLyBUaGUgbWFpbiB0b2tlbml6ZXIgZm9yIEFUUy9Qb3N0aWF0c1xuICAgIC8vIHJlZmVyZW5jZTogaHR0cHM6Ly9naXRodWIuY29tL2dpdGh3eGkvQVRTLVBvc3RpYXRzL2Jsb2IvbWFzdGVyL3NyYy9wYXRzX2xleGluZy5kYXRzXG4gICAgdG9rZW5pemVyOiB7XG4gICAgICAgIHJvb3Q6IFtcbiAgICAgICAgICAgIC8vIGxleGluZ19ibGFua3NlcTBcbiAgICAgICAgICAgIHsgcmVnZXg6IC9bIFxcdFxcclxcbl0rLywgYWN0aW9uOiB7IHRva2VuOiAnJyB9IH0sXG4gICAgICAgICAgICAvLyBOT1RFOiAoKikgaXMgYW4gaW52YWxpZCBNTC1saWtlIGNvbW1lbnQhXG4gICAgICAgICAgICB7IHJlZ2V4OiAvXFwoXFwqXFwpLywgYWN0aW9uOiB7IHRva2VuOiAnaW52YWxpZCcgfSB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJlZ2V4OiAvXFwoXFwqLyxcbiAgICAgICAgICAgICAgICBhY3Rpb246IHsgdG9rZW46ICdjb21tZW50JywgbmV4dDogJ2xleGluZ19DT01NRU5UX2Jsb2NrX21sJyB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJlZ2V4OiAvXFwoLyxcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdAYnJhY2tldHMnIC8qeyB0b2tlbjogJ2RlbGltaXRlci5wYXJlbnRoZXNpcycgfSovXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJlZ2V4OiAvXFwpLyxcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdAYnJhY2tldHMnIC8qeyB0b2tlbjogJ2RlbGltaXRlci5wYXJlbnRoZXNpcycgfSovXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJlZ2V4OiAvXFxbLyxcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdAYnJhY2tldHMnIC8qeyB0b2tlbjogJ2RlbGltaXRlci5icmFja2V0JyB9Ki9cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmVnZXg6IC9cXF0vLFxuICAgICAgICAgICAgICAgIGFjdGlvbjogJ0BicmFja2V0cycgLyp7IHRva2VuOiAnZGVsaW1pdGVyLmJyYWNrZXQnIH0qL1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZWdleDogL1xcey8sXG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnQGJyYWNrZXRzJyAvKnsgdG9rZW46ICdkZWxpbWl0ZXIuYnJhY2UnIH0qL1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZWdleDogL1xcfS8sXG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnQGJyYWNrZXRzJyAvKnsgdG9rZW46ICdkZWxpbWl0ZXIuYnJhY2UnIH0qL1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIGxleGluZ19DT01NQVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJlZ2V4OiAvLFxcKC8sXG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnQGJyYWNrZXRzJyAvKnsgdG9rZW46ICdkZWxpbWl0ZXIucGFyZW50aGVzaXMnIH0qL1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgcmVnZXg6IC8sLywgYWN0aW9uOiB7IHRva2VuOiAnZGVsaW1pdGVyLmNvbW1hJyB9IH0sXG4gICAgICAgICAgICB7IHJlZ2V4OiAvOy8sIGFjdGlvbjogeyB0b2tlbjogJ2RlbGltaXRlci5zZW1pY29sb24nIH0gfSxcbiAgICAgICAgICAgIC8vIGxleGluZ19BVFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJlZ2V4OiAvQFxcKC8sXG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnQGJyYWNrZXRzJyAvKiB7IHRva2VuOiAnZGVsaW1pdGVyLnBhcmVudGhlc2lzJyB9Ki9cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmVnZXg6IC9AXFxbLyxcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdAYnJhY2tldHMnIC8qIHsgdG9rZW46ICdkZWxpbWl0ZXIuYnJhY2tldCcgfSovXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJlZ2V4OiAvQFxcey8sXG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnQGJyYWNrZXRzJyAvKnsgdG9rZW46ICdkZWxpbWl0ZXIuYnJhY2UnIH0qL1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIGxleGluZ19DT0xPTlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJlZ2V4OiAvOjwvLFxuICAgICAgICAgICAgICAgIGFjdGlvbjogeyB0b2tlbjogJ2tleXdvcmQnLCBuZXh0OiAnQGxleGluZ19FRkZFQ1RfY29tbWFzZXEwJyB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLypcbiAgICAgICAgICAgIGxleGluZ19ET1Q6XG5cbiAgICAgICAgICAgIC4gLy8gU1lNQk9MSUMgPT4gbGV4aW5nX0lERU5UX3N5bVxuICAgICAgICAgICAgLiBGTE9BVERPVCA9PiBsZXhpbmdfRkxPQVRfZGVjaWV4cFxuICAgICAgICAgICAgLiBESUdJVCA9PiBUX0RPVElOVFxuICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHsgcmVnZXg6IC9cXC5Ac3ltYm9saWMrLywgYWN0aW9uOiB7IHRva2VuOiAnaWRlbnRpZmllci5zeW0nIH0gfSxcbiAgICAgICAgICAgIC8vIEZMT0FURE9UIGNhc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZWdleDogL1xcLkBkaWdpdCpAZmV4cG9uZW50QEZMT0FUU1AqLyxcbiAgICAgICAgICAgICAgICBhY3Rpb246IHsgdG9rZW46ICdudW1iZXIuZmxvYXQnIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IHJlZ2V4OiAvXFwuQGRpZ2l0Ky8sIGFjdGlvbjogeyB0b2tlbjogJ251bWJlci5mbG9hdCcgfSB9LFxuICAgICAgICAgICAgLy8gbGV4aW5nX0RPTExBUjpcbiAgICAgICAgICAgIC8vICckJyBJREVOVEZTVCBJREVOVFJTVCogPT4gbGV4aW5nX0lERU5UX2RsciwgXyA9PiBsZXhpbmdfSURFTlRfc3ltXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmVnZXg6IC9cXCRASURFTlRGU1RASURFTlRSU1QqLyxcbiAgICAgICAgICAgICAgICBhY3Rpb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdAa2V5d29yZHNfZGxyJzogeyB0b2tlbjogJ2tleXdvcmQuZGxyJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogeyB0b2tlbjogJ25hbWVzcGFjZScgfSAvLyBtb3N0IGxpa2VseSBhIG1vZHVsZSBxdWFsaWZpZXJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyBsZXhpbmdfU0hBUlA6XG4gICAgICAgICAgICAvLyAnIycgSURFTlRGU1QgSURFTlRSU1QqID0+IGxleGluZ19pZGVudF9zcnAsIF8gPT4gbGV4aW5nX0lERU5UX3N5bVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJlZ2V4OiAvXFwjQElERU5URlNUQElERU5UUlNUKi8sXG4gICAgICAgICAgICAgICAgYWN0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQGtleXdvcmRzX3NycCc6IHsgdG9rZW46ICdrZXl3b3JkLnNycCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6IHsgdG9rZW46ICdpZGVudGlmaWVyJyB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gbGV4aW5nX1BFUkNFTlQ6XG4gICAgICAgICAgICB7IHJlZ2V4OiAvJVxcKC8sIGFjdGlvbjogeyB0b2tlbjogJ2RlbGltaXRlci5wYXJlbnRoZXNpcycgfSB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJlZ2V4OiAvXiV7KCN8XFxefFxcJCk/LyxcbiAgICAgICAgICAgICAgICBhY3Rpb246IHtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46ICdrZXl3b3JkJyxcbiAgICAgICAgICAgICAgICAgICAgbmV4dDogJ0BsZXhpbmdfRVhUQ09ERScsXG4gICAgICAgICAgICAgICAgICAgIG5leHRFbWJlZGRlZDogJ3RleHQvamF2YXNjcmlwdCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyByZWdleDogL14lfS8sIGFjdGlvbjogeyB0b2tlbjogJ2tleXdvcmQnIH0gfSxcbiAgICAgICAgICAgIC8vIGxleGluZ19RVU9URVxuICAgICAgICAgICAgeyByZWdleDogLydcXCgvLCBhY3Rpb246IHsgdG9rZW46ICdkZWxpbWl0ZXIucGFyZW50aGVzaXMnIH0gfSxcbiAgICAgICAgICAgIHsgcmVnZXg6IC8nXFxbLywgYWN0aW9uOiB7IHRva2VuOiAnZGVsaW1pdGVyLmJyYWNrZXQnIH0gfSxcbiAgICAgICAgICAgIHsgcmVnZXg6IC8nXFx7LywgYWN0aW9uOiB7IHRva2VuOiAnZGVsaW1pdGVyLmJyYWNlJyB9IH0sXG4gICAgICAgICAgICBbLygnKShcXFxcQEVTQ0hBUnxcXFxcW3hYXUB4ZGlnaXQrfFxcXFxAZGlnaXQrKSgnKS8sIFsnc3RyaW5nJywgJ3N0cmluZy5lc2NhcGUnLCAnc3RyaW5nJ11dLFxuICAgICAgICAgICAgWy8nW15cXFxcJ10nLywgJ3N0cmluZyddLFxuICAgICAgICAgICAgLy8gbGV4aW5nX0RRVU9URVxuICAgICAgICAgICAgWy9cIi8sICdzdHJpbmcucXVvdGUnLCAnQGxleGluZ19EUVVPVEUnXSxcbiAgICAgICAgICAgIC8vIGxleGluZ19CUVVPVEVcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZWdleDogL2BcXCgvLFxuICAgICAgICAgICAgICAgIGFjdGlvbjogJ0BicmFja2V0cycgLyogeyB0b2tlbjogJ2RlbGltaXRlci5wYXJlbnRoZXNpcycgfSovXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gVE9ETzogb3RoZXJ3aXNlLCB0cnkgbGV4aW5nX0lERU5UX3N5bVxuICAgICAgICAgICAgeyByZWdleDogL1xcXFwvLCBhY3Rpb246IHsgdG9rZW46ICdwdW5jdHVhdGlvbicgfSB9LFxuICAgICAgICAgICAgLy8gbGV4aW5nX0lERU5UX2FscDpcbiAgICAgICAgICAgIC8vIE5PVEU6ICg/IXJlZ2V4KSBpcyBzeW50YXggZm9yIFwibm90LWZvbGxvd2VkLWJ5XCIgcmVnZXhcbiAgICAgICAgICAgIC8vIHRvIHJlc29sdmUgYW1iaWd1aXR5IHN1Y2ggYXMgZm9yZWFjaCRmd29yayBiZWluZyBpbmNvcnJlY3RseSBsZXhlZCBhcyBbZm9yXSBbZWFjaCRmd29ya10hXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmVnZXg6IC9AaXJyZWd1bGFyX2tleXdvcmRzKD8hQElERU5UUlNUKS8sXG4gICAgICAgICAgICAgICAgYWN0aW9uOiB7IHRva2VuOiAna2V5d29yZCcgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZWdleDogL0BJREVOVEZTVEBJREVOVFJTVCpbPCFcXFtdPy8sXG4gICAgICAgICAgICAgICAgYWN0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBkeW5sb2FkIGFuZCBzdGFsb2FkIHNob3VsZCBiZSBzcGVjaWFsbHkgcGFyc2VkXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBkeW5sb2FkIHdoaXRlc3BhY2UrIFwic3BlY2lhbF9zdHJpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyBzcGVjaWFsIHN0cmluZyBpcyByZWFsbHk6XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgJy8nICdcXFxcJyAnLicgPT4gcHVuY3R1YXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICh7XFwkKShbYS16QS1aX11bYS16QS1aXzAtOV0qKSh9KSA9PiBwdW5jdHVhdGlvbixrZXl3b3JkLHB1bmN0dWF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBbXlwiXSA9PiBpZGVudGlmaWVyL2xpdGVyYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAa2V5d29yZHMnOiB7IHRva2VuOiAna2V5d29yZCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAa2V5d29yZHNfdHlwZXMnOiB7IHRva2VuOiAndHlwZScgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6IHsgdG9rZW46ICdpZGVudGlmaWVyJyB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gbGV4aW5nX0lERU5UX3N5bTpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZWdleDogL1xcL1xcL1xcL1xcLy8sXG4gICAgICAgICAgICAgICAgYWN0aW9uOiB7IHRva2VuOiAnY29tbWVudCcsIG5leHQ6ICdAbGV4aW5nX0NPTU1FTlRfcmVzdCcgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgcmVnZXg6IC9cXC9cXC8uKiQvLCBhY3Rpb246IHsgdG9rZW46ICdjb21tZW50JyB9IH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmVnZXg6IC9cXC9cXCovLFxuICAgICAgICAgICAgICAgIGFjdGlvbjogeyB0b2tlbjogJ2NvbW1lbnQnLCBuZXh0OiAnQGxleGluZ19DT01NRU5UX2Jsb2NrX2MnIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyBBUy0yMDE2MDYyNzogc3BlY2lmaWNhbGx5IGZvciBlZmZlY3QgYW5ub3RhdGlvbnNcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZWdleDogLy08fD08LyxcbiAgICAgICAgICAgICAgICBhY3Rpb246IHsgdG9rZW46ICdrZXl3b3JkJywgbmV4dDogJ0BsZXhpbmdfRUZGRUNUX2NvbW1hc2VxMCcgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZWdleDogL0BzeW1ib2xpYysvLFxuICAgICAgICAgICAgICAgIGFjdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0BvcGVyYXRvcnMnOiAna2V5d29yZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnb3BlcmF0b3InXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gbGV4aW5nX1pFUk86XG4gICAgICAgICAgICAvLyBGSVhNRTogdGhpcyBvbmUgaXMgcXVpdGUgbWVzc3kvdW5maW5pc2hlZCB5ZXRcbiAgICAgICAgICAgIC8vIFRPRE86IGxleGluZ19JTlRfaGV4XG4gICAgICAgICAgICAvLyAtIHRlc3RpbmdfaGV4aWV4cCA9PiBsZXhpbmdfRkxPQVRfaGV4aWV4cFxuICAgICAgICAgICAgLy8gLSB0ZXN0aW5nX2ZleHBvbmVudF9iaW4gPT4gbGV4aW5nX0ZMT0FUX2hleGlleHBcbiAgICAgICAgICAgIC8vIC0gdGVzdGluZ19pbnRzcHNlcTAgPT4gVF9JTlRfaGV4XG4gICAgICAgICAgICAvLyBsZXhpbmdfSU5UX2hleDpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZWdleDogLzBbeFhdQHhkaWdpdCsoQGhleGlleHB8QGZleHBvbmVudF9iaW4pQEZMT0FUU1AqLyxcbiAgICAgICAgICAgICAgICBhY3Rpb246IHsgdG9rZW46ICdudW1iZXIuZmxvYXQnIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IHJlZ2V4OiAvMFt4WF1AeGRpZ2l0K0BJTlRTUCovLCBhY3Rpb246IHsgdG9rZW46ICdudW1iZXIuaGV4JyB9IH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmVnZXg6IC8wWzAtN10rKD8hWzAtOV0pQElOVFNQKi8sXG4gICAgICAgICAgICAgICAgYWN0aW9uOiB7IHRva2VuOiAnbnVtYmVyLm9jdGFsJyB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy97cmVnZXg6IC8wLywgYWN0aW9uOiB7IHRva2VuOiAnbnVtYmVyJyB9IH0sIC8vIElOVFpFUk9cbiAgICAgICAgICAgIC8vIGxleGluZ19JTlRfZGVjOlxuICAgICAgICAgICAgLy8gLSB0ZXN0aW5nX2RlY2lleHAgPT4gbGV4aW5nX0ZMT0FUX2RlY2lleHBcbiAgICAgICAgICAgIC8vIC0gdGVzdGluZ19mZXhwb25lbnQgPT4gbGV4aW5nX0ZMT0FUX2RlY2lleHBcbiAgICAgICAgICAgIC8vIC0gb3RoZXJ3aXNlID0+IGludHNwc2VxMCAoWzAtOV0qW2xMdVVdPylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZWdleDogL0BkaWdpdCsoQGZleHBvbmVudHxAZGVjaWV4cClARkxPQVRTUCovLFxuICAgICAgICAgICAgICAgIGFjdGlvbjogeyB0b2tlbjogJ251bWJlci5mbG9hdCcgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZWdleDogL0BkaWdpdEBkaWdpdHNlcTBASU5UU1AqLyxcbiAgICAgICAgICAgICAgICBhY3Rpb246IHsgdG9rZW46ICdudW1iZXIuZGVjaW1hbCcgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIERJR0lULCBpZiBmb2xsb3dlZCBieSBkaWdpdHNlcTAsIGlzIGxleGluZ19JTlRfZGVjXG4gICAgICAgICAgICB7IHJlZ2V4OiAvQGRpZ2l0K0BJTlRTUCovLCBhY3Rpb246IHsgdG9rZW46ICdudW1iZXInIH0gfVxuICAgICAgICBdLFxuICAgICAgICBsZXhpbmdfQ09NTUVOVF9ibG9ja19tbDogW1xuICAgICAgICAgICAgWy9bXlxcKFxcKl0rLywgJ2NvbW1lbnQnXSxcbiAgICAgICAgICAgIFsvXFwoXFwqLywgJ2NvbW1lbnQnLCAnQHB1c2gnXSxcbiAgICAgICAgICAgIFsvXFwoXFwqLywgJ2NvbW1lbnQuaW52YWxpZCddLFxuICAgICAgICAgICAgWy9cXCpcXCkvLCAnY29tbWVudCcsICdAcG9wJ10sXG4gICAgICAgICAgICBbL1xcKi8sICdjb21tZW50J11cbiAgICAgICAgXSxcbiAgICAgICAgbGV4aW5nX0NPTU1FTlRfYmxvY2tfYzogW1xuICAgICAgICAgICAgWy9bXlxcLypdKy8sICdjb21tZW50J10sXG4gICAgICAgICAgICAvLyBbL1xcL1xcKi8sICdjb21tZW50JywgJ0BwdXNoJyBdLCAgICAvLyBuZXN0ZWQgQy1zdHlsZSBibG9jayBjb21tZW50cyBub3QgYWxsb3dlZFxuICAgICAgICAgICAgLy8gWy9cXC9cXCovLCAgICAnY29tbWVudC5pbnZhbGlkJyBdLFx0Ly8gTk9URTogdGhpcyBicmVha3MgYmxvY2sgY29tbWVudHMgaW4gdGhlIHNoYXBlIG9mIC8qIC8vKi9cbiAgICAgICAgICAgIFsvXFwqXFwvLywgJ2NvbW1lbnQnLCAnQHBvcCddLFxuICAgICAgICAgICAgWy9bXFwvKl0vLCAnY29tbWVudCddXG4gICAgICAgIF0sXG4gICAgICAgIGxleGluZ19DT01NRU5UX3Jlc3Q6IFtcbiAgICAgICAgICAgIFsvJC8sICdjb21tZW50JywgJ0Bwb3AnXSxcbiAgICAgICAgICAgIFsvLiovLCAnY29tbWVudCddXG4gICAgICAgIF0sXG4gICAgICAgIC8vIE5PVEU6IGFkZGVkIGJ5IEFTLCBzcGVjaWZpY2FsbHkgZm9yIGhpZ2hsaWdodGluZ1xuICAgICAgICBsZXhpbmdfRUZGRUNUX2NvbW1hc2VxMDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJlZ2V4OiAvQElERU5URlNUQElERU5UUlNUK3xAZGlnaXQrLyxcbiAgICAgICAgICAgICAgICBhY3Rpb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdAa2V5d29yZHNfZWZmZWN0cyc6IHsgdG9rZW46ICd0eXBlLmVmZmVjdCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6IHsgdG9rZW46ICdpZGVudGlmaWVyJyB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyByZWdleDogLywvLCBhY3Rpb246IHsgdG9rZW46ICdwdW5jdHVhdGlvbicgfSB9LFxuICAgICAgICAgICAgeyByZWdleDogLz4vLCBhY3Rpb246IHsgdG9rZW46ICdAcmVtYXRjaCcsIG5leHQ6ICdAcG9wJyB9IH1cbiAgICAgICAgXSxcbiAgICAgICAgbGV4aW5nX0VYVENPREU6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZWdleDogL14lfS8sXG4gICAgICAgICAgICAgICAgYWN0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiAnQHJlbWF0Y2gnLFxuICAgICAgICAgICAgICAgICAgICBuZXh0OiAnQHBvcCcsXG4gICAgICAgICAgICAgICAgICAgIG5leHRFbWJlZGRlZDogJ0Bwb3AnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgcmVnZXg6IC9bXiVdKy8sIGFjdGlvbjogJycgfVxuICAgICAgICBdLFxuICAgICAgICBsZXhpbmdfRFFVT1RFOiBbXG4gICAgICAgICAgICB7IHJlZ2V4OiAvXCIvLCBhY3Rpb246IHsgdG9rZW46ICdzdHJpbmcucXVvdGUnLCBuZXh0OiAnQHBvcCcgfSB9LFxuICAgICAgICAgICAgLy8gQVMtMjAxNjA2Mjg6IGFkZGl0aW9uYWwgaGktbGlnaHRpbmcgZm9yIHZhcmlhYmxlcyBpbiBzdGFsb2FkL2R5bmxvYWQgc3RyaW5nc1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJlZ2V4OiAvKFxce1xcJCkoQElERU5URlNUQElERU5UUlNUKikoXFx9KS8sXG4gICAgICAgICAgICAgICAgYWN0aW9uOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgdG9rZW46ICdzdHJpbmcuZXNjYXBlJyB9LFxuICAgICAgICAgICAgICAgICAgICB7IHRva2VuOiAnaWRlbnRpZmllcicgfSxcbiAgICAgICAgICAgICAgICAgICAgeyB0b2tlbjogJ3N0cmluZy5lc2NhcGUnIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyByZWdleDogL1xcXFwkLywgYWN0aW9uOiB7IHRva2VuOiAnc3RyaW5nLmVzY2FwZScgfSB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJlZ2V4OiAvXFxcXChARVNDSEFSfFt4WF1AeGRpZ2l0K3xAZGlnaXQrKS8sXG4gICAgICAgICAgICAgICAgYWN0aW9uOiB7IHRva2VuOiAnc3RyaW5nLmVzY2FwZScgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgcmVnZXg6IC9bXlxcXFxcIl0rLywgYWN0aW9uOiB7IHRva2VuOiAnc3RyaW5nJyB9IH1cbiAgICAgICAgXVxuICAgIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9