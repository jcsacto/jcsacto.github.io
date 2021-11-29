mos = {
    "objectName": "INVLOT",
    "className": "psdi.app.inventory.InvLotSet",
    "description": "The Inventory Lots Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "INVLOTID",
    "primaryKeyColumns": [
        "LOTNUM",
        "ITEMNUM",
        "LOCATION",
        "SITEID"
    ],
    "logicalRelationships": [
        {
            "objectName": "INVLOT",
            "targetObject": "INVBALANCES",
            "parentKeys": "LOTNUM, ITEMNUM, LOCATION, SITEID",
            "targetKeys": "LOTNUM, ITEMNUM, LOCATION, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Inventory Lot",
            "longDescription": null
        },
        {
            "objectName": "INVLOT",
            "targetObject": "INVTRANS",
            "parentKeys": "LOTNUM, ITEMNUM, LOCATION, SITEID",
            "targetKeys": "LOTNUM, ITEMNUM, STORELOC, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Inventory Lot",
            "longDescription": null
        },
        {
            "objectName": "INVLOT",
            "targetObject": "INVUSELINE",
            "parentKeys": "LOTNUM, ITEMNUM, LOCATION, SITEID",
            "targetKeys": "FROMLOT, ITEMNUM, FROMSTORELOC, POSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 3",
            "longDescription": null
        },
        {
            "objectName": "INVLOT",
            "targetObject": "INVUSELINE",
            "parentKeys": "LOTNUM, ITEMNUM, LOCATION, SITEID",
            "targetKeys": "FROMLOT, ITEMNUM, FROMSTORELOC, PRSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 4",
            "longDescription": null
        },
        {
            "objectName": "INVLOT",
            "targetObject": "INVUSELINE",
            "parentKeys": "LOTNUM, ITEMNUM, LOCATION, SITEID",
            "targetKeys": "FROMLOT, ITEMNUM, FROMSTORELOC, SITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 5",
            "longDescription": null
        },
        {
            "objectName": "INVLOT",
            "targetObject": "INVUSELINE",
            "parentKeys": "LOTNUM, ITEMNUM, LOCATION, SITEID",
            "targetKeys": "FROMLOT, ITEMNUM, FROMSTORELOC, TOSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 6",
            "longDescription": null
        },
        {
            "objectName": "INVLOT",
            "targetObject": "INVUSELINE",
            "parentKeys": "LOTNUM, ITEMNUM, LOCATION, SITEID",
            "targetKeys": "FROMLOT, ITEMNUM, LOCATION, POSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 7",
            "longDescription": null
        },
        {
            "objectName": "INVLOT",
            "targetObject": "INVUSELINE",
            "parentKeys": "LOTNUM, ITEMNUM, LOCATION, SITEID",
            "targetKeys": "FROMLOT, ITEMNUM, LOCATION, PRSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 8",
            "longDescription": null
        },
        {
            "objectName": "INVLOT",
            "targetObject": "INVUSELINE",
            "parentKeys": "LOTNUM, ITEMNUM, LOCATION, SITEID",
            "targetKeys": "FROMLOT, ITEMNUM, LOCATION, SITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 9",
            "longDescription": null
        },
        {
            "objectName": "INVLOT",
            "targetObject": "INVUSELINE",
            "parentKeys": "LOTNUM, ITEMNUM, LOCATION, SITEID",
            "targetKeys": "FROMLOT, ITEMNUM, LOCATION, TOSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 10",
            "longDescription": null
        },
        {
            "objectName": "INVLOT",
            "targetObject": "INVUSELINE",
            "parentKeys": "LOTNUM, ITEMNUM, LOCATION, SITEID",
            "targetKeys": "FROMLOT, ITEMNUM, TOSTORELOC, POSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 11",
            "longDescription": null
        },
        {
            "objectName": "INVLOT",
            "targetObject": "INVUSELINE",
            "parentKeys": "LOTNUM, ITEMNUM, LOCATION, SITEID",
            "targetKeys": "FROMLOT, ITEMNUM, TOSTORELOC, PRSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 12",
            "longDescription": null
        },
        {
            "objectName": "INVLOT",
            "targetObject": "INVUSELINE",
            "parentKeys": "LOTNUM, ITEMNUM, LOCATION, SITEID",
            "targetKeys": "FROMLOT, ITEMNUM, TOSTORELOC, SITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 13",
            "longDescription": null
        },
        {
            "objectName": "INVLOT",
            "targetObject": "INVUSELINE",
            "parentKeys": "LOTNUM, ITEMNUM, LOCATION, SITEID",
            "targetKeys": "FROMLOT, ITEMNUM, TOSTORELOC, TOSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 14",
            "longDescription": null
        },
        {
            "objectName": "INVLOT",
            "targetObject": "INVUSELINE",
            "parentKeys": "LOTNUM, ITEMNUM, LOCATION, SITEID",
            "targetKeys": "TOLOT, ITEMNUM, FROMSTORELOC, POSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 15",
            "longDescription": null
        },
        {
            "objectName": "INVLOT",
            "targetObject": "INVUSELINE",
            "parentKeys": "LOTNUM, ITEMNUM, LOCATION, SITEID",
            "targetKeys": "TOLOT, ITEMNUM, FROMSTORELOC, PRSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 16",
            "longDescription": null
        },
        {
            "objectName": "INVLOT",
            "targetObject": "INVUSELINE",
            "parentKeys": "LOTNUM, ITEMNUM, LOCATION, SITEID",
            "targetKeys": "TOLOT, ITEMNUM, FROMSTORELOC, SITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 17",
            "longDescription": null
        },
        {
            "objectName": "INVLOT",
            "targetObject": "INVUSELINE",
            "parentKeys": "LOTNUM, ITEMNUM, LOCATION, SITEID",
            "targetKeys": "TOLOT, ITEMNUM, FROMSTORELOC, TOSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 18",
            "longDescription": null
        },
        {
            "objectName": "INVLOT",
            "targetObject": "INVUSELINE",
            "parentKeys": "LOTNUM, ITEMNUM, LOCATION, SITEID",
            "targetKeys": "TOLOT, ITEMNUM, LOCATION, POSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 19",
            "longDescription": null
        },
        {
            "objectName": "INVLOT",
            "targetObject": "INVUSELINE",
            "parentKeys": "LOTNUM, ITEMNUM, LOCATION, SITEID",
            "targetKeys": "TOLOT, ITEMNUM, LOCATION, PRSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 20",
            "longDescription": null
        },
        {
            "objectName": "INVLOT",
            "targetObject": "INVUSELINE",
            "parentKeys": "LOTNUM, ITEMNUM, LOCATION, SITEID",
            "targetKeys": "TOLOT, ITEMNUM, LOCATION, SITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 21",
            "longDescription": null
        },
        {
            "objectName": "INVLOT",
            "targetObject": "INVUSELINE",
            "parentKeys": "LOTNUM, ITEMNUM, LOCATION, SITEID",
            "targetKeys": "TOLOT, ITEMNUM, LOCATION, TOSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 22",
            "longDescription": null
        },
        {
            "objectName": "INVLOT",
            "targetObject": "INVUSELINE",
            "parentKeys": "LOTNUM, ITEMNUM, LOCATION, SITEID",
            "targetKeys": "TOLOT, ITEMNUM, TOSTORELOC, POSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 23",
            "longDescription": null
        },
        {
            "objectName": "INVLOT",
            "targetObject": "INVUSELINE",
            "parentKeys": "LOTNUM, ITEMNUM, LOCATION, SITEID",
            "targetKeys": "TOLOT, ITEMNUM, TOSTORELOC, PRSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 24",
            "longDescription": null
        },
        {
            "objectName": "INVLOT",
            "targetObject": "INVUSELINE",
            "parentKeys": "LOTNUM, ITEMNUM, LOCATION, SITEID",
            "targetKeys": "TOLOT, ITEMNUM, TOSTORELOC, SITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 25",
            "longDescription": null
        },
        {
            "objectName": "INVLOT",
            "targetObject": "INVUSELINE",
            "parentKeys": "LOTNUM, ITEMNUM, LOCATION, SITEID",
            "targetKeys": "TOLOT, ITEMNUM, TOSTORELOC, TOSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 26",
            "longDescription": null
        },
        {
            "objectName": "INVLOT",
            "targetObject": "INVUSELINE",
            "parentKeys": "ITEMNUM, FORMSTORELOC, FROMLOT, SITEID, ITEMSETID",
            "targetKeys": "ITEMNUM, FROMSTORELOC, FROMLOT, SITEID, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Inventory Lot of Items",
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
            "objectName": "INVLOT",
            "targetObject": "MATRECTRANS",
            "parentKeys": "LOTNUM, ITEMNUM, LOCATION, SITEID",
            "targetKeys": "FROMLOT, ITEMNUM, FROMSTORELOC, FROMSITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Source Log",
            "longDescription": null
        },
        {
            "objectName": "INVLOT",
            "targetObject": "MATRECTRANS",
            "parentKeys": "LOTNUM, ITEMNUM, LOCATION, SITEID",
            "targetKeys": "FROMLOT, ITEMNUM, FROMSTORELOC, POSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 29",
            "longDescription": null
        },
        {
            "objectName": "INVLOT",
            "targetObject": "MATRECTRANS",
            "parentKeys": "LOTNUM, ITEMNUM, LOCATION, SITEID",
            "targetKeys": "FROMLOT, ITEMNUM, FROMSTORELOC, SITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 30",
            "longDescription": null
        },
        {
            "objectName": "INVLOT",
            "targetObject": "MATRECTRANS",
            "parentKeys": "LOTNUM, ITEMNUM, LOCATION, SITEID",
            "targetKeys": "FROMLOT, ITEMNUM, LOCATION, FROMSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 31",
            "longDescription": null
        },
        {
            "objectName": "INVLOT",
            "targetObject": "MATRECTRANS",
            "parentKeys": "LOTNUM, ITEMNUM, LOCATION, SITEID",
            "targetKeys": "FROMLOT, ITEMNUM, LOCATION, POSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 32",
            "longDescription": null
        },
        {
            "objectName": "INVLOT",
            "targetObject": "MATRECTRANS",
            "parentKeys": "LOTNUM, ITEMNUM, LOCATION, SITEID",
            "targetKeys": "FROMLOT, ITEMNUM, LOCATION, SITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 33",
            "longDescription": null
        },
        {
            "objectName": "INVLOT",
            "targetObject": "MATRECTRANS",
            "parentKeys": "LOTNUM, ITEMNUM, LOCATION, SITEID",
            "targetKeys": "FROMLOT, ITEMNUM, TOSTORELOC, FROMSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 34",
            "longDescription": null
        },
        {
            "objectName": "INVLOT",
            "targetObject": "MATRECTRANS",
            "parentKeys": "LOTNUM, ITEMNUM, LOCATION, SITEID",
            "targetKeys": "FROMLOT, ITEMNUM, TOSTORELOC, POSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 35",
            "longDescription": null
        },
        {
            "objectName": "INVLOT",
            "targetObject": "MATRECTRANS",
            "parentKeys": "LOTNUM, ITEMNUM, LOCATION, SITEID",
            "targetKeys": "FROMLOT, ITEMNUM, TOSTORELOC, SITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 36",
            "longDescription": null
        },
        {
            "objectName": "INVLOT",
            "targetObject": "MATRECTRANS",
            "parentKeys": "LOTNUM, ITEMNUM, LOCATION, SITEID",
            "targetKeys": "TOLOT, ITEMNUM, FROMSTORELOC, FROMSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 37",
            "longDescription": null
        },
        {
            "objectName": "INVLOT",
            "targetObject": "MATRECTRANS",
            "parentKeys": "LOTNUM, ITEMNUM, LOCATION, SITEID",
            "targetKeys": "TOLOT, ITEMNUM, FROMSTORELOC, POSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 38",
            "longDescription": null
        },
        {
            "objectName": "INVLOT",
            "targetObject": "MATRECTRANS",
            "parentKeys": "LOTNUM, ITEMNUM, LOCATION, SITEID",
            "targetKeys": "TOLOT, ITEMNUM, FROMSTORELOC, SITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 39",
            "longDescription": null
        },
        {
            "objectName": "INVLOT",
            "targetObject": "MATRECTRANS",
            "parentKeys": "LOTNUM, ITEMNUM, LOCATION, SITEID",
            "targetKeys": "TOLOT, ITEMNUM, LOCATION, FROMSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 40",
            "longDescription": null
        },
        {
            "objectName": "INVLOT",
            "targetObject": "MATRECTRANS",
            "parentKeys": "LOTNUM, ITEMNUM, LOCATION, SITEID",
            "targetKeys": "TOLOT, ITEMNUM, LOCATION, POSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 41",
            "longDescription": null
        },
        {
            "objectName": "INVLOT",
            "targetObject": "MATRECTRANS",
            "parentKeys": "LOTNUM, ITEMNUM, LOCATION, SITEID",
            "targetKeys": "TOLOT, ITEMNUM, LOCATION, SITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 42",
            "longDescription": null
        },
        {
            "objectName": "INVLOT",
            "targetObject": "MATRECTRANS",
            "parentKeys": "LOTNUM, ITEMNUM, LOCATION, SITEID",
            "targetKeys": "TOLOT, ITEMNUM, TOSTORELOC, FROMSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 43",
            "longDescription": null
        },
        {
            "objectName": "INVLOT",
            "targetObject": "MATRECTRANS",
            "parentKeys": "LOTNUM, ITEMNUM, LOCATION, SITEID",
            "targetKeys": "TOLOT, ITEMNUM, TOSTORELOC, POSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 44",
            "longDescription": null
        },
        {
            "objectName": "INVLOT",
            "targetObject": "MATRECTRANS",
            "parentKeys": "LOTNUM, ITEMNUM, LOCATION, SITEID",
            "targetKeys": "TOLOT, ITEMNUM, TOSTORELOC, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Destination Lot",
            "longDescription": null
        },
        {
            "objectName": "INVLOT",
            "targetObject": "MATUSETRANS",
            "parentKeys": "LOTNUM, ITEMNUM, LOCATION, SITEID",
            "targetKeys": "LOTNUM, ITEMNUM, LOCATION, SITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 46",
            "longDescription": null
        },
        {
            "objectName": "INVLOT",
            "targetObject": "MATUSETRANS",
            "parentKeys": "LOTNUM, ITEMNUM, LOCATION, SITEID",
            "targetKeys": "LOTNUM, ITEMNUM, LOCATION, TOSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 47",
            "longDescription": null
        },
        {
            "objectName": "INVLOT",
            "targetObject": "MATUSETRANS",
            "parentKeys": "LOTNUM, ITEMNUM, LOCATION, SITEID",
            "targetKeys": "LOTNUM, ITEMNUM, STORELOC, SITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 48",
            "longDescription": null
        },
        {
            "objectName": "INVLOT",
            "targetObject": "MATUSETRANS",
            "parentKeys": "LOTNUM, ITEMNUM, LOCATION, SITEID",
            "targetKeys": "LOTNUM, ITEMNUM, STORELOC, TOSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 49",
            "longDescription": null
        },
        {
            "objectName": "INVLOT",
            "targetObject": "MATUSETRANS",
            "parentKeys": "LOTNUM, ITEMNUM, LOCATION, SITEID, ITEMSETID",
            "targetKeys": "LOTNUM, ITEMNUM, STORELOC, SITEID, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Inventory Lot",
            "longDescription": null
        },
        {
            "objectName": "INVLOT",
            "targetObject": "TOOLTRANS",
            "parentKeys": "LOTNUM, ITEMNUM, LOCATION, SITEID",
            "targetKeys": "PLUSCLOTNUM, ITEMNUM, LOCATION, ROTASSETSITE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 50",
            "longDescription": null
        },
        {
            "objectName": "INVLOT",
            "targetObject": "TOOLTRANS",
            "parentKeys": "LOTNUM, ITEMNUM, LOCATION, SITEID",
            "targetKeys": "PLUSCLOTNUM, ITEMNUM, LOCATION, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Inventory Lot",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "COMPANIES",
            "targetObject": "INVLOT",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, MANUFACTURER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Manufacturer on Inventory Lots",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "INVLOT",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor on Inventory Lots",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "INVLOT",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "INVLOT",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Lot Storeroom",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "INVLOT",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "INVLOT",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 20",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "INVLOT",
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
            "attributeName": "LOTNUM",
            "required": true,
            "persistent": true,
            "title": "Lot",
            "remarks": "Lot Number",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SHELFLIFE",
            "required": false,
            "persistent": true,
            "title": "Shelf Life",
            "remarks": "Length of time that the item being issued or transferred can exist before it expires.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USEBY",
            "required": false,
            "persistent": true,
            "title": "Expiration Date",
            "remarks": "Use-by date for the item being issued or transferred, if in a lot. Click the Select Date button to use the calendar control.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MFGLOTNUM",
            "required": false,
            "persistent": true,
            "title": "Manufacturer Lot",
            "remarks": "Batch number that identifies the manufacturer and lot for this item.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VENDOR",
            "required": false,
            "persistent": true,
            "title": "Vendor",
            "remarks": "Vendor Code In Company Table",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "MANUFACTURER",
            "required": false,
            "persistent": true,
            "title": "Manufacturer",
            "remarks": "Manufacturer ID",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
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
            "attributeName": "SITEID",
            "required": true,
            "persistent": true,
            "title": "Site",
            "remarks": "Site Identifier",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "INVLOTID",
            "required": true,
            "persistent": true,
            "title": "INVLOTID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ITEMNUM",
            "required": true,
            "persistent": true,
            "title": "Item",
            "remarks": "itemnum to which the lotnum pertains",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "LOCATION",
            "required": true,
            "persistent": true,
            "title": "Storeroom",
            "remarks": "storeroom location for this InvLot",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "ITEMSETID",
            "required": true,
            "persistent": true,
            "title": "Item Set",
            "remarks": "itemset identifier for this InvLot's Itemnum",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "INVBALANCES",
            "target": "INVBALANCES",
            "remarks": "Relationship to the InvBalances table, used to find items that have balances on hand for a given lot. (invbalances.itemnum=invlot.itemnum and invbalances.location=invlot.location and invbalances.lotnum = invlot.lotnum and invbalances.siteid = invlot.siteid and invbalances.itemsetid = invlot.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and location = :location and lotnum = :lotnum and siteid=:siteid and itemsetid = :itemsetid",
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
            "name": "INVLOT",
            "source": "INVBALANCES",
            "remarks": "Relationship to the InvLot table, used to find the lot information for a given inventory balance record. (invlot.itemnum=invbalances.itemnum and invlot.location=invbalances.location and invlot.lotnum = invbalances.lotnum and invlot.siteid = invbalances.siteid and invlot.itemsetid = invbalances.itemsetid). The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and location = :location and lotnum = :lotnum and siteid=:siteid and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVLOT",
            "source": "INVENTORY",
            "remarks": "Relationship to the InvLot table, used to find the InvLot record for a given Inventory record. (invlot.itemnum=inventory.itemnum and invlot.location=inventory.location and invlot.lotnum = inventory.lotnum and invlot.siteid = inventory.siteid and invlot.itemsetid = inventory.itemsetid). The resulting set will contain zero or one object. LotNum is a non-persistent column for the Inventory object. See the attribute defined in psdi.app.inventory.Inventory for more information.",
            "whereClause": "itemnum = :itemnum and location = :location and lotnum=:lotnum and siteid=:siteid and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVLOT_REP",
            "source": "INVENTORY",
            "remarks": "inventory by invlot without lotnum",
            "whereClause": "itemnum = :itemnum and location = :location and siteid=:siteid and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVLOT",
            "source": "INVUSELINE",
            "remarks": "Relationship to the InvLot table, used to find the lot information for the Inventory Usage Line. The resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and location=:fromstoreloc and lotnum=:fromlot and siteid=:siteid and itemsetid=:itemsetid",
            "cardinality": null
        },
        {
            "name": "INVLOT",
            "source": "ISSUECURRENTITEM",
            "remarks": "Relationship to the InvLot table, used to find the lot information for the material issue.",
            "whereClause": "itemnum = :itemnum and location = :storeloc and lotnum=:lotnum and siteid=:siteid and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVLOT",
            "source": "ISSUEITEMTOASSET",
            "remarks": "Relationship to the InvLot table, used to find the lot information for the material issue.",
            "whereClause": "itemnum = :itemnum and location = :storeloc and lotnum=:lotnum and siteid=:siteid and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVLOT",
            "source": "MATRECTRANS",
            "remarks": "Relationship to the InvLot table, used to find the lot information of the material transferred out of the storeroom in a given site. (invlot.itemnum=matrectrans.itemnum and invlot.location = matrectrans.fromstoreloc and invlot.lotnum = matrectrans.fromlot and invlot.siteid = matrectrans.fromsiteid and invlot.siteid = matrectrans.siteid and invlot.itemsetid = matrectrans.itemsetid ). The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and location = :fromstoreloc and lotnum=:fromlot and siteid = :fromsiteid and siteid=:siteid and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVLOTTOLOT",
            "source": "MATRECTRANS",
            "remarks": "Relationship to the InvLot table, used to find the lot information of the material received to the storeroom in a given site. (invlot.itemnum=matrectrans.itemnum and invlot.location = matrectrans.tostoreloc and invlot.lotnum = matrectrans.tolot and invlot.siteid = matrectrans.siteid and invlot.itemsetid = matrectrans.itemsetid). The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and location = :tostoreloc and lotnum=:tolot and siteid=:siteid and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVLOT",
            "source": "MATUSETRANS",
            "remarks": "Relationship to the InvLot table, used to find the lot information for the material issue. (invlot.itemnum=matusetrans.itemnum and invlot.location = matusetrans.storeloc and invlot.lotnum = matusetrans.lotnum and invlot.siteid = matusetrans.siteid and invlot.itemsetid = matusetrans.itemsetid ). The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and location = :storeloc and lotnum=:lotnum and siteid=:siteid and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVLOT",
            "source": "SPLITUSELINE",
            "remarks": "Relationship to the InvLot table, used to find the lot information for the invuseline.The resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and location=:fromstoreloc and siteid=:siteid and itemsetid=:itemsetid",
            "cardinality": null
        }
    ]
}