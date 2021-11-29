mos = {
    "objectName": "FAVITEM",
    "className": "psdi.app.mr.FavItemSet",
    "description": "Favorite Items",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "FAVITEMID",
    "primaryKeyColumns": [
        "PERSONID",
        "ITEMNUM",
        "ITEMSETID",
        "DESCRIPTION",
        "STOREROOM",
        "STOREROOMSITE"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "CURRENCY",
            "targetObject": "FAVITEM",
            "parentKeys": "CURRENCYCODE",
            "targetKeys": "CURRENCYCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Record Currency",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "FAVITEM",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "FAVITEM",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, VENDORSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 8",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "FAVITEM",
            "parentKeys": "PERSONID",
            "targetKeys": "PERSONID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Favorite Items",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "FAVITEM",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 14",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "FAVITEM",
            "parentKeys": "SETID",
            "targetKeys": "VENDORSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item Set",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "FAVITEMID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PERSONID",
            "required": true,
            "persistent": true,
            "title": "User",
            "remarks": "User",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "ITEMNUM",
            "required": false,
            "persistent": true,
            "title": "Item",
            "remarks": "Identifies the item.",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "ITEMSETID",
            "required": true,
            "persistent": true,
            "title": "Item Set",
            "remarks": "Item Set",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the item. To enter or view additional information, click the Long Description button.\"",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STOREROOM",
            "required": false,
            "persistent": true,
            "title": "Storeroom",
            "remarks": "Storeroom",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "VENDOR",
            "required": false,
            "persistent": true,
            "title": "Vendor",
            "remarks": "Identifies the vendor.",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "VENDORSETID",
            "required": true,
            "persistent": true,
            "title": "Vendor Set ID",
            "remarks": "Vendor Set ID",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS"
        },
        {
            "attributeName": "UNITCOST",
            "required": false,
            "persistent": true,
            "title": "Unit Cost",
            "remarks": "Cost per unit of the item.",
            "sameAsAttribute": "UNITCOST",
            "sameAsObject": "MRLINE"
        },
        {
            "attributeName": "ORDERUNIT",
            "required": false,
            "persistent": true,
            "title": "Order Unit",
            "remarks": "Order Unit",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "QUANTITY",
            "required": false,
            "persistent": true,
            "title": "Quantity",
            "remarks": "Number of units of the requested item.",
            "sameAsAttribute": "QTY",
            "sameAsObject": "MRLINE"
        },
        {
            "attributeName": "REMARKS",
            "required": false,
            "persistent": true,
            "title": "Remarks",
            "remarks": "Remarks",
            "sameAsAttribute": "REMARKS",
            "sameAsObject": "MRLINE"
        },
        {
            "attributeName": "LINETYPE",
            "required": true,
            "persistent": true,
            "title": "Line Type",
            "remarks": "Line Type",
            "sameAsAttribute": "LINETYPE",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "CATALOGCODE",
            "required": false,
            "persistent": true,
            "title": "Catalog",
            "remarks": "Catalog",
            "sameAsAttribute": "CATALOGCODE",
            "sameAsObject": "INVENTORY"
        },
        {
            "attributeName": "MANUFACTURER",
            "required": false,
            "persistent": true,
            "title": "Manufacturer",
            "remarks": "Manufacturer",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "MODELNUM",
            "required": false,
            "persistent": true,
            "title": "Model",
            "remarks": "Model",
            "sameAsAttribute": "MODELNUM",
            "sameAsObject": "INVENTORY"
        },
        {
            "attributeName": "CURRENCYCODE",
            "required": false,
            "persistent": true,
            "title": "Currency",
            "remarks": "Currency code representing the vendor currency.",
            "sameAsAttribute": "CURRENCYCODE",
            "sameAsObject": "CURRENCY"
        },
        {
            "attributeName": "INSPECTIONREQUIRED",
            "required": true,
            "persistent": true,
            "title": "Inspection Required",
            "remarks": "Inspection Required",
            "sameAsAttribute": "INSPECTIONREQUIRED",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "REQUIREDDATE",
            "required": false,
            "persistent": true,
            "title": "Required Date",
            "remarks": "The required date for the item",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STOREROOMSITE",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "Storeroom site",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "MKTPLCITEM",
            "required": true,
            "persistent": true,
            "title": "Marketplace Item",
            "remarks": "Marketplace Item",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "VENDOR",
            "target": "COMPANIES",
            "remarks": null,
            "whereClause": "company = :vendor",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEM",
            "target": "ITEM",
            "remarks": null,
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRODUCTINFO",
            "target": "PRODUCTINFO",
            "remarks": null,
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": []
}