mos = {
    "objectName": "SKDASSETLOCQUERY",
    "className": "com.ibm.tivoli.maximo.skd.app.SKDAssetLocQuerySet",
    "description": "Query associated with the project.",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "SKDASSETLOCQUERYID",
    "primaryKeyColumns": [
        "NAME",
        "OBJECTNAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "SKDASSETLOCQUERY",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Record Language",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SKDASSETLOCQUERY",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "EXPOBJECT",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "M",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SKDASSETLOCQUERY",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO returned from query",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SKDASSETLOCQUERY",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "SKDOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "SKD MBO where data is stored",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "OBJECTNAME",
            "required": true,
            "persistent": true,
            "title": "Data Source",
            "remarks": "Identifies the type of work/resource records that will be retrieved using the query.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "QUERYNAME",
            "required": true,
            "persistent": true,
            "title": "Query Name",
            "remarks": "Identifies the type of work/resource records that will be retrieved using the query.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WHERECLAUSE",
            "required": true,
            "persistent": true,
            "title": "Where Condition",
            "remarks": "SQL expression that will be used to retrieve work/resource records.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SKDOBJECTNAME",
            "required": false,
            "persistent": true,
            "title": "Scheduler Object Name",
            "remarks": "The location where data will be stored in Scheduler.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "SKDASSETLOCQUERYID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the query.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EXPOBJECT",
            "required": false,
            "persistent": true,
            "title": "expobject",
            "remarks": "Expression builder Object",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "NAME",
            "required": true,
            "persistent": true,
            "title": "Project Name",
            "remarks": "Identifies the schedule. This value must be unique. The schedule consists of a group of work records and their required resources. The schedule can be viewed and edited in the Gantt View tab.",
            "sameAsAttribute": "NAME",
            "sameAsObject": "SKDPROJECT"
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
        }
    ],
    "outgoingRelationships": [
        {
            "name": "EXPBUILDER",
            "target": "EXPBUILDER",
            "remarks": "Relationship for EXPBUILD.",
            "whereClause": "1=1",
            "cardinality": null
        },
        {
            "name": "SKDOBJACTQUERY",
            "target": "SKDQUERY",
            "remarks": "Query to identify activities, which are common for the project.",
            "whereClause": "name=:name and objectname=:objectname and skdobjectname='SKDACTIVITY'",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "SKDASSETLOCQUERY",
            "source": "SKDPROJECT",
            "remarks": "Query to identify activities.",
            "whereClause": "name=:name and skdobjectname='SKDACTIVITY'",
            "cardinality": null
        }
    ]
}