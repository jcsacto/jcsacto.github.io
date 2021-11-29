mos = {
    "objectName": "WORKFLOWMAP",
    "className": "psdi.workflow.virtual.WorkflowMapSet",
    "description": "Parameter set for displaying workflow maps.",
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
            "attributeName": "OWNERTABLE",
            "required": false,
            "persistent": false,
            "title": "Owner Table",
            "remarks": "Type of current record MBO",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "OWNERID",
            "required": false,
            "persistent": false,
            "title": "Owner ID",
            "remarks": "Unique identifier of current record",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WFID",
            "required": false,
            "persistent": false,
            "title": "Workflow Identifier",
            "remarks": "Identifier of the workflow instance to display the map for.",
            "sameAsAttribute": "WFID",
            "sameAsObject": "WFINSTANCE"
        },
        {
            "attributeName": "PROCESSNAME",
            "required": false,
            "persistent": false,
            "title": "Process Name",
            "remarks": "Name of the process mapped.",
            "sameAsAttribute": "PROCESSNAME",
            "sameAsObject": "WFPROCESS"
        },
        {
            "attributeName": "STARTTIME",
            "required": false,
            "persistent": false,
            "title": "Start Date",
            "remarks": "Date mapped process was started.",
            "sameAsAttribute": "STARTTIME",
            "sameAsObject": "WFINSTANCE"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "CHOSENINSTANCE",
            "target": "WFINSTANCE",
            "remarks": "Used to get the instance chosen to display. (ownertable = :ownertable and ownerid = :ownerid and wfid = :wfid). Single member set.",
            "whereClause": "ownertable = :ownertable and ownerid = :ownerid and wfid = :wfid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INSTANCES",
            "target": "WFINSTANCE",
            "remarks": "This relationship gets all active instances on the current record. (ownertable = :ownertable and ownerid = :ownerid and active = :yes). Zero to many member set.",
            "whereClause": "ownertable = :ownertable and ownerid = :ownerid and active = :yes",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "WORKFLOWMAP",
            "source": "INCIDENT",
            "remarks": "Get virtual set to display process maps",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKFLOWMAP",
            "source": "INVOICE",
            "remarks": "Get virtual set to display process maps",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKFLOWMAP",
            "source": "MAXUSER",
            "remarks": "Get virtual set to display process maps",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKFLOWMAP",
            "source": "MR",
            "remarks": "Get virtual set to display process maps",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKFLOWMAP",
            "source": "PO",
            "remarks": "Get virtual set to display process maps",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKFLOWMAP",
            "source": "PR",
            "remarks": "Get virtual set to display process maps",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKFLOWMAP",
            "source": "RFQ",
            "remarks": "Get virtual set to display process maps",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKFLOWMAP",
            "source": "SOLUTION",
            "remarks": "Get virtual set to display process maps",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKFLOWMAP",
            "source": "SR",
            "remarks": "Get virtual set to display process maps",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKFLOWMAP",
            "source": "WOACTIVITY",
            "remarks": "Get virtual set to display process maps",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKFLOWMAP",
            "source": "WOCHANGE",
            "remarks": "Get the virtual set to display process maps.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKFLOWMAP",
            "source": "WORKORDER",
            "remarks": "Get virtual set to display process maps",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}