mos = {
    "objectName": "DEPTRANS",
    "className": "psdi.app.asset.DepTransSet",
    "description": "GL transactions for asset depreciation",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "DEPTRANSID",
    "primaryKeyColumns": [
        "ORGID",
        "DEPRECIATIONNUM",
        "DEPSCHEDNUM",
        "PERIODNUM",
        "TRANSDATE"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ASSET",
            "targetObject": "DEPTRANS",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "The asset assigned to the depreciation schedule",
            "longDescription": null
        },
        {
            "objectName": "CHARTOFACCOUNTS",
            "targetObject": "DEPTRANS",
            "parentKeys": "ORGID, GLACCOUNT",
            "targetKeys": "ORGID, GLCREDITACCT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Credit Account",
            "longDescription": null
        },
        {
            "objectName": "CHARTOFACCOUNTS",
            "targetObject": "DEPTRANS",
            "parentKeys": "ORGID, GLACCOUNT",
            "targetKeys": "ORGID, GLDEBITACCT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Debit Account",
            "longDescription": null
        },
        {
            "objectName": "DEPRECIATION",
            "targetObject": "DEPTRANS",
            "parentKeys": "ORGID, DEPRECIATIONNUM",
            "targetKeys": "ORGID, DEPRECIATIONNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Depreciation Transactions",
            "longDescription": null
        },
        {
            "objectName": "DEPSCHED",
            "targetObject": "DEPTRANS",
            "parentKeys": "ORGID, DEPRECIATIONNUM, DEPSCHEDNUM",
            "targetKeys": "ORGID, DEPRECIATIONNUM, DEPSCHEDNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "GL transactions for asset depreciation",
            "longDescription": null
        },
        {
            "objectName": "DEPSCHEDPERIODS",
            "targetObject": "DEPTRANS",
            "parentKeys": "ORGID, DEPSCHEDNUM, PERIODNUM",
            "targetKeys": "ORGID, DEPSCHEDNUM, PERIODNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Periods in a depreciation schedule",
            "longDescription": null
        },
        {
            "objectName": "FINANCIALPERIODS",
            "targetObject": "DEPTRANS",
            "parentKeys": "ORGID, FINANCIALPERIOD",
            "targetKeys": "ORGID, FINANCIALPERIOD",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Financial Period",
            "longDescription": null
        },
        {
            "objectName": "FINCNTRL",
            "targetObject": "DEPTRANS",
            "parentKeys": "ORGID, FINCNTRLID",
            "targetKeys": "ORGID, FINCNTRLID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Financial Control",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "DEPTRANS",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset''s Item #",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "DEPTRANS",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 100",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "DEPTRANS",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 18",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "DEPTRANS",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 63",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": true,
            "title": "Asset",
            "remarks": "Asset Number",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "CURRENTVALUE",
            "required": false,
            "persistent": true,
            "title": "Depreciated Value",
            "remarks": "Current value of the asset in this depreciation period",
            "sameAsAttribute": "CURRENTVALUE",
            "sameAsObject": "DEPSCHEDPERIODS"
        },
        {
            "attributeName": "DEPAMT",
            "required": false,
            "persistent": true,
            "title": "Depreciation Amount",
            "remarks": "Total price for the billing transaction",
            "sameAsAttribute": "DEPAMT",
            "sameAsObject": "DEPSCHEDPERIODS"
        },
        {
            "attributeName": "DEPRECIATIONNUM",
            "required": false,
            "persistent": true,
            "title": "Depreciation ID",
            "remarks": "ID of the depreciation",
            "sameAsAttribute": "DEPRECIATIONNUM",
            "sameAsObject": "DEPRECIATION"
        },
        {
            "attributeName": "DEPSCHEDNUM",
            "required": false,
            "persistent": true,
            "title": "Schedule",
            "remarks": "ID of the depreciation schedule",
            "sameAsAttribute": "DEPSCHEDNUM",
            "sameAsObject": "DEPSCHED"
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
            "attributeName": "FINANCIALPERIOD",
            "required": false,
            "persistent": true,
            "title": "Financial Period",
            "remarks": "Financial period in a format corresponding to that required by the accounting system",
            "sameAsAttribute": "FINANCIALPERIOD",
            "sameAsObject": "FINANCIALPERIODS"
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
            "attributeName": "GLCREDITACCT",
            "required": false,
            "persistent": true,
            "title": "GL Credit Account",
            "remarks": "Account to be charged for the assignment",
            "sameAsAttribute": "GLACCOUNT",
            "sameAsObject": "CHARTOFACCOUNTS"
        },
        {
            "attributeName": "GLDEBITACCT",
            "required": false,
            "persistent": true,
            "title": "GL Debit Account",
            "remarks": "GL revenue account used for this dispatch assignment",
            "sameAsAttribute": "GLACCOUNT",
            "sameAsObject": "CHARTOFACCOUNTS"
        },
        {
            "attributeName": "ITEMNUM",
            "required": false,
            "persistent": true,
            "title": "Item",
            "remarks": "TO BE DETERMINED",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "ITEMSETID",
            "required": false,
            "persistent": true,
            "title": "Item Set",
            "remarks": "TO BE DETERMINED",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS"
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
            "attributeName": "OWNERSYSID",
            "required": false,
            "persistent": true,
            "title": "Owner System ID",
            "remarks": "Owner System ID",
            "sameAsAttribute": "OWNER1SYSID",
            "sameAsObject": "MXCOLLAB"
        },
        {
            "attributeName": "PERIODNUM",
            "required": false,
            "persistent": true,
            "title": "Period",
            "remarks": "System-generated sequential number that identifies the period in the depreciation schedule",
            "sameAsAttribute": "PERIODNUM",
            "sameAsObject": "DEPSCHEDPERIODS"
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
            "remarks": "Site Identifier",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
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
            "attributeName": "TRANSDATE",
            "required": false,
            "persistent": true,
            "title": "Transaction Date",
            "remarks": "Date the billing transaction was created",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DEPTRANSID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "DEPTRANS",
            "source": "ASSET",
            "remarks": "Relationship to the DEPTRANS object.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": null
        }
    ]
}