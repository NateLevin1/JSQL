(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[68],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/xml/xml.js":
/*!**********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/xml/xml.js ***!
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
        blockComment: ['<!--', '-->']
    },
    brackets: [['<', '>']],
    autoClosingPairs: [
        { open: '<', close: '>' },
        { open: "'", close: "'" },
        { open: '"', close: '"' }
    ],
    surroundingPairs: [
        { open: '<', close: '>' },
        { open: "'", close: "'" },
        { open: '"', close: '"' }
    ]
};
var language = {
    defaultToken: '',
    tokenPostfix: '.xml',
    ignoreCase: true,
    // Useful regular expressions
    qualifiedName: /(?:[\w\.\-]+:)?[\w\.\-]+/,
    tokenizer: {
        root: [
            [/[^<&]+/, ''],
            { include: '@whitespace' },
            // Standard opening tag
            [/(<)(@qualifiedName)/, [{ token: 'delimiter' }, { token: 'tag', next: '@tag' }]],
            // Standard closing tag
            [
                /(<\/)(@qualifiedName)(\s*)(>)/,
                [{ token: 'delimiter' }, { token: 'tag' }, '', { token: 'delimiter' }]
            ],
            // Meta tags - instruction
            [/(<\?)(@qualifiedName)/, [{ token: 'delimiter' }, { token: 'metatag', next: '@tag' }]],
            // Meta tags - declaration
            [/(<\!)(@qualifiedName)/, [{ token: 'delimiter' }, { token: 'metatag', next: '@tag' }]],
            // CDATA
            [/<\!\[CDATA\[/, { token: 'delimiter.cdata', next: '@cdata' }],
            [/&\w+;/, 'string.escape']
        ],
        cdata: [
            [/[^\]]+/, ''],
            [/\]\]>/, { token: 'delimiter.cdata', next: '@pop' }],
            [/\]/, '']
        ],
        tag: [
            [/[ \t\r\n]+/, ''],
            [
                /(@qualifiedName)(\s*=\s*)("[^"]*"|'[^']*')/,
                ['attribute.name', '', 'attribute.value']
            ],
            [
                /(@qualifiedName)(\s*=\s*)("[^">?\/]*|'[^'>?\/]*)(?=[\?\/]\>)/,
                ['attribute.name', '', 'attribute.value']
            ],
            [
                /(@qualifiedName)(\s*=\s*)("[^">]*|'[^'>]*)/,
                ['attribute.name', '', 'attribute.value']
            ],
            [/@qualifiedName/, 'attribute.name'],
            [/\?>/, { token: 'delimiter', next: '@pop' }],
            [/(\/)(>)/, [{ token: 'tag' }, { token: 'delimiter', next: '@pop' }]],
            [/>/, { token: 'delimiter', next: '@pop' }]
        ],
        whitespace: [
            [/[ \t\r\n]+/, ''],
            [/<!--/, { token: 'comment', next: '@comment' }]
        ],
        comment: [
            [/[^<\-]+/, 'comment.content'],
            [/-->/, { token: 'comment', next: '@pop' }],
            [/<!--/, 'comment.content.invalid'],
            [/[<\-]/, 'comment.content']
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL3htbC94bWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVM7QUFDVDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSx5QkFBeUI7QUFDdEM7QUFDQSxzQ0FBc0MscUJBQXFCLEdBQUcsNkJBQTZCO0FBQzNGO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixxQkFBcUIsR0FBRyxlQUFlLE9BQU8scUJBQXFCO0FBQ3JGO0FBQ0E7QUFDQSx3Q0FBd0MscUJBQXFCLEdBQUcsaUNBQWlDO0FBQ2pHO0FBQ0Esd0NBQXdDLHFCQUFxQixHQUFHLGlDQUFpQztBQUNqRztBQUNBLDhCQUE4QiwyQ0FBMkM7QUFDekUsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix5Q0FBeUM7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixtQ0FBbUM7QUFDeEQsMEJBQTBCLGVBQWUsR0FBRyxtQ0FBbUM7QUFDL0UsbUJBQW1CLG1DQUFtQztBQUN0RDtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IscUNBQXFDO0FBQzNEO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixpQ0FBaUM7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiI2OC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmV4cG9ydCB2YXIgY29uZiA9IHtcbiAgICBjb21tZW50czoge1xuICAgICAgICBibG9ja0NvbW1lbnQ6IFsnPCEtLScsICctLT4nXVxuICAgIH0sXG4gICAgYnJhY2tldHM6IFtbJzwnLCAnPiddXSxcbiAgICBhdXRvQ2xvc2luZ1BhaXJzOiBbXG4gICAgICAgIHsgb3BlbjogJzwnLCBjbG9zZTogJz4nIH0sXG4gICAgICAgIHsgb3BlbjogXCInXCIsIGNsb3NlOiBcIidcIiB9LFxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH1cbiAgICBdLFxuICAgIHN1cnJvdW5kaW5nUGFpcnM6IFtcbiAgICAgICAgeyBvcGVuOiAnPCcsIGNsb3NlOiAnPicgfSxcbiAgICAgICAgeyBvcGVuOiBcIidcIiwgY2xvc2U6IFwiJ1wiIH0sXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfVxuICAgIF1cbn07XG5leHBvcnQgdmFyIGxhbmd1YWdlID0ge1xuICAgIGRlZmF1bHRUb2tlbjogJycsXG4gICAgdG9rZW5Qb3N0Zml4OiAnLnhtbCcsXG4gICAgaWdub3JlQ2FzZTogdHJ1ZSxcbiAgICAvLyBVc2VmdWwgcmVndWxhciBleHByZXNzaW9uc1xuICAgIHF1YWxpZmllZE5hbWU6IC8oPzpbXFx3XFwuXFwtXSs6KT9bXFx3XFwuXFwtXSsvLFxuICAgIHRva2VuaXplcjoge1xuICAgICAgICByb290OiBbXG4gICAgICAgICAgICBbL1tePCZdKy8sICcnXSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B3aGl0ZXNwYWNlJyB9LFxuICAgICAgICAgICAgLy8gU3RhbmRhcmQgb3BlbmluZyB0YWdcbiAgICAgICAgICAgIFsvKDwpKEBxdWFsaWZpZWROYW1lKS8sIFt7IHRva2VuOiAnZGVsaW1pdGVyJyB9LCB7IHRva2VuOiAndGFnJywgbmV4dDogJ0B0YWcnIH1dXSxcbiAgICAgICAgICAgIC8vIFN0YW5kYXJkIGNsb3NpbmcgdGFnXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLyg8XFwvKShAcXVhbGlmaWVkTmFtZSkoXFxzKikoPikvLFxuICAgICAgICAgICAgICAgIFt7IHRva2VuOiAnZGVsaW1pdGVyJyB9LCB7IHRva2VuOiAndGFnJyB9LCAnJywgeyB0b2tlbjogJ2RlbGltaXRlcicgfV1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAvLyBNZXRhIHRhZ3MgLSBpbnN0cnVjdGlvblxuICAgICAgICAgICAgWy8oPFxcPykoQHF1YWxpZmllZE5hbWUpLywgW3sgdG9rZW46ICdkZWxpbWl0ZXInIH0sIHsgdG9rZW46ICdtZXRhdGFnJywgbmV4dDogJ0B0YWcnIH1dXSxcbiAgICAgICAgICAgIC8vIE1ldGEgdGFncyAtIGRlY2xhcmF0aW9uXG4gICAgICAgICAgICBbLyg8XFwhKShAcXVhbGlmaWVkTmFtZSkvLCBbeyB0b2tlbjogJ2RlbGltaXRlcicgfSwgeyB0b2tlbjogJ21ldGF0YWcnLCBuZXh0OiAnQHRhZycgfV1dLFxuICAgICAgICAgICAgLy8gQ0RBVEFcbiAgICAgICAgICAgIFsvPFxcIVxcW0NEQVRBXFxbLywgeyB0b2tlbjogJ2RlbGltaXRlci5jZGF0YScsIG5leHQ6ICdAY2RhdGEnIH1dLFxuICAgICAgICAgICAgWy8mXFx3KzsvLCAnc3RyaW5nLmVzY2FwZSddXG4gICAgICAgIF0sXG4gICAgICAgIGNkYXRhOiBbXG4gICAgICAgICAgICBbL1teXFxdXSsvLCAnJ10sXG4gICAgICAgICAgICBbL1xcXVxcXT4vLCB7IHRva2VuOiAnZGVsaW1pdGVyLmNkYXRhJywgbmV4dDogJ0Bwb3AnIH1dLFxuICAgICAgICAgICAgWy9cXF0vLCAnJ11cbiAgICAgICAgXSxcbiAgICAgICAgdGFnOiBbXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvLCAnJ10sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLyhAcXVhbGlmaWVkTmFtZSkoXFxzKj1cXHMqKShcIlteXCJdKlwifCdbXiddKicpLyxcbiAgICAgICAgICAgICAgICBbJ2F0dHJpYnV0ZS5uYW1lJywgJycsICdhdHRyaWJ1dGUudmFsdWUnXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvKEBxdWFsaWZpZWROYW1lKShcXHMqPVxccyopKFwiW15cIj4/XFwvXSp8J1teJz4/XFwvXSopKD89W1xcP1xcL11cXD4pLyxcbiAgICAgICAgICAgICAgICBbJ2F0dHJpYnV0ZS5uYW1lJywgJycsICdhdHRyaWJ1dGUudmFsdWUnXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvKEBxdWFsaWZpZWROYW1lKShcXHMqPVxccyopKFwiW15cIj5dKnwnW14nPl0qKS8sXG4gICAgICAgICAgICAgICAgWydhdHRyaWJ1dGUubmFtZScsICcnLCAnYXR0cmlidXRlLnZhbHVlJ11cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbL0BxdWFsaWZpZWROYW1lLywgJ2F0dHJpYnV0ZS5uYW1lJ10sXG4gICAgICAgICAgICBbL1xcPz4vLCB7IHRva2VuOiAnZGVsaW1pdGVyJywgbmV4dDogJ0Bwb3AnIH1dLFxuICAgICAgICAgICAgWy8oXFwvKSg+KS8sIFt7IHRva2VuOiAndGFnJyB9LCB7IHRva2VuOiAnZGVsaW1pdGVyJywgbmV4dDogJ0Bwb3AnIH1dXSxcbiAgICAgICAgICAgIFsvPi8sIHsgdG9rZW46ICdkZWxpbWl0ZXInLCBuZXh0OiAnQHBvcCcgfV1cbiAgICAgICAgXSxcbiAgICAgICAgd2hpdGVzcGFjZTogW1xuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rLywgJyddLFxuICAgICAgICAgICAgWy88IS0tLywgeyB0b2tlbjogJ2NvbW1lbnQnLCBuZXh0OiAnQGNvbW1lbnQnIH1dXG4gICAgICAgIF0sXG4gICAgICAgIGNvbW1lbnQ6IFtcbiAgICAgICAgICAgIFsvW148XFwtXSsvLCAnY29tbWVudC5jb250ZW50J10sXG4gICAgICAgICAgICBbLy0tPi8sIHsgdG9rZW46ICdjb21tZW50JywgbmV4dDogJ0Bwb3AnIH1dLFxuICAgICAgICAgICAgWy88IS0tLywgJ2NvbW1lbnQuY29udGVudC5pbnZhbGlkJ10sXG4gICAgICAgICAgICBbL1s8XFwtXS8sICdjb21tZW50LmNvbnRlbnQnXVxuICAgICAgICBdXG4gICAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=