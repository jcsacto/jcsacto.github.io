mos = {
    "objectName": "CONTRACTLINE",
    "className": "psdi.app.contract.ContractLineSet",
    "description": "Contract Line Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "CONTRACTLINEID",
    "primaryKeyColumns": [
        "CONTRACTNUM",
        "REVISIONNUM",
        "ORGID",
        "CONTRACTLINENUM"
    ],
    "logicalRelationships": [
        {
            "objectName": "CONTRACTLINE",
            "targetObject": "CONTASSETMETER",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID, CONTRACTLINENUM",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID, CONTRACTLINENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract Line",
            "longDescription": null
        },
        {
            "objectName": "CONTRACTLINE",
            "targetObject": "CONTLINEASSET",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID, CONTRACTLINENUM",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID, CONTRACTLINENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract Line",
            "longDescription": null
        },
        {
            "objectName": "CONTRACTLINE",
            "targetObject": "CONTLINEMETER",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID, CONTRACTLINENUM",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID, CONTRACTLINENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract Line",
            "longDescription": null
        },
        {
            "objectName": "CONTRACTLINE",
            "targetObject": "CONTRACTASSET",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID, CONTRACTLINENUM",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID, CONTASSETLINENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract Line",
            "longDescription": null
        },
        {
            "objectName": "CONTRACTLINE",
            "targetObject": "CONTRACTASSET",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID, CONTRACTLINENUM",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID, CONTRACTLINENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract Line",
            "longDescription": null
        },
        {
            "objectName": "CONTRACTLINE",
            "targetObject": "LEASEVIEWLINE",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID, CONTRACTLINENUM",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID, CONTRACTLINENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract Line",
            "longDescription": null
        },
        {
            "objectName": "CONTRACTLINE",
            "targetObject": "PRLINE",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID, CONTRACTLINENUM",
            "targetKeys": "CONTRACTNUM, CONTRACTREFREV, ORGID, CONTRACTLINENUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 7",
            "longDescription": null
        },
        {
            "objectName": "CONTRACTLINE",
            "targetObject": "PRLINE",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID, CONTRACTLINENUM",
            "targetKeys": "CONTRACTNUM, CONTRACTREV, ORGID, CONTRACTLINENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract line covering PR line",
            "longDescription": null
        },
        {
            "objectName": "CONTRACTLINE",
            "targetObject": "PRLINE",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID, CONTRACTLINENUM",
            "targetKeys": "CONTRACTNUM, POREVISIONNUM, ORGID, CONTRACTLINENUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 9",
            "longDescription": null
        },
        {
            "objectName": "CONTRACTLINE",
            "targetObject": "PRLINE",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID, CONTRACTLINENUM",
            "targetKeys": "CONTRACTREFNUM, CONTRACTREFREV, ORGID, CONTRACTLINENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract line covering PR line",
            "longDescription": null
        },
        {
            "objectName": "CONTRACTLINE",
            "targetObject": "PRLINE",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID, CONTRACTLINENUM",
            "targetKeys": "CONTRACTREFNUM, CONTRACTREV, ORGID, CONTRACTLINENUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 11",
            "longDescription": null
        },
        {
            "objectName": "CONTRACTLINE",
            "targetObject": "PRLINE",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID, CONTRACTLINENUM",
            "targetKeys": "CONTRACTREFNUM, POREVISIONNUM, ORGID, CONTRACTLINENUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 12",
            "longDescription": null
        },
        {
            "objectName": "CONTRACTLINE",
            "targetObject": "RFQLINE",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID, CONTRACTLINENUM",
            "targetKeys": "CONTRACTNUM, CONTRACTREV, ORGID, CONTRACTLINENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract Line",
            "longDescription": null
        },
        {
            "objectName": "CONTRACTLINE",
            "targetObject": "RFQLINE",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID, CONTRACTLINENUM",
            "targetKeys": "CONTRACTNUM, POREVISIONNUM, ORGID, CONTRACTLINENUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 14",
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
            "objectName": "CONTRACTLINE",
            "targetObject": "SCHLEASEVIEW",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID, CONTRACTLINENUM",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID, CONTRACTLINENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract Line",
            "longDescription": null
        },
        {
            "objectName": "CONTRACTLINE",
            "targetObject": "SCHLEASEVIEW",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID, CONTRACTLINENUM",
            "targetKeys": "CONTRACTNUM, SCHEDULEREV, ORGID, CONTRACTLINENUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 20",
            "longDescription": null
        },
        {
            "objectName": "CONTRACTLINE",
            "targetObject": "SCHPURCHVIEW",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID, CONTRACTLINENUM",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID, CONTRACTLINENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract Line",
            "longDescription": null
        },
        {
            "objectName": "CONTRACTLINE",
            "targetObject": "SCHPURCHVIEW",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID, CONTRACTLINENUM",
            "targetKeys": "CONTRACTNUM, SCHEDULEREV, ORGID, CONTRACTLINENUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 22",
            "longDescription": null
        },
        {
            "objectName": "CONTRACTLINE",
            "targetObject": "SCHWARRANTYVIEW",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID, CONTRACTLINENUM",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID, CONTRACTLINENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract Line",
            "longDescription": null
        },
        {
            "objectName": "CONTRACTLINE",
            "targetObject": "SCHWARRANTYVIEW",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID, CONTRACTLINENUM",
            "targetKeys": "CONTRACTNUM, SCHEDULEREV, ORGID, CONTRACTLINENUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 24",
            "longDescription": null
        },
        {
            "objectName": "CONTRACTLINE",
            "targetObject": "SFWLINE",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID, CONTRACTLINENUM",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID, CONTRACTLINENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract Line",
            "longDescription": null
        },
        {
            "objectName": "CONTRACTLINE",
            "targetObject": "WARRANTYLINE",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID, CONTRACTLINENUM",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID, CONTRACTLINENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract Line",
            "longDescription": null
        },
        {
            "objectName": "CONTRACTLINE",
            "targetObject": "WARRANTYVIEWLINE",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID, CONTRACTLINENUM",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID, CONTRACTLINENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract Line",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "COMMODITIES",
            "targetObject": "CONTRACTLINE",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITY, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "CONTRACTLINE",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITYGROUP, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity Group",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "CONTRACTLINE",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, MANUFACTURER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Manufacturer on Contract Line",
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
            "objectName": "ITEM",
            "targetObject": "CONTRACTLINE",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "ITEMCONDITION",
            "targetObject": "CONTRACTLINE",
            "parentKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "targetKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item Condition",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "CONTRACTLINE",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "CONTRACTLINE",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "CONTRACTLINE",
            "parentKeys": "PERSONID",
            "targetKeys": "ENTERBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who entered the record.",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "CONTRACTLINE",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 12",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "CONTRACTNUM",
            "required": true,
            "persistent": true,
            "title": "Contract",
            "remarks": "Unique ID number for the current contract.",
            "sameAsAttribute": "CONTRACTNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "CONTRACTLINENUM",
            "required": true,
            "persistent": true,
            "title": "Line",
            "remarks": "The number of associated with an individual contract line.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONTRACTLINEID",
            "required": true,
            "persistent": true,
            "title": "ContractLine ID",
            "remarks": "Unique identifier of every Contract Line in  the database (internal identifier).",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LINETYPE",
            "required": true,
            "persistent": true,
            "title": "Line Type",
            "remarks": "A code that indicates the type of item listed on the line. The value of line type could be Item, Material, Service, Special Order or External Catalog Item.",
            "sameAsAttribute": "LINETYPE",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "ITEMNUM",
            "required": false,
            "persistent": true,
            "title": "Item",
            "remarks": "A unique identifier for the item.",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "ITEMSETID",
            "required": false,
            "persistent": true,
            "title": "Item Set",
            "remarks": "Set identifier for the item.",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS"
        },
        {
            "attributeName": "CONDITIONCODE",
            "required": false,
            "persistent": true,
            "title": "Condition Code",
            "remarks": "A code indicating a condition for the item rotated out of service and into a storeroom.",
            "sameAsAttribute": "CONDITIONCODE",
            "sameAsObject": "ITEMCONDITION"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "A written description of the entity on the contract line.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "CATALOGCODE",
            "required": false,
            "persistent": true,
            "title": "Catalog #",
            "remarks": "A unique code for cataloging an item.",
            "sameAsAttribute": "CATALOGCODE",
            "sameAsObject": "INVENTORY"
        },
        {
            "attributeName": "MANUFACTURER",
            "required": false,
            "persistent": true,
            "title": "Manufacturer",
            "remarks": "Unique code indicating the manufacturer of the item listed on the contract line.",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "MODELNUM",
            "required": false,
            "persistent": true,
            "title": "Model",
            "remarks": "The vendor's unique identification number for an item.",
            "sameAsAttribute": "MODELNUM",
            "sameAsObject": "INVENTORY"
        },
        {
            "attributeName": "ORDERUNIT",
            "required": false,
            "persistent": true,
            "title": "Order Unit",
            "remarks": "Indicates the physical characteristics of a unit. A unit can be each, box, roll, linear feet, cubic feet, square feet etc.",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "ORDERQTY",
            "required": false,
            "persistent": true,
            "title": "Quantity",
            "remarks": "The number of an item ordered on this line.",
            "sameAsAttribute": "ORDERQTY",
            "sameAsObject": "INVENTORY"
        },
        {
            "attributeName": "UNITCOST",
            "required": false,
            "persistent": true,
            "title": "Unit Cost",
            "remarks": "The monetary value associated with an ordered unit.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LINECOST",
            "required": false,
            "persistent": true,
            "title": "Line Cost",
            "remarks": "The sum of the unit cost multiplied by the order quantity.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LINECOST2",
            "required": false,
            "persistent": true,
            "title": "Line Cost 2",
            "remarks": "Line cost in base currency 2.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INSPECTIONREQUIRED",
            "required": true,
            "persistent": true,
            "title": "Inspection Required",
            "remarks": "Indicates whether inspection of item is required upon receipt.",
            "sameAsAttribute": "INSPECTIONREQUIRED",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "ENTERBY",
            "required": true,
            "persistent": true,
            "title": "Entered By",
            "remarks": "The name of the logged in user who entered the line item.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "ENTERDATE",
            "required": true,
            "persistent": true,
            "title": "Entered Date",
            "remarks": "The on which the line item was entered.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REMARK",
            "required": false,
            "persistent": true,
            "title": "Remarks",
            "remarks": "Comments about the individual line or line item.",
            "sameAsAttribute": "REMARK",
            "sameAsObject": "PRLINE"
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
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "An attached file that allows for a longer, more in depth description of the item.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REMARK_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Remark Long Description",
            "remarks": "Long Description for the description of the remark",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NEWPRICE",
            "required": false,
            "persistent": false,
            "title": "New Line Cost",
            "remarks": "Contains the new price after the price adjustment has been applied.",
            "sameAsAttribute": "LINECOST",
            "sameAsObject": "CONTRACTLINE"
        },
        {
            "attributeName": "LINESTATUS",
            "required": true,
            "persistent": true,
            "title": "Status",
            "remarks": "Indicates the status of the Contract Line. Could be one of Draft, Approved, Cancel and Waiting for Approval.",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "COMMODITY",
            "required": false,
            "persistent": true,
            "title": "Commodity Code",
            "remarks": "A unique code indicating the type of commodity on the line.",
            "sameAsAttribute": "COMMODITY",
            "sameAsObject": "COMMODITIES"
        },
        {
            "attributeName": "COMMODITYGROUP",
            "required": false,
            "persistent": true,
            "title": "Commodity Group",
            "remarks": "The commodity group in which the line item is listed.",
            "sameAsAttribute": "COMMODITY",
            "sameAsObject": "COMMODITIES"
        },
        {
            "attributeName": "REVISIONNUM",
            "required": true,
            "persistent": true,
            "title": "Revision",
            "remarks": "Revision number of the line. This number indicates the number of times the line has been revised. A line that has been created and not revised will show a number of 0.",
            "sameAsAttribute": "REVISIONNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "REVSTATUS",
            "required": false,
            "persistent": true,
            "title": "Revision Status",
            "remarks": "Revision Status.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHGQTYONUSE",
            "required": true,
            "persistent": true,
            "title": "Change Quantity on Use",
            "remarks": "Checking this box indicates you can change the quantity on the line with contract reference.",
            "sameAsAttribute": "CHGQTYONUSE",
            "sameAsObject": "CONTRACTPURCH"
        },
        {
            "attributeName": "CHGPRICEONUSE",
            "required": true,
            "persistent": true,
            "title": "Change Price on Use",
            "remarks": "Checking this box indicates you can change the price on the line with contract reference.",
            "sameAsAttribute": "CHGPRICEONUSE",
            "sameAsObject": "CONTRACTPURCH"
        },
        {
            "attributeName": "LEADTIME",
            "required": false,
            "persistent": true,
            "title": "Delivery Time",
            "remarks": "The number of days between the order date and the delivery date.",
            "sameAsAttribute": "DELIVERYTIME",
            "sameAsObject": "INVENTORY"
        },
        {
            "attributeName": "HASPAYMENTSCHED",
            "required": true,
            "persistent": true,
            "title": "Payment Schedule",
            "remarks": "Checking this box indicates the line has a payment schedule associated with it.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "POREQUIRED",
            "required": true,
            "persistent": true,
            "title": "Requires PO",
            "remarks": "Will a PO be required for this contractline?",
            "sameAsAttribute": "POREQUIRED",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "CONTRACTTYPE",
            "required": true,
            "persistent": true,
            "title": "Contract Type",
            "remarks": "Contract type for the current contract.",
            "sameAsAttribute": "CONTRACTTYPE",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "LEASEENDVALUE",
            "required": false,
            "persistent": true,
            "title": "Lease End Value",
            "remarks": "The monetary amount required to buy the asset at the end of the lease period.",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "NEWUNITCOST",
            "required": false,
            "persistent": false,
            "title": "New Unit Cost",
            "remarks": "Non-persistent attribute used in the apply price adjustment action.",
            "sameAsAttribute": "UNITCOST",
            "sameAsObject": "CONTRACTLINE"
        },
        {
            "attributeName": "NEWORDERUNIT",
            "required": false,
            "persistent": false,
            "title": "Order Unit",
            "remarks": "Non-persistent field to hold the order unit value",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "ISSUEUNIT",
            "required": false,
            "persistent": false,
            "title": "Issue Unit",
            "remarks": "Issue Unit",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "CONVERSION",
            "required": false,
            "persistent": false,
            "title": "Conversion Factor",
            "remarks": "Conversion Factor",
            "sameAsAttribute": "CONVERSION",
            "sameAsObject": "CONVERSION"
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
            "attributeName": "PRNUM",
            "required": false,
            "persistent": false,
            "title": "PR",
            "remarks": "PR number",
            "sameAsAttribute": "PRNUM",
            "sameAsObject": "PR"
        },
        {
            "attributeName": "PRLINENUM",
            "required": false,
            "persistent": false,
            "title": "PR Line",
            "remarks": "PR line number",
            "sameAsAttribute": "PRLINENUM",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "RFQNUM",
            "required": false,
            "persistent": false,
            "title": "RFQ",
            "remarks": "RFQ number",
            "sameAsAttribute": "RFQNUM",
            "sameAsObject": "RFQ"
        },
        {
            "attributeName": "RFQLINENUM",
            "required": false,
            "persistent": false,
            "title": "RFQ Line",
            "remarks": "RFQ line number",
            "sameAsAttribute": "RFQLINENUM",
            "sameAsObject": "RFQLINE"
        },
        {
            "attributeName": "NEWORDERQTY",
            "required": false,
            "persistent": false,
            "title": "Quantity",
            "remarks": "Non-persistent field to hold the order quantity value",
            "sameAsAttribute": "ORDERQTY",
            "sameAsObject": "INVENTORY"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ASSET",
            "target": "ASSET",
            "remarks": "Relationship to the contractline table.(cotractline.itemnum=asset.itemnum and cotractline.itemsetid=asset.itemsetid)",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACT",
            "target": "CONTRACT",
            "remarks": "Relationship to the Contract table, used to find a contract record to which a contract line belongs to. (contract.contractnum = contractline.contractnum and contract.revisionnum = contractline.revisionnum and contract.orgid = contractline.orgid). The resulting set will contain one object.",
            "whereClause": "contractnum = :contractnum and revisionnum = :revisionnum and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTLINE",
            "target": "CONTSFWLIC",
            "remarks": "Relationship to the contsfwlic table (contractline.contractlineid=contsfwlic.contractlineid)",
            "whereClause": "contractlineid = :contractlineid",
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
            "name": "ITEM",
            "target": "ITEM",
            "remarks": "Relationship to the Item table, used to find the item records for a given contract line. (item.itemnum = contractline.itemnum and item.itemsetid = contractline.itemsetid). The resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMCONDITION",
            "target": "ITEMCONDITION",
            "remarks": "Relationship to the itemcondition table, used to find the itemcondition records for a given contract line record. (itemcondition.itemnum = contractline.itemnum and itemcondition.itemsetid=contractline.itemsetid and itemcondition.conditioncode=contractlinel.conditioncode). The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid and conditioncode=:conditioncode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMORGINFOSTATUS",
            "target": "ITEMORGINFO",
            "remarks": "Relationship to the ItemOrgInfo table, used to find the itemorg record for contractline item with valid status. (itemorginfo.itemnum=contractline.itemnum and itemorginfo.itemsetid=contractline.itemsetid and itemorginfo.orgid=:contractline.orgid and itemorginfo.status in ('ACTIVE', 'PLANNING', 'PENDOBS')). This relationship will find zero or one object. ",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and orgid=:orgid and status in (select value from synonymdomain where domainid = 'ITEMSTATUS' and maxvalue in ('ACTIVE', 'PLANNING', 'PENDOBS') )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRLINE",
            "target": "PRLINE",
            "remarks": "Relationship to the PRLine table, used to find all pr lines for a given contract line. (contractline.contractlineid = prline.contractlineid and contractline.orgid = prline.orgid). The resulting set will contain zero or one object.",
            "whereClause": "contractlineid=:contractlineid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RFQLINE",
            "target": "RFQLINE",
            "remarks": "Relationship to the RFQLine table, used to find all rfq lines for a given contract line. (contractline.contractlineid = rfqline.contractlineid and contractline.orgid = rfqline.orgid). The resulting set will contain zero or one object.",
            "whereClause": "contractlineid=:contractlineid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SCHEDULE",
            "target": "SCHEDULE",
            "remarks": "Relationship to the Schedule table, used to find schedule records for a given contract line. (schedule.contractlineid=contractline.contractlineid and schedule.orgid = contractline.orgid). The resulting set will contain zero or one object.",
            "whereClause": "contractlineid=:contractlineid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SCHPURCHVIEW",
            "target": "SCHPURCHVIEW",
            "remarks": null,
            "whereClause": "contractlineid = :contractlineid and orgid= :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SFWLICENSE",
            "target": "SFWLICENSE",
            "remarks": "Relationship to the sfwlicense table for sfwlicenseid associated with a contract line.",
            "whereClause": "sfwlicenseid in (select sfwlicenseid from contsfwlic where contractlineid=:contractlineid)",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "CONTRACTLINE",
            "source": "CONTRACT",
            "remarks": "Relationship to the ContractLine table, used to find contract line records for a given contract. (contractline.contractnum = contract.contractnum and contractline.revisionnum = contract.revisionnum and contractline.orgid = contract.orgid). The resulting set will contain zero or one object.",
            "whereClause": "contractnum = :contractnum and revisionnum = :revisionnum and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTLINE",
            "source": "INVENTORY",
            "remarks": "Relationship from INVENTORY to the CONTRACTLINE table.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTREFLINE",
            "source": "INVOICE",
            "remarks": "Relationship  to the CONTRACTLINE table, used to find all contract line records for a given purchase. (contractlineid in (select contreflineid from poline where ponum=po.ponum and siteid=po.siteid)). The resulting set  will contain zero or more objects.",
            "whereClause": "contractlineid in (select contreflineid from invoiceline where ponum=:ponum and siteid=:siteid)",
            "cardinality": null
        },
        {
            "name": "CONTRACTREFLINE",
            "source": "INVOICELINE",
            "remarks": "Relationship to the ContractLine table, used to find a contract line record for a given invoice line contract reference id. (contractline.contractlineid = invoiceline.contreflineid and contractline.orgid = invoiceline.orgid. The resulting set will contain one object.",
            "whereClause": "contractlineid = :contreflineid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTLINE",
            "source": "ITEM",
            "remarks": "Relationship from ITEM to the CONTRACTLINE table.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTLINE_NOHIST",
            "source": "ITEM",
            "remarks": "Relationship to CONTRACTLINE, used to find all non-historical contract line records for this item. The WHERE clause is: contractline.itemnum = item.itemnum and exists (select 1 from contract where contract.contractnum=contractline.contractnum and contract.historyflag=:no) and contractline.itemsetid = item.itemsetid. The resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and exists (select 1 from contract where contract.contractnum=contractline.contractnum and contract.historyflag=:no) and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTLINE",
            "source": "ITEMORGINFO",
            "remarks": "Relationship from ITEMORGINFO to the CONTRACTLINE table.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTLINE",
            "source": "LEASEVIEW",
            "remarks": "Relationship to the ContractLine table, used to find all contract lines for a given contract. (leaseview.contractnum=contractline.contractnum and leaseview.orgid=contractline.orgid) .",
            "whereClause": "contractnum=:contractnum and revisionnum = :revisionnum and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTREFLINEVIEW",
            "source": "MATRECTRANS",
            "remarks": "Relationship to the InvoiceLine table, used to find all invoice line records for a given purchase order line. (invoiceline.ponum = poline.ponum and invoiceline.siteid = poline.siteid and  invoiceline.polinenum = poline.polinenum). The resulting set will contain zero or more objects.",
            "whereClause": "contractlineid in (select contreflineid from poline where polinenum = :polinenum and ponum = :ponum and siteid = :positeid)",
            "cardinality": null
        },
        {
            "name": "CONTRACTLINE",
            "source": "MEASUREUNIT",
            "remarks": "Relationship to the contractline table, used to find all non-historical contractline records using this measureunit. (contractline.orderunit=measureunit.measureunitid and exists (select 1 from contract where contract.contractnum=contractline.contractnum and contract.historyflag = :no)  This relationship will find zero or more objects.",
            "whereClause": "orderunit=:measureunitid and exists (select 1 from contract where contract.contractnum=contractline.contractnum and contract.historyflag = :no)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTREFLINE",
            "source": "PO",
            "remarks": "Relationship to the CONTRACTLINE table, used to find all contract line records for a given purchase. (contractlineid in (select contreflineid from poline where ponum=po.ponum and siteid=po.siteid)). The resulting set will contain zero or more objects.",
            "whereClause": "contractlineid in (select contreflineid from poline where ponum=:ponum and siteid=:siteid)",
            "cardinality": null
        },
        {
            "name": "CONTRACTREFLINEVIEW",
            "source": "PO",
            "remarks": "Relationship  to the CONTRACTLINE table, used to find all contract line records for a given purchase. (contractlineid in (select contreflineid from poline where ponum=po.ponum and siteid=po.siteid)). The resulting set  will contain zero or more objects.",
            "whereClause": "contractlineid in (select contreflineid from poline where (polinenum in (select polinenum from matrectrans where ponum=:ponum and positeid=:siteid) and ponum = :ponum and siteid = :siteid) or (polinenum in (select polinenum from servrectrans where ponum=:ponum and positeid=:siteid) and ponum = :ponum and siteid = :siteid))",
            "cardinality": null
        },
        {
            "name": "CONTRACTREFLINE",
            "source": "POLINE",
            "remarks": "Relationship to the ContractLine table, used to find a contract line record for a given purchase order line contract reference id. (contractline.contractlineid = poline.contreflineid and contractline.orgid = poline.orgid",
            "whereClause": "contractlineid = :contreflineid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTREFLINE",
            "source": "PR",
            "remarks": "Relationship to the CONTRACTLINE line table, used to find all CONTRACTLINE line records for a given purchase requisition. (contractlineid in (select contreflineid from prline where prnum=:prnum and siteid=:siteid)). The resulting set will contain zero or more objects.",
            "whereClause": "contractlineid in (select contreflineid from prline where prnum=:prnum and siteid=:siteid)",
            "cardinality": null
        },
        {
            "name": "CONTRACTREFLINE",
            "source": "PRLINE",
            "remarks": "Relationship to the ContractLine table, used to find a contract line record for a given purchase requisition line contract reference id. (contractline.contractlineid = prline.contreflineid and contractline.orgid = prline.orgid",
            "whereClause": "contractlineid = :contreflineid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NONCANCELEDCONRACTLINE",
            "source": "PURCHVIEW",
            "remarks": "Relationship to the ContractLine table, used to find all ContractLines that dont have a linestatus of cenceled. The resulting set might contain one or more objects.",
            "whereClause": "contractnum=:contractnum and revisionnum=:revisionnum and orgid=:orgid and linestatus not in (select value from synonymdomain where domainid ='CONTRACTSTATUS' and maxvalue='CAN')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTLINE",
            "source": "PURCHVIEW",
            "remarks": "Relationship to the ContractLine table, used to find all contract lines for a given contract. (purchview.contractnum=contractline.contractnum and purchview.orgid=contractline.orgid)",
            "whereClause": "contractnum=:contractnum and revisionnum = :revisionnum and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REVISIONLINE",
            "source": "PURCHVIEW",
            "remarks": "Relationship to the ContractLine table used to find all ContractLines for a given Purchase Contract",
            "whereClause": "contractnum=:contractnum and revisionnum in (:revisionnum, (select max(revisionnum) from contractline where contractnum=:contractnum and revisionnum < :revisionnum)) and contractlinenum in (select contractlinenum from contractline where contractnum=:contractnum and revstatus in (select value from synonymdomain where domainid='REVSTATUS' and maxvalue in ('ADDED','CHANGED'))  and revisionnum = :revisionnum)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "APPRCONTRACTLINE",
            "source": "PURCHVIEW",
            "remarks": "Relationship to the ContractLine table, used to find approved contract line records for a given contract. (contractline.contractnum = contract.contractnum and contractline.revisionnum = contract.revisionnum and contractline.orgid = contract.orgid). The resulting set will contain zero or more objects.",
            "whereClause": "contractnum=:contractnum and revisionnum = :revisionnum and orgid=:orgid and linestatus in (select value from synonymdomain where domainid='CONTRACTSTATUS' and maxvalue='APPR')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTLINE",
            "source": "SCHPURCHVIEW",
            "remarks": null,
            "whereClause": "contractlineid = :contractlineid and orgid= :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTREFLINEVIEW",
            "source": "SERVRECTRANS",
            "remarks": "Relationship to the InvoiceLine table, used to find all invoice line records for a given purchase order line. (invoiceline.ponum = poline.ponum and invoiceline.siteid = poline.siteid and  invoiceline.polinenum = poline.polinenum). The resulting set will contain zero or more objects.",
            "whereClause": "contractlineid in (select contreflineid from poline where polinenum = :polinenum and ponum = :ponum and siteid = :positeid)",
            "cardinality": null
        },
        {
            "name": "CONTRACTLINE",
            "source": "SFWVIEW",
            "remarks": "Relationship to the ContractLine table, used to find all contract lines for a given contract. (sfwview.contractnum=contractline.contractnum and sfwview.revisionnum=contractline.revisionnum and sfwview.orgid=contractline.orgid)",
            "whereClause": "contractnum = :contractnum and revisionnum =:revisionnum and orgid =:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WPCONTRACTLINE_NOHIST",
            "source": "WORKORDER",
            "remarks": "Relationship to CONTRACTLINE, used to find all non-historical contract line records for this item. The WHERE clause is: contractline.itemnum = item.itemnum and exists (select 1 from contract where contract.contractnum=contractline.contractnum and contract.historyflag=:no) and contractline.itemsetid = item.itemsetid. The resulting set will contain zero or more objects.",
            "whereClause": "itemnum in (select itemnum from wpitem where wonum=:wonum and itemsetid=contractline.itemsetid)  and exists (select 1 from contract where contract.contractnum=contractline.contractnum and contract.historyflag=0)",
            "cardinality": null
        },
        {
            "name": "WPCONTRACTLINE_NOHIST_ALL",
            "source": "WORKORDER",
            "remarks": "Relationship to CONTRACTLINE, used to find all non-historical contract line records for this item. The WHERE clause is: contractline.itemnum = item.itemnum and exists (select 1 from contract where contract.contractnum=contractline.contractnum and contract.historyflag=:no) and contractline.itemsetid = item.itemsetid. The resulting set will contain zero or more objects.",
            "whereClause": "itemnum in (select itemnum from wpitem where wonum=:wonum and itemsetid=contractline.itemsetid)  and exists (select 1 from contract where contract.contractnum=contractline.contractnum and contract.historyflag=:no)",
            "cardinality": null
        }
    ]
}