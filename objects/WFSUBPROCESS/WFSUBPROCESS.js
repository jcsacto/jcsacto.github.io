mos = {
    "objectName": "WFSUBPROCESS",
    "className": "psdi.workflow.WFSubProcessSet",
    "description": "A node that links one process to another process",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "WFSUBPROCESSID",
    "primaryKeyColumns": [
        "PROCESSNAME",
        "PROCESSREV",
        "NODEID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "WFNODE",
            "targetObject": "WFSUBPROCESS",
            "parentKeys": "PROCESSNAME, PROCESSREV, NODEID",
            "targetKeys": "PROCESSNAME, PROCESSREV, NODEID",
            "relNum": "1 to 1",
            "status": "VERIFIED",
            "description": "Subprocess node attributes",
            "longDescription": null
        },
        {
            "objectName": "WFNODE",
            "targetObject": "WFSUBPROCESS",
            "parentKeys": "PROCESSNAME, PROCESSREV, NODEID",
            "targetKeys": "SUBPROCESSNAME, PROCESSREV, NODEID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 14",
            "longDescription": null
        },
        {
            "objectName": "WFPROCESS",
            "targetObject": "WFSUBPROCESS",
            "parentKeys": "PROCESSNAME",
            "targetKeys": "SUBPROCESSNAME",
            "relNum": "1 to 1",
            "status": "VERIFIED",
            "description": "The process to run as a sub-process when this node is reached.",
            "longDescription": null
        },
        {
            "objectName": "WFPROCESS",
            "targetObject": "WFSUBPROCESS",
            "parentKeys": "PROCESSNAME, PROCESSREV",
            "targetKeys": "PROCESSNAME, PROCESSREV",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 15",
            "longDescription": null
        },
        {
            "objectName": "WFPROCESS",
            "targetObject": "WFSUBPROCESS",
            "parentKeys": "PROCESSNAME, PROCESSREV",
            "targetKeys": "SUBPROCESSNAME, PROCESSREV",
            "relNum": "1 to 1",
            "status": "VERIFIED",
            "description": "Process to run as a sub-process when the node is reached.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "NODEID",
            "required": true,
            "persistent": true,
            "title": "Node ID",
            "remarks": "The node that this sub process information is related to.",
            "sameAsAttribute": "NODEID",
            "sameAsObject": "WFNODE"
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
            "attributeName": "SUBPROCESSNAME",
            "required": false,
            "persistent": true,
            "title": "Subprocess",
            "remarks": "The name of the sub-process that is included in this process.",
            "sameAsAttribute": "PROCESSNAME",
            "sameAsObject": "WFPROCESS"
        },
        {
            "attributeName": "WFSUBPROCESSID",
            "required": true,
            "persistent": true,
            "title": "WFSUBPROCESSID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OBJECTNAME",
            "required": false,
            "persistent": false,
            "title": "Object Name",
            "remarks": "Type of object the owning process supports.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "WFPROCESS",
            "target": "WFPROCESS",
            "remarks": "Relationship to WFProcess.",
            "whereClause": "processname = :subprocessname and processrev = (select max(processrev) from wfprocess where processname = :subprocessname)",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "SUBPROCESS",
            "source": "WFNODE",
            "remarks": "Relationship to the WFSubProcess table, used to find the companion Mbo for a subprocess node. (wfnode.processid=wfstart.processid and wfnode.processrev=wfstart.processrev and wfnode.nodeid=wfstart.nodeid). This resulting set will contain one record if the nodetype is 'WFSUBPROCESS' and zero otherwise.",
            "whereClause": "processname=:processname and processrev=:processrev and nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        }
    ]
}