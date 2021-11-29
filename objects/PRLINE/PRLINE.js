mos = {
    "objectName": "PRLINE",
    "className": "psdi.app.pr.PRLineSet",
    "description": "The PRLINE Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "PRLINEID",
    "primaryKeyColumns": [
        "PRLINEID"
    ],
    "logicalRelationships": [
        {
            "objectName": "PRLINE",
            "targetObject": "PRCOST",
            "parentKeys": "PRLINEID",
            "targetKeys": "PRLINEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PRLine cost record.",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "ASSET",
            "targetObject": "PRLINE",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "POSITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 127",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "PRLINE",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset to charge costs.",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "PRLINE",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "PRLINE",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITY, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity Code",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "PRLINE",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITYGROUP, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity Group Code",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "PRLINE",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, MANUFACTURER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Manufacturer on PR Line",
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
            "objectName": "FINCNTRL",
            "targetObject": "PRLINE",
            "parentKeys": "ORGID, FINCNTRLID",
            "targetKeys": "ORGID, FINCNTRLID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Financial Control that applies to PR Line",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "PRLINE",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PR Line Item",
            "longDescription": null
        },
        {
            "objectName": "ITEMCONDITION",
            "targetObject": "PRLINE",
            "parentKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "targetKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item Condition for PR Line",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "PRLINE",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "PRLINE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "POSITEID, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 159",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "PRLINE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "POSITEID, STORELOC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 160",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "PRLINE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PR Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "PRLINE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, STORELOC",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Target storeroom for PR Line item.",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "PRLINE",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ORDERUNIT, POSITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 207",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "PRLINE",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ORDERUNIT, SITEID, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measure Unit for PR Line",
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
            "objectName": "ORGANIZATION",
            "targetObject": "PRLINE",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PRLINE",
            "parentKeys": "PERSONID",
            "targetKeys": "ENTERBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who entered the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PRLINE",
            "parentKeys": "PERSONID",
            "targetKeys": "REQUESTEDBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person requesting PR Line item.",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "PRLINE",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "POSITEID, PONUM, CONTRACTREFREV",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 41",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "PRLINE",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "POSITEID, PONUM, CONTRACTREV",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 42",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "PRLINE",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "POSITEID, PONUM, POREVISIONNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 43",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "PRLINE",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "SITEID, PONUM, CONTRACTREFREV",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 44",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "PRLINE",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "SITEID, PONUM, CONTRACTREV",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 45",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "PRLINE",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "SITEID, PONUM, POREVISIONNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 46",
            "longDescription": null
        },
        {
            "objectName": "POLINE",
            "targetObject": "PRLINE",
            "parentKeys": "POLINEID",
            "targetKeys": "POLINEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PO Line generated for PR Line",
            "longDescription": null
        },
        {
            "objectName": "PR",
            "targetObject": "PRLINE",
            "parentKeys": "SITEID, PRNUM",
            "targetKeys": "POSITEID, PRNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 4",
            "longDescription": null
        },
        {
            "objectName": "PR",
            "targetObject": "PRLINE",
            "parentKeys": "SITEID, PRNUM",
            "targetKeys": "SITEID, PRNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PR Lines",
            "longDescription": null
        },
        {
            "objectName": "RFQ",
            "targetObject": "PRLINE",
            "parentKeys": "SITEID, RFQNUM",
            "targetKeys": "POSITEID, RFQNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 1",
            "longDescription": null
        },
        {
            "objectName": "RFQ",
            "targetObject": "PRLINE",
            "parentKeys": "SITEID, RFQNUM",
            "targetKeys": "SITEID, RFQNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 2",
            "longDescription": null
        },
        {
            "objectName": "RFQLINE",
            "targetObject": "PRLINE",
            "parentKeys": "RFQLINEID",
            "targetKeys": "RFQLINEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "RFQ related to PR Line",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "PRLINE",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item Set for PR Line",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PRLINE",
            "parentKeys": "SITEID",
            "targetKeys": "POSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 204",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PRLINE",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "PRLINE",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "POSITEID, REFWO",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 39",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "PRLINE",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, REFWO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Order for which PR Line Item was ordered.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "PRNUM",
            "required": true,
            "persistent": true,
            "title": "PR",
            "remarks": "Purchase Requisition Number",
            "sameAsAttribute": "PRNUM",
            "sameAsObject": "PR"
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
            "attributeName": "ORDERQTY",
            "required": false,
            "persistent": true,
            "title": "Quantity",
            "remarks": "Number of units of the ordered item. If the PR was generated from Inventory, the default value is the Reorder Quantity field of the Inventory item record. If you are entering a service line item, you can enter a number of hours here and a corresponding hourly cost in the Unit Cost field. You can also leave this field and the Unit Cost field blank, and enter a lump sum amount in the Line Cost field. This is a required field, unless you enter a lump sum cost for a service line item in the Line Cost field.",
            "sameAsAttribute": "ORDERQTY",
            "sameAsObject": "INVENTORY"
        },
        {
            "attributeName": "ORDERUNIT",
            "required": false,
            "persistent": true,
            "title": "Order Unit",
            "remarks": "Standard unit by which the item is ordered, such as roll or case. After you enter a value, Maximo enters the corresponding conversion value in the Conversion field. If you are ordering a service, you can enter hours in this field. If you are ordering materials not in inventory, you can enter a new or existing unit in this field, or leave this field blank.",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "UNITCOST",
            "required": false,
            "persistent": true,
            "title": "Unit Cost",
            "remarks": "Cost per unit of the item. If entering a service line item, you can enter a unit cost here and a number of hours in the Quantity field. Or, you can enter a lump sum amount in the Line Cost field. If you specified a currency code in the Currency field on the PR tab, the unit cost is expressed in that currency.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PONUM",
            "required": false,
            "persistent": true,
            "title": "PO",
            "remarks": "Purchase order to which the item is assigned. Maximo fills in this field automatically when the PR line item is assigned to a PO.",
            "sameAsAttribute": "PONUM",
            "sameAsObject": "PO"
        },
        {
            "attributeName": "REQDELIVERYDATE",
            "required": false,
            "persistent": true,
            "title": "Required Date",
            "remarks": "Date the PR line items are needed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VENDELIVERYDATE",
            "required": false,
            "persistent": true,
            "title": "Vendor Date",
            "remarks": "Date when the vendor expects to deliver the order.",
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
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the PR line item. To enter or view additional information, click the Long Description button.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "RL1",
            "required": false,
            "persistent": true,
            "title": "Rl1",
            "remarks": "Extra Field 01",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RL2",
            "required": false,
            "persistent": true,
            "title": "Rl2",
            "remarks": "Extra Field 02",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RL3",
            "required": false,
            "persistent": true,
            "title": "Rl3",
            "remarks": "Extra Field 03",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RL4",
            "required": false,
            "persistent": true,
            "title": "Rl4",
            "remarks": "Extra Field 04",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RL5",
            "required": false,
            "persistent": true,
            "title": "Rl5",
            "remarks": "Extra Field 05",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "RLIN1",
            "required": false,
            "persistent": true,
            "title": "Rlin1",
            "remarks": "Extra Field",
            "sameAsAttribute": "IN19",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "RLIN2",
            "required": false,
            "persistent": true,
            "title": "Rlin2",
            "remarks": "Extra Field",
            "sameAsAttribute": "IN20",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "RLIN3",
            "required": false,
            "persistent": true,
            "title": "Rlin3",
            "remarks": "Extra Field",
            "sameAsAttribute": "IN21",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "RLIN4",
            "required": false,
            "persistent": true,
            "title": "Rlin4",
            "remarks": "Extra Field",
            "sameAsAttribute": "IN22",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "RLIN5",
            "required": false,
            "persistent": true,
            "title": "Rlin5",
            "remarks": "Extra Field",
            "sameAsAttribute": "IN23",
            "sameAsObject": "ITEM"
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
            "remarks": "Account code for the general ledger account that will be charged the cost of the line item. If you are entering a service line item, you must populate either this field or the Work Order, WO Task ID, Location, or Asset field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLCREDITACCT",
            "required": false,
            "persistent": true,
            "title": "GL Credit Account",
            "remarks": "Account code for the general ledger account that will be credited the cost of the line item.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LINECOST",
            "required": true,
            "persistent": true,
            "title": "Line Cost",
            "remarks": "Cost for the line item, calculated by multiplying the quantity by the unit cost. If you are entering a cost for a service line item, you can enter a lump sum amount in this field (rather than specify a quantity of hours and a unit cost).",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TAX1CODE",
            "required": false,
            "persistent": true,
            "title": "Tax Code",
            "remarks": "Tax code used to calculate the value in the Tax field. When you enter a new line item or change the Item field, Maximo fills in the Tax Code field with a value taken from the Company tab. Any change to this field updates the Tax Amount field and all PR totals automatically.",
            "sameAsAttribute": "TAXCODE",
            "sameAsObject": "TAX"
        },
        {
            "attributeName": "TAX1",
            "required": true,
            "persistent": true,
            "title": "Tax",
            "remarks": "Amount of tax payable for the line item. Maximo multiplies the Line Cost by the tax codes applied. You can change this value, but Maximo will overwrite your entry if future changes to related fields cause Maximo to recalculate the tax value. Any changes to the Item, Quantity, Unit Cost, Line Cost, or Tax Code fields cause Maximo to recalculate this value. Any change to this field automatically updates the Total Tax and Total Cost fields on the PR tab.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TAX2CODE",
            "required": false,
            "persistent": true,
            "title": "Tax Code 2",
            "remarks": "Tax code to be used for calculation of tax 2",
            "sameAsAttribute": "TAXCODE",
            "sameAsObject": "TAX"
        },
        {
            "attributeName": "TAX2",
            "required": true,
            "persistent": true,
            "title": "Tax 2",
            "remarks": "Amount of tax2 due on goods.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TAX3CODE",
            "required": false,
            "persistent": true,
            "title": "Tax Code 3",
            "remarks": "Tax code to be used for calculation of tax 3",
            "sameAsAttribute": "TAXCODE",
            "sameAsObject": "TAX"
        },
        {
            "attributeName": "TAX3",
            "required": true,
            "persistent": true,
            "title": "Tax 3",
            "remarks": "Amount of tax3 due on goods.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RECEIPTREQD",
            "required": true,
            "persistent": true,
            "title": "Receipt Required",
            "remarks": "Specifies whether a receipt is required for invoice matching on this item. If the check box is selected, a three-way match of purchase order, receipt, and invoice is required. If the check box is cleared, no receipt match is required.",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "CATALOGCODE",
            "required": false,
            "persistent": true,
            "title": "Catalog #",
            "remarks": "Vendor's catalog number or product list number for the item. The default value comes from the inventory record.",
            "sameAsAttribute": "CATALOGCODE",
            "sameAsObject": "INVENTORY"
        },
        {
            "attributeName": "TAX4CODE",
            "required": false,
            "persistent": true,
            "title": "Tax Code 4",
            "remarks": "Tax code to use for calculation of Tax 4.",
            "sameAsAttribute": "TAXCODE",
            "sameAsObject": "TAX"
        },
        {
            "attributeName": "TAX4",
            "required": true,
            "persistent": true,
            "title": "Tax 4",
            "remarks": "Amount of Tax 4 due.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TAX5CODE",
            "required": false,
            "persistent": true,
            "title": "Tax Code 5",
            "remarks": "Tax code to use for calculation of Tax 5.",
            "sameAsAttribute": "TAXCODE",
            "sameAsObject": "TAX"
        },
        {
            "attributeName": "TAX5",
            "required": true,
            "persistent": true,
            "title": "Tax 5",
            "remarks": "Amount of Tax 5 due.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PRLINENUM",
            "required": true,
            "persistent": true,
            "title": "Line",
            "remarks": "Line tem number. If you do not enter a number, Maximo generates one automatically. The line item number is unique for this PR.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "POLINENUM",
            "required": false,
            "persistent": true,
            "title": "PO Line",
            "remarks": "PO line number corresponding to the PR line. Maximo fills in this field automatically when the PR line is assigned to a PO.",
            "sameAsAttribute": "PRLINENUM",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "CATEGORY",
            "required": false,
            "persistent": true,
            "title": "Category",
            "remarks": "Category of the item.",
            "sameAsAttribute": "CATEGORY",
            "sameAsObject": "INVENTORY"
        },
        {
            "attributeName": "REMARK",
            "required": false,
            "persistent": true,
            "title": "Remarks",
            "remarks": "Comment about the item. To enter or view additional information, click the Long Description button. This field is required if you are entering a line item for a service or for material not in inventory. For material in inventory, the remark is copied from the Inventory Control table.",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "LOADEDCOST",
            "required": true,
            "persistent": true,
            "title": "Loaded Cost",
            "remarks": "Total cost of the line item, including taxes and standard service amounts. A tax amount applies to the loaded cost if either the Tax Code field or Tax field on the PR Lines tab contains a value, and the Add Tax Amount to Vendor Price? option is enabled by your system administrator. A standard service amount applies to the loaded cost if the Prorate Service? check box is selected.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PRORATESERVICE",
            "required": true,
            "persistent": true,
            "title": "Prorated Service",
            "remarks": "Should cost of service be prorated (loaded) to line items cost when invoicing?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONVERTTORFQ",
            "required": true,
            "persistent": true,
            "title": "Copy to RFQ",
            "remarks": "Specifies whether the line item should be copied to a request for quotation, so that the item price can be checked against its best price. If the check box is selected, the item is copied to an RFQ for price checking. If the check box is cleared (the default), the item is not copied to an RFQ.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RFQNUM",
            "required": false,
            "persistent": true,
            "title": "RFQ",
            "remarks": "Identifies the request for quotation record for this line item, if the item was previously copied to an RFQ.",
            "sameAsAttribute": "RFQNUM",
            "sameAsObject": "RFQ"
        },
        {
            "attributeName": "RFQLINENUM",
            "required": false,
            "persistent": true,
            "title": "RFQ Line",
            "remarks": "Line number of the RFQ for this line item, if there is one.",
            "sameAsAttribute": "RFQLINENUM",
            "sameAsObject": "RFQLINE"
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
            "attributeName": "RFQLINEID",
            "required": false,
            "persistent": true,
            "title": "RFQ Line",
            "remarks": "Internal POLine Identifier reference",
            "sameAsAttribute": "RFQLINEID",
            "sameAsObject": "RFQLINE"
        },
        {
            "attributeName": "POLINEID",
            "required": false,
            "persistent": true,
            "title": "Poline ID",
            "remarks": "Internal POLine Identifier reference",
            "sameAsAttribute": "POLINEID",
            "sameAsObject": "POLINE"
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
            "attributeName": "RL6",
            "required": false,
            "persistent": true,
            "title": "RL6",
            "remarks": "Extra Field",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RL7",
            "required": false,
            "persistent": true,
            "title": "RL7",
            "remarks": "Extra Field",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RL8",
            "required": false,
            "persistent": true,
            "title": "RL8",
            "remarks": "Extra Field",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RL9",
            "required": false,
            "persistent": true,
            "title": "RL9",
            "remarks": "Extra Field",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RL10",
            "required": false,
            "persistent": true,
            "title": "RL10",
            "remarks": "Extra Field",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RLIN6",
            "required": false,
            "persistent": true,
            "title": "RLIN6",
            "remarks": "Extra Field",
            "sameAsAttribute": "IN24",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "RLIN7",
            "required": false,
            "persistent": true,
            "title": "RLIN7",
            "remarks": "Extra Field",
            "sameAsAttribute": "IN25",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "RLIN8",
            "required": false,
            "persistent": true,
            "title": "RLIN8",
            "remarks": "Extra Field",
            "sameAsAttribute": "IN26",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "RLIN9",
            "required": false,
            "persistent": true,
            "title": "RLIN9",
            "remarks": "Extra Field",
            "sameAsAttribute": "IN27",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "PRLALN1",
            "required": false,
            "persistent": true,
            "title": "PRLALN1",
            "remarks": "Extra Crossover Field Crosses over from MRLINE.MRLALN1",
            "sameAsAttribute": "MRLALN1",
            "sameAsObject": "MRLINE"
        },
        {
            "attributeName": "PRLALN2",
            "required": false,
            "persistent": true,
            "title": "PRLALN2",
            "remarks": "Extra Crossover Field Crosses over from MRLINE.MRLALN2",
            "sameAsAttribute": "MRLALN2",
            "sameAsObject": "MRLINE"
        },
        {
            "attributeName": "PRLALN3",
            "required": false,
            "persistent": true,
            "title": "PRLALN3",
            "remarks": "Extra Crossover Field Crosses over from MRLINE.MRLALN3",
            "sameAsAttribute": "MRLALN3",
            "sameAsObject": "MRLINE"
        },
        {
            "attributeName": "PRLALN4",
            "required": false,
            "persistent": true,
            "title": "PRLALN4",
            "remarks": "Extra Crossover Field Crosses over from MRLINE.MRLALN4",
            "sameAsAttribute": "MRLALN4",
            "sameAsObject": "MRLINE"
        },
        {
            "attributeName": "PRLALN5",
            "required": false,
            "persistent": true,
            "title": "PRLALN5",
            "remarks": "Extra Crossover Field Crosses over from MRLINE.MRLALN5",
            "sameAsAttribute": "MRLALN5",
            "sameAsObject": "MRLINE"
        },
        {
            "attributeName": "PCARDNUM",
            "required": false,
            "persistent": true,
            "title": "Procurement Card #",
            "remarks": "Procurement Card Number Crosses over from MRLINE.PCARDNUM",
            "sameAsAttribute": "PCARDNUM",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "PCARDTYPE",
            "required": false,
            "persistent": true,
            "title": "Procurement Card Type",
            "remarks": "Procurement Card Type Crosses over from MRLINE.PCARDTYPE",
            "sameAsAttribute": "PCARDTYPE",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "PCARDEXPDATE",
            "required": false,
            "persistent": true,
            "title": "Procurement Card Expiration",
            "remarks": "Procurement Card Expiration Crosses over from MRLINE.PCARDEXPDATE",
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
            "title": "Procurement Card Verification Value",
            "remarks": "Procurement Card Verification Value",
            "sameAsAttribute": "PCARDVERIFICATION",
            "sameAsObject": "PERSON"
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
            "attributeName": "PRLINEID",
            "required": true,
            "persistent": true,
            "title": "PRLine ID",
            "remarks": "Internal PRLine Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISDISTRIBUTED",
            "required": true,
            "persistent": true,
            "title": "Distributed",
            "remarks": "Specifies whether the line item cost is distributed among multiple GL accounts. The check box is read only. The box is automatically selected if you use the Distribute Costs dialog box to distribute the line item cost among multiple GL accounts. By default, the check box is cleared.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REFWO",
            "required": false,
            "persistent": true,
            "title": "Work Order",
            "remarks": "Identifies the work order referenced on the PR.",
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
            "remarks": "Line type. Possible values include Item, Material, Service, Special Order, or External Catalog Item.",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "remarks": "Long Description for PR Line Remark Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REMARK_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Remark Long Description",
            "remarks": "Long Description for Description for PR Line Item.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TASKID",
            "required": false,
            "persistent": false,
            "title": "WO Task",
            "remarks": "Identifies the work order task. This field applies only to nonstocked and special order items.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WONUM",
            "required": false,
            "persistent": false,
            "title": "Work Order",
            "remarks": "Identifies the work order for the line item. If you specify a work order, Maximo uses the work order record to fill in the Location, Asset, and Debit GL Account fields in the Default Table Data section of the PR Lines tab. If these fields already have entries, Maximo overwrites them.",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "CONDITIONCODE",
            "required": false,
            "persistent": true,
            "title": "Condition Code",
            "remarks": "Condition of the item on the requisition.",
            "sameAsAttribute": "CONDITIONCODE",
            "sameAsObject": "ITEMCONDITION"
        },
        {
            "attributeName": "CONTRACTNUM",
            "required": false,
            "persistent": true,
            "title": "Contract",
            "remarks": "Identifies the contract that was created from the PR line.",
            "sameAsAttribute": "CONTRACTNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "CONTRACTLINENUM",
            "required": false,
            "persistent": true,
            "title": "Contract Line",
            "remarks": "Identifies the line number on the contract that was created from the PR.",
            "sameAsAttribute": "CONTRACTLINENUM",
            "sameAsObject": "CONTRACTLINE"
        },
        {
            "attributeName": "CONTRACTLINEID",
            "required": false,
            "persistent": true,
            "title": "ContractLine ID",
            "remarks": "Identifies the contract line identifier that was created from this PR",
            "sameAsAttribute": "CONTRACTLINEID",
            "sameAsObject": "CONTRACTLINE"
        },
        {
            "attributeName": "CONTRACTREFNUM",
            "required": false,
            "persistent": true,
            "title": "Contract Reference",
            "remarks": "Contract that was used to find the price of the line item.",
            "sameAsAttribute": "CONTRACTNUM",
            "sameAsObject": "CONTRACT"
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
            "remarks": "Specifies if Maximo should copy the PR line to a contract. If the check box is sleceted, Maximo copies the PR line to a contract. If the check box is cleared, Maximo does not copy the PR line to a contract.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONTRACTREFID",
            "required": false,
            "persistent": true,
            "title": "Contract Reference ID",
            "remarks": "Contract reference identifier",
            "sameAsAttribute": "CONTRACTID",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "CONTRACTREFREV",
            "required": false,
            "persistent": true,
            "title": "Contract Reference Revision",
            "remarks": "Revision number of the referenced contract used to find the price of the line item.",
            "sameAsAttribute": "REVISIONNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "CONTRACTREV",
            "required": false,
            "persistent": true,
            "title": "Contract Revision",
            "remarks": "Revision number of the contract that was created from this PR line",
            "sameAsAttribute": "REVISIONNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "SCHEDULEID",
            "required": false,
            "persistent": true,
            "title": "Schedule",
            "remarks": "Unique Identifier of the Payment Schedule",
            "sameAsAttribute": "SCHEDULEID",
            "sameAsObject": "SCHEDULE"
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
            "attributeName": "CONTREFLINEID",
            "required": false,
            "persistent": true,
            "title": "Contract Reference Line ID",
            "remarks": "Identifies the contract line that was used to find the price for this line",
            "sameAsAttribute": "CONTRACTLINEID",
            "sameAsObject": "CONTRACTLINE"
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
            "required": true,
            "persistent": true,
            "title": "Conversion Factor",
            "remarks": "Value used to convert the order unit to the issue unit, and vice versa. If you have specified an order unit in the Order Unit field, Maximo enters the corresponding conversion value in this field. If you have not specified an order unit, Maximo sets the conversion factor to 1.00, indicating that the order unit is the same as the issue unit. You can edit this field, providing the line item is not a service. To determine a conversion factor, divide the order quantity by the issue quantity. For service line items, this field is read-only and always set to 1.00.",
            "sameAsAttribute": "CONVERSION",
            "sameAsObject": "CONVERSION"
        },
        {
            "attributeName": "CONTRACTID",
            "required": false,
            "persistent": true,
            "title": "Identifies the contract identifier that was created from this PR",
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
            "attributeName": "CLASSSTRUCTUREID",
            "required": false,
            "persistent": true,
            "title": "Class Structure",
            "remarks": "Classification Structure identifier",
            "sameAsAttribute": "CLASSSTRUCTUREID",
            "sameAsObject": "CLASSSTRUCTURE"
        },
        {
            "attributeName": "POSITEID",
            "required": false,
            "persistent": true,
            "title": "PO Site",
            "remarks": "PO Site",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
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
            "attributeName": "TAXEXEMPT",
            "required": true,
            "persistent": true,
            "title": "Tax Exempt",
            "remarks": "Select this check box if the item, the tool, or the service is not taxable. The buyer for your organization determines the tax-exempt status of items, of tools, and of services.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RESTYPE",
            "required": false,
            "persistent": true,
            "title": "Reservation Type",
            "remarks": "Specify the type of reservation depending on whether it is a firm request for material or not (hard or soft). The reservation type may also be set to automatic, in which case the reservation type (APHARD or APSOFT) is generated depending on the urgency of the order.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONSIGNMENT",
            "required": true,
            "persistent": true,
            "title": "Consignment",
            "remarks": "Indicates whether the transaction was created for a consignment item.",
            "sameAsAttribute": "CONSIGNMENT",
            "sameAsObject": "INVENTORY"
        },
        {
            "attributeName": "ITEMQTY",
            "required": false,
            "persistent": false,
            "title": "Quantity Requested",
            "remarks": "Number of items you need for the task. If you modify this field, Maximo recalculates the Line Cost field on the Materials subtab, and the Current Estimate Material Cost on the View Costs dialog box. You can edit this field if the work order's status allows work plan material edits. Work order editing rules are set up in the Organizations application.",
            "sameAsAttribute": "ITEMQTY",
            "sameAsObject": "JOBITEM"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "AGREEMENTINPUT",
            "target": "AGREEMENTINPUT",
            "remarks": "Relationship to the non-persistent AgreementInput table. (No where clause). The resulting set will contain zero objects. Note: This relationship is used for find valid agreements for an item.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET",
            "target": "ASSET",
            "remarks": "Relationship to Asset for RecHover in PR  / PR Lines tab / PR Lines table details",
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
            "remarks": "Relationship to the Contract table, used to find contract records for a given purchase requisition line. (contract.contractnum = prline.contractnum and contract.orgid = prline.orgid). The resulting set will contain zero or one object.",
            "whereClause": "contractid = :contractid and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTREF",
            "target": "CONTRACT",
            "remarks": "Relationship to the Contract table, used to find a contract record for a given purchase requisition line contract reference number (contract.contractid = prline.contractrefid and contract.orgid = prline.orgid). The resulting set will contain zero or one object.",
            "whereClause": "contractid = :contractrefid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTREFLINE",
            "target": "CONTRACTLINE",
            "remarks": "Relationship to the ContractLine table, used to find a contract line record for a given purchase requisition line contract reference id. (contractline.contractlineid = prline.contreflineid and contractline.orgid = prline.orgid",
            "whereClause": "contractlineid = :contreflineid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "target": "DRILLDOWN",
            "remarks": "Relationship from the PRLINE to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVENTORY",
            "target": "INVENTORY",
            "remarks": "Relationship to the Inventory table, used to find the inventory record for the item number and storeroom (inventory.itemnum = prline.itemnum and inventory.itemsetid=prline.itemsetid and inventory.location = prline.storeloc and inventory.itemsetid = prline.itemsetid). The resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and location=:storeloc and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVOICELINE",
            "target": "INVOICELINE",
            "remarks": "Relationship to the INVOICELINE line table, used to find all INVOICELINE line records for a given purchase requisition line. (polinenum in (select polinenum from prline where ponum=prline.ponum and siteid=prline.siteid and polinenum=prline.polinenum) and positeid=prline.siteid). The resulting set will contain zero or more objects.",
            "whereClause": "polinenum in (select polinenum from prline where ponum=:ponum and siteid=:siteid and polinenum=:polinenum) and ponum in (select ponum from prline where prnum=:prnum and siteid=:siteid) and positeid = :siteid",
            "cardinality": null
        },
        {
            "name": "INVOICETRANS",
            "target": "INVOICETRANS",
            "remarks": "Relationship to the INVOICETRANS line table, used to find all INVOICETRANS line records for a given purchase order line. (polinenum in (select polinenum from prline where ponum=prline.ponum and siteid=prline.siteid and polinenum=prline.polinenum) and positeid=prline.siteid). The resulting set will contain zero or more objects.",
            "whereClause": "invoicelinenum in (select invoicelinenum from invoiceline where ponum in (select ponum from prline where prnum=:prnum and siteid=:siteid) and siteid=:siteid and polinenum in (select polinenum from prline where ponum=:ponum and siteid=:siteid and polinenum=:polinenum)) and invoicenum in (select invoicenum from invoiceline where ponum in (select ponum from prline where prnum=:prnum and siteid=:siteid) and polinenum=:polinenum and siteid=:siteid) and siteid = :siteid",
            "cardinality": null
        },
        {
            "name": "ITEM",
            "target": "ITEM",
            "remarks": "Relationship to the Item table, used to find the item records for a given purchase requisition line. (item.itemnum = prline.itemnum and item.itemsetid = prline.itemsetid). The resulting set will contain one object.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMCONDITION",
            "target": "ITEMCONDITION",
            "remarks": "Relationship to the itemcondition table, used to find the itemcondition records for a given Purchase Requisition Line record. (itemcondition.itemnum = prline.itemnum and itemcondition.itemsetid=prline.itemsetid and itemcondition.conditioncode=prline.conditioncode). The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid and conditioncode=:conditioncode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMORGINFO",
            "target": "ITEMORGINFO",
            "remarks": "Relationship to the ItemOrgInfo table, used to find an item for a given requisition line. (prline.itemnum = itemorginfo.itemnum and prline.itemsetid = itemorginfo.itemsetid and prline.orgid = itemorginfo.orgid). The resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMORGINFOSTATUS",
            "target": "ITEMORGINFO",
            "remarks": "Relationship to the ItemOrgInfo table, used to find an itemorg record for a given prline.(itemorginfo.itemnum = prline.itemnum and itemorginfo.itemsetid = prline.itemsetid and itemorginfo.orgid = prline.orgid and itemorginfo.status in ('ACTIVE', 'PLANNING', 'PENDOBS')). The resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and orgid=:orgid and status in (select value from synonymdomain where domainid = 'ITEMSTATUS' and maxvalue in ('ACTIVE', 'PLANNING', 'PENDOBS') )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MATRECTRANS",
            "target": "MATRECTRANS",
            "remarks": "Relationship to the MATRECTRANS line table, used to find all MATRECTRANS line records for a given purchase requisition line. (polinenum in (select polinenum from prline where ponum=prline.ponum and siteid=prline.siteid and polinenum=prline.polinenum) and positeid=prline.siteid). The resulting set will contain zero or more objects.",
            "whereClause": "polinenum in (select polinenum from prline where ponum=:ponum and siteid=:siteid and polinenum=:polinenum) and ponum in (select ponum from prline where prnum=:prnum and siteid=:siteid) and positeid = :siteid",
            "cardinality": null
        },
        {
            "name": "PDSPECITEMNUM",
            "target": "PDSPEC",
            "remarks": "Relationship to the pdspec table, used to find the pdspec records for a given pr. The resulting set will contain zero or more objects.",
            "whereClause": "refobjectid=:prlineid and refobjectname='PRLINE' ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRLINESPEC",
            "target": "PDSPEC",
            "remarks": "Relationship to the PRLine table, used to find a purchase req line in the pdspec table. (refobjectid=:prlineid).  The resulting set will contain zero or more objects.",
            "whereClause": "refobjectid=:prlineid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRLINESPECCLASS",
            "target": "PDSPEC",
            "remarks": "Relationship to the pdspec table, used to find the pdspec records for a given pr (classstructureid=:classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "refobjectid=:prlineid and refobjectname='PRLINE' and classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSON",
            "target": "PERSON",
            "remarks": "Relationship to the Person table, used to find all person records for a given PR Line. (prline.requestedby = person.personid). The resulting set will contain zero or one object.",
            "whereClause": "personid=:requestedby",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POLINE",
            "target": "POLINE",
            "remarks": "Relationship to the PO line table, used to find all PO line records for a given purchase requisition line. (polineid in (select polineid from prline where ponum=poline.ponum and siteid=poline.siteid and polinenum=poline.polinenum)). The resulting set will contain zero or more objects.",
            "whereClause": "ponum in (select ponum from prline where ponum=:ponum and siteid=:siteid and polinenum=:polinenum and positeid=poline.siteid) and polinenum in (select polinenum from prline where ponum=:ponum and siteid=:siteid and polinenum=:polinenum  and positeid=poline.siteid)",
            "cardinality": null
        },
        {
            "name": "PR",
            "target": "PR",
            "remarks": "Relationship to the PR table, used to find the purchase requisition records to which a purchase requisition line belongs. (prline.prnum = pr.prnum). The resulting set will contain one object.",
            "whereClause": "prnum=:prnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRCOST",
            "target": "PRCOST",
            "remarks": "Relationship to the PRCost table, used to find the purchase requisition cost records for a given purchase requisition line.  (prline.prlineid = prcost.prlineid). The resulting set will contain one or more objects.",
            "whereClause": "prlineid = :prlineid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RFQLINE",
            "target": "RFQLINE",
            "remarks": "Relationship to the RFQ line table, used to find all RFQ line records for a given purchase requisition line. (polineid in (select polineid from prline where ponum=poline.ponum and siteid=poline.siteid and polinenum=poline.polinenum)). The resulting set will contain zero or more objects.",
            "whereClause": "rfqlineid=:rfqlineid",
            "cardinality": null
        },
        {
            "name": "SERVRECTRANS",
            "target": "SERVRECTRANS",
            "remarks": "Relationship to the SERVRECTRANS line table, used to find all SERVRECTRANS line records for a given purchase requisition line. (polinenum in (select polinenum from prline where ponum=prline.ponum and siteid=prline.siteid and polinenum=prline.polinenum) and positeid=prline.siteid). The resulting set will contain zero or more objects.",
            "whereClause": "polinenum in (select polinenum from prline where ponum=:ponum and siteid=:siteid and polinenum=:polinenum) and ponum in (select ponum from prline where prnum=:prnum and siteid=:siteid) and ponum in (select ponum from prline where prnum=:prnum and siteid=:siteid) and positeid = :siteid",
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
            "remarks": "Relationship from the PRLINE to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKORDER",
            "target": "WORKORDER",
            "remarks": "Relationship to Workorder for RecHover in PR  / PR Lines tab / PR Lines table details",
            "whereClause": "wonum = :wonum and siteid = :siteid",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "PRLINE",
            "source": "CLASSSTRUCTURE",
            "remarks": "Relationship to the prline table, used to find the prline records for a given classstructure. (classstructure.classstructureid = prline.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRLINE_ONLY",
            "source": "CLASSSTRUCTURE",
            "remarks": "Relationship to the prline table, used to find the prline records for a given classstructure.(classstructure.classstructureid =prline .classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid =:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRLINE",
            "source": "CONTRACTLINE",
            "remarks": "Relationship to the PRLine table, used to find all pr lines for a given contract line. (contractline.contractlineid = prline.contractlineid and contractline.orgid = prline.orgid). The resulting set will contain zero or one object.",
            "whereClause": "contractlineid=:contractlineid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRLINE",
            "source": "INVENTORY",
            "remarks": "Relationship from ITEM to the PRLINE table.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRLINEVIEW",
            "source": "INVOICE",
            "remarks": "Relationship to the PO line table,  used to find all PO line records for a given INVOICE. The resulting set will contain zero or more objects.",
            "whereClause": "exists (select 1 from poline  where exists ( select 1 from invoiceline where poline.revisionnum = invoiceline.porevisionnum and poline.ponum = invoiceline.ponum and poline.polinenum = invoiceline.polinenum and poline.siteid = invoiceline.positeid and invoiceline.invoicenum = :invoicenum and invoiceline.siteid=:siteid) and prline.ponum=poline.ponum and prline.siteid=poline.siteid and prline.polinenum=poline.polinenum)",
            "cardinality": null
        },
        {
            "name": "PRLINEVIEW",
            "source": "INVOICELINE",
            "remarks": "Relationship to the PO line table, used to find all PO line records for a given INVOICE line. (polineid in (select polineid from prline where ponum=poline.ponum and siteid=poline.siteid  and polinenum=poline.polinenum)). The resulting set will contain zero or more objects.",
            "whereClause": "polinenum in (select polinenum from invoiceline where invoicenum=:invoicenum and siteid=:siteid and polinenum=:polinenum) and  ponum in (select ponum from invoiceline where invoicenum=:invoicenum and siteid=:siteid and polinenum=:polinenum) and siteid  in (select positeid from invoiceline where invoicenum=:invoicenum and siteid=:siteid and polinenum=:polinenum)",
            "cardinality": null
        },
        {
            "name": "PRLINE",
            "source": "ITEM",
            "remarks": "Relationship from ITEM to the PRLINE table.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRLINE_NOHIST",
            "source": "ITEM",
            "remarks": "Relationship to the PRLINE table, used to find all non-historical pr line records for this item. (item.itemnum=poline.itemnum and exists (select 1 from pr where pr.prnum=prline.prnum and pr.historyflag=no) and prline.itemsetid = item.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and ponum is null and exists (select 1 from pr where pr.prnum=prline.prnum and pr.historyflag=:no) and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRLINE",
            "source": "ITEMORGINFO",
            "remarks": "Relationship from ITEMORGINFO to the PRLINE table.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "OPERLOCPR",
            "source": "LOCATIONS",
            "remarks": "Relationship to the PRLINE table, used to find the PRs for the operating location. The resulting set will contain one or more objects.",
            "whereClause": "location= :location and exists (select 1 from pr where pr.prnum=prline.prnum and pr.historyflag = :no and pr.siteid = prline.siteid) and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRLINEVIEW",
            "source": "MATRECTRANS",
            "remarks": "Relationship to the InvoiceLine table, used to find all invoice line records for a given purchase order line. (invoiceline.ponum = poline.ponum and invoiceline.siteid = poline.siteid and  invoiceline.polinenum = poline.polinenum). The resulting set will contain zero or more objects.",
            "whereClause": "polinenum = :polinenum and ponum = :ponum and siteid = :positeid",
            "cardinality": null
        },
        {
            "name": "PRLINE",
            "source": "MEASUREUNIT",
            "remarks": "Relationship to the prline table, used to find all non-historical prline records using this measureunit. (prline.orderunit=measureunit.measureunitid and exists (select 1 from pr where pr.prnum=prline.prnum and pr.historyflag = :no)  This relationship will find zero or more objects.",
            "whereClause": "orderunit=:measureunitid and exists (select 1 from pr where pr.prnum=prline.prnum and pr.historyflag = :no)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRLINE",
            "source": "PDSPEC",
            "remarks": "Relationship to the PRLine table, used to find a purchase req line in the pdspec table. (prlineid=:refobjectid).  The resulting set will contain zero or more objects.",
            "whereClause": "prlineid=:refobjectid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRLINE",
            "source": "PO",
            "remarks": "Relationship to the PRLine table, used to find all purchase requisition line records for a given purchase order. (prline.ponum = po.ponum). The resulting set will contain zero or more objects.",
            "whereClause": "ponum=:ponum and orgid=:orgid and positeid=:siteid and porevisionnum=:revisionnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRLINES",
            "source": "PO",
            "remarks": "Relationship to the PRLine table, used to find all purchase req line records for a given purchase order. (prline.ponum = po.ponum). The resulting set will contain zero or more objects.Relationship to the POLine table, used to find all purchase order line records for a given purchase order. (poline.ponum = po.ponum). The resulting set will contain zero or more objects.",
            "whereClause": "ponum=:ponum and positeid=:siteid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRLINEVIEW",
            "source": "PO",
            "remarks": "Relationship to the InvoiceLine table, used to find all invoice line records for a given purchase order line. (invoiceline.ponum = poline.ponum and invoiceline.siteid = poline.siteid and  invoiceline.polinenum = poline.polinenum). The resulting set will contain zero or more objects.",
            "whereClause": "(polinenum in (select polinenum from matrectrans where ponum=:ponum and positeid=:siteid) and ponum = :ponum and siteid = :siteid) or (polinenum in (select polinenum from servrectrans where ponum=:ponum and positeid=:siteid) and ponum = :ponum and siteid = :siteid)",
            "cardinality": null
        },
        {
            "name": "PRLINE",
            "source": "POLINE",
            "remarks": "Relationship to the PRLine table, used to find all requisition lines for a given purchase order line. (poline.polineid = prline.polineid and poline.siteid = prline.siteid and poline.orgid = prline.orgid). The resulting set will contain zero or one object.",
            "whereClause": "(polineid=:polineid) or (ponum=:ponum and polinenum=:polinenum and porevisionnum=:revisionnum and siteid=:tositeid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRLINE",
            "source": "PR",
            "remarks": "Relationship to the PRLine table, used to find all purchase requisition line records for a given purchase requisition. (prline.prnum = pr.prnum). The resulting set will contain zero or more objects.",
            "whereClause": "prnum=:prnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MKTPRLINE",
            "source": "PR",
            "remarks": "Relationship to the PRLine table used to obtain all PRLines that have the mktplcitem flag set to true (pr.prnum=prline.prnum and prline.mktplcitem=yes).The resulting set will contain zero or more objects",
            "whereClause": "prnum=:prnum and siteid=:siteid and mktplcitem=:yes",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRLINE",
            "source": "PURCHVIEW",
            "remarks": "Relationship to the PRLine table, used to find all purchase req line records for a given contract. (prline.contractnum = purchview.contractnum). The resulting set will contain zero or more objects.",
            "whereClause": "contractnum=:contractnum and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRLINE",
            "source": "RFQ",
            "remarks": "Relationship to the PRLine table, used to find all purchase requisition line records for a given request for quotation. (rfq.rfqnum = prline.rfqnum). The resulting set will contain zero or more objects.",
            "whereClause": "rfqnum=:rfqnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRLINE",
            "source": "RFQLINE",
            "remarks": "Relationship to the PRLine table, used to find all requisition lines for a given request for quotation line. (rfqline.rfqnum = prline.rfqnum and rfqline.rfqlinenum = prline.rfqlinenum). The resulting set will contain zero or one object.",
            "whereClause": "rfqnum=:rfqnum and rfqlinenum=:rfqlinenum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRLINEVIEW",
            "source": "SERVRECTRANS",
            "remarks": "Relationship to the InvoiceLine table, used to find all invoice line records for a given purchase order line. (invoiceline.ponum = poline.ponum and invoiceline.siteid = poline.siteid and  invoiceline.polinenum = poline.polinenum). The resulting set will contain zero or more objects.",
            "whereClause": "polinenum = :polinenum and ponum = :ponum and siteid = :positeid",
            "cardinality": null
        },
        {
            "name": "PRLINE",
            "source": "SFWVIEW",
            "remarks": "Relationship to the PRLine table, used to find all purchase req line records for a given contract. (prline.contractnum = sfwview.contractnum). The resulting set will contain zero or more objects.",
            "whereClause": "contractnum=:contractnum and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WPPRLINE_NOHIST",
            "source": "WORKORDER",
            "remarks": "Relationship to the PRLINE table, used to find all non-historical pr line records for this item. (item.itemnum=poline.itemnum and exists (select 1 from pr where pr.prnum=prline.prnum and pr.historyflag=no) and prline.itemsetid = item.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum in (select itemnum from wpitem where wonum=:wonum and itemsetid=prline.itemsetid and storelocsite=prline.siteid and location=prline.storeloc) and ponum is null and exists (select 1 from pr where pr.prnum=prline.prnum and pr.historyflag=:no)",
            "cardinality": null
        },
        {
            "name": "WPPRLINE_NOHIST_ALL",
            "source": "WORKORDER",
            "remarks": "Relationship to the PRLINE table, used to find all non-historical pr line records for this item. (item.itemnum=poline.itemnum and exists (select 1 from pr where pr.prnum=prline.prnum and pr.historyflag=no) and prline.itemsetid = item.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum in (select itemnum from wpitem where wonum=:wonum and itemsetid=prline.itemsetid) and ponum is null and exists (select 1 from pr where pr.prnum=prline.prnum and pr.historyflag=:no)",
            "cardinality": null
        },
        {
            "name": "PRLINE",
            "source": "WORKORDER",
            "remarks": "Relationship to the PRLINE table, used to find all purchase request lines for a work order. (prline.refwo = workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "refwo=:wonum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRLINEWITHNOPOLINE",
            "source": "WORKORDER",
            "remarks": "Relationship to the PRLINE table, used to find all purchase request lines for a workorder. This resulting set will contain zero or more objects.",
            "whereClause": "refwo=:wonum and siteid=:siteid and ponum is null and polinenum is null and prnum in (select prnum from pr where pr.prnum=prline.prnum and status not in (select value from synonymdomain where domainid='PRSTATUS' and maxvalue in('CAN','COMP')))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWPRLINE",
            "source": "WORKORDER",
            "remarks": "Relationship to the PRLINE table, used to find all purchase request lines for a work order. This resulting set will contain zero or more objects.",
            "whereClause": "refwo=:wonum and siteid=:siteid and prnum in (select prnum from pr where pr.prnum=prline.prnum and status not in (select value from synonymdomain where domainid='PRSTATUS' and maxvalue='CAN'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRLINE",
            "source": "WPMATERIAL",
            "remarks": "Relationship to find the prline from a planned material on a work order",
            "whereClause": "prnum=:pr and prlinenum=:prlinenum and siteid=:siteid",
            "cardinality": null
        }
    ]
}