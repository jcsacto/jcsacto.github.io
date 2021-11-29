mos = {
    "objectName": "WFCONDITION",
    "className": "psdi.workflow.WFConditionSet",
    "description": "This table represents data for a condition",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "WFCONDITIONID",
    "primaryKeyColumns": [
        "PROCESSNAME",
        "PROCESSREV",
        "NODEID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "WFNODE",
            "targetObject": "WFCONDITION",
            "parentKeys": "PROCESSNAME, PROCESSREV, NODEID",
            "targetKeys": "PROCESSNAME, PROCESSREV, NODEID",
            "relNum": "1 to 1",
            "status": "VERIFIED",
            "description": "Condition node attributes",
            "longDescription": null
        },
        {
            "objectName": "WFPROCESS",
            "targetObject": "WFCONDITION",
            "parentKeys": "PROCESSNAME, PROCESSREV",
            "targetKeys": "PROCESSNAME, PROCESSREV",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 5",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "NODEID",
            "required": true,
            "persistent": true,
            "title": "Node ID",
            "remarks": "The node that this condition information is related to.",
            "sameAsAttribute": "NODEID",
            "sameAsObject": "WFNODE"
        },
        {
            "attributeName": "CUSTOMCLASS",
            "required": false,
            "persistent": true,
            "title": "Custom Class",
            "remarks": "The name of the custom java class to run as part of processing this condition",
            "sameAsAttribute": "CLASSNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "CONDITION",
            "required": false,
            "persistent": true,
            "title": "Condition Code",
            "remarks": "A string which will be evaluated by the workflow engine to determine a true or false value.",
            "sameAsAttribute": "USERSQL",
            "sameAsObject": "EXPBUILDER"
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
            "attributeName": "WFCONDITIONID",
            "required": true,
            "persistent": true,
            "title": "WFCONDITIONID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "EXPBUILDTREE",
            "target": "EXPBUILDTREE",
            "remarks": "Relationship for exptree",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "CONDITION",
            "source": "WFNODE",
            "remarks": "Relationship to the WFCondition table, used to find the companion Mbo for a condition node. (wfnode.processid=wfstart.processid and wfnode.processrev=wfstart.processrev and wfnode.nodeid=wfstart.nodeid). This resulting set will contain one record if the nodetype is 'WFCONDITION' and zero otherwise.",
            "whereClause": "processname=:processname and processrev=:processrev and nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        }
    ]
}