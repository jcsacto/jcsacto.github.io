mos = {
    "objectName": "INVOICETRANS",
    "className": "psdi.app.invoice.InvoiceTransSet",
    "description": "The Invoice Transaction Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "INVOICETRANSID",
    "primaryKeyColumns": [
        "INVOICETRANSID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "COMPANIES",
            "targetObject": "INVOICETRANS",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Company on Invoice Transaction",
            "longDescription": null
        },
        {
            "objectName": "CURRENCY",
            "targetObject": "INVOICETRANS",
            "parentKeys": "CURRENCYCODE",
            "targetKeys": "CURRENCYCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Record Currency",
            "longDescription": null
        },
        {
            "objectName": "FINANCIALPERIODS",
            "targetObject": "INVOICETRANS",
            "parentKeys": "ORGID, FINANCIALPERIOD",
            "targetKeys": "ORGID, FINANCIALPERIOD",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Financial Period",
            "longDescription": null
        },
        {
            "objectName": "INVOICE",
            "targetObject": "INVOICETRANS",
            "parentKeys": "SITEID, INVOICENUM",
            "targetKeys": "SITEID, INVOICENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Invoice Transactions",
            "longDescription": null
        },
        {
            "objectName": "INVOICECOST",
            "targetObject": "INVOICETRANS",
            "parentKeys": "SITEID, INVOICENUM, INVOICELINENUM, COSTLINENUM",
            "targetKeys": "SITEID, INVOICENUM, INVOICELINENUM, COSTLINENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Invoice Cost",
            "longDescription": null
        },
        {
            "objectName": "INVOICELINE",
            "targetObject": "INVOICETRANS",
            "parentKeys": "SITEID, INVOICENUM, INVOICELINENUM",
            "targetKeys": "SITEID, INVOICENUM, INVOICELINENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Invoice Line",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "INVOICETRANS",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "INVOICETRANS",
            "parentKeys": "PERSONID",
            "targetKeys": "ENTERBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who entered the record.",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "INVOICETRANS",
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
            "remarks": "Vendor of the invoice.",
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
            "required": false,
            "persistent": true,
            "title": "Invoice Line",
            "remarks": "Invoice line from which the transaction was created.",
            "sameAsAttribute": "INVOICELINENUM",
            "sameAsObject": "INVOICELINE"
        },
        {
            "attributeName": "COSTLINENUM",
            "required": false,
            "persistent": true,
            "title": "Cost Line",
            "remarks": "Cost Line from which it was created.",
            "sameAsAttribute": "COSTLINENUM",
            "sameAsObject": "INVOICECOST"
        },
        {
            "attributeName": "GLDEBITACCT",
            "required": false,
            "persistent": true,
            "title": "GL Debit Account",
            "remarks": "Debit GL Account.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLCREDITACCT",
            "required": false,
            "persistent": true,
            "title": "GL Credit Account",
            "remarks": "Credit GL Account.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CURRENCYCODE",
            "required": true,
            "persistent": true,
            "title": "Currency",
            "remarks": "Currency of the invoice.",
            "sameAsAttribute": "CURRENCYCODE",
            "sameAsObject": "CURRENCY"
        },
        {
            "attributeName": "LINECOST",
            "required": true,
            "persistent": true,
            "title": "Line Cost",
            "remarks": "The cost in base currency.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TRANSDATE",
            "required": true,
            "persistent": true,
            "title": "Transaction Date",
            "remarks": "The date/time of the transaction.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENTERBY",
            "required": true,
            "persistent": true,
            "title": "Entered By",
            "remarks": "Who entered the invoice line.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "TRANSTYPE",
            "required": true,
            "persistent": true,
            "title": "Transaction Type",
            "remarks": "What type of transaction is it (PPV etc).",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CURRENCYLINECOST",
            "required": true,
            "persistent": true,
            "title": "Currency Line Cost",
            "remarks": "The cost of the line in the currency of the invoice.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EXCHANGERATE",
            "required": true,
            "persistent": true,
            "title": "Exchange Rate",
            "remarks": "Exchange rate of transaction",
            "sameAsAttribute": "EXCHANGERATE",
            "sameAsObject": "EXCHANGE"
        },
        {
            "attributeName": "FINANCIALPERIOD",
            "required": false,
            "persistent": true,
            "title": "Financial Period",
            "remarks": "Financial period of transaction",
            "sameAsAttribute": "FINANCIALPERIOD",
            "sameAsObject": "FINANCIALPERIODS"
        },
        {
            "attributeName": "EXCHANGERATE2",
            "required": false,
            "persistent": true,
            "title": "Secondary Exchange Rate",
            "remarks": "Base Exchange Rate 2",
            "sameAsAttribute": "EXCHANGERATE",
            "sameAsObject": "EXCHANGE"
        },
        {
            "attributeName": "LINECOST2",
            "required": false,
            "persistent": true,
            "title": "Secondary Line Cost",
            "remarks": "Base Currency Line Cost 2.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SENDERSYSID",
            "required": false,
            "persistent": true,
            "title": "Sender System ID",
            "remarks": "Column used by ERP-Integration (APIs)",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SOURCESYSID",
            "required": false,
            "persistent": true,
            "title": "Source System ID",
            "remarks": "Source System ID",
            "sameAsAttribute": "OWNER1SYSID",
            "sameAsObject": "MXCOLLAB"
        },
        {
            "attributeName": "OWNERSYSID",
            "required": false,
            "persistent": true,
            "title": "Owner System ID",
            "remarks": "Owner System ID",
            "sameAsAttribute": "OWNER1SYSID",
            "sameAsObject": "MXCOLLAB"
        },
        {
            "attributeName": "EXTERNALREFID",
            "required": false,
            "persistent": true,
            "title": "External Reference ID",
            "remarks": "External Reference ID",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "INVOICETRANSID",
            "required": true,
            "persistent": true,
            "title": "INVOICETRANSID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SOURCEMBO",
            "required": false,
            "persistent": false,
            "title": "Source MBO",
            "remarks": "Source MBO",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "ACTUALDATE",
            "required": true,
            "persistent": true,
            "title": "Actual Date",
            "remarks": "Date used by the integration to map to the GL transaction posting date",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "INVOICE",
            "target": "INVOICE",
            "remarks": "Relationship to the Invoice table, used to find the owner invoice for a given invoice transaction created on the approval of the invoice. (invoicetrans.invoicenum = invoice.invoicenum). The resulting set will contain one object.",
            "whereClause": "invoicenum=:invoicenum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVOICECOST",
            "target": "INVOICECOST",
            "remarks": "Relationship to the InvoiceLine table, used to find the invoice line for which this invoice transaction was created. (invoicetrans.invoicenum = invoiceline.invoicenum and invoicetrans.invoicelinenum = invoiceline.invoicelinenum and invoiceline.invoicelinenum is not null). The resulting set will contain one object.",
            "whereClause": "invoicenum=:invoicenum and invoicelinenum=:invoicelinenum and costlinenum=:costlinenum and invoicelinenum is not null and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVOICELINE",
            "target": "INVOICELINE",
            "remarks": "Relationship to the InvoiceLine table, used to find the invoice line for which this invoice transaction was created. (invoicetrans.invoicenum = invoiceline.invoicenum and invoicetrans.invoicelinenum = invoiceline.invoicelinenum and invoiceline.invoicelinenum is not null). The resulting set will contain one object.",
            "whereClause": "invoicenum=:invoicenum and invoicelinenum=:invoicelinenum and invoicelinenum is not null and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "INVOICETRANS",
            "source": "INVOICE",
            "remarks": "Relationship to the InvoiceTrans table for a given invoice",
            "whereClause": "invoicenum = :invoicenum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "INVOICETRANS",
            "source": "INVOICELINE",
            "remarks": "Relationship to the InvoiceTrans table, used to find the invoice transactions written for a given invoice line on the approval of the invoice. (invoiceline.invoicenum = invoicetrans.invoicenum and invoiceline.invoicelinenum = invoiceline.invoicelinenum). The resulting set will contain zero or more objects.",
            "whereClause": "invoicenum=:invoicenum and invoicelinenum=:invoicelinenum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVOICETRANS",
            "source": "MATRECTRANS",
            "remarks": "Relationship to the INVOICETRANS line table, used to find all INVOICETRANS line records for a given purchase order line. (polinenum in (select polinenum from prline where ponum=prline.ponum and siteid=prline.siteid and polinenum=prline.polinenum) and positeid=prline.siteid). The resulting set will contain zero or more objects.",
            "whereClause": "siteid in (select siteid from invoiceline where ponum=:ponum and polinenum=:polinenum) and invoicelinenum in (select invoicelinenum from invoiceline where ponum=:ponum and polinenum=:polinenum) and invoicenum in (select invoicenum from invoiceline where ponum=:ponum)",
            "cardinality": null
        },
        {
            "name": "INVOICETRANS",
            "source": "PO",
            "remarks": "Relationship to the INVOICETRANS line table, used to find all INVOICETRANS line records for a given purchase order. (polinenum in (select polinenum from prline where prnum=prline.prnum and siteid=prline.siteid) and positeid = pr.siteid). The resulting set will contain zero or more objects.",
            "whereClause": "invoicenum in (select invoicenum from invoiceline where ponum=:ponum and positeid=:siteid) and siteid in (select siteid from invoiceline where ponum=:ponum and positeid=:siteid)",
            "cardinality": null
        },
        {
            "name": "INVOICETRANS",
            "source": "POLINE",
            "remarks": "Relationship to the INVOICETRANS line table, used to find all INVOICETRANS line records for a given purchase order line. (polinenum in (select polinenum from prline where ponum=prline.ponum and siteid=prline.siteid and polinenum=prline.polinenum) and positeid=prline.siteid). The resulting set will contain zero or more objects.",
            "whereClause": "invoicelinenum in (select invoicelinenum from invoiceline where ponum=:ponum and polinenum=:polinenum) and invoicenum in (select invoicenum from invoiceline where ponum=:ponum and polinenum=:polinenum) and siteid in (select siteid from invoiceline where ponum=:ponum and polinenum=:polinenum)",
            "cardinality": null
        },
        {
            "name": "INVOICETRANS",
            "source": "PR",
            "remarks": "Relationship to the INVOICETRANS line table, used to find all INVOICETRANS line records for a given purchase order. (polinenum in (select polinenum from prline where prnum=prline.prnum and siteid=prline.siteid) and positeid = pr.siteid). The resulting set will contain zero or more objects.",
            "whereClause": "invoicenum in (select invoicenum from invoiceline where ponum in (select ponum from prline where prnum=:prnum and siteid=:siteid) and siteid=:siteid) and siteid = :siteid",
            "cardinality": null
        },
        {
            "name": "INVOICETRANS",
            "source": "PRLINE",
            "remarks": "Relationship to the INVOICETRANS line table, used to find all INVOICETRANS line records for a given purchase order line. (polinenum in (select polinenum from prline where ponum=prline.ponum and siteid=prline.siteid and polinenum=prline.polinenum) and positeid=prline.siteid). The resulting set will contain zero or more objects.",
            "whereClause": "invoicelinenum in (select invoicelinenum from invoiceline where ponum in (select ponum from prline where prnum=:prnum and siteid=:siteid) and siteid=:siteid and polinenum in (select polinenum from prline where ponum=:ponum and siteid=:siteid and polinenum=:polinenum)) and invoicenum in (select invoicenum from invoiceline where ponum in (select ponum from prline where prnum=:prnum and siteid=:siteid) and polinenum=:polinenum and siteid=:siteid) and siteid = :siteid",
            "cardinality": null
        },
        {
            "name": "INVOICETRANS",
            "source": "SERVRECTRANS",
            "remarks": "Relationship to the INVOICETRANS line table, used to find all INVOICETRANS line records for a given purchase order line. (polinenum in (select polinenum from prline where ponum=prline.ponum and siteid=prline.siteid and polinenum=prline.polinenum) and positeid=prline.siteid). The resulting set will contain zero or more objects.",
            "whereClause": "siteid in (select siteid from invoiceline where ponum=:ponum and polinenum=:polinenum) and invoicelinenum in (select invoicelinenum from invoiceline where ponum=:ponum and polinenum=:polinenum) and invoicenum in (select invoicenum from invoiceline where ponum=:ponum)",
            "cardinality": null
        },
        {
            "name": "INVOICETRANS1",
            "source": "SERVRECTRANS",
            "remarks": "Relationship to the INVOICETRANS line table, used to find all INVOICETRANS line records for a given purchase order line. (polinenum in (select polinenum from prline where ponum=prline.ponum and siteid=prline.siteid and polinenum=prline.polinenum) and positeid=prline.siteid). The resulting set will contain zero or more objects.",
            "whereClause": "siteid in (select siteid from invoiceline where ponum=:ponum and polinenum=:polinenum) and invoicelinenum in (select invoicelinenum from invoiceline where ponum=:ponum and polinenum=:polinenum) and invoicenum in (select invoicenum from invoiceline where ponum=:ponum) and (invoicenum=:invoicenum or invoicenum is null)",
            "cardinality": null
        }
    ]
}