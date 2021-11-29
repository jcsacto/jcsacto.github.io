mos = {
    "objectName": "SHIPMENTLINE",
    "className": "psdi.app.po.ShipmentLineSet",
    "description": "The ShipmentLine Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "SHIPMENTLINEID",
    "primaryKeyColumns": [
        "SITEID",
        "SHIPMENTID",
        "SHIPMENTLINEID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "COMPANIES",
            "targetObject": "SHIPMENTLINE",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "FROMORGID, VENDOR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 71",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "SHIPMENTLINE",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "SHIPMENTLINE",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "TOORGID, VENDOR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 73",
            "longDescription": null
        },
        {
            "objectName": "INVUSELINESPLIT",
            "targetObject": "SHIPMENTLINE",
            "parentKeys": "INVUSELINESPLITID",
            "targetKeys": "INVUSELINESPLITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Inventory Use Line Split",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "SHIPMENTLINE",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "ITEMCONDITION",
            "targetObject": "SHIPMENTLINE",
            "parentKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "targetKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item Condition",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "SHIPMENTLINE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "FROMSITEID, FROMSTORELOC",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Source Storeroom",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "SHIPMENTLINE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "FROMSITEID, TOSTORELOC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 183",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "SHIPMENTLINE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, FROMSTORELOC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 184",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "SHIPMENTLINE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, TOSTORELOC",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Destination Storeroom",
            "longDescription": null
        },
        {
            "objectName": "MATRECTRANS",
            "targetObject": "SHIPMENTLINE",
            "parentKeys": "MATRECTRANSID",
            "targetKeys": "RECTRANSID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Shipment Line",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "SHIPMENTLINE",
            "parentKeys": "ORGID",
            "targetKeys": "FROMORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Source Organization",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "SHIPMENTLINE",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "SHIPMENTLINE",
            "parentKeys": "ORGID",
            "targetKeys": "TOORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Destination Organization",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "SHIPMENTLINE",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "FROMSITEID, PONUM, REVISIONNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 54",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "SHIPMENTLINE",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "SITEID, PONUM, REVISIONNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 55",
            "longDescription": null
        },
        {
            "objectName": "POLINE",
            "targetObject": "SHIPMENTLINE",
            "parentKeys": "POLINEID",
            "targetKeys": "POLINEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "POLine",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "SHIPMENTLINE",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 60",
            "longDescription": null
        },
        {
            "objectName": "SHIPMENT",
            "targetObject": "SHIPMENTLINE",
            "parentKeys": "FROMSITEID, SHIPMENTNUM",
            "targetKeys": "FROMSITEID, SHIPMENTNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Shipment Lines",
            "longDescription": null
        },
        {
            "objectName": "SHIPMENT",
            "targetObject": "SHIPMENTLINE",
            "parentKeys": "FROMSITEID, SHIPMENTNUM",
            "targetKeys": "SITEID, SHIPMENTNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 5",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "SHIPMENTLINE",
            "parentKeys": "SITEID",
            "targetKeys": "FROMSITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Source Site",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "SHIPMENTLINE",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "SHIPMENTID",
            "required": true,
            "persistent": true,
            "title": "Shipment",
            "remarks": "The identifier of the shipment record.",
            "sameAsAttribute": "SHIPMENTID",
            "sameAsObject": "SHIPMENT"
        },
        {
            "attributeName": "SHIPMENTLINEID",
            "required": true,
            "persistent": true,
            "title": "Shipment Line",
            "remarks": "The identifier of the shipment line.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SHIPMENTLINENUM",
            "required": false,
            "persistent": true,
            "title": "Shipment Line",
            "remarks": "The reference number for the shipment line as provided by the supplier.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VENDOR",
            "required": false,
            "persistent": true,
            "title": "Vendor",
            "remarks": "The vendor that is associated with the shipment.",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "ITEMNUM",
            "required": false,
            "persistent": true,
            "title": "Item",
            "remarks": "The identifier of the item being shipped.",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "ITEMDESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Description of the shipment item.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "CATALOGCODE",
            "required": false,
            "persistent": true,
            "title": "Catalog #",
            "remarks": "The catalog code of the current item.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VENDORLOTNUM",
            "required": false,
            "persistent": true,
            "title": "Vendor Lot",
            "remarks": "The lot number of the vendor that is associated with the current record.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORDERUNIT",
            "required": false,
            "persistent": true,
            "title": "Order Unit",
            "remarks": "The order unit that is associated with the current record.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PONUM",
            "required": false,
            "persistent": true,
            "title": "PO",
            "remarks": "The purchase order that is associated with the current record.",
            "sameAsAttribute": "PONUM",
            "sameAsObject": "PO"
        },
        {
            "attributeName": "POLINEID",
            "required": false,
            "persistent": true,
            "title": "PO Line ID",
            "remarks": "The identifier of the purchase order line.",
            "sameAsAttribute": "POLINEID",
            "sameAsObject": "POLINE"
        },
        {
            "attributeName": "COUNTRYOFORIGIN",
            "required": false,
            "persistent": true,
            "title": "Country of Origin",
            "remarks": "The country of origin of the current shipment line.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HAZARD",
            "required": false,
            "persistent": true,
            "title": "Hazard",
            "remarks": "The hazard of the shipment line.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BILLOFLADING",
            "required": false,
            "persistent": true,
            "title": "Bill of Lading",
            "remarks": "The details of the bill of lading for the shipment.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PACKINGCODE",
            "required": false,
            "persistent": true,
            "title": "Packing Code",
            "remarks": "The packing code for the current shipment.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PACKINGSLIPNUM",
            "required": false,
            "persistent": true,
            "title": "Packing Slip",
            "remarks": "The number of the packing slip that accompanies the shipment.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COMMENTS",
            "required": false,
            "persistent": true,
            "title": "Remarks",
            "remarks": "Additional remarks about the current shipment line.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SHIPPEDQTY",
            "required": true,
            "persistent": true,
            "title": "Quantity Shipped",
            "remarks": "The quantity of items in the shipment.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BACKORDERQTY",
            "required": false,
            "persistent": true,
            "title": "Back Order Quantity",
            "remarks": "The quantity of items that are back ordered.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INVOICEDQTY",
            "required": false,
            "persistent": true,
            "title": "Invoiced Quantity",
            "remarks": "The quantity of invoiced items.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "POLINENUM",
            "required": false,
            "persistent": true,
            "title": "Line",
            "remarks": "The identifier of the purchase order line.",
            "sameAsAttribute": "PRLINENUM",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "RECTRANSID",
            "required": false,
            "persistent": true,
            "title": "Received",
            "remarks": "Indicates whether receipt of the shipment has been recorded in the Shipment Receiving application.",
            "sameAsAttribute": "MATRECTRANSID",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "SITEID",
            "required": true,
            "persistent": true,
            "title": "Site",
            "remarks": "The site of the organization that is associated with the shipment.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "The organization that is associated with the shipment.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "TRACKINGID",
            "required": false,
            "persistent": true,
            "title": "Tracking ID",
            "remarks": "The tracking identifier for the current shipment line.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ITEMSETID",
            "required": false,
            "persistent": true,
            "title": "Item Set",
            "remarks": "The item set identifier for the current item.",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS"
        },
        {
            "attributeName": "CONDITIONCODE",
            "required": false,
            "persistent": true,
            "title": "Condition Code",
            "remarks": "The condition code that indicates the current physical condition of the item.",
            "sameAsAttribute": "CONDITIONCODE",
            "sameAsObject": "ITEMCONDITION"
        },
        {
            "attributeName": "REVISIONNUM",
            "required": true,
            "persistent": true,
            "title": "Revision",
            "remarks": "The revision number of the purchase order. Indicates how many times a purchase order has been revised.",
            "sameAsAttribute": "REVISIONNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "INVUSELINENUM",
            "required": false,
            "persistent": true,
            "title": "Line",
            "remarks": "The identifier of the inventory usage line.",
            "sameAsAttribute": "INVUSELINENUM",
            "sameAsObject": "INVUSELINE"
        },
        {
            "attributeName": "INVUSELINEID",
            "required": false,
            "persistent": true,
            "title": "Unique ID",
            "remarks": "Unique ID",
            "sameAsAttribute": "INVUSELINEID",
            "sameAsObject": "INVUSELINE"
        },
        {
            "attributeName": "INVUSELINESPLITID",
            "required": false,
            "persistent": true,
            "title": "Unique ID",
            "remarks": "Unique ID",
            "sameAsAttribute": "INVUSELINESPLITID",
            "sameAsObject": "INVUSELINESPLIT"
        },
        {
            "attributeName": "FROMSTORELOC",
            "required": false,
            "persistent": true,
            "title": "From Storeroom",
            "remarks": "The storeroom where the item is stocked. The storeroom information comes from default storeroom entry in the user profile, which also contains information about the site and organization.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "FROMSITEID",
            "required": false,
            "persistent": true,
            "title": "From Site",
            "remarks": "The identifier of the site that is transferring the inventory items.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "FROMORGID",
            "required": false,
            "persistent": true,
            "title": "From Organization",
            "remarks": "The identifier of the organization that is transferring the inventory items.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "TOSTORELOC",
            "required": false,
            "persistent": true,
            "title": "To Location",
            "remarks": "The storeroom location that the inventory items are charged to.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "TOORGID",
            "required": false,
            "persistent": true,
            "title": "To Organization",
            "remarks": "The organization that the inventory items are charged to.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "FROMBIN",
            "required": false,
            "persistent": false,
            "title": "From Bin",
            "remarks": "The identifier of the storeroom bin from which the current item is being transferred.",
            "sameAsAttribute": "BINNUM",
            "sameAsObject": "INVENTORY"
        },
        {
            "attributeName": "FROMLOT",
            "required": false,
            "persistent": false,
            "title": "From Lot",
            "remarks": "The identifier of the lot where the current item is stored.",
            "sameAsAttribute": "LOTNUM",
            "sameAsObject": "INVLOT"
        },
        {
            "attributeName": "ROTASSETNUM",
            "required": false,
            "persistent": false,
            "title": "Rotating Asset",
            "remarks": "Identifies the rotating asset that is associated with the item being transferred.",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "SHIPMENTNUM",
            "required": false,
            "persistent": true,
            "title": "Shipment",
            "remarks": "The reference number for the shipment record as provided by the supplier.",
            "sameAsAttribute": "SHIPMENTNUM",
            "sameAsObject": "SHIPMENT"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "INVUSELINE",
            "target": "INVUSELINE",
            "remarks": "Relationship to the InvUseLine table, used to find InvUse line for a given shipment line. The resulting set will contain zero or more objects.",
            "whereClause": "invuselineid =:invuselineid",
            "cardinality": null
        },
        {
            "name": "INVUSELINESPLIT",
            "target": "INVUSELINESPLIT",
            "remarks": "Remarks",
            "whereClause": "invuselinesplitid = :invuselinesplitid",
            "cardinality": null
        },
        {
            "name": "ITEMCONDITION",
            "target": "ITEMCONDITION",
            "remarks": "Relationship to the itemcondition table, used to find the itemcondition records for a given Shipment Line record. (itemcondition.itemnum = shipmentline.itemnum and itemcondition.itemsetid=shipmentline.itemsetid and itemcondition.conditioncode=shipmentline.conditioncode). The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid and conditioncode=:conditioncode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PO",
            "target": "PO",
            "remarks": "Relationship to the PO table, used to find a purchase order for a given shipment line. (shipmentline.ponum = po.ponum). The resulting set will contain zero or more objects. Note : A vendor may decide to send an advance shipping notice before actually sending the materials. This relationship is used to find the purchase order for which this advance shipping notice was sent.",
            "whereClause": "ponum = :ponum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POLINE",
            "target": "POLINE",
            "remarks": "Relationship to the POLine table, used to find a purchase order line for a given shipment line. (shipmentline.polineid = companies.polineid).  The resulting set will contain zero or more objects. Note : A vendor may decide to send an advance shipping notice before actually sending the materials. This relationship is used to find the purchase order line for which this advance shipping notice was sent.",
            "whereClause": "polineid = :polineid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHIPMENT",
            "target": "SHIPMENT",
            "remarks": "Relationship to the ShipmentLine table, used to find all shipment line records for a given shipment. (shipment.shipmentid = shipmentline.shipmentid). The resulting set will contain zero or more objects.",
            "whereClause": "shipmentid = :shipmentid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "SHIPMENTLINE",
            "source": "INVUSELINESPLIT",
            "remarks": "Relationship to the ShipmentLine table, used to find the invuselinesplit records. The resulting set will contain zero or one object.",
            "whereClause": "invuselinesplitid=:invuselinesplitid",
            "cardinality": null
        },
        {
            "name": "SHIPMENTLINE",
            "source": "MATRECTRANS",
            "remarks": "Relationship to the MatRecTrans table, used to find the ShipmentLine record for the given shipmentnum, shipmentlienum and siteid. The resulting set will contain zero or more objects.",
            "whereClause": "shipmentnum=:shipmentnum and shipmentlinenum=:shipmentlinenum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "SHIPMENTLINE",
            "source": "PO",
            "remarks": "Relationship to the ShipmentLine table, used to find all shipment line records for a given purchase order. (shipmentline.ponum = po.ponum). The resulting set will contain zero or more objects.",
            "whereClause": "ponum = :ponum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHIPMENTLINE",
            "source": "POLINE",
            "remarks": "Relationship to the ShipmentLine table, use to find all shipment lines for a give purchase order line. (shipmentline.polineid = poline.polineid). The resulting set will contain zero or more objects.",
            "whereClause": "polineid = :polineid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHIPMENTLINE",
            "source": "SHIPMENT",
            "remarks": "Relationship to the ShipmentLine table, used to find the shipment lines for a given shipment. (shipment.shipmentid = shipmentline.shipmentid). The resulting set will contain zero or more objects.",
            "whereClause": "shipmentid = :shipmentid and siteid=:siteid",
            "cardinality": "MULTIPLE"
        }
    ]
}