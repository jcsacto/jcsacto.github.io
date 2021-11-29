mos = {
    "objectName": "DMSOURCEPRODUCTS",
    "className": "psdi.dm.virtual.DMSourceVersionSet",
    "description": "Non persistent object to show source products",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": false,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "SRCNAME",
            "required": false,
            "persistent": false,
            "title": "Product",
            "remarks": "Name of the source product",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SRCVERSION",
            "required": false,
            "persistent": false,
            "title": "Version",
            "remarks": "version of the source product",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EXCLUDE",
            "required": false,
            "persistent": false,
            "title": "Exclude",
            "remarks": "Select this option to exclude the product from the compatibility checks.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RESULT",
            "required": false,
            "persistent": false,
            "title": "Result",
            "remarks": "Result of version check ",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ICONNAME",
            "required": false,
            "persistent": false,
            "title": "Icon Name",
            "remarks": "Icon Name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ICONTEXT",
            "required": false,
            "persistent": false,
            "title": "Explanation",
            "remarks": "Text explaining icon ",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "DMSOURCEPRODUCTS",
            "source": "DMDEPLOYABLEPKG",
            "remarks": "Relationship to display source products information for a package",
            "whereClause": "1=1",
            "cardinality": null
        }
    ]
}