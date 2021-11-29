mos = {
    "objectName": "INITIATEWORKFLOW",
    "className": "psdi.workflow.virtual.InitiateWorkflowMboSet",
    "description": "Initiate Workflow MboSet",
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
            "attributeName": "PROCESSNAME",
            "required": true,
            "persistent": false,
            "title": "Process",
            "remarks": "Name of the process to initiate.",
            "sameAsAttribute": "PROCESSNAME",
            "sameAsObject": "WFPROCESS"
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": false,
            "title": "Memo",
            "remarks": "Memo for Workflow Process Initiation",
            "sameAsAttribute": "MEMO",
            "sameAsObject": "WFTRANSACTION"
        },
        {
            "attributeName": "OWNERTABLE",
            "required": false,
            "persistent": false,
            "title": "Owner Table",
            "remarks": "Table where target Mbo is found.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "OWNERID",
            "required": false,
            "persistent": false,
            "title": "Owner ID",
            "remarks": "Unique ID of the target Mbo.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "EXISTING",
            "target": "WFINSTANCE",
            "remarks": "This relationship gets the workflow instances already started on the target Mbo. (ownertable = :ownertable and ownerid = :ownerid). Zero to many member set.",
            "whereClause": "ownertable = :ownertable and ownerid = :ownerid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": []
}