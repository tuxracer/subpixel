// ==UserScript==
// @name          Subpixel
// @namespace     https://github.com/tuxracer/subpixel
// @description   Restore subpixel anti-aliasing
// @downloadURL   https://raw.github.com/tuxracer/subpixel/master/subpixel.user.js
// @version       1.0.2
// @match         http://*/*
// @match         https://*/*
// ==/UserScript==

var headEl = document.querySelector('head')
  , styleEl = document.createElement('style')
  , styleTextNode = document.createTextNode('* { -webkit-font-smoothing: subpixel-antialiased !important; }')
  ;

if (typeof headEl !== 'undefined') {
  styleEl.appendChild(styleTextNode);
  headEl.appendChild(styleEl);
}
