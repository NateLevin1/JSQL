(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[69],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/yaml/yaml.js":
/*!************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/yaml/yaml.js ***!
  \************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conf", function() { return conf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "language", function() { return language; });
var conf = {
    comments: {
        lineComment: '#'
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
        offSide: true
    }
};
var language = {
    tokenPostfix: '.yaml',
    brackets: [
        { token: 'delimiter.bracket', open: '{', close: '}' },
        { token: 'delimiter.square', open: '[', close: ']' }
    ],
    keywords: ['true', 'True', 'TRUE', 'false', 'False', 'FALSE', 'null', 'Null', 'Null', '~'],
    numberInteger: /(?:0|[+-]?[0-9]+)/,
    numberFloat: /(?:0|[+-]?[0-9]+)(?:\.[0-9]+)?(?:e[-+][1-9][0-9]*)?/,
    numberOctal: /0o[0-7]+/,
    numberHex: /0x[0-9a-fA-F]+/,
    numberInfinity: /[+-]?\.(?:inf|Inf|INF)/,
    numberNaN: /\.(?:nan|Nan|NAN)/,
    numberDate: /\d{4}-\d\d-\d\d([Tt ]\d\d:\d\d:\d\d(\.\d+)?(( ?[+-]\d\d?(:\d\d)?)|Z)?)?/,
    escapes: /\\(?:[btnfr\\"']|[0-7][0-7]?|[0-3][0-7]{2})/,
    tokenizer: {
        root: [
            { include: '@whitespace' },
            { include: '@comment' },
            // Directive
            [/%[^ ]+.*$/, 'meta.directive'],
            // Document Markers
            [/---/, 'operators.directivesEnd'],
            [/\.{3}/, 'operators.documentEnd'],
            // Block Structure Indicators
            [/[-?:](?= )/, 'operators'],
            { include: '@anchor' },
            { include: '@tagHandle' },
            { include: '@flowCollections' },
            { include: '@blockStyle' },
            // Numbers
            [/@numberInteger(?![ \t]*\S+)/, 'number'],
            [/@numberFloat(?![ \t]*\S+)/, 'number.float'],
            [/@numberOctal(?![ \t]*\S+)/, 'number.octal'],
            [/@numberHex(?![ \t]*\S+)/, 'number.hex'],
            [/@numberInfinity(?![ \t]*\S+)/, 'number.infinity'],
            [/@numberNaN(?![ \t]*\S+)/, 'number.nan'],
            [/@numberDate(?![ \t]*\S+)/, 'number.date'],
            // Key:Value pair
            [/(".*?"|'.*?'|.*?)([ \t]*)(:)( |$)/, ['type', 'white', 'operators', 'white']],
            { include: '@flowScalars' },
            // String nodes
            [
                /.+$/,
                {
                    cases: {
                        '@keywords': 'keyword',
                        '@default': 'string'
                    }
                }
            ]
        ],
        // Flow Collection: Flow Mapping
        object: [
            { include: '@whitespace' },
            { include: '@comment' },
            // Flow Mapping termination
            [/\}/, '@brackets', '@pop'],
            // Flow Mapping delimiter
            [/,/, 'delimiter.comma'],
            // Flow Mapping Key:Value delimiter
            [/:(?= )/, 'operators'],
            // Flow Mapping Key:Value key
            [/(?:".*?"|'.*?'|[^,\{\[]+?)(?=: )/, 'type'],
            // Start Flow Style
            { include: '@flowCollections' },
            { include: '@flowScalars' },
            // Scalar Data types
            { include: '@tagHandle' },
            { include: '@anchor' },
            { include: '@flowNumber' },
            // Other value (keyword or string)
            [
                /[^\},]+/,
                {
                    cases: {
                        '@keywords': 'keyword',
                        '@default': 'string'
                    }
                }
            ]
        ],
        // Flow Collection: Flow Sequence
        array: [
            { include: '@whitespace' },
            { include: '@comment' },
            // Flow Sequence termination
            [/\]/, '@brackets', '@pop'],
            // Flow Sequence delimiter
            [/,/, 'delimiter.comma'],
            // Start Flow Style
            { include: '@flowCollections' },
            { include: '@flowScalars' },
            // Scalar Data types
            { include: '@tagHandle' },
            { include: '@anchor' },
            { include: '@flowNumber' },
            // Other value (keyword or string)
            [
                /[^\],]+/,
                {
                    cases: {
                        '@keywords': 'keyword',
                        '@default': 'string'
                    }
                }
            ]
        ],
        // First line of a Block Style
        multiString: [[/^( +).+$/, 'string', '@multiStringContinued.$1']],
        // Further lines of a Block Style
        //   Workaround for indentation detection
        multiStringContinued: [
            [
                /^( *).+$/,
                {
                    cases: {
                        '$1==$S2': 'string',
                        '@default': { token: '@rematch', next: '@popall' }
                    }
                }
            ]
        ],
        whitespace: [[/[ \t\r\n]+/, 'white']],
        // Only line comments
        comment: [[/#.*$/, 'comment']],
        // Start Flow Collections
        flowCollections: [
            [/\[/, '@brackets', '@array'],
            [/\{/, '@brackets', '@object']
        ],
        // Start Flow Scalars (quoted strings)
        flowScalars: [
            [/"([^"\\]|\\.)*$/, 'string.invalid'],
            [/'([^'\\]|\\.)*$/, 'string.invalid'],
            [/'[^']*'/, 'string'],
            [/"/, 'string', '@doubleQuotedString']
        ],
        doubleQuotedString: [
            [/[^\\"]+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/\\./, 'string.escape.invalid'],
            [/"/, 'string', '@pop']
        ],
        // Start Block Scalar
        blockStyle: [[/[>|][0-9]*[+-]?$/, 'operators', '@multiString']],
        // Numbers in Flow Collections (terminate with ,]})
        flowNumber: [
            [/@numberInteger(?=[ \t]*[,\]\}])/, 'number'],
            [/@numberFloat(?=[ \t]*[,\]\}])/, 'number.float'],
            [/@numberOctal(?=[ \t]*[,\]\}])/, 'number.octal'],
            [/@numberHex(?=[ \t]*[,\]\}])/, 'number.hex'],
            [/@numberInfinity(?=[ \t]*[,\]\}])/, 'number.infinity'],
            [/@numberNaN(?=[ \t]*[,\]\}])/, 'number.nan'],
            [/@numberDate(?=[ \t]*[,\]\}])/, 'number.date']
        ],
        tagHandle: [[/\![^ ]*/, 'tag']],
        anchor: [[/[&*][^ ]+/, 'namespace']]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL3lhbWwveWFtbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLFlBQVksR0FBRztBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVMsU0FBUyxZQUFZLEdBQUc7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxTQUFTLHFDQUFxQyxZQUFZLEdBQUc7QUFDN0QsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsRUFBRTtBQUN0QixzREFBc0QsRUFBRTtBQUN4RDtBQUNBO0FBQ0EsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSxzQkFBc0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsRUFBRTtBQUNuQjtBQUNBO0FBQ0EsYUFBYSxxQkFBcUI7QUFDbEMsYUFBYSx3QkFBd0I7QUFDckMsYUFBYSw4QkFBOEI7QUFDM0MsYUFBYSx5QkFBeUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLDBCQUEwQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEseUJBQXlCO0FBQ3RDLGFBQWEsc0JBQXNCO0FBQ25DO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQSxhQUFhLDhCQUE4QjtBQUMzQyxhQUFhLDBCQUEwQjtBQUN2QztBQUNBLGFBQWEsd0JBQXdCO0FBQ3JDLGFBQWEscUJBQXFCO0FBQ2xDLGFBQWEseUJBQXlCO0FBQ3RDO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHlCQUF5QjtBQUN0QyxhQUFhLHNCQUFzQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSw4QkFBOEI7QUFDM0MsYUFBYSwwQkFBMEI7QUFDdkM7QUFDQSxhQUFhLHdCQUF3QjtBQUNyQyxhQUFhLHFCQUFxQjtBQUNsQyxhQUFhLHlCQUF5QjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQ7QUFDMUQ7QUFDQSwyQ0FBMkM7QUFDM0MseUNBQXlDO0FBQ3pDLHlDQUF5QztBQUN6Qyx1Q0FBdUM7QUFDdkMsNENBQTRDO0FBQzVDLHVDQUF1QztBQUN2Qyx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiI2OS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgdmFyIGNvbmYgPSB7XG4gICAgY29tbWVudHM6IHtcbiAgICAgICAgbGluZUNvbW1lbnQ6ICcjJ1xuICAgIH0sXG4gICAgYnJhY2tldHM6IFtcbiAgICAgICAgWyd7JywgJ30nXSxcbiAgICAgICAgWydbJywgJ10nXSxcbiAgICAgICAgWycoJywgJyknXVxuICAgIF0sXG4gICAgYXV0b0Nsb3NpbmdQYWlyczogW1xuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH0sXG4gICAgICAgIHsgb3BlbjogXCInXCIsIGNsb3NlOiBcIidcIiB9XG4gICAgXSxcbiAgICBzdXJyb3VuZGluZ1BhaXJzOiBbXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfSxcbiAgICAgICAgeyBvcGVuOiBcIidcIiwgY2xvc2U6IFwiJ1wiIH1cbiAgICBdLFxuICAgIGZvbGRpbmc6IHtcbiAgICAgICAgb2ZmU2lkZTogdHJ1ZVxuICAgIH1cbn07XG5leHBvcnQgdmFyIGxhbmd1YWdlID0ge1xuICAgIHRva2VuUG9zdGZpeDogJy55YW1sJyxcbiAgICBicmFja2V0czogW1xuICAgICAgICB7IHRva2VuOiAnZGVsaW1pdGVyLmJyYWNrZXQnLCBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcbiAgICAgICAgeyB0b2tlbjogJ2RlbGltaXRlci5zcXVhcmUnLCBvcGVuOiAnWycsIGNsb3NlOiAnXScgfVxuICAgIF0sXG4gICAga2V5d29yZHM6IFsndHJ1ZScsICdUcnVlJywgJ1RSVUUnLCAnZmFsc2UnLCAnRmFsc2UnLCAnRkFMU0UnLCAnbnVsbCcsICdOdWxsJywgJ051bGwnLCAnfiddLFxuICAgIG51bWJlckludGVnZXI6IC8oPzowfFsrLV0/WzAtOV0rKS8sXG4gICAgbnVtYmVyRmxvYXQ6IC8oPzowfFsrLV0/WzAtOV0rKSg/OlxcLlswLTldKyk/KD86ZVstK11bMS05XVswLTldKik/LyxcbiAgICBudW1iZXJPY3RhbDogLzBvWzAtN10rLyxcbiAgICBudW1iZXJIZXg6IC8weFswLTlhLWZBLUZdKy8sXG4gICAgbnVtYmVySW5maW5pdHk6IC9bKy1dP1xcLig/OmluZnxJbmZ8SU5GKS8sXG4gICAgbnVtYmVyTmFOOiAvXFwuKD86bmFufE5hbnxOQU4pLyxcbiAgICBudW1iZXJEYXRlOiAvXFxkezR9LVxcZFxcZC1cXGRcXGQoW1R0IF1cXGRcXGQ6XFxkXFxkOlxcZFxcZChcXC5cXGQrKT8oKCA/WystXVxcZFxcZD8oOlxcZFxcZCk/KXxaKT8pPy8sXG4gICAgZXNjYXBlczogL1xcXFwoPzpbYnRuZnJcXFxcXCInXXxbMC03XVswLTddP3xbMC0zXVswLTddezJ9KS8sXG4gICAgdG9rZW5pemVyOiB7XG4gICAgICAgIHJvb3Q6IFtcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B3aGl0ZXNwYWNlJyB9LFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGNvbW1lbnQnIH0sXG4gICAgICAgICAgICAvLyBEaXJlY3RpdmVcbiAgICAgICAgICAgIFsvJVteIF0rLiokLywgJ21ldGEuZGlyZWN0aXZlJ10sXG4gICAgICAgICAgICAvLyBEb2N1bWVudCBNYXJrZXJzXG4gICAgICAgICAgICBbLy0tLS8sICdvcGVyYXRvcnMuZGlyZWN0aXZlc0VuZCddLFxuICAgICAgICAgICAgWy9cXC57M30vLCAnb3BlcmF0b3JzLmRvY3VtZW50RW5kJ10sXG4gICAgICAgICAgICAvLyBCbG9jayBTdHJ1Y3R1cmUgSW5kaWNhdG9yc1xuICAgICAgICAgICAgWy9bLT86XSg/PSApLywgJ29wZXJhdG9ycyddLFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGFuY2hvcicgfSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B0YWdIYW5kbGUnIH0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAZmxvd0NvbGxlY3Rpb25zJyB9LFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGJsb2NrU3R5bGUnIH0sXG4gICAgICAgICAgICAvLyBOdW1iZXJzXG4gICAgICAgICAgICBbL0BudW1iZXJJbnRlZ2VyKD8hWyBcXHRdKlxcUyspLywgJ251bWJlciddLFxuICAgICAgICAgICAgWy9AbnVtYmVyRmxvYXQoPyFbIFxcdF0qXFxTKykvLCAnbnVtYmVyLmZsb2F0J10sXG4gICAgICAgICAgICBbL0BudW1iZXJPY3RhbCg/IVsgXFx0XSpcXFMrKS8sICdudW1iZXIub2N0YWwnXSxcbiAgICAgICAgICAgIFsvQG51bWJlckhleCg/IVsgXFx0XSpcXFMrKS8sICdudW1iZXIuaGV4J10sXG4gICAgICAgICAgICBbL0BudW1iZXJJbmZpbml0eSg/IVsgXFx0XSpcXFMrKS8sICdudW1iZXIuaW5maW5pdHknXSxcbiAgICAgICAgICAgIFsvQG51bWJlck5hTig/IVsgXFx0XSpcXFMrKS8sICdudW1iZXIubmFuJ10sXG4gICAgICAgICAgICBbL0BudW1iZXJEYXRlKD8hWyBcXHRdKlxcUyspLywgJ251bWJlci5kYXRlJ10sXG4gICAgICAgICAgICAvLyBLZXk6VmFsdWUgcGFpclxuICAgICAgICAgICAgWy8oXCIuKj9cInwnLio/J3wuKj8pKFsgXFx0XSopKDopKCB8JCkvLCBbJ3R5cGUnLCAnd2hpdGUnLCAnb3BlcmF0b3JzJywgJ3doaXRlJ11dLFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGZsb3dTY2FsYXJzJyB9LFxuICAgICAgICAgICAgLy8gU3RyaW5nIG5vZGVzXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLy4rJC8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0BrZXl3b3Jkcyc6ICdrZXl3b3JkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIF0sXG4gICAgICAgIC8vIEZsb3cgQ29sbGVjdGlvbjogRmxvdyBNYXBwaW5nXG4gICAgICAgIG9iamVjdDogW1xuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHdoaXRlc3BhY2UnIH0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAY29tbWVudCcgfSxcbiAgICAgICAgICAgIC8vIEZsb3cgTWFwcGluZyB0ZXJtaW5hdGlvblxuICAgICAgICAgICAgWy9cXH0vLCAnQGJyYWNrZXRzJywgJ0Bwb3AnXSxcbiAgICAgICAgICAgIC8vIEZsb3cgTWFwcGluZyBkZWxpbWl0ZXJcbiAgICAgICAgICAgIFsvLC8sICdkZWxpbWl0ZXIuY29tbWEnXSxcbiAgICAgICAgICAgIC8vIEZsb3cgTWFwcGluZyBLZXk6VmFsdWUgZGVsaW1pdGVyXG4gICAgICAgICAgICBbLzooPz0gKS8sICdvcGVyYXRvcnMnXSxcbiAgICAgICAgICAgIC8vIEZsb3cgTWFwcGluZyBLZXk6VmFsdWUga2V5XG4gICAgICAgICAgICBbLyg/OlwiLio/XCJ8Jy4qPyd8W14sXFx7XFxbXSs/KSg/PTogKS8sICd0eXBlJ10sXG4gICAgICAgICAgICAvLyBTdGFydCBGbG93IFN0eWxlXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAZmxvd0NvbGxlY3Rpb25zJyB9LFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGZsb3dTY2FsYXJzJyB9LFxuICAgICAgICAgICAgLy8gU2NhbGFyIERhdGEgdHlwZXNcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B0YWdIYW5kbGUnIH0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAYW5jaG9yJyB9LFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGZsb3dOdW1iZXInIH0sXG4gICAgICAgICAgICAvLyBPdGhlciB2YWx1ZSAoa2V5d29yZCBvciBzdHJpbmcpXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL1teXFx9LF0rLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQGtleXdvcmRzJzogJ2tleXdvcmQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ3N0cmluZydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgXSxcbiAgICAgICAgLy8gRmxvdyBDb2xsZWN0aW9uOiBGbG93IFNlcXVlbmNlXG4gICAgICAgIGFycmF5OiBbXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAd2hpdGVzcGFjZScgfSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0Bjb21tZW50JyB9LFxuICAgICAgICAgICAgLy8gRmxvdyBTZXF1ZW5jZSB0ZXJtaW5hdGlvblxuICAgICAgICAgICAgWy9cXF0vLCAnQGJyYWNrZXRzJywgJ0Bwb3AnXSxcbiAgICAgICAgICAgIC8vIEZsb3cgU2VxdWVuY2UgZGVsaW1pdGVyXG4gICAgICAgICAgICBbLywvLCAnZGVsaW1pdGVyLmNvbW1hJ10sXG4gICAgICAgICAgICAvLyBTdGFydCBGbG93IFN0eWxlXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAZmxvd0NvbGxlY3Rpb25zJyB9LFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGZsb3dTY2FsYXJzJyB9LFxuICAgICAgICAgICAgLy8gU2NhbGFyIERhdGEgdHlwZXNcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B0YWdIYW5kbGUnIH0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAYW5jaG9yJyB9LFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGZsb3dOdW1iZXInIH0sXG4gICAgICAgICAgICAvLyBPdGhlciB2YWx1ZSAoa2V5d29yZCBvciBzdHJpbmcpXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL1teXFxdLF0rLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQGtleXdvcmRzJzogJ2tleXdvcmQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ3N0cmluZydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgXSxcbiAgICAgICAgLy8gRmlyc3QgbGluZSBvZiBhIEJsb2NrIFN0eWxlXG4gICAgICAgIG11bHRpU3RyaW5nOiBbWy9eKCArKS4rJC8sICdzdHJpbmcnLCAnQG11bHRpU3RyaW5nQ29udGludWVkLiQxJ11dLFxuICAgICAgICAvLyBGdXJ0aGVyIGxpbmVzIG9mIGEgQmxvY2sgU3R5bGVcbiAgICAgICAgLy8gICBXb3JrYXJvdW5kIGZvciBpbmRlbnRhdGlvbiBkZXRlY3Rpb25cbiAgICAgICAgbXVsdGlTdHJpbmdDb250aW51ZWQ6IFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvXiggKikuKyQvLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICckMT09JFMyJzogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiB7IHRva2VuOiAnQHJlbWF0Y2gnLCBuZXh0OiAnQHBvcGFsbCcgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICBdLFxuICAgICAgICB3aGl0ZXNwYWNlOiBbWy9bIFxcdFxcclxcbl0rLywgJ3doaXRlJ11dLFxuICAgICAgICAvLyBPbmx5IGxpbmUgY29tbWVudHNcbiAgICAgICAgY29tbWVudDogW1svIy4qJC8sICdjb21tZW50J11dLFxuICAgICAgICAvLyBTdGFydCBGbG93IENvbGxlY3Rpb25zXG4gICAgICAgIGZsb3dDb2xsZWN0aW9uczogW1xuICAgICAgICAgICAgWy9cXFsvLCAnQGJyYWNrZXRzJywgJ0BhcnJheSddLFxuICAgICAgICAgICAgWy9cXHsvLCAnQGJyYWNrZXRzJywgJ0BvYmplY3QnXVxuICAgICAgICBdLFxuICAgICAgICAvLyBTdGFydCBGbG93IFNjYWxhcnMgKHF1b3RlZCBzdHJpbmdzKVxuICAgICAgICBmbG93U2NhbGFyczogW1xuICAgICAgICAgICAgWy9cIihbXlwiXFxcXF18XFxcXC4pKiQvLCAnc3RyaW5nLmludmFsaWQnXSxcbiAgICAgICAgICAgIFsvJyhbXidcXFxcXXxcXFxcLikqJC8sICdzdHJpbmcuaW52YWxpZCddLFxuICAgICAgICAgICAgWy8nW14nXSonLywgJ3N0cmluZyddLFxuICAgICAgICAgICAgWy9cIi8sICdzdHJpbmcnLCAnQGRvdWJsZVF1b3RlZFN0cmluZyddXG4gICAgICAgIF0sXG4gICAgICAgIGRvdWJsZVF1b3RlZFN0cmluZzogW1xuICAgICAgICAgICAgWy9bXlxcXFxcIl0rLywgJ3N0cmluZyddLFxuICAgICAgICAgICAgWy9AZXNjYXBlcy8sICdzdHJpbmcuZXNjYXBlJ10sXG4gICAgICAgICAgICBbL1xcXFwuLywgJ3N0cmluZy5lc2NhcGUuaW52YWxpZCddLFxuICAgICAgICAgICAgWy9cIi8sICdzdHJpbmcnLCAnQHBvcCddXG4gICAgICAgIF0sXG4gICAgICAgIC8vIFN0YXJ0IEJsb2NrIFNjYWxhclxuICAgICAgICBibG9ja1N0eWxlOiBbWy9bPnxdWzAtOV0qWystXT8kLywgJ29wZXJhdG9ycycsICdAbXVsdGlTdHJpbmcnXV0sXG4gICAgICAgIC8vIE51bWJlcnMgaW4gRmxvdyBDb2xsZWN0aW9ucyAodGVybWluYXRlIHdpdGggLF19KVxuICAgICAgICBmbG93TnVtYmVyOiBbXG4gICAgICAgICAgICBbL0BudW1iZXJJbnRlZ2VyKD89WyBcXHRdKlssXFxdXFx9XSkvLCAnbnVtYmVyJ10sXG4gICAgICAgICAgICBbL0BudW1iZXJGbG9hdCg/PVsgXFx0XSpbLFxcXVxcfV0pLywgJ251bWJlci5mbG9hdCddLFxuICAgICAgICAgICAgWy9AbnVtYmVyT2N0YWwoPz1bIFxcdF0qWyxcXF1cXH1dKS8sICdudW1iZXIub2N0YWwnXSxcbiAgICAgICAgICAgIFsvQG51bWJlckhleCg/PVsgXFx0XSpbLFxcXVxcfV0pLywgJ251bWJlci5oZXgnXSxcbiAgICAgICAgICAgIFsvQG51bWJlckluZmluaXR5KD89WyBcXHRdKlssXFxdXFx9XSkvLCAnbnVtYmVyLmluZmluaXR5J10sXG4gICAgICAgICAgICBbL0BudW1iZXJOYU4oPz1bIFxcdF0qWyxcXF1cXH1dKS8sICdudW1iZXIubmFuJ10sXG4gICAgICAgICAgICBbL0BudW1iZXJEYXRlKD89WyBcXHRdKlssXFxdXFx9XSkvLCAnbnVtYmVyLmRhdGUnXVxuICAgICAgICBdLFxuICAgICAgICB0YWdIYW5kbGU6IFtbL1xcIVteIF0qLywgJ3RhZyddXSxcbiAgICAgICAgYW5jaG9yOiBbWy9bJipdW14gXSsvLCAnbmFtZXNwYWNlJ11dXG4gICAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=