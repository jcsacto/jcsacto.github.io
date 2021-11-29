mos = {
    "objectName": "SKDACTIVITY",
    "className": "com.ibm.tivoli.maximo.skd.app.SKDActivitySet",
    "description": "Activities",
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
            "targetObject": "SKDACTIVITY",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SKDACTIVITY",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "REFOBJNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Referenced MBO",
            "longDescription": null
        },
        {
            "objectName": "SKDPROJECT",
            "targetObject": "SKDACTIVITY",
            "parentKeys": "SKDPROJECTID",
            "targetKeys": "SKDPROJECTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Project Activities",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "NAME",
            "required": false,
            "persistent": true,
            "title": "Activity Name",
            "remarks": "Name of the activity",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STARTTIME",
            "required": false,
            "persistent": true,
            "title": "Start time",
            "remarks": "Time when the activity is going to start",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDTIME",
            "required": false,
            "persistent": true,
            "title": "End time",
            "remarks": "Time when the activity is going to end",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DURATION",
            "required": false,
            "persistent": true,
            "title": "Duration",
            "remarks": "Duration of the activity",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SKDPROJECTID",
            "required": true,
            "persistent": true,
            "title": "Project Id",
            "remarks": "Project that this activity is associated with",
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
            "title": "Object Identifier",
            "remarks": "Object Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OBJROWSTAMP",
            "required": false,
            "persistent": true,
            "title": "Object Row stamp",
            "remarks": "Object Row stamp",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ID",
            "required": false,
            "persistent": true,
            "title": "Activity Id",
            "remarks": "Activity Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PARENTID",
            "required": false,
            "persistent": true,
            "title": "Parent Activity ID",
            "remarks": "Parent Activity ID",
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
            "title": "Initialized",
            "remarks": "Has the data been initialized?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WOPRIORITY",
            "required": false,
            "persistent": true,
            "title": "Workorder Priority",
            "remarks": "Workorder Priority",
            "sameAsAttribute": "WOPRIORITY",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "DELETED",
            "required": false,
            "persistent": true,
            "title": "Is deleted",
            "remarks": "Assigment will be deleted",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PARENTASSIGNID",
            "required": false,
            "persistent": true,
            "title": "Parent assignment Id",
            "remarks": "Parentassignment Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INTERRUPTIBLE",
            "required": false,
            "persistent": true,
            "title": "Interruptible",
            "remarks": "Indicates if the workorder is interruptible.",
            "sameAsAttribute": "INTERRUPTIBLE",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "STATUS",
            "required": false,
            "persistent": true,
            "title": "Workorder Status",
            "remarks": "Status of the work order.",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "WORKORDER"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ASSIGNMENT",
            "target": "ASSIGNMENT",
            "remarks": "Relationship from the SKDActivity table to the Assignment table",
            "whereClause": "assignmentid=:objectid",
            "cardinality": null
        },
        {
            "name": "WORKORDER",
            "target": "WORKORDER",
            "remarks": "Get WO information for a project in SKDActivity table",
            "whereClause": "WORKORDERID=:OBJECTID",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "SKDACTIVITY",
            "source": "SKDPROJECT",
            "remarks": "Activities defined for a project",
            "whereClause": "skdprojectid=:skdprojectid",
            "cardinality": null
        }
    ]
}