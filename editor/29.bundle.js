(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/less/less.js":
/*!************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/less/less.js ***!
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
    wordPattern: /(#?-?\d*\.\d\w*%?)|([@#!.:]?[\w-?]+%?)|[@#!.]/g,
    comments: {
        blockComment: ['/*', '*/'],
        lineComment: '//'
    },
    brackets: [
        ['{', '}'],
        ['[', ']'],
        ['(', ')']
    ],
    autoClosingPairs: [
        { open: '{', close: '}', notIn: ['string', 'comment'] },
        { open: '[', close: ']', notIn: ['string', 'comment'] },
        { open: '(', close: ')', notIn: ['string', 'comment'] },
        { open: '"', close: '"', notIn: ['string', 'comment'] },
        { open: "'", close: "'", notIn: ['string', 'comment'] }
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
            start: new RegExp('^\\s*\\/\\*\\s*#region\\b\\s*(.*?)\\s*\\*\\/'),
            end: new RegExp('^\\s*\\/\\*\\s*#endregion\\b.*\\*\\/')
        }
    }
};
var language = {
    defaultToken: '',
    tokenPostfix: '.less',
    identifier: '-?-?([a-zA-Z]|(\\\\(([0-9a-fA-F]{1,6}\\s?)|[^[0-9a-fA-F])))([\\w\\-]|(\\\\(([0-9a-fA-F]{1,6}\\s?)|[^[0-9a-fA-F])))*',
    identifierPlus: '-?-?([a-zA-Z:.]|(\\\\(([0-9a-fA-F]{1,6}\\s?)|[^[0-9a-fA-F])))([\\w\\-:.]|(\\\\(([0-9a-fA-F]{1,6}\\s?)|[^[0-9a-fA-F])))*',
    brackets: [
        { open: '{', close: '}', token: 'delimiter.curly' },
        { open: '[', close: ']', token: 'delimiter.bracket' },
        { open: '(', close: ')', token: 'delimiter.parenthesis' },
        { open: '<', close: '>', token: 'delimiter.angle' }
    ],
    tokenizer: {
        root: [
            { include: '@nestedJSBegin' },
            ['[ \\t\\r\\n]+', ''],
            { include: '@comments' },
            { include: '@keyword' },
            { include: '@strings' },
            { include: '@numbers' },
            ['[*_]?[a-zA-Z\\-\\s]+(?=:.*(;|(\\\\$)))', 'attribute.name', '@attribute'],
            ['url(\\-prefix)?\\(', { token: 'tag', next: '@urldeclaration' }],
            ['[{}()\\[\\]]', '@brackets'],
            ['[,:;]', 'delimiter'],
            ['#@identifierPlus', 'tag.id'],
            ['&', 'tag'],
            ['\\.@identifierPlus(?=\\()', 'tag.class', '@attribute'],
            ['\\.@identifierPlus', 'tag.class'],
            ['@identifierPlus', 'tag'],
            { include: '@operators' },
            ['@(@identifier(?=[:,\\)]))', 'variable', '@attribute'],
            ['@(@identifier)', 'variable'],
            ['@', 'key', '@atRules']
        ],
        nestedJSBegin: [
            ['``', 'delimiter.backtick'],
            [
                '`',
                {
                    token: 'delimiter.backtick',
                    next: '@nestedJSEnd',
                    nextEmbedded: 'text/javascript'
                }
            ]
        ],
        nestedJSEnd: [
            [
                '`',
                {
                    token: 'delimiter.backtick',
                    next: '@pop',
                    nextEmbedded: '@pop'
                }
            ]
        ],
        operators: [['[<>=\\+\\-\\*\\/\\^\\|\\~]', 'operator']],
        keyword: [
            [
                '(@[\\s]*import|![\\s]*important|true|false|when|iscolor|isnumber|isstring|iskeyword|isurl|ispixel|ispercentage|isem|hue|saturation|lightness|alpha|lighten|darken|saturate|desaturate|fadein|fadeout|fade|spin|mix|round|ceil|floor|percentage)\\b',
                'keyword'
            ]
        ],
        urldeclaration: [
            { include: '@strings' },
            ['[^)\r\n]+', 'string'],
            ['\\)', { token: 'tag', next: '@pop' }]
        ],
        attribute: [
            { include: '@nestedJSBegin' },
            { include: '@comments' },
            { include: '@strings' },
            { include: '@numbers' },
            { include: '@keyword' },
            ['[a-zA-Z\\-]+(?=\\()', 'attribute.value', '@attribute'],
            ['>', 'operator', '@pop'],
            ['@identifier', 'attribute.value'],
            { include: '@operators' },
            ['@(@identifier)', 'variable'],
            ['[)\\}]', '@brackets', '@pop'],
            ['[{}()\\[\\]>]', '@brackets'],
            ['[;]', 'delimiter', '@pop'],
            ['[,=:]', 'delimiter'],
            ['\\s', ''],
            ['.', 'attribute.value']
        ],
        comments: [
            ['\\/\\*', 'comment', '@comment'],
            ['\\/\\/+.*', 'comment']
        ],
        comment: [
            ['\\*\\/', 'comment', '@pop'],
            ['.', 'comment']
        ],
        numbers: [
            [
                '(\\d*\\.)?\\d+([eE][\\-+]?\\d+)?',
                { token: 'attribute.value.number', next: '@units' }
            ],
            ['#[0-9a-fA-F_]+(?!\\w)', 'attribute.value.hex']
        ],
        units: [
            [
                '(em|ex|ch|rem|vmin|vmax|vw|vh|vm|cm|mm|in|px|pt|pc|deg|grad|rad|turn|s|ms|Hz|kHz|%)?',
                'attribute.value.unit',
                '@pop'
            ]
        ],
        strings: [
            ['~?"', { token: 'string.delimiter', next: '@stringsEndDoubleQuote' }],
            ["~?'", { token: 'string.delimiter', next: '@stringsEndQuote' }]
        ],
        stringsEndDoubleQuote: [
            ['\\\\"', 'string'],
            ['"', { token: 'string.delimiter', next: '@popall' }],
            ['.', 'string']
        ],
        stringsEndQuote: [
            ["\\\\'", 'string'],
            ["'", { token: 'string.delimiter', next: '@popall' }],
            ['.', 'string']
        ],
        atRules: [
            { include: '@comments' },
            { include: '@strings' },
            ['[()]', 'delimiter'],
            ['[\\{;]', 'delimiter', '@pop'],
            ['.', 'key']
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL2xlc3MvbGVzcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLFlBQVksaUNBQWlDO0FBQy9ELFNBQVMsc0RBQXNEO0FBQy9ELFNBQVMsc0RBQXNEO0FBQy9ELFNBQVMsc0RBQXNEO0FBQy9ELFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUyxTQUFTLFlBQVksR0FBRztBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLGtEQUFrRCxJQUFJLG1EQUFtRCxJQUFJO0FBQzdHLHdEQUF3RCxJQUFJLHFEQUFxRCxJQUFJO0FBQ3JIO0FBQ0EsU0FBUyxTQUFTLFlBQVksNkJBQTZCO0FBQzNELFNBQVMsb0RBQW9EO0FBQzdELFNBQVMsd0RBQXdEO0FBQ2pFLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhLDRCQUE0QjtBQUN6QztBQUNBLGFBQWEsdUJBQXVCO0FBQ3BDLGFBQWEsc0JBQXNCO0FBQ25DLGFBQWEsc0JBQXNCO0FBQ25DLGFBQWEsc0JBQXNCO0FBQ25DLDBDQUEwQztBQUMxQyxvQ0FBb0Msd0NBQXdDO0FBQzVFLGlCQUFpQjtBQUNqQixrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsd0JBQXdCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsc0JBQXNCO0FBQ25DO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0EsYUFBYSw0QkFBNEI7QUFDekMsYUFBYSx1QkFBdUI7QUFDcEMsYUFBYSxzQkFBc0I7QUFDbkMsYUFBYSxzQkFBc0I7QUFDbkMsYUFBYSxzQkFBc0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsYUFBYSx3QkFBd0I7QUFDckM7QUFDQSxtQkFBbUI7QUFDbkIsaUJBQWlCO0FBQ2pCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw0REFBNEQ7QUFDakYscUJBQXFCLHNEQUFzRDtBQUMzRTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsNkNBQTZDO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDZDQUE2QztBQUNoRTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHVCQUF1QjtBQUNwQyxhQUFhLHNCQUFzQjtBQUNuQztBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIyOS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmV4cG9ydCB2YXIgY29uZiA9IHtcbiAgICB3b3JkUGF0dGVybjogLygjPy0/XFxkKlxcLlxcZFxcdyolPyl8KFtAIyEuOl0/W1xcdy0/XSslPyl8W0AjIS5dL2csXG4gICAgY29tbWVudHM6IHtcbiAgICAgICAgYmxvY2tDb21tZW50OiBbJy8qJywgJyovJ10sXG4gICAgICAgIGxpbmVDb21tZW50OiAnLy8nXG4gICAgfSxcbiAgICBicmFja2V0czogW1xuICAgICAgICBbJ3snLCAnfSddLFxuICAgICAgICBbJ1snLCAnXSddLFxuICAgICAgICBbJygnLCAnKSddXG4gICAgXSxcbiAgICBhdXRvQ2xvc2luZ1BhaXJzOiBbXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nLCBub3RJbjogWydzdHJpbmcnLCAnY29tbWVudCddIH0sXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nLCBub3RJbjogWydzdHJpbmcnLCAnY29tbWVudCddIH0sXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknLCBub3RJbjogWydzdHJpbmcnLCAnY29tbWVudCddIH0sXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicsIG5vdEluOiBbJ3N0cmluZycsICdjb21tZW50J10gfSxcbiAgICAgICAgeyBvcGVuOiBcIidcIiwgY2xvc2U6IFwiJ1wiLCBub3RJbjogWydzdHJpbmcnLCAnY29tbWVudCddIH1cbiAgICBdLFxuICAgIHN1cnJvdW5kaW5nUGFpcnM6IFtcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9LFxuICAgICAgICB7IG9wZW46IFwiJ1wiLCBjbG9zZTogXCInXCIgfVxuICAgIF0sXG4gICAgZm9sZGluZzoge1xuICAgICAgICBtYXJrZXJzOiB7XG4gICAgICAgICAgICBzdGFydDogbmV3IFJlZ0V4cCgnXlxcXFxzKlxcXFwvXFxcXCpcXFxccyojcmVnaW9uXFxcXGJcXFxccyooLio/KVxcXFxzKlxcXFwqXFxcXC8nKSxcbiAgICAgICAgICAgIGVuZDogbmV3IFJlZ0V4cCgnXlxcXFxzKlxcXFwvXFxcXCpcXFxccyojZW5kcmVnaW9uXFxcXGIuKlxcXFwqXFxcXC8nKVxuICAgICAgICB9XG4gICAgfVxufTtcbmV4cG9ydCB2YXIgbGFuZ3VhZ2UgPSB7XG4gICAgZGVmYXVsdFRva2VuOiAnJyxcbiAgICB0b2tlblBvc3RmaXg6ICcubGVzcycsXG4gICAgaWRlbnRpZmllcjogJy0/LT8oW2EtekEtWl18KFxcXFxcXFxcKChbMC05YS1mQS1GXXsxLDZ9XFxcXHM/KXxbXlswLTlhLWZBLUZdKSkpKFtcXFxcd1xcXFwtXXwoXFxcXFxcXFwoKFswLTlhLWZBLUZdezEsNn1cXFxccz8pfFteWzAtOWEtZkEtRl0pKSkqJyxcbiAgICBpZGVudGlmaWVyUGx1czogJy0/LT8oW2EtekEtWjouXXwoXFxcXFxcXFwoKFswLTlhLWZBLUZdezEsNn1cXFxccz8pfFteWzAtOWEtZkEtRl0pKSkoW1xcXFx3XFxcXC06Ll18KFxcXFxcXFxcKChbMC05YS1mQS1GXXsxLDZ9XFxcXHM/KXxbXlswLTlhLWZBLUZdKSkpKicsXG4gICAgYnJhY2tldHM6IFtcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScsIHRva2VuOiAnZGVsaW1pdGVyLmN1cmx5JyB9LFxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJywgdG9rZW46ICdkZWxpbWl0ZXIuYnJhY2tldCcgfSxcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScsIHRva2VuOiAnZGVsaW1pdGVyLnBhcmVudGhlc2lzJyB9LFxuICAgICAgICB7IG9wZW46ICc8JywgY2xvc2U6ICc+JywgdG9rZW46ICdkZWxpbWl0ZXIuYW5nbGUnIH1cbiAgICBdLFxuICAgIHRva2VuaXplcjoge1xuICAgICAgICByb290OiBbXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAbmVzdGVkSlNCZWdpbicgfSxcbiAgICAgICAgICAgIFsnWyBcXFxcdFxcXFxyXFxcXG5dKycsICcnXSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0Bjb21tZW50cycgfSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BrZXl3b3JkJyB9LFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHN0cmluZ3MnIH0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAbnVtYmVycycgfSxcbiAgICAgICAgICAgIFsnWypfXT9bYS16QS1aXFxcXC1cXFxcc10rKD89Oi4qKDt8KFxcXFxcXFxcJCkpKScsICdhdHRyaWJ1dGUubmFtZScsICdAYXR0cmlidXRlJ10sXG4gICAgICAgICAgICBbJ3VybChcXFxcLXByZWZpeCk/XFxcXCgnLCB7IHRva2VuOiAndGFnJywgbmV4dDogJ0B1cmxkZWNsYXJhdGlvbicgfV0sXG4gICAgICAgICAgICBbJ1t7fSgpXFxcXFtcXFxcXV0nLCAnQGJyYWNrZXRzJ10sXG4gICAgICAgICAgICBbJ1ssOjtdJywgJ2RlbGltaXRlciddLFxuICAgICAgICAgICAgWycjQGlkZW50aWZpZXJQbHVzJywgJ3RhZy5pZCddLFxuICAgICAgICAgICAgWycmJywgJ3RhZyddLFxuICAgICAgICAgICAgWydcXFxcLkBpZGVudGlmaWVyUGx1cyg/PVxcXFwoKScsICd0YWcuY2xhc3MnLCAnQGF0dHJpYnV0ZSddLFxuICAgICAgICAgICAgWydcXFxcLkBpZGVudGlmaWVyUGx1cycsICd0YWcuY2xhc3MnXSxcbiAgICAgICAgICAgIFsnQGlkZW50aWZpZXJQbHVzJywgJ3RhZyddLFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQG9wZXJhdG9ycycgfSxcbiAgICAgICAgICAgIFsnQChAaWRlbnRpZmllcig/PVs6LFxcXFwpXSkpJywgJ3ZhcmlhYmxlJywgJ0BhdHRyaWJ1dGUnXSxcbiAgICAgICAgICAgIFsnQChAaWRlbnRpZmllciknLCAndmFyaWFibGUnXSxcbiAgICAgICAgICAgIFsnQCcsICdrZXknLCAnQGF0UnVsZXMnXVxuICAgICAgICBdLFxuICAgICAgICBuZXN0ZWRKU0JlZ2luOiBbXG4gICAgICAgICAgICBbJ2BgJywgJ2RlbGltaXRlci5iYWNrdGljayddLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICdgJyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiAnZGVsaW1pdGVyLmJhY2t0aWNrJyxcbiAgICAgICAgICAgICAgICAgICAgbmV4dDogJ0BuZXN0ZWRKU0VuZCcsXG4gICAgICAgICAgICAgICAgICAgIG5leHRFbWJlZGRlZDogJ3RleHQvamF2YXNjcmlwdCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIF0sXG4gICAgICAgIG5lc3RlZEpTRW5kOiBbXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgJ2AnLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46ICdkZWxpbWl0ZXIuYmFja3RpY2snLFxuICAgICAgICAgICAgICAgICAgICBuZXh0OiAnQHBvcCcsXG4gICAgICAgICAgICAgICAgICAgIG5leHRFbWJlZGRlZDogJ0Bwb3AnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICBdLFxuICAgICAgICBvcGVyYXRvcnM6IFtbJ1s8Pj1cXFxcK1xcXFwtXFxcXCpcXFxcL1xcXFxeXFxcXHxcXFxcfl0nLCAnb3BlcmF0b3InXV0sXG4gICAgICAgIGtleXdvcmQ6IFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAnKEBbXFxcXHNdKmltcG9ydHwhW1xcXFxzXSppbXBvcnRhbnR8dHJ1ZXxmYWxzZXx3aGVufGlzY29sb3J8aXNudW1iZXJ8aXNzdHJpbmd8aXNrZXl3b3JkfGlzdXJsfGlzcGl4ZWx8aXNwZXJjZW50YWdlfGlzZW18aHVlfHNhdHVyYXRpb258bGlnaHRuZXNzfGFscGhhfGxpZ2h0ZW58ZGFya2VufHNhdHVyYXRlfGRlc2F0dXJhdGV8ZmFkZWlufGZhZGVvdXR8ZmFkZXxzcGlufG1peHxyb3VuZHxjZWlsfGZsb29yfHBlcmNlbnRhZ2UpXFxcXGInLFxuICAgICAgICAgICAgICAgICdrZXl3b3JkJ1xuICAgICAgICAgICAgXVxuICAgICAgICBdLFxuICAgICAgICB1cmxkZWNsYXJhdGlvbjogW1xuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHN0cmluZ3MnIH0sXG4gICAgICAgICAgICBbJ1teKVxcclxcbl0rJywgJ3N0cmluZyddLFxuICAgICAgICAgICAgWydcXFxcKScsIHsgdG9rZW46ICd0YWcnLCBuZXh0OiAnQHBvcCcgfV1cbiAgICAgICAgXSxcbiAgICAgICAgYXR0cmlidXRlOiBbXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAbmVzdGVkSlNCZWdpbicgfSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0Bjb21tZW50cycgfSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BzdHJpbmdzJyB9LFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQG51bWJlcnMnIH0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAa2V5d29yZCcgfSxcbiAgICAgICAgICAgIFsnW2EtekEtWlxcXFwtXSsoPz1cXFxcKCknLCAnYXR0cmlidXRlLnZhbHVlJywgJ0BhdHRyaWJ1dGUnXSxcbiAgICAgICAgICAgIFsnPicsICdvcGVyYXRvcicsICdAcG9wJ10sXG4gICAgICAgICAgICBbJ0BpZGVudGlmaWVyJywgJ2F0dHJpYnV0ZS52YWx1ZSddLFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQG9wZXJhdG9ycycgfSxcbiAgICAgICAgICAgIFsnQChAaWRlbnRpZmllciknLCAndmFyaWFibGUnXSxcbiAgICAgICAgICAgIFsnWylcXFxcfV0nLCAnQGJyYWNrZXRzJywgJ0Bwb3AnXSxcbiAgICAgICAgICAgIFsnW3t9KClcXFxcW1xcXFxdPl0nLCAnQGJyYWNrZXRzJ10sXG4gICAgICAgICAgICBbJ1s7XScsICdkZWxpbWl0ZXInLCAnQHBvcCddLFxuICAgICAgICAgICAgWydbLD06XScsICdkZWxpbWl0ZXInXSxcbiAgICAgICAgICAgIFsnXFxcXHMnLCAnJ10sXG4gICAgICAgICAgICBbJy4nLCAnYXR0cmlidXRlLnZhbHVlJ11cbiAgICAgICAgXSxcbiAgICAgICAgY29tbWVudHM6IFtcbiAgICAgICAgICAgIFsnXFxcXC9cXFxcKicsICdjb21tZW50JywgJ0Bjb21tZW50J10sXG4gICAgICAgICAgICBbJ1xcXFwvXFxcXC8rLionLCAnY29tbWVudCddXG4gICAgICAgIF0sXG4gICAgICAgIGNvbW1lbnQ6IFtcbiAgICAgICAgICAgIFsnXFxcXCpcXFxcLycsICdjb21tZW50JywgJ0Bwb3AnXSxcbiAgICAgICAgICAgIFsnLicsICdjb21tZW50J11cbiAgICAgICAgXSxcbiAgICAgICAgbnVtYmVyczogW1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICcoXFxcXGQqXFxcXC4pP1xcXFxkKyhbZUVdW1xcXFwtK10/XFxcXGQrKT8nLFxuICAgICAgICAgICAgICAgIHsgdG9rZW46ICdhdHRyaWJ1dGUudmFsdWUubnVtYmVyJywgbmV4dDogJ0B1bml0cycgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFsnI1swLTlhLWZBLUZfXSsoPyFcXFxcdyknLCAnYXR0cmlidXRlLnZhbHVlLmhleCddXG4gICAgICAgIF0sXG4gICAgICAgIHVuaXRzOiBbXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgJyhlbXxleHxjaHxyZW18dm1pbnx2bWF4fHZ3fHZofHZtfGNtfG1tfGlufHB4fHB0fHBjfGRlZ3xncmFkfHJhZHx0dXJufHN8bXN8SHp8a0h6fCUpPycsXG4gICAgICAgICAgICAgICAgJ2F0dHJpYnV0ZS52YWx1ZS51bml0JyxcbiAgICAgICAgICAgICAgICAnQHBvcCdcbiAgICAgICAgICAgIF1cbiAgICAgICAgXSxcbiAgICAgICAgc3RyaW5nczogW1xuICAgICAgICAgICAgWyd+P1wiJywgeyB0b2tlbjogJ3N0cmluZy5kZWxpbWl0ZXInLCBuZXh0OiAnQHN0cmluZ3NFbmREb3VibGVRdW90ZScgfV0sXG4gICAgICAgICAgICBbXCJ+PydcIiwgeyB0b2tlbjogJ3N0cmluZy5kZWxpbWl0ZXInLCBuZXh0OiAnQHN0cmluZ3NFbmRRdW90ZScgfV1cbiAgICAgICAgXSxcbiAgICAgICAgc3RyaW5nc0VuZERvdWJsZVF1b3RlOiBbXG4gICAgICAgICAgICBbJ1xcXFxcXFxcXCInLCAnc3RyaW5nJ10sXG4gICAgICAgICAgICBbJ1wiJywgeyB0b2tlbjogJ3N0cmluZy5kZWxpbWl0ZXInLCBuZXh0OiAnQHBvcGFsbCcgfV0sXG4gICAgICAgICAgICBbJy4nLCAnc3RyaW5nJ11cbiAgICAgICAgXSxcbiAgICAgICAgc3RyaW5nc0VuZFF1b3RlOiBbXG4gICAgICAgICAgICBbXCJcXFxcXFxcXCdcIiwgJ3N0cmluZyddLFxuICAgICAgICAgICAgW1wiJ1wiLCB7IHRva2VuOiAnc3RyaW5nLmRlbGltaXRlcicsIG5leHQ6ICdAcG9wYWxsJyB9XSxcbiAgICAgICAgICAgIFsnLicsICdzdHJpbmcnXVxuICAgICAgICBdLFxuICAgICAgICBhdFJ1bGVzOiBbXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAY29tbWVudHMnIH0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAc3RyaW5ncycgfSxcbiAgICAgICAgICAgIFsnWygpXScsICdkZWxpbWl0ZXInXSxcbiAgICAgICAgICAgIFsnW1xcXFx7O10nLCAnZGVsaW1pdGVyJywgJ0Bwb3AnXSxcbiAgICAgICAgICAgIFsnLicsICdrZXknXVxuICAgICAgICBdXG4gICAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=