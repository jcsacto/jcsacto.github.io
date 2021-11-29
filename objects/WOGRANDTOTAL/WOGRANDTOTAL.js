mos = {
    "objectName": "WOGRANDTOTAL",
    "className": "psdi.app.workorder.virtual.WOGrandTotalSet",
    "description": "Non-Persistent table to display WO grandtotals",
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
            "attributeName": "ACT",
            "required": false,
            "persistent": false,
            "title": "Actual",
            "remarks": "Actual",
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
            "title": "Approved Estimate",
            "remarks": "The estimated labor or costs at the time of work order approval.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
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
            "attributeName": "EXCEEDED",
            "required": false,
            "persistent": false,
            "title": "Exceeds Estimate by",
            "remarks": "The labor hours or costs that exceed the approved estimate.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "WOGRANDTOTAL",
            "source": "WORKORDER",
            "remarks": "Relationship to the nonpersistent set that calculates work order grandtotals.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}