mos = {
    "objectName": "TKCHANGESTATUS",
    "className": "psdi.app.ticket.virtual.TKChangeStatusSet",
    "description": "Ticket status change non-persistent table",
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
            "remarks": "Status you wish to change ticket to.",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "TICKET"
        },
        {
            "attributeName": "ASOFDATE",
            "required": false,
            "persistent": false,
            "title": "Status Date",
            "remarks": "Date of the status change.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": false,
            "title": "Memo",
            "remarks": "Optional memo about the status change. Becomes part of history for this record.",
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
            "name": "TKCHANGESTATUS",
            "source": "TICKET",
            "remarks": null,
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}