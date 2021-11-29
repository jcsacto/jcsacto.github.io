mos = {
    "objectName": "WFINSTANCE",
    "className": "psdi.workflow.WFInstanceSet",
    "description": "Keeps workflow instance information.",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "WFID",
    "primaryKeyColumns": [
        "WFID"
    ],
    "logicalRelationships": [
        {
            "objectName": "WFINSTANCE",
            "targetObject": "WFASGNGROUP",
            "parentKeys": "WFID",
            "targetKeys": "WFID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 1",
            "longDescription": null
        },
        {
            "objectName": "WFINSTANCE",
            "targetObject": "WFASSIGNMENT",
            "parentKeys": "WFID",
            "targetKeys": "WFID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 2",
            "longDescription": null
        },
        {
            "objectName": "WFINSTANCE",
            "targetObject": "WFCALLSTACK",
            "parentKeys": "WFID",
            "targetKeys": "WFID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "The call stack for the instance",
            "longDescription": "The call stack is used to keep track of where the instance is in the main process and each sub-project called."
        },
        {
            "objectName": "WFINSTANCE",
            "targetObject": "WFCALLSTACK",
            "parentKeys": "PROCESSNAME, PROCESSREV, WFID",
            "targetKeys": "PROCESSNAME, PROCESSREV, WFID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Callstack for a workflow instance.",
            "longDescription": null
        },
        {
            "objectName": "WFINSTANCE",
            "targetObject": "WFTRANSACTION",
            "parentKeys": "WFID",
            "targetKeys": "WFID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Transaction records created during the run of the workflow instance.",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXOBJECT",
            "targetObject": "WFINSTANCE",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OWNERTABLE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "The target Mbo Object of the Workflow Instance",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WFINSTANCE",
            "parentKeys": "PERSONID",
            "targetKeys": "ORIGINATOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who started this Workflow",
            "longDescription": null
        },
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
    "columns": [
        {
            "attributeName": "ACTIVE",
            "required": true,
            "persistent": true,
            "title": "Active Instance",
            "remarks": "Is this the active instance for the record",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WFID",
            "required": true,
            "persistent": true,
            "title": "Workflow ID",
            "remarks": "Id for the instance",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORIGINATOR",
            "required": true,
            "persistent": true,
            "title": "Workflow Originator",
            "remarks": "PersonID for user that initiated workflow",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "REVISION",
            "required": true,
            "persistent": true,
            "title": "Activation #",
            "remarks": "Activation # of the main process.",
            "sameAsAttribute": "REVISION",
            "sameAsObject": "WFREVISION"
        },
        {
            "attributeName": "STARTTIME",
            "required": true,
            "persistent": true,
            "title": "Start Time",
            "remarks": "The time when workflow is started on a record",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CURRTASKSTARTTIME",
            "required": true,
            "persistent": true,
            "title": "Current Task Start Time",
            "remarks": "The time the current task of the instance was initialized.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PROCESSNAME",
            "required": true,
            "persistent": true,
            "title": "Process",
            "remarks": "Name of the process this is an instance of.",
            "sameAsAttribute": "PROCESSNAME",
            "sameAsObject": "WFPROCESS"
        },
        {
            "attributeName": "OWNERTABLE",
            "required": false,
            "persistent": true,
            "title": "Owner Table",
            "remarks": "Table name of the controlled record",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "OWNERID",
            "required": false,
            "persistent": true,
            "title": "Owner ID",
            "remarks": "Unique ID of the controlled record",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OWNERDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Owner Description",
            "remarks": "Descriptive text about MBO controlled by instance.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HOSTNAME",
            "required": false,
            "persistent": false,
            "title": "Host Name",
            "remarks": "URL of the MXServer",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DELETABLE",
            "required": false,
            "persistent": true,
            "title": "Allow Deletion",
            "remarks": "Can records be deleted after having this workflow run on them?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SHOWDELETABLE",
            "required": true,
            "persistent": false,
            "title": "Allow Deletion",
            "remarks": "Deletable after having this workflow run on them?",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "EVENTRESPONSE",
            "target": "EVENTRESPONSE",
            "remarks": "This relationship gets the workflow instance to stop. (wfid=:wfid). One member set.",
            "whereClause": "reftable = 'WFINSTANCE' and refid = :wfid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INPUTWF",
            "target": "INPUTWF",
            "remarks": "Relationship to virtual set for manual input.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ORIGINATOR",
            "target": "PERSON",
            "remarks": "Relationship to the PersonID record of the workflow originator. Returns a single record.",
            "whereClause": "personid = :originator",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STOPWF",
            "target": "STOPWF",
            "remarks": "Relationship to the non-persistent set used to stop workflow. (No where clause). The resulting set will contain zero objects.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NEWGROUPS",
            "target": "WFASGNGROUP",
            "remarks": "Newly created groups, relationship to the WFAsgnGroup table. (1=2). The set is empty.",
            "whereClause": "wfid = :wfid",
            "cardinality": null
        },
        {
            "name": "ACTIVEASSIGNMENTS",
            "target": "WFASSIGNMENT",
            "remarks": "This relationship gets the workflow instance to stop. (wfid = :wfid and assignstatus in (select value from synonymdomain where domainid='WFASGNSTATUS' and maxvalue='ACTIVE')). Zero to many member set.",
            "whereClause": "wfid = :wfid and assignstatus in (select value from synonymdomain where domainid='WFASGNSTATUS' and maxvalue='ACTIVE')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMPLETEASSIGNMENTS",
            "target": "WFASSIGNMENT",
            "remarks": "Gets all non-active assignments for the instance. Any number member set.",
            "whereClause": "wfid = :wfid and assignstatus not in (select value from synonymdomain where domainid='WFASGNSTATUS' and maxvalue='ACTIVE')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CALLSTACK",
            "target": "WFCALLSTACK",
            "remarks": "Relationship to the WFCallStack table which tracks the position of the instance through the process. (wfid=:wfid). This resulting set will contain zero to many objects.",
            "whereClause": "wfid = :wfid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFINSTANCE",
            "target": "WFINSTANCE",
            "remarks": "Relationship to WFINSTANCE from WFINSTANCE, which displays all active WFINSTANCES records. This relationship will find 0 or more objects.",
            "whereClause": "active=:yes",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFPROCESS",
            "target": "WFPROCESS",
            "remarks": "Relationship to WFPROCESS from WFINSTANCE, which display all records where processnames and process revision match between WFPROCESS and WFINSTANCE.  This relationship will find 0 or more objects.",
            "whereClause": "processname = :processname and processrev = (select processrev from wfrevision where processname = mainprocess and processname = :processname and revision = :revision)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TRANSACTIONS",
            "target": "WFTRANSACTION",
            "remarks": "Get all the workflow transactions for the instance. (wfid=:wfid). Set may contain any number of members.",
            "whereClause": "wfid = :wfid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "EXISTING",
            "source": "INITIATEWORKFLOW",
            "remarks": "This relationship gets the workflow instances already started on the target Mbo. (ownertable = :ownertable and ownerid = :ownerid). Zero to many member set.",
            "whereClause": "ownertable = :ownertable and ownerid = :ownerid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INSTANCE",
            "source": "STOPWF",
            "remarks": "This relationship gets the workflow instance to stop. (wfid=:wfid). One member set.",
            "whereClause": "wfid = :wfid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFINSTANCE",
            "source": "WFINSTANCE",
            "remarks": "Relationship to WFINSTANCE from WFINSTANCE, which displays all active WFINSTANCES records. This relationship will find 0 or more objects.",
            "whereClause": "active=:yes",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFINSTANCE",
            "source": "WFPROCESS",
            "remarks": "Relationship to WFINSTANCE from WFPROCESS, which displays all WFINSTANCE for that process revision records. This relationship will find 0 or more objects.",
            "whereClause": "processname = :processname and revision in (select revision from wfrevision where processname = mainprocess and processname = :processname and processrev = :processrev)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INSTANCE",
            "source": "WFTRANSACTION",
            "remarks": null,
            "whereClause": "wfid = :wfid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CHOSENINSTANCE",
            "source": "WORKFLOWMAP",
            "remarks": "Used to get the instance chosen to display. (ownertable = :ownertable and ownerid = :ownerid and wfid = :wfid). Single member set.",
            "whereClause": "ownertable = :ownertable and ownerid = :ownerid and wfid = :wfid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INSTANCES",
            "source": "WORKFLOWMAP",
            "remarks": "This relationship gets all active instances on the current record. (ownertable = :ownertable and ownerid = :ownerid and active = :yes). Zero to many member set.",
            "whereClause": "ownertable = :ownertable and ownerid = :ownerid and active = :yes",
            "cardinality": "UNDEFINED"
        }
    ]
}