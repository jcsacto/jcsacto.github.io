mos = {
    "objectName": "MAXLICPRDKEYLIST",
    "className": "psdi.app.lictrack.MaxLicPrdKeyListSet",
    "description": "Table for storing the list of PRODUCTKEYS per offering.",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXLICPRDKEYLISTID",
    "primaryKeyColumns": [
        "PRODUCTNAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "MAXPRODID",
            "required": true,
            "persistent": true,
            "title": "Product Identifier",
            "remarks": "Internal identifier of Maximo Product",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PRODUCTNAME",
            "required": true,
            "persistent": true,
            "title": "Product Name",
            "remarks": "Name of Maximo Product",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PRODUCTDESC",
            "required": true,
            "persistent": true,
            "title": "Product Description",
            "remarks": "Type of Product",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PRODUCTKEYS",
            "required": true,
            "persistent": true,
            "title": "Product Keys",
            "remarks": "Internal keys for Product Identification",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISADDONSOLUTION",
            "required": true,
            "persistent": true,
            "title": "Is Add On Solution",
            "remarks": "Product is an Add On Solution",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISINDUSTRYSOLUTION",
            "required": true,
            "persistent": true,
            "title": "Is Industry Solution",
            "remarks": "Product is an Industry Solution",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISBASEMAXIMO",
            "required": true,
            "persistent": true,
            "title": "Is Base Maximo",
            "remarks": "Product is a Core Product",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISINSTALLED",
            "required": true,
            "persistent": true,
            "title": "Is Product Installed",
            "remarks": "Integer 1 value if product is installed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXLICPRDKEYLISTID",
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