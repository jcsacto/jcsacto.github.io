mos = {
    "objectName": "RECEIPTINPUT",
    "className": "psdi.app.po.virtual.ReceiptInputSet",
    "description": "Information gethering for creating receipt",
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
            "attributeName": "ORGID",
            "required": true,
            "persistent": false,
            "title": "Organization",
            "remarks": "Organization Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": true,
            "persistent": false,
            "title": "Site",
            "remarks": "Site Identifier",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "PONUM",
            "required": false,
            "persistent": false,
            "title": "PO",
            "remarks": "PO number",
            "sameAsAttribute": "PONUM",
            "sameAsObject": "PO"
        },
        {
            "attributeName": "POLINENUM",
            "required": false,
            "persistent": false,
            "title": "PO Line",
            "remarks": "POLine Number",
            "sameAsAttribute": "PRLINENUM",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "ORDERQTY",
            "required": false,
            "persistent": false,
            "title": "Quantity Ordered",
            "remarks": "Order quantity",
            "sameAsAttribute": "ORDERQTY",
            "sameAsObject": "INVENTORY"
        },
        {
            "attributeName": "CURRENCYLINECOST",
            "required": false,
            "persistent": false,
            "title": "Line Cost Ordered",
            "remarks": "Line cost in vendor's currency",
            "sameAsAttribute": "CURRENCYLINECOST",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "RECEIVEDQTY",
            "required": false,
            "persistent": false,
            "title": "Quantity Received",
            "remarks": "Already received quantity",
            "sameAsAttribute": "ORDERQTY",
            "sameAsObject": "INVENTORY"
        },
        {
            "attributeName": "QTYREQUESTED",
            "required": false,
            "persistent": false,
            "title": "Quantity Due",
            "remarks": "Remaining quantity can be received",
            "sameAsAttribute": "ORDERQTY",
            "sameAsObject": "INVENTORY"
        },
        {
            "attributeName": "CURRENCYAMTRCVED",
            "required": false,
            "persistent": false,
            "title": "Currency Amount Received",
            "remarks": "Already received amount in vendor's currency",
            "sameAsAttribute": "CURRENCYLINECOST",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "CURRENCYAMTTORCV",
            "required": false,
            "persistent": false,
            "title": "Line Cost Due",
            "remarks": "Amount yet to be received in vendor's currency",
            "sameAsAttribute": "CURRENCYLINECOST",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "ASN",
            "required": true,
            "persistent": false,
            "title": "ASN",
            "remarks": "Is created according to advanced shipping notice",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PACKINGSLIPNUM",
            "required": false,
            "persistent": false,
            "title": "Packing Slip",
            "remarks": "Packing slip number",
            "sameAsAttribute": "PACKINGSLIPNUM",
            "sameAsObject": "SHIPMENTLINE"
        },
        {
            "attributeName": "ITEMNUM",
            "required": false,
            "persistent": false,
            "title": "Item",
            "remarks": "The number of the item to be received",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "The description of the item or service being received",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "TOSTORELOC",
            "required": false,
            "persistent": false,
            "title": "To Storeroom",
            "remarks": "Receiving Location",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "MATRECTRANSID",
            "required": false,
            "persistent": false,
            "title": "MatRecTransID",
            "remarks": "Matrectransid of the creating receipt",
            "sameAsAttribute": "MATRECTRANSID",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "GLDEBITACCT",
            "required": false,
            "persistent": false,
            "title": "GL Debit Account",
            "remarks": "GLDebit acct of the creating receipt",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TRANSDATE",
            "required": false,
            "persistent": false,
            "title": "Transaction Date",
            "remarks": "Date and Time Transaction Was Entered",
            "sameAsAttribute": "TRANSDATE",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "LINETYPE",
            "required": true,
            "persistent": false,
            "title": "Line Type",
            "remarks": "Line type. The value of line type could be Item, Material, Service, Special Order or External Catalog Item.",
            "sameAsAttribute": "LINETYPE",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "ITEMSETID",
            "required": false,
            "persistent": false,
            "title": "Item Set",
            "remarks": "Item set identifier for this item.",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS"
        },
        {
            "attributeName": "REMARK",
            "required": false,
            "persistent": false,
            "title": "Remarks",
            "remarks": "Remarks for the receipt",
            "sameAsAttribute": "REMARK",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "INVOICENUM",
            "required": false,
            "persistent": false,
            "title": "Invoice",
            "remarks": "Invoice number",
            "sameAsAttribute": "INVOICENUM",
            "sameAsObject": "INVOICE"
        },
        {
            "attributeName": "CONDITIONCODE",
            "required": false,
            "persistent": false,
            "title": "Condition Code",
            "remarks": "The condition of the item in a purchase order line being selected for receipt",
            "sameAsAttribute": "CONDITIONCODE",
            "sameAsObject": "ITEMCONDITION"
        },
        {
            "attributeName": "INSPECTIONREQUIRED",
            "required": true,
            "persistent": false,
            "title": "Inspection Required",
            "remarks": "Indicates whether inspection of item is required upon receipt.",
            "sameAsAttribute": "INSPECTIONREQUIRED",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "TOBIN",
            "required": false,
            "persistent": false,
            "title": "Bin",
            "remarks": "To Bin Number",
            "sameAsAttribute": "BINNUM",
            "sameAsObject": "INVENTORY"
        },
        {
            "attributeName": "TOLOT",
            "required": false,
            "persistent": false,
            "title": "Lot",
            "remarks": "To Lot Number",
            "sameAsAttribute": "LOTNUM",
            "sameAsObject": "INVLOT"
        },
        {
            "attributeName": "EXCHANGERATE",
            "required": false,
            "persistent": false,
            "title": "Exchange Rate",
            "remarks": "Exchange rate of the receipt.",
            "sameAsAttribute": "EXCHANGERATE",
            "sameAsObject": "EXCHANGE"
        },
        {
            "attributeName": "ENTERBY",
            "required": false,
            "persistent": false,
            "title": "Entered By",
            "remarks": "Entered By",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": false,
            "title": "Asset Number",
            "remarks": "Asset number for the rotating item.",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "COSTREQUESTED",
            "required": false,
            "persistent": false,
            "title": "Cost to Return",
            "remarks": "Remaining cost can be received",
            "sameAsAttribute": "CURRENCYLINECOST",
            "sameAsObject": "SERVRECTRANS"
        },
        {
            "attributeName": "ACTUALDATE",
            "required": false,
            "persistent": false,
            "title": "Actual Date",
            "remarks": "Date and time of the issue transaction, which may be different than the time the transaction is recorded in Maximo.",
            "sameAsAttribute": "ACTUALDATE",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "SHIPMENTLINEID",
            "required": false,
            "persistent": false,
            "title": "Shipment Line",
            "remarks": "Used to uniquely identify a shipment line",
            "sameAsAttribute": "SHIPMENTLINEID",
            "sameAsObject": "SHIPMENTLINE"
        },
        {
            "attributeName": "SHIPMENTLINENUM",
            "required": false,
            "persistent": false,
            "title": "Shipment Line",
            "remarks": "The shipment document reference line number provided by supplier",
            "sameAsAttribute": "SHIPMENTLINENUM",
            "sameAsObject": "SHIPMENTLINE"
        },
        {
            "attributeName": "SHIPMENTNUM",
            "required": false,
            "persistent": false,
            "title": "Shipment",
            "remarks": "The shipment document reference number provided by the supplier.",
            "sameAsAttribute": "SHIPMENTNUM",
            "sameAsObject": "SHIPMENT"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ITEMCONDITION",
            "target": "ITEMCONDITION",
            "remarks": "Relationship to the itemcondition table, used to find the itemcondition records for a given Receipt Input record. (itemcondition.itemnum = receiptinput.itemnum and itemcondition.itemsetid=receiptinput.itemsetid and itemcondition.conditioncode=receiptinput.conditioncode). The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid and conditioncode=:conditioncode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SERVRECTRANS",
            "target": "SERVRECTRANS",
            "remarks": "Relationship to get SERVRECTRANS records for the RECEIPTINPUT record.",
            "whereClause": "ponum = :ponum and polinenum = :polinenum and siteid = :siteid",
            "cardinality": null
        },
        {
            "name": "VIEWWOPMS",
            "target": "VIEWWOPMS",
            "remarks": "Relationship from the RECEIPTINPUT to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "RETURNRECEIPTINPUT",
            "source": "PO",
            "remarks": "Relationship to the non-persistent ReceiptInput table, used to create receipt return transactions for a given purchase order. (No where clause). The resulting set will contain zero objects.  Note: This relationship is used only for the Receiving application, Select Item for Return (button) page to display return receipt transactions for a given purchase order.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RETURNRECEIPTINPUTSRV",
            "source": "PO",
            "remarks": "Relationship to the non-persistent ReceiptInput table, used to create receipt return transactions for a given purchase order. (No where clause). The resulting set will contain zero objects.  Note: This relationship is used only for the Receiving application, Select Item for Return (button) page to display return receipt transactions for a given purchase order.",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "MATRECEIPTINPUT",
            "source": "PO",
            "remarks": "Relationship to the non-persistent ReceiptInput table, used to find all material receipt transactions for a given purchase order. (No where clause). The resulting set will contain zero objects. Note: This relationship is used only for the Receiving application, Select Ordered Items(button) page to display material receipt transactions for a given purchase order.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VOIDRECEIPTINPUT",
            "source": "PO",
            "remarks": "Relationship to the non-persistent ReceiptInput table, used to create receipt void transactions for a given purchase order. (No where clause). The resulting set will contain zero objects.  Note: This relationship is used only for the Receiving application, Select Receipts to Void (button) page to display receipt transactions for a given purchase order.",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "VOIDRECEIPTINPUTSRV",
            "source": "PO",
            "remarks": "Relationship to the non-persistent ReceiptInput table, used to create receipt void transactions for a given purchase order. (No where clause). The resulting set will contain zero objects.  Note: This relationship is used only for the Receiving application, Select Receipts to Void (button) page to display receipt transactions for a given purchase order.",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "SERVRECEIPTINPUT",
            "source": "PO",
            "remarks": "Relationship to the non-persistent ReceiptInput table, used to find all service receipt transactions for a given purchase order. (No where clause). The resulting set will contain zero objects. Note: This relationship is used only for the Receiving application, Select Ordered Services (button) page to display service receipt transactions for a given purchase order.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETSTORETURN",
            "source": "PO",
            "remarks": "Relationship to get all of the assets for this PO that are elegible for Returning to Vendor.",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "RETURNRECEIPTINPUT",
            "source": "SHIPMENT",
            "remarks": "Relationship to the non-persistent ReceiptInput table, used to create shipment receipt return transactions for a given shipment. (No where clause). The resulting set will contain zero objects.  Note: This relationship is used only for the Shipment Receiving application, Select Item for Return (button) page to display return shipment receipt transactions for a given shipment.",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "MATRECEIPTINPUT",
            "source": "SHIPMENT",
            "remarks": "Relationship to the non-persistent ReceiptInput table, used to find all material receipt transactions for a given shipment. (No where clause). The resulting set will contain zero objects. Note: This relationship is used only for the Receiving application, Select Ordered Items(button) page to display material receipt transactions for a given shipment",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "VOIDRECEIPTINPUT",
            "source": "SHIPMENT",
            "remarks": "Relationship to the non-persistent ReceiptInput table, used to create shipment receipt void transactions for a given shipment. (No where clause). The resulting set will contain zero objects.  Note: This relationship is used only for the Shipment Receiving application, Select Shipment Receipts to Void (button) page to display receipt transactions for a given shipment.",
            "whereClause": null,
            "cardinality": null
        }
    ]
}