mos = {
    "objectName": "INVCOST",
    "className": "psdi.app.inventory.InvCostSet",
    "description": "Inventory Cost",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "INVCOSTID",
    "primaryKeyColumns": [
        "ITEMNUM",
        "LOCATION",
        "CONDITIONCODE",
        "SITEID",
        "ITEMSETID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ITEM",
            "targetObject": "INVCOST",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "ITEMCONDITION",
            "targetObject": "INVCOST",
            "parentKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "targetKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item Condition",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "INVCOST",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Cost Location",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "INVCOST",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "INVCOST",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 17",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "INVCOST",
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
            "attributeName": "ITEMNUM",
            "required": true,
            "persistent": true,
            "title": "Item ",
            "remarks": "Inventory item number",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "LOCATION",
            "required": true,
            "persistent": true,
            "title": "Location",
            "remarks": "Inventory location for this item's cost",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "CONDITIONCODE",
            "required": false,
            "persistent": true,
            "title": "Condition Code",
            "remarks": "A code indicating the condition of the item, associated with this item's cost",
            "sameAsAttribute": "CONDITIONCODE",
            "sameAsObject": "ITEMCONDITION"
        },
        {
            "attributeName": "CONDRATE",
            "required": true,
            "persistent": true,
            "title": "Condition Rate",
            "remarks": "Condition rate for this item. Valid values are 1-100. Values are listed as a percentage.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ITEMSETID",
            "required": true,
            "persistent": true,
            "title": "Item Set",
            "remarks": "Item set identifier",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS"
        },
        {
            "attributeName": "SITEID",
            "required": true,
            "persistent": true,
            "title": "Site",
            "remarks": "Site identifier",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "STDCOST",
            "required": true,
            "persistent": true,
            "title": "Standard Cost",
            "remarks": "Standard cost for this item.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AVGCOST",
            "required": true,
            "persistent": true,
            "title": "Average Cost",
            "remarks": "Average cost for this item.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LASTCOST",
            "required": true,
            "persistent": true,
            "title": "Last Receipt Cost",
            "remarks": "The most recent cost for this item.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLACCOUNT",
            "required": false,
            "persistent": true,
            "title": "GL Account",
            "remarks": "GL Account Code",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONTROLACC",
            "required": false,
            "persistent": true,
            "title": "Control Account",
            "remarks": "Control Account",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SHRINKAGEACC",
            "required": false,
            "persistent": true,
            "title": "Shrinkage Account",
            "remarks": "Shrinkage Account",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INVCOSTADJACC",
            "required": false,
            "persistent": true,
            "title": "Cost Adjustment Account",
            "remarks": "Cost Adjustment Account",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "NEWSTDCOST",
            "required": false,
            "persistent": false,
            "title": "New Standard Cost",
            "remarks": "The standard item cost after adjustment.",
            "sameAsAttribute": "STDCOST",
            "sameAsObject": "INVCOST"
        },
        {
            "attributeName": "NEWAVGCOST",
            "required": false,
            "persistent": false,
            "title": "New Average Cost",
            "remarks": "The average item cost after adjustment.",
            "sameAsAttribute": "AVGCOST",
            "sameAsObject": "INVCOST"
        },
        {
            "attributeName": "CONTROLACCOUNT",
            "required": false,
            "persistent": false,
            "title": "Control Account",
            "remarks": "control GL account",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INVCOSTADJACCOUNT",
            "required": false,
            "persistent": false,
            "title": "Cost Adjustment Account",
            "remarks": "Cost Adjustment Account",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PERCENTINCREASE",
            "required": false,
            "persistent": false,
            "title": "Cost %",
            "remarks": "The percentage increase or decrease when the average cost is adjusted. For example, if you need to increase an item's standard cost by 5%, type in '5' if you need to decrease an item's standard cost by 5% type in '-5'.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INVCOSTID",
            "required": true,
            "persistent": true,
            "title": "INVCOSTID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": false,
            "title": "Memo",
            "remarks": "Memo.",
            "sameAsAttribute": "MEMO",
            "sameAsObject": "INVTRANS"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "INVENTORY",
            "target": "INVENTORY",
            "remarks": "Relationship to the inventory table, used to find the inventory record for a given Invnetory Cost. (invcost.itemnum = inventory.itemnum and invcost.itemsetid=inventory.itemsetid and invcost.location=inventory.location and invcost.siteid=inventory.siteid). The resulting set will contain one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid and location=:location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVTRANS",
            "target": "INVTRANS",
            "remarks": "Relationship to the invtrans table, used to find the invtrans records for a given Invnetory Cost. (invcost.itemnum = invtrans.itemnum and invcost.itemsetid=invtrans.itemsetid and invcost.location=invtrans.storeloc). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid and storeloc=:location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEM",
            "target": "ITEM",
            "remarks": "Relationship to the item table, used to find the item record for a given Invnetory Cost. (invcost.itemnum = item.itemnum and invcost.itemsetid=item.itemsetid). The resulting set will contain one object.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMCONDITION",
            "target": "ITEMCONDITION",
            "remarks": "Relationship to the itemcondition table, used to find the itemcondition records for a given inventory cost record. (itemcondition.itemnum = invcost.itemnum and itemcondition.itemsetid=invcost.itemsetid and itemcondition.conditioncode=invcost.conditioncode). The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid and conditioncode=:conditioncode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "target": "VIEWCONTINPUT",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "INVCOST",
            "source": "INVENTORY",
            "remarks": "Relationship to the invcost table, used to find the invcost records for a given Invnetory. (invcost.itemnum = inventory.itemnum and invcost.itemsetid=inventory.itemsetid and invcost.location=inventory.location and invcost.siteid=inventory.siteid). The resulting set will contain one or more objects.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid and location=:location and siteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "INVCOST_COND",
            "source": "INVENTORY",
            "remarks": "Relationship to Invcost table. The resulting set will contain one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid and location=:location and siteid=:siteid and condrate = 100",
            "cardinality": null
        },
        {
            "name": "INVCOST",
            "source": "ITEMCONDITION",
            "remarks": "Relationship to the Invcost table, used to find the invcost records for a given item condition. (invcost.itemnum = itemcondition.itemnum and invcost.itemsetid=itemcondition.itemsetid and invcost.conditioncode = itemcondition.conditioncode and itemnum is not null ). The resulting set will contain one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid and conditioncode = :conditioncode ",
            "cardinality": "UNDEFINED"
        }
    ]
}