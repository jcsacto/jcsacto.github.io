mos = {
    "objectName": "JSONATTRIBUTEMAP",
    "className": "com.ibm.tivoli.maximo.fdmbo.app.manageres.JSONAttributeMapSet",
    "description": "JSON Attribute Map",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "JSONATTRIBUTEMAPID",
    "primaryKeyColumns": [
        "RESOURCENAME",
        "RELPROPPATH",
        "ATTRIBUTENAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "JSONOBJECTMAP",
            "targetObject": "JSONATTRIBUTEMAP",
            "parentKeys": "RESOURCENAME, RELPROPPATH",
            "targetKeys": "RESOURCENAME, RELPROPPATH",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "JSON Object Map",
            "longDescription": null
        },
        {
            "objectName": "JSONRESOURCE",
            "targetObject": "JSONATTRIBUTEMAP",
            "parentKeys": "RESOURCENAME",
            "targetKeys": "RESOURCENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "JSON Resource",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "JSONATTRIBUTEMAP",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "OBJECTNAME, ATTRIBUTENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Attribute",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "JSONATTRIBUTEMAP",
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
            "attributeName": "RESOURCENAME",
            "required": true,
            "persistent": true,
            "title": "Resource",
            "remarks": "Resource",
            "sameAsAttribute": "RESOURCENAME",
            "sameAsObject": "JSONRESOURCE"
        },
        {
            "attributeName": "OBJECTNAME",
            "required": true,
            "persistent": true,
            "title": "Object Name",
            "remarks": "Object name.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "RELPROPPATH",
            "required": false,
            "persistent": true,
            "title": "Property Path",
            "remarks": "Property Path",
            "sameAsAttribute": "RELPROPPATH",
            "sameAsObject": "JSONOBJECTMAP"
        },
        {
            "attributeName": "PROPERTYNAME",
            "required": false,
            "persistent": true,
            "title": "Property Name",
            "remarks": "Property name.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ATTRIBUTENAME",
            "required": true,
            "persistent": true,
            "title": "Attribute Name",
            "remarks": "Attribute Name.",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "JSONATTRIBUTEMAPID",
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
            "name": "JSONATTRIBUTEMAP",
            "source": "JSONOBJECTMAP",
            "remarks": "Relation to JSON Attribute Map. This relationship will return 0 or more rows",
            "whereClause": "resourcename=:resourcename and relproppath=:relproppath",
            "cardinality": null
        }
    ]
}