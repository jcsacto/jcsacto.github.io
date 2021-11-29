mos = {
    "objectName": "ISSUEITEMTOASSET",
    "className": "psdi.app.inventory.virtual.IssueItemToAssetSet",
    "description": "Issue Current Item to Multiple Assets table",
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
            "attributeName": "AVBLBALANCE",
            "required": false,
            "persistent": false,
            "title": "Available Balance",
            "remarks": "Total available balance for the item in the storeroom.",
            "sameAsAttribute": "CURBAL",
            "sameAsObject": "INVBALANCES"
        },
        {
            "attributeName": "BINNUM",
            "required": false,
            "persistent": false,
            "title": "Bin",
            "remarks": "A unique identification number indicating the primary bin or storage location for the selected item within a storeroom.",
            "sameAsAttribute": "BINNUM",
            "sameAsObject": "INVENTORY"
        },
        {
            "attributeName": "CONDITIONCODE",
            "required": false,
            "persistent": false,
            "title": "Condition Code",
            "remarks": "Condition code of this item. The code should be checked before issue and before rotating back in to inventor.",
            "sameAsAttribute": "CONDITIONCODE",
            "sameAsObject": "ITEMCONDITION"
        },
        {
            "attributeName": "CURBAL",
            "required": false,
            "persistent": false,
            "title": "Current Balance",
            "remarks": "The current balance for the item in a bin.",
            "sameAsAttribute": "CURBAL",
            "sameAsObject": "INVBALANCES"
        },
        {
            "attributeName": "ISLOT",
            "required": true,
            "persistent": false,
            "title": "Lot Tracked",
            "remarks": "Is the item being issued/returned a lot tracking asset?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISSUETYPE",
            "required": true,
            "persistent": false,
            "title": "Transaction Type",
            "remarks": "Type of transaction - valid values are ISSUE or RETURN.",
            "sameAsAttribute": "ISSUETYPE",
            "sameAsObject": "MATUSETRANS"
        },
        {
            "attributeName": "ITEMNUM",
            "required": true,
            "persistent": false,
            "title": "Item",
            "remarks": "The Inventory Item to be issued or returned.",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "ITEMSETID",
            "required": true,
            "persistent": false,
            "title": "Item Set",
            "remarks": "Set identifier for the item.",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS"
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
            "attributeName": "ORGID",
            "required": true,
            "persistent": false,
            "title": "Organization",
            "remarks": "Organization Identifier.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "OUTSIDE",
            "required": true,
            "persistent": false,
            "title": "Outside",
            "remarks": "Is Item an Outside Item?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "QUANTITY",
            "required": false,
            "persistent": false,
            "title": "Quantity",
            "remarks": "The total quantity of this item to issue to or return from the SITEID for all assets.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ROTATING",
            "required": true,
            "persistent": false,
            "title": "Rotating",
            "remarks": "Is this a rotating item?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SITEID",
            "required": true,
            "persistent": false,
            "title": "Site",
            "remarks": "The site identifier indicating where the item is held.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "STORELOC",
            "required": true,
            "persistent": false,
            "title": "Storeroom",
            "remarks": "The storeroom location from which this item is issued and returned.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "UNITCOST",
            "required": false,
            "persistent": false,
            "title": "Unit Cost",
            "remarks": "Default issue cost of the item in the storeroom.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "DRILLDOWN",
            "target": "DRILLDOWN",
            "remarks": "Relationship from the ISSUEITEMTOASSET to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVLOT",
            "target": "INVLOT",
            "remarks": "Relationship to the InvLot table, used to find the lot information for the material issue.",
            "whereClause": "itemnum = :itemnum and location = :storeloc and lotnum=:lotnum and siteid=:siteid and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ISSUECURRENTITEM",
            "target": "ISSUECURRENTITEM",
            "remarks": "Relationship to the non-persistent ISSUECURRENTITEM table, used to get an empty set so that assets can be select for the issue or return. (1>2). The resulting set will contain zero objects.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMCONDITION",
            "target": "ITEMCONDITION",
            "remarks": "Relationship to the itemcondition table, used to find the itemcondition records for a given Inventory Issue Current Item to Multiple Assets record. (itemcondition.itemnum = issueitemtoasset.itemnum and itemcondition.itemsetid=issueitemtoasset.itemsetid and itemcondition.conditioncode=issueitemtoasset.conditioncode). The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid and conditioncode=:conditioncode",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "ISSUEITEMTOASSET",
            "source": "INVENTORY",
            "remarks": "Relationship to the non-persistent IssueItemToAsset table. (issueitemtoasset.itemnum = inventory.itemnum and issueitemtoasset.storeloc = inventory.location and issueitemtoasset.itemsetid = inventory.itemsetid and issueitemtoasset.siteid = inventory.siteid). The resulting set will contain zero objects. This relationship is used only for the Issue Current Item to Multiple Assets action page on the Inventory application.",
            "whereClause": "itemnum=:itemnum and storeloc=:location and itemsetid = :itemsetid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ]
}