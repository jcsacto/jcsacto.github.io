mos = {
    "objectName": "INVLIFOFIFOCOST",
    "className": "psdi.app.inventory.InvLifoFifoCostSet",
    "description": "Inventory LIFO FIFO Cost",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "INVLIFOFIFOCOSTID",
    "primaryKeyColumns": [
        "CONTENTUID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ITEM",
            "targetObject": "INVLIFOFIFOCOST",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "ITEMCONDITION",
            "targetObject": "INVLIFOFIFOCOST",
            "parentKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "targetKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item Condition",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "INVLIFOFIFOCOST",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "INVLIFOFIFOCOST",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "REFOBJECT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "INVLIFOFIFOCOST",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "INVLIFOFIFOCOST",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 19",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "INVLIFOFIFOCOST",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Identifies the organization that is associated with the inventory record.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "ITEMNUM",
            "required": true,
            "persistent": true,
            "title": "Item",
            "remarks": "The identifier of the item that is being transferred or received.",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "ITEMSETID",
            "required": true,
            "persistent": true,
            "title": "Item Set",
            "remarks": "Identifies the item set, or group of items, to which the current item belongs. An organization is assigned to only one item set, but multiple organizations can use the same item set.",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS"
        },
        {
            "attributeName": "CONDITIONCODE",
            "required": false,
            "persistent": true,
            "title": "Condition Code",
            "remarks": "The condition code that indicates the current physical condition of the item.",
            "sameAsAttribute": "CONDITIONCODE",
            "sameAsObject": "ITEMCONDITION"
        },
        {
            "attributeName": "COSTTYPE",
            "required": true,
            "persistent": true,
            "title": "Cost Type",
            "remarks": "The type of receipt cost that applies to the current record, either LIFO or FIFO.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COSTDATE",
            "required": true,
            "persistent": true,
            "title": "Cost Date",
            "remarks": "The receipt date for the current cost record.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "UNITCOST",
            "required": true,
            "persistent": true,
            "title": "Unit Cost",
            "remarks": "The unit cost for items subject to LIFO/FIFO costing.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "QUANTITY",
            "required": true,
            "persistent": true,
            "title": "Quantity",
            "remarks": "The receipt quantity, which can be classed as LIFO or FIFO.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REFOBJECT",
            "required": false,
            "persistent": true,
            "title": "Referring Object",
            "remarks": "Identifies the type of transaction that created the LIFO/FIFO cost record. The transaction can be a receipt, a transfer, a return, or an adjustment.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "CONDRATE",
            "required": false,
            "persistent": true,
            "title": "Condition Rate",
            "remarks": "The condition rate, expressed as a percentage. The condition rate indicates the costs associated with inventory items.",
            "sameAsAttribute": "CONDRATE",
            "sameAsObject": "INVCOST"
        },
        {
            "attributeName": "SITEID",
            "required": true,
            "persistent": true,
            "title": "Site",
            "remarks": "The site of the organization that is associated with the inventory. The site information comes from the default insert site in the user profile, which also contains information about the organization and storeroom.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "LOCATION",
            "required": true,
            "persistent": true,
            "title": "Storeroom",
            "remarks": "The storeroom where the item is stocked.  If an item is stocked in more than one storeroom, select View Availability from the Select Action menu to view balances for all storerooms.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "REFOBJECTID",
            "required": false,
            "persistent": true,
            "title": "Referring Object ID",
            "remarks": "The identifier of the transaction that created the LIFO/FIFO cost record.",
            "sameAsAttribute": "MAXOBJECTID",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "CONTENTUID",
            "required": true,
            "persistent": true,
            "title": "Content Unique ID",
            "remarks": "Content Unique ID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INVLIFOFIFOCOSTID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ITEMCONDITION",
            "target": "ITEMCONDITION",
            "remarks": "Relationship to the itemcondition table, used to find the itemcondition records for a given invlifofifocost record. (itemcondition.itemnum = invlifofifocost.itemnum and itemcondition.itemsetid=invlifofifocost.itemsetid and itemcondition.conditioncode=invlifofifocost.conditioncode). The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid and conditioncode=:conditioncode",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "INVLIFOFIFOCOST",
            "source": "INVENTORY",
            "remarks": "Relationship to the invlifofifocost table, used to find the invlifofifocost records for a given Invnetory. (invlifofifocost.itemnum = inventory.itemnum and invlifofifocost.location=inventory.location and invlifofifocost.itemsetid=inventory.itemsetid). The resulting set will contain one or more objects. The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid and location=:location and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "INVLIFOFIFOCOST_COND",
            "source": "INVENTORY",
            "remarks": "Relationship to Invlifofifocost table. The resulting set will contain one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid and location=:location and siteid=:siteid and condrate = 100",
            "cardinality": null
        },
        {
            "name": "INVLIFOFIFOCOST",
            "source": "INVTRANS",
            "remarks": "Relationship to the invtrans table, used to find the invtrans records for a given Inventory Lifo Fifo Cost. The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and location=:location and itemsetid=:itemsetid and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "INVLIFOFIFOCOST",
            "source": "ITEMCONDITION",
            "remarks": "Relationship to the itemcondition table, used to find the itemcondition records for a given inventory cost record. The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid and conditioncode=:conditioncode",
            "cardinality": null
        }
    ]
}