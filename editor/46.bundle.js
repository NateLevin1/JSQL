(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[46],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/python/python.js":
/*!****************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/python/python.js ***!
  \****************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conf", function() { return conf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "language", function() { return language; });
/* harmony import */ var _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fillers/monaco-editor-core.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/fillers/monaco-editor-core.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

var conf = {
    comments: {
        lineComment: '#',
        blockComment: ["'''", "'''"]
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
        { open: '"', close: '"', notIn: ['string'] },
        { open: "'", close: "'", notIn: ['string', 'comment'] }
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
        { open: "'", close: "'" }
    ],
    onEnterRules: [
        {
            beforeText: new RegExp('^\\s*(?:def|class|for|if|elif|else|while|try|with|finally|except|async).*?:\\s*$'),
            action: { indentAction: _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_0__["languages"].IndentAction.Indent }
        }
    ],
    folding: {
        offSide: true,
        markers: {
            start: new RegExp('^\\s*#region\\b'),
            end: new RegExp('^\\s*#endregion\\b')
        }
    }
};
var language = {
    defaultToken: '',
    tokenPostfix: '.python',
    keywords: [
        // This section is the result of running
        // `for k in keyword.kwlist: print('  "' + k + '",')` in a Python REPL,
        // though note that the output from Python 3 is not a strict superset of the
        // output from Python 2.
        'False',
        'None',
        'True',
        'and',
        'as',
        'assert',
        'async',
        'await',
        'break',
        'class',
        'continue',
        'def',
        'del',
        'elif',
        'else',
        'except',
        'exec',
        'finally',
        'for',
        'from',
        'global',
        'if',
        'import',
        'in',
        'is',
        'lambda',
        'nonlocal',
        'not',
        'or',
        'pass',
        'print',
        'raise',
        'return',
        'try',
        'while',
        'with',
        'yield',
        'int',
        'float',
        'long',
        'complex',
        'hex',
        'abs',
        'all',
        'any',
        'apply',
        'basestring',
        'bin',
        'bool',
        'buffer',
        'bytearray',
        'callable',
        'chr',
        'classmethod',
        'cmp',
        'coerce',
        'compile',
        'complex',
        'delattr',
        'dict',
        'dir',
        'divmod',
        'enumerate',
        'eval',
        'execfile',
        'file',
        'filter',
        'format',
        'frozenset',
        'getattr',
        'globals',
        'hasattr',
        'hash',
        'help',
        'id',
        'input',
        'intern',
        'isinstance',
        'issubclass',
        'iter',
        'len',
        'locals',
        'list',
        'map',
        'max',
        'memoryview',
        'min',
        'next',
        'object',
        'oct',
        'open',
        'ord',
        'pow',
        'print',
        'property',
        'reversed',
        'range',
        'raw_input',
        'reduce',
        'reload',
        'repr',
        'reversed',
        'round',
        'self',
        'set',
        'setattr',
        'slice',
        'sorted',
        'staticmethod',
        'str',
        'sum',
        'super',
        'tuple',
        'type',
        'unichr',
        'unicode',
        'vars',
        'xrange',
        'zip',
        '__dict__',
        '__methods__',
        '__members__',
        '__class__',
        '__bases__',
        '__name__',
        '__mro__',
        '__subclasses__',
        '__init__',
        '__import__'
    ],
    brackets: [
        { open: '{', close: '}', token: 'delimiter.curly' },
        { open: '[', close: ']', token: 'delimiter.bracket' },
        { open: '(', close: ')', token: 'delimiter.parenthesis' }
    ],
    tokenizer: {
        root: [
            { include: '@whitespace' },
            { include: '@numbers' },
            { include: '@strings' },
            [/[,:;]/, 'delimiter'],
            [/[{}\[\]()]/, '@brackets'],
            [/@[a-zA-Z_]\w*/, 'tag'],
            [
                /[a-zA-Z_]\w*/,
                {
                    cases: {
                        '@keywords': 'keyword',
                        '@default': 'identifier'
                    }
                }
            ]
        ],
        // Deal with white space, including single and multi-line comments
        whitespace: [
            [/\s+/, 'white'],
            [/(^#.*$)/, 'comment'],
            [/'''/, 'string', '@endDocString'],
            [/"""/, 'string', '@endDblDocString']
        ],
        endDocString: [
            [/[^']+/, 'string'],
            [/\\'/, 'string'],
            [/'''/, 'string', '@popall'],
            [/'/, 'string']
        ],
        endDblDocString: [
            [/[^"]+/, 'string'],
            [/\\"/, 'string'],
            [/"""/, 'string', '@popall'],
            [/"/, 'string']
        ],
        // Recognize hex, negatives, decimals, imaginaries, longs, and scientific notation
        numbers: [
            [/-?0x([abcdef]|[ABCDEF]|\d)+[lL]?/, 'number.hex'],
            [/-?(\d*\.)?\d+([eE][+\-]?\d+)?[jJ]?[lL]?/, 'number']
        ],
        // Recognize strings, including those broken across lines with \ (but not without)
        strings: [
            [/'$/, 'string.escape', '@popall'],
            [/'/, 'string.escape', '@stringBody'],
            [/"$/, 'string.escape', '@popall'],
            [/"/, 'string.escape', '@dblStringBody']
        ],
        stringBody: [
            [/[^\\']+$/, 'string', '@popall'],
            [/[^\\']+/, 'string'],
            [/\\./, 'string'],
            [/'/, 'string.escape', '@popall'],
            [/\\$/, 'string']
        ],
        dblStringBody: [
            [/[^\\"]+$/, 'string', '@popall'],
            [/[^\\"]+/, 'string'],
            [/\\./, 'string'],
            [/"/, 'string.escape', '@popall'],
            [/\\$/, 'string']
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL3B5dGhvbi9weXRob24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDNkQ7QUFDdEQ7QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxXQUFXLEtBQUs7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsWUFBWSxHQUFHO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsMkNBQTJDO0FBQ3BELFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUyxTQUFTLFlBQVksR0FBRztBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsZUFBZSx3RUFBUztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLFlBQVksNkJBQTZCO0FBQzNELFNBQVMsb0RBQW9EO0FBQzdELFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhLHlCQUF5QjtBQUN0QyxhQUFhLHNCQUFzQjtBQUNuQyxhQUFhLHNCQUFzQjtBQUNuQyxrQkFBa0I7QUFDbEIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjQ2LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuaW1wb3J0IHsgbGFuZ3VhZ2VzIH0gZnJvbSAnLi4vZmlsbGVycy9tb25hY28tZWRpdG9yLWNvcmUuanMnO1xuZXhwb3J0IHZhciBjb25mID0ge1xuICAgIGNvbW1lbnRzOiB7XG4gICAgICAgIGxpbmVDb21tZW50OiAnIycsXG4gICAgICAgIGJsb2NrQ29tbWVudDogW1wiJycnXCIsIFwiJycnXCJdXG4gICAgfSxcbiAgICBicmFja2V0czogW1xuICAgICAgICBbJ3snLCAnfSddLFxuICAgICAgICBbJ1snLCAnXSddLFxuICAgICAgICBbJygnLCAnKSddXG4gICAgXSxcbiAgICBhdXRvQ2xvc2luZ1BhaXJzOiBbXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicsIG5vdEluOiBbJ3N0cmluZyddIH0sXG4gICAgICAgIHsgb3BlbjogXCInXCIsIGNsb3NlOiBcIidcIiwgbm90SW46IFsnc3RyaW5nJywgJ2NvbW1lbnQnXSB9XG4gICAgXSxcbiAgICBzdXJyb3VuZGluZ1BhaXJzOiBbXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfSxcbiAgICAgICAgeyBvcGVuOiBcIidcIiwgY2xvc2U6IFwiJ1wiIH1cbiAgICBdLFxuICAgIG9uRW50ZXJSdWxlczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBiZWZvcmVUZXh0OiBuZXcgUmVnRXhwKCdeXFxcXHMqKD86ZGVmfGNsYXNzfGZvcnxpZnxlbGlmfGVsc2V8d2hpbGV8dHJ5fHdpdGh8ZmluYWxseXxleGNlcHR8YXN5bmMpLio/OlxcXFxzKiQnKSxcbiAgICAgICAgICAgIGFjdGlvbjogeyBpbmRlbnRBY3Rpb246IGxhbmd1YWdlcy5JbmRlbnRBY3Rpb24uSW5kZW50IH1cbiAgICAgICAgfVxuICAgIF0sXG4gICAgZm9sZGluZzoge1xuICAgICAgICBvZmZTaWRlOiB0cnVlLFxuICAgICAgICBtYXJrZXJzOiB7XG4gICAgICAgICAgICBzdGFydDogbmV3IFJlZ0V4cCgnXlxcXFxzKiNyZWdpb25cXFxcYicpLFxuICAgICAgICAgICAgZW5kOiBuZXcgUmVnRXhwKCdeXFxcXHMqI2VuZHJlZ2lvblxcXFxiJylcbiAgICAgICAgfVxuICAgIH1cbn07XG5leHBvcnQgdmFyIGxhbmd1YWdlID0ge1xuICAgIGRlZmF1bHRUb2tlbjogJycsXG4gICAgdG9rZW5Qb3N0Zml4OiAnLnB5dGhvbicsXG4gICAga2V5d29yZHM6IFtcbiAgICAgICAgLy8gVGhpcyBzZWN0aW9uIGlzIHRoZSByZXN1bHQgb2YgcnVubmluZ1xuICAgICAgICAvLyBgZm9yIGsgaW4ga2V5d29yZC5rd2xpc3Q6IHByaW50KCcgIFwiJyArIGsgKyAnXCIsJylgIGluIGEgUHl0aG9uIFJFUEwsXG4gICAgICAgIC8vIHRob3VnaCBub3RlIHRoYXQgdGhlIG91dHB1dCBmcm9tIFB5dGhvbiAzIGlzIG5vdCBhIHN0cmljdCBzdXBlcnNldCBvZiB0aGVcbiAgICAgICAgLy8gb3V0cHV0IGZyb20gUHl0aG9uIDIuXG4gICAgICAgICdGYWxzZScsXG4gICAgICAgICdOb25lJyxcbiAgICAgICAgJ1RydWUnLFxuICAgICAgICAnYW5kJyxcbiAgICAgICAgJ2FzJyxcbiAgICAgICAgJ2Fzc2VydCcsXG4gICAgICAgICdhc3luYycsXG4gICAgICAgICdhd2FpdCcsXG4gICAgICAgICdicmVhaycsXG4gICAgICAgICdjbGFzcycsXG4gICAgICAgICdjb250aW51ZScsXG4gICAgICAgICdkZWYnLFxuICAgICAgICAnZGVsJyxcbiAgICAgICAgJ2VsaWYnLFxuICAgICAgICAnZWxzZScsXG4gICAgICAgICdleGNlcHQnLFxuICAgICAgICAnZXhlYycsXG4gICAgICAgICdmaW5hbGx5JyxcbiAgICAgICAgJ2ZvcicsXG4gICAgICAgICdmcm9tJyxcbiAgICAgICAgJ2dsb2JhbCcsXG4gICAgICAgICdpZicsXG4gICAgICAgICdpbXBvcnQnLFxuICAgICAgICAnaW4nLFxuICAgICAgICAnaXMnLFxuICAgICAgICAnbGFtYmRhJyxcbiAgICAgICAgJ25vbmxvY2FsJyxcbiAgICAgICAgJ25vdCcsXG4gICAgICAgICdvcicsXG4gICAgICAgICdwYXNzJyxcbiAgICAgICAgJ3ByaW50JyxcbiAgICAgICAgJ3JhaXNlJyxcbiAgICAgICAgJ3JldHVybicsXG4gICAgICAgICd0cnknLFxuICAgICAgICAnd2hpbGUnLFxuICAgICAgICAnd2l0aCcsXG4gICAgICAgICd5aWVsZCcsXG4gICAgICAgICdpbnQnLFxuICAgICAgICAnZmxvYXQnLFxuICAgICAgICAnbG9uZycsXG4gICAgICAgICdjb21wbGV4JyxcbiAgICAgICAgJ2hleCcsXG4gICAgICAgICdhYnMnLFxuICAgICAgICAnYWxsJyxcbiAgICAgICAgJ2FueScsXG4gICAgICAgICdhcHBseScsXG4gICAgICAgICdiYXNlc3RyaW5nJyxcbiAgICAgICAgJ2JpbicsXG4gICAgICAgICdib29sJyxcbiAgICAgICAgJ2J1ZmZlcicsXG4gICAgICAgICdieXRlYXJyYXknLFxuICAgICAgICAnY2FsbGFibGUnLFxuICAgICAgICAnY2hyJyxcbiAgICAgICAgJ2NsYXNzbWV0aG9kJyxcbiAgICAgICAgJ2NtcCcsXG4gICAgICAgICdjb2VyY2UnLFxuICAgICAgICAnY29tcGlsZScsXG4gICAgICAgICdjb21wbGV4JyxcbiAgICAgICAgJ2RlbGF0dHInLFxuICAgICAgICAnZGljdCcsXG4gICAgICAgICdkaXInLFxuICAgICAgICAnZGl2bW9kJyxcbiAgICAgICAgJ2VudW1lcmF0ZScsXG4gICAgICAgICdldmFsJyxcbiAgICAgICAgJ2V4ZWNmaWxlJyxcbiAgICAgICAgJ2ZpbGUnLFxuICAgICAgICAnZmlsdGVyJyxcbiAgICAgICAgJ2Zvcm1hdCcsXG4gICAgICAgICdmcm96ZW5zZXQnLFxuICAgICAgICAnZ2V0YXR0cicsXG4gICAgICAgICdnbG9iYWxzJyxcbiAgICAgICAgJ2hhc2F0dHInLFxuICAgICAgICAnaGFzaCcsXG4gICAgICAgICdoZWxwJyxcbiAgICAgICAgJ2lkJyxcbiAgICAgICAgJ2lucHV0JyxcbiAgICAgICAgJ2ludGVybicsXG4gICAgICAgICdpc2luc3RhbmNlJyxcbiAgICAgICAgJ2lzc3ViY2xhc3MnLFxuICAgICAgICAnaXRlcicsXG4gICAgICAgICdsZW4nLFxuICAgICAgICAnbG9jYWxzJyxcbiAgICAgICAgJ2xpc3QnLFxuICAgICAgICAnbWFwJyxcbiAgICAgICAgJ21heCcsXG4gICAgICAgICdtZW1vcnl2aWV3JyxcbiAgICAgICAgJ21pbicsXG4gICAgICAgICduZXh0JyxcbiAgICAgICAgJ29iamVjdCcsXG4gICAgICAgICdvY3QnLFxuICAgICAgICAnb3BlbicsXG4gICAgICAgICdvcmQnLFxuICAgICAgICAncG93JyxcbiAgICAgICAgJ3ByaW50JyxcbiAgICAgICAgJ3Byb3BlcnR5JyxcbiAgICAgICAgJ3JldmVyc2VkJyxcbiAgICAgICAgJ3JhbmdlJyxcbiAgICAgICAgJ3Jhd19pbnB1dCcsXG4gICAgICAgICdyZWR1Y2UnLFxuICAgICAgICAncmVsb2FkJyxcbiAgICAgICAgJ3JlcHInLFxuICAgICAgICAncmV2ZXJzZWQnLFxuICAgICAgICAncm91bmQnLFxuICAgICAgICAnc2VsZicsXG4gICAgICAgICdzZXQnLFxuICAgICAgICAnc2V0YXR0cicsXG4gICAgICAgICdzbGljZScsXG4gICAgICAgICdzb3J0ZWQnLFxuICAgICAgICAnc3RhdGljbWV0aG9kJyxcbiAgICAgICAgJ3N0cicsXG4gICAgICAgICdzdW0nLFxuICAgICAgICAnc3VwZXInLFxuICAgICAgICAndHVwbGUnLFxuICAgICAgICAndHlwZScsXG4gICAgICAgICd1bmljaHInLFxuICAgICAgICAndW5pY29kZScsXG4gICAgICAgICd2YXJzJyxcbiAgICAgICAgJ3hyYW5nZScsXG4gICAgICAgICd6aXAnLFxuICAgICAgICAnX19kaWN0X18nLFxuICAgICAgICAnX19tZXRob2RzX18nLFxuICAgICAgICAnX19tZW1iZXJzX18nLFxuICAgICAgICAnX19jbGFzc19fJyxcbiAgICAgICAgJ19fYmFzZXNfXycsXG4gICAgICAgICdfX25hbWVfXycsXG4gICAgICAgICdfX21yb19fJyxcbiAgICAgICAgJ19fc3ViY2xhc3Nlc19fJyxcbiAgICAgICAgJ19faW5pdF9fJyxcbiAgICAgICAgJ19faW1wb3J0X18nXG4gICAgXSxcbiAgICBicmFja2V0czogW1xuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JywgdG9rZW46ICdkZWxpbWl0ZXIuY3VybHknIH0sXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nLCB0b2tlbjogJ2RlbGltaXRlci5icmFja2V0JyB9LFxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJywgdG9rZW46ICdkZWxpbWl0ZXIucGFyZW50aGVzaXMnIH1cbiAgICBdLFxuICAgIHRva2VuaXplcjoge1xuICAgICAgICByb290OiBbXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAd2hpdGVzcGFjZScgfSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BudW1iZXJzJyB9LFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHN0cmluZ3MnIH0sXG4gICAgICAgICAgICBbL1ssOjtdLywgJ2RlbGltaXRlciddLFxuICAgICAgICAgICAgWy9be31cXFtcXF0oKV0vLCAnQGJyYWNrZXRzJ10sXG4gICAgICAgICAgICBbL0BbYS16QS1aX11cXHcqLywgJ3RhZyddLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9bYS16QS1aX11cXHcqLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQGtleXdvcmRzJzogJ2tleXdvcmQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ2lkZW50aWZpZXInXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIF0sXG4gICAgICAgIC8vIERlYWwgd2l0aCB3aGl0ZSBzcGFjZSwgaW5jbHVkaW5nIHNpbmdsZSBhbmQgbXVsdGktbGluZSBjb21tZW50c1xuICAgICAgICB3aGl0ZXNwYWNlOiBbXG4gICAgICAgICAgICBbL1xccysvLCAnd2hpdGUnXSxcbiAgICAgICAgICAgIFsvKF4jLiokKS8sICdjb21tZW50J10sXG4gICAgICAgICAgICBbLycnJy8sICdzdHJpbmcnLCAnQGVuZERvY1N0cmluZyddLFxuICAgICAgICAgICAgWy9cIlwiXCIvLCAnc3RyaW5nJywgJ0BlbmREYmxEb2NTdHJpbmcnXVxuICAgICAgICBdLFxuICAgICAgICBlbmREb2NTdHJpbmc6IFtcbiAgICAgICAgICAgIFsvW14nXSsvLCAnc3RyaW5nJ10sXG4gICAgICAgICAgICBbL1xcXFwnLywgJ3N0cmluZyddLFxuICAgICAgICAgICAgWy8nJycvLCAnc3RyaW5nJywgJ0Bwb3BhbGwnXSxcbiAgICAgICAgICAgIFsvJy8sICdzdHJpbmcnXVxuICAgICAgICBdLFxuICAgICAgICBlbmREYmxEb2NTdHJpbmc6IFtcbiAgICAgICAgICAgIFsvW15cIl0rLywgJ3N0cmluZyddLFxuICAgICAgICAgICAgWy9cXFxcXCIvLCAnc3RyaW5nJ10sXG4gICAgICAgICAgICBbL1wiXCJcIi8sICdzdHJpbmcnLCAnQHBvcGFsbCddLFxuICAgICAgICAgICAgWy9cIi8sICdzdHJpbmcnXVxuICAgICAgICBdLFxuICAgICAgICAvLyBSZWNvZ25pemUgaGV4LCBuZWdhdGl2ZXMsIGRlY2ltYWxzLCBpbWFnaW5hcmllcywgbG9uZ3MsIGFuZCBzY2llbnRpZmljIG5vdGF0aW9uXG4gICAgICAgIG51bWJlcnM6IFtcbiAgICAgICAgICAgIFsvLT8weChbYWJjZGVmXXxbQUJDREVGXXxcXGQpK1tsTF0/LywgJ251bWJlci5oZXgnXSxcbiAgICAgICAgICAgIFsvLT8oXFxkKlxcLik/XFxkKyhbZUVdWytcXC1dP1xcZCspP1tqSl0/W2xMXT8vLCAnbnVtYmVyJ11cbiAgICAgICAgXSxcbiAgICAgICAgLy8gUmVjb2duaXplIHN0cmluZ3MsIGluY2x1ZGluZyB0aG9zZSBicm9rZW4gYWNyb3NzIGxpbmVzIHdpdGggXFwgKGJ1dCBub3Qgd2l0aG91dClcbiAgICAgICAgc3RyaW5nczogW1xuICAgICAgICAgICAgWy8nJC8sICdzdHJpbmcuZXNjYXBlJywgJ0Bwb3BhbGwnXSxcbiAgICAgICAgICAgIFsvJy8sICdzdHJpbmcuZXNjYXBlJywgJ0BzdHJpbmdCb2R5J10sXG4gICAgICAgICAgICBbL1wiJC8sICdzdHJpbmcuZXNjYXBlJywgJ0Bwb3BhbGwnXSxcbiAgICAgICAgICAgIFsvXCIvLCAnc3RyaW5nLmVzY2FwZScsICdAZGJsU3RyaW5nQm9keSddXG4gICAgICAgIF0sXG4gICAgICAgIHN0cmluZ0JvZHk6IFtcbiAgICAgICAgICAgIFsvW15cXFxcJ10rJC8sICdzdHJpbmcnLCAnQHBvcGFsbCddLFxuICAgICAgICAgICAgWy9bXlxcXFwnXSsvLCAnc3RyaW5nJ10sXG4gICAgICAgICAgICBbL1xcXFwuLywgJ3N0cmluZyddLFxuICAgICAgICAgICAgWy8nLywgJ3N0cmluZy5lc2NhcGUnLCAnQHBvcGFsbCddLFxuICAgICAgICAgICAgWy9cXFxcJC8sICdzdHJpbmcnXVxuICAgICAgICBdLFxuICAgICAgICBkYmxTdHJpbmdCb2R5OiBbXG4gICAgICAgICAgICBbL1teXFxcXFwiXSskLywgJ3N0cmluZycsICdAcG9wYWxsJ10sXG4gICAgICAgICAgICBbL1teXFxcXFwiXSsvLCAnc3RyaW5nJ10sXG4gICAgICAgICAgICBbL1xcXFwuLywgJ3N0cmluZyddLFxuICAgICAgICAgICAgWy9cIi8sICdzdHJpbmcuZXNjYXBlJywgJ0Bwb3BhbGwnXSxcbiAgICAgICAgICAgIFsvXFxcXCQvLCAnc3RyaW5nJ11cbiAgICAgICAgXVxuICAgIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9