mos = {
    "objectName": "MAXDATAPREFIX",
    "className": "psdi.app.system.MaxDataPrefixSet",
    "description": "Prefixes reserved for products",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXDATAPREFIXID",
    "primaryKeyColumns": [
        "PREFIX"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "PREFIX",
            "required": true,
            "persistent": true,
            "title": "Prefix",
            "remarks": "String that should be used as prefix to the content unique id of the out-of-box data or messages provided by the specific product.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PRODUCT",
            "required": false,
            "persistent": true,
            "title": "Product",
            "remarks": "Name and description of the product",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXDATAPREFIXID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}