mos = {
    "objectName": "SHIPMENT",
    "className": "psdi.app.po.ShipmentSet",
    "description": "The Shipment Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "SHIPMENTID",
    "primaryKeyColumns": [
        "FROMSITEID",
        "SHIPMENTNUM"
    ],
    "logicalRelationships": [
        {
            "objectName": "SHIPMENT",
            "targetObject": "MATRECTRANS",
            "parentKeys": "FROMSITEID, SHIPMENTNUM",
            "targetKeys": "FROMSITEID, SHIPMENTNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Shipment",
            "longDescription": null
        },
        {
            "objectName": "SHIPMENT",
            "targetObject": "MATRECTRANS",
            "parentKeys": "FROMSITEID, SHIPMENTNUM",
            "targetKeys": "POSITEID, SHIPMENTNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 2",
            "longDescription": null
        },
        {
            "objectName": "SHIPMENT",
            "targetObject": "MATRECTRANS",
            "parentKeys": "FROMSITEID, SHIPMENTNUM",
            "targetKeys": "SITEID, SHIPMENTNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 3",
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
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "ADDRESS",
            "targetObject": "SHIPMENT",
            "parentKeys": "ORGID, ADDRESSCODE",
            "targetKeys": "ORGID, BILLTO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Bill To Address",
            "longDescription": null
        },
        {
            "objectName": "ADDRESS",
            "targetObject": "SHIPMENT",
            "parentKeys": "ORGID, ADDRESSCODE",
            "targetKeys": "ORGID, SHIPTO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Ship To Address",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "SHIPMENT",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor",
            "longDescription": null
        },
        {
            "objectName": "INVUSE",
            "targetObject": "SHIPMENT",
            "parentKeys": "INVUSENUM, SITEID",
            "targetKeys": "INVUSENUM, FROMSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 7",
            "longDescription": null
        },
        {
            "objectName": "INVUSE",
            "targetObject": "SHIPMENT",
            "parentKeys": "INVUSENUM, SITEID",
            "targetKeys": "INVUSENUM, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Inventory Usage",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "SHIPMENT",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SHIPMENT",
            "parentKeys": "PERSONID",
            "targetKeys": "ENTERBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who entered the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SHIPMENT",
            "parentKeys": "PERSONID",
            "targetKeys": "SHIPTOATTN",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Ship To Person",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "SHIPMENT",
            "parentKeys": "SITEID",
            "targetKeys": "FROMSITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "SHIPMENT",
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
            "remarks": "The identifier of the shipment.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SHIPMENTNUM",
            "required": false,
            "persistent": true,
            "title": "Shipment",
            "remarks": "The reference number for the shipment record as provided by the supplier.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUS",
            "required": true,
            "persistent": true,
            "title": "Status",
            "remarks": "The current status of the shipment.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SHIPDATE",
            "required": true,
            "persistent": true,
            "title": "Shipment Date",
            "remarks": "The date that the items were shipped. The shipment date is set when you start the shipping process by changing the status of the inventory record to Shipped.",
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
            "attributeName": "SHIPTO",
            "required": false,
            "persistent": true,
            "title": "Ship To",
            "remarks": "The company or division where the items are to be shipped.",
            "sameAsAttribute": "ADDRESSCODE",
            "sameAsObject": "ADDRESS"
        },
        {
            "attributeName": "BILLTO",
            "required": false,
            "persistent": true,
            "title": "Bill To",
            "remarks": "The company or division that is to be billed for the shipment.",
            "sameAsAttribute": "ADDRESSCODE",
            "sameAsObject": "ADDRESS"
        },
        {
            "attributeName": "EXPRECEIPTDATE",
            "required": false,
            "persistent": true,
            "title": "Expected Receipt Date",
            "remarks": "The expected date that the items will be received.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DROPPOINT",
            "required": false,
            "persistent": true,
            "title": "Drop-off Point",
            "remarks": "The precise location where the items are to be delivered.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CARRIER",
            "required": false,
            "persistent": true,
            "title": "Carrier",
            "remarks": "The transportation agency that is responsible for delivering the shipment.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CARRIERMETHOD",
            "required": false,
            "persistent": true,
            "title": "Carrier Method",
            "remarks": "The method of shipment, such as by land or by air.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CARRIERVEHICLENUM",
            "required": false,
            "persistent": true,
            "title": "Carrier Vehicle",
            "remarks": "The vehicle number of the carrier.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NUMOFPACKAGES",
            "required": false,
            "persistent": true,
            "title": "Number of Packages",
            "remarks": "The number of packages that are in the shipment.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GROSSWEIGHT",
            "required": false,
            "persistent": true,
            "title": "Gross Weight",
            "remarks": "The gross weight of the shipment.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GROSSWEIGHTUOM",
            "required": false,
            "persistent": true,
            "title": "Gross Weight Unit of Measure",
            "remarks": "The unit of measurement in which the gross weight is displayed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NETWEIGHT",
            "required": false,
            "persistent": true,
            "title": "Net Weight",
            "remarks": "The net weight of the shipment.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NETWEIGHTUOM",
            "required": false,
            "persistent": true,
            "title": "Net Weight Unit of Measure",
            "remarks": "The unit of measurement in which the net weight is shown.",
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
            "attributeName": "PACKINGSLIPNUM",
            "required": false,
            "persistent": true,
            "title": "Packing Slip",
            "remarks": "The number of the packing slip that accompanies the shipment.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SPECIALHANDLING",
            "required": false,
            "persistent": true,
            "title": "Special Handling",
            "remarks": "Any special handling instructions that are needed for the shipment.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FREIGHTBILLNUM",
            "required": false,
            "persistent": true,
            "title": "Freight Bill Number",
            "remarks": "The freight bill number for the shipment.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FREIGHTAMOUNT",
            "required": false,
            "persistent": true,
            "title": "Freight Amount",
            "remarks": "The freight amount for the shipment.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FREIGHTTERMS",
            "required": false,
            "persistent": true,
            "title": "Freight Terms",
            "remarks": "The freight terms for the shipment.",
            "sameAsAttribute": "FREIGHTTERMS",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "PAYMENTTERMS",
            "required": false,
            "persistent": true,
            "title": "Payment Terms",
            "remarks": "The terms of payment for the shipment.",
            "sameAsAttribute": "PAYMENTTERMS",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "WAYBILLNUM",
            "required": false,
            "persistent": true,
            "title": "Way Bill Number",
            "remarks": "The way bill number for the shipment.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENTERBY",
            "required": false,
            "persistent": true,
            "title": "Entered by",
            "remarks": "The person who created the shipment record.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "ENTERDATE",
            "required": false,
            "persistent": true,
            "title": "ASN Date",
            "remarks": "The date the advance shipment notification was entered.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FOB",
            "required": false,
            "persistent": true,
            "title": "Freight on Board",
            "remarks": "The freight on the carrier.",
            "sameAsAttribute": "FOB",
            "sameAsObject": "COMPANIES"
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
            "remarks": "The organization that is associated with the inventory.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "INVUSENUM",
            "required": false,
            "persistent": true,
            "title": "Usage",
            "remarks": "The identifier of the inventory usage.",
            "sameAsAttribute": "INVUSENUM",
            "sameAsObject": "INVUSE"
        },
        {
            "attributeName": "SHIPTOATTN",
            "required": false,
            "persistent": true,
            "title": "Attention of",
            "remarks": "The person to whom the inventory items are being shipped.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "FROMSITEID",
            "required": false,
            "persistent": true,
            "title": "From Site",
            "remarks": "The site of the organization associated with the inventory. The site information comes from the default insert site in the user's profile, which also contains information about the organization and storeroom.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "UNACCEPTALL",
            "required": false,
            "persistent": false,
            "title": "UnAccept All",
            "remarks": "UnAccept All",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ACCEPTALL",
            "required": false,
            "persistent": false,
            "title": "Accept All",
            "remarks": "Accept All",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REJECTALL",
            "required": false,
            "persistent": false,
            "title": "Reject All",
            "remarks": "Reject All",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "UNREJECTALL",
            "required": false,
            "persistent": false,
            "title": "UnReject All",
            "remarks": "UnReject All",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ASSETINPUT",
            "target": "ASSETINPUT",
            "remarks": "Relationship to the non-persistent AssetInput table. (No where clause). The resulting set will contain zero objects. Note: This relationship is used only for the Receiving application, Receive Rotating Items action to display records based on MatRecTrans table with rotating asset for a given shipment.",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "ASSETMOVEDFLT",
            "target": "ASSETMOVEDFLT",
            "remarks": "Relationship to the shipment assetmovedflt records, used to find the assetmovedflt records for a given shipment.",
            "whereClause": "",
            "cardinality": null
        },
        {
            "name": "VENDOR",
            "target": "COMPANIES",
            "remarks": "Relationship to the Companies table, used to find the company records for a given shipment. (shipment.vendor = companies.company). The resulting set will contain zero or more objects.",
            "whereClause": "company = :vendor and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVUSE",
            "target": "INVUSE",
            "remarks": "Relationship between the Shipment table and the Invuse table.  Used to find all INVUSE records for a given shipment.  This will return 0 or 1 record.",
            "whereClause": "invusenum = :invusenum and siteid = :fromsiteid",
            "cardinality": null
        },
        {
            "name": "PARENTMATRECTRANS",
            "target": "MATRECTRANS",
            "remarks": "Relationship to the Shipment table, used to find the MatRecTrans record for the given shipmentnum and SHIPTRANSFER issue type. The resulting set will contain zero or more objects.",
            "whereClause": "shipmentnum=:shipmentnum and fromsiteid=:fromsiteid and issuetype in (select value from synonymdomain where domainid='ISSUETYP' and maxvalue='SHIPRECEIPT')",
            "cardinality": null
        },
        {
            "name": "PARENTSHIPMENTLINE",
            "target": "MATRECTRANS",
            "remarks": "Relationship to the MatRecTrans table, used to find all parent material receipt transactions for a given shipment.",
            "whereClause": "shipmentnum =:shipmentnum and positeid =:fromsiteid and issuetype not in (select value from synonymdomain where domainid='ISSUETYP' and maxvalue='SHIPTRANSFER')",
            "cardinality": null
        },
        {
            "name": "RECEIPTTYPEMATREC",
            "target": "MATRECTRANS",
            "remarks": "Relationship to the MatRecTrans table, used to find all records of type SHIPRECEIPT and TRANSFER that do not have a fromstoreloc of type HOLDING and that are not receipts of rotating assets (shipment.shipmentnum = matrectrans.shipmentnum  and shipment.siteid = matrectrans.siteid and matrectrans.status is not null and issuetype in (select value from synonymdomain where domainid='ISSUETYP' and maxvalue in ('TRANSFER','SHIPRECEIPT')) and not exists (select locations.location from locations where locations.location=matrectrans.fromstoreloc and locations.siteid=matrectrans.fromsiteid and locations.type in (select value from synonymdomain where domainid='LOCTYPE' and maxvalue='HOLDING'))).",
            "whereClause": "shipmentnum=:shipmentnum and siteid=:siteid and status is not null and issuetype in (select value from synonymdomain where domainid='ISSUETYP' and maxvalue in ('TRANSFER','SHIPRECEIPT')) and  not exists (select locations.location from locations where locations.location=matrectrans.fromstoreloc and locations.siteid=matrectrans.fromsiteid and  locations.type in (select value from synonymdomain where domainid='LOCTYPE' and maxvalue='HOLDING'))",
            "cardinality": null
        },
        {
            "name": "ROTINSPECTIONALLTRANSFERS",
            "target": "MATRECTRANS",
            "remarks": "Relationship to the MATRECTRANS table, used to find the MATRECTRANS records. The resulting set will contain one or many object.",
            "whereClause": "shipmentnum = :shipmentnum  and matrectransid in (select receiptref from matrectrans where shipmentnum = :shipmentnum  and belongsto is null and status in (select value from synonymdomain where maxvalue='WINSP' and domainid = 'RECEIPTSTATUS'))",
            "cardinality": null
        },
        {
            "name": "ROTINSPECTIONSTOREROOMS",
            "target": "MATRECTRANS",
            "remarks": "Relationship used to find the storerooms for a given shipment.  Returns 1 or more records.",
            "whereClause": "shipmentnum = :shipmentnum and belongsto is null and itemnum in (select item.itemnum from item where matrectrans.itemnum=item.itemnum and rotating=:yes) and status in (select value from synonymdomain where maxvalue='WINSP' and domainid = 'RECEIPTSTATUS') and positeid=:fromsiteid",
            "cardinality": null
        },
        {
            "name": "UNAPPROVEDSHIPMENT",
            "target": "MATRECTRANS",
            "remarks": "Relationship to the MatRecTrans table, used to find all parent material receipt transactions that have not been inspected for a given shipment.  The resulting set will contain zero or more objects. Note: This relationship is used only for theShipment Receiving application, Change Inspection Status action to display records based on MatRecTrans table with WINSP status.",
            "whereClause": "shipmentnum=:shipmentnum and belongsto is null and (fromstoreloc is not null and itemnum in (select item.itemnum from item where matrectrans.itemnum=item.itemnum and rotating=:no)) and status in (select value from synonymdomain where maxvalue='WINSP' and domainid = 'RECEIPTSTATUS') and positeid=:fromsiteid",
            "cardinality": null
        },
        {
            "name": "RETURNRECEIPTINPUT",
            "target": "RECEIPTINPUT",
            "remarks": "Relationship to the non-persistent ReceiptInput table, used to create shipment receipt return transactions for a given shipment. (No where clause). The resulting set will contain zero objects.  Note: This relationship is used only for the Shipment Receiving application, Select Item for Return (button) page to display return shipment receipt transactions for a given shipment.",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "MATRECEIPTINPUT",
            "target": "RECEIPTINPUT",
            "remarks": "Relationship to the non-persistent ReceiptInput table, used to find all material receipt transactions for a given shipment. (No where clause). The resulting set will contain zero objects. Note: This relationship is used only for the Receiving application, Select Ordered Items(button) page to display material receipt transactions for a given shipment",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "VOIDRECEIPTINPUT",
            "target": "RECEIPTINPUT",
            "remarks": "Relationship to the non-persistent ReceiptInput table, used to create shipment receipt void transactions for a given shipment. (No where clause). The resulting set will contain zero objects.  Note: This relationship is used only for the Shipment Receiving application, Select Shipment Receipts to Void (button) page to display receipt transactions for a given shipment.",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "ROTINSPECTION",
            "target": "ROTINSPECTION",
            "remarks": "Relationship to the non-persistent RotInspection table. (No where clause). The resulting set will contain zero objects. Note: This relationship is used only for the Shipment Receiving application, Change Inspection Status for Rotating Items action.",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "SHIPMENTLINE",
            "target": "SHIPMENTLINE",
            "remarks": "Relationship to the ShipmentLine table, used to find the shipment lines for a given shipment. (shipment.shipmentid = shipmentline.shipmentid). The resulting set will contain zero or more objects.",
            "whereClause": "shipmentid = :shipmentid and siteid=:siteid",
            "cardinality": "MULTIPLE"
        }
    ],
    "incomingRelationships": [
        {
            "name": "SHIPMENT",
            "source": "INVUSE",
            "remarks": "Relationship to the Shipment table, used to find the invuse record. The resulting set will contain zero or one object.",
            "whereClause": "invusenum=:invusenum and fromsiteid=:siteid",
            "cardinality": null
        },
        {
            "name": "SHIPMENT",
            "source": "SHIPMENTLINE",
            "remarks": "Relationship to the ShipmentLine table, used to find all shipment line records for a given shipment. (shipment.shipmentid = shipmentline.shipmentid). The resulting set will contain zero or more objects.",
            "whereClause": "shipmentid = :shipmentid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ]
}