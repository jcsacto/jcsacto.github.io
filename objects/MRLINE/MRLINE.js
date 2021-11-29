mos = {
    "objectName": "MRLINE",
    "className": "psdi.app.mr.MRLineSet",
    "description": "Material Request Line items",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MRLINEID",
    "primaryKeyColumns": [
        "SITEID",
        "MRLINEID"
    ],
    "logicalRelationships": [
        {
            "objectName": "MRLINE",
            "targetObject": "MRCOST",
            "parentKeys": "SITEID, MRLINEID",
            "targetKeys": "SITEID, MRLINEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MR Line",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "ASSET",
            "targetObject": "MRLINE",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 89",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "MRLINE",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "STORELOCSITE, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 90",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "MRLINE",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "MRLINE",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITY, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "MRLINE",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITYGROUP, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity Group",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "MRLINE",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, MANUFACTURER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Manufacturer on MR Line",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "MRLINE",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor on MR Line",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "MRLINE",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTREFNUM, CONTRACTREFREV, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract",
            "longDescription": null
        },
        {
            "objectName": "CURRENCY",
            "targetObject": "MRLINE",
            "parentKeys": "CURRENCYCODE",
            "targetKeys": "CURRENCYCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Record Currency",
            "longDescription": null
        },
        {
            "objectName": "FINCNTRL",
            "targetObject": "MRLINE",
            "parentKeys": "ORGID, FINCNTRLID",
            "targetKeys": "ORGID, FINCNTRLID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Financial Control",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "MRLINE",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "ITEMCONDITION",
            "targetObject": "MRLINE",
            "parentKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "targetKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item Condition",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "MRLINE",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "MRLINE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "MRLINE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, STORELOC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 126",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "MRLINE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STORELOCSITE, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 127",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "MRLINE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STORELOCSITE, STORELOC",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MR Storeroom",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MRLINE",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ORDERUNIT, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 137",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MRLINE",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ORDERUNIT, STORELOCSITE, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 138",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MRLINE",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "ORDERUNIT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measure Unit",
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
            "objectName": "ORGANIZATION",
            "targetObject": "MRLINE",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PR",
            "targetObject": "MRLINE",
            "parentKeys": "SITEID, PRNUM",
            "targetKeys": "SITEID, PRNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MR created for the PR",
            "longDescription": null
        },
        {
            "objectName": "PR",
            "targetObject": "MRLINE",
            "parentKeys": "SITEID, PRNUM",
            "targetKeys": "STORELOCSITE, PRNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 2",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "MRLINE",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 46",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "MRLINE",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "MRLINE",
            "parentKeys": "SITEID",
            "targetKeys": "STORELOCSITE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 147",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "MRLINE",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, REFWO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Order",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "MRLINE",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "STORELOCSITE, REFWO",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 31",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "MRNUM",
            "required": true,
            "persistent": true,
            "title": "Requisition",
            "remarks": "Material request number",
            "sameAsAttribute": "MRNUM",
            "sameAsObject": "MR"
        },
        {
            "attributeName": "MRLINENUM",
            "required": true,
            "persistent": true,
            "title": "Line",
            "remarks": "Line tem number. If you do not enter a number, Maximo generates one automatically. The line item number is unique for this requisition.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MRLINEID",
            "required": true,
            "persistent": true,
            "title": "Line id",
            "remarks": "Material request line ID",
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
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the line item. To enter or view additional information, click the Long Description button.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "STORELOC",
            "required": false,
            "persistent": true,
            "title": "Store Location",
            "remarks": "Storeroom location of the item. If you enter a new location for this item, the item will be added to that location at the time of receipt.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "QTY",
            "required": false,
            "persistent": true,
            "title": "Quantity",
            "remarks": "Number of units of the requested item.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "UNITCOST",
            "required": false,
            "persistent": true,
            "title": "Unit Cost",
            "remarks": "Cost per unit of the item. If entering a service line item, you can enter a unit cost here and a number of hours in the Quantity field. Or, you can enter a lump sum amount in the Line Cost field.",
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
            "attributeName": "DIRECTREQ",
            "required": true,
            "persistent": true,
            "title": "Direct Request",
            "remarks": "Flag to specify if line is a direct request",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": true,
            "title": "Asset",
            "remarks": "The asset that requires this item",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": true,
            "title": "Location",
            "remarks": "The location that requires this item",
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
            "attributeName": "REQUIREDDATE",
            "required": false,
            "persistent": true,
            "title": "Required Date",
            "remarks": "Date the line item is needed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AVAILDATE",
            "required": false,
            "persistent": true,
            "title": "Available Date",
            "remarks": "The earliest available date for this item",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VENDOR",
            "required": false,
            "persistent": true,
            "title": "Vendor",
            "remarks": "Identifies the vendor for the item.",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
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
            "attributeName": "DROPPOINT",
            "required": false,
            "persistent": true,
            "title": "Drop Point",
            "remarks": "Drop point where the item is to be picked up",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REMARKS",
            "required": false,
            "persistent": true,
            "title": "Remarks",
            "remarks": "Remarks",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COMPLETE",
            "required": true,
            "persistent": true,
            "title": "Line Complete",
            "remarks": "Is line complete",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PRNUM",
            "required": false,
            "persistent": true,
            "title": "PR",
            "remarks": "The PR number that includes this line",
            "sameAsAttribute": "PRNUM",
            "sameAsObject": "PR"
        },
        {
            "attributeName": "PARTIALISSUE",
            "required": true,
            "persistent": true,
            "title": "Partial Issue",
            "remarks": "Is partial issue allowed",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CATEGORY",
            "required": false,
            "persistent": true,
            "title": "Category",
            "remarks": "Category of this line item",
            "sameAsAttribute": "CATEGORY",
            "sameAsObject": "INVENTORY"
        },
        {
            "attributeName": "MRLIN1",
            "required": false,
            "persistent": true,
            "title": "Extra Field1",
            "remarks": "MRLINE Extra Field 1",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MRLIN2",
            "required": false,
            "persistent": true,
            "title": "Extra Field2",
            "remarks": "MRLINE Extra Field 2",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MRLIN3",
            "required": false,
            "persistent": true,
            "title": "Extra Field3",
            "remarks": "MRLINE Extra Field 3",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MRLIN4",
            "required": false,
            "persistent": true,
            "title": "Extra Field4",
            "remarks": "MRLINE Extra Field 4",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MRLIN5",
            "required": false,
            "persistent": true,
            "title": "Extra Field5",
            "remarks": "MRLINE Extra Field 5",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "CHARGESTORE",
            "required": true,
            "persistent": true,
            "title": "Charge to Store",
            "remarks": "Charge to Store",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MRLALN1",
            "required": false,
            "persistent": true,
            "title": "MRLALN1",
            "remarks": "Extra Crossover Field Crosses over to PRLINE.PRLALN1 or POLINE.POLALN1",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MRLALN2",
            "required": false,
            "persistent": true,
            "title": "MRLALN2",
            "remarks": "Extra Crossover Field Crosses over to PRLINE.PRLALN2 or POLINE.POLALN2",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MRLALN3",
            "required": false,
            "persistent": true,
            "title": "MRLALN3",
            "remarks": "Extra Crossover Field Crosses over to PRLINE.PRLALN3 or POLINE.POLALN3",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MRLALN4",
            "required": false,
            "persistent": true,
            "title": "MRLALN4",
            "remarks": "Extra Crossover Field Crosses over to PRLINE.PRLALN4 or POLINE.POLALN4",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MRLALN5",
            "required": false,
            "persistent": true,
            "title": "MRLALN5",
            "remarks": "Extra Crossover Field Crosses over to PRLINE.PRLALN5 or POLINE.POLALN5",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PCARDNUM",
            "required": false,
            "persistent": true,
            "title": "Card #",
            "remarks": "Procurement Card Number Crosses over to PRLINE.PCARDNUM or POLINE.PCARDNUM",
            "sameAsAttribute": "PCARDNUM",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "PCARDTYPE",
            "required": false,
            "persistent": true,
            "title": "Card Type",
            "remarks": "Procurement Card Type Crosses over to PRLINE.PCARDTYPE or POLINE.PCARDTYPE",
            "sameAsAttribute": "PCARDTYPE",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "PCARDEXPDATE",
            "required": false,
            "persistent": true,
            "title": "Expiration Date",
            "remarks": "Procurement Card Expiration Crosses over to PRLINE.PCARDEXPDATE or POLINE.PCARDEXPDATE",
            "sameAsAttribute": "PCARDEXPDATE",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CLASSIFICATIONID",
            "required": false,
            "persistent": true,
            "title": "Classification",
            "remarks": "Asset Classification identifier",
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
            "attributeName": "PCARDVERIFICATION",
            "required": false,
            "persistent": true,
            "title": "Card Verification Value",
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
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VENDORPACKQUANTITY",
            "required": false,
            "persistent": true,
            "title": "Vendor Pack Quantity",
            "remarks": "The quantity of the pack code. For example, pack code is box, pack quantity is 12.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VENDORWAREHOUSE",
            "required": false,
            "persistent": true,
            "title": "Vendor Warehouse",
            "remarks": "Vendor warehouse that the product will come from.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CURRENCYCODE",
            "required": true,
            "persistent": true,
            "title": "Currency",
            "remarks": "Currency code representing the vendor currency.",
            "sameAsAttribute": "CURRENCYCODE",
            "sameAsObject": "CURRENCY"
        },
        {
            "attributeName": "LINECOST1",
            "required": false,
            "persistent": true,
            "title": "Line Cost 1",
            "remarks": "Base Currency Line Cost 1.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LINECOST2",
            "required": false,
            "persistent": true,
            "title": "Line Cost2",
            "remarks": "Base Currency Line Cost 2.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EXCHANGERATE",
            "required": false,
            "persistent": true,
            "title": "Exchange Rate",
            "remarks": "Base Exchange Rate 1",
            "sameAsAttribute": "EXCHANGERATE",
            "sameAsObject": "EXCHANGE"
        },
        {
            "attributeName": "EXCHANGERATE2",
            "required": false,
            "persistent": true,
            "title": "Exchange Rate 2",
            "remarks": "Base Exchange Rate 2.",
            "sameAsAttribute": "EXCHANGERATE",
            "sameAsObject": "EXCHANGE"
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
            "attributeName": "ISDISTRIBUTED",
            "required": true,
            "persistent": true,
            "title": "Is Distributed",
            "remarks": "Is the cost on this MRLINE distributed",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "LINETYPE",
            "required": true,
            "persistent": true,
            "title": "Line Type",
            "remarks": "Line type. Possible values include Item, Material, Service, Special Order, or External Catalog Item.",
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
            "remarks": "Long Description for Description of item",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TASKID",
            "required": false,
            "persistent": false,
            "title": "Task",
            "remarks": "TASKID",
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
            "attributeName": "CONDITIONCODE",
            "required": false,
            "persistent": true,
            "title": "Condition Code",
            "remarks": "The condition of the item requested",
            "sameAsAttribute": "CONDITIONCODE",
            "sameAsObject": "ITEMCONDITION"
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
            "attributeName": "CONTRACTREFNUM",
            "required": false,
            "persistent": true,
            "title": "Contract Reference",
            "remarks": "Identifies the contract that was used to find the price for this line",
            "sameAsAttribute": "CONTRACTNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "CONTRACTREFREV",
            "required": false,
            "persistent": true,
            "title": "Contract Reference Revision",
            "remarks": "Revision number of the reference contract that was used to find the price for this line",
            "sameAsAttribute": "REVISIONNUM",
            "sameAsObject": "CONTRACT"
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
            "attributeName": "QTY_V",
            "required": false,
            "persistent": false,
            "title": "Quantity",
            "remarks": "Quantity",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REQUIREDDATE_V",
            "required": false,
            "persistent": false,
            "title": "Required Date",
            "remarks": "Date Required",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONVERSION",
            "required": false,
            "persistent": true,
            "title": "Conversion Factor",
            "remarks": "Value used to convert the order unit to the issue unit, and vice versa. If you have specified an order unit in the Order Unit field, Maximo enters the corresponding conversion value in this field. If you have not specified an order unit, Maximo sets the sets the conversion factor to 1.00, indicating that the order unit is the same as the issue unit. You can edit this field, providing the line item is not a service. To determine a conversion factor, divide the order quantity by the issue quantity. For service line items, this field is read-only and always set to 1.00.",
            "sameAsAttribute": "CONVERSION",
            "sameAsObject": "CONVERSION"
        },
        {
            "attributeName": "STORELOCSITE",
            "required": false,
            "persistent": true,
            "title": "Storeroom Site",
            "remarks": "Storeroom's Site",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
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
            "remarks": "Classification Structure Identifier",
            "sameAsAttribute": "CLASSSTRUCTUREID",
            "sameAsObject": "CLASSSTRUCTURE"
        },
        {
            "attributeName": "RESTYPE",
            "required": true,
            "persistent": true,
            "title": "Reservation Type",
            "remarks": "Specify the type of reservation depending on whether it is a firm request for material or not (hard or soft). The reservation type may also be set to automatic, in which case the reservation type (APHARD or APSOFT) is generated depending on the urgency of the order.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "CLASSSPEC",
            "target": "CLASSSPEC",
            "remarks": "Relationship to the classspec table, used to find the classspec record for a given MRLINESPEC. (MRLINESPEC.classspecid=classspec.classspecid) The resulting set will contain one object.",
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
            "name": "CONTRACTREF",
            "target": "CONTRACT",
            "remarks": "Relationship to the Contract table, used to find a contract record for a given material requisition line contract reference number (contract.contractid = mrline.contractrefid and contract.orgid = mrline.orgid). The resulting set will contain zero or one object.",
            "whereClause": "contractid = :contractrefid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "target": "DOCLINKS",
            "remarks": "Relationship to the DocLinks table, used to find all document records for a given material requisition line. (doclinks.keytable = 'MRLINE' and doclinks.keycolumn = 'MRLINEID' and doclinks.keyvalue = mrline.mrlineid$DOCLINKS.KEYVALUE). The resulting set will contain zero or more objects. Note: The MRLine.MRLineID field value will be formatted to match the DocLinks.KeyValue data type.",
            "whereClause": "ownertable = 'MRLINE' and ownerid = :mrlineid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "target": "DRILLDOWN",
            "remarks": "Relationship from the MRLINE to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVENTORY",
            "target": "INVENTORY",
            "remarks": "Relationship to the Inventory table, used to find the inventory records based on the storeroom for a given material requisition line. (mrline.itemnum = inventory.itemnum and mrline.storeloc = inventory.location and inventory.itemsetid = mrline.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and location = :storeloc and itemsetid = :itemsetid and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEM",
            "target": "ITEM",
            "remarks": "Relationship to Item table, used to find the item records for a given material requisition line. (mrline.itemnum = item.itemnum and poline.itemsetid = mrline.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMCONDITION",
            "target": "ITEMCONDITION",
            "remarks": "Relationship to the itemcondition table, used to find the itemcondition records for a given MR Line record. (itemcondition.itemnum = mrline.itemnum and itemcondition.itemsetid=mrline.itemsetid and itemcondition.conditioncode=mrline.conditioncode). The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid and conditioncode=:conditioncode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMORGINFO",
            "target": "ITEMORGINFO",
            "remarks": "Relationship to the ItemOrgInfo table, used to find an item for a given material requisition line. (mrline.itemnum = itemorginfo.itemnum and mrline.itemsetid = itemorginfo.itemsetid and mrline.orgid = itemorginfo.orgid). The resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMORGINFOSTATUS",
            "target": "ITEMORGINFO",
            "remarks": "Relationship to the ItemOrgInfo table, used to find an itemorg record for a given mrline.(itemorginfo.itemnum = mrline.itemnum and itemorginfo.itemsetid = mrline.itemsetid and itemorginfo.orgid = mrline.orgid and itemorginfo.status in ('ACTIVE', 'PLANNING', 'PENDOBS')). The resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and orgid=:orgid and status in (select value from synonymdomain where domainid = 'ITEMSTATUS' and maxvalue in ('ACTIVE', 'PLANNING', 'PENDOBS') )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MATUSETRANSFORMRLINE",
            "target": "MATUSETRANS",
            "remarks": "Relationship to MatUseTrans table, used to find the MatUseTrans records for a given material requisition line. (mrline.mrnum = matusetrans.mrnum and mrline.mrlinenum = matusetrans.mrlinenum). The resulting set will contain zero or more objects.",
            "whereClause": "mrnum = :mrnum and mrlinenum = :mrlinenum and issuetype in (select value from synonymdomain where maxvalue in ('RETURN', 'RECEIPT') and domainid='ISSUETYP') and siteid=:siteid ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MR",
            "target": "MR",
            "remarks": "Relationship to the MR table, used to find the mr records to which a material requisition line belongs to. (mr.mrnum = mrline.mrnum). The resulting set will contain zero or more objects.",
            "whereClause": "mrnum = :mrnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MRCOST",
            "target": "MRCOST",
            "remarks": "Relationship to the MRCost table, used to find the mrcost records for a given material requisition line. (mrline.mrnum = mrcost.mrnum). The resulting set will contain zero or more objects.",
            "whereClause": "mrlineid = :mrlineid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MRLINESPEC",
            "target": "PDSPEC",
            "remarks": "Relationship to the pdspec table, used to find the pdspec records for a given mr (pdownerid=:mrid and refobjectname=''MRLINE''). The resulting set will contain zero or more objects.",
            "whereClause": "refobjectid=:mrlineid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MRLINESPECCLASS",
            "target": "PDSPEC",
            "remarks": "Relationship to the pdspec table, used to find the pdspec records for a given MRLINE (classstructureid=:classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "refobjectid=:mrlineid and refobjectname='MRLINE' and classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PO",
            "target": "PO",
            "remarks": "Relationship to the PO table, used to find all the po records whose lines were created from a given material requisition line. (ponum in (select ponum from poline where mrnum = mrline.mrnum and mrlinenum = mrline.mrlinenum). The resulting set will contain zero or more objects. Note : When a material requisition is approved, its lines are copied to POLines and this relationship helps find the PO to which these POLines belong to.",
            "whereClause": "ponum in (select ponum from poline where mrnum = :mrnum and mrlinenum = :mrlinenum and po.revisionnum=poline.revisionnum) and siteid=:siteid order by revisionnum desc",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PR",
            "target": "PR",
            "remarks": "Relationship to the PR table, used to find all the pr records whose lines were created from a given material requisition line. (prnum in (select prnum from prline where mrnum = mrline.mrnum and mrlinenum = mrline.mrlinenum). The resulting set will contain zero or more objects.  Note : When a material requisition is approved, its lines are copied to PRLines and this relationship helps find the PR to which these PRLines belong to.",
            "whereClause": "prnum in (select prnum from prline where mrnum = :mrnum and mrlinenum = :mrlinenum) and siteid=:siteid and status not in (select value from synonymdomain where domainid='PRSTATUS' and maxvalue = 'CAN') ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RFQ",
            "target": "RFQ",
            "remarks": "Relationship to the RFQ table, used to find all the rfq records for a given material requisition line. (rfqnum in (select rfqnum from rfqline where mrnum = mrline.mrnum and mrlinenum = mrline.mrlinenum). The resulting set will contain zero or more objects. Note: The approval of material requisition creates one or more purchase requisitions. A Request for Quotation may be created from a purchase requisition if desired and this relationship is used to find all such RFQs.",
            "whereClause": "rfqnum in (select rfqnum from rfqline where mrnum = :mrnum and mrlinenum = :mrlinenum) and siteid=:siteid",
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
            "remarks": "Relationship from the MRLINE to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "MRLINE",
            "source": "CLASSSTRUCTURE",
            "remarks": "Relationship to the mrline table, used to find the mrline records for a given classstructure. (classstructure.classstructureid = mrline.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MRLINE_ONLY",
            "source": "CLASSSTRUCTURE",
            "remarks": "Relationship to the mrline table, used to find the mrline records for a given classstructure.(classstructure.classstructureid =mrline .classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid =:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MRLINE",
            "source": "INVENTORY",
            "remarks": "Relationship from ITEM to the MRLINE table.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MRLINE",
            "source": "ITEM",
            "remarks": "Relationship from ITEM to the MRLINE table.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MRLINE",
            "source": "ITEMORGINFO",
            "remarks": "Relationship from ITEMORGINFO to the MRLINE table.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MRLINE",
            "source": "MEASUREUNIT",
            "remarks": "Relationship to the mrline table, used to find all non-historical mrline records using this measureunit. (mrline.orderunit=measureunit.measureunitid and exists (select 1 from mr where mr.mrnum=mrline.mrnum and mr.historyflag = :no)  This relationship will find zero or more objects.",
            "whereClause": "orderunit=:measureunitid and exists (select 1 from mr where mr.mrnum=mrline.mrnum and mr.historyflag = :no)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MRLINE",
            "source": "MR",
            "remarks": "Relationship to the MRLine table, used to find all mrline records for a given material requisition. (mrline.mrnum = mr.mrnum). The resulting set will contain zero or more objects.",
            "whereClause": "mrnum = :mrnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MRLINE",
            "source": "PDSPEC",
            "remarks": "Relationship to the MRLine table, used to find a mrline in the pdspec table. (mrlineid=:refobjectid).  The resulting set will contain zero or more objects.",
            "whereClause": "mrlineid=:refobjectid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MRLINE",
            "source": "WORKORDER",
            "remarks": "Relationship to the MRLINE table, used to find all material request lines for a work order. (mrline.refwo = workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "refwo=:wonum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ]
}