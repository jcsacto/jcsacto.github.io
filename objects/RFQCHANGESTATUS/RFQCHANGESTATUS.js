mos = {
    "objectName": "RFQCHANGESTATUS",
    "className": "psdi.app.rfq.virtual.RFQChangeStatusSet",
    "description": "Parameters for RFQ Change Status",
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
            "remarks": "New status of the RFQ.",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "RFQ"
        },
        {
            "attributeName": "STATUSDATE",
            "required": true,
            "persistent": false,
            "title": "Status Date",
            "remarks": "Date when the status was changed.",
            "sameAsAttribute": "STATUSDATE",
            "sameAsObject": "RFQ"
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
            "name": "RFQCHANGESTATUS",
            "source": "RFQ",
            "remarks": "Relationship to the non-persistent RFQChangeStatus table. (No where clause). The resulting set will contain zero objects. Note: This relationship is used only for the Change Status action page to change the status of a given request for quotation.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}