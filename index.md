<!--
* Licensed Materials - Property of IBM
*
* 5724-U18
*
* (C) Copyright IBM Corp. 2014  All Rights Reserved.
*
* US Government Users Restricted Rights - Use, duplication, or
* disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 -->

<!DOCTYPE html>
<html>
<head>
<title>ERD</title>
<link rel="stylesheet" href="css/style.css">
<script src="js/filtertable.js"></script>
</head>
<body>
<h1>Maximo ERD</h1>
<p>&nbsp;</p>
<h2>MAXIMO OBJECTS</h2>

<p id="MaximoObjectsTable">This will be replaced by generated data.</p>


<script src="tables.js"></script>
<script src="nonPersistent.js"></script>
<script src="views.js"></script>
<script src="internals.js"></script>


<script>

window.onload = createTables;


function createTables() {

var mobjsTables = JSON.stringify(tables);
var tablesObj = JSON.parse(mobjsTables);
var maxTables = createSingleTable('TABLES', tablesObj);


var mobjsNonPersistent = JSON.stringify(nonPersistent);
var nonPersistentObj = JSON.parse(mobjsNonPersistent);
var maxnonPersistent = createSingleTable('NONPERSISTENT', nonPersistentObj);


var mobjsViews = JSON.stringify(views);
var viewsObj = JSON.parse(mobjsViews);
var maxViews = createSingleTable('VIEWS', viewsObj);

var mobjsInternals = JSON.stringify(internals);
var internalsObj = JSON.parse(mobjsInternals);
var maxInternals = createSingleTable('INTERNALS', internalsObj);


var objectTables =  maxTables + maxnonPersistent + maxViews + maxInternals;
document.getElementById('MaximoObjectsTable').innerHTML = objectTables;

tablesLoaded = true;
filtertable.init();

}

function createSingleTable (TABLETITLE, obj)  {


	var sizeObjects = obj.maxobjs.length;

	var tbody = '';
    var theader = '<div style="float: left"><table border="1">\n';
    var header = '';
	header += '<thead>';
	header += '<tr>';
	header +=  '<th scope="col">'
	header += TABLETITLE;
	header += '</th>';
	header += '</tr>';
	header += '</thead>';
    for (var i = 0; i < sizeObjects; i++) {
        tbody += '<tr>';
        tbody += '<td>';
 		tbody += addAnchorForObject(obj.maxobjs[i]);
        tbody += '</td>';
    	tbody += '</tr>\n';
    }  
    
    var tfooter = '</table></div>';

	var table = theader + header + tbody + tfooter;
	return table;



}

function addAnchorForObject(objectName) {
	var anchorInfo = '';
	anchorInfo += '<a href="objects/'
	anchorInfo += objectName
	anchorInfo += '/'
	anchorInfo += objectName
	anchorInfo += '.html'
	anchorInfo += '">'
	anchorInfo += objectName
	anchorInfo += '</a>'
	return anchorInfo;
}

</script>


</body>
</html>
