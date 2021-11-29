mos = {
    "objectName": "SCHEDULE",
    "className": "psdi.app.contract.schedule.ScheduleSet",
    "description": "Schedule table.",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "SCHEDULEID",
    "primaryKeyColumns": [
        "ORGID",
        "SCHEDULENUM",
        "CONTRACTNUM",
        "REVISIONNUM",
        "CONTRACTLINENUM",
        "SCHEDULEREV"
    ],
    "logicalRelationships": [
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
        },
        {
            "objectName": "SCHEDULE",
            "targetObject": "SCHLEASEVIEW",
            "parentKeys": "ORGID, SCHEDULENUM, CONTRACTNUM, REVISIONNUM, CONTRACTLINENUM, SCHEDULEREV",
            "targetKeys": "ORGID, SCHEDULENUM, CONTRACTNUM, REVISIONNUM, CONTRACTLINENUM, REVISIONNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 5",
            "longDescription": null
        },
        {
            "objectName": "SCHEDULE",
            "targetObject": "SCHLEASEVIEW",
            "parentKeys": "ORGID, SCHEDULENUM, CONTRACTNUM, REVISIONNUM, CONTRACTLINENUM, SCHEDULEREV",
            "targetKeys": "ORGID, SCHEDULENUM, CONTRACTNUM, REVISIONNUM, CONTRACTLINENUM, SCHEDULEREV",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Schedule",
            "longDescription": null
        },
        {
            "objectName": "SCHEDULE",
            "targetObject": "SCHLEASEVIEW",
            "parentKeys": "ORGID, SCHEDULENUM, CONTRACTNUM, REVISIONNUM, CONTRACTLINENUM, SCHEDULEREV",
            "targetKeys": "ORGID, SCHEDULENUM, CONTRACTNUM, SCHEDULEREV, CONTRACTLINENUM, REVISIONNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 7",
            "longDescription": null
        },
        {
            "objectName": "SCHEDULE",
            "targetObject": "SCHLEASEVIEW",
            "parentKeys": "ORGID, SCHEDULENUM, CONTRACTNUM, REVISIONNUM, CONTRACTLINENUM, SCHEDULEREV",
            "targetKeys": "ORGID, SCHEDULENUM, CONTRACTNUM, SCHEDULEREV, CONTRACTLINENUM, SCHEDULEREV",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 8",
            "longDescription": null
        },
        {
            "objectName": "SCHEDULE",
            "targetObject": "SCHPURCHVIEW",
            "parentKeys": "ORGID, SCHEDULENUM, CONTRACTNUM, REVISIONNUM, CONTRACTLINENUM, SCHEDULEREV",
            "targetKeys": "ORGID, SCHEDULENUM, CONTRACTNUM, REVISIONNUM, CONTRACTLINENUM, REVISIONNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 9",
            "longDescription": null
        },
        {
            "objectName": "SCHEDULE",
            "targetObject": "SCHPURCHVIEW",
            "parentKeys": "ORGID, SCHEDULENUM, CONTRACTNUM, REVISIONNUM, CONTRACTLINENUM, SCHEDULEREV",
            "targetKeys": "ORGID, SCHEDULENUM, CONTRACTNUM, REVISIONNUM, CONTRACTLINENUM, SCHEDULEREV",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Schedule",
            "longDescription": null
        },
        {
            "objectName": "SCHEDULE",
            "targetObject": "SCHPURCHVIEW",
            "parentKeys": "ORGID, SCHEDULENUM, CONTRACTNUM, REVISIONNUM, CONTRACTLINENUM, SCHEDULEREV",
            "targetKeys": "ORGID, SCHEDULENUM, CONTRACTNUM, SCHEDULEREV, CONTRACTLINENUM, REVISIONNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 11",
            "longDescription": null
        },
        {
            "objectName": "SCHEDULE",
            "targetObject": "SCHPURCHVIEW",
            "parentKeys": "ORGID, SCHEDULENUM, CONTRACTNUM, REVISIONNUM, CONTRACTLINENUM, SCHEDULEREV",
            "targetKeys": "ORGID, SCHEDULENUM, CONTRACTNUM, SCHEDULEREV, CONTRACTLINENUM, SCHEDULEREV",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 12",
            "longDescription": null
        },
        {
            "objectName": "SCHEDULE",
            "targetObject": "SCHWARRANTYVIEW",
            "parentKeys": "ORGID, SCHEDULENUM, CONTRACTNUM, REVISIONNUM, CONTRACTLINENUM, SCHEDULEREV",
            "targetKeys": "ORGID, SCHEDULENUM, CONTRACTNUM, REVISIONNUM, CONTRACTLINENUM, REVISIONNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 13",
            "longDescription": null
        },
        {
            "objectName": "SCHEDULE",
            "targetObject": "SCHWARRANTYVIEW",
            "parentKeys": "ORGID, SCHEDULENUM, CONTRACTNUM, REVISIONNUM, CONTRACTLINENUM, SCHEDULEREV",
            "targetKeys": "ORGID, SCHEDULENUM, CONTRACTNUM, REVISIONNUM, CONTRACTLINENUM, SCHEDULEREV",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Schedule",
            "longDescription": null
        },
        {
            "objectName": "SCHEDULE",
            "targetObject": "SCHWARRANTYVIEW",
            "parentKeys": "ORGID, SCHEDULENUM, CONTRACTNUM, REVISIONNUM, CONTRACTLINENUM, SCHEDULEREV",
            "targetKeys": "ORGID, SCHEDULENUM, CONTRACTNUM, SCHEDULEREV, CONTRACTLINENUM, REVISIONNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 15",
            "longDescription": null
        },
        {
            "objectName": "SCHEDULE",
            "targetObject": "SCHWARRANTYVIEW",
            "parentKeys": "ORGID, SCHEDULENUM, CONTRACTNUM, REVISIONNUM, CONTRACTLINENUM, SCHEDULEREV",
            "targetKeys": "ORGID, SCHEDULENUM, CONTRACTNUM, SCHEDULEREV, CONTRACTLINENUM, SCHEDULEREV",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 16",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
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
            "objectName": "CONTRACTLINE",
            "targetObject": "SCHEDULE",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID, CONTRACTLINENUM",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID, CONTRACTLINENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract Line",
            "longDescription": null
        },
        {
            "objectName": "CONTRACTLINE",
            "targetObject": "SCHEDULE",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID, CONTRACTLINENUM",
            "targetKeys": "CONTRACTNUM, SCHEDULEREV, ORGID, CONTRACTLINENUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 16",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "SCHEDULE",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "SCHEDULEID",
            "required": true,
            "persistent": true,
            "title": "Payment Schedule",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SCHEDULENUM",
            "required": true,
            "persistent": true,
            "title": "Schedule",
            "remarks": "System generated schedule number.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONTRACTNUM",
            "required": false,
            "persistent": true,
            "title": "Contract",
            "remarks": "Contract Number.",
            "sameAsAttribute": "CONTRACTNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "REVISIONNUM",
            "required": false,
            "persistent": true,
            "title": "Revision ",
            "remarks": "Revision number of the contract.",
            "sameAsAttribute": "REVISIONNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "CONTRACTLINEID",
            "required": false,
            "persistent": true,
            "title": "Contract Line ID",
            "remarks": "Unique identifier of the Contract Line.",
            "sameAsAttribute": "CONTRACTLINEID",
            "sameAsObject": "CONTRACTLINE"
        },
        {
            "attributeName": "SCHEDULETYPE",
            "required": false,
            "persistent": true,
            "title": "Type",
            "remarks": "Type of payment schedule.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "The description for the schedule.",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "STARTDATE",
            "required": false,
            "persistent": true,
            "title": "Start Date",
            "remarks": "Date these payments will begin.",
            "sameAsAttribute": "STARTDATE",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "ENDDATE",
            "required": false,
            "persistent": true,
            "title": "End Date",
            "remarks": "Date these payments will end.",
            "sameAsAttribute": "ENDDATE",
            "sameAsObject": "CONTRACT"
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
            "attributeName": "SINGLELINE",
            "required": true,
            "persistent": true,
            "title": "Single Payment Line ",
            "remarks": "Will a single invoice line be created that consolidates all of the assets that are covered by this payment?",
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
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Identifier.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "LOADEDCOST",
            "required": false,
            "persistent": true,
            "title": "Loaded Cost",
            "remarks": "Loaded cost.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TARGINVSTATUS",
            "required": false,
            "persistent": true,
            "title": "Target Invoice Status",
            "remarks": "Is the invoice created in a Entered (ENTERED) or Approved (APPR) status?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INCLUSIVE1",
            "required": true,
            "persistent": true,
            "title": "Include Tax 1 ",
            "remarks": "Is the Payment schedule inclusive of Tax 1?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INCLUSIVE2",
            "required": true,
            "persistent": true,
            "title": "Include Tax 2 ",
            "remarks": "Is the Payment schedule inclusive of Tax 2?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INCLUSIVE3",
            "required": true,
            "persistent": true,
            "title": "Include Tax 3 ",
            "remarks": "Is the Payment schedule inclusive of Tax 3?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INCLUSIVE4",
            "required": true,
            "persistent": true,
            "title": "Include Tax 4 ",
            "remarks": "Is the Payment schedule inclusive of Tax 4?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INCLUSIVE5",
            "required": true,
            "persistent": true,
            "title": "Include Tax 5 ",
            "remarks": "Is the Payment schedule inclusive of Tax 5?",
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
            "attributeName": "SCHEDULE",
            "required": false,
            "persistent": true,
            "title": "Schedule",
            "remarks": "Schedule using date selector.",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "CONTRACTLINENUM",
            "required": false,
            "persistent": true,
            "title": "Contract Line",
            "remarks": "Contract line number",
            "sameAsAttribute": "CONTRACTLINENUM",
            "sameAsObject": "CONTRACTLINE"
        },
        {
            "attributeName": "SCHEDULEREV",
            "required": false,
            "persistent": true,
            "title": "Schedule Revision",
            "remarks": "Revision number for the Schedule.",
            "sameAsAttribute": "REVISIONNUM",
            "sameAsObject": "CONTRACT"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "SCHEDULE",
            "source": "CONTRACTLINE",
            "remarks": "Relationship to the Schedule table, used to find schedule records for a given contract line. (schedule.contractlineid=contractline.contractlineid and schedule.orgid = contractline.orgid). The resulting set will contain zero or one object.",
            "whereClause": "contractlineid=:contractlineid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        }
    ]
}