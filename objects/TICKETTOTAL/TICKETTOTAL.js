mos = {
    "objectName": "TICKETTOTAL",
    "className": "psdi.app.ticket.virtual.TicketTotalSet",
    "description": "Totals",
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
            "remarks": "Estimate at approve",
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
            "name": "TICKETTOTAL",
            "source": "TICKET",
            "remarks": null,
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}