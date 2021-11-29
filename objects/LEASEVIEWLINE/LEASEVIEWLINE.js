mos = {
    "objectName": "LEASEVIEWLINE",
    "className": "psdi.app.contract.lease.LeaseViewLineSet",
    "description": "A View of the Contract Line table",
    "longDescription": null,
    "isView": true,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [
        "CONTRACTNUM",
        "REVISIONNUM",
        "ORGID",
        "CONTRACTLINENUM"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "COMMODITIES",
            "targetObject": "LEASEVIEWLINE",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITY, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "LEASEVIEWLINE",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITYGROUP, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity Group",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "LEASEVIEWLINE",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, MANUFACTURER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Manufacturer on Lease Contract Line",
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
            "objectName": "ITEM",
            "targetObject": "LEASEVIEWLINE",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "ITEMCONDITION",
            "targetObject": "LEASEVIEWLINE",
            "parentKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "targetKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item Condition",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "LEASEVIEWLINE",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "LEASEVIEWLINE",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "LEASEVIEWLINE",
            "parentKeys": "PERSONID",
            "targetKeys": "ENTERBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who entered the record.",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "LEASEVIEWLINE",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 41",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "CONTRACTNUM",
            "required": true,
            "persistent": true,
            "title": "Contract",
            "remarks": "Contract Number.",
            "sameAsAttribute": "CONTRACTNUM",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "CONTRACTNUM",
            "tableName": "CONTRACTLINE",
            "tableColumnName": "CONTRACTNUM"
        },
        {
            "attributeName": "CONTRACTLINENUM",
            "required": true,
            "persistent": true,
            "title": "Contract Line",
            "remarks": "Line Number of each Contract Line",
            "sameAsAttribute": "CONTRACTLINENUM",
            "sameAsObject": "CONTRACTLINE",
            "viewColumnName": "CONTRACTLINENUM",
            "tableName": "CONTRACTLINE",
            "tableColumnName": "CONTRACTLINENUM"
        },
        {
            "attributeName": "CONTRACTLINEID",
            "required": true,
            "persistent": true,
            "title": "ContractLine ID",
            "remarks": "Unique identifier of every Contract Line in  the database (internal identifier).",
            "sameAsAttribute": "CONTRACTLINEID",
            "sameAsObject": "CONTRACTLINE",
            "viewColumnName": "CONTRACTLINEID",
            "tableName": "CONTRACTLINE",
            "tableColumnName": "CONTRACTLINEID"
        },
        {
            "attributeName": "LINETYPE",
            "required": true,
            "persistent": true,
            "title": "Line Type",
            "remarks": "Valid line types include Item, Material, Service, Special Order or External Catalog Item.",
            "sameAsAttribute": "LINETYPE",
            "sameAsObject": "PRLINE",
            "viewColumnName": "LINETYPE",
            "tableName": "CONTRACTLINE",
            "tableColumnName": "LINETYPE"
        },
        {
            "attributeName": "ITEMNUM",
            "required": false,
            "persistent": true,
            "title": "Item",
            "remarks": "Unique identifier for the item listed on the line.",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM",
            "viewColumnName": "ITEMNUM",
            "tableName": "CONTRACTLINE",
            "tableColumnName": "ITEMNUM"
        },
        {
            "attributeName": "ITEMSETID",
            "required": false,
            "persistent": true,
            "title": "Item Set",
            "remarks": "Set identifier for the item.",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS",
            "viewColumnName": "ITEMSETID",
            "tableName": "CONTRACTLINE",
            "tableColumnName": "ITEMSETID"
        },
        {
            "attributeName": "CONDITIONCODE",
            "required": false,
            "persistent": true,
            "title": "Condition Code",
            "remarks": "Item Condition code.",
            "sameAsAttribute": "CONDITIONCODE",
            "sameAsObject": "ITEMCONDITION",
            "viewColumnName": "CONDITIONCODE",
            "tableName": "CONTRACTLINE",
            "tableColumnName": "CONDITIONCODE"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Description for the entity on the contract line.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "ITEM",
            "viewColumnName": "DESCRIPTION",
            "tableName": "CONTRACTLINE",
            "tableColumnName": "DESCRIPTION"
        },
        {
            "attributeName": "CATALOGCODE",
            "required": false,
            "persistent": true,
            "title": "Catalog #",
            "remarks": "A unique code for cataloging an item.",
            "sameAsAttribute": "CATALOGCODE",
            "sameAsObject": "INVENTORY",
            "viewColumnName": "CATALOGCODE",
            "tableName": "CONTRACTLINE",
            "tableColumnName": "CATALOGCODE"
        },
        {
            "attributeName": "MANUFACTURER",
            "required": false,
            "persistent": true,
            "title": "Manufacturer",
            "remarks": "Unique code indicating the manufacturer of an item.",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES",
            "viewColumnName": "MANUFACTURER",
            "tableName": "CONTRACTLINE",
            "tableColumnName": "MANUFACTURER"
        },
        {
            "attributeName": "MODELNUM",
            "required": false,
            "persistent": true,
            "title": "Model",
            "remarks": "Vendor model number of the item indicated on the line.",
            "sameAsAttribute": "MODELNUM",
            "sameAsObject": "INVENTORY",
            "viewColumnName": "MODELNUM",
            "tableName": "CONTRACTLINE",
            "tableColumnName": "MODELNUM"
        },
        {
            "attributeName": "ORDERUNIT",
            "required": true,
            "persistent": true,
            "title": "Order Unit",
            "remarks": "Indicates the physical characteristics of a unit. A unit can be each, box, roll, linear feet, cubic feet, square feet etc.",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT",
            "viewColumnName": "ORDERUNIT",
            "tableName": "CONTRACTLINE",
            "tableColumnName": "ORDERUNIT"
        },
        {
            "attributeName": "ORDERQTY",
            "required": false,
            "persistent": true,
            "title": "Quantity",
            "remarks": "Order Quantity.",
            "sameAsAttribute": "ORDERQTY",
            "sameAsObject": "INVENTORY",
            "viewColumnName": "ORDERQTY",
            "tableName": "CONTRACTLINE",
            "tableColumnName": "ORDERQTY"
        },
        {
            "attributeName": "UNITCOST",
            "required": false,
            "persistent": true,
            "title": "Unit Cost",
            "remarks": "Order unit cost.",
            "sameAsAttribute": "UNITCOST",
            "sameAsObject": "CONTRACTLINE",
            "viewColumnName": "UNITCOST",
            "tableName": "CONTRACTLINE",
            "tableColumnName": "UNITCOST"
        },
        {
            "attributeName": "LINECOST",
            "required": false,
            "persistent": true,
            "title": "Line Cost",
            "remarks": "The sum of all items listed on this transaction line.",
            "sameAsAttribute": "LINECOST",
            "sameAsObject": "CONTRACTLINE",
            "viewColumnName": "LINECOST",
            "tableName": "CONTRACTLINE",
            "tableColumnName": "LINECOST"
        },
        {
            "attributeName": "LINECOST2",
            "required": false,
            "persistent": true,
            "title": "Line Cost 2",
            "remarks": "Line cost in base currency 2.",
            "sameAsAttribute": "LINECOST2",
            "sameAsObject": "CONTRACTLINE",
            "viewColumnName": "LINECOST2",
            "tableName": "CONTRACTLINE",
            "tableColumnName": "LINECOST2"
        },
        {
            "attributeName": "INSPECTIONREQUIRED",
            "required": true,
            "persistent": true,
            "title": "Inspection Required",
            "remarks": "Checking this box indicates inspection of item is required upon receipt.",
            "sameAsAttribute": "INSPECTIONREQUIRED",
            "sameAsObject": "ITEM",
            "viewColumnName": "INSPECTIONREQUIRED",
            "tableName": "CONTRACTLINE",
            "tableColumnName": "INSPECTIONREQUIRED"
        },
        {
            "attributeName": "ENTERBY",
            "required": true,
            "persistent": true,
            "title": "Entered By",
            "remarks": "The user name of the current logged-in user entering data.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON",
            "viewColumnName": "ENTERBY",
            "tableName": "CONTRACTLINE",
            "tableColumnName": "ENTERBY"
        },
        {
            "attributeName": "ENTERDATE",
            "required": true,
            "persistent": true,
            "title": "Entered Date",
            "remarks": "The date on which this line item was entered.",
            "sameAsAttribute": "ENTERDATE",
            "sameAsObject": "CONTRACTLINE",
            "viewColumnName": "ENTERDATE",
            "tableName": "CONTRACTLINE",
            "tableColumnName": "ENTERDATE"
        },
        {
            "attributeName": "REMARK",
            "required": false,
            "persistent": true,
            "title": "Remarks",
            "remarks": "Notes or remarks pertaining to the item on the line.",
            "sameAsAttribute": "REMARK",
            "sameAsObject": "PRLINE",
            "viewColumnName": "REMARK",
            "tableName": "CONTRACTLINE",
            "tableColumnName": "REMARK"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization identifier.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION",
            "viewColumnName": "ORGID",
            "tableName": "CONTRACTLINE",
            "tableColumnName": "ORGID"
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Detailed description for the entity on the contract line.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REMARK_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Remark Long Description",
            "remarks": "Detailed description of the remark.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NEWPRICE",
            "required": false,
            "persistent": false,
            "title": "New Price",
            "remarks": "Contains the new price after the price adjustment has been applied.",
            "sameAsAttribute": "LINECOST",
            "sameAsObject": "CONTRACTLINE"
        },
        {
            "attributeName": "LINESTATUS",
            "required": true,
            "persistent": true,
            "title": "Line Status",
            "remarks": "Indicates the status of the Contract Line. Could be one of Draft, Approved, Cancel and Waiting for Approval.",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "LINESTATUS",
            "tableName": "CONTRACTLINE",
            "tableColumnName": "LINESTATUS"
        },
        {
            "attributeName": "COMMODITY",
            "required": false,
            "persistent": true,
            "title": "Commodity Code",
            "remarks": "A unique code indicating the type of commodity on the line.",
            "sameAsAttribute": "COMMODITY",
            "sameAsObject": "COMMODITIES",
            "viewColumnName": "COMMODITY",
            "tableName": "CONTRACTLINE",
            "tableColumnName": "COMMODITY"
        },
        {
            "attributeName": "COMMODITYGROUP",
            "required": false,
            "persistent": true,
            "title": "Commodity Group",
            "remarks": "The commodity group in which the line item is listed.",
            "sameAsAttribute": "COMMODITY",
            "sameAsObject": "COMMODITIES",
            "viewColumnName": "COMMODITYGROUP",
            "tableName": "CONTRACTLINE",
            "tableColumnName": "COMMODITYGROUP"
        },
        {
            "attributeName": "REVISIONNUM",
            "required": true,
            "persistent": true,
            "title": "Revision",
            "remarks": "Revision number of the line. This number indicates the number of times the line has been revised. A line that has been created and not revised will show a number of 0.",
            "sameAsAttribute": "REVISIONNUM",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "REVISIONNUM",
            "tableName": "CONTRACTLINE",
            "tableColumnName": "REVISIONNUM"
        },
        {
            "attributeName": "REVSTATUS",
            "required": false,
            "persistent": true,
            "title": "Revision Status",
            "remarks": "Revision Status.",
            "sameAsAttribute": "REVSTATUS",
            "sameAsObject": "CONTRACTLINE",
            "viewColumnName": "REVSTATUS",
            "tableName": "CONTRACTLINE",
            "tableColumnName": "REVSTATUS"
        },
        {
            "attributeName": "CHGQTYONUSE",
            "required": true,
            "persistent": true,
            "title": "Change Quantity on Use",
            "remarks": "Can quantity be changed on line with contract reference.",
            "sameAsAttribute": "CHGQTYONUSE",
            "sameAsObject": "CONTRACTPURCH",
            "viewColumnName": "CHGQTYONUSE",
            "tableName": "CONTRACTLINE",
            "tableColumnName": "CHGQTYONUSE"
        },
        {
            "attributeName": "CHGPRICEONUSE",
            "required": true,
            "persistent": true,
            "title": "Change Price on Use",
            "remarks": "Can price be changed on the line with contract reference.",
            "sameAsAttribute": "CHGPRICEONUSE",
            "sameAsObject": "CONTRACTPURCH",
            "viewColumnName": "CHGPRICEONUSE",
            "tableName": "CONTRACTLINE",
            "tableColumnName": "CHGPRICEONUSE"
        },
        {
            "attributeName": "LEADTIME",
            "required": false,
            "persistent": true,
            "title": "Delivery Time",
            "remarks": "The number of days between the order date and the delivery date.",
            "sameAsAttribute": "DELIVERYTIME",
            "sameAsObject": "INVENTORY",
            "viewColumnName": "LEADTIME",
            "tableName": "CONTRACTLINE",
            "tableColumnName": "LEADTIME"
        },
        {
            "attributeName": "HASPAYMENTSCHED",
            "required": true,
            "persistent": true,
            "title": "Has Payment Schedule",
            "remarks": "Checking this box indicates this line has a payment schedule associated with it.",
            "sameAsAttribute": "HASPAYMENTSCHED",
            "sameAsObject": "CONTRACTLINE",
            "viewColumnName": "HASPAYMENTSCHED",
            "tableName": "CONTRACTLINE",
            "tableColumnName": "HASPAYMENTSCHED"
        },
        {
            "attributeName": "POREQUIRED",
            "required": true,
            "persistent": true,
            "title": "PO Required",
            "remarks": "Checking this box indicates a PO is required for this contract line.",
            "sameAsAttribute": "POREQUIRED",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "POREQUIRED",
            "tableName": "CONTRACTLINE",
            "tableColumnName": "POREQUIRED"
        },
        {
            "attributeName": "CONTRACTTYPE",
            "required": true,
            "persistent": true,
            "title": "Contract Type",
            "remarks": "Contract type.",
            "sameAsAttribute": "CONTRACTTYPE",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "CONTRACTTYPE",
            "tableName": "CONTRACTLINE",
            "tableColumnName": "CONTRACTTYPE"
        },
        {
            "attributeName": "LEASEENDVALUE",
            "required": false,
            "persistent": true,
            "title": "Lease End Value",
            "remarks": "The monetary amount required to buy the asset at the end of the lease period.",
            "sameAsAttribute": null,
            "sameAsObject": null,
            "viewColumnName": "LEASEENDVALUE",
            "tableName": "CONTRACTLINE",
            "tableColumnName": "LEASEENDVALUE"
        },
        {
            "attributeName": "LANGCODE",
            "required": true,
            "persistent": true,
            "title": "Language Code",
            "remarks": "Language Column",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE",
            "viewColumnName": "LANGCODE",
            "tableName": "CONTRACTLINE",
            "tableColumnName": "LANGCODE"
        },
        {
            "attributeName": "HASLD",
            "required": true,
            "persistent": true,
            "title": "Has Long Description",
            "remarks": "Boolean flag to indicate if there is any long description for this record",
            "sameAsAttribute": null,
            "sameAsObject": null,
            "viewColumnName": "HASLD",
            "tableName": "CONTRACTLINE",
            "tableColumnName": "HASLD"
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
            "attributeName": "ISSUEUNIT",
            "required": false,
            "persistent": false,
            "title": "Issue Unit",
            "remarks": "Issue Unit",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
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
            "attributeName": "NEWUNITCOST",
            "required": false,
            "persistent": false,
            "title": "New Unit Cost",
            "remarks": "Non-persistent attribute used in the apply price adjustment action.",
            "sameAsAttribute": "UNITCOST",
            "sameAsObject": "CONTRACTLINE"
        }
    ],
    "viewinfo": {
        "autosect": true,
        "viewwhere": "contracttype in (select value from synonymdomain where domainid ='CONTRACTTYPE' and maxvalue in ('LEASE', 'RENTAL'))"
    },
    "outgoingRelationships": [
        {
            "name": "IMGLIB",
            "target": "IMGLIB",
            "remarks": "Relationship to the IMGLIB table, used to find the image for a given item in matusetrans. (refobject='ITEM' and refobjectid =(select itemid from item where itemnum = :itemnum and itemsetid = :itemsetid)). The resulting set will contain zero or one object.",
            "whereClause": "refobject='ITEM' and refobjectid =(select itemid from item where itemnum = :itemnum and itemsetid = :itemsetid)",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "LEASEVIEWLINE",
            "source": "LEASEVIEW",
            "remarks": "Relationship to the LeaseViewLine table, used to find leaseview line records for a given contract. (leaseviewline.contractnum = contract.contractnum and leaseviewline.revisionnum = contract.revisionnum and leaseviewline.orgid = contract.orgid)",
            "whereClause": "contractnum=:contractnum and revisionnum = :revisionnum and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NONCANCELEDLEASEVIEWLINE",
            "source": "LEASEVIEW",
            "remarks": "Relationship to the LeaseViewLine table, used to find all ContractLines that dont have a linestatus of cenceled. The resulting set might contain one or more objects.",
            "whereClause": "contractnum=:contractnum and revisionnum=:revisionnum and orgid=:orgid and linestatus not in (select value from synonymdomain where domainid ='CONTRACTSTATUS' and maxvalue='CAN')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REVISIONLINE",
            "source": "LEASEVIEW",
            "remarks": "Relationship to the LeaseViewLine table used to find all ContractLines for a given Lease Contract",
            "whereClause": "contractnum=:contractnum and revisionnum in (:revisionnum, (select max(revisionnum) from contractline where contractnum=:contractnum and revisionnum < :revisionnum)) and contractlinenum in (select contractlinenum from contractline where contractnum=:contractnum and revstatus in (select value from synonymdomain where domainid='REVSTATUS' and maxvalue in ('ADDED','CHANGED'))  and revisionnum = :revisionnum)",
            "cardinality": "UNDEFINED"
        }
    ]
}