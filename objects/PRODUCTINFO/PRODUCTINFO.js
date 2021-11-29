mos = {
    "objectName": "PRODUCTINFO",
    "className": "psdi.app.mr.virtual.ProductInfoSet",
    "description": "Marketplace Product Info",
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
            "attributeName": "PRICE",
            "required": false,
            "persistent": false,
            "title": "Unit Cost",
            "remarks": "Unit Cost",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AVAILABILITY",
            "required": false,
            "persistent": false,
            "title": "Quantity Available",
            "remarks": "Available Quanttity",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ITEM",
            "required": false,
            "persistent": false,
            "title": "Item",
            "remarks": "Item",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "Item Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VENDORPARTNUM",
            "required": false,
            "persistent": false,
            "title": "Catalog Part Number",
            "remarks": "Vendor Part Number",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUS",
            "required": false,
            "persistent": false,
            "title": "Status",
            "remarks": "Item Status",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ALTERNATE",
            "required": false,
            "persistent": false,
            "title": "Alternative  Item",
            "remarks": "Alternative  Item",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MINQUANTITY",
            "required": false,
            "persistent": false,
            "title": "Minimum Quantity",
            "remarks": "Minimum quantity that must be ordered",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MULQUANTITY",
            "required": false,
            "persistent": false,
            "title": "Multiple Quantity",
            "remarks": "Multiple quantity that must be ordered",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OPTIONAL",
            "required": false,
            "persistent": false,
            "title": "Optional",
            "remarks": "Optional",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PACKQUANTITY",
            "required": false,
            "persistent": false,
            "title": "Items in Pack.",
            "remarks": "Number of items in pack.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SUBSTITUTE",
            "required": false,
            "persistent": false,
            "title": "Substitute",
            "remarks": "Substitute",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NOTES",
            "required": false,
            "persistent": false,
            "title": "Notes",
            "remarks": "Notes",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PACKING",
            "required": false,
            "persistent": false,
            "title": "Pack Code",
            "remarks": "Pack code",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "UNITOFMEASURE",
            "required": false,
            "persistent": false,
            "title": "Order Unit",
            "remarks": "Order Unit",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "PRODUCTINFO",
            "source": "FAVITEM",
            "remarks": null,
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}