// GreaseMonkey script to redirect timesofindia articles to printer friendly versions
// Author: Pradeep Sivakumar
// Version: 0.1
// Copyright (c) 2005, Pradeep
// Released under the GPL license: http://www.gnu.org/copyleft/gpl.html
// =====================================
// ==UserScript==
// @name          Times of India printer friendly version
// @namespace    http://timesofindia.indiatimes.com
// @description	  Redirect timesofindia article to a printer friendly version
//@include 	http://www.timesofindia.com/*
//@include 	http://timesofindia.com/*
// @include       http://timesofindia.indiatimes.com/*
// @include       http://www.timesofindia.indiatimes.com/*
// ==/UserScript==

(function() {
    var curLink = parent.location.href;
	var lPos = curLink.lastIndexOf('/');
	var fPos = curLink.indexOf('1');
	if (fPos != -1) {
			if ( curLink.charAt(lPos+1) == '1' ) {
				fs = curLink.substring(fPos,fPos+7);
				var redir = "msid-"+fs+",prtpage-1";
				var redirFile = curLink.replace(fs,redir);
				if( redirFile ) document.location = redirFile
				}
			} 
})();
