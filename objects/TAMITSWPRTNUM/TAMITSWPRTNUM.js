mos = {
    "objectName": "TAMITSWPRTNUM",
    "className": "psdi.app.common.CommonMboSet",
    "description": "TAMIT Software Part Number",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "TAMITSWPRTNUMID",
    "primaryKeyColumns": [
        "PARTNUMBER",
        "CCID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "PARTNUMBER",
            "required": true,
            "persistent": true,
            "title": "Part Number",
            "remarks": "Software part number",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Description of the part number",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CCID",
            "required": true,
            "persistent": true,
            "title": "CCID",
            "remarks": "Chargeable Component",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHARGETYPE",
            "required": false,
            "persistent": true,
            "title": "Charge Type",
            "remarks": "Charge type",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PRODUCTIDS",
            "required": false,
            "persistent": true,
            "title": "Product IDs",
            "remarks": "Product unique identifiers",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISPVU",
            "required": true,
            "persistent": true,
            "title": "Uses PVU",
            "remarks": "Is this product licensed using the Processor Value Units metric",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISSUBCAP",
            "required": true,
            "persistent": true,
            "title": "Subcapacity Eligible",
            "remarks": "Is this product eligible for subcapacity pricing",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISDELETED",
            "required": true,
            "persistent": true,
            "title": "Deleted",
            "remarks": "Is this entry deleted",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GUID",
            "required": false,
            "persistent": true,
            "title": "GUID",
            "remarks": "GUID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DELETEDATE",
            "required": false,
            "persistent": true,
            "title": "Delete Date",
            "remarks": "Date when the record was deleted",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TAMITSWPRTNUMID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "QUANTITY",
            "required": false,
            "persistent": true,
            "title": "Quantity",
            "remarks": "The quantity for the part number charge type",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "TLOAMSOFTWARE",
            "target": "TLOAMSOFTWARE",
            "remarks": "Relationship from Software Part Number to Software Catalog. Return zero or one row.",
            "whereClause": "ccid=:ccid",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "TAMITSWPRTNUM",
            "source": "TLOAMSOFTWARE",
            "remarks": "Relationship from Software Catalog to Software Part Number. Return zero or more rows.",
            "whereClause": "ccid=:ccid",
            "cardinality": null
        }
    ]
}