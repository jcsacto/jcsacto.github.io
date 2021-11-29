mos = {
    "objectName": "MAPTIPDEFAULTS",
    "className": "com.ibm.tivoli.maximo.map.mapman.app.maptips.MapTipDefaultSet",
    "description": "Objects used for map tips",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAPTIPDEFAULTSID",
    "primaryKeyColumns": [
        "OBJECTNAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAPTIPDEFAULTS",
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
            "attributeName": "OBJECTNAME",
            "required": true,
            "persistent": true,
            "title": "Object Name",
            "remarks": "Object Name",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "MAPTIPTEMPLATE",
            "required": false,
            "persistent": true,
            "title": "Maptip Template",
            "remarks": "Maptip Template",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SIGOPTION",
            "required": false,
            "persistent": true,
            "title": "Signature Option",
            "remarks": "Signature Option",
            "sameAsAttribute": "OPTIONNAME",
            "sameAsObject": "SIGOPTION"
        },
        {
            "attributeName": "ENABLED",
            "required": false,
            "persistent": true,
            "title": "Enabled",
            "remarks": "Is the default enabled",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAPTIPDEFAULTSID",
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
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "MAPTIPDEFAULTS",
            "source": "MAPMANAGER",
            "remarks": "Find all enabled Map Tip defaults.",
            "whereClause": "enabled=:yes",
            "cardinality": null
        }
    ]
}