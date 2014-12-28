// ==UserScript==
// @name         Roilan
// @namespace    http://github.com/roilan
// @version      0.1
// @description  Remove adblock node
// @author       Roilan
// @match        http://rc.tf2center.com/*
// ==/UserScript==

$('document').ready(function() {
    $('.youShallNotPass').parent().remove();
    
    // Delay required, otherwise won't work
    setTimeout(function() {
    	$('.youShallNotPassEnabled').removeAttr('style');
    }, 1);
});
