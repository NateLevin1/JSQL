(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/markdown/markdown.js":
/*!********************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/markdown/markdown.js ***!
  \********************************************************************************/
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
        blockComment: ['<!--', '-->']
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
        { open: '<', close: '>', notIn: ['string'] }
    ],
    surroundingPairs: [
        { open: '(', close: ')' },
        { open: '[', close: ']' },
        { open: '`', close: '`' }
    ],
    folding: {
        markers: {
            start: new RegExp('^\\s*<!--\\s*#?region\\b.*-->'),
            end: new RegExp('^\\s*<!--\\s*#?endregion\\b.*-->')
        }
    }
};
var language = {
    defaultToken: '',
    tokenPostfix: '.md',
    // escape codes
    control: /[\\`*_\[\]{}()#+\-\.!]/,
    noncontrol: /[^\\`*_\[\]{}()#+\-\.!]/,
    escapes: /\\(?:@control)/,
    // escape codes for javascript/CSS strings
    jsescapes: /\\(?:[btnfr\\"']|[0-7][0-7]?|[0-3][0-7]{2})/,
    // non matched elements
    empty: [
        'area',
        'base',
        'basefont',
        'br',
        'col',
        'frame',
        'hr',
        'img',
        'input',
        'isindex',
        'link',
        'meta',
        'param'
    ],
    tokenizer: {
        root: [
            // markdown tables
            [/^\s*\|/, '@rematch', '@table_header'],
            // headers (with #)
            [
                /^(\s{0,3})(#+)((?:[^\\#]|@escapes)+)((?:#+)?)/,
                ['white', 'keyword', 'keyword', 'keyword']
            ],
            // headers (with =)
            [/^\s*(=+|\-+)\s*$/, 'keyword'],
            // headers (with ***)
            [/^\s*((\*[ ]?)+)\s*$/, 'meta.separator'],
            // quote
            [/^\s*>+/, 'comment'],
            // list (starting with * or number)
            [/^\s*([\*\-+:]|\d+\.)\s/, 'keyword'],
            // code block (4 spaces indent)
            [/^(\t|[ ]{4})[^ ].*$/, 'string'],
            // code block (3 tilde)
            [/^\s*~~~\s*((?:\w|[\/\-#])+)?\s*$/, { token: 'string', next: '@codeblock' }],
            // github style code blocks (with backticks and language)
            [
                /^\s*```\s*((?:\w|[\/\-#])+).*$/,
                { token: 'string', next: '@codeblockgh', nextEmbedded: '$1' }
            ],
            // github style code blocks (with backticks but no language)
            [/^\s*```\s*$/, { token: 'string', next: '@codeblock' }],
            // markup within lines
            { include: '@linecontent' }
        ],
        table_header: [
            { include: '@table_common' },
            [/[^\|]+/, 'keyword.table.header'] // table header
        ],
        table_body: [{ include: '@table_common' }, { include: '@linecontent' }],
        table_common: [
            [/\s*[\-:]+\s*/, { token: 'keyword', switchTo: 'table_body' }],
            [/^\s*\|/, 'keyword.table.left'],
            [/^\s*[^\|]/, '@rematch', '@pop'],
            [/^\s*$/, '@rematch', '@pop'],
            [
                /\|/,
                {
                    cases: {
                        '@eos': 'keyword.table.right',
                        '@default': 'keyword.table.middle' // inner |
                    }
                }
            ]
        ],
        codeblock: [
            [/^\s*~~~\s*$/, { token: 'string', next: '@pop' }],
            [/^\s*```\s*$/, { token: 'string', next: '@pop' }],
            [/.*$/, 'variable.source']
        ],
        // github style code blocks
        codeblockgh: [
            [/```\s*$/, { token: 'variable.source', next: '@pop', nextEmbedded: '@pop' }],
            [/[^`]+/, 'variable.source']
        ],
        linecontent: [
            // escapes
            [/&\w+;/, 'string.escape'],
            [/@escapes/, 'escape'],
            // various markup
            [/\b__([^\\_]|@escapes|_(?!_))+__\b/, 'strong'],
            [/\*\*([^\\*]|@escapes|\*(?!\*))+\*\*/, 'strong'],
            [/\b_[^_]+_\b/, 'emphasis'],
            [/\*([^\\*]|@escapes)+\*/, 'emphasis'],
            [/`([^\\`]|@escapes)+`/, 'variable'],
            // links
            [/\{+[^}]+\}+/, 'string.target'],
            [/(!?\[)((?:[^\]\\]|@escapes)*)(\]\([^\)]+\))/, ['string.link', '', 'string.link']],
            [/(!?\[)((?:[^\]\\]|@escapes)*)(\])/, 'string.link'],
            // or html
            { include: 'html' }
        ],
        // Note: it is tempting to rather switch to the real HTML mode instead of building our own here
        // but currently there is a limitation in Monarch that prevents us from doing it: The opening
        // '<' would start the HTML mode, however there is no way to jump 1 character back to let the
        // HTML mode also tokenize the opening angle bracket. Thus, even though we could jump to HTML,
        // we cannot correctly tokenize it in that mode yet.
        html: [
            // html tags
            [/<(\w+)\/>/, 'tag'],
            [
                /<(\w+)/,
                {
                    cases: {
                        '@empty': { token: 'tag', next: '@tag.$1' },
                        '@default': { token: 'tag', next: '@tag.$1' }
                    }
                }
            ],
            [/<\/(\w+)\s*>/, { token: 'tag' }],
            [/<!--/, 'comment', '@comment']
        ],
        comment: [
            [/[^<\-]+/, 'comment.content'],
            [/-->/, 'comment', '@pop'],
            [/<!--/, 'comment.content.invalid'],
            [/[<\-]/, 'comment.content']
        ],
        // Almost full HTML tag matching, complete with embedded scripts & styles
        tag: [
            [/[ \t\r\n]+/, 'white'],
            [
                /(type)(\s*=\s*)(")([^"]+)(")/,
                [
                    'attribute.name.html',
                    'delimiter.html',
                    'string.html',
                    { token: 'string.html', switchTo: '@tag.$S2.$4' },
                    'string.html'
                ]
            ],
            [
                /(type)(\s*=\s*)(')([^']+)(')/,
                [
                    'attribute.name.html',
                    'delimiter.html',
                    'string.html',
                    { token: 'string.html', switchTo: '@tag.$S2.$4' },
                    'string.html'
                ]
            ],
            [
                /(\w+)(\s*=\s*)("[^"]*"|'[^']*')/,
                ['attribute.name.html', 'delimiter.html', 'string.html']
            ],
            [/\w+/, 'attribute.name.html'],
            [/\/>/, 'tag', '@pop'],
            [
                />/,
                {
                    cases: {
                        '$S2==style': {
                            token: 'tag',
                            switchTo: 'embeddedStyle',
                            nextEmbedded: 'text/css'
                        },
                        '$S2==script': {
                            cases: {
                                $S3: {
                                    token: 'tag',
                                    switchTo: 'embeddedScript',
                                    nextEmbedded: '$S3'
                                },
                                '@default': {
                                    token: 'tag',
                                    switchTo: 'embeddedScript',
                                    nextEmbedded: 'text/javascript'
                                }
                            }
                        },
                        '@default': { token: 'tag', next: '@pop' }
                    }
                }
            ]
        ],
        embeddedStyle: [
            [/[^<]+/, ''],
            [/<\/style\s*>/, { token: '@rematch', next: '@pop', nextEmbedded: '@pop' }],
            [/</, '']
        ],
        embeddedScript: [
            [/[^<]+/, ''],
            [/<\/script\s*>/, { token: '@rematch', next: '@pop', nextEmbedded: '@pop' }],
            [/</, '']
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL21hcmtkb3duL21hcmtkb3duLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLFdBQVcsS0FBSztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxZQUFZLEdBQUc7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0Esd0RBQXdELEVBQUU7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsSUFBSTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLEVBQUU7QUFDekI7QUFDQSxrREFBa0Qsc0NBQXNDO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsNkJBQTZCLHNDQUFzQztBQUNuRTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYSwyQkFBMkI7QUFDeEM7QUFDQTtBQUNBLHNCQUFzQiwyQkFBMkIsR0FBRywwQkFBMEI7QUFDOUU7QUFDQSw4QkFBOEIsMkNBQTJDO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsZ0NBQWdDO0FBQzdELDZCQUE2QixnQ0FBZ0M7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsK0RBQStEO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsSUFBSSxJQUFJO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxnQ0FBZ0M7QUFDbkUscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixlQUFlO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsZ0RBQWdEO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixnREFBZ0Q7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsd0RBQXdEO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHdEQUF3RDtBQUN2RjtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIzMi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmV4cG9ydCB2YXIgY29uZiA9IHtcbiAgICBjb21tZW50czoge1xuICAgICAgICBibG9ja0NvbW1lbnQ6IFsnPCEtLScsICctLT4nXVxuICAgIH0sXG4gICAgYnJhY2tldHM6IFtcbiAgICAgICAgWyd7JywgJ30nXSxcbiAgICAgICAgWydbJywgJ10nXSxcbiAgICAgICAgWycoJywgJyknXVxuICAgIF0sXG4gICAgYXV0b0Nsb3NpbmdQYWlyczogW1xuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxuICAgICAgICB7IG9wZW46ICc8JywgY2xvc2U6ICc+Jywgbm90SW46IFsnc3RyaW5nJ10gfVxuICAgIF0sXG4gICAgc3Vycm91bmRpbmdQYWlyczogW1xuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxuICAgICAgICB7IG9wZW46ICdgJywgY2xvc2U6ICdgJyB9XG4gICAgXSxcbiAgICBmb2xkaW5nOiB7XG4gICAgICAgIG1hcmtlcnM6IHtcbiAgICAgICAgICAgIHN0YXJ0OiBuZXcgUmVnRXhwKCdeXFxcXHMqPCEtLVxcXFxzKiM/cmVnaW9uXFxcXGIuKi0tPicpLFxuICAgICAgICAgICAgZW5kOiBuZXcgUmVnRXhwKCdeXFxcXHMqPCEtLVxcXFxzKiM/ZW5kcmVnaW9uXFxcXGIuKi0tPicpXG4gICAgICAgIH1cbiAgICB9XG59O1xuZXhwb3J0IHZhciBsYW5ndWFnZSA9IHtcbiAgICBkZWZhdWx0VG9rZW46ICcnLFxuICAgIHRva2VuUG9zdGZpeDogJy5tZCcsXG4gICAgLy8gZXNjYXBlIGNvZGVzXG4gICAgY29udHJvbDogL1tcXFxcYCpfXFxbXFxde30oKSMrXFwtXFwuIV0vLFxuICAgIG5vbmNvbnRyb2w6IC9bXlxcXFxgKl9cXFtcXF17fSgpIytcXC1cXC4hXS8sXG4gICAgZXNjYXBlczogL1xcXFwoPzpAY29udHJvbCkvLFxuICAgIC8vIGVzY2FwZSBjb2RlcyBmb3IgamF2YXNjcmlwdC9DU1Mgc3RyaW5nc1xuICAgIGpzZXNjYXBlczogL1xcXFwoPzpbYnRuZnJcXFxcXCInXXxbMC03XVswLTddP3xbMC0zXVswLTddezJ9KS8sXG4gICAgLy8gbm9uIG1hdGNoZWQgZWxlbWVudHNcbiAgICBlbXB0eTogW1xuICAgICAgICAnYXJlYScsXG4gICAgICAgICdiYXNlJyxcbiAgICAgICAgJ2Jhc2Vmb250JyxcbiAgICAgICAgJ2JyJyxcbiAgICAgICAgJ2NvbCcsXG4gICAgICAgICdmcmFtZScsXG4gICAgICAgICdocicsXG4gICAgICAgICdpbWcnLFxuICAgICAgICAnaW5wdXQnLFxuICAgICAgICAnaXNpbmRleCcsXG4gICAgICAgICdsaW5rJyxcbiAgICAgICAgJ21ldGEnLFxuICAgICAgICAncGFyYW0nXG4gICAgXSxcbiAgICB0b2tlbml6ZXI6IHtcbiAgICAgICAgcm9vdDogW1xuICAgICAgICAgICAgLy8gbWFya2Rvd24gdGFibGVzXG4gICAgICAgICAgICBbL15cXHMqXFx8LywgJ0ByZW1hdGNoJywgJ0B0YWJsZV9oZWFkZXInXSxcbiAgICAgICAgICAgIC8vIGhlYWRlcnMgKHdpdGggIylcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvXihcXHN7MCwzfSkoIyspKCg/OlteXFxcXCNdfEBlc2NhcGVzKSspKCg/OiMrKT8pLyxcbiAgICAgICAgICAgICAgICBbJ3doaXRlJywgJ2tleXdvcmQnLCAna2V5d29yZCcsICdrZXl3b3JkJ11cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAvLyBoZWFkZXJzICh3aXRoID0pXG4gICAgICAgICAgICBbL15cXHMqKD0rfFxcLSspXFxzKiQvLCAna2V5d29yZCddLFxuICAgICAgICAgICAgLy8gaGVhZGVycyAod2l0aCAqKiopXG4gICAgICAgICAgICBbL15cXHMqKChcXCpbIF0/KSspXFxzKiQvLCAnbWV0YS5zZXBhcmF0b3InXSxcbiAgICAgICAgICAgIC8vIHF1b3RlXG4gICAgICAgICAgICBbL15cXHMqPisvLCAnY29tbWVudCddLFxuICAgICAgICAgICAgLy8gbGlzdCAoc3RhcnRpbmcgd2l0aCAqIG9yIG51bWJlcilcbiAgICAgICAgICAgIFsvXlxccyooW1xcKlxcLSs6XXxcXGQrXFwuKVxccy8sICdrZXl3b3JkJ10sXG4gICAgICAgICAgICAvLyBjb2RlIGJsb2NrICg0IHNwYWNlcyBpbmRlbnQpXG4gICAgICAgICAgICBbL14oXFx0fFsgXXs0fSlbXiBdLiokLywgJ3N0cmluZyddLFxuICAgICAgICAgICAgLy8gY29kZSBibG9jayAoMyB0aWxkZSlcbiAgICAgICAgICAgIFsvXlxccyp+fn5cXHMqKCg/Olxcd3xbXFwvXFwtI10pKyk/XFxzKiQvLCB7IHRva2VuOiAnc3RyaW5nJywgbmV4dDogJ0Bjb2RlYmxvY2snIH1dLFxuICAgICAgICAgICAgLy8gZ2l0aHViIHN0eWxlIGNvZGUgYmxvY2tzICh3aXRoIGJhY2t0aWNrcyBhbmQgbGFuZ3VhZ2UpXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL15cXHMqYGBgXFxzKigoPzpcXHd8W1xcL1xcLSNdKSspLiokLyxcbiAgICAgICAgICAgICAgICB7IHRva2VuOiAnc3RyaW5nJywgbmV4dDogJ0Bjb2RlYmxvY2tnaCcsIG5leHRFbWJlZGRlZDogJyQxJyB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgLy8gZ2l0aHViIHN0eWxlIGNvZGUgYmxvY2tzICh3aXRoIGJhY2t0aWNrcyBidXQgbm8gbGFuZ3VhZ2UpXG4gICAgICAgICAgICBbL15cXHMqYGBgXFxzKiQvLCB7IHRva2VuOiAnc3RyaW5nJywgbmV4dDogJ0Bjb2RlYmxvY2snIH1dLFxuICAgICAgICAgICAgLy8gbWFya3VwIHdpdGhpbiBsaW5lc1xuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGxpbmVjb250ZW50JyB9XG4gICAgICAgIF0sXG4gICAgICAgIHRhYmxlX2hlYWRlcjogW1xuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHRhYmxlX2NvbW1vbicgfSxcbiAgICAgICAgICAgIFsvW15cXHxdKy8sICdrZXl3b3JkLnRhYmxlLmhlYWRlciddIC8vIHRhYmxlIGhlYWRlclxuICAgICAgICBdLFxuICAgICAgICB0YWJsZV9ib2R5OiBbeyBpbmNsdWRlOiAnQHRhYmxlX2NvbW1vbicgfSwgeyBpbmNsdWRlOiAnQGxpbmVjb250ZW50JyB9XSxcbiAgICAgICAgdGFibGVfY29tbW9uOiBbXG4gICAgICAgICAgICBbL1xccypbXFwtOl0rXFxzKi8sIHsgdG9rZW46ICdrZXl3b3JkJywgc3dpdGNoVG86ICd0YWJsZV9ib2R5JyB9XSxcbiAgICAgICAgICAgIFsvXlxccypcXHwvLCAna2V5d29yZC50YWJsZS5sZWZ0J10sXG4gICAgICAgICAgICBbL15cXHMqW15cXHxdLywgJ0ByZW1hdGNoJywgJ0Bwb3AnXSxcbiAgICAgICAgICAgIFsvXlxccyokLywgJ0ByZW1hdGNoJywgJ0Bwb3AnXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvXFx8LyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQGVvcyc6ICdrZXl3b3JkLnRhYmxlLnJpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdrZXl3b3JkLnRhYmxlLm1pZGRsZScgLy8gaW5uZXIgfFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICBdLFxuICAgICAgICBjb2RlYmxvY2s6IFtcbiAgICAgICAgICAgIFsvXlxccyp+fn5cXHMqJC8sIHsgdG9rZW46ICdzdHJpbmcnLCBuZXh0OiAnQHBvcCcgfV0sXG4gICAgICAgICAgICBbL15cXHMqYGBgXFxzKiQvLCB7IHRva2VuOiAnc3RyaW5nJywgbmV4dDogJ0Bwb3AnIH1dLFxuICAgICAgICAgICAgWy8uKiQvLCAndmFyaWFibGUuc291cmNlJ11cbiAgICAgICAgXSxcbiAgICAgICAgLy8gZ2l0aHViIHN0eWxlIGNvZGUgYmxvY2tzXG4gICAgICAgIGNvZGVibG9ja2doOiBbXG4gICAgICAgICAgICBbL2BgYFxccyokLywgeyB0b2tlbjogJ3ZhcmlhYmxlLnNvdXJjZScsIG5leHQ6ICdAcG9wJywgbmV4dEVtYmVkZGVkOiAnQHBvcCcgfV0sXG4gICAgICAgICAgICBbL1teYF0rLywgJ3ZhcmlhYmxlLnNvdXJjZSddXG4gICAgICAgIF0sXG4gICAgICAgIGxpbmVjb250ZW50OiBbXG4gICAgICAgICAgICAvLyBlc2NhcGVzXG4gICAgICAgICAgICBbLyZcXHcrOy8sICdzdHJpbmcuZXNjYXBlJ10sXG4gICAgICAgICAgICBbL0Blc2NhcGVzLywgJ2VzY2FwZSddLFxuICAgICAgICAgICAgLy8gdmFyaW91cyBtYXJrdXBcbiAgICAgICAgICAgIFsvXFxiX18oW15cXFxcX118QGVzY2FwZXN8Xyg/IV8pKStfX1xcYi8sICdzdHJvbmcnXSxcbiAgICAgICAgICAgIFsvXFwqXFwqKFteXFxcXCpdfEBlc2NhcGVzfFxcKig/IVxcKikpK1xcKlxcKi8sICdzdHJvbmcnXSxcbiAgICAgICAgICAgIFsvXFxiX1teX10rX1xcYi8sICdlbXBoYXNpcyddLFxuICAgICAgICAgICAgWy9cXCooW15cXFxcKl18QGVzY2FwZXMpK1xcKi8sICdlbXBoYXNpcyddLFxuICAgICAgICAgICAgWy9gKFteXFxcXGBdfEBlc2NhcGVzKStgLywgJ3ZhcmlhYmxlJ10sXG4gICAgICAgICAgICAvLyBsaW5rc1xuICAgICAgICAgICAgWy9cXHsrW159XStcXH0rLywgJ3N0cmluZy50YXJnZXQnXSxcbiAgICAgICAgICAgIFsvKCE/XFxbKSgoPzpbXlxcXVxcXFxdfEBlc2NhcGVzKSopKFxcXVxcKFteXFwpXStcXCkpLywgWydzdHJpbmcubGluaycsICcnLCAnc3RyaW5nLmxpbmsnXV0sXG4gICAgICAgICAgICBbLyghP1xcWykoKD86W15cXF1cXFxcXXxAZXNjYXBlcykqKShcXF0pLywgJ3N0cmluZy5saW5rJ10sXG4gICAgICAgICAgICAvLyBvciBodG1sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdodG1sJyB9XG4gICAgICAgIF0sXG4gICAgICAgIC8vIE5vdGU6IGl0IGlzIHRlbXB0aW5nIHRvIHJhdGhlciBzd2l0Y2ggdG8gdGhlIHJlYWwgSFRNTCBtb2RlIGluc3RlYWQgb2YgYnVpbGRpbmcgb3VyIG93biBoZXJlXG4gICAgICAgIC8vIGJ1dCBjdXJyZW50bHkgdGhlcmUgaXMgYSBsaW1pdGF0aW9uIGluIE1vbmFyY2ggdGhhdCBwcmV2ZW50cyB1cyBmcm9tIGRvaW5nIGl0OiBUaGUgb3BlbmluZ1xuICAgICAgICAvLyAnPCcgd291bGQgc3RhcnQgdGhlIEhUTUwgbW9kZSwgaG93ZXZlciB0aGVyZSBpcyBubyB3YXkgdG8ganVtcCAxIGNoYXJhY3RlciBiYWNrIHRvIGxldCB0aGVcbiAgICAgICAgLy8gSFRNTCBtb2RlIGFsc28gdG9rZW5pemUgdGhlIG9wZW5pbmcgYW5nbGUgYnJhY2tldC4gVGh1cywgZXZlbiB0aG91Z2ggd2UgY291bGQganVtcCB0byBIVE1MLFxuICAgICAgICAvLyB3ZSBjYW5ub3QgY29ycmVjdGx5IHRva2VuaXplIGl0IGluIHRoYXQgbW9kZSB5ZXQuXG4gICAgICAgIGh0bWw6IFtcbiAgICAgICAgICAgIC8vIGh0bWwgdGFnc1xuICAgICAgICAgICAgWy88KFxcdyspXFwvPi8sICd0YWcnXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvPChcXHcrKS8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0BlbXB0eSc6IHsgdG9rZW46ICd0YWcnLCBuZXh0OiAnQHRhZy4kMScgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6IHsgdG9rZW46ICd0YWcnLCBuZXh0OiAnQHRhZy4kMScgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFsvPFxcLyhcXHcrKVxccyo+LywgeyB0b2tlbjogJ3RhZycgfV0sXG4gICAgICAgICAgICBbLzwhLS0vLCAnY29tbWVudCcsICdAY29tbWVudCddXG4gICAgICAgIF0sXG4gICAgICAgIGNvbW1lbnQ6IFtcbiAgICAgICAgICAgIFsvW148XFwtXSsvLCAnY29tbWVudC5jb250ZW50J10sXG4gICAgICAgICAgICBbLy0tPi8sICdjb21tZW50JywgJ0Bwb3AnXSxcbiAgICAgICAgICAgIFsvPCEtLS8sICdjb21tZW50LmNvbnRlbnQuaW52YWxpZCddLFxuICAgICAgICAgICAgWy9bPFxcLV0vLCAnY29tbWVudC5jb250ZW50J11cbiAgICAgICAgXSxcbiAgICAgICAgLy8gQWxtb3N0IGZ1bGwgSFRNTCB0YWcgbWF0Y2hpbmcsIGNvbXBsZXRlIHdpdGggZW1iZWRkZWQgc2NyaXB0cyAmIHN0eWxlc1xuICAgICAgICB0YWc6IFtcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy8sICd3aGl0ZSddLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC8odHlwZSkoXFxzKj1cXHMqKShcIikoW15cIl0rKShcIikvLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgJ2F0dHJpYnV0ZS5uYW1lLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICAnZGVsaW1pdGVyLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICAnc3RyaW5nLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICB7IHRva2VuOiAnc3RyaW5nLmh0bWwnLCBzd2l0Y2hUbzogJ0B0YWcuJFMyLiQ0JyB9LFxuICAgICAgICAgICAgICAgICAgICAnc3RyaW5nLmh0bWwnXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvKHR5cGUpKFxccyo9XFxzKikoJykoW14nXSspKCcpLyxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICdhdHRyaWJ1dGUubmFtZS5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgJ2RlbGltaXRlci5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgJ3N0cmluZy5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgeyB0b2tlbjogJ3N0cmluZy5odG1sJywgc3dpdGNoVG86ICdAdGFnLiRTMi4kNCcgfSxcbiAgICAgICAgICAgICAgICAgICAgJ3N0cmluZy5odG1sJ1xuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLyhcXHcrKShcXHMqPVxccyopKFwiW15cIl0qXCJ8J1teJ10qJykvLFxuICAgICAgICAgICAgICAgIFsnYXR0cmlidXRlLm5hbWUuaHRtbCcsICdkZWxpbWl0ZXIuaHRtbCcsICdzdHJpbmcuaHRtbCddXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgWy9cXHcrLywgJ2F0dHJpYnV0ZS5uYW1lLmh0bWwnXSxcbiAgICAgICAgICAgIFsvXFwvPi8sICd0YWcnLCAnQHBvcCddLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC8+LyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnJFMyPT1zdHlsZSc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ3RhZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoVG86ICdlbWJlZGRlZFN0eWxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0RW1iZWRkZWQ6ICd0ZXh0L2NzcydcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnJFMyPT1zY3JpcHQnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJFMzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ3RhZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2hUbzogJ2VtYmVkZGVkU2NyaXB0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRFbWJlZGRlZDogJyRTMydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0Jzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW46ICd0YWcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoVG86ICdlbWJlZGRlZFNjcmlwdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0RW1iZWRkZWQ6ICd0ZXh0L2phdmFzY3JpcHQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogeyB0b2tlbjogJ3RhZycsIG5leHQ6ICdAcG9wJyB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIF0sXG4gICAgICAgIGVtYmVkZGVkU3R5bGU6IFtcbiAgICAgICAgICAgIFsvW148XSsvLCAnJ10sXG4gICAgICAgICAgICBbLzxcXC9zdHlsZVxccyo+LywgeyB0b2tlbjogJ0ByZW1hdGNoJywgbmV4dDogJ0Bwb3AnLCBuZXh0RW1iZWRkZWQ6ICdAcG9wJyB9XSxcbiAgICAgICAgICAgIFsvPC8sICcnXVxuICAgICAgICBdLFxuICAgICAgICBlbWJlZGRlZFNjcmlwdDogW1xuICAgICAgICAgICAgWy9bXjxdKy8sICcnXSxcbiAgICAgICAgICAgIFsvPFxcL3NjcmlwdFxccyo+LywgeyB0b2tlbjogJ0ByZW1hdGNoJywgbmV4dDogJ0Bwb3AnLCBuZXh0RW1iZWRkZWQ6ICdAcG9wJyB9XSxcbiAgICAgICAgICAgIFsvPC8sICcnXVxuICAgICAgICBdXG4gICAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=