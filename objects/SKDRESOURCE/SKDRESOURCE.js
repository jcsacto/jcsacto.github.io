mos = {
    "objectName": "SKDRESOURCE",
    "className": "com.ibm.tivoli.maximo.skd.app.SKDResourceSet",
    "description": "Resource",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [
        "SKDPROJECTID",
        "OBJECTNAME",
        "OBJECTID",
        "ID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SKDRESOURCE",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SKDRESOURCE",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "REFOBJNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Referenced MBO",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "NAME",
            "required": false,
            "persistent": true,
            "title": "Name",
            "remarks": "Name of the resource",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SKDPROJECTID",
            "required": true,
            "persistent": true,
            "title": "Project Number",
            "remarks": "Project Number",
            "sameAsAttribute": "SKDPROJECTID",
            "sameAsObject": "SKDPROJECT"
        },
        {
            "attributeName": "ID",
            "required": false,
            "persistent": true,
            "title": "Resource Id",
            "remarks": "Resource Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PARENTID",
            "required": false,
            "persistent": true,
            "title": "Parent Resource ID",
            "remarks": "Parent Resource ID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OBJECTNAME",
            "required": false,
            "persistent": true,
            "title": "Object Name",
            "remarks": "Object Name",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "REFOBJNAME",
            "required": false,
            "persistent": true,
            "title": "Reference Object Name",
            "remarks": "Reference Object Name",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "OBJECTID",
            "required": false,
            "persistent": true,
            "title": "Object Id",
            "remarks": "Object Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OBJROWSTAMP",
            "required": false,
            "persistent": true,
            "title": "Object Rowstamp",
            "remarks": "Object rowstamp",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MODIFIED",
            "required": false,
            "persistent": true,
            "title": "Modified?",
            "remarks": "Modified?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INITIALIZED",
            "required": true,
            "persistent": true,
            "title": "Initialized?",
            "remarks": "has the data been initialized?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SECONDARYCRAFTID",
            "required": false,
            "persistent": true,
            "title": "Seconday Craft ID",
            "remarks": "Secondary Craft Identifier",
            "sameAsAttribute": "CRAFTID",
            "sameAsObject": "CRAFT"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "SKDRESOURCE",
            "source": "SKDPROJECT",
            "remarks": "Resources of the project",
            "whereClause": "skdprojectid=:skdprojectid",
            "cardinality": null
        }
    ]
}