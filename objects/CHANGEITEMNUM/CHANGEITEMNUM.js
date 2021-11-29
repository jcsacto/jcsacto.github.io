mos = {
    "objectName": "CHANGEITEMNUM",
    "className": "psdi.app.asset.virtual.ChangeItemnumSet",
    "description": "Parameters for Asset Change Itemnum function",
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
            "attributeName": "CURRENTITEMNUM",
            "required": false,
            "persistent": false,
            "title": "Old Item",
            "remarks": "Asset Itemnum value before modification",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "NEWITEMNUM",
            "required": false,
            "persistent": false,
            "title": "New Item",
            "remarks": "Proposed new itemnum to replace the current Asset Itemnum",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "ITEMSETID",
            "required": false,
            "persistent": false,
            "title": "Item Set",
            "remarks": "Set identifier for the item.",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS"
        },
        {
            "attributeName": "CONDITIONCODE",
            "required": false,
            "persistent": false,
            "title": "Condtion Code",
            "remarks": "Condition Code",
            "sameAsAttribute": "CONDITIONCODE",
            "sameAsObject": "ITEMCONDITION"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "CHANGEITEMNUM",
            "source": "ASSET",
            "remarks": "Relationship to the nonpersistent parameter set for changing the ItemNum attribute.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}