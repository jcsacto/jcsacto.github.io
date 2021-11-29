mos = {
    "objectName": "SHOWWFACTION",
    "className": "psdi.workflow.virtual.ShowWFActionSet",
    "description": "Non-Persistent used table to edit a work flow acti",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": false,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "ACTIONID",
            "required": true,
            "persistent": false,
            "title": "Action",
            "remarks": "Uniquely identifies an action in a process. Autogenerated by the design tool for internal use.",
            "sameAsAttribute": "ACTIONID",
            "sameAsObject": "WFACTION"
        },
        {
            "attributeName": "OWNERNODEID",
            "required": true,
            "persistent": false,
            "title": "Owner Node ID",
            "remarks": "The predecessor node.",
            "sameAsAttribute": "NODEID",
            "sameAsObject": "WFNODE"
        },
        {
            "attributeName": "MEMBERNODEID",
            "required": true,
            "persistent": false,
            "title": "Member Node",
            "remarks": "The successor node.",
            "sameAsAttribute": "NODEID",
            "sameAsObject": "WFNODE"
        },
        {
            "attributeName": "ACTION",
            "required": false,
            "persistent": false,
            "title": "Action",
            "remarks": "The action to be performed (if any) as part of the processing of this arrow.",
            "sameAsAttribute": "ACTION",
            "sameAsObject": "ACTION"
        },
        {
            "attributeName": "INSTRUCTION",
            "required": false,
            "persistent": false,
            "title": "Instruction",
            "remarks": "Text to further clarify what specific action will take place for routing and manual inputs.",
            "sameAsAttribute": "INSTRUCTION",
            "sameAsObject": "WFACTION"
        },
        {
            "attributeName": "ISPOSITIVE",
            "required": true,
            "persistent": false,
            "title": "Positive",
            "remarks": "Is this a positive action",
            "sameAsAttribute": "ISPOSITIVE",
            "sameAsObject": "WFACTION"
        },
        {
            "attributeName": "OBJECTNAME",
            "required": false,
            "persistent": false,
            "title": "Object",
            "remarks": "Type of object the owning process supports.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "SEQUENCE",
            "required": false,
            "persistent": false,
            "title": "Sequence",
            "remarks": "Ordering sequence for manual input actions",
            "sameAsAttribute": "SEQUENCE",
            "sameAsObject": "WFACTION"
        },
        {
            "attributeName": "CONDITION",
            "required": false,
            "persistent": false,
            "title": "Condition",
            "remarks": "Condition to check to enable this action",
            "sameAsAttribute": "CONDITION",
            "sameAsObject": "WFACTION"
        },
        {
            "attributeName": "CONDITIONCLASS",
            "required": false,
            "persistent": false,
            "title": "Condition Class",
            "remarks": "Name of class to instanciate for custom conditional actions",
            "sameAsAttribute": "CLASSNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "AVAILABLE",
            "required": true,
            "persistent": false,
            "title": "Action Available",
            "remarks": "Is this workflow action available?",
            "sameAsAttribute": "AVAILABLE",
            "sameAsObject": "WFACTION"
        },
        {
            "attributeName": "PROCESSNAME",
            "required": true,
            "persistent": false,
            "title": "Process",
            "remarks": "Name of the owning process.",
            "sameAsAttribute": "PROCESSNAME",
            "sameAsObject": "WFPROCESS"
        },
        {
            "attributeName": "PROCESSREV",
            "required": true,
            "persistent": false,
            "title": "Process Revision",
            "remarks": "Process Revision",
            "sameAsAttribute": "PROCESSREV",
            "sameAsObject": "WFPROCESS"
        },
        {
            "attributeName": "WFACTIONID",
            "required": true,
            "persistent": false,
            "title": "Action",
            "remarks": "Uniquely identifies an action in a process. Autogenerated by the design tool for internal use.",
            "sameAsAttribute": "WFACTIONID",
            "sameAsObject": "WFACTION"
        },
        {
            "attributeName": "USERSQL",
            "required": false,
            "persistent": false,
            "title": "Expression",
            "remarks": "User Entered Expression",
            "sameAsAttribute": "USERSQL",
            "sameAsObject": "EXPBUILDER"
        },
        {
            "attributeName": "ISCUSTOMCLASS",
            "required": true,
            "persistent": false,
            "title": "Custom Class",
            "remarks": "Custom Class",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MEMBERNODETITLE",
            "required": false,
            "persistent": false,
            "title": "To Node",
            "remarks": "The title of the successor node.",
            "sameAsAttribute": "TITLE",
            "sameAsObject": "WFNODE"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ACTION",
            "target": "ACTION",
            "remarks": "Relationship to the Action table (action = :action).  Set will contain one or zero objects",
            "whereClause": "action = :action",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFEXPBUILDER",
            "target": "WFEXPBUILDER",
            "remarks": "Relationship to get expression builder for object type.",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHOWWFACTIONNOTIFICATION",
            "target": "WFNOTIFICATION",
            "remarks": "Relationship to the WFNotification table, used to edit the action notifications.",
            "whereClause": "1=2",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "SHOWWFACTIONS",
            "source": "SHOWWFINPUT",
            "remarks": "Relationship to the ShowWFAction table, used to edit the input actions.",
            "whereClause": "1=2",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHOWWFACTIONS",
            "source": "WFACTION",
            "remarks": "Relationship to the SHOWWFACTION table, used to edit workflow actions.",
            "whereClause": "1=2",
            "cardinality": "UNDEFINED"
        }
    ]
}