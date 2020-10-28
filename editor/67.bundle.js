(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[67],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/vb/vb.js":
/*!********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/vb/vb.js ***!
  \********************************************************************/
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
        lineComment: "'",
        blockComment: ['/*', '*/']
    },
    brackets: [
        ['{', '}'],
        ['[', ']'],
        ['(', ')'],
        ['<', '>'],
        ['addhandler', 'end addhandler'],
        ['class', 'end class'],
        ['enum', 'end enum'],
        ['event', 'end event'],
        ['function', 'end function'],
        ['get', 'end get'],
        ['if', 'end if'],
        ['interface', 'end interface'],
        ['module', 'end module'],
        ['namespace', 'end namespace'],
        ['operator', 'end operator'],
        ['property', 'end property'],
        ['raiseevent', 'end raiseevent'],
        ['removehandler', 'end removehandler'],
        ['select', 'end select'],
        ['set', 'end set'],
        ['structure', 'end structure'],
        ['sub', 'end sub'],
        ['synclock', 'end synclock'],
        ['try', 'end try'],
        ['while', 'end while'],
        ['with', 'end with'],
        ['using', 'end using'],
        ['do', 'loop'],
        ['for', 'next']
    ],
    autoClosingPairs: [
        { open: '{', close: '}', notIn: ['string', 'comment'] },
        { open: '[', close: ']', notIn: ['string', 'comment'] },
        { open: '(', close: ')', notIn: ['string', 'comment'] },
        { open: '"', close: '"', notIn: ['string', 'comment'] },
        { open: '<', close: '>', notIn: ['string', 'comment'] }
    ],
    folding: {
        markers: {
            start: new RegExp('^\\s*#Region\\b'),
            end: new RegExp('^\\s*#End Region\\b')
        }
    }
};
var language = {
    defaultToken: '',
    tokenPostfix: '.vb',
    ignoreCase: true,
    brackets: [
        { token: 'delimiter.bracket', open: '{', close: '}' },
        { token: 'delimiter.array', open: '[', close: ']' },
        { token: 'delimiter.parenthesis', open: '(', close: ')' },
        { token: 'delimiter.angle', open: '<', close: '>' },
        // Special bracket statement pairs
        // according to https://msdn.microsoft.com/en-us/library/tsw2a11z.aspx
        {
            token: 'keyword.tag-addhandler',
            open: 'addhandler',
            close: 'end addhandler'
        },
        { token: 'keyword.tag-class', open: 'class', close: 'end class' },
        { token: 'keyword.tag-enum', open: 'enum', close: 'end enum' },
        { token: 'keyword.tag-event', open: 'event', close: 'end event' },
        {
            token: 'keyword.tag-function',
            open: 'function',
            close: 'end function'
        },
        { token: 'keyword.tag-get', open: 'get', close: 'end get' },
        { token: 'keyword.tag-if', open: 'if', close: 'end if' },
        {
            token: 'keyword.tag-interface',
            open: 'interface',
            close: 'end interface'
        },
        { token: 'keyword.tag-module', open: 'module', close: 'end module' },
        {
            token: 'keyword.tag-namespace',
            open: 'namespace',
            close: 'end namespace'
        },
        {
            token: 'keyword.tag-operator',
            open: 'operator',
            close: 'end operator'
        },
        {
            token: 'keyword.tag-property',
            open: 'property',
            close: 'end property'
        },
        {
            token: 'keyword.tag-raiseevent',
            open: 'raiseevent',
            close: 'end raiseevent'
        },
        {
            token: 'keyword.tag-removehandler',
            open: 'removehandler',
            close: 'end removehandler'
        },
        { token: 'keyword.tag-select', open: 'select', close: 'end select' },
        { token: 'keyword.tag-set', open: 'set', close: 'end set' },
        {
            token: 'keyword.tag-structure',
            open: 'structure',
            close: 'end structure'
        },
        { token: 'keyword.tag-sub', open: 'sub', close: 'end sub' },
        {
            token: 'keyword.tag-synclock',
            open: 'synclock',
            close: 'end synclock'
        },
        { token: 'keyword.tag-try', open: 'try', close: 'end try' },
        { token: 'keyword.tag-while', open: 'while', close: 'end while' },
        { token: 'keyword.tag-with', open: 'with', close: 'end with' },
        // Other pairs
        { token: 'keyword.tag-using', open: 'using', close: 'end using' },
        { token: 'keyword.tag-do', open: 'do', close: 'loop' },
        { token: 'keyword.tag-for', open: 'for', close: 'next' }
    ],
    keywords: [
        'AddHandler',
        'AddressOf',
        'Alias',
        'And',
        'AndAlso',
        'As',
        'Async',
        'Boolean',
        'ByRef',
        'Byte',
        'ByVal',
        'Call',
        'Case',
        'Catch',
        'CBool',
        'CByte',
        'CChar',
        'CDate',
        'CDbl',
        'CDec',
        'Char',
        'CInt',
        'Class',
        'CLng',
        'CObj',
        'Const',
        'Continue',
        'CSByte',
        'CShort',
        'CSng',
        'CStr',
        'CType',
        'CUInt',
        'CULng',
        'CUShort',
        'Date',
        'Decimal',
        'Declare',
        'Default',
        'Delegate',
        'Dim',
        'DirectCast',
        'Do',
        'Double',
        'Each',
        'Else',
        'ElseIf',
        'End',
        'EndIf',
        'Enum',
        'Erase',
        'Error',
        'Event',
        'Exit',
        'False',
        'Finally',
        'For',
        'Friend',
        'Function',
        'Get',
        'GetType',
        'GetXMLNamespace',
        'Global',
        'GoSub',
        'GoTo',
        'Handles',
        'If',
        'Implements',
        'Imports',
        'In',
        'Inherits',
        'Integer',
        'Interface',
        'Is',
        'IsNot',
        'Let',
        'Lib',
        'Like',
        'Long',
        'Loop',
        'Me',
        'Mod',
        'Module',
        'MustInherit',
        'MustOverride',
        'MyBase',
        'MyClass',
        'NameOf',
        'Namespace',
        'Narrowing',
        'New',
        'Next',
        'Not',
        'Nothing',
        'NotInheritable',
        'NotOverridable',
        'Object',
        'Of',
        'On',
        'Operator',
        'Option',
        'Optional',
        'Or',
        'OrElse',
        'Out',
        'Overloads',
        'Overridable',
        'Overrides',
        'ParamArray',
        'Partial',
        'Private',
        'Property',
        'Protected',
        'Public',
        'RaiseEvent',
        'ReadOnly',
        'ReDim',
        'RemoveHandler',
        'Resume',
        'Return',
        'SByte',
        'Select',
        'Set',
        'Shadows',
        'Shared',
        'Short',
        'Single',
        'Static',
        'Step',
        'Stop',
        'String',
        'Structure',
        'Sub',
        'SyncLock',
        'Then',
        'Throw',
        'To',
        'True',
        'Try',
        'TryCast',
        'TypeOf',
        'UInteger',
        'ULong',
        'UShort',
        'Using',
        'Variant',
        'Wend',
        'When',
        'While',
        'Widening',
        'With',
        'WithEvents',
        'WriteOnly',
        'Xor'
    ],
    tagwords: [
        'If',
        'Sub',
        'Select',
        'Try',
        'Class',
        'Enum',
        'Function',
        'Get',
        'Interface',
        'Module',
        'Namespace',
        'Operator',
        'Set',
        'Structure',
        'Using',
        'While',
        'With',
        'Do',
        'Loop',
        'For',
        'Next',
        'Property',
        'Continue',
        'AddHandler',
        'RemoveHandler',
        'Event',
        'RaiseEvent',
        'SyncLock'
    ],
    // we include these common regular expressions
    symbols: /[=><!~?;\.,:&|+\-*\/\^%]+/,
    integersuffix: /U?[DI%L&S@]?/,
    floatsuffix: /[R#F!]?/,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            // whitespace
            { include: '@whitespace' },
            // special ending tag-words
            [/next(?!\w)/, { token: 'keyword.tag-for' }],
            [/loop(?!\w)/, { token: 'keyword.tag-do' }],
            // usual ending tags
            [
                /end\s+(?!for|do)(addhandler|class|enum|event|function|get|if|interface|module|namespace|operator|property|raiseevent|removehandler|select|set|structure|sub|synclock|try|while|with|using)/,
                { token: 'keyword.tag-$1' }
            ],
            // identifiers, tagwords, and keywords
            [
                /[a-zA-Z_]\w*/,
                {
                    cases: {
                        '@tagwords': { token: 'keyword.tag-$0' },
                        '@keywords': { token: 'keyword.$0' },
                        '@default': 'identifier'
                    }
                }
            ],
            // Preprocessor directive
            [/^\s*#\w+/, 'keyword'],
            // numbers
            [/\d*\d+e([\-+]?\d+)?(@floatsuffix)/, 'number.float'],
            [/\d*\.\d+(e[\-+]?\d+)?(@floatsuffix)/, 'number.float'],
            [/&H[0-9a-f]+(@integersuffix)/, 'number.hex'],
            [/&0[0-7]+(@integersuffix)/, 'number.octal'],
            [/\d+(@integersuffix)/, 'number'],
            // date literal
            [/#.*#/, 'number'],
            // delimiters and operators
            [/[{}()\[\]]/, '@brackets'],
            [/@symbols/, 'delimiter'],
            // strings
            [/["\u201c\u201d]/, { token: 'string.quote', next: '@string' }]
        ],
        whitespace: [
            [/[ \t\r\n]+/, ''],
            [/(\'|REM(?!\w)).*$/, 'comment']
        ],
        string: [
            [/[^"\u201c\u201d]+/, 'string'],
            [/["\u201c\u201d]{2}/, 'string.escape'],
            [/["\u201c\u201d]C?/, { token: 'string.quote', next: '@pop' }]
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL3ZiL3ZiLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxZQUFZLGlDQUFpQztBQUMvRCxTQUFTLHNEQUFzRDtBQUMvRCxTQUFTLHNEQUFzRDtBQUMvRCxTQUFTLHNEQUFzRDtBQUMvRCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLHFDQUFxQyxZQUFZLEdBQUc7QUFDN0QsU0FBUyxrREFBa0Q7QUFDM0QsU0FBUyx3REFBd0Q7QUFDakUsU0FBUyxrREFBa0Q7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFNBQVMsZ0VBQWdFO0FBQ3pFLFNBQVMsNkRBQTZEO0FBQ3RFLFNBQVMsZ0VBQWdFO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFNBQVMsMERBQTBEO0FBQ25FLFNBQVMsdURBQXVEO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFNBQVMsbUVBQW1FO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFNBQVMsbUVBQW1FO0FBQzVFLFNBQVMsMERBQTBEO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFNBQVMsMERBQTBEO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFNBQVMsMERBQTBEO0FBQ25FLFNBQVMsZ0VBQWdFO0FBQ3pFLFNBQVMsNkRBQTZEO0FBQ3RFO0FBQ0EsU0FBUyxnRUFBZ0U7QUFDekUsU0FBUyxxREFBcUQ7QUFDOUQsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSx5QkFBeUI7QUFDdEM7QUFDQSw0QkFBNEIsMkJBQTJCO0FBQ3ZELDRCQUE0QiwwQkFBMEI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQywwQkFBMEI7QUFDaEUsc0NBQXNDLHNCQUFzQjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlDQUFpQyx5Q0FBeUM7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsRUFBRTtBQUNoQyxtQ0FBbUMsc0NBQXNDO0FBQ3pFO0FBQ0E7QUFDQSIsImZpbGUiOiI2Ny5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmV4cG9ydCB2YXIgY29uZiA9IHtcbiAgICBjb21tZW50czoge1xuICAgICAgICBsaW5lQ29tbWVudDogXCInXCIsXG4gICAgICAgIGJsb2NrQ29tbWVudDogWycvKicsICcqLyddXG4gICAgfSxcbiAgICBicmFja2V0czogW1xuICAgICAgICBbJ3snLCAnfSddLFxuICAgICAgICBbJ1snLCAnXSddLFxuICAgICAgICBbJygnLCAnKSddLFxuICAgICAgICBbJzwnLCAnPiddLFxuICAgICAgICBbJ2FkZGhhbmRsZXInLCAnZW5kIGFkZGhhbmRsZXInXSxcbiAgICAgICAgWydjbGFzcycsICdlbmQgY2xhc3MnXSxcbiAgICAgICAgWydlbnVtJywgJ2VuZCBlbnVtJ10sXG4gICAgICAgIFsnZXZlbnQnLCAnZW5kIGV2ZW50J10sXG4gICAgICAgIFsnZnVuY3Rpb24nLCAnZW5kIGZ1bmN0aW9uJ10sXG4gICAgICAgIFsnZ2V0JywgJ2VuZCBnZXQnXSxcbiAgICAgICAgWydpZicsICdlbmQgaWYnXSxcbiAgICAgICAgWydpbnRlcmZhY2UnLCAnZW5kIGludGVyZmFjZSddLFxuICAgICAgICBbJ21vZHVsZScsICdlbmQgbW9kdWxlJ10sXG4gICAgICAgIFsnbmFtZXNwYWNlJywgJ2VuZCBuYW1lc3BhY2UnXSxcbiAgICAgICAgWydvcGVyYXRvcicsICdlbmQgb3BlcmF0b3InXSxcbiAgICAgICAgWydwcm9wZXJ0eScsICdlbmQgcHJvcGVydHknXSxcbiAgICAgICAgWydyYWlzZWV2ZW50JywgJ2VuZCByYWlzZWV2ZW50J10sXG4gICAgICAgIFsncmVtb3ZlaGFuZGxlcicsICdlbmQgcmVtb3ZlaGFuZGxlciddLFxuICAgICAgICBbJ3NlbGVjdCcsICdlbmQgc2VsZWN0J10sXG4gICAgICAgIFsnc2V0JywgJ2VuZCBzZXQnXSxcbiAgICAgICAgWydzdHJ1Y3R1cmUnLCAnZW5kIHN0cnVjdHVyZSddLFxuICAgICAgICBbJ3N1YicsICdlbmQgc3ViJ10sXG4gICAgICAgIFsnc3luY2xvY2snLCAnZW5kIHN5bmNsb2NrJ10sXG4gICAgICAgIFsndHJ5JywgJ2VuZCB0cnknXSxcbiAgICAgICAgWyd3aGlsZScsICdlbmQgd2hpbGUnXSxcbiAgICAgICAgWyd3aXRoJywgJ2VuZCB3aXRoJ10sXG4gICAgICAgIFsndXNpbmcnLCAnZW5kIHVzaW5nJ10sXG4gICAgICAgIFsnZG8nLCAnbG9vcCddLFxuICAgICAgICBbJ2ZvcicsICduZXh0J11cbiAgICBdLFxuICAgIGF1dG9DbG9zaW5nUGFpcnM6IFtcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScsIG5vdEluOiBbJ3N0cmluZycsICdjb21tZW50J10gfSxcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScsIG5vdEluOiBbJ3N0cmluZycsICdjb21tZW50J10gfSxcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScsIG5vdEluOiBbJ3N0cmluZycsICdjb21tZW50J10gfSxcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJywgbm90SW46IFsnc3RyaW5nJywgJ2NvbW1lbnQnXSB9LFxuICAgICAgICB7IG9wZW46ICc8JywgY2xvc2U6ICc+Jywgbm90SW46IFsnc3RyaW5nJywgJ2NvbW1lbnQnXSB9XG4gICAgXSxcbiAgICBmb2xkaW5nOiB7XG4gICAgICAgIG1hcmtlcnM6IHtcbiAgICAgICAgICAgIHN0YXJ0OiBuZXcgUmVnRXhwKCdeXFxcXHMqI1JlZ2lvblxcXFxiJyksXG4gICAgICAgICAgICBlbmQ6IG5ldyBSZWdFeHAoJ15cXFxccyojRW5kIFJlZ2lvblxcXFxiJylcbiAgICAgICAgfVxuICAgIH1cbn07XG5leHBvcnQgdmFyIGxhbmd1YWdlID0ge1xuICAgIGRlZmF1bHRUb2tlbjogJycsXG4gICAgdG9rZW5Qb3N0Zml4OiAnLnZiJyxcbiAgICBpZ25vcmVDYXNlOiB0cnVlLFxuICAgIGJyYWNrZXRzOiBbXG4gICAgICAgIHsgdG9rZW46ICdkZWxpbWl0ZXIuYnJhY2tldCcsIG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxuICAgICAgICB7IHRva2VuOiAnZGVsaW1pdGVyLmFycmF5Jywgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXG4gICAgICAgIHsgdG9rZW46ICdkZWxpbWl0ZXIucGFyZW50aGVzaXMnLCBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcbiAgICAgICAgeyB0b2tlbjogJ2RlbGltaXRlci5hbmdsZScsIG9wZW46ICc8JywgY2xvc2U6ICc+JyB9LFxuICAgICAgICAvLyBTcGVjaWFsIGJyYWNrZXQgc3RhdGVtZW50IHBhaXJzXG4gICAgICAgIC8vIGFjY29yZGluZyB0byBodHRwczovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L3RzdzJhMTF6LmFzcHhcbiAgICAgICAge1xuICAgICAgICAgICAgdG9rZW46ICdrZXl3b3JkLnRhZy1hZGRoYW5kbGVyJyxcbiAgICAgICAgICAgIG9wZW46ICdhZGRoYW5kbGVyJyxcbiAgICAgICAgICAgIGNsb3NlOiAnZW5kIGFkZGhhbmRsZXInXG4gICAgICAgIH0sXG4gICAgICAgIHsgdG9rZW46ICdrZXl3b3JkLnRhZy1jbGFzcycsIG9wZW46ICdjbGFzcycsIGNsb3NlOiAnZW5kIGNsYXNzJyB9LFxuICAgICAgICB7IHRva2VuOiAna2V5d29yZC50YWctZW51bScsIG9wZW46ICdlbnVtJywgY2xvc2U6ICdlbmQgZW51bScgfSxcbiAgICAgICAgeyB0b2tlbjogJ2tleXdvcmQudGFnLWV2ZW50Jywgb3BlbjogJ2V2ZW50JywgY2xvc2U6ICdlbmQgZXZlbnQnIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRva2VuOiAna2V5d29yZC50YWctZnVuY3Rpb24nLFxuICAgICAgICAgICAgb3BlbjogJ2Z1bmN0aW9uJyxcbiAgICAgICAgICAgIGNsb3NlOiAnZW5kIGZ1bmN0aW9uJ1xuICAgICAgICB9LFxuICAgICAgICB7IHRva2VuOiAna2V5d29yZC50YWctZ2V0Jywgb3BlbjogJ2dldCcsIGNsb3NlOiAnZW5kIGdldCcgfSxcbiAgICAgICAgeyB0b2tlbjogJ2tleXdvcmQudGFnLWlmJywgb3BlbjogJ2lmJywgY2xvc2U6ICdlbmQgaWYnIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRva2VuOiAna2V5d29yZC50YWctaW50ZXJmYWNlJyxcbiAgICAgICAgICAgIG9wZW46ICdpbnRlcmZhY2UnLFxuICAgICAgICAgICAgY2xvc2U6ICdlbmQgaW50ZXJmYWNlJ1xuICAgICAgICB9LFxuICAgICAgICB7IHRva2VuOiAna2V5d29yZC50YWctbW9kdWxlJywgb3BlbjogJ21vZHVsZScsIGNsb3NlOiAnZW5kIG1vZHVsZScgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdG9rZW46ICdrZXl3b3JkLnRhZy1uYW1lc3BhY2UnLFxuICAgICAgICAgICAgb3BlbjogJ25hbWVzcGFjZScsXG4gICAgICAgICAgICBjbG9zZTogJ2VuZCBuYW1lc3BhY2UnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRva2VuOiAna2V5d29yZC50YWctb3BlcmF0b3InLFxuICAgICAgICAgICAgb3BlbjogJ29wZXJhdG9yJyxcbiAgICAgICAgICAgIGNsb3NlOiAnZW5kIG9wZXJhdG9yJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0b2tlbjogJ2tleXdvcmQudGFnLXByb3BlcnR5JyxcbiAgICAgICAgICAgIG9wZW46ICdwcm9wZXJ0eScsXG4gICAgICAgICAgICBjbG9zZTogJ2VuZCBwcm9wZXJ0eSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdG9rZW46ICdrZXl3b3JkLnRhZy1yYWlzZWV2ZW50JyxcbiAgICAgICAgICAgIG9wZW46ICdyYWlzZWV2ZW50JyxcbiAgICAgICAgICAgIGNsb3NlOiAnZW5kIHJhaXNlZXZlbnQnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRva2VuOiAna2V5d29yZC50YWctcmVtb3ZlaGFuZGxlcicsXG4gICAgICAgICAgICBvcGVuOiAncmVtb3ZlaGFuZGxlcicsXG4gICAgICAgICAgICBjbG9zZTogJ2VuZCByZW1vdmVoYW5kbGVyJ1xuICAgICAgICB9LFxuICAgICAgICB7IHRva2VuOiAna2V5d29yZC50YWctc2VsZWN0Jywgb3BlbjogJ3NlbGVjdCcsIGNsb3NlOiAnZW5kIHNlbGVjdCcgfSxcbiAgICAgICAgeyB0b2tlbjogJ2tleXdvcmQudGFnLXNldCcsIG9wZW46ICdzZXQnLCBjbG9zZTogJ2VuZCBzZXQnIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRva2VuOiAna2V5d29yZC50YWctc3RydWN0dXJlJyxcbiAgICAgICAgICAgIG9wZW46ICdzdHJ1Y3R1cmUnLFxuICAgICAgICAgICAgY2xvc2U6ICdlbmQgc3RydWN0dXJlJ1xuICAgICAgICB9LFxuICAgICAgICB7IHRva2VuOiAna2V5d29yZC50YWctc3ViJywgb3BlbjogJ3N1YicsIGNsb3NlOiAnZW5kIHN1YicgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdG9rZW46ICdrZXl3b3JkLnRhZy1zeW5jbG9jaycsXG4gICAgICAgICAgICBvcGVuOiAnc3luY2xvY2snLFxuICAgICAgICAgICAgY2xvc2U6ICdlbmQgc3luY2xvY2snXG4gICAgICAgIH0sXG4gICAgICAgIHsgdG9rZW46ICdrZXl3b3JkLnRhZy10cnknLCBvcGVuOiAndHJ5JywgY2xvc2U6ICdlbmQgdHJ5JyB9LFxuICAgICAgICB7IHRva2VuOiAna2V5d29yZC50YWctd2hpbGUnLCBvcGVuOiAnd2hpbGUnLCBjbG9zZTogJ2VuZCB3aGlsZScgfSxcbiAgICAgICAgeyB0b2tlbjogJ2tleXdvcmQudGFnLXdpdGgnLCBvcGVuOiAnd2l0aCcsIGNsb3NlOiAnZW5kIHdpdGgnIH0sXG4gICAgICAgIC8vIE90aGVyIHBhaXJzXG4gICAgICAgIHsgdG9rZW46ICdrZXl3b3JkLnRhZy11c2luZycsIG9wZW46ICd1c2luZycsIGNsb3NlOiAnZW5kIHVzaW5nJyB9LFxuICAgICAgICB7IHRva2VuOiAna2V5d29yZC50YWctZG8nLCBvcGVuOiAnZG8nLCBjbG9zZTogJ2xvb3AnIH0sXG4gICAgICAgIHsgdG9rZW46ICdrZXl3b3JkLnRhZy1mb3InLCBvcGVuOiAnZm9yJywgY2xvc2U6ICduZXh0JyB9XG4gICAgXSxcbiAgICBrZXl3b3JkczogW1xuICAgICAgICAnQWRkSGFuZGxlcicsXG4gICAgICAgICdBZGRyZXNzT2YnLFxuICAgICAgICAnQWxpYXMnLFxuICAgICAgICAnQW5kJyxcbiAgICAgICAgJ0FuZEFsc28nLFxuICAgICAgICAnQXMnLFxuICAgICAgICAnQXN5bmMnLFxuICAgICAgICAnQm9vbGVhbicsXG4gICAgICAgICdCeVJlZicsXG4gICAgICAgICdCeXRlJyxcbiAgICAgICAgJ0J5VmFsJyxcbiAgICAgICAgJ0NhbGwnLFxuICAgICAgICAnQ2FzZScsXG4gICAgICAgICdDYXRjaCcsXG4gICAgICAgICdDQm9vbCcsXG4gICAgICAgICdDQnl0ZScsXG4gICAgICAgICdDQ2hhcicsXG4gICAgICAgICdDRGF0ZScsXG4gICAgICAgICdDRGJsJyxcbiAgICAgICAgJ0NEZWMnLFxuICAgICAgICAnQ2hhcicsXG4gICAgICAgICdDSW50JyxcbiAgICAgICAgJ0NsYXNzJyxcbiAgICAgICAgJ0NMbmcnLFxuICAgICAgICAnQ09iaicsXG4gICAgICAgICdDb25zdCcsXG4gICAgICAgICdDb250aW51ZScsXG4gICAgICAgICdDU0J5dGUnLFxuICAgICAgICAnQ1Nob3J0JyxcbiAgICAgICAgJ0NTbmcnLFxuICAgICAgICAnQ1N0cicsXG4gICAgICAgICdDVHlwZScsXG4gICAgICAgICdDVUludCcsXG4gICAgICAgICdDVUxuZycsXG4gICAgICAgICdDVVNob3J0JyxcbiAgICAgICAgJ0RhdGUnLFxuICAgICAgICAnRGVjaW1hbCcsXG4gICAgICAgICdEZWNsYXJlJyxcbiAgICAgICAgJ0RlZmF1bHQnLFxuICAgICAgICAnRGVsZWdhdGUnLFxuICAgICAgICAnRGltJyxcbiAgICAgICAgJ0RpcmVjdENhc3QnLFxuICAgICAgICAnRG8nLFxuICAgICAgICAnRG91YmxlJyxcbiAgICAgICAgJ0VhY2gnLFxuICAgICAgICAnRWxzZScsXG4gICAgICAgICdFbHNlSWYnLFxuICAgICAgICAnRW5kJyxcbiAgICAgICAgJ0VuZElmJyxcbiAgICAgICAgJ0VudW0nLFxuICAgICAgICAnRXJhc2UnLFxuICAgICAgICAnRXJyb3InLFxuICAgICAgICAnRXZlbnQnLFxuICAgICAgICAnRXhpdCcsXG4gICAgICAgICdGYWxzZScsXG4gICAgICAgICdGaW5hbGx5JyxcbiAgICAgICAgJ0ZvcicsXG4gICAgICAgICdGcmllbmQnLFxuICAgICAgICAnRnVuY3Rpb24nLFxuICAgICAgICAnR2V0JyxcbiAgICAgICAgJ0dldFR5cGUnLFxuICAgICAgICAnR2V0WE1MTmFtZXNwYWNlJyxcbiAgICAgICAgJ0dsb2JhbCcsXG4gICAgICAgICdHb1N1YicsXG4gICAgICAgICdHb1RvJyxcbiAgICAgICAgJ0hhbmRsZXMnLFxuICAgICAgICAnSWYnLFxuICAgICAgICAnSW1wbGVtZW50cycsXG4gICAgICAgICdJbXBvcnRzJyxcbiAgICAgICAgJ0luJyxcbiAgICAgICAgJ0luaGVyaXRzJyxcbiAgICAgICAgJ0ludGVnZXInLFxuICAgICAgICAnSW50ZXJmYWNlJyxcbiAgICAgICAgJ0lzJyxcbiAgICAgICAgJ0lzTm90JyxcbiAgICAgICAgJ0xldCcsXG4gICAgICAgICdMaWInLFxuICAgICAgICAnTGlrZScsXG4gICAgICAgICdMb25nJyxcbiAgICAgICAgJ0xvb3AnLFxuICAgICAgICAnTWUnLFxuICAgICAgICAnTW9kJyxcbiAgICAgICAgJ01vZHVsZScsXG4gICAgICAgICdNdXN0SW5oZXJpdCcsXG4gICAgICAgICdNdXN0T3ZlcnJpZGUnLFxuICAgICAgICAnTXlCYXNlJyxcbiAgICAgICAgJ015Q2xhc3MnLFxuICAgICAgICAnTmFtZU9mJyxcbiAgICAgICAgJ05hbWVzcGFjZScsXG4gICAgICAgICdOYXJyb3dpbmcnLFxuICAgICAgICAnTmV3JyxcbiAgICAgICAgJ05leHQnLFxuICAgICAgICAnTm90JyxcbiAgICAgICAgJ05vdGhpbmcnLFxuICAgICAgICAnTm90SW5oZXJpdGFibGUnLFxuICAgICAgICAnTm90T3ZlcnJpZGFibGUnLFxuICAgICAgICAnT2JqZWN0JyxcbiAgICAgICAgJ09mJyxcbiAgICAgICAgJ09uJyxcbiAgICAgICAgJ09wZXJhdG9yJyxcbiAgICAgICAgJ09wdGlvbicsXG4gICAgICAgICdPcHRpb25hbCcsXG4gICAgICAgICdPcicsXG4gICAgICAgICdPckVsc2UnLFxuICAgICAgICAnT3V0JyxcbiAgICAgICAgJ092ZXJsb2FkcycsXG4gICAgICAgICdPdmVycmlkYWJsZScsXG4gICAgICAgICdPdmVycmlkZXMnLFxuICAgICAgICAnUGFyYW1BcnJheScsXG4gICAgICAgICdQYXJ0aWFsJyxcbiAgICAgICAgJ1ByaXZhdGUnLFxuICAgICAgICAnUHJvcGVydHknLFxuICAgICAgICAnUHJvdGVjdGVkJyxcbiAgICAgICAgJ1B1YmxpYycsXG4gICAgICAgICdSYWlzZUV2ZW50JyxcbiAgICAgICAgJ1JlYWRPbmx5JyxcbiAgICAgICAgJ1JlRGltJyxcbiAgICAgICAgJ1JlbW92ZUhhbmRsZXInLFxuICAgICAgICAnUmVzdW1lJyxcbiAgICAgICAgJ1JldHVybicsXG4gICAgICAgICdTQnl0ZScsXG4gICAgICAgICdTZWxlY3QnLFxuICAgICAgICAnU2V0JyxcbiAgICAgICAgJ1NoYWRvd3MnLFxuICAgICAgICAnU2hhcmVkJyxcbiAgICAgICAgJ1Nob3J0JyxcbiAgICAgICAgJ1NpbmdsZScsXG4gICAgICAgICdTdGF0aWMnLFxuICAgICAgICAnU3RlcCcsXG4gICAgICAgICdTdG9wJyxcbiAgICAgICAgJ1N0cmluZycsXG4gICAgICAgICdTdHJ1Y3R1cmUnLFxuICAgICAgICAnU3ViJyxcbiAgICAgICAgJ1N5bmNMb2NrJyxcbiAgICAgICAgJ1RoZW4nLFxuICAgICAgICAnVGhyb3cnLFxuICAgICAgICAnVG8nLFxuICAgICAgICAnVHJ1ZScsXG4gICAgICAgICdUcnknLFxuICAgICAgICAnVHJ5Q2FzdCcsXG4gICAgICAgICdUeXBlT2YnLFxuICAgICAgICAnVUludGVnZXInLFxuICAgICAgICAnVUxvbmcnLFxuICAgICAgICAnVVNob3J0JyxcbiAgICAgICAgJ1VzaW5nJyxcbiAgICAgICAgJ1ZhcmlhbnQnLFxuICAgICAgICAnV2VuZCcsXG4gICAgICAgICdXaGVuJyxcbiAgICAgICAgJ1doaWxlJyxcbiAgICAgICAgJ1dpZGVuaW5nJyxcbiAgICAgICAgJ1dpdGgnLFxuICAgICAgICAnV2l0aEV2ZW50cycsXG4gICAgICAgICdXcml0ZU9ubHknLFxuICAgICAgICAnWG9yJ1xuICAgIF0sXG4gICAgdGFnd29yZHM6IFtcbiAgICAgICAgJ0lmJyxcbiAgICAgICAgJ1N1YicsXG4gICAgICAgICdTZWxlY3QnLFxuICAgICAgICAnVHJ5JyxcbiAgICAgICAgJ0NsYXNzJyxcbiAgICAgICAgJ0VudW0nLFxuICAgICAgICAnRnVuY3Rpb24nLFxuICAgICAgICAnR2V0JyxcbiAgICAgICAgJ0ludGVyZmFjZScsXG4gICAgICAgICdNb2R1bGUnLFxuICAgICAgICAnTmFtZXNwYWNlJyxcbiAgICAgICAgJ09wZXJhdG9yJyxcbiAgICAgICAgJ1NldCcsXG4gICAgICAgICdTdHJ1Y3R1cmUnLFxuICAgICAgICAnVXNpbmcnLFxuICAgICAgICAnV2hpbGUnLFxuICAgICAgICAnV2l0aCcsXG4gICAgICAgICdEbycsXG4gICAgICAgICdMb29wJyxcbiAgICAgICAgJ0ZvcicsXG4gICAgICAgICdOZXh0JyxcbiAgICAgICAgJ1Byb3BlcnR5JyxcbiAgICAgICAgJ0NvbnRpbnVlJyxcbiAgICAgICAgJ0FkZEhhbmRsZXInLFxuICAgICAgICAnUmVtb3ZlSGFuZGxlcicsXG4gICAgICAgICdFdmVudCcsXG4gICAgICAgICdSYWlzZUV2ZW50JyxcbiAgICAgICAgJ1N5bmNMb2NrJ1xuICAgIF0sXG4gICAgLy8gd2UgaW5jbHVkZSB0aGVzZSBjb21tb24gcmVndWxhciBleHByZXNzaW9uc1xuICAgIHN5bWJvbHM6IC9bPT48IX4/O1xcLiw6JnwrXFwtKlxcL1xcXiVdKy8sXG4gICAgaW50ZWdlcnN1ZmZpeDogL1U/W0RJJUwmU0BdPy8sXG4gICAgZmxvYXRzdWZmaXg6IC9bUiNGIV0/LyxcbiAgICAvLyBUaGUgbWFpbiB0b2tlbml6ZXIgZm9yIG91ciBsYW5ndWFnZXNcbiAgICB0b2tlbml6ZXI6IHtcbiAgICAgICAgcm9vdDogW1xuICAgICAgICAgICAgLy8gd2hpdGVzcGFjZVxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHdoaXRlc3BhY2UnIH0sXG4gICAgICAgICAgICAvLyBzcGVjaWFsIGVuZGluZyB0YWctd29yZHNcbiAgICAgICAgICAgIFsvbmV4dCg/IVxcdykvLCB7IHRva2VuOiAna2V5d29yZC50YWctZm9yJyB9XSxcbiAgICAgICAgICAgIFsvbG9vcCg/IVxcdykvLCB7IHRva2VuOiAna2V5d29yZC50YWctZG8nIH1dLFxuICAgICAgICAgICAgLy8gdXN1YWwgZW5kaW5nIHRhZ3NcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvZW5kXFxzKyg/IWZvcnxkbykoYWRkaGFuZGxlcnxjbGFzc3xlbnVtfGV2ZW50fGZ1bmN0aW9ufGdldHxpZnxpbnRlcmZhY2V8bW9kdWxlfG5hbWVzcGFjZXxvcGVyYXRvcnxwcm9wZXJ0eXxyYWlzZWV2ZW50fHJlbW92ZWhhbmRsZXJ8c2VsZWN0fHNldHxzdHJ1Y3R1cmV8c3VifHN5bmNsb2NrfHRyeXx3aGlsZXx3aXRofHVzaW5nKS8sXG4gICAgICAgICAgICAgICAgeyB0b2tlbjogJ2tleXdvcmQudGFnLSQxJyB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgLy8gaWRlbnRpZmllcnMsIHRhZ3dvcmRzLCBhbmQga2V5d29yZHNcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvW2EtekEtWl9dXFx3Ki8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0B0YWd3b3Jkcyc6IHsgdG9rZW46ICdrZXl3b3JkLnRhZy0kMCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAa2V5d29yZHMnOiB7IHRva2VuOiAna2V5d29yZC4kMCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdpZGVudGlmaWVyJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIC8vIFByZXByb2Nlc3NvciBkaXJlY3RpdmVcbiAgICAgICAgICAgIFsvXlxccyojXFx3Ky8sICdrZXl3b3JkJ10sXG4gICAgICAgICAgICAvLyBudW1iZXJzXG4gICAgICAgICAgICBbL1xcZCpcXGQrZShbXFwtK10/XFxkKyk/KEBmbG9hdHN1ZmZpeCkvLCAnbnVtYmVyLmZsb2F0J10sXG4gICAgICAgICAgICBbL1xcZCpcXC5cXGQrKGVbXFwtK10/XFxkKyk/KEBmbG9hdHN1ZmZpeCkvLCAnbnVtYmVyLmZsb2F0J10sXG4gICAgICAgICAgICBbLyZIWzAtOWEtZl0rKEBpbnRlZ2Vyc3VmZml4KS8sICdudW1iZXIuaGV4J10sXG4gICAgICAgICAgICBbLyYwWzAtN10rKEBpbnRlZ2Vyc3VmZml4KS8sICdudW1iZXIub2N0YWwnXSxcbiAgICAgICAgICAgIFsvXFxkKyhAaW50ZWdlcnN1ZmZpeCkvLCAnbnVtYmVyJ10sXG4gICAgICAgICAgICAvLyBkYXRlIGxpdGVyYWxcbiAgICAgICAgICAgIFsvIy4qIy8sICdudW1iZXInXSxcbiAgICAgICAgICAgIC8vIGRlbGltaXRlcnMgYW5kIG9wZXJhdG9yc1xuICAgICAgICAgICAgWy9be30oKVxcW1xcXV0vLCAnQGJyYWNrZXRzJ10sXG4gICAgICAgICAgICBbL0BzeW1ib2xzLywgJ2RlbGltaXRlciddLFxuICAgICAgICAgICAgLy8gc3RyaW5nc1xuICAgICAgICAgICAgWy9bXCJcXHUyMDFjXFx1MjAxZF0vLCB7IHRva2VuOiAnc3RyaW5nLnF1b3RlJywgbmV4dDogJ0BzdHJpbmcnIH1dXG4gICAgICAgIF0sXG4gICAgICAgIHdoaXRlc3BhY2U6IFtcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy8sICcnXSxcbiAgICAgICAgICAgIFsvKFxcJ3xSRU0oPyFcXHcpKS4qJC8sICdjb21tZW50J11cbiAgICAgICAgXSxcbiAgICAgICAgc3RyaW5nOiBbXG4gICAgICAgICAgICBbL1teXCJcXHUyMDFjXFx1MjAxZF0rLywgJ3N0cmluZyddLFxuICAgICAgICAgICAgWy9bXCJcXHUyMDFjXFx1MjAxZF17Mn0vLCAnc3RyaW5nLmVzY2FwZSddLFxuICAgICAgICAgICAgWy9bXCJcXHUyMDFjXFx1MjAxZF1DPy8sIHsgdG9rZW46ICdzdHJpbmcucXVvdGUnLCBuZXh0OiAnQHBvcCcgfV1cbiAgICAgICAgXVxuICAgIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9