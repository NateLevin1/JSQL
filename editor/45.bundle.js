(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[45],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/pug/pug.js":
/*!**********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/pug/pug.js ***!
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
        lineComment: '//'
    },
    brackets: [
        ['{', '}'],
        ['[', ']'],
        ['(', ')']
    ],
    autoClosingPairs: [
        { open: '"', close: '"', notIn: ['string', 'comment'] },
        { open: "'", close: "'", notIn: ['string', 'comment'] },
        { open: '{', close: '}', notIn: ['string', 'comment'] },
        { open: '[', close: ']', notIn: ['string', 'comment'] },
        { open: '(', close: ')', notIn: ['string', 'comment'] }
    ],
    folding: {
        offSide: true
    }
};
var language = {
    defaultToken: '',
    tokenPostfix: '.pug',
    ignoreCase: true,
    brackets: [
        { token: 'delimiter.curly', open: '{', close: '}' },
        { token: 'delimiter.array', open: '[', close: ']' },
        { token: 'delimiter.parenthesis', open: '(', close: ')' }
    ],
    keywords: [
        'append',
        'block',
        'case',
        'default',
        'doctype',
        'each',
        'else',
        'extends',
        'for',
        'if',
        'in',
        'include',
        'mixin',
        'typeof',
        'unless',
        'var',
        'when'
    ],
    tags: [
        'a',
        'abbr',
        'acronym',
        'address',
        'area',
        'article',
        'aside',
        'audio',
        'b',
        'base',
        'basefont',
        'bdi',
        'bdo',
        'blockquote',
        'body',
        'br',
        'button',
        'canvas',
        'caption',
        'center',
        'cite',
        'code',
        'col',
        'colgroup',
        'command',
        'datalist',
        'dd',
        'del',
        'details',
        'dfn',
        'div',
        'dl',
        'dt',
        'em',
        'embed',
        'fieldset',
        'figcaption',
        'figure',
        'font',
        'footer',
        'form',
        'frame',
        'frameset',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'head',
        'header',
        'hgroup',
        'hr',
        'html',
        'i',
        'iframe',
        'img',
        'input',
        'ins',
        'keygen',
        'kbd',
        'label',
        'li',
        'link',
        'map',
        'mark',
        'menu',
        'meta',
        'meter',
        'nav',
        'noframes',
        'noscript',
        'object',
        'ol',
        'optgroup',
        'option',
        'output',
        'p',
        'param',
        'pre',
        'progress',
        'q',
        'rp',
        'rt',
        'ruby',
        's',
        'samp',
        'script',
        'section',
        'select',
        'small',
        'source',
        'span',
        'strike',
        'strong',
        'style',
        'sub',
        'summary',
        'sup',
        'table',
        'tbody',
        'td',
        'textarea',
        'tfoot',
        'th',
        'thead',
        'time',
        'title',
        'tr',
        'tracks',
        'tt',
        'u',
        'ul',
        'video',
        'wbr'
    ],
    // we include these common regular expressions
    symbols: /[\+\-\*\%\&\|\!\=\/\.\,\:]+/,
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    tokenizer: {
        root: [
            // Tag or a keyword at start
            [
                /^(\s*)([a-zA-Z_-][\w-]*)/,
                {
                    cases: {
                        '$2@tags': {
                            cases: {
                                '@eos': ['', 'tag'],
                                '@default': ['', { token: 'tag', next: '@tag.$1' }]
                            }
                        },
                        '$2@keywords': ['', { token: 'keyword.$2' }],
                        '@default': ['', '']
                    }
                }
            ],
            // id
            [
                /^(\s*)(#[a-zA-Z_-][\w-]*)/,
                {
                    cases: {
                        '@eos': ['', 'tag.id'],
                        '@default': ['', { token: 'tag.id', next: '@tag.$1' }]
                    }
                }
            ],
            // class
            [
                /^(\s*)(\.[a-zA-Z_-][\w-]*)/,
                {
                    cases: {
                        '@eos': ['', 'tag.class'],
                        '@default': ['', { token: 'tag.class', next: '@tag.$1' }]
                    }
                }
            ],
            // plain text with pipe
            [/^(\s*)(\|.*)$/, ''],
            { include: '@whitespace' },
            // keywords
            [
                /[a-zA-Z_$][\w$]*/,
                {
                    cases: {
                        '@keywords': { token: 'keyword.$0' },
                        '@default': ''
                    }
                }
            ],
            // delimiters and operators
            [/[{}()\[\]]/, '@brackets'],
            [/@symbols/, 'delimiter'],
            // numbers
            [/\d+\.\d+([eE][\-+]?\d+)?/, 'number.float'],
            [/\d+/, 'number'],
            // strings:
            [/"/, 'string', '@string."'],
            [/'/, 'string', "@string.'"]
        ],
        tag: [
            [/(\.)(\s*$)/, [{ token: 'delimiter', next: '@blockText.$S2.' }, '']],
            [/\s+/, { token: '', next: '@simpleText' }],
            // id
            [
                /#[a-zA-Z_-][\w-]*/,
                {
                    cases: {
                        '@eos': { token: 'tag.id', next: '@pop' },
                        '@default': 'tag.id'
                    }
                }
            ],
            // class
            [
                /\.[a-zA-Z_-][\w-]*/,
                {
                    cases: {
                        '@eos': { token: 'tag.class', next: '@pop' },
                        '@default': 'tag.class'
                    }
                }
            ],
            // attributes
            [/\(/, { token: 'delimiter.parenthesis', next: '@attributeList' }]
        ],
        simpleText: [
            [/[^#]+$/, { token: '', next: '@popall' }],
            [/[^#]+/, { token: '' }],
            // interpolation
            [
                /(#{)([^}]*)(})/,
                {
                    cases: {
                        '@eos': [
                            'interpolation.delimiter',
                            'interpolation',
                            {
                                token: 'interpolation.delimiter',
                                next: '@popall'
                            }
                        ],
                        '@default': [
                            'interpolation.delimiter',
                            'interpolation',
                            'interpolation.delimiter'
                        ]
                    }
                }
            ],
            [/#$/, { token: '', next: '@popall' }],
            [/#/, '']
        ],
        attributeList: [
            [/\s+/, ''],
            [
                /(\w+)(\s*=\s*)("|')/,
                ['attribute.name', 'delimiter', { token: 'attribute.value', next: '@value.$3' }]
            ],
            [/\w+/, 'attribute.name'],
            [
                /,/,
                {
                    cases: {
                        '@eos': {
                            token: 'attribute.delimiter',
                            next: '@popall'
                        },
                        '@default': 'attribute.delimiter'
                    }
                }
            ],
            [/\)$/, { token: 'delimiter.parenthesis', next: '@popall' }],
            [/\)/, { token: 'delimiter.parenthesis', next: '@pop' }]
        ],
        whitespace: [
            [/^(\s*)(\/\/.*)$/, { token: 'comment', next: '@blockText.$1.comment' }],
            [/[ \t\r\n]+/, ''],
            [/<!--/, { token: 'comment', next: '@comment' }]
        ],
        blockText: [
            [
                /^\s+.*$/,
                {
                    cases: {
                        '($S2\\s+.*$)': { token: '$S3' },
                        '@default': { token: '@rematch', next: '@popall' }
                    }
                }
            ],
            [/./, { token: '@rematch', next: '@popall' }]
        ],
        comment: [
            [/[^<\-]+/, 'comment.content'],
            [/-->/, { token: 'comment', next: '@pop' }],
            [/<!--/, 'comment.content.invalid'],
            [/[<\-]/, 'comment.content']
        ],
        string: [
            [
                /[^\\"'#]+/,
                {
                    cases: {
                        '@eos': { token: 'string', next: '@popall' },
                        '@default': 'string'
                    }
                }
            ],
            [
                /@escapes/,
                {
                    cases: {
                        '@eos': { token: 'string.escape', next: '@popall' },
                        '@default': 'string.escape'
                    }
                }
            ],
            [
                /\\./,
                {
                    cases: {
                        '@eos': {
                            token: 'string.escape.invalid',
                            next: '@popall'
                        },
                        '@default': 'string.escape.invalid'
                    }
                }
            ],
            // interpolation
            [
                /(#{)([^}]*)(})/,
                ['interpolation.delimiter', 'interpolation', 'interpolation.delimiter']
            ],
            [/#/, 'string'],
            [
                /["']/,
                {
                    cases: {
                        '$#==$S2': { token: 'string', next: '@pop' },
                        '@default': { token: 'string' }
                    }
                }
            ]
        ],
        // Almost identical to above, except for escapes and the output token
        value: [
            [
                /[^\\"']+/,
                {
                    cases: {
                        '@eos': { token: 'attribute.value', next: '@popall' },
                        '@default': 'attribute.value'
                    }
                }
            ],
            [
                /\\./,
                {
                    cases: {
                        '@eos': { token: 'attribute.value', next: '@popall' },
                        '@default': 'attribute.value'
                    }
                }
            ],
            [
                /["']/,
                {
                    cases: {
                        '$#==$S2': { token: 'attribute.value', next: '@pop' },
                        '@default': { token: 'attribute.value' }
                    }
                }
            ]
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL3B1Zy9wdWcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxzREFBc0Q7QUFDL0QsU0FBUyxzREFBc0Q7QUFDL0QsU0FBUyxTQUFTLFlBQVksaUNBQWlDO0FBQy9ELFNBQVMsc0RBQXNEO0FBQy9ELFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsbUNBQW1DLFlBQVksR0FBRztBQUMzRCxTQUFTLGtEQUFrRDtBQUMzRCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsNENBQTRDO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MseUNBQXlDO0FBQzdFLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiNDUuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5leHBvcnQgdmFyIGNvbmYgPSB7XG4gICAgY29tbWVudHM6IHtcbiAgICAgICAgbGluZUNvbW1lbnQ6ICcvLydcbiAgICB9LFxuICAgIGJyYWNrZXRzOiBbXG4gICAgICAgIFsneycsICd9J10sXG4gICAgICAgIFsnWycsICddJ10sXG4gICAgICAgIFsnKCcsICcpJ11cbiAgICBdLFxuICAgIGF1dG9DbG9zaW5nUGFpcnM6IFtcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJywgbm90SW46IFsnc3RyaW5nJywgJ2NvbW1lbnQnXSB9LFxuICAgICAgICB7IG9wZW46IFwiJ1wiLCBjbG9zZTogXCInXCIsIG5vdEluOiBbJ3N0cmluZycsICdjb21tZW50J10gfSxcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScsIG5vdEluOiBbJ3N0cmluZycsICdjb21tZW50J10gfSxcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScsIG5vdEluOiBbJ3N0cmluZycsICdjb21tZW50J10gfSxcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScsIG5vdEluOiBbJ3N0cmluZycsICdjb21tZW50J10gfVxuICAgIF0sXG4gICAgZm9sZGluZzoge1xuICAgICAgICBvZmZTaWRlOiB0cnVlXG4gICAgfVxufTtcbmV4cG9ydCB2YXIgbGFuZ3VhZ2UgPSB7XG4gICAgZGVmYXVsdFRva2VuOiAnJyxcbiAgICB0b2tlblBvc3RmaXg6ICcucHVnJyxcbiAgICBpZ25vcmVDYXNlOiB0cnVlLFxuICAgIGJyYWNrZXRzOiBbXG4gICAgICAgIHsgdG9rZW46ICdkZWxpbWl0ZXIuY3VybHknLCBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcbiAgICAgICAgeyB0b2tlbjogJ2RlbGltaXRlci5hcnJheScsIG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxuICAgICAgICB7IHRva2VuOiAnZGVsaW1pdGVyLnBhcmVudGhlc2lzJywgb3BlbjogJygnLCBjbG9zZTogJyknIH1cbiAgICBdLFxuICAgIGtleXdvcmRzOiBbXG4gICAgICAgICdhcHBlbmQnLFxuICAgICAgICAnYmxvY2snLFxuICAgICAgICAnY2FzZScsXG4gICAgICAgICdkZWZhdWx0JyxcbiAgICAgICAgJ2RvY3R5cGUnLFxuICAgICAgICAnZWFjaCcsXG4gICAgICAgICdlbHNlJyxcbiAgICAgICAgJ2V4dGVuZHMnLFxuICAgICAgICAnZm9yJyxcbiAgICAgICAgJ2lmJyxcbiAgICAgICAgJ2luJyxcbiAgICAgICAgJ2luY2x1ZGUnLFxuICAgICAgICAnbWl4aW4nLFxuICAgICAgICAndHlwZW9mJyxcbiAgICAgICAgJ3VubGVzcycsXG4gICAgICAgICd2YXInLFxuICAgICAgICAnd2hlbidcbiAgICBdLFxuICAgIHRhZ3M6IFtcbiAgICAgICAgJ2EnLFxuICAgICAgICAnYWJicicsXG4gICAgICAgICdhY3JvbnltJyxcbiAgICAgICAgJ2FkZHJlc3MnLFxuICAgICAgICAnYXJlYScsXG4gICAgICAgICdhcnRpY2xlJyxcbiAgICAgICAgJ2FzaWRlJyxcbiAgICAgICAgJ2F1ZGlvJyxcbiAgICAgICAgJ2InLFxuICAgICAgICAnYmFzZScsXG4gICAgICAgICdiYXNlZm9udCcsXG4gICAgICAgICdiZGknLFxuICAgICAgICAnYmRvJyxcbiAgICAgICAgJ2Jsb2NrcXVvdGUnLFxuICAgICAgICAnYm9keScsXG4gICAgICAgICdicicsXG4gICAgICAgICdidXR0b24nLFxuICAgICAgICAnY2FudmFzJyxcbiAgICAgICAgJ2NhcHRpb24nLFxuICAgICAgICAnY2VudGVyJyxcbiAgICAgICAgJ2NpdGUnLFxuICAgICAgICAnY29kZScsXG4gICAgICAgICdjb2wnLFxuICAgICAgICAnY29sZ3JvdXAnLFxuICAgICAgICAnY29tbWFuZCcsXG4gICAgICAgICdkYXRhbGlzdCcsXG4gICAgICAgICdkZCcsXG4gICAgICAgICdkZWwnLFxuICAgICAgICAnZGV0YWlscycsXG4gICAgICAgICdkZm4nLFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgJ2RsJyxcbiAgICAgICAgJ2R0JyxcbiAgICAgICAgJ2VtJyxcbiAgICAgICAgJ2VtYmVkJyxcbiAgICAgICAgJ2ZpZWxkc2V0JyxcbiAgICAgICAgJ2ZpZ2NhcHRpb24nLFxuICAgICAgICAnZmlndXJlJyxcbiAgICAgICAgJ2ZvbnQnLFxuICAgICAgICAnZm9vdGVyJyxcbiAgICAgICAgJ2Zvcm0nLFxuICAgICAgICAnZnJhbWUnLFxuICAgICAgICAnZnJhbWVzZXQnLFxuICAgICAgICAnaDEnLFxuICAgICAgICAnaDInLFxuICAgICAgICAnaDMnLFxuICAgICAgICAnaDQnLFxuICAgICAgICAnaDUnLFxuICAgICAgICAnaDYnLFxuICAgICAgICAnaGVhZCcsXG4gICAgICAgICdoZWFkZXInLFxuICAgICAgICAnaGdyb3VwJyxcbiAgICAgICAgJ2hyJyxcbiAgICAgICAgJ2h0bWwnLFxuICAgICAgICAnaScsXG4gICAgICAgICdpZnJhbWUnLFxuICAgICAgICAnaW1nJyxcbiAgICAgICAgJ2lucHV0JyxcbiAgICAgICAgJ2lucycsXG4gICAgICAgICdrZXlnZW4nLFxuICAgICAgICAna2JkJyxcbiAgICAgICAgJ2xhYmVsJyxcbiAgICAgICAgJ2xpJyxcbiAgICAgICAgJ2xpbmsnLFxuICAgICAgICAnbWFwJyxcbiAgICAgICAgJ21hcmsnLFxuICAgICAgICAnbWVudScsXG4gICAgICAgICdtZXRhJyxcbiAgICAgICAgJ21ldGVyJyxcbiAgICAgICAgJ25hdicsXG4gICAgICAgICdub2ZyYW1lcycsXG4gICAgICAgICdub3NjcmlwdCcsXG4gICAgICAgICdvYmplY3QnLFxuICAgICAgICAnb2wnLFxuICAgICAgICAnb3B0Z3JvdXAnLFxuICAgICAgICAnb3B0aW9uJyxcbiAgICAgICAgJ291dHB1dCcsXG4gICAgICAgICdwJyxcbiAgICAgICAgJ3BhcmFtJyxcbiAgICAgICAgJ3ByZScsXG4gICAgICAgICdwcm9ncmVzcycsXG4gICAgICAgICdxJyxcbiAgICAgICAgJ3JwJyxcbiAgICAgICAgJ3J0JyxcbiAgICAgICAgJ3J1YnknLFxuICAgICAgICAncycsXG4gICAgICAgICdzYW1wJyxcbiAgICAgICAgJ3NjcmlwdCcsXG4gICAgICAgICdzZWN0aW9uJyxcbiAgICAgICAgJ3NlbGVjdCcsXG4gICAgICAgICdzbWFsbCcsXG4gICAgICAgICdzb3VyY2UnLFxuICAgICAgICAnc3BhbicsXG4gICAgICAgICdzdHJpa2UnLFxuICAgICAgICAnc3Ryb25nJyxcbiAgICAgICAgJ3N0eWxlJyxcbiAgICAgICAgJ3N1YicsXG4gICAgICAgICdzdW1tYXJ5JyxcbiAgICAgICAgJ3N1cCcsXG4gICAgICAgICd0YWJsZScsXG4gICAgICAgICd0Ym9keScsXG4gICAgICAgICd0ZCcsXG4gICAgICAgICd0ZXh0YXJlYScsXG4gICAgICAgICd0Zm9vdCcsXG4gICAgICAgICd0aCcsXG4gICAgICAgICd0aGVhZCcsXG4gICAgICAgICd0aW1lJyxcbiAgICAgICAgJ3RpdGxlJyxcbiAgICAgICAgJ3RyJyxcbiAgICAgICAgJ3RyYWNrcycsXG4gICAgICAgICd0dCcsXG4gICAgICAgICd1JyxcbiAgICAgICAgJ3VsJyxcbiAgICAgICAgJ3ZpZGVvJyxcbiAgICAgICAgJ3dicidcbiAgICBdLFxuICAgIC8vIHdlIGluY2x1ZGUgdGhlc2UgY29tbW9uIHJlZ3VsYXIgZXhwcmVzc2lvbnNcbiAgICBzeW1ib2xzOiAvW1xcK1xcLVxcKlxcJVxcJlxcfFxcIVxcPVxcL1xcLlxcLFxcOl0rLyxcbiAgICBlc2NhcGVzOiAvXFxcXCg/OlthYmZucnR2XFxcXFwiJ118eFswLTlBLUZhLWZdezEsNH18dVswLTlBLUZhLWZdezR9fFVbMC05QS1GYS1mXXs4fSkvLFxuICAgIHRva2VuaXplcjoge1xuICAgICAgICByb290OiBbXG4gICAgICAgICAgICAvLyBUYWcgb3IgYSBrZXl3b3JkIGF0IHN0YXJ0XG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL14oXFxzKikoW2EtekEtWl8tXVtcXHctXSopLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnJDJAdGFncyc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQGVvcyc6IFsnJywgJ3RhZyddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiBbJycsIHsgdG9rZW46ICd0YWcnLCBuZXh0OiAnQHRhZy4kMScgfV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJyQyQGtleXdvcmRzJzogWycnLCB7IHRva2VuOiAna2V5d29yZC4kMicgfV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiBbJycsICcnXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIC8vIGlkXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL14oXFxzKikoI1thLXpBLVpfLV1bXFx3LV0qKS8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0Blb3MnOiBbJycsICd0YWcuaWQnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6IFsnJywgeyB0b2tlbjogJ3RhZy5pZCcsIG5leHQ6ICdAdGFnLiQxJyB9XVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIC8vIGNsYXNzXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL14oXFxzKikoXFwuW2EtekEtWl8tXVtcXHctXSopLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQGVvcyc6IFsnJywgJ3RhZy5jbGFzcyddLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogWycnLCB7IHRva2VuOiAndGFnLmNsYXNzJywgbmV4dDogJ0B0YWcuJDEnIH1dXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgLy8gcGxhaW4gdGV4dCB3aXRoIHBpcGVcbiAgICAgICAgICAgIFsvXihcXHMqKShcXHwuKikkLywgJyddLFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHdoaXRlc3BhY2UnIH0sXG4gICAgICAgICAgICAvLyBrZXl3b3Jkc1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9bYS16QS1aXyRdW1xcdyRdKi8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0BrZXl3b3Jkcyc6IHsgdG9rZW46ICdrZXl3b3JkLiQwJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAvLyBkZWxpbWl0ZXJzIGFuZCBvcGVyYXRvcnNcbiAgICAgICAgICAgIFsvW3t9KClcXFtcXF1dLywgJ0BicmFja2V0cyddLFxuICAgICAgICAgICAgWy9Ac3ltYm9scy8sICdkZWxpbWl0ZXInXSxcbiAgICAgICAgICAgIC8vIG51bWJlcnNcbiAgICAgICAgICAgIFsvXFxkK1xcLlxcZCsoW2VFXVtcXC0rXT9cXGQrKT8vLCAnbnVtYmVyLmZsb2F0J10sXG4gICAgICAgICAgICBbL1xcZCsvLCAnbnVtYmVyJ10sXG4gICAgICAgICAgICAvLyBzdHJpbmdzOlxuICAgICAgICAgICAgWy9cIi8sICdzdHJpbmcnLCAnQHN0cmluZy5cIiddLFxuICAgICAgICAgICAgWy8nLywgJ3N0cmluZycsIFwiQHN0cmluZy4nXCJdXG4gICAgICAgIF0sXG4gICAgICAgIHRhZzogW1xuICAgICAgICAgICAgWy8oXFwuKShcXHMqJCkvLCBbeyB0b2tlbjogJ2RlbGltaXRlcicsIG5leHQ6ICdAYmxvY2tUZXh0LiRTMi4nIH0sICcnXV0sXG4gICAgICAgICAgICBbL1xccysvLCB7IHRva2VuOiAnJywgbmV4dDogJ0BzaW1wbGVUZXh0JyB9XSxcbiAgICAgICAgICAgIC8vIGlkXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLyNbYS16QS1aXy1dW1xcdy1dKi8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0Blb3MnOiB7IHRva2VuOiAndGFnLmlkJywgbmV4dDogJ0Bwb3AnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAndGFnLmlkJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIC8vIGNsYXNzXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL1xcLlthLXpBLVpfLV1bXFx3LV0qLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQGVvcyc6IHsgdG9rZW46ICd0YWcuY2xhc3MnLCBuZXh0OiAnQHBvcCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICd0YWcuY2xhc3MnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgLy8gYXR0cmlidXRlc1xuICAgICAgICAgICAgWy9cXCgvLCB7IHRva2VuOiAnZGVsaW1pdGVyLnBhcmVudGhlc2lzJywgbmV4dDogJ0BhdHRyaWJ1dGVMaXN0JyB9XVxuICAgICAgICBdLFxuICAgICAgICBzaW1wbGVUZXh0OiBbXG4gICAgICAgICAgICBbL1teI10rJC8sIHsgdG9rZW46ICcnLCBuZXh0OiAnQHBvcGFsbCcgfV0sXG4gICAgICAgICAgICBbL1teI10rLywgeyB0b2tlbjogJycgfV0sXG4gICAgICAgICAgICAvLyBpbnRlcnBvbGF0aW9uXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLygjeykoW159XSopKH0pLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQGVvcyc6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaW50ZXJwb2xhdGlvbi5kZWxpbWl0ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpbnRlcnBvbGF0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuOiAnaW50ZXJwb2xhdGlvbi5kZWxpbWl0ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0OiAnQHBvcGFsbCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpbnRlcnBvbGF0aW9uLmRlbGltaXRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ludGVycG9sYXRpb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpbnRlcnBvbGF0aW9uLmRlbGltaXRlcidcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbLyMkLywgeyB0b2tlbjogJycsIG5leHQ6ICdAcG9wYWxsJyB9XSxcbiAgICAgICAgICAgIFsvIy8sICcnXVxuICAgICAgICBdLFxuICAgICAgICBhdHRyaWJ1dGVMaXN0OiBbXG4gICAgICAgICAgICBbL1xccysvLCAnJ10sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLyhcXHcrKShcXHMqPVxccyopKFwifCcpLyxcbiAgICAgICAgICAgICAgICBbJ2F0dHJpYnV0ZS5uYW1lJywgJ2RlbGltaXRlcicsIHsgdG9rZW46ICdhdHRyaWJ1dGUudmFsdWUnLCBuZXh0OiAnQHZhbHVlLiQzJyB9XVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFsvXFx3Ky8sICdhdHRyaWJ1dGUubmFtZSddLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC8sLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQGVvcyc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ2F0dHJpYnV0ZS5kZWxpbWl0ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHQ6ICdAcG9wYWxsJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdhdHRyaWJ1dGUuZGVsaW1pdGVyJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFsvXFwpJC8sIHsgdG9rZW46ICdkZWxpbWl0ZXIucGFyZW50aGVzaXMnLCBuZXh0OiAnQHBvcGFsbCcgfV0sXG4gICAgICAgICAgICBbL1xcKS8sIHsgdG9rZW46ICdkZWxpbWl0ZXIucGFyZW50aGVzaXMnLCBuZXh0OiAnQHBvcCcgfV1cbiAgICAgICAgXSxcbiAgICAgICAgd2hpdGVzcGFjZTogW1xuICAgICAgICAgICAgWy9eKFxccyopKFxcL1xcLy4qKSQvLCB7IHRva2VuOiAnY29tbWVudCcsIG5leHQ6ICdAYmxvY2tUZXh0LiQxLmNvbW1lbnQnIH1dLFxuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rLywgJyddLFxuICAgICAgICAgICAgWy88IS0tLywgeyB0b2tlbjogJ2NvbW1lbnQnLCBuZXh0OiAnQGNvbW1lbnQnIH1dXG4gICAgICAgIF0sXG4gICAgICAgIGJsb2NrVGV4dDogW1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9eXFxzKy4qJC8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJygkUzJcXFxccysuKiQpJzogeyB0b2tlbjogJyRTMycgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6IHsgdG9rZW46ICdAcmVtYXRjaCcsIG5leHQ6ICdAcG9wYWxsJyB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgWy8uLywgeyB0b2tlbjogJ0ByZW1hdGNoJywgbmV4dDogJ0Bwb3BhbGwnIH1dXG4gICAgICAgIF0sXG4gICAgICAgIGNvbW1lbnQ6IFtcbiAgICAgICAgICAgIFsvW148XFwtXSsvLCAnY29tbWVudC5jb250ZW50J10sXG4gICAgICAgICAgICBbLy0tPi8sIHsgdG9rZW46ICdjb21tZW50JywgbmV4dDogJ0Bwb3AnIH1dLFxuICAgICAgICAgICAgWy88IS0tLywgJ2NvbW1lbnQuY29udGVudC5pbnZhbGlkJ10sXG4gICAgICAgICAgICBbL1s8XFwtXS8sICdjb21tZW50LmNvbnRlbnQnXVxuICAgICAgICBdLFxuICAgICAgICBzdHJpbmc6IFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvW15cXFxcXCInI10rLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQGVvcyc6IHsgdG9rZW46ICdzdHJpbmcnLCBuZXh0OiAnQHBvcGFsbCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9AZXNjYXBlcy8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0Blb3MnOiB7IHRva2VuOiAnc3RyaW5nLmVzY2FwZScsIG5leHQ6ICdAcG9wYWxsJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ3N0cmluZy5lc2NhcGUnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9cXFxcLi8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0Blb3MnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW46ICdzdHJpbmcuZXNjYXBlLmludmFsaWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHQ6ICdAcG9wYWxsJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdzdHJpbmcuZXNjYXBlLmludmFsaWQnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgLy8gaW50ZXJwb2xhdGlvblxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC8oI3spKFtefV0qKSh9KS8sXG4gICAgICAgICAgICAgICAgWydpbnRlcnBvbGF0aW9uLmRlbGltaXRlcicsICdpbnRlcnBvbGF0aW9uJywgJ2ludGVycG9sYXRpb24uZGVsaW1pdGVyJ11cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbLyMvLCAnc3RyaW5nJ10sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL1tcIiddLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnJCM9PSRTMic6IHsgdG9rZW46ICdzdHJpbmcnLCBuZXh0OiAnQHBvcCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6IHsgdG9rZW46ICdzdHJpbmcnIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgXSxcbiAgICAgICAgLy8gQWxtb3N0IGlkZW50aWNhbCB0byBhYm92ZSwgZXhjZXB0IGZvciBlc2NhcGVzIGFuZCB0aGUgb3V0cHV0IHRva2VuXG4gICAgICAgIHZhbHVlOiBbXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL1teXFxcXFwiJ10rLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQGVvcyc6IHsgdG9rZW46ICdhdHRyaWJ1dGUudmFsdWUnLCBuZXh0OiAnQHBvcGFsbCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdhdHRyaWJ1dGUudmFsdWUnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9cXFxcLi8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0Blb3MnOiB7IHRva2VuOiAnYXR0cmlidXRlLnZhbHVlJywgbmV4dDogJ0Bwb3BhbGwnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnYXR0cmlidXRlLnZhbHVlJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvW1wiJ10vLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICckIz09JFMyJzogeyB0b2tlbjogJ2F0dHJpYnV0ZS52YWx1ZScsIG5leHQ6ICdAcG9wJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogeyB0b2tlbjogJ2F0dHJpYnV0ZS52YWx1ZScgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICBdXG4gICAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=