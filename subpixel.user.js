// ==UserScript==
// @name          Subpixel
// @namespace     https://github.com/tuxracer/subpixel
// @description   Restore subpixel anti-aliasing http://www.usabilitypost.com/2012/11/05/stop-fixing-font-smoothing/
// @downloadURL   https://raw.github.com/tuxracer/subpixel/master/subpixel.user.js
// @version       1.0.0
// @match         http://*/*
// @match         https://*/*
// ==/UserScript==

var headEl = document.querySelector('head')
  , styleEl = document.createElement('style')
  , styleTextNode = document.createTextNode('* { -webkit-font-smoothing: subpixel-antialiased !important; }')
  ;

styleEl.appendChild(styleTextNode);
headEl.appendChild(styleEl);
