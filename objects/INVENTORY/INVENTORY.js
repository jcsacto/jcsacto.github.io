mos = {
    "objectName": "INVENTORY",
    "className": "psdi.app.inventory.InventorySet",
    "description": "The Inventory Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "INVENTORYID",
    "primaryKeyColumns": [
        "ITEMNUM",
        "LOCATION",
        "SITEID",
        "ITEMSETID"
    ],
    "logicalRelationships": [
        {
            "objectName": "INVENTORY",
            "targetObject": "INVSTATUS",
            "parentKeys": "ITEMNUM, LOCATION, ITEMSETID",
            "targetKeys": "ITEMNUM, LOCATION, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Inventory Status History",
            "longDescription": null
        },
        {
            "objectName": "INVENTORY",
            "targetObject": "TOOLINV",
            "parentKeys": "INVENTORYID",
            "targetKeys": "INVENTORYID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Tool Inventory",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "COMPANIES",
            "targetObject": "INVENTORY",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, CONSVENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Consignment Vendor on Inventory",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "INVENTORY",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, MANUFACTURER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Manufacturer on Inventory",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "INVENTORY",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Primary Vendor on Inventory",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "INVENTORY",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "INVENTORY",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Inventory Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "INVENTORY",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, STORELOC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 43",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "INVENTORY",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STORELOCSITEID, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 44",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "INVENTORY",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STORELOCSITEID, STORELOC",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Inventory Storeroom",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "INVENTORY",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ISSUEUNIT, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 103",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "INVENTORY",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ISSUEUNIT, STORELOCSITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 104",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "INVENTORY",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ORDERUNIT, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 105",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "INVENTORY",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ORDERUNIT, STORELOCSITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 106",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "INVENTORY",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "ISSUEUNIT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Issue Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "INVENTORY",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "ORDERUNIT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Order Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "INVENTORY",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "INVENTORY",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 18",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "INVENTORY",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "INVENTORY",
            "parentKeys": "SITEID",
            "targetKeys": "STORELOCSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 62",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "ITEMSETID",
            "required": true,
            "persistent": true,
            "title": "Item Set",
            "remarks": "Set identifier for the item.",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS"
        },
        {
            "attributeName": "MANUFACTURER",
            "required": false,
            "persistent": true,
            "title": "Manufacturer",
            "remarks": "Manufacturer code indicating the company that makes this item.",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "MODELNUM",
            "required": false,
            "persistent": true,
            "title": "Model",
            "remarks": "Primary vendor's model number for this item.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORDERUNIT",
            "required": false,
            "persistent": true,
            "title": "Order Unit",
            "remarks": "Unit Of Order. A unit can be each, box, roll, linear feet, cubic feet, square feet etc. For example, 1 box is 1 unit, but the box may be a part of a larger inventory issue element, perhaps a case or crate.",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "SHRINKAGEACC",
            "required": false,
            "persistent": true,
            "title": "Shrinkage GL Account",
            "remarks": "Shrinkage Account.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SSTOCK",
            "required": false,
            "persistent": true,
            "title": "Safety Stock",
            "remarks": "The quantity of inventory stock items that are kept in storage for unforeseen requirements.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VENDOR",
            "required": false,
            "persistent": true,
            "title": "Primary Vendor",
            "remarks": "Vendor code indicating the primary vendor for this item.",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "ABCTYPE",
            "required": false,
            "persistent": true,
            "title": "ABC Type",
            "remarks": "ABC analysis in Inventory lets you quickly identify which inventory items represent your company's greatest investment in terms of monetary value and turnover rate. The ABC Type value for a item is determined by running an ABC Analysis report, which multiplies the current YTD issued quantity by the last cost of the item. The items are then sorted in descending order of the dollar value reached by this calculation.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BINNUM",
            "required": false,
            "persistent": true,
            "title": "Default Bin",
            "remarks": "A unique identification number indicating the primary bin or storage location for the selected item within a storeroom.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CATALOGCODE",
            "required": false,
            "persistent": true,
            "title": "Catalog #",
            "remarks": "Primary vendor's catalog code for this item.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONTROLACC",
            "required": false,
            "persistent": true,
            "title": "GL Control Account",
            "remarks": "Control Account.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLACCOUNT",
            "required": false,
            "persistent": true,
            "title": "GL Account",
            "remarks": "GL Account code.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INVCOSTADJACC",
            "required": false,
            "persistent": true,
            "title": "Cost Adjustment GL Account",
            "remarks": "Cost Adjustment Account.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISSUEUNIT",
            "required": true,
            "persistent": true,
            "title": "Issue Unit",
            "remarks": "Standard quantity by which the item is issued from the storeroom, such as each or roll. Click the Select Value button to view a list of valid issue units.",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "LASTISSUEDATE",
            "required": false,
            "persistent": true,
            "title": "Last Issue Date",
            "remarks": "Indicates the date and time that this item was last issued.",
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
            "remarks": "Unique identification code indicating the Site level location for an item.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
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
            "attributeName": "CATEGORY",
            "required": false,
            "persistent": true,
            "title": "Stock Category",
            "remarks": "Specifies whether the item is a stocked (STK), non-stocked (NS), or a special order (SP) item.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CCF",
            "required": true,
            "persistent": true,
            "title": "Count Frequency",
            "remarks": "Cycle Count Frequency The number of days between an audit or count of an inventory item.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DELIVERYTIME",
            "required": true,
            "persistent": true,
            "title": "Lead Time (Days)",
            "remarks": "The number of days it takes from ordering an item to receiving the item.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISSUE1YRAGO",
            "required": true,
            "persistent": true,
            "title": "Last Year",
            "remarks": "Indicates the number of this item that were issued in the previous year.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISSUE2YRAGO",
            "required": true,
            "persistent": true,
            "title": "2 Years Ago",
            "remarks": "Indicates the number of this item that were issued 2 Years Ago.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISSUE3YRAGO",
            "required": true,
            "persistent": true,
            "title": "3 Years Ago",
            "remarks": "Indicates the number of this item that were issued 3 Years Ago.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISSUEYTD",
            "required": true,
            "persistent": true,
            "title": "Year to Date",
            "remarks": "Indicates the number of this item that have been issued in the current year.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ITEMNUM",
            "required": true,
            "persistent": true,
            "title": "Item",
            "remarks": "A unique identification number for an item in inventory in the selected storeroom.",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "LOCATION",
            "required": true,
            "persistent": true,
            "title": "Storeroom",
            "remarks": "The primary location for the selected item. If an item is stored in more than one storeroom location you can select View Availability from the Select Action menu to view balances for all storeroom locations.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "MAXLEVEL",
            "required": true,
            "persistent": true,
            "title": "Reorder Point",
            "remarks": "Maximum Level - Reorder Point",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MINLEVEL",
            "required": true,
            "persistent": true,
            "title": "Reorder Point",
            "remarks": "The minimum quantity of inventory stock items required. When the stock balance reaches this number, the inventory items must be reordered.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORDERQTY",
            "required": true,
            "persistent": true,
            "title": "Economic Order Quantity",
            "remarks": "The reorder quantity that provides the best economic value to the organization.",
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
            "attributeName": "ADDTOSTORELOC",
            "required": false,
            "persistent": false,
            "title": "Location",
            "remarks": "ADDTOSTORELOC",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RESERVEDQTY",
            "required": false,
            "persistent": false,
            "title": "Quantity Currently Reserved",
            "remarks": "Reserved Quantity",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EXPIREDQTY",
            "required": false,
            "persistent": false,
            "title": "Expired Quantity in Stock",
            "remarks": "The number of a stocked element that has passed the expiration date.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AVBLBALANCE",
            "required": false,
            "persistent": false,
            "title": "Quantity Available",
            "remarks": "The current balance of a stocked element available for order.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LOTNUM",
            "required": false,
            "persistent": false,
            "title": "Lot",
            "remarks": "LOTNUM",
            "sameAsAttribute": "LOTNUM",
            "sameAsObject": "INVLOT"
        },
        {
            "attributeName": "CURBAL",
            "required": false,
            "persistent": false,
            "title": "Current Balance",
            "remarks": "Quantity of items that exist in the storeroom.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CURBALTOTAL",
            "required": false,
            "persistent": false,
            "title": "Current Balance",
            "remarks": "The total current balance of an item in the inventory system.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONDITIONCODE",
            "required": false,
            "persistent": false,
            "title": "Condition Code",
            "remarks": "Item condition code",
            "sameAsAttribute": "CONDITIONCODE",
            "sameAsObject": "ITEMCONDITION"
        },
        {
            "attributeName": "CONDRATE",
            "required": false,
            "persistent": false,
            "title": "Condition Rate Percentage",
            "remarks": "Item condition rate percentage",
            "sameAsAttribute": "CONDRATE",
            "sameAsObject": "ITEMCONDITION"
        },
        {
            "attributeName": "STDCOST",
            "required": false,
            "persistent": false,
            "title": "Standard Cost",
            "remarks": "Standard Item Cost",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AVGCOST",
            "required": false,
            "persistent": false,
            "title": "Average Cost",
            "remarks": "Average Item Cost",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LASTCOST",
            "required": false,
            "persistent": false,
            "title": "Last Cost",
            "remarks": "Last Item Cost",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PHYSCNTDATE",
            "required": false,
            "persistent": false,
            "title": "Physical Count Date",
            "remarks": "A nonpersistent column to PopulateCount Date field .",
            "sameAsAttribute": "PHYSCNTDATE",
            "sameAsObject": "INVBALANCES"
        },
        {
            "attributeName": "INVENTORYID",
            "required": true,
            "persistent": true,
            "title": "INVENTORYID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HOLDINGBAL",
            "required": false,
            "persistent": false,
            "title": "Quantity in Holding Location",
            "remarks": "Balance located in the holding location",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "STORELOCSITEID",
            "required": false,
            "persistent": true,
            "title": "Storeroom Site",
            "remarks": "Identifies the site where the storeroom is located.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "INTERNAL",
            "required": true,
            "persistent": true,
            "title": "Internal",
            "remarks": "Internal Flag used for Reorder",
            "sameAsAttribute": "INTERNAL",
            "sameAsObject": "PO"
        },
        {
            "attributeName": "STATUS",
            "required": true,
            "persistent": true,
            "title": "Status",
            "remarks": "The current status of the item such as ACTIVE, PENDING, PLANNING, PENDOBS and OBSELETE.",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "STATUSDATE",
            "required": true,
            "persistent": true,
            "title": "Status Date",
            "remarks": "Date the work order status was last changed.",
            "sameAsAttribute": "STATUSDATE",
            "sameAsObject": "ITEM"
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
            "attributeName": "STATUSIFACE",
            "required": true,
            "persistent": false,
            "title": "Has Status Changed",
            "remarks": "Non persistent boolean field to indicate whether the status has been changed after the stateful object is fetched from the database.",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "PHYSCNTTOTAL",
            "required": false,
            "persistent": false,
            "title": "Physical Count",
            "remarks": "The total physical count of an item in the inventory system.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DFLTSTAGEBIN",
            "required": false,
            "persistent": true,
            "title": "Default Stage Bin",
            "remarks": "The Default Staging bin for this inventory item.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RQTYNOTSTAGED",
            "required": false,
            "persistent": false,
            "title": "Hard Reserved Quantity Not Staged",
            "remarks": "The quantity of hard reserved items that are not staged for transfer.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STAGEDQTY",
            "required": false,
            "persistent": false,
            "title": "Quantity Staged",
            "remarks": "Quantity Staged.",
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
            "attributeName": "SHIPPEDQTY",
            "required": false,
            "persistent": false,
            "title": "Quantity Shipped",
            "remarks": "The quantity of items that were shipped, including all reservation types.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REORDER",
            "required": false,
            "persistent": true,
            "title": "Reorder",
            "remarks": "Specify whether to include the item in the inventory reorder process.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COSTTYPE",
            "required": true,
            "persistent": true,
            "title": "Issue Cost Type",
            "remarks": "The issue cost type of an inventory item can be Average, Standard or Asset. You use the Asset cost type for rotating items only.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "UNITCOST",
            "required": false,
            "persistent": false,
            "title": "Unit Cost",
            "remarks": "Identifies the unit cost for the current item.",
            "sameAsAttribute": "STDCOST",
            "sameAsObject": "INVCOST"
        },
        {
            "attributeName": "NEWCOSTTYPE",
            "required": false,
            "persistent": false,
            "title": "New Issue Cost Type",
            "remarks": "The issue cost type of an inventory item can be Average, Standard or Asset. You use the Asset cost type for rotating items only.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DEFCOSTTYPE",
            "required": false,
            "persistent": false,
            "title": "Issue Cost Type",
            "remarks": "The issue cost type of an inventory item can be Average, Standard or Asset. You use the Asset cost type for rotating items only.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REFOBJECT",
            "required": false,
            "persistent": false,
            "title": "Referring Object",
            "remarks": "The object that created the lifo/fifo cost record:  RECEIPT, TRANSFER, RETURN, ADJUSTMENT",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "REFOBJECTID",
            "required": false,
            "persistent": false,
            "title": "Referring Object ID",
            "remarks": "ID for the related object transaction that created the lifo/fifo cost record",
            "sameAsAttribute": "MAXOBJECTID",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "HARDRESISSUE",
            "required": false,
            "persistent": true,
            "title": "Requires hard reservation on use",
            "remarks": "Specifies when creating a reservation if the reservation can be only a hard reservation.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HARDRESERVEDQTY",
            "required": false,
            "persistent": false,
            "title": "Hard Reserved Quantity",
            "remarks": "The total quantity of items that are currently reserved as HARD or APHARD.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SOFTRESERVEDQTY",
            "required": false,
            "persistent": false,
            "title": "Soft Reserved Quantity",
            "remarks": "The total quantity of items that are currently reserved as SOFT or APSOFT.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COSTDATE",
            "required": false,
            "persistent": false,
            "title": "Cost Date",
            "remarks": "You can specify the receipt date for all cost records in the list.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LIFOFIFOCOST",
            "required": false,
            "persistent": false,
            "title": "Unit Cost",
            "remarks": "Unit Cost for this item.",
            "sameAsAttribute": "UNITCOST",
            "sameAsObject": "INVLIFOFIFOCOST"
        },
        {
            "attributeName": "CONSIGNMENT",
            "required": true,
            "persistent": true,
            "title": "Consignment",
            "remarks": "Select this check box to identify the item as a consignment type of item.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INVGENTYPE",
            "required": false,
            "persistent": true,
            "title": "Invoice Generation Type",
            "remarks": "You can specify how the invoice is generated for the current item. You can specify that invoices are generated based on consumption or on frequency or that they are generated manually.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FREQUENCY",
            "required": false,
            "persistent": true,
            "title": "Frequency",
            "remarks": "The numeric frequency value of the period to create invoices for the consumption of consignment items.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FREQUNIT",
            "required": false,
            "persistent": true,
            "title": "Frequency Units",
            "remarks": "The unit of measure for the frequency value.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NEXTINVOICEDATE",
            "required": false,
            "persistent": true,
            "title": "Next Invoice Date",
            "remarks": "The next date that an invoice will be generated if one is needed. When the Frequency and Frequency Units fields are specified, the Next Invoice Date will default based on the current date/time plus the frequency.",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "HARDQTYSHIPPED",
            "required": false,
            "persistent": false,
            "title": "Hard Quantity Shipped",
            "remarks": "The quantity of hard reserved items that were shipped.",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "name": "ASSET",
            "target": "ASSET",
            "remarks": "Relationship to the Asset table, used to find the Inventory's rotating asset. (Inventory.itemnum = Asset.itemnum and asset.itemsetid = inventory.itemsetid and Asset.Moved = 0). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid and orgid = :orgid and moved = 0",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETINV",
            "target": "ASSET",
            "remarks": "Relationship to asset table, used to find asset records for the given item, location, siteid. The resulting set will contain zero or more objects.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid  and location=:location and siteid=:siteid and status not in (select value from synonymdomain where maxvalue in ('DECOMMISSIONED') and domainid='LOCASSETSTATUS')",
            "cardinality": null
        },
        {
            "name": "ASSETNOTRET",
            "target": "ASSET",
            "remarks": "Relationship to the Asset table, used to find the Inventory's rotating asset. (Inventory.itemnum = Asset.itemnum and asset.itemsetid = inventory.itemsetid and Asset.Moved = 0 and returnvendor=0). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and orgid=:orgid and moved=0 and returnedtovendor=0",
            "cardinality": null
        },
        {
            "name": "CI",
            "target": "CI",
            "remarks": "Relationship from INVENTORY to the CONTRACTLINE table.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONSVENDOR",
            "target": "COMPANIES",
            "remarks": "Relationship to the Companies table, used to find the consignment vendor for the given Inventory record. (Inventory.consvendor = Companies.company). The resulting set will contain zero or one object.",
            "whereClause": "company=:consvendor and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "MANUFACTURER",
            "target": "COMPANIES",
            "remarks": "Relationship to the Companies table, used to find the manufacturer for  a given Inventory record. (Inventory.manufacturer = Companies.company). The resulting set will contain zero or one object.",
            "whereClause": "company = :manufacturer and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VENDOR",
            "target": "COMPANIES",
            "remarks": "Relationship to the Companies table, used to find the primary vendor for the given Inventory record. (Inventory.vendor = Companies.company). The resulting set will contain zero or one object.",
            "whereClause": "company = :vendor and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTLINE",
            "target": "CONTRACTLINE",
            "remarks": "Relationship from INVENTORY to the CONTRACTLINE table.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "target": "DOCLINKS",
            "remarks": "Relationship to the Doclinks table, used to find all documents for a given item. (doclinks.keytable = 'ITEM' and doclinks.keycolumn = 'ITEMNUM' and doclinks.keyvalue = item.itemnum and doclinks.itemsetid = inventory.itemsetid). The resulting set will contain zero or more objects. Note: The Item.ItemNum field value will be formatted to match the DocLinks.KeyValue data type.",
            "whereClause": "(ownertable = 'INVENTORY' and ownerid = :inventoryid ) or (ownertable='ITEM' and ownerid=(select itemid from item where  itemnum=:itemnum and itemsetid=:itemsetid))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "target": "DRILLDOWN",
            "remarks": "Relationship from the INVENTORY to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVADJUSTMENT",
            "target": "INVADJUSTMENT",
            "remarks": "Relationship to the Inventory table, used to find the same Inventory record for a given Inventory record. (inventory.itemnum = inventory.itemnum and inventory.location = inventory.location and inventory.siteid = inventory.siteid and invadjustment.itemsetid = inventory.itemsetid). The resulting set will contain one object.",
            "whereClause": "itemnum=:itemnum and location=:location and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVBALANCES",
            "target": "INVBALANCES",
            "remarks": "Relationship to the InvBalances table, used to find the on hand balances for a given inventory record. (invbalances.itemnum = inventory.itemnum and invbalances.location = inventory.location and invbalances.siteid = inventory.siteid and invbalances.itemsetid = inventory.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and location = :location and siteid = :siteid and itemsetid = :itemsetid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "INVBALANCES_DEFAULT",
            "target": "INVBALANCES",
            "remarks": "Relationship to the InvBalances table, used to find the balances on hand for a given inventory's default bin. (invbalances.itemnum = inventory.itemnum and invbalances.location = inventory.location and invbalances.binnum=inventory.binnum and invbalances.itemsetid = inventory.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and location = :location and binnum = :binnum and itemsetid = :itemsetid and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVBALANCES_NOREC",
            "target": "INVBALANCES",
            "remarks": "Relationship to the InvBalances, used to find the unreconciled balances for a given inventory record. (invbalances.itemnum = inventory.itemnum and invbalances.location = inventory.location and invbalances.reconciled = no and invbalances.itemsetid = inventory.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and location = :location and reconciled = :no and itemsetid = :itemsetid and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVBALANCESNOSTGBIN",
            "target": "INVBALANCES",
            "remarks": "Relationship to the InvBalances table, used to find the on hand balances for a given inventory record.",
            "whereClause": "itemnum=:itemnum and location=:location and siteid=:siteid and itemsetid=:itemsetid and stagingbin=:NO",
            "cardinality": null
        },
        {
            "name": "INVCHANGESTATUS",
            "target": "INVCHANGESTATUS",
            "remarks": "Relationship to the non-persistent INVCHANGESTATUS table for changing status. (No where clause).",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVCOST",
            "target": "INVCOST",
            "remarks": "Relationship to the invcost table, used to find the invcost records for a given Invnetory. (invcost.itemnum = inventory.itemnum and invcost.itemsetid=inventory.itemsetid and invcost.location=inventory.location and invcost.siteid=inventory.siteid). The resulting set will contain one or more objects.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid and location=:location and siteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "INVCOST_COND",
            "target": "INVCOST",
            "remarks": "Relationship to Invcost table. The resulting set will contain one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid and location=:location and siteid=:siteid and condrate = 100",
            "cardinality": null
        },
        {
            "name": "INVENTORY",
            "target": "INVENTORY",
            "remarks": "Relationship to the Inventory table, used to find the same Inventory record for a given Inventory record. (inventory.itemnum = inventory.itemnum and inventory.location = inventory.location and inventory.siteid = inventory.siteid and inventory.itemsetid = inventory.itemsetid). The resulting set will contain one object.",
            "whereClause": "itemnum = :itemnum and location = :location and siteid = :siteid and itemsetid = :itemsetid and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVLIFOFIFOCOST",
            "target": "INVLIFOFIFOCOST",
            "remarks": "Relationship to the invlifofifocost table, used to find the invlifofifocost records for a given Invnetory. (invlifofifocost.itemnum = inventory.itemnum and invlifofifocost.location=inventory.location and invlifofifocost.itemsetid=inventory.itemsetid). The resulting set will contain one or more objects. The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid and location=:location and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "INVLIFOFIFOCOST_COND",
            "target": "INVLIFOFIFOCOST",
            "remarks": "Relationship to Invlifofifocost table. The resulting set will contain one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid and location=:location and siteid=:siteid and condrate = 100",
            "cardinality": null
        },
        {
            "name": "INVLOT",
            "target": "INVLOT",
            "remarks": "Relationship to the InvLot table, used to find the InvLot record for a given Inventory record. (invlot.itemnum=inventory.itemnum and invlot.location=inventory.location and invlot.lotnum = inventory.lotnum and invlot.siteid = inventory.siteid and invlot.itemsetid = inventory.itemsetid). The resulting set will contain zero or one object. LotNum is a non-persistent column for the Inventory object. See the attribute defined in psdi.app.inventory.Inventory for more information.",
            "whereClause": "itemnum = :itemnum and location = :location and lotnum=:lotnum and siteid=:siteid and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVLOT_REP",
            "target": "INVLOT",
            "remarks": "inventory by invlot without lotnum",
            "whereClause": "itemnum = :itemnum and location = :location and siteid=:siteid and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVRESERVE",
            "target": "INVRESERVE",
            "remarks": "Relationship to the InvReserve table, used to find inventory reservations for a given inventory record. (invreserve.itemnum = inventory.itemnum and invreserve.location = inventory.location and invreserve.itemsetid = inventory.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and location = :location and itemsetid = :itemsetid and storelocsiteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SOFTRESERVATIONS",
            "target": "INVRESERVE",
            "remarks": "Finds all the soft reservations for the item and site.",
            "whereClause": "itemnum=:itemnum and location=:location and storelocsiteid=:siteid and itemsetid=:itemsetid and restype in (select value from synonymdomain where domainid='RESTYPE' and maxvalue in ('SOFT','APSOFT'))",
            "cardinality": null
        },
        {
            "name": "HARDRESERVATIONS",
            "target": "INVRESERVE",
            "remarks": "Finds all the hard reservations for the given inventory item for the site.",
            "whereClause": "itemnum=:itemnum and location=:location and storelocsiteid=:siteid and itemsetid=:itemsetid and restype in (select value from synonymdomain where domainid='RESTYPE' and maxvalue in ('HARD','APHARD'))",
            "cardinality": null
        },
        {
            "name": "INVSTATUS",
            "target": "INVSTATUS",
            "remarks": "Relationship to the InvStatus table, used to find the Inventory record for given item. This relationship will find one or more objects.",
            "whereClause": "itemnum=:itemnum and location=:location and siteid =:siteid and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVTRANS",
            "target": "INVTRANS",
            "remarks": "Relationship to the InvTrans table, used to find the transactions for a given inventory record. (invtrans.itemnum = inventory.itemnum and invtrans.storeloc = inventory.location and invtrans.itemsetid = inventory.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and storeloc = :location and itemsetid = :itemsetid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVTRANSINVOICE",
            "target": "INVTRANS",
            "remarks": "Relationship to the InvTrans table, used to find the transactions for consignment items for a given inventory record. (invtrans.itemnum = inventory.itemnum and invtrans.tostoreloc = inventory.location and invtrans.itemsetid = inventory.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum=:itemnum and storeloc=:location and itemsetid=:itemsetid and siteid=:siteid and transtype in (select value from synonymdomain where domainid ='ITTYPE' and maxvalue in ('CURBALADJ', 'RECBALADJ'))  and consignment=1 and consinvoicenum is not null",
            "cardinality": null
        },
        {
            "name": "INVTRANSNOINVOICE",
            "target": "INVTRANS",
            "remarks": "Relationship to the InvTrans table, used to find the issue and return for consignment items for a given inventory record. (invtrans.itemnum = inventory.itemnum and invtrans.tostoreloc = inventory.location and invtrans.itemsetid = inventory.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum=:itemnum and storeloc=:location and itemsetid=:itemsetid and siteid=:siteid and transtype in (select value from synonymdomain where domainid ='ITTYPE' and maxvalue in ('CURBALADJ', 'RECBALADJ')) and  consignment=1 and consinvoicenum is null",
            "cardinality": null
        },
        {
            "name": "INVUSELINE",
            "target": "INVUSELINE",
            "remarks": "Relationship to the InvUseLine table, used to find the inventory Usage Line record information for the item number and storeroom. The resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and fromstoreloc=:location and siteid=:siteid and itemsetid=:itemsetid",
            "cardinality": null
        },
        {
            "name": "SHIPPEDINVUSELINE",
            "target": "INVUSELINE",
            "remarks": "Find all invuselines that are shipped that reference this item.",
            "whereClause": "itemnum=:itemnum and fromstoreloc=:location and siteid=:siteid and itemsetid=:itemsetid and invusenum in (select invuse.invusenum from invuse where invusenum=invuseline.invusenum and siteid=invuseline.siteid and status in (select value from synonymdomain where domainid='INVUSESTATUS' and maxvalue='SHIPPED') and receipts not in (select value from synonymdomain where domainid='RECEIPTS' and maxvalue='COMPLETE'))",
            "cardinality": null
        },
        {
            "name": "INVVENDOR",
            "target": "INVVENDOR",
            "remarks": "Relationship to the InvVendor table, used to find all item vendor records for a given Inventory record. (invvendor.itemnum = inventory.itemnum and invvendor.itemsetid = inventory.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid and orgid=:orgid and (siteid is null or (siteid is not null and siteid=:siteid))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVVENDOR_ORA",
            "target": "INVVENDOR",
            "remarks": "Relationship to the InvVendor table, used to find all item vendor records for a given Inventory record - ORACLE only. ( invendor.itemnum = inventory.itemnum and (((inventory.vendor is not null and (invendor.vendor=inventory.vendor)) or (inventory.vendor is null)) and (((inventory.manufacturer is not null) and (invendor.manufacturer=inventory.manufacturer)) or (inventory.manufacturer is null)) and (((inventory.modelnum is not null) and (invendor.modelnum=inventory.modelnum)) or (inventory.modelnum is null)) and (((inventory.catalogcode is not null) and (invendor.catalogcode=inventory.catalogcode)) or (inventory.catalogcode is null))) and invvendor.itemsetid = inventory.itemsetid). The resulting set will contain zero or more objects. This relationship is primarily used by MEA to be used for ORACLE.",
            "whereClause": "itemnum = :itemnum and (((:vendor is not null and (vendor=:vendor)) or (:vendor is null)) and (((:manufacturer is not null) and (manufacturer=:manufacturer)) or (:manufacturer is null)) and (((:modelnum is not null) and (modelnum=:modelnum)) or (:modelnum is null)) and (((:catalogcode is not null) and (catalogcode=:catalogcode)) or (:catalogcode is null))) and itemsetid = :itemsetid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVVENDOR_PRIMARY",
            "target": "INVVENDOR",
            "remarks": "Relationship to the InvVendor table, used to find the Invvendor record that matches the vendor,modelnum, and manufacturer of the given Inventory record. (invvendor.itemnum = inventory.itemnum and invvendor.vendor=inventory.vendor. and invvendor.manufacturer = inventory.manufacturer and invvendor.modelnum=inventory.modelnum and invvendor.itemsetid = inventory.itemsetid). The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and vendor=:vendor and modelnum=:modelnum and manufacturer=:manufacturer and itemsetid = :itemsetid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVVENDOR_SQL",
            "target": "INVVENDOR",
            "remarks": "Relationship to the InvVendor table, used to find all item vendor records for a given Inventory record - SQLServer only. ( invendor.itemnum = inventory.itemnum and (((inventory.vendor != '' and (invendor.vendor=inventory.vendor)) or (inventory.vendor ='')) and (((inventory.manufacturer !='') and (invendor.manufacturer=inventory.manufacturer)) or (inventory.manufacturer ='')) and (((inventory.modelnum !='') and (invendor.modelnum=inventory.modelnum)) or (inventory.modelnum ='')) and (((inventory.catalogcode !='') and (invendor.catalogcode=inventory.catalogcode)) or (inventory.catalogcode =''))) and invvendor.itemsetid = inventory.itemsetid). The resulting set will contain zero or more objects. This relationship is primarily used by MEA to be used for SQLServer.",
            "whereClause": "itemnum = :itemnum and (((:vendor is not null and (vendor=:vendor)) or (:vendor is null)) and (((:manufacturer is not null) and (manufacturer=:manufacturer)) or (:manufacturer is null)) and (((:modelnum is not null) and (modelnum=:modelnum)) or (:modelnum is null)) and (((:catalogcode is not null) and (catalogcode=:catalogcode)) or (:catalogcode is null))) and itemsetid = :itemsetid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ISSUECURRENTITEM",
            "target": "ISSUECURRENTITEM",
            "remarks": "Relationship to the non-persistent IssueCurrentItem table. (IssueCurrentItem.itemnum = inventory.itemnum and IssueCurrentItem.storeloc = inventory.location and issuecurrentitem.itemsetid = inventory.itemsetid). The resulting set will contain zero objects. This relationship is used only for the Issue Current Item action page on the Inventory application.",
            "whereClause": "itemnum=:itemnum and storeloc=:location and itemsetid = :itemsetid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ISSUEITEMTOASSET",
            "target": "ISSUEITEMTOASSET",
            "remarks": "Relationship to the non-persistent IssueItemToAsset table. (issueitemtoasset.itemnum = inventory.itemnum and issueitemtoasset.storeloc = inventory.location and issueitemtoasset.itemsetid = inventory.itemsetid and issueitemtoasset.siteid = inventory.siteid). The resulting set will contain zero objects. This relationship is used only for the Issue Current Item to Multiple Assets action page on the Inventory application.",
            "whereClause": "itemnum=:itemnum and storeloc=:location and itemsetid = :itemsetid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEM",
            "target": "ITEM",
            "remarks": "Relationship to the Item table, used to find the item for a given inventory record. (item.itemnum = inventory.itemnum and item.itemsetid = inventory.itemsetid). The resulting set will contain one object.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMORGINFO",
            "target": "ITEMORGINFO",
            "remarks": "Relationship to the Inventory table, used to find the Itemorginfo record for given item. This relationship will find one object.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "FIRSTLEVELKITSTRUCT",
            "target": "ITEMSTRUCT",
            "remarks": "Relationship to the inventory's first level ItemStruct recs. The WHERE clause is: (itemstruct.parent=inventory.itemnum or itemstruct.parent is null) and itemstruct.itemid=inventory.itemnum and itemstruct.itemsetid=inventory.itemsetid. Result set will contain zero or more objects.",
            "whereClause": "(parent=:itemnum or parent is null) and itemid=:itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "JOBITEM",
            "target": "JOBITEM",
            "remarks": "Relationship from ITEM to the JOBITEM table.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "KIT",
            "target": "KIT",
            "remarks": "Relationship to the non-persistent Kit table. The resulting set will contain zero objects. This relationship is used only for the Assemble Kit and Disassemble Kit action pages on the Inventory application.",
            "whereClause": "1>2",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LIFOFIFOCOST",
            "target": "LIFOFIFOCOST",
            "remarks": "Relationship to LifoFifoCost table. This relationship will find one object.",
            "whereClause": "itemnum=:itemnum and location=:location and itemsetid=:itemsetid and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "LOCATIONS",
            "target": "LOCATIONS",
            "remarks": "Relationship to the Locations table, used to find the location for a given inventory record. (locations.location = inventory.location). The resulting set will contain one object.",
            "whereClause": "location = :location and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONS_ADDTOSTORE",
            "target": "LOCATIONS",
            "remarks": "Relationship to the Locations table, used to find the location information for a given inventory record on column AddToStoreLoc. (locations.location = inventory.AddToStoreLoc). The resulting set will contain one object. Note: AddToStoreLoc is a non-persistent column for the Inventory object. See the attribute defined in psdi.app.inventory.Inventory for more information. This relationship is primarily used for the Add Item to Store action in the Item application.",
            "whereClause": "location = :addtostoreloc and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NONCONSMATRECTRANS",
            "target": "MATRECTRANS",
            "remarks": "Relationship to the MatRecTrans table, used to find the receipts/transfers and shiptransfer for non-consignment items for a given inventory record.  The resulting set will contain zero or more objects.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and issuetype in (select value from synonymdomain where domainid ='ISSUETYP' and maxvalue in ('TRANSFER', 'SHIPTRANSFER')) and fromstoreloc=:location and fromsiteid=:siteid and consignment=0",
            "cardinality": null
        },
        {
            "name": "MATRECINVOICE",
            "target": "MATRECTRANS",
            "remarks": "Relationship to the MatRecTrans table, used to find the receipts/transfers and shiptransfer for consignment items for a given inventory record. (matrectrans.itemnum = inventory.itemnum and matrectrans.tostoreloc = inventory.location and matrectrans.itemsetid = inventory.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and issuetype in (select value from synonymdomain where domainid ='ISSUETYP' and maxvalue in ('TRANSFER', 'SHIPTRANSFER')) and fromstoreloc=:location and fromsiteid=:siteid and consignment=1 and consinvoicenum is not null",
            "cardinality": null
        },
        {
            "name": "MATRECNOINVOICE",
            "target": "MATRECTRANS",
            "remarks": "Relationship to the MatRecTrans table, used to find the receipts/transfers and shiptransfer for consignment items for a given inventory record. (matrectrans.itemnum = inventory.itemnum and matrectrans.tostoreloc = inventory.location and matrectrans.itemsetid = inventory.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and issuetype in (select value from synonymdomain where domainid ='ISSUETYP' and maxvalue in ('TRANSFER', 'SHIPTRANSFER')) and fromstoreloc=:location and fromsiteid=:siteid and consignment=1 and consinvoicenum is null",
            "cardinality": null
        },
        {
            "name": "MATRECTRANS",
            "target": "MATRECTRANS",
            "remarks": "Relationship to the MatRecTrans table, used to find the receipts/transfers for a given inventory record. (matrectrans.itemnum = inventory.itemnum and matrectrans.tostoreloc = inventory.location and matrectrans.itemsetid = inventory.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid and ((issuetype in (select value from synonymdomain where domainid ='ISSUETYP' and maxvalue in ('TRANSFER')) and tostoreloc = :location and siteid=:siteid and fromstoreloc is not null) or (issuetype not in ( select value from synonymdomain where domainid='ISSUETYP' and maxvalue ='TRANSFER') and tostoreloc = :location and siteid=:siteid) or (fromstoreloc=:location and fromsiteid=:siteid) or (issuetype in (select value from synonymdomain where domainid='ISSUETYP' and maxvalue='TRANSFER') and rotassetnum is not null and tostoreloc is not null and fromstoreloc is null))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "HOLDINGBALANCE",
            "target": "MATRECTRANS",
            "remarks": "Relationship to the MatRecTrans table, used to find the balances in a holding location for a given inventory item. The resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and tostoreloc in (select location from locations where type in (select value from synonymdomain where domainid='LOCTYPE' and maxvalue='HOLDING') and siteid = :siteid) and (fromstoreloc not in (select location from locations where type in (select value from synonymdomain where domainid='LOCTYPE' and maxvalue='HOLDING') and siteid = :siteid) or fromstoreloc is null) and status not in ( select value from synonymdomain where domainid='RECEIPTSTATUS' and maxvalue ='COMP') and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MATUSEINVOICE",
            "target": "MATUSETRANS",
            "remarks": "Relationship to the MatUseTrans table, used to find the issue and return for consignment items for a given inventory record. (matusetrans.itemnum = inventory.itemnum and matusetrans.tostoreloc = inventory.location and matusetrans.itemsetid = inventory.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and storeloc=:location and itemsetid = :itemsetid and siteid=:siteid and consignment=1 and consinvoicenum is not null",
            "cardinality": null
        },
        {
            "name": "MATUSENOINVOICE",
            "target": "MATUSETRANS",
            "remarks": "Relationship to the MatUseTrans table, used to find the issue and return for consignment items for a given inventory record. (matusetrans.itemnum = inventory.itemnum and matusetrans.tostoreloc = inventory.location and matusetrans.itemsetid = inventory.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and storeloc=:location and itemsetid = :itemsetid and siteid=:siteid and consignment=1 and consinvoicenum is null",
            "cardinality": null
        },
        {
            "name": "MATUSETRANS",
            "target": "MATUSETRANS",
            "remarks": "Relationship to the MatUseTrans table, used to find the materials issues for a given inventory record. (matusetrans.itemnum = inventory.itemnum and matusetrans.storeloc = inventory.location and matusetrans.itemsetid = inventory.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and storeloc = :location and itemsetid = :itemsetid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NONCONSMATUSETRANS",
            "target": "MATUSETRANS",
            "remarks": "Relationship to the MatUseTrans table, used to find the issue and return for non-consignment items for a given inventory record. The resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and storeloc=:location and itemsetid = :itemsetid and siteid=:siteid and consignment=0",
            "cardinality": null
        },
        {
            "name": "MRLINE",
            "target": "MRLINE",
            "remarks": "Relationship from ITEM to the MRLINE table.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POLINE",
            "target": "POLINE",
            "remarks": "Relationship from ITEM to the POLINE table.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRLINE",
            "target": "PRLINE",
            "remarks": "Relationship from ITEM to the PRLINE table.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REORDERITEMS",
            "target": "REORDERITEMS",
            "remarks": "Relationship to the non-persistent ReorderItems table. (ReorderItems.storeloc = inventory.location). The resulting set will contain zero objects. This relationship is used only for the Reorder Items action page on the Inventory application.",
            "whereClause": "storeloc = :location ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SPAREPART",
            "target": "SPAREPART",
            "remarks": "Relationship to the Sparpart table, used to find all spare parts for the given Inventory record. (Inventory.itemnum = sparepart.itemnum and sparepart.itemsetid = inventory.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and assetnum in ( select assetnum from asset where ( moved=:no or status not in (select value from synonymdomain where maxvalue in ('DECOMMISSIONED') and domainid='LOCASSETSTATUS') ) and siteid=sparepart.siteid ) and :sitefiltering",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SPAREPART_NOSITE",
            "target": "SPAREPART",
            "remarks": "Fix for APAR/Issue IZ87029/10-19214: same as SPAREPART relationship on the INVENTORY object minus the site restriction",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and assetnum in ( select assetnum from asset where ( moved=:no or status not in (select value from synonymdomain where maxvalue in ('DECOMMISSIONED') and domainid='LOCASSETSTATUS'))) and :sitefiltering",
            "cardinality": null
        },
        {
            "name": "TRANSFERCURITEM",
            "target": "TRANSFERCURITEM",
            "remarks": "Relationship to the non-persistent TransferCurItem table. (TransferCurItem.itemnum = inventory.itemnum and TransferCurItem.storeloc = inventory.location). The resulting set will contain zero objects. This relationship is used only for the Transfer Current Item action page on the Inventory application.",
            "whereClause": null,
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
            "name": "WHEREUSED",
            "target": "WHEREUSED",
            "remarks": "Relationship to the WhereUsed table, used to find the items in the virtual WhereUsed table for a given item. (Inventory.itemnum = Whereused.assetnum and whereused.itemsetid = inventory.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "assetnum=:itemnum and itemsetid = :itemsetid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOMATSTATUSSYNC",
            "target": "WOMATSTATUSSYNC",
            "remarks": "Relationship to the WOMATStatusSync table, fetches zero or one record.",
            "whereClause": "itemnum = :itemnum and location = :location and itemsetid = :itemsetid and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "WPITEM",
            "target": "WPITEM",
            "remarks": "Relationship to the WPITEM table, used to find all work plan Item(material and services) for a itemnum. (WPitem.itemnum = item.itemnum and WPitem.itemsetid = item.itemsetid). This resulting set will contain zero or more objects.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "MOVETOINVENTORY",
            "source": "ASSET",
            "remarks": "Relationship to the Inventory table, used to find inventory records for a given rotating asset's itemnum, storeroom location and site. (inventory.itemnum = asset.itemnum and inventory.location = asset.newlocation and inventory.siteid = asset.newsite and inventory.itemsetid = asset.itemsetid). This resulting set will contain zero or one object. Note: If and only if this asset object is a rotating piece of asset and in the process of being moved, describes the asset's relationship to inventory via its itemnum and proposed new location (Asset.NewLocation) that is does this asset's itemnum already exist in the destination location with a given site.",
            "whereClause": "itemnum=:itemnum and location=:newlocation and siteid=:newsite and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVENTORY",
            "source": "ASSET",
            "remarks": "Relationship to the Inventory table, used to find all inventory items for a given asset. (inventory.itemnum = asset.itemnum and inventory.location = asset.location and inventory.itemsetid = asset.itemsetid). This resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and location=:location and itemsetid = :itemsetid and siteid = :siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "INVENTORYSTATUS",
            "source": "ASSET",
            "remarks": "Relationship to the Inventory table, used to find all inventory items for a given asset with valid status.  (inventory.itemnum = asset.itemnum and inventory.location = asset.location and inventory.itemsetid = asset.itemsetid and inventory.status in ('ACTIVE', 'PLANNING', 'PENDOBS')). This resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and location=:location and itemsetid = :itemsetid and siteid = :siteid and status in (select value from synonymdomain where domainid = 'ITEMSTATUS' and maxvalue in ('ACTIVE', 'PLANNING', 'PENDOBS'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVENTORY",
            "source": "INVBALANCES",
            "remarks": "Relationship to the Inventory table, used to find the inventory for a given inventory balance record. (invbalances.itemnum = inventory.itemnum and invbalances.location = inventory.location and inventory.itemsetid = invbalances.itemsetid). The resulting set will contain one object.",
            "whereClause": "itemnum = :itemnum and location = :location and itemsetid = :itemsetid and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVENTORY",
            "source": "INVCOST",
            "remarks": "Relationship to the inventory table, used to find the inventory record for a given Invnetory Cost. (invcost.itemnum = inventory.itemnum and invcost.itemsetid=inventory.itemsetid and invcost.location=inventory.location and invcost.siteid=inventory.siteid). The resulting set will contain one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid and location=:location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVENTORY",
            "source": "INVENTORY",
            "remarks": "Relationship to the Inventory table, used to find the same Inventory record for a given Inventory record. (inventory.itemnum = inventory.itemnum and inventory.location = inventory.location and inventory.siteid = inventory.siteid and inventory.itemsetid = inventory.itemsetid). The resulting set will contain one object.",
            "whereClause": "itemnum = :itemnum and location = :location and siteid = :siteid and itemsetid = :itemsetid and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVENTORY",
            "source": "INVOICELINE",
            "remarks": "Relationship to the Inventory table, used to find the inventory item for a given invoice line. (invoiceline.itemnum = inventory.itemnum and inventory.itemsetid = invoiceline.itemsetid). The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVENTORY",
            "source": "INVRESERVE",
            "remarks": "Relationship to the Inventory table, used to find all inventory records for a given inventory reserve record. (inventory.itemnum = invreserve.itemnum and inventory.itemsetid = invreserve.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and location = :location and itemsetid = :itemsetid and siteid=:storelocsiteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TOINVENTORY",
            "source": "INVRESERVE",
            "remarks": "Relationship to the Inventory table, used to find the reservation records. The resulting set will contain one or more objects.",
            "whereClause": "itemnum=:itemnum and location=:tostoreloc and siteid=:siteid and itemsetid=:itemsetid",
            "cardinality": null
        },
        {
            "name": "INVENTORY",
            "source": "INVTRANS",
            "remarks": "Relationship to the inventory table, used to find the inventory records. The resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and location=:storeloc and itemsetid=:itemsetid and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "INVENTORY",
            "source": "INVUSELINE",
            "remarks": "Relationship to the Inventory table, used to find the inventory information for the item number and storeroom. The resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and location=:fromstoreloc and siteid=:siteid and itemsetid=:itemsetid",
            "cardinality": null
        },
        {
            "name": "TOINVENTORY",
            "source": "INVUSELINE",
            "remarks": "Relationship to the Inventory table, used to find the inventory record which contains the InvUseLine item number and destination storeroom in a given site. The resulting set will contain one object.",
            "whereClause": "itemnum=:itemnum and location=:tostoreloc and siteid=:tositeid and itemsetid=:itemsetid",
            "cardinality": null
        },
        {
            "name": "TOLOCINVENTORY",
            "source": "INVUSELINE",
            "remarks": "Relationship to the Inventory table, used to find the inventory record which contains the InvUseLine item number and destination storeroom in a given site. The resulting set will contain one object.",
            "whereClause": "itemnum=:itemnum and location=:location and siteid=:siteid and itemsetid=:itemsetid",
            "cardinality": null
        },
        {
            "name": "FROMINVENTORYSTATUS",
            "source": "INVUSELINE",
            "remarks": "Relationship to the Inventory table, used to find the inventory record which contains the Invenuseline item number and from storeroom in a given site with the valid status. The resulting set will contain one object.",
            "whereClause": "itemnum=:itemnum and location=:fromstoreloc and siteid=:siteid and itemsetid=:itemsetid and status in (select value from synonymdomain where domainid = 'ITEMSTATUS' and maxvalue in ('ACTIVE', 'PENDOBS') )",
            "cardinality": null
        },
        {
            "name": "INVENTORY",
            "source": "INVUSELINESPLIT",
            "remarks": "Relationship to the Inventory table, used to find the inventory information for the item number and storeroom. The resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and location=:fromstoreloc and siteid=:siteid and itemsetid=:itemsetid",
            "cardinality": null
        },
        {
            "name": "INVENTORYVENDOR",
            "source": "INVVENDOR",
            "remarks": "Relationship to the Inventory table, used to find the item's inventory for a given inventory vendor. (invvendor.itemnum = inventory.itemnum and inventory.itemsetid = invvendor.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum=:itemnum and itemsetid = :itemsetid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVENTORY",
            "source": "ITEM",
            "remarks": "Relationship to the Inventory table, used to find all inventory records for a given item. (inventory.itemnum = item.itemnum and inventory.itemsetid = item.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum=:itemnum and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVENTORY",
            "source": "ITEMORGINFO",
            "remarks": "Relationship to the INVENTORY table, used to find all Item records. (inventory.itemnum = itemorginfo.itemnum and inventory.itemsetid = itemorginfo.itemsetid and inventory.orgid=itemorginfo.orgid). This resulting set will contain zero or more objects.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVENTORY",
            "source": "JOBITEM",
            "remarks": "Relationship to the Job Material's Inventory records, used to find all the inventory records for a given Job Material. (inventory.itemnum=jobmaterial.itemnum and inventory.location=jobmaterial.location and inventory.itemsetid = jobmaterial.itemsetid). The resulting set will contain zero or more records.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid and location = :location and siteid=:storelocsite",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVITEM",
            "source": "JOBITEM",
            "remarks": "Relationship to the Job Material's Inventory records, used to find all the inventory records for a given Job Material. (inventory.itemnum=jobmaterial.itemnum and inventory.itemsetid = jobmaterial.itemsetid). The resulting set will contain zero or more records.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVENTORYSTATUS",
            "source": "JOBMATERIAL",
            "remarks": "Relationship to the Inventory table, used to find inventory record for jobMaterial item with valid status.  (inventory.itemnum = jobmaterial.itemnum and inventory.location = jobmaterial.location and inventory.itemsetid = jobmaterial.itemsetid and inventory.status in ('ACTIVE', 'PLANNING', 'PENDOBS')). This resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and location=:location and itemsetid=:itemsetid and siteid=:storelocsite and status in (select value from synonymdomain where domainid = 'ITEMSTATUS' and maxvalue in ('ACTIVE', 'PLANNING', 'PENDOBS'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVENTORYSTATUS",
            "source": "JOBTOOL",
            "remarks": "Relationship to the Inventory table, used to find inventory record for jobTool item with valid status.  (inventory.itemnum = jobtool.itemnum and inventory.location = jobtool.location and inventory.itemsetid = jobtool.itemsetid and inventory.status in ('ACTIVE', 'PLANNING', 'PENDOBS')). This resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and location=:location and itemsetid=:itemsetid and siteid=:storelocsite and status in (select value from synonymdomain where domainid = 'ITEMSTATUS' and maxvalue in ('ACTIVE', 'PLANNING', 'PENDOBS'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVITEM",
            "source": "JOBTOOL",
            "remarks": "Relationship to the Job Tool's Inventory records, used to find all the inventory records for a given Job Tool. (inventory.itemnum=jobmaterial.itemnum and inventory.itemsetid = jobmaterial.itemsetid). The resulting set will contain zero or more records.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVTOOLSTORELOC",
            "source": "JOBTOOL",
            "remarks": "Relationship to the Job Tool's Inventory records, used to find all the inventory records for a given Job Tool. (inventory.itemnum=jobtool.itemnum and inventory.itemsetid = jobtool.itemsetid). The resulting set will contain zero or more records.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid and siteid=:storelocsite",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVENTORY",
            "source": "KIT",
            "remarks": "Relationship to the Inventory table used to find the Inventory record for this Kit. (inventory.itemnum = kit.itemnum and inventory.itemsetid = kit.itemsetid and inventory.location = kit.location and inventory.siteid = kit.siteid).  The resulting set will contain one object.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid and location = :location and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVENTORY",
            "source": "LINESPLIT",
            "remarks": "Relationship to the Inventory table. The resulting set will contain one object.",
            "whereClause": "itemnum=:itemnum and location=:fromstoreloc and siteid=:siteid and itemsetid=:itemsetid",
            "cardinality": null
        },
        {
            "name": "INVENTORY",
            "source": "LOCATIONS",
            "remarks": "Relationship to the Inventory table. (locations.location = inventory.location). The resulting set will contain zero or more objects. This relationship is primarily used for locations of psdi.app.location.Location STOREROOM, LABOR or COURIER only.",
            "whereClause": "location = :location and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "JSP_INVENTORY",
            "source": "LOCATIONS",
            "remarks": "Relationship to the Inventory table.  (locations.location = inventory.location). The resulting set will contain zero or more objects. This relationship is primarily used  in 'GUI' for locations of psdi.app.location.Location STOREROOM, LABOR or COURIER only.",
            "whereClause": "location = :location and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NEW_INVENTORY",
            "source": "LOCATIONS",
            "remarks": "Relationship to the Inventory table, used to create an empty Inventory set for a given storeroom location. (1>2). The resulting set will contain zero objects. This relationship is primarily used in the Add Items to Store action where new Inventory records are created in the empty set initially.",
            "whereClause": "1>2 and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TOLOCATIONS",
            "source": "LOCATIONS",
            "remarks": "Relationship to the Location table, used to find the reservation records. The resulting set will contain one or more objects.",
            "whereClause": "location=:tostoreloc and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "INVENTORY",
            "source": "MATRECTRANS",
            "remarks": "Relationship to the Inventory table, used to find the inventory record which contains the MatRecTtrans item number and destination storeroom in a given site. (inventory.itemnum = matrectrans.itemnum and inventory.location = matrectrans.tostoreloc and inventory.siteid = matrectrans.siteid and matrectrans.itemsetid = inventory.itemsetid). The resulting set will contain one object.",
            "whereClause": "itemnum=:itemnum and location=:tostoreloc and siteid = :siteid and itemsetid = :itemsetid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVENTORYSITE",
            "source": "MATRECTRANS",
            "remarks": "Relationship to the Inventory table, used to find the inventory record which contains the MatRecTtrans item number and destination storeroom in a given site. (inventory.itemnum = matrectrans.itemnum and inventory.location = matrectrans.tostoreloc and inventory.siteid = matrectrans.siteid and inventory.itemsetid = matrectrans.itemsetid). The resulting set will contain one object.",
            "whereClause": "itemnum=:itemnum and location=:tostoreloc and siteid = :siteid and itemsetid = :itemsetid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NEW_INVENTORY",
            "source": "MATRECTRANS",
            "remarks": "Relationship to the Inventory table, used to create an empty Inventory set from the matrectrans.  The WHERE clause is:  (1>2). The resulting set will contain zero objects. This relationship is primarily used to create new Inventory records on receipt.",
            "whereClause": "1>2",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "FROMINVENTORY",
            "source": "MATRECTRANS",
            "remarks": "Relationship to the Inventory table, used to find the inventory record which contains the item number and from storeroom of the transfer. (inventory.itemnum = matrectrans.itemnum and inventory.itemsetid=matrectrans.itemsetid and inventory.location = matrectrans.fromstoreloc and inventory.itemsetid = matrectrans.itemsetid). The resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and location=:fromstoreloc and siteid=:fromsiteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "FROMINVENTORYSTATUS",
            "source": "MATRECTRANS",
            "remarks": "Relationship to the Inventory table, used to find the inventory record which contains the MatRecTtrans item number and from storeroom in a given site with the valid status. (inventory.itemnum = matrectrans.itemnum and inventory.location = matrectrans.fromstoreloc and inventory.siteid = matrectrans.fromsiteid and  inventory.itemsetid = matrectrans.itemsetid and status in ('ACTIVE', 'PENDOBS')). The resulting set will contain one object.",
            "whereClause": "itemnum=:itemnum and location=:fromstoreloc and siteid=:fromsiteid and itemsetid=:itemsetid and status in (select value from synonymdomain where domainid = 'ITEMSTATUS' and maxvalue in ('ACTIVE', 'PENDOBS') )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVENTORY",
            "source": "MATUSETRANS",
            "remarks": "Relationship to the Inventory table, used to find the inventory information for the material being issued out of the storeroom. (inventory.itemnum = matusetrans.itemnum and inventory.location = matusetrans.storeloc and inventory.itemsetid = matusetrans.itemsetid). The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and location = :storeloc and itemsetid = :itemsetid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "FROMINVENTORYSTATUS",
            "source": "MATUSETRANS",
            "remarks": "Relationship to the Inventory table, used to find the inventory record which contains the MatUseTtrans item number and from storeroom in a given site with the valid status. (inventory.itemnum = matusetrans.itemnum and inventory.location = matusetrans.storeloc and inventory.siteid = matusetrans.siteid and inventory.itemsetid =  matusetrans.itemsetid and status in ('ACTIVE', 'PENDOBS')). The resulting set will contain one object.",
            "whereClause": "itemnum=:itemnum and location=:storeloc and siteid=:siteid and itemsetid=:itemsetid and status in (select value from synonymdomain where domainid = 'ITEMSTATUS' and maxvalue in ('ACTIVE', 'PENDOBS') )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TOINVENTORY",
            "source": "MATUSETRANS",
            "remarks": "Relationship to the Inventory table, used to find the inventory record which contains the MatUseTtrans item number and destination storeroom in a given site with the valid status. (inventory.itemnum = matusetrans.itemnum and inventory.location = matusetrans.location and inventory.siteid = matusetrans.siteid and inventory.itemsetid =  matusetrans.itemsetid). The resulting set will contain one object.",
            "whereClause": "itemnum=:itemnum and location=:location and siteid=:siteid and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVENTORY",
            "source": "MEASUREUNIT",
            "remarks": "Relationship to the inventory table, used to find all inventory records using this measureunit. (inventory.orderunit=measureunit.measureunitid or inventory.issueunit=measureunit.measureunitid) This relationship will find zero or more objects.",
            "whereClause": "orderunit=:measureunitid or issueunit=:measureunitid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVENTORY",
            "source": "MRLINE",
            "remarks": "Relationship to the Inventory table, used to find the inventory records based on the storeroom for a given material requisition line. (mrline.itemnum = inventory.itemnum and mrline.storeloc = inventory.location and inventory.itemsetid = mrline.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and location = :storeloc and itemsetid = :itemsetid and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVENTORY",
            "source": "ORGANIZATION",
            "remarks": "Relationship to the Inventory table, used to find all items in an organization. (inventory.orgid =:organization.orgid). This relationship will find zero or more objects.",
            "whereClause": "orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVENTORY",
            "source": "POLINE",
            "remarks": "Relationship to the Inventory table, used to find the inventory record for the item number and storeroom (inventory.itemnum=poline.itemnum and inventory.itemsetid=poline.itemsetid and inventory.location=poline.storeloc and inventory.siteid=poline.tositeid). The resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and location=:storeloc and siteid=:tositeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVENTORY",
            "source": "PRLINE",
            "remarks": "Relationship to the Inventory table, used to find the inventory record for the item number and storeroom (inventory.itemnum = prline.itemnum and inventory.itemsetid=prline.itemsetid and inventory.location = prline.storeloc and inventory.itemsetid = prline.itemsetid). The resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and location=:storeloc and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVENTORY",
            "source": "RFQLINE",
            "remarks": "Relationship to the Inventory table, used to find the inventory record for the item number and storeroom (inventory.itemnum = rfqline.itemnum and inventory.itemsetid=rfqline.itemsetid and inventory.location = rfqline.storeloc and inventory.itemsetid = rfqline.itemsetid). The resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and location=:storeloc and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVENTORY",
            "source": "SPLITUSELINE",
            "remarks": "Relationship to the Inventory table, used to find the inventory on hand for this InvUseLine. The resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and location=:fromstoreloc and itemsetid=:itemsetid and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "INVENTORY",
            "source": "TLOAMPRMDFLT",
            "remarks": "Relationship from Computer Promotion Defaults to Inventory, used to find all inventory items for a given item and location. Returns zero or one record.",
            "whereClause": "itemnum=:itemnum and location=:location and itemsetid = :itemsetid and siteid = :siteid",
            "cardinality": null
        },
        {
            "name": "INVENTORY",
            "source": "TLOAMPRMVALUE",
            "remarks": "Relationship from Computer Promotion Values to Inventory, used to find all inventory items for a given item and location. Returns zero or one record.",
            "whereClause": "itemnum=:itemnum and location=:location and itemsetid = :itemsetid and siteid = :siteid",
            "cardinality": null
        },
        {
            "name": "INVENTORY",
            "source": "TLOAMPROMOTE",
            "remarks": "Relationship from Computer Promotion to Inventory, used to find all inventory items for a given item and location. Returns zero or one record.",
            "whereClause": "itemnum=:itemnum and location=:location and itemsetid = :itemsetid and siteid = :siteid",
            "cardinality": null
        },
        {
            "name": "INVENTORY",
            "source": "TRANSFERCURITEM",
            "remarks": "Relationship to Inventory, used to find the inventory for this TransferCurItem's ToStoreLoc. WHERE clause is: inventory.itemnum=transfercuritem.itemnum and inventory.location=transfercuritem.tostoreloc and inventory.itemsetid=transfercuritem.itemsetid and inventory.siteid=transfercuritem.siteid. Result will be one (if item already exists in the 'to' location) or zero objects.",
            "whereClause": "itemnum = :itemnum and location = :tostoreloc and itemsetid = :itemsetid and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WPINVENTORY",
            "source": "WORKORDER",
            "remarks": "Relationship to the Inventory table, used to find all inventory records for a given item. (inventory.itemnum = item.itemnum and inventory.itemsetid = item.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum in (select itemnum from wpitem where wonum=:wonum and itemsetid=inventory.itemsetid and storelocsite=inventory.siteid and location=inventory.location)",
            "cardinality": null
        },
        {
            "name": "WPINVENTORY_ALL",
            "source": "WORKORDER",
            "remarks": "Relationship to the Inventory table, used to find all inventory records for a given item. (inventory.itemnum = item.itemnum and inventory.itemsetid = item.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum in (select itemnum from wpitem where wonum=:wonum and itemsetid=inventory.itemsetid)",
            "cardinality": null
        },
        {
            "name": "INVENTORY",
            "source": "WPITEM",
            "remarks": "Relationship to the Inventory table, used to find the inventory for a given work plan material. (inventory.itemnum=wpitem.itemnum and inventory.location=wpitem.location and inventory.itemsetid = wpitem.itemsetid nd inventory.siteid = wpitem.storelocsite). This resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and location=:location and itemsetid = :itemsetid and siteid=:storelocsite",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVENTORYLOC",
            "source": "WPITEM",
            "remarks": "Relationship to the Inventory table, used to find whether the item exist in any storeroom. This resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and itemsetid = :itemsetid and siteid=:storelocsite",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVITEMLOC",
            "source": "WPITEM",
            "remarks": "Relationship to the Inventory table, used to find whether the item exist in any storeroom. This resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVENTORYSTATUS",
            "source": "WPMATERIAL",
            "remarks": "Relationship to the Inventory table, used to find inventory record for wpMaterial itewm with valid status.  (inventory.itemnum = wpmaterial.itemnum and inventory.location = wpmaterial.location and inventory.itemsetid = wpmaterial.itemsetid and inventory.status in ('ACTIVE', 'PLANNING', 'PENDOBS')). This resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and location=:location and itemsetid=:itemsetid and siteid=:storelocsite and status in (select value from synonymdomain where domainid = 'ITEMSTATUS' and maxvalue in ('ACTIVE', 'PLANNING', 'PENDOBS'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVENTORYSTATUS",
            "source": "WPTOOL",
            "remarks": "Relationship to the Inventory table, used to find inventory record for wpTool item with valid status.  (inventory.itemnum = wptool.itemnum and inventory.location = wptool.location and inventory.itemsetid = wptool.itemsetid and inventory.status in ('ACTIVE', 'PLANNING', 'PENDOBS')). This resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and location=:location and itemsetid=:itemsetid and siteid=:storelocsite and status in (select value from synonymdomain where domainid = 'ITEMSTATUS' and maxvalue in ('ACTIVE', 'PLANNING', 'PENDOBS'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SKDTOOLINV",
            "source": "WPTOOL",
            "remarks": "Get inventory for wptool",
            "whereClause": "itemnum=:itemnum and location=:location and itemsetid=:itemsetid and siteid=:storelocsite",
            "cardinality": null
        }
    ]
}