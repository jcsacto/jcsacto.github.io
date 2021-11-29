mos = {
    "objectName": "TICKETGRANDTOTAL",
    "className": "psdi.app.ticket.virtual.TicketGrandTotalSet",
    "description": "View Hierarchy Grand Totals",
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
            "attributeName": "TOTAL",
            "required": false,
            "persistent": false,
            "title": "Total",
            "remarks": "Total",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EST",
            "required": false,
            "persistent": false,
            "title": "Current Estimate",
            "remarks": "Current Estimate",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ESTATAPPR",
            "required": false,
            "persistent": false,
            "title": "Estimate at Approval",
            "remarks": "Estimate at Approve",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ACT",
            "required": false,
            "persistent": false,
            "title": "Actual",
            "remarks": "Actual",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "TICKETGRANDTOTAL",
            "source": "TICKET",
            "remarks": null,
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}