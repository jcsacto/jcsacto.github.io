mos = {
    "objectName": "MATUSETRANS",
    "className": "psdi.app.inventory.MatUseTransSet",
    "description": "The Material Usage Transaction Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MATUSETRANSID",
    "primaryKeyColumns": [
        "SITEID",
        "MATUSETRANSID"
    ],
    "logicalRelationships": [
        {
            "objectName": "MATUSETRANS",
            "targetObject": "ASSETTRANS",
            "parentKeys": "SITEID, MATUSETRANSID",
            "targetKeys": "POSITEID, MATUSETRANSID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 1",
            "longDescription": null
        },
        {
            "objectName": "MATUSETRANS",
            "targetObject": "ASSETTRANS",
            "parentKeys": "SITEID, MATUSETRANSID",
            "targetKeys": "SITEID, MATUSETRANSID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 2",
            "longDescription": null
        },
        {
            "objectName": "MATUSETRANS",
            "targetObject": "ASSETTRANS",
            "parentKeys": "SITEID, MATUSETRANSID",
            "targetKeys": "TOSITEID, MATUSETRANSID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 3",
            "longDescription": null
        },
        {
            "objectName": "MATUSETRANS",
            "targetObject": "ASSETTRANS",
            "parentKeys": "MATUSETRANSID",
            "targetKeys": "MATUSETRANSID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Material Usage",
            "longDescription": null
        },
        {
            "objectName": "MATUSETRANS",
            "targetObject": "INVTRANS",
            "parentKeys": "MATUSETRANSID",
            "targetKeys": "MATUSETRANSID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Material Usage",
            "longDescription": null
        },
        {
            "objectName": "MATUSETRANS",
            "targetObject": "INVTRANS",
            "parentKeys": "SITEID, MATUSETRANSID",
            "targetKeys": "SITEID, MATUSETRANSID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 4",
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
            "targetObject": "MATUSETRANS",
            "parentKeys": "SITEID, MATUSETRANSID",
            "targetKeys": "SITEID, ISSUEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 12",
            "longDescription": null
        },
        {
            "objectName": "MATUSETRANS",
            "targetObject": "MATUSETRANS",
            "parentKeys": "SITEID, MATUSETRANSID",
            "targetKeys": "TOSITEID, ISSUEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 13",
            "longDescription": null
        },
        {
            "objectName": "MATUSETRANS",
            "targetObject": "MATUSETRANS",
            "parentKeys": "MATUSETRANSID",
            "targetKeys": "ISSUEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Original Transaction",
            "longDescription": null
        },
        {
            "objectName": "MATUSETRANS",
            "targetObject": "METERREADING",
            "parentKeys": "MATUSETRANSID",
            "targetKeys": "MATUSETRANSID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Material Usage",
            "longDescription": null
        },
        {
            "objectName": "MATUSETRANS",
            "targetObject": "METERREADING",
            "parentKeys": "SITEID, MATUSETRANSID",
            "targetKeys": "SITEID, MATUSETRANSID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 14",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "ASSET",
            "targetObject": "MATUSETRANS",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "MATUSETRANS",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ROTASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Rotating Asset",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "MATUSETRANS",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "TOSITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 82",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "MATUSETRANS",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "TOSITEID, ROTASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 83",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "MATUSETRANS",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITY, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "MATUSETRANS",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITYGROUP, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity Group",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "MATUSETRANS",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, CONSVENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Consignment Vendor on Material Usage Transaction",
            "longDescription": null
        },
        {
            "objectName": "CURRENCY",
            "targetObject": "MATUSETRANS",
            "parentKeys": "CURRENCYCODE",
            "targetKeys": "CURRENCYCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Transaction Currency",
            "longDescription": null
        },
        {
            "objectName": "FINANCIALPERIODS",
            "targetObject": "MATUSETRANS",
            "parentKeys": "ORGID, FINANCIALPERIOD",
            "targetKeys": "ORGID, FINANCIALPERIOD",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Financial Period",
            "longDescription": null
        },
        {
            "objectName": "FINCNTRL",
            "targetObject": "MATUSETRANS",
            "parentKeys": "ORGID, FINCNTRLID",
            "targetKeys": "ORGID, FINCNTRLID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Financial Control",
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
            "objectName": "INVOICE",
            "targetObject": "MATUSETRANS",
            "parentKeys": "SITEID, INVOICENUM",
            "targetKeys": "SITEID, CONSINVOICENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Consignment Invoice",
            "longDescription": null
        },
        {
            "objectName": "INVOICE",
            "targetObject": "MATUSETRANS",
            "parentKeys": "SITEID, INVOICENUM",
            "targetKeys": "TOSITEID, CONSINVOICENUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 24",
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
        },
        {
            "objectName": "ITEM",
            "targetObject": "MATUSETRANS",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "ITEMCONDITION",
            "targetObject": "MATUSETRANS",
            "parentKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "targetKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item Condition",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "MATUSETRANS",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "MATUSETRANS",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Non-Inventory Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "MATUSETRANS",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, STORELOC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 113",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "MATUSETRANS",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "TOSITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Issue Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "MATUSETRANS",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "TOSITEID, STORELOC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 115",
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
            "objectName": "MATUSETRANS",
            "targetObject": "MATUSETRANS",
            "parentKeys": "SITEID, MATUSETRANSID",
            "targetKeys": "SITEID, ISSUEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 12",
            "longDescription": null
        },
        {
            "objectName": "MATUSETRANS",
            "targetObject": "MATUSETRANS",
            "parentKeys": "SITEID, MATUSETRANSID",
            "targetKeys": "TOSITEID, ISSUEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 13",
            "longDescription": null
        },
        {
            "objectName": "MATUSETRANS",
            "targetObject": "MATUSETRANS",
            "parentKeys": "MATUSETRANSID",
            "targetKeys": "ISSUEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Original Transaction",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MATUSETRANS",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ISSUEUNIT, SITEID, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Issue Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MATUSETRANS",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ISSUEUNIT, TOSITEID, ORGID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 127",
            "longDescription": null
        },
        {
            "objectName": "MR",
            "targetObject": "MATUSETRANS",
            "parentKeys": "SITEID, MRNUM",
            "targetKeys": "SITEID, MRNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Material Request",
            "longDescription": null
        },
        {
            "objectName": "MR",
            "targetObject": "MATUSETRANS",
            "parentKeys": "SITEID, MRNUM",
            "targetKeys": "TOSITEID, MRNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 11",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "MATUSETRANS",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MATUSETRANS",
            "parentKeys": "PERSONID",
            "targetKeys": "ENTERBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who entered the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MATUSETRANS",
            "parentKeys": "PERSONID",
            "targetKeys": "ISSUETO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person issued materials.",
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
            "objectName": "SETS",
            "targetObject": "MATUSETRANS",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 45",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "MATUSETRANS",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "MATUSETRANS",
            "parentKeys": "SITEID",
            "targetKeys": "TOSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 129",
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
        }
    ],
    "columns": [
        {
            "attributeName": "ITEMNUM",
            "required": false,
            "persistent": true,
            "title": "Item",
            "remarks": "Item that you want to issue from this storeroom or that you used on a work order.",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "STORELOC",
            "required": false,
            "persistent": true,
            "title": "Storeroom",
            "remarks": "The location of the storeroom.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "TRANSDATE",
            "required": true,
            "persistent": true,
            "title": "Transaction Date",
            "remarks": "Date and time the transaction was entered in Maximo. This field is read only.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ACTUALDATE",
            "required": true,
            "persistent": true,
            "title": "Actual Date",
            "remarks": "Date and time of the issue transaction, which may be different than the time the transaction is recorded in Maximo. Maximo populates the current date and time by default. You can modify the value in this field. Click the Select Date and Time button to use the calendar control.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "QUANTITY",
            "required": true,
            "persistent": true,
            "title": "Quantity",
            "remarks": "This field indicates the quantity in/out. It is a calculation of items addedand or subtracted.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CURBAL",
            "required": true,
            "persistent": true,
            "title": "Current Balance",
            "remarks": "Current Balance At This Location",
            "sameAsAttribute": "CURBAL",
            "sameAsObject": "INVBALANCES"
        },
        {
            "attributeName": "PHYSCNT",
            "required": true,
            "persistent": true,
            "title": "Physical Count",
            "remarks": "Physical Count At This Location",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "UNITCOST",
            "required": true,
            "persistent": true,
            "title": "Unit Cost",
            "remarks": "Cost of the item on this transaction.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ACTUALCOST",
            "required": true,
            "persistent": true,
            "title": "Actual Cost",
            "remarks": "Extended cost of the item on this transaction.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PONUM",
            "required": false,
            "persistent": true,
            "title": "PO",
            "remarks": "Purchase Order Number",
            "sameAsAttribute": "PONUM",
            "sameAsObject": "PO"
        },
        {
            "attributeName": "CONVERSION",
            "required": false,
            "persistent": true,
            "title": "Conversion Factor",
            "remarks": "Numeric value that is applied to relate an order unit to an issue unit. For example, if you order light bulbs in bulk, your unit of measure might be a case, with a quantity received of 36. But when you issue the item, you issue it one at a time. In this case, you can define a measure unit of CASE and another measure unit of EACH. You define a conversion ratio from CASE to EACH with a factor of 36. When you receive an order of this item into a storeroom, MAXIMO converts the received order unit of one CASE into the storeroom's issue unit of 36 EACH.",
            "sameAsAttribute": "CONVERSION",
            "sameAsObject": "CONVERSION"
        },
        {
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": true,
            "title": "Asset",
            "remarks": "Asset number associated with this transaction.",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "ENTERBY",
            "required": true,
            "persistent": true,
            "title": "Entered By",
            "remarks": "Maximo user name of the person initiating this transaction.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "IT1",
            "required": false,
            "persistent": true,
            "title": "Extra Field 1",
            "remarks": "Extra Field 01",
            "sameAsAttribute": "RL1",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "IT2",
            "required": false,
            "persistent": true,
            "title": "Extra Field 2",
            "remarks": "Extra Field 02",
            "sameAsAttribute": "RL2",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "IT3",
            "required": false,
            "persistent": true,
            "title": "Extra Field 3",
            "remarks": "Extra Field 03",
            "sameAsAttribute": "RL3",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "IT4",
            "required": false,
            "persistent": true,
            "title": "Extra Field 4",
            "remarks": "Extra Field 04",
            "sameAsAttribute": "RL4",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "IT5",
            "required": false,
            "persistent": true,
            "title": "Extra Field 5",
            "remarks": "Extra Field 05",
            "sameAsAttribute": "RL5",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": true,
            "title": "Memo",
            "remarks": "Brief remark about the issue transaction.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OUTSIDE",
            "required": true,
            "persistent": true,
            "title": "Outside",
            "remarks": "Specifies whether the item being issued is a consignment good. If the check box is selected, the item belongs to a contractor (or vendor), but it is stored on-site, and it is an item for which you expect to be charged for its use. If the check box is cleared (the default), the item is not owned by an outside party.",
            "sameAsAttribute": "OUTSIDE",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "ISSUETO",
            "required": false,
            "persistent": true,
            "title": "Issued To",
            "remarks": "Person to whom the item, tool, or material is issued. Click the Detail Menu button to choose a person or go to the People application.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "PACKINGSLIPNUM",
            "required": false,
            "persistent": true,
            "title": "Packing Slip",
            "remarks": "Packing Slip Number",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "POLINENUM",
            "required": false,
            "persistent": true,
            "title": "PO Line",
            "remarks": "Line Item Number",
            "sameAsAttribute": "PRLINENUM",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "ROLLUP",
            "required": true,
            "persistent": true,
            "title": "Rolled Up",
            "remarks": "Indicates whether this transaction has been rolled up.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ITIN1",
            "required": false,
            "persistent": true,
            "title": "Itin1",
            "remarks": "Extra Field #6",
            "sameAsAttribute": "IN19",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "ITIN2",
            "required": false,
            "persistent": true,
            "title": "Itin2",
            "remarks": "Extra Field #7",
            "sameAsAttribute": "IN20",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "ITIN3",
            "required": false,
            "persistent": true,
            "title": "Itin3",
            "remarks": "Extra Field #8",
            "sameAsAttribute": "IN21",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "BINNUM",
            "required": false,
            "persistent": true,
            "title": "Bin",
            "remarks": "Bin number in this storeroom from which the item is issued.",
            "sameAsAttribute": "BINNUM",
            "sameAsObject": "INVENTORY"
        },
        {
            "attributeName": "LOTNUM",
            "required": false,
            "persistent": true,
            "title": "Lot",
            "remarks": "Lot number of the item, if the item is in a lot.",
            "sameAsAttribute": "LOTNUM",
            "sameAsObject": "INVLOT"
        },
        {
            "attributeName": "ISSUETYPE",
            "required": true,
            "persistent": true,
            "title": "Transaction Type",
            "remarks": "Type of transaction, either ISSUE or RETURN. Click the Select Value button to choose a transaction type.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLDEBITACCT",
            "required": false,
            "persistent": true,
            "title": "GL Debit Account",
            "remarks": "GL account being debited when the item is issued. Click the Select Value button to choose a GL account.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLCREDITACCT",
            "required": false,
            "persistent": true,
            "title": "GL Credit Account",
            "remarks": "GL account being credited when the item is issued. Click the Select Value button to choose a GL account.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LINECOST",
            "required": true,
            "persistent": true,
            "title": "Line Cost",
            "remarks": "Line cost of the transaction, calculated as Unit Cost multiplied by the Quantity of the item.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FINANCIALPERIOD",
            "required": false,
            "persistent": true,
            "title": "Financial Period",
            "remarks": "Financial Period of transaction",
            "sameAsAttribute": "FINANCIALPERIOD",
            "sameAsObject": "FINANCIALPERIODS"
        },
        {
            "attributeName": "CURRENCYCODE",
            "required": true,
            "persistent": true,
            "title": "Currency",
            "remarks": "Currency the PR is in.",
            "sameAsAttribute": "CURRENCYCODE",
            "sameAsObject": "CURRENCY"
        },
        {
            "attributeName": "CURRENCYUNITCOST",
            "required": false,
            "persistent": true,
            "title": "Currency Unit Cost",
            "remarks": "Unit Cost in vendor currency.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ROTASSETNUM",
            "required": false,
            "persistent": true,
            "title": "Rotating Asset",
            "remarks": "Identifies the rotating asset number associated with the item being issued.",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "CURRENCYLINECOST",
            "required": false,
            "persistent": true,
            "title": "Currency Line Cost",
            "remarks": "Line Cost in vendor currency.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": true,
            "title": "Location",
            "remarks": "Location to charge for this transaction.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the item. To enter or view more information, click the Long Description button.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "EXCHANGERATE",
            "required": false,
            "persistent": true,
            "title": "Exchange Rate",
            "remarks": "Exchange Rate.",
            "sameAsAttribute": "EXCHANGERATE",
            "sameAsObject": "EXCHANGE"
        },
        {
            "attributeName": "SPAREPARTADDED",
            "required": true,
            "persistent": true,
            "title": "Spare Part Added",
            "remarks": "Indicates that the item was added to the spare parts list for the asset.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "QTYREQUESTED",
            "required": false,
            "persistent": true,
            "title": "Requested Quantity",
            "remarks": "The quantity requested for the issue.",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "title": "Requisition",
            "remarks": "Requisition number associated with this transaction. Click the Select Value button to choose a requisition.",
            "sameAsAttribute": "MRNUM",
            "sameAsObject": "MR"
        },
        {
            "attributeName": "MRLINENUM",
            "required": false,
            "persistent": true,
            "title": "Requisition Line",
            "remarks": "Line number on the requestion for the item being issued.",
            "sameAsAttribute": "MRLINENUM",
            "sameAsObject": "MRLINE"
        },
        {
            "attributeName": "MATUSETRANSID",
            "required": true,
            "persistent": true,
            "title": "Usage ID",
            "remarks": "Primary key for the table",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MATRECTRANSID",
            "required": false,
            "persistent": true,
            "title": "Receipt ID",
            "remarks": "Foreign Key to MATRECTRANS",
            "sameAsAttribute": "MATRECTRANSID",
            "sameAsObject": "MATRECTRANS"
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
            "attributeName": "FINCNTRLID",
            "required": false,
            "persistent": true,
            "title": "FCID",
            "remarks": "Financial Control Identifier",
            "sameAsAttribute": "FINCNTRLID",
            "sameAsObject": "FINCNTRL"
        },
        {
            "attributeName": "ISSUEID",
            "required": false,
            "persistent": true,
            "title": "Issue Id",
            "remarks": "The ID of the Material Issue record this return is referring to.",
            "sameAsAttribute": "MATUSETRANSID",
            "sameAsObject": "MATUSETRANS"
        },
        {
            "attributeName": "QTYRETURNED",
            "required": false,
            "persistent": true,
            "title": "Quantity Returned",
            "remarks": "Qty returned for this issue-type ISSUE",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "REFWO",
            "required": false,
            "persistent": true,
            "title": "Work Order",
            "remarks": "This field indicates the referenced work order number.",
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
            "attributeName": "LINETYPE",
            "required": true,
            "persistent": true,
            "title": "Line Type",
            "remarks": "Identifies the line type, for example, ITEM, TOOL, or MATERIAL.",
            "sameAsAttribute": "LINETYPE",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "ITEMSETID",
            "required": false,
            "persistent": true,
            "title": "Item Set",
            "remarks": "Item set identifier for this item.",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS"
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Long Description for Item Description.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TASKID",
            "required": false,
            "persistent": false,
            "title": "Task",
            "remarks": "Task associated with the item being issued. Click the Select Value button to choose a task.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WONUM",
            "required": false,
            "persistent": false,
            "title": "Work Order",
            "remarks": "Work order to which you want the item issued. Click the Detail Menu button to choose a work order, view work order by classification, or go to the Work Order Tracking application.",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ACTUALSTASKID",
            "required": false,
            "persistent": false,
            "title": "Task",
            "remarks": "Identifies the task for which the item or material was used.",
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
            "attributeName": "NEWPHYSCNT",
            "required": false,
            "persistent": false,
            "title": "New Physical Count",
            "remarks": "Modifies the physical count balance with the value you enter.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "POSITIVEQUANTITY",
            "required": false,
            "persistent": false,
            "title": "Quantity",
            "remarks": "Number of the item you want to issue or have issued from this storeroom.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RESERVEDQTY",
            "required": false,
            "persistent": false,
            "title": "Quantity Reserved",
            "remarks": "RESERVEDQTY",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REQUESTNUM",
            "required": false,
            "persistent": false,
            "title": "Request",
            "remarks": "REQUESTNUM",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONDITIONCODE",
            "required": false,
            "persistent": true,
            "title": "Condition Code",
            "remarks": "Condition code that reflects the current physical condition of the item being issued. Click the Select Value button to choose a condition code.",
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
            "remarks": "Commodity Group",
            "sameAsAttribute": "COMMODITY",
            "sameAsObject": "COMMODITIES"
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
            "attributeName": "TOSITEID",
            "required": true,
            "persistent": true,
            "title": "Site",
            "remarks": "Site to which the item is being issued. Click the Select Value button to choose a site.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
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
            "attributeName": "HASLD",
            "required": true,
            "persistent": true,
            "title": "Has Long Description",
            "remarks": "Boolean flag to indicate if there is any long description for this record",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ITEMTYPE",
            "required": false,
            "persistent": false,
            "title": "Item Type",
            "remarks": "Item Type",
            "sameAsAttribute": "ITEMTYPE",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "SOURCEMBO",
            "required": false,
            "persistent": false,
            "title": "Source MBO",
            "remarks": "Source MBO",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
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
            "attributeName": "INVUSELINEID",
            "required": false,
            "persistent": true,
            "title": "Usage Line",
            "remarks": "The usage line identifier, which is used to relate an inventory usage line to a completed transaction.",
            "sameAsAttribute": "INVUSELINEID",
            "sameAsObject": "INVUSELINE"
        },
        {
            "attributeName": "INVUSEID",
            "required": false,
            "persistent": true,
            "title": "Usage",
            "remarks": "The inventory usage identifier, which is used to relate an inventory usage line to a completed transaction.",
            "sameAsAttribute": "INVUSEID",
            "sameAsObject": "INVUSE"
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
            "remarks": "Indicates whether the transaction was created for a consignment item. This field also indicates that the consignment transaction is included in the consignment invoice, which is sent to the vendor that supplies the inventory item.",
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
            "attributeName": "ISSUEUNIT",
            "required": false,
            "persistent": true,
            "title": "Issue Unit",
            "remarks": "Standard quantity by which the item is issued from the storeroom, such as each or roll.",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ALTITEM",
            "target": "ALTITEM",
            "remarks": "Relationship to the AltItem table, used to find the alternative items for the item issued. (altitem.itemnum = matusetrans.itemnum and altitem.itemsetid = matusetrans.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET",
            "target": "ASSET",
            "remarks": "Relationship to the Asset table, used to find the asset for which the the material is issued. (asset.assetnum = matusetrans.assetnum).The resulting set will contain one object.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ROTASSET",
            "target": "ASSET",
            "remarks": "Relationship to the Asset table, used to find the rotating asset which is issued/moved to a non-inventory location.(asset.assetnum = matusetrans.rotassetnum). The resulting set will contain zero or one object.",
            "whereClause": "assetnum=:rotassetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ROTATINGASSET",
            "target": "ASSET",
            "remarks": "Relationship to the Asset table, used to find the rotating asset which is issued/moved to a non-inventory location.(asset.assetnum = matusetrans.rotassetnum). The resulting set will contain zero or one object.",
            "whereClause": "assetnum=:rotassetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "target": "DRILLDOWN",
            "remarks": "Relationship from the MATUSETRANS to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "IMGLIB",
            "target": "IMGLIB",
            "remarks": "Relationship to the IMGLIB table, used to find the image for a given item in matusetrans. (refobject='ITEM' and refobjectid =(select itemid from item where itemnum = :itemnum and itemsetid = :itemsetid)). The resulting set will contain zero or one object.",
            "whereClause": "refobject='ITEM' and refobjectid =(select itemid from item where itemnum = :itemnum and itemsetid = :itemsetid)",
            "cardinality": null
        },
        {
            "name": "INVBALANCES_BIN",
            "target": "INVBALANCES",
            "remarks": "Relationship to the InvBalances table, used to find the balances on hand for this material issue when bin num is specified but lot num is either specified or null. (invbalances.itemnum = matusetrans.itemnum and invbalances.itemsetid = matusetrans.itemsetid  and invbalances.location = matusetrans.storeloc and invbalances.binnum=matusetrans.binnum and invbalances.itemsetid = matusetrans.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid and location = :storeloc and binnum = :binnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVBALANCES_BINLOT",
            "target": "INVBALANCES",
            "remarks": "Relationship to the InvBalances table, used to find the balances on hand for this material issue where the material being issued is a lot-tracking item and bin num and lot num are both specified. (invbalances.itemnum = matusetrans.itemnum and invbalances.location = matusetrans.storeloc and invbalances.binnum = matusetrans.binnum and invbalances.lotnum = matusetrans.lotnum and invbalances.itemsetid = matusetrans.itemsetid). The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and location = :storeloc and binnum = :binnum and lotnum = :lotnum and itemsetid = :itemsetid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVBALANCES_BINNOLOT",
            "target": "INVBALANCES",
            "remarks": "Relationship to the InvBalances table, used to find the balances on hand for this material issue where the material being issued is not a lot-tracking item and bin num is specified and lot num is null. (invbalances.itemnum = matusetrans.itemnum and invbalances.location = matusetrans.storeloc and invbalances.binnum = matusetrans.binnum and invbalances.lotnum = is null and invbalances.itemsetid = matusetrans.itemsetid). The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and location = :storeloc and binnum = :binnum and lotnum is null and itemsetid = :itemsetid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVENTORY",
            "target": "INVENTORY",
            "remarks": "Relationship to the Inventory table, used to find the inventory information for the material being issued out of the storeroom. (inventory.itemnum = matusetrans.itemnum and inventory.location = matusetrans.storeloc and inventory.itemsetid = matusetrans.itemsetid). The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and location = :storeloc and itemsetid = :itemsetid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "FROMINVENTORYSTATUS",
            "target": "INVENTORY",
            "remarks": "Relationship to the Inventory table, used to find the inventory record which contains the MatUseTtrans item number and from storeroom in a given site with the valid status. (inventory.itemnum = matusetrans.itemnum and inventory.location = matusetrans.storeloc and inventory.siteid = matusetrans.siteid and inventory.itemsetid =  matusetrans.itemsetid and status in ('ACTIVE', 'PENDOBS')). The resulting set will contain one object.",
            "whereClause": "itemnum=:itemnum and location=:storeloc and siteid=:siteid and itemsetid=:itemsetid and status in (select value from synonymdomain where domainid = 'ITEMSTATUS' and maxvalue in ('ACTIVE', 'PENDOBS') )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TOINVENTORY",
            "target": "INVENTORY",
            "remarks": "Relationship to the Inventory table, used to find the inventory record which contains the MatUseTtrans item number and destination storeroom in a given site with the valid status. (inventory.itemnum = matusetrans.itemnum and inventory.location = matusetrans.location and inventory.siteid = matusetrans.siteid and inventory.itemsetid =  matusetrans.itemsetid). The resulting set will contain one object.",
            "whereClause": "itemnum=:itemnum and location=:location and siteid=:siteid and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVLOT",
            "target": "INVLOT",
            "remarks": "Relationship to the InvLot table, used to find the lot information for the material issue. (invlot.itemnum=matusetrans.itemnum and invlot.location = matusetrans.storeloc and invlot.lotnum = matusetrans.lotnum and invlot.siteid = matusetrans.siteid and invlot.itemsetid = matusetrans.itemsetid ). The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and location = :storeloc and lotnum=:lotnum and siteid=:siteid and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVRESERVE",
            "target": "INVRESERVE",
            "remarks": "Relationship to the InvReserve table, used to find an inventory reservation record for the material issue. (invreserve.requestnum = matusetrans.requestnum). The resulting set will contain zero or one object. RequestNum is a non-persistent column for the MatUseTrans object. See the attribute defined in psdi.app.inventory.MatUseTrans for more information.",
            "whereClause": "requestnum=:requestnum and storelocsiteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVUSE",
            "target": "INVUSE",
            "remarks": "Relationship to the InvUse table, used to find the invuse records for an issue. The resulting set will contain zero or more objects.",
            "whereClause": "fromstoreloc=:storeloc and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "INVUSELINE",
            "target": "INVUSELINE",
            "remarks": "Relationship to the InvUseLine table, used to find the invuseline records for an issue. The resulting set will contain zero or more objects.",
            "whereClause": "invuselineid=:invuselineid",
            "cardinality": null
        },
        {
            "name": "ITEM",
            "target": "ITEM",
            "remarks": "Relationship to the Item table, used to find the item issued. (item.itemnum = matusetrans.itemnum and item.itemsetid = matusetrans.itemsetid ). The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid",
            "cardinality": "SINGLE"
        },
        {
            "name": "ITEMCONDITION",
            "target": "ITEMCONDITION",
            "remarks": "Relationship to the itemcondition table, used to find the itemcondition records for a given MatUseTrans record. (itemcondition.itemnum = matusetrans.itemnum and itemcondition.itemsetid=matusetrans.itemsetid and itemcondition.conditioncode=matusetrans.conditioncode). The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid and conditioncode=:conditioncode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATION",
            "target": "LOCATIONS",
            "remarks": "Relationship to the Locations table, used to find the location to which the material is issued.",
            "whereClause": "location=:location and siteid=:tositeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RETURNS",
            "target": "MATUSETRANS",
            "remarks": "Relationship to the MatUseTrans table, used to find all the material returns against this issue. (matusetrans.issueid = matusetrans.matusetransid). The resulting set will contain zero or more objects.",
            "whereClause": "issueid = :matusetransid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ISSUE",
            "target": "MATUSETRANS",
            "remarks": "Relationship to the MatUseTrans table, used to find the material issue record against which the material is returned. (matusetrans.matusetransid = matusetrans.issueid). The resulting set will contain zero or one object.",
            "whereClause": "matusetransid = :issueid and siteid=:siteid",
            "cardinality": "UNDEFINED"
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
            "remarks": "Relationship from the MATUSETRANS to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKORDER",
            "target": "WORKORDER",
            "remarks": "Relationship to the WorkOrder table, used to find the work order for which the material is issued. (workorder.wonum = matusetrans.wonum). The resulting set will contain zero or one object. WoNum is a non-persistent column for the MatUseTrans object. See the attribute defined in psdi.app.inventory.MatUseTrans for more information.",
            "whereClause": "wonum=:wonum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "MATUSETRANS",
            "source": "ASSET",
            "remarks": "Relationship to the MatUseTrans table, used to find all material use transactions for a given asset. (matusetrans.assetnum = asset.assetnum or matusetrans.rotassetnum = asset.assetnum). This resulting set will contain zero or more objects.",
            "whereClause": "(assetnum = :assetnum or rotassetnum = :assetnum) and siteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "ASSETMATUSETRANS",
            "source": "ASSET",
            "remarks": "Relationship to the MatUseTrans table used to create an empty MatUseTrans set from the matrectrans.  The WHERE clause is:  (1>2). The resulting set will contain zero objects. This relationship is primarily used to create new MatUseTrans records.",
            "whereClause": "1>2",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MATUSEINVOICE",
            "source": "INVENTORY",
            "remarks": "Relationship to the MatUseTrans table, used to find the issue and return for consignment items for a given inventory record. (matusetrans.itemnum = inventory.itemnum and matusetrans.tostoreloc = inventory.location and matusetrans.itemsetid = inventory.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and storeloc=:location and itemsetid = :itemsetid and siteid=:siteid and consignment=1 and consinvoicenum is not null",
            "cardinality": null
        },
        {
            "name": "MATUSENOINVOICE",
            "source": "INVENTORY",
            "remarks": "Relationship to the MatUseTrans table, used to find the issue and return for consignment items for a given inventory record. (matusetrans.itemnum = inventory.itemnum and matusetrans.tostoreloc = inventory.location and matusetrans.itemsetid = inventory.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and storeloc=:location and itemsetid = :itemsetid and siteid=:siteid and consignment=1 and consinvoicenum is null",
            "cardinality": null
        },
        {
            "name": "MATUSETRANS",
            "source": "INVENTORY",
            "remarks": "Relationship to the MatUseTrans table, used to find the materials issues for a given inventory record. (matusetrans.itemnum = inventory.itemnum and matusetrans.storeloc = inventory.location and matusetrans.itemsetid = inventory.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and storeloc = :location and itemsetid = :itemsetid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NONCONSMATUSETRANS",
            "source": "INVENTORY",
            "remarks": "Relationship to the MatUseTrans table, used to find the issue and return for non-consignment items for a given inventory record. The resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and storeloc=:location and itemsetid = :itemsetid and siteid=:siteid and consignment=0",
            "cardinality": null
        },
        {
            "name": "MATUSETRANS",
            "source": "INVRESERVE",
            "remarks": "Relationship to the MatuseTrans table, used to find all the material issues done against this reservation. (matusetrans.requestnum = invreserve.requestnum). The resulting set will contain zero or more objects.",
            "whereClause": "requestnum=:requestnum and siteid=:storelocsiteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MATUSETRANS",
            "source": "INVUSE",
            "remarks": "Relationship to the InvUse table, used to find all inventory ISSUE/RETURN transactions.",
            "whereClause": "issuetype in ( select value from synonymdomain where domainid ='ISSUETYP' and maxvalue in ('ISSUE', 'RETURN')) and invuseid=:invuseid",
            "cardinality": null
        },
        {
            "name": "MATUSETRANSRETURN",
            "source": "INVUSE",
            "remarks": "Relationship to the MatUseTrans table, used to find the existing material issue transactions which can be returned to a given storeroom location.The resulting set will contain zero or more objects. This relationship is primarily used for the Select Items for Returns action on the Inventory Usage tab of the Inventory Usage application.",
            "whereClause": "storeloc = :fromstoreloc and quantity < 0 and issueid is null and (qtyreturned is null OR qtyreturned < quantity * -1) and issuetype in (select value from synonymdomain where domainid='ISSUETYP' and maxvalue NOT IN ('KITBREAK','KITMAKE') ) and siteid=:siteid and (rotassetnum is null or (rotassetnum is not null and rotassetnum in (select assetnum from asset where siteid=matusetrans.tositeid and location=matusetrans.location))) and (refwo is null or (refwo is not null and refwo in (select wonum from workorder where status in (select value  from synonymdomain where domainid='WOSTATUS' and value not in ('CLOSE', 'CAN'))) ))",
            "cardinality": null
        },
        {
            "name": "MATUSETRANSFORUSELINE",
            "source": "INVUSELINE",
            "remarks": "Relationship to the MatUseTrans table, used to find the invuseline record.The resulting set will contain zero or more objects.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and storeloc=:fromstoreloc and quantity < 0 and issueid is null and (qtyreturned is null OR qtyreturned < quantity * -1) and issuetype in (select value from synonymdomain where domainid='ISSUETYP' and maxvalue NOT IN ('KITBREAK','KITMAKE') ) and siteid=:siteid and (refwo=:refwo or assetnum=:assetnum or location=:location)",
            "cardinality": null
        },
        {
            "name": "MATUSETRANS",
            "source": "LOCATIONS",
            "remarks": "Relationship to the MatUseTrans table, used to find the material issue transactions to a given non-inventory location. (locations.location =matusetrans.location). The resulting set will contain zero or more objects. Non-inventory locations are any locations other than those of types of STOREROOM, LABOR, or COURIER.",
            "whereClause": "location = :location and siteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "MATUSETRANSISSUE",
            "source": "LOCATIONS",
            "remarks": "Relationship to the MatUseTrans table, use to create an empty set of material issue transactions for a given storeroom location. (1>2). The resulting set will contain zero objects. This relationship is primarily used for the Issue tab of the Issues and Transfers application. An empty MatUseTrans set is required when the tab is initialized.",
            "whereClause": "1>2 and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MATUSETRANSRETURN",
            "source": "LOCATIONS",
            "remarks": "Relationship to the MatUseTrans table, used to find the existing material issue transactions which can be returned to a given storeroom location. ( matusetrans.storeloc = locations.location and matusetrans.issueid is null and (matusetrans.qtyreturned is null OR matusetrans.qtyreturned < matusetrans.quantity * -1) and issuetype in (select value from synonymdomain where domainid='ISSUETYP' and maxvalue NOT IN ('KITBREAK','KITMAKE')) and matusetrans.siteid=locations.siteid). The resulting set will contain zero or more objects. This relationship is primarily used for the Select Items for Returns action on the Issue tab of the Issues and Transfers application.",
            "whereClause": "storeloc = :location and quantity < 0 and issueid is null and (qtyreturned is null OR qtyreturned < quantity * -1) and issuetype in (select value from synonymdomain where domainid='ISSUETYP' and maxvalue NOT IN ('KITBREAK','KITMAKE') ) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RETURNS",
            "source": "MATUSETRANS",
            "remarks": "Relationship to the MatUseTrans table, used to find all the material returns against this issue. (matusetrans.issueid = matusetrans.matusetransid). The resulting set will contain zero or more objects.",
            "whereClause": "issueid = :matusetransid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ISSUE",
            "source": "MATUSETRANS",
            "remarks": "Relationship to the MatUseTrans table, used to find the material issue record against which the material is returned. (matusetrans.matusetransid = matusetrans.issueid). The resulting set will contain zero or one object.",
            "whereClause": "matusetransid = :issueid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MATUSETRANSFORMRLINE",
            "source": "MRLINE",
            "remarks": "Relationship to MatUseTrans table, used to find the MatUseTrans records for a given material requisition line. (mrline.mrnum = matusetrans.mrnum and mrline.mrlinenum = matusetrans.mrlinenum). The resulting set will contain zero or more objects.",
            "whereClause": "mrnum = :mrnum and mrlinenum = :mrlinenum and issuetype in (select value from synonymdomain where maxvalue in ('RETURN', 'RECEIPT') and domainid='ISSUETYP') and siteid=:siteid ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MATUSETRANS",
            "source": "WORKORDER",
            "remarks": "Relationship to the MatUseTrans table, used to find all material useage transactions for a work order. (MatUseTrans.wonum = workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "refwo=:wonum and tositeid=:siteid and linetype not in (select value from synonymdomain where domainid='LINETYPE' and maxvalue='TOOL')",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "MATUSETRANS_REPORTING",
            "source": "WORKORDER",
            "remarks": "Reporting Relationship",
            "whereClause": "tositeid=:siteid and refwo=:wonum",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "REP_ACTMAT",
            "source": "WORKORDER",
            "remarks": "Relationship that returns all actual materials for given Work Order, including the materials for the Work Order's tasks.  Used for reporting.",
            "whereClause": "(refwo=:wonum or exists (select 1 from workorder w where w.parent=:wonum and w.istask=1 and matusetrans.tositeid=w.siteid and matusetrans.refwo=w.wonum)) and matusetrans.tositeid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "SHOWACTUALMATERIAL",
            "source": "WORKORDER",
            "remarks": "Relationship to the ShowActualMetrial Set used by UI for display. This is a special MboSet used for displaying the actual material for a given workorder. (refwo in (select wonum from workorder where workorder.wonum=workorder.wonum or workorder.parent=workorder.wonum and workorder.siteid=workorder.siteid)). The resulting set will contain zero or more objects.",
            "whereClause": "refwo in (select wonum from workorder where (wonum=:wonum or (parent=:wonum and istask = :yes)) and siteid=:siteid )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ISSUEDTOOL",
            "source": "WORKORDER",
            "remarks": "Relationship to the MatUseTrans table, used to find all tool usage transactions for a work order. (MatUseTrans.wonum = workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "refwo in (select wonum from workorder where (wonum=:wonum or (parent=:wonum and istask = :yes))) and siteid=:siteid and linetype in (select value from synonymdomain where domainid='LINETYPE' and maxvalue='TOOL' ) and issuetype in (select value from synonymdomain where maxvalue in ('ISSUE') and domainid='ISSUETYP')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MATUSETRANS",
            "source": "WPMATERIAL",
            "remarks": "Relationship to the MatUseTrans table, used to find the matusetrans for a given work plan material. This resulting set will contain zero or more objects.",
            "whereClause": "refwo=:wonum and storeloc!=:location and itemnum=:itemnum and itemsetid = :itemsetid and tositeid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DIMATUSETRANS",
            "source": "WPMATERIAL",
            "remarks": "Relationship to the MatUseTrans table, used to find the matusetrans for a given work plan material. This resulting set will contain only items that are direct request.",
            "whereClause": "refwo=:wonum and itemnum=:itemnum and itemsetid = :itemsetid and tositeid=:siteid and 1=:directreq",
            "cardinality": null
        },
        {
            "name": "MATUSETRANS",
            "source": "WPTOOL",
            "remarks": "Relationship to the MatUseTrans table, used to find the matusetrans for a given work plan tool. (matusetrans.itemnum=wptool.itemnum and matusetrans.refwo=wptool.wonum and matusetrans.itemsetid = wptool.itemsetid). This resulting set will contain zero or more objects.",
            "whereClause": "refwo=:wonum and itemnum=:itemnum and itemsetid = :itemsetid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ]
}