mos = {
    "objectName": "JSONOBJECTMAP",
    "className": "com.ibm.tivoli.maximo.fdmbo.app.manageres.JSONObjectMapSet",
    "description": "JSON Object Map",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "JSONOBJECTMAPID",
    "primaryKeyColumns": [
        "RESOURCENAME",
        "RELPROPPATH"
    ],
    "logicalRelationships": [
        {
            "objectName": "JSONOBJECTMAP",
            "targetObject": "JSONATTRIBUTEMAP",
            "parentKeys": "RESOURCENAME, RELPROPPATH",
            "targetKeys": "RESOURCENAME, RELPROPPATH",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "JSON Object Map",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "JSONRESOURCE",
            "targetObject": "JSONOBJECTMAP",
            "parentKeys": "RESOURCENAME",
            "targetKeys": "RESOURCENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "JSON Resource",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "JSONOBJECTMAP",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "JSONOBJECTMAP",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "PARENTOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Parent Object Type",
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
            "attributeName": "PARENTOBJECTNAME",
            "required": false,
            "persistent": true,
            "title": "Parent Object Name",
            "remarks": "Parent Object name.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "HIERARCHYPATH",
            "required": false,
            "persistent": true,
            "title": "Hierarchy Path",
            "remarks": "Hierarchy Path",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RELPROPNAME",
            "required": false,
            "persistent": true,
            "title": "Relation Property Name",
            "remarks": "Relation Property Name.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RELPROPPATH",
            "required": false,
            "persistent": true,
            "title": "Property Path",
            "remarks": "Property Path",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MULTIPLE",
            "required": true,
            "persistent": true,
            "title": "Multiple",
            "remarks": "Multiple",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ARRAYUNIT",
            "required": true,
            "persistent": true,
            "title": "Array Unit",
            "remarks": "Array Unit",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "JSONOBJECTMAPID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "JSONATTRIBUTEMAP",
            "target": "JSONATTRIBUTEMAP",
            "remarks": "Relation to JSON Attribute Map. This relationship will return 0 or more rows",
            "whereClause": "resourcename=:resourcename and relproppath=:relproppath",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "JSONOBJECTMAP",
            "source": "JSONRESOURCE",
            "remarks": "Relation to JSON Object Map. This relationship will return 1 or more rows",
            "whereClause": "resourcename=:resourcename",
            "cardinality": null
        }
    ]
}