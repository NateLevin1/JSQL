(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[41],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/php/php.js":
/*!**********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/php/php.js ***!
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
    wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\@\#\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,
    comments: {
        lineComment: '//',
        blockComment: ['/*', '*/']
    },
    brackets: [
        ['{', '}'],
        ['[', ']'],
        ['(', ')']
    ],
    autoClosingPairs: [
        { open: '{', close: '}', notIn: ['string'] },
        { open: '[', close: ']', notIn: ['string'] },
        { open: '(', close: ')', notIn: ['string'] },
        { open: '"', close: '"', notIn: ['string'] },
        { open: "'", close: "'", notIn: ['string', 'comment'] }
    ],
    folding: {
        markers: {
            start: new RegExp('^\\s*(#|//)region\\b'),
            end: new RegExp('^\\s*(#|//)endregion\\b')
        }
    }
};
var language = {
    defaultToken: '',
    tokenPostfix: '',
    // ignoreCase: true,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            [/<\?((php)|=)?/, { token: '@rematch', switchTo: '@phpInSimpleState.root' }],
            [/<!DOCTYPE/, 'metatag.html', '@doctype'],
            [/<!--/, 'comment.html', '@comment'],
            [/(<)(\w+)(\/>)/, ['delimiter.html', 'tag.html', 'delimiter.html']],
            [/(<)(script)/, ['delimiter.html', { token: 'tag.html', next: '@script' }]],
            [/(<)(style)/, ['delimiter.html', { token: 'tag.html', next: '@style' }]],
            [/(<)([:\w]+)/, ['delimiter.html', { token: 'tag.html', next: '@otherTag' }]],
            [/(<\/)(\w+)/, ['delimiter.html', { token: 'tag.html', next: '@otherTag' }]],
            [/</, 'delimiter.html'],
            [/[^<]+/] // text
        ],
        doctype: [
            [/<\?((php)|=)?/, { token: '@rematch', switchTo: '@phpInSimpleState.comment' }],
            [/[^>]+/, 'metatag.content.html'],
            [/>/, 'metatag.html', '@pop']
        ],
        comment: [
            [/<\?((php)|=)?/, { token: '@rematch', switchTo: '@phpInSimpleState.comment' }],
            [/-->/, 'comment.html', '@pop'],
            [/[^-]+/, 'comment.content.html'],
            [/./, 'comment.content.html']
        ],
        otherTag: [
            [/<\?((php)|=)?/, { token: '@rematch', switchTo: '@phpInSimpleState.otherTag' }],
            [/\/?>/, 'delimiter.html', '@pop'],
            [/"([^"]*)"/, 'attribute.value'],
            [/'([^']*)'/, 'attribute.value'],
            [/[\w\-]+/, 'attribute.name'],
            [/=/, 'delimiter'],
            [/[ \t\r\n]+/] // whitespace
        ],
        // -- BEGIN <script> tags handling
        // After <script
        script: [
            [/<\?((php)|=)?/, { token: '@rematch', switchTo: '@phpInSimpleState.script' }],
            [/type/, 'attribute.name', '@scriptAfterType'],
            [/"([^"]*)"/, 'attribute.value'],
            [/'([^']*)'/, 'attribute.value'],
            [/[\w\-]+/, 'attribute.name'],
            [/=/, 'delimiter'],
            [
                />/,
                {
                    token: 'delimiter.html',
                    next: '@scriptEmbedded.text/javascript',
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
            [
                /<\?((php)|=)?/,
                {
                    token: '@rematch',
                    switchTo: '@phpInSimpleState.scriptAfterType'
                }
            ],
            [/=/, 'delimiter', '@scriptAfterTypeEquals'],
            [
                />/,
                {
                    token: 'delimiter.html',
                    next: '@scriptEmbedded.text/javascript',
                    nextEmbedded: 'text/javascript'
                }
            ],
            [/[ \t\r\n]+/],
            [/<\/script\s*>/, { token: '@rematch', next: '@pop' }]
        ],
        // After <script ... type =
        scriptAfterTypeEquals: [
            [
                /<\?((php)|=)?/,
                {
                    token: '@rematch',
                    switchTo: '@phpInSimpleState.scriptAfterTypeEquals'
                }
            ],
            [
                /"([^"]*)"/,
                {
                    token: 'attribute.value',
                    switchTo: '@scriptWithCustomType.$1'
                }
            ],
            [
                /'([^']*)'/,
                {
                    token: 'attribute.value',
                    switchTo: '@scriptWithCustomType.$1'
                }
            ],
            [
                />/,
                {
                    token: 'delimiter.html',
                    next: '@scriptEmbedded.text/javascript',
                    nextEmbedded: 'text/javascript'
                }
            ],
            [/[ \t\r\n]+/],
            [/<\/script\s*>/, { token: '@rematch', next: '@pop' }]
        ],
        // After <script ... type = $S2
        scriptWithCustomType: [
            [
                /<\?((php)|=)?/,
                {
                    token: '@rematch',
                    switchTo: '@phpInSimpleState.scriptWithCustomType.$S2'
                }
            ],
            [
                />/,
                {
                    token: 'delimiter.html',
                    next: '@scriptEmbedded.$S2',
                    nextEmbedded: '$S2'
                }
            ],
            [/"([^"]*)"/, 'attribute.value'],
            [/'([^']*)'/, 'attribute.value'],
            [/[\w\-]+/, 'attribute.name'],
            [/=/, 'delimiter'],
            [/[ \t\r\n]+/],
            [/<\/script\s*>/, { token: '@rematch', next: '@pop' }]
        ],
        scriptEmbedded: [
            [
                /<\?((php)|=)?/,
                {
                    token: '@rematch',
                    switchTo: '@phpInEmbeddedState.scriptEmbedded.$S2',
                    nextEmbedded: '@pop'
                }
            ],
            [/<\/script/, { token: '@rematch', next: '@pop', nextEmbedded: '@pop' }]
        ],
        // -- END <script> tags handling
        // -- BEGIN <style> tags handling
        // After <style
        style: [
            [/<\?((php)|=)?/, { token: '@rematch', switchTo: '@phpInSimpleState.style' }],
            [/type/, 'attribute.name', '@styleAfterType'],
            [/"([^"]*)"/, 'attribute.value'],
            [/'([^']*)'/, 'attribute.value'],
            [/[\w\-]+/, 'attribute.name'],
            [/=/, 'delimiter'],
            [
                />/,
                {
                    token: 'delimiter.html',
                    next: '@styleEmbedded.text/css',
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
            [
                /<\?((php)|=)?/,
                {
                    token: '@rematch',
                    switchTo: '@phpInSimpleState.styleAfterType'
                }
            ],
            [/=/, 'delimiter', '@styleAfterTypeEquals'],
            [
                />/,
                {
                    token: 'delimiter.html',
                    next: '@styleEmbedded.text/css',
                    nextEmbedded: 'text/css'
                }
            ],
            [/[ \t\r\n]+/],
            [/<\/style\s*>/, { token: '@rematch', next: '@pop' }]
        ],
        // After <style ... type =
        styleAfterTypeEquals: [
            [
                /<\?((php)|=)?/,
                {
                    token: '@rematch',
                    switchTo: '@phpInSimpleState.styleAfterTypeEquals'
                }
            ],
            [
                /"([^"]*)"/,
                {
                    token: 'attribute.value',
                    switchTo: '@styleWithCustomType.$1'
                }
            ],
            [
                /'([^']*)'/,
                {
                    token: 'attribute.value',
                    switchTo: '@styleWithCustomType.$1'
                }
            ],
            [
                />/,
                {
                    token: 'delimiter.html',
                    next: '@styleEmbedded.text/css',
                    nextEmbedded: 'text/css'
                }
            ],
            [/[ \t\r\n]+/],
            [/<\/style\s*>/, { token: '@rematch', next: '@pop' }]
        ],
        // After <style ... type = $S2
        styleWithCustomType: [
            [
                /<\?((php)|=)?/,
                {
                    token: '@rematch',
                    switchTo: '@phpInSimpleState.styleWithCustomType.$S2'
                }
            ],
            [
                />/,
                {
                    token: 'delimiter.html',
                    next: '@styleEmbedded.$S2',
                    nextEmbedded: '$S2'
                }
            ],
            [/"([^"]*)"/, 'attribute.value'],
            [/'([^']*)'/, 'attribute.value'],
            [/[\w\-]+/, 'attribute.name'],
            [/=/, 'delimiter'],
            [/[ \t\r\n]+/],
            [/<\/style\s*>/, { token: '@rematch', next: '@pop' }]
        ],
        styleEmbedded: [
            [
                /<\?((php)|=)?/,
                {
                    token: '@rematch',
                    switchTo: '@phpInEmbeddedState.styleEmbedded.$S2',
                    nextEmbedded: '@pop'
                }
            ],
            [/<\/style/, { token: '@rematch', next: '@pop', nextEmbedded: '@pop' }]
        ],
        // -- END <style> tags handling
        phpInSimpleState: [
            [/<\?((php)|=)?/, 'metatag.php'],
            [/\?>/, { token: 'metatag.php', switchTo: '@$S2.$S3' }],
            { include: 'phpRoot' }
        ],
        phpInEmbeddedState: [
            [/<\?((php)|=)?/, 'metatag.php'],
            [
                /\?>/,
                {
                    token: 'metatag.php',
                    switchTo: '@$S2.$S3',
                    nextEmbedded: '$S3'
                }
            ],
            { include: 'phpRoot' }
        ],
        phpRoot: [
            [
                /[a-zA-Z_]\w*/,
                {
                    cases: {
                        '@phpKeywords': { token: 'keyword.php' },
                        '@phpCompileTimeConstants': { token: 'constant.php' },
                        '@default': 'identifier.php'
                    }
                }
            ],
            [
                /[$a-zA-Z_]\w*/,
                {
                    cases: {
                        '@phpPreDefinedVariables': {
                            token: 'variable.predefined.php'
                        },
                        '@default': 'variable.php'
                    }
                }
            ],
            // brackets
            [/[{}]/, 'delimiter.bracket.php'],
            [/[\[\]]/, 'delimiter.array.php'],
            [/[()]/, 'delimiter.parenthesis.php'],
            // whitespace
            [/[ \t\r\n]+/],
            // comments
            [/(#|\/\/)$/, 'comment.php'],
            [/(#|\/\/)/, 'comment.php', '@phpLineComment'],
            // block comments
            [/\/\*/, 'comment.php', '@phpComment'],
            // strings
            [/"/, 'string.php', '@phpDoubleQuoteString'],
            [/'/, 'string.php', '@phpSingleQuoteString'],
            // delimiters
            [/[\+\-\*\%\&\|\^\~\!\=\<\>\/\?\;\:\.\,\@]/, 'delimiter.php'],
            // numbers
            [/\d*\d+[eE]([\-+]?\d+)?/, 'number.float.php'],
            [/\d*\.\d+([eE][\-+]?\d+)?/, 'number.float.php'],
            [/0[xX][0-9a-fA-F']*[0-9a-fA-F]/, 'number.hex.php'],
            [/0[0-7']*[0-7]/, 'number.octal.php'],
            [/0[bB][0-1']*[0-1]/, 'number.binary.php'],
            [/\d[\d']*/, 'number.php'],
            [/\d/, 'number.php']
        ],
        phpComment: [
            [/\*\//, 'comment.php', '@pop'],
            [/[^*]+/, 'comment.php'],
            [/./, 'comment.php']
        ],
        phpLineComment: [
            [/\?>/, { token: '@rematch', next: '@pop' }],
            [/.$/, 'comment.php', '@pop'],
            [/[^?]+$/, 'comment.php', '@pop'],
            [/[^?]+/, 'comment.php'],
            [/./, 'comment.php']
        ],
        phpDoubleQuoteString: [
            [/[^\\"]+/, 'string.php'],
            [/@escapes/, 'string.escape.php'],
            [/\\./, 'string.escape.invalid.php'],
            [/"/, 'string.php', '@pop']
        ],
        phpSingleQuoteString: [
            [/[^\\']+/, 'string.php'],
            [/@escapes/, 'string.escape.php'],
            [/\\./, 'string.escape.invalid.php'],
            [/'/, 'string.php', '@pop']
        ]
    },
    phpKeywords: [
        'abstract',
        'and',
        'array',
        'as',
        'break',
        'callable',
        'case',
        'catch',
        'cfunction',
        'class',
        'clone',
        'const',
        'continue',
        'declare',
        'default',
        'do',
        'else',
        'elseif',
        'enddeclare',
        'endfor',
        'endforeach',
        'endif',
        'endswitch',
        'endwhile',
        'extends',
        'false',
        'final',
        'for',
        'foreach',
        'function',
        'global',
        'goto',
        'if',
        'implements',
        'interface',
        'instanceof',
        'insteadof',
        'namespace',
        'new',
        'null',
        'object',
        'old_function',
        'or',
        'private',
        'protected',
        'public',
        'resource',
        'static',
        'switch',
        'throw',
        'trait',
        'try',
        'true',
        'use',
        'var',
        'while',
        'xor',
        'die',
        'echo',
        'empty',
        'exit',
        'eval',
        'include',
        'include_once',
        'isset',
        'list',
        'require',
        'require_once',
        'return',
        'print',
        'unset',
        'yield',
        '__construct'
    ],
    phpCompileTimeConstants: [
        '__CLASS__',
        '__DIR__',
        '__FILE__',
        '__LINE__',
        '__NAMESPACE__',
        '__METHOD__',
        '__FUNCTION__',
        '__TRAIT__'
    ],
    phpPreDefinedVariables: [
        '$GLOBALS',
        '$_SERVER',
        '$_GET',
        '$_POST',
        '$_FILES',
        '$_REQUEST',
        '$_SESSION',
        '$_ENV',
        '$_COOKIE',
        '$php_errormsg',
        '$HTTP_RAW_POST_DATA',
        '$http_response_header',
        '$argc',
        '$argv'
    ],
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/
};
// TESTED WITH
// <style type="text/css" >
//   .boo { background: blue;
//   <?=''?>
//   }
//   .boo { background: blue;  <?=''?>  }
// </style>
// <!--
// <?= '' ?>
// -->
// <?php
// // The next line contains a syntax error:
// __construct
// if () {
// 	return "The parser recovers from this type of syntax error";
// }
// ?>
// <html>
// <head>
// 	<title <?=''?>>Example page</title>
//   <style <?=''?>>
//     .boo { background: blue; <?=''?> }
//   </style>
// </head>
// <body>
// <script <?=''?> type<?=''?>=<?=''?>"text/javascript"<?=''?>>
// 	// Some PHP embedded inside JS
// 	// Generated <?=date('l, F jS, Y')?>
// 	var server_token = <?=rand(5, 10000)?>
// 	if (typeof server_token === 'number') {
// 		alert('token: ' + server_token);
// 	}
// </script>
// <div>
// Hello
// <? if (isset($user)) { ?>
// 	<b><?=$user?></b>
// <? } else { ?>
// 	<i>guest</i>
// <? } ?>
// !
// </div>
// <?php
// 	/* Example PHP file
// 	multiline comment
// 	*/
//  # Another single line comment
// 	$cards = array("ah", "ac", "ad", "as",
// 		"2h", "2c", "2d", "2s",
// 		"3h", "3c", "3d", "3s",
// 		"4h", "4c", "4d", "4s",
// 		"5h", "5c", "5d", "5s",
// 		"6h", "6c", "6d", "6s",
// 		"7h", "7c", "7d", "7s",
// 		"8h", "8c", "8d", "8s",
// 		"9h", "9c", "9d", "9s",
// 		"th", "tc", "td", "ts",
// 		"jh", "jc", "jd", "js",
// 		"qh", "qc", "qd", "qs",
// 		"kh", "kc", "kd", "ks");
// 	srand(time());
// 	for($i = 0; $i < 52; $i++) {
// 		$count = count($cards);
// 		$random = (rand()%$count);
// 		if($cards[$random] == "") {
// 			$i--;
// 		} else {
// 			$deck[] = $cards[$random];
// 			$cards[$random] = "";
// 		}
// 	}
// $_GET
// __CLASS__
// 	srand(time());
// 	$starting_point = (rand()%51);
// 	print("Starting point for cut cards is: $starting_point<p>");
// 	// display shuffled cards (EXAMPLE ONLY)
// 	for ($index = 0; $index < 52; $index++) {
// 		if ($starting_point == 52) { $starting_point = 0; }
// 		print("Uncut Point: <strong>$deck[$index]</strong> ");
// 		print("Starting Point: <strong>$deck[$starting_point]</strong><br>");
// 		$starting_point++;
// 	}
// ?>
// </body>
// </html>


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL3BocC9waHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCxvRUFBb0UsSUFBSSxNQUFNO0FBQzlFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLFdBQVcsS0FBSztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxZQUFZLHNCQUFzQjtBQUNwRCxTQUFTLDJDQUEyQztBQUNwRCxTQUFTLDJDQUEyQztBQUNwRCxTQUFTLDJDQUEyQztBQUNwRCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHdEQUF3RDtBQUN2RjtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QscUNBQXFDO0FBQ3JGLCtDQUErQyxvQ0FBb0M7QUFDbkYsZ0RBQWdELHVDQUF1QztBQUN2RiwrQ0FBK0MsdUNBQXVDO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDJEQUEyRDtBQUMxRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiwyREFBMkQ7QUFDMUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiw0REFBNEQ7QUFDM0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsMERBQTBEO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELHdDQUF3QztBQUN4RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QyxxQkFBcUI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiNDEuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5leHBvcnQgdmFyIGNvbmYgPSB7XG4gICAgd29yZFBhdHRlcm46IC8oLT9cXGQqXFwuXFxkXFx3Kil8KFteXFxgXFx+XFwhXFxAXFwjXFwlXFxeXFwmXFwqXFwoXFwpXFwtXFw9XFwrXFxbXFx7XFxdXFx9XFxcXFxcfFxcO1xcOlxcJ1xcXCJcXCxcXC5cXDxcXD5cXC9cXD9cXHNdKykvZyxcbiAgICBjb21tZW50czoge1xuICAgICAgICBsaW5lQ29tbWVudDogJy8vJyxcbiAgICAgICAgYmxvY2tDb21tZW50OiBbJy8qJywgJyovJ11cbiAgICB9LFxuICAgIGJyYWNrZXRzOiBbXG4gICAgICAgIFsneycsICd9J10sXG4gICAgICAgIFsnWycsICddJ10sXG4gICAgICAgIFsnKCcsICcpJ11cbiAgICBdLFxuICAgIGF1dG9DbG9zaW5nUGFpcnM6IFtcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScsIG5vdEluOiBbJ3N0cmluZyddIH0sXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nLCBub3RJbjogWydzdHJpbmcnXSB9LFxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJywgbm90SW46IFsnc3RyaW5nJ10gfSxcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJywgbm90SW46IFsnc3RyaW5nJ10gfSxcbiAgICAgICAgeyBvcGVuOiBcIidcIiwgY2xvc2U6IFwiJ1wiLCBub3RJbjogWydzdHJpbmcnLCAnY29tbWVudCddIH1cbiAgICBdLFxuICAgIGZvbGRpbmc6IHtcbiAgICAgICAgbWFya2Vyczoge1xuICAgICAgICAgICAgc3RhcnQ6IG5ldyBSZWdFeHAoJ15cXFxccyooI3wvLylyZWdpb25cXFxcYicpLFxuICAgICAgICAgICAgZW5kOiBuZXcgUmVnRXhwKCdeXFxcXHMqKCN8Ly8pZW5kcmVnaW9uXFxcXGInKVxuICAgICAgICB9XG4gICAgfVxufTtcbmV4cG9ydCB2YXIgbGFuZ3VhZ2UgPSB7XG4gICAgZGVmYXVsdFRva2VuOiAnJyxcbiAgICB0b2tlblBvc3RmaXg6ICcnLFxuICAgIC8vIGlnbm9yZUNhc2U6IHRydWUsXG4gICAgLy8gVGhlIG1haW4gdG9rZW5pemVyIGZvciBvdXIgbGFuZ3VhZ2VzXG4gICAgdG9rZW5pemVyOiB7XG4gICAgICAgIHJvb3Q6IFtcbiAgICAgICAgICAgIFsvPFxcPygocGhwKXw9KT8vLCB7IHRva2VuOiAnQHJlbWF0Y2gnLCBzd2l0Y2hUbzogJ0BwaHBJblNpbXBsZVN0YXRlLnJvb3QnIH1dLFxuICAgICAgICAgICAgWy88IURPQ1RZUEUvLCAnbWV0YXRhZy5odG1sJywgJ0Bkb2N0eXBlJ10sXG4gICAgICAgICAgICBbLzwhLS0vLCAnY29tbWVudC5odG1sJywgJ0Bjb21tZW50J10sXG4gICAgICAgICAgICBbLyg8KShcXHcrKShcXC8+KS8sIFsnZGVsaW1pdGVyLmh0bWwnLCAndGFnLmh0bWwnLCAnZGVsaW1pdGVyLmh0bWwnXV0sXG4gICAgICAgICAgICBbLyg8KShzY3JpcHQpLywgWydkZWxpbWl0ZXIuaHRtbCcsIHsgdG9rZW46ICd0YWcuaHRtbCcsIG5leHQ6ICdAc2NyaXB0JyB9XV0sXG4gICAgICAgICAgICBbLyg8KShzdHlsZSkvLCBbJ2RlbGltaXRlci5odG1sJywgeyB0b2tlbjogJ3RhZy5odG1sJywgbmV4dDogJ0BzdHlsZScgfV1dLFxuICAgICAgICAgICAgWy8oPCkoWzpcXHddKykvLCBbJ2RlbGltaXRlci5odG1sJywgeyB0b2tlbjogJ3RhZy5odG1sJywgbmV4dDogJ0BvdGhlclRhZycgfV1dLFxuICAgICAgICAgICAgWy8oPFxcLykoXFx3KykvLCBbJ2RlbGltaXRlci5odG1sJywgeyB0b2tlbjogJ3RhZy5odG1sJywgbmV4dDogJ0BvdGhlclRhZycgfV1dLFxuICAgICAgICAgICAgWy88LywgJ2RlbGltaXRlci5odG1sJ10sXG4gICAgICAgICAgICBbL1tePF0rL10gLy8gdGV4dFxuICAgICAgICBdLFxuICAgICAgICBkb2N0eXBlOiBbXG4gICAgICAgICAgICBbLzxcXD8oKHBocCl8PSk/LywgeyB0b2tlbjogJ0ByZW1hdGNoJywgc3dpdGNoVG86ICdAcGhwSW5TaW1wbGVTdGF0ZS5jb21tZW50JyB9XSxcbiAgICAgICAgICAgIFsvW14+XSsvLCAnbWV0YXRhZy5jb250ZW50Lmh0bWwnXSxcbiAgICAgICAgICAgIFsvPi8sICdtZXRhdGFnLmh0bWwnLCAnQHBvcCddXG4gICAgICAgIF0sXG4gICAgICAgIGNvbW1lbnQ6IFtcbiAgICAgICAgICAgIFsvPFxcPygocGhwKXw9KT8vLCB7IHRva2VuOiAnQHJlbWF0Y2gnLCBzd2l0Y2hUbzogJ0BwaHBJblNpbXBsZVN0YXRlLmNvbW1lbnQnIH1dLFxuICAgICAgICAgICAgWy8tLT4vLCAnY29tbWVudC5odG1sJywgJ0Bwb3AnXSxcbiAgICAgICAgICAgIFsvW14tXSsvLCAnY29tbWVudC5jb250ZW50Lmh0bWwnXSxcbiAgICAgICAgICAgIFsvLi8sICdjb21tZW50LmNvbnRlbnQuaHRtbCddXG4gICAgICAgIF0sXG4gICAgICAgIG90aGVyVGFnOiBbXG4gICAgICAgICAgICBbLzxcXD8oKHBocCl8PSk/LywgeyB0b2tlbjogJ0ByZW1hdGNoJywgc3dpdGNoVG86ICdAcGhwSW5TaW1wbGVTdGF0ZS5vdGhlclRhZycgfV0sXG4gICAgICAgICAgICBbL1xcLz8+LywgJ2RlbGltaXRlci5odG1sJywgJ0Bwb3AnXSxcbiAgICAgICAgICAgIFsvXCIoW15cIl0qKVwiLywgJ2F0dHJpYnV0ZS52YWx1ZSddLFxuICAgICAgICAgICAgWy8nKFteJ10qKScvLCAnYXR0cmlidXRlLnZhbHVlJ10sXG4gICAgICAgICAgICBbL1tcXHdcXC1dKy8sICdhdHRyaWJ1dGUubmFtZSddLFxuICAgICAgICAgICAgWy89LywgJ2RlbGltaXRlciddLFxuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rL10gLy8gd2hpdGVzcGFjZVxuICAgICAgICBdLFxuICAgICAgICAvLyAtLSBCRUdJTiA8c2NyaXB0PiB0YWdzIGhhbmRsaW5nXG4gICAgICAgIC8vIEFmdGVyIDxzY3JpcHRcbiAgICAgICAgc2NyaXB0OiBbXG4gICAgICAgICAgICBbLzxcXD8oKHBocCl8PSk/LywgeyB0b2tlbjogJ0ByZW1hdGNoJywgc3dpdGNoVG86ICdAcGhwSW5TaW1wbGVTdGF0ZS5zY3JpcHQnIH1dLFxuICAgICAgICAgICAgWy90eXBlLywgJ2F0dHJpYnV0ZS5uYW1lJywgJ0BzY3JpcHRBZnRlclR5cGUnXSxcbiAgICAgICAgICAgIFsvXCIoW15cIl0qKVwiLywgJ2F0dHJpYnV0ZS52YWx1ZSddLFxuICAgICAgICAgICAgWy8nKFteJ10qKScvLCAnYXR0cmlidXRlLnZhbHVlJ10sXG4gICAgICAgICAgICBbL1tcXHdcXC1dKy8sICdhdHRyaWJ1dGUubmFtZSddLFxuICAgICAgICAgICAgWy89LywgJ2RlbGltaXRlciddLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC8+LyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiAnZGVsaW1pdGVyLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICBuZXh0OiAnQHNjcmlwdEVtYmVkZGVkLnRleHQvamF2YXNjcmlwdCcsXG4gICAgICAgICAgICAgICAgICAgIG5leHRFbWJlZGRlZDogJ3RleHQvamF2YXNjcmlwdCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rL10sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLyg8XFwvKShzY3JpcHRcXHMqKSg+KS8sXG4gICAgICAgICAgICAgICAgWydkZWxpbWl0ZXIuaHRtbCcsICd0YWcuaHRtbCcsIHsgdG9rZW46ICdkZWxpbWl0ZXIuaHRtbCcsIG5leHQ6ICdAcG9wJyB9XVxuICAgICAgICAgICAgXVxuICAgICAgICBdLFxuICAgICAgICAvLyBBZnRlciA8c2NyaXB0IC4uLiB0eXBlXG4gICAgICAgIHNjcmlwdEFmdGVyVHlwZTogW1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC88XFw/KChwaHApfD0pPy8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ0ByZW1hdGNoJyxcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoVG86ICdAcGhwSW5TaW1wbGVTdGF0ZS5zY3JpcHRBZnRlclR5cGUnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFsvPS8sICdkZWxpbWl0ZXInLCAnQHNjcmlwdEFmdGVyVHlwZUVxdWFscyddLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC8+LyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiAnZGVsaW1pdGVyLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICBuZXh0OiAnQHNjcmlwdEVtYmVkZGVkLnRleHQvamF2YXNjcmlwdCcsXG4gICAgICAgICAgICAgICAgICAgIG5leHRFbWJlZGRlZDogJ3RleHQvamF2YXNjcmlwdCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rL10sXG4gICAgICAgICAgICBbLzxcXC9zY3JpcHRcXHMqPi8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIG5leHQ6ICdAcG9wJyB9XVxuICAgICAgICBdLFxuICAgICAgICAvLyBBZnRlciA8c2NyaXB0IC4uLiB0eXBlID1cbiAgICAgICAgc2NyaXB0QWZ0ZXJUeXBlRXF1YWxzOiBbXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLzxcXD8oKHBocCl8PSk/LyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiAnQHJlbWF0Y2gnLFxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2hUbzogJ0BwaHBJblNpbXBsZVN0YXRlLnNjcmlwdEFmdGVyVHlwZUVxdWFscydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9cIihbXlwiXSopXCIvLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46ICdhdHRyaWJ1dGUudmFsdWUnLFxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2hUbzogJ0BzY3JpcHRXaXRoQ3VzdG9tVHlwZS4kMSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC8nKFteJ10qKScvLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46ICdhdHRyaWJ1dGUudmFsdWUnLFxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2hUbzogJ0BzY3JpcHRXaXRoQ3VzdG9tVHlwZS4kMSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC8+LyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiAnZGVsaW1pdGVyLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICBuZXh0OiAnQHNjcmlwdEVtYmVkZGVkLnRleHQvamF2YXNjcmlwdCcsXG4gICAgICAgICAgICAgICAgICAgIG5leHRFbWJlZGRlZDogJ3RleHQvamF2YXNjcmlwdCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rL10sXG4gICAgICAgICAgICBbLzxcXC9zY3JpcHRcXHMqPi8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIG5leHQ6ICdAcG9wJyB9XVxuICAgICAgICBdLFxuICAgICAgICAvLyBBZnRlciA8c2NyaXB0IC4uLiB0eXBlID0gJFMyXG4gICAgICAgIHNjcmlwdFdpdGhDdXN0b21UeXBlOiBbXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLzxcXD8oKHBocCl8PSk/LyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiAnQHJlbWF0Y2gnLFxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2hUbzogJ0BwaHBJblNpbXBsZVN0YXRlLnNjcmlwdFdpdGhDdXN0b21UeXBlLiRTMidcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC8+LyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiAnZGVsaW1pdGVyLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICBuZXh0OiAnQHNjcmlwdEVtYmVkZGVkLiRTMicsXG4gICAgICAgICAgICAgICAgICAgIG5leHRFbWJlZGRlZDogJyRTMidcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgWy9cIihbXlwiXSopXCIvLCAnYXR0cmlidXRlLnZhbHVlJ10sXG4gICAgICAgICAgICBbLycoW14nXSopJy8sICdhdHRyaWJ1dGUudmFsdWUnXSxcbiAgICAgICAgICAgIFsvW1xcd1xcLV0rLywgJ2F0dHJpYnV0ZS5uYW1lJ10sXG4gICAgICAgICAgICBbLz0vLCAnZGVsaW1pdGVyJ10sXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvXSxcbiAgICAgICAgICAgIFsvPFxcL3NjcmlwdFxccyo+LywgeyB0b2tlbjogJ0ByZW1hdGNoJywgbmV4dDogJ0Bwb3AnIH1dXG4gICAgICAgIF0sXG4gICAgICAgIHNjcmlwdEVtYmVkZGVkOiBbXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLzxcXD8oKHBocCl8PSk/LyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiAnQHJlbWF0Y2gnLFxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2hUbzogJ0BwaHBJbkVtYmVkZGVkU3RhdGUuc2NyaXB0RW1iZWRkZWQuJFMyJyxcbiAgICAgICAgICAgICAgICAgICAgbmV4dEVtYmVkZGVkOiAnQHBvcCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgWy88XFwvc2NyaXB0LywgeyB0b2tlbjogJ0ByZW1hdGNoJywgbmV4dDogJ0Bwb3AnLCBuZXh0RW1iZWRkZWQ6ICdAcG9wJyB9XVxuICAgICAgICBdLFxuICAgICAgICAvLyAtLSBFTkQgPHNjcmlwdD4gdGFncyBoYW5kbGluZ1xuICAgICAgICAvLyAtLSBCRUdJTiA8c3R5bGU+IHRhZ3MgaGFuZGxpbmdcbiAgICAgICAgLy8gQWZ0ZXIgPHN0eWxlXG4gICAgICAgIHN0eWxlOiBbXG4gICAgICAgICAgICBbLzxcXD8oKHBocCl8PSk/LywgeyB0b2tlbjogJ0ByZW1hdGNoJywgc3dpdGNoVG86ICdAcGhwSW5TaW1wbGVTdGF0ZS5zdHlsZScgfV0sXG4gICAgICAgICAgICBbL3R5cGUvLCAnYXR0cmlidXRlLm5hbWUnLCAnQHN0eWxlQWZ0ZXJUeXBlJ10sXG4gICAgICAgICAgICBbL1wiKFteXCJdKilcIi8sICdhdHRyaWJ1dGUudmFsdWUnXSxcbiAgICAgICAgICAgIFsvJyhbXiddKiknLywgJ2F0dHJpYnV0ZS52YWx1ZSddLFxuICAgICAgICAgICAgWy9bXFx3XFwtXSsvLCAnYXR0cmlidXRlLm5hbWUnXSxcbiAgICAgICAgICAgIFsvPS8sICdkZWxpbWl0ZXInXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvPi8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ2RlbGltaXRlci5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgbmV4dDogJ0BzdHlsZUVtYmVkZGVkLnRleHQvY3NzJyxcbiAgICAgICAgICAgICAgICAgICAgbmV4dEVtYmVkZGVkOiAndGV4dC9jc3MnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy9dLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC8oPFxcLykoc3R5bGVcXHMqKSg+KS8sXG4gICAgICAgICAgICAgICAgWydkZWxpbWl0ZXIuaHRtbCcsICd0YWcuaHRtbCcsIHsgdG9rZW46ICdkZWxpbWl0ZXIuaHRtbCcsIG5leHQ6ICdAcG9wJyB9XVxuICAgICAgICAgICAgXVxuICAgICAgICBdLFxuICAgICAgICAvLyBBZnRlciA8c3R5bGUgLi4uIHR5cGVcbiAgICAgICAgc3R5bGVBZnRlclR5cGU6IFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvPFxcPygocGhwKXw9KT8vLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46ICdAcmVtYXRjaCcsXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaFRvOiAnQHBocEluU2ltcGxlU3RhdGUuc3R5bGVBZnRlclR5cGUnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFsvPS8sICdkZWxpbWl0ZXInLCAnQHN0eWxlQWZ0ZXJUeXBlRXF1YWxzJ10sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLz4vLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46ICdkZWxpbWl0ZXIuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgIG5leHQ6ICdAc3R5bGVFbWJlZGRlZC50ZXh0L2NzcycsXG4gICAgICAgICAgICAgICAgICAgIG5leHRFbWJlZGRlZDogJ3RleHQvY3NzJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvXSxcbiAgICAgICAgICAgIFsvPFxcL3N0eWxlXFxzKj4vLCB7IHRva2VuOiAnQHJlbWF0Y2gnLCBuZXh0OiAnQHBvcCcgfV1cbiAgICAgICAgXSxcbiAgICAgICAgLy8gQWZ0ZXIgPHN0eWxlIC4uLiB0eXBlID1cbiAgICAgICAgc3R5bGVBZnRlclR5cGVFcXVhbHM6IFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvPFxcPygocGhwKXw9KT8vLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46ICdAcmVtYXRjaCcsXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaFRvOiAnQHBocEluU2ltcGxlU3RhdGUuc3R5bGVBZnRlclR5cGVFcXVhbHMnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvXCIoW15cIl0qKVwiLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiAnYXR0cmlidXRlLnZhbHVlJyxcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoVG86ICdAc3R5bGVXaXRoQ3VzdG9tVHlwZS4kMSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC8nKFteJ10qKScvLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46ICdhdHRyaWJ1dGUudmFsdWUnLFxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2hUbzogJ0BzdHlsZVdpdGhDdXN0b21UeXBlLiQxJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLz4vLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46ICdkZWxpbWl0ZXIuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgIG5leHQ6ICdAc3R5bGVFbWJlZGRlZC50ZXh0L2NzcycsXG4gICAgICAgICAgICAgICAgICAgIG5leHRFbWJlZGRlZDogJ3RleHQvY3NzJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvXSxcbiAgICAgICAgICAgIFsvPFxcL3N0eWxlXFxzKj4vLCB7IHRva2VuOiAnQHJlbWF0Y2gnLCBuZXh0OiAnQHBvcCcgfV1cbiAgICAgICAgXSxcbiAgICAgICAgLy8gQWZ0ZXIgPHN0eWxlIC4uLiB0eXBlID0gJFMyXG4gICAgICAgIHN0eWxlV2l0aEN1c3RvbVR5cGU6IFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvPFxcPygocGhwKXw9KT8vLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46ICdAcmVtYXRjaCcsXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaFRvOiAnQHBocEluU2ltcGxlU3RhdGUuc3R5bGVXaXRoQ3VzdG9tVHlwZS4kUzInXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvPi8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ2RlbGltaXRlci5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgbmV4dDogJ0BzdHlsZUVtYmVkZGVkLiRTMicsXG4gICAgICAgICAgICAgICAgICAgIG5leHRFbWJlZGRlZDogJyRTMidcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgWy9cIihbXlwiXSopXCIvLCAnYXR0cmlidXRlLnZhbHVlJ10sXG4gICAgICAgICAgICBbLycoW14nXSopJy8sICdhdHRyaWJ1dGUudmFsdWUnXSxcbiAgICAgICAgICAgIFsvW1xcd1xcLV0rLywgJ2F0dHJpYnV0ZS5uYW1lJ10sXG4gICAgICAgICAgICBbLz0vLCAnZGVsaW1pdGVyJ10sXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvXSxcbiAgICAgICAgICAgIFsvPFxcL3N0eWxlXFxzKj4vLCB7IHRva2VuOiAnQHJlbWF0Y2gnLCBuZXh0OiAnQHBvcCcgfV1cbiAgICAgICAgXSxcbiAgICAgICAgc3R5bGVFbWJlZGRlZDogW1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC88XFw/KChwaHApfD0pPy8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ0ByZW1hdGNoJyxcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoVG86ICdAcGhwSW5FbWJlZGRlZFN0YXRlLnN0eWxlRW1iZWRkZWQuJFMyJyxcbiAgICAgICAgICAgICAgICAgICAgbmV4dEVtYmVkZGVkOiAnQHBvcCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgWy88XFwvc3R5bGUvLCB7IHRva2VuOiAnQHJlbWF0Y2gnLCBuZXh0OiAnQHBvcCcsIG5leHRFbWJlZGRlZDogJ0Bwb3AnIH1dXG4gICAgICAgIF0sXG4gICAgICAgIC8vIC0tIEVORCA8c3R5bGU+IHRhZ3MgaGFuZGxpbmdcbiAgICAgICAgcGhwSW5TaW1wbGVTdGF0ZTogW1xuICAgICAgICAgICAgWy88XFw/KChwaHApfD0pPy8sICdtZXRhdGFnLnBocCddLFxuICAgICAgICAgICAgWy9cXD8+LywgeyB0b2tlbjogJ21ldGF0YWcucGhwJywgc3dpdGNoVG86ICdAJFMyLiRTMycgfV0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdwaHBSb290JyB9XG4gICAgICAgIF0sXG4gICAgICAgIHBocEluRW1iZWRkZWRTdGF0ZTogW1xuICAgICAgICAgICAgWy88XFw/KChwaHApfD0pPy8sICdtZXRhdGFnLnBocCddLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9cXD8+LyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiAnbWV0YXRhZy5waHAnLFxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2hUbzogJ0AkUzIuJFMzJyxcbiAgICAgICAgICAgICAgICAgICAgbmV4dEVtYmVkZGVkOiAnJFMzJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdwaHBSb290JyB9XG4gICAgICAgIF0sXG4gICAgICAgIHBocFJvb3Q6IFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvW2EtekEtWl9dXFx3Ki8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0BwaHBLZXl3b3Jkcyc6IHsgdG9rZW46ICdrZXl3b3JkLnBocCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAcGhwQ29tcGlsZVRpbWVDb25zdGFudHMnOiB7IHRva2VuOiAnY29uc3RhbnQucGhwJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ2lkZW50aWZpZXIucGhwJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvWyRhLXpBLVpfXVxcdyovLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdAcGhwUHJlRGVmaW5lZFZhcmlhYmxlcyc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ3ZhcmlhYmxlLnByZWRlZmluZWQucGhwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICd2YXJpYWJsZS5waHAnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgLy8gYnJhY2tldHNcbiAgICAgICAgICAgIFsvW3t9XS8sICdkZWxpbWl0ZXIuYnJhY2tldC5waHAnXSxcbiAgICAgICAgICAgIFsvW1xcW1xcXV0vLCAnZGVsaW1pdGVyLmFycmF5LnBocCddLFxuICAgICAgICAgICAgWy9bKCldLywgJ2RlbGltaXRlci5wYXJlbnRoZXNpcy5waHAnXSxcbiAgICAgICAgICAgIC8vIHdoaXRlc3BhY2VcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy9dLFxuICAgICAgICAgICAgLy8gY29tbWVudHNcbiAgICAgICAgICAgIFsvKCN8XFwvXFwvKSQvLCAnY29tbWVudC5waHAnXSxcbiAgICAgICAgICAgIFsvKCN8XFwvXFwvKS8sICdjb21tZW50LnBocCcsICdAcGhwTGluZUNvbW1lbnQnXSxcbiAgICAgICAgICAgIC8vIGJsb2NrIGNvbW1lbnRzXG4gICAgICAgICAgICBbL1xcL1xcKi8sICdjb21tZW50LnBocCcsICdAcGhwQ29tbWVudCddLFxuICAgICAgICAgICAgLy8gc3RyaW5nc1xuICAgICAgICAgICAgWy9cIi8sICdzdHJpbmcucGhwJywgJ0BwaHBEb3VibGVRdW90ZVN0cmluZyddLFxuICAgICAgICAgICAgWy8nLywgJ3N0cmluZy5waHAnLCAnQHBocFNpbmdsZVF1b3RlU3RyaW5nJ10sXG4gICAgICAgICAgICAvLyBkZWxpbWl0ZXJzXG4gICAgICAgICAgICBbL1tcXCtcXC1cXCpcXCVcXCZcXHxcXF5cXH5cXCFcXD1cXDxcXD5cXC9cXD9cXDtcXDpcXC5cXCxcXEBdLywgJ2RlbGltaXRlci5waHAnXSxcbiAgICAgICAgICAgIC8vIG51bWJlcnNcbiAgICAgICAgICAgIFsvXFxkKlxcZCtbZUVdKFtcXC0rXT9cXGQrKT8vLCAnbnVtYmVyLmZsb2F0LnBocCddLFxuICAgICAgICAgICAgWy9cXGQqXFwuXFxkKyhbZUVdW1xcLStdP1xcZCspPy8sICdudW1iZXIuZmxvYXQucGhwJ10sXG4gICAgICAgICAgICBbLzBbeFhdWzAtOWEtZkEtRiddKlswLTlhLWZBLUZdLywgJ251bWJlci5oZXgucGhwJ10sXG4gICAgICAgICAgICBbLzBbMC03J10qWzAtN10vLCAnbnVtYmVyLm9jdGFsLnBocCddLFxuICAgICAgICAgICAgWy8wW2JCXVswLTEnXSpbMC0xXS8sICdudW1iZXIuYmluYXJ5LnBocCddLFxuICAgICAgICAgICAgWy9cXGRbXFxkJ10qLywgJ251bWJlci5waHAnXSxcbiAgICAgICAgICAgIFsvXFxkLywgJ251bWJlci5waHAnXVxuICAgICAgICBdLFxuICAgICAgICBwaHBDb21tZW50OiBbXG4gICAgICAgICAgICBbL1xcKlxcLy8sICdjb21tZW50LnBocCcsICdAcG9wJ10sXG4gICAgICAgICAgICBbL1teKl0rLywgJ2NvbW1lbnQucGhwJ10sXG4gICAgICAgICAgICBbLy4vLCAnY29tbWVudC5waHAnXVxuICAgICAgICBdLFxuICAgICAgICBwaHBMaW5lQ29tbWVudDogW1xuICAgICAgICAgICAgWy9cXD8+LywgeyB0b2tlbjogJ0ByZW1hdGNoJywgbmV4dDogJ0Bwb3AnIH1dLFxuICAgICAgICAgICAgWy8uJC8sICdjb21tZW50LnBocCcsICdAcG9wJ10sXG4gICAgICAgICAgICBbL1teP10rJC8sICdjb21tZW50LnBocCcsICdAcG9wJ10sXG4gICAgICAgICAgICBbL1teP10rLywgJ2NvbW1lbnQucGhwJ10sXG4gICAgICAgICAgICBbLy4vLCAnY29tbWVudC5waHAnXVxuICAgICAgICBdLFxuICAgICAgICBwaHBEb3VibGVRdW90ZVN0cmluZzogW1xuICAgICAgICAgICAgWy9bXlxcXFxcIl0rLywgJ3N0cmluZy5waHAnXSxcbiAgICAgICAgICAgIFsvQGVzY2FwZXMvLCAnc3RyaW5nLmVzY2FwZS5waHAnXSxcbiAgICAgICAgICAgIFsvXFxcXC4vLCAnc3RyaW5nLmVzY2FwZS5pbnZhbGlkLnBocCddLFxuICAgICAgICAgICAgWy9cIi8sICdzdHJpbmcucGhwJywgJ0Bwb3AnXVxuICAgICAgICBdLFxuICAgICAgICBwaHBTaW5nbGVRdW90ZVN0cmluZzogW1xuICAgICAgICAgICAgWy9bXlxcXFwnXSsvLCAnc3RyaW5nLnBocCddLFxuICAgICAgICAgICAgWy9AZXNjYXBlcy8sICdzdHJpbmcuZXNjYXBlLnBocCddLFxuICAgICAgICAgICAgWy9cXFxcLi8sICdzdHJpbmcuZXNjYXBlLmludmFsaWQucGhwJ10sXG4gICAgICAgICAgICBbLycvLCAnc3RyaW5nLnBocCcsICdAcG9wJ11cbiAgICAgICAgXVxuICAgIH0sXG4gICAgcGhwS2V5d29yZHM6IFtcbiAgICAgICAgJ2Fic3RyYWN0JyxcbiAgICAgICAgJ2FuZCcsXG4gICAgICAgICdhcnJheScsXG4gICAgICAgICdhcycsXG4gICAgICAgICdicmVhaycsXG4gICAgICAgICdjYWxsYWJsZScsXG4gICAgICAgICdjYXNlJyxcbiAgICAgICAgJ2NhdGNoJyxcbiAgICAgICAgJ2NmdW5jdGlvbicsXG4gICAgICAgICdjbGFzcycsXG4gICAgICAgICdjbG9uZScsXG4gICAgICAgICdjb25zdCcsXG4gICAgICAgICdjb250aW51ZScsXG4gICAgICAgICdkZWNsYXJlJyxcbiAgICAgICAgJ2RlZmF1bHQnLFxuICAgICAgICAnZG8nLFxuICAgICAgICAnZWxzZScsXG4gICAgICAgICdlbHNlaWYnLFxuICAgICAgICAnZW5kZGVjbGFyZScsXG4gICAgICAgICdlbmRmb3InLFxuICAgICAgICAnZW5kZm9yZWFjaCcsXG4gICAgICAgICdlbmRpZicsXG4gICAgICAgICdlbmRzd2l0Y2gnLFxuICAgICAgICAnZW5kd2hpbGUnLFxuICAgICAgICAnZXh0ZW5kcycsXG4gICAgICAgICdmYWxzZScsXG4gICAgICAgICdmaW5hbCcsXG4gICAgICAgICdmb3InLFxuICAgICAgICAnZm9yZWFjaCcsXG4gICAgICAgICdmdW5jdGlvbicsXG4gICAgICAgICdnbG9iYWwnLFxuICAgICAgICAnZ290bycsXG4gICAgICAgICdpZicsXG4gICAgICAgICdpbXBsZW1lbnRzJyxcbiAgICAgICAgJ2ludGVyZmFjZScsXG4gICAgICAgICdpbnN0YW5jZW9mJyxcbiAgICAgICAgJ2luc3RlYWRvZicsXG4gICAgICAgICduYW1lc3BhY2UnLFxuICAgICAgICAnbmV3JyxcbiAgICAgICAgJ251bGwnLFxuICAgICAgICAnb2JqZWN0JyxcbiAgICAgICAgJ29sZF9mdW5jdGlvbicsXG4gICAgICAgICdvcicsXG4gICAgICAgICdwcml2YXRlJyxcbiAgICAgICAgJ3Byb3RlY3RlZCcsXG4gICAgICAgICdwdWJsaWMnLFxuICAgICAgICAncmVzb3VyY2UnLFxuICAgICAgICAnc3RhdGljJyxcbiAgICAgICAgJ3N3aXRjaCcsXG4gICAgICAgICd0aHJvdycsXG4gICAgICAgICd0cmFpdCcsXG4gICAgICAgICd0cnknLFxuICAgICAgICAndHJ1ZScsXG4gICAgICAgICd1c2UnLFxuICAgICAgICAndmFyJyxcbiAgICAgICAgJ3doaWxlJyxcbiAgICAgICAgJ3hvcicsXG4gICAgICAgICdkaWUnLFxuICAgICAgICAnZWNobycsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdleGl0JyxcbiAgICAgICAgJ2V2YWwnLFxuICAgICAgICAnaW5jbHVkZScsXG4gICAgICAgICdpbmNsdWRlX29uY2UnLFxuICAgICAgICAnaXNzZXQnLFxuICAgICAgICAnbGlzdCcsXG4gICAgICAgICdyZXF1aXJlJyxcbiAgICAgICAgJ3JlcXVpcmVfb25jZScsXG4gICAgICAgICdyZXR1cm4nLFxuICAgICAgICAncHJpbnQnLFxuICAgICAgICAndW5zZXQnLFxuICAgICAgICAneWllbGQnLFxuICAgICAgICAnX19jb25zdHJ1Y3QnXG4gICAgXSxcbiAgICBwaHBDb21waWxlVGltZUNvbnN0YW50czogW1xuICAgICAgICAnX19DTEFTU19fJyxcbiAgICAgICAgJ19fRElSX18nLFxuICAgICAgICAnX19GSUxFX18nLFxuICAgICAgICAnX19MSU5FX18nLFxuICAgICAgICAnX19OQU1FU1BBQ0VfXycsXG4gICAgICAgICdfX01FVEhPRF9fJyxcbiAgICAgICAgJ19fRlVOQ1RJT05fXycsXG4gICAgICAgICdfX1RSQUlUX18nXG4gICAgXSxcbiAgICBwaHBQcmVEZWZpbmVkVmFyaWFibGVzOiBbXG4gICAgICAgICckR0xPQkFMUycsXG4gICAgICAgICckX1NFUlZFUicsXG4gICAgICAgICckX0dFVCcsXG4gICAgICAgICckX1BPU1QnLFxuICAgICAgICAnJF9GSUxFUycsXG4gICAgICAgICckX1JFUVVFU1QnLFxuICAgICAgICAnJF9TRVNTSU9OJyxcbiAgICAgICAgJyRfRU5WJyxcbiAgICAgICAgJyRfQ09PS0lFJyxcbiAgICAgICAgJyRwaHBfZXJyb3Jtc2cnLFxuICAgICAgICAnJEhUVFBfUkFXX1BPU1RfREFUQScsXG4gICAgICAgICckaHR0cF9yZXNwb25zZV9oZWFkZXInLFxuICAgICAgICAnJGFyZ2MnLFxuICAgICAgICAnJGFyZ3YnXG4gICAgXSxcbiAgICBlc2NhcGVzOiAvXFxcXCg/OlthYmZucnR2XFxcXFwiJ118eFswLTlBLUZhLWZdezEsNH18dVswLTlBLUZhLWZdezR9fFVbMC05QS1GYS1mXXs4fSkvXG59O1xuLy8gVEVTVEVEIFdJVEhcbi8vIDxzdHlsZSB0eXBlPVwidGV4dC9jc3NcIiA+XG4vLyAgIC5ib28geyBiYWNrZ3JvdW5kOiBibHVlO1xuLy8gICA8Pz0nJz8+XG4vLyAgIH1cbi8vICAgLmJvbyB7IGJhY2tncm91bmQ6IGJsdWU7ICA8Pz0nJz8+ICB9XG4vLyA8L3N0eWxlPlxuLy8gPCEtLVxuLy8gPD89ICcnID8+XG4vLyAtLT5cbi8vIDw/cGhwXG4vLyAvLyBUaGUgbmV4dCBsaW5lIGNvbnRhaW5zIGEgc3ludGF4IGVycm9yOlxuLy8gX19jb25zdHJ1Y3Rcbi8vIGlmICgpIHtcbi8vIFx0cmV0dXJuIFwiVGhlIHBhcnNlciByZWNvdmVycyBmcm9tIHRoaXMgdHlwZSBvZiBzeW50YXggZXJyb3JcIjtcbi8vIH1cbi8vID8+XG4vLyA8aHRtbD5cbi8vIDxoZWFkPlxuLy8gXHQ8dGl0bGUgPD89Jyc/Pj5FeGFtcGxlIHBhZ2U8L3RpdGxlPlxuLy8gICA8c3R5bGUgPD89Jyc/Pj5cbi8vICAgICAuYm9vIHsgYmFja2dyb3VuZDogYmx1ZTsgPD89Jyc/PiB9XG4vLyAgIDwvc3R5bGU+XG4vLyA8L2hlYWQ+XG4vLyA8Ym9keT5cbi8vIDxzY3JpcHQgPD89Jyc/PiB0eXBlPD89Jyc/Pj08Pz0nJz8+XCJ0ZXh0L2phdmFzY3JpcHRcIjw/PScnPz4+XG4vLyBcdC8vIFNvbWUgUEhQIGVtYmVkZGVkIGluc2lkZSBKU1xuLy8gXHQvLyBHZW5lcmF0ZWQgPD89ZGF0ZSgnbCwgRiBqUywgWScpPz5cbi8vIFx0dmFyIHNlcnZlcl90b2tlbiA9IDw/PXJhbmQoNSwgMTAwMDApPz5cbi8vIFx0aWYgKHR5cGVvZiBzZXJ2ZXJfdG9rZW4gPT09ICdudW1iZXInKSB7XG4vLyBcdFx0YWxlcnQoJ3Rva2VuOiAnICsgc2VydmVyX3Rva2VuKTtcbi8vIFx0fVxuLy8gPC9zY3JpcHQ+XG4vLyA8ZGl2PlxuLy8gSGVsbG9cbi8vIDw/IGlmIChpc3NldCgkdXNlcikpIHsgPz5cbi8vIFx0PGI+PD89JHVzZXI/PjwvYj5cbi8vIDw/IH0gZWxzZSB7ID8+XG4vLyBcdDxpPmd1ZXN0PC9pPlxuLy8gPD8gfSA/PlxuLy8gIVxuLy8gPC9kaXY+XG4vLyA8P3BocFxuLy8gXHQvKiBFeGFtcGxlIFBIUCBmaWxlXG4vLyBcdG11bHRpbGluZSBjb21tZW50XG4vLyBcdCovXG4vLyAgIyBBbm90aGVyIHNpbmdsZSBsaW5lIGNvbW1lbnRcbi8vIFx0JGNhcmRzID0gYXJyYXkoXCJhaFwiLCBcImFjXCIsIFwiYWRcIiwgXCJhc1wiLFxuLy8gXHRcdFwiMmhcIiwgXCIyY1wiLCBcIjJkXCIsIFwiMnNcIixcbi8vIFx0XHRcIjNoXCIsIFwiM2NcIiwgXCIzZFwiLCBcIjNzXCIsXG4vLyBcdFx0XCI0aFwiLCBcIjRjXCIsIFwiNGRcIiwgXCI0c1wiLFxuLy8gXHRcdFwiNWhcIiwgXCI1Y1wiLCBcIjVkXCIsIFwiNXNcIixcbi8vIFx0XHRcIjZoXCIsIFwiNmNcIiwgXCI2ZFwiLCBcIjZzXCIsXG4vLyBcdFx0XCI3aFwiLCBcIjdjXCIsIFwiN2RcIiwgXCI3c1wiLFxuLy8gXHRcdFwiOGhcIiwgXCI4Y1wiLCBcIjhkXCIsIFwiOHNcIixcbi8vIFx0XHRcIjloXCIsIFwiOWNcIiwgXCI5ZFwiLCBcIjlzXCIsXG4vLyBcdFx0XCJ0aFwiLCBcInRjXCIsIFwidGRcIiwgXCJ0c1wiLFxuLy8gXHRcdFwiamhcIiwgXCJqY1wiLCBcImpkXCIsIFwianNcIixcbi8vIFx0XHRcInFoXCIsIFwicWNcIiwgXCJxZFwiLCBcInFzXCIsXG4vLyBcdFx0XCJraFwiLCBcImtjXCIsIFwia2RcIiwgXCJrc1wiKTtcbi8vIFx0c3JhbmQodGltZSgpKTtcbi8vIFx0Zm9yKCRpID0gMDsgJGkgPCA1MjsgJGkrKykge1xuLy8gXHRcdCRjb3VudCA9IGNvdW50KCRjYXJkcyk7XG4vLyBcdFx0JHJhbmRvbSA9IChyYW5kKCklJGNvdW50KTtcbi8vIFx0XHRpZigkY2FyZHNbJHJhbmRvbV0gPT0gXCJcIikge1xuLy8gXHRcdFx0JGktLTtcbi8vIFx0XHR9IGVsc2Uge1xuLy8gXHRcdFx0JGRlY2tbXSA9ICRjYXJkc1skcmFuZG9tXTtcbi8vIFx0XHRcdCRjYXJkc1skcmFuZG9tXSA9IFwiXCI7XG4vLyBcdFx0fVxuLy8gXHR9XG4vLyAkX0dFVFxuLy8gX19DTEFTU19fXG4vLyBcdHNyYW5kKHRpbWUoKSk7XG4vLyBcdCRzdGFydGluZ19wb2ludCA9IChyYW5kKCklNTEpO1xuLy8gXHRwcmludChcIlN0YXJ0aW5nIHBvaW50IGZvciBjdXQgY2FyZHMgaXM6ICRzdGFydGluZ19wb2ludDxwPlwiKTtcbi8vIFx0Ly8gZGlzcGxheSBzaHVmZmxlZCBjYXJkcyAoRVhBTVBMRSBPTkxZKVxuLy8gXHRmb3IgKCRpbmRleCA9IDA7ICRpbmRleCA8IDUyOyAkaW5kZXgrKykge1xuLy8gXHRcdGlmICgkc3RhcnRpbmdfcG9pbnQgPT0gNTIpIHsgJHN0YXJ0aW5nX3BvaW50ID0gMDsgfVxuLy8gXHRcdHByaW50KFwiVW5jdXQgUG9pbnQ6IDxzdHJvbmc+JGRlY2tbJGluZGV4XTwvc3Ryb25nPiBcIik7XG4vLyBcdFx0cHJpbnQoXCJTdGFydGluZyBQb2ludDogPHN0cm9uZz4kZGVja1skc3RhcnRpbmdfcG9pbnRdPC9zdHJvbmc+PGJyPlwiKTtcbi8vIFx0XHQkc3RhcnRpbmdfcG9pbnQrKztcbi8vIFx0fVxuLy8gPz5cbi8vIDwvYm9keT5cbi8vIDwvaHRtbD5cbiJdLCJzb3VyY2VSb290IjoiIn0=