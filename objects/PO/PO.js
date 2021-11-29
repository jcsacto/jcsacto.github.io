mos = {
    "objectName": "PO",
    "className": "psdi.app.po.POSet",
    "description": "The PO Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "POID",
    "primaryKeyColumns": [
        "SITEID",
        "PONUM",
        "REVISIONNUM"
    ],
    "logicalRelationships": [
        {
            "objectName": "PO",
            "targetObject": "ASSETTRANS",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "POSITEID, PONUM, POREVISIONNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PO associated with move.",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "ASSETTRANS",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "SITEID, PONUM, POREVISIONNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 2",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "ASSETTRANS",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "TOSITEID, PONUM, POREVISIONNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 3",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "INVOICE",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "POSITEID, PONUM, CONTRACTREFREV",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 4",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "INVOICE",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "POSITEID, PONUM, SCHEDULEREV",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 5",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "INVOICE",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "SITEID, PONUM, CONTRACTREFREV",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 6",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "INVOICE",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "SITEID, PONUM, SCHEDULEREV",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 7",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "INVOICE",
            "parentKeys": "SITEID, PONUM",
            "targetKeys": "POSITEID, PONUM",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "PO on an Invoice",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "INVOICELINE",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "POSITEID, PONUM, CONTRACTREFREV",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 8",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "INVOICELINE",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "POSITEID, PONUM, POREVISIONNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 9",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "INVOICELINE",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "SITEID, PONUM, CONTRACTREFREV",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 10",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "INVOICELINE",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "SITEID, PONUM, POREVISIONNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 11",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "INVOICEMATCH",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "POSITEID, PONUM, POREVISIONNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 12",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "INVOICEMATCH",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "SITEID, PONUM, POREVISIONNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 13",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "INVRESERVE",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "SITEID, PONUM, POREVISIONNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 14",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "INVRESERVE",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "STORELOCSITEID, PONUM, POREVISIONNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 15",
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
            "objectName": "PO",
            "targetObject": "LABTRANS",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "SITEID, PONUM, POREVISIONNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 20",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "LABTRANS",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "SITEID, PONUM, REVISIONNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 21",
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
            "objectName": "PO",
            "targetObject": "MATUSETRANS",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "SITEID, PONUM, POREVISIONNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 25",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "MATUSETRANS",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "TOSITEID, PONUM, POREVISIONNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 26",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "PO",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "SITEID, ORIGINALPONUM, CONTRACTREFREV",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 27",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "PO",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "SITEID, ORIGINALPONUM, CONTRELEASESEQ",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 28",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "PO",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "SITEID, ORIGINALPONUM, REVISIONNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 29",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "PO",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "STORELOCSITEID, ORIGINALPONUM, CONTRACTREFREV",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 30",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "PO",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "STORELOCSITEID, ORIGINALPONUM, CONTRELEASESEQ",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 31",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "PO",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "STORELOCSITEID, ORIGINALPONUM, REVISIONNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 32",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "PO",
            "parentKeys": "SITEID, PONUM",
            "targetKeys": "SITEID, ORIGINALPONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Original PO",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "POCOST",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "SITEID, PONUM, REVISIONNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 33",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "POECOMSTATUS",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "SITEID, PONUM, REVISIONNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Purchase Order",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "POLINE",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "SITEID, PONUM, CONTRACTREFREV",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 35",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "POLINE",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "SITEID, PONUM, REVISIONNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Lines of the Purchase Order",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "POLINE",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "TOSITEID, PONUM, CONTRACTREFREV",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 37",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "POLINE",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "TOSITEID, PONUM, REVISIONNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 38",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "POSTATUS",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "SITEID, PONUM, REVISIONNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PO Status History",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "POTERM",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "SITEID, PONUM, REVISIONNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PO Terms",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "PRLINE",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "POSITEID, PONUM, CONTRACTREFREV",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 41",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "PRLINE",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "POSITEID, PONUM, CONTRACTREV",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 42",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "PRLINE",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "POSITEID, PONUM, POREVISIONNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 43",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "PRLINE",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "SITEID, PONUM, CONTRACTREFREV",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 44",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "PRLINE",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "SITEID, PONUM, CONTRACTREV",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 45",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "PRLINE",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "SITEID, PONUM, POREVISIONNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 46",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "REORDERPAD",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "SITEID, PONUM, CONTRACTREFREV",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 47",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "REORDERPAD",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "STORELOCSITE, PONUM, CONTRACTREFREV",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 48",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "RFQLINE",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "SITEID, PONUM, CONTRACTREV",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 49",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "RFQLINE",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "SITEID, PONUM, POREVISIONNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 50",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "SERVRECTRANS",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "FROMSITEID, PONUM, POREVISIONNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 51",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "SERVRECTRANS",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "POSITEID, PONUM, POREVISIONNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 52",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "SERVRECTRANS",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "SITEID, PONUM, POREVISIONNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 53",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "SERVRECTRANS",
            "parentKeys": "SITEID, PONUM",
            "targetKeys": "POSITEID, PONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PO",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "SHIPMENTLINE",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "FROMSITEID, PONUM, REVISIONNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 54",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "SHIPMENTLINE",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "SITEID, PONUM, REVISIONNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 55",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "VENDORSTATUS",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "SITEID, PONUM, REVISIONNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 56",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "WOACTIVITY",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "REPFACSITEID, GENERATEDFORPO, GENFORPOREVISION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 57",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "WOACTIVITY",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "SITEID, GENERATEDFORPO, GENFORPOREVISION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PO generated for the Activity",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "WOCHANGE",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "REPFACSITEID, GENERATEDFORPO, GENFORPOREVISION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 59",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "WOCHANGE",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "SITEID, GENERATEDFORPO, GENFORPOREVISION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PO generated for the Change",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "WORELEASE",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "REPFACSITEID, GENERATEDFORPO, GENFORPOREVISION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 61",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "WORELEASE",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "SITEID, GENERATEDFORPO, GENFORPOREVISION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PO generated for the Release",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "WORKORDER",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "REPFACSITEID, GENERATEDFORPO, GENFORPOREVISION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 63",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "WORKORDER",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "SITEID, GENERATEDFORPO, GENFORPOREVISION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PO generated for the Work Order",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "ADDRESS",
            "targetObject": "PO",
            "parentKeys": "ORGID, ADDRESSCODE",
            "targetKeys": "ORGID, BILLTO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Where to send the PO Bill",
            "longDescription": null
        },
        {
            "objectName": "ADDRESS",
            "targetObject": "PO",
            "parentKeys": "ORGID, ADDRESSCODE",
            "targetKeys": "ORGID, BUYERCOMPANY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Purchasing Agent that will do the buying.",
            "longDescription": null
        },
        {
            "objectName": "ADDRESS",
            "targetObject": "PO",
            "parentKeys": "ORGID, ADDRESSCODE",
            "targetKeys": "ORGID, SHIPTO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Shipping Address",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "PO",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Company on PO",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "PO",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTREFNUM, CONTRACTREFREV, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract for PO",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "PO",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTREFNUM, CONTRELEASESEQ, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 32",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "PO",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTREFNUM, REVISIONNUM, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 33",
            "longDescription": null
        },
        {
            "objectName": "CURRENCY",
            "targetObject": "PO",
            "parentKeys": "CURRENCYCODE",
            "targetKeys": "CURRENCYCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PO''s Currency",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "PO",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "PO",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, STORELOC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 151",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "PO",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STORELOCSITEID, STORELOC",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Storeroom location for PO items.",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "PO",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PO",
            "parentKeys": "PERSONID",
            "targetKeys": "BILLTOATTN",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person to bill to.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PO",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PO",
            "parentKeys": "PERSONID",
            "targetKeys": "PURCHASEAGENT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Purchasing Agent",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PO",
            "parentKeys": "PERSONID",
            "targetKeys": "SHIPTOATTN",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person to ship to.",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "PO",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "SITEID, ORIGINALPONUM, CONTRACTREFREV",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 27",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "PO",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "SITEID, ORIGINALPONUM, CONTRELEASESEQ",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 28",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "PO",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "SITEID, ORIGINALPONUM, REVISIONNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 29",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "PO",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "STORELOCSITEID, ORIGINALPONUM, CONTRACTREFREV",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 30",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "PO",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "STORELOCSITEID, ORIGINALPONUM, CONTRELEASESEQ",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 31",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "PO",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "STORELOCSITEID, ORIGINALPONUM, REVISIONNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 32",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "PO",
            "parentKeys": "SITEID, PONUM",
            "targetKeys": "SITEID, ORIGINALPONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Original PO",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PO",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PO",
            "parentKeys": "SITEID",
            "targetKeys": "STORELOCSITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "PONUM",
            "required": true,
            "persistent": true,
            "title": "PO",
            "remarks": "Identifies the purchase order record. This value must be unique for all purchase order records.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the purchase order. To enter or view additional information, click the Long Description button.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "PR"
        },
        {
            "attributeName": "PURCHASEAGENT",
            "required": false,
            "persistent": true,
            "title": "Buyer",
            "remarks": "Purchasing agent responsible for ordering the item(s).",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "ORDERDATE",
            "required": false,
            "persistent": true,
            "title": "Ordered Date",
            "remarks": "Date and time when the purchase order was issued. The default is the system date and time at the time of creation.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REQUIREDDATE",
            "required": false,
            "persistent": true,
            "title": "Required Date",
            "remarks": "Date when the purchase order line items are needed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FOLLOWUPDATE",
            "required": false,
            "persistent": true,
            "title": "Follow-up Date",
            "remarks": "Date that the vendor should be contacted for follow-up information on the purchase order.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "POTYPE",
            "required": false,
            "persistent": true,
            "title": "Type",
            "remarks": "Identifies the purchase order type.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORIGINALPONUM",
            "required": false,
            "persistent": true,
            "title": "Original PO",
            "remarks": "Identifies the original purchase order from which this purchase order was created.",
            "sameAsAttribute": "PONUM",
            "sameAsObject": "PO"
        },
        {
            "attributeName": "STATUS",
            "required": true,
            "persistent": true,
            "title": "Status",
            "remarks": "Current status of the purchase order.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUSDATE",
            "required": true,
            "persistent": true,
            "title": "Status Date",
            "remarks": "Date and time that the PO status was last changed. The default is the system date and time at the time of the status change.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VENDOR",
            "required": false,
            "persistent": true,
            "title": "Company",
            "remarks": "Identifies the vendor for the item.",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "CONTACT",
            "required": false,
            "persistent": true,
            "title": "Contact",
            "remarks": "Primary person to contact at the vendor.",
            "sameAsAttribute": "CONTACT",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "FREIGHTTERMS",
            "required": false,
            "persistent": true,
            "title": "Freight Terms",
            "remarks": "Describes what is being shipped. Any riders to the shipping agreement should be included here. To enter or view additional information, click the Long Description button. For example, Fresh Fruit. Perishable. Must meet delivery dates.",
            "sameAsAttribute": "FREIGHTTERMS",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "PAYMENTTERMS",
            "required": false,
            "persistent": true,
            "title": "Payment Terms",
            "remarks": "Specified terms of payment for this vendor. For example, net 30.",
            "sameAsAttribute": "PAYMENTTERMS",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "SHIPVIA",
            "required": false,
            "persistent": true,
            "title": "Ship Via",
            "remarks": "Specifies how the goods should be shipped. For example, First Class Mail.",
            "sameAsAttribute": "SHIPVIA",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "CUSTOMERNUM",
            "required": false,
            "persistent": true,
            "title": "Customer #",
            "remarks": "Number used by the vendor to identify your company.",
            "sameAsAttribute": "CUSTOMERNUM",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "FOB",
            "required": false,
            "persistent": true,
            "title": "FOB Point",
            "remarks": "Free On Board Point. The point where responsibility and liability are transferred. The FOB point is usually either the destination or the shipping point.",
            "sameAsAttribute": "FOB",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "SHIPTO",
            "required": false,
            "persistent": true,
            "title": "Ship To",
            "remarks": "Address code where the order will be shipped.",
            "sameAsAttribute": "ADDRESSCODE",
            "sameAsObject": "ADDRESS"
        },
        {
            "attributeName": "SHIPTOATTN",
            "required": false,
            "persistent": true,
            "title": "Attention",
            "remarks": "Person to whom the order is being shipped.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "BILLTO",
            "required": false,
            "persistent": true,
            "title": "Bill To",
            "remarks": "Address code where the order will be billed.",
            "sameAsAttribute": "ADDRESSCODE",
            "sameAsObject": "ADDRESS"
        },
        {
            "attributeName": "BILLTOATTN",
            "required": false,
            "persistent": true,
            "title": "Attention",
            "remarks": "Person to whom the bill will be sent.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "TOTALCOST",
            "required": false,
            "persistent": true,
            "title": "Total Cost",
            "remarks": "Total cost for the PO, including taxes. Maximo calculates this amount using the value in the Currency field. If the Currency field is blank, Maximo calculates this amount in your company's base currency.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEBY",
            "required": true,
            "persistent": true,
            "title": "Changed By",
            "remarks": "Last Modified By",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "Last Modified Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PRIORITY",
            "required": true,
            "persistent": true,
            "title": "Priority",
            "remarks": "Priority level for this purchase order. You should limit your range of values from 0-9, where 0 designates the lowest priority.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HISTORYFLAG",
            "required": true,
            "persistent": true,
            "title": "History",
            "remarks": "Specifies whether to include PO records that are stored in history, rather than just current records, in the query. Records stored in history are closed, cancelled, etc. If the check box is selected, records stored in history will be included in the query results. If the check box is cleared, only current records will be included in the query results.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PO1",
            "required": false,
            "persistent": true,
            "title": "Po1",
            "remarks": "Extra Field 01",
            "sameAsAttribute": "PR1",
            "sameAsObject": "PR"
        },
        {
            "attributeName": "PO2",
            "required": false,
            "persistent": true,
            "title": "Po2",
            "remarks": "Extra Field 02",
            "sameAsAttribute": "PR2",
            "sameAsObject": "PR"
        },
        {
            "attributeName": "PO3",
            "required": false,
            "persistent": true,
            "title": "Po3",
            "remarks": "Extra Field 03",
            "sameAsAttribute": "PR3",
            "sameAsObject": "PR"
        },
        {
            "attributeName": "PO4",
            "required": false,
            "persistent": true,
            "title": "Po4",
            "remarks": "Extra Field 04",
            "sameAsAttribute": "PR4",
            "sameAsObject": "PR"
        },
        {
            "attributeName": "PO5",
            "required": false,
            "persistent": true,
            "title": "Po5",
            "remarks": "Extra Field 05",
            "sameAsAttribute": "PR5",
            "sameAsObject": "PR"
        },
        {
            "attributeName": "PO6",
            "required": false,
            "persistent": true,
            "title": "Po6",
            "remarks": "Extra Field 06",
            "sameAsAttribute": "PR6",
            "sameAsObject": "PR"
        },
        {
            "attributeName": "PO7",
            "required": false,
            "persistent": true,
            "title": "Po7",
            "remarks": "Extra Field 07",
            "sameAsAttribute": "PR7",
            "sameAsObject": "PR"
        },
        {
            "attributeName": "PO8",
            "required": false,
            "persistent": true,
            "title": "Po8",
            "remarks": "Extra Field 08",
            "sameAsAttribute": "PR8",
            "sameAsObject": "PR"
        },
        {
            "attributeName": "PO9",
            "required": false,
            "persistent": true,
            "title": "Po9",
            "remarks": "Extra Field 09",
            "sameAsAttribute": "PR9",
            "sameAsObject": "PR"
        },
        {
            "attributeName": "PO10",
            "required": true,
            "persistent": true,
            "title": "Po10",
            "remarks": "Extra Field 10",
            "sameAsAttribute": "PR10",
            "sameAsObject": "PR"
        },
        {
            "attributeName": "VENDELIVERYDATE",
            "required": false,
            "persistent": true,
            "title": "Vendor Date",
            "remarks": "Date when the vendor expects to deliver the order.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RECEIPTS",
            "required": false,
            "persistent": true,
            "title": "Receipts",
            "remarks": "Status of line items received. Possible values are None (the default when you create the PO), Partial, and Complete.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CURRENCYCODE",
            "required": true,
            "persistent": true,
            "title": "Currency",
            "remarks": "Identifies the currency the PO is in.",
            "sameAsAttribute": "CURRENCYCODE",
            "sameAsObject": "CURRENCY"
        },
        {
            "attributeName": "EXCHANGERATE",
            "required": false,
            "persistent": true,
            "title": "Exchange Rate",
            "remarks": "Exchange rate at time of PO approval.",
            "sameAsAttribute": "EXCHANGERATE",
            "sameAsObject": "EXCHANGE"
        },
        {
            "attributeName": "EXCHANGEDATE",
            "required": false,
            "persistent": true,
            "title": "Exchange Date",
            "remarks": "Date of the exchange rate.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BUYAHEAD",
            "required": true,
            "persistent": true,
            "title": "Buy Ahead Rate",
            "remarks": "Is this a buy ahead rate, ie entered directly by the user and not calculated from the list of active exchange rate.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOTALTAX1",
            "required": false,
            "persistent": true,
            "title": "Total Tax",
            "remarks": "Total Tax applied to the PO. Maximo calculates this amount based on the line items entered on the PO Lines tab.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOTALTAX2",
            "required": false,
            "persistent": true,
            "title": "Total Tax 2",
            "remarks": "Amount of Tax 2 Payable",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOTALTAX3",
            "required": false,
            "persistent": true,
            "title": "Total Tax 3",
            "remarks": "Amount of Tax 3 Payable",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INCLUSIVE1",
            "required": true,
            "persistent": true,
            "title": "Pay Tax to Vendor",
            "remarks": "Specifies if the vendor is authorized to collect taxes and you will pay the tax amount to the vendor. Select the checkbox if you want to pay taxes to the vendor. Clear the checkbox if there is no tax, or if you want to pay taxes directly to the taxing authority.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INCLUSIVE2",
            "required": true,
            "persistent": true,
            "title": "Include Tax 2",
            "remarks": "Is the PO total inclusive of Tax 2",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INCLUSIVE3",
            "required": true,
            "persistent": true,
            "title": "Include Tax 3",
            "remarks": "Is the PO total inclusive of Tax 3",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INTERNAL",
            "required": true,
            "persistent": true,
            "title": "Internal",
            "remarks": "Specifies if the vendor is within your company. If the vendor is within your company (making this PO an internal PO), select the check box. If this PO is not an internal PO, clear the check box. An internal order cannot be for a service; it may only be for inventory material from a storeroom.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOTALTAX4",
            "required": false,
            "persistent": true,
            "title": "Total Tax 4",
            "remarks": "Amount of Tax4 payable.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOTALTAX5",
            "required": false,
            "persistent": true,
            "title": "Total Tax 5",
            "remarks": "Amount of Tax5 payable.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INCLUSIVE4",
            "required": true,
            "persistent": true,
            "title": "Include Tax 4",
            "remarks": "Is the PO total inclusive of Tax 4.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INCLUSIVE5",
            "required": true,
            "persistent": true,
            "title": "Include Tax 5",
            "remarks": "Is the PO total inclusive of Tax 5.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STARTDATE",
            "required": false,
            "persistent": true,
            "title": "Start Date",
            "remarks": "Date when the PO becomes active.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDDATE",
            "required": false,
            "persistent": true,
            "title": "End Date",
            "remarks": "Date when PO is no longer active.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PAYONRECEIPT",
            "required": true,
            "persistent": true,
            "title": "Pay on Receipt",
            "remarks": "Specifies whether you have a pay on receipt agreement with the vendor. If the check box is selected, Maximo will generate an invoice upon receipt of the item or service. If the check box is cleared (the default), no invoice is generated.",
            "sameAsAttribute": "PAYONRECEIPT",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "BUYERCOMPANY",
            "required": false,
            "persistent": true,
            "title": "Buyer Company",
            "remarks": "Site location of the purchasing agent responsible for ordering the item(s). The buyer company links the buyer's address to the order.",
            "sameAsAttribute": "ADDRESSCODE",
            "sameAsObject": "ADDRESS"
        },
        {
            "attributeName": "EXCHANGERATE2",
            "required": false,
            "persistent": true,
            "title": "Secondary Exchange Rate",
            "remarks": "Exchange Rate 2",
            "sameAsAttribute": "EXCHANGERATE",
            "sameAsObject": "EXCHANGE"
        },
        {
            "attributeName": "MNETSENT",
            "required": false,
            "persistent": true,
            "title": "E-commerce Status",
            "remarks": "Has the PO been sent electronically?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ECOMSTATUSDATE",
            "required": false,
            "persistent": true,
            "title": "E-commerce Date of Status Change",
            "remarks": "Date of the most recent Ecommerce transaction.",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "SENDERSYSID",
            "required": false,
            "persistent": true,
            "title": "Sender System ID",
            "remarks": "Column used by ERP-Integration (APIs)",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SITEID",
            "required": true,
            "persistent": true,
            "title": "Site",
            "remarks": "Site where the purchase order was entered.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
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
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Long Description for Purchase Order Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FREIGHTTERMS_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Freight Terms Long Description",
            "remarks": "Long Description for Freight Terms",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RECEIVEDTOTALCOST",
            "required": false,
            "persistent": false,
            "title": "Received Cost",
            "remarks": "RECEIVEDTOTALCOST",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "POTYPEMODE",
            "required": false,
            "persistent": false,
            "title": "Mode Type",
            "remarks": "POTYPEMODE",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOTALBASECOST",
            "required": false,
            "persistent": false,
            "title": "Total Base Cost",
            "remarks": "Total cost of the PO, in your company's base currency. This value is the Total Cost multiplied by the current exchange rate for the specified currency. If the PO is not yet approved, the value in this field is calculated at the exchange rate in effect at the time the PO was created. Once the PO is approved, the value in this field is calculated at the exchange rate in effect at approval time.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PRETAXTOTAL",
            "required": false,
            "persistent": false,
            "title": "Pretax Total",
            "remarks": "Total cost for the goods on the PO, excluding taxes.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONTRACTREFNUM",
            "required": false,
            "persistent": true,
            "title": "Contract Reference",
            "remarks": "Identifies the contract that was used to find the price of the item.",
            "sameAsAttribute": "CONTRACTNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "POID",
            "required": true,
            "persistent": true,
            "title": "POID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONTRACTREFID",
            "required": false,
            "persistent": true,
            "title": "Contract Reference ID",
            "remarks": "Contract reference identifier",
            "sameAsAttribute": "CONTRACTID",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "CONTRACTREFREV",
            "required": false,
            "persistent": true,
            "title": "Contract Revision",
            "remarks": "Revision number of the referenced contract.",
            "sameAsAttribute": "REVISIONNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "CONTRELEASESEQ",
            "required": false,
            "persistent": true,
            "title": "Release #",
            "remarks": "Identifies the sequential release number.",
            "sameAsAttribute": "REVISIONNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "STORELOC",
            "required": false,
            "persistent": true,
            "title": "Storeroom",
            "remarks": "Storeroom location of the item. This field is required if the Issue on Receipt? check box on the PO Lines tab is cleared.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "STORELOCSITEID",
            "required": false,
            "persistent": true,
            "title": "Storeroom Site",
            "remarks": "Identifies the site where the storeroom is located.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "INSPECTIONREQUIRED",
            "required": true,
            "persistent": true,
            "title": "Inspection Required",
            "remarks": "Specifies whether this item requires an approval of the receipt. When you receive items that require inspection, Maximo records a receipt transaction. However, the item does not appear in the storeroom until the receipt is approved. If the check box is selected, the item requires inspection. If the check box is cleared (the default), no approval of the receipt is necessary.",
            "sameAsAttribute": "INSPECTIONREQUIRED",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "NP_STATUSMEMO",
            "required": false,
            "persistent": false,
            "title": "Change Status Memo",
            "remarks": "Status change memo, temporary non-persistent field used by MEA",
            "sameAsAttribute": "MEMO",
            "sameAsObject": "WFTRANSACTION"
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
        },
        {
            "attributeName": "STATUSIFACE",
            "required": true,
            "persistent": false,
            "title": "Has Status Changed",
            "remarks": "Non persistent boolean field to indicate whether the status has been changed after the stateful object is fetched from the database.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REVISIONNUM",
            "required": true,
            "persistent": true,
            "title": "Revision",
            "remarks": "Revision number of the purchase order. Indicates how many times a purchase order has been revised. A purchase order that has not been revised displays 0 for the revision number.",
            "sameAsAttribute": "REVISIONNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "REVCOMMENTS",
            "required": false,
            "persistent": true,
            "title": "Revision Comments",
            "remarks": "Description of the changes to the purchase order.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "PR"
        },
        {
            "attributeName": "INTERNALCHANGE",
            "required": true,
            "persistent": true,
            "title": "Internal Change",
            "remarks": "When checked, Internal Change means that the purchase order contains information that you do not want to show to the vendor. This is an information-only field that does not affect the processing of purchase orders.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ALLOWRECEIPT",
            "required": true,
            "persistent": false,
            "title": "Allow Receipts and Invoices",
            "remarks": "Allow Receipts flag. Non-persistent attribute used by MEA process.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IGNORECNTREV",
            "required": true,
            "persistent": true,
            "title": "Bypass Contract Revision on PO Approval",
            "remarks": "You can bypass the validation of revisions to the contract that is associated with a purchase order, if any. You can then approve the purchase order.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REVCOMMENTS_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Revision Comments Long description",
            "remarks": "Long Description for Revision Comments",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "BILLTO",
            "target": "ADDRESS",
            "remarks": "Relationship to the Address table, used to find all bill to address records for a given purchase order. (address.addresscode = po.billto). The resulting set will contain one object.",
            "whereClause": "addresscode = :billto and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHIPTO",
            "target": "ADDRESS",
            "remarks": "Relationship to the Address table, used to find all ship to address records for a given purchase order. (address.addresscode = po.shipto). The resulting set will contain one object.",
            "whereClause": "addresscode = :shipto and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETINPUT",
            "target": "ASSETINPUT",
            "remarks": "Relationship to the non-persistent AssetInput table. (No where clause). The resulting set will contain zero objects. Note: This relationship is used only for the Receiving application, Receive Rotating Items action to display records based on MatRecTrans table with rotating asset for a given purchase order.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETMOVEDFLT",
            "target": "ASSETMOVEDFLT",
            "remarks": "Relationship to the po assetmovedflt records, used to find the assetmovedflt records for a given po.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMLOG",
            "target": "COMMLOG",
            "remarks": "Relationship to the commlog records, used to find the worklog records for a given PO.",
            "whereClause": "ownerid=:poid and ownertable='PO'",
            "cardinality": null
        },
        {
            "name": "COMMODITIES",
            "target": "COMMODITIES",
            "remarks": "Relationship to the Commodities table to show only the commodities with servicetype as BOTH and PROCURE",
            "whereClause": "servicetype in (select value from synonymdomain where domainid='SERVICETYPE' and maxvalue in ('BOTH','PROCURE'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PO_SHIPTO",
            "target": "COMPANIES",
            "remarks": null,
            "whereClause": "company=:shipto and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PO_VENDOR",
            "target": "COMPANIES",
            "remarks": null,
            "whereClause": "company=:vendor and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PO_BILLTO",
            "target": "COMPANIES",
            "remarks": null,
            "whereClause": "company=:billto and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VENDOR",
            "target": "COMPANIES",
            "remarks": "Relationship to the Companies table, used to find all vendor company records for a given purchase order. (companies.company = po.vendor). The resulting set will contain zero or more objects.",
            "whereClause": "company = :vendor and orgid=:orgid",
            "cardinality": "SINGLE"
        },
        {
            "name": "CONTRACTREF",
            "target": "CONTRACT",
            "remarks": "Relationship to the Contract table, used to find a contract record for a given purchase order contract reference number (contract.contractid = po.contractrefid and contract.orgid = po.orgid). The resulting set will contain zero or one object.",
            "whereClause": "contractid = :contractrefid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CREATECONTRACT",
            "target": "CONTRACTFROMPO",
            "remarks": "Relationship to the non-persistent ContractFromPO table. (No where clause). The resulting set will contain zero objects.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTREFLINE",
            "target": "CONTRACTLINE",
            "remarks": "Relationship to the CONTRACTLINE table, used to find all contract line records for a given purchase. (contractlineid in (select contreflineid from poline where ponum=po.ponum and siteid=po.siteid)). The resulting set will contain zero or more objects.",
            "whereClause": "contractlineid in (select contreflineid from poline where ponum=:ponum and siteid=:siteid)",
            "cardinality": null
        },
        {
            "name": "CONTRACTREFLINEVIEW",
            "target": "CONTRACTLINE",
            "remarks": "Relationship  to the CONTRACTLINE table, used to find all contract line records for a given purchase. (contractlineid in (select contreflineid from poline where ponum=po.ponum and siteid=po.siteid)). The resulting set  will contain zero or more objects.",
            "whereClause": "contractlineid in (select contreflineid from poline where (polinenum in (select polinenum from matrectrans where ponum=:ponum and positeid=:siteid) and ponum = :ponum and siteid = :siteid) or (polinenum in (select polinenum from servrectrans where ponum=:ponum and positeid=:siteid) and ponum = :ponum and siteid = :siteid))",
            "cardinality": null
        },
        {
            "name": "DOCLINKS",
            "target": "DOCLINKS",
            "remarks": "Relationship to the DocLinks table, used to find all document records for a given purchase order. (doclinks.keytable = 'PO' and doclinks.keycolumn ='PONUM' and doclinks.keyvalue = po.ponum$DOCLINKS.KEYVALUE). The resulting set will contain zero or more objects. Note: The PO.PONum field value will be formatted to match the DocLinks.KeyValue data type.",
            "whereClause": "(ownertable='PO' and ownerid=:poid) or (ownertable = 'COMPANIES' and ownerid = (select companiesid from companies where company=:vendor and orgid=:orgid)) or (ownertable = 'CONTRACT' and ownerid = (select contractid from contract where contractnum=:contractrefnum and revisionnum=:contractrefrev and orgid=:orgid)) or (ownertable = 'MRLINE' and ownerid in (select mrlineid from mrline where mrnum in (select mrnum from poline where ponum=:ponum and siteid=:siteid) and siteid=:siteid)) or (ownertable = 'PR' and ownerid in (select prid from pr where prnum in (select prnum from prline where ponum=:ponum and positeid=:siteid)  and siteid=:siteid)) or (ownertable = 'RFQ' and ownerid in (select rfqid from rfq where rfqnum in (select rfqnum from rfqline where ponum=:ponum and siteid=:siteid) and siteid=:siteid))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "target": "DRILLDOWN",
            "remarks": "Relationship from the PO to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVOICELINE",
            "target": "INVOICELINE",
            "remarks": "Relationship to the InvoiceLine table, used to find all invoice line records for a given purchase order. (invoiceline.ponum = po.ponum and invoiceline.positeid = po.siteid). The resulting set will contain zero or more objects.",
            "whereClause": "ponum=:ponum and positeid=:siteid",
            "cardinality": null
        },
        {
            "name": "INVOICELINEVIEW",
            "target": "INVOICELINE",
            "remarks": "Relationship to the InvoiceLine table, used to find all invoice line records for a given purchase order line. (invoiceline.ponum = poline.ponum and invoiceline.siteid = poline.siteid and  invoiceline.polinenum = poline.polinenum). The resulting set will contain zero or more objects.",
            "whereClause": "(polinenum in (select polinenum from matrectrans where ponum=:ponum and positeid=:siteid) and ponum = :ponum and positeid = :siteid) or (polinenum in (select polinenum from servrectrans where ponum=:ponum and positeid=:siteid) and ponum = :ponum and positeid = :siteid)",
            "cardinality": null
        },
        {
            "name": "INVOICETRANS",
            "target": "INVOICETRANS",
            "remarks": "Relationship to the INVOICETRANS line table, used to find all INVOICETRANS line records for a given purchase order. (polinenum in (select polinenum from prline where prnum=prline.prnum and siteid=prline.siteid) and positeid = pr.siteid). The resulting set will contain zero or more objects.",
            "whereClause": "invoicenum in (select invoicenum from invoiceline where ponum=:ponum and positeid=:siteid) and siteid in (select siteid from invoiceline where ponum=:ponum and positeid=:siteid)",
            "cardinality": null
        },
        {
            "name": "INVRESERVE",
            "target": "INVRESERVE",
            "remarks": "Relationship to the InvReserve table, used to find PO records. The resulting set will contain zero or more objects.",
            "whereClause": "ponum=:ponum and siteid=:siteid and itemnum in (select itemnum from poline where ponum=:ponum and siteid=:siteid)",
            "cardinality": null
        },
        {
            "name": "INVUSE",
            "target": "INVUSE",
            "remarks": "Relationship to the INVUSE table, used to find the invuse records for a given invuseline. The resulting set will contain one object.",
            "whereClause": "fromstoreloc=:storeloc and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "INVVENDOR",
            "target": "INVVENDOR",
            "remarks": "Relationship to the InvVendor table, used to find all inventory vendor records for a given purchase order. (invvendor.vendor = po.vendor). The resulting set will contain zero or more objects.",
            "whereClause": "vendor = :vendor and orgid = :orgid and (siteid=:siteid or siteid is null)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PURCHASEAGENT",
            "target": "LABOR",
            "remarks": "Relationship to the Labor table, used to find all purchase agent records for a given purchase order. (labor.laborcode = po.purchaseagent). The resulting set will contain one object.",
            "whereClause": "laborcode = :purchaseagent and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHIPTOATTN",
            "target": "LABOR",
            "remarks": "Relationship to the Labor table, used to find all ship to attention records for a given purchase order. (labor.laborcode = po.shiptoattn). The resulting set will contain one object.",
            "whereClause": "laborcode = :shiptoattn and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "BILLTOATTN",
            "target": "LABOR",
            "remarks": "Relationship to the Labor table, used to find all bill to attention records for a given purchase order. (labor.laborcode = po.billtoattn). The resulting set will contain one object.",
            "whereClause": "laborcode = :billtoattn and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LONGDESCRIPTION",
            "target": "LONGDESCRIPTION",
            "remarks": "Relationship to the longdescription table, used to find all longdescription records for po. The resulting set will contain zero or more objects.",
            "whereClause": "ldkey=:poid and ldownertable = 'PO'",
            "cardinality": null
        },
        {
            "name": "MATRECTRANS",
            "target": "MATRECTRANS",
            "remarks": "Relationship to the MatRecTrans table, used to find all material receipt transaction records for a given purchase order. (matrectrans.ponum = po.ponum). The resulting set will contain zero or more objects.",
            "whereClause": "ponum = :ponum and positeid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "NOCOSTMATRECTRANS",
            "target": "MATRECTRANS",
            "remarks": "Relationship to the MatRecTrans table, used to find all material receipt transactions which has no parent and quantity is greater than 0. (matrectrans.ponum = po.ponum and matrectrans.belongsto is null and matrectrans.quantity > 0). The resulting set will contain zero or more objects. Note: This relationship is used only for the Receiving application, Select Items for Return (button) page to display material receipt transactions for a given purchase order.",
            "whereClause": "ponum = :ponum and belongsto is null and quantity > 0 and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PARENTMATRECTRANS",
            "target": "MATRECTRANS",
            "remarks": "Relationship to the MatRecTrans table, used to find all parent material receipt transactions for a given purchase order. (matrectrans.ponum = po.ponum and matrectrans.belongsto is null). The resulting set will contain zero or more objects. Note: This relationship is used only for the Receiving application to display the main page of material receipts.",
            "whereClause": "ponum = :ponum and belongsto is null and positeid=:siteid and status not in (select value from synonymdomain where domainid='RECEIPTSTATUS' and maxvalue='TRANSFER')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECEIPTTYPEMATREC",
            "target": "MATRECTRANS",
            "remarks": "Relationship to the MatRecTrans table, used to find all records of type RECEIPT and TRANSFER that do not have a fromstoreloc of type HOLDING and that are not receipts of rotating assets (po.ponum = matrectrans.ponum  and po.siteid = matrectrans.siteid and matrectrans.status is not null and issuetype in (select value from synonymdomain where domainid='ISSUETYP' and maxvalue in ('TRANSFER','RECEIPT')) and not exists (select locations.location from locations where locations.location=matrectrans.fromstoreloc and locations.siteid=matrectrans.fromsiteid and locations.type in (select value from synonymdomain where domainid='LOCTYPE' and maxvalue='HOLDING'))).",
            "whereClause": "ponum=:ponum and positeid=:siteid and status is not null and issuetype in (select value from synonymdomain where domainid='ISSUETYP' and maxvalue in ('TRANSFER','RECEIPT')) and not exists (select locations.location from locations where locations.location=matrectrans.fromstoreloc and locations.siteid=matrectrans.fromsiteid and locations.type in (select value from synonymdomain where domainid='LOCTYPE' and maxvalue='HOLDING'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POMATRECTRANS",
            "target": "MATRECTRANS",
            "remarks": "Relationship to the matrectrans table, used to find the matrectrans records for this PO. The resulting set will contain one or more objects.",
            "whereClause": "ponum = :ponum and positeid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVOICETYPEMATREC",
            "target": "MATRECTRANS",
            "remarks": "Relationship to the MatRecTrans table, used to find all receipts of type INVOICE (po.ponum = matrectrans.ponum and matrectrans.issuetype=INVOICE).",
            "whereClause": "ponum=:ponum and porevisionnum=:revisionnum and issuetype in (select value from synonymdomain where domainid='ISSUETYP' and maxvalue='INVOICE')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "UNAPPROVEDMATRECTRANS",
            "target": "MATRECTRANS",
            "remarks": "Relationship to the MatRecTrans table, used to find all parent material receipt transactions that have not been approved for a given purchase order. (matrectrans.ponum = po.ponum and matrectrans.belongsto is null and po.status = WAPPR and matrectrans.itemsetid = po.itemsetid). The resulting set will contain zero or more objects. Note: This relationship is used only for the Receiving application, Approve Receipts action to display records based on MatRecTrans table with WAPPR status of purchase orders.",
            "whereClause": "ponum=:ponum and belongsto is null and (fromstoreloc is not null or itemnum is null or itemnum in (select item.itemnum from item where matrectrans.itemnum=item.itemnum)) and status in (select value from synonymdomain where maxvalue='WINSP' and domainid = 'RECEIPTSTATUS') and positeid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POLINESPECCLASS",
            "target": "PDSPEC",
            "remarks": "Relationship to the pdspec table, used to find the pdspec records for a given po (pdownerid=:poid and refobjectname='POLINE'). The resulting set will contain zero or more objects.",
            "whereClause": "pdownerid=:poid and refobjectname='POLINE' ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PDSPECCLASS",
            "target": "PDSPEC",
            "remarks": "Relationship to the pdspec table, used to find the pdspec records for a given po (pdownerid=:poid and refobjectname='POLINE'). The resulting set will contain zero or more objects.",
            "whereClause": "pdownerid=:poid and refobjectname='POLINE' ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHIPTOPERSON",
            "target": "PERSON",
            "remarks": "Relationship to the Person  table, used to find all person records for a given purchase order . (po.shiptoattn = person.personid). The resulting set will contain zero or more objects.",
            "whereClause": "personid=:shiptoattn",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "BILLTOPERSON",
            "target": "PERSON",
            "remarks": "Relationship to the Person  table, used to find all person records for a given purchase order . (po.billtoattn = person.personid). The resulting set will contain zero or more objects.",
            "whereClause": "personid=:billtoattn",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWREVHIST",
            "target": "PO",
            "remarks": "Relationship to the PO table used to find all PO for a given Purchase Order",
            "whereClause": "ponum=:ponum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "PO_ORIGINAL",
            "target": "PO",
            "remarks": null,
            "whereClause": "ponum=:originalponum and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POCHANGESTATUS",
            "target": "POCHANGESTATUS",
            "remarks": "Relationship to the non-persistent POChangeStatus table. (No where clause). The resulting set will contain zero objects. Note: This relationship is used only for the Change Status action page to change the status of a given purchase order.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POECOMSTATUS",
            "target": "POECOMSTATUS",
            "remarks": "Relationship to the POEcomStatus table, used to find all purchase order ecommerce status records for a given purchase order. (poecomstatus.ponum = po.ponum). The resulting set will contain zero or more objects.",
            "whereClause": "ponum=:ponum and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POFROMPRINPUT",
            "target": "POFROMPRINPUT",
            "remarks": "Relationship to the non-persistent POFromPRInput table. (No where clause). The resulting set will contain zero objects.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POLINE",
            "target": "POLINE",
            "remarks": "Relationship to the POLine table, used to find all purchase order line records for a given purchase order. (poline.ponum = po.ponum). The resulting set will contain zero or more objects.",
            "whereClause": "ponum=:ponum and revisionnum=:revisionnum and siteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "MKTPOLINE",
            "target": "POLINE",
            "remarks": "Relationship to the POLine table used to obtain all POLines that have the mktplcitem flag set to true (po.ponum=poline.ponum and poline.mktplcitem=yes).The resulting set will contain zero or more objects",
            "whereClause": "ponum=:ponum and siteid=:siteid and mktplcitem=:yes",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POLINEVIEW",
            "target": "POLINE",
            "remarks": "Relationship to the InvoiceLine table, used to find all invoice line records for a given purchase order line. (invoiceline.ponum = poline.ponum and invoiceline.siteid = poline.siteid and  invoiceline.polinenum = poline.polinenum). The resulting set will contain zero or more objects.",
            "whereClause": "(polinenum in (select polinenum from matrectrans where ponum=:ponum and positeid=:siteid) and ponum = :ponum and siteid = :siteid) or (polinenum in (select polinenum from servrectrans where ponum=:ponum and positeid=:siteid) and ponum = :ponum and siteid = :siteid)",
            "cardinality": null
        },
        {
            "name": "REVISIONLINE",
            "target": "POLINE",
            "remarks": "Relationship to the POLine table used to find all POLines for a given Purchase Order",
            "whereClause": " ponum=:ponum and siteid=:siteid and revisionnum in (:revisionnum,(select max(revisionnum) from poline where   ponum=:ponum and siteid=:siteid and revisionnum < :revisionnum)) and polinenum in (select polinenum from poline where  ponum=:ponum and siteid=:siteid and revstatus in (select value from synonymdomain where domainid='REVSTATUS' and maxvalue in ('ADDED','CHANGED')) and revisionnum=:revisionnum)",
            "cardinality": null
        },
        {
            "name": "COMPPOLINE",
            "target": "POLINE",
            "remarks": "Relationship to the POLine table, used to find all purchase order lines which have not yet completed the receipt for a given purchase order. (poline.ponum = po.ponum and poline.receiptscomplete = no). The resulting set will contain zero or more objects. Note: This relationship is used only for the Purchase Orders application, Complete Receipts action to display records based on POLine table with not completed receipt lines.",
            "whereClause": "ponum=:ponum and revisionnum=:revisionnum and receiptscomplete = :no and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POREVISIONINPUT",
            "target": "POREVISIONINPUT",
            "remarks": "Relationship to the non-persistent PORevisionInput object. (No where clause). The resulting set will contain zero objects.",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "POSTATUS",
            "target": "POSTATUS",
            "remarks": "Relationship to the POStatus table, used to find all status records for a given purchase order. (postatus.ponum = po.ponum). The resulting set will contain zero or more objects.",
            "whereClause": "ponum=:ponum and revisionnum=:revisionnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POTERM",
            "target": "POTERM",
            "remarks": "Relationship to the POTERM table, used to find all po term records for a given purchase order. (poline.ponum = po.ponum). The resulting set will contain zero or more objects.",
            "whereClause": "ponum=:ponum and revisionnum=:revisionnum and siteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "PRLINE",
            "target": "PRLINE",
            "remarks": "Relationship to the PRLine table, used to find all purchase requisition line records for a given purchase order. (prline.ponum = po.ponum). The resulting set will contain zero or more objects.",
            "whereClause": "ponum=:ponum and orgid=:orgid and positeid=:siteid and porevisionnum=:revisionnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRLINES",
            "target": "PRLINE",
            "remarks": "Relationship to the PRLine table, used to find all purchase req line records for a given purchase order. (prline.ponum = po.ponum). The resulting set will contain zero or more objects.Relationship to the POLine table, used to find all purchase order line records for a given purchase order. (poline.ponum = po.ponum). The resulting set will contain zero or more objects.",
            "whereClause": "ponum=:ponum and positeid=:siteid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRLINEVIEW",
            "target": "PRLINE",
            "remarks": "Relationship to the InvoiceLine table, used to find all invoice line records for a given purchase order line. (invoiceline.ponum = poline.ponum and invoiceline.siteid = poline.siteid and  invoiceline.polinenum = poline.polinenum). The resulting set will contain zero or more objects.",
            "whereClause": "(polinenum in (select polinenum from matrectrans where ponum=:ponum and positeid=:siteid) and ponum = :ponum and siteid = :siteid) or (polinenum in (select polinenum from servrectrans where ponum=:ponum and positeid=:siteid) and ponum = :ponum and siteid = :siteid)",
            "cardinality": null
        },
        {
            "name": "PURCHVIEW",
            "target": "PURCHVIEW",
            "remarks": "Relationship to the Purchase Contract, used to find all purchase contracts for a given relase po. (purchview.contractid = po.contractrefid). The resulting set will contain zero or one object.",
            "whereClause": "contractid=:contractrefid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RETURNRECEIPTINPUT",
            "target": "RECEIPTINPUT",
            "remarks": "Relationship to the non-persistent ReceiptInput table, used to create receipt return transactions for a given purchase order. (No where clause). The resulting set will contain zero objects.  Note: This relationship is used only for the Receiving application, Select Item for Return (button) page to display return receipt transactions for a given purchase order.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RETURNRECEIPTINPUTSRV",
            "target": "RECEIPTINPUT",
            "remarks": "Relationship to the non-persistent ReceiptInput table, used to create receipt return transactions for a given purchase order. (No where clause). The resulting set will contain zero objects.  Note: This relationship is used only for the Receiving application, Select Item for Return (button) page to display return receipt transactions for a given purchase order.",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "MATRECEIPTINPUT",
            "target": "RECEIPTINPUT",
            "remarks": "Relationship to the non-persistent ReceiptInput table, used to find all material receipt transactions for a given purchase order. (No where clause). The resulting set will contain zero objects. Note: This relationship is used only for the Receiving application, Select Ordered Items(button) page to display material receipt transactions for a given purchase order.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VOIDRECEIPTINPUT",
            "target": "RECEIPTINPUT",
            "remarks": "Relationship to the non-persistent ReceiptInput table, used to create receipt void transactions for a given purchase order. (No where clause). The resulting set will contain zero objects.  Note: This relationship is used only for the Receiving application, Select Receipts to Void (button) page to display receipt transactions for a given purchase order.",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "VOIDRECEIPTINPUTSRV",
            "target": "RECEIPTINPUT",
            "remarks": "Relationship to the non-persistent ReceiptInput table, used to create receipt void transactions for a given purchase order. (No where clause). The resulting set will contain zero objects.  Note: This relationship is used only for the Receiving application, Select Receipts to Void (button) page to display receipt transactions for a given purchase order.",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "SERVRECEIPTINPUT",
            "target": "RECEIPTINPUT",
            "remarks": "Relationship to the non-persistent ReceiptInput table, used to find all service receipt transactions for a given purchase order. (No where clause). The resulting set will contain zero objects. Note: This relationship is used only for the Receiving application, Select Ordered Services (button) page to display service receipt transactions for a given purchase order.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETSTORETURN",
            "target": "RECEIPTINPUT",
            "remarks": "Relationship to get all of the assets for this PO that are elegible for Returning to Vendor.",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "RECEIPTINPUTFIND",
            "target": "RECEIPTINPUTFIND",
            "remarks": "Relationship to the non-persistent ReceiptInputFind table. (No where clause). The resulting set will contain zero objects.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RFQLINE",
            "target": "RFQLINE",
            "remarks": "Relationship to the RFQLine table, used to find all rfq line records for a given purchase. (rfqline.siteid = po.siteid and  rfqline.ponum = po.ponum). The resulting set will contain zero or more objects.",
            "whereClause": "ponum=:ponum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "RFQLINEVIEW",
            "target": "RFQLINE",
            "remarks": "Relationship to the InvoiceLine table, used to find all invoice line records for a given purchase order line. (invoiceline.ponum = poline.ponum and invoiceline.siteid = poline.siteid and  invoiceline.polinenum = poline.polinenum). The resulting set will contain zero or more objects.",
            "whereClause": "(polinenum in (select polinenum from matrectrans where ponum=:ponum and positeid=:siteid) and ponum = :ponum and siteid = :siteid) or (polinenum in (select polinenum from servrectrans where ponum=:ponum and positeid=:siteid) and ponum = :ponum and siteid = :siteid)",
            "cardinality": null
        },
        {
            "name": "RECEIPTTYPESRVREC",
            "target": "SERVRECTRANS",
            "remarks": "Relationship to the ServRecTrans table, used to find all records of type RECEIPT and TRANSFER that do not have a fromstoreloc of type HOLDING and that are not receipts of rotating assets (po.ponum = matrectrans.ponum  and po.siteid = matrectrans.siteid and matrectrans.status is not null and issuetype in (select value from synonymdomain where domainid='ISSUETYP' and maxvalue in ('TRANSFER','RECEIPT'))",
            "whereClause": "ponum=:ponum and positeid=:siteid and status is not null and issuetype in (select value from synonymdomain where domainid='ISSUETYP' and maxvalue in ('TRANSFER','RECEIPT'))",
            "cardinality": null
        },
        {
            "name": "NOCOSTSERVRECTRANS",
            "target": "SERVRECTRANS",
            "remarks": "Relationship to the ServRecTrans table, used to find all service receipt transactions which has no parent. (matrectrans.ponum = po.ponum and servrectrans.belongsto is null). The resulting set will contain zero or more objects. Note: This relationship is used only for the Receiving application to display the main page of service receipts.",
            "whereClause": "ponum = :ponum and belongsto is null and positeid=:siteid and porevisionnum <=:revisionnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SERVRECTRANS",
            "target": "SERVRECTRANS",
            "remarks": "Relationship to the ServRecTrans table, used to find all service receipt transaction records for a given purchase order. (servrectrans.ponum = po.ponum). The resulting set will contain zero or more objects.",
            "whereClause": "ponum=:ponum and positeid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "INVOICETYPESERVREC",
            "target": "SERVRECTRANS",
            "remarks": "Relationship to the ServRecTrans table, used to find all receipts of type INVOICE (po.ponum = servrectrans.ponum and servrectrans.issuetype=INVOICE).",
            "whereClause": "ponum=:ponum and porevisionnum=:revisionnum and issuetype in (select value from synonymdomain where domainid='ISSUETYP' and maxvalue='INVOICE')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "UNAPPROVEDSERVRECTRANS",
            "target": "SERVRECTRANS",
            "remarks": "Relationship to the ServRecTrans table, used to find all parent service receipt transactions that have not been approved for a given purchase order. (servrectrans.ponum = po.ponum and servrectrans.approved = no and servrectrans.belongsto is null). The resulting set will contain zero or more objects. Note: This relationship is used only for the Receiving application, Approve Receipts action to display records based on ServRecTrans table with not approved receipts for a given purchase order.",
            "whereClause": "ponum = :ponum and belongsto is null and status in (select value from synonymdomain where maxvalue='WINSP' and domainid = 'RECEIPTSTATUS') and positeid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SFWVIEW",
            "target": "SFWVIEW",
            "remarks": "Relationship to the Software Contract, used to find all software contracts for a given relase po. (sfwview.contractid = po.contractrefid). The resulting set will contain zero or one object.",
            "whereClause": "contractid=:contractrefid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHIPMENTLINE",
            "target": "SHIPMENTLINE",
            "remarks": "Relationship to the ShipmentLine table, used to find all shipment line records for a given purchase order. (shipmentline.ponum = po.ponum). The resulting set will contain zero or more objects.",
            "whereClause": "ponum = :ponum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SITE",
            "target": "SITE",
            "remarks": "Relationship to the Site table, used to find site records for a given purchase order. (site.siteid = po.siteid and site.orgid = po.orgid). The resulting set will contain zero or one object.",
            "whereClause": "siteid = :siteid and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STATUSDESC",
            "target": "SYNONYMDOMAIN",
            "remarks": "Relationship to synonymdomain table, used to find description for the status, it will contain one object.",
            "whereClause": "domainid='POSTATUS' and value=:status and :&DOMAINFILTER&_STATUS",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DEFAULTPOTERM",
            "target": "TERM",
            "remarks": "Relationship to the Term table, used to find all term records with isdefault flag set to true. This resulting set will contain zero or more objects.",
            "whereClause": "defaultpo=:yes and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VENDORSTATUS",
            "target": "VENDORSTATUS",
            "remarks": "Relationship to the VendorStatus table, used to find all vendor status records for a given purchase order. (vendorstatus.ponum = po.ponum). The resulting set will contain zero or more objects.",
            "whereClause": "ponum = :ponum and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFASSIGNMENT",
            "target": "WFASSIGNMENT",
            "remarks": "Relationship to active assignments on this PO. (ownertable = 'PO' and ownerid = :poid and assignstatus in (select value from synonymdomain where domainid='WFASGNSTATUS' and maxvalue='ACTIVE')). Zero to many member set.",
            "whereClause": "ownertable = 'PO' and wfassignment.ownerid = :poid and assignstatus in (select value from synonymdomain where domainid='WFASGNSTATUS' and maxvalue='ACTIVE')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFTOOLBAR",
            "target": "WFTOOLBAR",
            "remarks": "Relationship to virutal set that manages the toolbar buttons. (empty). Any number member set.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFTRANSACTION",
            "target": "WFTRANSACTION",
            "remarks": "Relationship to workflow transactions. (ownertable = 'PO' and ownerid = :poid). Zero to many member set.",
            "whereClause": "ownertable = 'PO' and ownerid = :poid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKFLOWMAP",
            "target": "WORKFLOWMAP",
            "remarks": "Get virtual set to display process maps",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKLOG",
            "target": "WORKLOG",
            "remarks": "Relationship to the worklog records, used to find the worklog records for a given PO.",
            "whereClause": "",
            "cardinality": null
        },
        {
            "name": "MODIFYWORKLOG",
            "target": "WORKLOG",
            "remarks": "Relationship to the worklog records, used to find the worklog records for a given PO.",
            "whereClause": "recordkey=:ponum and class='PO' and siteid=:siteid",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "RELEASES",
            "source": "CONTRACT",
            "remarks": "Relationship to the PO table, used to find all release purchase orders for a given purchase contract. (po.origcontractid = contract.contractid). The resulting set will contain zero or more objects.",
            "whereClause": "contractrefid=:contractid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PO",
            "source": "INVOICE",
            "remarks": "Relationship to the PO table, used to find all purchase orders for a given invoice. (invoice.ponum = po.ponum). The resulting set will contain zero or one object.",
            "whereClause": "ponum=:ponum and siteid=:positeid and status not in (select value from synonymdomain where domainid = 'POSTATUS' and maxvalue in ('REVISE', 'PNDREV', 'CAN'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVC_PO",
            "source": "INVOICE",
            "remarks": null,
            "whereClause": "ponum=:ponum and siteid=:positeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PO",
            "source": "INVOICELINE",
            "remarks": "Relationship to the PO table, used to find the PO for a given invoice line. (invoiceline.ponum = po.ponum). The resulting set will contain zero or one object.",
            "whereClause": "ponum=:ponum and siteid=:positeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PO",
            "source": "INVRESERVE",
            "remarks": "Relationship to the PO table, used to find the internal purchase order for which the material is reserved. (po.ponum = invreserve.ponum). The resulting set will contain zero or one object.",
            "whereClause": "ponum = :ponum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PO",
            "source": "LABTRANS",
            "remarks": "Relationship to the PO table. Used to find out PO for the LabTrans. (PO.ponum = LabTrans.ponum). The resultset will contain at most  1 object.",
            "whereClause": "ponum = :ponum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PO",
            "source": "MATRECTRANS",
            "remarks": "Relationship to the PO table, used to find the purchase order for which the material is received or transferred.(po.ponum = matrectrans.ponum). The resulting set will contain zero or one object.",
            "whereClause": "ponum=:ponum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POREV",
            "source": "MATRECTRANS",
            "remarks": "Relationship to the PO table, used to find the purchase order for which the material is received or transferred.(po.ponum = matrectrans.ponum). The resulting set will contain zero or one object.",
            "whereClause": "ponum=:ponum and siteid=:positeid and revisionnum=:porevisionnum",
            "cardinality": null
        },
        {
            "name": "PO",
            "source": "MR",
            "remarks": "Relationship to the PO table, used to find all the po records which were created from this material requisition. (ponum in (select ponum from poline where mrnum = mr.mrnum). The resulting set will contain zero or more objects. Note: Approval of a material requisition creates one or more purchase orders and this relationship is used to find all such purchase orders.",
            "whereClause": "ponum in (select ponum from poline where mrnum = :mrnum ) and revisionnum in (select revisionnum from poline where mrnum = :mrnum) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PO",
            "source": "MRLINE",
            "remarks": "Relationship to the PO table, used to find all the po records whose lines were created from a given material requisition line. (ponum in (select ponum from poline where mrnum = mrline.mrnum and mrlinenum = mrline.mrlinenum). The resulting set will contain zero or more objects. Note : When a material requisition is approved, its lines are copied to POLines and this relationship helps find the PO to which these POLines belong to.",
            "whereClause": "ponum in (select ponum from poline where mrnum = :mrnum and mrlinenum = :mrlinenum and po.revisionnum=poline.revisionnum) and siteid=:siteid order by revisionnum desc",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWREVHIST",
            "source": "PO",
            "remarks": "Relationship to the PO table used to find all PO for a given Purchase Order",
            "whereClause": "ponum=:ponum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "PO_ORIGINAL",
            "source": "PO",
            "remarks": null,
            "whereClause": "ponum=:originalponum and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PO",
            "source": "POLINE",
            "remarks": "Relationship to the PO table, used to find the purchase order records to which a purchase order line belongs to. (po.ponum = poline.ponum). The resulting set will contain zero or more objects.",
            "whereClause": "ponum = :ponum and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POREV",
            "source": "POLINE",
            "remarks": "Relationship to the PO table, used to find the purchase order records to which a purchase order line belongs to. (po.ponum = poline.ponum). The resulting set will contain zero or more objects.",
            "whereClause": "ponum=:ponum and siteid=:siteid and revisionnum=:revisionnum",
            "cardinality": null
        },
        {
            "name": "RELEASEPO",
            "source": "PURCHVIEW",
            "remarks": "Relationship to the PO table, used to find all release POs for a given contract. (contract.contractnum=po.contractrefnum and contract.orgid=po.orgid)",
            "whereClause": "contractrefnum=:contractnum and orgid in (select authorgid from contractauth where contractnum=:contractnum and orgid=:orgid) and status not in (select value from synonymdomain where domainid = 'POSTATUS' and maxvalue in ('REVISE', 'PNDREV'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PO",
            "source": "SERVRECTRANS",
            "remarks": "Relationship to the PO table, used to find all purchase order records for a given service receipt. (po.ponum = servrectrans.ponum). The resulting set will contain one object.",
            "whereClause": "ponum = :ponum and siteid=:positeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POREV",
            "source": "SERVRECTRANS",
            "remarks": "Relationship to the PO table, used to find the purchase order for which the material is received or transferred.(po.ponum = matrectrans.ponum). The resulting set will contain zero or one object.",
            "whereClause": "ponum=:ponum and siteid=:positeid and revisionnum=:porevisionnum",
            "cardinality": null
        },
        {
            "name": "RELEASEPO",
            "source": "SFWVIEW",
            "remarks": "Relationship to the PO table, used to find all release POs for a given contract. (contract.contractnum=po.contractrefnum and contract.orgid=po.orgid)",
            "whereClause": "contractrefnum=:contractnum and orgid=:orgid and status not in (select value from synonymdomain where domainid = 'POSTATUS' and maxvalue in ('REVISE', 'PNDREV'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PO",
            "source": "SHIPMENTLINE",
            "remarks": "Relationship to the PO table, used to find a purchase order for a given shipment line. (shipmentline.ponum = po.ponum). The resulting set will contain zero or more objects. Note : A vendor may decide to send an advance shipping notice before actually sending the materials. This relationship is used to find the purchase order for which this advance shipping notice was sent.",
            "whereClause": "ponum = :ponum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WO_POGENERATED",
            "source": "WORKORDER",
            "remarks": null,
            "whereClause": "ponum=:generatedforpo and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POREV",
            "source": "WPMATERIAL",
            "remarks": "Relationship to find the PO from a planned material in a workorder",
            "whereClause": "ponum in (select prline.ponum from prline where prnum=:pr and prlinenum=:prlinenum and prline.siteid=:siteid and prline.ponum=po.ponum and prline.siteid=po.siteid and status in ( select value from synonymdomain where domainid='POSTATUS' and maxvalue in ('WAPPR','APPR','INPRG','CLOSE','HOLD'))) and siteid=:siteid  ",
            "cardinality": null
        }
    ]
}