mos = {
    "objectName": "SCHEDULELINE",
    "className": "psdi.app.contract.schedule.ScheduleLineSet",
    "description": "Schedule line table.",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "SCHEDULELINEID",
    "primaryKeyColumns": [
        "ORGID",
        "SCHEDULEID",
        "SCHEDULELINEID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
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
            "objectName": "CONTRACTLINE",
            "targetObject": "SCHEDULELINE",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID, CONTRACTLINENUM",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID, CONTRACTLINENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract Line",
            "longDescription": null
        },
        {
            "objectName": "CONTRACTLINE",
            "targetObject": "SCHEDULELINE",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID, CONTRACTLINENUM",
            "targetKeys": "CONTRACTNUM, SCHEDULEREV, ORGID, CONTRACTLINENUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 18",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "SCHEDULELINE",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SCHEDULE",
            "targetObject": "SCHEDULELINE",
            "parentKeys": "ORGID, SCHEDULENUM, CONTRACTNUM, REVISIONNUM, CONTRACTLINENUM, SCHEDULEREV",
            "targetKeys": "ORGID, SCHEDULENUM, CONTRACTNUM, REVISIONNUM, CONTRACTLINENUM, REVISIONNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 1",
            "longDescription": null
        },
        {
            "objectName": "SCHEDULE",
            "targetObject": "SCHEDULELINE",
            "parentKeys": "ORGID, SCHEDULENUM, CONTRACTNUM, REVISIONNUM, CONTRACTLINENUM, SCHEDULEREV",
            "targetKeys": "ORGID, SCHEDULENUM, CONTRACTNUM, REVISIONNUM, CONTRACTLINENUM, SCHEDULEREV",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Schedule",
            "longDescription": null
        },
        {
            "objectName": "SCHEDULE",
            "targetObject": "SCHEDULELINE",
            "parentKeys": "ORGID, SCHEDULENUM, CONTRACTNUM, REVISIONNUM, CONTRACTLINENUM, SCHEDULEREV",
            "targetKeys": "ORGID, SCHEDULENUM, CONTRACTNUM, SCHEDULEREV, CONTRACTLINENUM, REVISIONNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 3",
            "longDescription": null
        },
        {
            "objectName": "SCHEDULE",
            "targetObject": "SCHEDULELINE",
            "parentKeys": "ORGID, SCHEDULENUM, CONTRACTNUM, REVISIONNUM, CONTRACTLINENUM, SCHEDULEREV",
            "targetKeys": "ORGID, SCHEDULENUM, CONTRACTNUM, SCHEDULEREV, CONTRACTLINENUM, SCHEDULEREV",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 4",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "SCHEDULELINEID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SCHEDULEID",
            "required": true,
            "persistent": true,
            "title": "Payment Schedule",
            "remarks": "Unique Identifier of the Payment Schedule.",
            "sameAsAttribute": "SCHEDULEID",
            "sameAsObject": "SCHEDULE"
        },
        {
            "attributeName": "SCHEDULELINENUM",
            "required": true,
            "persistent": true,
            "title": "Schedule Line",
            "remarks": "System generated schedule line number.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": true,
            "title": "Asset",
            "remarks": "Asset for which the invoice will be created.",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "ACTION",
            "required": false,
            "persistent": true,
            "title": "Action",
            "remarks": "Action that triggers this payment (POAPPR, RECEIPT, INSPECT).",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PAYMENTPERCENT",
            "required": false,
            "persistent": true,
            "title": "Payment Percent",
            "remarks": "Percentage to be paid at this time.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Identifier.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "TAX1CODE",
            "required": false,
            "persistent": true,
            "title": "Tax Code",
            "remarks": "Tax code to be used for calculation of tax 1.",
            "sameAsAttribute": "TAXCODE",
            "sameAsObject": "TAX"
        },
        {
            "attributeName": "TAX2CODE",
            "required": false,
            "persistent": true,
            "title": "Tax Code 2",
            "remarks": "Tax code to be used for calculation of tax 2.",
            "sameAsAttribute": "TAXCODE",
            "sameAsObject": "TAX"
        },
        {
            "attributeName": "TAX3CODE",
            "required": false,
            "persistent": true,
            "title": "Tax Code 3",
            "remarks": "Tax code to be used for calculation of tax 3.",
            "sameAsAttribute": "TAXCODE",
            "sameAsObject": "TAX"
        },
        {
            "attributeName": "TAX4CODE",
            "required": false,
            "persistent": true,
            "title": "Tax Code 4",
            "remarks": "Tax code to be used for calculation of tax 4.",
            "sameAsAttribute": "TAXCODE",
            "sameAsObject": "TAX"
        },
        {
            "attributeName": "TAX5CODE",
            "required": false,
            "persistent": true,
            "title": "Tax Code 5",
            "remarks": "Tax code to be used for calculation of tax 5.",
            "sameAsAttribute": "TAXCODE",
            "sameAsObject": "TAX"
        },
        {
            "attributeName": "TAX1",
            "required": false,
            "persistent": true,
            "title": "Tax",
            "remarks": "Tax 1 amount.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TAX2",
            "required": false,
            "persistent": true,
            "title": "Tax 2",
            "remarks": "Tax 2 amount.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TAX3",
            "required": false,
            "persistent": true,
            "title": "Tax 3",
            "remarks": "Tax 3 amount.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TAX4",
            "required": false,
            "persistent": true,
            "title": "Tax 4",
            "remarks": "Tax 4 amount.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TAX5",
            "required": false,
            "persistent": true,
            "title": "Tax 5",
            "remarks": "Tax 5 amount.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INCLUSIVE1",
            "required": true,
            "persistent": true,
            "title": "Include Tax 1",
            "remarks": "Is the Payment schedule line inclusive of Tax 1?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INCLUSIVE2",
            "required": true,
            "persistent": true,
            "title": "Include Tax 2",
            "remarks": "Is the Payment schedule line inclusive of Tax 2?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INCLUSIVE3",
            "required": true,
            "persistent": true,
            "title": "Include Tax 3",
            "remarks": "Is the Payment schedule line inclusive of Tax 3?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INCLUSIVE4",
            "required": true,
            "persistent": true,
            "title": "Include Tax 4",
            "remarks": "Is the Payment schedule line inclusive of Tax 4?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INCLUSIVE5",
            "required": true,
            "persistent": true,
            "title": "Include Tax 5",
            "remarks": "Is the Payment schedule line inclusive of Tax 5?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PERIODICPAYMENT",
            "required": false,
            "persistent": true,
            "title": "Periodic Payment",
            "remarks": "Periodic lease or rental payment as specified for each contract asset.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LEASERATEFACTOR",
            "required": false,
            "persistent": true,
            "title": "Lease Rate Factor",
            "remarks": "Lessor pre-determined percentage used to calculate the periodic payment.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LOADEDCOST",
            "required": false,
            "persistent": true,
            "title": "Loaded Cost",
            "remarks": "Loaded Cost.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INTERIMCHARGE",
            "required": false,
            "persistent": true,
            "title": "Interim Charge",
            "remarks": "Dollar value of the first payment that does not cover the entire period.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLDEBITACCT",
            "required": false,
            "persistent": true,
            "title": "GL Debit Account",
            "remarks": "General Ledger Account - Debit.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLCREDITACCT",
            "required": false,
            "persistent": true,
            "title": "GL Credit Account",
            "remarks": "General Ledger Account - Credit.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TARGINVSTATUS",
            "required": false,
            "persistent": true,
            "title": "Target Invoice Status",
            "remarks": "Is the invoice created in a Entered (ENTERED) or Approved (APPR) status?",
            "sameAsAttribute": "TARGINVSTATUS",
            "sameAsObject": "SCHEDULE"
        },
        {
            "attributeName": "LINECOST",
            "required": false,
            "persistent": true,
            "title": "Line Cost",
            "remarks": "Line Cost.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DAYSINTERVAL",
            "required": false,
            "persistent": true,
            "title": "Days Interval",
            "remarks": "Time passed between action and payment.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SCHEDULENUM",
            "required": false,
            "persistent": true,
            "title": "Schedule",
            "remarks": "Schedule number",
            "sameAsAttribute": "SCHEDULENUM",
            "sameAsObject": "SCHEDULE"
        },
        {
            "attributeName": "CONTRACTNUM",
            "required": false,
            "persistent": true,
            "title": "Contract",
            "remarks": "Contract number",
            "sameAsAttribute": "CONTRACTNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "REVISIONNUM",
            "required": false,
            "persistent": true,
            "title": "Revision",
            "remarks": "Revision number of the line. This number indicates the number of times the line has been revised. A line that has been created and not revised will show a number of 0.",
            "sameAsAttribute": "REVISIONNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "CONTRACTLINENUM",
            "required": false,
            "persistent": true,
            "title": "Contract Line",
            "remarks": "Contract line number",
            "sameAsAttribute": "CONTRACTLINENUM",
            "sameAsObject": "CONTRACTLINE"
        },
        {
            "attributeName": "ASSETID",
            "required": false,
            "persistent": true,
            "title": "Asset ID",
            "remarks": "Asset identifier",
            "sameAsAttribute": "ASSETID",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "SCHEDULEREV",
            "required": false,
            "persistent": true,
            "title": "Schedule Revision",
            "remarks": "Revision number of the Schedule.",
            "sameAsAttribute": "REVISIONNUM",
            "sameAsObject": "CONTRACT"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ASSET",
            "target": "ASSET",
            "remarks": "Relationship to the Asset table, used to find all asset for a given schedule line. (scheduleline.assetnum=asset.assetnum and scheduleline.orgid=asset.orgid)",
            "whereClause": "assetnum = :assetnum and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTASSET",
            "target": "CONTRACTASSET",
            "remarks": "Relationship to the ContractAsset table, used to find the asset for a given schedule line. (scheduleline.assetid = contractasset.assetid  and contractnum in (select contractnum from schleaseview where schleaseview.scheduleid = scheduleline.scheduleid and schleaseview.orgid = scheduleline.orgid) and scheduleline.orgid = contractasset.orgid)",
            "whereClause": "assetid = :assetid  and contractnum in (select contractnum from schleaseview where schleaseview.scheduleid = :scheduleid and schleaseview.orgid = :orgid) and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SCHLEASEVIEW",
            "target": "SCHLEASEVIEW",
            "remarks": "Relationship to the Schedule table, used to find parent of the schedule line. (schleaseview.scheduleid = :scheduleline.scheduleid and schleaseview.orgid= :scheduleline.orgid)",
            "whereClause": "scheduleid = :scheduleid and orgid= :orgid",
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
            "remarks": "Relationship from the SCHEDULELINE to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "SCHEDULELINE",
            "source": "CONTRACTASSET",
            "remarks": "Relationship to the Scheduleline table, used to find all schedule lines for a given contract asset.",
            "whereClause": "contractnum=:contractnum and revisionnum=:revisionnum and orgid=:orgid and assetid=:assetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SCHEDULELINE",
            "source": "SCHLEASEVIEW",
            "remarks": "Relationship to the Scheduleline table, used to find all schedule lines for a given schedule. (schleaseview.scheduleid = :scheduleline.scheduleid and schleaseview.orgid= :scheduleline.orgid)",
            "whereClause": "scheduleid = :scheduleid and orgid= :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SCHEDULELINE",
            "source": "SCHPURCHVIEW",
            "remarks": null,
            "whereClause": "scheduleid = :scheduleid and orgid= :orgid",
            "cardinality": "UNDEFINED"
        }
    ]
}