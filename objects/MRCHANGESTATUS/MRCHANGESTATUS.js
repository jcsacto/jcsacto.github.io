mos = {
    "objectName": "MRCHANGESTATUS",
    "className": "psdi.app.mr.virtual.MRChangeStatusSet",
    "description": "Parameters for Material Requisition Change Status",
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
            "title": "Status",
            "remarks": "Change To Status",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "MR"
        },
        {
            "attributeName": "STATDATE",
            "required": false,
            "persistent": false,
            "title": "Status Date",
            "remarks": "Status Change date",
            "sameAsAttribute": "STATUSDATE",
            "sameAsObject": "MR"
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": false,
            "title": "Memo",
            "remarks": "Memo field",
            "sameAsAttribute": "MEMO",
            "sameAsObject": "WFTRANSACTION"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "MRCHANGESTATUS",
            "source": "MR",
            "remarks": "Relationship to the non-persistent MRChangeStatus table. (No where clause). The resulting set will contain zero objects. Note: This relationship is used only for the Change Status action page to change the status of a given purchase order.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}