mos = {
    "objectName": "POCHANGESTATUS",
    "className": "psdi.app.po.virtual.POChangeStatusSet",
    "description": "Parameters for Purchase Order Change Status",
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
            "remarks": "New status of the PO.",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "PO"
        },
        {
            "attributeName": "STATDATE",
            "required": true,
            "persistent": false,
            "title": "Status Date",
            "remarks": "Date when the status was changed.",
            "sameAsAttribute": "STATUSDATE",
            "sameAsObject": "PO"
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": false,
            "title": "Memo",
            "remarks": "Note about the status change.",
            "sameAsAttribute": "MEMO",
            "sameAsObject": "WFTRANSACTION"
        },
        {
            "attributeName": "GENSTATUSACTION",
            "required": true,
            "persistent": false,
            "title": "Memo",
            "remarks": "From general change status action",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "POCHANGESTATUS",
            "source": "PO",
            "remarks": "Relationship to the non-persistent POChangeStatus table. (No where clause). The resulting set will contain zero objects. Note: This relationship is used only for the Change Status action page to change the status of a given purchase order.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}