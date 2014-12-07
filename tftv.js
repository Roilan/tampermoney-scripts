// ==UserScript==
// @name         Roilan
// @namespace    http://roilan.net  / http://github.com/roilan
// @version      0.1
// @description  toggle show/hide stream list and expand stream width
// @author       Roilan
// @match        http://teamfortress.tv/stream/*
// ==/UserScript==

$('document').ready(function() {
    // add hide button
    $('#stream-container').prepend('<button id="hideStream">Hide</button>');
    $('#stream-container').prepend('<button id="showStream">Show</button>');

    //hide chat
    $('#hideStream').on('click', function() {
    	$('#ctrl-container').css('display', 'none');
    	$('#stream-container').css('padding-right', '0');
    });

    //show chat
    $('#showStream').on('click', function() {
    	$('#ctrl-container').css('display', 'block');
    	$('#stream-container').css('padding-right', '320px');
    });
    
});
