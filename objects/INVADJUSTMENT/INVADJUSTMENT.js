mos = {
    "objectName": "INVADJUSTMENT",
    "className": "psdi.app.inventory.virtual.InvAdjustmentSet",
    "description": "Non-persistent object for Inventory adjustment",
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
            "attributeName": "ITEMNUM",
            "required": false,
            "persistent": false,
            "title": "Item",
            "remarks": "The item for which the adjustment is performed.",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": false,
            "title": "Storeroom",
            "remarks": "The storeroom location of the adjustment.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "BINNUM",
            "required": false,
            "persistent": false,
            "title": "Bin",
            "remarks": "A unique identification code indicating the primary bin or storage location for the selected item within a storeroom.",
            "sameAsAttribute": "BINNUM",
            "sameAsObject": "INVENTORY"
        },
        {
            "attributeName": "LOTNUM",
            "required": false,
            "persistent": false,
            "title": "Lot",
            "remarks": "Lot number of the item if the item is lotted.",
            "sameAsAttribute": "LOTNUM",
            "sameAsObject": "INVLOT"
        },
        {
            "attributeName": "NEWCOST",
            "required": false,
            "persistent": false,
            "title": "Adjusted Cost",
            "remarks": "The standard cost or average cost after the cost adjustment",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OLDCURBAL",
            "required": false,
            "persistent": false,
            "title": "Old Balance",
            "remarks": "The balance of the item in the given bin before the balance adjustment",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "QUANTITY",
            "required": false,
            "persistent": false,
            "title": "New Quantity",
            "remarks": "New quantity to adjust the item's current balance or physical count in the bin",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONTROLACC",
            "required": false,
            "persistent": false,
            "title": "Control GL Account",
            "remarks": "The inventory's control GL account.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SHRINKAGEACC",
            "required": false,
            "persistent": false,
            "title": "Shrinkage GL Account",
            "remarks": "The inventory's shrinkage GL account",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INVCOSTADJACC",
            "required": false,
            "persistent": false,
            "title": "Cost Adjustment GL Account",
            "remarks": "The inventory's cost adjustment GL account.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": false,
            "title": "Memo",
            "remarks": "Remark for this inventory ajustment",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PERCENTAGEINCREASE",
            "required": false,
            "persistent": false,
            "title": "Percentage Increase",
            "remarks": "The percentage increase when the average cost is adjusted",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ADJUSTMENTDATE",
            "required": true,
            "persistent": false,
            "title": "Adjustment Date",
            "remarks": "Date & Time the adjustment occurred",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ADJUSTMENTTYPE",
            "required": true,
            "persistent": false,
            "title": "Adjustment Type",
            "remarks": "Type of the adjustment. Acceptable values are in valuelist ITTYPE",
            "sameAsAttribute": "TRANSTYPE",
            "sameAsObject": "INVTRANS"
        },
        {
            "attributeName": "OLDPHYSCNT",
            "required": false,
            "persistent": false,
            "title": "Physical Count",
            "remarks": "The physical count for the item in the bin before the physical count adjustment",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OLDAVGCOST",
            "required": false,
            "persistent": false,
            "title": "Average Cost",
            "remarks": "The average cost before the cost adjustment",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OLDSTDCOST",
            "required": false,
            "persistent": false,
            "title": "Standard Cost",
            "remarks": "The standard cost before the cost adjustment",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "title": "Condition Code",
            "remarks": "The item condition when the inventory adjustment occurred.",
            "sameAsAttribute": "CONDITIONCODE",
            "sameAsObject": "ITEMCONDITION"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": false,
            "title": "Organization",
            "remarks": "Organization Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": false,
            "title": "Site",
            "remarks": "Site Identifier",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ITEMCONDITION",
            "target": "ITEMCONDITION",
            "remarks": "Relationship to the itemcondition table, used to find the itemcondition records for a given Inventory Adjustment record. (itemcondition.itemnum = invadjustment.itemnum and itemcondition.itemsetid=invadjustment.itemsetid and itemcondition.conditioncode=invadjustment.conditioncode). The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid and conditioncode=:conditioncode",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "INVADJUSTMENT",
            "source": "INVENTORY",
            "remarks": "Relationship to the Inventory table, used to find the same Inventory record for a given Inventory record. (inventory.itemnum = inventory.itemnum and inventory.location = inventory.location and inventory.siteid = inventory.siteid and invadjustment.itemsetid = inventory.itemsetid). The resulting set will contain one object.",
            "whereClause": "itemnum=:itemnum and location=:location and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        }
    ]
}