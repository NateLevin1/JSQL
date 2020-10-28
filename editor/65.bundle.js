(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[65],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/twig/twig.js":
/*!************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/twig/twig.js ***!
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
    wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\@\$\^\&\*\(\)\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\s]+)/g,
    comments: {
        blockComment: ['{#', '#}']
    },
    brackets: [
        ['{#', '#}'],
        ['{%', '%}'],
        ['{{', '}}'],
        ['(', ')'],
        ['[', ']'],
        // HTML
        ['<!--', '-->'],
        ['<', '>']
    ],
    autoClosingPairs: [
        { open: '{# ', close: ' #}' },
        { open: '{% ', close: ' %}' },
        { open: '{{ ', close: ' }}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
        { open: "'", close: "'" }
    ],
    surroundingPairs: [
        { open: '"', close: '"' },
        { open: "'", close: "'" },
        // HTML
        { open: '<', close: '>' }
    ]
};
var language = {
    defaultToken: '',
    tokenPostfix: '',
    ignoreCase: true,
    keywords: [
        // (opening) tags
        'apply',
        'autoescape',
        'block',
        'deprecated',
        'do',
        'embed',
        'extends',
        'flush',
        'for',
        'from',
        'if',
        'import',
        'include',
        'macro',
        'sandbox',
        'set',
        'use',
        'verbatim',
        'with',
        // closing tags
        'endapply',
        'endautoescape',
        'endblock',
        'endembed',
        'endfor',
        'endif',
        'endmacro',
        'endsandbox',
        'endset',
        'endwith',
        // literals
        'true',
        'false'
    ],
    tokenizer: {
        root: [
            // whitespace
            [/\s+/],
            // Twig Tag Delimiters
            [/{#/, 'comment.twig', '@commentState'],
            [/{%[-~]?/, 'delimiter.twig', '@blockState'],
            [/{{[-~]?/, 'delimiter.twig', '@variableState'],
            // HTML
            [/<!DOCTYPE/, 'metatag.html', '@doctype'],
            [/<!--/, 'comment.html', '@comment'],
            [
                /(<)((?:[\w\-]+:)?[\w\-]+)(\s*)(\/>)/,
                ['delimiter.html', 'tag.html', '', 'delimiter.html']
            ],
            [/(<)(script)/, ['delimiter.html', { token: 'tag.html', next: '@script' }]],
            [/(<)(style)/, ['delimiter.html', { token: 'tag.html', next: '@style' }]],
            [
                /(<)((?:[\w\-]+:)?[\w\-]+)/,
                ['delimiter.html', { token: 'tag.html', next: '@otherTag' }]
            ],
            [
                /(<\/)((?:[\w\-]+:)?[\w\-]+)/,
                ['delimiter.html', { token: 'tag.html', next: '@otherTag' }]
            ],
            [/</, 'delimiter.html'],
            [/[^<]+/] // text
        ],
        /**
         * Comment Tag Handling
         */
        commentState: [
            [/#}/, 'comment.twig', '@pop'],
            [/./, 'comment.twig']
        ],
        /**
         * Block Tag Handling
         */
        blockState: [
            [/[-~]?%}/, 'delimiter.twig', '@pop'],
            // whitespace
            [/\s+/],
            // verbatim
            // Unlike other blocks, verbatim ehas its own state
            // transition to ensure we mark its contents as strings.
            [
                /(verbatim)(\s*)([-~]?%})/,
                ['keyword.twig', '', { token: 'delimiter.twig', next: '@rawDataState' }]
            ],
            { include: 'expression' }
        ],
        rawDataState: [
            // endverbatim
            [
                /({%[-~]?)(\s*)(endverbatim)(\s*)([-~]?%})/,
                [
                    'delimiter.twig',
                    '',
                    'keyword.twig',
                    '',
                    { token: 'delimiter.twig', next: '@popall' }
                ]
            ],
            [/./, 'string.twig']
        ],
        /**
         * Variable Tag Handling
         */
        variableState: [[/[-~]?}}/, 'delimiter.twig', '@pop'], { include: 'expression' }],
        stringState: [
            // closing double quoted string
            [/"/, 'string.twig', '@pop'],
            // interpolation start
            [/#{\s*/, 'string.twig', '@interpolationState'],
            // string part
            [/[^#"\\]*(?:(?:\\.|#(?!\{))[^#"\\]*)*/, 'string.twig']
        ],
        interpolationState: [
            // interpolation end
            [/}/, 'string.twig', '@pop'],
            { include: 'expression' }
        ],
        /**
         * Expression Handling
         */
        expression: [
            // whitespace
            [/\s+/],
            // operators - math
            [/\+|-|\/{1,2}|%|\*{1,2}/, 'operators.twig'],
            // operators - logic
            [/(and|or|not|b-and|b-xor|b-or)(\s+)/, ['operators.twig', '']],
            // operators - comparison (symbols)
            [/==|!=|<|>|>=|<=/, 'operators.twig'],
            // operators - comparison (words)
            [/(starts with|ends with|matches)(\s+)/, ['operators.twig', '']],
            // operators - containment
            [/(in)(\s+)/, ['operators.twig', '']],
            // operators - test
            [/(is)(\s+)/, ['operators.twig', '']],
            // operators - misc
            [/\||~|:|\.{1,2}|\?{1,2}/, 'operators.twig'],
            // names
            [
                /[^\W\d][\w]*/,
                {
                    cases: {
                        '@keywords': 'keyword.twig',
                        '@default': 'variable.twig'
                    }
                }
            ],
            // numbers
            [/\d+(\.\d+)?/, 'number.twig'],
            // punctuation
            [/\(|\)|\[|\]|{|}|,/, 'delimiter.twig'],
            // strings
            [/"([^#"\\]*(?:\\.[^#"\\]*)*)"|\'([^\'\\]*(?:\\.[^\'\\]*)*)\'/, 'string.twig'],
            // opening double quoted string
            [/"/, 'string.twig', '@stringState'],
            // misc syntactic constructs
            // These are not operators per se, but for the purposes of lexical analysis we
            // can treat them as such.
            // arrow functions
            [/=>/, 'operators.twig'],
            // assignment
            [/=/, 'operators.twig']
        ],
        /**
         * HTML
         */
        doctype: [
            [/[^>]+/, 'metatag.content.html'],
            [/>/, 'metatag.html', '@pop']
        ],
        comment: [
            [/-->/, 'comment.html', '@pop'],
            [/[^-]+/, 'comment.content.html'],
            [/./, 'comment.content.html']
        ],
        otherTag: [
            [/\/?>/, 'delimiter.html', '@pop'],
            [/"([^"]*)"/, 'attribute.value.html'],
            [/'([^']*)'/, 'attribute.value.html'],
            [/[\w\-]+/, 'attribute.name.html'],
            [/=/, 'delimiter.html'],
            [/[ \t\r\n]+/] // whitespace
        ],
        // -- BEGIN <script> tags handling
        // After <script
        script: [
            [/type/, 'attribute.name.html', '@scriptAfterType'],
            [/"([^"]*)"/, 'attribute.value.html'],
            [/'([^']*)'/, 'attribute.value.html'],
            [/[\w\-]+/, 'attribute.name.html'],
            [/=/, 'delimiter.html'],
            [
                />/,
                {
                    token: 'delimiter.html',
                    next: '@scriptEmbedded',
                    nextEmbedded: 'text/javascript'
                }
            ],
            [/[ \t\r\n]+/],
            [
                /(<\/)(script\s*)(>)/,
                ['delimiter.html', 'tag.html', { token: 'delimiter.html', next: '@pop' }]
            ]
        ],
        // After <script ... type
        scriptAfterType: [
            [/=/, 'delimiter.html', '@scriptAfterTypeEquals'],
            [
                />/,
                {
                    token: 'delimiter.html',
                    next: '@scriptEmbedded',
                    nextEmbedded: 'text/javascript'
                }
            ],
            [/[ \t\r\n]+/],
            [/<\/script\s*>/, { token: '@rematch', next: '@pop' }]
        ],
        // After <script ... type =
        scriptAfterTypeEquals: [
            [
                /"([^"]*)"/,
                {
                    token: 'attribute.value.html',
                    switchTo: '@scriptWithCustomType.$1'
                }
            ],
            [
                /'([^']*)'/,
                {
                    token: 'attribute.value.html',
                    switchTo: '@scriptWithCustomType.$1'
                }
            ],
            [
                />/,
                {
                    token: 'delimiter.html',
                    next: '@scriptEmbedded',
                    nextEmbedded: 'text/javascript'
                }
            ],
            [/[ \t\r\n]+/],
            [/<\/script\s*>/, { token: '@rematch', next: '@pop' }]
        ],
        // After <script ... type = $S2
        scriptWithCustomType: [
            [
                />/,
                {
                    token: 'delimiter.html',
                    next: '@scriptEmbedded.$S2',
                    nextEmbedded: '$S2'
                }
            ],
            [/"([^"]*)"/, 'attribute.value.html'],
            [/'([^']*)'/, 'attribute.value.html'],
            [/[\w\-]+/, 'attribute.name.html'],
            [/=/, 'delimiter.html'],
            [/[ \t\r\n]+/],
            [/<\/script\s*>/, { token: '@rematch', next: '@pop' }]
        ],
        scriptEmbedded: [
            [/<\/script/, { token: '@rematch', next: '@pop', nextEmbedded: '@pop' }],
            [/[^<]+/, '']
        ],
        // -- END <script> tags handling
        // -- BEGIN <style> tags handling
        // After <style
        style: [
            [/type/, 'attribute.name.html', '@styleAfterType'],
            [/"([^"]*)"/, 'attribute.value.html'],
            [/'([^']*)'/, 'attribute.value.html'],
            [/[\w\-]+/, 'attribute.name.html'],
            [/=/, 'delimiter.html'],
            [
                />/,
                {
                    token: 'delimiter.html',
                    next: '@styleEmbedded',
                    nextEmbedded: 'text/css'
                }
            ],
            [/[ \t\r\n]+/],
            [
                /(<\/)(style\s*)(>)/,
                ['delimiter.html', 'tag.html', { token: 'delimiter.html', next: '@pop' }]
            ]
        ],
        // After <style ... type
        styleAfterType: [
            [/=/, 'delimiter.html', '@styleAfterTypeEquals'],
            [
                />/,
                {
                    token: 'delimiter.html',
                    next: '@styleEmbedded',
                    nextEmbedded: 'text/css'
                }
            ],
            [/[ \t\r\n]+/],
            [/<\/style\s*>/, { token: '@rematch', next: '@pop' }]
        ],
        // After <style ... type =
        styleAfterTypeEquals: [
            [
                /"([^"]*)"/,
                {
                    token: 'attribute.value.html',
                    switchTo: '@styleWithCustomType.$1'
                }
            ],
            [
                /'([^']*)'/,
                {
                    token: 'attribute.value.html',
                    switchTo: '@styleWithCustomType.$1'
                }
            ],
            [
                />/,
                {
                    token: 'delimiter.html',
                    next: '@styleEmbedded',
                    nextEmbedded: 'text/css'
                }
            ],
            [/[ \t\r\n]+/],
            [/<\/style\s*>/, { token: '@rematch', next: '@pop' }]
        ],
        // After <style ... type = $S2
        styleWithCustomType: [
            [
                />/,
                {
                    token: 'delimiter.html',
                    next: '@styleEmbedded.$S2',
                    nextEmbedded: '$S2'
                }
            ],
            [/"([^"]*)"/, 'attribute.value.html'],
            [/'([^']*)'/, 'attribute.value.html'],
            [/[\w\-]+/, 'attribute.name.html'],
            [/=/, 'delimiter.html'],
            [/[ \t\r\n]+/],
            [/<\/style\s*>/, { token: '@rematch', next: '@pop' }]
        ],
        styleEmbedded: [
            [/<\/style/, { token: '@rematch', next: '@pop', nextEmbedded: '@pop' }],
            [/[^<]+/, '']
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL3R3aWcvdHdpZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLGdFQUFnRSxJQUFJLE1BQU07QUFDMUU7QUFDQSx5QkFBeUIsT0FBTztBQUNoQyxLQUFLO0FBQ0w7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFlBQVksTUFBTTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxnQkFBZ0IsR0FBRztBQUNyQyxTQUFTLFNBQVMsZ0JBQWdCLEdBQUc7QUFDckMsU0FBUyxVQUFVLGVBQWUsR0FBRztBQUNyQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsZUFBZTtBQUNmLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxxQ0FBcUM7QUFDckYsK0NBQStDLG9DQUFvQztBQUNuRjtBQUNBO0FBQ0Esb0NBQW9DLHVDQUF1QztB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QkFBMEIsd0RBQXdEO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjY1LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuZXhwb3J0IHZhciBjb25mID0ge1xuICAgIHdvcmRQYXR0ZXJuOiAvKC0/XFxkKlxcLlxcZFxcdyopfChbXlxcYFxcflxcIVxcQFxcJFxcXlxcJlxcKlxcKFxcKVxcPVxcK1xcW1xce1xcXVxcfVxcXFxcXHxcXDtcXDpcXCdcXFwiXFwsXFwuXFw8XFw+XFwvXFxzXSspL2csXG4gICAgY29tbWVudHM6IHtcbiAgICAgICAgYmxvY2tDb21tZW50OiBbJ3sjJywgJyN9J11cbiAgICB9LFxuICAgIGJyYWNrZXRzOiBbXG4gICAgICAgIFsneyMnLCAnI30nXSxcbiAgICAgICAgWyd7JScsICclfSddLFxuICAgICAgICBbJ3t7JywgJ319J10sXG4gICAgICAgIFsnKCcsICcpJ10sXG4gICAgICAgIFsnWycsICddJ10sXG4gICAgICAgIC8vIEhUTUxcbiAgICAgICAgWyc8IS0tJywgJy0tPiddLFxuICAgICAgICBbJzwnLCAnPiddXG4gICAgXSxcbiAgICBhdXRvQ2xvc2luZ1BhaXJzOiBbXG4gICAgICAgIHsgb3BlbjogJ3sjICcsIGNsb3NlOiAnICN9JyB9LFxuICAgICAgICB7IG9wZW46ICd7JSAnLCBjbG9zZTogJyAlfScgfSxcbiAgICAgICAgeyBvcGVuOiAne3sgJywgY2xvc2U6ICcgfX0nIH0sXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfSxcbiAgICAgICAgeyBvcGVuOiBcIidcIiwgY2xvc2U6IFwiJ1wiIH1cbiAgICBdLFxuICAgIHN1cnJvdW5kaW5nUGFpcnM6IFtcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9LFxuICAgICAgICB7IG9wZW46IFwiJ1wiLCBjbG9zZTogXCInXCIgfSxcbiAgICAgICAgLy8gSFRNTFxuICAgICAgICB7IG9wZW46ICc8JywgY2xvc2U6ICc+JyB9XG4gICAgXVxufTtcbmV4cG9ydCB2YXIgbGFuZ3VhZ2UgPSB7XG4gICAgZGVmYXVsdFRva2VuOiAnJyxcbiAgICB0b2tlblBvc3RmaXg6ICcnLFxuICAgIGlnbm9yZUNhc2U6IHRydWUsXG4gICAga2V5d29yZHM6IFtcbiAgICAgICAgLy8gKG9wZW5pbmcpIHRhZ3NcbiAgICAgICAgJ2FwcGx5JyxcbiAgICAgICAgJ2F1dG9lc2NhcGUnLFxuICAgICAgICAnYmxvY2snLFxuICAgICAgICAnZGVwcmVjYXRlZCcsXG4gICAgICAgICdkbycsXG4gICAgICAgICdlbWJlZCcsXG4gICAgICAgICdleHRlbmRzJyxcbiAgICAgICAgJ2ZsdXNoJyxcbiAgICAgICAgJ2ZvcicsXG4gICAgICAgICdmcm9tJyxcbiAgICAgICAgJ2lmJyxcbiAgICAgICAgJ2ltcG9ydCcsXG4gICAgICAgICdpbmNsdWRlJyxcbiAgICAgICAgJ21hY3JvJyxcbiAgICAgICAgJ3NhbmRib3gnLFxuICAgICAgICAnc2V0JyxcbiAgICAgICAgJ3VzZScsXG4gICAgICAgICd2ZXJiYXRpbScsXG4gICAgICAgICd3aXRoJyxcbiAgICAgICAgLy8gY2xvc2luZyB0YWdzXG4gICAgICAgICdlbmRhcHBseScsXG4gICAgICAgICdlbmRhdXRvZXNjYXBlJyxcbiAgICAgICAgJ2VuZGJsb2NrJyxcbiAgICAgICAgJ2VuZGVtYmVkJyxcbiAgICAgICAgJ2VuZGZvcicsXG4gICAgICAgICdlbmRpZicsXG4gICAgICAgICdlbmRtYWNybycsXG4gICAgICAgICdlbmRzYW5kYm94JyxcbiAgICAgICAgJ2VuZHNldCcsXG4gICAgICAgICdlbmR3aXRoJyxcbiAgICAgICAgLy8gbGl0ZXJhbHNcbiAgICAgICAgJ3RydWUnLFxuICAgICAgICAnZmFsc2UnXG4gICAgXSxcbiAgICB0b2tlbml6ZXI6IHtcbiAgICAgICAgcm9vdDogW1xuICAgICAgICAgICAgLy8gd2hpdGVzcGFjZVxuICAgICAgICAgICAgWy9cXHMrL10sXG4gICAgICAgICAgICAvLyBUd2lnIFRhZyBEZWxpbWl0ZXJzXG4gICAgICAgICAgICBbL3sjLywgJ2NvbW1lbnQudHdpZycsICdAY29tbWVudFN0YXRlJ10sXG4gICAgICAgICAgICBbL3slWy1+XT8vLCAnZGVsaW1pdGVyLnR3aWcnLCAnQGJsb2NrU3RhdGUnXSxcbiAgICAgICAgICAgIFsve3tbLX5dPy8sICdkZWxpbWl0ZXIudHdpZycsICdAdmFyaWFibGVTdGF0ZSddLFxuICAgICAgICAgICAgLy8gSFRNTFxuICAgICAgICAgICAgWy88IURPQ1RZUEUvLCAnbWV0YXRhZy5odG1sJywgJ0Bkb2N0eXBlJ10sXG4gICAgICAgICAgICBbLzwhLS0vLCAnY29tbWVudC5odG1sJywgJ0Bjb21tZW50J10sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLyg8KSgoPzpbXFx3XFwtXSs6KT9bXFx3XFwtXSspKFxccyopKFxcLz4pLyxcbiAgICAgICAgICAgICAgICBbJ2RlbGltaXRlci5odG1sJywgJ3RhZy5odG1sJywgJycsICdkZWxpbWl0ZXIuaHRtbCddXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgWy8oPCkoc2NyaXB0KS8sIFsnZGVsaW1pdGVyLmh0bWwnLCB7IHRva2VuOiAndGFnLmh0bWwnLCBuZXh0OiAnQHNjcmlwdCcgfV1dLFxuICAgICAgICAgICAgWy8oPCkoc3R5bGUpLywgWydkZWxpbWl0ZXIuaHRtbCcsIHsgdG9rZW46ICd0YWcuaHRtbCcsIG5leHQ6ICdAc3R5bGUnIH1dXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvKDwpKCg/OltcXHdcXC1dKzopP1tcXHdcXC1dKykvLFxuICAgICAgICAgICAgICAgIFsnZGVsaW1pdGVyLmh0bWwnLCB7IHRva2VuOiAndGFnLmh0bWwnLCBuZXh0OiAnQG90aGVyVGFnJyB9XVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvKDxcXC8pKCg/OltcXHdcXC1dKzopP1tcXHdcXC1dKykvLFxuICAgICAgICAgICAgICAgIFsnZGVsaW1pdGVyLmh0bWwnLCB7IHRva2VuOiAndGFnLmh0bWwnLCBuZXh0OiAnQG90aGVyVGFnJyB9XVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFsvPC8sICdkZWxpbWl0ZXIuaHRtbCddLFxuICAgICAgICAgICAgWy9bXjxdKy9dIC8vIHRleHRcbiAgICAgICAgXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbW1lbnQgVGFnIEhhbmRsaW5nXG4gICAgICAgICAqL1xuICAgICAgICBjb21tZW50U3RhdGU6IFtcbiAgICAgICAgICAgIFsvI30vLCAnY29tbWVudC50d2lnJywgJ0Bwb3AnXSxcbiAgICAgICAgICAgIFsvLi8sICdjb21tZW50LnR3aWcnXVxuICAgICAgICBdLFxuICAgICAgICAvKipcbiAgICAgICAgICogQmxvY2sgVGFnIEhhbmRsaW5nXG4gICAgICAgICAqL1xuICAgICAgICBibG9ja1N0YXRlOiBbXG4gICAgICAgICAgICBbL1stfl0/JX0vLCAnZGVsaW1pdGVyLnR3aWcnLCAnQHBvcCddLFxuICAgICAgICAgICAgLy8gd2hpdGVzcGFjZVxuICAgICAgICAgICAgWy9cXHMrL10sXG4gICAgICAgICAgICAvLyB2ZXJiYXRpbVxuICAgICAgICAgICAgLy8gVW5saWtlIG90aGVyIGJsb2NrcywgdmVyYmF0aW0gZWhhcyBpdHMgb3duIHN0YXRlXG4gICAgICAgICAgICAvLyB0cmFuc2l0aW9uIHRvIGVuc3VyZSB3ZSBtYXJrIGl0cyBjb250ZW50cyBhcyBzdHJpbmdzLlxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC8odmVyYmF0aW0pKFxccyopKFstfl0/JX0pLyxcbiAgICAgICAgICAgICAgICBbJ2tleXdvcmQudHdpZycsICcnLCB7IHRva2VuOiAnZGVsaW1pdGVyLnR3aWcnLCBuZXh0OiAnQHJhd0RhdGFTdGF0ZScgfV1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdleHByZXNzaW9uJyB9XG4gICAgICAgIF0sXG4gICAgICAgIHJhd0RhdGFTdGF0ZTogW1xuICAgICAgICAgICAgLy8gZW5kdmVyYmF0aW1cbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvKHslWy1+XT8pKFxccyopKGVuZHZlcmJhdGltKShcXHMqKShbLX5dPyV9KS8sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAnZGVsaW1pdGVyLnR3aWcnLFxuICAgICAgICAgICAgICAgICAgICAnJyxcbiAgICAgICAgICAgICAgICAgICAgJ2tleXdvcmQudHdpZycsXG4gICAgICAgICAgICAgICAgICAgICcnLFxuICAgICAgICAgICAgICAgICAgICB7IHRva2VuOiAnZGVsaW1pdGVyLnR3aWcnLCBuZXh0OiAnQHBvcGFsbCcgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbLy4vLCAnc3RyaW5nLnR3aWcnXVxuICAgICAgICBdLFxuICAgICAgICAvKipcbiAgICAgICAgICogVmFyaWFibGUgVGFnIEhhbmRsaW5nXG4gICAgICAgICAqL1xuICAgICAgICB2YXJpYWJsZVN0YXRlOiBbWy9bLX5dP319LywgJ2RlbGltaXRlci50d2lnJywgJ0Bwb3AnXSwgeyBpbmNsdWRlOiAnZXhwcmVzc2lvbicgfV0sXG4gICAgICAgIHN0cmluZ1N0YXRlOiBbXG4gICAgICAgICAgICAvLyBjbG9zaW5nIGRvdWJsZSBxdW90ZWQgc3RyaW5nXG4gICAgICAgICAgICBbL1wiLywgJ3N0cmluZy50d2lnJywgJ0Bwb3AnXSxcbiAgICAgICAgICAgIC8vIGludGVycG9sYXRpb24gc3RhcnRcbiAgICAgICAgICAgIFsvI3tcXHMqLywgJ3N0cmluZy50d2lnJywgJ0BpbnRlcnBvbGF0aW9uU3RhdGUnXSxcbiAgICAgICAgICAgIC8vIHN0cmluZyBwYXJ0XG4gICAgICAgICAgICBbL1teI1wiXFxcXF0qKD86KD86XFxcXC58Iyg/IVxceykpW14jXCJcXFxcXSopKi8sICdzdHJpbmcudHdpZyddXG4gICAgICAgIF0sXG4gICAgICAgIGludGVycG9sYXRpb25TdGF0ZTogW1xuICAgICAgICAgICAgLy8gaW50ZXJwb2xhdGlvbiBlbmRcbiAgICAgICAgICAgIFsvfS8sICdzdHJpbmcudHdpZycsICdAcG9wJ10sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdleHByZXNzaW9uJyB9XG4gICAgICAgIF0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFeHByZXNzaW9uIEhhbmRsaW5nXG4gICAgICAgICAqL1xuICAgICAgICBleHByZXNzaW9uOiBbXG4gICAgICAgICAgICAvLyB3aGl0ZXNwYWNlXG4gICAgICAgICAgICBbL1xccysvXSxcbiAgICAgICAgICAgIC8vIG9wZXJhdG9ycyAtIG1hdGhcbiAgICAgICAgICAgIFsvXFwrfC18XFwvezEsMn18JXxcXCp7MSwyfS8sICdvcGVyYXRvcnMudHdpZyddLFxuICAgICAgICAgICAgLy8gb3BlcmF0b3JzIC0gbG9naWNcbiAgICAgICAgICAgIFsvKGFuZHxvcnxub3R8Yi1hbmR8Yi14b3J8Yi1vcikoXFxzKykvLCBbJ29wZXJhdG9ycy50d2lnJywgJyddXSxcbiAgICAgICAgICAgIC8vIG9wZXJhdG9ycyAtIGNvbXBhcmlzb24gKHN5bWJvbHMpXG4gICAgICAgICAgICBbLz09fCE9fDx8Pnw+PXw8PS8sICdvcGVyYXRvcnMudHdpZyddLFxuICAgICAgICAgICAgLy8gb3BlcmF0b3JzIC0gY29tcGFyaXNvbiAod29yZHMpXG4gICAgICAgICAgICBbLyhzdGFydHMgd2l0aHxlbmRzIHdpdGh8bWF0Y2hlcykoXFxzKykvLCBbJ29wZXJhdG9ycy50d2lnJywgJyddXSxcbiAgICAgICAgICAgIC8vIG9wZXJhdG9ycyAtIGNvbnRhaW5tZW50XG4gICAgICAgICAgICBbLyhpbikoXFxzKykvLCBbJ29wZXJhdG9ycy50d2lnJywgJyddXSxcbiAgICAgICAgICAgIC8vIG9wZXJhdG9ycyAtIHRlc3RcbiAgICAgICAgICAgIFsvKGlzKShcXHMrKS8sIFsnb3BlcmF0b3JzLnR3aWcnLCAnJ11dLFxuICAgICAgICAgICAgLy8gb3BlcmF0b3JzIC0gbWlzY1xuICAgICAgICAgICAgWy9cXHx8fnw6fFxcLnsxLDJ9fFxcP3sxLDJ9LywgJ29wZXJhdG9ycy50d2lnJ10sXG4gICAgICAgICAgICAvLyBuYW1lc1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9bXlxcV1xcZF1bXFx3XSovLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdAa2V5d29yZHMnOiAna2V5d29yZC50d2lnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICd2YXJpYWJsZS50d2lnJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIC8vIG51bWJlcnNcbiAgICAgICAgICAgIFsvXFxkKyhcXC5cXGQrKT8vLCAnbnVtYmVyLnR3aWcnXSxcbiAgICAgICAgICAgIC8vIHB1bmN0dWF0aW9uXG4gICAgICAgICAgICBbL1xcKHxcXCl8XFxbfFxcXXx7fH18LC8sICdkZWxpbWl0ZXIudHdpZyddLFxuICAgICAgICAgICAgLy8gc3RyaW5nc1xuICAgICAgICAgICAgWy9cIihbXiNcIlxcXFxdKig/OlxcXFwuW14jXCJcXFxcXSopKilcInxcXCcoW15cXCdcXFxcXSooPzpcXFxcLlteXFwnXFxcXF0qKSopXFwnLywgJ3N0cmluZy50d2lnJ10sXG4gICAgICAgICAgICAvLyBvcGVuaW5nIGRvdWJsZSBxdW90ZWQgc3RyaW5nXG4gICAgICAgICAgICBbL1wiLywgJ3N0cmluZy50d2lnJywgJ0BzdHJpbmdTdGF0ZSddLFxuICAgICAgICAgICAgLy8gbWlzYyBzeW50YWN0aWMgY29uc3RydWN0c1xuICAgICAgICAgICAgLy8gVGhlc2UgYXJlIG5vdCBvcGVyYXRvcnMgcGVyIHNlLCBidXQgZm9yIHRoZSBwdXJwb3NlcyBvZiBsZXhpY2FsIGFuYWx5c2lzIHdlXG4gICAgICAgICAgICAvLyBjYW4gdHJlYXQgdGhlbSBhcyBzdWNoLlxuICAgICAgICAgICAgLy8gYXJyb3cgZnVuY3Rpb25zXG4gICAgICAgICAgICBbLz0+LywgJ29wZXJhdG9ycy50d2lnJ10sXG4gICAgICAgICAgICAvLyBhc3NpZ25tZW50XG4gICAgICAgICAgICBbLz0vLCAnb3BlcmF0b3JzLnR3aWcnXVxuICAgICAgICBdLFxuICAgICAgICAvKipcbiAgICAgICAgICogSFRNTFxuICAgICAgICAgKi9cbiAgICAgICAgZG9jdHlwZTogW1xuICAgICAgICAgICAgWy9bXj5dKy8sICdtZXRhdGFnLmNvbnRlbnQuaHRtbCddLFxuICAgICAgICAgICAgWy8+LywgJ21ldGF0YWcuaHRtbCcsICdAcG9wJ11cbiAgICAgICAgXSxcbiAgICAgICAgY29tbWVudDogW1xuICAgICAgICAgICAgWy8tLT4vLCAnY29tbWVudC5odG1sJywgJ0Bwb3AnXSxcbiAgICAgICAgICAgIFsvW14tXSsvLCAnY29tbWVudC5jb250ZW50Lmh0bWwnXSxcbiAgICAgICAgICAgIFsvLi8sICdjb21tZW50LmNvbnRlbnQuaHRtbCddXG4gICAgICAgIF0sXG4gICAgICAgIG90aGVyVGFnOiBbXG4gICAgICAgICAgICBbL1xcLz8+LywgJ2RlbGltaXRlci5odG1sJywgJ0Bwb3AnXSxcbiAgICAgICAgICAgIFsvXCIoW15cIl0qKVwiLywgJ2F0dHJpYnV0ZS52YWx1ZS5odG1sJ10sXG4gICAgICAgICAgICBbLycoW14nXSopJy8sICdhdHRyaWJ1dGUudmFsdWUuaHRtbCddLFxuICAgICAgICAgICAgWy9bXFx3XFwtXSsvLCAnYXR0cmlidXRlLm5hbWUuaHRtbCddLFxuICAgICAgICAgICAgWy89LywgJ2RlbGltaXRlci5odG1sJ10sXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvXSAvLyB3aGl0ZXNwYWNlXG4gICAgICAgIF0sXG4gICAgICAgIC8vIC0tIEJFR0lOIDxzY3JpcHQ+IHRhZ3MgaGFuZGxpbmdcbiAgICAgICAgLy8gQWZ0ZXIgPHNjcmlwdFxuICAgICAgICBzY3JpcHQ6IFtcbiAgICAgICAgICAgIFsvdHlwZS8sICdhdHRyaWJ1dGUubmFtZS5odG1sJywgJ0BzY3JpcHRBZnRlclR5cGUnXSxcbiAgICAgICAgICAgIFsvXCIoW15cIl0qKVwiLywgJ2F0dHJpYnV0ZS52YWx1ZS5odG1sJ10sXG4gICAgICAgICAgICBbLycoW14nXSopJy8sICdhdHRyaWJ1dGUudmFsdWUuaHRtbCddLFxuICAgICAgICAgICAgWy9bXFx3XFwtXSsvLCAnYXR0cmlidXRlLm5hbWUuaHRtbCddLFxuICAgICAgICAgICAgWy89LywgJ2RlbGltaXRlci5odG1sJ10sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLz4vLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46ICdkZWxpbWl0ZXIuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgIG5leHQ6ICdAc2NyaXB0RW1iZWRkZWQnLFxuICAgICAgICAgICAgICAgICAgICBuZXh0RW1iZWRkZWQ6ICd0ZXh0L2phdmFzY3JpcHQnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy9dLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC8oPFxcLykoc2NyaXB0XFxzKikoPikvLFxuICAgICAgICAgICAgICAgIFsnZGVsaW1pdGVyLmh0bWwnLCAndGFnLmh0bWwnLCB7IHRva2VuOiAnZGVsaW1pdGVyLmh0bWwnLCBuZXh0OiAnQHBvcCcgfV1cbiAgICAgICAgICAgIF1cbiAgICAgICAgXSxcbiAgICAgICAgLy8gQWZ0ZXIgPHNjcmlwdCAuLi4gdHlwZVxuICAgICAgICBzY3JpcHRBZnRlclR5cGU6IFtcbiAgICAgICAgICAgIFsvPS8sICdkZWxpbWl0ZXIuaHRtbCcsICdAc2NyaXB0QWZ0ZXJUeXBlRXF1YWxzJ10sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLz4vLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46ICdkZWxpbWl0ZXIuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgIG5leHQ6ICdAc2NyaXB0RW1iZWRkZWQnLFxuICAgICAgICAgICAgICAgICAgICBuZXh0RW1iZWRkZWQ6ICd0ZXh0L2phdmFzY3JpcHQnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy9dLFxuICAgICAgICAgICAgWy88XFwvc2NyaXB0XFxzKj4vLCB7IHRva2VuOiAnQHJlbWF0Y2gnLCBuZXh0OiAnQHBvcCcgfV1cbiAgICAgICAgXSxcbiAgICAgICAgLy8gQWZ0ZXIgPHNjcmlwdCAuLi4gdHlwZSA9XG4gICAgICAgIHNjcmlwdEFmdGVyVHlwZUVxdWFsczogW1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9cIihbXlwiXSopXCIvLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46ICdhdHRyaWJ1dGUudmFsdWUuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaFRvOiAnQHNjcmlwdFdpdGhDdXN0b21UeXBlLiQxJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLycoW14nXSopJy8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ2F0dHJpYnV0ZS52YWx1ZS5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoVG86ICdAc2NyaXB0V2l0aEN1c3RvbVR5cGUuJDEnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvPi8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ2RlbGltaXRlci5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgbmV4dDogJ0BzY3JpcHRFbWJlZGRlZCcsXG4gICAgICAgICAgICAgICAgICAgIG5leHRFbWJlZGRlZDogJ3RleHQvamF2YXNjcmlwdCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rL10sXG4gICAgICAgICAgICBbLzxcXC9zY3JpcHRcXHMqPi8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIG5leHQ6ICdAcG9wJyB9XVxuICAgICAgICBdLFxuICAgICAgICAvLyBBZnRlciA8c2NyaXB0IC4uLiB0eXBlID0gJFMyXG4gICAgICAgIHNjcmlwdFdpdGhDdXN0b21UeXBlOiBbXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLz4vLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46ICdkZWxpbWl0ZXIuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgIG5leHQ6ICdAc2NyaXB0RW1iZWRkZWQuJFMyJyxcbiAgICAgICAgICAgICAgICAgICAgbmV4dEVtYmVkZGVkOiAnJFMyJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbL1wiKFteXCJdKilcIi8sICdhdHRyaWJ1dGUudmFsdWUuaHRtbCddLFxuICAgICAgICAgICAgWy8nKFteJ10qKScvLCAnYXR0cmlidXRlLnZhbHVlLmh0bWwnXSxcbiAgICAgICAgICAgIFsvW1xcd1xcLV0rLywgJ2F0dHJpYnV0ZS5uYW1lLmh0bWwnXSxcbiAgICAgICAgICAgIFsvPS8sICdkZWxpbWl0ZXIuaHRtbCddLFxuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rL10sXG4gICAgICAgICAgICBbLzxcXC9zY3JpcHRcXHMqPi8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIG5leHQ6ICdAcG9wJyB9XVxuICAgICAgICBdLFxuICAgICAgICBzY3JpcHRFbWJlZGRlZDogW1xuICAgICAgICAgICAgWy88XFwvc2NyaXB0LywgeyB0b2tlbjogJ0ByZW1hdGNoJywgbmV4dDogJ0Bwb3AnLCBuZXh0RW1iZWRkZWQ6ICdAcG9wJyB9XSxcbiAgICAgICAgICAgIFsvW148XSsvLCAnJ11cbiAgICAgICAgXSxcbiAgICAgICAgLy8gLS0gRU5EIDxzY3JpcHQ+IHRhZ3MgaGFuZGxpbmdcbiAgICAgICAgLy8gLS0gQkVHSU4gPHN0eWxlPiB0YWdzIGhhbmRsaW5nXG4gICAgICAgIC8vIEFmdGVyIDxzdHlsZVxuICAgICAgICBzdHlsZTogW1xuICAgICAgICAgICAgWy90eXBlLywgJ2F0dHJpYnV0ZS5uYW1lLmh0bWwnLCAnQHN0eWxlQWZ0ZXJUeXBlJ10sXG4gICAgICAgICAgICBbL1wiKFteXCJdKilcIi8sICdhdHRyaWJ1dGUudmFsdWUuaHRtbCddLFxuICAgICAgICAgICAgWy8nKFteJ10qKScvLCAnYXR0cmlidXRlLnZhbHVlLmh0bWwnXSxcbiAgICAgICAgICAgIFsvW1xcd1xcLV0rLywgJ2F0dHJpYnV0ZS5uYW1lLmh0bWwnXSxcbiAgICAgICAgICAgIFsvPS8sICdkZWxpbWl0ZXIuaHRtbCddLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC8+LyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiAnZGVsaW1pdGVyLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICBuZXh0OiAnQHN0eWxlRW1iZWRkZWQnLFxuICAgICAgICAgICAgICAgICAgICBuZXh0RW1iZWRkZWQ6ICd0ZXh0L2NzcydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rL10sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLyg8XFwvKShzdHlsZVxccyopKD4pLyxcbiAgICAgICAgICAgICAgICBbJ2RlbGltaXRlci5odG1sJywgJ3RhZy5odG1sJywgeyB0b2tlbjogJ2RlbGltaXRlci5odG1sJywgbmV4dDogJ0Bwb3AnIH1dXG4gICAgICAgICAgICBdXG4gICAgICAgIF0sXG4gICAgICAgIC8vIEFmdGVyIDxzdHlsZSAuLi4gdHlwZVxuICAgICAgICBzdHlsZUFmdGVyVHlwZTogW1xuICAgICAgICAgICAgWy89LywgJ2RlbGltaXRlci5odG1sJywgJ0BzdHlsZUFmdGVyVHlwZUVxdWFscyddLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC8+LyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiAnZGVsaW1pdGVyLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICBuZXh0OiAnQHN0eWxlRW1iZWRkZWQnLFxuICAgICAgICAgICAgICAgICAgICBuZXh0RW1iZWRkZWQ6ICd0ZXh0L2NzcydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rL10sXG4gICAgICAgICAgICBbLzxcXC9zdHlsZVxccyo+LywgeyB0b2tlbjogJ0ByZW1hdGNoJywgbmV4dDogJ0Bwb3AnIH1dXG4gICAgICAgIF0sXG4gICAgICAgIC8vIEFmdGVyIDxzdHlsZSAuLi4gdHlwZSA9XG4gICAgICAgIHN0eWxlQWZ0ZXJUeXBlRXF1YWxzOiBbXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL1wiKFteXCJdKilcIi8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ2F0dHJpYnV0ZS52YWx1ZS5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoVG86ICdAc3R5bGVXaXRoQ3VzdG9tVHlwZS4kMSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC8nKFteJ10qKScvLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46ICdhdHRyaWJ1dGUudmFsdWUuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaFRvOiAnQHN0eWxlV2l0aEN1c3RvbVR5cGUuJDEnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvPi8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ2RlbGltaXRlci5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgbmV4dDogJ0BzdHlsZUVtYmVkZGVkJyxcbiAgICAgICAgICAgICAgICAgICAgbmV4dEVtYmVkZGVkOiAndGV4dC9jc3MnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy9dLFxuICAgICAgICAgICAgWy88XFwvc3R5bGVcXHMqPi8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIG5leHQ6ICdAcG9wJyB9XVxuICAgICAgICBdLFxuICAgICAgICAvLyBBZnRlciA8c3R5bGUgLi4uIHR5cGUgPSAkUzJcbiAgICAgICAgc3R5bGVXaXRoQ3VzdG9tVHlwZTogW1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC8+LyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiAnZGVsaW1pdGVyLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICBuZXh0OiAnQHN0eWxlRW1iZWRkZWQuJFMyJyxcbiAgICAgICAgICAgICAgICAgICAgbmV4dEVtYmVkZGVkOiAnJFMyJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbL1wiKFteXCJdKilcIi8sICdhdHRyaWJ1dGUudmFsdWUuaHRtbCddLFxuICAgICAgICAgICAgWy8nKFteJ10qKScvLCAnYXR0cmlidXRlLnZhbHVlLmh0bWwnXSxcbiAgICAgICAgICAgIFsvW1xcd1xcLV0rLywgJ2F0dHJpYnV0ZS5uYW1lLmh0bWwnXSxcbiAgICAgICAgICAgIFsvPS8sICdkZWxpbWl0ZXIuaHRtbCddLFxuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rL10sXG4gICAgICAgICAgICBbLzxcXC9zdHlsZVxccyo+LywgeyB0b2tlbjogJ0ByZW1hdGNoJywgbmV4dDogJ0Bwb3AnIH1dXG4gICAgICAgIF0sXG4gICAgICAgIHN0eWxlRW1iZWRkZWQ6IFtcbiAgICAgICAgICAgIFsvPFxcL3N0eWxlLywgeyB0b2tlbjogJ0ByZW1hdGNoJywgbmV4dDogJ0Bwb3AnLCBuZXh0RW1iZWRkZWQ6ICdAcG9wJyB9XSxcbiAgICAgICAgICAgIFsvW148XSsvLCAnJ11cbiAgICAgICAgXVxuICAgIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9