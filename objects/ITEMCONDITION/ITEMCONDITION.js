mos = {
    "objectName": "ITEMCONDITION",
    "className": "psdi.app.item.ItemConditionSet",
    "description": "Condition Code Setup",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "ITEMCONDITIONID",
    "primaryKeyColumns": [
        "ITEMNUM",
        "CONDITIONCODE",
        "ITEMSETID"
    ],
    "logicalRelationships": [
        {
            "objectName": "ITEMCONDITION",
            "targetObject": "ASSET",
            "parentKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "targetKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item Condition",
            "longDescription": null
        },
        {
            "objectName": "ITEMCONDITION",
            "targetObject": "CONTRACTLINE",
            "parentKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "targetKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item Condition",
            "longDescription": null
        },
        {
            "objectName": "ITEMCONDITION",
            "targetObject": "INVBALANCES",
            "parentKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "targetKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item Condition",
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
            "objectName": "ITEMCONDITION",
            "targetObject": "INVOICELINE",
            "parentKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "targetKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item Condition",
            "longDescription": null
        },
        {
            "objectName": "ITEMCONDITION",
            "targetObject": "INVRESERVE",
            "parentKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "targetKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item Condition",
            "longDescription": null
        },
        {
            "objectName": "ITEMCONDITION",
            "targetObject": "INVTRANS",
            "parentKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "targetKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item Condition",
            "longDescription": null
        },
        {
            "objectName": "ITEMCONDITION",
            "targetObject": "INVUSELINE",
            "parentKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "targetKeys": "ITEMNUM, FROMCONDITIONCODE, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Issued Item Condition",
            "longDescription": null
        },
        {
            "objectName": "ITEMCONDITION",
            "targetObject": "INVUSELINE",
            "parentKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "targetKeys": "ITEMNUM, TOCONDITIONCODE, ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 10",
            "longDescription": null
        },
        {
            "objectName": "ITEMCONDITION",
            "targetObject": "INVUSELINESPLIT",
            "parentKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "targetKeys": "ITEMNUM, FROMCONDITIONCODE, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item Condition",
            "longDescription": null
        },
        {
            "objectName": "ITEMCONDITION",
            "targetObject": "INVVENDOR",
            "parentKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "targetKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item Condition",
            "longDescription": null
        },
        {
            "objectName": "ITEMCONDITION",
            "targetObject": "JOBITEM",
            "parentKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "targetKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item Condition",
            "longDescription": null
        },
        {
            "objectName": "ITEMCONDITION",
            "targetObject": "JOBMATERIAL",
            "parentKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "targetKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item Condition",
            "longDescription": null
        },
        {
            "objectName": "ITEMCONDITION",
            "targetObject": "JOBSERVICE",
            "parentKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "targetKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item Condition",
            "longDescription": null
        },
        {
            "objectName": "ITEMCONDITION",
            "targetObject": "JOBTOOL",
            "parentKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "targetKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item Condition",
            "longDescription": null
        },
        {
            "objectName": "ITEMCONDITION",
            "targetObject": "LEASEVIEWLINE",
            "parentKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "targetKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item Condition",
            "longDescription": null
        },
        {
            "objectName": "ITEMCONDITION",
            "targetObject": "MATRECTRANS",
            "parentKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "targetKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item Condition",
            "longDescription": null
        },
        {
            "objectName": "ITEMCONDITION",
            "targetObject": "MATRECTRANS",
            "parentKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "targetKeys": "ITEMNUM, FROMCONDITIONCODE, ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 19",
            "longDescription": null
        },
        {
            "objectName": "ITEMCONDITION",
            "targetObject": "MATUSETRANS",
            "parentKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "targetKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item Condition",
            "longDescription": null
        },
        {
            "objectName": "ITEMCONDITION",
            "targetObject": "MRLINE",
            "parentKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "targetKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item Condition",
            "longDescription": null
        },
        {
            "objectName": "ITEMCONDITION",
            "targetObject": "POLINE",
            "parentKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "targetKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item Condition",
            "longDescription": null
        },
        {
            "objectName": "ITEMCONDITION",
            "targetObject": "PRLINE",
            "parentKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "targetKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item Condition for PR Line",
            "longDescription": null
        },
        {
            "objectName": "ITEMCONDITION",
            "targetObject": "QUOTATIONLINE",
            "parentKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "targetKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item Condition",
            "longDescription": null
        },
        {
            "objectName": "ITEMCONDITION",
            "targetObject": "REORDERPAD",
            "parentKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "targetKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 25",
            "longDescription": null
        },
        {
            "objectName": "ITEMCONDITION",
            "targetObject": "RFQLINE",
            "parentKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "targetKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item Condition",
            "longDescription": null
        },
        {
            "objectName": "ITEMCONDITION",
            "targetObject": "SFWVIEWLINE",
            "parentKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "targetKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item Condition",
            "longDescription": null
        },
        {
            "objectName": "ITEMCONDITION",
            "targetObject": "SHIPMENTLINE",
            "parentKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "targetKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item Condition",
            "longDescription": null
        },
        {
            "objectName": "ITEMCONDITION",
            "targetObject": "WARRANTYVIEWLINE",
            "parentKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "targetKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item Condition",
            "longDescription": null
        },
        {
            "objectName": "ITEMCONDITION",
            "targetObject": "WPITEM",
            "parentKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "targetKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item Condition",
            "longDescription": null
        },
        {
            "objectName": "ITEMCONDITION",
            "targetObject": "WPMATERIAL",
            "parentKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "targetKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item Condition",
            "longDescription": null
        },
        {
            "objectName": "ITEMCONDITION",
            "targetObject": "WPSERVICE",
            "parentKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "targetKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item Condition",
            "longDescription": null
        },
        {
            "objectName": "ITEMCONDITION",
            "targetObject": "WPTOOL",
            "parentKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "targetKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item Condition",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "COMMODITIES",
            "targetObject": "ITEMCONDITION",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITY, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "ITEMCONDITION",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITYGROUP, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity Group",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "ITEMCONDITION",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "ITEMCONDITION",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "ITEMCONDITION",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 29",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "CONDITIONCODE",
            "required": true,
            "persistent": true,
            "title": "Condition Code",
            "remarks": "Condition code associated with the item. A condition code allows you to track the balance and value of each item. You can apply different rates to an item as its condition changes from use, such as from new to used. If you mark an item as condition enabled, you must assign at least one condition code to it. For each condition-enabled item, one condition code must have a \"\"full-value\"\" rate of 100%. Maximo uses this condition code as the reference point to calculate values for any other condition codes for this item. Each time the item is issued, transferred, or returned you specify the condition of the item based on codes you set up. Click the Detail Menu button to choose a condition code or go the Condition Codes application to create one.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the condition code associated with this item. A condition code allows you to track the balance and value of each item.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STOCKTYPE",
            "required": false,
            "persistent": true,
            "title": "Stock Type",
            "remarks": "Stock type of this condition code",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ITEMNUM",
            "required": false,
            "persistent": true,
            "title": "Item ",
            "remarks": "Item associated with the condition code",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "ITEMSETID",
            "required": true,
            "persistent": true,
            "title": "Set Identifier",
            "remarks": "Set identifier for the item.",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS"
        },
        {
            "attributeName": "CONDRATE",
            "required": false,
            "persistent": true,
            "title": "Condition Rate",
            "remarks": "Condition's rate expressed as a percentage. For example, a condition code of NEW would have 100 as the condition rate (in percent), while a condition code of FAIR might have 50 as the condition rate.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Long Description for ItemCondition Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COMMODITYGROUP",
            "required": false,
            "persistent": true,
            "title": "Commodity Group",
            "remarks": "Commodity Group",
            "sameAsAttribute": "COMMODITY",
            "sameAsObject": "COMMODITIES"
        },
        {
            "attributeName": "COMMODITY",
            "required": false,
            "persistent": true,
            "title": "Commodity Code",
            "remarks": "Commodity",
            "sameAsAttribute": "COMMODITY",
            "sameAsObject": "COMMODITIES"
        },
        {
            "attributeName": "ITEMCONDITIONID",
            "required": true,
            "persistent": true,
            "title": "ITEMCONDITIONID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LANGCODE",
            "required": true,
            "persistent": true,
            "title": "Language Code",
            "remarks": "Language Column",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        },
        {
            "attributeName": "HASLD",
            "required": true,
            "persistent": true,
            "title": "Has Long Description",
            "remarks": "Boolean flag to indicate if there is any long description for this record",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "INVCOST",
            "target": "INVCOST",
            "remarks": "Relationship to the Invcost table, used to find the invcost records for a given item condition. (invcost.itemnum = itemcondition.itemnum and invcost.itemsetid=itemcondition.itemsetid and invcost.conditioncode = itemcondition.conditioncode and itemnum is not null ). The resulting set will contain one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid and conditioncode = :conditioncode ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVLIFOFIFOCOST",
            "target": "INVLIFOFIFOCOST",
            "remarks": "Relationship to the itemcondition table, used to find the itemcondition records for a given inventory cost record. The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid and conditioncode=:conditioncode",
            "cardinality": null
        },
        {
            "name": "ITEM",
            "target": "ITEM",
            "remarks": "Relationship to the item table, used to find the item record for a given item condition record. (itemcondition.itemnum = item.itemnum and itemcondition.itemsetid=item.itemsetid). The resulting set will contain one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMCONDITION",
            "target": "ITEMCONDITION",
            "remarks": "Relationship to the itemcondition table, used to find the itemcondition records for a given item condition. (itemcondition.itemnum = itemcondition.itemnum and itemcondition.itemsetid=itemcondition.itemsetid and itemcondition.conditioncode = itemcondition.conditioncode and itemnum is not null ). The resulting set will contain one object.",
            "whereClause": "itemsetid=:itemsetid and conditioncode = :conditioncode and itemnum is not null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LIFOFIFOCOST",
            "target": "LIFOFIFOCOST",
            "remarks": "Relationship to LifoFifoCost table. This relationship will find one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid and conditioncode=:conditioncode",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "ITEMCONDITION",
            "source": "ASSET",
            "remarks": "Relationship to the itemcondition table, used to find the itemcondition records for a given asset record. (itemcondition.itemnum = asset.itemnum and itemcondition.itemsetid=asset.itemsetid and itemcondition.conditioncode=asset.conditioncode). The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid and conditioncode=:conditioncode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMCONDITION",
            "source": "ASSETINPUT",
            "remarks": "Relationship to the itemcondition table, used to find the itemcondition records for a given AssetInput record. (itemcondition.itemnum = assetinput.itemnum and itemcondition.itemsetid=assetinput.itemsetid and itemcondition.conditioncode=assetinput.conditioncode). The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid and conditioncode=:conditioncode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMCONDITION",
            "source": "CONTRACTLINE",
            "remarks": "Relationship to the itemcondition table, used to find the itemcondition records for a given contract line record. (itemcondition.itemnum = contractline.itemnum and itemcondition.itemsetid=contractline.itemsetid and itemcondition.conditioncode=contractlinel.conditioncode). The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid and conditioncode=:conditioncode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMCONDITION",
            "source": "INVADJUSTMENT",
            "remarks": "Relationship to the itemcondition table, used to find the itemcondition records for a given Inventory Adjustment record. (itemcondition.itemnum = invadjustment.itemnum and itemcondition.itemsetid=invadjustment.itemsetid and itemcondition.conditioncode=invadjustment.conditioncode). The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid and conditioncode=:conditioncode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMCONDITION",
            "source": "INVBALANCES",
            "remarks": "Relationship to the itemcondition table, used to find the itemcondition records for a given inventory balances record. (itemcondition.itemnum = invbalances.itemnum and itemcondition.itemsetid=invbalances.itemsetid and itemcondition.conditioncode=invbalances.conditioncode). The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid and conditioncode=:conditioncode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMCONDITION",
            "source": "INVCOST",
            "remarks": "Relationship to the itemcondition table, used to find the itemcondition records for a given inventory cost record. (itemcondition.itemnum = invcost.itemnum and itemcondition.itemsetid=invcost.itemsetid and itemcondition.conditioncode=invcost.conditioncode). The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid and conditioncode=:conditioncode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMCONDITION",
            "source": "INVLIFOFIFOCOST",
            "remarks": "Relationship to the itemcondition table, used to find the itemcondition records for a given invlifofifocost record. (itemcondition.itemnum = invlifofifocost.itemnum and itemcondition.itemsetid=invlifofifocost.itemsetid and itemcondition.conditioncode=invlifofifocost.conditioncode). The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid and conditioncode=:conditioncode",
            "cardinality": null
        },
        {
            "name": "ITEMCONDITION",
            "source": "INVOICELINE",
            "remarks": "Relationship to the itemcondition table, used to find the itemcondition records for a given Invoice Line record. (itemcondition.itemnum = invoiceline.itemnum and itemcondition.itemsetid=invoiceline.itemsetid and itemcondition.conditioncode=invoiceline.conditioncode). The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid and conditioncode=:conditioncode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMCONDITION",
            "source": "INVRESERVE",
            "remarks": "Relationship to the itemcondition table, used to find the itemcondition records for a given Inventory Reservation record. (itemcondition.itemnum = invreserve.itemnum and itemcondition.itemsetid=invreserve.itemsetid and itemcondition.conditioncode=invreserve.conditioncode). The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid and conditioncode=:conditioncode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMCONDITION",
            "source": "INVUSELINE",
            "remarks": "Relationship to the itemcondition table, used to find the itemcondition records for a given Invuseline record. The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid and conditioncode=:fromconditioncode",
            "cardinality": null
        },
        {
            "name": "ITEMCONDITION",
            "source": "ISSUECURRENTITEM",
            "remarks": "Relationship to the itemcondition table, used to find the itemcondition records for a given Inventory Issue Current Item record. (itemcondition.itemnum = issuecurrentitem.itemnum and itemcondition.itemsetid=issuecurrentitem.itemsetid and itemcondition.conditioncode=issuecurrentitem.conditioncode). The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid and conditioncode=:conditioncode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMCONDITION",
            "source": "ISSUEITEMTOASSET",
            "remarks": "Relationship to the itemcondition table, used to find the itemcondition records for a given Inventory Issue Current Item to Multiple Assets record. (itemcondition.itemnum = issueitemtoasset.itemnum and itemcondition.itemsetid=issueitemtoasset.itemsetid and itemcondition.conditioncode=issueitemtoasset.conditioncode). The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid and conditioncode=:conditioncode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMCONDITION",
            "source": "ITEM",
            "remarks": "Relationship to the itemcondition table, used to find the itemcondition records for a given item. (itemcondition.itemnum = item.itemnum and itemcondition.itemsetid=item.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "ITEMCONDITION_FULL",
            "source": "ITEM",
            "remarks": "Relationship to the itemcondition table, used to find the itemcondition record of full rate for a given item. (itemcondition.itemnum = item.itemnum and itemcondition.itemsetid=item.itemsetid and itemcondition.condrate=100). The resulting set will contain zeor or one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid and condrate=100",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMCONDITION_SETUP",
            "source": "ITEM",
            "remarks": "Relationship to the itemcondition table, used to find the itemcondition records for a given item set of the current login organization (itemcondition.itemnum is null and itemcondition.itemsetid=item.itemsetid). The resulting set will contain zeor or more objects.",
            "whereClause": "itemnum is null and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMCONDITION",
            "source": "ITEMCONDITION",
            "remarks": "Relationship to the itemcondition table, used to find the itemcondition records for a given item condition. (itemcondition.itemnum = itemcondition.itemnum and itemcondition.itemsetid=itemcondition.itemsetid and itemcondition.conditioncode = itemcondition.conditioncode and itemnum is not null ). The resulting set will contain one object.",
            "whereClause": "itemsetid=:itemsetid and conditioncode = :conditioncode and itemnum is not null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMCONDITION",
            "source": "JOBMATERIAL",
            "remarks": "Relationship to the itemcondition table, used to find the itemcondition records for a given Job Material record. (itemcondition.itemnum = jobmaterial.itemnum and itemcondition.itemsetid=jobmaterial.itemsetid and itemcondition.conditioncode=jobmaterial.conditioncode). The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid and conditioncode=:conditioncode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMCONDITION",
            "source": "MATRECTRANS",
            "remarks": "Relationship to the itemcondition table, used to find the itemcondition records for a given MatRecTrans record. (itemcondition.itemnum = matrectrans.itemnum and itemcondition.itemsetid=matrectrans.itemsetid and itemcondition.conditioncode=matrectrans.conditioncode). The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid and conditioncode=:conditioncode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMCONDITION",
            "source": "MATUSETRANS",
            "remarks": "Relationship to the itemcondition table, used to find the itemcondition records for a given MatUseTrans record. (itemcondition.itemnum = matusetrans.itemnum and itemcondition.itemsetid=matusetrans.itemsetid and itemcondition.conditioncode=matusetrans.conditioncode). The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid and conditioncode=:conditioncode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMCONDITION",
            "source": "MRLINE",
            "remarks": "Relationship to the itemcondition table, used to find the itemcondition records for a given MR Line record. (itemcondition.itemnum = mrline.itemnum and itemcondition.itemsetid=mrline.itemsetid and itemcondition.conditioncode=mrline.conditioncode). The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid and conditioncode=:conditioncode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMCONDITION",
            "source": "POLINE",
            "remarks": "Relationship to the itemcondition table, used to find the itemcondition records for a given Purchase Order Line record. (itemcondition.itemnum = poline.itemnum and itemcondition.itemsetid=poline.itemsetid and itemcondition.conditioncode=poline.conditioncode). The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid and conditioncode=:conditioncode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMCONDITION",
            "source": "PRLINE",
            "remarks": "Relationship to the itemcondition table, used to find the itemcondition records for a given Purchase Requisition Line record. (itemcondition.itemnum = prline.itemnum and itemcondition.itemsetid=prline.itemsetid and itemcondition.conditioncode=prline.conditioncode). The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid and conditioncode=:conditioncode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMCONDITION",
            "source": "QUOTATIONLINE",
            "remarks": "Relationship to the itemcondition table, used to find the itemcondition records for a given Quotation Line record. (itemcondition.itemnum = quotationline.itemnum and itemcondition.itemsetid=quotationline.itemsetid and itemcondition.conditioncode=quotationline.conditioncode). The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid and conditioncode=:conditioncode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMCONDITION",
            "source": "RECEIPTINPUT",
            "remarks": "Relationship to the itemcondition table, used to find the itemcondition records for a given Receipt Input record. (itemcondition.itemnum = receiptinput.itemnum and itemcondition.itemsetid=receiptinput.itemsetid and itemcondition.conditioncode=receiptinput.conditioncode). The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid and conditioncode=:conditioncode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMCONDITION",
            "source": "REORDERPAD",
            "remarks": "Relationship to the itemcondition table, used to find the itemcondition records for a given Reorder record. (itemcondition.itemnum = reorderpad.itemnum and itemcondition.itemsetid=reorderpad.itemsetid and itemcondition.conditioncode=reorderpad.conditioncode). The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid and conditioncode=:conditioncode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMCONDITION",
            "source": "RFQLINE",
            "remarks": "Relationship to the itemcondition table, used to find the itemcondition records for a given RFQ Line record. (itemcondition.itemnum = rfqline.itemnum and itemcondition.itemsetid=rfqline.itemsetid and itemcondition.conditioncode=rfqline.conditioncode). The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid and conditioncode=:conditioncode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMCONDITION",
            "source": "SETS",
            "remarks": null,
            "whereClause": "itemsetid=:setid and itemnum is null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMCONDITION",
            "source": "SHIPMENTLINE",
            "remarks": "Relationship to the itemcondition table, used to find the itemcondition records for a given Shipment Line record. (itemcondition.itemnum = shipmentline.itemnum and itemcondition.itemsetid=shipmentline.itemsetid and itemcondition.conditioncode=shipmentline.conditioncode). The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid and conditioncode=:conditioncode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMCONDITION",
            "source": "TRANSFERCURITEM",
            "remarks": "Relationship to the itemcondition table, used to find the itemcondition records for a given transfer current itemy record. (itemcondition.itemnum = transfercuritem.itemnum and itemcondition.itemsetid=transfercuritem.itemsetid and itemcondition.conditioncode=transfercuritem.conditioncode). The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid and conditioncode=:conditioncode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMCONDITION",
            "source": "WPMATERIAL",
            "remarks": "Relationship to the itemcondition table, used to find the itemcondition records for a given work order plan material record. (itemcondition.itemnum = wpmaterial.itemnum and itemcondition.itemsetid=wpmaterial.itemsetid and itemcondition.conditioncode=wpmaterial.conditioncode). The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid and conditioncode=:conditioncode",
            "cardinality": "UNDEFINED"
        }
    ]
}