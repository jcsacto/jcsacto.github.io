mos = {
    "objectName": "MATRECTRANS",
    "className": "psdi.app.inventory.MatRecTransSet",
    "description": "The Material Receipt Transaction Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MATRECTRANSID",
    "primaryKeyColumns": [
        "MATRECTRANSID"
    ],
    "logicalRelationships": [
        {
            "objectName": "MATRECTRANS",
            "targetObject": "ASSETTRANS",
            "parentKeys": "MATRECTRANSID",
            "targetKeys": "MATRECTRANSID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset Transactions",
            "longDescription": null
        },
        {
            "objectName": "MATRECTRANS",
            "targetObject": "INVOICELINE",
            "parentKeys": "MATRECTRANSID",
            "targetKeys": "CONSTRANSID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Invoice Lines",
            "longDescription": null
        },
        {
            "objectName": "MATRECTRANS",
            "targetObject": "INVOICEMATCH",
            "parentKeys": "MATRECTRANSID",
            "targetKeys": "MATRECTRANSID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Invoice Match",
            "longDescription": null
        },
        {
            "objectName": "MATRECTRANS",
            "targetObject": "INVTRANS",
            "parentKeys": "MATRECTRANSID",
            "targetKeys": "MATRECTRANSID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Inventory Transactions",
            "longDescription": null
        },
        {
            "objectName": "MATRECTRANS",
            "targetObject": "MATRECTRANS",
            "parentKeys": "MATRECTRANSID",
            "targetKeys": "BELONGSTO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Parent Transaction",
            "longDescription": null
        },
        {
            "objectName": "MATRECTRANS",
            "targetObject": "MATRECTRANS",
            "parentKeys": "MATRECTRANSID",
            "targetKeys": "RECEIPTREF",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Related Receipt Record",
            "longDescription": null
        },
        {
            "objectName": "MATRECTRANS",
            "targetObject": "MATUSETRANS",
            "parentKeys": "MATRECTRANSID",
            "targetKeys": "MATRECTRANSID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Material Usage Transaction",
            "longDescription": null
        },
        {
            "objectName": "MATRECTRANS",
            "targetObject": "SHIPMENTLINE",
            "parentKeys": "MATRECTRANSID",
            "targetKeys": "RECTRANSID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Shipment Line",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "ASSET",
            "targetObject": "MATRECTRANS",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "FROMSITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 74",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "MATRECTRANS",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "FROMSITEID, ROTASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 75",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "MATRECTRANS",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "POSITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 76",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "MATRECTRANS",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "POSITEID, ROTASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 77",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "MATRECTRANS",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "MATRECTRANS",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ROTASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Rotating Asset",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "MATRECTRANS",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITY, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "MATRECTRANS",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITYGROUP, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity Group",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "MATRECTRANS",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, CONSVENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Consignment Vendor",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "MATRECTRANS",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, MANUFACTURER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Manufacturer",
            "longDescription": null
        },
        {
            "objectName": "CURRENCY",
            "targetObject": "MATRECTRANS",
            "parentKeys": "CURRENCYCODE",
            "targetKeys": "CURRENCYCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Recorded Currency",
            "longDescription": null
        },
        {
            "objectName": "FINANCIALPERIODS",
            "targetObject": "MATRECTRANS",
            "parentKeys": "ORGID, FINANCIALPERIOD",
            "targetKeys": "ORGID, FINANCIALPERIOD",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Financial Period",
            "longDescription": null
        },
        {
            "objectName": "FINCNTRL",
            "targetObject": "MATRECTRANS",
            "parentKeys": "ORGID, FINCNTRLID",
            "targetKeys": "ORGID, FINCNTRLID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Financial Control",
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
            "objectName": "INVOICE",
            "targetObject": "MATRECTRANS",
            "parentKeys": "SITEID, INVOICENUM",
            "targetKeys": "FROMSITEID, CONSINVOICENUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 17",
            "longDescription": null
        },
        {
            "objectName": "INVOICE",
            "targetObject": "MATRECTRANS",
            "parentKeys": "SITEID, INVOICENUM",
            "targetKeys": "FROMSITEID, INVOICENUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 18",
            "longDescription": null
        },
        {
            "objectName": "INVOICE",
            "targetObject": "MATRECTRANS",
            "parentKeys": "SITEID, INVOICENUM",
            "targetKeys": "POSITEID, CONSINVOICENUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 19",
            "longDescription": null
        },
        {
            "objectName": "INVOICE",
            "targetObject": "MATRECTRANS",
            "parentKeys": "SITEID, INVOICENUM",
            "targetKeys": "POSITEID, INVOICENUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 20",
            "longDescription": null
        },
        {
            "objectName": "INVOICE",
            "targetObject": "MATRECTRANS",
            "parentKeys": "SITEID, INVOICENUM",
            "targetKeys": "SITEID, CONSINVOICENUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 21",
            "longDescription": null
        },
        {
            "objectName": "INVOICE",
            "targetObject": "MATRECTRANS",
            "parentKeys": "SITEID, INVOICENUM",
            "targetKeys": "SITEID, INVOICENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Recieved for Invoice",
            "longDescription": null
        },
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
            "objectName": "ITEM",
            "targetObject": "MATRECTRANS",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
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
            "objectName": "LANGUAGE",
            "targetObject": "MATRECTRANS",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "MATRECTRANS",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "FROMSITEID, FROMSTORELOC",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Source Storeroom",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "MATRECTRANS",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "FROMSITEID, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 104",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "MATRECTRANS",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "FROMSITEID, TOSTORELOC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 105",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "MATRECTRANS",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "POSITEID, FROMSTORELOC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 106",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "MATRECTRANS",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "POSITEID, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 107",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "MATRECTRANS",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "POSITEID, TOSTORELOC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 108",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "MATRECTRANS",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, FROMSTORELOC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 109",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "MATRECTRANS",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 110",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "MATRECTRANS",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, TOSTORELOC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 111",
            "longDescription": null
        },
        {
            "objectName": "MATRECTRANS",
            "targetObject": "MATRECTRANS",
            "parentKeys": "MATRECTRANSID",
            "targetKeys": "BELONGSTO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Parent Transaction",
            "longDescription": null
        },
        {
            "objectName": "MATRECTRANS",
            "targetObject": "MATRECTRANS",
            "parentKeys": "MATRECTRANSID",
            "targetKeys": "RECEIPTREF",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Related Receipt Record",
            "longDescription": null
        },
        {
            "objectName": "MATUSETRANS",
            "targetObject": "MATRECTRANS",
            "parentKeys": "SITEID, MATUSETRANSID",
            "targetKeys": "FROMSITEID, MATUSETRANSID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 9",
            "longDescription": null
        },
        {
            "objectName": "MATUSETRANS",
            "targetObject": "MATRECTRANS",
            "parentKeys": "SITEID, MATUSETRANSID",
            "targetKeys": "POSITEID, MATUSETRANSID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 10",
            "longDescription": null
        },
        {
            "objectName": "MATUSETRANS",
            "targetObject": "MATRECTRANS",
            "parentKeys": "SITEID, MATUSETRANSID",
            "targetKeys": "SITEID, MATUSETRANSID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 11",
            "longDescription": null
        },
        {
            "objectName": "MATUSETRANS",
            "targetObject": "MATRECTRANS",
            "parentKeys": "MATUSETRANSID",
            "targetKeys": "MATUSETRANSID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Material Usage",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MATRECTRANS",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "RECEIVEDUNIT, FROMSITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 123",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MATRECTRANS",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "RECEIVEDUNIT, POSITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 124",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MATRECTRANS",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "RECEIVEDUNIT, SITEID, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measure Unit of receipt.",
            "longDescription": null
        },
        {
            "objectName": "MR",
            "targetObject": "MATRECTRANS",
            "parentKeys": "SITEID, MRNUM",
            "targetKeys": "FROMSITEID, MRNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 7",
            "longDescription": null
        },
        {
            "objectName": "MR",
            "targetObject": "MATRECTRANS",
            "parentKeys": "SITEID, MRNUM",
            "targetKeys": "POSITEID, MRNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 8",
            "longDescription": null
        },
        {
            "objectName": "MR",
            "targetObject": "MATRECTRANS",
            "parentKeys": "SITEID, MRNUM",
            "targetKeys": "SITEID, MRNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Material Request",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "MATRECTRANS",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MATRECTRANS",
            "parentKeys": "PERSONID",
            "targetKeys": "ENTERBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who entered the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MATRECTRANS",
            "parentKeys": "PERSONID",
            "targetKeys": "ISSUETO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person to issue to.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MATRECTRANS",
            "parentKeys": "PERSONID",
            "targetKeys": "REQUESTEDBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Requested By",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MATRECTRANS",
            "parentKeys": "PERSONID",
            "targetKeys": "STATUSCHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Last Status Change By",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "MATRECTRANS",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "FROMSITEID, PONUM, POREVISIONNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 22",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "MATRECTRANS",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "POSITEID, PONUM, POREVISIONNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 23",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "MATRECTRANS",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "SITEID, PONUM, POREVISIONNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 24",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "MATRECTRANS",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 44",
            "longDescription": null
        },
        {
            "objectName": "SHIPMENT",
            "targetObject": "MATRECTRANS",
            "parentKeys": "FROMSITEID, SHIPMENTNUM",
            "targetKeys": "FROMSITEID, SHIPMENTNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Shipment",
            "longDescription": null
        },
        {
            "objectName": "SHIPMENT",
            "targetObject": "MATRECTRANS",
            "parentKeys": "FROMSITEID, SHIPMENTNUM",
            "targetKeys": "POSITEID, SHIPMENTNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 2",
            "longDescription": null
        },
        {
            "objectName": "SHIPMENT",
            "targetObject": "MATRECTRANS",
            "parentKeys": "FROMSITEID, SHIPMENTNUM",
            "targetKeys": "SITEID, SHIPMENTNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 3",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "MATRECTRANS",
            "parentKeys": "SITEID",
            "targetKeys": "FROMSITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site where items are coming from",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "MATRECTRANS",
            "parentKeys": "SITEID",
            "targetKeys": "POSITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PO''s Site",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "MATRECTRANS",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "MATRECTRANS",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "FROMSITEID, REFWO",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 24",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "MATRECTRANS",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "POSITEID, REFWO",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 25",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "MATRECTRANS",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, REFWO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Material Receipt Transactions",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "ITEMNUM",
            "required": false,
            "persistent": true,
            "title": "Item",
            "remarks": "The identifier of the item.",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "TOSTORELOC",
            "required": false,
            "persistent": true,
            "title": "To Location",
            "remarks": "The identifier of the storeroom where the items are to be shipped.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "TRANSDATE",
            "required": true,
            "persistent": true,
            "title": "Transaction Date",
            "remarks": "The time and date that the transaction was logged.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ACTUALDATE",
            "required": true,
            "persistent": true,
            "title": "Actual Date",
            "remarks": "The time and date of the receipt or transfer of items. This value can be different from the time and date that the transaction was logged. You can change the value in this field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "QUANTITY",
            "required": false,
            "persistent": true,
            "title": "Quantity",
            "remarks": "The quantity of items that are being transferred into or out of the storeroom.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RECEIVEDUNIT",
            "required": false,
            "persistent": true,
            "title": "Order Unit",
            "remarks": "The standard unit by which the item is ordered, such as by roll or by case.",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "ISSUETYPE",
            "required": false,
            "persistent": true,
            "title": "Transaction Type",
            "remarks": "The type of material receipt transaction that occurs as a result of the shipment.",
            "sameAsAttribute": "ISSUETYPE",
            "sameAsObject": "MATUSETRANS"
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
            "attributeName": "ACTUALCOST",
            "required": true,
            "persistent": true,
            "title": "Actual Cost",
            "remarks": "The cost of the item that is being shipped. This value can be different from the unit cost.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PONUM",
            "required": false,
            "persistent": true,
            "title": "PO",
            "remarks": "The purchase order that is associated with the item being shipped.",
            "sameAsAttribute": "PONUM",
            "sameAsObject": "PO"
        },
        {
            "attributeName": "INVOICENUM",
            "required": false,
            "persistent": true,
            "title": "Invoice",
            "remarks": "The invoice number for the shipment record as provided on the purchase order.",
            "sameAsAttribute": "INVOICENUM",
            "sameAsObject": "INVOICE"
        },
        {
            "attributeName": "REJECTCODE",
            "required": false,
            "persistent": true,
            "title": "Reject Code",
            "remarks": "Indicates the reason that the items were rejected by the receiving storeroom, such as when items are damaged.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REJECTQTY",
            "required": true,
            "persistent": true,
            "title": "Quantity Rejected",
            "remarks": "The number of items that were rejected. If you enter a value in this field, the number of items in the Quantity field must not include the returned items.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONVERSION",
            "required": false,
            "persistent": true,
            "title": "Conversion Factor",
            "remarks": "The numeric value that is used to convert the order unit of an item to the issue unit of the item. The number of items that you order at one time can be different from the number of items that you issue at one time. For example, if you order in batches of 36 but issue one item at a time, you can define a measurement unit of CASE and another measurement unit of EACH. You define a conversion ratio from CASE to EACH with a factor of 36. Then, when you receive an order of this item into a storeroom, the received order unit of one CASE is converted into issue unit of 36 EACH.",
            "sameAsAttribute": "CONVERSION",
            "sameAsObject": "CONVERSION"
        },
        {
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": true,
            "title": "Asset",
            "remarks": "Identifies the asset that is associated with the shipment or line item.",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "ENTERBY",
            "required": true,
            "persistent": true,
            "title": "Entered By",
            "remarks": "The person who created the shipment receipt record.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "IT1",
            "required": false,
            "persistent": true,
            "title": "It1",
            "remarks": "Extra Field 01",
            "sameAsAttribute": "RL1",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "IT2",
            "required": false,
            "persistent": true,
            "title": "It2",
            "remarks": "Extra Field 02",
            "sameAsAttribute": "RL2",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "IT3",
            "required": false,
            "persistent": true,
            "title": "It3",
            "remarks": "Extra Field 03",
            "sameAsAttribute": "RL3",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "IT4",
            "required": false,
            "persistent": true,
            "title": "It4",
            "remarks": "Extra Field 04",
            "sameAsAttribute": "RL4",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "IT5",
            "required": false,
            "persistent": true,
            "title": "It5",
            "remarks": "Extra Field 05",
            "sameAsAttribute": "RL5",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "OUTSIDE",
            "required": true,
            "persistent": true,
            "title": "Outside",
            "remarks": "Indicates whether the item that is being shipped is a consignment good that belongs to an external vendor, but is stored on-site. If the check box is cleared, there is no charge for using this item.",
            "sameAsAttribute": "OUTSIDE",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "ISSUETO",
            "required": false,
            "persistent": true,
            "title": "Issue To",
            "remarks": "Identifies the person or craft that the item is being shipped to.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "PACKINGSLIPNUM",
            "required": false,
            "persistent": true,
            "title": "Packing Slip",
            "remarks": "The number of the packing slip that accompanies the shipment.",
            "sameAsAttribute": "PACKINGSLIPNUM",
            "sameAsObject": "SHIPMENTLINE"
        },
        {
            "attributeName": "POLINENUM",
            "required": false,
            "persistent": true,
            "title": "PO Line",
            "remarks": "The identifier of the item on the associated purchase order.",
            "sameAsAttribute": "PRLINENUM",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "ISSUE",
            "required": true,
            "persistent": true,
            "title": "Issue on Receipt",
            "remarks": "Indicates whether the line item on the current record is a direct issue. Items can be issued to a work order, a general ledger account, a location, or an asset. If the check box is cleared, the item is stocked in a storeroom.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REQUESTEDBY",
            "required": false,
            "persistent": true,
            "title": "Requested By",
            "remarks": "The person who entered a request for the item.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "TOTALCURBAL",
            "required": false,
            "persistent": true,
            "title": "Total Current Balance",
            "remarks": "The total balance of items in the storeroom.",
            "sameAsAttribute": "CURBAL",
            "sameAsObject": "INVBALANCES"
        },
        {
            "attributeName": "OLDAVGCOST",
            "required": false,
            "persistent": true,
            "title": "Old Average Cost",
            "remarks": "The average cost of items, which is calculated at the time of receipt or transfer.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ITIN1",
            "required": false,
            "persistent": true,
            "title": "Itin1",
            "remarks": "Extra Field 06",
            "sameAsAttribute": "IN19",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "ITIN2",
            "required": false,
            "persistent": true,
            "title": "Itin2",
            "remarks": "Extra Field 07",
            "sameAsAttribute": "IN20",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "ITIN3",
            "required": false,
            "persistent": true,
            "title": "Itin3",
            "remarks": "Extra Field 08",
            "sameAsAttribute": "IN21",
            "sameAsObject": "ITEM"
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
            "attributeName": "GLDEBITACCT",
            "required": false,
            "persistent": true,
            "title": "GL Debit Account",
            "remarks": "The GL account that is debited when the item is received or transferred.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLCREDITACCT",
            "required": false,
            "persistent": true,
            "title": "GL Credit Account",
            "remarks": "The GL account that is credited when the item is received or transferred.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LINECOST",
            "required": true,
            "persistent": true,
            "title": "Line Cost",
            "remarks": "The cost that is attributed to the line, which is calculated by multiplying the unit cost by the quantity of the item.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FINANCIALPERIOD",
            "required": false,
            "persistent": true,
            "title": "Financial Period",
            "remarks": "The financial accounting period in which the current transaction is recorded. This value is based on the actual date of the transaction.",
            "sameAsAttribute": "FINANCIALPERIOD",
            "sameAsObject": "FINANCIALPERIODS"
        },
        {
            "attributeName": "CURRENCYCODE",
            "required": true,
            "persistent": true,
            "title": "Currency",
            "remarks": "The currency of the purchase requisition.",
            "sameAsAttribute": "CURRENCYCODE",
            "sameAsObject": "CURRENCY"
        },
        {
            "attributeName": "EXCHANGERATE",
            "required": false,
            "persistent": true,
            "title": "Exchange Rate",
            "remarks": "The exchange rate at the time that the purchase requisition was approved.",
            "sameAsAttribute": "EXCHANGERATE",
            "sameAsObject": "EXCHANGE"
        },
        {
            "attributeName": "CURRENCYUNITCOST",
            "required": false,
            "persistent": true,
            "title": "Currency Unit Cost",
            "remarks": "The cost per issue unit in the currency of the vendor.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MANUFACTURER",
            "required": false,
            "persistent": true,
            "title": "Manufacturer",
            "remarks": "Identifies the code that is associated with the manufacturer of the item.",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "MODELNUM",
            "required": false,
            "persistent": true,
            "title": "Model",
            "remarks": "The model code that the manufacturer associates with the item. The default value for this field comes from the inventory record.",
            "sameAsAttribute": "MODELNUM",
            "sameAsObject": "INVENTORY"
        },
        {
            "attributeName": "CURRENCYLINECOST",
            "required": false,
            "persistent": true,
            "title": "Currency Line Cost",
            "remarks": "The cost per shipment line in the currency of the vendor.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": true,
            "title": "Location",
            "remarks": "The location where the item is to be used.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Description of the shipment item.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "REMARK",
            "required": false,
            "persistent": true,
            "title": "Remarks",
            "remarks": "Additional remarks about the current item or shipment.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FROMSTORELOC",
            "required": false,
            "persistent": true,
            "title": "From Location",
            "remarks": "The storeroom where the item is stocked. The storeroom information comes from the user profile, which also contains information about the site and organization.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "FROMBIN",
            "required": false,
            "persistent": true,
            "title": "From Bin",
            "remarks": "The identifier of the storeroom bin from which the current item is being transferred.",
            "sameAsAttribute": "BINNUM",
            "sameAsObject": "INVENTORY"
        },
        {
            "attributeName": "QTYHELD",
            "required": false,
            "persistent": true,
            "title": "Quantity Held",
            "remarks": "The quantity of items that are being held for transfer to another site or storeroom.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FROMLOT",
            "required": false,
            "persistent": true,
            "title": "From Lot",
            "remarks": "The identifier of the lot where the current item is stored.",
            "sameAsAttribute": "LOTNUM",
            "sameAsObject": "INVLOT"
        },
        {
            "attributeName": "TOLOT",
            "required": false,
            "persistent": true,
            "title": "To Lot",
            "remarks": "Internal lot number into which the item being transferred or received is placed, which is different than the manufacturer's lot number. The internal lot number is used to track a received item so that it can be used in the appropriate time frame, such as first-in first-out or last-in last-out. Click the Select Value button to choose a lot.",
            "sameAsAttribute": "LOTNUM",
            "sameAsObject": "INVLOT"
        },
        {
            "attributeName": "LOADEDCOST",
            "required": true,
            "persistent": true,
            "title": "Loaded Cost",
            "remarks": "The overall cost that is attributed to the line. This value is calculated by multiplying the unit cost by the quantity and adding taxes and special charges.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TAX1CODE",
            "required": false,
            "persistent": true,
            "title": "Tax Code 1",
            "remarks": "The tax code that is used for tax calculation.",
            "sameAsAttribute": "TAXCODE",
            "sameAsObject": "TAX"
        },
        {
            "attributeName": "TAX1",
            "required": false,
            "persistent": true,
            "title": "Tax 1",
            "remarks": "The amount of tax that is due for the current line item.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TAX2CODE",
            "required": false,
            "persistent": true,
            "title": "Tax Code 2",
            "remarks": "The tax code that is used for tax calculation.",
            "sameAsAttribute": "TAXCODE",
            "sameAsObject": "TAX"
        },
        {
            "attributeName": "TAX2",
            "required": false,
            "persistent": true,
            "title": "Tax 2",
            "remarks": "The amount of tax that is due for the current line item.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TAX3CODE",
            "required": false,
            "persistent": true,
            "title": "Tax Code 3",
            "remarks": "The tax code that is used for tax calculation.",
            "sameAsAttribute": "TAXCODE",
            "sameAsObject": "TAX"
        },
        {
            "attributeName": "TAX3",
            "required": false,
            "persistent": true,
            "title": "Tax 3",
            "remarks": "The amount of tax that is due for the current line item.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TAX4CODE",
            "required": false,
            "persistent": true,
            "title": "Tax Code 4",
            "remarks": "The tax code that is used for tax calculation.",
            "sameAsAttribute": "TAXCODE",
            "sameAsObject": "TAX"
        },
        {
            "attributeName": "TAX4",
            "required": false,
            "persistent": true,
            "title": "Tax 4",
            "remarks": "The amount of tax that is due for the current line item.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TAX5CODE",
            "required": false,
            "persistent": true,
            "title": "Tax Code 5",
            "remarks": "The tax code that is used for tax calculation.",
            "sameAsAttribute": "TAXCODE",
            "sameAsObject": "TAX"
        },
        {
            "attributeName": "TAX5",
            "required": false,
            "persistent": true,
            "title": "Tax 5",
            "remarks": "The amount of tax that is due for the current line item.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PRORATED",
            "required": true,
            "persistent": true,
            "title": "Prorated",
            "remarks": "Indicates whether the amount for the current line was prorated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PRORATECOST",
            "required": false,
            "persistent": true,
            "title": "Prorate Cost",
            "remarks": "The amount of added costs that are applied to the cost of the line item.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUS",
            "required": false,
            "persistent": true,
            "title": "Inspection Status",
            "remarks": "The status that is assigned to the shipment receipt after inspection.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUSDATE",
            "required": false,
            "persistent": true,
            "title": "Status Date",
            "remarks": "The date that the receipt status was last changed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUSCHANGEBY",
            "required": false,
            "persistent": true,
            "title": "Status Changed By",
            "remarks": "The person who last changed the receipt status.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "SOURCESYSID",
            "required": false,
            "persistent": true,
            "title": "Source System ID",
            "remarks": "Source System ID",
            "sameAsAttribute": "OWNER1SYSID",
            "sameAsObject": "MXCOLLAB"
        },
        {
            "attributeName": "QTYREQUESTED",
            "required": false,
            "persistent": true,
            "title": "Quantity Requested",
            "remarks": "The quantity of items that were requested to be transferred.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CURBAL",
            "required": true,
            "persistent": true,
            "title": "Current Balance",
            "remarks": "The storeroom balance at the time of the transfer or receipt of the shipment.",
            "sameAsAttribute": "CURBAL",
            "sameAsObject": "INVBALANCES"
        },
        {
            "attributeName": "EXCHANGERATE2",
            "required": false,
            "persistent": true,
            "title": "Secondary Exchange Rate",
            "remarks": "The secondary exchange rate that can be applied to the cost of the transfer items.",
            "sameAsAttribute": "EXCHANGERATE",
            "sameAsObject": "EXCHANGE"
        },
        {
            "attributeName": "LINECOST2",
            "required": false,
            "persistent": true,
            "title": "Secondary Line Cost",
            "remarks": "The secondary cost per shipment line in the currency of the vendor.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MRNUM",
            "required": false,
            "persistent": true,
            "title": "Requisition",
            "remarks": "The material requisition number that is associated with the current transaction. The material requisition is created and managed in the Desktop Requisitions application.",
            "sameAsAttribute": "MRNUM",
            "sameAsObject": "MR"
        },
        {
            "attributeName": "MRLINENUM",
            "required": false,
            "persistent": true,
            "title": "Requisition Line",
            "remarks": "The material requisition line number that is associated with the item being issued. The material requisition is created and managed in the Desktop Requisitions application.",
            "sameAsAttribute": "MRLINENUM",
            "sameAsObject": "MRLINE"
        },
        {
            "attributeName": "MATRECTRANSID",
            "required": true,
            "persistent": true,
            "title": "Receipt ID",
            "remarks": "The identifier of the shipment receipt record.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OWNERSYSID",
            "required": false,
            "persistent": true,
            "title": "Owner System ID",
            "remarks": "Owner System ID",
            "sameAsAttribute": "OWNER1SYSID",
            "sameAsObject": "MXCOLLAB"
        },
        {
            "attributeName": "EXTERNALREFID",
            "required": false,
            "persistent": true,
            "title": "External Reference ID",
            "remarks": "External Reference ID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IT6",
            "required": false,
            "persistent": true,
            "title": "IT6",
            "remarks": "Extra Field",
            "sameAsAttribute": "RL6",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "IT7",
            "required": false,
            "persistent": true,
            "title": "IT7",
            "remarks": "Extra Field",
            "sameAsAttribute": "RL7",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "IT8",
            "required": false,
            "persistent": true,
            "title": "IT8",
            "remarks": "Extra Field",
            "sameAsAttribute": "RL8",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "IT9",
            "required": false,
            "persistent": true,
            "title": "IT9",
            "remarks": "Extra Field",
            "sameAsAttribute": "RL9",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "IT10",
            "required": false,
            "persistent": true,
            "title": "IT10",
            "remarks": "Extra Field",
            "sameAsAttribute": "RL10",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "ITIN4",
            "required": false,
            "persistent": true,
            "title": "ITIN4",
            "remarks": "Extra Field",
            "sameAsAttribute": "IN24",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "ITIN5",
            "required": false,
            "persistent": true,
            "title": "ITIN5",
            "remarks": "Extra Field",
            "sameAsAttribute": "IN25",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "ITIN6",
            "required": false,
            "persistent": true,
            "title": "ITIN6",
            "remarks": "Extra Field",
            "sameAsAttribute": "IN26",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "ITIN7",
            "required": false,
            "persistent": true,
            "title": "ITIN7",
            "remarks": "Extra Field",
            "sameAsAttribute": "IN27",
            "sameAsObject": "ITEM"
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
            "attributeName": "FINCNTRLID",
            "required": false,
            "persistent": true,
            "title": "FCID",
            "remarks": "The financial control identifier, which is used by the Financial Control application to manage budgets.",
            "sameAsAttribute": "FINCNTRLID",
            "sameAsObject": "FINCNTRL"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "The organization that is associated with the shipment receipt.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": true,
            "persistent": true,
            "title": "Site",
            "remarks": "The site that is associated with the shipment receipt.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "COSTINFO",
            "required": true,
            "persistent": true,
            "title": "Cost Information",
            "remarks": "Information about the cost on the current shipment line.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BELONGSTO",
            "required": false,
            "persistent": true,
            "title": "Belongs To",
            "remarks": "Identifies the transaction type of the parent record.",
            "sameAsAttribute": "MATRECTRANSID",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "REFWO",
            "required": false,
            "persistent": true,
            "title": "Work Order",
            "remarks": "Identifies the work order that is associated with the current record.",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ENTEREDASTASK",
            "required": true,
            "persistent": true,
            "title": "Entered as Task",
            "remarks": "Indicates whether the current transaction was created based on a work order task.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FROMSITEID",
            "required": true,
            "persistent": true,
            "title": "From Site",
            "remarks": "The identifier of the site that is transferring the inventory items. By default, this value is the site of the selected storeroom.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "RECEIPTREF",
            "required": false,
            "persistent": true,
            "title": "ReceiptRef",
            "remarks": "Identifies the transaction type of the related receipt record.",
            "sameAsAttribute": "MATRECTRANSID",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "LINETYPE",
            "required": true,
            "persistent": true,
            "title": "Line Type",
            "remarks": "The type of item used on the usage line. For example, Item or Tool.",
            "sameAsAttribute": "LINETYPE",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "ITEMSETID",
            "required": false,
            "persistent": true,
            "title": "Item Set",
            "remarks": "Identifies the item set, or group of items, to which the current item belongs. An organization is assigned to only one item set, but multiple organizations can use the same item set.",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS"
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Description of the shipment item.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REMARK_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Remark Long Description",
            "remarks": "Additional remarks about the current item or shipment.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INVOICEMATUNITCOST",
            "required": false,
            "persistent": false,
            "title": "Unit Cost",
            "remarks": "The cost per issue unit of the current item.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "UNINVOICEDCOST",
            "required": false,
            "persistent": false,
            "title": "Uninvoiced Cost",
            "remarks": "The outstanding cost of the shipment, which is not yet invoiced.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "UNINVOICEDQUANTITY",
            "required": false,
            "persistent": false,
            "title": "Uninvoiced Quantity",
            "remarks": "The quantity of items in the shipment, which is not yet invoiced.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NEWSITE",
            "required": false,
            "persistent": false,
            "title": "To Site",
            "remarks": "The identifier of the site that is receiving the transferred items. By default, the value in this field is the site of the selected storeroom.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
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
            "attributeName": "NEWPHYSCNT",
            "required": false,
            "persistent": false,
            "title": "Physical Count",
            "remarks": "The physical count of items in inventory.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TASKID",
            "required": false,
            "persistent": false,
            "title": "Task",
            "remarks": "The work order task that is associated with the current line item.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WONUM",
            "required": false,
            "persistent": false,
            "title": "Work Order",
            "remarks": "Identifies the work order that is associated with the line item.",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "RESERVEDQTY",
            "required": false,
            "persistent": false,
            "title": "Quantity Reserved",
            "remarks": "Identifies the number of items that are reserved and not transferred.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REQUESTNUM",
            "required": false,
            "persistent": false,
            "title": "Request",
            "remarks": "The identifier of the reservation that is associated with the current record.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "POLINECOST",
            "required": false,
            "persistent": false,
            "title": "Line Cost",
            "remarks": "The cost that is attributed to the purchase order line.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "POUNITCOST",
            "required": false,
            "persistent": false,
            "title": "Unit Cost",
            "remarks": "The cost that is attributed to the purchase order line.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USEBY",
            "required": false,
            "persistent": false,
            "title": "Expiration Date",
            "remarks": "The date by which the lotted item must be used.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MFGLOTNUM",
            "required": false,
            "persistent": false,
            "title": "Manufacturer Lot",
            "remarks": "The identifier of the internal lot where the manufacturer stores the item to be transferred or received. This identifier can be used in your correspondence with the manufacturer.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SHELFLIFE",
            "required": false,
            "persistent": false,
            "title": "Shelf Life (Days)",
            "remarks": "Identifies the number of days that the item can be stored before it must be used. This field can remain blank if the Expiration Date field is filled, or you can calculate the expiration date by the shelf life here.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CURRENCYORDERUNITCOST",
            "required": false,
            "persistent": false,
            "title": "Unit Cost",
            "remarks": "The cost per issue unit of the current item.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CURRENCYTAX5",
            "required": false,
            "persistent": false,
            "title": "Tax 5",
            "remarks": "The amount of tax that is due for the current line item.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CURRENCYTAX4",
            "required": false,
            "persistent": false,
            "title": "Tax 4",
            "remarks": "The amount of tax that is due for the current line item.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CURRENCYTAX3",
            "required": false,
            "persistent": false,
            "title": "Tax 3",
            "remarks": "The amount of tax that is due for the current line item.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CURRENCYTAX2",
            "required": false,
            "persistent": false,
            "title": "Tax 2",
            "remarks": "The amount of tax that is due for the current line item.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CURRENCYTAX1",
            "required": false,
            "persistent": false,
            "title": "Tax 1",
            "remarks": "The amount of tax that is due for the current line item.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CURRENCYLOADEDCOST",
            "required": false,
            "persistent": false,
            "title": "Loaded Cost",
            "remarks": "The overall cost that is attributed to the line. This value is calculated by multiplying the unit cost by the quantity, and adding taxes and special charges.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CATEGORY",
            "required": false,
            "persistent": false,
            "title": "Category",
            "remarks": "Indicates the category of the current item, such as stocked, non-stocked, or special order items.",
            "sameAsAttribute": "CATEGORY",
            "sameAsObject": "INVENTORY"
        },
        {
            "attributeName": "ISDISTRIBUTED",
            "required": true,
            "persistent": false,
            "title": "Distributed",
            "remarks": "Indicates whether the receipt line corresponds to a purchase order line, for which the charge has been distributed across multiple general ledger (GL) accounts.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ROTATINGASSETDESC",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "Description of the rotating asset.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORDERQTY",
            "required": false,
            "persistent": false,
            "title": "Quantity",
            "remarks": "The quantity of items that are on the shipment order.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "QTYALREADYRECVD",
            "required": false,
            "persistent": false,
            "title": "Quantity Already Received",
            "remarks": "The quantity of items that were already received.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASN",
            "required": true,
            "persistent": false,
            "title": "ASN",
            "remarks": "Indicates whether the order was created based on an advanced shipment notification.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RECEIPTQUANTITY",
            "required": false,
            "persistent": false,
            "title": "Quantity",
            "remarks": "The quantity of items that are being transferred into or out of the storeroom.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONDITIONCODE",
            "required": false,
            "persistent": true,
            "title": "To Condition Code",
            "remarks": "The condition code that indicates the current physical condition of the item.",
            "sameAsAttribute": "CONDITIONCODE",
            "sameAsObject": "ITEMCONDITION"
        },
        {
            "attributeName": "FROMCONDITIONCODE",
            "required": false,
            "persistent": true,
            "title": "From Condition Code",
            "remarks": "The condition code that indicates the physical condition of the item as it was in the originating storeroom.",
            "sameAsAttribute": "CONDITIONCODE",
            "sameAsObject": "ITEMCONDITION"
        },
        {
            "attributeName": "CONDRATE",
            "required": false,
            "persistent": true,
            "title": "Rate Percentage",
            "remarks": "Condition Rate Percentage",
            "sameAsAttribute": "CONDRATE",
            "sameAsObject": "INVCOST"
        },
        {
            "attributeName": "COMMODITYGROUP",
            "required": false,
            "persistent": true,
            "title": "Commodity Group",
            "remarks": "The commodity group or product category that is associated with this item or tool.",
            "sameAsAttribute": "COMMODITY",
            "sameAsObject": "COMMODITIES"
        },
        {
            "attributeName": "COMMODITY",
            "required": false,
            "persistent": true,
            "title": "Commodity Code",
            "remarks": "The commodity code that is associated with this item or tool for categorization. Commodity codes are used in the purchasing process. For example, items can be categorized into electrical components or maintenance supplies.",
            "sameAsAttribute": "COMMODITY",
            "sameAsObject": "COMMODITIES"
        },
        {
            "attributeName": "FCPROJECTID",
            "required": false,
            "persistent": false,
            "title": "FC Project ID",
            "remarks": "The identifier of the financial control project, which is used by the Financial Control application to manage budgets.",
            "sameAsAttribute": "PROJECTID",
            "sameAsObject": "FINCNTRL"
        },
        {
            "attributeName": "FCTASKID",
            "required": false,
            "persistent": false,
            "title": "FC Task ID",
            "remarks": "The identifier of the financial control task, which is used by the Financial Control application to manage budgets.",
            "sameAsAttribute": "TASKID",
            "sameAsObject": "FINCNTRL"
        },
        {
            "attributeName": "MATUSETRANSID",
            "required": false,
            "persistent": true,
            "title": "Kit Use Identifier",
            "remarks": "The identifier of the MatUseTrans record for the kit item, which is used when breaking an inventory kit.",
            "sameAsAttribute": "MATUSETRANSID",
            "sameAsObject": "MATUSETRANS"
        },
        {
            "attributeName": "COURIER",
            "required": false,
            "persistent": true,
            "title": "Courier",
            "remarks": "Identifies the company that is employed to transfer the item across organizations.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LANGCODE",
            "required": true,
            "persistent": true,
            "title": "Language Code",
            "remarks": "Language code",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        },
        {
            "attributeName": "INSPECTEDQTY",
            "required": false,
            "persistent": true,
            "title": "Quantity to be Inspected",
            "remarks": "The quantity of items that must be inspected before or after transfer.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ACCEPTEDQTY",
            "required": false,
            "persistent": false,
            "title": "Quantity Accepted",
            "remarks": "The quantity of items that passed inspection.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "POSITEID",
            "required": false,
            "persistent": true,
            "title": "PO Site ID",
            "remarks": "Identifies the site where the purchase order was created.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "INSPECTEDQTYDSPLY",
            "required": false,
            "persistent": false,
            "title": "Inspected Qty",
            "remarks": "The quantity of items that were inspected.",
            "sameAsAttribute": "INSPECTEDQTY",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "REJECTQTYDISPLAY",
            "required": false,
            "persistent": false,
            "title": "Reject Quantity",
            "remarks": "The quantity of items that cannot be accepted following inspection.",
            "sameAsAttribute": "REJECTQTY",
            "sameAsObject": "MATRECTRANS"
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
            "attributeName": "ROTASSETNUM",
            "required": false,
            "persistent": true,
            "title": "Rotating Asset",
            "remarks": "Identifies the rotating asset that is associated with the item.",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "DISPLAYUNITCOST",
            "required": false,
            "persistent": false,
            "title": "Unit Cost",
            "remarks": "The cost per issue unit of the current item.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SOURCEMBO",
            "required": false,
            "persistent": false,
            "title": "Source Mbo",
            "remarks": "Identifies the source MBO for integration.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "INSPECTED",
            "required": true,
            "persistent": false,
            "title": "Inspected",
            "remarks": "Indicates whether the items have been inspected.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "POREVISIONNUM",
            "required": false,
            "persistent": true,
            "title": "PO Revision",
            "remarks": "Indicates the number of times a purchase order has been revised.",
            "sameAsAttribute": "REVISIONNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "INVUSELINEID",
            "required": false,
            "persistent": true,
            "title": "Inventory Usage Line Identifier",
            "remarks": "Identifies the inventory usage line, which can be associated with a completed transaction.",
            "sameAsAttribute": "INVUSELINEID",
            "sameAsObject": "INVUSELINE"
        },
        {
            "attributeName": "INVUSEID",
            "required": false,
            "persistent": true,
            "title": "Usage",
            "remarks": "Identifies the inventory usage record, which can be associated with a completed transaction.",
            "sameAsAttribute": "INVUSEID",
            "sameAsObject": "INVUSE"
        },
        {
            "attributeName": "INVUSELINENUM",
            "required": false,
            "persistent": true,
            "title": "Line",
            "remarks": "Identifies the inventory usage line that is associated with the current record.",
            "sameAsAttribute": "INVUSELINENUM",
            "sameAsObject": "INVUSELINE"
        },
        {
            "attributeName": "INVUSELINESPLITID",
            "required": false,
            "persistent": true,
            "title": "Unique ID",
            "remarks": "Unique ID",
            "sameAsAttribute": "INVUSELINESPLITID",
            "sameAsObject": "INVUSELINESPLIT"
        },
        {
            "attributeName": "SHIPMENTNUM",
            "required": false,
            "persistent": true,
            "title": "Shipment",
            "remarks": "The reference number for the shipment record as provided by the supplier.",
            "sameAsAttribute": "SHIPMENTNUM",
            "sameAsObject": "SHIPMENT"
        },
        {
            "attributeName": "SHIPMENTLINENUM",
            "required": false,
            "persistent": true,
            "title": "Shipment Line",
            "remarks": "The reference number for the shipment line as provided by the supplier.",
            "sameAsAttribute": "SHIPMENTLINENUM",
            "sameAsObject": "SHIPMENTLINE"
        },
        {
            "attributeName": "QTYOVERRECEIVED",
            "required": false,
            "persistent": true,
            "title": "Over Received Quantity",
            "remarks": "The quantity of items that were received in excess of the amount ordered.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COSTOVERRECEIVED",
            "required": false,
            "persistent": true,
            "title": "Over Received Amount",
            "remarks": "The amount that exceeds the cost of the ordered items.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SPLIT",
            "required": false,
            "persistent": false,
            "title": "Split",
            "remarks": "Indicates whether this record was split.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONSIGNMENT",
            "required": true,
            "persistent": true,
            "title": "Consignment",
            "remarks": "Indicates whether the transaction was created for a consignment item. This field also indicates that the consignment transaction is included in the consignment invoice, which is sent to the vendor who supplies the inventory item.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONSINVOICENUM",
            "required": false,
            "persistent": true,
            "title": "Consignment Invoice",
            "remarks": "The number that identifies the invoice that was created to pay for the inventory usage.",
            "sameAsAttribute": "INVOICENUM",
            "sameAsObject": "INVOICE"
        },
        {
            "attributeName": "CONSVENDOR",
            "required": false,
            "persistent": true,
            "title": "Consignment Vendor",
            "remarks": "The vendor that is responsible for replenishing the consignment items. Purchase orders and invoices are generated for the vendor that is specified in this field.",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "ACCEPTED",
            "required": false,
            "persistent": false,
            "title": "Accepted",
            "remarks": "Whether this asset is accepted.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REJECTED",
            "required": false,
            "persistent": false,
            "title": "Rejected",
            "remarks": "Whether this asset is rejected.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGRCVEXTERNALREFID",
            "required": false,
            "persistent": true,
            "title": "External Reference ID",
            "remarks": "The external reference identifier of the original receipt.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ASSET",
            "target": "ASSET",
            "remarks": "Relationship to the Asset table, used to find the asset for which the material is received as a direct issue. (asset.assetnum = matrectrans.assetnum). The resulting set will contain zero or one object. The assetnum is used as rotating asset when a rotable item is moved/transferred from one location to another.",
            "whereClause": "assetnum=:rotassetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETFORMATREC",
            "target": "ASSET",
            "remarks": "Relationship to get the Asset table to get the asset numbers that were created from a MatRecTrans record ",
            "whereClause": "assetnum in (select assetnum from assettrans where matrectransid=:matrectransid) ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "FROMASSET",
            "target": "ASSET",
            "remarks": "Relationship to the Asset table, used to find the rotating asset record for a given Material Tranffer record. The resulting set will contain zero or one object.",
            "whereClause": "assetnum = :rotassetnum and siteid=:fromsiteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MEARCVASSET",
            "target": "ASSET",
            "remarks": "Relationship to get the Asset",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ROTASSET",
            "target": "ASSET",
            "remarks": "Relationship to the asset records, used to find the asset records for a given assetnum and a given site.",
            "whereClause": "assetnum=:rotassetnum and siteid=:fromsiteid",
            "cardinality": null
        },
        {
            "name": "ASSETINPUT",
            "target": "ASSETINPUT",
            "remarks": "Relationship to the AssetInput table, used to find the AssetInput records for a given MatRecTrans. The resulting set will contain 1  object.",
            "whereClause": "orgid = :orgid and matrectransid = :matrectransid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTREFLINEVIEW",
            "target": "CONTRACTLINE",
            "remarks": "Relationship to the InvoiceLine table, used to find all invoice line records for a given purchase order line. (invoiceline.ponum = poline.ponum and invoiceline.siteid = poline.siteid and  invoiceline.polinenum = poline.polinenum). The resulting set will contain zero or more objects.",
            "whereClause": "contractlineid in (select contreflineid from poline where polinenum = :polinenum and ponum = :ponum and siteid = :positeid)",
            "cardinality": null
        },
        {
            "name": "DOCLINKS",
            "target": "DOCLINKS",
            "remarks": "Relationship to the doclinks table, used to find all document records for a given receipt. The resulting set will contain zero or more objects.",
            "whereClause": "(ownertable='MATRECTRANS' and ownerid=:matrectransid) or (ownertable = 'COMPANIES' and ownerid in (select companiesid from companies where company in (select vendor from po where ponum=:ponum and orgid=:orgid))) or (ownertable = 'PO' and ownerid in (select poid from po where ponum = :ponum and siteid=:siteid))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "target": "DRILLDOWN",
            "remarks": "Relationship from the MATRECTRANS to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVBALANCES",
            "target": "INVBALANCES",
            "remarks": "Relationship to the Invbalances table, used to find the balances on hand before the material is received to the bin in the storeroom. (invbalances.itemnum = matrectrans.itemnum and invbalances.location = matrectrans.tostoreloc and invbalances.binnum = matrectrans.tobin and invbalances.lotnum = matrectrans.tolot and invbalances.itemsetid = matrectrans.itemsetid). The resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and location=:tostoreloc and binnum = :tobin and lotnum = :tolot and itemsetid = :itemsetid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVENTORY",
            "target": "INVENTORY",
            "remarks": "Relationship to the Inventory table, used to find the inventory record which contains the MatRecTtrans item number and destination storeroom in a given site. (inventory.itemnum = matrectrans.itemnum and inventory.location = matrectrans.tostoreloc and inventory.siteid = matrectrans.siteid and matrectrans.itemsetid = inventory.itemsetid). The resulting set will contain one object.",
            "whereClause": "itemnum=:itemnum and location=:tostoreloc and siteid = :siteid and itemsetid = :itemsetid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVENTORYSITE",
            "target": "INVENTORY",
            "remarks": "Relationship to the Inventory table, used to find the inventory record which contains the MatRecTtrans item number and destination storeroom in a given site. (inventory.itemnum = matrectrans.itemnum and inventory.location = matrectrans.tostoreloc and inventory.siteid = matrectrans.siteid and inventory.itemsetid = matrectrans.itemsetid). The resulting set will contain one object.",
            "whereClause": "itemnum=:itemnum and location=:tostoreloc and siteid = :siteid and itemsetid = :itemsetid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NEW_INVENTORY",
            "target": "INVENTORY",
            "remarks": "Relationship to the Inventory table, used to create an empty Inventory set from the matrectrans.  The WHERE clause is:  (1>2). The resulting set will contain zero objects. This relationship is primarily used to create new Inventory records on receipt.",
            "whereClause": "1>2",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "FROMINVENTORY",
            "target": "INVENTORY",
            "remarks": "Relationship to the Inventory table, used to find the inventory record which contains the item number and from storeroom of the transfer. (inventory.itemnum = matrectrans.itemnum and inventory.itemsetid=matrectrans.itemsetid and inventory.location = matrectrans.fromstoreloc and inventory.itemsetid = matrectrans.itemsetid). The resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and location=:fromstoreloc and siteid=:fromsiteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "FROMINVENTORYSTATUS",
            "target": "INVENTORY",
            "remarks": "Relationship to the Inventory table, used to find the inventory record which contains the MatRecTtrans item number and from storeroom in a given site with the valid status. (inventory.itemnum = matrectrans.itemnum and inventory.location = matrectrans.fromstoreloc and inventory.siteid = matrectrans.fromsiteid and  inventory.itemsetid = matrectrans.itemsetid and status in ('ACTIVE', 'PENDOBS')). The resulting set will contain one object.",
            "whereClause": "itemnum=:itemnum and location=:fromstoreloc and siteid=:fromsiteid and itemsetid=:itemsetid and status in (select value from synonymdomain where domainid = 'ITEMSTATUS' and maxvalue in ('ACTIVE', 'PENDOBS') )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVLOT",
            "target": "INVLOT",
            "remarks": "Relationship to the InvLot table, used to find the lot information of the material transferred out of the storeroom in a given site. (invlot.itemnum=matrectrans.itemnum and invlot.location = matrectrans.fromstoreloc and invlot.lotnum = matrectrans.fromlot and invlot.siteid = matrectrans.fromsiteid and invlot.siteid = matrectrans.siteid and invlot.itemsetid = matrectrans.itemsetid ). The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and location = :fromstoreloc and lotnum=:fromlot and siteid = :fromsiteid and siteid=:siteid and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVLOTTOLOT",
            "target": "INVLOT",
            "remarks": "Relationship to the InvLot table, used to find the lot information of the material received to the storeroom in a given site. (invlot.itemnum=matrectrans.itemnum and invlot.location = matrectrans.tostoreloc and invlot.lotnum = matrectrans.tolot and invlot.siteid = matrectrans.siteid and invlot.itemsetid = matrectrans.itemsetid). The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and location = :tostoreloc and lotnum=:tolot and siteid=:siteid and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVOICE",
            "target": "INVOICE",
            "remarks": "Relationship to the Invoice table, used to find the invoice for the receipt. (invoice.invoicenum = matrectrans.invoicenum). The resulting set will contain zero or one object.",
            "whereClause": "invoicenum=:invoicenum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVOICELINEVIEW",
            "target": "INVOICELINE",
            "remarks": "Relationship to the InvoiceLine table, used to find all invoice line records for a given purchase order line. (invoiceline.ponum = poline.ponum and invoiceline.siteid = poline.siteid and  invoiceline.polinenum = poline.polinenum). The resulting set will contain zero or more objects.",
            "whereClause": "polinenum = :polinenum and ponum = :ponum and positeid = :positeid",
            "cardinality": null
        },
        {
            "name": "INVOICEMATCH",
            "target": "INVOICEMATCH",
            "remarks": "Relationship to the Invoicematch table, used to find all invoice matches for a given material receipts. (invoicematch.matrectransid = matrectrans.matrectransid). The resulting set will contain zero or more objects.",
            "whereClause": "matrectransid = :matrectransid and positeid = :positeid",
            "cardinality": null
        },
        {
            "name": "INVOICETRANS",
            "target": "INVOICETRANS",
            "remarks": "Relationship to the INVOICETRANS line table, used to find all INVOICETRANS line records for a given purchase order line. (polinenum in (select polinenum from prline where ponum=prline.ponum and siteid=prline.siteid and polinenum=prline.polinenum) and positeid=prline.siteid). The resulting set will contain zero or more objects.",
            "whereClause": "siteid in (select siteid from invoiceline where ponum=:ponum and polinenum=:polinenum) and invoicelinenum in (select invoicelinenum from invoiceline where ponum=:ponum and polinenum=:polinenum) and invoicenum in (select invoicenum from invoiceline where ponum=:ponum)",
            "cardinality": null
        },
        {
            "name": "INVUSE",
            "target": "INVUSE",
            "remarks": "Relationship to the InvUse table, used to find the invuse records for a transfer. The resulting set will contain zero or more objects.",
            "whereClause": "fromstoreloc=:fromstoreloc and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "SINGLEINVUSE",
            "target": "INVUSE",
            "remarks": "Relationship to the InvUse table, used to find the invuse records for a transfer. The resulting set will contain zero or more objects.",
            "whereClause": "invuseid = :invuseid",
            "cardinality": null
        },
        {
            "name": "INVUSELINE",
            "target": "INVUSELINE",
            "remarks": "Relationship to InvUseLine table, used to find corresponding receipt.",
            "whereClause": "invuselineid=:invuselineid",
            "cardinality": null
        },
        {
            "name": "INVUSELINESPLIT",
            "target": "INVUSELINESPLIT",
            "remarks": "Relationship to the InvUseLineSplit table, used to find the invuselinesplit records. The resulting set will contain zero or one object.",
            "whereClause": "invuselinesplitid=:invuselinesplitid",
            "cardinality": null
        },
        {
            "name": "ITEM",
            "target": "ITEM",
            "remarks": "Relationship to the Item table, used to find the item received or transferred. (item.itemnum = matrectrans.itemnum and item.itemsetid = matrectrans.itemsetid). The resulting set will contain one object.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMCONDITION",
            "target": "ITEMCONDITION",
            "remarks": "Relationship to the itemcondition table, used to find the itemcondition records for a given MatRecTrans record. (itemcondition.itemnum = matrectrans.itemnum and itemcondition.itemsetid=matrectrans.itemsetid and itemcondition.conditioncode=matrectrans.conditioncode). The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid and conditioncode=:conditioncode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONS",
            "target": "LOCATIONS",
            "remarks": "Relationship to the Locations table, used to find the storeroom in a given site to which the material is received or transferred. (location.location = matrectrans.tostoreloc and location.siteid = matrectrans.newsite). The resulting set will contain zero or one object.",
            "whereClause": "location=:tostoreloc and siteid = :newsite",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "FROMLOCATION",
            "target": "LOCATIONS",
            "remarks": "Relationship to the Locations table, used to find the storeroom in a given site from which the material is transferred. (location.location = matrectrans.fromstoreloc and location.siteid = matrectrans.fromsiteid). The resulting set will contain zero or one object.",
            "whereClause": "location=:fromstoreloc and siteid = :fromsiteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ALLLOCSFORSITE",
            "target": "LOCATIONS",
            "remarks": "Relationship to the Locations table, used to find the locations for this site. The resulting set will contain none or one objects.",
            "whereClause": "siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCLEADTIME",
            "target": "LOCLEADTIME",
            "remarks": "Relationship to the Locleadtime table, used to find the destination storeroom's new lead time percentage. (locleadtime.location = matrectrans.tostoreloc). The resulting set will contain zero or one object.",
            "whereClause": "location=:tostoreloc and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MATRECTRANS",
            "target": "MATRECTRANS",
            "remarks": "Relationship to the MatRecTrans table, used to find the child MatRecTrans records when the PO of this header receipt has cost distribution. (matrectrans.belongsto = matrectrans.matrectransid). The resulting set will contain zero or more objects.",
            "whereClause": "belongsto = :matrectransid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MATRECTRANS_COURIER_LABOR",
            "target": "MATRECTRANS",
            "remarks": "Relationship to the MatRecTrans table, used to find the MatRecTrans records when the internal PO of was transferred to a courier or labor location. (matrectrans.ponum=matrectrans.ponum and matrectrans.polinenum=matrectrans.polinenum and matrectrans.qtyheld > 0\") ). The resulting set will contain zero or more objects.",
            "whereClause": "ponum=:ponum and polinenum=:polinenum and qtyheld > 0 and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RETURNRECEIPTS",
            "target": "MATRECTRANS",
            "remarks": "Relationship to the MatRecTrans table, used to find all child receipts(matrectrans.receiptref = matrectrans.matrectransid)",
            "whereClause": "receiptref=:matrectransid and issuetype in (select value from synonymdomain where domainid='ISSUETYP' and maxvalue='RETURN')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RETURNSHIPRECEIPTS",
            "target": "MATRECTRANS",
            "remarks": "Relationship to the non-persistent ReceiptInput table, used to create shipment receipt void transactions for a given shipment. (No where clause). The resulting set will contain zero objects.  Note: This relationship is used only for the Shipment Receiving application, Select Shipment Receipts to Void (button) page to display receipt transactions for a given shipment.",
            "whereClause": "receiptref=:matrectransid and issuetype in (select value from synonymdomain where domainid='ISSUETYP' and maxvalue='SHIPRETURN')",
            "cardinality": null
        },
        {
            "name": "RETURNVOIDRECEIPTS",
            "target": "MATRECTRANS",
            "remarks": "Relationship to the MatRecTrans table, used to find all Returned and Voided receipts.",
            "whereClause": "receiptref=:matrectransid and issuetype in (select value from synonymdomain where domainid='ISSUETYP' and maxvalue in ('RETURN','VOIDRECEIPT'))",
            "cardinality": null
        },
        {
            "name": "RETURNVOIDSHIPRECEIPTS",
            "target": "MATRECTRANS",
            "remarks": "Relationship to the MatRecTrans table, used to find all child receipts(matrectrans.receiptref = matrectrans.matrectransid)",
            "whereClause": "receiptref=:matrectransid and issuetype in (select value from synonymdomain where domainid='ISSUETYP' and maxvalue in ('SHIPRETURN','VOIDSHIPRECEIPT'))",
            "cardinality": null
        },
        {
            "name": "ORIGINALRECEIPT",
            "target": "MATRECTRANS",
            "remarks": "Relationship to the MATRECTRANS table, used to find the MATRECTRANS records. The resulting set will contain one object.",
            "whereClause": "matrectransid = :receiptref and issuetype in (select value from synonymdomain where domainid='ISSUETYP' and maxvalue='RECEIPT')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ORIGINALSHIPTRANSFER",
            "target": "MATRECTRANS",
            "remarks": "Relationship to the MATRECTRANS table, used to find the MATRECTRANS records. The resulting set will contain one object.",
            "whereClause": "matrectransid = :receiptref and issuetype in (select value from synonymdomain where domainid='ISSUETYP' and maxvalue='SHIPTRANSFER')",
            "cardinality": null
        },
        {
            "name": "VOIDRECEIPTS",
            "target": "MATRECTRANS",
            "remarks": "Relationship to the MatRecTrans table, used to find all voided receipts.",
            "whereClause": "receiptref=:matrectransid and issuetype in (select value from synonymdomain where domainid='ISSUETYP' and maxvalue='VOIDRECEIPT')",
            "cardinality": null
        },
        {
            "name": "PO",
            "target": "PO",
            "remarks": "Relationship to the PO table, used to find the purchase order for which the material is received or transferred.(po.ponum = matrectrans.ponum). The resulting set will contain zero or one object.",
            "whereClause": "ponum=:ponum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POREV",
            "target": "PO",
            "remarks": "Relationship to the PO table, used to find the purchase order for which the material is received or transferred.(po.ponum = matrectrans.ponum). The resulting set will contain zero or one object.",
            "whereClause": "ponum=:ponum and siteid=:positeid and revisionnum=:porevisionnum",
            "cardinality": null
        },
        {
            "name": "POLINE",
            "target": "POLINE",
            "remarks": "Relationship to the POLine table, used to find the purchase order line for which the material is received or transferred. (poline.ponum = matrectrans.ponum and polinenum = matrectrans.polinenum). The resulting set will contain zero or one object.",
            "whereClause": "ponum=:ponum and polinenum=:polinenum and siteid=:positeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POLINEVIEW",
            "target": "POLINE",
            "remarks": "Relationship to the InvoiceLine table, used to find all invoice line records for a given purchase order line. (invoiceline.ponum = poline.ponum and invoiceline.siteid = poline.siteid and  invoiceline.polinenum = poline.polinenum). The resulting set will contain zero or more objects.",
            "whereClause": "polinenum = :polinenum and ponum = :ponum and siteid = :positeid",
            "cardinality": null
        },
        {
            "name": "PRLINEVIEW",
            "target": "PRLINE",
            "remarks": "Relationship to the InvoiceLine table, used to find all invoice line records for a given purchase order line. (invoiceline.ponum = poline.ponum and invoiceline.siteid = poline.siteid and  invoiceline.polinenum = poline.polinenum). The resulting set will contain zero or more objects.",
            "whereClause": "polinenum = :polinenum and ponum = :ponum and siteid = :positeid",
            "cardinality": null
        },
        {
            "name": "RFQLINEVIEW",
            "target": "RFQLINE",
            "remarks": "Relationship to the InvoiceLine table, used to find all invoice line records for a given purchase order line. (invoiceline.ponum = poline.ponum and invoiceline.siteid = poline.siteid and  invoiceline.polinenum = poline.polinenum). The resulting set will contain zero or more objects.",
            "whereClause": "polinenum = :polinenum and ponum = :ponum and siteid = :positeid",
            "cardinality": null
        },
        {
            "name": "SHIPMENTLINE",
            "target": "SHIPMENTLINE",
            "remarks": "Relationship to the MatRecTrans table, used to find the ShipmentLine record for the given shipmentnum, shipmentlienum and siteid. The resulting set will contain zero or more objects.",
            "whereClause": "shipmentnum=:shipmentnum and shipmentlinenum=:shipmentlinenum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "VIEWCONTINPUT",
            "target": "VIEWCONTINPUT",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "target": "VIEWWOPMS",
            "remarks": "Relationship from the MATRECTRANS to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKORDER",
            "target": "WORKORDER",
            "remarks": "Relationship to the WorkOrder table, used to find the work order for which the material is received as a direct issue. (workorder.wonum = matrectrans.wonum). The resulting set will contain zero or one object. WoNum is a non-persistent column for the MatRecTrans object. See the attribute defined in psdi.app.inventory.MatRecTrans for more information.",
            "whereClause": "wonum=:refwo and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "NONCONSMATRECTRANS",
            "source": "INVENTORY",
            "remarks": "Relationship to the MatRecTrans table, used to find the receipts/transfers and shiptransfer for non-consignment items for a given inventory record.  The resulting set will contain zero or more objects.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and issuetype in (select value from synonymdomain where domainid ='ISSUETYP' and maxvalue in ('TRANSFER', 'SHIPTRANSFER')) and fromstoreloc=:location and fromsiteid=:siteid and consignment=0",
            "cardinality": null
        },
        {
            "name": "MATRECINVOICE",
            "source": "INVENTORY",
            "remarks": "Relationship to the MatRecTrans table, used to find the receipts/transfers and shiptransfer for consignment items for a given inventory record. (matrectrans.itemnum = inventory.itemnum and matrectrans.tostoreloc = inventory.location and matrectrans.itemsetid = inventory.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and issuetype in (select value from synonymdomain where domainid ='ISSUETYP' and maxvalue in ('TRANSFER', 'SHIPTRANSFER')) and fromstoreloc=:location and fromsiteid=:siteid and consignment=1 and consinvoicenum is not null",
            "cardinality": null
        },
        {
            "name": "MATRECNOINVOICE",
            "source": "INVENTORY",
            "remarks": "Relationship to the MatRecTrans table, used to find the receipts/transfers and shiptransfer for consignment items for a given inventory record. (matrectrans.itemnum = inventory.itemnum and matrectrans.tostoreloc = inventory.location and matrectrans.itemsetid = inventory.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and issuetype in (select value from synonymdomain where domainid ='ISSUETYP' and maxvalue in ('TRANSFER', 'SHIPTRANSFER')) and fromstoreloc=:location and fromsiteid=:siteid and consignment=1 and consinvoicenum is null",
            "cardinality": null
        },
        {
            "name": "MATRECTRANS",
            "source": "INVENTORY",
            "remarks": "Relationship to the MatRecTrans table, used to find the receipts/transfers for a given inventory record. (matrectrans.itemnum = inventory.itemnum and matrectrans.tostoreloc = inventory.location and matrectrans.itemsetid = inventory.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid and ((issuetype in (select value from synonymdomain where domainid ='ISSUETYP' and maxvalue in ('TRANSFER')) and tostoreloc = :location and siteid=:siteid and fromstoreloc is not null) or (issuetype not in ( select value from synonymdomain where domainid='ISSUETYP' and maxvalue ='TRANSFER') and tostoreloc = :location and siteid=:siteid) or (fromstoreloc=:location and fromsiteid=:siteid) or (issuetype in (select value from synonymdomain where domainid='ISSUETYP' and maxvalue='TRANSFER') and rotassetnum is not null and tostoreloc is not null and fromstoreloc is null))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "HOLDINGBALANCE",
            "source": "INVENTORY",
            "remarks": "Relationship to the MatRecTrans table, used to find the balances in a holding location for a given inventory item. The resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and tostoreloc in (select location from locations where type in (select value from synonymdomain where domainid='LOCTYPE' and maxvalue='HOLDING') and siteid = :siteid) and (fromstoreloc not in (select location from locations where type in (select value from synonymdomain where domainid='LOCTYPE' and maxvalue='HOLDING') and siteid = :siteid) or fromstoreloc is null) and status not in ( select value from synonymdomain where domainid='RECEIPTSTATUS' and maxvalue ='COMP') and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MATRECTRANS",
            "source": "INVOICE",
            "remarks": "Relationship to the MatRecTrans table, used to find all parent material receipts that have been used on a given invoice. (invoice.invoicenum = matrectrans.invoicenum and matrectrans.belongsto is null). The resulting set will contain zero or more objects.",
            "whereClause": "invoicenum = :invoicenum and belongsto is null and positeid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MATRECTRANSVIEW",
            "source": "INVOICE",
            "remarks": "Relationship to the MATRECTRANS line table, used to find all MATRECTRANS line records for a given INVOICE. The resulting set will contain zero or more objects.",
            "whereClause": "exists (select 1 from invoiceline where matrectrans.porevisionnum = invoiceline.porevisionnum and matrectrans.ponum = invoiceline.ponum and matrectrans.polinenum = invoiceline.polinenum and matrectrans.siteid = invoiceline.positeid and invoiceline.invoicenum = :invoicenum and invoiceline.siteid=:siteid)",
            "cardinality": null
        },
        {
            "name": "POMATRECTRANS",
            "source": "INVOICE",
            "remarks": "Relationship to the MatRecTrans table, used to find all parent material receipts created against the ponum used for this invoice. (invoice.ponum = matrectrans.ponum and matrectrans.belongsto is null). The resulting set will contain zero or more objects.",
            "whereClause": "ponum = :ponum and issuetype not in (select value from synonymdomain where domainid = 'ISSUETYP' and maxvalue in ('INVOICE', 'TRANSFER')) and status in (select value from synonymdomain where domainid = 'RECEIPTSTATUS' and maxvalue = 'COMP') and belongsto is null and ((exists (select value from  synonymdomain where domainid = 'INVTYPE' and maxvalue in ('INVOICE','DEBIT') and value = :documenttype)) or (exists (select value from synonymdomain where domainid = 'INVTYPE' and maxvalue = 'CREDIT' and value = :documenttype) and quantity < 0)) and ponum in (select ponum from poline where poline.ponum = :ponum and poline.siteid = :positeid and poline.scheduleid is null) and positeid = :positeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POMATRECTRANSVOID",
            "source": "INVOICE",
            "remarks": "Relationship to the MatRecTrans table, used to find all parent material receipts created against the ponum used for this invoice. The resulting set will contain zero or more objects.",
            "whereClause": "(not exists (select itemnum from inventory where location=matrectrans.fromstoreloc and siteid=matrectrans.fromsiteid and itemnum=matrectrans.itemnum and itemsetid=matrectrans.itemsetid and consignment=:yes) and not exists (select itemnum from inventory where location=matrectrans.tostoreloc and siteid=matrectrans.siteid and itemnum=matrectrans.itemnum and itemsetid=matrectrans.itemsetid and consignment=:yes) and ponum = :ponum and issuetype not in (:&synonymlist&_issuetyp[VOIDRECEIPT]) and (issuetype in (:&synonymlist&_issuetyp[RECEIPT,RETURN]) and matrectransid not in (select receiptref from matrectrans where issuetype in (:&synonymlist&_issuetyp[VOIDRECEIPT])  and ponum = :ponum))) AND (ponum = :ponum and issuetype not in (:&synonymlist&_issuetyp[INVOICE,TRANSFER]) and status in (:&synonymlist&_receiptstatus[COMP]) and belongsto is null and ((exists (select value from  synonymdomain where domainid = 'INVTYPE' and maxvalue in ('INVOICE','DEBIT') and value = :documenttype)) or (exists (select value from synonymdomain where domainid = 'INVTYPE' and maxvalue = 'CREDIT' and value = :documenttype) and quantity < 0)) and ponum in (select ponum from poline where poline.ponum = :ponum and poline.siteid = :positeid and poline.scheduleid is null) and positeid = :positeid)",
            "cardinality": null
        },
        {
            "name": "REVMATRECTRANS",
            "source": "INVOICE",
            "remarks": "Relationship to the MatRecTrans table for a given invoice",
            "whereClause": "invoicenum = :invoicenum and fromsiteid=:siteid",
            "cardinality": null
        },
        {
            "name": "MATRECTRANSVIEW",
            "source": "INVOICELINE",
            "remarks": "Relationship to the MATRECTRANS line table, used to find all MATRECTRANS line records for a given  INVOICE line. (polinenum in (select polinenum from prline where ponum=prline.ponum and siteid=prline.siteid and polinenum=prline.polinenum) and positeid=prline.siteid). The resulting set will  contain zero or more objects.",
            "whereClause": "porevisionnum in (select porevisionnum from invoiceline where invoicenum=:invoicenum and positeid=:positeid and polinenum=:polinenum) and polinenum in (select polinenum from invoiceline where invoicenum=:invoicenum and positeid=:positeid and polinenum=:polinenum) and  ponum in (select ponum from invoiceline where invoicenum=:invoicenum and positeid=:positeid) and positeid  in (select positeid from invoiceline where invoicenum=:invoicenum and positeid=:positeid)",
            "cardinality": null
        },
        {
            "name": "MATRECTRANS",
            "source": "INVOICEMATCH",
            "remarks": "Relationship to the MatRecTrans table, used to find all material receipts for a given invoice match line. (invoicematch.matrectransid = matrectrans.matrectransid). The resulting set will contain zero or more objects.",
            "whereClause": "matrectransid = :matrectransid and positeid = :positeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MATRECTRANS",
            "source": "INVUSE",
            "remarks": "Relationship to the InvUse table, used to find all inventory TRANSFER transactions.",
            "whereClause": "issuetype in ( select value from synonymdomain where domainid ='ISSUETYP' and maxvalue in ('TRANSFER', 'STAGETRANSFER', 'SHIPTRANSFER','SHIPCANCEL', 'SHIPRECEIPT', 'SHIPRETURN', 'VOIDSHIPRECEIPT'))  and invuseid=:invuseid",
            "cardinality": null
        },
        {
            "name": "MATRECSHIPRECEIPT",
            "source": "INVUSELINE",
            "remarks": "Relationship to matrectrans table, used to find matrectrans records for the given invuselineid and SHIPRECEIPT issuetype. The resulting set will contain zero or one object.",
            "whereClause": "invuselineid=:invuselineid and issuetype in (select value from synonymdomain where domainid='ISSUETYP' and maxvalue='SHIPRECEIPT')",
            "cardinality": null
        },
        {
            "name": "MATRECSHIPTRANSFER",
            "source": "INVUSELINE",
            "remarks": "Relationship to the InvUseline table, used to find the MatRecTrans record for the given invuselineid and SHIPTRANSFER issue type. The resulting set will contain zero or more objects.",
            "whereClause": "invuselineid=:invuselineid and issuetype in (select value from synonymdomain where domainid='ISSUETYP' and maxvalue='SHIPTRANSFER')",
            "cardinality": null
        },
        {
            "name": "MATRECSTAGETRANSFER",
            "source": "INVUSELINE",
            "remarks": "Relationship to the InvUseline table, used to find the MatRecTrans record for the given invuselineid and STAGETRANSFER issue type. The resulting set will contain zero or more objects.",
            "whereClause": "invuselineid=:invuselineid and issuetype in (select value from synonymdomain where domainid='ISSUETYP' and maxvalue='STAGETRANSFER')",
            "cardinality": null
        },
        {
            "name": "ITEM",
            "source": "ITEM",
            "remarks": "Matrectrans relationship to item",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MATRECTRANSIN",
            "source": "LOCATIONS",
            "remarks": "Relationship to the MatRecTrans table, used to create an empty set of material transfer transactions out of a given storeroom location. (1>2). The resulting set will contain zero objects. This relationship is primarily used for the Transfer out tab of the Issues and Transfers application. An empty MatRecTrans set is required when the tab is initialized.",
            "whereClause": "1 > 2 and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MATRECTRANSIN2",
            "source": "LOCATIONS",
            "remarks": "Relationship to the MatRecTrans table, used to find the matrectrans records for all PO items in transit to the the storeroom location that do not require inspection.  The resulting set will contain one or more objects.",
            "whereClause": "matrectrans.ponum in (select ponum from poline,item b where poline.storeloc=:location and matrectrans.ponum=poline.ponum and matrectrans.polinenum=poline.polinenum and poline.itemnum = b.itemnum and poline.itemsetid=b.itemsetid and b.rotating = 0 and exists(select 1 from po where po.ponum=poline.ponum and po.internal= 1 and po.inspectionrequired= 0) and poline.tositeid = :siteid) and exists(select 1 from poline where ponum=matrectrans.ponum and tositeid=matrectrans.siteid and polinenum = matrectrans.polinenum and inspectionrequired = 0) and matrectrans.courier is not null and matrectrans.tostoreloc is null and matrectrans.issuetype in (select value from synonymdomain where domainid='ISSUETYP' and maxvalue = 'TRANSFER') and ( not exists (select 1 from matrectrans mat2 where mat2.receiptref = matrectrans.matrectransid) or (select sum(quantity) from matrectrans mat2 where mat2.receiptref = matrectrans.matrectransid) < matrectrans.quantity )",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "MATRECTRANSMOVEIN",
            "source": "LOCATIONS",
            "remarks": "Relationship to the MatRecTrans table, used to create an empty set of material transfer transactions to record the moving of a piece of rotating asset from a non-inventory location to an inventory location. (2<1). The resulting set will contain zero objects. This relationship is primarily used for the Move Asset action where a new MatRecTrans record is created for the move of rotating asset from a non-invneotry location to an inventory location. An inventory location refers to a location of type of STOREROOM, LABOR, or COURIER.",
            "whereClause": "2<1 and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MATRECTRANSOUT",
            "source": "LOCATIONS",
            "remarks": "Relationship to the MatRecTrans table, used to create an empty set of material transfer transactions out of a given storeroom location. The where clause is (1>2). The resulting set will contain zero objects. This relationship is primarily used for the Transfer out tab of the Issues and Transfers application. An empty MatRecTrans set is required when the tab is initialized.",
            "whereClause": "1>2 and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MATRECTRANS",
            "source": "MATRECTRANS",
            "remarks": "Relationship to the MatRecTrans table, used to find the child MatRecTrans records when the PO of this header receipt has cost distribution. (matrectrans.belongsto = matrectrans.matrectransid). The resulting set will contain zero or more objects.",
            "whereClause": "belongsto = :matrectransid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MATRECTRANS_COURIER_LABOR",
            "source": "MATRECTRANS",
            "remarks": "Relationship to the MatRecTrans table, used to find the MatRecTrans records when the internal PO of was transferred to a courier or labor location. (matrectrans.ponum=matrectrans.ponum and matrectrans.polinenum=matrectrans.polinenum and matrectrans.qtyheld > 0\") ). The resulting set will contain zero or more objects.",
            "whereClause": "ponum=:ponum and polinenum=:polinenum and qtyheld > 0 and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RETURNRECEIPTS",
            "source": "MATRECTRANS",
            "remarks": "Relationship to the MatRecTrans table, used to find all child receipts(matrectrans.receiptref = matrectrans.matrectransid)",
            "whereClause": "receiptref=:matrectransid and issuetype in (select value from synonymdomain where domainid='ISSUETYP' and maxvalue='RETURN')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RETURNSHIPRECEIPTS",
            "source": "MATRECTRANS",
            "remarks": "Relationship to the non-persistent ReceiptInput table, used to create shipment receipt void transactions for a given shipment. (No where clause). The resulting set will contain zero objects.  Note: This relationship is used only for the Shipment Receiving application, Select Shipment Receipts to Void (button) page to display receipt transactions for a given shipment.",
            "whereClause": "receiptref=:matrectransid and issuetype in (select value from synonymdomain where domainid='ISSUETYP' and maxvalue='SHIPRETURN')",
            "cardinality": null
        },
        {
            "name": "RETURNVOIDRECEIPTS",
            "source": "MATRECTRANS",
            "remarks": "Relationship to the MatRecTrans table, used to find all Returned and Voided receipts.",
            "whereClause": "receiptref=:matrectransid and issuetype in (select value from synonymdomain where domainid='ISSUETYP' and maxvalue in ('RETURN','VOIDRECEIPT'))",
            "cardinality": null
        },
        {
            "name": "RETURNVOIDSHIPRECEIPTS",
            "source": "MATRECTRANS",
            "remarks": "Relationship to the MatRecTrans table, used to find all child receipts(matrectrans.receiptref = matrectrans.matrectransid)",
            "whereClause": "receiptref=:matrectransid and issuetype in (select value from synonymdomain where domainid='ISSUETYP' and maxvalue in ('SHIPRETURN','VOIDSHIPRECEIPT'))",
            "cardinality": null
        },
        {
            "name": "ORIGINALRECEIPT",
            "source": "MATRECTRANS",
            "remarks": "Relationship to the MATRECTRANS table, used to find the MATRECTRANS records. The resulting set will contain one object.",
            "whereClause": "matrectransid = :receiptref and issuetype in (select value from synonymdomain where domainid='ISSUETYP' and maxvalue='RECEIPT')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ORIGINALSHIPTRANSFER",
            "source": "MATRECTRANS",
            "remarks": "Relationship to the MATRECTRANS table, used to find the MATRECTRANS records. The resulting set will contain one object.",
            "whereClause": "matrectransid = :receiptref and issuetype in (select value from synonymdomain where domainid='ISSUETYP' and maxvalue='SHIPTRANSFER')",
            "cardinality": null
        },
        {
            "name": "VOIDRECEIPTS",
            "source": "MATRECTRANS",
            "remarks": "Relationship to the MatRecTrans table, used to find all voided receipts.",
            "whereClause": "receiptref=:matrectransid and issuetype in (select value from synonymdomain where domainid='ISSUETYP' and maxvalue='VOIDRECEIPT')",
            "cardinality": null
        },
        {
            "name": "MATRECTRANS",
            "source": "PO",
            "remarks": "Relationship to the MatRecTrans table, used to find all material receipt transaction records for a given purchase order. (matrectrans.ponum = po.ponum). The resulting set will contain zero or more objects.",
            "whereClause": "ponum = :ponum and positeid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "NOCOSTMATRECTRANS",
            "source": "PO",
            "remarks": "Relationship to the MatRecTrans table, used to find all material receipt transactions which has no parent and quantity is greater than 0. (matrectrans.ponum = po.ponum and matrectrans.belongsto is null and matrectrans.quantity > 0). The resulting set will contain zero or more objects. Note: This relationship is used only for the Receiving application, Select Items for Return (button) page to display material receipt transactions for a given purchase order.",
            "whereClause": "ponum = :ponum and belongsto is null and quantity > 0 and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PARENTMATRECTRANS",
            "source": "PO",
            "remarks": "Relationship to the MatRecTrans table, used to find all parent material receipt transactions for a given purchase order. (matrectrans.ponum = po.ponum and matrectrans.belongsto is null). The resulting set will contain zero or more objects. Note: This relationship is used only for the Receiving application to display the main page of material receipts.",
            "whereClause": "ponum = :ponum and belongsto is null and positeid=:siteid and status not in (select value from synonymdomain where domainid='RECEIPTSTATUS' and maxvalue='TRANSFER')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECEIPTTYPEMATREC",
            "source": "PO",
            "remarks": "Relationship to the MatRecTrans table, used to find all records of type RECEIPT and TRANSFER that do not have a fromstoreloc of type HOLDING and that are not receipts of rotating assets (po.ponum = matrectrans.ponum  and po.siteid = matrectrans.siteid and matrectrans.status is not null and issuetype in (select value from synonymdomain where domainid='ISSUETYP' and maxvalue in ('TRANSFER','RECEIPT')) and not exists (select locations.location from locations where locations.location=matrectrans.fromstoreloc and locations.siteid=matrectrans.fromsiteid and locations.type in (select value from synonymdomain where domainid='LOCTYPE' and maxvalue='HOLDING'))).",
            "whereClause": "ponum=:ponum and positeid=:siteid and status is not null and issuetype in (select value from synonymdomain where domainid='ISSUETYP' and maxvalue in ('TRANSFER','RECEIPT')) and not exists (select locations.location from locations where locations.location=matrectrans.fromstoreloc and locations.siteid=matrectrans.fromsiteid and locations.type in (select value from synonymdomain where domainid='LOCTYPE' and maxvalue='HOLDING'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POMATRECTRANS",
            "source": "PO",
            "remarks": "Relationship to the matrectrans table, used to find the matrectrans records for this PO. The resulting set will contain one or more objects.",
            "whereClause": "ponum = :ponum and positeid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVOICETYPEMATREC",
            "source": "PO",
            "remarks": "Relationship to the MatRecTrans table, used to find all receipts of type INVOICE (po.ponum = matrectrans.ponum and matrectrans.issuetype=INVOICE).",
            "whereClause": "ponum=:ponum and porevisionnum=:revisionnum and issuetype in (select value from synonymdomain where domainid='ISSUETYP' and maxvalue='INVOICE')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "UNAPPROVEDMATRECTRANS",
            "source": "PO",
            "remarks": "Relationship to the MatRecTrans table, used to find all parent material receipt transactions that have not been approved for a given purchase order. (matrectrans.ponum = po.ponum and matrectrans.belongsto is null and po.status = WAPPR and matrectrans.itemsetid = po.itemsetid). The resulting set will contain zero or more objects. Note: This relationship is used only for the Receiving application, Approve Receipts action to display records based on MatRecTrans table with WAPPR status of purchase orders.",
            "whereClause": "ponum=:ponum and belongsto is null and (fromstoreloc is not null or itemnum is null or itemnum in (select item.itemnum from item where matrectrans.itemnum=item.itemnum)) and status in (select value from synonymdomain where maxvalue='WINSP' and domainid = 'RECEIPTSTATUS') and positeid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MATRECTRANS",
            "source": "POLINE",
            "remarks": "Relationship to the MatRecTrans table, used to find the material receipts that were created for a purchase order line. (matrectrans.ponum = poline.ponum and matrectrans.polinenum = poline.polinenum). The resulting set will contain zero or more objects.",
            "whereClause": "ponum = :ponum and polinenum = :polinenum and belongsto is null and positeid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MATRECTRANS_COURIER",
            "source": "POLINE",
            "remarks": "Relationship to the MatRecTrans table, used to find the matrectrans records for the PONUM that were created for a courier transfer. The resulting set will contain one or more objects.",
            "whereClause": "ponum=:ponum and courier is not null and polinenum = :polinenum and siteid=:tositeid and status in (select value from synonymdomain where domainid = 'ISSUETYP' and maxvalue='TRANSFER')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MATRECTRANS_COURIER_LABOR",
            "source": "POLINE",
            "remarks": "Relationship to the MatRecTrans table, used to find the MatRecTrans records when the internal PO was transferred to a courier or labor location and the courier/labor still holds the material. (poline.ponum=matrectrans.ponum and poline.polinenum=matrectrans.polinenum and poline.storeloc != matrectrans.tostoreloc and matrectrans.qtyheld > 0\") ). The resulting set will contain zero or more objects.",
            "whereClause": "ponum = :ponum and polinenum = :polinenum and qtyheld > 0 and tostoreloc != :storeloc and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MATRECTRANS",
            "source": "PR",
            "remarks": "Relationship to the MATRECTRANS line table, used to find all MATRECTRANS line records for a given purchase requisition. (polinenum in (select polinenum from prline where prnum=prline.prnum and siteid=prline.siteid) and positeid = pr.siteid). The resulting set will contain zero or more objects.",
            "whereClause": "polinenum in (select polinenum from prline where prnum=:prnum and siteid=:siteid) and ponum in (select ponum from prline where prnum=:prnum and siteid=:siteid) and positeid = :siteid",
            "cardinality": null
        },
        {
            "name": "MATRECTRANS",
            "source": "PRLINE",
            "remarks": "Relationship to the MATRECTRANS line table, used to find all MATRECTRANS line records for a given purchase requisition line. (polinenum in (select polinenum from prline where ponum=prline.ponum and siteid=prline.siteid and polinenum=prline.polinenum) and positeid=prline.siteid). The resulting set will contain zero or more objects.",
            "whereClause": "polinenum in (select polinenum from prline where ponum=:ponum and siteid=:siteid and polinenum=:polinenum) and ponum in (select ponum from prline where prnum=:prnum and siteid=:siteid) and positeid = :siteid",
            "cardinality": null
        },
        {
            "name": "ROTINSPECTIONLINEDIALOG",
            "source": "ROTINSPECTION",
            "remarks": "Relationship for the Change Inspection Status Dialog.  This relationship gets all of the assets that are waiting inspection for this shipmentnum.",
            "whereClause": "shipmentnum = :shipmentnum and matrectransid in (select receiptref from matrectrans where shipmentnum = :shipmentnum and belongsto is null and status in (select value from synonymdomain where maxvalue='WINSP' and domainid = 'RECEIPTSTATUS')) and tostoreloc = :tostoreloc and siteid = :siteid and itemnum = :itemnum",
            "cardinality": null
        },
        {
            "name": "PARENTMATRECTRANS",
            "source": "SHIPMENT",
            "remarks": "Relationship to the Shipment table, used to find the MatRecTrans record for the given shipmentnum and SHIPTRANSFER issue type. The resulting set will contain zero or more objects.",
            "whereClause": "shipmentnum=:shipmentnum and fromsiteid=:fromsiteid and issuetype in (select value from synonymdomain where domainid='ISSUETYP' and maxvalue='SHIPRECEIPT')",
            "cardinality": null
        },
        {
            "name": "PARENTSHIPMENTLINE",
            "source": "SHIPMENT",
            "remarks": "Relationship to the MatRecTrans table, used to find all parent material receipt transactions for a given shipment.",
            "whereClause": "shipmentnum =:shipmentnum and positeid =:fromsiteid and issuetype not in (select value from synonymdomain where domainid='ISSUETYP' and maxvalue='SHIPTRANSFER')",
            "cardinality": null
        },
        {
            "name": "RECEIPTTYPEMATREC",
            "source": "SHIPMENT",
            "remarks": "Relationship to the MatRecTrans table, used to find all records of type SHIPRECEIPT and TRANSFER that do not have a fromstoreloc of type HOLDING and that are not receipts of rotating assets (shipment.shipmentnum = matrectrans.shipmentnum  and shipment.siteid = matrectrans.siteid and matrectrans.status is not null and issuetype in (select value from synonymdomain where domainid='ISSUETYP' and maxvalue in ('TRANSFER','SHIPRECEIPT')) and not exists (select locations.location from locations where locations.location=matrectrans.fromstoreloc and locations.siteid=matrectrans.fromsiteid and locations.type in (select value from synonymdomain where domainid='LOCTYPE' and maxvalue='HOLDING'))).",
            "whereClause": "shipmentnum=:shipmentnum and siteid=:siteid and status is not null and issuetype in (select value from synonymdomain where domainid='ISSUETYP' and maxvalue in ('TRANSFER','SHIPRECEIPT')) and  not exists (select locations.location from locations where locations.location=matrectrans.fromstoreloc and locations.siteid=matrectrans.fromsiteid and  locations.type in (select value from synonymdomain where domainid='LOCTYPE' and maxvalue='HOLDING'))",
            "cardinality": null
        },
        {
            "name": "ROTINSPECTIONALLTRANSFERS",
            "source": "SHIPMENT",
            "remarks": "Relationship to the MATRECTRANS table, used to find the MATRECTRANS records. The resulting set will contain one or many object.",
            "whereClause": "shipmentnum = :shipmentnum  and matrectransid in (select receiptref from matrectrans where shipmentnum = :shipmentnum  and belongsto is null and status in (select value from synonymdomain where maxvalue='WINSP' and domainid = 'RECEIPTSTATUS'))",
            "cardinality": null
        },
        {
            "name": "ROTINSPECTIONSTOREROOMS",
            "source": "SHIPMENT",
            "remarks": "Relationship used to find the storerooms for a given shipment.  Returns 1 or more records.",
            "whereClause": "shipmentnum = :shipmentnum and belongsto is null and itemnum in (select item.itemnum from item where matrectrans.itemnum=item.itemnum and rotating=:yes) and status in (select value from synonymdomain where maxvalue='WINSP' and domainid = 'RECEIPTSTATUS') and positeid=:fromsiteid",
            "cardinality": null
        },
        {
            "name": "UNAPPROVEDSHIPMENT",
            "source": "SHIPMENT",
            "remarks": "Relationship to the MatRecTrans table, used to find all parent material receipt transactions that have not been inspected for a given shipment.  The resulting set will contain zero or more objects. Note: This relationship is used only for theShipment Receiving application, Change Inspection Status action to display records based on MatRecTrans table with WINSP status.",
            "whereClause": "shipmentnum=:shipmentnum and belongsto is null and (fromstoreloc is not null and itemnum in (select item.itemnum from item where matrectrans.itemnum=item.itemnum and rotating=:no)) and status in (select value from synonymdomain where maxvalue='WINSP' and domainid = 'RECEIPTSTATUS') and positeid=:fromsiteid",
            "cardinality": null
        }
    ]
}