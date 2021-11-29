mos = {
    "objectName": "MAPTIP",
    "className": "com.ibm.tivoli.maximo.map.mapman.app.maptips.MapTipSet",
    "description": "Objects used for map tips",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAPTIPID",
    "primaryKeyColumns": [
        "MAPNAME",
        "OBJECTNAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
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
            "objectName": "MAXOBJECT",
            "targetObject": "MAPTIP",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "MAPNAME",
            "required": true,
            "persistent": true,
            "title": "Map",
            "remarks": "ID for used for map",
            "sameAsAttribute": "MAPNAME",
            "sameAsObject": "MAPMANAGER"
        },
        {
            "attributeName": "OBJECTNAME",
            "required": true,
            "persistent": true,
            "title": "Object Name",
            "remarks": "The object defines the template and menu items for the maptip. When you select the object, the default template and associated menu items are added to the maptip configuration.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "MAPTIPTEMPLATE",
            "required": false,
            "persistent": true,
            "title": "Map tip template",
            "remarks": "The maptip template defines the information that is displayed in the maptip dialog. Use HTML code to create or modify the content for the map tip dialog.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SIGOPTION",
            "required": false,
            "persistent": true,
            "title": "Signature Option",
            "remarks": "You can assign a Map Manager application signature option to the object template.The signature option defines authorization access to view the maptip information on the map.",
            "sameAsAttribute": "OPTIONNAME",
            "sameAsObject": "SIGOPTION"
        },
        {
            "attributeName": "MAPTIPID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAPTIPSUMMARYTEMPLATE",
            "required": false,
            "persistent": true,
            "title": "Map tip summary template",
            "remarks": "The maptip summary template defines the information that is displayed in the maptip summary dialog. The maptip summary dialog is displayed when a Multiple Marker is clicked. Use HTML code to create or modify the content for the map tip summary dialog.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MOUSEOVERTEMPLATE",
            "required": false,
            "persistent": true,
            "title": "Mouseover template",
            "remarks": "The mouseover template defines the information that is displayed in the mouseover info bubble. Use HTML code to create or modify the content for the mouseover info bubble.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "EXPBUILDTREE",
            "target": "EXPBUILDTREE",
            "remarks": "Relationship for exptree.",
            "whereClause": "objectname=:objectname",
            "cardinality": null
        },
        {
            "name": "MAPTIPMENU",
            "target": "MAPTIPMENU",
            "remarks": "Relationship to hold menu items from maptip menu to maptipobjects",
            "whereClause": "mapname=:mapname and objectname=:objectname",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "MAPTIP",
            "source": "MAPMANAGER",
            "remarks": "Relationship from mapmanager to maptipobjects",
            "whereClause": "mapname=:mapname",
            "cardinality": null
        }
    ]
}