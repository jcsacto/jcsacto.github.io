mos = {
    "objectName": "AUTOSCRIPTCHGSTATE",
    "className": "com.ibm.ism.script.autoscript.virtual.AutoScriptChangeStateSet",
    "description": "Script Management State Change",
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
            "attributeName": "ASOFDATE",
            "required": true,
            "persistent": false,
            "title": "State Date",
            "remarks": "Date of the state change",
            "sameAsAttribute": "CHANGEDATE",
            "sameAsObject": "AUTOSCRIPT"
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": false,
            "title": "Memo",
            "remarks": "Memo for state change",
            "sameAsAttribute": "MEMO",
            "sameAsObject": "WFTRANSACTION"
        },
        {
            "attributeName": "STATUS",
            "required": true,
            "persistent": false,
            "title": "New Status",
            "remarks": "Change to Status",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "AUTOSCRIPT"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "AUTOSCRIPTCHGSTATE",
            "source": "AUTOSCRIPT",
            "remarks": "Relationship to the nonpersistent parameter set for changing the automation script state.",
            "whereClause": null,
            "cardinality": null
        }
    ]
}