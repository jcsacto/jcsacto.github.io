mos = {
    "objectName": "LINESPLIT",
    "className": "psdi.app.inventory.virtual.LineSplitSet",
    "description": "Inventory Usage Split Line.",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": false,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [
        "CONTENTUID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "INVUSENUM",
            "required": true,
            "persistent": false,
            "title": "Usage",
            "remarks": "The identifier of the inventory usage.",
            "sameAsAttribute": "INVUSENUM",
            "sameAsObject": "INVUSE"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": false,
            "title": "Organization",
            "remarks": "The organization that is associated with the inventory.",
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
        },
        {
            "attributeName": "INVUSELINEID",
            "required": false,
            "persistent": false,
            "title": "InvUseLine",
            "remarks": "The identifier of the inventory usage line.",
            "sameAsAttribute": "INVUSELINEID",
            "sameAsObject": "INVUSELINE"
        },
        {
            "attributeName": "QUANTITY",
            "required": false,
            "persistent": false,
            "title": "Quantity",
            "remarks": "The quantity of items in this usage line.",
            "sameAsAttribute": "QUANTITY",
            "sameAsObject": "INVUSELINESPLIT"
        },
        {
            "attributeName": "FROMLOT",
            "required": false,
            "persistent": false,
            "title": "Lot",
            "remarks": "The identifier of the lot where the current item is stored.",
            "sameAsAttribute": "LOTNUM",
            "sameAsObject": "INVLOT"
        },
        {
            "attributeName": "ROTASSETNUM",
            "required": false,
            "persistent": false,
            "title": "Rotating Asset",
            "remarks": "Identifies the rotating asset that is associated with the item being issued.",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "FROMBIN",
            "required": false,
            "persistent": false,
            "title": "From Bin",
            "remarks": "The identifier of the storeroom bin from which the current item is being issued.",
            "sameAsAttribute": "BINNUM",
            "sameAsObject": "INVENTORY"
        },
        {
            "attributeName": "PHYSCNT",
            "required": true,
            "persistent": false,
            "title": "Physical Count",
            "remarks": "The physical count of items in inventory.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PHYSCNTDATE",
            "required": false,
            "persistent": false,
            "title": "Physical Count Date",
            "remarks": "The date of the physical count of items in inventory.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INVUSELINENUM",
            "required": false,
            "persistent": false,
            "title": "Line",
            "remarks": "The identifier that is associated with the inventory usage line.",
            "sameAsAttribute": "INVUSELINENUM",
            "sameAsObject": "INVUSELINE"
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
            "persistent": false,
            "title": "Item",
            "remarks": "The identifier of the inventory item.",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "ITEMSETID",
            "required": false,
            "persistent": false,
            "title": "ItemSet",
            "remarks": "Identifies the item set, or group of items, to which this item belongs. An organization is assigned to only one item set, but multiple organizations can use the same item set.",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS"
        },
        {
            "attributeName": "FROMSTORELOC",
            "required": false,
            "persistent": false,
            "title": "From Storeroom",
            "remarks": "The storeroom where the item is stocked. The storeroom information comes from default storeroom entry in the user profile, which also contains information about the site and organization.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "FROMCONDITIONCODE",
            "required": false,
            "persistent": false,
            "title": "From Condition",
            "remarks": "The condition code that indicates the current physical condition of the item.",
            "sameAsAttribute": "CONDITIONCODE",
            "sameAsObject": "ITEMCONDITION"
        },
        {
            "attributeName": "UNITCOST",
            "required": false,
            "persistent": false,
            "title": "Unit Cost",
            "remarks": "The cost per issue unit of the current item.",
            "sameAsAttribute": "UNITCOST",
            "sameAsObject": "INVUSELINE"
        },
        {
            "attributeName": "NEWASSETNUM",
            "required": false,
            "persistent": false,
            "title": "New Asset Number",
            "remarks": "Identifies the new asset number that is associated with the current record.",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "CONTENTUID",
            "required": false,
            "persistent": false,
            "title": "Content Unique ID",
            "remarks": "Content Unique ID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOSITEID",
            "required": false,
            "persistent": false,
            "title": " To Site",
            "remarks": "The destination site for the current inventory usage line.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
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
            "remarks": "Relationship to the Asset table, used to find the rotating asset. The resulting set will contain zero or one object.",
            "whereClause": "assetnum=:rotassetnum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "INVENTORY",
            "target": "INVENTORY",
            "remarks": "Relationship to the Inventory table. The resulting set will contain one object.",
            "whereClause": "itemnum=:itemnum and location=:fromstoreloc and siteid=:siteid and itemsetid=:itemsetid",
            "cardinality": null
        },
        {
            "name": "INVUSELINE",
            "target": "INVUSELINE",
            "remarks": "Relationship to the Asset table, used to find the rotating asset. The resulting set will contain zero or one object.",
            "whereClause": "invuselineid=:invuselineid",
            "cardinality": null
        },
        {
            "name": "ITEM",
            "target": "ITEM",
            "remarks": "Relationship to the Inventory table. The resulting set will contain one object.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "LINESPLIT",
            "source": "SPLITUSELINE",
            "remarks": "Relationship to the LineSplit table, used to find SplitUseLine records. The resulting set will contain zero or more objects.",
            "whereClause": "invusenum=:invusenum and siteid=:siteid",
            "cardinality": null
        }
    ]
}