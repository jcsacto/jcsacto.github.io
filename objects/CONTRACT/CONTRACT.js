mos = {
    "objectName": "CONTRACT",
    "className": "psdi.app.contract.ContractSet",
    "description": "Contract Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "CONTRACTID",
    "primaryKeyColumns": [
        "CONTRACTNUM",
        "REVISIONNUM",
        "ORGID"
    ],
    "logicalRelationships": [
        {
            "objectName": "CONTRACT",
            "targetObject": "AMCREW",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "CONTASSETMETER",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "CONTCOMMODITY",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "CONTLINEASSET",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "CONTLINEMETER",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "CONTRACTASSET",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "CONTRACTAUTH",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, AUTHORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 6",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "CONTRACTAUTH",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "CONTRACTLEASE",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "CONTRACTLINE",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "CONTRACTMASTER",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "CONTRACTPURCH",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "CONTRACTSTATUS",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Status History",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "CONTRACTSWLIC",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "CONTRACTTERM",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "CRAFTRATE",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "INVOICE",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTREFNUM, CONTRACTREFREV, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "INVOICE",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTREFNUM, SCHEDULEREV, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 17",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "INVOICELINE",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTREFNUM, CONTRACTREFREV, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "INVOICELINE",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTREFNUM, POREVISIONNUM, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 19",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "LABORVIEW",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, MASTERREVNUM, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Master Contract",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "LABORVIEW",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "LABTRANS",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, POREVISIONNUM, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 22",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "LABTRANS",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "LEASEVIEW",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, MASTERREVNUM, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Master Contract",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "LEASEVIEW",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "LEASEVIEWLINE",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "MASTERVIEW",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, MASTERREVNUM, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Master Contract",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "MASTERVIEW",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Sub-contracts",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "MRLINE",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTREFNUM, CONTRACTREFREV, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "NAMEDUSERS",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract",
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
            "objectName": "CONTRACT",
            "targetObject": "POLINE",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTREFNUM, CONTRACTREFREV, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "POLINE",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTREFNUM, REVISIONNUM, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 35",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "PR",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTREFNUM, CONTRACTREFREV, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract convering this PR",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "PRLINE",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, CONTRACTREFREV, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 37",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "PRLINE",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, CONTRACTREV, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract convering PR Line",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "PRLINE",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, POREVISIONNUM, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 39",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "PRLINE",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTREFNUM, CONTRACTREFREV, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract convering PR Line",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "PRLINE",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTREFNUM, CONTRACTREV, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 41",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "PRLINE",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTREFNUM, POREVISIONNUM, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 42",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "PURCHVIEW",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, MASTERREVNUM, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Master Contract",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "PURCHVIEW",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "REORDERPAD",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTREFNUM, CONTRACTREFREV, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 45",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "RFQLINE",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, CONTRACTREV, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "RFQLINE",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, POREVISIONNUM, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 47",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "SCHEDULE",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "SCHEDULE",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, SCHEDULEREV, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 49",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "SCHEDULELINE",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "SCHEDULELINE",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, SCHEDULEREV, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 51",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "SCHLEASEVIEW",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "SCHLEASEVIEW",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, SCHEDULEREV, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 53",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "SCHPURCHVIEW",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "SCHPURCHVIEW",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, SCHEDULEREV, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 55",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "SCHWARRANTYVIEW",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "SCHWARRANTYVIEW",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, SCHEDULEREV, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 57",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "SFWLINE",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "SFWVIEW",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, MASTERREVNUM, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Master Contract",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "SFWVIEW",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "SFWVIEWLINE",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "SKDEXTRACAPCREWVIEW",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Extra Capacity Crew Contract",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "SKDEXTRACAPCREWVIEW",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID1",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 64",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "WARRANTYASSET",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "WARRANTYLINE",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "WARRANTYVIEW",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, MASTERREVNUM, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Master Contract",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "WARRANTYVIEW",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "WARRANTYVIEWLINE",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "WOACTIVITY",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACT, GENFORPOREVISION, CALCORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 67",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "WOACTIVITY",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACT, GENFORPOREVISION, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 68",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "WOCHANGE",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACT, GENFORPOREVISION, CALCORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 69",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "WOCHANGE",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACT, GENFORPOREVISION, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 70",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "WOCONTRACT",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Link Work Order and Contract",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "WORELEASE",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACT, GENFORPOREVISION, CALCORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 72",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "WORELEASE",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACT, GENFORPOREVISION, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 73",
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
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "COMPANIES",
            "targetObject": "CONTRACT",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Company on Contract",
            "longDescription": null
        },
        {
            "objectName": "CURRENCY",
            "targetObject": "CONTRACT",
            "parentKeys": "CURRENCYCODE",
            "targetKeys": "CURRENCYCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract Currency",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "CONTRACT",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "CONTRACT",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "CONTRACT",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "CONTRACT",
            "parentKeys": "PERSONID",
            "targetKeys": "PURCHASEAGENT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Purchase Agent",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "CONTRACTNUM",
            "required": true,
            "persistent": true,
            "title": "Contract",
            "remarks": "The unique identification number of an associated contract on a Master Contract.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Description of the current contract.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "PR"
        },
        {
            "attributeName": "MASTERNUM",
            "required": false,
            "persistent": true,
            "title": "Master Contract",
            "remarks": "Master Contract Number.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VENDORREFNUM",
            "required": false,
            "persistent": true,
            "title": "Vendor Reference",
            "remarks": "Vendor reference number.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONTRACTTYPE",
            "required": false,
            "persistent": true,
            "title": "Contract Type",
            "remarks": "Indicator of the current contract type.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REVISIONNUM",
            "required": true,
            "persistent": true,
            "title": "Revision",
            "remarks": "Revision number of the associated contract. This number indicates the number of times the associated contract has been revised. An associated contract that has been created and not revised will show a number of 0.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PURCHASEAGENT",
            "required": false,
            "persistent": true,
            "title": "Buyer",
            "remarks": "Buyer",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "STATUS",
            "required": true,
            "persistent": true,
            "title": "Status",
            "remarks": "Current status of this contract.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUSDATE",
            "required": false,
            "persistent": true,
            "title": "Status Date",
            "remarks": "Status date.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STARTDATE",
            "required": false,
            "persistent": true,
            "title": "Start Date",
            "remarks": "Date when a PO becomes an active contract.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDDATE",
            "required": false,
            "persistent": true,
            "title": "End Date",
            "remarks": "Date after which the contract is no longer valid.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RENEWALDATE",
            "required": false,
            "persistent": true,
            "title": "Renewal Date",
            "remarks": "Date that the contract can be renewed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EXTENDABLE",
            "required": true,
            "persistent": true,
            "title": "Extendable",
            "remarks": "Is the contract extendable.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AUTOEXTENDPERIOD",
            "required": false,
            "persistent": true,
            "title": "Automatically Extend Period",
            "remarks": "Auto extend period in days.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONDFOREXT",
            "required": false,
            "persistent": true,
            "title": "Condition for Extension",
            "remarks": "Condition for extension.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CUSTTERMALLOWED",
            "required": true,
            "persistent": true,
            "title": "Customer Termination Allowed",
            "remarks": "Checking this box indicates that early termination by the customer is allowed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CUSTNOTIFYPERIOD",
            "required": false,
            "persistent": true,
            "title": "Customer Notify Period",
            "remarks": "Customer notification period in days.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VENDTERMALLOWED",
            "required": true,
            "persistent": true,
            "title": "Vendor Term Allowed",
            "remarks": "Early termination allowed by vendor.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VENDNOTIFYPERIOD",
            "required": false,
            "persistent": true,
            "title": "Vendor Notify Period",
            "remarks": "If early termination is allowed by vendor, this indicates the notice of termination in days.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VENDOR",
            "required": false,
            "persistent": true,
            "title": "Vendor",
            "remarks": "Vendor code",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "CONTACT",
            "required": false,
            "persistent": true,
            "title": "Contact",
            "remarks": "Vendor contact name.",
            "sameAsAttribute": "CONTACT",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "FREIGHTTERMS",
            "required": false,
            "persistent": true,
            "title": "Freight Terms",
            "remarks": "Freight Terms.",
            "sameAsAttribute": "FREIGHTTERMS",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "PAYMENTTERMS",
            "required": false,
            "persistent": true,
            "title": "Payment Terms",
            "remarks": "Payment terms.",
            "sameAsAttribute": "PAYMENTTERMS",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "SHIPVIA",
            "required": false,
            "persistent": true,
            "title": "Ship Via",
            "remarks": "Ship via.",
            "sameAsAttribute": "SHIPVIA",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "CUSTOMERNUM",
            "required": false,
            "persistent": true,
            "title": "Customer #",
            "remarks": "Vendors Number Identifying Our Company.",
            "sameAsAttribute": "CUSTOMERNUM",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "FOB",
            "required": false,
            "persistent": true,
            "title": "Freight on Board",
            "remarks": "Freight on board.",
            "sameAsAttribute": "FOB",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "TOTALCOST",
            "required": false,
            "persistent": true,
            "title": "Total Cost",
            "remarks": "The sum of all the costs on the contract lines added together of the current associated contract.",
            "sameAsAttribute": "TOTALCOST",
            "sameAsObject": "PO"
        },
        {
            "attributeName": "CHANGEBY",
            "required": false,
            "persistent": true,
            "title": "Changed By",
            "remarks": "Last Modified By.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "Last modified date.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HISTORYFLAG",
            "required": true,
            "persistent": true,
            "title": "History",
            "remarks": "History flag.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CURRENCYCODE",
            "required": true,
            "persistent": true,
            "title": "Currency",
            "remarks": "Currency code the Contract is in.",
            "sameAsAttribute": "CURRENCYCODE",
            "sameAsObject": "CURRENCY"
        },
        {
            "attributeName": "EXCHANGERATE",
            "required": false,
            "persistent": true,
            "title": "Exchange Rate",
            "remarks": "Exchange rate the time of contract approval.",
            "sameAsAttribute": "EXCHANGERATE",
            "sameAsObject": "EXCHANGE"
        },
        {
            "attributeName": "EXCHANGERATE2",
            "required": false,
            "persistent": true,
            "title": "Exchange Rate2",
            "remarks": "Exchange rate2 at the time of contract approval.",
            "sameAsAttribute": "EXCHANGERATE",
            "sameAsObject": "EXCHANGE"
        },
        {
            "attributeName": "EXCHANGEDATE",
            "required": false,
            "persistent": true,
            "title": "ExDate Changed",
            "remarks": "Date of the exchange rate.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BUYAHEAD",
            "required": true,
            "persistent": true,
            "title": "Buy Ahead",
            "remarks": "Is this a buy ahead rate, ie entered directly by the user and not calculated from the list of active exchange rate.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INCLUSIVE1",
            "required": true,
            "persistent": true,
            "title": "Include Tax 1",
            "remarks": "Is the PO total inclusive of Tax 1",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INCLUSIVE2",
            "required": true,
            "persistent": true,
            "title": "Include Tax 2",
            "remarks": "Is the PO total inclusive of Tax 2.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INCLUSIVE3",
            "required": true,
            "persistent": true,
            "title": "Include Tax 3",
            "remarks": "Is the PO total inclusive of Tax 3.",
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
            "attributeName": "EXTERNALREFID",
            "required": false,
            "persistent": true,
            "title": "External Reference ID",
            "remarks": "External Reference ID.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OWNERSYSID",
            "required": false,
            "persistent": true,
            "title": "Owner System ID",
            "remarks": "Owner system ID.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SENDERSYSID",
            "required": false,
            "persistent": true,
            "title": "Sender System ID",
            "remarks": "Column used by ERP-Integration (MEA).",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization identifier.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "TOTALBASECOST",
            "required": true,
            "persistent": true,
            "title": "Total Base Cost",
            "remarks": "Cost of the entire contract in base currency 1.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Description Long Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FREIGHTTERMS_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Freight Terms Long Description",
            "remarks": "Freight Terms Long Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "POREQUIRED",
            "required": true,
            "persistent": true,
            "title": "PO Required",
            "remarks": "Will a PO be required for this contract?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PAYMENTSCHED",
            "required": true,
            "persistent": true,
            "title": "Payment Schedule",
            "remarks": "Is there a payment schedule for this contract?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HASINSURANCE",
            "required": true,
            "persistent": true,
            "title": "Has Insurance",
            "remarks": "Does this vendor have a current insurance policy ?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INSURANCEEXPDATE",
            "required": false,
            "persistent": true,
            "title": "Insurance Expiration Date",
            "remarks": "Expiration date of the vendors insurance policy.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONTRACTID",
            "required": true,
            "persistent": true,
            "title": "CONTRACTID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REVCOMMENTS",
            "required": false,
            "persistent": true,
            "title": "Revision Comments",
            "remarks": "Revision Comments.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "PR"
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
            "attributeName": "MASTERREVNUM",
            "required": false,
            "persistent": true,
            "title": "Master Revision",
            "remarks": "Master Contract Revision Number",
            "sameAsAttribute": "REVISIONNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "PROCESSCLAIM",
            "required": true,
            "persistent": true,
            "title": "PROCESS CLAIM",
            "remarks": "Can a claim be processed against this contract",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INSPECTIONREQUIRED",
            "required": true,
            "persistent": true,
            "title": "Inspection Required",
            "remarks": "Whether items ordered from this company need to be inspected on receipt.",
            "sameAsAttribute": "INSPECTIONREQUIRED",
            "sameAsObject": "COMPANIES"
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
        }
    ],
    "outgoingRelationships": [
        {
            "name": "AUTHDEFAULT",
            "target": "CONTRACTAUTH",
            "remarks": "Relationship to the Contract table, used to find a contract record for a given contract number (contract.contractnum=contractauth.contractnum and contract.revisionnum=contractauth.revisionnum and contractauth.isdefault=:yes and contract.orgid=contractauth.orgid). The resulting set will contain zero or one record.",
            "whereClause": "contractnum=:contractnum and revisionnum=:revisionnum and isdefault=:yes and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTAUTH",
            "target": "CONTRACTAUTH",
            "remarks": "Relationship to the ContractAuth table used to find all ContractAuth for a given Contract",
            "whereClause": "contractnum=:contractnum and revisionnum=:revisionnum and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTLINE",
            "target": "CONTRACTLINE",
            "remarks": "Relationship to the ContractLine table, used to find contract line records for a given contract. (contractline.contractnum = contract.contractnum and contractline.revisionnum = contract.revisionnum and contractline.orgid = contract.orgid). The resulting set will contain zero or one object.",
            "whereClause": "contractnum = :contractnum and revisionnum = :revisionnum and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTTERM",
            "target": "CONTRACTTERM",
            "remarks": "Relationship to the CONTRACTTERM table, used to find all contract term records for a given contract. (contractterm.contractnum = contract.contractnum and contractterm.orgid = contract.orgid). The resulting set will contain zero or more objects.",
            "whereClause": "contractnum = :contractnum and revisionnum=:revisionnum and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "APPRLABORCONTRACT",
            "target": "LABTRANS",
            "remarks": "Finds all contracts that are approved for the contract.",
            "whereClause": "contractnum=:contractnum and revisionnum=:revisionnum and orgid=:orgid and genapprservreceipt=:yes",
            "cardinality": null
        },
        {
            "name": "LEASEVIEW",
            "target": "LEASEVIEW",
            "remarks": "Relationship to the LeaseView table, used to find lease view record for a given contract. (leaseview.contractid = contract.contractid and leaseview.orgid = contract.orgid). The resulting set will contain zero or one object.",
            "whereClause": "contractid = :contractid and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MASTERCONTRACT",
            "target": "MASTERVIEW",
            "remarks": "Relationship to the Master Contract table, used to find the Master records for a given contract. (contract.masternum = masterview.contractnum and master.status=APPR). The resulting set will contain zero or more objects.",
            "whereClause": "contractnum=:masternum and status in (select value from synonymdomain where domainid = 'CONTRACTSTATUS' and maxvalue='APPR')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELEASES",
            "target": "PO",
            "remarks": "Relationship to the PO table, used to find all release purchase orders for a given purchase contract. (po.origcontractid = contract.contractid). The resulting set will contain zero or more objects.",
            "whereClause": "contractrefid=:contractid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SFWPROPERTYDEFAULT",
            "target": "PROPERTYDEFAULT",
            "remarks": "Relationship to the PropertyDefault table, used to find the PropertyDefault records whose propertyid match that of the Contract. (propertydefault.contracttypeid=SFWCONTRACT,ENTERPRISE,OEM,RETAIL,SELECT,SUBSCRIPTION). The resulting set will contain zero or more objects.",
            "whereClause": "contracttypeid in ( select value from synonymdomain where domainid = 'CONTRACTTYPE' and maxvalue in('SFWCONTRACT','ENTERPRISE','OEM','RETAIL','SELECT','SUBSCRIPTION')) and propertyid in (select propertyid from propertydefault where contracttypeid in ( select value from synonymdomain where domainid = 'CONTRACTTYPE' and maxvalue in('SFWCONTRACT','ENTERPRISE','OEM','RETAIL','SELECT','SUBSCRIPTION')))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PROPERTYDEFAULT",
            "target": "PROPERTYDEFAULT",
            "remarks": "Relationship to the PropertyDefault table, used to find the PropertyDefault records whose propertyid match that of the Contract. (propertydefault.contracttypeid=contract.contracttype). The resulting set will contain zero or more objects.",
            "whereClause": "contracttypeid = :contracttype and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PURCHASEPROPERTYDEFAULT",
            "target": "PROPERTYDEFAULT",
            "remarks": "Relationship to the PropertyDefault table, used to find the PropertyDefault records whose propertyid match that of the Contract. (propertydefault.contracttypeid=PURCHASE). The resulting set will contain zero or more objects.",
            "whereClause": "contracttypeid in ( select value from synonymdomain where domainid = 'CONTRACTTYPE' and maxvalue ='PURCHASE') and propertyid not in (select propertyid from propertydefault where contracttypeid in ( select value from synonymdomain where domainid = 'CONTRACTTYPE' and maxvalue ='SWLICENSE'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PURCHVIEW",
            "target": "PURCHVIEW",
            "remarks": "Relationship to the PurchView table, used to find purch view records for a given contract. (purchview.contractid = contract.contractid and purchview.orgid = contract.orgid). The resulting set will contain zero or one object.",
            "whereClause": "contractid = :contractid and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SFWVIEW",
            "target": "SFWVIEW",
            "remarks": "Relationship to the SFWView table, used to find SFWview records for a given contract. (sfwview.contractid = contract.contractid and sfwview.orgid = contract.orgid). The resulting set will contain zero or one object.",
            "whereClause": "contractid = :contractid and orgid = :orgid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "AMCREWCONTRACT",
            "source": "AMCREW",
            "remarks": "Relationship between AMCREW and CONTRACT tables.",
            "whereClause": "contractnum = :contractnum and revisionnum = :revisionnum and orgid = :orgid",
            "cardinality": null
        },
        {
            "name": "CONTRACT",
            "source": "ASSET",
            "remarks": "Relationship to the ContractAsset table, used to find a contract records for a given asset. (contractasset.assetnum = asset.assetnum and contractasset.orgid = asset.orgid). The resulting set will contain zero, one or more than one object.",
            "whereClause": "contractnum in (select contractnum from contractasset where assetid=:assetid) or contractnum in (select contractnum from warrantyasset where assetid=:assetid)",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "CONTRACTS_ACTIVE",
            "source": "COMPANIES",
            "remarks": "Relationship to the Contract table, used to find all active contracts for this vendor company. (contract.vendor = companies.company and contract.status not in (select value from synonymdomain  where maxvalue in ('APPR', 'PNDREV', 'WSTART') and domainid='CONTRACTSTATUS') and contract.historyflag=false and contract.orgid = companies.orgid) This relationship will find zero or more objects.",
            "whereClause": "vendor = :company and status in (select value from synonymdomain  where maxvalue in ('APPR', 'PNDREV', 'WSTART') and domainid='CONTRACTSTATUS') and historyflag=:no and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VENDOR",
            "source": "COMPANIES",
            "remarks": "Relationship to the Contract table, used to find a contract record for a given company (contract.vendor = companies.company and contract.orgid = companies.orgid). The resulting set will contain zero, one or more than one object.",
            "whereClause": "vendor = :company and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACT",
            "source": "CONTCOMMODITY",
            "remarks": "Relationship to the CONTRACT table, used to find the contract records. The resulting set will contain one object.",
            "whereClause": "contractnum=:contractnum and revisionnum=:revisionnum and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACT",
            "source": "CONTRACTASSET",
            "remarks": "Relationship to the Contract table, used to find a contract record for a given contract asset. (contract.contractnum = contractasset.contractnum and contract.revisionnum = contractasset.revisionnum and contract.orgid = contractasset.orgid). The resulting set will contain one object.",
            "whereClause": "contractnum = :contractnum and revisionnum = :revisionnum and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACT",
            "source": "CONTRACTAUTH",
            "remarks": "Relationship to the Contract table, used to find a contract record for a given contract number (contract.contractnum=contractauth.contractnum and contract.revisionnum=contractauth.revisionnum and contract.orgid=contractauth.orgid). The resulting set will contain zero or one object.",
            "whereClause": "contractnum=:contractnum and revisionnum=:revisionnum and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACT",
            "source": "CONTRACTLINE",
            "remarks": "Relationship to the Contract table, used to find a contract record to which a contract line belongs to. (contract.contractnum = contractline.contractnum and contract.revisionnum = contractline.revisionnum and contract.orgid = contractline.orgid). The resulting set will contain one object.",
            "whereClause": "contractnum = :contractnum and revisionnum = :revisionnum and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACT",
            "source": "CRAFTRATE",
            "remarks": "Relationship to the Contract table on contractnum. (contract.contractnum = craftrate.contractnum and contract.orgid=craftrate.orgid.)  This will return 0 or more objects ",
            "whereClause": "contractnum=:contractnum and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTREV",
            "source": "CRAFTRATE",
            "remarks": "Relationship to the contract table to get a given revision",
            "whereClause": "contractnum=:contractnum and revisionnum=:revisionnum and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTREF",
            "source": "INVOICE",
            "remarks": "Relationship to the Contract table, used to find a contract record for a given invoice (contract.contractid = invoice.contractrefid and contract.orgid = invoice.orgid). The resulting set will contain zero or one object.",
            "whereClause": "contractid = :contractrefid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTREF",
            "source": "INVOICELINE",
            "remarks": "Relationship to the Contract table, used to find a contract record for a given invoice line (contract.contractid = invoiceline.contractrefid and contract.orgid = invoiceline.orgid). The resulting set will contain zero or one object.",
            "whereClause": "contractid = :contractrefid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACT",
            "source": "LABTRANS",
            "remarks": "Relationship to the contract table where contract is of type labor, approved, and not history . This will return 0 or more objects.",
            "whereClause": "status in (select value from synonymdomain  where maxvalue in ('APPR')and domainid = 'CONTRACTSTATUS') and contracttype in (select value from synonymdomain where maxvalue in ('LABOR') and domainid='CONTRACTTYPE') and historyflag=:no and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTS",
            "source": "LABTRANS",
            "remarks": "Relationship to the contract table to find the contract from this labtrans(labtrans.contractnum=contract.contractnum and labtrans.revisionnum=contract.revisionnum and labtrans.orgid=contract.orgid). The resulting set will contain one record",
            "whereClause": "contractnum=:contractnum and revisionnum=:revisionnum and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACT",
            "source": "LEASEVIEW",
            "remarks": "Relationship to the Contract table, used to find all contracts for a given lease contract.",
            "whereClause": "contractnum=:contractnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CHILDCONTRACTS",
            "source": "MASTERVIEW",
            "remarks": "Relationship to the Contract table used to find all Contract records for a given master contract (masterview.contractnum=contract.masternum and masterview.orgid=contract.orgid)",
            "whereClause": "masternum=:contractnum and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CHILDRENCONTRACTS",
            "source": "MASTERVIEW",
            "remarks": "Relationship to the Contract table used to find all children for a given Master Contract (contract.masternum=masterview.contractnum and contract.masterrevnum=masterview.revisionnum)",
            "whereClause": "masternum=:contractnum and masterrevnum=:revisionnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "APPRCHILDCONTRACTS",
            "source": "MASTERVIEW",
            "remarks": "Relationship to the Contract table used to find all approved child Contract records for a given master contract (masterview.contractnum=contract.masternum and masterview.orgid=contract.orgid and contract.status=APPR)",
            "whereClause": "masternum=:contractnum and orgid=:orgid and status in (select value from synonymdomain where domainid = 'CONTRACTSTATUS' and maxvalue='APPR')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTREF",
            "source": "MR",
            "remarks": "Relationship to the Contract table, used to find a contract record for a given material requisition contract reference number (contract.contractid = mr.contractrefid and contract.orgid = mr.orgid). The resulting set will contain zero or one object.",
            "whereClause": "contractid = :contractrefid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTREF",
            "source": "MRLINE",
            "remarks": "Relationship to the Contract table, used to find a contract record for a given material requisition line contract reference number (contract.contractid = mrline.contractrefid and contract.orgid = mrline.orgid). The resulting set will contain zero or one object.",
            "whereClause": "contractid = :contractrefid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTREF",
            "source": "PO",
            "remarks": "Relationship to the Contract table, used to find a contract record for a given purchase order contract reference number (contract.contractid = po.contractrefid and contract.orgid = po.orgid). The resulting set will contain zero or one object.",
            "whereClause": "contractid = :contractrefid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTREF",
            "source": "POLINE",
            "remarks": "Relationship to the Contract table, used to find a contract record for a given purchase order line contract reference number. (contract.contractid = poline.contractrefid and contract.orgid = poline.orgid). The resulting set will contain zero or one object.",
            "whereClause": "contractid = :contractrefid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTREF",
            "source": "PR",
            "remarks": "Relationship to the Contract table, used to find a contract record for a given purchase requisition contract reference number (contract.contractid = pr.contractrefid and contract.orgid = pr.orgid). The resulting set will contain zero or one object.",
            "whereClause": "contractid = :contractrefid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACT",
            "source": "PRLINE",
            "remarks": "Relationship to the Contract table, used to find contract records for a given purchase requisition line. (contract.contractnum = prline.contractnum and contract.orgid = prline.orgid). The resulting set will contain zero or one object.",
            "whereClause": "contractid = :contractid and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTREF",
            "source": "PRLINE",
            "remarks": "Relationship to the Contract table, used to find a contract record for a given purchase requisition line contract reference number (contract.contractid = prline.contractrefid and contract.orgid = prline.orgid). The resulting set will contain zero or one object.",
            "whereClause": "contractid = :contractrefid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACT",
            "source": "RFQLINE",
            "remarks": "Relationship to the Contract table, used to find contract record for a given RFQ line record. (contract.contractnum = rfqlline.contractnum and contract.orgid = rfqline.orgid). The resulting set will contain zero or one object.",
            "whereClause": "contractid = :contractid and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACT",
            "source": "SLACONTRACT",
            "remarks": "Define slacontract to contract relationship",
            "whereClause": "contractnum =:contractnum and status not in (select value from synonymdomain where domainid = 'CONTRACTSTATUS' and maxvalue in ('REVISE', 'PNDREV') )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACT",
            "source": "WOCONTRACT",
            "remarks": null,
            "whereClause": "contractnum=:contractnum and revisionnum=:revisionnum  and orgid=:orgid",
            "cardinality": "UNDEFINED"
        }
    ]
}