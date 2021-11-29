mos = {
    "objectName": "WFREVISION",
    "className": "psdi.workflow.WFRevisionSet",
    "description": "Relates revisions of sub processes to processes",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "WFREVISIONID",
    "primaryKeyColumns": [
        "MAINPROCESS",
        "REVISION",
        "PROCESSNAME"
    ],
    "logicalRelationships": [
        {
            "objectName": "WFREVISION",
            "targetObject": "WFINSTANCE",
            "parentKeys": "MAINPROCESS, REVISION, PROCESSNAME",
            "targetKeys": "PROCESSNAME, REVISION, PROCESSNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Process revision records used by the workflow instance.",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "PERSON",
            "targetObject": "WFREVISION",
            "parentKeys": "PERSONID",
            "targetKeys": "SYNCHRONIZEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Synchronized By",
            "longDescription": null
        },
        {
            "objectName": "WFPROCESS",
            "targetObject": "WFREVISION",
            "parentKeys": "PROCESSNAME, PROCESSREV",
            "targetKeys": "MAINPROCESS, PROCESSREV",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "For activated processes, the list of validated processes that would be executed as part of a workflow instance.",
            "longDescription": null
        },
        {
            "objectName": "WFPROCESS",
            "targetObject": "WFREVISION",
            "parentKeys": "PROCESSNAME, PROCESSREV",
            "targetKeys": "PROCESSNAME, PROCESSREV",
            "relNum": "1 to 1",
            "status": "VERIFIED",
            "description": "Process that is called for a main process instance.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "PROCESSREV",
            "required": true,
            "persistent": true,
            "title": "Process Revision",
            "remarks": "Process Revision",
            "sameAsAttribute": "PROCESSREV",
            "sameAsObject": "WFPROCESS"
        },
        {
            "attributeName": "REVISION",
            "required": true,
            "persistent": true,
            "title": "Activation #",
            "remarks": "Activation # of the main process.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SYNCHRONIZEBY",
            "required": false,
            "persistent": true,
            "title": "Synchronized By",
            "remarks": "The user who synchronized the process and created this row",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "SYNCHRONIZEDATE",
            "required": false,
            "persistent": true,
            "title": "Synchronize Date",
            "remarks": "The date the process was synchronized and the row created",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PROCESSNAME",
            "required": false,
            "persistent": true,
            "title": "Process",
            "remarks": "Name of the Process the revisions are recorded for.",
            "sameAsAttribute": "PROCESSNAME",
            "sameAsObject": "WFPROCESS"
        },
        {
            "attributeName": "MAINPROCESS",
            "required": true,
            "persistent": true,
            "title": "Main Process",
            "remarks": "Process these revision records are for.",
            "sameAsAttribute": "PROCESSNAME",
            "sameAsObject": "WFPROCESS"
        },
        {
            "attributeName": "WFREVISIONID",
            "required": true,
            "persistent": true,
            "title": "WFREVISIONID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "REVISIONS",
            "source": "WFPROCESS",
            "remarks": "Gets the list of subprocesses synchronized with the active main process. (mainprocess = :processname and mainprocess != processname and revision = (select max(revision) from wfrevision where mainprocess = :processname). The set can have zero to many members.",
            "whereClause": "mainprocess = :processname and mainprocess != processname and revision = (select max(revision) from wfrevision where mainprocess = :processname)",
            "cardinality": "UNDEFINED"
        }
    ]
}