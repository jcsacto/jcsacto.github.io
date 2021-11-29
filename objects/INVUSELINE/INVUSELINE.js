mos = {
    "objectName": "INVUSELINE",
    "className": "psdi.app.inventory.InvUseLineSet",
    "description": "Inventory Usage Lines",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "INVUSELINEID",
    "primaryKeyColumns": [
        "SITEID",
        "INVUSENUM",
        "INVUSELINENUM"
    ],
    "logicalRelationships": [
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
            "objectName": "INVUSELINE",
            "targetObject": "MATUSETRANS",
            "parentKeys": "INVUSELINEID",
            "targetKeys": "INVUSELINEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Material Usage Transaction",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "ASSET",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "POSITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 51",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "POSITEID, NEWASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 52",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "POSITEID, ROTASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 53",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "PRSITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 54",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "PRSITEID, NEWASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 55",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "PRSITEID, ROTASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 56",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset for which materials were issued.",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, NEWASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 58",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ROTASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Rotating Asset",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "TOSITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 60",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "TOSITEID, NEWASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "New Rotating Asset",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "TOSITEID, ROTASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 62",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "INVUSELINE",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITY, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "INVUSELINE",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITYGROUP, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity Group",
            "longDescription": null
        },
        {
            "objectName": "FINANCIALPERIODS",
            "targetObject": "INVUSELINE",
            "parentKeys": "ORGID, FINANCIALPERIOD",
            "targetKeys": "ORGID, FINANCIALPERIOD",
            "relNum": "1 to 1",
            "status": "VERIFIED",
            "description": "Financial Period",
            "longDescription": null
        },
        {
            "objectName": "FINANCIALPERIODS",
            "targetObject": "INVUSELINE",
            "parentKeys": "ORGID, FINANCIALPERIOD",
            "targetKeys": "TOORGID, FINANCIALPERIOD",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Financial Period",
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
            "objectName": "INVRESERVE",
            "targetObject": "INVUSELINE",
            "parentKeys": "STORELOCSITEID, REQUESTNUM",
            "targetKeys": "SITEID, REQUESTNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 3",
            "longDescription": null
        },
        {
            "objectName": "INVRESERVE",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID, REQUESTNUM",
            "targetKeys": "POSITEID, REQUESTNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 1",
            "longDescription": null
        },
        {
            "objectName": "INVRESERVE",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID, REQUESTNUM",
            "targetKeys": "PRSITEID, REQUESTNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 2",
            "longDescription": null
        },
        {
            "objectName": "INVRESERVE",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID, REQUESTNUM",
            "targetKeys": "SITEID, REQUESTNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 3",
            "longDescription": null
        },
        {
            "objectName": "INVRESERVE",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID, REQUESTNUM",
            "targetKeys": "TOSITEID, REQUESTNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 4",
            "longDescription": null
        },
        {
            "objectName": "INVUSE",
            "targetObject": "INVUSELINE",
            "parentKeys": "INVUSENUM, SITEID",
            "targetKeys": "INVUSENUM, POSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 1",
            "longDescription": null
        },
        {
            "objectName": "INVUSE",
            "targetObject": "INVUSELINE",
            "parentKeys": "INVUSENUM, SITEID",
            "targetKeys": "INVUSENUM, PRSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 2",
            "longDescription": null
        },
        {
            "objectName": "INVUSE",
            "targetObject": "INVUSELINE",
            "parentKeys": "INVUSENUM, SITEID",
            "targetKeys": "INVUSENUM, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Inventory Use Lines",
            "longDescription": null
        },
        {
            "objectName": "INVUSE",
            "targetObject": "INVUSELINE",
            "parentKeys": "INVUSENUM, SITEID",
            "targetKeys": "INVUSENUM, TOSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 4",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "INVUSELINE",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
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
            "objectName": "LANGUAGE",
            "targetObject": "INVUSELINE",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "POSITEID, FROMSTORELOC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 62",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "POSITEID, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 63",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "POSITEID, TOSTORELOC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 64",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "PRSITEID, FROMSTORELOC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 65",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "PRSITEID, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 66",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "PRSITEID, TOSTORELOC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 67",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, FROMSTORELOC",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Source Storeroom",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Source Storeroom",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, TOSTORELOC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 70",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "TOSITEID, FROMSTORELOC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 71",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "TOSITEID, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 72",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "TOSITEID, TOSTORELOC",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Destination Storeroom",
            "longDescription": null
        },
        {
            "objectName": "MATUSETRANS",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID, MATUSETRANSID",
            "targetKeys": "POSITEID, ISSUEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 5",
            "longDescription": null
        },
        {
            "objectName": "MATUSETRANS",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID, MATUSETRANSID",
            "targetKeys": "PRSITEID, ISSUEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 6",
            "longDescription": null
        },
        {
            "objectName": "MATUSETRANS",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID, MATUSETRANSID",
            "targetKeys": "SITEID, ISSUEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 7",
            "longDescription": null
        },
        {
            "objectName": "MATUSETRANS",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID, MATUSETRANSID",
            "targetKeys": "TOSITEID, ISSUEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 8",
            "longDescription": null
        },
        {
            "objectName": "MATUSETRANS",
            "targetObject": "INVUSELINE",
            "parentKeys": "MATUSETRANSID",
            "targetKeys": "ISSUEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Material Usage",
            "longDescription": null
        },
        {
            "objectName": "MR",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID, MRNUM",
            "targetKeys": "POSITEID, MRNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 3",
            "longDescription": null
        },
        {
            "objectName": "MR",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID, MRNUM",
            "targetKeys": "PRSITEID, MRNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 4",
            "longDescription": null
        },
        {
            "objectName": "MR",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID, MRNUM",
            "targetKeys": "SITEID, MRNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Related MR",
            "longDescription": null
        },
        {
            "objectName": "MR",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID, MRNUM",
            "targetKeys": "TOSITEID, MRNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 6",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "INVUSELINE",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "INVUSELINE",
            "parentKeys": "ORGID",
            "targetKeys": "TOORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 111",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "INVUSELINE",
            "parentKeys": "PERSONID",
            "targetKeys": "ENTERBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who entered the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "INVUSELINE",
            "parentKeys": "PERSONID",
            "targetKeys": "ISSUETO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person to Issue To",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "POSITEID, PONUM, POREVISIONNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 16",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "PRSITEID, PONUM, POREVISIONNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 17",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "SITEID, PONUM, POREVISIONNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 18",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "TOSITEID, PONUM, POREVISIONNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 19",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "INVUSELINE",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 25",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID",
            "targetKeys": "POSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 82",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID",
            "targetKeys": "PRSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 83",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID",
            "targetKeys": "TOSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 85",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "POSITEID, REFWO",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 19",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "PRSITEID, REFWO",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 20",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, REFWO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Order",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "TOSITEID, REFWO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Inventory Usage Lines",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "INVUSENUM",
            "required": true,
            "persistent": true,
            "title": "Usage",
            "remarks": "The number associated with the inventory usage record.",
            "sameAsAttribute": "INVUSENUM",
            "sameAsObject": "INVUSE"
        },
        {
            "attributeName": "USETYPE",
            "required": true,
            "persistent": true,
            "title": "Usage Type",
            "remarks": "The type of usage that is contained in the usage line of the record. For example, an issue, a return, or a transfer.",
            "sameAsAttribute": "USETYPE",
            "sameAsObject": "INVUSE"
        },
        {
            "attributeName": "ITEMNUM",
            "required": true,
            "persistent": true,
            "title": "Item",
            "remarks": "The number associated with the inventory item.",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "ITEMSETID",
            "required": false,
            "persistent": true,
            "title": "Item Set",
            "remarks": "Identifies the item set, or group of items, to which this item belongs. An organization is assigned to only one item set, but multiple organizations can use the same item set.",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS"
        },
        {
            "attributeName": "TOSTORELOC",
            "required": false,
            "persistent": true,
            "title": "To Location",
            "remarks": "The storeroom location the inventory items are charged to.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "TOSITEID",
            "required": false,
            "persistent": true,
            "title": "To Site",
            "remarks": "The site the inventory items are charged to.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "QUANTITY",
            "required": true,
            "persistent": true,
            "title": "Quantity",
            "remarks": "The quantity of items in this usage line. Items have associated costs, which are automatically calculated based on the item and quantity.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FROMCONDITIONCODE",
            "required": false,
            "persistent": true,
            "title": "From Condition Code",
            "remarks": "The condition code that indicates the current physical condition of the item.",
            "sameAsAttribute": "CONDITIONCODE",
            "sameAsObject": "ITEMCONDITION"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "The organization associated with the inventory.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "REQUESTNUM",
            "required": false,
            "persistent": true,
            "title": "Request",
            "remarks": "The material reservation that the current line refers to.",
            "sameAsAttribute": "REQUESTNUM",
            "sameAsObject": "INVRESERVE"
        },
        {
            "attributeName": "SHELFLIFE",
            "required": false,
            "persistent": false,
            "title": "Shelf Life (Days)",
            "remarks": "Shelf life, in days, of the lotted item. If there is an expiration date provided for this item, this field is typically blank. If there is no expiration date, but a shelf life is specified for the item, it is entered here, in days. Maximo calculates an expiration date as the current system date plus the shelf life, and enters this value in the Expiration Date field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USEBY",
            "required": false,
            "persistent": false,
            "title": "Expiration Date",
            "remarks": "Use By",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RECEIVEDUNIT",
            "required": false,
            "persistent": false,
            "title": "Received Unit",
            "remarks": "Standard unit by which the item is ordered, such as roll or case.",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "SENDERSYSID",
            "required": false,
            "persistent": true,
            "title": "Sender System ID",
            "remarks": "Column used by ERP-Integration (APIs).",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VALIDATED",
            "required": true,
            "persistent": true,
            "title": "Validated",
            "remarks": "The indicator to show whether the record has been validated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NEWPHYSCNT",
            "required": false,
            "persistent": false,
            "title": "New Physical Count",
            "remarks": "The physical count of items in inventory.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NEWPHYSCNTDATE",
            "required": false,
            "persistent": false,
            "title": "New Physical Count Date",
            "remarks": "Date and time to associate with the new physical count. Maximo populates the current date and time by default. You can modify the value in this field. Click the Select Date and Time button to use the calendar control.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FINANCIALPERIOD",
            "required": false,
            "persistent": true,
            "title": "Financial Period",
            "remarks": "The financial accounting period that this transaction is recorded in which is derived based on the actual date of the transaction.",
            "sameAsAttribute": "FINANCIALPERIOD",
            "sameAsObject": "FINANCIALPERIODS"
        },
        {
            "attributeName": "ENTEREDASTASK",
            "required": true,
            "persistent": true,
            "title": "Entered as Task",
            "remarks": "Indicates whether the transaction was created based on a work order task.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STAGINGBIN",
            "required": false,
            "persistent": false,
            "title": "Staging Bin",
            "remarks": "Staging Bin",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOCONDITIONCODE",
            "required": false,
            "persistent": true,
            "title": "To Condition Code",
            "remarks": "The condition code that indicates the current physical condition of the item.",
            "sameAsAttribute": "CONDITIONCODE",
            "sameAsObject": "ITEMCONDITION"
        },
        {
            "attributeName": "DISPLAYUNITCOST",
            "required": false,
            "persistent": false,
            "title": "Unit Cost",
            "remarks": "Displayed Unit Cost.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DISPLAYLINECOST",
            "required": false,
            "persistent": false,
            "title": "Line Cost",
            "remarks": "Displayed Line Cost.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LINETYPE",
            "required": true,
            "persistent": true,
            "title": "Line Type",
            "remarks": "The type of usage line. For example, ITEM, or TOOL.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REMARK",
            "required": false,
            "persistent": true,
            "title": "Remark",
            "remarks": "You can enter comments about the item or transaction. To enter additional information, click the Long Description push button.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOBIN",
            "required": false,
            "persistent": true,
            "title": "To Bin",
            "remarks": "The bin into which the items are to be placed.",
            "sameAsAttribute": "BINNUM",
            "sameAsObject": "INVENTORY"
        },
        {
            "attributeName": "TOLOT",
            "required": false,
            "persistent": true,
            "title": "To Lot",
            "remarks": "The identifier that is associated with the internal lot into which the item to be transferred or received is placed. This number is different from the lot number of the manufacturer and is used to track received items for use during the specified time or interval.",
            "sameAsAttribute": "LOTNUM",
            "sameAsObject": "INVLOT"
        },
        {
            "attributeName": "FROMSTORELOC",
            "required": true,
            "persistent": true,
            "title": "From Storeroom",
            "remarks": "The storeroom where the item is stocked. The storeroom information comes from default storeroom entry in the the user's profile, which also contains information about the site and organization.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "ENTERBY",
            "required": true,
            "persistent": true,
            "title": "Entered By",
            "remarks": "The person who is initiating the current transaction.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "SITEID",
            "required": true,
            "persistent": true,
            "title": "Site",
            "remarks": "The site of the organization associated with the inventory.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "INVUSELINENUM",
            "required": true,
            "persistent": true,
            "title": "Line",
            "remarks": "The number associated with the inventory usage line.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISSUEID",
            "required": false,
            "persistent": true,
            "title": "Issue",
            "remarks": "The material issue record this return is referring to.",
            "sameAsAttribute": "MATUSETRANSID",
            "sameAsObject": "MATUSETRANS"
        },
        {
            "attributeName": "WONUM",
            "required": false,
            "persistent": false,
            "title": "Work Order",
            "remarks": "The number of the work order that is related to this record.",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "TASKID",
            "required": false,
            "persistent": false,
            "title": "Task",
            "remarks": "The work order task associated with the current record.",
            "sameAsAttribute": "TASKID",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": true,
            "title": "Asset",
            "remarks": "The asset that is charged for the current transaction.",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": true,
            "title": "Location",
            "remarks": "The location that is charged for the current transaction.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "ISSUETO",
            "required": false,
            "persistent": true,
            "title": "Issue To",
            "remarks": "The person to whom the item, tool, or material is issued. You can select a person using the Detail Menu button. You specify people to issue items to in the People application.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "GLDEBITACCT",
            "required": false,
            "persistent": true,
            "title": "GL Debit Account",
            "remarks": "The general ledger (GL) account that is debited when the item is issued.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLCREDITACCT",
            "required": false,
            "persistent": true,
            "title": "GL Credit Account",
            "remarks": "The general ledger (GL) account that is credited when the item is issued.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REFWO",
            "required": false,
            "persistent": true,
            "title": "Work Order",
            "remarks": "The number of the work order that is related to this record.",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ACTUALDATE",
            "required": true,
            "persistent": true,
            "title": "Actual Date",
            "remarks": "The time and date of the issue or transfer, which can be different to the time recorded in the system by default. This value will be used to derive the financial period that is applied to any financial transactions created against this line. You can modify the value in this field. Click the Select Date and Time push button to use the calendar control.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONVERSION",
            "required": false,
            "persistent": true,
            "title": "Conversion Factor",
            "remarks": "The numeric value used to correlate the order unit and the issue unit. The number of items you order at once can differ to the number of items you issue at once. For example, if you order light bulbs in bulk, your unit of measurement might be a case containing 36 items. But when you issue the item, you issue one at a time. In this case, you can define a measurement unit of CASE and another measurement unit of EACH. You define a conversion ratio from CASE to EACH with a factor of 36. When you receive an order of this item into a storeroom, the system converts the received order unit of one CASE into the storeroom's issue unit of 36 EACH.",
            "sameAsAttribute": "CONVERSION",
            "sameAsObject": "CONVERSION"
        },
        {
            "attributeName": "UNITCOST",
            "required": true,
            "persistent": true,
            "title": "Unit Cost",
            "remarks": "The cost per issue unit of the current item.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LINECOST",
            "required": true,
            "persistent": true,
            "title": "Line Cost",
            "remarks": "The cost attributed to the line, which is calculated by multiplying the unit cost by the quantity of the item.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COMMODITYGROUP",
            "required": false,
            "persistent": true,
            "title": "Commodity Group",
            "remarks": "Identifies the commodity group, or product category, associated with this item or tool.",
            "sameAsAttribute": "COMMODITY",
            "sameAsObject": "COMMODITIES"
        },
        {
            "attributeName": "COMMODITY",
            "required": false,
            "persistent": true,
            "title": "Commodity",
            "remarks": "Identifies the commodity code associated with this item or tool. The commodity code is used to place items and tools into groupings for categorization purposes generally to drive the purchasing process, such as 'electrical' components or 'maintenance supplies' etc.",
            "sameAsAttribute": "COMMODITY",
            "sameAsObject": "COMMODITIES"
        },
        {
            "attributeName": "PONUM",
            "required": false,
            "persistent": true,
            "title": "PO",
            "remarks": "The purchase order associated with the current record.",
            "sameAsAttribute": "PONUM",
            "sameAsObject": "PO"
        },
        {
            "attributeName": "POREVISIONNUM",
            "required": false,
            "persistent": true,
            "title": "PO Revision",
            "remarks": "Revision number of the purchase order. Indicates how many times a purchase order has been revised.",
            "sameAsAttribute": "REVISIONNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "POLINENUM",
            "required": false,
            "persistent": true,
            "title": "Poline",
            "remarks": "The purchase order line number associated with the current record.",
            "sameAsAttribute": "PRLINENUM",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "POSITEID",
            "required": false,
            "persistent": true,
            "title": "PO Site",
            "remarks": "The site of the purchase order associated with the current record.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "MRNUM",
            "required": false,
            "persistent": true,
            "title": "Requisition",
            "remarks": "The material requisition number associated with this transaction. The material requisition is created and managed via the desktop requisitions application.",
            "sameAsAttribute": "MRNUM",
            "sameAsObject": "MR"
        },
        {
            "attributeName": "MRLINENUM",
            "required": false,
            "persistent": true,
            "title": "Requisition Line",
            "remarks": "The material requisition line number that is associated with the item being issued. Create and manage material requisitions using the Desktop Requisitions application.",
            "sameAsAttribute": "MRLINENUM",
            "sameAsObject": "MRLINE"
        },
        {
            "attributeName": "PRSITEID",
            "required": false,
            "persistent": true,
            "title": "PR Site",
            "remarks": "The site of the purchase requisition associated with the current record.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ROTASSETNUM",
            "required": false,
            "persistent": true,
            "title": "Rotating Asset",
            "remarks": "The rotating asset number associated with the item being issued.",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "FROMLOT",
            "required": false,
            "persistent": true,
            "title": "From Lot",
            "remarks": "The number associated with the lot, where the current item is stored.",
            "sameAsAttribute": "LOTNUM",
            "sameAsObject": "INVLOT"
        },
        {
            "attributeName": "FROMBIN",
            "required": false,
            "persistent": true,
            "title": "From Bin",
            "remarks": "The number associated with the storeroom bin, from which the current item is issued.",
            "sameAsAttribute": "BINNUM",
            "sameAsObject": "INVENTORY"
        },
        {
            "attributeName": "PHYSCNT",
            "required": true,
            "persistent": true,
            "title": "Physical Count",
            "remarks": "The value resulting from a physical count of items in inventory.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PHYSCNTDATE",
            "required": true,
            "persistent": true,
            "title": "Physical Count Date",
            "remarks": "The date of the physical count of items in inventory.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SPLIT",
            "required": true,
            "persistent": true,
            "title": "Split",
            "remarks": "Indicates whether the quantity of the current usage line has been split across multiple source bins or multiple rotating assets.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STAGINGLOT",
            "required": false,
            "persistent": false,
            "title": "Staging Lot",
            "remarks": "Staging Lot",
            "sameAsAttribute": "LOTNUM",
            "sameAsObject": "INVLOT"
        },
        {
            "attributeName": "NEWASSETNUM",
            "required": false,
            "persistent": true,
            "title": "New Asset Number",
            "remarks": "New Asset Number",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "RETURNAGAINSTISSUE",
            "required": true,
            "persistent": true,
            "title": "Returned Against Issue",
            "remarks": "Indicates whether the return record is related to a previous issue.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOORGID",
            "required": false,
            "persistent": true,
            "title": "To Organization",
            "remarks": "The organization that the inventory items are charged to.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "RECEIPTSCOMPLETE",
            "required": true,
            "persistent": true,
            "title": "Receipts Complete",
            "remarks": "Indicates whether all receipt records on the current line are complete. This check box is read-only. It is checked when the value in the Receipts field on the inventory usage record is Complete, or if the value is Partial and the quantity of items received is greater than or equal to the value in the Quantity field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RECEIVEDQTY",
            "required": false,
            "persistent": true,
            "title": "Quantity Received",
            "remarks": "The number of items that were received for the current line item.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Description of the item or tool.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "RETURNEDQTY",
            "required": false,
            "persistent": true,
            "title": "Quantity Returned",
            "remarks": "Number of order units returned for the line item.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DISPLAYRETURNEDQTY",
            "required": false,
            "persistent": false,
            "title": "Quantity Returned",
            "remarks": "Number of order units returned for the line item.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INSPECTIONREQUIRED",
            "required": true,
            "persistent": true,
            "title": "Inspection Required",
            "remarks": "Specifies whether this item requires an approval of the receipt. When you receive items that require inspection, Maximo records a receipt transaction. However, the item does not appear in the storeroom until the receipt is approved. If the check box is selected, the item requires inspection. If the check box is cleared (the default), no approval of the receipt is necessary.",
            "sameAsAttribute": "INSPECTIONREQUIRED",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "INVUSELINEID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HASLD",
            "required": true,
            "persistent": true,
            "title": "Has Long Description",
            "remarks": "Boolean flag to indicate if there is any long description for this record",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REMARK_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Remark Long description",
            "remarks": "Long Description for Remark",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description Long description",
            "remarks": "Long Description for Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LANGCODE",
            "required": true,
            "persistent": true,
            "title": "Language Code",
            "remarks": "Language Code",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ASSET",
            "target": "ASSET",
            "remarks": "Relationship to the Asset table, used to find the asset for which the material is issued. The resulting set will contain one object.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": null
        },
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
            "remarks": "Relationship to the Asset table, used to find the rotating asset which is issued/moved to a non-inventory location. The resulting set will contain zero or one object.",
            "whereClause": "assetnum=:rotassetnum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "ROTATINGASSET",
            "target": "ASSET",
            "remarks": "Relationship to the Asset table, used to find the rotating asset which is issued/moved to a non-inventory location. The resulting set will contain zero or one object.",
            "whereClause": "assetnum=:rotassetnum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "FROMASSET",
            "target": "ASSET",
            "remarks": "Relationship to the Asset table, used to find the rotating asset record for a given InvUseline Transfer record. The resulting set will contain zero or one object.",
            "whereClause": "assetnum = :assetnum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "DRILLDOWN",
            "target": "DRILLDOWN",
            "remarks": "Relationship from the INVUSELINE to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "INVBALANCES",
            "target": "INVBALANCES",
            "remarks": "Relationship to invbalances table, used to find invbalances records for the invuseline record. The resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and location=:tostoreloc and binnum=:tobin and lotnum=:tolot and itemsetid=:itemsetid and siteid=:tositeid",
            "cardinality": null
        },
        {
            "name": "INVBALANCES_BINLOT",
            "target": "INVBALANCES",
            "remarks": "Relationship to the InvBalances table, used to find the balances on hand for this material issue where the material being issued is a lot-tracking item and bin num and lot num are both specified. The resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and location=:fromstoreloc and ( binnum is null or binnum=:frombin) and lotnum=:fromlot and itemsetid=:itemsetid and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "INVBALANCES_BINNOLOT",
            "target": "INVBALANCES",
            "remarks": "Relationship to the InvBalances table, used to find the balances on hand for this InvUseLine where the inventory usage document being issued is not a lot-tracking item and bin num is specified and lot num is null. The resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and location=:fromstoreloc and binnum=:frombin and lotnum is null and itemsetid=:itemsetid and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "INVBALANCESBIN",
            "target": "INVBALANCES",
            "remarks": "Relationship to the InvBalances table, used to find the balances on hand for this material issue when bin num is specified but lot num is either specified or null. (invbalances.itemnum = invuseline.itemnum and invbalances.itemsetid = matusetrans.itemsetid  and invbalances.location = invuseline.fromstoreloc and invbalances.binnum=invuseline.frombin and invbalances.itemsetid = invuseline.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid and location = :fromstoreloc and ( binnum is null or binnum = :frombin) and siteid=:siteid",
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
            "name": "TOINVENTORY",
            "target": "INVENTORY",
            "remarks": "Relationship to the Inventory table, used to find the inventory record which contains the InvUseLine item number and destination storeroom in a given site. The resulting set will contain one object.",
            "whereClause": "itemnum=:itemnum and location=:tostoreloc and siteid=:tositeid and itemsetid=:itemsetid",
            "cardinality": null
        },
        {
            "name": "TOLOCINVENTORY",
            "target": "INVENTORY",
            "remarks": "Relationship to the Inventory table, used to find the inventory record which contains the InvUseLine item number and destination storeroom in a given site. The resulting set will contain one object.",
            "whereClause": "itemnum=:itemnum and location=:location and siteid=:siteid and itemsetid=:itemsetid",
            "cardinality": null
        },
        {
            "name": "FROMINVENTORYSTATUS",
            "target": "INVENTORY",
            "remarks": "Relationship to the Inventory table, used to find the inventory record which contains the Invenuseline item number and from storeroom in a given site with the valid status. The resulting set will contain one object.",
            "whereClause": "itemnum=:itemnum and location=:fromstoreloc and siteid=:siteid and itemsetid=:itemsetid and status in (select value from synonymdomain where domainid = 'ITEMSTATUS' and maxvalue in ('ACTIVE', 'PENDOBS') )",
            "cardinality": null
        },
        {
            "name": "INVLOT",
            "target": "INVLOT",
            "remarks": "Relationship to the InvLot table, used to find the lot information for the Inventory Usage Line. The resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and location=:fromstoreloc and lotnum=:fromlot and siteid=:siteid and itemsetid=:itemsetid",
            "cardinality": null
        },
        {
            "name": "INVRESERVE",
            "target": "INVRESERVE",
            "remarks": "Relationship to the InvReserve table, used to find an inventory reservation record for the invuseline document.  The resulting set will contain zero or more objects.",
            "whereClause": "requestnum=:requestnum and storelocsiteid=:siteid",
            "cardinality": null
        },
        {
            "name": "INVRESERVEFORUSELINE",
            "target": "INVRESERVE",
            "remarks": "Relationship to the InvReserve table, used to find the reservation information for the the invuseline record. The resulting set will contain zero or more objects.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and location=:fromstoreloc and storelocsiteid=:siteid and ((ponum is not null and tostoreloc=:tostoreloc and siteid=:tositeid) or (wonum is not null and wonum=:refwo) or (wonum is null and assetnum is not null and assetnum=:assetnum) or (wonum is null and assetnum is null and oplocation is not null and oplocation=:location) or (wonum is null and assetnum is null and oplocation is null and glaccount is not null and glaccount=:gldebitacct))",
            "cardinality": null
        },
        {
            "name": "INVUSE",
            "target": "INVUSE",
            "remarks": "Relationship to the InvUse table, used to find the invuseline information for an invusenum. The resulting set will contain zero or more objects.",
            "whereClause": "invusenum=:invusenum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "INVUSELINESPLIT",
            "target": "INVUSELINESPLIT",
            "remarks": "Relationship to the InvUseLineSplit table, used to find the invuselinesplit records for a given invuseline. The resulting set will contain one object.",
            "whereClause": "invuselineid=:invuselineid",
            "cardinality": "SINGLE"
        },
        {
            "name": "NEWINVUSELINESPLIT",
            "target": "INVUSELINESPLIT",
            "remarks": "Relationship to the InvUseLineSplit table, used to find the invuselinesplit records for a given invuseline. The resulting set will contain one object.",
            "whereClause": "invuselineid=:invuselineid",
            "cardinality": null
        },
        {
            "name": "ISSUEDITEMFORRETURN",
            "target": "ISSUEDITEMFORRETURN",
            "remarks": "elationship to the InvUseLine table. The resulting set will contain zero or more objects.",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "ITEM",
            "target": "ITEM",
            "remarks": "Relationship to the Item table, used to find the item information for the inventory usage line.The resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": null
        },
        {
            "name": "ITEMCONDITION",
            "target": "ITEMCONDITION",
            "remarks": "Relationship to the itemcondition table, used to find the itemcondition records for a given Invuseline record. The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid and conditioncode=:fromconditioncode",
            "cardinality": null
        },
        {
            "name": "LOCATIONS",
            "target": "LOCATIONS",
            "remarks": "Relationship to the Locations table, used to find the location information for inventory usage line. The resulting set will contain zero or one object.",
            "whereClause": "location=:fromstoreloc and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "TOLOCATIONS",
            "target": "LOCATIONS",
            "remarks": "Relationship to the Locations table, used to find the location information in a given site to which the material is transferred. The resulting set will contain zero or one object.",
            "whereClause": "location=:tostoreloc and siteid=:tositeid",
            "cardinality": null
        },
        {
            "name": "FROMLOCATION",
            "target": "LOCATIONS",
            "remarks": "Relationship to the Locations table, used to find the storeroom in a given site from which the material is transferred. The resulting set will contain zero or one object.",
            "whereClause": "location=:fromstoreloc and siteid = :siteid",
            "cardinality": null
        },
        {
            "name": "MATRECSHIPRECEIPT",
            "target": "MATRECTRANS",
            "remarks": "Relationship to matrectrans table, used to find matrectrans records for the given invuselineid and SHIPRECEIPT issuetype. The resulting set will contain zero or one object.",
            "whereClause": "invuselineid=:invuselineid and issuetype in (select value from synonymdomain where domainid='ISSUETYP' and maxvalue='SHIPRECEIPT')",
            "cardinality": null
        },
        {
            "name": "MATRECSHIPTRANSFER",
            "target": "MATRECTRANS",
            "remarks": "Relationship to the InvUseline table, used to find the MatRecTrans record for the given invuselineid and SHIPTRANSFER issue type. The resulting set will contain zero or more objects.",
            "whereClause": "invuselineid=:invuselineid and issuetype in (select value from synonymdomain where domainid='ISSUETYP' and maxvalue='SHIPTRANSFER')",
            "cardinality": null
        },
        {
            "name": "MATRECSTAGETRANSFER",
            "target": "MATRECTRANS",
            "remarks": "Relationship to the InvUseline table, used to find the MatRecTrans record for the given invuselineid and STAGETRANSFER issue type. The resulting set will contain zero or more objects.",
            "whereClause": "invuselineid=:invuselineid and issuetype in (select value from synonymdomain where domainid='ISSUETYP' and maxvalue='STAGETRANSFER')",
            "cardinality": null
        },
        {
            "name": "MATUSETRANSFORUSELINE",
            "target": "MATUSETRANS",
            "remarks": "Relationship to the MatUseTrans table, used to find the invuseline record.The resulting set will contain zero or more objects.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and storeloc=:fromstoreloc and quantity < 0 and issueid is null and (qtyreturned is null OR qtyreturned < quantity * -1) and issuetype in (select value from synonymdomain where domainid='ISSUETYP' and maxvalue NOT IN ('KITBREAK','KITMAKE') ) and siteid=:siteid and (refwo=:refwo or assetnum=:assetnum or location=:location)",
            "cardinality": null
        },
        {
            "name": "POLINE",
            "target": "POLINE",
            "remarks": "Relationship to poline table, used to find poline records for the ponum, polinenum and siteid. The resulting set will contain zero or one object.",
            "whereClause": "ponum=:ponum and polinenum=:polinenum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "RESERVATION",
            "target": "RESERVATION",
            "remarks": "Relationship to the InvUseLine table. The resulting set will contain zero or more objects.",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "VIEWCONTINPUT",
            "target": "VIEWCONTINPUT",
            "remarks": "Relationship to the non-persistent ViewContInput.",
            "whereClause": "",
            "cardinality": null
        },
        {
            "name": "VIEWWOPMS",
            "target": "VIEWWOPMS",
            "remarks": "Relationship from the INVUSELINE to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field.",
            "whereClause": "",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "INVUSELINE",
            "source": "ASSET",
            "remarks": "Relationship to the InvUseLine table, used to find all Invuseline records for a given asset. This resulting set will contain zero or more objects.",
            "whereClause": "(assetnum = :assetnum or rotassetnum = :assetnum) and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "INVUSELINE",
            "source": "INVENTORY",
            "remarks": "Relationship to the InvUseLine table, used to find the inventory Usage Line record information for the item number and storeroom. The resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and fromstoreloc=:location and siteid=:siteid and itemsetid=:itemsetid",
            "cardinality": null
        },
        {
            "name": "SHIPPEDINVUSELINE",
            "source": "INVENTORY",
            "remarks": "Find all invuselines that are shipped that reference this item.",
            "whereClause": "itemnum=:itemnum and fromstoreloc=:location and siteid=:siteid and itemsetid=:itemsetid and invusenum in (select invuse.invusenum from invuse where invusenum=invuseline.invusenum and siteid=invuseline.siteid and status in (select value from synonymdomain where domainid='INVUSESTATUS' and maxvalue='SHIPPED') and receipts not in (select value from synonymdomain where domainid='RECEIPTS' and maxvalue='COMPLETE'))",
            "cardinality": null
        },
        {
            "name": "INVUSELINE",
            "source": "INVRESERVE",
            "remarks": "Relationship to the InvUseLine table, used to find an inventory usage line records againt this reservation.The resulting set will contain zero or more objects.",
            "whereClause": "requestnum=:requestnum and siteid=:storelocsiteid",
            "cardinality": null
        },
        {
            "name": "INVUSELINE",
            "source": "INVUSE",
            "remarks": "Relationship to the InvUseLine table, used to find the invuseline information for an inventory usage number. The resulting set will contain zero or more objects.",
            "whereClause": "invusenum=:invusenum and siteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "SPLITINVUSELINE",
            "source": "INVUSE",
            "remarks": "Relationship to the InvUseLineSplit table, used to find invuseline records that needs splitting.",
            "whereClause": "invusenum=:invusenum and siteid=:siteid and usetype not in (select value from synonymdomain where domainid = 'INVUSETYPE' and maxvalue in ('RETURN') ) and not exists (select 1 from invuselinesplit where invuselineid=invuseline.invuselineid) and (exists(select 1 from item where itemnum=invuseline.itemnum and rotating=:YES and invuseline.rotassetnum is null) or ( exists (select 1 from invbalances where itemnum=invuseline.itemnum and itemsetid=invuseline.itemsetid and location=invuseline.fromstoreloc and siteid =invuseline.siteid and (conditioncode is null or conditioncode=invuseline.fromconditioncode) and ( binnum is null or binnum=invuseline.frombin) and curbal < invuseline.quantity)))",
            "cardinality": null
        },
        {
            "name": "INVUSELINE",
            "source": "INVUSELINESPLIT",
            "remarks": "Relationship to the InvUseLine table, used to find the invuseline records for a given invuselinesplit. The resulting set will contain one object.",
            "whereClause": "invuselineid=:invuselineid",
            "cardinality": null
        },
        {
            "name": "INVUSELINE",
            "source": "LINESPLIT",
            "remarks": "Relationship to the Asset table, used to find the rotating asset. The resulting set will contain zero or one object.",
            "whereClause": "invuselineid=:invuselineid",
            "cardinality": null
        },
        {
            "name": "INVUSELINE",
            "source": "MATRECTRANS",
            "remarks": "Relationship to InvUseLine table, used to find corresponding receipt.",
            "whereClause": "invuselineid=:invuselineid",
            "cardinality": null
        },
        {
            "name": "INVUSELINE",
            "source": "MATUSETRANS",
            "remarks": "Relationship to the InvUseLine table, used to find the invuseline records for an issue. The resulting set will contain zero or more objects.",
            "whereClause": "invuselineid=:invuselineid",
            "cardinality": null
        },
        {
            "name": "INVUSELINE",
            "source": "SHIPMENTLINE",
            "remarks": "Relationship to the InvUseLine table, used to find InvUse line for a given shipment line. The resulting set will contain zero or more objects.",
            "whereClause": "invuselineid =:invuselineid",
            "cardinality": null
        },
        {
            "name": "INVUSELINE",
            "source": "SPLITUSELINE",
            "remarks": "Relationship to the Invuseline table, used to find the invuseline record for the splituseline. The resulting set will contain zero or one object.",
            "whereClause": "invuselineid=:invuselineid",
            "cardinality": null
        },
        {
            "name": "INVUSELINE",
            "source": "WORKORDER",
            "remarks": "Relationship to the InvUseLine table, used to find all invuseline documents for a work order. This resulting set will contain zero or more objects.",
            "whereClause": "refwo=:wonum and tositeid=:siteid and linetype not in (select value from synonymdomain where domainid='LINETYPE' and maxvalue='TOOL')",
            "cardinality": null
        }
    ]
}