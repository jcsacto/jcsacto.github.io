mos = {
    "objectName": "DMTARGETPRODUCTS",
    "className": "psdi.dm.virtual.DMTargetVersionSet",
    "description": "Non persistent object to show target products",
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
            "attributeName": "TARGETNAME",
            "required": false,
            "persistent": false,
            "title": "Product",
            "remarks": "Name of the target product",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TARGETVERSION",
            "required": false,
            "persistent": false,
            "title": "Version",
            "remarks": "version of the target product",
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
            "name": "DMTARGETPRODUCTS",
            "source": "DMDEPLOYABLEPKG",
            "remarks": "Relationship to display target products information for a package",
            "whereClause": "1=1",
            "cardinality": null
        }
    ]
}