mos = {
    "objectName": "WFCALLSTACK",
    "className": "psdi.workflow.WFCallStackSet",
    "description": "Stack of process and subprocess calls.",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "WFCALLSTACKID",
    "primaryKeyColumns": [
        "WFID",
        "CALLSEQ"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
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
            "targetObject": "WFCALLSTACK",
            "parentKeys": "WFID",
            "targetKeys": "WFID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "The call stack for the instance",
            "longDescription": "The call stack is used to keep track of where the instance is in the main process and each sub-project called."
        },
        {
            "objectName": "WFNODE",
            "targetObject": "WFCALLSTACK",
            "parentKeys": "PROCESSNAME, PROCESSREV, NODEID",
            "targetKeys": "PROCESSNAME, PROCESSREV, NODEID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 5",
            "longDescription": null
        },
        {
            "objectName": "WFPROCESS",
            "targetObject": "WFCALLSTACK",
            "parentKeys": "PROCESSNAME, PROCESSREV",
            "targetKeys": "PROCESSNAME, PROCESSREV",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 4",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "WFID",
            "required": true,
            "persistent": true,
            "title": "Workflow ID",
            "remarks": "Link to wfinstance table's wfid",
            "sameAsAttribute": "WFID",
            "sameAsObject": "WFINSTANCE"
        },
        {
            "attributeName": "NODEID",
            "required": true,
            "persistent": true,
            "title": "Node ID",
            "remarks": "Current node of process instance in call stack",
            "sameAsAttribute": "NODEID",
            "sameAsObject": "WFNODE"
        },
        {
            "attributeName": "CALLSEQ",
            "required": true,
            "persistent": true,
            "title": "Call Sequence",
            "remarks": "Sequence of calls on the stack",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ACTIVE",
            "required": true,
            "persistent": true,
            "title": "Process Active",
            "remarks": "Exclude inactive rows from call stack",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PROCESSREV",
            "required": false,
            "persistent": true,
            "title": "Process Revision",
            "remarks": "Process Revision",
            "sameAsAttribute": "PROCESSREV",
            "sameAsObject": "WFPROCESS"
        },
        {
            "attributeName": "PROCESSNAME",
            "required": true,
            "persistent": true,
            "title": "Process",
            "remarks": "Name of the process.",
            "sameAsAttribute": "PROCESSNAME",
            "sameAsObject": "WFPROCESS"
        },
        {
            "attributeName": "WFCALLSTACKID",
            "required": true,
            "persistent": true,
            "title": "WFCALLSTACKID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "NODES",
            "target": "WFNODE",
            "remarks": "Nodes associated with the (sub)process referenced by the call stack. Set contains zero to many objects.",
            "whereClause": "processname=:processname and processrev=:processrev",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "CALLSTACK",
            "source": "WFINSTANCE",
            "remarks": "Relationship to the WFCallStack table which tracks the position of the instance through the process. (wfid=:wfid). This resulting set will contain zero to many objects.",
            "whereClause": "wfid = :wfid",
            "cardinality": "UNDEFINED"
        }
    ]
}