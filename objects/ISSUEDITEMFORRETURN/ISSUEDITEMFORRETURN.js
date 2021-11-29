mos = {
    "objectName": "ISSUEDITEMFORRETURN",
    "className": "psdi.app.inventory.virtual.IssuedItemForReturnSet",
    "description": "This is non-persistent object for issued items that can be returned.",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": false,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "ITEMNUM",
            "required": false,
            "persistent": false,
            "title": "Item",
            "remarks": "The identifier of the inventory item.",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "ITEMSETID",
            "required": false,
            "persistent": false,
            "title": "Item Set",
            "remarks": "Identifies the item set, or group of items, to which this item belongs. An organization is assigned to only one item set, but multiple organizations can use the same item set.",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS"
        },
        {
            "attributeName": "QUANTITY",
            "required": false,
            "persistent": false,
            "title": "Quantity",
            "remarks": "The quantity of items in the storeroom.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "UNITCOST",
            "required": false,
            "persistent": false,
            "title": "Unit Cost",
            "remarks": "The cost per issue unit of the current item.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONDITIONCODE",
            "required": false,
            "persistent": false,
            "title": "Condition Code",
            "remarks": "The condition code that indicates the current physical condition of the item.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "QTYRETURNED",
            "required": false,
            "persistent": false,
            "title": "Quantity Returned",
            "remarks": "The quantity of items returned for the current issue line.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REFWO",
            "required": false,
            "persistent": false,
            "title": "Work Order",
            "remarks": "The identifier of the work order that is related to this record.",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": false,
            "title": "Location",
            "remarks": "The operating location for this reservation.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "STORELOC",
            "required": false,
            "persistent": false,
            "title": "Storeroom",
            "remarks": "The storeroom where the reserved item is stocked. The storeroom information comes from default storeroom entry in the user profile, which also contains information about the site and organization.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "ROTASSETNUM",
            "required": false,
            "persistent": false,
            "title": "Rotating Asset",
            "remarks": "Identifies the rotating asset that is associated with the item being issued.",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "TOSITEID",
            "required": false,
            "persistent": false,
            "title": "To Site",
            "remarks": "The destination site for the current inventory usage line.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ISSUEID",
            "required": false,
            "persistent": false,
            "title": "Issue ID",
            "remarks": "The identifier of the material issue record the current return line is referring to.",
            "sameAsAttribute": "MATUSETRANSID",
            "sameAsObject": "MATUSETRANS"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": false,
            "title": "ORGAINIZATION",
            "remarks": "The organization that is associated with the inventory.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "KEEPCURQTY",
            "required": true,
            "persistent": false,
            "title": "Keep Current Quantity",
            "remarks": "Indicates whether to keep the quantity specified on the inventory usage line.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": false,
            "title": "Site",
            "remarks": "The site of the organization that is associated with the inventory. The site information comes from the default insert site in the user profile, which also contains information about the organization and storeroom.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "LINECOST",
            "required": false,
            "persistent": false,
            "title": "Line Cost",
            "remarks": "The cost that is attributed to the line, which is calculated by multiplying the unit cost by the quantity of the item.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": false,
            "title": "Asset",
            "remarks": "The asset that is charged for the current transaction.",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "ISSUETO",
            "required": false,
            "persistent": false,
            "title": "Issued To",
            "remarks": "Identifies the labor code or craft to issue to.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "ACTUALDATE",
            "required": false,
            "persistent": false,
            "title": "Actual Date",
            "remarks": "The time and date of the issue transaction, which can be different from the time that is recorded by default.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BINNUM",
            "required": false,
            "persistent": false,
            "title": "Bin",
            "remarks": "The identifier of the storeroom bin from which the current item is being issued.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LOTNUM",
            "required": false,
            "persistent": false,
            "title": "Lot",
            "remarks": "The identifier of the lot where the current item is stored.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLDEBITACCT",
            "required": false,
            "persistent": false,
            "title": "GL Debit Account",
            "remarks": "GL account being debited when the item is issued. Click the Select Value button to choose a GL account.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MRNUM",
            "required": false,
            "persistent": false,
            "title": "MR",
            "remarks": "The material requisition number that is associated with the current transaction. The material requisition is created and managed using the Desktop Requisitions application.",
            "sameAsAttribute": "MRNUM",
            "sameAsObject": "MR"
        },
        {
            "attributeName": "MRLINENUM",
            "required": false,
            "persistent": false,
            "title": "Requisition Line",
            "remarks": "The material requisition line number that is associated with the item being issued. The material requisition is created and managed using the Desktop Requisitions application.",
            "sameAsAttribute": "MRLINENUM",
            "sameAsObject": "MRLINE"
        },
        {
            "attributeName": "SHOWAGAINPREF",
            "required": true,
            "persistent": false,
            "title": "Do not show this again",
            "remarks": "Indicates whether the window is displayed in future.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ITEM",
            "target": "ITEM",
            "remarks": "Relationship to the Item table, used to find the item records for a given return record. The resulting set will contain one object.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "ISSUEDITEMFORRETURN",
            "source": "INVUSELINE",
            "remarks": "elationship to the InvUseLine table. The resulting set will contain zero or more objects.",
            "whereClause": null,
            "cardinality": null
        }
    ]
}