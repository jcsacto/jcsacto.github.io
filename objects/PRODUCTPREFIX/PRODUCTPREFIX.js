mos = {
    "objectName": "PRODUCTPREFIX",
    "className": "psdi.app.dbchange.ProductPrefixSet",
    "description": "List of prefixes reserved by this project.",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "PRODUCTPREFIXID",
    "primaryKeyColumns": [],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "PRODUCT",
            "targetObject": "PRODUCTPREFIX",
            "parentKeys": "PRODUCT",
            "targetKeys": "PRODUCT",
            "relNum": null,
            "status": "UNVERIFIED",
            "description": "Relationship 2",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "PRODUCT",
            "required": true,
            "persistent": true,
            "title": "Product",
            "remarks": "Product that owns the prefix",
            "sameAsAttribute": "PRODUCT",
            "sameAsObject": "PRODUCT"
        },
        {
            "attributeName": "PREFIX",
            "required": true,
            "persistent": true,
            "title": "Product",
            "remarks": "Product that owns the prefix",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CURRENT",
            "required": true,
            "persistent": true,
            "title": "Currently In Use",
            "remarks": "Is this prefix currently in use for the product?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PRODUCTPREFIXID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CURRENTPF",
            "required": true,
            "persistent": true,
            "title": "Currently In Use",
            "remarks": "Is this prefix currently in use for the product?",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}