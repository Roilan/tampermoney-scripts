// ==UserScript==
// @name         Hacker News
// @namespace    http://github.com/Roilan
// @version      0.1
// @description  Removes target from Hacker News
// @author       You
// @match        https://news.ycombinator.com/*
// @grant        none
// ==/UserScript==


document.querySelector('a[href*="news?"]').removeAttribute('target');
