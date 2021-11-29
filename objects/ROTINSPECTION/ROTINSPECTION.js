mos = {
    "objectName": "ROTINSPECTION",
    "className": "psdi.app.inventory.virtual.RotInspectionSet",
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
            "attributeName": "QUANTITY",
            "required": false,
            "persistent": false,
            "title": "Quantity",
            "remarks": "The quantity of rotating items on the current record.",
            "sameAsAttribute": "ORDERQTY",
            "sameAsObject": "INVENTORY"
        },
        {
            "attributeName": "ACCEPTEDQTY",
            "required": false,
            "persistent": false,
            "title": "Accepted Quantity",
            "remarks": "The quantity of items that have been accepted at the destination storeroom after inspection.",
            "sameAsAttribute": "ACCEPTEDQTY",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "REJECTEDQTY",
            "required": false,
            "persistent": false,
            "title": "Rejected Quantity",
            "remarks": "The quantity of items that have been rejected at the destination storeroom after inspection.",
            "sameAsAttribute": "ACCEPTEDQTY",
            "sameAsObject": "MATRECTRANS"
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
            "attributeName": "ORGID",
            "required": false,
            "persistent": false,
            "title": "Organization",
            "remarks": "The organization that is associated with the current record.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ROTINSPECTIONLINEDIALOG",
            "target": "MATRECTRANS",
            "remarks": "Relationship for the Change Inspection Status Dialog.  This relationship gets all of the assets that are waiting inspection for this shipmentnum.",
            "whereClause": "shipmentnum = :shipmentnum and matrectransid in (select receiptref from matrectrans where shipmentnum = :shipmentnum and belongsto is null and status in (select value from synonymdomain where maxvalue='WINSP' and domainid = 'RECEIPTSTATUS')) and tostoreloc = :tostoreloc and siteid = :siteid and itemnum = :itemnum",
            "cardinality": null
        },
        {
            "name": "ROTINSPECTIONLINE",
            "target": "ROTINSPECTIONLINE",
            "remarks": "Relationship to the rotinspectionline table to find child items.",
            "whereClause": "tostoreloc =:tostoreloc and siteid =:siteid and itemnum = :itemnum",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "ROTINSPECTION",
            "source": "SHIPMENT",
            "remarks": "Relationship to the non-persistent RotInspection table. (No where clause). The resulting set will contain zero objects. Note: This relationship is used only for the Shipment Receiving application, Change Inspection Status for Rotating Items action.",
            "whereClause": null,
            "cardinality": null
        }
    ]
}