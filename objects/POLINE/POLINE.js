mos = {
    "objectName": "POLINE",
    "className": "psdi.app.po.POLineSet",
    "description": "The POLINE Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "POLINEID",
    "primaryKeyColumns": [
        "POLINEID"
    ],
    "logicalRelationships": [
        {
            "objectName": "POLINE",
            "targetObject": "INVRESERVE",
            "parentKeys": "POLINEID",
            "targetKeys": "POLINEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PO Line Inventory Reservations",
            "longDescription": null
        },
        {
            "objectName": "POLINE",
            "targetObject": "PDSPEC",
            "parentKeys": "POLINEID",
            "targetKeys": "REFOBJECTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PO Line",
            "longDescription": null
        },
        {
            "objectName": "POLINE",
            "targetObject": "POCOST",
            "parentKeys": "POLINEID",
            "targetKeys": "POLINEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PO Line",
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
            "objectName": "POLINE",
            "targetObject": "SHIPMENTLINE",
            "parentKeys": "POLINEID",
            "targetKeys": "POLINEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "POLine",
            "longDescription": null
        },
        {
            "objectName": "POLINE",
            "targetObject": "WMASSIGNMENT",
            "parentKeys": "POLINEID",
            "targetKeys": "GENFORPOLINEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work generated for POLine",
            "longDescription": null
        },
        {
            "objectName": "POLINE",
            "targetObject": "WOACTIVITY",
            "parentKeys": "POLINEID",
            "targetKeys": "GENFORPOLINEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PO Line this Activity was generated for.",
            "longDescription": null
        },
        {
            "objectName": "POLINE",
            "targetObject": "WOCHANGE",
            "parentKeys": "POLINEID",
            "targetKeys": "GENFORPOLINEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PO Line this Change was generated for.",
            "longDescription": null
        },
        {
            "objectName": "POLINE",
            "targetObject": "WORELEASE",
            "parentKeys": "POLINEID",
            "targetKeys": "GENFORPOLINEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "POLine for which this Release was generated.",
            "longDescription": null
        },
        {
            "objectName": "POLINE",
            "targetObject": "WORKORDER",
            "parentKeys": "POLINEID",
            "targetKeys": "GENFORPOLINEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Purchase Order Line this Work Order was generated for.",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "ADDRESS",
            "targetObject": "POLINE",
            "parentKeys": "ORGID, ADDRESSCODE",
            "targetKeys": "ORGID, SHIPTO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Ship To Address",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "POLINE",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 125",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "POLINE",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "TOSITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 126",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "POLINE",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "POLINE",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITY, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "POLINE",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITYGROUP, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity Group",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "POLINE",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, MANUFACTURER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Manufacturer on PO Line",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "POLINE",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTREFNUM, CONTRACTREFREV, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "POLINE",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTREFNUM, REVISIONNUM, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 35",
            "longDescription": null
        },
        {
            "objectName": "FINCNTRL",
            "targetObject": "POLINE",
            "parentKeys": "ORGID, FINCNTRLID",
            "targetKeys": "ORGID, FINCNTRLID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Financial Control",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "POLINE",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "ITEMCONDITION",
            "targetObject": "POLINE",
            "parentKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "targetKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item Condition",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "POLINE",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "POLINE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 153",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "POLINE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, STORELOC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 154",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "POLINE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "TOSITEID, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 155",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "POLINE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "TOSITEID, STORELOC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 156",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "POLINE",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ORDERUNIT, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 205",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "POLINE",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ORDERUNIT, TOSITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 206",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "POLINE",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "ORDERUNIT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measure Unit",
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
            "objectName": "ORGANIZATION",
            "targetObject": "POLINE",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "POLINE",
            "parentKeys": "PERSONID",
            "targetKeys": "ENTERBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who entered the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "POLINE",
            "parentKeys": "PERSONID",
            "targetKeys": "REQUESTEDBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Requested By",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "POLINE",
            "parentKeys": "PERSONID",
            "targetKeys": "SHIPTOATTN",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Ship To Attention",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "POLINE",
            "parentKeys": "PERSONID",
            "targetKeys": "SUPERVISOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Supervisor",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "POLINE",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "SITEID, PONUM, CONTRACTREFREV",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 35",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "POLINE",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "SITEID, PONUM, REVISIONNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Lines of the Purchase Order",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "POLINE",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "TOSITEID, PONUM, CONTRACTREFREV",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 37",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "POLINE",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "TOSITEID, PONUM, REVISIONNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 38",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "POLINE",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 52",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "POLINE",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "POLINE",
            "parentKeys": "SITEID",
            "targetKeys": "TOSITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "POLINE",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, REFWO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Purchase Order Lines generated for this Work Order.",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "POLINE",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "TOSITEID, REFWO",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 38",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "PONUM",
            "required": true,
            "persistent": true,
            "title": "PO",
            "remarks": "Purchase Order Number",
            "sameAsAttribute": "PONUM",
            "sameAsObject": "PO"
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
            "attributeName": "ORDERQTY",
            "required": false,
            "persistent": true,
            "title": "Quantity",
            "remarks": "Number of units of the ordered item. If the PO was created from a PR or RFQ, the default is the quantity on the PR or RFQ. If the PO was not created from another record, the value defaults to 1. If you are entering a service line item, you can enter a number of hours here and a corresponding hourly cost in the Unit Cost field. You can also leave this field and the Unit Cost field blank, and enter a lump sum amount in the Line Cost field. This is a required field, unless you enter a lump sum cost for a service line item in the Line Cost field.",
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
            "remarks": "Cost per unit of the item. If entering a service line item, you can enter a unit cost here and a number of hours in the Quantity field. Or, you can enter a lump sum amount in the Line Cost field. If you specified a currency code in the Currency field on the PO tab, the unit cost is expressed in that currency.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RECEIVEDQTY",
            "required": false,
            "persistent": true,
            "title": "Quantity Received",
            "remarks": "Number of order units received for the line item.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RECEIVEDUNITCOST",
            "required": false,
            "persistent": true,
            "title": "Received Unit Cost",
            "remarks": "Actual unit cost of the received line item.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RECEIVEDTOTALCOST",
            "required": true,
            "persistent": true,
            "title": "Received Line Cost",
            "remarks": "Actual total cost of the received line item.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REJECTEDQTY",
            "required": true,
            "persistent": true,
            "title": "Quantity Rejected",
            "remarks": "Number of order units rejected for the line item.",
            "sameAsAttribute": "ORDERQTY",
            "sameAsObject": "INVENTORY"
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
            "attributeName": "SUPERVISOR",
            "required": false,
            "persistent": true,
            "title": "Supervisor",
            "remarks": "Person responsible for approving the work to be done. For example, the person who oversees the services provided by a contractor. If this PO is based on a PR where a supervisor was identified on the PR tab, the supervisor's name will appear here by default.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
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
            "remarks": "Describes the PO line item. To enter or view additional information, click the Long Description button.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "PL1",
            "required": false,
            "persistent": true,
            "title": "Pl1",
            "remarks": "Extra Field 01",
            "sameAsAttribute": "RL1",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "PL2",
            "required": false,
            "persistent": true,
            "title": "Pl2",
            "remarks": "Extra Field 02",
            "sameAsAttribute": "RL2",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "PL3",
            "required": false,
            "persistent": true,
            "title": "Pl3",
            "remarks": "Extra Field 03",
            "sameAsAttribute": "RL3",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "PL4",
            "required": false,
            "persistent": true,
            "title": "Pl4",
            "remarks": "Extra Field 04",
            "sameAsAttribute": "RL4",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "PL5",
            "required": false,
            "persistent": true,
            "title": "Pl5",
            "remarks": "Extra Field 05",
            "sameAsAttribute": "RL5",
            "sameAsObject": "PRLINE"
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
            "attributeName": "REQDELIVERYDATE",
            "required": false,
            "persistent": true,
            "title": "Required Date",
            "remarks": "Required Delivery Date",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "POLINENUM",
            "required": true,
            "persistent": true,
            "title": "Line",
            "remarks": "Line tem number. If you do not enter a number, Maximo generates one automatically. The line item number is unique for this PO.",
            "sameAsAttribute": "PRLINENUM",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "TAXED",
            "required": true,
            "persistent": true,
            "title": "Taxed",
            "remarks": "Is the line taxable?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLIN1",
            "required": false,
            "persistent": true,
            "title": "Plin1",
            "remarks": "Extra Field",
            "sameAsAttribute": "IN19",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "PLIN2",
            "required": false,
            "persistent": true,
            "title": "Plin2",
            "remarks": "Extra Field",
            "sameAsAttribute": "IN20",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "PLIN3",
            "required": false,
            "persistent": true,
            "title": "Plin3",
            "remarks": "Extra Field",
            "sameAsAttribute": "IN21",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "PLIN4",
            "required": false,
            "persistent": true,
            "title": "Plin4",
            "remarks": "Extra Field",
            "sameAsAttribute": "IN22",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "PLIN5",
            "required": false,
            "persistent": true,
            "title": "Plin5",
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
            "remarks": "Tax code used to calculate the value in the Tax field. When you enter a new line item or change the Item field, Maximo fills in the Tax Code field with a value taken from the Company tab. Any change to this field updates the Tax Amount field and all PO totals automatically.",
            "sameAsAttribute": "TAXCODE",
            "sameAsObject": "TAX"
        },
        {
            "attributeName": "TAX1",
            "required": true,
            "persistent": true,
            "title": "Tax",
            "remarks": "Amount of tax payable for the line item. Maximo multiplies the Line Cost by the tax codes applied. You can change this value, but Maximo will overwrite your entry if future changes to related fields cause Maximo to recalculate the tax value. Any changes to the Item, Quantity, Unit Cost, Line Cost, or Tax Code fields cause Maximo to recalculate this value. Any change to this field automatically updates the Total Tax and Total Cost fields on the PO tab.",
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
            "remarks": "Comment about the item. To enter or view additional information, click the Long Description button. All information in the Remarks field is on the record Maximo sends to e-commerce enabled vendors. You can use this field to provide additional information to the vendor when you send the purchase order via the Internet.",
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
            "attributeName": "LOADEDCOST",
            "required": true,
            "persistent": true,
            "title": "Loaded Cost",
            "remarks": "Total cost of the line item, including taxes and standard service amounts. A tax amount applies to the loaded cost if either the Tax Code field or Tax field on the PO Lines tab contains a value, and the Add Tax Amount to Vendor Price? option is enabled by your system administrator. A standard service amount applies to the loaded cost if the Prorate Service? check box is selected.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PRORATESERVICE",
            "required": true,
            "persistent": true,
            "title": "Prorate Service",
            "remarks": "Specifies whether the line item is a standard service, such as freight cost or an installation fee, which has been prorated (allocated). The check box is read only. If the check box is selected, the line item is a standard service which has been prorated. If the check box is cleared (the default) the line item is not prorated. Services are prorated in Maximo's Invoices application if your site uses Invoices to manage its invoices. If your site does not use the Invoices application, services are prorated upon PO arrival in the Purchase Orders application.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RECEIPTSCOMPLETE",
            "required": true,
            "persistent": true,
            "title": "Receipts Complete",
            "remarks": "Specifies whether all receipts for this line are complete. The check box is read only. The check box is selected if the Receipts field on the PO tab is COMPLETE, or if the Receipts field is PARTIAL and the Quantity Received amount is greater than or equal to the value in the Quantity field. The box is cleared if the Receipts field is NONE, or if the Receipts field is PARTIAL and the Quantity Received amount is less that the value in the Quantity field.",
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
            "attributeName": "PRORATECOST",
            "required": false,
            "persistent": true,
            "title": "Prorate Cost",
            "remarks": "Amount of special charges loaded on the line item.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "POLINEID",
            "required": true,
            "persistent": true,
            "title": "ID",
            "remarks": "Internal POLine Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "PL6",
            "required": false,
            "persistent": true,
            "title": "PL6",
            "remarks": "Extra Field",
            "sameAsAttribute": "RL6",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "PL7",
            "required": false,
            "persistent": true,
            "title": "PL7",
            "remarks": "Extra Field",
            "sameAsAttribute": "RL7",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "PL8",
            "required": false,
            "persistent": true,
            "title": "PL8",
            "remarks": "Extra Field",
            "sameAsAttribute": "RL8",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "PL9",
            "required": false,
            "persistent": true,
            "title": "PL9",
            "remarks": "Extra Field",
            "sameAsAttribute": "RL9",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "PL10",
            "required": false,
            "persistent": true,
            "title": "PL10",
            "remarks": "Extra Field",
            "sameAsAttribute": "RL10",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "PLIN6",
            "required": false,
            "persistent": true,
            "title": "PLIN6",
            "remarks": "Extra Field",
            "sameAsAttribute": "IN24",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "PLIN7",
            "required": false,
            "persistent": true,
            "title": "PLIN7",
            "remarks": "Extra Field",
            "sameAsAttribute": "IN25",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "PLIN8",
            "required": false,
            "persistent": true,
            "title": "PLIN8",
            "remarks": "Extra Field",
            "sameAsAttribute": "IN26",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "PLIN9",
            "required": false,
            "persistent": true,
            "title": "PLIN9",
            "remarks": "Extra Field",
            "sameAsAttribute": "IN27",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "POLALN1",
            "required": false,
            "persistent": true,
            "title": "POLALN1",
            "remarks": "Extra Crossover Field Crosses over from MRLINE.MRLALN1 or PRLINE.PRLALN1",
            "sameAsAttribute": "MRLALN1",
            "sameAsObject": "MRLINE"
        },
        {
            "attributeName": "POLALN2",
            "required": false,
            "persistent": true,
            "title": "POLALN2",
            "remarks": "Extra Crossover Field Crosses over from MRLINE.MRLALN2 or PRLINE.PRLALN2",
            "sameAsAttribute": "MRLALN2",
            "sameAsObject": "MRLINE"
        },
        {
            "attributeName": "POLALN3",
            "required": false,
            "persistent": true,
            "title": "POLALN3",
            "remarks": "Extra Crossover Field Crosses over from MRLINE.MRLALN3 or PRLINE.PRLALN3",
            "sameAsAttribute": "MRLALN3",
            "sameAsObject": "MRLINE"
        },
        {
            "attributeName": "POLALN4",
            "required": false,
            "persistent": true,
            "title": "POLALN4",
            "remarks": "Extra Crossover Field Crosses over from MRLINE.MRLALN4 or PRLINE.PRLALN4",
            "sameAsAttribute": "MRLALN4",
            "sameAsObject": "MRLINE"
        },
        {
            "attributeName": "POLALN5",
            "required": false,
            "persistent": true,
            "title": "POLALN5",
            "remarks": "Extra Crossover Field Crosses over from MRLINE.MRLALN5 or PRLINE.PRLALN5",
            "sameAsAttribute": "MRLALN5",
            "sameAsObject": "MRLINE"
        },
        {
            "attributeName": "PCARDNUM",
            "required": false,
            "persistent": true,
            "title": "Procurement Card #",
            "remarks": "Procurement Card Number Crosses over from MRLINE.PCARDNUM or PRLINE.PCARDNUM",
            "sameAsAttribute": "PCARDNUM",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "PCARDTYPE",
            "required": false,
            "persistent": true,
            "title": "Procurement Card Type",
            "remarks": "Procurement Card Type Crosses over from MRLINE.PCARDTYPE or PRLINE.PCARDTYPE",
            "sameAsAttribute": "PCARDTYPE",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "PCARDEXPDATE",
            "required": false,
            "persistent": true,
            "title": "Procurement Card Expiration",
            "remarks": "Procurement Card Expiration Crosses over from MRLINE.PCARDEXPDATE or PRLINE.PCARDEXPDATE",
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
            "remarks": "Site the item will be shipped to.",
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
            "remarks": "Identifies the work order referenced on the PO.",
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
            "remarks": "Long Description for Long Description For PO Line Item",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REMARK_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Remark Long Description",
            "remarks": "Long Description for Description for PO Line Item.",
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
            "attributeName": "PRLINENUM",
            "required": false,
            "persistent": false,
            "title": "PR Line",
            "remarks": "Number identifying Prline",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PRNUM",
            "required": false,
            "persistent": false,
            "title": "PR",
            "remarks": "Purchase Requisition Number",
            "sameAsAttribute": "PRNUM",
            "sameAsObject": "PR"
        },
        {
            "attributeName": "PERCENTAGE",
            "required": false,
            "persistent": false,
            "title": "Percentage",
            "remarks": "Percentage of Distribution in each POCost Line",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AMOUNTTORECEIVE",
            "required": false,
            "persistent": false,
            "title": "Amount to Receive",
            "remarks": "Amount to Receive",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RECEIVEDLINECOST",
            "required": false,
            "persistent": false,
            "title": "Received Line Cost",
            "remarks": "Received Line Cost",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "QTYTORECEIVE",
            "required": false,
            "persistent": false,
            "title": "Quantity",
            "remarks": "Quantity to Receive",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONDITIONCODE",
            "required": false,
            "persistent": true,
            "title": "Condition Code",
            "remarks": "Condition of the item ordered.",
            "sameAsAttribute": "CONDITIONCODE",
            "sameAsObject": "ITEMCONDITION"
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
            "attributeName": "SCHEDULEID",
            "required": false,
            "persistent": true,
            "title": "Payment Schedule",
            "remarks": "Identifies the payment schedule for the line item.",
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
            "attributeName": "TOSITEID",
            "required": true,
            "persistent": true,
            "title": "Site",
            "remarks": "To Site Identifier",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "SHIPTO",
            "required": false,
            "persistent": true,
            "title": "Ship To",
            "remarks": "Address code where the item will be shipped.",
            "sameAsAttribute": "ADDRESSCODE",
            "sameAsObject": "ADDRESS"
        },
        {
            "attributeName": "SHIPTOATTN",
            "required": false,
            "persistent": true,
            "title": "Attention",
            "remarks": "Person to whom the item is being shipped.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
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
            "attributeName": "INTRANSITQTY",
            "required": false,
            "persistent": false,
            "title": "Quantity in Transit",
            "remarks": "Quantity in transit",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "CLASSSTRUCTUREID",
            "required": false,
            "persistent": true,
            "title": "Class Structure",
            "remarks": "Classification Structure identifier",
            "sameAsAttribute": "CLASSSTRUCTUREID",
            "sameAsObject": "CLASSSTRUCTURE"
        },
        {
            "attributeName": "CONTREFLINENUM",
            "required": false,
            "persistent": false,
            "title": "Contract Reference Line",
            "remarks": "Identifies the contract line that was used to find the price for this line. Create for MEA group.",
            "sameAsAttribute": "CONTRACTLINENUM",
            "sameAsObject": "CONTRACTLINE"
        },
        {
            "attributeName": "REVISIONNUM",
            "required": true,
            "persistent": true,
            "title": "Revision",
            "remarks": "Revision number of the purchase order. Indicates how many times a purchase order has been revised.",
            "sameAsAttribute": "REVISIONNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "REVSTATUS",
            "required": false,
            "persistent": true,
            "title": "Revision Status",
            "remarks": "Shows when a line item has been added to a purchase order, or when a line item on a purchase order has been modified.",
            "sameAsAttribute": "REVSTATUS",
            "sameAsObject": "CONTRACTLINE"
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
            "attributeName": "RECEIPTTOLERANCE",
            "required": false,
            "persistent": true,
            "title": "Receipt Tolerance %",
            "remarks": "The percentage value of items that can be received over the amount set in the initial agreement.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RECEIPTTOLAMT",
            "required": false,
            "persistent": true,
            "title": "Receipt Tolerance Amount",
            "remarks": "The amount of items that can be received over the amount set in the initial agreement.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RECEIPTTOLQTY",
            "required": false,
            "persistent": true,
            "title": "Receipt Tolerance Quantity",
            "remarks": "The quantity of items that can be received over the amount set in the initial agreement.",
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
            "attributeName": "TOORGID",
            "required": false,
            "persistent": false,
            "title": "To Organization",
            "remarks": "To Organization",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
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
            "remarks": "Relationship to the non-persistent AgreementInput table. Populates with  valid price agreements for the item vendor combination. If there is no vendor on the PO Header this non-persistent MboSet populates with all price agreements that exist for the item irrespective of the vendor.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET",
            "target": "ASSET",
            "remarks": "Relationship to Asset for RecHover in PO  / PO Lines tab / PO Lines table details",
            "whereClause": "assetnum = :assetnum and siteid = :siteid",
            "cardinality": null
        },
        {
            "name": "CLASSSPEC",
            "target": "CLASSSPEC",
            "remarks": "Relationship to the classspec table, used to find the classspec record for a given pdspec. (pdspec.classspecid=classspec.classspecid) The resulting set will contain one object.",
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
            "name": "MANUFACTURER",
            "target": "COMPANIES",
            "remarks": "Relationship to the Companies table, used to find the manufacturer record for a given purchase order line. (companies.company = poline.manufacturer). The resulting set will contain one object.",
            "whereClause": "company = :manufacturer and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTREF",
            "target": "CONTRACT",
            "remarks": "Relationship to the Contract table, used to find a contract record for a given purchase order line contract reference number. (contract.contractid = poline.contractrefid and contract.orgid = poline.orgid). The resulting set will contain zero or one object.",
            "whereClause": "contractid = :contractrefid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTREFLINE",
            "target": "CONTRACTLINE",
            "remarks": "Relationship to the ContractLine table, used to find a contract line record for a given purchase order line contract reference id. (contractline.contractlineid = poline.contreflineid and contractline.orgid = poline.orgid",
            "whereClause": "contractlineid = :contreflineid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "target": "DRILLDOWN",
            "remarks": "Relationship from the POLINE to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVENTORY",
            "target": "INVENTORY",
            "remarks": "Relationship to the Inventory table, used to find the inventory record for the item number and storeroom (inventory.itemnum=poline.itemnum and inventory.itemsetid=poline.itemsetid and inventory.location=poline.storeloc and inventory.siteid=poline.tositeid). The resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and location=:storeloc and siteid=:tositeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVOICE",
            "target": "INVOICE",
            "remarks": "Relationship to the Invoice table, used to find all invoice records for a given purchase order. (invoice.ponum = poline.ponum). The resulting set will contain zero or more objects.",
            "whereClause": "ponum=:ponum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SCHEDULEINVOICE",
            "target": "INVOICE",
            "remarks": "Relationship to the Invoice table, used to find the payment schedule invoice for a given po line. (invoice.scheduleid = poline.scheduleid and invoice.orgid = poline.orgid)",
            "whereClause": "scheduleid = :scheduleid and orgid= :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVOICELINE",
            "target": "INVOICELINE",
            "remarks": "Relationship to the InvoiceLine table, used to find all invoice line records for a given purchase order line. (invoiceline.ponum = poline.ponum and invoiceline.siteid = poline.siteid and  invoiceline.polinenum = poline.polinenum). The resulting set will contain zero or more objects.",
            "whereClause": "ponum=:ponum and positeid=:siteid and polinenum=:polinenum",
            "cardinality": null
        },
        {
            "name": "INVOICETRANS",
            "target": "INVOICETRANS",
            "remarks": "Relationship to the INVOICETRANS line table, used to find all INVOICETRANS line records for a given purchase order line. (polinenum in (select polinenum from prline where ponum=prline.ponum and siteid=prline.siteid and polinenum=prline.polinenum) and positeid=prline.siteid). The resulting set will contain zero or more objects.",
            "whereClause": "invoicelinenum in (select invoicelinenum from invoiceline where ponum=:ponum and polinenum=:polinenum) and invoicenum in (select invoicenum from invoiceline where ponum=:ponum and polinenum=:polinenum) and siteid in (select siteid from invoiceline where ponum=:ponum and polinenum=:polinenum)",
            "cardinality": null
        },
        {
            "name": "INVVENDOR",
            "target": "INVVENDOR",
            "remarks": "Relationship to the InvVendor table, used to find the invvendor records for a given purchase order line. (invvendor.itemnum=poline.itemnum and (invvendor.siteid=poline.siteid or invvendor.siteid is null)). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum=:itemnum and (siteid=:siteid or siteid is null)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEM",
            "target": "ITEM",
            "remarks": "Relationship to the Item table, used to find the item records for a given purchase order line. (item.itemnum = poline.itemnum). The resulting set will contain one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid",
            "cardinality": "SINGLE"
        },
        {
            "name": "ITEMCONDITION",
            "target": "ITEMCONDITION",
            "remarks": "Relationship to the itemcondition table, used to find the itemcondition records for a given Purchase Order Line record. (itemcondition.itemnum = poline.itemnum and itemcondition.itemsetid=poline.itemsetid and itemcondition.conditioncode=poline.conditioncode). The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid and conditioncode=:conditioncode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMORGINFO",
            "target": "ITEMORGINFO",
            "remarks": "Relationship to the ItemOrgInfo table, used to find an item for a given purchase order line. (poline.itemnum = itemorginfo.itemnum and poline.itemsetid = itemorginfo.itemsetid and poline.orgid = itemorginfo.orgid). The resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMORGINFOSTATUS",
            "target": "ITEMORGINFO",
            "remarks": "Relationship to the ItemOrgInfo table, used to find an itemorg info for a given purchase order line.(itemorginfo.itemnum = poline.itemnum and itemorginfo.itemsetid = poline.itemsetid and itemorginfo.orgid = poline.orgid and itemorginfo.status in ('ACTIVE', 'PLANNING', 'PENDOBS')). The resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and orgid=:orgid and status in (select value from synonymdomain where domainid = 'ITEMSTATUS' and maxvalue in ('ACTIVE', 'PLANNING', 'PENDOBS') )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MATRECTRANS",
            "target": "MATRECTRANS",
            "remarks": "Relationship to the MatRecTrans table, used to find the material receipts that were created for a purchase order line. (matrectrans.ponum = poline.ponum and matrectrans.polinenum = poline.polinenum). The resulting set will contain zero or more objects.",
            "whereClause": "ponum = :ponum and polinenum = :polinenum and belongsto is null and positeid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MATRECTRANS_COURIER",
            "target": "MATRECTRANS",
            "remarks": "Relationship to the MatRecTrans table, used to find the matrectrans records for the PONUM that were created for a courier transfer. The resulting set will contain one or more objects.",
            "whereClause": "ponum=:ponum and courier is not null and polinenum = :polinenum and siteid=:tositeid and status in (select value from synonymdomain where domainid = 'ISSUETYP' and maxvalue='TRANSFER')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MATRECTRANS_COURIER_LABOR",
            "target": "MATRECTRANS",
            "remarks": "Relationship to the MatRecTrans table, used to find the MatRecTrans records when the internal PO was transferred to a courier or labor location and the courier/labor still holds the material. (poline.ponum=matrectrans.ponum and poline.polinenum=matrectrans.polinenum and poline.storeloc != matrectrans.tostoreloc and matrectrans.qtyheld > 0\") ). The resulting set will contain zero or more objects.",
            "whereClause": "ponum = :ponum and polinenum = :polinenum and qtyheld > 0 and tostoreloc != :storeloc and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MR",
            "target": "MR",
            "remarks": "Relationship to the MatRecTrans table, used to find the child MatRecTrans records when the PO of this header receipt has cost distribution. (matrectrans.belongsto = matrectrans.matrectransid). The resulting set will contain zero or more objects.",
            "whereClause": "mrnum = :mrnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PDSPECCLASS",
            "target": "PDSPEC",
            "remarks": "Relationship to the pdspec table, used to find the pdspec records for a given po (pdownerid=:poid and refobjectname='POLINE'). The resulting set will contain zero or more objects.",
            "whereClause": "pdownerid=:poid and refobjectname='POLINE' ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PDSPECITEMNUM",
            "target": "PDSPEC",
            "remarks": "Relationship to the pdspec table, used to find the pdspec records for a given po. The resulting set will contain zero or more objects.",
            "whereClause": "refobjectid=:polineid and refobjectname='POLINE' ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POLINESPEC",
            "target": "PDSPEC",
            "remarks": "Relationship to the POLine table, used to find a purchase order line in the pdspec table. (pdpsec.refobjectid = poline.polineid).  The resulting set will contain zero or more objects.",
            "whereClause": "refobjectid=:polineid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POLINESPECCLASS",
            "target": "PDSPEC",
            "remarks": "Relationship to the pdspec table, used to find the pdspec records for a given po (classstructureid=:classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "refobjectid=:polineid and refobjectname='POLINE' and classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSON",
            "target": "PERSON",
            "remarks": "Relationship to the Person table, used to find all person records for a given PO Line. (poline.requestedby = person.personid). The resulting set will contain zero or one object.",
            "whereClause": "personid=:requestedby",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PO",
            "target": "PO",
            "remarks": "Relationship to the PO table, used to find the purchase order records to which a purchase order line belongs to. (po.ponum = poline.ponum). The resulting set will contain zero or more objects.",
            "whereClause": "ponum = :ponum and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POREV",
            "target": "PO",
            "remarks": "Relationship to the PO table, used to find the purchase order records to which a purchase order line belongs to. (po.ponum = poline.ponum). The resulting set will contain zero or more objects.",
            "whereClause": "ponum=:ponum and siteid=:siteid and revisionnum=:revisionnum",
            "cardinality": null
        },
        {
            "name": "REVISIONCOST",
            "target": "POCOST",
            "remarks": "Relationship to the POCost table used to find all POCost for a given Purchase Order",
            "whereClause": "ponum=:ponum and siteid=:siteid and revisionnum in (:revisionnum, (select max(revisionnum) from pocost where ponum=:ponum and siteid=:siteid and revisionnum < :revisionnum)) and polineid in (select polineid from pocost where ponum=:ponum and siteid=:siteid and revstatus in (select value from synonymdomain where domainid='REVSTATUS' and maxvalue in ('ADDED','CHANGED')) and revisionnum=:revisionnum)",
            "cardinality": null
        },
        {
            "name": "POCOST",
            "target": "POCOST",
            "remarks": "Relationship to the POCost table, used to find the purchase order cost records for a given purchase order line. (poline.polineid = pocost.polineid). The resulting set will contain one or more objects.",
            "whereClause": "polineid = :polineid and siteid = :siteid",
            "cardinality": "SINGLE"
        },
        {
            "name": "PRLINE",
            "target": "PRLINE",
            "remarks": "Relationship to the PRLine table, used to find all requisition lines for a given purchase order line. (poline.polineid = prline.polineid and poline.siteid = prline.siteid and poline.orgid = prline.orgid). The resulting set will contain zero or one object.",
            "whereClause": "(polineid=:polineid) or (ponum=:ponum and polinenum=:polinenum and porevisionnum=:revisionnum and siteid=:tositeid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RFQLINE",
            "target": "RFQLINE",
            "remarks": "Relationship to the RFQLine table, used to find all rfq lines for a given purchase order line. (poline.polineid = rfqline.polineid and poline.siteid = rfqline.siteid). The resulting set will contain zero or one object.",
            "whereClause": "ponum=:ponum and polinenum=:polinenum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SCHPURCHVIEW",
            "target": "SCHPURCHVIEW",
            "remarks": null,
            "whereClause": "scheduleid = :scheduleid and orgid= :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SERVRECTRANS",
            "target": "SERVRECTRANS",
            "remarks": "Relationship to the ServRecTrans table, used to find the service receipts that were created for a purchase order line. (servrectrans.ponum = poline.ponum and servrectrans.polinenum = poline.polinenum). The resulting set will contain zero or more objects.",
            "whereClause": "ponum = :ponum and polinenum = :polinenum and belongsto is null and positeid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHIPMENTLINE",
            "target": "SHIPMENTLINE",
            "remarks": "Relationship to the ShipmentLine table, use to find all shipment lines for a give purchase order line. (shipmentline.polineid = poline.polineid). The resulting set will contain zero or more objects.",
            "whereClause": "polineid = :polineid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SITE",
            "target": "SITE",
            "remarks": "Relationship to the Site table, used to find site records for a given purchase order line. (site.siteid = poline.tositeid and site.orgid = poline.orgid). The resulting set will contain zero or one object.",
            "whereClause": "siteid = :tositeid and orgid = :orgid",
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
            "remarks": "Relationship from the POLINE to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKORDER",
            "target": "WORKORDER",
            "remarks": "Relationship to the WorkOrder table, used to find the work order records for a given purchase order line. (workorder.wonum = poline.wonum). The resulting set will contain zero or more objects.",
            "whereClause": "wonum = :wonum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "POLINE",
            "source": "CLASSSTRUCTURE",
            "remarks": "Relationship to the poline table, used to find the poline records for a given classstructure. (classstructure.classstructureid = poline.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POLINE_ONLY",
            "source": "CLASSSTRUCTURE",
            "remarks": "Relationship to the poline table, used to find the poline records for a given classstructure.(classstructure.classstructureid =poline .classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid =:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POLINE",
            "source": "INVENTORY",
            "remarks": "Relationship from ITEM to the POLINE table.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POLINE",
            "source": "INVOICE",
            "remarks": "Relationship to the POLine table, used to find all purchase order lines for a given invoice. (poline.ponum = invoice.ponum and and poline.siteid =  invoice.siteid and poline.scheduleid is null). The resulting set will contain zero or more objects.",
            "whereClause": "ponum = :ponum and siteid = :positeid and scheduleid is null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POLINEVIEW",
            "source": "INVOICE",
            "remarks": "Relationship to the PO line table,  used to find all PO line records for a given INVOICE. The resulting set will contain zero or more objects.",
            "whereClause": "exists (select 1 from invoiceline where poline.revisionnum = invoiceline.porevisionnum and poline.ponum = invoiceline.ponum and poline.polinenum = invoiceline.polinenum and poline.siteid = invoiceline.positeid and invoiceline.invoicenum = :invoicenum and invoiceline.siteid=:siteid)",
            "cardinality": null
        },
        {
            "name": "POLINE",
            "source": "INVOICELINE",
            "remarks": "Relationship to the POLine table, used to find the PO line for a given invoice line. (invoiceline.ponum = poline.ponum and invoiceline.polinenum = poline.polinenum). The resulting set will contain zero or one object.",
            "whereClause": "ponum = :ponum and polinenum = :polinenum and siteid=:positeid and revisionnum = :porevisionnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POLINEVIEW",
            "source": "INVOICELINE",
            "remarks": "Relationship to the PO line table, used to find all PO line records for a given INVOICE line. (polineid in (select polineid from prline where ponum=poline.ponum and siteid=poline.siteid  and polinenum=poline.polinenum)). The resulting set will contain zero or more objects.",
            "whereClause": "revisionnum in (select porevisionnum from invoiceline where invoicenum=:invoicenum and siteid=:siteid and invoicelinenum=:invoicelinenum) and polinenum in (select polinenum from invoiceline where invoicenum=:invoicenum and siteid=:siteid and invoicelinenum=:invoicelinenum) and  ponum in (select ponum from invoiceline where invoicenum=:invoicenum and siteid=:siteid and invoicelinenum=:invoicelinenum) and siteid  in (select positeid from invoiceline where invoicenum=:invoicenum and siteid=:siteid and invoicelinenum=:invoicelinenum)",
            "cardinality": null
        },
        {
            "name": "POLINE",
            "source": "INVUSELINE",
            "remarks": "Relationship to poline table, used to find poline records for the ponum, polinenum and siteid. The resulting set will contain zero or one object.",
            "whereClause": "ponum=:ponum and polinenum=:polinenum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "POLINE",
            "source": "ITEM",
            "remarks": "Relationship from ITEM to the POLINE table.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POLINE_NOHIST",
            "source": "ITEM",
            "remarks": "Relationship to POLINE ,used to find all non-historical po line records, excluding those on POs of type PRICE and BLANK, for this item. The WHERE clause is: poline.itemnum = item.itemnum and exists (select 1 from po where po.ponum=poline.ponum and po.historyflag = :no and po.potype not in (select VALUE from valuelist where listname='POTYPE' AND MAXVALUE in ('PRICE', 'BLANK') ) and poline.itemsetid = item.itemsetid) . The resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and exists (select 1 from po where po.ponum=poline.ponum and po.revisionnum=poline.revisionnum and po.siteid=poline.siteid and po.historyflag = :no) and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POLINE",
            "source": "ITEMORGINFO",
            "remarks": "Relationship from ITEMORGINFO to the POLINE table.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POLINEIN",
            "source": "LOCATIONS",
            "remarks": "Relationship to the POLine table, used to find internal PO lines for material transfers out of a given storeroom location which is the vendor specified on the PO. (poline.storeloc is not null and poline.receiptscomplete = :no and poline.ponum in (select po.ponum from po where po.storeloc = locations.location and po.storelocsiteid = locations.siteid and po.ponum=poline.ponum and po.status in (select value from synonymdomain where domainid='POSTATUS' and maxvalue IN ('APPR','INPRG')))). The resulting set will contain zero or more objects. This relationship is primarily used for the Select PO Items action on the Transfer Out tab of the Issues and Transfers application.",
            "whereClause": "poline.storeloc is not null and poline.storeloc = :location  and poline.receiptscomplete= :no and poline.tositeid = :siteid and exists (select 1 from po where po.ponum=poline.ponum and po.siteid=poline.siteid and po.internal= :yes and po.inspectionrequired= :no  and exists (select 1 from site a, site b where po.storelocsiteid=a.siteid and b.siteid=poline.tositeid and a.orgid=b.orgid and po.ponum=poline.ponum) and po.status in (select value from synonymdomain where domainid='POSTATUS' and maxvalue in ('APPR','INPRG')))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POLINEOUT",
            "source": "LOCATIONS",
            "remarks": "Relationship to the POLine table, used to find internal PO lines for material transfers out of a given storeroom location which is the vendor specified on the PO. (poline.storeloc is not null and receiptscomplete = 0 and poline.ponum in (select ponum from po where po.storeloc=  locations.location and  po.storelocsiteid = locations.siteid and po.ponum=poline.ponum and po.status in (select value from synonymdomain where domainid='POSTATUS' and maxvalue in ('APPR','INPRG'))) and (not exists(select 1 from matrectrans where matrectrans.courier is not null and matrectrans.tostoreloc is null and matrectrans.ponum = poline.ponum and matrectrans.polinenum = poline.polinenum and matrectrans.fromsiteid = poline.siteid and matrectrans.issuetype in (select value from synonymdomain where domainid='ISSUETYP' and maxvalue = 'TRANSFER') ) or ((select sum(quantity) from matrectrans where matrectrans.courier is not null and matrectrans.tostoreloc is null and matrectrans.ponum = poline.ponum and matrectrans.polinenum = poline.polinenum and matrectrans.fromsiteid = poline.siteid and matrectrans.issuetype in (select value from synonymdomain where domainid='ISSUETYP' and maxvalue = 'TRANSFER') ) < poline.orderqty))). The resulting set will contain zero or more objects. This relationship is primarily used for the Select PO Items action on the Transfer Out tab of the Issues and Transfers application.",
            "whereClause": "poline.storeloc is not null and receiptscomplete = :no and poline.ponum in (select ponum from po where po.storeloc=  :location and  po.storelocsiteid = :siteid and po.ponum=poline.ponum and po.siteid=poline.siteid and po.status in (select value from synonymdomain where domainid='POSTATUS' and maxvalue in ('APPR','INPRG'))) and ( (not exists(select 1 from matrectrans where matrectrans.courier is not null and matrectrans.tostoreloc is null and matrectrans.ponum = poline.ponum and matrectrans.polinenum = poline.polinenum and matrectrans.issuetype in (select value from synonymdomain where domainid='ISSUETYP' and maxvalue = 'TRANSFER') ) or ((select sum(quantity) from matrectrans where matrectrans.courier is not null and matrectrans.tostoreloc is null and matrectrans.ponum = poline.ponum and matrectrans.polinenum = poline.polinenum and  matrectrans.issuetype in (select value from synonymdomain where domainid='ISSUETYP' and maxvalue = 'TRANSFER') ) < poline.orderqty)) and (not exists(select 1 from matrectrans where matrectrans.courier is null and matrectrans.tostoreloc in ( select location from locations where type in (select value from synonymdomain where domainid='LOCTYPE' and maxvalue IN ('LABOR', 'COURIER'))) and matrectrans.ponum = poline.ponum and matrectrans.polinenum = poline.polinenum and matrectrans.issuetype in (select value from synonymdomain where domainid='ISSUETYP' and maxvalue = 'TRANSFER') ) or  ((select sum(quantity) from matrectrans where matrectrans.courier is null and matrectrans.tostoreloc in ( select location from locations where type in (select value from synonymdomain where domainid='LOCTYPE' and maxvalue IN ('LABOR','COURIER'))) and matrectrans.ponum = poline.ponum and matrectrans.polinenum = poline.polinenum and  matrectrans.issuetype in (select value from synonymdomain where domainid='ISSUETYP' and maxvalue = 'TRANSFER') ) < poline.orderqty)) ) and exists ( select 1 from invreserve where invreserve.ponum = poline.ponum and invreserve.location = :location and invreserve.storelocsiteid = :siteid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "OPERLOCPO",
            "source": "LOCATIONS",
            "remarks": "Relationship to the POLINE table, used to find the POs for the operating location. The resulting set will contain one or more objects.",
            "whereClause": "location= :location and exists (select 1 from po where po.ponum=poline.ponum and po.historyflag = :no and po.siteid = poline.siteid and po.revisionnum=poline.revisionnum) and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POLINE",
            "source": "MATRECTRANS",
            "remarks": "Relationship to the POLine table, used to find the purchase order line for which the material is received or transferred. (poline.ponum = matrectrans.ponum and polinenum = matrectrans.polinenum). The resulting set will contain zero or one object.",
            "whereClause": "ponum=:ponum and polinenum=:polinenum and siteid=:positeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POLINEVIEW",
            "source": "MATRECTRANS",
            "remarks": "Relationship to the InvoiceLine table, used to find all invoice line records for a given purchase order line. (invoiceline.ponum = poline.ponum and invoiceline.siteid = poline.siteid and  invoiceline.polinenum = poline.polinenum). The resulting set will contain zero or more objects.",
            "whereClause": "polinenum = :polinenum and ponum = :ponum and siteid = :positeid",
            "cardinality": null
        },
        {
            "name": "POLINE",
            "source": "MEASUREUNIT",
            "remarks": "Relationship to the poline table, used to find all non-historical poline records using this measureunit. (poline.orderunit=measureunit.measureunitid and exists (select 1 from po where po.ponum=poline.ponum and po.historyflag = :no)  This relationship will find zero or more objects.",
            "whereClause": "orderunit=:measureunitid and exists (select 1 from po where po.ponum=poline.ponum and po.historyflag = :no)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POLINE",
            "source": "MR",
            "remarks": "Relationship to the POLine table, used to find the poline records whose receipts are not yet complete, for a given material requisition. (receiptscomplete = no). The resulting set will contain zero or more objects.  Note: Approval of a material requisition creates a purchase order and this relationship is used to find all such purchase order lines that are yet to be received.",
            "whereClause": "receiptscomplete = :no and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POLINE",
            "source": "PDSPEC",
            "remarks": "Relationship to the POLine table, used to find a purchase order line in the pdspec table. (pdpsec.refobjectid = poline.polineid).  The resulting set will contain zero or more objects.",
            "whereClause": "polineid=:refobjectid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POLINE",
            "source": "PO",
            "remarks": "Relationship to the POLine table, used to find all purchase order line records for a given purchase order. (poline.ponum = po.ponum). The resulting set will contain zero or more objects.",
            "whereClause": "ponum=:ponum and revisionnum=:revisionnum and siteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "MKTPOLINE",
            "source": "PO",
            "remarks": "Relationship to the POLine table used to obtain all POLines that have the mktplcitem flag set to true (po.ponum=poline.ponum and poline.mktplcitem=yes).The resulting set will contain zero or more objects",
            "whereClause": "ponum=:ponum and siteid=:siteid and mktplcitem=:yes",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POLINEVIEW",
            "source": "PO",
            "remarks": "Relationship to the InvoiceLine table, used to find all invoice line records for a given purchase order line. (invoiceline.ponum = poline.ponum and invoiceline.siteid = poline.siteid and  invoiceline.polinenum = poline.polinenum). The resulting set will contain zero or more objects.",
            "whereClause": "(polinenum in (select polinenum from matrectrans where ponum=:ponum and positeid=:siteid) and ponum = :ponum and siteid = :siteid) or (polinenum in (select polinenum from servrectrans where ponum=:ponum and positeid=:siteid) and ponum = :ponum and siteid = :siteid)",
            "cardinality": null
        },
        {
            "name": "REVISIONLINE",
            "source": "PO",
            "remarks": "Relationship to the POLine table used to find all POLines for a given Purchase Order",
            "whereClause": " ponum=:ponum and siteid=:siteid and revisionnum in (:revisionnum,(select max(revisionnum) from poline where   ponum=:ponum and siteid=:siteid and revisionnum < :revisionnum)) and polinenum in (select polinenum from poline where  ponum=:ponum and siteid=:siteid and revstatus in (select value from synonymdomain where domainid='REVSTATUS' and maxvalue in ('ADDED','CHANGED')) and revisionnum=:revisionnum)",
            "cardinality": null
        },
        {
            "name": "COMPPOLINE",
            "source": "PO",
            "remarks": "Relationship to the POLine table, used to find all purchase order lines which have not yet completed the receipt for a given purchase order. (poline.ponum = po.ponum and poline.receiptscomplete = no). The resulting set will contain zero or more objects. Note: This relationship is used only for the Purchase Orders application, Complete Receipts action to display records based on POLine table with not completed receipt lines.",
            "whereClause": "ponum=:ponum and revisionnum=:revisionnum and receiptscomplete = :no and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POLINE",
            "source": "POCOST",
            "remarks": "Relationship to the POLine table, used to find a purchase order line record for a given purchase order cost. (pocost.polineid = poline.polineid). The resulting set will contain zero or more objects.",
            "whereClause": "polineid = :polineid and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POLINE",
            "source": "PR",
            "remarks": "Relationship to the PO line table, used to find all PO line records for a given purchase requisition. (polineid in (select polineid from prline where prnum=pr.prnum and siteid=pr.siteid. The resulting set will contain zero or more objects.",
            "whereClause": "ponum in (select ponum from prline where prnum=:prnum and siteid=:siteid and positeid=poline.siteid) and polinenum in (select polinenum from prline where prnum=:prnum and siteid=:siteid and positeid=poline.siteid and porevisionnum=poline.revisionnum)",
            "cardinality": null
        },
        {
            "name": "POLINE",
            "source": "PRLINE",
            "remarks": "Relationship to the PO line table, used to find all PO line records for a given purchase requisition line. (polineid in (select polineid from prline where ponum=poline.ponum and siteid=poline.siteid and polinenum=poline.polinenum)). The resulting set will contain zero or more objects.",
            "whereClause": "ponum in (select ponum from prline where ponum=:ponum and siteid=:siteid and polinenum=:polinenum and positeid=poline.siteid) and polinenum in (select polinenum from prline where ponum=:ponum and siteid=:siteid and polinenum=:polinenum  and positeid=poline.siteid)",
            "cardinality": null
        },
        {
            "name": "POLINES",
            "source": "PURCHVIEW",
            "remarks": "Relationship to the POLine table. Used to fetch all the POLines from the POLINE table",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POLINE",
            "source": "SCHPURCHVIEW",
            "remarks": null,
            "whereClause": "scheduleid = :scheduleid and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POLINE",
            "source": "SERVRECTRANS",
            "remarks": "Relationship to the POLine table, used to find all purchase order lines records for a given service receipt. (poline.ponum = servrectrans.ponum and poline.polinenum = servrectrans.polinenum). The resulting set will contain one object.",
            "whereClause": "ponum = :ponum and polinenum = :polinenum and siteid=:positeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POLINEVIEW",
            "source": "SERVRECTRANS",
            "remarks": "Relationship to the InvoiceLine table, used to find all invoice line records for a given purchase order line. (invoiceline.ponum = poline.ponum and invoiceline.siteid = poline.siteid and  invoiceline.polinenum = poline.polinenum). The resulting set will contain zero or more objects.",
            "whereClause": "polinenum = :polinenum and ponum = :ponum and siteid = :positeid",
            "cardinality": null
        },
        {
            "name": "POLINES",
            "source": "SFWVIEW",
            "remarks": "Relationship to the POLine table. Used to fetch all the POLines from the POLINE table",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POLINE",
            "source": "SHIPMENTLINE",
            "remarks": "Relationship to the POLine table, used to find a purchase order line for a given shipment line. (shipmentline.polineid = companies.polineid).  The resulting set will contain zero or more objects. Note : A vendor may decide to send an advance shipping notice before actually sending the materials. This relationship is used to find the purchase order line for which this advance shipping notice was sent.",
            "whereClause": "polineid = :polineid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POLINERECEIPTS",
            "source": "WOANCESTOR",
            "remarks": "Relationship to the POLine table, used to find whether all polines referced to this workorder has completed its receipts. The resulting set will contain zero or one object.",
            "whereClause": "receiptscomplete=:no and refwo=:wonum and siteid=:siteid and ponum in (select ponum from po where ponum=poline.ponum and status not in (select value from synonymdomain where domainid='POSTATUS' and maxvalue in ('CAN','CLOSE')))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWPOLINE",
            "source": "WORKORDER",
            "remarks": "Relationship to the PoLine table, used to find all purchase lines related to this work order. This resulting set will contain zero or more objects.",
            "whereClause": "refwo=:wonum and siteid=:siteid and ponum in (select ponum from po where po.siteid=poline.siteid and po.ponum=poline.ponum and po.revisionnum=poline.revisionnum  and status not in (select value from synonymdomain where domainid='POSTATUS' and maxvalue in ('CAN','HOLD','PNDREV','REVISE')))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POLINE",
            "source": "WORKORDER",
            "remarks": "Relationship to the PoLine table, used to find all purchase lines related to this work order. (PoLine.refwo = workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "refwo=:wonum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POLINEISSUE",
            "source": "WORKORDER",
            "remarks": "Relationship to the PoLine table, used to find all purchase lines related to this work order. (PoLine.refwo = workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "refwo=:wonum and issue=:yes and siteid=:siteid and linetype not in (select value from synonymdomain where domainid='LINETYPE' and maxvalue in('SERVICE','STDSERVICE'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WPPOLINE_NOHIST",
            "source": "WORKORDER",
            "remarks": "Relationship to POLINE ,used to find all non-historical po line records, excluding those on POs of type PRICE and BLANK, for this item. The WHERE clause is: poline.itemnum = item.itemnum and exists (select 1 from po where po.ponum=poline.ponum and po.historyflag = :no and po.potype not in (select VALUE from valuelist where listname='POTYPE' AND MAXVALUE in ('PRICE', 'BLANK') ) and poline.itemsetid = item.itemsetid) . The resulting set will contain zero or more objects.",
            "whereClause": "itemnum in (select itemnum from wpitem where wonum=:wonum and itemsetid=poline.itemsetid and storelocsite=poline.siteid and location=poline.storeloc) and exists (select 1 from po where po.ponum=poline.ponum and po.revisionnum=poline.revisionnum and po.historyflag = :no)",
            "cardinality": null
        },
        {
            "name": "WPPOLINE_NOHIST_ALL",
            "source": "WORKORDER",
            "remarks": "Relationship to POLINE ,used to find all non-historical po line records, excluding those on POs of type PRICE and BLANK, for this item. The WHERE clause is: poline.itemnum = item.itemnum and exists (select 1 from po where po.ponum=poline.ponum and po.historyflag = :no and po.potype not in (select VALUE from valuelist where listname='POTYPE' AND MAXVALUE in ('PRICE', 'BLANK') ) and poline.itemsetid = item.itemsetid) . The resulting set will contain zero or more objects.",
            "whereClause": "itemnum in (select itemnum from wpitem where wonum=:wonum and itemsetid=poline.itemsetid) and exists (select 1 from po where po.ponum=poline.ponum and po.revisionnum=poline.revisionnum and po.historyflag = :no)",
            "cardinality": null
        },
        {
            "name": "POLINE",
            "source": "WPMATERIAL",
            "remarks": "Relationship to find the POLINE from a planned material in a workorder.",
            "whereClause": "ponum in (select prline.ponum from prline, po where prnum=:pr and prlinenum=:prlinenum and prline.siteid=:siteid and po.ponum=poline.ponum and po.revisionnum=poline.revisionnum and po.siteid=poline.siteid and status in (select value from synonymdomain where domainid='POSTATUS' and maxvalue in ('WAPPR','APPR','INPRG','CLOSE','HOLD'))) and polinenum in (select prline.polinenum from prline, po where prnum=:pr and prlinenum=:prlinenum and prline.siteid=:siteid and po.ponum=poline.ponum and po.revisionnum=poline.revisionnum and po.siteid=poline.siteid and status in (select value from synonymdomain where domainid='POSTATUS' and maxvalue in ('WAPPR','APPR','INPRG','CLOSE','HOLD'))) and siteid=:siteid ",
            "cardinality": null
        }
    ]
}