mos = {
    "objectName": "SKDODMERUN",
    "className": "com.ibm.tivoli.maximo.skd.service.SKDODMERunSet",
    "description": "Flag if ODME is in progress for the project",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "SKDODMERUNID",
    "primaryKeyColumns": [
        "SKDPROJECTID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "PERSON",
            "targetObject": "SKDODMERUN",
            "parentKeys": "PERSONID",
            "targetKeys": "ODMEUSER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "SKDPROJECTID",
            "required": true,
            "persistent": true,
            "title": "SKDProjectId",
            "remarks": "Project id ODME is running against.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RUNNING",
            "required": true,
            "persistent": true,
            "title": "Running",
            "remarks": "remarks",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ODMEUSER",
            "required": false,
            "persistent": true,
            "title": "User",
            "remarks": "User submitted this task.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "STARTTIME",
            "required": false,
            "persistent": true,
            "title": "Start Time",
            "remarks": "Time when optimization starts.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDTIME",
            "required": false,
            "persistent": true,
            "title": "End Time",
            "remarks": "Time when optimization ends.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUS",
            "required": false,
            "persistent": true,
            "title": "Status",
            "remarks": "Processing status.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SKDODMERUNID",
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
            "name": "ODMERUNMONITOR",
            "target": "ODMERUNMONITOR",
            "remarks": "Relationship to get ODME run status for a given SKDODMERUN record.",
            "whereClause": "skdprojectid=:skdprojectid",
            "cardinality": null
        },
        {
            "name": "SKDPROJECT",
            "target": "SKDPROJECT",
            "remarks": "Get skdproject record for skdodmerun record.",
            "whereClause": "skdprojectid=:skdprojectid",
            "cardinality": null
        }
    ],
    "incomingRelationships": []
}