mos = {
    "objectName": "CTRL_MAPCONTROL",
    "className": "psdi.app.designer.virtual.ControlSet",
    "description": "Map Control",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": false,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "ID",
            "required": true,
            "persistent": false,
            "title": "Control ID",
            "remarks": "The unique identifier of the control.",
            "sameAsAttribute": "ID",
            "sameAsObject": "MAXLABELS"
        },
        {
            "attributeName": "DATASRC",
            "required": false,
            "persistent": false,
            "title": "Data source ID",
            "remarks": "The primary data source for this application. To use a different data source for this control, specify another data source ID.",
            "sameAsAttribute": "ID",
            "sameAsObject": "MAXLABELS"
        },
        {
            "attributeName": "WIDTH",
            "required": false,
            "persistent": false,
            "title": "Width",
            "remarks": "To increase or decrease the width of a map, adjust the number of pixels.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HEIGHT",
            "required": false,
            "persistent": false,
            "title": "Height",
            "remarks": "To increase or decrease the height of a map, adjust the number of pixels.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BEANCLASS",
            "required": false,
            "persistent": false,
            "title": "Bean class",
            "remarks": "You can specify the name of a data bean class to use when creating the data source for the control. If you do not specify a data bean class, the default psdi.webclient.system.DataBean class is used.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INITIALY",
            "required": false,
            "persistent": false,
            "title": "Latitude (Y)",
            "remarks": "Specify the latitude (Y) value of the map. The map location is defined by the latitude coordinates, longitude coordinates, and the zoom level. If you do not enter the zoom level or coordinates, the default view is what is defined on Map Manager application.",
            "sameAsAttribute": "LATITUDEY",
            "sameAsObject": "SERVICEADDRESS"
        },
        {
            "attributeName": "INITIALX",
            "required": false,
            "persistent": false,
            "title": "Longitude (X)",
            "remarks": "Specify the longitude (X) value of the map. The map location is defined by the latitude coordinates, longitude coordinates, and the zoom level. If you do not enter the zoom level or coordinates, the default view  is what is defined on Map Manager application.",
            "sameAsAttribute": "LONGITUDEX",
            "sameAsObject": "SERVICEADDRESS"
        },
        {
            "attributeName": "ZOOMLEVEL",
            "required": false,
            "persistent": false,
            "title": "Zoom level",
            "remarks": "Specify the zoom level of the map extent. The map location is defined by the latitude coordinates, longitude coordinates, and the zoom level. If you do not enter the zoom level or coordinates, the default view  is what is defined on Map Manager application.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAPOPTIONS",
            "required": false,
            "persistent": false,
            "title": "Map provider options",
            "remarks": "Specify any options from your map provider in the following format. Replace the open and close parentheses with curly brackets. (bingmaps:(),gmaps:(),spatial:()). For example, to specify scale, zoom, and street view controls from Google maps, enter (bingmaps:(scaleControl:off, zoomControlOptions:(style: google.maps.ZoomControlStyle.SMALL), streetViewControl:off, gmaps:(), spatial:()) ",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAPVIEWONLY",
            "required": false,
            "persistent": false,
            "title": "Map is read only",
            "remarks": "Select this option to specify that the map is read only. If the map is read only, users cannot drag features or change the record location on the map.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONTEXTPERSISTENT",
            "required": false,
            "persistent": false,
            "title": "Context persistent",
            "remarks": "Saves the map extent that the user was on to be map extent for the next map that is opened.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOOLBARENABLED",
            "required": false,
            "persistent": false,
            "title": "Toolbar",
            "remarks": "Enables the map toolbar.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FULLSCREENMODE",
            "required": false,
            "persistent": false,
            "title": "Fullscreen mode",
            "remarks": "Displays the map in full screen mode.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ZOOMTODATAINPUT",
            "required": false,
            "persistent": false,
            "title": "Zoom to data",
            "remarks": "The map zooms to fit all the markers of records from the data source associated with the map control.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REFRESHMAPINTERVAL",
            "required": false,
            "persistent": false,
            "title": "Refresh map interval in seconds",
            "remarks": "Specify how often the map data is refreshed.  If you are using an external GPS, you can track your crew's movements, for example, to estimate how quickly they can reach a work location.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOOLITEMS",
            "required": false,
            "persistent": false,
            "title": "Toolbar items",
            "remarks": "Specify the tools to include on the toolbar.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MARKERIMGURL",
            "required": false,
            "persistent": false,
            "title": "Image marker URL",
            "remarks": "Specify the URL of the image that you want to associate with map markers in this application. ",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ROUTEDATASRC",
            "required": false,
            "persistent": false,
            "title": "Route data source",
            "remarks": "The primary data source for this application. To use a different data source for this control, specify another a data source ID.",
            "sameAsAttribute": "ID",
            "sameAsObject": "MAXLABELS"
        },
        {
            "attributeName": "STARTWITHCURRENTLOCATION",
            "required": false,
            "persistent": false,
            "title": "Use current user location as the route start",
            "remarks": "Set the user's current location as the starting point of the route.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SHOWDIRECTIONSONLOAD",
            "required": false,
            "persistent": false,
            "title": "Show route directions when the map loads",
            "remarks": "Shows the route directions.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ROUTESTARTX",
            "required": false,
            "persistent": false,
            "title": "Route start (X coordinate)",
            "remarks": "The longitude (X coordinate) of the start of the route.",
            "sameAsAttribute": "LONGITUDEX",
            "sameAsObject": "SERVICEADDRESS"
        },
        {
            "attributeName": "ROUTESTARTY",
            "required": false,
            "persistent": false,
            "title": "Route start (Y coordinate)",
            "remarks": "The latitude (Y coordinate) of the start of the route.",
            "sameAsAttribute": "LATITUDEY",
            "sameAsObject": "SERVICEADDRESS"
        },
        {
            "attributeName": "ROUTEENDX",
            "required": false,
            "persistent": false,
            "title": "Route end (X coordinate)",
            "remarks": "The longitude (X coordinate) of the end of the route.",
            "sameAsAttribute": "LONGITUDEX",
            "sameAsObject": "SERVICEADDRESS"
        },
        {
            "attributeName": "ROUTEENDY",
            "required": false,
            "persistent": false,
            "title": "Route end (Y coordinate)",
            "remarks": " The latitude (Y coordinate) of the end of the route.",
            "sameAsAttribute": "LATITUDEY",
            "sameAsObject": "SERVICEADDRESS"
        },
        {
            "attributeName": "ROUTECOLOR",
            "required": false,
            "persistent": false,
            "title": "Route color",
            "remarks": "Specify the color of the routes using hexadecimal notation. For example, #0000FF.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "CTRLMAPCONTROLTOOLITEM",
            "target": "CTRLMAPCONTROLTOOLITEM",
            "remarks": "Shows the tool items configured for a specific map instance.",
            "whereClause": "1=1",
            "cardinality": null
        }
    ],
    "incomingRelationships": []
}