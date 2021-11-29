mos = {
    "objectName": "LIFOFIFOCOST",
    "className": "psdi.app.inventory.virtual.LifoFifoCostSet",
    "description": "Non Persistent Object.",
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
            "remarks": "The identifier of the item that is being transferred or received.",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "ITEMSETID",
            "required": false,
            "persistent": false,
            "title": "ItemSet",
            "remarks": "Identifies the item set, or group of items, to which the current item belongs. An organization is assigned to only one item set, but multiple organizations can use the same item set.",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS"
        },
        {
            "attributeName": "QUANTITY",
            "required": false,
            "persistent": false,
            "title": "Quantity",
            "remarks": "The receipt quantity, which can be classed as LIFO or FIFO.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": false,
            "title": "Storeroom",
            "remarks": "The storeroom where the item is stocked. If an item is stocked in more than one storeroom, select View Availability from the Select Action menu to view balances for all storerooms.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "CONDITIONCODE",
            "required": false,
            "persistent": false,
            "title": "Condition Code",
            "remarks": "The condition code that indicates the current physical condition of the item.",
            "sameAsAttribute": "CONDITIONCODE",
            "sameAsObject": "ITEMCONDITION"
        },
        {
            "attributeName": "COSTTYPE",
            "required": false,
            "persistent": false,
            "title": "Cost Type",
            "remarks": "Identifies the type of receipt cost that applies to the current record; LIFO or FIFO.",
            "sameAsAttribute": "COSTTYPE",
            "sameAsObject": "INVENTORY"
        },
        {
            "attributeName": "COSTDATE",
            "required": false,
            "persistent": false,
            "title": "Cost Date",
            "remarks": "The receipt date for the current cost record.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "UNITCOST",
            "required": true,
            "persistent": false,
            "title": "Unit Cost",
            "remarks": "The cost per unit that applies to the current record.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONDRATE",
            "required": false,
            "persistent": false,
            "title": "Condition Rate",
            "remarks": "The condition rate, expressed as a percentage. The condition rate indicates the costs associated with inventory items.",
            "sameAsAttribute": "CONDRATE",
            "sameAsObject": "INVCOST"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": false,
            "title": "Organization",
            "remarks": "Identifies the organization that is associated with the inventory record.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": false,
            "title": "Site",
            "remarks": "The site of the organization that is associated with the inventory. The site information comes from the default insert site in the user profile, which also contains information about the organization and storeroom.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ITEM",
            "target": "ITEM",
            "remarks": "Relationship to Item table. This relationship will find one object.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "LIFOFIFOCOST",
            "source": "INVENTORY",
            "remarks": "Relationship to LifoFifoCost table. This relationship will find one object.",
            "whereClause": "itemnum=:itemnum and location=:location and itemsetid=:itemsetid and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "LIFOFIFOCOST",
            "source": "ITEM",
            "remarks": "Relationship to LifoFifoCost table. This relationship will find one or more objects.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid",
            "cardinality": null
        },
        {
            "name": "LIFOFIFOCOST",
            "source": "ITEMCONDITION",
            "remarks": "Relationship to LifoFifoCost table. This relationship will find one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid and conditioncode=:conditioncode",
            "cardinality": null
        }
    ]
}