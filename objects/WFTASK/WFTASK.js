mos = {
    "objectName": "WFTASK",
    "className": "psdi.workflow.WFTaskSet",
    "description": "WFTASK is a specific type of WFNODE",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "WFTASKID",
    "primaryKeyColumns": [
        "PROCESSNAME",
        "PROCESSREV",
        "NODEID"
    ],
    "logicalRelationships": [
        {
            "objectName": "WFTASK",
            "targetObject": "WFASSIGNMENT",
            "parentKeys": "PROCESSNAME, PROCESSREV, NODEID",
            "targetKeys": "PROCESSNAME, PROCESSREV, NODEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Assignments for this Task.",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXAPPS",
            "targetObject": "WFTASK",
            "parentKeys": "APP",
            "targetKeys": "APP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Default application for a workflow task.",
            "longDescription": null
        },
        {
            "objectName": "WFNODE",
            "targetObject": "WFTASK",
            "parentKeys": "PROCESSNAME, PROCESSREV, NODEID",
            "targetKeys": "PROCESSNAME, PROCESSREV, NODEID",
            "relNum": "1 to 1",
            "status": "VERIFIED",
            "description": "Task node attributes",
            "longDescription": null
        },
        {
            "objectName": "WFPROCESS",
            "targetObject": "WFTASK",
            "parentKeys": "PROCESSNAME, PROCESSREV",
            "targetKeys": "PROCESSNAME, PROCESSREV",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 17",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "NODEID",
            "required": true,
            "persistent": true,
            "title": "Node ID",
            "remarks": "The WFTASK type node that this task is related to.",
            "sameAsAttribute": "NODEID",
            "sameAsObject": "WFNODE"
        },
        {
            "attributeName": "READONLY",
            "required": true,
            "persistent": true,
            "title": "Read Only ",
            "remarks": "Should the application associated with this task be read only for all users other than those assigned to the task?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FIRSTCOMPLETE",
            "required": true,
            "persistent": true,
            "title": "First Complete",
            "remarks": "Will the first group to complete an assignment complete the task? If no, then all of the assignments must be complete before a new current task is calculated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "APP",
            "required": false,
            "persistent": true,
            "title": "Application",
            "remarks": "Default application to launch for this task",
            "sameAsAttribute": "APP",
            "sameAsObject": "MAXAPPS"
        },
        {
            "attributeName": "TIMELIMIT",
            "required": false,
            "persistent": true,
            "title": "Time Limit",
            "remarks": "Time in hours that can pass before the task is escalated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
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
            "attributeName": "PROCESSNAME",
            "required": true,
            "persistent": true,
            "title": "Process",
            "remarks": "Name of the owning process.",
            "sameAsAttribute": "PROCESSNAME",
            "sameAsObject": "WFPROCESS"
        },
        {
            "attributeName": "WFTASKID",
            "required": true,
            "persistent": true,
            "title": "WFTASKID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CALENDARBASED",
            "required": true,
            "persistent": true,
            "title": "Calendar Based",
            "remarks": "Is this a calendar based time limit?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DISPLAYONE",
            "required": true,
            "persistent": true,
            "title": "Display One",
            "remarks": "Display a single complete assignment or simply complete it?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OBJECTNAME",
            "required": false,
            "persistent": false,
            "title": "Object Name",
            "remarks": "The target MBO type for the process.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "WFTASKTYPE",
            "required": false,
            "persistent": true,
            "title": "Task Type",
            "remarks": "Field to differentiate task types, e.g., approval task or a domain",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "WFTASK",
            "source": "MAXAPPS",
            "remarks": "Relationship to psdi.workflow.WFTask by app, used to find workflow tasks for an application.\t( wftask.app = maxapps.app ). This relationship will find 1 or more objects.",
            "whereClause": "app=:app",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TASK",
            "source": "WFNODE",
            "remarks": "Relationship to the WFTask table, used to find the companion Mbo for a task node. (wfnode.processid=wfstart.processid and wfnode.processrev=wfstart.processrev and wfnode.nodeid=wfstart.nodeid). This resulting set will contain one record if the nodetype is 'WFTASK' and zero otherwise.",
            "whereClause": "processname=:processname and processrev=:processrev and nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        }
    ]
}