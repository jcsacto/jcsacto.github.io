mos = {
    "objectName": "KIT",
    "className": "psdi.app.inventory.virtual.KitSet",
    "description": "used in Inventory to assemble and disassemble kits",
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
            "remarks": "A unique identification number for a kit in inventory.",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": false,
            "title": "Storeroom",
            "remarks": "Storeroom location for this kit.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "ITEMSETID",
            "required": false,
            "persistent": false,
            "title": "Item Set",
            "remarks": "Itemset identifier for this kit.",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS"
        },
        {
            "attributeName": "CURBAL",
            "required": false,
            "persistent": false,
            "title": "Current Balance",
            "remarks": "current number of kits in storeroom",
            "sameAsAttribute": "CURBAL",
            "sameAsObject": "INVBALANCES"
        },
        {
            "attributeName": "POSSIBLEQUANTITY",
            "required": false,
            "persistent": false,
            "title": "Possible Quantity",
            "remarks": "A calculation of the separate items of a kit, determining the potential quantity of complete kits.",
            "sameAsAttribute": "CURBAL",
            "sameAsObject": "INVBALANCES"
        },
        {
            "attributeName": "QUANTITY",
            "required": false,
            "persistent": false,
            "title": "Quantity",
            "remarks": "The number of complete kits available to assemble or disassemble.",
            "sameAsAttribute": "CURBAL",
            "sameAsObject": "INVBALANCES"
        },
        {
            "attributeName": "UNITCOST",
            "required": false,
            "persistent": false,
            "title": "Unit Cost",
            "remarks": "Unit cost of the kit using either STANDARD or AVERAGE cost figures.",
            "sameAsAttribute": "STDCOST",
            "sameAsObject": "INVCOST"
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": false,
            "title": "Memo",
            "remarks": "A user-entered memo field for Material Receipt Transaction information regarding this kit.",
            "sameAsAttribute": "REMARK",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": false,
            "title": "Site",
            "remarks": "site identifier",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": false,
            "title": "Organization",
            "remarks": "organization identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "INVENTORY",
            "target": "INVENTORY",
            "remarks": "Relationship to the Inventory table used to find the Inventory record for this Kit. (inventory.itemnum = kit.itemnum and inventory.itemsetid = kit.itemsetid and inventory.location = kit.location and inventory.siteid = kit.siteid).  The resulting set will contain one object.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid and location = :location and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ENTIREKITSTRUCT",
            "target": "ITEMSTRUCT",
            "remarks": "Relationship to the ItemStruct table used to find all ItemStruct records that belong to this kit's assembly structure. (itemstruct.itemid = kit.itemnum and itemstruct.itemsetid = kit.itemsetid).  The resulting set will contain zero or more objects.",
            "whereClause": "itemid = :itemnum and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "FIRSTLEVELKITSTRUCT",
            "target": "ITEMSTRUCT",
            "remarks": "Rel to kit's first level ItemStruct recs.(itemstruct.parent=kit.itemnum or itemstruct.parent is null ) and itemstruct.itemid=kit.itemnum and itemstruct.itemsetid=kit.itemsetid). Result set will contain zero or more objects.",
            "whereClause": "(parent=:itemnum or parent is null) and itemid=:itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "KIT",
            "source": "INVENTORY",
            "remarks": "Relationship to the non-persistent Kit table. The resulting set will contain zero objects. This relationship is used only for the Assemble Kit and Disassemble Kit action pages on the Inventory application.",
            "whereClause": "1>2",
            "cardinality": "UNDEFINED"
        }
    ]
}