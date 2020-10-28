(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[64],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/tcl/tcl.js":
/*!**********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/tcl/tcl.js ***!
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
    ]
};
var language = {
    tokenPostfix: '.tcl',
    specialFunctions: [
        'set',
        'unset',
        'rename',
        'variable',
        'proc',
        'coroutine',
        'foreach',
        'incr',
        'append',
        'lappend',
        'linsert',
        'lreplace'
    ],
    mainFunctions: [
        'if',
        'then',
        'elseif',
        'else',
        'case',
        'switch',
        'while',
        'for',
        'break',
        'continue',
        'return',
        'package',
        'namespace',
        'catch',
        'exit',
        'eval',
        'expr',
        'uplevel',
        'upvar'
    ],
    builtinFunctions: [
        'file',
        'info',
        'concat',
        'join',
        'lindex',
        'list',
        'llength',
        'lrange',
        'lsearch',
        'lsort',
        'split',
        'array',
        'parray',
        'binary',
        'format',
        'regexp',
        'regsub',
        'scan',
        'string',
        'subst',
        'dict',
        'cd',
        'clock',
        'exec',
        'glob',
        'pid',
        'pwd',
        'close',
        'eof',
        'fblocked',
        'fconfigure',
        'fcopy',
        'fileevent',
        'flush',
        'gets',
        'open',
        'puts',
        'read',
        'seek',
        'socket',
        'tell',
        'interp',
        'after',
        'auto_execok',
        'auto_load',
        'auto_mkindex',
        'auto_reset',
        'bgerror',
        'error',
        'global',
        'history',
        'load',
        'source',
        'time',
        'trace',
        'unknown',
        'unset',
        'update',
        'vwait',
        'winfo',
        'wm',
        'bind',
        'event',
        'pack',
        'place',
        'grid',
        'font',
        'bell',
        'clipboard',
        'destroy',
        'focus',
        'grab',
        'lower',
        'option',
        'raise',
        'selection',
        'send',
        'tk',
        'tkwait',
        'tk_bisque',
        'tk_focusNext',
        'tk_focusPrev',
        'tk_focusFollowsMouse',
        'tk_popup',
        'tk_setPalette'
    ],
    symbols: /[=><!~?:&|+\-*\/\^%]+/,
    brackets: [
        { open: '(', close: ')', token: 'delimiter.parenthesis' },
        { open: '{', close: '}', token: 'delimiter.curly' },
        { open: '[', close: ']', token: 'delimiter.square' }
    ],
    escapes: /\\(?:[abfnrtv\\"'\[\]\{\};\$]|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    variables: /(?:\$+(?:(?:\:\:?)?[a-zA-Z_]\w*)+)/,
    tokenizer: {
        root: [
            // identifiers and keywords
            [
                /[a-zA-Z_]\w*/,
                {
                    cases: {
                        '@specialFunctions': {
                            token: 'keyword.flow',
                            next: '@specialFunc'
                        },
                        '@mainFunctions': 'keyword',
                        '@builtinFunctions': 'variable',
                        '@default': 'operator.scss'
                    }
                }
            ],
            [/\s+\-+(?!\d|\.)\w*|{\*}/, 'metatag'],
            // whitespace
            { include: '@whitespace' },
            // delimiters and operators
            [/[{}()\[\]]/, '@brackets'],
            [/@symbols/, 'operator'],
            [/\$+(?:\:\:)?\{/, { token: 'identifier', next: '@nestedVariable' }],
            [/@variables/, 'type.identifier'],
            [/\.(?!\d|\.)[\w\-]*/, 'operator.sql'],
            // numbers
            [/\d+(\.\d+)?/, 'number'],
            [/\d+/, 'number'],
            // delimiter
            [/;/, 'delimiter'],
            // strings
            [/"/, { token: 'string.quote', bracket: '@open', next: '@dstring' }],
            [/'/, { token: 'string.quote', bracket: '@open', next: '@sstring' }]
        ],
        dstring: [
            [/\[/, { token: '@brackets', next: '@nestedCall' }],
            [/\$+(?:\:\:)?\{/, { token: 'identifier', next: '@nestedVariable' }],
            [/@variables/, 'type.identifier'],
            [/[^\\$\[\]"]+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/"/, { token: 'string.quote', bracket: '@close', next: '@pop' }]
        ],
        sstring: [
            [/\[/, { token: '@brackets', next: '@nestedCall' }],
            [/\$+(?:\:\:)?\{/, { token: 'identifier', next: '@nestedVariable' }],
            [/@variables/, 'type.identifier'],
            [/[^\\$\[\]']+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/'/, { token: 'string.quote', bracket: '@close', next: '@pop' }]
        ],
        whitespace: [
            [/[ \t\r\n]+/, 'white'],
            [/#.*\\$/, { token: 'comment', next: '@newlineComment' }],
            [/#.*(?!\\)$/, 'comment']
        ],
        newlineComment: [
            [/.*\\$/, 'comment'],
            [/.*(?!\\)$/, { token: 'comment', next: '@pop' }]
        ],
        nestedVariable: [
            [/[^\{\}\$]+/, 'type.identifier'],
            [/\}/, { token: 'identifier', next: '@pop' }]
        ],
        nestedCall: [
            [/\[/, { token: '@brackets', next: '@nestedCall' }],
            [/\]/, { token: '@brackets', next: '@pop' }],
            { include: 'root' }
        ],
        specialFunc: [
            [/"/, { token: 'string', next: '@dstring' }],
            [/'/, { token: 'string', next: '@sstring' }],
            [/\S+/, { token: 'type', next: '@pop' }]
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL3RjbC90Y2wuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLFdBQVcsS0FBSztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxZQUFZLEdBQUc7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTLFNBQVMsWUFBWSxHQUFHO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVM7QUFDVDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyx3REFBd0Q7QUFDakUsU0FBUyxTQUFTLFlBQVksNkJBQTZCO0FBQzNELFNBQVM7QUFDVDtBQUNBLHFDQUFxQyxHQUFHLGlCQUFpQixJQUFJLGNBQWMsRUFBRSxjQUFjLEVBQUU7QUFDN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsR0FBRztBQUNyQztBQUNBLGFBQWEseUJBQXlCO0FBQ3RDO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsNEJBQTRCLElBQUksK0NBQStDO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBLG1CQUFtQiw0REFBNEQ7QUFDL0UsbUJBQW1CLDREQUE0RDtBQUMvRTtBQUNBO0FBQ0Esb0JBQW9CLDBDQUEwQztBQUM5RCw0QkFBNEIsSUFBSSwrQ0FBK0M7QUFDL0U7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHlEQUF5RDtBQUM1RTtBQUNBO0FBQ0Esb0JBQW9CLDBDQUEwQztBQUM5RCw0QkFBNEIsSUFBSSwrQ0FBK0M7QUFDL0U7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHlEQUF5RDtBQUM1RTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsNENBQTRDO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGlDQUFpQztBQUM1RDtBQUNBO0FBQ0Esa0JBQWtCLEVBQUU7QUFDcEIsZ0JBQWdCLElBQUksb0NBQW9DO0FBQ3hEO0FBQ0E7QUFDQSxvQkFBb0IsMENBQTBDO0FBQzlELG9CQUFvQixtQ0FBbUM7QUFDdkQsYUFBYTtBQUNiO0FBQ0E7QUFDQSxtQkFBbUIsb0NBQW9DO0FBQ3ZELG1CQUFtQixvQ0FBb0M7QUFDdkQscUJBQXFCLDhCQUE4QjtBQUNuRDtBQUNBO0FBQ0EiLCJmaWxlIjoiNjQuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5leHBvcnQgdmFyIGNvbmYgPSB7XG4gICAgYnJhY2tldHM6IFtcbiAgICAgICAgWyd7JywgJ30nXSxcbiAgICAgICAgWydbJywgJ10nXSxcbiAgICAgICAgWycoJywgJyknXVxuICAgIF0sXG4gICAgYXV0b0Nsb3NpbmdQYWlyczogW1xuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH0sXG4gICAgICAgIHsgb3BlbjogXCInXCIsIGNsb3NlOiBcIidcIiB9XG4gICAgXSxcbiAgICBzdXJyb3VuZGluZ1BhaXJzOiBbXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfSxcbiAgICAgICAgeyBvcGVuOiBcIidcIiwgY2xvc2U6IFwiJ1wiIH1cbiAgICBdXG59O1xuZXhwb3J0IHZhciBsYW5ndWFnZSA9IHtcbiAgICB0b2tlblBvc3RmaXg6ICcudGNsJyxcbiAgICBzcGVjaWFsRnVuY3Rpb25zOiBbXG4gICAgICAgICdzZXQnLFxuICAgICAgICAndW5zZXQnLFxuICAgICAgICAncmVuYW1lJyxcbiAgICAgICAgJ3ZhcmlhYmxlJyxcbiAgICAgICAgJ3Byb2MnLFxuICAgICAgICAnY29yb3V0aW5lJyxcbiAgICAgICAgJ2ZvcmVhY2gnLFxuICAgICAgICAnaW5jcicsXG4gICAgICAgICdhcHBlbmQnLFxuICAgICAgICAnbGFwcGVuZCcsXG4gICAgICAgICdsaW5zZXJ0JyxcbiAgICAgICAgJ2xyZXBsYWNlJ1xuICAgIF0sXG4gICAgbWFpbkZ1bmN0aW9uczogW1xuICAgICAgICAnaWYnLFxuICAgICAgICAndGhlbicsXG4gICAgICAgICdlbHNlaWYnLFxuICAgICAgICAnZWxzZScsXG4gICAgICAgICdjYXNlJyxcbiAgICAgICAgJ3N3aXRjaCcsXG4gICAgICAgICd3aGlsZScsXG4gICAgICAgICdmb3InLFxuICAgICAgICAnYnJlYWsnLFxuICAgICAgICAnY29udGludWUnLFxuICAgICAgICAncmV0dXJuJyxcbiAgICAgICAgJ3BhY2thZ2UnLFxuICAgICAgICAnbmFtZXNwYWNlJyxcbiAgICAgICAgJ2NhdGNoJyxcbiAgICAgICAgJ2V4aXQnLFxuICAgICAgICAnZXZhbCcsXG4gICAgICAgICdleHByJyxcbiAgICAgICAgJ3VwbGV2ZWwnLFxuICAgICAgICAndXB2YXInXG4gICAgXSxcbiAgICBidWlsdGluRnVuY3Rpb25zOiBbXG4gICAgICAgICdmaWxlJyxcbiAgICAgICAgJ2luZm8nLFxuICAgICAgICAnY29uY2F0JyxcbiAgICAgICAgJ2pvaW4nLFxuICAgICAgICAnbGluZGV4JyxcbiAgICAgICAgJ2xpc3QnLFxuICAgICAgICAnbGxlbmd0aCcsXG4gICAgICAgICdscmFuZ2UnLFxuICAgICAgICAnbHNlYXJjaCcsXG4gICAgICAgICdsc29ydCcsXG4gICAgICAgICdzcGxpdCcsXG4gICAgICAgICdhcnJheScsXG4gICAgICAgICdwYXJyYXknLFxuICAgICAgICAnYmluYXJ5JyxcbiAgICAgICAgJ2Zvcm1hdCcsXG4gICAgICAgICdyZWdleHAnLFxuICAgICAgICAncmVnc3ViJyxcbiAgICAgICAgJ3NjYW4nLFxuICAgICAgICAnc3RyaW5nJyxcbiAgICAgICAgJ3N1YnN0JyxcbiAgICAgICAgJ2RpY3QnLFxuICAgICAgICAnY2QnLFxuICAgICAgICAnY2xvY2snLFxuICAgICAgICAnZXhlYycsXG4gICAgICAgICdnbG9iJyxcbiAgICAgICAgJ3BpZCcsXG4gICAgICAgICdwd2QnLFxuICAgICAgICAnY2xvc2UnLFxuICAgICAgICAnZW9mJyxcbiAgICAgICAgJ2ZibG9ja2VkJyxcbiAgICAgICAgJ2Zjb25maWd1cmUnLFxuICAgICAgICAnZmNvcHknLFxuICAgICAgICAnZmlsZWV2ZW50JyxcbiAgICAgICAgJ2ZsdXNoJyxcbiAgICAgICAgJ2dldHMnLFxuICAgICAgICAnb3BlbicsXG4gICAgICAgICdwdXRzJyxcbiAgICAgICAgJ3JlYWQnLFxuICAgICAgICAnc2VlaycsXG4gICAgICAgICdzb2NrZXQnLFxuICAgICAgICAndGVsbCcsXG4gICAgICAgICdpbnRlcnAnLFxuICAgICAgICAnYWZ0ZXInLFxuICAgICAgICAnYXV0b19leGVjb2snLFxuICAgICAgICAnYXV0b19sb2FkJyxcbiAgICAgICAgJ2F1dG9fbWtpbmRleCcsXG4gICAgICAgICdhdXRvX3Jlc2V0JyxcbiAgICAgICAgJ2JnZXJyb3InLFxuICAgICAgICAnZXJyb3InLFxuICAgICAgICAnZ2xvYmFsJyxcbiAgICAgICAgJ2hpc3RvcnknLFxuICAgICAgICAnbG9hZCcsXG4gICAgICAgICdzb3VyY2UnLFxuICAgICAgICAndGltZScsXG4gICAgICAgICd0cmFjZScsXG4gICAgICAgICd1bmtub3duJyxcbiAgICAgICAgJ3Vuc2V0JyxcbiAgICAgICAgJ3VwZGF0ZScsXG4gICAgICAgICd2d2FpdCcsXG4gICAgICAgICd3aW5mbycsXG4gICAgICAgICd3bScsXG4gICAgICAgICdiaW5kJyxcbiAgICAgICAgJ2V2ZW50JyxcbiAgICAgICAgJ3BhY2snLFxuICAgICAgICAncGxhY2UnLFxuICAgICAgICAnZ3JpZCcsXG4gICAgICAgICdmb250JyxcbiAgICAgICAgJ2JlbGwnLFxuICAgICAgICAnY2xpcGJvYXJkJyxcbiAgICAgICAgJ2Rlc3Ryb3knLFxuICAgICAgICAnZm9jdXMnLFxuICAgICAgICAnZ3JhYicsXG4gICAgICAgICdsb3dlcicsXG4gICAgICAgICdvcHRpb24nLFxuICAgICAgICAncmFpc2UnLFxuICAgICAgICAnc2VsZWN0aW9uJyxcbiAgICAgICAgJ3NlbmQnLFxuICAgICAgICAndGsnLFxuICAgICAgICAndGt3YWl0JyxcbiAgICAgICAgJ3RrX2Jpc3F1ZScsXG4gICAgICAgICd0a19mb2N1c05leHQnLFxuICAgICAgICAndGtfZm9jdXNQcmV2JyxcbiAgICAgICAgJ3RrX2ZvY3VzRm9sbG93c01vdXNlJyxcbiAgICAgICAgJ3RrX3BvcHVwJyxcbiAgICAgICAgJ3RrX3NldFBhbGV0dGUnXG4gICAgXSxcbiAgICBzeW1ib2xzOiAvWz0+PCF+PzomfCtcXC0qXFwvXFxeJV0rLyxcbiAgICBicmFja2V0czogW1xuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJywgdG9rZW46ICdkZWxpbWl0ZXIucGFyZW50aGVzaXMnIH0sXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nLCB0b2tlbjogJ2RlbGltaXRlci5jdXJseScgfSxcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScsIHRva2VuOiAnZGVsaW1pdGVyLnNxdWFyZScgfVxuICAgIF0sXG4gICAgZXNjYXBlczogL1xcXFwoPzpbYWJmbnJ0dlxcXFxcIidcXFtcXF1cXHtcXH07XFwkXXx4WzAtOUEtRmEtZl17MSw0fXx1WzAtOUEtRmEtZl17NH18VVswLTlBLUZhLWZdezh9KS8sXG4gICAgdmFyaWFibGVzOiAvKD86XFwkKyg/Oig/OlxcOlxcOj8pP1thLXpBLVpfXVxcdyopKykvLFxuICAgIHRva2VuaXplcjoge1xuICAgICAgICByb290OiBbXG4gICAgICAgICAgICAvLyBpZGVudGlmaWVycyBhbmQga2V5d29yZHNcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvW2EtekEtWl9dXFx3Ki8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0BzcGVjaWFsRnVuY3Rpb25zJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuOiAna2V5d29yZC5mbG93JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0OiAnQHNwZWNpYWxGdW5jJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAbWFpbkZ1bmN0aW9ucyc6ICdrZXl3b3JkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAYnVpbHRpbkZ1bmN0aW9ucyc6ICd2YXJpYWJsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnb3BlcmF0b3Iuc2NzcydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbL1xccytcXC0rKD8hXFxkfFxcLilcXHcqfHtcXCp9LywgJ21ldGF0YWcnXSxcbiAgICAgICAgICAgIC8vIHdoaXRlc3BhY2VcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B3aGl0ZXNwYWNlJyB9LFxuICAgICAgICAgICAgLy8gZGVsaW1pdGVycyBhbmQgb3BlcmF0b3JzXG4gICAgICAgICAgICBbL1t7fSgpXFxbXFxdXS8sICdAYnJhY2tldHMnXSxcbiAgICAgICAgICAgIFsvQHN5bWJvbHMvLCAnb3BlcmF0b3InXSxcbiAgICAgICAgICAgIFsvXFwkKyg/OlxcOlxcOik/XFx7LywgeyB0b2tlbjogJ2lkZW50aWZpZXInLCBuZXh0OiAnQG5lc3RlZFZhcmlhYmxlJyB9XSxcbiAgICAgICAgICAgIFsvQHZhcmlhYmxlcy8sICd0eXBlLmlkZW50aWZpZXInXSxcbiAgICAgICAgICAgIFsvXFwuKD8hXFxkfFxcLilbXFx3XFwtXSovLCAnb3BlcmF0b3Iuc3FsJ10sXG4gICAgICAgICAgICAvLyBudW1iZXJzXG4gICAgICAgICAgICBbL1xcZCsoXFwuXFxkKyk/LywgJ251bWJlciddLFxuICAgICAgICAgICAgWy9cXGQrLywgJ251bWJlciddLFxuICAgICAgICAgICAgLy8gZGVsaW1pdGVyXG4gICAgICAgICAgICBbLzsvLCAnZGVsaW1pdGVyJ10sXG4gICAgICAgICAgICAvLyBzdHJpbmdzXG4gICAgICAgICAgICBbL1wiLywgeyB0b2tlbjogJ3N0cmluZy5xdW90ZScsIGJyYWNrZXQ6ICdAb3BlbicsIG5leHQ6ICdAZHN0cmluZycgfV0sXG4gICAgICAgICAgICBbLycvLCB7IHRva2VuOiAnc3RyaW5nLnF1b3RlJywgYnJhY2tldDogJ0BvcGVuJywgbmV4dDogJ0Bzc3RyaW5nJyB9XVxuICAgICAgICBdLFxuICAgICAgICBkc3RyaW5nOiBbXG4gICAgICAgICAgICBbL1xcWy8sIHsgdG9rZW46ICdAYnJhY2tldHMnLCBuZXh0OiAnQG5lc3RlZENhbGwnIH1dLFxuICAgICAgICAgICAgWy9cXCQrKD86XFw6XFw6KT9cXHsvLCB7IHRva2VuOiAnaWRlbnRpZmllcicsIG5leHQ6ICdAbmVzdGVkVmFyaWFibGUnIH1dLFxuICAgICAgICAgICAgWy9AdmFyaWFibGVzLywgJ3R5cGUuaWRlbnRpZmllciddLFxuICAgICAgICAgICAgWy9bXlxcXFwkXFxbXFxdXCJdKy8sICdzdHJpbmcnXSxcbiAgICAgICAgICAgIFsvQGVzY2FwZXMvLCAnc3RyaW5nLmVzY2FwZSddLFxuICAgICAgICAgICAgWy9cIi8sIHsgdG9rZW46ICdzdHJpbmcucXVvdGUnLCBicmFja2V0OiAnQGNsb3NlJywgbmV4dDogJ0Bwb3AnIH1dXG4gICAgICAgIF0sXG4gICAgICAgIHNzdHJpbmc6IFtcbiAgICAgICAgICAgIFsvXFxbLywgeyB0b2tlbjogJ0BicmFja2V0cycsIG5leHQ6ICdAbmVzdGVkQ2FsbCcgfV0sXG4gICAgICAgICAgICBbL1xcJCsoPzpcXDpcXDopP1xcey8sIHsgdG9rZW46ICdpZGVudGlmaWVyJywgbmV4dDogJ0BuZXN0ZWRWYXJpYWJsZScgfV0sXG4gICAgICAgICAgICBbL0B2YXJpYWJsZXMvLCAndHlwZS5pZGVudGlmaWVyJ10sXG4gICAgICAgICAgICBbL1teXFxcXCRcXFtcXF0nXSsvLCAnc3RyaW5nJ10sXG4gICAgICAgICAgICBbL0Blc2NhcGVzLywgJ3N0cmluZy5lc2NhcGUnXSxcbiAgICAgICAgICAgIFsvJy8sIHsgdG9rZW46ICdzdHJpbmcucXVvdGUnLCBicmFja2V0OiAnQGNsb3NlJywgbmV4dDogJ0Bwb3AnIH1dXG4gICAgICAgIF0sXG4gICAgICAgIHdoaXRlc3BhY2U6IFtcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy8sICd3aGl0ZSddLFxuICAgICAgICAgICAgWy8jLipcXFxcJC8sIHsgdG9rZW46ICdjb21tZW50JywgbmV4dDogJ0BuZXdsaW5lQ29tbWVudCcgfV0sXG4gICAgICAgICAgICBbLyMuKig/IVxcXFwpJC8sICdjb21tZW50J11cbiAgICAgICAgXSxcbiAgICAgICAgbmV3bGluZUNvbW1lbnQ6IFtcbiAgICAgICAgICAgIFsvLipcXFxcJC8sICdjb21tZW50J10sXG4gICAgICAgICAgICBbLy4qKD8hXFxcXCkkLywgeyB0b2tlbjogJ2NvbW1lbnQnLCBuZXh0OiAnQHBvcCcgfV1cbiAgICAgICAgXSxcbiAgICAgICAgbmVzdGVkVmFyaWFibGU6IFtcbiAgICAgICAgICAgIFsvW15cXHtcXH1cXCRdKy8sICd0eXBlLmlkZW50aWZpZXInXSxcbiAgICAgICAgICAgIFsvXFx9LywgeyB0b2tlbjogJ2lkZW50aWZpZXInLCBuZXh0OiAnQHBvcCcgfV1cbiAgICAgICAgXSxcbiAgICAgICAgbmVzdGVkQ2FsbDogW1xuICAgICAgICAgICAgWy9cXFsvLCB7IHRva2VuOiAnQGJyYWNrZXRzJywgbmV4dDogJ0BuZXN0ZWRDYWxsJyB9XSxcbiAgICAgICAgICAgIFsvXFxdLywgeyB0b2tlbjogJ0BicmFja2V0cycsIG5leHQ6ICdAcG9wJyB9XSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ3Jvb3QnIH1cbiAgICAgICAgXSxcbiAgICAgICAgc3BlY2lhbEZ1bmM6IFtcbiAgICAgICAgICAgIFsvXCIvLCB7IHRva2VuOiAnc3RyaW5nJywgbmV4dDogJ0Bkc3RyaW5nJyB9XSxcbiAgICAgICAgICAgIFsvJy8sIHsgdG9rZW46ICdzdHJpbmcnLCBuZXh0OiAnQHNzdHJpbmcnIH1dLFxuICAgICAgICAgICAgWy9cXFMrLywgeyB0b2tlbjogJ3R5cGUnLCBuZXh0OiAnQHBvcCcgfV1cbiAgICAgICAgXVxuICAgIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9