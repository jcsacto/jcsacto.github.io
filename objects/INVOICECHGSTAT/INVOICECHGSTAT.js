mos = {
    "objectName": "INVOICECHGSTAT",
    "className": "psdi.app.invoice.virtual.InvoiceChangeStatusSet",
    "description": "Parameters for Invoice Change Status",
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
            "remarks": "Change to Status",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "INVOICE"
        },
        {
            "attributeName": "STATUSDATE",
            "required": true,
            "persistent": false,
            "title": "Status Date",
            "remarks": "Date of the status change",
            "sameAsAttribute": "STATUSDATE",
            "sameAsObject": "INVOICE"
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": false,
            "title": "Memo",
            "remarks": "Memo for status change",
            "sameAsAttribute": "MEMO",
            "sameAsObject": "WFTRANSACTION"
        },
        {
            "attributeName": "POCLOSE",
            "required": true,
            "persistent": false,
            "title": "Close PO",
            "remarks": "Close the PO on Invoice approval.",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "name": "INVOICECHANGESTATUS",
            "source": "INVOICE",
            "remarks": "Relationship to the non-persistent InvoiceChgStat table. (No where clause). The resulting set will contain zero objects.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}