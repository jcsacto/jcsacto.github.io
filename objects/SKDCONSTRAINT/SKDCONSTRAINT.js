mos = {
    "objectName": "SKDCONSTRAINT",
    "className": "com.ibm.tivoli.maximo.skd.app.SKDConstraintSet",
    "description": "Constraint",
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
        "TYPE",
        "FROMACTIVITYID",
        "TOACTIVITYID",
        "DELETED"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SKDCONSTRAINT",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SKDCONSTRAINT",
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
            "attributeName": "TYPE",
            "required": false,
            "persistent": true,
            "title": "Constraint Type",
            "remarks": "Type",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FROMACTIVITYID",
            "required": false,
            "persistent": true,
            "title": "From Activity",
            "remarks": "From Activity",
            "sameAsAttribute": "ID",
            "sameAsObject": "SKDACTIVITY"
        },
        {
            "attributeName": "TOACTIVITYID",
            "required": false,
            "persistent": true,
            "title": "To Activity Id",
            "remarks": "Type",
            "sameAsAttribute": "ID",
            "sameAsObject": "SKDACTIVITY"
        },
        {
            "attributeName": "SKDPROJECTID",
            "required": false,
            "persistent": true,
            "title": "Project Id",
            "remarks": "Project Id",
            "sameAsAttribute": "SKDPROJECTID",
            "sameAsObject": "SKDPROJECT"
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
            "remarks": "Object Rowstamp",
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
            "attributeName": "DELETED",
            "required": false,
            "persistent": true,
            "title": "Deleted?",
            "remarks": "Deleted?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INITIALIZED",
            "required": true,
            "persistent": true,
            "title": "Initialized?",
            "remarks": "Has the data been initialized?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LEADLAGHOURS",
            "required": false,
            "persistent": true,
            "title": "Lead/Lag Hours",
            "remarks": "A positive duration indicates a Lag (delay) and a negative duration Lead (overlap)",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "SKDCONSTRAINT",
            "source": "SKDPROJECT",
            "remarks": "Constraints of the project",
            "whereClause": "skdprojectid=:skdprojectid",
            "cardinality": null
        }
    ]
}