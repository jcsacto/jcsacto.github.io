mos = {
    "objectName": "WORKORDER",
    "className": "psdi.app.workorder.WOSet",
    "description": "The WORKORDER Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "WORKORDERID",
    "primaryKeyColumns": [
        "SITEID",
        "WONUM"
    ],
    "logicalRelationships": [
        {
            "objectName": "WORKORDER",
            "targetObject": "AMCREWWOLAB",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Work Order",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "AREASAFFECTED",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "AFFECTEDSITE, WONUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 1",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "AREASAFFECTED",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to 1",
            "status": "VERIFIED",
            "description": "Areas Affected by Work Order",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "ASSETHIERARCHY",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Order",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "ASSETHISTORY",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Order",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "ASSETSTATUS",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Order that caused the Asset''s status to change.",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "ASSETTRANS",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "POSITEID, WONUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 6",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "ASSETTRANS",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Order",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "ASSETTRANS",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "TOSITEID, WONUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 8",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "ASSIGNMENT",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Assignment created for the Work Order",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "ASSIGNREPLOC",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "REPLOCSITEID, WONUM",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Work Order",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "ASSIGNREPLOC",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Order",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 10",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "WORKSITEID, WONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Order",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "FAILUREREMARK",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Failure Remark linked to a work order.",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "FAILUREREPORT",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Failure Report attached to a work order.",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "INVOICECOST",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "POSITEID, REFWO",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 14",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "INVOICECOST",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, REFWO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Order",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "INVOICECOST",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "TOSITEID, REFWO",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 16",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "INVRESERVE",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Inventory Reservations for the work order.",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "INVRESERVE",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "STORELOCSITEID, WONUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 18",
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
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "LABTRANS",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, REFWO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Actual Labor Usage",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "LBSLOCATION",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Orders",
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
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "MATUSETRANS",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, REFWO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Material Use Transactions",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "MATUSETRANS",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "TOSITEID, REFWO",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 28",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "MR",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Order",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "MRLINE",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, REFWO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Order",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "MRLINE",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "STORELOCSITE, REFWO",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 31",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "PLUSCSPOTCHECK",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Order",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "PLUSCWODS",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Order",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "PLUSCWODSINSTR",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Order",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "PLUSCWODSPOINT",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Order",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "POINTWO",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Order",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "POLINE",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, REFWO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Purchase Order Lines generated for this Work Order.",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "POLINE",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "TOSITEID, REFWO",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 38",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "PRLINE",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "POSITEID, REFWO",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 39",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "PRLINE",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, REFWO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Order for which PR Line Item was ordered.",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "RELATEDRECORD",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "RELATEDRECSITEID, RECORDKEY",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 41",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "RELATEDRECORD",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, RECORDKEY",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 42",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "REORDERPAD",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 43",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "REORDERPAD",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "STORELOCSITE, WONUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 44",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "RFQLINE",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, REFWO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Order",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "SERVRECTRANS",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "FROMSITEID, REFWO",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 46",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "SERVRECTRANS",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "POSITEID, REFWO",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 47",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "SERVRECTRANS",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, REFWO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Service Transactions",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "SKDACTIVITYQBE",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "SKD Activity QBE Work Order",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "SKDEMAVAILRES",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "CURSITEID, CURWONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Current Work Order",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "TOOLTRANS",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "ROTASSETSITE, REFWO",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 50",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "TOOLTRANS",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, REFWO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Actual Tool Usage",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "UNASSIGNEDWORKVIEW",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, PARENT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Parent Work Order",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "UNASSIGNEDWORKVIEW",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Order",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WMASSIGNMENT",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "REPFACSITEID, ORIGRECORDID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 52",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WMASSIGNMENT",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "REPFACSITEID, PARENT",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 53",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WMASSIGNMENT",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "REPFACSITEID, WOGROUP",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 54",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WMASSIGNMENT",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "REPFACSITEID, WONUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 55",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WMASSIGNMENT",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, ORIGRECORDID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 56",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WMASSIGNMENT",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, PARENT",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 57",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WMASSIGNMENT",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WOGROUP",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 58",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WMASSIGNMENT",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Order",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WMASSIGNTMP",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Order",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WOACTIVITY",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "REPFACSITEID, ORIGRECORDID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 60",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WOACTIVITY",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "REPFACSITEID, PARENT",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 61",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WOACTIVITY",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "REPFACSITEID, WOGROUP",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 62",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WOACTIVITY",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "REPFACSITEID, WONUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 63",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WOACTIVITY",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, ORIGRECORDID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 64",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WOACTIVITY",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, PARENT",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 65",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WOACTIVITY",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WOGROUP",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 66",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WOACTIVITY",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "0 to 1",
            "status": "VERIFIED",
            "description": "Extra Activity data for WOActivity class Work Orders.",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WOANCESTOR",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, ANCESTOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "List of Work Order and its descendants.",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WOANCESTOR",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "List of Work Order and its ancestors.",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WOCHANGE",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "REPFACSITEID, ORIGRECORDID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 70",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WOCHANGE",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "REPFACSITEID, PARENT",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 71",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WOCHANGE",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "REPFACSITEID, WOGROUP",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 72",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WOCHANGE",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "REPFACSITEID, WONUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 73",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WOCHANGE",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, ORIGRECORDID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 74",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WOCHANGE",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, PARENT",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 75",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WOCHANGE",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WOGROUP",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 76",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WOCHANGE",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Extra data for WOChange class Work Orders.",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WOCONTRACT",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Link to Contract covering Work Order",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WOGEN",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, PARENT",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 79",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WOHAZARD",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Order''s Safety Hazards",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WOHAZARDPREC",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Order''s Safety Hazards and Precautions",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WOLOCKOUT",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Lock-outs required for work.",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WOMETER",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to 1",
            "status": "VERIFIED",
            "description": "Meter Reading taken.",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WOOWNERHISTORY",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Order Ownership History",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WOPRECAUTION",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "The Work Order''s safety precautions.",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WORELEASE",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "REPFACSITEID, ORIGRECORDID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 86",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WORELEASE",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "REPFACSITEID, PARENT",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 87",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WORELEASE",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "REPFACSITEID, WOGROUP",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 88",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WORELEASE",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "REPFACSITEID, WONUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 89",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WORELEASE",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, ORIGRECORDID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 90",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WORELEASE",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, PARENT",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 91",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WORELEASE",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WOGROUP",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 92",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WORELEASE",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Extra data for WORelease class Work Orders.",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WORELEXT",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Order",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WORKORDER",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "REPFACSITEID, ORIGRECORDID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 95",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WORKORDER",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "REPFACSITEID, PARENT",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 96",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WORKORDER",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "REPFACSITEID, WOGROUP",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 97",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WORKORDER",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, ORIGRECORDID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 98",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WORKORDER",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, PARENT",
            "relNum": "0 to 1",
            "status": "VERIFIED",
            "description": "Parent Work Order",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WORKORDER",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WOGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "This Work Order''s group",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WORKORDERSPEC",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Order",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WOSAFETYLINK",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 102",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WOSAFETYPLAN",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Order''s Safety Plan",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WOSERVICEADDRESS",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Order",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WOSTATUS",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, PARENT",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 104",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WOSTATUS",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Order Status History",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WOTAGLOCK",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Order Safety Tag-Locks",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WOTAGOUT",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Order Safety Tag-Outs",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WOTASKRELATION",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, PREDREFWONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Predecessor Work Order Task",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WOTASKRELATION",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, PREDWONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Predecessor Work Order",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WOTASKRELATION",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Order",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WPITEM",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Plan Items",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WPITEM",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "STORELOCSITE, WONUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 112",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WPLABOR",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Plan Labor",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WPMATERIAL",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Plan Material",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WPMATERIAL",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "STORELOCSITE, WONUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 115",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WPSERVICE",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Plan Services",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WPSERVICE",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "STORELOCSITE, WONUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 117",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WPTOOL",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Plan Tools",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WPTOOL",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "STORELOCSITE, WONUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 119",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "ACTCI",
            "targetObject": "WORKORDER",
            "parentKeys": "ACTCINUM",
            "targetKeys": "CINUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 30",
            "longDescription": null
        },
        {
            "objectName": "ACTION",
            "targetObject": "WORKORDER",
            "parentKeys": "ACTION",
            "targetKeys": "FLOWACTION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Flow Action",
            "longDescription": null
        },
        {
            "objectName": "AMCREW",
            "targetObject": "WORKORDER",
            "parentKeys": "ORGID, AMCREW",
            "targetKeys": "ORGID, AMCREW",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew",
            "longDescription": null
        },
        {
            "objectName": "AMCREW",
            "targetObject": "WORKORDER",
            "parentKeys": "ORGID, AMCREW",
            "targetKeys": "CALCORGID, AMCREW",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 35",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "WORKORDER",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "REPFACSITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 174",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "WORKORDER",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": "1 to 1",
            "status": "VERIFIED",
            "description": "Work Order Asset",
            "longDescription": null
        },
        {
            "objectName": "CALENDAR",
            "targetObject": "WORKORDER",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "CALCORGID, CALCCALENDAR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Target Calculation Calendar",
            "longDescription": null
        },
        {
            "objectName": "CALENDAR",
            "targetObject": "WORKORDER",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "CALCORGID, CALENDAR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 50",
            "longDescription": null
        },
        {
            "objectName": "CALENDAR",
            "targetObject": "WORKORDER",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "ORGID, CALCCALENDAR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 51",
            "longDescription": null
        },
        {
            "objectName": "CALENDAR",
            "targetObject": "WORKORDER",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "ORGID, CALENDAR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Order Calendar",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "WORKORDER",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Order''s Class Structure",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "WORKORDER",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "CALCORGID, VENDOR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 102",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "WORKORDER",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor performing work.",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "WORKORDER",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACT, GENFORPOREVISION, CALCORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 74",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "WORKORDER",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACT, GENFORPOREVISION, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 75",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "WORKORDER",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "CALCORGID, FAILURECODE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 87",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "WORKORDER",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "CALCORGID, PROBLEMCODE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 88",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "WORKORDER",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORGID, FAILURECODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Failure Hierarchy.",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "WORKORDER",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORGID, PROBLEMCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "1st levelof the failure hierarchy",
            "longDescription": null
        },
        {
            "objectName": "FINCNTRL",
            "targetObject": "WORKORDER",
            "parentKeys": "ORGID, FINCNTRLID",
            "targetKeys": "CALCORGID, FINCNTRLID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Financial Control",
            "longDescription": null
        },
        {
            "objectName": "FINCNTRL",
            "targetObject": "WORKORDER",
            "parentKeys": "ORGID, FINCNTRLID",
            "targetKeys": "ORGID, FINCNTRLID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Financial Control",
            "longDescription": null
        },
        {
            "objectName": "JOBPLAN",
            "targetObject": "WORKORDER",
            "parentKeys": "JPNUM, ORGID, SITEID, PLUSCREVNUM",
            "targetKeys": "JPNUM, CALCORGID, REPFACSITEID, PLUSCJPREVNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 33",
            "longDescription": null
        },
        {
            "objectName": "JOBPLAN",
            "targetObject": "WORKORDER",
            "parentKeys": "JPNUM, ORGID, SITEID, PLUSCREVNUM",
            "targetKeys": "JPNUM, CALCORGID, SITEID, PLUSCJPREVNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 34",
            "longDescription": null
        },
        {
            "objectName": "JOBPLAN",
            "targetObject": "WORKORDER",
            "parentKeys": "JPNUM, ORGID, SITEID, PLUSCREVNUM",
            "targetKeys": "JPNUM, ORGID, REPFACSITEID, PLUSCJPREVNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 35",
            "longDescription": null
        },
        {
            "objectName": "JOBPLAN",
            "targetObject": "WORKORDER",
            "parentKeys": "JPNUM, ORGID, SITEID, PLUSCREVNUM",
            "targetKeys": "JPNUM, ORGID, SITEID, PLUSCJPREVNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Job Plan applied to the Work Order",
            "longDescription": null
        },
        {
            "objectName": "JOBTASK",
            "targetObject": "WORKORDER",
            "parentKeys": "JOBTASKID",
            "targetKeys": "JOBTASKID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Job Task used to create Work Order",
            "longDescription": null
        },
        {
            "objectName": "LABOR",
            "targetObject": "WORKORDER",
            "parentKeys": "ORGID, LABORCODE",
            "targetKeys": "CALCORGID, WOLABLNK",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 21",
            "longDescription": null
        },
        {
            "objectName": "LABOR",
            "targetObject": "WORKORDER",
            "parentKeys": "ORGID, LABORCODE",
            "targetKeys": "ORGID, WOLABLNK",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Linked Labor",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "WORKORDER",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "WORKORDER",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "REPFACSITEID, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 237",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "WORKORDER",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "REPFACSITEID, REPAIRFACILITY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Repair facility used by the Work Order",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "WORKORDER",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "REPFACSITEID, WORKLOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 239",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "WORKORDER",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Order''s Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "WORKORDER",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, REPAIRFACILITY",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 241",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "WORKORDER",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, WORKLOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location responsible for work.",
            "longDescription": null
        },
        {
            "objectName": "MAXLAUNCHENTRY",
            "targetObject": "WORKORDER",
            "parentKeys": "LAUNCHENTRYNAME",
            "targetKeys": "LAUNCHENTRYNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Launch Entry",
            "longDescription": null
        },
        {
            "objectName": "MEASUREPOINT",
            "targetObject": "WORKORDER",
            "parentKeys": "POINTNUM, SITEID",
            "targetKeys": "POINTNUM, REPFACSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 14",
            "longDescription": null
        },
        {
            "objectName": "MEASUREPOINT",
            "targetObject": "WORKORDER",
            "parentKeys": "POINTNUM, SITEID",
            "targetKeys": "POINTNUM, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measure Point to take reading for.",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "WORKORDER",
            "parentKeys": "ORGID",
            "targetKeys": "CALCORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization used for target date calculation.",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "WORKORDER",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WORKORDER",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WORKORDER",
            "parentKeys": "PERSONID",
            "targetKeys": "INSPECTOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Inspector",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WORKORDER",
            "parentKeys": "PERSONID",
            "targetKeys": "LEAD",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Lead",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WORKORDER",
            "parentKeys": "PERSONID",
            "targetKeys": "OWNER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Owner",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WORKORDER",
            "parentKeys": "PERSONID",
            "targetKeys": "SUPERVISOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Supervisor",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "WORKORDER",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "ASSIGNEDOWNERGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Assigned Owner Group",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "WORKORDER",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "OWNERGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Owner Group",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "WORKORDER",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "PERSONGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person Group",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "WORKORDER",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "CREWWORKGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Work Group",
            "longDescription": null
        },
        {
            "objectName": "PM",
            "targetObject": "WORKORDER",
            "parentKeys": "SITEID, PMNUM",
            "targetKeys": "REPFACSITEID, PMNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 33",
            "longDescription": null
        },
        {
            "objectName": "PM",
            "targetObject": "WORKORDER",
            "parentKeys": "SITEID, PMNUM",
            "targetKeys": "SITEID, PMNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PM for a Work Order",
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
        },
        {
            "objectName": "POLINE",
            "targetObject": "WORKORDER",
            "parentKeys": "POLINEID",
            "targetKeys": "GENFORPOLINEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Purchase Order Line this Work Order was generated for.",
            "longDescription": null
        },
        {
            "objectName": "ROUTE_STOP",
            "targetObject": "WORKORDER",
            "parentKeys": "SITEID, ROUTE, ROUTESTOPID",
            "targetKeys": "REPFACSITEID, ROUTE, ROUTESTOPID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 11",
            "longDescription": null
        },
        {
            "objectName": "ROUTE_STOP",
            "targetObject": "WORKORDER",
            "parentKeys": "SITEID, ROUTE, ROUTESTOPID",
            "targetKeys": "SITEID, ROUTE, ROUTESTOPID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Route Stop that was used to create this Work Order",
            "longDescription": null
        },
        {
            "objectName": "ROUTES",
            "targetObject": "WORKORDER",
            "parentKeys": "SITEID, ROUTE",
            "targetKeys": "REPFACSITEID, ROUTE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 16",
            "longDescription": null
        },
        {
            "objectName": "ROUTES",
            "targetObject": "WORKORDER",
            "parentKeys": "SITEID, ROUTE",
            "targetKeys": "SITEID, ROUTE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Route applied to a Work Order",
            "longDescription": null
        },
        {
            "objectName": "SHIFT",
            "targetObject": "WORKORDER",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "CALCORGID, CALCSHIFT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Shift used for target date calculation",
            "longDescription": null
        },
        {
            "objectName": "SHIFT",
            "targetObject": "WORKORDER",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "ORGID, CALCSHIFT",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 40",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "WORKORDER",
            "parentKeys": "SITEID",
            "targetKeys": "REPFACSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 304",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "WORKORDER",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "TICKET",
            "targetObject": "WORKORDER",
            "parentKeys": "ORIGRECSITEID, ORIGRECORDID",
            "targetKeys": "SITEID, WONUM",
            "relNum": "0 to 1",
            "status": "VERIFIED",
            "description": "Originating Work Order",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WORKORDER",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "REPFACSITEID, ORIGRECORDID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 95",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WORKORDER",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "REPFACSITEID, PARENT",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 96",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WORKORDER",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "REPFACSITEID, WOGROUP",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 97",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WORKORDER",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, ORIGRECORDID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 98",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WORKORDER",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, PARENT",
            "relNum": "0 to 1",
            "status": "VERIFIED",
            "description": "Parent Work Order",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WORKORDER",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WOGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "This Work Order''s group",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "WONUM",
            "required": true,
            "persistent": true,
            "title": "Work Order",
            "remarks": "Identifies the work order.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PARENT",
            "required": false,
            "persistent": true,
            "title": "Parent WO",
            "remarks": "Parent of the work order shown in the Work Order field. When this field is blank, the work order in the Work Order field is a top-level work order. To assign a work order to a parent, select Assign to New Parent from the Select Action menu.",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "STATUS",
            "required": true,
            "persistent": true,
            "title": "Status",
            "remarks": "Status of the work order, for example, in progress, waiting on material, waiting for approval, completed, or closed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUSDATE",
            "required": true,
            "persistent": true,
            "title": "Status Date",
            "remarks": "Date the work order status was last changed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WORKTYPE",
            "required": false,
            "persistent": true,
            "title": "Work Type",
            "remarks": "Identifies the work order's type. Some example types are: preventive maintenance, corrective maintenance, emergency maintenace, capital project, and event report.",
            "sameAsAttribute": "WORKTYPE",
            "sameAsObject": "WORKTYPE"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the work order. To enter or view additional information, click the Long Description button.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": true,
            "title": "Asset",
            "remarks": "Identifies the asset.",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": true,
            "title": "Location",
            "remarks": "Identifies the work order's location. This is not necessarily the asset's location, however, if an asset is entered, its location will default here",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "JPNUM",
            "required": false,
            "persistent": true,
            "title": "Job Plan",
            "remarks": "Identifies the work order's job plan. When you assign a job plan to a work order, Maximo copies the job plan operations, material, labor, and tool information to the work order's work plan. Maximo also copies job plan data into these fields: Interruptible?, Crew, Supervisor, and WO Priority. If there is an existing association between the job plan and a safety plan when the job plan is used on the asset or location, Maximo also copies the safety plan to the work order. In addition, Maximo automatically copies a single measurement point if there is an existing association between the asset on the work order and the point name on the job plan.",
            "sameAsAttribute": "JPNUM",
            "sameAsObject": "JOBPLAN"
        },
        {
            "attributeName": "FAILDATE",
            "required": false,
            "persistent": true,
            "title": "Failed Date",
            "remarks": "Actual Failure Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEBY",
            "required": false,
            "persistent": true,
            "title": "Changed By",
            "remarks": "Modified By",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": false,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "Date the work order was last modified.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ESTDUR",
            "required": true,
            "persistent": true,
            "title": "Duration",
            "remarks": "Estimated remaining number of hours needed to complete the work.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ESTLABHRS",
            "required": true,
            "persistent": true,
            "title": "Estimated Labor Hours",
            "remarks": "Estimated Labor Hours",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ESTMATCOST",
            "required": true,
            "persistent": true,
            "title": "Estimated Material Cost",
            "remarks": "Estimated Material Cost",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ESTLABCOST",
            "required": true,
            "persistent": true,
            "title": "Estimated Labor Cost",
            "remarks": "Estimated Labor Cost",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ESTTOOLCOST",
            "required": true,
            "persistent": true,
            "title": "Estimated Tool Cost",
            "remarks": "Estimated Tool Cost",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PMNUM",
            "required": false,
            "persistent": true,
            "title": "PM",
            "remarks": "Identifies the preventive maintenance record from which the work order was generated.",
            "sameAsAttribute": "PMNUM",
            "sameAsObject": "PM"
        },
        {
            "attributeName": "ACTLABHRS",
            "required": true,
            "persistent": true,
            "title": "Actual Labor Hours",
            "remarks": "Actual Labor Hours",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ACTMATCOST",
            "required": true,
            "persistent": true,
            "title": "Actual Material Cost",
            "remarks": "Actual Material Cost",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ACTLABCOST",
            "required": true,
            "persistent": true,
            "title": "Actual Labor Cost",
            "remarks": "Actual Labor Cost",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ACTTOOLCOST",
            "required": true,
            "persistent": true,
            "title": "Actual Tool Cost",
            "remarks": "Actual Tool Cost",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HASCHILDREN",
            "required": true,
            "persistent": true,
            "title": "Has Children",
            "remarks": "Y if WO has children N if it has no children",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OUTLABCOST",
            "required": true,
            "persistent": true,
            "title": "Outside Labor Cost",
            "remarks": "Outside Labor Cost",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OUTMATCOST",
            "required": true,
            "persistent": true,
            "title": "Outside Material Cost",
            "remarks": "Outside Material Cost",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OUTTOOLCOST",
            "required": true,
            "persistent": true,
            "title": "Outside Tool Cost",
            "remarks": "Outside Tool Cost",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HISTORYFLAG",
            "required": true,
            "persistent": true,
            "title": "History",
            "remarks": "Yes/No field or check box that specifies whether a record is a history record or is currently active. History records are complete, closed, canceled, etc. If a Y is in the History? field or the check box is selected, the record is a history record. On the List tab or the More Search Fields dialog box, you can enter a Y in the History? field to include only history records in the search results. If an N is in the field, Maximo includes only currently active records in the search results. If the field is empty (null), Maximo includes history and active records in the search results.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONTRACT",
            "required": false,
            "persistent": true,
            "title": "Contract",
            "remarks": "Identifies the warranty contract for the asset.",
            "sameAsAttribute": "CONTRACTNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "WOPRIORITY",
            "required": false,
            "persistent": true,
            "title": "Priority",
            "remarks": "Identifies the importance of the work order, from 0-999, where 0 is the lowest priority and 999 is the highest.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TARGCOMPDATE",
            "required": false,
            "persistent": true,
            "title": "Target Finish",
            "remarks": "Date the work order is targeted to be completed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TARGSTARTDATE",
            "required": false,
            "persistent": true,
            "title": "Target Start",
            "remarks": "Date the work order is targeted to begin. If the work order is generated from a PM, the date is supplied by the PM work order generation process.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WOEQ1",
            "required": false,
            "persistent": true,
            "title": "Woeq1",
            "remarks": "Extra Field Copied From Asset",
            "sameAsAttribute": "EQ1",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "WOEQ2",
            "required": false,
            "persistent": true,
            "title": "Woeq2",
            "remarks": "Extra Field Copied From Asset",
            "sameAsAttribute": "EQ2",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "WOEQ3",
            "required": false,
            "persistent": true,
            "title": "Woeq3",
            "remarks": "Extra Field Copied From Asset",
            "sameAsAttribute": "EQ3",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "WOEQ4",
            "required": false,
            "persistent": true,
            "title": "Woeq4",
            "remarks": "Extra Field Copied From Asset",
            "sameAsAttribute": "EQ4",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "WOEQ5",
            "required": false,
            "persistent": true,
            "title": "Woeq5",
            "remarks": "Extra Field Copied From Asset",
            "sameAsAttribute": "EQ5",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "WOEQ6",
            "required": false,
            "persistent": true,
            "title": "Woeq6",
            "remarks": "Extra Field Copied From Asset",
            "sameAsAttribute": "EQ6",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "WOEQ7",
            "required": false,
            "persistent": true,
            "title": "Woeq7",
            "remarks": "Extra Field Copied From Asset",
            "sameAsAttribute": "EQ7",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "WOEQ8",
            "required": false,
            "persistent": true,
            "title": "Woeq8",
            "remarks": "Extra Field Copied From Asset",
            "sameAsAttribute": "EQ8",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "WOEQ9",
            "required": false,
            "persistent": true,
            "title": "Woeq9",
            "remarks": "Extra Field Copied From Asset",
            "sameAsAttribute": "EQ9",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "WOEQ10",
            "required": false,
            "persistent": true,
            "title": "Woeq10",
            "remarks": "Extra Field Copied From Asset",
            "sameAsAttribute": "EQ10",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "WOEQ11",
            "required": false,
            "persistent": true,
            "title": "Woeq11",
            "remarks": "Extra Field Copied From Asset",
            "sameAsAttribute": "EQ11",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "WOEQ12",
            "required": false,
            "persistent": true,
            "title": "Woeq12",
            "remarks": "Extra Field Copied From Asset",
            "sameAsAttribute": "EQ12",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "REPORTEDBY",
            "required": false,
            "persistent": true,
            "title": "Reported By",
            "remarks": "Identifies the person reporting the work order.",
            "sameAsAttribute": "DISPLAYNAME",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "REPORTDATE",
            "required": false,
            "persistent": true,
            "title": "Reported Date",
            "remarks": "The date and time the work order was reported.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PHONE",
            "required": false,
            "persistent": true,
            "title": "Phone",
            "remarks": "The phone number (usually a work site telephone number) associated with the work order. If the Reported By person has a phone number associated with it, that phone number is the default for this field.",
            "sameAsAttribute": "PHONENUM",
            "sameAsObject": "PHONE"
        },
        {
            "attributeName": "PROBLEMCODE",
            "required": false,
            "persistent": true,
            "title": "Problem Code",
            "remarks": "The problem being reported based on the defined Failure Class. This is usually the code in the second level of the failure reporting hierarchy.",
            "sameAsAttribute": "FAILURECODE",
            "sameAsObject": "FAILURECODE"
        },
        {
            "attributeName": "CALENDAR",
            "required": false,
            "persistent": true,
            "title": "Calendar",
            "remarks": "Calendar to determine shift work is to be done on",
            "sameAsAttribute": "CALNUM",
            "sameAsObject": "CALENDAR"
        },
        {
            "attributeName": "DOWNTIME",
            "required": true,
            "persistent": true,
            "title": "Downtime",
            "remarks": "Does the Asset have to be down for this work order?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ACTSTART",
            "required": false,
            "persistent": true,
            "title": "Actual Start",
            "remarks": "Date and time the actual work begain.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ACTFINISH",
            "required": false,
            "persistent": true,
            "title": "Actual Finish",
            "remarks": "Date and time the actual work was completed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SCHEDSTART",
            "required": false,
            "persistent": true,
            "title": "Scheduled Start",
            "remarks": "Date and time the work is scheduled to begin.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SCHEDFINISH",
            "required": false,
            "persistent": true,
            "title": "Scheduled Finish",
            "remarks": "Date and time the work is scheduled to be completed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REMDUR",
            "required": false,
            "persistent": true,
            "title": "Time Remaining",
            "remarks": "Indicates the number of remaining hours needed to complete the work. You can modify this value until the work order is closed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CREWID",
            "required": false,
            "persistent": true,
            "title": "Crew",
            "remarks": "ID for a given crew within an craft",
            "sameAsAttribute": "CREWID",
            "sameAsObject": "LABOR"
        },
        {
            "attributeName": "SUPERVISOR",
            "required": false,
            "persistent": true,
            "title": "Supervisor",
            "remarks": "Supervisor of the work. Maximo copies this information from the job plan, if there is one. You also can select a supervisor.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "WOEQ13",
            "required": false,
            "persistent": true,
            "title": "Woeq13",
            "remarks": "Extra Field",
            "sameAsAttribute": "EQ23",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "WOEQ14",
            "required": false,
            "persistent": true,
            "title": "Woeq14",
            "remarks": "Extra Field",
            "sameAsAttribute": "EQ24",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "WOJP1",
            "required": false,
            "persistent": true,
            "title": "Wojp1",
            "remarks": "Extra Field",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WOJP2",
            "required": false,
            "persistent": true,
            "title": "Wojp2",
            "remarks": "Extra Field",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WOJP3",
            "required": false,
            "persistent": true,
            "title": "Wojp3",
            "remarks": "Extra Field",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WOJP4",
            "required": false,
            "persistent": true,
            "title": "Wojp4",
            "remarks": "Extra Field",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WOJP5",
            "required": false,
            "persistent": true,
            "title": "Wojp5",
            "remarks": "Extra Field",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WOL1",
            "required": false,
            "persistent": true,
            "title": "Wol1",
            "remarks": "Extra Field",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WOL2",
            "required": false,
            "persistent": true,
            "title": "Wol2",
            "remarks": "Extra Field",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WOL3",
            "required": false,
            "persistent": true,
            "title": "Wol3",
            "remarks": "Extra Field",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WOL4",
            "required": false,
            "persistent": true,
            "title": "Wol4",
            "remarks": "Extra Field",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WOLABLNK",
            "required": false,
            "persistent": true,
            "title": "Labor",
            "remarks": "Labor Code Link",
            "sameAsAttribute": "LABORCODE",
            "sameAsObject": "LABOR"
        },
        {
            "attributeName": "RESPONDBY",
            "required": false,
            "persistent": true,
            "title": "Respond By",
            "remarks": "A Calculated field specifying when by a breakdown should be responded to.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSETLOCPRIORITY",
            "required": false,
            "persistent": true,
            "title": "Asset/Location Priority",
            "remarks": "Identifies the priority level copied from the asset or location record and used to schedule the work order. Values from 0-999 are valid, but we recommend limiting your range of values to 0-9, where 0 designates the lowest priority. We also recommend assigning priority values only to locations. Entering a value will update the CalcPriority field according to the calculation option in the PriCalc table. MAXIMO uses this value to update the Respond By date.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CALCPRIORITY",
            "required": false,
            "persistent": true,
            "title": "Calculated Priority",
            "remarks": "Calculated Work Priority",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHARGESTORE",
            "required": true,
            "persistent": true,
            "title": "Charge to Store",
            "remarks": "Check box that Indicates whether charges on the work order should be added to the asset record. If the check box is selected, the charges will be added to the asset; if the check box is cleared, the charges will not be added to the asset. If the asset on the work order is a non-capitalized rotating asset not located in an operating location or a storeroom, Maximo selects the check box; otherwise this check box is cleared.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FAILURECODE",
            "required": false,
            "persistent": true,
            "title": "Failure Class",
            "remarks": "Failure class of the defined work asset. The failure class is the top level of the failure hierarchy.",
            "sameAsAttribute": "FAILURECODE",
            "sameAsObject": "FAILURECODE"
        },
        {
            "attributeName": "WOLO1",
            "required": false,
            "persistent": true,
            "title": "Wolo1",
            "remarks": "Extra Field",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WOLO2",
            "required": false,
            "persistent": true,
            "title": "Wolo2",
            "remarks": "Extra Field",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WOLO3",
            "required": false,
            "persistent": true,
            "title": "Wolo3",
            "remarks": "Extra Field",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WOLO4",
            "required": false,
            "persistent": true,
            "title": "Wolo4",
            "remarks": "Extra Field",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WOLO5",
            "required": false,
            "persistent": true,
            "title": "Wolo5",
            "remarks": "Extra Field",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WOLO6",
            "required": false,
            "persistent": true,
            "title": "Wolo6",
            "remarks": "Extra Field",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WOLO7",
            "required": false,
            "persistent": true,
            "title": "Wolo7",
            "remarks": "Extra Field",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WOLO8",
            "required": false,
            "persistent": true,
            "title": "Wolo8",
            "remarks": "Extra Field",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WOLO9",
            "required": false,
            "persistent": true,
            "title": "Wolo9",
            "remarks": "Extra Field",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WOLO10",
            "required": false,
            "persistent": true,
            "title": "Wolo10",
            "remarks": "Extra Field",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLACCOUNT",
            "required": false,
            "persistent": true,
            "title": "GL Account",
            "remarks": "General ledger account code to which work order costs are charged. The GL account consists of up to four components: cost center, activity, resource, and element, each separated by a hyphen. If the work order was generated from a PM, Maximo copies the GL account from the PM. This field is read-only if the Charge to Store? check box is selected.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ESTSERVCOST",
            "required": true,
            "persistent": true,
            "title": "Estimated Service Cost",
            "remarks": "Total estimated service cost against this work order.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ACTSERVCOST",
            "required": true,
            "persistent": true,
            "title": "Actual Service Cost",
            "remarks": "Total actual service cost against this work order.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DISABLED",
            "required": true,
            "persistent": true,
            "title": "Disabled",
            "remarks": "Is this record active?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ESTATAPPRLABHRS",
            "required": true,
            "persistent": true,
            "title": "Estimate Labor Hours at Approval",
            "remarks": "Estimate of the work order's labor hours at the time the work order was approved.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ESTATAPPRLABCOST",
            "required": true,
            "persistent": true,
            "title": "Estimate Labor Cost at Approval",
            "remarks": "Cost estimate of the work order's labor at the time the work order was approved.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ESTATAPPRMATCOST",
            "required": true,
            "persistent": true,
            "title": "Estimate Material Cost at Approval",
            "remarks": "Cost estimate of the work order's material at the time the work order was approved.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ESTATAPPRTOOLCOST",
            "required": true,
            "persistent": true,
            "title": "Estimate Tool Cost at Approval",
            "remarks": "Cost estimate of the work order's tools at the time the work order was approved.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ESTATAPPRSERVCOST",
            "required": true,
            "persistent": true,
            "title": "Estimate Service Cost at Approval",
            "remarks": "Cost estimate of the work order's services when the work order is approved.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WOSEQUENCE",
            "required": false,
            "persistent": true,
            "title": "Sequence",
            "remarks": "Indicates sequence in which to execute the work orders in a work order hierarchy.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HASFOLLOWUPWORK",
            "required": true,
            "persistent": true,
            "title": "Has Follow-up Work",
            "remarks": "Specifies whether the work order has follow up work. If the check box is selected, there is follow up work. If the check box is cleared (the default), there is no follow up work.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WORTS1",
            "required": false,
            "persistent": true,
            "title": "Worts1",
            "remarks": "Crossover field from Route_Stop.RTS1",
            "sameAsAttribute": "RTS1",
            "sameAsObject": "ROUTE_STOP"
        },
        {
            "attributeName": "WORTS2",
            "required": false,
            "persistent": true,
            "title": "Worts2",
            "remarks": "Crossover field from Route_Stop.RTS2",
            "sameAsAttribute": "RTS2",
            "sameAsObject": "ROUTE_STOP"
        },
        {
            "attributeName": "WORTS3",
            "required": false,
            "persistent": true,
            "title": "Worts3",
            "remarks": "Crossover field from Route_Stop.RTS3",
            "sameAsAttribute": "RTS3",
            "sameAsObject": "ROUTE_STOP"
        },
        {
            "attributeName": "WORTS4",
            "required": false,
            "persistent": true,
            "title": "Worts4",
            "remarks": "Crossover field from Route_Stop.RTS4",
            "sameAsAttribute": "RTS4",
            "sameAsObject": "ROUTE_STOP"
        },
        {
            "attributeName": "WORTS5",
            "required": false,
            "persistent": true,
            "title": "Worts5",
            "remarks": "Crossover field from Route_Stop.RTS5",
            "sameAsAttribute": "RTS5",
            "sameAsObject": "ROUTE_STOP"
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
            "attributeName": "PMDUEDATE",
            "required": false,
            "persistent": true,
            "title": "PM Due Date",
            "remarks": "From the original Next Due Date of the PM",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PMEXTDATE",
            "required": false,
            "persistent": true,
            "title": "PM Extension Date",
            "remarks": "From the Extended Date of the PM",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PMNEXTDUEDATE",
            "required": false,
            "persistent": true,
            "title": "PM Next Due Date",
            "remarks": "From the next Next Due Date of the PM",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WORKLOCATION",
            "required": false,
            "persistent": true,
            "title": "Work Location",
            "remarks": "Identifier of the Work Location that is to be responsible for the work.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
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
            "attributeName": "FINCNTRLID",
            "required": false,
            "persistent": true,
            "title": "FCID",
            "remarks": "Financial Control Identifier",
            "sameAsAttribute": "FINCNTRLID",
            "sameAsObject": "FINCNTRL"
        },
        {
            "attributeName": "GENERATEDFORPO",
            "required": false,
            "persistent": true,
            "title": "PO",
            "remarks": "Work order for PO",
            "sameAsAttribute": "PONUM",
            "sameAsObject": "PO"
        },
        {
            "attributeName": "GENFORPOLINEID",
            "required": false,
            "persistent": true,
            "title": "PO Line ID",
            "remarks": "POLINEID number that required the work",
            "sameAsAttribute": "POLINEID",
            "sameAsObject": "POLINE"
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
            "remarks": "Identifies the site.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "TASKID",
            "required": false,
            "persistent": true,
            "title": "Task",
            "remarks": "Identifies the task.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INSPECTOR",
            "required": false,
            "persistent": true,
            "title": "Inspector",
            "remarks": "Identifies the inspector assigned to the work order",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "MEASUREMENTVALUE",
            "required": false,
            "persistent": true,
            "title": "Measurement",
            "remarks": "Recorded Measurement",
            "sameAsAttribute": "MEASUREMENTVALUE",
            "sameAsObject": "MEASUREMENT"
        },
        {
            "attributeName": "MEASUREDATE",
            "required": false,
            "persistent": true,
            "title": "Measurement Date",
            "remarks": "Date/Time when measurement was taken or when observation was taken. This field becomes read-only when you enter a measurement and save the record.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OBSERVATION",
            "required": false,
            "persistent": true,
            "title": "Observation",
            "remarks": "Describes the visual inspection data for this operation. If the work order has an associated work plan, Maximo copies this information from the Plans tab. You can edit this field until the work order is closed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "POINTNUM",
            "required": false,
            "persistent": true,
            "title": "Measurement Point",
            "remarks": "The point number on the asset from which the measurement is taken.",
            "sameAsAttribute": "POINTNUM",
            "sameAsObject": "MEASUREPOINT"
        },
        {
            "attributeName": "WOJO1",
            "required": false,
            "persistent": true,
            "title": "WOJO1",
            "remarks": "Extra Field",
            "sameAsAttribute": "JO1",
            "sameAsObject": "JOBTASK"
        },
        {
            "attributeName": "WOJO2",
            "required": false,
            "persistent": true,
            "title": "WOJO2",
            "remarks": "Extra Field",
            "sameAsAttribute": "JO2",
            "sameAsObject": "JOBTASK"
        },
        {
            "attributeName": "WOJO3",
            "required": false,
            "persistent": true,
            "title": "WOJO3",
            "remarks": "Extra Field",
            "sameAsAttribute": "JO3",
            "sameAsObject": "JOBTASK"
        },
        {
            "attributeName": "WOJO4",
            "required": false,
            "persistent": true,
            "title": "WOJO4",
            "remarks": "Extra Field",
            "sameAsAttribute": "JO4",
            "sameAsObject": "JOBTASK"
        },
        {
            "attributeName": "WOJO5",
            "required": false,
            "persistent": true,
            "title": "WOJO5",
            "remarks": "Extra Field",
            "sameAsAttribute": "JO5",
            "sameAsObject": "JOBTASK"
        },
        {
            "attributeName": "WOJO6",
            "required": false,
            "persistent": true,
            "title": "WOJO6",
            "remarks": "Extra Field",
            "sameAsAttribute": "JO6",
            "sameAsObject": "JOBTASK"
        },
        {
            "attributeName": "WOJO7",
            "required": false,
            "persistent": true,
            "title": "WOJO7",
            "remarks": "Extra Field",
            "sameAsAttribute": "JO7",
            "sameAsObject": "JOBTASK"
        },
        {
            "attributeName": "WOJO8",
            "required": false,
            "persistent": true,
            "title": "WOJO8",
            "remarks": "Extra Field",
            "sameAsAttribute": "JO8",
            "sameAsObject": "JOBTASK"
        },
        {
            "attributeName": "ISTASK",
            "required": true,
            "persistent": true,
            "title": "Is Task",
            "remarks": "Specifies whether the work order is a task. If the check box is selected, the work order is a task. If the check box is cleared, the work order is not a task.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Long Description for Work Order Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DISPLAYTASKID",
            "required": false,
            "persistent": false,
            "title": "Task",
            "remarks": "DISPLAYTASKID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DISPLAYWONUM",
            "required": false,
            "persistent": false,
            "title": "Work Order",
            "remarks": "DISPLAYWONUM",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "FCTASKID",
            "required": false,
            "persistent": false,
            "title": "Task",
            "remarks": "FCTASKID",
            "sameAsAttribute": "TASKID",
            "sameAsObject": "FINCNTRL"
        },
        {
            "attributeName": "FCPROJECTID",
            "required": false,
            "persistent": false,
            "title": "Project ID",
            "remarks": "FCPROJECTID",
            "sameAsAttribute": "PROJECTID",
            "sameAsObject": "FINCNTRL"
        },
        {
            "attributeName": "LOCWARRANTYNOTICE",
            "required": true,
            "persistent": false,
            "title": "Location Warranty Notice",
            "remarks": "Location Warranty Notice",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSETWARRANTYNOTICE",
            "required": true,
            "persistent": false,
            "title": "Asset Warranty Notice",
            "remarks": "Asset Warranty Notice",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REMARKDESC_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description Long Description",
            "remarks": "Long Description for Remark",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REMARKENTERDATE",
            "required": false,
            "persistent": false,
            "title": "Remark Date",
            "remarks": "Date and time the remark for the failure code was entered.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REMARKDESC",
            "required": false,
            "persistent": false,
            "title": "Remarks",
            "remarks": "A comment about the reported failure.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FR2CODE",
            "required": false,
            "persistent": false,
            "title": "Problem Code",
            "remarks": "FR2CODE",
            "sameAsAttribute": "FAILURECODE",
            "sameAsObject": "FAILURECODE"
        },
        {
            "attributeName": "FR1CODE",
            "required": false,
            "persistent": false,
            "title": "Problem Code",
            "remarks": "FR1CODE",
            "sameAsAttribute": "FAILURECODE",
            "sameAsObject": "FAILURECODE"
        },
        {
            "attributeName": "JPTASK",
            "required": false,
            "persistent": false,
            "title": "Task",
            "remarks": "JPTASK",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SAFETYPLANID",
            "required": false,
            "persistent": false,
            "title": "Safety Plan",
            "remarks": "Identifies the safety plan applied to the work order. When you associate a safety plan with a work order, Maximo copies all of the planÆs hazards and precautions, and hazardous materials information to the work order. Hazards and tagouts associated with the work orderÆs assets will be copied when those assets equal those of the work order. If the hazard and tagout is not associated with a work asset, it will be copied to the work order regardless of the work orderÆs assets. To edit this field you must remove the existing safety plan. When you remove a safety plan, Maximo removes all safety information except hazardous materials on the Materials sub-tab of the Plans tab; you delete this information from the Materials sub tab.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ACTTOTALCOST",
            "required": false,
            "persistent": false,
            "title": "Actual Total Cost",
            "remarks": "Actual Total Cost",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ESTATAPPRTOTALCOST",
            "required": false,
            "persistent": false,
            "title": "Estimated Material Cost",
            "remarks": "Estimated total cost of the work order at the time the work order was approved.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ESTTOTALCOST",
            "required": false,
            "persistent": false,
            "title": "Estimated Total Cost",
            "remarks": "Estimated Total Cost",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WOCLASS",
            "required": true,
            "persistent": true,
            "title": "Class",
            "remarks": "Identifies the work order's class.",
            "sameAsAttribute": "WOCLASS",
            "sameAsObject": "WORKTYPE"
        },
        {
            "attributeName": "ONBEHALFOF",
            "required": false,
            "persistent": true,
            "title": "On Behalf Of",
            "remarks": "Identifies for whom this work order has been created. For example, if someone did not have access to a computer, another user could create the work order on behalf of that person.",
            "sameAsAttribute": "DISPLAYNAME",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "VENDOR",
            "required": false,
            "persistent": true,
            "title": "Vendor",
            "remarks": "Identifies the vendor responsible for the work.",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "ORIGRECORDCLASS",
            "required": false,
            "persistent": true,
            "title": "Originating Record Class",
            "remarks": "Originating record's class, for example: change, release, incident, problem, or work order.",
            "sameAsAttribute": "WOCLASS",
            "sameAsObject": "WORKTYPE"
        },
        {
            "attributeName": "ORIGRECORDID",
            "required": false,
            "persistent": true,
            "title": "Originating Record",
            "remarks": "Identifies the source record that was used to create this record.",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "JUSTIFYPRIORITY",
            "required": false,
            "persistent": true,
            "title": "Priority Justification",
            "remarks": "Describes why the work order received the priority it has been assigned. To enter or view additional information, click the Long Description button.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "JUSTIFYPRIORITY_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Justify Priority Long Description",
            "remarks": "Long description for Justify Priority.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RISK",
            "required": false,
            "persistent": true,
            "title": "Risk Assessment",
            "remarks": "Defines the risk level of the work order. Risk may be a numeric value or a term such as High, Medium, Low, or some other value based upon your business definitions.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENVIRONMENT",
            "required": false,
            "persistent": true,
            "title": "Environment",
            "remarks": "This field defines the environment in which the change is taking place.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENVIRONMENT_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Environment Long Description",
            "remarks": "Long Description for Environment",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BACKOUTPLAN",
            "required": false,
            "persistent": true,
            "title": "Back Out Plan",
            "remarks": "Describes the back out plan in the event the change needs to be reversed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BACKOUTPLAN_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Back Out Plan Long Description",
            "remarks": "Long Description for Back Out Plan",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORIGTKID",
            "required": false,
            "persistent": false,
            "title": "Originating Ticket",
            "remarks": "Trigger field for cross over domain.",
            "sameAsAttribute": "TICKETID",
            "sameAsObject": "TICKET"
        },
        {
            "attributeName": "ORIGWOID",
            "required": false,
            "persistent": false,
            "title": "Originating WO",
            "remarks": "Trigger field for cross over domain.",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "DUPFLAG",
            "required": false,
            "persistent": false,
            "title": "Duplicate Flag",
            "remarks": "Duplicate Flag",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WOACCEPTSCHARGES",
            "required": true,
            "persistent": true,
            "title": "Accepts Charges",
            "remarks": "Check box specifies whether or not the work order accepts charges. If the check box is selected (the default), the work order accepts charges. If the check box is cleared, the work order does not accept charges, and you cannot enter charges on the work order.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OWNER",
            "required": false,
            "persistent": true,
            "title": "Owner",
            "remarks": "The person currently responsible for the work order.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CLASSSTRUCTUREID",
            "required": false,
            "persistent": true,
            "title": "Class Structure",
            "remarks": "The Class Structure ID.",
            "sameAsAttribute": "CLASSSTRUCTUREID",
            "sameAsObject": "CLASSSTRUCTURE"
        },
        {
            "attributeName": "PARENTCHGSSTATUS",
            "required": true,
            "persistent": true,
            "title": "Inherit Status Changes",
            "remarks": "Specifies whether the work order's status will change when its parent work order's status changes. If the check box is selected (the default), the work order's status will change when the parent work order's status changes. If the check box is cleared, the work order's status will not change when the parent work order's status changes.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OWNERGROUP",
            "required": false,
            "persistent": true,
            "title": "Owner Group",
            "remarks": "The group currently responsible for the work order.",
            "sameAsAttribute": "PERSONGROUP",
            "sameAsObject": "PERSONGROUP"
        },
        {
            "attributeName": "WARRANTYEXPDATE",
            "required": false,
            "persistent": false,
            "title": "Warranty",
            "remarks": "Date the warranty expires.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COMMODITYGROUP",
            "required": false,
            "persistent": true,
            "title": "Service Group",
            "remarks": "Defines the service group for the work order, for example: IT, production, facility, or fleet.",
            "sameAsAttribute": "COMMODITY",
            "sameAsObject": "COMMODITIES"
        },
        {
            "attributeName": "COMMODITY",
            "required": false,
            "persistent": true,
            "title": "Service",
            "remarks": "Defines the service for the work order, for example: customer support, painting, print, telecommunications, and welding.",
            "sameAsAttribute": "COMMODITY",
            "sameAsObject": "COMMODITIES"
        },
        {
            "attributeName": "WORKORDERID",
            "required": true,
            "persistent": true,
            "title": "WORKORDERID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WHOMISCHANGEFOR",
            "required": false,
            "persistent": true,
            "title": "Whom is this change for",
            "remarks": "Identifies whom a change is for.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WHOMISCHANGEFOR_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Whom is this change for Long Description",
            "remarks": "Long Description for Whom is this change for",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REASONFORCHANGE",
            "required": false,
            "persistent": true,
            "title": "Reason for Change",
            "remarks": "Describes the reason for the change. To enter or view additional information, click the Long Description button.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REASONFORCHANGE_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Reason for Change Long Description",
            "remarks": "Long Description for Reason For Change",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VERIFICATION",
            "required": false,
            "persistent": true,
            "title": "Verification",
            "remarks": "Used to verify that the Change was successful or describe how to determine if the Change was successful",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VERIFICATION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Verification Long Description",
            "remarks": "Long Description for Verification",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PERSONGROUP",
            "required": false,
            "persistent": true,
            "title": "Work Group",
            "remarks": "Identifies the person group responsible for the work. Person groups are set up in the Person Groups application.",
            "sameAsAttribute": "PERSONGROUP",
            "sameAsObject": "PERSONGROUP"
        },
        {
            "attributeName": "OBJECTNAME",
            "required": false,
            "persistent": false,
            "title": "Object",
            "remarks": "Non Persistent field for wo hierarchy",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "HASPARENT",
            "required": true,
            "persistent": false,
            "title": "Has Parent",
            "remarks": "Non Persistent field for wo hierarchy",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LEAD",
            "required": false,
            "persistent": true,
            "title": "Lead",
            "remarks": "Lead person responsible for the work.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "JPASSETS",
            "required": true,
            "persistent": false,
            "title": "JP Assets",
            "remarks": "Non persistent field for Job Plan lookup",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SPASSETS",
            "required": true,
            "persistent": false,
            "title": "Asset",
            "remarks": "Non persistent field for Safety Plan lookup.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SPLOCATIONS",
            "required": true,
            "persistent": false,
            "title": "Location",
            "remarks": "Non persistent field for Safety Plan lookups.",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "WARRANTYEXIST",
            "required": true,
            "persistent": false,
            "title": "Warranties Exist",
            "remarks": "Specifies whether any warranties exist for the asset on the work order. If the check box is selected, warranties exist. If the check box is cleared (the default), there are no warranties for the asset.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INTERRUPTIBLE",
            "required": true,
            "persistent": true,
            "title": "Interruptible",
            "remarks": "Specifies whether the work order is allowed to be stopped once the work has begun and then restarted. If the check box is selected, the work can be stopped. If the check box is cleared, the work cannot be stopped and restarted.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WOGROUP",
            "required": false,
            "persistent": true,
            "title": "WO Group",
            "remarks": "This column is used to enhance performance of the Work Orders app.",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "SAFETYPLAN_LOOKUP_LIST_TYPE",
            "required": false,
            "persistent": false,
            "title": "safety plan lookup list type",
            "remarks": "Type of  safetyplan list to display on select value list",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SELECTSLAS_MODE",
            "required": false,
            "persistent": false,
            "title": "Select Mode",
            "remarks": "This field is for receiving the radio button values in the select slas dialog.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SLAAPPLIED",
            "required": true,
            "persistent": false,
            "title": "SLA Applied",
            "remarks": "Specifies whether a Service Level Agreement (SLA) has been applied to the work order. If the check box is cleared (the default), no SLA has been applied. If the check box is selected, an SLA has been applied to the work order. To apply or select an SLA, use the Apply SLA or Select/Deselect SLA action from the Select Action menu.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REPORTEDBYID",
            "required": false,
            "persistent": false,
            "title": "Reported By",
            "remarks": "The pesonid of the reportedby",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "REPORTEDBYNAME",
            "required": false,
            "persistent": false,
            "title": "Name",
            "remarks": "Name of the reported by",
            "sameAsAttribute": "DISPLAYNAME",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "ONBEHALFOFID",
            "required": false,
            "persistent": false,
            "title": "On Behalf Of",
            "remarks": "Personid of onbelfof",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "ONBEHALFOFNAME",
            "required": false,
            "persistent": false,
            "title": "Name",
            "remarks": "Name of  On Behalf of person",
            "sameAsAttribute": "DISPLAYNAME",
            "sameAsObject": "PERSON"
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
            "attributeName": "ASSETFILTERBY",
            "required": true,
            "persistent": false,
            "title": "Filter By",
            "remarks": "Filter By(all,user/custodia,public)",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSETCUST",
            "required": false,
            "persistent": false,
            "title": "Custodian",
            "remarks": "Asset Custodian",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "ASSETUSER",
            "required": false,
            "persistent": false,
            "title": "User",
            "remarks": "User of the Asset",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "NEWTASKPARENTPMNUM",
            "required": false,
            "persistent": false,
            "title": "parent pmnum",
            "remarks": "parent pmnum for task workorder, pmnum of main workorder.",
            "sameAsAttribute": "PMNUM",
            "sameAsObject": "PM"
        },
        {
            "attributeName": "ROUTE",
            "required": false,
            "persistent": true,
            "title": "Route",
            "remarks": "add route field",
            "sameAsAttribute": "ROUTE",
            "sameAsObject": "ROUTES"
        },
        {
            "attributeName": "ROUTESTOPID",
            "required": false,
            "persistent": true,
            "title": "Route Stop",
            "remarks": "add a new field",
            "sameAsAttribute": "ROUTESTOPID",
            "sameAsObject": "ROUTE_STOP"
        },
        {
            "attributeName": "FILTERDATE",
            "required": false,
            "persistent": false,
            "title": "Date",
            "remarks": "Date",
            "sameAsAttribute": "REPORTDATE",
            "sameAsObject": "WORKORDER"
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
            "attributeName": "CINUM",
            "required": false,
            "persistent": true,
            "title": "Configuration Item",
            "remarks": "Configuration Item",
            "sameAsAttribute": "ACTCINUM",
            "sameAsObject": "ACTCI"
        },
        {
            "attributeName": "JPCLASS",
            "required": false,
            "persistent": false,
            "title": "WO Class",
            "remarks": "non-persistent attribute used in the job plan lookup to filter for a specific class of job plans.  The Class field will default to the class of the current record and the initial lookup will show job plans associated with that class.",
            "sameAsAttribute": "WOCLASS",
            "sameAsObject": "WORKTYPE"
        },
        {
            "attributeName": "JPINCLUDECLASSLESS",
            "required": true,
            "persistent": false,
            "title": "Show Job Plans with No Classes Defined",
            "remarks": "non-persistent attribute used by the job plan lookup to determine whether or not job plans without a WO class should be available for selection.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "JOBTASKID",
            "required": false,
            "persistent": true,
            "title": "JOBTASKID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": "JOBTASKID",
            "sameAsObject": "JOBTASK"
        },
        {
            "attributeName": "WOLOC",
            "required": false,
            "persistent": false,
            "title": "Workorder Location",
            "remarks": "Trigger field for cross over domain.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "WOASSET",
            "required": false,
            "persistent": false,
            "title": "Workorder for Asset",
            "remarks": "Trigger field for cross over domain.",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "WOISSWAP",
            "required": true,
            "persistent": true,
            "title": "Is this an Asset Swap",
            "remarks": "Identifies if the Move is a Move or a Swap",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NEWCHILDCLASS",
            "required": true,
            "persistent": true,
            "title": "New Child Class",
            "remarks": "Identifies the child work order class.",
            "sameAsAttribute": "WOCLASS",
            "sameAsObject": "WORKTYPE"
        },
        {
            "attributeName": "PREDESSORWOS",
            "required": false,
            "persistent": false,
            "title": "Predecessors",
            "remarks": "A non-persistent field to display the work orders predecessor work orders.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SUSPENDFLOW",
            "required": true,
            "persistent": true,
            "title": "Suspend Flow Control",
            "remarks": "Flag used to suspend and resume flow control on a parent record.  Rolls down the hierarchy to all its child records.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FLOWCONTROLLED",
            "required": true,
            "persistent": true,
            "title": "Under Flow Control",
            "remarks": "Flag used to indicate a records participation in flow control.  When applied to a parent, it rolls down the hierarchy to all its child records.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WOCI",
            "required": false,
            "persistent": false,
            "title": "Workorder for CI",
            "remarks": "Trigger field for cross over domain.",
            "sameAsAttribute": "ACTCINUM",
            "sameAsObject": "ACTCI"
        },
        {
            "attributeName": "FLOWACTIONASSIST",
            "required": true,
            "persistent": true,
            "title": "Flow Action Assist",
            "remarks": "Suppresses the automatic firing of the action in flow control",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LAUNCHENTRYNAME",
            "required": false,
            "persistent": true,
            "title": "Launch Entry Name",
            "remarks": "Launch Entry",
            "sameAsAttribute": "LAUNCHENTRYNAME",
            "sameAsObject": "MAXLAUNCHENTRY"
        },
        {
            "attributeName": "TARGETDESC",
            "required": false,
            "persistent": true,
            "title": "Target Description",
            "remarks": "Temporary target description for targeting CIs",
            "sameAsAttribute": "TARGETDESC",
            "sameAsObject": "MULTIASSETLOCCI"
        },
        {
            "attributeName": "FLOWACTION",
            "required": false,
            "persistent": true,
            "title": "Flow Action",
            "remarks": "The action to be performed (if any) when the workorder is started via process flow control",
            "sameAsAttribute": "ACTION",
            "sameAsObject": "ACTION"
        },
        {
            "attributeName": "TARGETDESC_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "TARGETDESC Long description",
            "remarks": "Long description for TARGETDESC",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FEATURE",
            "required": false,
            "persistent": false,
            "title": "Feature",
            "remarks": "An object that exists on or alongside a linear asset that is not a point asset",
            "sameAsAttribute": "FEATURE",
            "sameAsObject": "FEATURES"
        },
        {
            "attributeName": "FEATURELABEL",
            "required": false,
            "persistent": false,
            "title": "Feature Label",
            "remarks": "Unique label used to differentiate features.",
            "sameAsAttribute": "LABEL",
            "sameAsObject": "ASSETFEATURE"
        },
        {
            "attributeName": "STARTFEATURELABEL",
            "required": false,
            "persistent": false,
            "title": "Reference Point",
            "remarks": "Unique label used to differentiate features.",
            "sameAsAttribute": "LABEL",
            "sameAsObject": "ASSETFEATURE"
        },
        {
            "attributeName": "ENDFEATURELABEL",
            "required": false,
            "persistent": false,
            "title": "Reference Point",
            "remarks": "Unique label used to differentiate features.",
            "sameAsAttribute": "LABEL",
            "sameAsObject": "ASSETFEATURE"
        },
        {
            "attributeName": "CHANGEBYPARENT",
            "required": true,
            "persistent": false,
            "title": "Change By Parent",
            "remarks": "Is the status change occuring because the parent change status?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HASLINEAR",
            "required": true,
            "persistent": false,
            "title": "Has Linear",
            "remarks": "Does this Work Order have linear assets attached?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FIRSTAPPRSTATUS",
            "required": false,
            "persistent": true,
            "title": "First Approve Status",
            "remarks": "Identifies the first status change which approved the work order. This value is used to determine if the work order record has ever been approved. Work orders that have been approved are not allowed to be deleted.",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ASSETRECONRSTKT",
            "required": false,
            "persistent": false,
            "title": "Ticket Asset Reconcilication Result",
            "remarks": "Trigger field for cross over domain.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REPFACSITEID",
            "required": false,
            "persistent": true,
            "title": "Repair Facility Site",
            "remarks": "The site for the repair facility.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "REPAIRFACILITY",
            "required": false,
            "persistent": true,
            "title": "Repair Facility",
            "remarks": "Specifies the repair facility location. A repair facility can take ownership of work orders from multiple sites in the same organization. User security can be configured to give permission to view work orders in multiple sites if the work orders are owned by a single repair facility.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "GENFORPOREVISION",
            "required": false,
            "persistent": true,
            "title": "PO Revision",
            "remarks": "Revision number of the purchase order. Indicates how many times a purchase order has been revised.",
            "sameAsAttribute": "REVISIONNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "STOREROOMMTLSTATUS",
            "required": false,
            "persistent": true,
            "title": "Storeroom Material Status",
            "remarks": "The availability status of storeroom materials on the current work order.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DIRISSUEMTLSTATUS",
            "required": false,
            "persistent": true,
            "title": "Direct Issue Material Status",
            "remarks": "The availability status of direct issue materials on the current work order.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WORKPACKMTLSTATUS",
            "required": false,
            "persistent": true,
            "title": "Work Package Material Status",
            "remarks": "The availability status of all materials on the current work order and related child records. The status is determined by the planned materials on a work order. The completion of the child records does not always determine the overall status of the materials in the work package.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IGNORESRMAVAIL",
            "required": true,
            "persistent": true,
            "title": "Ignore Storeroom Availability For Work Order Status",
            "remarks": "Indicates whether to ignore the availability of items in the storeroom for the work order status approval.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IGNOREDIAVAIL",
            "required": true,
            "persistent": true,
            "title": "Ignore Direct Issue Availability For Work Order Status",
            "remarks": "Indicates whether to ignore the availability of direct issues for the work order status approval.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ESTINTLABCOST",
            "required": false,
            "persistent": true,
            "title": "Estimated Cost of Internal Labor",
            "remarks": "The estimated cost of internal labor for the task on the current work order.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ESTINTLABHRS",
            "required": false,
            "persistent": true,
            "title": "Estimated Hours of Internal Labor",
            "remarks": "The estimated hours of internal labor that are required for the task on the current work order.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ESTOUTLABHRS",
            "required": false,
            "persistent": true,
            "title": "Estimated Hours of External Labor",
            "remarks": "The estimated hours of external labor that are required for the task on the current work order.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ESTOUTLABCOST",
            "required": false,
            "persistent": true,
            "title": "Estimated Cost of External Labor",
            "remarks": "The estimated hours of external labor that are required for the task on the current work order.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ACTINTLABCOST",
            "required": false,
            "persistent": true,
            "title": "Actual Cost of Internal Labor",
            "remarks": "The cost of internal labor for the task on the current work order.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ACTINTLABHRS",
            "required": false,
            "persistent": true,
            "title": "Actual Hours of Internal Labor",
            "remarks": "The hours of internal labor that are required for the task on the current work order.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ACTOUTLABHRS",
            "required": false,
            "persistent": true,
            "title": "Actual Hours of External Labor",
            "remarks": "The hours of external labor that are required for the task on the current work order.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ACTOUTLABCOST",
            "required": false,
            "persistent": true,
            "title": "Actual Cost of External Labor",
            "remarks": "The cost of external labor that are required for the task on the current work order.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ESTATAPPRINTLABCOST",
            "required": false,
            "persistent": true,
            "title": "Approved Cost of Internal Labor",
            "remarks": "The cost of internal labor for the task on the current work order at the time it was approved.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ESTATAPPRINTLABHRS",
            "required": false,
            "persistent": true,
            "title": "Estiamted Hours of Internal Labor",
            "remarks": "The hours of internal labor for the task on the current work order at the time it was approved.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ESTATAPPROUTLABHRS",
            "required": false,
            "persistent": true,
            "title": "Estiamted Cost of External Labor",
            "remarks": "The hours of internal labor for the task on the current work order at the time it was approved.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ESTATAPPROUTLABCOST",
            "required": false,
            "persistent": true,
            "title": "Estiamted Hours of External Labor",
            "remarks": "The cost of external labor for the task on the current work order at the time it was approved.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSIGNEDOWNERGROUP",
            "required": false,
            "persistent": true,
            "title": "Assigned Owner Group",
            "remarks": "Assigned Owner Group of the workorder record. This group has overall responsibility for the solution. Use the Select Action menu to assign an owner group. You can enter a value either in this field or the Owner field.",
            "sameAsAttribute": "PERSONGROUP",
            "sameAsObject": "PERSONGROUP"
        },
        {
            "attributeName": "AVAILSTATUSDATE",
            "required": false,
            "persistent": true,
            "title": "Material Status Last Updated",
            "remarks": "The date and time that the material status was last updated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LASTCOPYLINKDATE",
            "required": false,
            "persistent": true,
            "title": "Last Time doclinks Copied",
            "remarks": "The date time doclinks was copied from other related objects like asset,location,jobplan,safetyplan etc.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCFREQUENCY",
            "required": false,
            "persistent": true,
            "title": "Frequency Field",
            "remarks": "Number of time units (days, weeks, months, or years) to elapse between work orders you generate from this PM. The count begins at the value in the Last Target Start Date (if Use Target Start? is selected or Last Completion Date (if Use Target Start? is not the selected field. This value may differ differ from the Regulatory Frequency to facilitate scheduling. For example, a regulatory frequency of 31 days may have a frequency of 28 days.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCFREQUNIT",
            "required": false,
            "persistent": true,
            "title": "Frequency Unit",
            "remarks": "Defines the time units (days, weeks, months, or years) for the Frequency field on time-based PMs.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCISMOBILE",
            "required": true,
            "persistent": true,
            "title": "Is Mobile",
            "remarks": "Workorder was added by mobile",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCJPREVNUM",
            "required": false,
            "persistent": true,
            "title": "Job Plan Revision Number",
            "remarks": "Displays the revision number of the Job Plan the work order was generated with.",
            "sameAsAttribute": "PLUSCREVNUM",
            "sameAsObject": "JOBPLAN"
        },
        {
            "attributeName": "PLUSCLOOP",
            "required": true,
            "persistent": true,
            "title": "Loop Calibration",
            "remarks": "Select this check box to identify the work order as a loop calibration. May be selected when a value is entered in the Location field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCNEXTDATE",
            "required": false,
            "persistent": true,
            "title": "Next Calibration Due Date",
            "remarks": "Date the next work order is scheduled to be generated from the PM. The Next Due Date field is NULL unless there is an integer value in the Frequency field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCNEXTDATE_NP",
            "required": false,
            "persistent": false,
            "title": "Next Calibration Due Date",
            "remarks": "Identifies the date for the next calibration of the instrument. When a work order status is set to Complete or Closed, then the next calibration due date is added to this field.",
            "sameAsAttribute": "PLUSCNEXTDATE",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "PLUSCOVERDUEDATE",
            "required": false,
            "persistent": true,
            "title": "Calibration Overdue Date",
            "remarks": "Displays the over due date for the calibration, if the work order is not completed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCPHYLOC",
            "required": false,
            "persistent": true,
            "title": "Physical Location",
            "remarks": "Enter a detailed description of the location of the asset or specify the location information using a hierarchy that you created. Using a hierarchy provides consistent identification and groups assets efficiently.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USEMBODATA",
            "required": true,
            "persistent": false,
            "title": "Show only Data Sheets associated with the current Work Asset",
            "remarks": "Show only Data Sheets associated with the current Work Asset",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCPHYLOC_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Physical Location Long description",
            "remarks": "Long Description for Physical Location",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INCTASKSINSCHED",
            "required": true,
            "persistent": true,
            "title": "Include Tasks in Schedule",
            "remarks": "Indicates that this work order's tasks will be included in the schedule view.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SNECONSTRAINT",
            "required": false,
            "persistent": true,
            "title": "Start No Earlier Than",
            "remarks": "The earliest date at which work should start.  Scheduled dates should be after this date.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FNLCONSTRAINT",
            "required": false,
            "persistent": true,
            "title": "Finish No Later Than",
            "remarks": "The date that work should be completed by.  Scheduled dates should be before this date.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STCONOFFSET",
            "required": false,
            "persistent": false,
            "title": "Start Constraint Offset",
            "remarks": "The amount of time (in hours) to be subtracted from the Target Start date in order to calculate the Start No Earlier Than date of the work record.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FNCONOFFSET",
            "required": false,
            "persistent": false,
            "title": "Finish Constraint Offset",
            "remarks": "The amount of time (in hours) to be added to the Target Finish date in order to calculate the Finish No Later Than date of the work record.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CALCORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization associated with the calculation calendar, and used with the Calendar and Shift fields to calculate the Target Contact, Target Response, and Target Resolution dates on a ticket or work order. Click the Detail Menu button to select an organization or go to the Organizations application to create one.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "CALCCALENDAR",
            "required": false,
            "persistent": true,
            "title": "Calendar",
            "remarks": "Business days and times used to calculate the Target Contact, Target Response, and Target Resolution dates on a ticket or work order. Click the Detail Menu to select a calendar or go to the Calendars application to create one.",
            "sameAsAttribute": "CALNUM",
            "sameAsObject": "CALENDAR"
        },
        {
            "attributeName": "CALCSHIFT",
            "required": false,
            "persistent": true,
            "title": "Shift",
            "remarks": "Along with the calculation calendar, sets the business hours that calculate the Target Contact, Target Response, and Target Resolution dates on a ticket or work order. Click the Select Value button to choose a shift.",
            "sameAsAttribute": "SHIFTNUM",
            "sameAsObject": "SHIFT"
        },
        {
            "attributeName": "NESTEDJPINPROCESS",
            "required": true,
            "persistent": true,
            "title": "Nested Job Plan Processing",
            "remarks": "Record will be locked while the jobplan containing nested jobplans is in the process of being applied to the record.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AMCREW",
            "required": false,
            "persistent": true,
            "title": "Crew",
            "remarks": "Defines the Crew who will be copied to the work order created with this job plan.",
            "sameAsAttribute": "AMCREW",
            "sameAsObject": "AMCREW"
        },
        {
            "attributeName": "CREWWORKGROUP",
            "required": false,
            "persistent": true,
            "title": "Crew Work Group",
            "remarks": "Resource pool that will perform the work order.",
            "sameAsAttribute": "PERSONGROUP",
            "sameAsObject": "PERSONGROUP"
        },
        {
            "attributeName": "REQASSTDWNTIME",
            "required": true,
            "persistent": true,
            "title": "Require Asset Downtime",
            "remarks": "Indicates if the asset requires downtime while work is performed.",
            "sameAsAttribute": "REQASSTDWNTIME",
            "sameAsObject": "JOBPLAN"
        },
        {
            "attributeName": "APPTREQUIRED",
            "required": true,
            "persistent": true,
            "title": "Appointment Required",
            "remarks": "Indicates if an appointment is required for the work order. Tasks that are created for this work order inherit this value, but can be modified.",
            "sameAsAttribute": "APPTREQUIRED",
            "sameAsObject": "JOBPLAN"
        },
        {
            "attributeName": "AOS",
            "required": true,
            "persistent": true,
            "title": "Requires Asset Downtime",
            "remarks": "Indicates that the work cannot be performed while the asset is operating.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AMS",
            "required": true,
            "persistent": true,
            "title": "Requires Dedicated Asset Maintenance Window",
            "remarks": "Indicates that the work must be performed during a dedicated maintenance window.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LOS",
            "required": true,
            "persistent": true,
            "title": "Requires Location Downtime",
            "remarks": "Indicates that the work must be performed when the location is not in use, and available for maintenance.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LMS",
            "required": true,
            "persistent": true,
            "title": "Requires Dedicated Location Maintenance Window",
            "remarks": "Indicates that the work must be performed during a dedicated maintenance window.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REPAIRLOCFLAG",
            "required": true,
            "persistent": true,
            "title": "Repair Facility Required",
            "remarks": "Indicates whether the repair location is required.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "FLOWACTION",
            "target": "ACTION",
            "remarks": "Relationship to the Action table (action = :flowaction).  Set will contain one or zero objects",
            "whereClause": "action=:flowaction",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WPALTITEM",
            "target": "ALTITEM",
            "remarks": "Relationship to the AltItem table, used to find all alternate items for a given item. (item.itemnum = altitem.itemnum and altitem.itemsetid = item.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum in (select itemnum from wpitem where wonum=:wonum and itemsetid=altitem.itemsetid)",
            "cardinality": null
        },
        {
            "name": "WPALTITEM_ALL",
            "target": "ALTITEM",
            "remarks": "Relationship to the AltItem table, used to find all alternate items for a given item. (item.itemnum = altitem.itemnum and altitem.itemsetid = item.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum in (select itemnum from wpitem where wonum=:wonum and itemsetid=altitem.itemsetid)",
            "cardinality": null
        },
        {
            "name": "AMCREW",
            "target": "AMCREW",
            "remarks": "Relationship to the Crew table.",
            "whereClause": "amcrew=:amcrew and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "WO_AREASAFFECTED",
            "target": "AREASAFFECTED",
            "remarks": "Relationship from the WO table to its children Areas Affected.",
            "whereClause": "wonum=:wonum and siteid=:siteid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WO_ASSET",
            "target": "ASSET",
            "remarks": null,
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "SINGLE"
        },
        {
            "name": "LINEARASSET",
            "target": "ASSET",
            "remarks": "Relationship to the Asset table, used to find this WorkOrder's linear Asset. (workorder.assetnum=asset.assetnum and workorder.assetsiteid=asset.siteid). The resulting set will contain one object.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOALLASSETS",
            "target": "ASSET",
            "remarks": "Relationship to the workorder's asset records, used to find the asset records for a given workorder and its children.",
            "whereClause": "(assetnum=:assetnum or assetnum in (select assetnum from workorder where parent=:wonum and assetnum is not null)) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET",
            "target": "ASSET",
            "remarks": "Relationship to the Asset table, used to find the asset for a work order. (Asset.assetnum = Workorder.assetnum). This resulting set will contain zero or one object. If the workorder's Assetnum attribute isn't null, this set will have one member.",
            "whereClause": "assetnum = :assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ALLASSETS",
            "target": "ASSET",
            "remarks": null,
            "whereClause": "siteid=:siteid and status not in (select value from synonymdomain where maxvalue ='DECOMMISSIONED' and domainid='LOCASSETSTATUS')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETTYPECOMM",
            "target": "ASSETLOCCOMM",
            "remarks": null,
            "whereClause": "commodity=:commodity and assettype is not  null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETTYPECOMMGRPVIEW",
            "target": "ASSETLOCCOMM",
            "remarks": null,
            "whereClause": "commoditygroup=:commoditygroup and assettype is not null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETLOCCOMM",
            "target": "ASSETLOCCOMM",
            "remarks": null,
            "whereClause": "commodity=:commodity and assettype is null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETLOCCOMMGRPVIEW",
            "target": "ASSETLOCCOMM",
            "remarks": null,
            "whereClause": "commoditygroup = :commoditygroup and assettype is null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ACTIVEASSETMETER",
            "target": "ASSETMETER",
            "remarks": "Relationship to the ASSETMETER table, used to get the ASSETMETERs for this WORKORDER. The WHERE clause is: active=:yes and workorder.assetnum=assetmeter.assetnum and workorder.siteid=:assetmeter.siteid. The resulting set will contain zero or more objects.",
            "whereClause": "active=:yes and assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETMOVEDFLT",
            "target": "ASSETMOVEDFLT",
            "remarks": "Relationship to the workorder's assetmovedflt records, used to find the assetmovedflt records for a given workorder.",
            "whereClause": " ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETTRANS",
            "target": "ASSETTRANS",
            "remarks": "Relationship to the ASSETTRANS table, used to find all assettrans records for a work order. (assettrans.wonum = workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "wonum=:wonum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSIGNMENT",
            "target": "ASSIGNMENT",
            "remarks": "Relationship to the Assignment table, used to find all assignments for a work order. (assignment.wonum = workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "wonum=:wonum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSIGNMENT_QBE",
            "target": "ASSIGNMENT",
            "remarks": "Relationship from workorder to wpservice for qbe ",
            "whereClause": "exists (select 1 from workorder yy where ((yy.istask = :yes and yy.parent = :wonum ) or (yy.wonum = :wonum)) and assignment.wonum = yy.wonum and yy.siteid = :siteid) and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSIGNMENTNOWPLABORID",
            "target": "ASSIGNMENT",
            "remarks": "Relationship to the Assignment table, used to find all assignments for a work order that does not have reference to WPLABOR. (assignment.wonum = workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "wonum=:wonum and siteid=:siteid and wplaborid is null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PLANNEDLABOR",
            "target": "ASSIGNMENT",
            "remarks": "Relationship to the Assignment table, used to find all not completed assignments for a work order. (assignment.wonum = workorder.wonum and assignment.status not in (Select value  from valuelist where listname='ASSTAT' and maxvalue !='COMPLETE')). This resulting set will contain zero or more objects.",
            "whereClause": "wonum=:wonum and status in  (select value  from synonymdomain where domainid='ASSTAT' and maxvalue !='COMPLETE') and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHOWASSIGNMENT",
            "target": "ASSIGNMENT",
            "remarks": "Relationship to the ShowAssignment Set used by UI for display. This is a  special MboSet used for displaying the planned assignments for a given workorder.\twonum in (select wonum from workorder where (wonum=:wonum or (parent=:wonum and istask = :yes)) and siteid=:siteid ). The resulting set will contain zero or more objects.",
            "whereClause": "wonum in (select wonum from workorder where (wonum=:wonum or (parent=:wonum and istask = :yes)) and siteid=:siteid )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRIMARYASSIGNREPLOC",
            "target": "ASSIGNREPLOC",
            "remarks": "Relationship to ASSIGNREPLOC table with the primaryflag as true.",
            "whereClause": "wonum=:wonum and siteid=:siteid and primaryflag =:yes",
            "cardinality": null
        },
        {
            "name": "ASSIGNREPLOC",
            "target": "ASSIGNREPLOC",
            "remarks": "Relationship to ASSIGNREPLOC table.",
            "whereClause": "wonum=:wonum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "AUTOATTRUPDATE",
            "target": "AUTOATTRUPDATE",
            "remarks": null,
            "whereClause": "(wonum=:wonum or wonum in ( select wonum from workorder where parent=:wonum and siteid=:siteid) ) and worksiteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "BOOKMARK",
            "target": "BOOKMARK",
            "remarks": "Relationship to the BOOKMARK table, used to find all bookmarks for a work order. ( bookmark.app= 'WOTRACK' and bookmark.keyvalue = workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "app='WOTRACK' and keyvalue=:workorderid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CALENDAR",
            "target": "CALENDAR",
            "remarks": "Relationship to the calendar table, used to find the calendar for a work order.\t(calendar.calnum = Workorder.calendar). This resulting set will contain zero or one object. If the workorder's Calendar attribute isn't null, this set will have one member.",
            "whereClause": "calnum=:calendar and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WO_CALENDAR",
            "target": "CALENDAR",
            "remarks": null,
            "whereClause": "calnum=:calendar and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VCICOLLECT",
            "target": "CI",
            "remarks": "Relationship to the CI table, used to find a CI record for a given COLLECTDETAILS record. (CI.cinum = COLLECTDETAILS.cinum). The resulting set will contain zero or one object.",
            "whereClause": "cinum = :cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWACTCI",
            "target": "CI",
            "remarks": "Relationship to the CI table, used to find a CI record for a given WORKORDER. (CI.cinum = WORKORDER.cinum). The resulting set will contain zero or one object.",
            "whereClause": "cinum = :cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCIRELHIS",
            "target": "CI",
            "remarks": "Relationship to the CI table, used to find a CI record for a given WORKORDER record. (CI.cinum = WORKORDER.cinum). The resulting set will contain zero or one object.",
            "whereClause": "cinum = :cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETCI",
            "target": "CI",
            "remarks": "CI record for the workorder",
            "whereClause": "assetnum=:assetnum and assetlocsiteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CI",
            "target": "CI",
            "remarks": "CI record for the work order",
            "whereClause": "cinum=:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMCI",
            "target": "CI",
            "remarks": null,
            "whereClause": "service=:commodity",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMGRPCI",
            "target": "CI",
            "remarks": null,
            "whereClause": "servicegroup=:commoditygroup",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSANCESTOR",
            "target": "CLASSANCESTOR",
            "remarks": "Relationship to the classancestor table, used to find the ancestor records for a given classstructure. (workorder.classstructureid = classancestor.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSPEC",
            "target": "CLASSSPEC",
            "remarks": "Relationship to the ClassSpec table, used to find all class specification records for a given workorder (classspec.classstructureid = workorder.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSTRUCTURE",
            "target": "CLASSSTRUCTURE",
            "remarks": "Relationship to the classstructure table, used to find the classstructure for a given workorder record. (workorder.classstructureid = classstructure.classstructureid and  workorder.orgid = classstructure.orgid). The resulting set will contain zero or 1 object.",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": "SINGLE"
        },
        {
            "name": "COMMLOG",
            "target": "COMMLOG",
            "remarks": "Relationship to the COMMLOG table, used to get all communication log entries for a work order.",
            "whereClause": "exists (select 1 from workorder where workorderid = commlog.ownerid and woclass = commlog.ownertable and workorder.wogroup = :wogroup and workorder.siteid = :siteid )",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "CONFIRMLABTRANS",
            "target": "CONFIRMLABTRANS",
            "remarks": null,
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTCOMMODITY",
            "target": "CONTCOMMODITY",
            "remarks": null,
            "whereClause": "commodity=:commodity and contractnum in (select contractnum from contract where contract.contractnum=contcommodity.contractnum and contract.revisionnum=contcommodity.revisionnum and contract.status in (select value from synonymdomain where domainid='CONTRACTSTATUS' and maxvalue='APPR'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTCOMMODITYGRP",
            "target": "CONTCOMMODITY",
            "remarks": null,
            "whereClause": "((commodity=:commodity and contractnum not in (select contractnum from contcommodity where parent=:commodity)) or parent=:commodity) and contractnum in (select contractnum from contract where contract.contractnum=contcommodity.contractnum and contract.revisionnum=contcommodity.revisionnum and contract.status in (select value from synonymdomain where domainid='CONTRACTSTATUS' and maxvalue='APPR'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WPCONTRACTLINE_NOHIST",
            "target": "CONTRACTLINE",
            "remarks": "Relationship to CONTRACTLINE, used to find all non-historical contract line records for this item. The WHERE clause is: contractline.itemnum = item.itemnum and exists (select 1 from contract where contract.contractnum=contractline.contractnum and contract.historyflag=:no) and contractline.itemsetid = item.itemsetid. The resulting set will contain zero or more objects.",
            "whereClause": "itemnum in (select itemnum from wpitem where wonum=:wonum and itemsetid=contractline.itemsetid)  and exists (select 1 from contract where contract.contractnum=contractline.contractnum and contract.historyflag=0)",
            "cardinality": null
        },
        {
            "name": "WPCONTRACTLINE_NOHIST_ALL",
            "target": "CONTRACTLINE",
            "remarks": "Relationship to CONTRACTLINE, used to find all non-historical contract line records for this item. The WHERE clause is: contractline.itemnum = item.itemnum and exists (select 1 from contract where contract.contractnum=contractline.contractnum and contract.historyflag=:no) and contractline.itemsetid = item.itemsetid. The resulting set will contain zero or more objects.",
            "whereClause": "itemnum in (select itemnum from wpitem where wonum=:wonum and itemsetid=contractline.itemsetid)  and exists (select 1 from contract where contract.contractnum=contractline.contractnum and contract.historyflag=:no)",
            "cardinality": null
        },
        {
            "name": "PLUSCDOCLINKS",
            "target": "DOCLINKS",
            "remarks": "DOCLINKS WORKORDER RELATIONSHIP",
            "whereClause": "(ownertable='WORKORDER' and ownerid=:workorderid) or (ownertable='WORKORDER' and ownerid in (select workorderid from workorder where parent=:wonum and istask=1 and siteid=:siteid)) or (ownertable='ASSET' and ownerid in (select assetuid from asset where assetnum=:assetnum and siteid=:siteid)) or (ownertable='LOCATIONS' and ownerid in (select locationsid from locations where location=:location and siteid=:siteid)) or (ownertable='JOBPLAN' and ownerid in (select jobplanid from jobplan where jpnum=:jpnum and (siteid is null or siteid=:siteid) and pluscrevnum =:pluscjprevnum )) or (ownertable='PM' and ownerid in (select pmuid from pm where pmnum=:pmnum and siteid=:siteid)) or (ownertable='SAFETYPLAN' and ownerid in (select safetyplanuid from safetyplan,wosafetyplan where safetyplan.safetyplanid=wosafetyplan.safetyplanid and wosafetyplan.wonum=:wonum and wosafetyplan.siteid=:siteid)) or (ownertable in ('SR','INCIDENT','PROBLEM') and ownerid in (select ticketuid from ticket,relatedrecord where ticketid=recordkey and ticket.class = relatedrecord.class and relatedrecclass='WORKORDER' and relatedreckey=:wonum and relatedrecsiteid=:siteid)) or (ownertable in ('WOCHANGE','WORELEASE','WOACTIVITY') and ownerid in (select workorderid from workorder,relatedrecord where wonum=recordkey and workorder.woclass = relatedrecord.class and relatedrecclass='WORKORDER' and relatedreckey=:wonum and relatedrecsiteid=:siteid)) or (ownertable='COMMLOG' and ownerid in (select commloguid from workorder,commlog where workorderid=ownerid and ownertable='WORKORDER')) or (ownertable='SLA' and ownerid in (select slaid from sla,slarecords,workorder where sla.slanum=slarecords.slanum and slarecords.ownerid=workorder.workorderid and sla.objectname='WORKORDER' and slarecords.ownertable='WORKORDER' and workorder.wonum=:wonum))",
            "cardinality": null
        },
        {
            "name": "DOCLINKS",
            "target": "DOCLINKS",
            "remarks": "Relationship to the Doclinks table, used to find all doclinks for a work order. (Doclinks.keytable = 'WORKORDER' and Doclinks.keycolumn = 'WONUM' and Doclinks.keyvalue = Workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "(ownertable='WORKORDER' and ownerid=:workorderid) or (ownertable='WORKORDER' and ownerid in (select workorderid from workorder where parent=:wonum and istask=1 and siteid=:siteid)) or (ownertable='ASSET' and ownerid in (select assetuid from asset where assetnum=:assetnum and siteid=:siteid)) or (ownertable='LOCATIONS' and ownerid in (select locationsid from locations where location=:location and siteid=:siteid)) or (ownertable='JOBPLAN' and ownerid in (select jobplanid from jobplan where jpnum=:jpnum and (siteid is null or siteid=:siteid) and pluscrevnum =:pluscjprevnum) ) or (ownertable='PM' and ownerid in (select pmuid from pm where pmnum=:pmnum and siteid=:siteid)) or (ownertable='SAFETYPLAN' and ownerid in (select safetyplanuid from safetyplan,wosafetyplan where safetyplan.safetyplanid=wosafetyplan.safetyplanid and wosafetyplan.wonum=:wonum and wosafetyplan.siteid=:siteid)) or (ownertable in ('SR','INCIDENT','PROBLEM') and ownerid in (select ticketuid from ticket,relatedrecord where ticketid=recordkey and ticket.class = relatedrecord.class and relatedrecclass=:woclass and relatedreckey=:wonum and relatedrecsiteid=:siteid)) or (ownertable in ('WOCHANGE','WORELEASE','WOACTIVITY') and ownerid in (select workorderid from workorder,relatedrecord where wonum=recordkey and workorder.woclass = relatedrecord.class and relatedrecclass=:woclass and relatedreckey=:wonum and relatedrecsiteid=:siteid)) or (ownertable='COMMLOG' and ownerid in (select commloguid from commlog where ownerid=:workorderid and ownertable in (select value from synonymdomain where domainid='WOCLASS'))) or (ownertable='SLA' and ownerid in (select slaid from sla,slarecords,workorder where sla.slanum=slarecords.slanum and slarecords.ownerid=workorder.workorderid and sla.objectname='WORKORDER' and slarecords.ownertable='WORKORDER' and workorder.wonum=:wonum))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS_ASSETID",
            "target": "DOCLINKS",
            "remarks": "Relationship to the Doclinks table, used to find all doclinks for a work order. This relationship includes asset-related doclinks using assetid (global) instead of assetuid (site-specific).(Doclinks.keytable = 'WORKORDER' and Doclinks.keycolumn = 'WONUM' and Doclinks.keyvalue = Workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "(ownertable='WORKORDER' and ownerid=:workorderid) or (ownertable='WORKORDER' and ownerid in (select workorderid from workorder where parent=:wonum and istask=1 and siteid=:siteid)) or (ownertable='ASSET' and ownerid in (select assetid from asset where assetnum=:assetnum and siteid=:siteid)) or (ownertable='LOCATIONS' and ownerid in (select locationsid from locations where location=:location and siteid=:siteid)) or (ownertable='JOBPLAN' and ownerid in (select jobplanid from jobplan where jpnum=:jpnum and (siteid is null or siteid=:siteid) and pluscrevnum =:pluscjprevnum )) or (ownertable='PM' and ownerid in (select pmuid from pm where pmnum=:pmnum and siteid=:siteid)) or (ownertable='SAFETYPLAN' and ownerid in (select safetyplanuid from safetyplan,wosafetyplan where safetyplan.safetyplanid=wosafetyplan.safetyplanid and wosafetyplan.wonum=:wonum and wosafetyplan.siteid=:siteid)) or (ownertable in ('SR','INCIDENT','PROBLEM') and ownerid in (select ticketuid from ticket,relatedrecord where ticketid=recordkey and ticket.class = relatedrecord.class and relatedrecclass='WORKORDER' and relatedreckey=:wonum and relatedrecsiteid=:siteid)) or (ownertable in ('WOCHANGE','WORELEASE','WOACTIVITY') and ownerid in (select workorderid from workorder,relatedrecord where wonum=recordkey and workorder.woclass = relatedrecord.class and relatedrecclass='WORKORDER' and relatedreckey=:wonum and relatedrecsiteid=:siteid)) or (ownertable='COMMLOG' and ownerid in (select commloguid from workorder,commlog where workorderid=ownerid and ownertable='WORKORDER')) or (ownertable='SLA' and ownerid in (select slaid from sla,slarecords,workorder where sla.slanum=slarecords.slanum and slarecords.ownerid=workorder.workorderid and sla.objectname='WORKORDER' and slarecords.ownertable='WORKORDER' and workorder.wonum=:wonum))",
            "cardinality": null
        },
        {
            "name": "DOWNTIMEREPORT",
            "target": "DOWNTIMEREPORT",
            "remarks": "Relationship to the nonpersistent parameter set for reporting downtime.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "target": "DRILLDOWN",
            "remarks": "Relationship to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "FAILURE",
            "target": "FAILURECODE",
            "remarks": "Relationship to the FailureCode table, used to find the failurecode for a work order. (FailureCode.failurecode = Workorder.failurecode). This resulting set will contain zero or one object. If the workorder's FailureCode attribute isn't null, this set will have one member.",
            "whereClause": "failurecode=:failurecode and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "FR1CODE",
            "target": "FAILURECODE",
            "remarks": "Relationship to the FailureCode table, used to find the failurecode. (FailureCode.failurecode = Workorder.fr1code). This resulting set will contain zero or one object. If the workorder's fr1code attribute isn't null, this set will have one member. Fr1code is a non_persistent attribute, see attributes of workorder table.",
            "whereClause": "failurecode=:fr1code and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "FR2CODE",
            "target": "FAILURECODE",
            "remarks": "Relationship to the FailureCode table, used to find the failurecode. (FailureCode.failurecode = Workorder.fr2code). This resulting set will contain zero or one object. If the workorder's fr2code attribute isn't null, this set will have one member. Fr1code is a non_persistent attribute, see attributes of workorder table.",
            "whereClause": "failurecode=:fr2code and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PROBLEM",
            "target": "FAILURECODE",
            "remarks": "Relationship to the FailureCode table, used to find the failurecode for the work order's problemcode attribute. (FailureCode.failurecode = Workorder.problemcode). This resulting set will contain zero or one object. If the workorder's ProblemCode attribute isn't null, this set will have one member.",
            "whereClause": "failurecode=:problemcode and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WO_FAILURE",
            "target": "FAILURECODE",
            "remarks": null,
            "whereClause": "failurecode=:failurecode and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WO_PROBLEM",
            "target": "FAILURECODE",
            "remarks": null,
            "whereClause": "failurecode=:problemcode and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOFAILLIST",
            "target": "FAILURELIST",
            "remarks": "Relationship to the FALIURELIST table, used to find all problem records for a work order's failure class. (failurelist.parent = (select failurelist from failurelist where failurecode = :workorder.failurecode). This resulting set will contain zero or more objects.",
            "whereClause": "parent in (select failurelist from failurelist where failurecode = :failurecode and parent is null) and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WO_FAILUREREMARK",
            "target": "FAILUREREMARK",
            "remarks": null,
            "whereClause": "wonum=:wonum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "FAILUREREMARK",
            "target": "FAILUREREMARK",
            "remarks": "Relationship to the FailureRemark table, used to find the failureremark for a work order. (FailureRemark.wonum = Workorder.wonum). This resulting set will contain zero or one object.",
            "whereClause": "wonum=:wonum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "FAILUREREPORT",
            "target": "FAILUREREPORT",
            "remarks": "Relationship to the FailureReport table, used to find the failurereport set for a work order. (FailureReport.wonum = Workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "wonum = :wonum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "FINCNTRL",
            "target": "FINCNTRL",
            "remarks": "Relationship to the FinCntrl table, used to find the financial control identifier for a work order. (fincntrl.fincntrlid = workorder.fincntrlid). This resulting set will contain zero or one object.",
            "whereClause": "fincntrlid=:fincntrlid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NEWINCIDENT",
            "target": "INCIDENT",
            "remarks": "This relationship gets the last incident created by this work order. (<long>) One member set.",
            "whereClause": "origrecordclass = :woclass and origrecordid = :wonum and class in (select value from synonymdomain where domainid = 'TKCLASS' and maxvalue = 'INCIDENT') and reportdate = (select max(reportdate) from ticket where origrecordclass = :woclass and origrecordid = :wonum and class in (select value from synonymdomain where domainid = 'TKCLASS' and maxvalue = 'INCIDENT'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WPINVBALANCES",
            "target": "INVBALANCES",
            "remarks": "Relationship to the InvBalances table, used to find all inventory balances for a given item. (invbalances.itemnum = item.itemnum and invbalances.itemsetid = item.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum in (select itemnum from wpitem where wonum=:wonum and itemsetid=invbalances.itemsetid and itemsetid=invbalances.itemsetid and storelocsite=invbalances.siteid and location=invbalances.location)",
            "cardinality": null
        },
        {
            "name": "WPINVBALANCES_ALL",
            "target": "INVBALANCES",
            "remarks": "Relationship to the InvBalances table, used to find all inventory balances for a given item. (invbalances.itemnum = item.itemnum and invbalances.itemsetid = item.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum in (select itemnum from wpitem where wonum=:wonum and itemsetid=invbalances.itemsetid)",
            "cardinality": null
        },
        {
            "name": "WPINVENTORY",
            "target": "INVENTORY",
            "remarks": "Relationship to the Inventory table, used to find all inventory records for a given item. (inventory.itemnum = item.itemnum and inventory.itemsetid = item.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum in (select itemnum from wpitem where wonum=:wonum and itemsetid=inventory.itemsetid and storelocsite=inventory.siteid and location=inventory.location)",
            "cardinality": null
        },
        {
            "name": "WPINVENTORY_ALL",
            "target": "INVENTORY",
            "remarks": "Relationship to the Inventory table, used to find all inventory records for a given item. (inventory.itemnum = item.itemnum and inventory.itemsetid = item.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum in (select itemnum from wpitem where wonum=:wonum and itemsetid=inventory.itemsetid)",
            "cardinality": null
        },
        {
            "name": "WPINVRESERVE",
            "target": "INVRESERVE",
            "remarks": "Relationship to the InvReserve table, used to find all inventory reserves for a given item. (invreserve.itemnum = item.itemnum and invreserve.itemsetid = item.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum in (select itemnum from wpitem where wonum=:wonum and itemsetid=invreserve.itemsetid and storelocsite=invreserve.storelocsiteid and location=invreserve.location)",
            "cardinality": null
        },
        {
            "name": "WPINVRESERVE_ALL",
            "target": "INVRESERVE",
            "remarks": "Relationship to the InvReserve table, used to find all inventory reserves for a given item. (invreserve.itemnum = item.itemnum and invreserve.itemsetid = item.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum in (select itemnum from wpitem where wonum=:wonum and itemsetid=invreserve.itemsetid)",
            "cardinality": null
        },
        {
            "name": "MXINTINVRES",
            "target": "INVRESERVE",
            "remarks": "Relationship to the InvReserve table, used by MEA to find all invreserves for a work order. (InvReserve.wonum = workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "wonum=:wonum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHOWINVRESERVE",
            "target": "INVRESERVE",
            "remarks": "Relationship to the ShowInvReserve Set used by UI for display. This is a special MboSet used for displaying the inventory reserves for a given workorder and it's tasks. (wonum in (select wonum from workorder where ((workorder.wonum=workorder.wonum) or (workorder.parent=workorder.wonum and workorder.istask = :yes)) and workorder.siteid=workorder.siteid)). The resulting set will contain zero or more objects.",
            "whereClause": "wonum in (select wonum from workorder where (wonum=:wonum or (parent=:wonum and istask = :yes)) and siteid=:siteid )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SELECTINVRESVITEM",
            "target": "INVRESERVE",
            "remarks": "Relationship to the InvReserve table, used to find all reserved invreserves for a work order. (InvReserve.ponum is null and InvReserve.directreq=:NO) and InvReserve.wonum = workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "wonum=:wonum and ponum is null and directreq=:no and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVRESERVE",
            "target": "INVRESERVE",
            "remarks": "Relationship to the InvReserve table, used to find all invreserves for a work order. (InvReserve.wonum = workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "wonum=:wonum and siteid=:siteid  and itemnum in  (select itemnum from wpmaterial where wonum=:wonum and siteid=:siteid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVRESERVEALL",
            "target": "INVRESERVE",
            "remarks": "Relationship to the InvReserve table, used to find all invreserves for a work order. (InvReserve.wonum = workorder.wonum and invreserve.siteid=:workorder.siteid). This resulting set will contain zero or more objects.",
            "whereClause": "wonum=:wonum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "INVRESERVETOOL",
            "target": "INVRESERVE",
            "remarks": "Relationship to the InvReserve table, used to find all invreserves for a work order. (InvReserve.wonum = workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "wonum=:wonum and siteid=:siteid  and itemnum in  (select itemnum from wptool where wonum=:wonum and siteid=:siteid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVUSELINE",
            "target": "INVUSELINE",
            "remarks": "Relationship to the InvUseLine table, used to find all invuseline documents for a work order. This resulting set will contain zero or more objects.",
            "whereClause": "refwo=:wonum and tositeid=:siteid and linetype not in (select value from synonymdomain where domainid='LINETYPE' and maxvalue='TOOL')",
            "cardinality": null
        },
        {
            "name": "STDSERVICESONLY",
            "target": "ITEM",
            "remarks": "list all the standard service items from items table(itemtype=STDSERVICE)",
            "whereClause": "itemtype in (:&synonymlist&_itemtype[STDSERVICE]) and itemsetid in (select itemsetid from organization where orgid=:orgid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TOOLSONLY",
            "target": "ITEM",
            "remarks": "list all the tools from items table(itemtype=TOOL)",
            "whereClause": "itemtype in (:&synonymlist&_itemtype[TOOL]) and itemsetid in (select itemsetid from organization where orgid=:orgid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMSONLY",
            "target": "ITEM",
            "remarks": "list all the items from items table(itemtype=ITEM)",
            "whereClause": "itemtype in (:&synonymlist&_itemtype[ITEM]) and itemsetid in (select itemsetid from organization where orgid=:orgid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "JOBPLAN",
            "target": "JOBPLAN",
            "remarks": "Relationship to the JobPlan table, used to find the jobplan for a work order. (Jobplan.jpnum = Workorder.jpnum). This resulting set will contain zero or one object.",
            "whereClause": "jpnum=:jpnum and ((orgid=:orgid and siteid=:siteid) or (orgid=:orgid and siteid is null) or (orgid is null and siteid is null)) and status in (select value from synonymdomain where domainid='JOBPLANSTATUS' and maxvalue ='ACTIVE')",
            "cardinality": "SINGLE"
        },
        {
            "name": "WO_JOBPLAN",
            "target": "JOBPLAN",
            "remarks": null,
            "whereClause": "jpnum=:jpnum and siteid=:siteid",
            "cardinality": "SINGLE"
        },
        {
            "name": "WO_REV_JOBPLAN",
            "target": "JOBPLAN",
            "remarks": "Relationship to display the current description in WO for revised Jobplan.",
            "whereClause": "jpnum=:jpnum and ((orgid=:orgid and siteid=:siteid) or (orgid=:orgid and siteid is null) or (orgid is null and siteid is null)) and pluscrevnum=:pluscjprevnum",
            "cardinality": null
        },
        {
            "name": "JPFROMWOINPUT",
            "target": "JPFROMWOINPUT",
            "remarks": "Relationship to the non-persistent WOInput table. (No where clause). The resulting set will contain zero or more objects. Note: This relationship is used to create a Job Plan from A Work Order Work Plan.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LEADCRAFT",
            "target": "LABOR",
            "remarks": "Relationship to the Labor record referenced by the work order's LeadCraft attribute, used to find the labor for a work order. (Labor.laborcode = Workorder.leadcraft). This resulting set will contain zero or one object.",
            "whereClause": "laborcode=:leadcraft and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WO_SUPERVISOR",
            "target": "LABOR",
            "remarks": null,
            "whereClause": "laborcode=:supervisor and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WO_REPORTEDBY",
            "target": "LABOR",
            "remarks": null,
            "whereClause": "laborcode=:reportedby and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WO_LEADCRAFT",
            "target": "LABOR",
            "remarks": null,
            "whereClause": "laborcode=:leadcraft and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SUPERVISOR",
            "target": "LABOR",
            "remarks": "Relationship to the Labor table, used to find the labor(supervisor) for a work order. (Labor.laborcode = Workorder.Supervisor). This resulting set will contain zero or one object.",
            "whereClause": "laborcode=:supervisor and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABORBYCREW",
            "target": "LABORBYCREW",
            "remarks": "Relationship between non-persistent LABORBYCREW and WORKORDER, used by Enter by Crew dialog. (No where clause).",
            "whereClause": "",
            "cardinality": null
        },
        {
            "name": "LABTRANS",
            "target": "LABTRANS",
            "remarks": "Relationship to the LabTrans table, used to find all labtrans for a work order. (LabTrans.wonum = workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "refwo=:wonum and siteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "REP_ACTLAB",
            "target": "LABTRANS",
            "remarks": "Relationship that returns all actual labor for given Work Order, including the labor for the Work Order's tasks.  Used for reporting.",
            "whereClause": "(refwo=:wonum or exists (select 1 from workorder w where w.parent=:wonum and w.istask=1 and labtrans.siteid=w.siteid and labtrans.refwo=w.wonum)) and labtrans.siteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "UNAPPROVEDLABTRANS",
            "target": "LABTRANS",
            "remarks": "Relationship to the LabTrans table, used to find all unApproved labtrans for a work order. This resulting set will contain zero or more objects.",
            "whereClause": "refwo=:wonum and siteid=:siteid and genapprservreceipt=0",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHOWACTUALLABOR",
            "target": "LABTRANS",
            "remarks": "Relationship to the ShowActualLabor Set used by UI for display. This is a special MboSet used for displaying the actual labor for a given workorder. (refwo in (select wonum from workorder where workorder.wonum=workorder.wonum or workorder.parent=workorder.wonum and workorder.siteid=workorder.siteid)). The resulting set will contain zero or more objects.",
            "whereClause": "refwo in (select wonum from workorder where (wonum=:wonum or (parent=:wonum and istask = :yes)) and siteid=:siteid )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ACTIVELABTRANS",
            "target": "LABTRANS",
            "remarks": "Relationship to the LabTrans table, used to find all active labtrans for a work order. (LabTrans.wonum = workorder.wonum and timerstatus='ACTIVE'). This resulting set will contain zero or more objects.",
            "whereClause": "refwo=:wonum and siteid=:siteid  and timerstatus in (select value from synonymdomain where domainid = 'TIMERSTATUS' and maxvalue = 'ACTIVE')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABTRANSENTERBY",
            "target": "LABTRANSENTERBY",
            "remarks": "Relationship between LABTRANSENTERBY and WORKORDER, used by Enter Time by Crew dialog.",
            "whereClause": "1=1",
            "cardinality": null
        },
        {
            "name": "LBSLOCATION",
            "target": "LBSLOCATION",
            "remarks": "Relationship to find the the LBSLocations based on a workorder",
            "whereClause": "wonum=:wonum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "PRIMARYSYSLOCWO",
            "target": "LOCANCESTOR",
            "remarks": "Relationship to the workorder table itself, used to find all work orders in the Primary system locations. Used to find all work orders in the Primary system locations. (location in ( Select  location  from locancestor where systemid = ( select primarysystem from site where siteid = workorder.siteid)). This resulting set will contain zero or more objects.",
            "whereClause": "location =:location and systemid = ( select systemid from locsystem where primarysystem = '1' and siteid =:siteid) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ACTIVELOCATIONMETER",
            "target": "LOCATIONMETER",
            "remarks": "Relationship to the LOCATIONMETER table, used to get the LOCATIONMETERs for this WORKORDER. The WHERE clause is: active=:yes and workorder.location=locationmeter.location and workorder.siteid=:locationmeter.siteid. The resulting set will contain zero or more objects.",
            "whereClause": "active=:yes and location=:location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ALLLOCATIONS",
            "target": "LOCATIONS",
            "remarks": null,
            "whereClause": "siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATION",
            "target": "LOCATIONS",
            "remarks": "Relationship to the Locations table, used to find the location for a work order. (Locations.location = Workorder.location). This resulting set will contain zero or one object.",
            "whereClause": "location = :location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REPAIRFACILITY",
            "target": "LOCATIONS",
            "remarks": "Relationship to the Locations table, used to find all location records for a given Work Order record. (location=:REPAIRFACILITY and siteid=:REPFACSITEID). The resulting set will contain zero or more objects.",
            "whereClause": "location=:repairfacility and siteid=:repfacsiteid",
            "cardinality": null
        },
        {
            "name": "WO_WORKLOCATION",
            "target": "LOCATIONS",
            "remarks": null,
            "whereClause": "location=:worklocation and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WO_LOCATION",
            "target": "LOCATIONS",
            "remarks": null,
            "whereClause": "location=:location and siteid=:siteid",
            "cardinality": "SINGLE"
        },
        {
            "name": "WOALLLOCATIONS",
            "target": "LOCATIONS",
            "remarks": "Relationship to the workorder's location records, used to find the location records for a given workorder and its children.",
            "whereClause": "(location=:location or location in (select location from workorder where parent=:wonum and location is not null)) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LONGDESCRIPTION",
            "target": "LONGDESCRIPTION",
            "remarks": "Relationship to the longdescription table, used to find all longdescription records for workorder. The resulting set will contain zero or more objects.",
            "whereClause": "ldkey=:workorderid and ldownertable = 'WORKORDER'",
            "cardinality": null
        },
        {
            "name": "MATUSETRANS",
            "target": "MATUSETRANS",
            "remarks": "Relationship to the MatUseTrans table, used to find all material useage transactions for a work order. (MatUseTrans.wonum = workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "refwo=:wonum and tositeid=:siteid and linetype not in (select value from synonymdomain where domainid='LINETYPE' and maxvalue='TOOL')",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "MATUSETRANS_REPORTING",
            "target": "MATUSETRANS",
            "remarks": "Reporting Relationship",
            "whereClause": "tositeid=:siteid and refwo=:wonum",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "REP_ACTMAT",
            "target": "MATUSETRANS",
            "remarks": "Relationship that returns all actual materials for given Work Order, including the materials for the Work Order's tasks.  Used for reporting.",
            "whereClause": "(refwo=:wonum or exists (select 1 from workorder w where w.parent=:wonum and w.istask=1 and matusetrans.tositeid=w.siteid and matusetrans.refwo=w.wonum)) and matusetrans.tositeid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "SHOWACTUALMATERIAL",
            "target": "MATUSETRANS",
            "remarks": "Relationship to the ShowActualMetrial Set used by UI for display. This is a special MboSet used for displaying the actual material for a given workorder. (refwo in (select wonum from workorder where workorder.wonum=workorder.wonum or workorder.parent=workorder.wonum and workorder.siteid=workorder.siteid)). The resulting set will contain zero or more objects.",
            "whereClause": "refwo in (select wonum from workorder where (wonum=:wonum or (parent=:wonum and istask = :yes)) and siteid=:siteid )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ISSUEDTOOL",
            "target": "MATUSETRANS",
            "remarks": "Relationship to the MatUseTrans table, used to find all tool usage transactions for a work order. (MatUseTrans.wonum = workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "refwo in (select wonum from workorder where (wonum=:wonum or (parent=:wonum and istask = :yes))) and siteid=:siteid and linetype in (select value from synonymdomain where domainid='LINETYPE' and maxvalue='TOOL' ) and issuetype in (select value from synonymdomain where maxvalue in ('ISSUE') and domainid='ISSUETYP')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MEASUREMENT",
            "target": "MEASUREMENT",
            "remarks": "Relationship to the Measurement table, used to find all measurement for a work order's measure pointnum. (measurement.pointnum = workorder.pointnum). This resulting set will contain zero or more objects.",
            "whereClause": "pointnum=:pointnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MEASUREPOINT",
            "target": "MEASUREPOINT",
            "remarks": "Relationship to the MeasurePoint table, used to find the measurepoint pointname for a work orders measurepoint pointnum (workorder.pointnum = measurepoint.pointnum). The resulting set will contain one object.",
            "whereClause": "pointnum=:pointnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MODDOWNTIMEHIST",
            "target": "MODDOWNTIMEHIST",
            "remarks": "Relationship to non-persistent MODDOWNTIMEHIST object",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MR",
            "target": "MR",
            "remarks": "Relationship to the MR table, used to find all material requests for a work order. (mr.wonum = workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "wonum=:wonum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MRLINE",
            "target": "MRLINE",
            "remarks": "Relationship to the MRLINE table, used to find all material request lines for a work order. (mrline.refwo = workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "refwo=:wonum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MULTIASSETLOCCI",
            "target": "MULTIASSETLOCCI",
            "remarks": "all asset/loc/CI records for the workorder,except the primary one",
            "whereClause": "recordkey=:wonum and recordclass=:woclass and worksiteid=:siteid and isprimary=0",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "LINEARRELATED",
            "target": "MULTIASSETLOCCI",
            "remarks": "A copy of WOPrimaryAsset created especially for the LinearDetailsRelated include section in Library.xml.  It will return the primary AssetLocCI record for the Work Order: one or zero records.",
            "whereClause": "recordkey=:wonum and recordclass=:woclass and worksiteid=:siteid and isprimary=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOPRIMARYASSET",
            "target": "MULTIASSETLOCCI",
            "remarks": "primary asset/loc/CI  record for the workorder",
            "whereClause": "recordkey=:wonum and recordclass=:woclass and worksiteid=:siteid and isprimary=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ALLMULTIASSETLOCCI",
            "target": "MULTIASSETLOCCI",
            "remarks": "all asset/loc/CI  records for the workorder",
            "whereClause": "recordkey=:wonum and recordclass=:woclass and worksiteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "ALLLINEARMULTIASSETLOCCI",
            "target": "MULTIASSETLOCCI",
            "remarks": "all Linear asset/loc/CI  records for the workorder",
            "whereClause": "recordkey=:wonum and recordclass=:woclass and worksiteid=:siteid and :linearasset.islinear=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ALLLOCATION",
            "target": "MULTIASSETLOCCI",
            "remarks": null,
            "whereClause": "recordkey=:wonum and recordclass=:woclass and location is not null and worksiteid=:siteid and multiid =(select min(multiid) from multiassetlocci multi2 where multi2.recordkey=multiassetlocci.recordkey and multi2.recordclass=multiassetlocci.recordclass  and multi2.worksiteid=multiassetlocci.worksiteid and multi2.location=multiassetlocci.location and multi2.siteid=multiassetlocci.siteid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ALLASSET",
            "target": "MULTIASSETLOCCI",
            "remarks": null,
            "whereClause": "recordkey=:wonum and recordclass=:woclass and assetnum is not null and worksiteid=:siteid and multiid =(select min(multiid) from multiassetlocci multi2 where multi2.recordkey=multiassetlocci.recordkey and multi2.recordclass=multiassetlocci.recordclass  and multi2.worksiteid=multiassetlocci.worksiteid and multi2.assetnum=multiassetlocci.assetnum and multi2.siteid=multiassetlocci.siteid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ALLCI",
            "target": "MULTIASSETLOCCI",
            "remarks": null,
            "whereClause": "recordkey=:wonum and recordclass=:woclass and cinum is not null and worksiteid=:siteid and multiid =(select min(multiid) from multiassetlocci multi2 where multi2.recordkey=multiassetlocci.recordkey and multi2.recordclass=multiassetlocci.recordclass  and multi2.worksiteid=multiassetlocci.worksiteid and multi2.cinum=multiassetlocci.cinum)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MULTIASSETLOCCIPR",
            "target": "MULTIASSETLOCCIPR",
            "remarks": "Relationship to the Multiassetloccipr table.",
            "whereClause": "multiid in (select multiid from multiassetlocci where multiassetlocci.recordkey = :wonum and multiassetlocci.recordclass = :woclass)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ONBEHALFOF",
            "target": "PERSON",
            "remarks": "Relationship to the person table, used to find the person  for onbehalfof. This resulting set will contain zero or one object.",
            "whereClause": "personid=:onbehalfof",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "OWNERPERSON",
            "target": "PERSON",
            "remarks": "Relationship to the person records.",
            "whereClause": "personid=:owner",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REPORTEDBY",
            "target": "PERSON",
            "remarks": "Relationship to the person table, used to find the person  for reportedby. This resulting set will contain zero or one object.",
            "whereClause": "personid=:reportedby",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKORDERPERSONGROUP",
            "target": "PERSONGROUP",
            "remarks": "Relationship to persongroup to return the workorders persongroup",
            "whereClause": "persongroup = :persongroup",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSONS",
            "target": "PERSONGROUPVIEW",
            "remarks": null,
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PLUSCSPOTCHECK",
            "target": "PLUSCSPOTCHECK",
            "remarks": null,
            "whereClause": "wonum = :wonum and siteid = :siteid",
            "cardinality": null
        },
        {
            "name": "PLUSCWODS",
            "target": "PLUSCWODS",
            "remarks": null,
            "whereClause": "wonum = :wonum and siteid = :siteid",
            "cardinality": null
        },
        {
            "name": "PLUSCWODSINSTR",
            "target": "PLUSCWODSINSTR",
            "remarks": null,
            "whereClause": "wonum = :wonum and siteid = :siteid",
            "cardinality": null
        },
        {
            "name": "PLUSCWODSLOOPPOINTS",
            "target": "PLUSCWODSPOINT",
            "remarks": null,
            "whereClause": "wonum = :wonum and siteid = :siteid",
            "cardinality": null
        },
        {
            "name": "PLUSCWODSPOINT",
            "target": "PLUSCWODSPOINT",
            "remarks": null,
            "whereClause": "wonum = :wonum and siteid = :siteid",
            "cardinality": null
        },
        {
            "name": "PM",
            "target": "PM",
            "remarks": "Relationship to the WorkOrder's PM record, used to find the pm for a work order. (PM.pmnum = Workorder.pmnum). This resulting set will contain zero or one object.",
            "whereClause": "pmnum=:pmnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WO_PM",
            "target": "PM",
            "remarks": null,
            "whereClause": "pmnum=:pmnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WO_POGENERATED",
            "target": "PO",
            "remarks": null,
            "whereClause": "ponum=:generatedforpo and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWPOLINE",
            "target": "POLINE",
            "remarks": "Relationship to the PoLine table, used to find all purchase lines related to this work order. This resulting set will contain zero or more objects.",
            "whereClause": "refwo=:wonum and siteid=:siteid and ponum in (select ponum from po where po.siteid=poline.siteid and po.ponum=poline.ponum and po.revisionnum=poline.revisionnum  and status not in (select value from synonymdomain where domainid='POSTATUS' and maxvalue in ('CAN','HOLD','PNDREV','REVISE')))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POLINE",
            "target": "POLINE",
            "remarks": "Relationship to the PoLine table, used to find all purchase lines related to this work order. (PoLine.refwo = workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "refwo=:wonum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POLINEISSUE",
            "target": "POLINE",
            "remarks": "Relationship to the PoLine table, used to find all purchase lines related to this work order. (PoLine.refwo = workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "refwo=:wonum and issue=:yes and siteid=:siteid and linetype not in (select value from synonymdomain where domainid='LINETYPE' and maxvalue in('SERVICE','STDSERVICE'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WPPOLINE_NOHIST",
            "target": "POLINE",
            "remarks": "Relationship to POLINE ,used to find all non-historical po line records, excluding those on POs of type PRICE and BLANK, for this item. The WHERE clause is: poline.itemnum = item.itemnum and exists (select 1 from po where po.ponum=poline.ponum and po.historyflag = :no and po.potype not in (select VALUE from valuelist where listname='POTYPE' AND MAXVALUE in ('PRICE', 'BLANK') ) and poline.itemsetid = item.itemsetid) . The resulting set will contain zero or more objects.",
            "whereClause": "itemnum in (select itemnum from wpitem where wonum=:wonum and itemsetid=poline.itemsetid and storelocsite=poline.siteid and location=poline.storeloc) and exists (select 1 from po where po.ponum=poline.ponum and po.revisionnum=poline.revisionnum and po.historyflag = :no)",
            "cardinality": null
        },
        {
            "name": "WPPOLINE_NOHIST_ALL",
            "target": "POLINE",
            "remarks": "Relationship to POLINE ,used to find all non-historical po line records, excluding those on POs of type PRICE and BLANK, for this item. The WHERE clause is: poline.itemnum = item.itemnum and exists (select 1 from po where po.ponum=poline.ponum and po.historyflag = :no and po.potype not in (select VALUE from valuelist where listname='POTYPE' AND MAXVALUE in ('PRICE', 'BLANK') ) and poline.itemsetid = item.itemsetid) . The resulting set will contain zero or more objects.",
            "whereClause": "itemnum in (select itemnum from wpitem where wonum=:wonum and itemsetid=poline.itemsetid) and exists (select 1 from po where po.ponum=poline.ponum and po.revisionnum=poline.revisionnum and po.historyflag = :no)",
            "cardinality": null
        },
        {
            "name": "WPPRLINE_NOHIST",
            "target": "PRLINE",
            "remarks": "Relationship to the PRLINE table, used to find all non-historical pr line records for this item. (item.itemnum=poline.itemnum and exists (select 1 from pr where pr.prnum=prline.prnum and pr.historyflag=no) and prline.itemsetid = item.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum in (select itemnum from wpitem where wonum=:wonum and itemsetid=prline.itemsetid and storelocsite=prline.siteid and location=prline.storeloc) and ponum is null and exists (select 1 from pr where pr.prnum=prline.prnum and pr.historyflag=:no)",
            "cardinality": null
        },
        {
            "name": "WPPRLINE_NOHIST_ALL",
            "target": "PRLINE",
            "remarks": "Relationship to the PRLINE table, used to find all non-historical pr line records for this item. (item.itemnum=poline.itemnum and exists (select 1 from pr where pr.prnum=prline.prnum and pr.historyflag=no) and prline.itemsetid = item.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum in (select itemnum from wpitem where wonum=:wonum and itemsetid=prline.itemsetid) and ponum is null and exists (select 1 from pr where pr.prnum=prline.prnum and pr.historyflag=:no)",
            "cardinality": null
        },
        {
            "name": "PRLINE",
            "target": "PRLINE",
            "remarks": "Relationship to the PRLINE table, used to find all purchase request lines for a work order. (prline.refwo = workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "refwo=:wonum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRLINEWITHNOPOLINE",
            "target": "PRLINE",
            "remarks": "Relationship to the PRLINE table, used to find all purchase request lines for a workorder. This resulting set will contain zero or more objects.",
            "whereClause": "refwo=:wonum and siteid=:siteid and ponum is null and polinenum is null and prnum in (select prnum from pr where pr.prnum=prline.prnum and status not in (select value from synonymdomain where domainid='PRSTATUS' and maxvalue in('CAN','COMP')))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWPRLINE",
            "target": "PRLINE",
            "remarks": "Relationship to the PRLINE table, used to find all purchase request lines for a work order. This resulting set will contain zero or more objects.",
            "whereClause": "refwo=:wonum and siteid=:siteid and prnum in (select prnum from pr where pr.prnum=prline.prnum and status not in (select value from synonymdomain where domainid='PRSTATUS' and maxvalue='CAN'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NEWPROBLEM",
            "target": "PROBLEM",
            "remarks": "This relationship gets the last problem created by this work order. (<long>) One member set.",
            "whereClause": "origrecordclass = :woclass and origrecordid = :wonum and class in (select value from synonymdomain where domainid = 'TKCLASS' and maxvalue = 'PROBLEM') and reportdate = (select max(reportdate) from ticket where origrecordclass = :woclass and origrecordid = :wonum and class in (select value from synonymdomain where domainid = 'TKCLASS' and maxvalue = 'PROBLEM'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PARENTWO",
            "target": "RELATEDRECORD",
            "remarks": null,
            "whereClause": "recordkey=:parent and class =(select woclass from workorder where wonum=:parent and siteid=:siteid) and relatedrecclass in (select value from synonymdomain where domainid ='WOCLASS' and maxvalue in ('CHANGE', 'RELEASE','ACTIVITY', 'WORKORDER'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PARTKTREL",
            "target": "RELATEDRECORD",
            "remarks": null,
            "whereClause": "recordkey=:parent and class =(select woclass from workorder where wonum=:parent and siteid=:siteid) and relatedrecclass in (select value from synonymdomain where domainid='TKCLASS' and maxvalue in ('SR','PROBLEM', 'INCIDENT'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATEDONTICKET",
            "target": "RELATEDRECORD",
            "remarks": "Relationship to the relatedrecord table where recordkey=wonum and class=woclass.  This relationship will return 0 or 1 object.",
            "whereClause": "relatedreckey=:wonum and relatedrecclass=:woclass and relatedrecsiteid=:siteid and relatedrecorgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATEDORIGINATOR",
            "target": "RELATEDRECORD",
            "remarks": null,
            "whereClause": "recordkey=:wonum and class=:woclass and siteid=:siteid and relatetype in (select value from synonymdomain where domainid ='RELATETYPE' and maxvalue in ('ORIGINATOR'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATEDPARENTTICKET",
            "target": "RELATEDRECORD",
            "remarks": "Related Parent Ticket",
            "whereClause": "((recordkey=:origrecordid and class =:origrecordclass) or (recordkey=:parent and class =(select woclass from workorder where wonum=:parent and siteid=:siteid) and siteid=:siteid)) and relatedrecclass in  (select value from synonymdomain where domainid ='TKCLASS' and maxvalue in ('SR', 'PROBLEM', 'INCIDENT'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATEDPARENTWO",
            "target": "RELATEDRECORD",
            "remarks": "Related Parent Work Order",
            "whereClause": "((recordkey=:origrecordid and class =:origrecordclass) or (recordkey=:parent and class =(select woclass from workorder where wonum=:parent and siteid=:siteid) and siteid=:siteid)) and relatedrecclass in (select value from synonymdomain where domainid ='WOCLASS' and maxvalue in ('CHANGE', 'RELEASE','ACTIVITY', 'WORKORDER'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATEDRECORD",
            "target": "RELATEDRECORD",
            "remarks": "Relationship to the relatedrecord table where recordkey=wonum and class=woclass.  This relationship will return 0 or 1 object.",
            "whereClause": "recordkey=:wonum and class=:woclass and siteid=:siteid and orgid=:orgid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "RELATEDTICKET",
            "target": "RELATEDRECORD",
            "remarks": null,
            "whereClause": "recordkey=:wonum and class=:woclass and siteid=:siteid and relatedrecclass in (select value from synonymdomain where domainid ='TKCLASS' and maxvalue in ('SR', 'PROBLEM', 'INCIDENT'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATEDWO",
            "target": "RELATEDRECORD",
            "remarks": null,
            "whereClause": "siteid = :siteid and recordkey=:wonum and class =:woclass and relatedrecclass in (select value from synonymdomain where domainid ='WOCLASS' and maxvalue in ('CHANGE', 'RELEASE','ACTIVITY', 'WORKORDER'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RFQLINE",
            "target": "RFQLINE",
            "remarks": "Relationship to the RFQLINE table, used to find all RFQ lines for a work order. (rfqline.refwo = workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "refwo=:wonum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SPLANASSET",
            "target": "SAFETYPLAN",
            "remarks": "Relationship to the SafetyPlan table, used to find all safetyplan related to this work order's asset. (safetyplanid in (select safetyplanid from spworkasset where workasset = workorder.assetnum)), The join is done through psdi.app.safety.SPWorkAsset. The result set will contain one or more objects.",
            "whereClause": "safetyplanid in (select safetyplanid from spworkasset where workasset = :1) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SPLANASSETLOC",
            "target": "SAFETYPLAN",
            "remarks": "Relationship to the psdi.app.safety.SafetyPlan SafetyPlan} table, used to find all safetyplan related to this work order's asset and location. (safetyplanid in (select w1.safetyplanid from spworkasset w1 where w1.workasset =workorder.assetnum and exists (select w2.* from spworkasset w2 where w2.safetyplanid = w1.safetyplanid and w2.worklocation = workorder.location)). The join is done through psdi.app.safety.SPWorkAsset SPWorkAsset. The result set will contain zero or more objects.",
            "whereClause": "safetyplanid in (select w1.safetyplanid from spworkasset w1 where w1.workasset = :1 or w1.worklocation = :2) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SPLANJP",
            "target": "SAFETYPLAN",
            "remarks": "Relationship to the psdi.app.safety.SafetyPlan SafetyPlan table, used to find all safetyplan where the jobplan matches the workorder's jobplan and the jobplan's asset or location matches the work order's. (safetyplanid in (select safetyplanid from jpassetsplink where jpnum = workorder.jpnum and (assetnum = workorder.assetnum or location = workorder.location)). The join is done through psdi.app.jobplan.JpAssetSpLink. The result set will contain zero or more objects.",
            "whereClause": "safetyplanid in (select safetyplanid from jpassetsplink where jpnum = :1 and (assetnum = :2 or location = :3) and siteid=:siteid) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SPLANLOC",
            "target": "SAFETYPLAN",
            "remarks": "Relationship to psdi.app.safety.SafetyPlan SafetyPlan table, used to find all safetyplan related to this work order's location. (safetyplanid in (select safetyplanid from spworkasset where worklocation = workorder.location)). The join is done through psdi.app.safety.SPWorkAsset SPWorkAsset. The result set will contain one or more objects.",
            "whereClause": "safetyplanid in (select safetyplanid from spworkasset where worklocation = :1 and siteid=:siteid) and siteid=:siteid ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SEARCHHIRCHYREL",
            "target": "SEARCHHIRCHYREL",
            "remarks": "use for searching workview records",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SERVICES",
            "target": "SERVRECTRANS",
            "remarks": "Relationship to the ServRecTrans table, used to find all service received transactions for a work order. (ServRecTrans.wonum = workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "refwo=:wonum and siteid=:siteid and status in (select value from synonymdomain where domainid='RECEIPTSTATUS' and maxvalue='COMP')",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "SHOWACTUALSERVICE",
            "target": "SERVRECTRANS",
            "remarks": "Relationship to the ShowActualService Set used by UI for display. This is a special MboSet used for displaying the actual services for a given workorder. (refwo in (select wonum from workorder where workorder.wonum=workorder.wonum or workorder.parent=workorder.wonum and workorder.siteid=workorder.siteid)). The resulting set will contain zero or more objects.",
            "whereClause": "refwo in (select wonum from workorder where (wonum=:wonum or (parent=:wonum and istask = :yes)) and siteid=:siteid )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REP_ACTSERV",
            "target": "SERVRECTRANS",
            "remarks": "Relationship that returns all actual services for given Work Order, including the services for the Work Order's tasks.  Used for reporting.",
            "whereClause": "(refwo=:wonum or exists (select 1 from workorder w where w.parent=:wonum and w.istask=1 and servrectrans.siteid=w.siteid and servrectrans.refwo=w.wonum)) and servrectrans.siteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "COMMSLA",
            "target": "SLA",
            "remarks": null,
            "whereClause": "commodity=:commodity",
            "cardinality": "SINGLE"
        },
        {
            "name": "COMMSLAGRP",
            "target": "SLA",
            "remarks": null,
            "whereClause": "commoditygroup=:commoditygroup",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SLARECORDS",
            "target": "SLARECORDS",
            "remarks": "Relationship to the SLARECORDS, which leads to the SLAs applied to this workorder.",
            "whereClause": "ownertable = 'WORKORDER' and ownerid = :workorderid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SLARECORDS_TASKS",
            "target": "SLARECORDS",
            "remarks": "Relationship to the SLARECORDS, including the ones for assoicated acitivities.",
            "whereClause": " ownertable = 'WORKORDER' and (ownerid = :workorderid or ownerid in (select workorderid from workorder where parent = :wonum and siteid = :siteid and istask=:yes)) ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SPRELATEDASSET",
            "target": "SPRELATEDASSET",
            "remarks": "Relationship to the psdi.app.safety.SPRelatedAsset SPRelatedAsset table, used to get assets that are related to the work order's asset or location.  The identifier of the related asset is relatedasset or relatedlocation. (assetnum = workorder.assetnum or assetnum is null) and (location = workorder.location or location is null). This result set will contain zero or more objects. This is used for the top table window in the Select Hazards dialog.",
            "whereClause": "(assetnum = :assetnum or assetnum is null) and (location = :location or location is null) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NEWSR",
            "target": "SR",
            "remarks": "This relationship gets the last SR created by this work order. (<long>) One member set.",
            "whereClause": "origrecordclass = :woclass and origrecordid = :wonum and class in (select value from synonymdomain where domainid = 'TKCLASS' and maxvalue = 'SR') and reportdate = (select max(reportdate) from ticket where origrecordclass = :woclass and origrecordid = :wonum and class in (select value from synonymdomain where domainid = 'TKCLASS' and maxvalue = 'SR'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SRVCOMMODRELREC",
            "target": "SRVCOMMODRELREC",
            "remarks": null,
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NEWTICKET",
            "target": "TICKET",
            "remarks": "This relationship gets the last ticket created by this work order. (origrecordclass = :woclass and origrecordid = :wonum and reportdate = (select max(reportdate) from ticket where origrecordclass = :woclass and origrecordid = :wonum)). One member set.",
            "whereClause": "origrecordclass = :woclass and origrecordid = :wonum and reportdate = (select max(reportdate) from ticket where origrecordclass = :woclass and origrecordid = :wonum)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ORIGTICKET",
            "target": "TICKET",
            "remarks": null,
            "whereClause": "ticketid=:origrecordid and class=:origrecordclass",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMTICKET",
            "target": "TICKET",
            "remarks": null,
            "whereClause": "commodity=:commodity",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMTICKETGRP",
            "target": "TICKET",
            "remarks": null,
            "whereClause": "commoditygroup=:commoditygroup",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REP_ACTTOOL",
            "target": "TOOLTRANS",
            "remarks": "Relationship that returns all actual tools for given Work Order, including the tools for the Work Order's tasks.  Used for reporting.",
            "whereClause": "(refwo=:wonum or exists (select 1 from workorder w where w.parent=:wonum and w.istask=1 and tooltrans.siteid=w.siteid and tooltrans.refwo=w.wonum)) and tooltrans.siteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "SHOWACTUALTOOL",
            "target": "TOOLTRANS",
            "remarks": "Relationship to the ShowActualTool Set used by UI for display. This is a special MboSet used for displaying the actual tool for a given workorder. (refwo in (select wonum from workorder where workorder.wonum=workorder.wonum or workorder.parent=workorder.wonum and workorder.siteid=workorder.siteid)). The resulting set will contain zero or more objects.",
            "whereClause": "refwo in (select wonum from workorder where (wonum=:wonum or (parent=:wonum and istask = :yes)) and siteid=:siteid )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TOOLTRANS",
            "target": "TOOLTRANS",
            "remarks": "Relationship to the ToolTrans table, used to find all tool transactions for a work order. (ToolTrans.wonum = workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "refwo=:wonum and siteid=:siteid",
            "cardinality": "MULTIPLE"
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
            "remarks": "Relationship from the WORKORDER to the non-persistent VIEWWOPMS table. (Nowhere clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFASSIGNMENT",
            "target": "WFASSIGNMENT",
            "remarks": "Relationship to active assignments on this workorder. (ownertable = 'WORKORDER' and ownerid = :workorderid and assignstatus in (select value from synonymdomain where domainid='WFASGNSTATUS' and maxvalue='ACTIVE')). Zero to many member set.",
            "whereClause": "ownertable = 'WORKORDER' and wfassignment.ownerid = :workorderid and assignstatus in (select value from synonymdomain where domainid='WFASGNSTATUS' and maxvalue='ACTIVE')",
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
            "remarks": "Relationship to workflow transactions. (ownertable = 'WORKORDER' and ownerid = :workorderid). Zero to many member set.",
            "whereClause": "ownertable = 'WORKORDER' and ownerid = :workorderid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOACTIVITY",
            "target": "WOACTIVITY",
            "remarks": "Relationship from the WO table to its children Activities",
            "whereClause": "parent=:wonum and siteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "NEWACTIVITY",
            "target": "WOACTIVITY",
            "remarks": "This relationship gets the last activity created by this work order. (<long>) One member set.",
            "whereClause": "origrecordclass = :woclass and origrecordid = :wonum and siteid = :siteid and woclass in (select value from synonymdomain where domainid = 'WOCLASS' and maxvalue = 'ACTIVITY') and reportdate = (select max(reportdate) from workorder where origrecordclass = :woclass and origrecordid = :wonum and siteid = :siteid and woclass in (select value from synonymdomain where domainid = 'WOCLASS' and maxvalue = 'ACTIVITY'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TOPWOANCESTOR",
            "target": "WOANCESTOR",
            "remarks": "Relationship to the WOANCESTOR table, used to find all woancestor referced to this workorder. The resulting set will contain zero or one object.",
            "whereClause": "wonum=:wonum and ancestor=:wonum and hierarchylevels=0 and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOANCESTOR",
            "target": "WOANCESTOR",
            "remarks": "Relationship to the WOAncestor table, used to find workorder ancestor for a work order. (WOAncestor.ancestor = Workorder.wonum and WOAncestor.wonum = Workorder.wonum). This resulting set will contain one object. See the ANCESTORS & DESCENDANTS relationships.",
            "whereClause": "wonum=:wonum and ancestor=:wonum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ANCESTORS",
            "target": "WOANCESTOR",
            "remarks": "Relationship to the WOAncestor table, used to find all work order ancestors which are ancestors of the work order. (WOAncestor.wonum = Workorder.wonum and WOAncestor.ancestor != Workorder.wonum). This resulting set will contain zero or more objects. See the WOANCESTOR & DESCENDANTS relationships.",
            "whereClause": "wonum = :wonum and ancestor != :wonum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOALLASSETUSERCUST",
            "target": "WOASSETUSERCUST",
            "remarks": "All asset user cust records for this work order",
            "whereClause": "exists ( select 1 from multiassetlocci where recordkey=:wonum and recordclass=:woclass and siteid=:siteid and multiid=woassetusercust.multiid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOCHANGE",
            "target": "WOCHANGE",
            "remarks": "Relationship from the WO table to its children Changes",
            "whereClause": "parent=:wonum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NEWCHANGE",
            "target": "WOCHANGE",
            "remarks": "This relationship gets the last change created by this work order. (<long>) One member set.",
            "whereClause": "origrecordclass = :woclass and origrecordid = :wonum and siteid = :siteid and woclass in (select value from synonymdomain where domainid = 'WOCLASS' and maxvalue = 'CHANGE') and reportdate = (select max(reportdate) from workorder where origrecordclass = :woclass and origrecordid = :wonum and siteid = :siteid and woclass in (select value from synonymdomain where domainid = 'WOCLASS' and maxvalue = 'CHANGE'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOCHANGESTATUS",
            "target": "WOCHANGESTATUS",
            "remarks": "Relationship to the nonpersistent parameter set for changing work order status.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOCONTRACT",
            "target": "WOCONTRACT",
            "remarks": null,
            "whereClause": "wonum=:wonum  and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACT",
            "target": "WOCONTRACT",
            "remarks": "Contract relationship for Comm Template.",
            "whereClause": "wonum=:wonum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "WOGRANDTOTAL",
            "target": "WOGRANDTOTAL",
            "remarks": "Relationship to the nonpersistent set that calculates work order grandtotals.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOHAZARD",
            "target": "WOHAZARD",
            "remarks": "Relationship to the WOHazard table, used to find all work order hazards for a work order. (WOHazard.wonum = workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "wonum = :wonum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOHAZMATENABLED",
            "target": "WOHAZARD",
            "remarks": "Relationship to the WOHazard table, used to find all work order hazards that are hazardous-material-enabled for a work order. (WOHazard.wonum = workorder.wonum and hazmatenabled = True). This is used for the Wotrack Safety tab, HazMat subtab. This resulting set will contain zero or more objects.",
            "whereClause": "wonum = :wonum and hazmatenabled = :yes and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOHAZPRECENABLED",
            "target": "WOHAZARD",
            "remarks": "Relationship to the WOHazard table, used to find all work order hazards that are precaution-enabled for a work order. (WOHazard.wonum = workorder.wonum and precautionenabled = True). This resulting set will contain zero or more objects.",
            "whereClause": "wonum = :wonum and precautionenabled = :yes and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOHAZTAGENABLED",
            "target": "WOHAZARD",
            "remarks": "Relationship to the WOHazard table, used to find all work order hazards that are tagout-enabled for a work order. (WOHazard.wonum = workorder.wonum and tagoutenabled = True). This resulting set will contain zero or more objects.",
            "whereClause": "wonum = :wonum and tagoutenabled = :yes and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOHAZARDPREC",
            "target": "WOHAZARDPREC",
            "remarks": "Relationship to the WOHazardPrec table, used to find all work order hazard Precautions for a work order. (WOHazardPrec.wonum = workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "wonum = :wonum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOLOCKOUT",
            "target": "WOLOCKOUT",
            "remarks": "Relationship to the WOLockOut table, used to find all workorder lockouts for a work order. (WOLockOut.wonum = workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "wonum = :wonum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOALLLOCUSERCUST",
            "target": "WOLOCUSERCUST",
            "remarks": "All location usercust  records for this work order",
            "whereClause": "exists ( select 1 from multiassetlocci where recordkey=:wonum and recordclass=:woclass and siteid=:siteid and multiid=wolocusercust.multiid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOMETER",
            "target": "WOMETER",
            "remarks": "Relationship to the WOMeter table, used to find all wometers having this meter. (workorder.wonum = wometer.wonum). The resulting set will contain zero or more objects.",
            "whereClause": "wonum=:wonum and siteid=:siteid ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NEWWOMETER",
            "target": "WOMETER",
            "remarks": "Relationship to the WOMeter table, used to get an empty WOMeter set so that a new WOMeter can be added for the work order. The WHERE clause is: 1=2. The resulting set will contain zero objects.",
            "whereClause": "1=2",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "OWNERHISTORY",
            "target": "WOOWNERHISTORY",
            "remarks": "Relationship to woownerhistory table, used to find all owner history, it will contain zero or more objects.",
            "whereClause": "wonum=:wonum and woclass=:woclass and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOPOINFO",
            "target": "WOPOINFO",
            "remarks": "Relationship to the nonpersistent set that calculates PO totals for a work order.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOPRECAUTION",
            "target": "WOPRECAUTION",
            "remarks": "Relationship to the WOPrecaution table, used to find all workorder precautions for a work order. (WOPrecaution.wonum = workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "wonum = :wonum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORELEASE",
            "target": "WORELEASE",
            "remarks": "Relationship from the WO table to its children Releases",
            "whereClause": "parent=:wonum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NEWRELEASE",
            "target": "WORELEASE",
            "remarks": "This relationship gets the last release created by this work order. (<long>) One member set.",
            "whereClause": "origrecordclass = :woclass and origrecordid = :wonum and siteid = :siteid and woclass in (select value from synonymdomain where domainid = 'WOCLASS' and maxvalue = 'RELEASE') and reportdate = (select max(reportdate) from workorder where origrecordclass = :woclass and origrecordid = :wonum and siteid = :siteid and woclass in (select value from synonymdomain where domainid = 'WOCLASS' and maxvalue = 'RELEASE'))",
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
            "remarks": "Relationship to the workorder's worklog records, used to find the worklog records for a given workorder.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKLOGAPPT",
            "target": "WORKLOG",
            "remarks": "Relationship to the worklog records, used to find the worklog records for a given workorder.",
            "whereClause": "recordkey=:wonum and class=:woclass and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "MODIFYWORKLOG",
            "target": "WORKLOG",
            "remarks": "Relationship to the worklog records, used to find the worklog records for a given workorder.",
            "whereClause": "recordkey=:wonum and class=:woclass and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CUSTOMWOWORKLOG",
            "target": "WORKLOG",
            "remarks": "Relationship to get WORKLOG of current WORKORDER.",
            "whereClause": "recordkey=:wonum and class=:woclass and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "COMMWO",
            "target": "WORKORDER",
            "remarks": null,
            "whereClause": "commodity=:commodity",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMWOGRP",
            "target": "WORKORDER",
            "remarks": null,
            "whereClause": "commoditygroup=:commoditygroup",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CHILDNOTASK",
            "target": "WORKORDER",
            "remarks": "Relationship to the Work Orders that are not tasks. This is a MboSet used for displaying only the children work orders which are not tasks for a givenwork order. (workorder.parent=workorder.wonum and workorder.istask=:no and workorder.siteid=workorder.siteid). The resulting set will contain zero or more objects.",
            "whereClause": "parent=:wonum and siteid=:siteid and istask=:no",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CHILDREN",
            "target": "WORKORDER",
            "remarks": "Relationship to the Workorder table itself, used to find all sub-work orders for a work order. (Workorder.parent = Workorder.wonum).  This resulting set will contain zero or more objects. If workorder's HasChildren attribute is true, this set will have at least one member.",
            "whereClause": "parent=:wonum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CHILDTASK",
            "target": "WORKORDER",
            "remarks": null,
            "whereClause": "parent=:wonum and siteid=:siteid and istask = :yes",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "FOLLOWUPWOS",
            "target": "WORKORDER",
            "remarks": "Relationship to the WorkOrder table itself used to find all followup work orders for a work order. (Workorder.followupfromwonum = Workorder.wonum). This resulting set will contain zero or more objects. If the workorder's HasFollowUp attribute is true, this set will have at least one member.",
            "whereClause": "origrecordid=:wonum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NEWWORKORDER",
            "target": "WORKORDER",
            "remarks": "This relationship gets the last ticket created by this work order. (origrecordclass = :woclass and origrecordid = :wonum and siteid = :siteid and reportdate = (select max(reportdate) from workorder where origrecordclass = :woclass and origrecordid = :wonum and siteid = :siteid))). One member set.",
            "whereClause": "origrecordclass = :woclass and origrecordid = :wonum and siteid = :siteid and reportdate = (select max(reportdate) from workorder where origrecordclass = :woclass and origrecordid = :wonum and siteid = :siteid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PARENT",
            "target": "WORKORDER",
            "remarks": "Relationship to the WorkOrder table itsself, used to find the parent work order for a work order. (workorder.wonum = Workorder.parent). This resulting set will contain zero or one object.",
            "whereClause": "wonum=:parent and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POTENTIALCHILDREN",
            "target": "WORKORDER",
            "remarks": "Relationship back to the WorkOrder table, listing all work orders that may be made a child of the source work order.  This list consists of all open work orders which are not ancestors of the source work order.\t(historyflag = :no and wonum not in (select wonum from woancestor where ancestor = WO.wonum and siteid = WO.siteid)).\tThe resulting set can contain zero or more objects.  In almost all cases this set will have many members.",
            "whereClause": "historyflag = :no and wonum not in (select wonum from woancestor where ancestor = :wonum and siteid=:siteid) and wonum not in (select ancestor from woancestor where( (wonum = :wonum ) and siteid=:siteid)) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WO_PARENT",
            "target": "WORKORDER",
            "remarks": null,
            "whereClause": "wonum=:parent and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WO_TASKS",
            "target": "WORKORDER",
            "remarks": "Relationship to the Workorder table itself, used to find all tasks for a workorder. This is used by the MEA Workorder Integration point (parent=:wonum and istask=:yes and siteid=:siteid). The resulting set will contain zero or more objects.",
            "whereClause": "parent=:wonum and istask=:yes and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHOWTASKS",
            "target": "WORKORDER",
            "remarks": "Relationship to the ShowTasks Set used by UI for display. This is a special MboSet used for displaying only the task work orders for a given parent workorder. (workorder.parent=workorder.parent and workorder.istask=:yes and workorder.siteid=workorder.siteid). The resulting set will contain zero or more objects.",
            "whereClause": "parent=:parent and istask=:yes and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHOWWOHIERARCHY",
            "target": "WORKORDER",
            "remarks": "Relationship to the ShowWOHierarchy used by UI for display. This is a special MboSet used for displaying the entire work hierarchy under a given workorder. (wonum in (select wonum from woancestor where ancestor = :wonum and siteid = :siteid) and siteid=:siteid). The resulting set will contain zero or more objects.",
            "whereClause": "wonum in (select wonum from woancestor where ancestor = :wonum and siteid=:siteid) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHOWCHILDREN",
            "target": "WORKORDER",
            "remarks": "Relationship to the ShowChildren Set used by UI for display. This is a special MboSet used for displaying only the children work orders which are not tasks for a given parent work order. (workorder.parent=workorder.parent and workorder.istask=:no and workorder.siteid=workorder.siteid). The resulting set will contain zero or more objects.",
            "whereClause": "parent=:parent and istask=:no and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKPACK",
            "target": "WORKORDER",
            "remarks": "Finds all the workorders that are in the workpack of the current work order.",
            "whereClause": "wonum in (select wonum from woancestor where ancestor=:wonum and siteid=:siteid) and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "WOANDTASK",
            "target": "WORKORDER",
            "remarks": null,
            "whereClause": "(wonum=:wonum  or (parent=:wonum  and istask = :yes))  and siteid=:siteid and  wonum in (select wonum from wocontract)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOSIBLINGS",
            "target": "WORKORDER",
            "remarks": "Relationship from the work order to its sibling work orders.",
            "whereClause": "parent=:parent and siteid=:siteid and istask=0",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOWORKORDER",
            "target": "WORKORDER",
            "remarks": "Relationship from the WO table to its children Work Orders",
            "whereClause": "parent=:wonum and siteid=:siteid  and woclass in (:&synonymlist&_woclass[WORKORDER])",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKORDERSPEC",
            "target": "WORKORDERSPEC",
            "remarks": "Relationship to the workorderspec table, used to find the workorderspec records for a given workordert. (workorder.workorderid=workorderspec.refobjectid) The resulting set will contain zero or more object.",
            "whereClause": "refobjectid=:workorderid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKORDERSPECCLASS",
            "target": "WORKORDERSPEC",
            "remarks": "Relationship to the workorderspec table, used to find the workorderspec records for a given work order. (workorder.wonum=workorderspec.wonum and workorder.classstructureid=workorderspec.classstructureid) The resulting set will contain zero or more object.",
            "whereClause": "wonum= :wonum and classstructureid = :classstructureid and siteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "WORKTYPE",
            "target": "WORKTYPE",
            "remarks": "Relationship to the WorkType table, used to find the work type for a work order. (WorkType.WorkType = workorder.WorkType). This resulting set will contain zero or one object.",
            "whereClause": "worktype = :worktype and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WO_WORKTYPE",
            "target": "WORKTYPE",
            "remarks": null,
            "whereClause": "worktype=:worktype and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKVIEW",
            "target": "WORKVIEW",
            "remarks": "Relationship to the workview table, used to find the workview  for a work order. This resulting set will contain zero or one object.",
            "whereClause": "recordkey=:wonum and class=:woclass and  siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOSAFETYLINK",
            "target": "WOSAFETYLINK",
            "remarks": "Relationship to the WoSafetyLink table, used to find all work order safetylinks for a work order. (WOSafetyLink.wonum = workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "wonum = :wonum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOSLHAZMATENABLED",
            "target": "WOSAFETYLINK",
            "remarks": "Relationship to the WoSafetyLink table, used to find hazardous-material-enabled hazards. (WoSafetyLink.wonum = workorder.wonum and exists (select * from wohazard where wonum = workorder.wonum and hazardid = wosafetylink.hazardid and wosafetydatasource = wosafetylink.wosafetydatasource and hazmatenabled = :yes)). This resulting set will contain zero or more objects.",
            "whereClause": "wonum = :wonum and exists (select * from wohazard where wonum = :wonum and hazardid = wosafetylink.hazardid and wosafetydatasource = wosafetylink.wosafetydatasource and hazmatenabled = :yes and siteid=:siteid) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOSLHAZPRECENABLED",
            "target": "WOSAFETYLINK",
            "remarks": "Relationship to the  WoSafetyLink table, used to find precaution-enabled hazards. (WoSafetyLink.wonum = workorder.wonum and exists (select * from wohazard where wonum = workorder.wonum and hazardid = wosafetylink.hazardid and wosafetydatasource = wosafetylink.wosafetydatasource and precautionenabled = :yes)). This is used for the Wotrack Safety tab, Hazard Prec subtab. This resulting set will contain zero or more objects.",
            "whereClause": "wonum = :wonum and exists (select * from wohazard where wonum = :wonum and hazardid = wosafetylink.hazardid and wosafetydatasource = wosafetylink.wosafetydatasource and precautionenabled = :yes and siteid=:siteid) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOSLTAGENABLED",
            "target": "WOSAFETYLINK",
            "remarks": "Relationship to the WoSafetyLink table, used to find tagout-enabled hazards. (WoSafetyLink.wonum = workorder.wonum and exists (select * from wohazard where wonum = workorder.wonum and hazardid = wosafetylink.hazardid and wosafetydatasource = wosafetylink.wosafetydatasource and tagoutenabled = :yes)). This is used for the Wotrack Safety tab, Tagout subtab. This resulting set will contain zero or more objects.",
            "whereClause": "wonum = :wonum and tagoutid is null and exists (select * from wohazard where wonum = :wonum and hazardid = wosafetylink.hazardid and wosafetydatasource = wosafetylink.wosafetydatasource and tagoutenabled = :yes and siteid=:siteid) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TAGOUTENABLED",
            "target": "WOSAFETYLINK",
            "remarks": "Relationship to the WoSafetyLink table, used to find tagout-enabled hazards. (WoSafetyLink.wonum = workorder.wonum and exists (select * from wohazard where wonum = workorder.wonum and hazardid = wosafetylink.hazardid and wosafetydatasource = wosafetylink.wosafetydatasource and tagoutenabled = :yes)). This is used for the Wotrack Safety tab, Tagout subtab. This resulting set will contain zero or more objects.",
            "whereClause": "wonum = :wonum and tagoutid is not null and exists (select * from wohazard where wonum = :wonum and hazardid = wosafetylink.hazardid and wosafetydatasource = wosafetylink.wosafetydatasource and tagoutenabled = :yes) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WO_SAFETYPLAN",
            "target": "WOSAFETYPLAN",
            "remarks": null,
            "whereClause": "wonum=:wonum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOSAFETYPLAN",
            "target": "WOSAFETYPLAN",
            "remarks": "Relationship to the WOSafetyPlan table, used to find all workorder safetyplans for a work order. (WOSafetyPlan.wonum = workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "wonum = :wonum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SERVICEADDRESS",
            "target": "WOSERVICEADDRESS",
            "remarks": "WO Service Address for Workorder",
            "whereClause": "wonum = :wonum and siteid = :siteid",
            "cardinality": null
        },
        {
            "name": "WOSTATUS",
            "target": "WOSTATUS",
            "remarks": "Relationship to the  WOStatus table, used to find all workorder status for a work order. (WOStatus.wonum = workorder.wonum). This resulting set will contain 1 or more objects.",
            "whereClause": "wonum = :wonum and siteid=:siteid",
            "cardinality": "SINGLE"
        },
        {
            "name": "WOTAGLOCK",
            "target": "WOTAGLOCK",
            "remarks": "Relationship to the WOTagLock table, used to find all workorder taglocks for a work order. (WOTagLock.wonum = workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "wonum = :wonum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOTAGOUT",
            "target": "WOTAGOUT",
            "remarks": "Relationship to the WOTagOut table, used to find all workorder tagouts for a work order. (WOTagOut.wonum = workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "wonum = :wonum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOTASKLOOKUP",
            "target": "WOTASKLOOKUP",
            "remarks": "Relationship from the work order to its tasks.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOTASKRELATION",
            "target": "WOTASKRELATION",
            "remarks": "Relationship to the WOTaskRelation table, used to find all predessor tasks for a work order.",
            "whereClause": "wonum=:wonum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOPREDREFWONUM",
            "target": "WOTASKRELATION",
            "remarks": "Relationship to the WOTaskRelation table, used to find all task relation rows that reference this work order.",
            "whereClause": "predrefwonum=:wonum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHOWALLTASKRELATION",
            "target": "WOTASKRELATION",
            "remarks": " Relationship to the ShowAllTaskRelationSet used by UI for display. This is a special MboSet used for displaying all predessor tasks related to the entire work hierarchy under a given workorder.",
            "whereClause": "wonum in (select wonum from woancestor where ancestor = :wonum and siteid=:siteid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHOWTASKRELATION",
            "target": "WOTASKRELATION",
            "remarks": "Relationship to the ShowTaskRelation Set used by UI for display. This is a  special MboSet used for displaying the task predessors for a given workorder.",
            "whereClause": "wonum in (select wonum from workorder where (wonum=:wonum or (parent=:wonum and istask = :yes)) and siteid=:siteid )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOTOTAL",
            "target": "WOTOTAL",
            "remarks": "Relationship to the nonpersistent set that calculates work order totals for a work order and its tasks.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WPITEM",
            "target": "WPITEM",
            "remarks": "Relationship to the WPITEM table, used to find all work plan Item(material and services) for a work order. (WPitem.wonum = workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "wonum=:wonum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHOWPLANITEM",
            "target": "WPITEM",
            "remarks": "Relationship to the ShowPlanItem Set used by UI for display. This is a special MboSet used for displaying the planned item(material and services) for a given workorder. (wonum in (select wonum from workorder where wpitem.wonum=workorder.wonum or wpitem.parent=workorder.wonum and wpitem.siteid=workorder.siteid)). The resulting set will contain zero or more objects.",
            "whereClause": "wonum in (select wonum from workorder where (wonum=:wonum or (parent=:wonum and istask = :yes)) and siteid=:siteid )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHOWALLPLANITEM",
            "target": "WPITEM",
            "remarks": "Relationship to the ShowAllPlanItemSet used by UI for display. This is a special MboSet used for displaying all work plan Item(material/services) related to the entire work hierarchy under a given workorder. (wonum in (select wonum from woancestor where ancestor = :wonum and siteid = :siteid)). The resulting set will contain zero or more objects.",
            "whereClause": "wonum in (select wonum from woancestor where ancestor = :wonum and siteid = :siteid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHOWALLPLANLABOR",
            "target": "WPLABOR",
            "remarks": "Relationship to the ShowAllPlanLaborSet used by UI for display. This is a special MboSet used for displaying all work plan labor related to the entire work hierarchy under a given workorder. (wonum in (select wonum from woancestor where ancestor = :wonum and siteid = :siteid)). The resulting set will contain zero or more objects.",
            "whereClause": "wonum in (select wonum from woancestor where ancestor = :wonum and siteid=:siteid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHOWPLANLABOR",
            "target": "WPLABOR",
            "remarks": "Relationship to the ShowPlanLabor Set used by UI for display. This is a  special MboSet used for displaying the planned labor for a given workorder. (wonum in (select wonum from workorder where wplabor.wonum=workorder.wonum or wplabor.parent=workorder.wonum and wplabor.siteid=workorder.siteid)). The resulting set will contain zero or more objects.",
            "whereClause": "wonum in (select wonum from workorder where (wonum=:wonum or (parent=:wonum and istask = :yes)) and siteid=:siteid )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REP_PLANLAB",
            "target": "WPLABOR",
            "remarks": "Relationship that returns all planned labor for given Work Order, including the labor for the Work Order's tasks.  Used for reporting.",
            "whereClause": "(wonum=:wonum or exists (select 1 from workorder w where w.parent=:wonum and w.istask=1 and wplabor.siteid=w.siteid and wplabor.wonum=w.wonum)) and wplabor.siteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "WPLABOR",
            "target": "WPLABOR",
            "remarks": "Relationship to the WPLabor table, used to find all work plan labors for a work order. (WPLabor.wonum = workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "wonum=:wonum and siteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "WPLABOR_QBE",
            "target": "WPLABOR",
            "remarks": "Relationship from workorder to wplabor for qbe ",
            "whereClause": "exists (select 1 from workorder yy where ((yy.istask = :yes and yy.parent = :wonum ) or ( yy.wonum = :wonum)) and wplabor.wonum = yy.wonum and yy.siteid = :siteid) and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WPMATERIAL",
            "target": "WPMATERIAL",
            "remarks": "Relationship to the WPMaterial view, used to find all work plan materials for a work order. (WPMaterial.wonum = workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "wonum=:wonum and siteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "WPMATERIAL_QBE",
            "target": "WPMATERIAL",
            "remarks": "Relationship from workorder to wpmaterial for qbe ",
            "whereClause": "exists (select 1 from workorder yy where ((yy.istask = :yes and yy.parent = :wonum ) or (yy.wonum = :wonum)) and wpmaterial.wonum = yy.wonum and yy.siteid = :siteid) and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WPMATERIALTASK",
            "target": "WPMATERIAL",
            "remarks": "Relationship to the WPMaterial view, used to find all work plan materials for a work order. (WPMaterial.wonum = workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "wonum in (select wonum from workorder where (wonum=:wonum or (parent=:wonum and istask = :yes)) and siteid=:siteid)",
            "cardinality": null
        },
        {
            "name": "WPMDIRECTREQ",
            "target": "WPMATERIAL",
            "remarks": "Relationship to the WPMaterial view, used to find all direct request work plan materials for a work order. This resulting set will contain zero or more objects.",
            "whereClause": "wonum=:wonum and siteid=:siteid and directreq=:yes and pr is null and prlinenum is null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKPACKMATERIALS",
            "target": "WPMATERIAL",
            "remarks": "Relationship to find all WPMaterial in a work package (Current work order and all related children)",
            "whereClause": "wonum in (select wonum from workorder where wonum in (select wonum from woancestor where ancestor = :wonum and siteid=:siteid)) and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "REP_PLANMAT",
            "target": "WPMATERIAL",
            "remarks": "Relationship that returns all planned materials for given Work Order, including the materials for the Work Order's tasks.  Used for reporting.",
            "whereClause": "(wonum=:wonum or exists (select 1 from workorder w where w.parent=:wonum and w.istask=1 and wpmaterial.siteid=w.siteid and wpmaterial.wonum=w.wonum)) and wpmaterial.siteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "SHOWPLANMATERIAL",
            "target": "WPMATERIAL",
            "remarks": "Relationship to the ShowPlanMetrial Set used by UI for display. This is a special MboSet used for displaying the planned material for a given workorder. (wonum in (select wonum from workorder where wpmaterial.wonum=workorder.wonum or wpmaterial.parent=workorder.wonum and wpmaterial.siteid=workorder.siteid)). The resulting set will contain zero or more objects.",
            "whereClause": "wonum in (select wonum from workorder where (wonum=:wonum or (parent=:wonum and istask = :yes)) and siteid=:siteid )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHOWALLPLANMATERIAL",
            "target": "WPMATERIAL",
            "remarks": "Relationship to the ShowAllPlanMaterialSet used by UI for display. This is a special MboSet used for displaying all work plan material related to the entire work hierarchy under a given workorder. (wonum in (select wonum from woancestor where ancestor = :wonum and siteid = :siteid)). The resulting set will contain zero or more objects.",
            "whereClause": "wonum in (select wonum from woancestor where ancestor = :wonum and siteid=:siteid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ALLSTOREWPMATERIAL",
            "target": "WPMATERIAL",
            "remarks": "Relationship to find all the planned materials that are not direct issues.",
            "whereClause": "wonum=:wonum and siteid=:siteid and directreq=:no",
            "cardinality": null
        },
        {
            "name": "ALLDIRECTREQMATERIAL",
            "target": "WPMATERIAL",
            "remarks": "Relationship to show all plan material that is a direct issue.",
            "whereClause": "wonum=:wonum and siteid=:siteid and directreq=:yes",
            "cardinality": null
        },
        {
            "name": "SHOWALLPLANSERVICE",
            "target": "WPSERVICE",
            "remarks": "Relationship to the ShowAllPlanServiceSet used by UI for display. This is a special MboSet used for displaying all work plan services related to the entire work hierarchy under a given workorder. (wonum in (select wonum from woancestor where ancestor = :wonum and siteid = :siteid)). The resulting set will contain zero or more objects.",
            "whereClause": "wonum in (select wonum from woancestor where ancestor = :wonum and siteid = :siteid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHOWPLANSERVICE",
            "target": "WPSERVICE",
            "remarks": "Relationship to the ShowPlanService Set used by UI for display. This is a special MboSet used for displaying the planned service for a given workorder. (wonum in (select wonum from workorder where wpservice.wonum=workorder.wonum or wpservice.parent=workorder.wonum and wpservice.siteid=workorder.siteid)). The resulting set will contain zero or more objects.",
            "whereClause": "wonum in (select wonum from workorder where (wonum=:wonum or (parent=:wonum and istask = :yes)) and siteid=:siteid )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REP_PLANSERV",
            "target": "WPSERVICE",
            "remarks": "Relationship that returns all planned services for given Work Order, including the services for the Work Order's tasks.  Used for reporting.",
            "whereClause": "(wonum=:wonum or exists (select 1 from workorder w where w.parent=:wonum and w.istask=1 and wpservice.siteid=w.siteid and wpservice.wonum=w.wonum)) and wpservice.siteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "WPSERVICE",
            "target": "WPSERVICE",
            "remarks": "Relationship to the WPService view, used to find all work plan services for a work order. (WPService.wonum = workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "wonum=:wonum and siteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "WPSERVICE_QBE",
            "target": "WPSERVICE",
            "remarks": "Relationship from workorder to wpservice for qbe ",
            "whereClause": "exists (select 1 from workorder yy where ((yy.istask = :yes and yy.parent = :wonum ) or (yy.wonum = :wonum)) and wpservice.wonum = yy.wonum and yy.siteid = :siteid) and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WPTOOL",
            "target": "WPTOOL",
            "remarks": "Relationship to the WPTool table, used to find all workplan tools for a work order. (WPTool.wonum = workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "wonum=:wonum and siteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "WPTOOL_QBE",
            "target": "WPTOOL",
            "remarks": "Relationship from workorder to wptool for qbe ",
            "whereClause": "exists (select 1 from workorder yy where ((yy.istask = :yes and yy.parent = :wonum ) or (yy.wonum = :wonum)) and wptool.wonum = yy.wonum and yy.siteid = :siteid) and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REP_PLANTOOL",
            "target": "WPTOOL",
            "remarks": "Relationship that returns all planned tools for given Work Order, including the tools for the Work Order's tasks.  Used for reporting.",
            "whereClause": "(wonum=:wonum or exists (select 1 from workorder w where w.parent=:wonum and w.istask=1 and wptool.siteid=w.siteid and wptool.wonum=w.wonum)) and wptool.siteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "SHOWPLANTOOL",
            "target": "WPTOOL",
            "remarks": "Relationship to the ShowPlanTool Set used by UI for display. This is a  special MboSet used for displaying the planned tool for a given workorder. (wonum in (select wonum from workorder where wptool.wonum=workorder.wonum or wptool.parent=workorder.wonum and wptool.siteid=workorder.siteid)). The resulting set will contain zero or more objects.",
            "whereClause": "wonum in (select wonum from workorder where (wonum=:wonum or (parent=:wonum and istask = :yes)) and siteid=:siteid )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHOWALLPLANTOOL",
            "target": "WPTOOL",
            "remarks": "Relationship to the ShowAllPlanToolSet used by UI for display. This is a special MboSet used for displaying all work plan tools related to the entire work hierarchy under a given workorder. (wonum in (select wonum from woancestor where ancestor = :wonum and siteid = :siteid)). The resulting set will contain zero or more objects.",
            "whereClause": "wonum in (select wonum from woancestor where ancestor = :wonum and siteid=:siteid)",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "ASSETWOS",
            "source": "AMCREWTOOL",
            "remarks": "Finds the workorders that the asset is assigned to that has a scheduled start and scheduled finish date",
            "whereClause": "status in (select value from synonymdomain where domainid='WOSTATUS' and maxvalue in ('APPR','INPRG','WMATL')) and assetnum=:assetnum and siteid=:siteid and schedfinish is not null and schedstart is not null",
            "cardinality": null
        },
        {
            "name": "COMMWO",
            "source": "AREASAFFECTED",
            "remarks": null,
            "whereClause": "commodity=:affectedcommodity",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TOPOLOGYASSETWORKS",
            "source": "ASSET",
            "remarks": "Relation that returns all the work          tasks associated with this asset that have not been completed or          canceled.",
            "whereClause": "wonum in (select ma.recordkey from WORKORDER wo, MULTIASSETLOCCI ma          where wo.WONUM=ma.RECORDKEY and ma.assetnum=wo.assetnum and wo.assetnum=:assetnum)          and woclass in (select value from synonymdomain where domainid='WOCLASS' and maxvalue in ('ACTIVITY', 'CHANGE', 'WORKORDER'))          and status in (select value from synonymdomain where domainid='WOSTATUS' and maxvalue not in ('COMP','CAN','CLOSE'))",
            "cardinality": null
        },
        {
            "name": "OPENWO",
            "source": "ASSET",
            "remarks": "Relationship to the Workorder table,used to find all open work orders for a given asset.(workorder.assetnum = asset.assetnum and workorder.historyflag = \"F\"). This resulting set will contain zero or more objects.",
            "whereClause": "assetnum = :assetnum and historyflag = :no and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PLUSCAVTLUSE",
            "source": "ASSET",
            "remarks": "Relationship to the WORKORDER table used by the view tool usage dialog",
            "whereClause": "siteid = :siteid and wonum in (select refwo from tooltrans where rotassetnum = :assetnum and siteid = :siteid group by refwo having sum(toolqty) > 0)",
            "cardinality": null
        },
        {
            "name": "ASSETREFWO",
            "source": "ASSET",
            "remarks": "Relationship to the workorder records, used to find the workorder record in a given site.",
            "whereClause": "wonum=:refwo and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ALLWO",
            "source": "ASSET",
            "remarks": "workorders by assetnum, siteid",
            "whereClause": "assetnum = :assetnum and siteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "ASSETWO",
            "source": "ASSET",
            "remarks": "Relationship to the workorder records, used to find the workorder record in a given site.",
            "whereClause": "wonum=:wonum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKORDER",
            "source": "ASSIGNMENT",
            "remarks": "Relationship to the Workorder table, used to find the work order for a given assignment. (workorder.wonum=assignment.wonum). This resulting set will contain one object.",
            "whereClause": "wonum=:wonum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKORDER",
            "source": "ASSIGNREPLOC",
            "remarks": "Relationship to the Workorder table, used to find the work order for a given assignment. (workorder.wonum=assignreploc.wonum). This resulting set will contain one object.",
            "whereClause": "wonum=:wonum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "WORKORDER",
            "source": "CI",
            "remarks": "Relationship to the WORKORDER table, used to find WORKORDER record for a given CI.",
            "whereClause": "cinum=:cinum and woclass in (select value from synonymdomain where domainid ='WOCLASS' and maxvalue='WORKORDER')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ALLWO",
            "source": "CI",
            "remarks": "workorders by CINUM",
            "whereClause": "cinum=:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKORDER",
            "source": "CLASSSTRUCTURE",
            "remarks": "Relationship to the workorder table, used to find the workorder records for a given classstructure. (classstructure.classstructureid = workorder.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid in (select classstructureid from classancestor where ancestor=:classstructureid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKORDERS_ONLY",
            "source": "CLASSSTRUCTURE",
            "remarks": "Relationship to the workorder table, used to find the workorder records for a given classstructure. (classstructure.classstructureid = workorder.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKORDER",
            "source": "COMMLOG",
            "remarks": "Relationship to get WO",
            "whereClause": "workorderid=:ownerid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMWO",
            "source": "COMMODITIES",
            "remarks": null,
            "whereClause": "commodity = :commodity",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMWOGRP",
            "source": "COMMODITIES",
            "remarks": null,
            "whereClause": "commoditygroup = :commodity",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "OPENWO",
            "source": "DRILLDOWN",
            "remarks": "Relationship to the work order table, used to find the work order records for a given location or asset shown on DrilDown. (((workorder.location = drilldown.locinhierarchy and drilldown.locison=:yes) or (workorder.assetnum=drilldown.assetValue and drilldown.locison=:no)) and workorder.historyflag = :no and workorder.siteid=drilldown.siteid",
            "whereClause": "((location = :locvalue and :locison=:yes) or (assetnum=:assetvalue and :locison=:no)) and historyflag = :no and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKORDER",
            "source": "INVOICECOST",
            "remarks": "Relationship to the WorkOrder table, used to find the work order that is used as a charge for a given invoice cost line. (invoicecost.refwo = workorder.wonum). The resulting set will contain one object.Relationship to the InvoiceLine table, used to find the owner invoice line for a given invoice cost line. (invoicecost.invoicenum = invoiceline.invoicenum and invoicecost.invoicelinenum = invoiceline.invoicelinenum). The resulting set will contain one object.",
            "whereClause": "wonum=:refwo and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKORDER",
            "source": "INVRESERVE",
            "remarks": "Relationship to the WorkOrder table, used to find the work order for which the material is reserved. (workorder.wonum = invreserve.wonum). The resulting set will contain one object.",
            "whereClause": "wonum = :wonum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PLUSCWORKORDER",
            "source": "JOBPLAN",
            "remarks": "Relationship to the WorkOrder table, used to find the jobplan for a work order. (Jobplan.jpnum = Workorder.jpnum).",
            "whereClause": "jpnum=:jpnum and pluscjprevnum = :pluscrevnum and ((orgid=:orgid and siteid=:siteid) or (orgid=:orgid and siteid is null) or (orgid is null and siteid is null))",
            "cardinality": null
        },
        {
            "name": "WORKORDER",
            "source": "LABTRANS",
            "remarks": "Relationship to the WorkOrder table. Used to find out WorkOrder for the LabTrans. (WorkOrder.wonum=LabTrans.wonum). The resultset will contain at most 1 object.",
            "whereClause": "wonum=:refwo and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABTRANS_WOANDTASK",
            "source": "LABTRANS",
            "remarks": "Relationship from labtrans to workorder and its tasks",
            "whereClause": "((wonum=:refwo)or(parent = :refwo and istask = :yes))and(siteid=:siteid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKORDERCREW",
            "source": "LABTRANSENTERBY",
            "remarks": "Relationship from non persistent table LABTRANSENTERBY to WORKORDER for Crews.",
            "whereClause": "amcrew=:amcrew and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "LABTRANSENTERBY_WORKORDER",
            "source": "LABTRANSENTERBY",
            "remarks": "Relationship from non persistent table labtransenterby to workorder",
            "whereClause": "wonum=:wonum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKORDER",
            "source": "LBSLOCATION",
            "remarks": "Relationship to find what workorder was being worked on from the LBSLOCATION",
            "whereClause": "wonum=:wonum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "OPENWO",
            "source": "LOCATIONS",
            "remarks": "Relationship to the WorkOrder table, used to find the open work orders at a given operating location. (locations.location =workorder.location and workorder.historyflag = no). The resulting set will contain zero or more objects.",
            "whereClause": "location = :location and historyflag = :no and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "OPENWOFORLOC",
            "source": "LOCATIONS",
            "remarks": "Relationship to the workorder table, used to find the work orders for the Location. The resulting set will contain one or more objects.",
            "whereClause": "location = :location and historyflag = :no and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ALLWO",
            "source": "LOCATIONS",
            "remarks": "WorkOrders by location,siteid",
            "whereClause": "location=:location and siteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "WORKORDER",
            "source": "MATRECTRANS",
            "remarks": "Relationship to the WorkOrder table, used to find the work order for which the material is received as a direct issue. (workorder.wonum = matrectrans.wonum). The resulting set will contain zero or one object. WoNum is a non-persistent column for the MatRecTrans object. See the attribute defined in psdi.app.inventory.MatRecTrans for more information.",
            "whereClause": "wonum=:refwo and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKORDER",
            "source": "MATUSETRANS",
            "remarks": "Relationship to the WorkOrder table, used to find the work order for which the material is issued. (workorder.wonum = matusetrans.wonum). The resulting set will contain zero or one object. WoNum is a non-persistent column for the MatUseTrans object. See the attribute defined in psdi.app.inventory.MatUseTrans for more information.",
            "whereClause": "wonum=:wonum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKORDERGENFROMJP",
            "source": "MEASUREPOINT",
            "remarks": "Relationship to the Work Order table, used to get an empty set of work orders so that a new work order can be added. The WHERE clause is: 1=2. The resulting set will contain zero objects.",
            "whereClause": "1=2",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKORDER",
            "source": "MR",
            "remarks": "Relationship to the WorkOrder table, used to find the workorder records for a given material requisition. (workorder.wonum = mr.wonum). The resulting set will contain zero or more objects.",
            "whereClause": "wonum = :wonum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MR_WORKORDER",
            "source": "MR",
            "remarks": null,
            "whereClause": "wonum=:wonum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKORDER",
            "source": "MULTIASSETLOCCI",
            "remarks": "Relationship from multiassetlocci to workorder table to get workorder related info",
            "whereClause": "wonum=:recordkey and (siteid=:worksiteid or siteid is null)",
            "cardinality": null
        },
        {
            "name": "PERSONGROUPS_WORKORDER",
            "source": "PERSONGROUP",
            "remarks": "find non history  workorders with persongroupid",
            "whereClause": "(persongroup=:persongroup  or ownergroup= :persongroup) and historyflag=:no",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PLUSCFILTERWO",
            "source": "PLUSCFILTER",
            "remarks": "Relationship for the filter view tool usage dialog",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "PLUSCWODSWO",
            "source": "PLUSCWODS",
            "remarks": "Required workorder for pluscwods",
            "whereClause": "wonum = :wonum and siteid = :siteid",
            "cardinality": null
        },
        {
            "name": "WORKORDER",
            "source": "PM",
            "remarks": "Relationship to the PM's Work order records, used to find all the workorder records for a given PM. (workorder.pmnum=pm.pmnum). The resulting set will contain zero to many records.",
            "whereClause": "pmnum=:pmnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXPMDUEDATEWO",
            "source": "PM",
            "remarks": "Relationship to the Workorder table, used to get the workorder record for a given PM and maximum pmduedate.",
            "whereClause": "pmnum =:pmnum and siteid =:siteid and historyflag = 0 and pmduedate = ( select max(pmduedate) from workorder where pmnum =:pmnum and siteid =:siteid and historyflag = 0) ",
            "cardinality": null
        },
        {
            "name": "WORKORDER",
            "source": "POLINE",
            "remarks": "Relationship to the WorkOrder table, used to find the work order records for a given purchase order line. (workorder.wonum = poline.wonum). The resulting set will contain zero or more objects.",
            "whereClause": "wonum = :wonum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKORDER",
            "source": "PRLINE",
            "remarks": "Relationship to Workorder for RecHover in PR  / PR Lines tab / PR Lines table details",
            "whereClause": "wonum = :wonum and siteid = :siteid",
            "cardinality": null
        },
        {
            "name": "ALLWO",
            "source": "RECONASSETRESULT",
            "remarks": "Relationship to Work Order",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "WORKORDER",
            "source": "RELATEDRECORD",
            "remarks": null,
            "whereClause": "origrecordid=:recordkey and origrecordclass=:class",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATEDRECWO",
            "source": "RELATEDRECORD",
            "remarks": null,
            "whereClause": "wonum=:relatedreckey and woclass=:relatedrecclass and siteid=:relatedrecsiteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKORDER",
            "source": "RFQLINE",
            "remarks": "Relationship to Workorder for RecHover in RFQ  / RFQ Lines tab / RFQ Lines table details",
            "whereClause": "wonum = :wonum and siteid = :siteid",
            "cardinality": null
        },
        {
            "name": "WORKORDER",
            "source": "SKDACTIVITY",
            "remarks": "Get WO information for a project in SKDActivity table",
            "whereClause": "WORKORDERID=:OBJECTID",
            "cardinality": null
        },
        {
            "name": "WORKORDER",
            "source": "SKDCOMPLIANCEWOLIST",
            "remarks": "Get WO's for the project",
            "whereClause": "workorderid=:workorderid",
            "cardinality": null
        },
        {
            "name": "WORKORDER",
            "source": "SLARECORDS",
            "remarks": "Relationship to workorder.",
            "whereClause": ":ownertable = 'WORKORDER' and :ownerid = workorderid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMWO",
            "source": "TICKET",
            "remarks": null,
            "whereClause": "commodity=:commodity",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMWOGRP",
            "source": "TICKET",
            "remarks": null,
            "whereClause": "commoditygroup=:commoditygroup",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ACTIVITY",
            "source": "TICKET",
            "remarks": null,
            "whereClause": "origrecordid=:ticketid and origrecordclass=:class and woclass in (select value from synonymdomain where domainid ='WOCLASS' and maxvalue='ACTIVITY')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKORDER",
            "source": "TICKET",
            "remarks": null,
            "whereClause": "origrecordid=:ticketid and origrecordclass=:class and woclass in (select value from synonymdomain where domainid ='WOCLASS' and maxvalue !='ACTIVITY')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOREP",
            "source": "TICKET",
            "remarks": "Relationship to the workorder table, used to find all workorders for the person specified in the Reported By fields.  The resulting set will contain zero or many.",
            "whereClause": "(reportedby=:reportedby or onbehalfof=:reportedby) and historyflag=:no and istask=:no",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOAFF",
            "source": "TICKET",
            "remarks": "Relationship to the workorder table, used to find all workorders for the person specified in the Affected User field. The resulting set will contain zero or many.",
            "whereClause": "(reportedby=:affectedperson or onbehalfof=:affectedperson) and historyflag=:no and istask=:no",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NEWWORKORDER",
            "source": "TICKET",
            "remarks": "This relationship gets the last work order created by this ticket. (origrecordclass = :class and origrecordid = :ticketid and reportdate = (select max(reportdate) from ticket where origrecordclass = :class and origrecordid = :ticketid)). One member set.",
            "whereClause": "origrecordclass = :class and origrecordid = :ticketid and reportdate = (select max(reportdate) from workorder where origrecordclass = :class and origrecordid = :ticketid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ORIGWO",
            "source": "TICKET",
            "remarks": null,
            "whereClause": "wonum=:origrecordid and woclass=:origrecordclass",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMWO",
            "source": "TKTEMPLATE",
            "remarks": null,
            "whereClause": "commodity=:commodity",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMWOGRP",
            "source": "TKTEMPLATE",
            "remarks": null,
            "whereClause": "commoditygroup=:commoditygroup",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKORDER",
            "source": "UNASSIGNEDWORKVIEW",
            "remarks": "WORKORDER for Unassigned WORKORDER",
            "whereClause": "wonum = :wonum and siteid = :siteid",
            "cardinality": null
        },
        {
            "name": "VIEWWO_BYASSET",
            "source": "VIEWWOPMS",
            "remarks": "Used in the View WOs and PMs menu action.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWO_BYCI",
            "source": "VIEWWOPMS",
            "remarks": "Relationship from the non-persistent VIEWWOPMS table to workorder. The resulting set will contain zero or more objects. This relationship is used when the View Work Details dialog is launched from a configuration item field.",
            "whereClause": "cinum=:cinum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "VIEWWO_BYLOC",
            "source": "VIEWWOPMS",
            "remarks": "Used in the View WOs and PMs menu action.",
            "whereClause": "location=:location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOCHILD_BYASSET",
            "source": "VIEWWOPMS",
            "remarks": "Relationship to the workorder table, used to find all workorders for the asset and its children specified in the assetnum field.  The resulting set will contain zero or many.",
            "whereClause": "assetnum in (select assetnum from assetancestor where ancestor =:assetnum) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOCHILD_BYLOC",
            "source": "VIEWWOPMS",
            "remarks": "Relationship to the workorder table, used to find all workorders for the location and its children specified in the location field.  The resulting set will contain zero or many.",
            "whereClause": "location in (select location from locancestor where ancestor =:location ) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKORDER",
            "source": "WMASSIGNMENT",
            "remarks": "Relationship to the Work Order Table; used to find Work Orders that are equivalent to WMAssignments.",
            "whereClause": "wonum=:wonum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKORDER",
            "source": "WMASSIGNTMP",
            "remarks": "Relationship from table WMASSIGNTMP to WORKORDER.",
            "whereClause": "siteid=:siteid and ((wonum=:wonum and taskid=:taskid) or (parent=:wonum and taskid=:taskid) or (wonum=:wonum and taskid is null))",
            "cardinality": null
        },
        {
            "name": "WOCLASSBYWOGROUP",
            "source": "WOACTIVITY",
            "remarks": null,
            "whereClause": "wonum=:wogroup and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PARENTPROCESS",
            "source": "WOACTIVITY",
            "remarks": "Parent process to activity/task relationship.",
            "whereClause": "wonum in (select ancestor from woancestor where wonum = :wonum and siteid = :siteid and hierarchylevels = (select max(hierarchylevels) from woancestor where wonum = :wonum and siteid = :siteid)) and siteid = :siteid and woclass in (select value from synonymdomain where domainid = 'WOCLASS' and (maxvalue not in ('ACTIVITY')))",
            "cardinality": null
        },
        {
            "name": "COMMWO",
            "source": "WORKORDER",
            "remarks": null,
            "whereClause": "commodity=:commodity",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMWOGRP",
            "source": "WORKORDER",
            "remarks": null,
            "whereClause": "commoditygroup=:commoditygroup",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CHILDNOTASK",
            "source": "WORKORDER",
            "remarks": "Relationship to the Work Orders that are not tasks. This is a MboSet used for displaying only the children work orders which are not tasks for a givenwork order. (workorder.parent=workorder.wonum and workorder.istask=:no and workorder.siteid=workorder.siteid). The resulting set will contain zero or more objects.",
            "whereClause": "parent=:wonum and siteid=:siteid and istask=:no",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CHILDREN",
            "source": "WORKORDER",
            "remarks": "Relationship to the Workorder table itself, used to find all sub-work orders for a work order. (Workorder.parent = Workorder.wonum).  This resulting set will contain zero or more objects. If workorder's HasChildren attribute is true, this set will have at least one member.",
            "whereClause": "parent=:wonum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CHILDTASK",
            "source": "WORKORDER",
            "remarks": null,
            "whereClause": "parent=:wonum and siteid=:siteid and istask = :yes",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "FOLLOWUPWOS",
            "source": "WORKORDER",
            "remarks": "Relationship to the WorkOrder table itself used to find all followup work orders for a work order. (Workorder.followupfromwonum = Workorder.wonum). This resulting set will contain zero or more objects. If the workorder's HasFollowUp attribute is true, this set will have at least one member.",
            "whereClause": "origrecordid=:wonum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NEWWORKORDER",
            "source": "WORKORDER",
            "remarks": "This relationship gets the last ticket created by this work order. (origrecordclass = :woclass and origrecordid = :wonum and siteid = :siteid and reportdate = (select max(reportdate) from workorder where origrecordclass = :woclass and origrecordid = :wonum and siteid = :siteid))). One member set.",
            "whereClause": "origrecordclass = :woclass and origrecordid = :wonum and siteid = :siteid and reportdate = (select max(reportdate) from workorder where origrecordclass = :woclass and origrecordid = :wonum and siteid = :siteid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PARENT",
            "source": "WORKORDER",
            "remarks": "Relationship to the WorkOrder table itsself, used to find the parent work order for a work order. (workorder.wonum = Workorder.parent). This resulting set will contain zero or one object.",
            "whereClause": "wonum=:parent and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POTENTIALCHILDREN",
            "source": "WORKORDER",
            "remarks": "Relationship back to the WorkOrder table, listing all work orders that may be made a child of the source work order.  This list consists of all open work orders which are not ancestors of the source work order.\t(historyflag = :no and wonum not in (select wonum from woancestor where ancestor = WO.wonum and siteid = WO.siteid)).\tThe resulting set can contain zero or more objects.  In almost all cases this set will have many members.",
            "whereClause": "historyflag = :no and wonum not in (select wonum from woancestor where ancestor = :wonum and siteid=:siteid) and wonum not in (select ancestor from woancestor where( (wonum = :wonum ) and siteid=:siteid)) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WO_PARENT",
            "source": "WORKORDER",
            "remarks": null,
            "whereClause": "wonum=:parent and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WO_TASKS",
            "source": "WORKORDER",
            "remarks": "Relationship to the Workorder table itself, used to find all tasks for a workorder. This is used by the MEA Workorder Integration point (parent=:wonum and istask=:yes and siteid=:siteid). The resulting set will contain zero or more objects.",
            "whereClause": "parent=:wonum and istask=:yes and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHOWTASKS",
            "source": "WORKORDER",
            "remarks": "Relationship to the ShowTasks Set used by UI for display. This is a special MboSet used for displaying only the task work orders for a given parent workorder. (workorder.parent=workorder.parent and workorder.istask=:yes and workorder.siteid=workorder.siteid). The resulting set will contain zero or more objects.",
            "whereClause": "parent=:parent and istask=:yes and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHOWWOHIERARCHY",
            "source": "WORKORDER",
            "remarks": "Relationship to the ShowWOHierarchy used by UI for display. This is a special MboSet used for displaying the entire work hierarchy under a given workorder. (wonum in (select wonum from woancestor where ancestor = :wonum and siteid = :siteid) and siteid=:siteid). The resulting set will contain zero or more objects.",
            "whereClause": "wonum in (select wonum from woancestor where ancestor = :wonum and siteid=:siteid) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHOWCHILDREN",
            "source": "WORKORDER",
            "remarks": "Relationship to the ShowChildren Set used by UI for display. This is a special MboSet used for displaying only the children work orders which are not tasks for a given parent work order. (workorder.parent=workorder.parent and workorder.istask=:no and workorder.siteid=workorder.siteid). The resulting set will contain zero or more objects.",
            "whereClause": "parent=:parent and istask=:no and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKPACK",
            "source": "WORKORDER",
            "remarks": "Finds all the workorders that are in the workpack of the current work order.",
            "whereClause": "wonum in (select wonum from woancestor where ancestor=:wonum and siteid=:siteid) and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "WOANDTASK",
            "source": "WORKORDER",
            "remarks": null,
            "whereClause": "(wonum=:wonum  or (parent=:wonum  and istask = :yes))  and siteid=:siteid and  wonum in (select wonum from wocontract)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOSIBLINGS",
            "source": "WORKORDER",
            "remarks": "Relationship from the work order to its sibling work orders.",
            "whereClause": "parent=:parent and siteid=:siteid and istask=0",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOWORKORDER",
            "source": "WORKORDER",
            "remarks": "Relationship from the WO table to its children Work Orders",
            "whereClause": "parent=:wonum and siteid=:siteid  and woclass in (:&synonymlist&_woclass[WORKORDER])",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKORDER",
            "source": "WORKVIEW",
            "remarks": "Relationship to the workorder table, used to find the workorder for the existing workview.",
            "whereClause": "wonum=:recordkey and woclass=:class and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKORDER",
            "source": "WOSERVICEADDRESS",
            "remarks": "Workorder for WO Service Address",
            "whereClause": "wonum = :wonum and siteid = :siteid",
            "cardinality": null
        },
        {
            "name": "WORKORDER",
            "source": "WPITEM",
            "remarks": "Relationship from wpitem to workorder",
            "whereClause": "wonum=:wonum and siteid=:siteid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKORDER",
            "source": "WPLABOR",
            "remarks": "Relationship from wplabor to workorder",
            "whereClause": "wonum=:wonum and siteid=:siteid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKORDER",
            "source": "WPMATERIAL",
            "remarks": "Relationship from wpmaterial to workorder",
            "whereClause": "wonum=:wonum and siteid=:siteid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKORDER",
            "source": "WPSERVICE",
            "remarks": "Relationship from wpservice to workorder",
            "whereClause": "wonum=:wonum and siteid=:siteid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKORDER",
            "source": "WPTOOL",
            "remarks": "Relationship from wptool to workorder",
            "whereClause": "wonum=:wonum and siteid=:siteid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        }
    ]
}