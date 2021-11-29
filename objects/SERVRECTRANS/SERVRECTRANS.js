mos = {
    "objectName": "SERVRECTRANS",
    "className": "psdi.app.labor.ServRecTransSet",
    "description": "The SERVRECTRANS Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "SERVRECTRANSID",
    "primaryKeyColumns": [
        "SERVRECTRANSID"
    ],
    "logicalRelationships": [
        {
            "objectName": "SERVRECTRANS",
            "targetObject": "INVOICEMATCH",
            "parentKeys": "SERVRECTRANSID",
            "targetKeys": "SERVRECTRANSID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Invoice Match Service Receipts",
            "longDescription": null
        },
        {
            "objectName": "SERVRECTRANS",
            "targetObject": "LABTRANS",
            "parentKeys": "SERVRECTRANSID",
            "targetKeys": "SERVRECTRANSID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Created Service Receipt",
            "longDescription": null
        },
        {
            "objectName": "SERVRECTRANS",
            "targetObject": "SERVRECTRANS",
            "parentKeys": "SERVRECTRANSID",
            "targetKeys": "BELONGSTO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Parent",
            "longDescription": null
        },
        {
            "objectName": "SERVRECTRANS",
            "targetObject": "SERVRECTRANS",
            "parentKeys": "SERVRECTRANSID",
            "targetKeys": "RECEIPTREF",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Creating Receipt",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "ASSET",
            "targetObject": "SERVRECTRANS",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "FROMSITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 138",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "SERVRECTRANS",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "POSITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 139",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "SERVRECTRANS",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 140",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "SERVRECTRANS",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITY, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "SERVRECTRANS",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITYGROUP, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity Group",
            "longDescription": null
        },
        {
            "objectName": "CURRENCY",
            "targetObject": "SERVRECTRANS",
            "parentKeys": "CURRENCYCODE",
            "targetKeys": "CURRENCYCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Transaction Currency",
            "longDescription": null
        },
        {
            "objectName": "FINANCIALPERIODS",
            "targetObject": "SERVRECTRANS",
            "parentKeys": "ORGID, FINANCIALPERIOD",
            "targetKeys": "ORGID, FINANCIALPERIOD",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Financial Period",
            "longDescription": null
        },
        {
            "objectName": "FINCNTRL",
            "targetObject": "SERVRECTRANS",
            "parentKeys": "ORGID, FINCNTRLID",
            "targetKeys": "ORGID, FINCNTRLID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Financial Control",
            "longDescription": null
        },
        {
            "objectName": "INVOICE",
            "targetObject": "SERVRECTRANS",
            "parentKeys": "SITEID, INVOICENUM",
            "targetKeys": "FROMSITEID, INVOICENUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 25",
            "longDescription": null
        },
        {
            "objectName": "INVOICE",
            "targetObject": "SERVRECTRANS",
            "parentKeys": "SITEID, INVOICENUM",
            "targetKeys": "POSITEID, INVOICENUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 26",
            "longDescription": null
        },
        {
            "objectName": "INVOICE",
            "targetObject": "SERVRECTRANS",
            "parentKeys": "SITEID, INVOICENUM",
            "targetKeys": "SITEID, INVOICENUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 27",
            "longDescription": null
        },
        {
            "objectName": "INVOICELINE",
            "targetObject": "SERVRECTRANS",
            "parentKeys": "SITEID, PONUM, POLINENUM",
            "targetKeys": "POSITEID, PONUM, POLINENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PO",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "SERVRECTRANS",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "SERVRECTRANS",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "SERVRECTRANS",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "FROMSITEID, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 179",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "SERVRECTRANS",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "POSITEID, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 180",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "SERVRECTRANS",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 181",
            "longDescription": null
        },
        {
            "objectName": "MR",
            "targetObject": "SERVRECTRANS",
            "parentKeys": "SITEID, MRNUM",
            "targetKeys": "FROMSITEID, MRNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 24",
            "longDescription": null
        },
        {
            "objectName": "MR",
            "targetObject": "SERVRECTRANS",
            "parentKeys": "SITEID, MRNUM",
            "targetKeys": "POSITEID, MRNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 25",
            "longDescription": null
        },
        {
            "objectName": "MR",
            "targetObject": "SERVRECTRANS",
            "parentKeys": "SITEID, MRNUM",
            "targetKeys": "SITEID, MRNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 26",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "SERVRECTRANS",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SERVRECTRANS",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SERVRECTRANS",
            "parentKeys": "PERSONID",
            "targetKeys": "ENTERBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who entered the record.",
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
            "objectName": "POLINE",
            "targetObject": "SERVRECTRANS",
            "parentKeys": "SITEID, PONUM, POLINENUM",
            "targetKeys": "POSITEID, PONUM, POLINENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PO",
            "longDescription": null
        },
        {
            "objectName": "SERVRECTRANS",
            "targetObject": "SERVRECTRANS",
            "parentKeys": "SERVRECTRANSID",
            "targetKeys": "BELONGSTO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Parent",
            "longDescription": null
        },
        {
            "objectName": "SERVRECTRANS",
            "targetObject": "SERVRECTRANS",
            "parentKeys": "SERVRECTRANSID",
            "targetKeys": "RECEIPTREF",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Creating Receipt",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "SERVRECTRANS",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 58",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "SERVRECTRANS",
            "parentKeys": "SITEID",
            "targetKeys": "FROMSITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "SERVRECTRANS",
            "parentKeys": "SITEID",
            "targetKeys": "POSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 240",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "SERVRECTRANS",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
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
        }
    ],
    "columns": [
        {
            "attributeName": "PONUM",
            "required": false,
            "persistent": true,
            "title": "PO",
            "remarks": "Purchase Order Number.",
            "sameAsAttribute": "PONUM",
            "sameAsObject": "PO"
        },
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
            "attributeName": "LOCATION",
            "required": false,
            "persistent": true,
            "title": "Location",
            "remarks": "Service Location.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "CLAIMNUM",
            "required": false,
            "persistent": true,
            "title": "Claim #",
            "remarks": "Claim number.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REJECTQTY",
            "required": false,
            "persistent": true,
            "title": "Quantity Rejected",
            "remarks": "Quantity of claim rejected.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "QUANTITY",
            "required": false,
            "persistent": true,
            "title": "Quantity",
            "remarks": "Quantity of the service received. ",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "UNITCOST",
            "required": false,
            "persistent": true,
            "title": "Unit Cost",
            "remarks": "Cost of the service per unit.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REJECTCOST",
            "required": false,
            "persistent": true,
            "title": "Rejected Cost",
            "remarks": "Rejected extended or lump sum cost of this transaction line.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LINECOST",
            "required": true,
            "persistent": true,
            "title": "Line Cost",
            "remarks": "Calculated value. Maximo calculates the value using the following formula: Quantity x Unit Cost.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLDEBITACCT",
            "required": false,
            "persistent": true,
            "title": "GL Debit Account",
            "remarks": "General ledger account to charge for the service. ",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLCREDITACCT",
            "required": false,
            "persistent": true,
            "title": "GL Credit Account",
            "remarks": "General ledger account to credit for the cost of the service. ",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FINANCIALPERIOD",
            "required": false,
            "persistent": true,
            "title": "Financial Period",
            "remarks": "Financial period in a format corresponding to that required by the accounting system.",
            "sameAsAttribute": "FINANCIALPERIOD",
            "sameAsObject": "FINANCIALPERIODS"
        },
        {
            "attributeName": "TRANSDATE",
            "required": true,
            "persistent": true,
            "title": "Transaction Date",
            "remarks": "Timestamp - Key to Table",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENTERDATE",
            "required": true,
            "persistent": true,
            "title": "Entered Date",
            "remarks": "Date the service use is reported.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENTERBY",
            "required": true,
            "persistent": true,
            "title": "Received By",
            "remarks": "Identifies the person who received the service.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the service. To enter or view additional information, click the Long Description button.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "CURRENCYUNITCOST",
            "required": false,
            "persistent": true,
            "title": "Unit Cost",
            "remarks": "Unit cost of service; In currency of the PO or Invoice.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CURRENCYLINECOST",
            "required": true,
            "persistent": true,
            "title": "Line Cost",
            "remarks": "Extended or lump sum cost of this transaction line; In currency of PO or Invoice.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CURRENCYCODE",
            "required": true,
            "persistent": true,
            "title": "Currency",
            "remarks": "Copy from PO.CURRENCYCODE.",
            "sameAsAttribute": "CURRENCYCODE",
            "sameAsObject": "CURRENCY"
        },
        {
            "attributeName": "POLINENUM",
            "required": false,
            "persistent": true,
            "title": "PO Line",
            "remarks": "PO line item number.",
            "sameAsAttribute": "PRLINENUM",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "REMARK",
            "required": false,
            "persistent": true,
            "title": "Remarks",
            "remarks": "Service Remark.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SSPL1",
            "required": false,
            "persistent": true,
            "title": "Sspl1",
            "remarks": "Service Reporting Crossover from POLINE.PLIN1.",
            "sameAsAttribute": "IN19",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "ROLLUP",
            "required": true,
            "persistent": true,
            "title": "Rolled Up",
            "remarks": "Indicates whether or not this transaction has been rolled up.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SSPL2",
            "required": false,
            "persistent": true,
            "title": "Sspl2",
            "remarks": "Service Reporting Crossover from POLINE.PLIN2.",
            "sameAsAttribute": "IN20",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "SSPL3",
            "required": false,
            "persistent": true,
            "title": "Sspl3",
            "remarks": "Service Reporting Crossover from POLINE.PLIN3.",
            "sameAsAttribute": "IN21",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "INVOICENUM",
            "required": false,
            "persistent": true,
            "title": "Invoice",
            "remarks": "Invoice number for receipt.",
            "sameAsAttribute": "INVOICENUM",
            "sameAsObject": "INVOICE"
        },
        {
            "attributeName": "EXCHANGERATE",
            "required": false,
            "persistent": true,
            "title": "Exchange Rate",
            "remarks": "Copy from PO.EXCHANGERATE.",
            "sameAsAttribute": "EXCHANGERATE",
            "sameAsObject": "EXCHANGE"
        },
        {
            "attributeName": "LOADEDCOST",
            "required": true,
            "persistent": true,
            "title": "Loaded Cost",
            "remarks": "Line cost loaded with taxes & special charges.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TAX1CODE",
            "required": false,
            "persistent": true,
            "title": "Tax Code",
            "remarks": "Tax code used for calculation of Tax1 column.",
            "sameAsAttribute": "TAXCODE",
            "sameAsObject": "TAX"
        },
        {
            "attributeName": "TAX1",
            "required": false,
            "persistent": true,
            "title": "Tax 1",
            "remarks": "Amount of tax due on line item levied by Tax1Code.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TAX2CODE",
            "required": false,
            "persistent": true,
            "title": "Tax Code 2",
            "remarks": "Tax code used for calculation of Tax2 column.",
            "sameAsAttribute": "TAXCODE",
            "sameAsObject": "TAX"
        },
        {
            "attributeName": "TAX2",
            "required": false,
            "persistent": true,
            "title": "Tax 2",
            "remarks": "Amount of tax due on line item levied by Tax2Code.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TAX3CODE",
            "required": false,
            "persistent": true,
            "title": "Tax Code 3",
            "remarks": "Tax code used for calculation of Tax3 column.",
            "sameAsAttribute": "TAXCODE",
            "sameAsObject": "TAX"
        },
        {
            "attributeName": "TAX3",
            "required": false,
            "persistent": true,
            "title": "Tax 3",
            "remarks": "Amount of tax due on line item levied by Tax3Code.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TAX4CODE",
            "required": false,
            "persistent": true,
            "title": "Tax Code 4",
            "remarks": "Tax code used for calculation of Tax4 column.",
            "sameAsAttribute": "TAXCODE",
            "sameAsObject": "TAX"
        },
        {
            "attributeName": "TAX4",
            "required": false,
            "persistent": true,
            "title": "Tax 4",
            "remarks": "Amount of tax due on line item levied by Tax4Code.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TAX5CODE",
            "required": false,
            "persistent": true,
            "title": "Tax Code 5",
            "remarks": "Tax code used for calculation of Tax5 column.",
            "sameAsAttribute": "TAXCODE",
            "sameAsObject": "TAX"
        },
        {
            "attributeName": "TAX5",
            "required": false,
            "persistent": true,
            "title": "Tax 5",
            "remarks": "Amount of tax due on line item levied by Tax5Code.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PRORATED",
            "required": true,
            "persistent": true,
            "title": "Prorated",
            "remarks": "Has line amount been prorated (allocated)?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PRORATECOST",
            "required": false,
            "persistent": true,
            "title": "Prorate Cost",
            "remarks": "Amount of special charges loaded onto the line item.",
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
            "attributeName": "EXCHANGERATE2",
            "required": false,
            "persistent": true,
            "title": "Secondary Exchange Rate",
            "remarks": "Base Exchange Rate 2",
            "sameAsAttribute": "EXCHANGERATE",
            "sameAsObject": "EXCHANGE"
        },
        {
            "attributeName": "LINECOST2",
            "required": false,
            "persistent": true,
            "title": "Secondary Line Cost",
            "remarks": "Base Currency Line Cost 2.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MRNUM",
            "required": false,
            "persistent": true,
            "title": "Material Request",
            "remarks": "Material Request Number",
            "sameAsAttribute": "MRNUM",
            "sameAsObject": "MR"
        },
        {
            "attributeName": "MRLINENUM",
            "required": false,
            "persistent": true,
            "title": "MR Line",
            "remarks": "MR Line Number",
            "sameAsAttribute": "MRLINENUM",
            "sameAsObject": "MRLINE"
        },
        {
            "attributeName": "SERVRECTRANSID",
            "required": true,
            "persistent": true,
            "title": "Service",
            "remarks": "Primary key for the table",
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
            "attributeName": "SSPL4",
            "required": false,
            "persistent": true,
            "title": "SSPL4",
            "remarks": "Extra Field",
            "sameAsAttribute": "IN24",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "SSPL5",
            "required": false,
            "persistent": true,
            "title": "SSPL5",
            "remarks": "Extra Field",
            "sameAsAttribute": "IN25",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "SSPL6",
            "required": false,
            "persistent": true,
            "title": "SSPL6",
            "remarks": "Extra Field",
            "sameAsAttribute": "IN26",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "SSPL7",
            "required": false,
            "persistent": true,
            "title": "SSPL7",
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
            "remarks": "Financial Control Identifier",
            "sameAsAttribute": "FINCNTRLID",
            "sameAsObject": "FINCNTRL"
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
            "attributeName": "ISSUETYPE",
            "required": true,
            "persistent": true,
            "title": "Issue Type",
            "remarks": "Service Receipt transaction type",
            "sameAsAttribute": "ISSUETYPE",
            "sameAsObject": "MATUSETRANS"
        },
        {
            "attributeName": "COSTINFO",
            "required": true,
            "persistent": true,
            "title": "Cost Information",
            "remarks": "Flag to indicate if this line carries the cost information",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BELONGSTO",
            "required": false,
            "persistent": true,
            "title": "Belongs To",
            "remarks": "Servrectransid of the parent",
            "sameAsAttribute": "SERVRECTRANSID",
            "sameAsObject": "SERVRECTRANS"
        },
        {
            "attributeName": "REFWO",
            "required": false,
            "persistent": true,
            "title": "Work Order",
            "remarks": "Referenced Work Order",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ENTEREDASTASK",
            "required": true,
            "persistent": true,
            "title": "Entered as Task",
            "remarks": "Was this transaction created against a work order task?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Long description for Service description.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REMARK_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Remark Long Description",
            "remarks": "Long Description for Service Remark.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "UNINVOICEDCOST",
            "required": false,
            "persistent": false,
            "title": "Uninvoiced Cost",
            "remarks": "UNINVOICEDCOST",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "UNINVOICEDQUANTITY",
            "required": false,
            "persistent": false,
            "title": "Uninvoiced Quantity",
            "remarks": "UNINVOICEDQUANTITY",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TASKID",
            "required": false,
            "persistent": false,
            "title": "Task",
            "remarks": "Identifies the task associated with the service transaction.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WONUM",
            "required": false,
            "persistent": false,
            "title": "Work Order",
            "remarks": "WONUM",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "CURRENCYORDERUNITCOST",
            "required": false,
            "persistent": false,
            "title": "Unit Cost",
            "remarks": "CURRENCYORDERUNITCOST",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CURRENCYLOADEDCOST",
            "required": false,
            "persistent": false,
            "title": "Loaded Cost",
            "remarks": "CURRENCYLOADEDCOST",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISDISTRIBUTED",
            "required": true,
            "persistent": false,
            "title": "Distributed",
            "remarks": "ISDISTRIBUTED",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CURRENCYTAX5",
            "required": false,
            "persistent": false,
            "title": "Tax 5",
            "remarks": "CURRENCYTAX5",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CURRENCYTAX4",
            "required": false,
            "persistent": false,
            "title": "Tax 4",
            "remarks": "CURRENCYTAX4",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CURRENCYTAX3",
            "required": false,
            "persistent": false,
            "title": "Tax 3",
            "remarks": "CURRENCYTAX3",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CURRENCYTAX2",
            "required": false,
            "persistent": false,
            "title": "Tax 2",
            "remarks": "CURRENCYTAX2",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CURRENCYTAX1",
            "required": false,
            "persistent": false,
            "title": "Tax Amount",
            "remarks": "CURRENCYTAX1",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TEMPLOADEDCOST",
            "required": false,
            "persistent": false,
            "title": "Loaded Cost",
            "remarks": "TEMPLOADEDCOST",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AMTTORECEIVE",
            "required": false,
            "persistent": false,
            "title": "Line Cost",
            "remarks": "AMTTORECEIVE",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PERCENTAGE",
            "required": false,
            "persistent": false,
            "title": "Percent",
            "remarks": "PERCENTAGE",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "QTYTORECEIVE",
            "required": false,
            "persistent": false,
            "title": "Quantity",
            "remarks": "QTYTORECEIVE",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORDERQTY",
            "required": false,
            "persistent": false,
            "title": "Quantity",
            "remarks": "Order Quantity",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "QTYALREADYRECVD",
            "required": false,
            "persistent": false,
            "title": "Quantity Already Received",
            "remarks": "Quantity Already Received",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LINECOSTALREADYRECVD",
            "required": false,
            "persistent": false,
            "title": "Line Cost Already Received",
            "remarks": "Line Cost Already Received",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LINETYPE",
            "required": true,
            "persistent": true,
            "title": "Line Type",
            "remarks": "Identifies the type of service, for example standard service (one that is used repeatedly, such as grounds maintenance or installation), or a service (a single-type purchase or not used often enough to maintain a vendor catalog for it, such as painting).",
            "sameAsAttribute": "LINETYPE",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "ITEMNUM",
            "required": false,
            "persistent": true,
            "title": "Item",
            "remarks": "Identifies the standard service.",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "ITEMSETID",
            "required": false,
            "persistent": true,
            "title": "Item Set",
            "remarks": "Item set identifier for this item",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS"
        },
        {
            "attributeName": "FCPROJECTID",
            "required": false,
            "persistent": false,
            "title": "FC Project ID",
            "remarks": "Financial control project identifier.",
            "sameAsAttribute": "PROJECTID",
            "sameAsObject": "FINCNTRL"
        },
        {
            "attributeName": "FCTASKID",
            "required": false,
            "persistent": false,
            "title": "FC Task ID",
            "remarks": "Financial control task identifier.",
            "sameAsAttribute": "TASKID",
            "sameAsObject": "FINCNTRL"
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
            "attributeName": "STATUS",
            "required": false,
            "persistent": true,
            "title": "Inspection Status",
            "remarks": "Holds the status of this record",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "CHANGEBY",
            "required": false,
            "persistent": true,
            "title": "Changed By",
            "remarks": "User who last changed this record",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": false,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "Timestamp of when the transaction was approved.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ACCEPTEDQTY",
            "required": false,
            "persistent": false,
            "title": "Quantity Accepted",
            "remarks": "Quantity that has been accepted",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INSPECTEDQTY",
            "required": false,
            "persistent": true,
            "title": "Quantity to be Inspected",
            "remarks": "Number of items inspected",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INSPECTIONCOST",
            "required": false,
            "persistent": true,
            "title": "Cost to be Inspected",
            "remarks": "Cost of inspected items",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ACCEPTEDCOST",
            "required": false,
            "persistent": true,
            "title": "Accepted Cost",
            "remarks": "Cost of accepted items",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COMMODITY",
            "required": false,
            "persistent": true,
            "title": "Commodity Code",
            "remarks": "Commodity",
            "sameAsAttribute": "COMMODITY",
            "sameAsObject": "COMMODITIES"
        },
        {
            "attributeName": "COMMODITYGROUP",
            "required": false,
            "persistent": true,
            "title": "Commodity Group",
            "remarks": "Commodity Group",
            "sameAsAttribute": "COMMODITY",
            "sameAsObject": "COMMODITIES"
        },
        {
            "attributeName": "INSPECTEDQTYDSPLY",
            "required": false,
            "persistent": false,
            "title": "Inspected Quantity",
            "remarks": "Quantity left to be inspected - for display only.",
            "sameAsAttribute": "INSPECTEDQTY",
            "sameAsObject": "SERVRECTRANS"
        },
        {
            "attributeName": "REJECTQTYDISPLAY",
            "required": false,
            "persistent": false,
            "title": "Rejected Quantity",
            "remarks": "Quantity that is rejected - for display only.",
            "sameAsAttribute": "REJECTQTY",
            "sameAsObject": "SERVRECTRANS"
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
            "attributeName": "POSITEID",
            "required": false,
            "persistent": true,
            "title": "PO Site ID",
            "remarks": "PO Site ID",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ACTUALSTASKID",
            "required": false,
            "persistent": false,
            "title": "Task",
            "remarks": "Identifies the task for which the service was used.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SOURCEMBO",
            "required": false,
            "persistent": false,
            "title": "Source Mbo",
            "remarks": "Set to the MBO Name by Integration",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "INSPECTED",
            "required": true,
            "persistent": false,
            "title": "Inspected",
            "remarks": "Used and set by integration",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "RECEIPTREF",
            "required": false,
            "persistent": true,
            "title": "ReceiptRef",
            "remarks": "ServRecTransID of the creating receipt",
            "sameAsAttribute": "SERVRECTRANSID",
            "sameAsObject": "SERVRECTRANS"
        },
        {
            "attributeName": "QTYOVERRECEIVED",
            "required": false,
            "persistent": true,
            "title": "Over Received Quantity",
            "remarks": "The quantity of items that were over received.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COSTOVERRECEIVED",
            "required": false,
            "persistent": true,
            "title": "Over Received Amount",
            "remarks": "The amount that was over received.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FROMSITEID",
            "required": false,
            "persistent": true,
            "title": "From Site",
            "remarks": "The identifier of the site which creates this record.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
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
            "name": "CONTRACTREFLINEVIEW",
            "target": "CONTRACTLINE",
            "remarks": "Relationship to the InvoiceLine table, used to find all invoice line records for a given purchase order line. (invoiceline.ponum = poline.ponum and invoiceline.siteid = poline.siteid and  invoiceline.polinenum = poline.polinenum). The resulting set will contain zero or more objects.",
            "whereClause": "contractlineid in (select contreflineid from poline where polinenum = :polinenum and ponum = :ponum and siteid = :positeid)",
            "cardinality": null
        },
        {
            "name": "DRILLDOWN",
            "target": "DRILLDOWN",
            "remarks": "Relationship from the SERVRECTRANS to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVOICE",
            "target": "INVOICE",
            "remarks": "Relationship to the Invoice table, used to find all invoice records for a given service receipt. (invoice.invoicenum = servrectrans.invoicenum). The resulting set will contain one object.",
            "whereClause": "invoicenum = :invoicenum and siteid=:siteid",
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
            "name": "INVOICELINEVIEW1",
            "target": "INVOICELINE",
            "remarks": "Relationship to the InvoiceLine table, used to find all invoice line records for a given purchase order line. (invoiceline.ponum = poline.ponum and invoiceline.siteid = poline.siteid and  invoiceline.polinenum = poline.polinenum). The resulting set will contain zero or more objects.",
            "whereClause": "polinenum = :polinenum and ponum = :ponum and positeid = :positeid and (invoicenum=:invoicenum or invoicenum is null)",
            "cardinality": null
        },
        {
            "name": "INVOICEMATCH",
            "target": "INVOICEMATCH",
            "remarks": "Relationship to the Invoicematch table, used to find all invoice matches for a given service receipts. (invoicematch.servrectransid = servrectrans.servrectransid). The resulting set will contain zero or more objects.",
            "whereClause": "servrectransid = :servrectransid and positeid = :positeid",
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
            "name": "INVOICETRANS1",
            "target": "INVOICETRANS",
            "remarks": "Relationship to the INVOICETRANS line table, used to find all INVOICETRANS line records for a given purchase order line. (polinenum in (select polinenum from prline where ponum=prline.ponum and siteid=prline.siteid and polinenum=prline.polinenum) and positeid=prline.siteid). The resulting set will contain zero or more objects.",
            "whereClause": "siteid in (select siteid from invoiceline where ponum=:ponum and polinenum=:polinenum) and invoicelinenum in (select invoicelinenum from invoiceline where ponum=:ponum and polinenum=:polinenum) and invoicenum in (select invoicenum from invoiceline where ponum=:ponum) and (invoicenum=:invoicenum or invoicenum is null)",
            "cardinality": null
        },
        {
            "name": "PO",
            "target": "PO",
            "remarks": "Relationship to the PO table, used to find all purchase order records for a given service receipt. (po.ponum = servrectrans.ponum). The resulting set will contain one object.",
            "whereClause": "ponum = :ponum and siteid=:positeid",
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
            "remarks": "Relationship to the POLine table, used to find all purchase order lines records for a given service receipt. (poline.ponum = servrectrans.ponum and poline.polinenum = servrectrans.polinenum). The resulting set will contain one object.",
            "whereClause": "ponum = :ponum and polinenum = :polinenum and siteid=:positeid",
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
            "name": "SERVRECTRANS",
            "target": "SERVRECTRANS",
            "remarks": "Relationship to the ServRecTrans table, used to find all parent service receipt records for a given service receipt. (servrectrans.belongsto = servrectrans.servrectransid). The resulting set will contain one object.",
            "whereClause": "belongsto = :servrectransid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RETURNRECEIPTSSRV",
            "target": "SERVRECTRANS",
            "remarks": "Relationship to the ServRecTrans table, used to find all child receipts(servrectrans.receiptref = servrectrans.servrectransid)",
            "whereClause": "receiptref=:servrectransid and issuetype in (select value from synonymdomain where domainid='ISSUETYP' and maxvalue='RETURN')",
            "cardinality": null
        },
        {
            "name": "RETURNVOIDRECEIPTS",
            "target": "SERVRECTRANS",
            "remarks": "Relationship to the Servrectrans table, used to find all Returned and Voided receipts.",
            "whereClause": "receiptref=:servrectransid and issuetype in (select value from synonymdomain where domainid='ISSUETYP' and maxvalue in ('RETURN','VOIDRECEIPT'))",
            "cardinality": null
        },
        {
            "name": "VOIDRECEIPTS",
            "target": "SERVRECTRANS",
            "remarks": "Relationship to the Servrectrans table, used to find all voided receipts.",
            "whereClause": "receiptref=:servrectransid and issuetype in (select value from synonymdomain where domainid='ISSUETYP' and maxvalue='VOIDRECEIPT')",
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
            "remarks": "Relationship from the SERVRECTRANS to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "SERVRECTRANS",
            "source": "INVOICE",
            "remarks": "Relationship to the ServRecTrans table, used to find all parent service receipts that have been used on a given invoice. (invoice.invoicenum = servrectrans.invoicenum and servrectrans.belongsto is null). The resulting set will contain zero or more objects.",
            "whereClause": "invoicenum = :invoicenum and belongsto is null and positeid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SERVRECTRANSVIEW",
            "source": "INVOICE",
            "remarks": "Relationship to the SERVRECTRANS line table, used to find all SERVRECTRANS line records for a given INVOICE. The resulting set will contain zero or more objects.",
            "whereClause": "exists (select 1 from invoiceline where servrectrans.porevisionnum = invoiceline.porevisionnum and servrectrans.ponum = invoiceline.ponum and servrectrans.polinenum = invoiceline.polinenum and servrectrans.siteid = invoiceline.positeid and invoiceline.invoicenum = :invoicenum and invoiceline.siteid=:siteid)",
            "cardinality": null
        },
        {
            "name": "REVSERVRECTRANS",
            "source": "INVOICE",
            "remarks": "Relationship to the ServRecTrans table for a given invoice",
            "whereClause": "invoicenum = :invoicenum and fromsiteid=:siteid",
            "cardinality": null
        },
        {
            "name": "POSERVRECTRANS",
            "source": "INVOICE",
            "remarks": "Relationship to the ServRecTrans table, used to find all parent service receipts created against the ponum used for this invoice. (invoice.ponum = servrectrans.ponum and servrectrans.belongsto is null). The resulting set will contain zero or more objects.",
            "whereClause": "ponum = :ponum and issuetype not in (select value from synonymdomain where domainid = 'ISSUETYP' and maxvalue in ('INVOICE', 'TRANSFER')) and status in (select value from synonymdomain where domainid = 'RECEIPTSTATUS' and maxvalue = 'COMP') and belongsto is null and ponum in (select ponum from poline where poline.ponum = :ponum and poline.scheduleid is null) and positeid = :positeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POSERVRECTRANSVOID",
            "source": "INVOICE",
            "remarks": "Relationship to the ServRecTrans table, used to find all parent service receipts created against the ponum used for this invoice. The resulting set will contain zero or more objects.",
            "whereClause": "(ponum = :ponum and issuetype not in (:&synonymlist&_issuetyp[VOIDRECEIPT]) and (issuetype in (:&synonymlist&_issuetyp[RECEIPT,RETURN]) and servrectransid not in (select receiptref from servrectrans where issuetype in (:&synonymlist&_issuetyp[VOIDRECEIPT]) and ponum = :ponum))) and (ponum = :ponum and issuetype not in (:&synonymlist&_issuetyp[INVOICE,TRANSFER]) and status in (:&synonymlist&_receiptstatus[COMP]) and belongsto is null and ponum in (select ponum from poline where poline.ponum = :ponum and poline.scheduleid is null) and positeid = :positeid)",
            "cardinality": null
        },
        {
            "name": "SERVRECTRANS",
            "source": "INVOICELINE",
            "remarks": "Relationship to the ServRecTrans table, used to find the service receipt for a given invoice line. (invoiceline.ponum = servrectrans.ponum and invoiceline.polinenum = servrectrans.polinenum).  The resulting set will contain zero or more objects.",
            "whereClause": "ponum = :ponum and polinenum = :polinenum and positeid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SERVRECTRANSVIEW",
            "source": "INVOICELINE",
            "remarks": "Relationship to the  SERVRECTRANS line table, used to find all SERVRECTRANS line records for a given INVOICE line. (polinenum in (select polinenum from prline where ponum=prline.ponum and siteid=prline.siteid and  polinenum=prline.polinenum) and positeid=prline.siteid). The resulting set will contain zero or more objects.",
            "whereClause": "porevisionnum in (select porevisionnum from invoiceline where invoicenum=:invoicenum and positeid=:positeid and polinenum=:polinenum) and polinenum in (select polinenum from invoiceline where invoicenum=:invoicenum and positeid=:positeid and polinenum=:polinenum) and  ponum in (select ponum from invoiceline where invoicenum=:invoicenum and positeid=:positeid) and positeid  in (select positeid from invoiceline where invoicenum=:invoicenum and positeid=:positeid) and (invoicenum=:invoicenum or invoicenum is null)",
            "cardinality": null
        },
        {
            "name": "SERVRECTRANSVIEW1",
            "source": "INVOICELINE",
            "remarks": "Relationship to the  SERVRECTRANS line table, used to find all SERVRECTRANS line records for a given INVOICE line. (polinenum in (select polinenum from prline where ponum=prline.ponum and siteid=prline.siteid and  polinenum=prline.polinenum) and positeid=prline.siteid). The resulting set will contain zero or more objects.",
            "whereClause": "porevisionnum in (select porevisionnum from invoiceline where invoicenum=:invoicenum and positeid=:positeid and polinenum is null) and polinenum is null and  ponum in (select ponum from invoiceline where invoicenum=:invoicenum and positeid=:positeid) and positeid  in (select positeid from invoiceline where invoicenum=:invoicenum and positeid=:positeid) and (invoicenum=:invoicenum or invoicenum is null)",
            "cardinality": null
        },
        {
            "name": "SERVRECTRANS",
            "source": "INVOICEMATCH",
            "remarks": "Relationship to the ServRecTrans table, used to find all service receipts for a given invoice match line. (invoicematch.servrectransid = servrectrans.servrectransid). The resulting set will contain zero or more objects.",
            "whereClause": "servrectransid = :servrectransid and positeid = :positeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECEIPTTYPESRVREC",
            "source": "PO",
            "remarks": "Relationship to the ServRecTrans table, used to find all records of type RECEIPT and TRANSFER that do not have a fromstoreloc of type HOLDING and that are not receipts of rotating assets (po.ponum = matrectrans.ponum  and po.siteid = matrectrans.siteid and matrectrans.status is not null and issuetype in (select value from synonymdomain where domainid='ISSUETYP' and maxvalue in ('TRANSFER','RECEIPT'))",
            "whereClause": "ponum=:ponum and positeid=:siteid and status is not null and issuetype in (select value from synonymdomain where domainid='ISSUETYP' and maxvalue in ('TRANSFER','RECEIPT'))",
            "cardinality": null
        },
        {
            "name": "NOCOSTSERVRECTRANS",
            "source": "PO",
            "remarks": "Relationship to the ServRecTrans table, used to find all service receipt transactions which has no parent. (matrectrans.ponum = po.ponum and servrectrans.belongsto is null). The resulting set will contain zero or more objects. Note: This relationship is used only for the Receiving application to display the main page of service receipts.",
            "whereClause": "ponum = :ponum and belongsto is null and positeid=:siteid and porevisionnum <=:revisionnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SERVRECTRANS",
            "source": "PO",
            "remarks": "Relationship to the ServRecTrans table, used to find all service receipt transaction records for a given purchase order. (servrectrans.ponum = po.ponum). The resulting set will contain zero or more objects.",
            "whereClause": "ponum=:ponum and positeid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "INVOICETYPESERVREC",
            "source": "PO",
            "remarks": "Relationship to the ServRecTrans table, used to find all receipts of type INVOICE (po.ponum = servrectrans.ponum and servrectrans.issuetype=INVOICE).",
            "whereClause": "ponum=:ponum and porevisionnum=:revisionnum and issuetype in (select value from synonymdomain where domainid='ISSUETYP' and maxvalue='INVOICE')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "UNAPPROVEDSERVRECTRANS",
            "source": "PO",
            "remarks": "Relationship to the ServRecTrans table, used to find all parent service receipt transactions that have not been approved for a given purchase order. (servrectrans.ponum = po.ponum and servrectrans.approved = no and servrectrans.belongsto is null). The resulting set will contain zero or more objects. Note: This relationship is used only for the Receiving application, Approve Receipts action to display records based on ServRecTrans table with not approved receipts for a given purchase order.",
            "whereClause": "ponum = :ponum and belongsto is null and status in (select value from synonymdomain where maxvalue='WINSP' and domainid = 'RECEIPTSTATUS') and positeid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SERVRECTRANS",
            "source": "POLINE",
            "remarks": "Relationship to the ServRecTrans table, used to find the service receipts that were created for a purchase order line. (servrectrans.ponum = poline.ponum and servrectrans.polinenum = poline.polinenum). The resulting set will contain zero or more objects.",
            "whereClause": "ponum = :ponum and polinenum = :polinenum and belongsto is null and positeid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SERVRECTRANS",
            "source": "PR",
            "remarks": "Relationship to the SERVRECTRANS line table, used to find all SERVRECTRANS line records for a given purchase requisition. (polinenum in (select polinenum from prline where prnum=prline.prnum and siteid=prline.siteid) and positeid = pr.siteid). The resulting set will contain zero or more objects.",
            "whereClause": "polinenum in (select polinenum from prline where prnum=:prnum and siteid=:siteid) and ponum in (select ponum from prline where prnum=:prnum and siteid=:siteid) and positeid = :siteid",
            "cardinality": null
        },
        {
            "name": "SERVRECTRANS",
            "source": "PRLINE",
            "remarks": "Relationship to the SERVRECTRANS line table, used to find all SERVRECTRANS line records for a given purchase requisition line. (polinenum in (select polinenum from prline where ponum=prline.ponum and siteid=prline.siteid and polinenum=prline.polinenum) and positeid=prline.siteid). The resulting set will contain zero or more objects.",
            "whereClause": "polinenum in (select polinenum from prline where ponum=:ponum and siteid=:siteid and polinenum=:polinenum) and ponum in (select ponum from prline where prnum=:prnum and siteid=:siteid) and ponum in (select ponum from prline where prnum=:prnum and siteid=:siteid) and positeid = :siteid",
            "cardinality": null
        },
        {
            "name": "SERVRECTRANS",
            "source": "RECEIPTINPUT",
            "remarks": "Relationship to get SERVRECTRANS records for the RECEIPTINPUT record.",
            "whereClause": "ponum = :ponum and polinenum = :polinenum and siteid = :siteid",
            "cardinality": null
        },
        {
            "name": "SERVRECTRANS",
            "source": "SERVRECTRANS",
            "remarks": "Relationship to the ServRecTrans table, used to find all parent service receipt records for a given service receipt. (servrectrans.belongsto = servrectrans.servrectransid). The resulting set will contain one object.",
            "whereClause": "belongsto = :servrectransid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RETURNRECEIPTSSRV",
            "source": "SERVRECTRANS",
            "remarks": "Relationship to the ServRecTrans table, used to find all child receipts(servrectrans.receiptref = servrectrans.servrectransid)",
            "whereClause": "receiptref=:servrectransid and issuetype in (select value from synonymdomain where domainid='ISSUETYP' and maxvalue='RETURN')",
            "cardinality": null
        },
        {
            "name": "RETURNVOIDRECEIPTS",
            "source": "SERVRECTRANS",
            "remarks": "Relationship to the Servrectrans table, used to find all Returned and Voided receipts.",
            "whereClause": "receiptref=:servrectransid and issuetype in (select value from synonymdomain where domainid='ISSUETYP' and maxvalue in ('RETURN','VOIDRECEIPT'))",
            "cardinality": null
        },
        {
            "name": "VOIDRECEIPTS",
            "source": "SERVRECTRANS",
            "remarks": "Relationship to the Servrectrans table, used to find all voided receipts.",
            "whereClause": "receiptref=:servrectransid and issuetype in (select value from synonymdomain where domainid='ISSUETYP' and maxvalue='VOIDRECEIPT')",
            "cardinality": null
        },
        {
            "name": "SERVICES",
            "source": "WORKORDER",
            "remarks": "Relationship to the ServRecTrans table, used to find all service received transactions for a work order. (ServRecTrans.wonum = workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "refwo=:wonum and siteid=:siteid and status in (select value from synonymdomain where domainid='RECEIPTSTATUS' and maxvalue='COMP')",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "SHOWACTUALSERVICE",
            "source": "WORKORDER",
            "remarks": "Relationship to the ShowActualService Set used by UI for display. This is a special MboSet used for displaying the actual services for a given workorder. (refwo in (select wonum from workorder where workorder.wonum=workorder.wonum or workorder.parent=workorder.wonum and workorder.siteid=workorder.siteid)). The resulting set will contain zero or more objects.",
            "whereClause": "refwo in (select wonum from workorder where (wonum=:wonum or (parent=:wonum and istask = :yes)) and siteid=:siteid )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REP_ACTSERV",
            "source": "WORKORDER",
            "remarks": "Relationship that returns all actual services for given Work Order, including the services for the Work Order's tasks.  Used for reporting.",
            "whereClause": "(refwo=:wonum or exists (select 1 from workorder w where w.parent=:wonum and w.istask=1 and servrectrans.siteid=w.siteid and servrectrans.refwo=w.wonum)) and servrectrans.siteid=:siteid",
            "cardinality": "MULTIPLE"
        }
    ]
}