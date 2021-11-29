mos = {
    "objectName": "WFWAITLIST",
    "className": "psdi.workflow.WFWaitListSet",
    "description": "List of events for a Workflow Wait Node",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "WFWAITLISTID",
    "primaryKeyColumns": [
        "PROCESSNAME",
        "PROCESSREV",
        "NODEID",
        "EVENTNAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "WFNODE",
            "targetObject": "WFWAITLIST",
            "parentKeys": "PROCESSNAME, PROCESSREV, NODEID",
            "targetKeys": "PROCESSNAME, PROCESSREV, NODEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "WaitList node information.",
            "longDescription": null
        },
        {
            "objectName": "WFPROCESS",
            "targetObject": "WFWAITLIST",
            "parentKeys": "PROCESSNAME, PROCESSREV",
            "targetKeys": "PROCESSNAME, PROCESSREV",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 19",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "WFWAITLISTID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "PROCESSREV",
            "required": true,
            "persistent": true,
            "title": "Process Revision",
            "remarks": "Revision of the owning process",
            "sameAsAttribute": "PROCESSREV",
            "sameAsObject": "WFPROCESS"
        },
        {
            "attributeName": "NODEID",
            "required": true,
            "persistent": true,
            "title": "Node ID",
            "remarks": "Link to the Wait Node in the process.",
            "sameAsAttribute": "NODEID",
            "sameAsObject": "WFNODE"
        },
        {
            "attributeName": "EVENTNAME",
            "required": true,
            "persistent": true,
            "title": "Event",
            "remarks": "The name of the event to wait for.",
            "sameAsAttribute": "EVENTNAME",
            "sameAsObject": "EVENTRESPONSE"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "SHOWWFWAITLIST",
            "source": "SHOWWFNODE",
            "remarks": "Relationship to the WFWaitlist table, used to edit the wait list.",
            "whereClause": "1=2",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHOWWFWAITLIST",
            "source": "SHOWWFWAIT",
            "remarks": "Relationship to the ShowWFWait nonpersistant object, used to edit a wait node.",
            "whereClause": "1=2",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WAITLIST",
            "source": "WFNODE",
            "remarks": "List of things to wait for a Wait Node.  Returns one or many records.",
            "whereClause": "processname=:processname and processrev=:processrev and nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        }
    ]
}