mos = {
    "objectName": "ROTINSPECTIONLINE",
    "className": "psdi.app.inventory.virtual.RotInspectionLineSet",
    "description": "Used for Change Inspection Status for Rotating Items",
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
            "attributeName": "ROTASSETNUM",
            "required": false,
            "persistent": false,
            "title": "Rotating Asset",
            "remarks": "The rotating asset that is associated with the current record.",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "FROMBIN",
            "required": false,
            "persistent": false,
            "title": "From Bin",
            "remarks": "The bin containing the item that is being transferred.",
            "sameAsAttribute": "BINNUM",
            "sameAsObject": "INVENTORY"
        },
        {
            "attributeName": "ACCEPTED",
            "required": false,
            "persistent": false,
            "title": "Accepted",
            "remarks": "Indicates whether the asset has passed an inspection and can be accepted at the destination storeroom.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REJECTED",
            "required": false,
            "persistent": false,
            "title": "Rejected",
            "remarks": "Indicates whether the asset has failed an inspection and is rejected at the destination storeroom.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOSTORELOC",
            "required": false,
            "persistent": false,
            "title": "Storeroom",
            "remarks": "The destination storeroom to which the items are being transferred. ",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": false,
            "title": "Site",
            "remarks": "The site that is associated with the current record.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ITEMNUM",
            "required": false,
            "persistent": false,
            "title": "Item",
            "remarks": "The item that is associated with the current record.",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "SHIPMENTNUM",
            "required": false,
            "persistent": false,
            "title": "Shipment",
            "remarks": "Identifies the shipment that is associated with the current record.",
            "sameAsAttribute": "SHIPMENTNUM",
            "sameAsObject": "SHIPMENT"
        },
        {
            "attributeName": "MATRECTRANSID",
            "required": false,
            "persistent": false,
            "title": "Matrectrans ID",
            "remarks": "Identifies the material receipts transaction of the original record. ",
            "sameAsAttribute": "MATRECTRANSID",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": false,
            "title": "Organization",
            "remarks": "The organization that is associated with the current record.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "ROTINSPECTIONLINE",
            "source": "ROTINSPECTION",
            "remarks": "Relationship to the rotinspectionline table to find child items.",
            "whereClause": "tostoreloc =:tostoreloc and siteid =:siteid and itemnum = :itemnum",
            "cardinality": null
        }
    ]
}