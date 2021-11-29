mos = {
    "objectName": "MR",
    "className": "psdi.app.mr.MRSet",
    "description": "Material Request",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "MRID",
    "primaryKeyColumns": [
        "SITEID",
        "MRNUM"
    ],
    "logicalRelationships": [
        {
            "objectName": "MR",
            "targetObject": "INVRESERVE",
            "parentKeys": "SITEID, MRNUM",
            "targetKeys": "SITEID, MRNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Material Request Inventory Reservations",
            "longDescription": null
        },
        {
            "objectName": "MR",
            "targetObject": "INVRESERVE",
            "parentKeys": "SITEID, MRNUM",
            "targetKeys": "STORELOCSITEID, MRNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 2",
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
            "objectName": "MR",
            "targetObject": "MRCOST",
            "parentKeys": "SITEID, MRNUM",
            "targetKeys": "SITEID, MRNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Material Request",
            "longDescription": null
        },
        {
            "objectName": "MR",
            "targetObject": "MRLINE",
            "parentKeys": "SITEID, MRNUM",
            "targetKeys": "SITEID, MRNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Material Request",
            "longDescription": null
        },
        {
            "objectName": "MR",
            "targetObject": "MRLINE",
            "parentKeys": "SITEID, MRNUM",
            "targetKeys": "STORELOCSITE, MRNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 14",
            "longDescription": null
        },
        {
            "objectName": "MR",
            "targetObject": "MRSTATUS",
            "parentKeys": "SITEID, MRNUM",
            "targetKeys": "SITEID, MRNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Status History",
            "longDescription": null
        },
        {
            "objectName": "MR",
            "targetObject": "POLINE",
            "parentKeys": "SITEID, MRNUM",
            "targetKeys": "SITEID, MRNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Material Request",
            "longDescription": null
        },
        {
            "objectName": "MR",
            "targetObject": "POLINE",
            "parentKeys": "SITEID, MRNUM",
            "targetKeys": "TOSITEID, MRNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 17",
            "longDescription": null
        },
        {
            "objectName": "MR",
            "targetObject": "PRLINE",
            "parentKeys": "SITEID, MRNUM",
            "targetKeys": "POSITEID, MRNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 18",
            "longDescription": null
        },
        {
            "objectName": "MR",
            "targetObject": "PRLINE",
            "parentKeys": "SITEID, MRNUM",
            "targetKeys": "SITEID, MRNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MR Line for PR Line",
            "longDescription": null
        },
        {
            "objectName": "MR",
            "targetObject": "REORDERMUTEX",
            "parentKeys": "SITEID, MRNUM",
            "targetKeys": "SITEID, MRNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 20",
            "longDescription": null
        },
        {
            "objectName": "MR",
            "targetObject": "REORDERPAD",
            "parentKeys": "SITEID, MRNUM",
            "targetKeys": "SITEID, MRNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 21",
            "longDescription": null
        },
        {
            "objectName": "MR",
            "targetObject": "REORDERPAD",
            "parentKeys": "SITEID, MRNUM",
            "targetKeys": "STORELOCSITE, MRNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 22",
            "longDescription": null
        },
        {
            "objectName": "MR",
            "targetObject": "RFQLINE",
            "parentKeys": "SITEID, MRNUM",
            "targetKeys": "SITEID, MRNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Material Request",
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
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "ADDRESS",
            "targetObject": "MR",
            "parentKeys": "ORGID, ADDRESSCODE",
            "targetKeys": "ORGID, SHIPTO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Ship To Address",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "MR",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 88",
            "longDescription": null
        },
        {
            "objectName": "FINCNTRL",
            "targetObject": "MR",
            "parentKeys": "ORGID, FINCNTRLID",
            "targetKeys": "ORGID, FINCNTRLID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Financial Control",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "MR",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "MR",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "MR",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MR",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MR",
            "parentKeys": "PERSONID",
            "targetKeys": "ENTERBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who entered the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MR",
            "parentKeys": "PERSONID",
            "targetKeys": "REQUESTEDBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Requested By",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MR",
            "parentKeys": "PERSONID",
            "targetKeys": "REQUESTEDFOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Requested For",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "MR",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
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
        }
    ],
    "columns": [
        {
            "attributeName": "MRNUM",
            "required": true,
            "persistent": true,
            "title": "Requisition",
            "remarks": "Identifies the requisition. This number must be unique for all requisition records.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TYPE",
            "required": true,
            "persistent": true,
            "title": "MR Type",
            "remarks": "Material request type",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the material request. To enter or view additional information, click the Long Description button.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "PR"
        },
        {
            "attributeName": "STATUS",
            "required": true,
            "persistent": true,
            "title": "Status",
            "remarks": "Status of Request",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUSDATE",
            "required": true,
            "persistent": true,
            "title": "Status Date",
            "remarks": "Status Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "Change date of request",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEBY",
            "required": true,
            "persistent": true,
            "title": "Changed By",
            "remarks": "Request changed by",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "PRIORITY",
            "required": true,
            "persistent": true,
            "title": "Priority",
            "remarks": "Priority of the requisition. We recommend that you limit your range of values from 0 to 9, where 0 designates the lowest priority. The default value is 0.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REQUESTEDBY",
            "required": false,
            "persistent": true,
            "title": "Requested By",
            "remarks": "Person who requested the material. The default value is the current login ID.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "PHONE",
            "required": false,
            "persistent": true,
            "title": "Phone",
            "remarks": "Phone number of the requestor",
            "sameAsAttribute": "PHONENUM",
            "sameAsObject": "PHONE"
        },
        {
            "attributeName": "MRDATE",
            "required": true,
            "persistent": true,
            "title": "Requested Date",
            "remarks": "Date of request",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REQUIREDDATE",
            "required": false,
            "persistent": true,
            "title": "Required Date",
            "remarks": "Date the material is required by.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SHIPTO",
            "required": false,
            "persistent": true,
            "title": "Ship to",
            "remarks": "Location code where the items should be shipped.",
            "sameAsAttribute": "ADDRESSCODE",
            "sameAsObject": "ADDRESS"
        },
        {
            "attributeName": "DROPPOINT",
            "required": false,
            "persistent": true,
            "title": "Drop Point",
            "remarks": "Delivery point at the ship-to address for delivery of the items. For example, loading dock.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOTALCOST",
            "required": true,
            "persistent": true,
            "title": "Total Cost",
            "remarks": "Total cost of the MR",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WONUM",
            "required": false,
            "persistent": true,
            "title": "Work Order",
            "remarks": "Identifies the work order for the item.",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": true,
            "title": "Asset",
            "remarks": "Identifies the asset that the item is for.",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": true,
            "title": "Location",
            "remarks": "Location where the item will be used.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "GLDEBITACCT",
            "required": false,
            "persistent": true,
            "title": "GL Debit Account",
            "remarks": "Account code for the general ledger account that will be charged the cost of the line item.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HISTORYFLAG",
            "required": true,
            "persistent": true,
            "title": "History",
            "remarks": "History Flag to identify closed MR's",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENTERDATE",
            "required": true,
            "persistent": true,
            "title": "Entered Date",
            "remarks": "MR's date of entry",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENTERBY",
            "required": true,
            "persistent": true,
            "title": "Entered By",
            "remarks": "MR entered by",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "MRSTATUSSEQ",
            "required": false,
            "persistent": true,
            "title": "MR Status Sequence",
            "remarks": "MR Status Sequence",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MR1",
            "required": false,
            "persistent": true,
            "title": "MR1",
            "remarks": "MR Extra Field 1",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MR2",
            "required": false,
            "persistent": true,
            "title": "MR2",
            "remarks": "MR Extra Field 2",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MR3",
            "required": false,
            "persistent": true,
            "title": "MR3",
            "remarks": "MR Extra Field 3",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MR4",
            "required": false,
            "persistent": true,
            "title": "MR4",
            "remarks": "MR Extra Field 4",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MR5",
            "required": false,
            "persistent": true,
            "title": "MR5",
            "remarks": "MR Extra Field 5",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MR6",
            "required": false,
            "persistent": true,
            "title": "MR6",
            "remarks": "MR Extra Field 6",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MR7",
            "required": false,
            "persistent": true,
            "title": "MR7",
            "remarks": "MR Extra Field 7",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MR8",
            "required": false,
            "persistent": true,
            "title": "MR8",
            "remarks": "MR Extra Field 8",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MR9",
            "required": false,
            "persistent": true,
            "title": "MR9",
            "remarks": "MR Extra Field 9",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MR10",
            "required": false,
            "persistent": true,
            "title": "MR10",
            "remarks": "MR Extra Field 10",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MRLA1",
            "required": false,
            "persistent": true,
            "title": "MRLA1",
            "remarks": "Extra Crossover Field Crosses over to PR.PRLA1 or PO.POLA1",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MRLA2",
            "required": false,
            "persistent": true,
            "title": "MRLA2",
            "remarks": "Extra Crossover Field Crosses over to PR.PRLA2 or PO.POLA2",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MRLA3",
            "required": false,
            "persistent": true,
            "title": "MRLA3",
            "remarks": "Extra Crossover Field Crosses over to PR.PRLA3 or PO.POLA3",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MRLA4",
            "required": false,
            "persistent": true,
            "title": "MRLA4",
            "remarks": "Extra Crossover Field Crosses over to PR.PRLA4 or PO.POLA4",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MRLA5",
            "required": false,
            "persistent": true,
            "title": "MRLA5",
            "remarks": "Extra Crossover Field Crosses over to PR.PRLA5 or PO.POLA5",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PCARDNUM",
            "required": false,
            "persistent": true,
            "title": "Card #",
            "remarks": "Procurement card number.",
            "sameAsAttribute": "PCARDNUM",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "PCARDTYPE",
            "required": false,
            "persistent": true,
            "title": "Card Type",
            "remarks": "Procurement card type.",
            "sameAsAttribute": "PCARDTYPE",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "PCARDEXPDATE",
            "required": false,
            "persistent": true,
            "title": "Expiration Date",
            "remarks": "Procurement card expiration date.",
            "sameAsAttribute": "PCARDEXPDATE",
            "sameAsObject": "PERSON"
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
            "attributeName": "PCARDVERIFICATION",
            "required": false,
            "persistent": true,
            "title": "Card Verification Value",
            "remarks": "Procurement card verification value.",
            "sameAsAttribute": "PCARDVERIFICATION",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "BASETOTALCOST",
            "required": false,
            "persistent": true,
            "title": "Base Total Cost",
            "remarks": "Total cost of the Material Request in base currency1.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BASETOTALCOST2",
            "required": false,
            "persistent": true,
            "title": "Base Total Cost 2",
            "remarks": "Total cost of the Material Request in base currency2.",
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
            "remarks": "Long Description for Description of Request",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CURRENCYCODE",
            "required": false,
            "persistent": false,
            "title": "Currency",
            "remarks": "CURRENCYCODE",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TRANSTYPE",
            "required": false,
            "persistent": false,
            "title": "Transaction Type",
            "remarks": "TRANSTYPE",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MRID",
            "required": true,
            "persistent": true,
            "title": "MRID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "REQUESTEDFOR",
            "required": false,
            "persistent": true,
            "title": "Requested For",
            "remarks": "Person who the material was requested for.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "MRTMPLTNUM",
            "required": false,
            "persistent": false,
            "title": "Template",
            "remarks": "Material request template used to create this requisition.",
            "sameAsAttribute": "MRNUM",
            "sameAsObject": "MR"
        },
        {
            "attributeName": "DESCRIPTION_TMPLT",
            "required": false,
            "persistent": false,
            "title": "Template Description",
            "remarks": "Describes the template.",
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
            "name": "ADDRESS",
            "target": "ADDRESS",
            "remarks": "Relationship to the Address table , used to find all ship to records for a given material requisition. (address.addresscode = mr.shipto). The resulting set will contain zero or more objects.",
            "whereClause": "addresscode = :shipto and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET",
            "target": "ASSET",
            "remarks": "Relationship to the Asset table, used to find all asset records whose asset number match that of the material requisition's. (asset.assetnum = mr.assetnum). The resulting set will contain zero or more objects.",
            "whereClause": "assetnum = :assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LINEARASSET",
            "target": "ASSET",
            "remarks": "Relationship to the Asset table, used to find this MR's linear Asset. (mr.assetnum=asset.assetnum and mr.siteid=asset.siteid). The resulting set will contain one object.",
            "whereClause": "assetnum = :assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MR_ASSET",
            "target": "ASSET",
            "remarks": null,
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MR_SHIPTO",
            "target": "COMPANIES",
            "remarks": null,
            "whereClause": "company=:shipto and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTREF",
            "target": "CONTRACT",
            "remarks": "Relationship to the Contract table, used to find a contract record for a given material requisition contract reference number (contract.contractid = mr.contractrefid and contract.orgid = mr.orgid). The resulting set will contain zero or one object.",
            "whereClause": "contractid = :contractrefid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "target": "DRILLDOWN",
            "remarks": "Relationship from the MR to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVRESERVE",
            "target": "INVRESERVE",
            "remarks": "Relationship to the Invreserve table, used to find all invreserve records whose mrnum match that of the material requisition's. (invreserve.mrnum = mr.mrnum). The resulting set will contain zero or more objects.",
            "whereClause": "mrnum = :mrnum and siteid=:siteid",
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
            "name": "LABOR",
            "target": "LABOR",
            "remarks": "Relationship to the Labor table, used to find all requestedby records for a given material requisition. (labor.laborcode = mr.requestedby). The resulting set will contain zero or more objects.",
            "whereClause": "laborcode = :requestedby and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MR_REQUESTEDBY",
            "target": "LABOR",
            "remarks": null,
            "whereClause": "laborcode =:requestedby and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MR_LOCATIONS",
            "target": "LOCATIONS",
            "remarks": null,
            "whereClause": "location=:location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONS",
            "target": "LOCATIONS",
            "remarks": "Relationship to the Locations table, used to find all locations records for a given material requisition. (locations.location = mr.location). The resulting set will contain zero or more objects.",
            "whereClause": "location = :location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MRNEW",
            "target": "MR",
            "remarks": null,
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MRCHANGESTATUS",
            "target": "MRCHANGESTATUS",
            "remarks": "Relationship to the non-persistent MRChangeStatus table. (No where clause). The resulting set will contain zero objects. Note: This relationship is used only for the Change Status action page to change the status of a given purchase order.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MRLINE",
            "target": "MRLINE",
            "remarks": "Relationship to the MRLine table, used to find all mrline records for a given material requisition. (mrline.mrnum = mr.mrnum). The resulting set will contain zero or more objects.",
            "whereClause": "mrnum = :mrnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MRSTATUS",
            "target": "MRSTATUS",
            "remarks": "Relationship to the MRStatus table, used to find mrstatus records for a given material requisition. (mrstatus.mrnum = mr.mrnum). The resulting set will contain one or more objects.",
            "whereClause": "mrnum = :mrnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MRTEMPLATE",
            "target": "MRTEMPLATE",
            "remarks": null,
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MRLINESPECCLASS",
            "target": "PDSPEC",
            "remarks": "Relationship to the pdspec table, used to find the pdspec records for a given mr (pdownerid=:mrid and refobjectname=''MRLINE''). The resulting set will contain zero or more objects.",
            "whereClause": "pdownerid=:mrid and refobjectname='MRLINE'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PO",
            "target": "PO",
            "remarks": "Relationship to the PO table, used to find all the po records which were created from this material requisition. (ponum in (select ponum from poline where mrnum = mr.mrnum). The resulting set will contain zero or more objects. Note: Approval of a material requisition creates one or more purchase orders and this relationship is used to find all such purchase orders.",
            "whereClause": "ponum in (select ponum from poline where mrnum = :mrnum ) and revisionnum in (select revisionnum from poline where mrnum = :mrnum) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POLINE",
            "target": "POLINE",
            "remarks": "Relationship to the POLine table, used to find the poline records whose receipts are not yet complete, for a given material requisition. (receiptscomplete = no). The resulting set will contain zero or more objects.  Note: Approval of a material requisition creates a purchase order and this relationship is used to find all such purchase order lines that are yet to be received.",
            "whereClause": "receiptscomplete = :no and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PR",
            "target": "PR",
            "remarks": "Relationship to the PR table, used to find all the pr records which were created from this material requisition. (prnum in (select prnum from prline where mrnum = mr.mrnum). The resulting set will contain zero or more objects. Note: Approval of a material requisition creates one or more purchase requisitions and this relationship is used to find all such purchase requisitions.",
            "whereClause": "prnum in (select prnum from prline  where mrnum = :mrnum) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RFQ",
            "target": "RFQ",
            "remarks": "Relationship to the RFQ table, used to find the rfq records which have been created from the purchase requisition. (rfqnum in (select rfqnum from rfqline where mrnum = mr.mrnum). The resulting set will contain zero or more objects.  Note: The approval of material requisition creates one or more purchase requisitions. A Request for Quotation may be created from a purchase requisition if desired and this relationship is used to find all such RFQs.",
            "whereClause": "rfqnum in (select rfqnum from rfqline where mrnum = :mrnum) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SITE",
            "target": "SITE",
            "remarks": "Relationship to the Site table, used to find site records whose orgid and siteid match that of the material requisition's. (site.siteid = mr.siteid and site.orgid = mr.orgid). The resulting set will contain zero or one object.",
            "whereClause": "siteid = :siteid and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STATUSDESC",
            "target": "SYNONYMDOMAIN",
            "remarks": "Relationship to synonymdomain table, used to find description for the status, it will contain one object.",
            "whereClause": "domainid='MRSTATUS' and value=:status and :&DOMAINFILTER&_STATUS",
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
            "remarks": "Relationship from the MR to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFASSIGNMENT",
            "target": "WFASSIGNMENT",
            "remarks": "Relationship to active assignments on this MR. (ownertable = 'MR' and ownerid = :mrid and assignstatus in (select value from synonymdomain where domainid='WFASGNSTATUS' and maxvalue='ACTIVE')) Zero to many member set.",
            "whereClause": "ownertable = 'MR' and wfassignment.ownerid = :mrid and assignstatus in (select value from synonymdomain where domainid='WFASGNSTATUS' and maxvalue='ACTIVE')",
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
            "remarks": "Relationship to workflow transactions on this MR. (ownertable = 'MR' and ownerid = :mrid) Zero to many member set.",
            "whereClause": "ownertable = 'MR' and ownerid = :mrid",
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
            "name": "WORKORDER",
            "target": "WORKORDER",
            "remarks": "Relationship to the WorkOrder table, used to find the workorder records for a given material requisition. (workorder.wonum = mr.wonum). The resulting set will contain zero or more objects.",
            "whereClause": "wonum = :wonum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MR_WORKORDER",
            "target": "WORKORDER",
            "remarks": null,
            "whereClause": "wonum=:wonum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "OPERLOCMR",
            "source": "LOCATIONS",
            "remarks": "Relationship to the MR table, used to find the MRs for the operating location. The resulting set will contain one or more objects.",
            "whereClause": "location = :location and siteid=:siteid and historyflag = :no",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MRNEW",
            "source": "MR",
            "remarks": null,
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MR",
            "source": "MRLINE",
            "remarks": "Relationship to the MR table, used to find the mr records to which a material requisition line belongs to. (mr.mrnum = mrline.mrnum). The resulting set will contain zero or more objects.",
            "whereClause": "mrnum = :mrnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MR",
            "source": "POLINE",
            "remarks": "Relationship to the MatRecTrans table, used to find the child MatRecTrans records when the PO of this header receipt has cost distribution. (matrectrans.belongsto = matrectrans.matrectransid). The resulting set will contain zero or more objects.",
            "whereClause": "mrnum = :mrnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MR",
            "source": "WORKORDER",
            "remarks": "Relationship to the MR table, used to find all material requests for a work order. (mr.wonum = workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "wonum=:wonum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ]
}