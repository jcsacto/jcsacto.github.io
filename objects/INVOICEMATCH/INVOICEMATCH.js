mos = {
    "objectName": "INVOICEMATCH",
    "className": "psdi.app.invoice.InvoiceMatchSet",
    "description": "The Invoice Matching Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "INVOICEMATCHID",
    "primaryKeyColumns": [
        "INVOICEMATCHID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "COMPANIES",
            "targetObject": "INVOICEMATCH",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Company on Invoice Matching",
            "longDescription": null
        },
        {
            "objectName": "INVOICE",
            "targetObject": "INVOICEMATCH",
            "parentKeys": "SITEID, INVOICENUM",
            "targetKeys": "POSITEID, INVOICENUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 10",
            "longDescription": null
        },
        {
            "objectName": "INVOICE",
            "targetObject": "INVOICEMATCH",
            "parentKeys": "SITEID, INVOICENUM",
            "targetKeys": "SITEID, INVOICENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Invoice Match",
            "longDescription": null
        },
        {
            "objectName": "INVOICECOST",
            "targetObject": "INVOICEMATCH",
            "parentKeys": "SITEID, INVOICENUM, INVOICELINENUM, COSTLINENUM",
            "targetKeys": "POSITEID, INVOICENUM, INVOICELINENUM, COSTLINENUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 1",
            "longDescription": null
        },
        {
            "objectName": "INVOICECOST",
            "targetObject": "INVOICEMATCH",
            "parentKeys": "SITEID, INVOICENUM, INVOICELINENUM, COSTLINENUM",
            "targetKeys": "SITEID, INVOICENUM, INVOICELINENUM, COSTLINENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Invoice Cost",
            "longDescription": null
        },
        {
            "objectName": "INVOICELINE",
            "targetObject": "INVOICEMATCH",
            "parentKeys": "SITEID, INVOICENUM, INVOICELINENUM",
            "targetKeys": "POSITEID, INVOICENUM, INVOICELINENUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 4",
            "longDescription": null
        },
        {
            "objectName": "INVOICELINE",
            "targetObject": "INVOICEMATCH",
            "parentKeys": "SITEID, INVOICENUM, INVOICELINENUM",
            "targetKeys": "SITEID, INVOICENUM, INVOICELINENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Invoice Line",
            "longDescription": null
        },
        {
            "objectName": "MATRECTRANS",
            "targetObject": "INVOICEMATCH",
            "parentKeys": "MATRECTRANSID",
            "targetKeys": "MATRECTRANSID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Invoice Match",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "INVOICEMATCH",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "INVOICEMATCH",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "POSITEID, PONUM, POREVISIONNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 12",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "INVOICEMATCH",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "SITEID, PONUM, POREVISIONNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 13",
            "longDescription": null
        },
        {
            "objectName": "SERVRECTRANS",
            "targetObject": "INVOICEMATCH",
            "parentKeys": "SERVRECTRANSID",
            "targetKeys": "SERVRECTRANSID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Invoice Match Service Receipts",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "INVOICEMATCH",
            "parentKeys": "SITEID",
            "targetKeys": "POSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 72",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "INVOICEMATCH",
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
            "attributeName": "VENDOR",
            "required": true,
            "persistent": true,
            "title": "Vendor",
            "remarks": "Vendor who supplied the Invoice.",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "INVOICENUM",
            "required": true,
            "persistent": true,
            "title": "Invoice",
            "remarks": "Invoice number",
            "sameAsAttribute": "INVOICENUM",
            "sameAsObject": "INVOICE"
        },
        {
            "attributeName": "INVOICELINENUM",
            "required": true,
            "persistent": true,
            "title": "Invoice Line",
            "remarks": "Line Number of the Invoice.",
            "sameAsAttribute": "INVOICELINENUM",
            "sameAsObject": "INVOICELINE"
        },
        {
            "attributeName": "PONUM",
            "required": false,
            "persistent": true,
            "title": "PO",
            "remarks": "Purchase Order this invoice is matched to",
            "sameAsAttribute": "PONUM",
            "sameAsObject": "PO"
        },
        {
            "attributeName": "POLINENUM",
            "required": false,
            "persistent": true,
            "title": "PO Line",
            "remarks": "The line number on the PO that this invoice matches",
            "sameAsAttribute": "PRLINENUM",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "TRANSTYPE",
            "required": true,
            "persistent": true,
            "title": "Transaction Type",
            "remarks": "The type of transaction to which this matched.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TRANSDATE",
            "required": false,
            "persistent": true,
            "title": "Transaction Date",
            "remarks": "The date and time of the receipt transaction this invoice is matched to",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "QUANTITY",
            "required": false,
            "persistent": true,
            "title": "Quantity",
            "remarks": "Quantity of the matched item this invoice refers to.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LINECOST",
            "required": true,
            "persistent": true,
            "title": "Line Cost",
            "remarks": "For services, the amount of servicetrans covered by this invoice line.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COSTLINENUM",
            "required": true,
            "persistent": true,
            "title": "Cost Line",
            "remarks": "System generated line item",
            "sameAsAttribute": "COSTLINENUM",
            "sameAsObject": "INVOICECOST"
        },
        {
            "attributeName": "MATRECTRANSID",
            "required": false,
            "persistent": true,
            "title": "ID",
            "remarks": "Matches invoicelines to material receipts",
            "sameAsAttribute": "MATRECTRANSID",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "SERVRECTRANSID",
            "required": false,
            "persistent": true,
            "title": "ID",
            "remarks": "Matches invoicelines to service receipts",
            "sameAsAttribute": "SERVRECTRANSID",
            "sameAsObject": "SERVRECTRANS"
        },
        {
            "attributeName": "SITEID",
            "required": true,
            "persistent": true,
            "title": "Site",
            "remarks": "Site Identifier",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "USERMATCHED",
            "required": true,
            "persistent": true,
            "title": "Is User Matched",
            "remarks": "Indidates whether this invoice match is manually matched by the user.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INVOICEMATCHID",
            "required": true,
            "persistent": true,
            "title": "INVOICEMATCHID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONVERSION",
            "required": false,
            "persistent": true,
            "title": "Conversion Factor",
            "remarks": "Conversion factor between order units and issue units.",
            "sameAsAttribute": "CONVERSION",
            "sameAsObject": "CONVERSION"
        },
        {
            "attributeName": "POREVISIONNUM",
            "required": false,
            "persistent": true,
            "title": "PO Revision",
            "remarks": "Revision number of the purchase order. Indicates how many times a purchase order has been revised.",
            "sameAsAttribute": "REVISIONNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "POSITEID",
            "required": false,
            "persistent": true,
            "title": "PO Site",
            "remarks": "The site where the purchase order was created. To create an invoice, you must have security privileges to the same organization to which the purchase order site belongs.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "REVERSED",
            "required": true,
            "persistent": true,
            "title": "Reversed",
            "remarks": "Indicates if the invoice match belongs to a reversed or reversal type invoice.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "MATRECTRANS",
            "target": "MATRECTRANS",
            "remarks": "Relationship to the MatRecTrans table, used to find all material receipts for a given invoice match line. (invoicematch.matrectransid = matrectrans.matrectransid). The resulting set will contain zero or more objects.",
            "whereClause": "matrectransid = :matrectransid and positeid = :positeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SERVRECTRANS",
            "target": "SERVRECTRANS",
            "remarks": "Relationship to the ServRecTrans table, used to find all service receipts for a given invoice match line. (invoicematch.servrectransid = servrectrans.servrectransid). The resulting set will contain zero or more objects.",
            "whereClause": "servrectransid = :servrectransid and positeid = :positeid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "INVOICEMATCH",
            "source": "INVOICE",
            "remarks": "Relationship to the InvoiceMatch table, used to find all invoice match records written for a given invoice on its approval. (invoice.invoicenum = invoicematch.invoicenum). The resulting set will contain zero or more objects.",
            "whereClause": "invoicenum=:invoicenum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVOICEMATCH",
            "source": "INVOICELINE",
            "remarks": "Relationship to the InvoiceMatch table, used to find all invoice match lines created for a given invoice line on approval of the invoice. (invoiceline.ponum = invoicematch.ponum and invoiceline.polinenum = invoicematch.polinenum). The resulting set will contain zero or one object.",
            "whereClause": "invoicenum=:invoicenum and invoicelinenum=:invoicelinenum and siteid=:siteid and reversed=:no",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVOICEMATCH",
            "source": "MATRECTRANS",
            "remarks": "Relationship to the Invoicematch table, used to find all invoice matches for a given material receipts. (invoicematch.matrectransid = matrectrans.matrectransid). The resulting set will contain zero or more objects.",
            "whereClause": "matrectransid = :matrectransid and positeid = :positeid",
            "cardinality": null
        },
        {
            "name": "INVOICEMATCH",
            "source": "SERVRECTRANS",
            "remarks": "Relationship to the Invoicematch table, used to find all invoice matches for a given service receipts. (invoicematch.servrectransid = servrectrans.servrectransid). The resulting set will contain zero or more objects.",
            "whereClause": "servrectransid = :servrectransid and positeid = :positeid",
            "cardinality": null
        }
    ]
}