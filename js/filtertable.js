/************************************************************ Licensed Materials - Property of IBM** 5724-U18** (C) Copyright IBM Corp. 2015  All Rights Reserved.** US Government Users Restricted Rights - Use, duplication, or* disclosure restricted by GSA ADP Schedule Contract with IBM Corp.***********************************************************//******************************************************************************* * Information: Using this Javascript one can make a HTML table type ahead * filterable. *  * Working: 1. Click on table header (this action shows input box) 2. Input * characters for filtering the column * *  * How to implement: 1.Include this js in the header 2.Give class name * "filterable" in the table tag eg: <table class="fiterable"> *  * NB: class name is "fiterable" NOT filterTable Developed by: Walton * Simendy/INDIA/IBM Version 1.0 ******************************************************************************/var stIsIE = /* @cc_on!@ */false;var isFirefox = 1;//var isFirefox = 0;//if (/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {//	;//	isFirefox = 1;//}var tablesLoaded = false;var isFilterOn = false;filtertable = {	rowdata : [],	prevfilter : "",	curcol : 0,	init : function() {				//quit if tables have not been loaded yet		if (tablesLoaded == false)			return;		// quit if this function has already been called		if (arguments.callee.done)			return;		// flag this function so we don't do the same thing twice		arguments.callee.done = true;		// kill the timer		if (_timer)			clearInterval(_timer);		if (!document.createElement || !document.getElementsByTagName)			return;		filtertable.DATE_RE = /^(\d\d?)[\/\.-](\d\d?)[\/\.-]((\d\d)?\d\d)$/;		forEach(document.getElementsByTagName('table'), function(table) {	//		if (table.className.search(/\bfilterable\b/) != -1) {				filtertable.makeFilterable(table);	//		}		});	},	makeFilterable : function(table) {		if (table.getElementsByTagName('thead').length == 0) {			// table doesn't have a tHead. Since it should have, create one and			// put the first table row in it.			the = document.createElement('thead');			the.appendChild(table.rows[0]);			table.insertBefore(the, table.firstChild);		}		// Safari doesn't support table.tHead, sigh		if (table.tHead == null)			table.tHead = table.getElementsByTagName('thead')[0];		if (table.tHead.rows.length != 1)			return; // can't cope with two header rows		// work through each column and calculate its type		headrow = table.tHead.rows[0].cells;		for (var i = 0; i < headrow.length; i++) {			headrow[i].filtertable_columnindex = i;			headrow[i].filtertable_tbody = table.tBodies[0];			addListener(					headrow[i],					"click",					function(e) {						if (this.className.search(/\bfiltertable_filter_on\b/) != -1) {							// if we're already filtered by this column, just							return;						}						if (isFilterOn)							filtertable.doTAFilter("", table,									this.filtertable_columnindex); // removes																	// filter						theadrow = this.parentNode;						forEach(theadrow.childNodes, function(cell) {							if (cell.nodeType == 1) { // an element								cell.className = cell.className.replace(										'filtertable_filter_on', '');								cell.className = cell.className.replace(										'filtertable_filter_off', '');							}						});						filterinput = table.getElementsByTagName('span');						if (filterinput.length > 0) {							for (i = 0; i < filterinput.length; i++) {								if (filterinput[i].className										.search(/\bfiltertable_filter_input\b/) != -1) {									filterinput[i].parentNode											.removeChild(filterinput[i]);								}							}						}						this.className += ' filtertable_filter_on';						filterinput = document.createElement('span');						filterinput.className = "filtertable_filter_input";						filterinput.innerHTML = '<br><input style="height:22px;width:120px;color:#ff0000;font-style:itailc; font-size:12;" name="filterkey" type="text" value=""  onkeyUp="filtertable.doTAFilter(this.value,this.parentNode.parentNode.parentNode.parentNode.parentNode,'								+ this.filtertable_columnindex + ')" />'						this.appendChild(filterinput);						filtertable.prevfilter = "";						col = this.filtertable_columnindex;						filtertable.curcol = col;						isFilterOn = true;						filterbox = this.getElementsByTagName("input");						if (filterbox.length > 0) {							for (i = 0; i < filterbox.length; i++) {								if (filterbox[i] != "undefined"										&& typeof filterbox == "object") {									if (filterbox[i].name == "filterkey"											&& filterbox[i].value.length == 0)										filterbox[i].focus();								}							}						}					}) // addListener		} // for	},	doTAFilter : function(filter, table, col) {		var fval = filter.toLowerCase()		var flen = fval.length;		var chkvisible = false;		var chkhidden = false;		pflen = filtertable.prevfilter.length;		if (pflen > 0) {			if (flen > pflen) {				if (filtertable.prevfilter == fval.substring(0, pflen))					chkvisible = true;			} else if (flen < pflen) {				if (fval == filtertable.prevfilter.substring(0, flen))					chkhidden = true;			}		}		allrows = table.rows;		for (i = 1; i < allrows.length; i++) {			rval = filtertable.getInnerText(allrows[i].cells[col])					.toLowerCase()			if (chkvisible == true) {				if (allrows[i].style.display != "none") {					if (rval.search(fval) != -1) {					} else {						allrows[i].style.display = 'none';					}				}			} else if (chkhidden == true) {				if (allrows[i].style.display == "none") {					if (rval.search(fval) != -1) {						if (isFirefox == 1) {							allrows[i].style.display = 'table-row';						} else {							allrows[i].style.display = 'block';						}					}				}			} else {				if (rval.search(fval) != -1) {					if (isFirefox == 1) {						allrows[i].style.display = 'table-row';					} else {						allrows[i].style.display = 'block';					}				} else {					allrows[i].style.display = 'none';				}			}		}		filtertable.prevfilter = fval;	},	getInnerText : function(node) {		// gets the text we want to use for sorting for a cell.		// strips leading and trailing whitespace.		// this is *not* a generic getInnerText function; it's special to		// filtertable.		// for example, you can override the cell text with a customkey		// attribute.		// it also gets .value for <input> fields.		hasInputs = (typeof node.getElementsByTagName == 'function')				&& node.getElementsByTagName('input').length;		if (node.getAttribute("filtertable_customkey") != null) {			return node.getAttribute("filtertable_customkey");		} else if (typeof node.textContent != 'undefined' && !hasInputs) {			return node.textContent.replace(/^\s+|\s+$/g, '');		} else if (typeof node.innerText != 'undefined' && !hasInputs) {			return node.innerText.replace(/^\s+|\s+$/g, '');		} else if (typeof node.text != 'undefined' && !hasInputs) {			return node.text.replace(/^\s+|\s+$/g, '');		} else {			switch (node.nodeType) {			case 3:				if (node.nodeName.toLowerCase() == 'input') {					return node.value.replace(/^\s+|\s+$/g, '');				}			case 4:				return node.nodeValue.replace(/^\s+|\s+$/g, '');				break;			case 1:			case 11:				var innerText = '';				for (var i = 0; i < node.childNodes.length; i++) {					innerText += filtertable.getInnerText(node.childNodes[i]);				}				return innerText.replace(/^\s+|\s+$/g, '');				break;			default:				return '';			}		}	}}/* for Mozilla/Opera9 */if (document.addEventListener) {	document.addEventListener("DOMContentLoaded", filtertable.init, false);}/* for Internet Explorer *//* @cc_on @ *//* * @if (@_win32) document.write("<script id=__ie_onload defer * src=javascript:void(0)><\/script>"); var script = * document.getElementById("__ie_onload"); script.onreadystatechange = * function() { if (this.readyState == "complete") { filtertable.init(); // call * the onload handler } }; /*@end @ *//* for Safari */if (/WebKit/i.test(navigator.userAgent)) { // sniff	var _timer = setInterval(function() {		if (/loaded|complete/.test(document.readyState)) {			filtertable.init(); // call the onload handler		}	}, 10);}/* for other browsers */window.onload = filtertable.init;function addListener(control, eventName, handler) {	// Check if control is a string	// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Operators/Comparison_Operators	if (control === String(control))		control = document.getElementById(control);	if (control.addEventListener) // Standard W3C	{		return control.addEventListener(eventName, handler, false);	} else if (control.attachEvent) // IExplore	{		return control.attachEvent("on" + eventName, function() {			handler.call(control);		});	} else {		return false;	}}// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/forEachif (!Array.forEach) { // mozilla already supports this	Array.forEach = function(array, block, context) {		for (var i = 0; i < array.length; i++) {			block.call(context, array[i], i, array);		}	};}function forEach(object, block, context) {	if (object) {		if (object.forEach instanceof Function) {			// the object implements a custom forEach method so use that			object.forEach(block, context);			return;		} else if (typeof object.length == "number") {			// the object is array-like			Array.forEach(object, block, context);		}	}};