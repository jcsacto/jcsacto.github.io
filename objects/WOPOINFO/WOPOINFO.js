mos = {
    "objectName": "WOPOINFO",
    "className": "psdi.app.workorder.virtual.WOPOInfoSet",
    "description": "Non-Persistent table to display PO Info on a WO",
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
            "attributeName": "POTOTAL",
            "required": false,
            "persistent": false,
            "title": "PO Total",
            "remarks": "PO Total",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PRTOTAL",
            "required": false,
            "persistent": false,
            "title": "PR Total",
            "remarks": "PR Totals",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "WOPOINFO",
            "source": "WORKORDER",
            "remarks": "Relationship to the nonpersistent set that calculates PO totals for a work order.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}