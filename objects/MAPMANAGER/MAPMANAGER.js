mos = {
    "objectName": "MAPMANAGER",
    "className": "com.ibm.tivoli.maximo.map.mapman.app.MapManagerSet",
    "description": "Map Manager",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAPMANAGERID",
    "primaryKeyColumns": [
        "MAPNAME"
    ],
    "logicalRelationships": [
        {
            "objectName": "MAPMANAGER",
            "targetObject": "MAPTIP",
            "parentKeys": "MAPNAME",
            "targetKeys": "MAPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Map Manager",
            "longDescription": null
        },
        {
            "objectName": "MAPMANAGER",
            "targetObject": "MAPTIPMENU",
            "parentKeys": "MAPNAME",
            "targetKeys": "MAPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Map Manager",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "MAPMANAGER",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Record Language",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "MAPNAME",
            "required": true,
            "persistent": true,
            "title": "Map",
            "remarks": "The name of the map configuration.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "The description of the map.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ACTIVE",
            "required": false,
            "persistent": true,
            "title": "Enable map",
            "remarks": "Enables the map for the sites that you specified.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAPPROVIDER",
            "required": true,
            "persistent": true,
            "title": "Map provider name",
            "remarks": "Map provider name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LENGTHUNIT",
            "required": true,
            "persistent": true,
            "title": "Length and Distance Unit",
            "remarks": "Length and Distance Unit",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GMAPSLICENSE",
            "required": false,
            "persistent": true,
            "title": "Google client ID",
            "remarks": "To access the Google map service, enter the Google client ID.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GMAPSHTTPS",
            "required": false,
            "persistent": true,
            "title": "Enable HTTPS",
            "remarks": "Enables HTTPS support for Google.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BMAPSLICENSE",
            "required": false,
            "persistent": true,
            "title": "Bing Maps key",
            "remarks": "To access the Bing Maps map service, enter the Bing Maps license key.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BMAPSHTTPS",
            "required": false,
            "persistent": true,
            "title": "Enable HTTPS",
            "remarks": "Enables HTTPS support for Bing Maps.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SPATIALGEOCODE",
            "required": true,
            "persistent": true,
            "title": "Geocode service URL",
            "remarks": "The URL of the ESRI geocode service that the map uses to find a location that is based on an address or point. Geocode services run on external geographic information system (GIS) servers. The default values can change if the external GIS service is modified.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SPATIALROUTE",
            "required": true,
            "persistent": true,
            "title": "Route service URL",
            "remarks": "The URL of the ESRI route service that is used to create routes between two points on the map. Route services run on external geographic information system (GIS) servers. The default values can change if the external GIS service is modified.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAPMANAGERID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HASLD",
            "required": true,
            "persistent": true,
            "title": "Has Long Description",
            "remarks": "Boolean flag to indicate if there is any long description for this record",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description Long description",
            "remarks": "Long Description for Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LANGCODE",
            "required": true,
            "persistent": true,
            "title": "Language Code",
            "remarks": "Language Code",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        },
        {
            "attributeName": "GMAPSDISTANCEMATRIX",
            "required": true,
            "persistent": true,
            "title": "Distance matrix service URL",
            "remarks": "The URL of the Google Maps Distance Matrix service that is used to find the travel times between combinations of a set of origins and a set of destinations. Distance Matrix services run on external geographic information system (GIS) servers. The default values can change if the external GIS service is modified.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BMAPSROUTE",
            "required": true,
            "persistent": true,
            "title": "Bing Maps route service URL",
            "remarks": "The URL of the Bing Maps route service that is used to create routes between two points on the map. Route services run on external geographic information system (GIS) servers. The default values can change if the external GIS service is modified.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OPTCLEANUP",
            "required": false,
            "persistent": true,
            "title": "Optimization Cleanup",
            "remarks": "Amount of days before cached travel time data needs to be deleted from the optimization matrix table.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BMAPSDISTANCEMATRIX",
            "required": true,
            "persistent": true,
            "title": "Distance matrix service URL",
            "remarks": "The URL of the Bing Maps Distance Matrix service that is used to find the travel times between combinations of a set of origins and a set of destinations. Distance Matrix services run on external geographic information system (GIS) servers. The default values can change if the external GIS service is modified.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BMAPSGEOCODE",
            "required": true,
            "persistent": true,
            "title": "Geocode service URL",
            "remarks": "The URL of the Bing geocode service that the map uses to find a location that is based on an address or point. Geocode services run on external geographic information system (GIS) servers. The default values can change if the external GIS service is modified.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SPATIALDISTANCEMATRIX",
            "required": true,
            "persistent": true,
            "title": "Distance matrix service URL",
            "remarks": "The URL of the ESRI Maps Distance Matrix service that is used to find the travel times between combinations of a set of origins and a set of destinations. Distance Matrix services run on external geographic information system (GIS) servers. The default values can change if the external GIS service is modified.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SPATIALUSERNAME",
            "required": false,
            "persistent": true,
            "title": "ESRI user name",
            "remarks": "To access ESRI Maps paid services, enter the ESRI user name.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SPATIALPASSWORD",
            "required": false,
            "persistent": true,
            "title": "ESRI password",
            "remarks": "To access ESRI Maps paid services, enter the ESRI password.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "MAPSITES",
            "target": "MAPSITES",
            "remarks": "Relationship to Map Sites table",
            "whereClause": "mapname=:mapname",
            "cardinality": null
        },
        {
            "name": "MAPTIP",
            "target": "MAPTIP",
            "remarks": "Relationship from mapmanager to maptipobjects",
            "whereClause": "mapname=:mapname",
            "cardinality": null
        },
        {
            "name": "MAPTIPDEFAULTS",
            "target": "MAPTIPDEFAULTS",
            "remarks": "Find all enabled Map Tip defaults.",
            "whereClause": "enabled=:yes",
            "cardinality": null
        }
    ],
    "incomingRelationships": []
}