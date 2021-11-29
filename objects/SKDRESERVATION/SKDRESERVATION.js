mos = {
    "objectName": "SKDRESERVATION",
    "className": "com.ibm.tivoli.maximo.skd.app.SKDReservationSet",
    "description": "Reservations",
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
        "SKDACTIVITYID",
        "SKDRESOURCEID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SKDRESERVATION",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SKDRESERVATION",
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
            "attributeName": "SKDACTIVITYID",
            "required": false,
            "persistent": true,
            "title": "Activity Id",
            "remarks": "Activity Id",
            "sameAsAttribute": "ID",
            "sameAsObject": "SKDACTIVITY"
        },
        {
            "attributeName": "SKDRESOURCEID",
            "required": false,
            "persistent": true,
            "title": "Resource Id",
            "remarks": "Resource Id",
            "sameAsAttribute": "ID",
            "sameAsObject": "SKDRESOURCE"
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
            "attributeName": "MODIFIED",
            "required": false,
            "persistent": true,
            "title": "Modified?",
            "remarks": "Modified?",
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
            "title": "Object Row stamp",
            "remarks": "Object Row stamp",
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
            "attributeName": "DELETED",
            "required": false,
            "persistent": true,
            "title": "Is deleted",
            "remarks": "Assigment will be deleted",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "SKDRESERVATION",
            "source": "SKDPROJECT",
            "remarks": "Reservations of a project",
            "whereClause": "skdprojectid=:skdprojectid",
            "cardinality": null
        }
    ]
}