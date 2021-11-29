mos = {
    "objectName": "RFQLINE",
    "className": "psdi.app.rfq.RFQLineSet",
    "description": "Request for Quotation (RFQ) Line Item Detail",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "RFQLINEID",
    "primaryKeyColumns": [
        "RFQLINEID"
    ],
    "logicalRelationships": [
        {
            "objectName": "RFQLINE",
            "targetObject": "PRLINE",
            "parentKeys": "RFQLINEID",
            "targetKeys": "RFQLINEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "RFQ related to PR Line",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "ASSET",
            "targetObject": "RFQLINE",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 134",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "RFQLINE",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "RFQLINE",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITY, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "RFQLINE",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITYGROUP, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity Group",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "RFQLINE",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, MANUFACTURER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Manufacturer on RFQ Line",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "RFQLINE",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Awarded Vendor on RFQ Line",
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
            "objectName": "FINCNTRL",
            "targetObject": "RFQLINE",
            "parentKeys": "ORGID, FINCNTRLID",
            "targetKeys": "ORGID, FINCNTRLID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Financial Control",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "RFQLINE",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "ITEMCONDITION",
            "targetObject": "RFQLINE",
            "parentKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "targetKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item Condition",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "RFQLINE",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "RFQLINE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "RFQLINE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, STORELOC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 175",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "RFQLINE",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ORDERUNIT, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 212",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "RFQLINE",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "ORDERUNIT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measure Unit",
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
            "objectName": "ORGANIZATION",
            "targetObject": "RFQLINE",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "RFQLINE",
            "parentKeys": "PERSONID",
            "targetKeys": "ENTERBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who entered the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "RFQLINE",
            "parentKeys": "PERSONID",
            "targetKeys": "REQUESTEDBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Requested By",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "RFQLINE",
            "parentKeys": "PERSONID",
            "targetKeys": "SUPERVISOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Supervisor",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "RFQLINE",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "SITEID, PONUM, CONTRACTREV",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 49",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "RFQLINE",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "SITEID, PONUM, POREVISIONNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 50",
            "longDescription": null
        },
        {
            "objectName": "POLINE",
            "targetObject": "RFQLINE",
            "parentKeys": "POLINEID",
            "targetKeys": "POLINEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PO Line",
            "longDescription": null
        },
        {
            "objectName": "RFQ",
            "targetObject": "RFQLINE",
            "parentKeys": "SITEID, RFQNUM",
            "targetKeys": "SITEID, RFQNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "RFQ",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "RFQLINE",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 56",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "RFQLINE",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
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
        }
    ],
    "columns": [
        {
            "attributeName": "RFQNUM",
            "required": true,
            "persistent": true,
            "title": "RFQ",
            "remarks": "Request for quotation (RFQ) Number",
            "sameAsAttribute": "RFQNUM",
            "sameAsObject": "RFQ"
        },
        {
            "attributeName": "RFQLINENUM",
            "required": true,
            "persistent": true,
            "title": "Line",
            "remarks": "Line tem number. If you do not enter a number, Maximo generates one automatically. The line item number is unique for this RFQ.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ITEMNUM",
            "required": false,
            "persistent": true,
            "title": "Item",
            "remarks": "Identifies the item record. Leave this field blank if you are entering a line item for a service or for a material item not in inventory.",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "STORELOC",
            "required": false,
            "persistent": true,
            "title": "Storeroom",
            "remarks": "Storeroom location of the item. This field is required if the Issue on Receipt? box is cleared. If you enter a new location for this item, the item will be added to that location at the time of receipt.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the RFQ line item. To enter or view additional information, click the Long Description button.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "ORDERQTY",
            "required": false,
            "persistent": true,
            "title": "Quantity",
            "remarks": "Number of units of the ordered item. If you are entering a service line item, you can enter a number of hours here and a corresponding hourly cost in the Unit Cost field. You can also leave this field and the Unit Cost field blank, and enter a lump sum amount in the Line Cost field. This is a required field, unless you enter a lump sum cost for a service line item in the Line Cost field.",
            "sameAsAttribute": "ORDERQTY",
            "sameAsObject": "INVENTORY"
        },
        {
            "attributeName": "ORDERUNIT",
            "required": false,
            "persistent": true,
            "title": "Order Unit",
            "remarks": "Standard unit by which the item is ordered, such as roll or case. After you enter a value, Maximo enters the corresponding conversion value in the Conversion Factor field. If you are ordering a service, you can enter hours in this field. If you are ordering materials not in inventory, you can enter a new or existing unit in this field, or leave this field blank.",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "REQDELIVERYDATE",
            "required": false,
            "persistent": true,
            "title": "Required Date",
            "remarks": "Date the RFQ line items are needed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENTERDATE",
            "required": true,
            "persistent": true,
            "title": "Entered Date",
            "remarks": "Date and time the line item was entered. The default is the system date and time.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENTERBY",
            "required": true,
            "persistent": true,
            "title": "Entered By",
            "remarks": "The person who first entered the line item. The default is the current login ID.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "RFQL1",
            "required": false,
            "persistent": true,
            "title": "Rl1",
            "remarks": "Crossover from PRLine extra field 01",
            "sameAsAttribute": "RL1",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "RFQL2",
            "required": false,
            "persistent": true,
            "title": "Rl2",
            "remarks": "Crossover from PRLine extra field 02",
            "sameAsAttribute": "RL2",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "RFQL3",
            "required": false,
            "persistent": true,
            "title": "Rl3",
            "remarks": "Crossover from PRLine extra field 03",
            "sameAsAttribute": "RL3",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "RFQL4",
            "required": false,
            "persistent": true,
            "title": "Rl4",
            "remarks": "Crossover from PRLine extra field 04",
            "sameAsAttribute": "RL4",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "RFQL5",
            "required": false,
            "persistent": true,
            "title": "Rl5",
            "remarks": "Crossover from PRLine extra field 05",
            "sameAsAttribute": "RL5",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "PONUM",
            "required": false,
            "persistent": true,
            "title": "PO",
            "remarks": "Purchase order to which the item is assigned. Maximo fills in this field automatically when the RFQ line item is assigned to a PO.",
            "sameAsAttribute": "PONUM",
            "sameAsObject": "PO"
        },
        {
            "attributeName": "POLINENUM",
            "required": false,
            "persistent": true,
            "title": "PO Line",
            "remarks": "PO line number corresponding to the RFQ line. Maximo fills in this field automatically when the RFQ line is assigned to a PO.",
            "sameAsAttribute": "PRLINENUM",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": true,
            "title": "Asset",
            "remarks": "Identifies the asset to which costs for the service are charged if the Charge to Store? check box is selected. The GL Debit Account field defaults to the rotating suspense account for the asset identified in this field. If the Charge to Store? box is cleared, the GL Debit Account field for the line defaults to the GL account for the work order, location, or asset defined. You can set a default value for this field in the Default Table Data area.",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "REQUESTEDBY",
            "required": false,
            "persistent": true,
            "title": "Requested By",
            "remarks": "Person who asked for the item. You can set a default value in the Default Table Data area.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "ISSUE",
            "required": true,
            "persistent": true,
            "title": "Issue on Receipt",
            "remarks": "Specifies whether the line item is a direct issue to a work order, GL account, location, or asset. If the check box is selected, the line item is a direct issue. If the check box is cleared (the default), the item is stocked in a storeroom, and you must enter a value in the Storeroom field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RFQLIN1",
            "required": false,
            "persistent": true,
            "title": "Rfqlin1",
            "remarks": "Crossover from PRLine.RLIN1 - from Item extra field 19",
            "sameAsAttribute": "IN19",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "RFQLIN2",
            "required": false,
            "persistent": true,
            "title": "Rfqlin2",
            "remarks": "Crossover from PRLine.RLIN2 - from Item extra field 20",
            "sameAsAttribute": "IN20",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "RFQLIN3",
            "required": false,
            "persistent": true,
            "title": "Rfqlin3",
            "remarks": "Crossover from PRLine.RLIN3 - from Item extra field 21",
            "sameAsAttribute": "IN21",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "RFQLIN4",
            "required": false,
            "persistent": true,
            "title": "Rfqlin4",
            "remarks": "Crossover from PRLine.RLIN4 - from Item extra field 22",
            "sameAsAttribute": "IN22",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "RFQLIN5",
            "required": false,
            "persistent": true,
            "title": "Rfqlin5",
            "remarks": "Crossover from PRLine.RLIN5 - from Item extra field 23",
            "sameAsAttribute": "IN23",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "CHARGESTORE",
            "required": true,
            "persistent": true,
            "title": "Charge to Store",
            "remarks": "Specifies whether the line item's cost should be charged to the accumulated inventory cost for the associated asset. If the check box is selected, the line item cost is charged to the asset, and you must enter a value in the asset field. The asset must be a rotating asset that is not currently in a storeroom and is not associated with a capitalized item. If the check box is cleared (the default), the line item cost is not charged to an asset.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLDEBITACCT",
            "required": false,
            "persistent": true,
            "title": "GL Debit Account",
            "remarks": "Account code for the general ledger account that will be charged the cost of the line item. If you are entering a service line item, you must populate either this field or the Work Order, WO Task, Location, or Asset field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RECEIPTREQD",
            "required": true,
            "persistent": true,
            "title": "Receipt Required",
            "remarks": "Specifies whether a receipt is required for invoice matching on this item. If the check box is selected, a three-way match of purchase order, receipt, and invoice is required. If the check box is cleared, no receipt match is required. A receipt is always required for items. Services do not require a receipt, but you can specify that a receipt is required.",
            "sameAsAttribute": "RECEIPTREQD",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "CATEGORY",
            "required": false,
            "persistent": true,
            "title": "Category",
            "remarks": "Category of the item. Values include stocked, non-stocked, or special order.",
            "sameAsAttribute": "CATEGORY",
            "sameAsObject": "INVENTORY"
        },
        {
            "attributeName": "REMARK",
            "required": false,
            "persistent": true,
            "title": "Remarks",
            "remarks": "Comment about the item. To enter or view additional information, click the Long Description button.",
            "sameAsAttribute": "REMARK",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": true,
            "title": "Location",
            "remarks": "Location where the item or service will be used. You can set a default value for this field in the Default Table Data area.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "MANUFACTURER",
            "required": false,
            "persistent": true,
            "title": "Manufacturer",
            "remarks": "Identifying code for the manufacturer of the item.",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "MODELNUM",
            "required": false,
            "persistent": true,
            "title": "Model",
            "remarks": "Manufacturer's model number for the item. The default value comes from the inventory record.",
            "sameAsAttribute": "MODELNUM",
            "sameAsObject": "INVENTORY"
        },
        {
            "attributeName": "AWARDDATE",
            "required": false,
            "persistent": true,
            "title": "Awarded Date",
            "remarks": "Date and time the RFQ Line was awarded.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VENDOR",
            "required": false,
            "persistent": true,
            "title": "Awarded Vendor",
            "remarks": "Company that was awarded the RFQ line item.",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "SUPERVISOR",
            "required": false,
            "persistent": true,
            "title": "Supervisor",
            "remarks": "Person responsible for approving the work to be done. For example, the person who oversees the services provided by a contractor. If the RFQ is based on a PR where a supervisor was identified on the PR tab, the supervisor's name will appear here by default.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "PRORATESERVICE",
            "required": true,
            "persistent": true,
            "title": "Receipt Required ",
            "remarks": "Indicates if cost of service should be prorated (loaded) to line items cost when invoicing.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "UNITCOST",
            "required": false,
            "persistent": true,
            "title": "Unit Cost",
            "remarks": "Unit Cost",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LINECOST",
            "required": false,
            "persistent": true,
            "title": "Line Cost",
            "remarks": "Extended or lump sum cost of this transaction line.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RFQLINEID",
            "required": true,
            "persistent": true,
            "title": "RFQ Line",
            "remarks": "Internal RFQLine Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INSPECTIONREQUIRED",
            "required": true,
            "persistent": true,
            "title": "Inspection Required",
            "remarks": "Specifies whether this item requires an approval of the receipt. When you receive items that require inspection, Maximo records a receipt transaction. However, the item does not appear in the storeroom until the receipt is approved. If the check box is selected, the item requires inspection. If the check box is cleared (the default), no approval of the receipt is necessary.",
            "sameAsAttribute": "INSPECTIONREQUIRED",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "POLINEID",
            "required": false,
            "persistent": true,
            "title": "Poline ID",
            "remarks": "Internal RFQLine Identifier reference",
            "sameAsAttribute": "POLINEID",
            "sameAsObject": "POLINE"
        },
        {
            "attributeName": "MRNUM",
            "required": false,
            "persistent": true,
            "title": "Requisition",
            "remarks": "Identifies the material request number for the item.",
            "sameAsAttribute": "MRNUM",
            "sameAsObject": "MR"
        },
        {
            "attributeName": "MRLINENUM",
            "required": false,
            "persistent": true,
            "title": "Requisition Line",
            "remarks": "Identifies the line number on the material request for the item.",
            "sameAsAttribute": "MRLINENUM",
            "sameAsObject": "MRLINE"
        },
        {
            "attributeName": "RFQL6",
            "required": false,
            "persistent": true,
            "title": "RFQL6",
            "remarks": "Extra Field",
            "sameAsAttribute": "RL6",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "RFQL7",
            "required": false,
            "persistent": true,
            "title": "RFQL7",
            "remarks": "Extra Field",
            "sameAsAttribute": "RL7",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "RFQL8",
            "required": false,
            "persistent": true,
            "title": "RFQL8",
            "remarks": "Extra Field",
            "sameAsAttribute": "RL8",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "RFQL9",
            "required": false,
            "persistent": true,
            "title": "RFQL9",
            "remarks": "Extra Field",
            "sameAsAttribute": "RL9",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "RFQL10",
            "required": false,
            "persistent": true,
            "title": "RFQL10",
            "remarks": "Extra Field",
            "sameAsAttribute": "RL10",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "RFQLIN6",
            "required": false,
            "persistent": true,
            "title": "RFQLIN6",
            "remarks": "Extra Field",
            "sameAsAttribute": "IN24",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "RFQLIN7",
            "required": false,
            "persistent": true,
            "title": "RFQLIN7",
            "remarks": "Extra Field",
            "sameAsAttribute": "IN25",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "RFQLIN8",
            "required": false,
            "persistent": true,
            "title": "RFQLIN8",
            "remarks": "Extra Field",
            "sameAsAttribute": "IN26",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "RFQLIN9",
            "required": false,
            "persistent": true,
            "title": "RFQLIN9",
            "remarks": "Extra Field",
            "sameAsAttribute": "IN27",
            "sameAsObject": "ITEM"
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
            "attributeName": "VENDORPACKCODE",
            "required": false,
            "persistent": true,
            "title": "Vendor Pack Code",
            "remarks": "The pack code of the product. It is the code of how the items will be packed. For example, BOX (12 to a box) or PALLET (30 to a pallet).",
            "sameAsAttribute": "VENDORPACKCODE",
            "sameAsObject": "MRLINE"
        },
        {
            "attributeName": "VENDORPACKQUANTITY",
            "required": false,
            "persistent": true,
            "title": "Vendor Pack Quantity",
            "remarks": "The quantity of the pack code. For example, pack code is box, pack quantity is 12.",
            "sameAsAttribute": "VENDORPACKQUANTITY",
            "sameAsObject": "MRLINE"
        },
        {
            "attributeName": "VENDORWAREHOUSE",
            "required": false,
            "persistent": true,
            "title": "Vendor Warehouse",
            "remarks": "Vendor warehouse that the product will come from.",
            "sameAsAttribute": "VENDORWAREHOUSE",
            "sameAsObject": "MRLINE"
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
            "remarks": "Referenced Work Order",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ENTEREDASTASK",
            "required": true,
            "persistent": true,
            "title": "Entered as Task ",
            "remarks": "Was this transaction created against a work order task?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LINETYPE",
            "required": true,
            "persistent": true,
            "title": "Line Type",
            "remarks": "Line type. Values include Item, Material, Service, Special Order or External Catalog Item.",
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
            "remarks": "Long Description for Description of Item",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REMARK_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Remark Long Description",
            "remarks": "Long Description for Description for RFQ line item.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TASKID",
            "required": false,
            "persistent": false,
            "title": "WO Task",
            "remarks": "Identifies the work order task.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WONUM",
            "required": false,
            "persistent": false,
            "title": "Work Order",
            "remarks": "Identifies the work order for the line item.",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "CONDITIONCODE",
            "required": false,
            "persistent": true,
            "title": "Condition Code",
            "remarks": "Condition of the item on the RFQ line.",
            "sameAsAttribute": "CONDITIONCODE",
            "sameAsObject": "ITEMCONDITION"
        },
        {
            "attributeName": "CONTRACTNUM",
            "required": false,
            "persistent": true,
            "title": "Contract",
            "remarks": "Identifies the contract that was created from the RFQ line.",
            "sameAsAttribute": "CONTRACTNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "CONTRACTLINENUM",
            "required": false,
            "persistent": true,
            "title": "Contract Line",
            "remarks": "Identifies the line number on the contract that was created from the RFQ.",
            "sameAsAttribute": "CONTRACTLINENUM",
            "sameAsObject": "CONTRACTLINE"
        },
        {
            "attributeName": "CONTRACTLINEID",
            "required": false,
            "persistent": true,
            "title": "ContractLine ID",
            "remarks": "Identifies the contract line identifier that was created from this RFQ",
            "sameAsAttribute": "CONTRACTLINEID",
            "sameAsObject": "CONTRACTLINE"
        },
        {
            "attributeName": "COMMODITYGROUP",
            "required": false,
            "persistent": true,
            "title": "Commodity Group",
            "remarks": "Identifies the commodity group of the item.",
            "sameAsAttribute": "COMMODITY",
            "sameAsObject": "COMMODITIES"
        },
        {
            "attributeName": "COMMODITY",
            "required": false,
            "persistent": true,
            "title": "Commodity Code",
            "remarks": "Identifies the commodity code of the item.",
            "sameAsAttribute": "COMMODITY",
            "sameAsObject": "COMMODITIES"
        },
        {
            "attributeName": "CONVERTTOCONTRACT",
            "required": true,
            "persistent": true,
            "title": "Copy to Contract",
            "remarks": "Specifies if Maximo should copy the RFQ line to a contract. If the check box is sleceted, Maximo copies the RFQ line to a contract. If the check box is cleared, Maximo does not copy the RFQ line to a contract.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONTRACTREV",
            "required": false,
            "persistent": true,
            "title": "Contract Revision",
            "remarks": "Revision number of the contract that was created from this RFQ line",
            "sameAsAttribute": "REVISIONNUM",
            "sameAsObject": "CONTRACT"
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
            "attributeName": "CONVERSION",
            "required": false,
            "persistent": true,
            "title": "Conversion Factor",
            "remarks": "Value used to convert the order unit to the issue unit, and vice versa. If you have specified an order unit in the Order Unit field, Maximo enters the corresponding conversion value in this field. If you have not specified an order unit, Maximo sets the conversion factor to 1.00, indicating that the order unit is the same as the issue unit. You can edit this field, providing the line item is not a service. To determine a conversion factor, divide the order quantity by the issue quantity. For service line items, this field is read-only and always set to 1.00.",
            "sameAsAttribute": "CONVERSION",
            "sameAsObject": "CONVERSION"
        },
        {
            "attributeName": "QUOTATIONORDERUNIT",
            "required": false,
            "persistent": false,
            "title": "Order Unit",
            "remarks": "Order Unit to be copied to the QuotationLine.",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "CONTRACTID",
            "required": false,
            "persistent": true,
            "title": "Identifies the contract identifier that was created from this RFQ",
            "remarks": "Contract ID",
            "sameAsAttribute": "CONTRACTID",
            "sameAsObject": "CONTRACT"
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
            "attributeName": "MKTPLCITEM",
            "required": true,
            "persistent": true,
            "title": "Marketplace Item",
            "remarks": "Flag to determine the items from the marketplace.",
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
            "attributeName": "CLASSSTRUCTUREID",
            "required": false,
            "persistent": true,
            "title": "Class Structure",
            "remarks": "Classification Structure identifier",
            "sameAsAttribute": "CLASSSTRUCTUREID",
            "sameAsObject": "CLASSSTRUCTURE"
        },
        {
            "attributeName": "POREVISIONNUM",
            "required": false,
            "persistent": true,
            "title": "PO Revision",
            "remarks": "Revision number of the purchase order. Indicates how many times a purchase order has been revised.",
            "sameAsAttribute": "REVISIONNUM",
            "sameAsObject": "CONTRACT"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ASSET",
            "target": "ASSET",
            "remarks": "Relationship to Asset for RecHover in RFQ  / RFQ Lines tab / RFQ Lines table details",
            "whereClause": "assetnum = :assetnum and siteid = :siteid",
            "cardinality": null
        },
        {
            "name": "CLASSSPEC",
            "target": "CLASSSPEC",
            "remarks": "Relationship to the classspec table, used to find the classspec record for a given pdspec. (classstructureid=:classstructureid) The resulting set will contain one object.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSTRUCTURE",
            "target": "CLASSSTRUCTURE",
            "remarks": "Relationship to the ClassStructure table, used to find a class structure record for a given item specification. (itemspec.classstructureid = classstructure.classstructureid). The resulting set will contain zero or one object.",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMM_PRLINEGRP",
            "target": "COMMODITIES",
            "remarks": null,
            "whereClause": "commodity = :commodity and parent is not null and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACT",
            "target": "CONTRACT",
            "remarks": "Relationship to the Contract table, used to find contract record for a given RFQ line record. (contract.contractnum = rfqlline.contractnum and contract.orgid = rfqline.orgid). The resulting set will contain zero or one object.",
            "whereClause": "contractid = :contractid and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "target": "DRILLDOWN",
            "remarks": "Relationship from the RFQLINE to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVENTORY",
            "target": "INVENTORY",
            "remarks": "Relationship to the Inventory table, used to find the inventory record for the item number and storeroom (inventory.itemnum = rfqline.itemnum and inventory.itemsetid=rfqline.itemsetid and inventory.location = rfqline.storeloc and inventory.itemsetid = rfqline.itemsetid). The resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and location=:storeloc and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEM",
            "target": "ITEM",
            "remarks": "Relationship to the item table, used to find the item record for a given RFQ line record. (rfqline.itemnum = item.itemnum and rfqline.itemsetid=item.itemsetid). The resulting set will contain one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMCONDITION",
            "target": "ITEMCONDITION",
            "remarks": "Relationship to the itemcondition table, used to find the itemcondition records for a given RFQ Line record. (itemcondition.itemnum = rfqline.itemnum and itemcondition.itemsetid=rfqline.itemsetid and itemcondition.conditioncode=rfqline.conditioncode). The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid and conditioncode=:conditioncode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMORGINFO",
            "target": "ITEMORGINFO",
            "remarks": "Relationship to the ItemOrgInfo table, used to find an item for a given request for quotation line. (rfqlline.itemnum = itemorginfo.itemnum and rfqlline.itemsetid = itemorginfo.itemsetid and rfqlline.orgid = itemorginfo.orgid). The resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMORGINFOSTATUS",
            "target": "ITEMORGINFO",
            "remarks": "Relationship to the ItemOrgInfo table, used to find an itemorg record for a given rfqline.(itemorginfo.itemnum = rfqline.itemnum and itemorginfo.itemsetid = rfqline.itemsetid and itemorginfo.orgid = rfqline.orgid and itemorginfo.status in ('ACTIVE', 'PLANNING', 'PENDOBS')). The resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and orgid=:orgid and status in (select value from synonymdomain where domainid = 'ITEMSTATUS' and maxvalue in ('ACTIVE', 'PLANNING', 'PENDOBS') )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RFQLINESPEC",
            "target": "PDSPEC",
            "remarks": "Relationship to the RFQLine table, used to find a rfq line in the pdspec table. (refobjectid=:rfqlineid).  The resulting set will contain zero or more objects.",
            "whereClause": "refobjectid=:rfqlineid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RFQLINESPECCLASS",
            "target": "PDSPEC",
            "remarks": "Relationship to the pdspec table, used to find the pdspec records for a given rfq (refobjectid=:rfqlineid and refobjectname='RFQLINE' and classstructureid=:classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "refobjectid=:rfqlineid and refobjectname='RFQLINE' and classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRLINE",
            "target": "PRLINE",
            "remarks": "Relationship to the PRLine table, used to find all requisition lines for a given request for quotation line. (rfqline.rfqnum = prline.rfqnum and rfqline.rfqlinenum = prline.rfqlinenum). The resulting set will contain zero or one object.",
            "whereClause": "rfqnum=:rfqnum and rfqlinenum=:rfqlinenum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "QUOTATIONITEM",
            "target": "QUOTATIONLINE",
            "remarks": "Relationship to the QuotationLine table, used to find all quotation lines for a given item number or description for quotation line. (rfqline.rfqnum=quotationline.rfqnum and rfqline.rfqlinenum=quotationline.rfqlinenum and rfqline.siteid=quotationline.siteid and ((rfqline.itemnum=quotationline.itemnum and rfqline.itemsetid=quotationline.itemsetid) or (rfqline.itemnum is null and rfqline.description=quotationline.description))). The resulting set will contain zero or more object.",
            "whereClause": "rfqnum=:rfqnum and rfqlinenum=:rfqlinenum and siteid=:siteid and ((itemnum=:itemnum and itemsetid=:itemsetid) or (itemnum is null and description=:description))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "QUOTATIONLINE",
            "target": "QUOTATIONLINE",
            "remarks": "Relationship to the QuotationLine table, used to find all quotation lines for a given request for quotation line. (rfqline.rfqnum = quotationline.rfqnum and rfqline.rfqlinenum = quotationline.rfqlinenum). The resulting set will contain zero or more object.",
            "whereClause": "rfqnum=:rfqnum and rfqlinenum=:rfqlinenum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RFQ",
            "target": "RFQ",
            "remarks": "Relationship to the RFQ table, used to find all request for quotation records for a given request for quotation line. (rfqline.rfqnum = rfq.rfqnum). The resulting set will contain one object.",
            "whereClause": "rfqnum=:rfqnum and siteid=:siteid",
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
            "remarks": "Relationship from the RFQLINE to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKORDER",
            "target": "WORKORDER",
            "remarks": "Relationship to Workorder for RecHover in RFQ  / RFQ Lines tab / RFQ Lines table details",
            "whereClause": "wonum = :wonum and siteid = :siteid",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "RFQLINE",
            "source": "CLASSSTRUCTURE",
            "remarks": "Relationship to the rfqline table, used to find the rfqline records for a given classstructure. (classstructure.classstructureid = rfqline.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RFQLINE_ONLY",
            "source": "CLASSSTRUCTURE",
            "remarks": "Relationship to the rfqline table, used to find the rfqline records for a given classstructure.(classstructure.classstructureid =rfqline .classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid =:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RFQLINE",
            "source": "CONTRACTLINE",
            "remarks": "Relationship to the RFQLine table, used to find all rfq lines for a given contract line. (contractline.contractlineid = rfqline.contractlineid and contractline.orgid = rfqline.orgid). The resulting set will contain zero or one object.",
            "whereClause": "contractlineid=:contractlineid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RFQLINEVIEW",
            "source": "INVOICE",
            "remarks": "Relationship to the RFQ line table,  used to find all RFQ line records for a given INVOICE. (polineid in (select polineid from prline where prnum=pr.prnum and siteid=pr.siteid). The resulting set will contain zero or more objects.",
            "whereClause": "polinenum in (select polinenum from invoiceline where invoicenum=:invoicenum and siteid=:siteid) and ponum in (select ponum from invoiceline where invoicenum=:invoicenum and siteid=:siteid) and siteid in (select positeid from invoiceline where invoicenum=:invoicenum and siteid=:siteid)",
            "cardinality": null
        },
        {
            "name": "RFQLINEVIEW",
            "source": "INVOICELINE",
            "remarks": "Relationship to the RFQ line table, used to find all RFQ line records for a given INVOICE line. (polineid in (select polineid from prline where ponum=poline.ponum and  siteid=poline.siteid and polinenum=poline.polinenum)). The resulting set will contain zero or more objects.",
            "whereClause": "polinenum in (select polinenum from invoiceline where invoicenum=:invoicenum and siteid=:siteid and polinenum=:polinenum) and  ponum in (select ponum from invoiceline where invoicenum=:invoicenum and siteid=:siteid) and siteid  in (select positeid from invoiceline where invoicenum=:invoicenum and siteid=:siteid)",
            "cardinality": null
        },
        {
            "name": "RFQLINEVIEW",
            "source": "MATRECTRANS",
            "remarks": "Relationship to the InvoiceLine table, used to find all invoice line records for a given purchase order line. (invoiceline.ponum = poline.ponum and invoiceline.siteid = poline.siteid and  invoiceline.polinenum = poline.polinenum). The resulting set will contain zero or more objects.",
            "whereClause": "polinenum = :polinenum and ponum = :ponum and siteid = :positeid",
            "cardinality": null
        },
        {
            "name": "RFQLINE",
            "source": "MEASUREUNIT",
            "remarks": "Relationship to the rfqline table, used to find all rfqline records using this measureunit. (rfqline.orderunit=measureunit.measureunitid) This relationship will find zero or more objects.",
            "whereClause": "orderunit=:measureunitid and exists (select 1 from rfq where rfq.rfqnum=rfqline.rfqnum and rfq.historyflag = :no)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RFQLINE",
            "source": "PDSPEC",
            "remarks": "Relationship to the RFQLine table, used to find a rfq line in the pdspec table. (rfqlineid=:refobjectid).  The resulting set will contain zero or more objects.",
            "whereClause": "rfqlineid=:refobjectid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RFQLINE",
            "source": "PO",
            "remarks": "Relationship to the RFQLine table, used to find all rfq line records for a given purchase. (rfqline.siteid = po.siteid and  rfqline.ponum = po.ponum). The resulting set will contain zero or more objects.",
            "whereClause": "ponum=:ponum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "RFQLINEVIEW",
            "source": "PO",
            "remarks": "Relationship to the InvoiceLine table, used to find all invoice line records for a given purchase order line. (invoiceline.ponum = poline.ponum and invoiceline.siteid = poline.siteid and  invoiceline.polinenum = poline.polinenum). The resulting set will contain zero or more objects.",
            "whereClause": "(polinenum in (select polinenum from matrectrans where ponum=:ponum and positeid=:siteid) and ponum = :ponum and siteid = :siteid) or (polinenum in (select polinenum from servrectrans where ponum=:ponum and positeid=:siteid) and ponum = :ponum and siteid = :siteid)",
            "cardinality": null
        },
        {
            "name": "RFQLINE",
            "source": "POLINE",
            "remarks": "Relationship to the RFQLine table, used to find all rfq lines for a given purchase order line. (poline.polineid = rfqline.polineid and poline.siteid = rfqline.siteid). The resulting set will contain zero or one object.",
            "whereClause": "ponum=:ponum and polinenum=:polinenum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RFQLINE",
            "source": "PR",
            "remarks": "Relationship to the RFQ line table, used to find all RFQ line records for a given purchase requisition. (polineid in (select polineid from prline where prnum=pr.prnum and siteid=pr.siteid). The resulting set will contain zero or more objects.",
            "whereClause": "rfqlineid in (select rfqlineid from prline where prnum=:prnum and siteid=:siteid)",
            "cardinality": null
        },
        {
            "name": "RFQLINE",
            "source": "PRLINE",
            "remarks": "Relationship to the RFQ line table, used to find all RFQ line records for a given purchase requisition line. (polineid in (select polineid from prline where ponum=poline.ponum and siteid=poline.siteid and polinenum=poline.polinenum)). The resulting set will contain zero or more objects.",
            "whereClause": "rfqlineid=:rfqlineid",
            "cardinality": null
        },
        {
            "name": "RFQLINE",
            "source": "PURCHVIEW",
            "remarks": "Relationship to the RFQLine table, used to find all rfq records for a given contract. (rfqline.contractnum = purchview.contractnum). The resulting set will contain zero or more objects.",
            "whereClause": "contractnum=:contractnum and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RFQLINE",
            "source": "QUOTATIONLINE",
            "remarks": "Relationship to the RFQLine table, used to find all request for quotation lines for a given quotation line. (quotationline.rfqnum = rfqline.rfqnum and quotationline.rfqlinenum = quotationline.rfqlinenum). The resulting set will contain zero or one object.",
            "whereClause": "rfqnum = :rfqnum and rfqlinenum = :rfqlinenum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RFQLINE",
            "source": "RFQ",
            "remarks": "Relationship to the RFQLine table, used to find all request for quotation line records for a given request for quotation. (rfq.rfqnum = rfqline.rfqnum). The resulting set will contain zero or more objects.",
            "whereClause": "rfqnum=:rfqnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RFQLINEVIEW",
            "source": "SERVRECTRANS",
            "remarks": "Relationship to the InvoiceLine table, used to find all invoice line records for a given purchase order line. (invoiceline.ponum = poline.ponum and invoiceline.siteid = poline.siteid and  invoiceline.polinenum = poline.polinenum). The resulting set will contain zero or more objects.",
            "whereClause": "polinenum = :polinenum and ponum = :ponum and siteid = :positeid",
            "cardinality": null
        },
        {
            "name": "RFQLINE",
            "source": "SFWVIEW",
            "remarks": "Relationship to the RFQLine table, used to find all rfq records for a given contract. (rfqline.contractnum = swview.contractnum). The resulting set will contain zero or more objects.",
            "whereClause": "contractnum=:contractnum and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RFQLINE",
            "source": "WORKORDER",
            "remarks": "Relationship to the RFQLINE table, used to find all RFQ lines for a work order. (rfqline.refwo = workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "refwo=:wonum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ]
}