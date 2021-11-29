mos = {
    "objectName": "CPYPOLINE",
    "className": "psdi.app.invoice.virtual.CpyPoLineSet",
    "description": "Non-persistent table for copy PO Lines dialog",
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
            "attributeName": "VIEWUNINV",
            "required": true,
            "persistent": false,
            "title": "View Uninvoced Records",
            "remarks": "View Uninvoced Records",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "CPYPOLINE",
            "source": "INVOICE",
            "remarks": "Relationship to non-persistent CPYPOLINE object",
            "whereClause": null,
            "cardinality": null
        }
    ]
}