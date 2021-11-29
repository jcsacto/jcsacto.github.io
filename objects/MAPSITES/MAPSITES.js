mos = {
    "objectName": "MAPSITES",
    "className": "com.ibm.tivoli.maximo.map.mapman.app.MapSitesSet",
    "description": "Map Sites",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAPSITESID",
    "primaryKeyColumns": [
        "MAPNAME",
        "SITEID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "SITE",
            "targetObject": "MAPSITES",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "MAPNAME",
            "required": true,
            "persistent": true,
            "title": "Map",
            "remarks": "Map",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SITEID",
            "required": true,
            "persistent": true,
            "title": "Site",
            "remarks": "The site that is associated with the map. A site cannot use more than one map, but a map can be associated with multiple sites.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "INITIALY",
            "required": false,
            "persistent": true,
            "title": "Latitude (Y)",
            "remarks": "The latitude (Y) value that is based on a point in the center of the map. The initial map location is defined by the zoom level, the latitude coordinates, and the longitude coordinates. If these fields are blank, then the default view is a map of the world.",
            "sameAsAttribute": "LATITUDEY",
            "sameAsObject": "SERVICEADDRESS"
        },
        {
            "attributeName": "INITIALX",
            "required": false,
            "persistent": true,
            "title": "Longitude (X)",
            "remarks": "The longitude (X) value that is based on a point in the center of the map. The initial map location is defined by the zoom level, the latitude coordinates, and the longitude coordinates. If these fields are blank, then the default view is a map of the world.",
            "sameAsAttribute": "LONGITUDEX",
            "sameAsObject": "SERVICEADDRESS"
        },
        {
            "attributeName": "ZOOMLEVEL",
            "required": false,
            "persistent": true,
            "title": "Zoom level",
            "remarks": "The default scale of the map extent when you first open the map. The initial map location is defined by the zoom level, the latitude coordinates, and the longitude coordinates. If these fields are blank, then the default view is a map of the world.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAPSITESID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "MAPSITES",
            "source": "MAPMANAGER",
            "remarks": "Relationship to Map Sites table",
            "whereClause": "mapname=:mapname",
            "cardinality": null
        }
    ]
}