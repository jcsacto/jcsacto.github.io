mos = {
    "objectName": "REORDERPAD",
    "className": "psdi.app.inventory.ReorderSet",
    "description": "Reorder information storage and worksheet",
    "longDescription": "This table is used a scratch pad during the reorder process.",
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [
        "ITEMNUM",
        "LOCATION",
        "USRNAME",
        "MRNUM",
        "MRLINENUM",
        "WPITEMID",
        "SITEID",
        "ITEMSETID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ADDRESS",
            "targetObject": "REORDERPAD",
            "parentKeys": "ORGID, ADDRESSCODE",
            "targetKeys": "ORGID, SHIPTO",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 20",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "REORDERPAD",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 132",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "REORDERPAD",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "STORELOCSITE, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 133",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "REORDERPAD",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITY, ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 36",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "REORDERPAD",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITYGROUP, ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 37",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "REORDERPAD",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, MANUFACTURER",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 62",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "REORDERPAD",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 63",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "REORDERPAD",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTREFNUM, CONTRACTREFREV, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 45",
            "longDescription": null
        },
        {
            "objectName": "CURRENCY",
            "targetObject": "REORDERPAD",
            "parentKeys": "CURRENCYCODE",
            "targetKeys": "CURRENCYCODE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 21",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "REORDERPAD",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 45",
            "longDescription": null
        },
        {
            "objectName": "ITEMCONDITION",
            "targetObject": "REORDERPAD",
            "parentKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "targetKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 25",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "REORDERPAD",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, ASSETLOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 167",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "REORDERPAD",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 168",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "REORDERPAD",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, STORELOC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 169",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "REORDERPAD",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STORELOCSITE, ASSETLOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 170",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "REORDERPAD",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STORELOCSITE, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 171",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "REORDERPAD",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STORELOCSITE, STORELOC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 172",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "REORDERPAD",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ORDERUNIT, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 210",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "REORDERPAD",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ORDERUNIT, STORELOCSITE, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 211",
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
            "objectName": "ORGANIZATION",
            "targetObject": "REORDERPAD",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "REORDERPAD",
            "parentKeys": "PERSONID",
            "targetKeys": "REQUESTBY",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 312",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "REORDERPAD",
            "parentKeys": "PERSONID",
            "targetKeys": "USRNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 313",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "REORDERPAD",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "SITEID, PONUM, CONTRACTREFREV",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 47",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "REORDERPAD",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "STORELOCSITE, PONUM, CONTRACTREFREV",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 48",
            "longDescription": null
        },
        {
            "objectName": "PR",
            "targetObject": "REORDERPAD",
            "parentKeys": "SITEID, PRNUM",
            "targetKeys": "SITEID, PRNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 8",
            "longDescription": null
        },
        {
            "objectName": "PR",
            "targetObject": "REORDERPAD",
            "parentKeys": "SITEID, PRNUM",
            "targetKeys": "STORELOCSITE, PRNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 9",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "REORDERPAD",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 55",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "REORDERPAD",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "REORDERPAD",
            "parentKeys": "SITEID",
            "targetKeys": "STORELOCSITE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 226",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "REORDERPAD",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 43",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "REORDERPAD",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "STORELOCSITE, WONUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 44",
            "longDescription": null
        },
        {
            "objectName": "WPITEM",
            "targetObject": "REORDERPAD",
            "parentKeys": "WPITEMID",
            "targetKeys": "WPITEMID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 1",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "USRNAME",
            "required": true,
            "persistent": true,
            "title": "User",
            "remarks": "Login user name of the person who performs the reorder",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "PRNUM",
            "required": false,
            "persistent": true,
            "title": "PR",
            "remarks": "PR number of Reorder generated PR",
            "sameAsAttribute": "PRNUM",
            "sameAsObject": "PR"
        },
        {
            "attributeName": "PONUM",
            "required": false,
            "persistent": true,
            "title": "PO",
            "remarks": "PO number of Reorder generated PO",
            "sameAsAttribute": "PONUM",
            "sameAsObject": "PO"
        },
        {
            "attributeName": "ITEMNUM",
            "required": false,
            "persistent": true,
            "title": "Item",
            "remarks": "Item number of the item being reordered",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": true,
            "title": "Location",
            "remarks": "Storeroom Location of the item",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "VENDOR",
            "required": false,
            "persistent": true,
            "title": "Vendor",
            "remarks": "Vendor code from where the item is being ordered",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "MINLEVEL",
            "required": false,
            "persistent": true,
            "title": "Minimum Level",
            "remarks": "Minimum level - Reorder point",
            "sameAsAttribute": "MINLEVEL",
            "sameAsObject": "INVENTORY"
        },
        {
            "attributeName": "MAXLEVEL",
            "required": false,
            "persistent": true,
            "title": "Maximum Level",
            "remarks": "Maximum level - Reorder point",
            "sameAsAttribute": "MAXLEVEL",
            "sameAsObject": "INVENTORY"
        },
        {
            "attributeName": "CATEGORY",
            "required": false,
            "persistent": true,
            "title": "Category",
            "remarks": "Category of item: Stocked/Non-Stocked/Special Order",
            "sameAsAttribute": "CATEGORY",
            "sameAsObject": "INVENTORY"
        },
        {
            "attributeName": "ORDERQTY",
            "required": false,
            "persistent": true,
            "title": "Order Quantity",
            "remarks": "Order quantity copied from Inventory",
            "sameAsAttribute": "ORDERQTY",
            "sameAsObject": "INVENTORY"
        },
        {
            "attributeName": "ORDERUNIT",
            "required": false,
            "persistent": true,
            "title": "Order Unit",
            "remarks": "Unit of order",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "UNITCOST",
            "required": false,
            "persistent": true,
            "title": "Unit Cost",
            "remarks": "Cost of an order unit",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IN19",
            "required": false,
            "persistent": true,
            "title": "Extra Field 19",
            "remarks": "Extra Field #19 copied from item",
            "sameAsAttribute": "IN19",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "IN20",
            "required": false,
            "persistent": true,
            "title": "Extra Field 20",
            "remarks": "Extra Field #20 copied from item",
            "sameAsAttribute": "IN20",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "IN21",
            "required": false,
            "persistent": true,
            "title": "Extra Field 21",
            "remarks": "Extra Field #21 copied from item",
            "sameAsAttribute": "IN21",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "IN22",
            "required": false,
            "persistent": true,
            "title": "Extra Field 22",
            "remarks": "Extra Field #22 copied from item",
            "sameAsAttribute": "IN22",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "IN23",
            "required": false,
            "persistent": true,
            "title": "Extra Field 23",
            "remarks": "Extra Field #23 copied from item",
            "sameAsAttribute": "IN23",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "CURBAL",
            "required": false,
            "persistent": true,
            "title": "Current Balance",
            "remarks": "Current balance at this location",
            "sameAsAttribute": "CURBAL",
            "sameAsObject": "INVBALANCES"
        },
        {
            "attributeName": "WONUM",
            "required": false,
            "persistent": true,
            "title": "Work Order",
            "remarks": "The Work Order that requires the item",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "REQUIREDATE",
            "required": false,
            "persistent": true,
            "title": "Required Date",
            "remarks": "Date item is needed",
            "sameAsAttribute": "REQUIREDATE",
            "sameAsObject": "WPMATERIAL"
        },
        {
            "attributeName": "REQUESTBY",
            "required": false,
            "persistent": true,
            "title": "Requested By",
            "remarks": "Person requesting item",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "SCHEDSTART",
            "required": false,
            "persistent": true,
            "title": "Scheduled Start",
            "remarks": "Scheduled start date",
            "sameAsAttribute": "SCHEDSTART",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "TARGSTARTDATE",
            "required": false,
            "persistent": true,
            "title": "Target Start",
            "remarks": "Target Start Date",
            "sameAsAttribute": "TARGSTARTDATE",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "GLCREDITACCT",
            "required": false,
            "persistent": true,
            "title": "GL Credit Account",
            "remarks": "Credit GL Account",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLACCOUNT",
            "required": false,
            "persistent": true,
            "title": "GL Account",
            "remarks": "The GL Account to be debited on issue.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DELIVERYTIME",
            "required": false,
            "persistent": true,
            "title": "Delivery Time",
            "remarks": "Delivery Time",
            "sameAsAttribute": "DELIVERYTIME",
            "sameAsObject": "INVENTORY"
        },
        {
            "attributeName": "LOTTYPE",
            "required": false,
            "persistent": true,
            "title": "Lot Type",
            "remarks": "Inventory lot type (LOT or NOLOT)",
            "sameAsAttribute": "LOTTYPE",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "MANUFACTURER",
            "required": false,
            "persistent": true,
            "title": "Manufacturer",
            "remarks": "Company that manufactured the item",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "MODELNUM",
            "required": false,
            "persistent": true,
            "title": "Model",
            "remarks": "Vendor Model Number For The Item",
            "sameAsAttribute": "MODELNUM",
            "sameAsObject": "INVENTORY"
        },
        {
            "attributeName": "CATALOGCODE",
            "required": false,
            "persistent": true,
            "title": "Catalog #",
            "remarks": "Vendor catalog Code for the Item",
            "sameAsAttribute": "CATALOGCODE",
            "sameAsObject": "INVENTORY"
        },
        {
            "attributeName": "GLDEBITACCT",
            "required": false,
            "persistent": true,
            "title": "GL Debit Account",
            "remarks": "The GL Account to be debited for this item",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": true,
            "title": "Asset",
            "remarks": "The asset that requires the item",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "ASSETLOCATION",
            "required": false,
            "persistent": true,
            "title": "Asset Location",
            "remarks": "The location of the asset that requires the item",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "RESERVEDQTY",
            "required": false,
            "persistent": true,
            "title": "Quantity Reserved",
            "remarks": "Quantity of the item already being reserved",
            "sameAsAttribute": "RESERVEDQTY",
            "sameAsObject": "INVRESERVE"
        },
        {
            "attributeName": "PRQTY",
            "required": false,
            "persistent": true,
            "title": "PR Quantity",
            "remarks": "Total quantity of this item on purchase requests",
            "sameAsAttribute": "ORDERQTY",
            "sameAsObject": "INVENTORY"
        },
        {
            "attributeName": "POQTY",
            "required": false,
            "persistent": true,
            "title": "PO Quantity",
            "remarks": "Total quantity of this item on purchase orders",
            "sameAsAttribute": "ORDERQTY",
            "sameAsObject": "INVENTORY"
        },
        {
            "attributeName": "MRNUM",
            "required": false,
            "persistent": true,
            "title": "MR",
            "remarks": "MR by which this item is requested",
            "sameAsAttribute": "MRNUM",
            "sameAsObject": "MR"
        },
        {
            "attributeName": "MRLINENUM",
            "required": false,
            "persistent": true,
            "title": "MR Line",
            "remarks": "Material request line number which this item is requested",
            "sameAsAttribute": "MRLINENUM",
            "sameAsObject": "MRLINE"
        },
        {
            "attributeName": "EXPLOTQTY",
            "required": false,
            "persistent": true,
            "title": "Expired Lot Quantity",
            "remarks": "Total quantity of this item in expired lots",
            "sameAsAttribute": "CURBAL",
            "sameAsObject": "INVBALANCES"
        },
        {
            "attributeName": "REORDERQTY",
            "required": false,
            "persistent": true,
            "title": "Reorder Quantity",
            "remarks": "The quantity of this item being reordered",
            "sameAsAttribute": "CURBAL",
            "sameAsObject": "INVBALANCES"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Description of the item",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "ITEM"
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
            "attributeName": "SHIPTO",
            "required": false,
            "persistent": true,
            "title": "Ship to Address",
            "remarks": "Shipto address code for the specified item",
            "sameAsAttribute": "ADDRESSCODE",
            "sameAsObject": "ADDRESS"
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
            "attributeName": "VENDORWAREHOUSE",
            "required": false,
            "persistent": true,
            "title": "Vendor Warehouse",
            "remarks": "Vendor warehouse that the product will come from.",
            "sameAsAttribute": "VENDORWAREHOUSE",
            "sameAsObject": "MRLINE"
        },
        {
            "attributeName": "VENDORPACKQUANTITY",
            "required": false,
            "persistent": true,
            "title": "Vendor Pack Quantity",
            "remarks": "The quantity of the pack code. For example, pack code is box pack quantity is 12.",
            "sameAsAttribute": "VENDORPACKQUANTITY",
            "sameAsObject": "MRLINE"
        },
        {
            "attributeName": "CURRENCYCODE",
            "required": false,
            "persistent": true,
            "title": "Currency",
            "remarks": "Currency code of the unitcost of this order",
            "sameAsAttribute": "CURRENCYCODE",
            "sameAsObject": "CURRENCY"
        },
        {
            "attributeName": "LINETYPE",
            "required": true,
            "persistent": true,
            "title": "Line Type",
            "remarks": "Line type. The value of line type could be Item, Material, Service, Special Order or External Catalog Item.",
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
            "attributeName": "REORDERQTYINISSUEUNIT",
            "required": false,
            "persistent": false,
            "title": "Reorder Quantity",
            "remarks": "REORDERQTYINISSUEUNIT",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONDITIONCODE",
            "required": false,
            "persistent": true,
            "title": "Condition Code",
            "remarks": "The condition of the item being selected for re-order.",
            "sameAsAttribute": "CONDITIONCODE",
            "sameAsObject": "ITEMCONDITION"
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
            "attributeName": "CONTRACTREFNUM",
            "required": false,
            "persistent": true,
            "title": "Contract Reference",
            "remarks": "Identifies the contract that was used to find the price",
            "sameAsAttribute": "CONTRACTNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "CONTRACTREFREV",
            "required": false,
            "persistent": true,
            "title": "Contract Reference Revision",
            "remarks": "Revision number of the reference contract",
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
            "attributeName": "CONTRACTLINEID",
            "required": false,
            "persistent": true,
            "title": "Contract Reference Line ID",
            "remarks": "Identifies the Contract Line from which the reorder price is obtained",
            "sameAsAttribute": "CONTRACTLINEID",
            "sameAsObject": "CONTRACTLINE"
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
            "attributeName": "STORELOC",
            "required": false,
            "persistent": true,
            "title": "Storeroom",
            "remarks": "Storeroom Location",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "STORELOCSITE",
            "required": false,
            "persistent": true,
            "title": "Storeroom Site",
            "remarks": "Storeroom Site",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "WPITEMID",
            "required": false,
            "persistent": true,
            "title": "WP Item ID",
            "remarks": "WP Item Identifier",
            "sameAsAttribute": "WPITEMID",
            "sameAsObject": "WPITEM"
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
            "attributeName": "DESCRIPTIONVIEW",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "Description of the item - display only",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "CONSIGNMENT",
            "required": true,
            "persistent": true,
            "title": "Consignment",
            "remarks": "Consignment will allow the user to specify the consignment details of the inventory item.",
            "sameAsAttribute": "CONSIGNMENT",
            "sameAsObject": "INVENTORY"
        },
        {
            "attributeName": "SHIPPEDQTY",
            "required": false,
            "persistent": true,
            "title": "Quantity Shipped",
            "remarks": "The quantity of items that were shipped from the inventory usage line.",
            "sameAsAttribute": "QUANTITY",
            "sameAsObject": "INVUSELINE"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ITEMCONDITION",
            "target": "ITEMCONDITION",
            "remarks": "Relationship to the itemcondition table, used to find the itemcondition records for a given Reorder record. (itemcondition.itemnum = reorderpad.itemnum and itemcondition.itemsetid=reorderpad.itemsetid and itemcondition.conditioncode=reorderpad.conditioncode). The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid and conditioncode=:conditioncode",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "REORDERPAD",
            "source": "MEASUREUNIT",
            "remarks": "Relationship to the reorderpad table, used to find all reorderpad records using this measureunit. (reorderpad.orderunit=measureunit.measureunitid) This relationship will find zero or more objects.",
            "whereClause": "orderunit=:measureunitid",
            "cardinality": "UNDEFINED"
        }
    ]
}