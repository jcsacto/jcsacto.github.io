mos = {
    "objectName": "PURCHVIEWCHGSTAT",
    "className": "psdi.app.contract.virtual.PurchViewChgStatSet",
    "description": "Parameters for Purchase Contract Change Status",
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
            "attributeName": "STATUS",
            "required": true,
            "persistent": false,
            "title": "New Status",
            "remarks": "The status you want the contract to hold.",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "STATDATE",
            "required": true,
            "persistent": false,
            "title": "Status Date",
            "remarks": "Status change date",
            "sameAsAttribute": "STATUSDATE",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": false,
            "title": "Memo",
            "remarks": "Use this field to insert information about the staus change.",
            "sameAsAttribute": "MEMO",
            "sameAsObject": "WFTRANSACTION"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "PURCHVIEWCHGSTAT",
            "source": "PURCHVIEW",
            "remarks": "Relationship to the non-persistent PurchViewChangeStatus object. (No where clause). The resulting set will contain zero objects. Note: This relationship is used only for the Change Status action page to change the status of a given purchase contract.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}