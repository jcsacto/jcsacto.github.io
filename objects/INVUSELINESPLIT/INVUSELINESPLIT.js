mos = {
    "objectName": "INVUSELINESPLIT",
    "className": "psdi.app.inventory.InvUseLineSplitSet",
    "description": "Inventory Usage Line Split - Used to split a line quantity across multiple bins/rotating assets.",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "INVUSELINESPLITID",
    "primaryKeyColumns": [
        "CONTENTUID"
    ],
    "logicalRelationships": [
        {
            "objectName": "INVUSELINESPLIT",
            "targetObject": "MATRECTRANS",
            "parentKeys": "INVUSELINESPLITID",
            "targetKeys": "INVUSELINESPLITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Inventory Use Line Split",
            "longDescription": null
        },
        {
            "objectName": "INVUSELINESPLIT",
            "targetObject": "SHIPMENTLINE",
            "parentKeys": "INVUSELINESPLITID",
            "targetKeys": "INVUSELINESPLITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Inventory Use Line Split",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "ASSET",
            "targetObject": "INVUSELINESPLIT",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, NEWASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Newly added Asset",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "INVUSELINESPLIT",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ROTASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Rotating Asset",
            "longDescription": null
        },
        {
            "objectName": "INVLOT",
            "targetObject": "INVUSELINESPLIT",
            "parentKeys": "LOTNUM, ITEMNUM, LOCATION, SITEID",
            "targetKeys": "FROMLOT, ITEMNUM, FROMSTORELOC, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Source Inventory Lot",
            "longDescription": null
        },
        {
            "objectName": "INVUSE",
            "targetObject": "INVUSELINESPLIT",
            "parentKeys": "INVUSENUM, SITEID",
            "targetKeys": "INVUSENUM, SITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 5",
            "longDescription": null
        },
        {
            "objectName": "INVUSELINE",
            "targetObject": "INVUSELINESPLIT",
            "parentKeys": "SITEID, INVUSENUM, INVUSELINENUM",
            "targetKeys": "SITEID, INVUSENUM, INVUSELINENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Splits per line",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "INVUSELINESPLIT",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
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
            "objectName": "LOCATIONS",
            "targetObject": "INVUSELINESPLIT",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, FROMSTORELOC",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "INVUSELINESPLIT",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "INVUSELINESPLIT",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item Set",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "INVUSELINESPLIT",
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
            "attributeName": "INVUSENUM",
            "required": true,
            "persistent": true,
            "title": "Usage",
            "remarks": "The identifier of the inventory usage.",
            "sameAsAttribute": "INVUSENUM",
            "sameAsObject": "INVUSE"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "The organization that is associated with the inventory.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
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
            "attributeName": "INVUSELINEID",
            "required": false,
            "persistent": true,
            "title": "InvUseLine",
            "remarks": "The identifier of the inventory usage line.",
            "sameAsAttribute": "INVUSELINEID",
            "sameAsObject": "INVUSELINE"
        },
        {
            "attributeName": "QUANTITY",
            "required": false,
            "persistent": true,
            "title": "Quantity",
            "remarks": "The quantity of items in this usage line.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FROMLOT",
            "required": false,
            "persistent": true,
            "title": "Lot",
            "remarks": "The identifier of the lot where the current item is stored.",
            "sameAsAttribute": "LOTNUM",
            "sameAsObject": "INVLOT"
        },
        {
            "attributeName": "ROTASSETNUM",
            "required": false,
            "persistent": true,
            "title": "Rotating Asset",
            "remarks": "Identifies the rotating asset that is associated with the item being issued.",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "FROMBIN",
            "required": false,
            "persistent": true,
            "title": "From Bin",
            "remarks": "The identifier of the storeroom bin from which the current item is being issued.",
            "sameAsAttribute": "BINNUM",
            "sameAsObject": "INVENTORY"
        },
        {
            "attributeName": "PHYSCNT",
            "required": true,
            "persistent": true,
            "title": "Physical Count",
            "remarks": "The physical count of items in inventory.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PHYSCNTDATE",
            "required": false,
            "persistent": true,
            "title": "Physical Count Date",
            "remarks": "The date of the physical count of items in inventory.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SENDERSYSID",
            "required": false,
            "persistent": true,
            "title": "Sender System ID",
            "remarks": "Column used by ERP-Integration (APIs)",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INVUSELINENUM",
            "required": false,
            "persistent": true,
            "title": "Line",
            "remarks": "The identifier that is associated with the inventory usage line.",
            "sameAsAttribute": "INVUSELINENUM",
            "sameAsObject": "INVUSELINE"
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
            "attributeName": "NEWPHYSCNT",
            "required": false,
            "persistent": false,
            "title": "Physical Count",
            "remarks": "The physical count of items in inventory.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NEWPHYSCNTDATE",
            "required": false,
            "persistent": false,
            "title": "Physical Count Date",
            "remarks": "The date of the physical count of items in inventory.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ITEMNUM",
            "required": false,
            "persistent": true,
            "title": "Item",
            "remarks": "The identifier of the inventory item.",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "ITEMSETID",
            "required": false,
            "persistent": true,
            "title": "ItemSet",
            "remarks": "Identifies the item set, or group of items, to which this item belongs. An organization is assigned to only one item set, but multiple organizations can use the same item set.",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS"
        },
        {
            "attributeName": "FROMSTORELOC",
            "required": false,
            "persistent": true,
            "title": "From Storeroom",
            "remarks": "The storeroom where the item is stocked. The storeroom information comes from default storeroom entry in the user profile, which also contains information about the site and organization.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "FROMCONDITIONCODE",
            "required": false,
            "persistent": true,
            "title": "From Condition",
            "remarks": "The condition code that indicates the current physical condition of the item.",
            "sameAsAttribute": "CONDITIONCODE",
            "sameAsObject": "ITEMCONDITION"
        },
        {
            "attributeName": "UNITCOST",
            "required": false,
            "persistent": true,
            "title": "Unit Cost",
            "remarks": "The cost per issue unit of the current item.",
            "sameAsAttribute": "UNITCOST",
            "sameAsObject": "INVUSELINE"
        },
        {
            "attributeName": "AUTOCREATED",
            "required": true,
            "persistent": true,
            "title": "Auto Created",
            "remarks": "Indicates whether the inventory usage split record was created automatically.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NEWASSETNUM",
            "required": false,
            "persistent": true,
            "title": "New Asset Number",
            "remarks": "Identifies the new asset number that is associated with this record.",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "TOSITEID",
            "required": false,
            "persistent": false,
            "title": " To Site",
            "remarks": "The destination site for the current inventory usage line.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "INVUSELINESPLITID",
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
            "name": "NEWASSETSITE",
            "target": "ASSET",
            "remarks": "Relationship to the Asset table, used to find the rotating asset. The resulting set will contain zero or one object.",
            "whereClause": "assetnum=:newassetnum and siteid=:tositeid",
            "cardinality": null
        },
        {
            "name": "ROTASSET",
            "target": "ASSET",
            "remarks": "Relationship to the Asset table, used to find the rotating asset which is issued/moved to a location. The resulting set will contain zero or one object.",
            "whereClause": "assetnum=:rotassetnum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "INVBALANCESBINLOT",
            "target": "INVBALANCES",
            "remarks": "Relationship to the InvBalances table, used to find the balances on hand for this InvUseLineSplit where the inventory usage document being issued is not a lot-tracking item and bin num is specified and lot num is specified. The resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and location=:fromstoreloc and siteid=:siteid and itemsetid=:itemsetid and stagingbin=:NO and ( binnum is null or binnum=:frombin) and lotnum=:fromlot and (conditioncode is null or conditioncode=:fromconditioncode)",
            "cardinality": null
        },
        {
            "name": "INVBALANCESBINNOLOT",
            "target": "INVBALANCES",
            "remarks": "Relationship to the InvBalances table, used to find the balances on hand for this InvUseLineSplit where the inventory usage document being issued is not a lot-tracking item and bin num is specified and lot num is null. The resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and location=:fromstoreloc and itemsetid=:itemsetid and siteid=:siteid and stagingbin=:NO and ( binnum is null or binnum=:frombin) and (conditioncode is null or conditioncode=:fromconditioncode)",
            "cardinality": null
        },
        {
            "name": "INVENTORY",
            "target": "INVENTORY",
            "remarks": "Relationship to the Inventory table, used to find the inventory information for the item number and storeroom. The resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and location=:fromstoreloc and siteid=:siteid and itemsetid=:itemsetid",
            "cardinality": null
        },
        {
            "name": "INVUSELINE",
            "target": "INVUSELINE",
            "remarks": "Relationship to the InvUseLine table, used to find the invuseline records for a given invuselinesplit. The resulting set will contain one object.",
            "whereClause": "invuselineid=:invuselineid",
            "cardinality": null
        },
        {
            "name": "ITEM",
            "target": "ITEM",
            "remarks": "Relationship to the Item table, used to find the item information for the inventory usage split line.The resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": null
        },
        {
            "name": "SHIPMENTLINE",
            "target": "SHIPMENTLINE",
            "remarks": "Relationship to the ShipmentLine table, used to find the invuselinesplit records. The resulting set will contain zero or one object.",
            "whereClause": "invuselinesplitid=:invuselinesplitid",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "INVUSELINESPLIT",
            "source": "INVUSE",
            "remarks": "Relationship to the InvUseLineSplit table. The resulting set will contain one or more objects.",
            "whereClause": "invusenum=:invusenum and siteid=:siteid and autocreated=0",
            "cardinality": null
        },
        {
            "name": "INVUSELINESPLIT",
            "source": "INVUSELINE",
            "remarks": "Relationship to the InvUseLineSplit table, used to find the invuselinesplit records for a given invuseline. The resulting set will contain one object.",
            "whereClause": "invuselineid=:invuselineid",
            "cardinality": "SINGLE"
        },
        {
            "name": "NEWINVUSELINESPLIT",
            "source": "INVUSELINE",
            "remarks": "Relationship to the InvUseLineSplit table, used to find the invuselinesplit records for a given invuseline. The resulting set will contain one object.",
            "whereClause": "invuselineid=:invuselineid",
            "cardinality": null
        },
        {
            "name": "INVUSELINESPLIT",
            "source": "MATRECTRANS",
            "remarks": "Relationship to the InvUseLineSplit table, used to find the invuselinesplit records. The resulting set will contain zero or one object.",
            "whereClause": "invuselinesplitid=:invuselinesplitid",
            "cardinality": null
        },
        {
            "name": "INVUSELINESPLIT",
            "source": "SHIPMENTLINE",
            "remarks": "Remarks",
            "whereClause": "invuselinesplitid = :invuselinesplitid",
            "cardinality": null
        },
        {
            "name": "INVUSELINESPLIT",
            "source": "SPLITUSELINE",
            "remarks": "Relationship to the InvUseLineSplit table, used to find the invuselinesplit records for a given invuseline. The resulting set will contain one object.",
            "whereClause": "invuselineid=:invuselineid",
            "cardinality": null
        }
    ]
}