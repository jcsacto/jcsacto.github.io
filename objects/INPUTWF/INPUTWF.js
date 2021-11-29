mos = {
    "objectName": "INPUTWF",
    "className": "psdi.workflow.virtual.InputWFSet",
    "description": "Parameter set for a workflow manual input.",
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
            "remarks": "Memo for the Manual Input action",
            "sameAsAttribute": "MEMO",
            "sameAsObject": "WFTRANSACTION"
        },
        {
            "attributeName": "ACTIONID",
            "required": false,
            "persistent": false,
            "title": "Action",
            "remarks": "The selected action from the manual input.",
            "sameAsAttribute": "ACTIONID",
            "sameAsObject": "WFACTION"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "INPUTWF",
            "source": "WFINSTANCE",
            "remarks": "Relationship to virtual set for manual input.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}