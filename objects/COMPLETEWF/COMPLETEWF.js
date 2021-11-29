mos = {
    "objectName": "COMPLETEWF",
    "className": "psdi.workflow.virtual.CompleteWFSet",
    "description": "Nonpersistent MboSet for work flow completion.",
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
            "attributeName": "MEMO",
            "required": false,
            "persistent": false,
            "title": "Memo",
            "remarks": "Completion Memo",
            "sameAsAttribute": "MEMO",
            "sameAsObject": "WFTRANSACTION"
        },
        {
            "attributeName": "TASKDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Task",
            "remarks": "Description of the task to complete",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "WFASSIGNMENT"
        },
        {
            "attributeName": "ACTIONID",
            "required": false,
            "persistent": false,
            "title": "Action ID",
            "remarks": "Uniquely identifies an action in a process.",
            "sameAsAttribute": "ACTIONID",
            "sameAsObject": "WFACTION"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "MEMOS",
            "target": "WFTRANSACTION",
            "remarks": null,
            "whereClause": "wfid= :wfid and memo is not null",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "COMPLETEWF",
            "source": "WFASSIGNMENT",
            "remarks": "Relationship to the nonpersistent parameter set for completing a workflow assignment action.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}