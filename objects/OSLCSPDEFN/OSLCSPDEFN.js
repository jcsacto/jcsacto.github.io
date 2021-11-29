mos = {
    "objectName": "OSLCSPDEFN",
    "className": "psdi.mbo.custapp.CustomMboSet",
    "description": "OSLC service provider",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "OSLCSPDEFNID",
    "primaryKeyColumns": [
        "PROVIDEROBJNAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "OSLCSPDEFN",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "PROVIDEROBJNAME, DESCRIPTIONATTR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Description Attribute",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "OSLCSPDEFN",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "PROVIDEROBJNAME, IDATTR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Service Provider Attribute",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "OSLCSPDEFN",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "PROVIDEROBJNAME, TITLEATTR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Title Attribute",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "OSLCSPDEFN",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "PROVIDEROBJNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Provider Object",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "PROVIDEROBJNAME",
            "required": true,
            "persistent": true,
            "title": "Object Name",
            "remarks": "-",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "TITLEATTR",
            "required": false,
            "persistent": true,
            "title": "Title Attribute",
            "remarks": "-",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "DESCRIPTIONATTR",
            "required": false,
            "persistent": true,
            "title": "Description Attribute",
            "remarks": "-",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "IDATTR",
            "required": true,
            "persistent": true,
            "title": "Service Provider ID Attribute",
            "remarks": "Service Provider ID Attribute.",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "OSLCSPDEFNID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}