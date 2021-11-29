mos = {
    "objectName": "PLUSCFILTER",
    "className": "psdi.plusc.app.item.virtual.PlusCFilterSet",
    "description": "Virtual table for view tool usage dialog",
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
            "attributeName": "FROMDATE",
            "required": false,
            "persistent": false,
            "title": "From Date",
            "remarks": "From Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TODATE",
            "required": true,
            "persistent": false,
            "title": "To Date",
            "remarks": "To Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ITEMNUM",
            "required": false,
            "persistent": false,
            "title": "item",
            "remarks": "Item",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "ITEMSETID",
            "required": false,
            "persistent": false,
            "title": "item set Id",
            "remarks": "Item set Id",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "PLUSCFILTERWO",
            "target": "WORKORDER",
            "remarks": "Relationship for the filter view tool usage dialog",
            "whereClause": null,
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "PLUSCFILTER",
            "source": "TOOLITEM",
            "remarks": "Relationship for the filter",
            "whereClause": "itemnum = :itemnum",
            "cardinality": null
        }
    ]
}