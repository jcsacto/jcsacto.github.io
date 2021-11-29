mos = {
    "objectName": "INVOICE",
    "className": "psdi.app.invoice.InvoiceSet",
    "description": "The Invoice Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "INVOICEID",
    "primaryKeyColumns": [
        "SITEID",
        "INVOICENUM"
    ],
    "logicalRelationships": [
        {
            "objectName": "INVOICE",
            "targetObject": "INVOICE",
            "parentKeys": "SITEID, INVOICENUM",
            "targetKeys": "POSITEID, ORIGINVOICENUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 1",
            "longDescription": null
        },
        {
            "objectName": "INVOICE",
            "targetObject": "INVOICE",
            "parentKeys": "SITEID, INVOICENUM",
            "targetKeys": "POSITEID, REVINVOICENUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 2",
            "longDescription": null
        },
        {
            "objectName": "INVOICE",
            "targetObject": "INVOICE",
            "parentKeys": "SITEID, INVOICENUM",
            "targetKeys": "SITEID, ORIGINVOICENUM",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Original Invoice",
            "longDescription": null
        },
        {
            "objectName": "INVOICE",
            "targetObject": "INVOICE",
            "parentKeys": "SITEID, INVOICENUM",
            "targetKeys": "SITEID, REVINVOICENUM",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Reversal",
            "longDescription": null
        },
        {
            "objectName": "INVOICE",
            "targetObject": "INVOICECOST",
            "parentKeys": "SITEID, INVOICENUM",
            "targetKeys": "POSITEID, INVOICENUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 5",
            "longDescription": null
        },
        {
            "objectName": "INVOICE",
            "targetObject": "INVOICECOST",
            "parentKeys": "SITEID, INVOICENUM",
            "targetKeys": "SITEID, INVOICENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Invoice Cost",
            "longDescription": null
        },
        {
            "objectName": "INVOICE",
            "targetObject": "INVOICECOST",
            "parentKeys": "SITEID, INVOICENUM",
            "targetKeys": "TOSITEID, INVOICENUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 7",
            "longDescription": null
        },
        {
            "objectName": "INVOICE",
            "targetObject": "INVOICELINE",
            "parentKeys": "SITEID, INVOICENUM",
            "targetKeys": "POSITEID, INVOICENUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 8",
            "longDescription": null
        },
        {
            "objectName": "INVOICE",
            "targetObject": "INVOICELINE",
            "parentKeys": "SITEID, INVOICENUM",
            "targetKeys": "SITEID, INVOICENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Invoice Line",
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
            "objectName": "INVOICE",
            "targetObject": "INVOICESTATUS",
            "parentKeys": "SITEID, INVOICENUM",
            "targetKeys": "SITEID, INVOICENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Status History",
            "longDescription": null
        },
        {
            "objectName": "INVOICE",
            "targetObject": "INVOICETERM",
            "parentKeys": "SITEID, INVOICENUM",
            "targetKeys": "SITEID, INVOICENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Invoice Term",
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
            "objectName": "INVOICE",
            "targetObject": "INVTRANS",
            "parentKeys": "SITEID, INVOICENUM",
            "targetKeys": "SITEID, CONSINVOICENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Invoice",
            "longDescription": null
        },
        {
            "objectName": "INVOICE",
            "targetObject": "LABTRANS",
            "parentKeys": "SITEID, INVOICENUM",
            "targetKeys": "SITEID, INVOICENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Invoice",
            "longDescription": null
        },
        {
            "objectName": "INVOICE",
            "targetObject": "MATRECTRANS",
            "parentKeys": "SITEID, INVOICENUM",
            "targetKeys": "FROMSITEID, CONSINVOICENUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 17",
            "longDescription": null
        },
        {
            "objectName": "INVOICE",
            "targetObject": "MATRECTRANS",
            "parentKeys": "SITEID, INVOICENUM",
            "targetKeys": "FROMSITEID, INVOICENUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 18",
            "longDescription": null
        },
        {
            "objectName": "INVOICE",
            "targetObject": "MATRECTRANS",
            "parentKeys": "SITEID, INVOICENUM",
            "targetKeys": "POSITEID, CONSINVOICENUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 19",
            "longDescription": null
        },
        {
            "objectName": "INVOICE",
            "targetObject": "MATRECTRANS",
            "parentKeys": "SITEID, INVOICENUM",
            "targetKeys": "POSITEID, INVOICENUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 20",
            "longDescription": null
        },
        {
            "objectName": "INVOICE",
            "targetObject": "MATRECTRANS",
            "parentKeys": "SITEID, INVOICENUM",
            "targetKeys": "SITEID, CONSINVOICENUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 21",
            "longDescription": null
        },
        {
            "objectName": "INVOICE",
            "targetObject": "MATRECTRANS",
            "parentKeys": "SITEID, INVOICENUM",
            "targetKeys": "SITEID, INVOICENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Recieved for Invoice",
            "longDescription": null
        },
        {
            "objectName": "INVOICE",
            "targetObject": "MATUSETRANS",
            "parentKeys": "SITEID, INVOICENUM",
            "targetKeys": "SITEID, CONSINVOICENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Consignment Invoice",
            "longDescription": null
        },
        {
            "objectName": "INVOICE",
            "targetObject": "MATUSETRANS",
            "parentKeys": "SITEID, INVOICENUM",
            "targetKeys": "TOSITEID, CONSINVOICENUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 24",
            "longDescription": null
        },
        {
            "objectName": "INVOICE",
            "targetObject": "SERVRECTRANS",
            "parentKeys": "SITEID, INVOICENUM",
            "targetKeys": "FROMSITEID, INVOICENUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 25",
            "longDescription": null
        },
        {
            "objectName": "INVOICE",
            "targetObject": "SERVRECTRANS",
            "parentKeys": "SITEID, INVOICENUM",
            "targetKeys": "POSITEID, INVOICENUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 26",
            "longDescription": null
        },
        {
            "objectName": "INVOICE",
            "targetObject": "SERVRECTRANS",
            "parentKeys": "SITEID, INVOICENUM",
            "targetKeys": "SITEID, INVOICENUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 27",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "COMPANIES",
            "targetObject": "INVOICE",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Company on Invoice",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "INVOICE",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTREFNUM, CONTRACTREFREV, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "INVOICE",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTREFNUM, SCHEDULEREV, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 17",
            "longDescription": null
        },
        {
            "objectName": "CURRENCY",
            "targetObject": "INVOICE",
            "parentKeys": "CURRENCYCODE",
            "targetKeys": "CURRENCYCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Record Currency",
            "longDescription": null
        },
        {
            "objectName": "FINANCIALPERIODS",
            "targetObject": "INVOICE",
            "parentKeys": "ORGID, FINANCIALPERIOD",
            "targetKeys": "ORGID, FINANCIALPERIOD",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Financial Period",
            "longDescription": null
        },
        {
            "objectName": "INVOICE",
            "targetObject": "INVOICE",
            "parentKeys": "SITEID, INVOICENUM",
            "targetKeys": "POSITEID, ORIGINVOICENUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 1",
            "longDescription": null
        },
        {
            "objectName": "INVOICE",
            "targetObject": "INVOICE",
            "parentKeys": "SITEID, INVOICENUM",
            "targetKeys": "POSITEID, REVINVOICENUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 2",
            "longDescription": null
        },
        {
            "objectName": "INVOICE",
            "targetObject": "INVOICE",
            "parentKeys": "SITEID, INVOICENUM",
            "targetKeys": "SITEID, ORIGINVOICENUM",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Original Invoice",
            "longDescription": null
        },
        {
            "objectName": "INVOICE",
            "targetObject": "INVOICE",
            "parentKeys": "SITEID, INVOICENUM",
            "targetKeys": "SITEID, REVINVOICENUM",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Reversal",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "INVOICE",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "INVOICE",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "INVOICE",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "INVOICE",
            "parentKeys": "PERSONID",
            "targetKeys": "ENTERBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who entered the record.",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "INVOICE",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "POSITEID, PONUM, CONTRACTREFREV",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 4",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "INVOICE",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "POSITEID, PONUM, SCHEDULEREV",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 5",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "INVOICE",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "SITEID, PONUM, CONTRACTREFREV",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 6",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "INVOICE",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "SITEID, PONUM, SCHEDULEREV",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 7",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "INVOICE",
            "parentKeys": "SITEID, PONUM",
            "targetKeys": "POSITEID, PONUM",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "PO on an Invoice",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "INVOICE",
            "parentKeys": "SITEID",
            "targetKeys": "POSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 65",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "INVOICE",
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
            "attributeName": "INVOICENUM",
            "required": true,
            "persistent": true,
            "title": "Invoice",
            "remarks": "Invoice number",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Short Description about the invoice.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "PR"
        },
        {
            "attributeName": "PONUM",
            "required": false,
            "persistent": true,
            "title": "PO",
            "remarks": "The PO number associated with the invoice",
            "sameAsAttribute": "PONUM",
            "sameAsObject": "PO"
        },
        {
            "attributeName": "VENDOR",
            "required": true,
            "persistent": true,
            "title": "Company",
            "remarks": "The supplier who issued the invoice.",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "CONTACT",
            "required": false,
            "persistent": true,
            "title": "Contact",
            "remarks": "Contact name used when paying invoice.",
            "sameAsAttribute": "CONTACT",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "PAYMENTTERMS",
            "required": false,
            "persistent": true,
            "title": "Payment Terms",
            "remarks": "Terms of Payment. Can be used to determine a discount date.",
            "sameAsAttribute": "PAYMENTTERMS",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "CHECKCODE",
            "required": false,
            "persistent": true,
            "title": "Check Code",
            "remarks": "Flag to indicate how check should be printed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHECKNUM",
            "required": false,
            "persistent": true,
            "title": "Check #",
            "remarks": "Check number used to pay vendor.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CURRENCYCODE",
            "required": true,
            "persistent": true,
            "title": "Currency",
            "remarks": "Currency used to pay invoice.",
            "sameAsAttribute": "CURRENCYCODE",
            "sameAsObject": "CURRENCY"
        },
        {
            "attributeName": "EXCHANGERATE",
            "required": false,
            "persistent": true,
            "title": "Exchange Rate",
            "remarks": "Exchange Rate at time of invoice approval.",
            "sameAsAttribute": "EXCHANGERATE",
            "sameAsObject": "EXCHANGE"
        },
        {
            "attributeName": "EXCHANGEDATE",
            "required": false,
            "persistent": true,
            "title": "Exchange Date",
            "remarks": "Date of the exchange rate.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DOCUMENTTYPE",
            "required": true,
            "persistent": true,
            "title": "Type",
            "remarks": "The type of document, such as invoice, credit, debit, or consignment payment.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORIGINVOICENUM",
            "required": false,
            "persistent": true,
            "title": "Original Invoice",
            "remarks": "Reference to invoice if it is a credit or debit note.",
            "sameAsAttribute": "INVOICENUM",
            "sameAsObject": "INVOICE"
        },
        {
            "attributeName": "STATUS",
            "required": true,
            "persistent": true,
            "title": "Status",
            "remarks": "The current status of this invoice.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUSDATE",
            "required": true,
            "persistent": true,
            "title": "Status Date",
            "remarks": "DateTime of current status.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "APPROVALNUM",
            "required": false,
            "persistent": true,
            "title": "Approval #",
            "remarks": "Auto generated number on approval of Invoice.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INVOICEDATE",
            "required": false,
            "persistent": true,
            "title": "Invoice Date",
            "remarks": "The date the invoice was created.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DISCOUNTDATE",
            "required": false,
            "persistent": true,
            "title": "Discount Date",
            "remarks": "Date by which payment must be made to utilize discount.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DUEDATE",
            "required": false,
            "persistent": true,
            "title": "Due Date",
            "remarks": "When payment is due.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PAIDDATE",
            "required": false,
            "persistent": true,
            "title": "Paid Date",
            "remarks": "Date when payment made.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PAID",
            "required": false,
            "persistent": true,
            "title": "Paid",
            "remarks": "This is the amount that was actually paid.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENTERDATE",
            "required": true,
            "persistent": true,
            "title": "Entered Date",
            "remarks": "Date when invoice entered into the system.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENTERBY",
            "required": true,
            "persistent": true,
            "title": "Entered By",
            "remarks": "Name of person who entered the invoice.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "Datetime invoice last modified.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEBY",
            "required": true,
            "persistent": true,
            "title": "Changed By",
            "remarks": "Name of person who changed invoice.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "HISTORYFLAG",
            "required": true,
            "persistent": true,
            "title": "History",
            "remarks": "Has this invoice been closed or cancelled.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOTALTAX1",
            "required": true,
            "persistent": true,
            "title": "Total Tax",
            "remarks": "Tax amount.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TAX1GL",
            "required": false,
            "persistent": true,
            "title": "GL Tax 1",
            "remarks": "General Ledger Account for Federal Tax.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOTALTAX2",
            "required": true,
            "persistent": true,
            "title": "Total Tax 2",
            "remarks": "Tax Amount",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TAX2GL",
            "required": false,
            "persistent": true,
            "title": "GL Tax 2",
            "remarks": "General Ledger Account for State Tax.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOTALTAX3",
            "required": true,
            "persistent": true,
            "title": "Total Tax 3",
            "remarks": "Tax Amount",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TAX3GL",
            "required": false,
            "persistent": true,
            "title": "GL Tax 3",
            "remarks": "General Ledger Account for Local Tax.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOTALTAX4",
            "required": true,
            "persistent": true,
            "title": "Total Tax 4",
            "remarks": "Tax Amount",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TAX4GL",
            "required": false,
            "persistent": true,
            "title": "GL Tax 4",
            "remarks": "General Ledger Account for Local Tax.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INCLUSIVE1",
            "required": true,
            "persistent": true,
            "title": "Pay Tax to Vendor",
            "remarks": "Is Invoice inclusive of TAX1",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INCLUSIVE2",
            "required": true,
            "persistent": true,
            "title": "Include Tax 2",
            "remarks": "Is Invoice inclusive of TAX2",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INCLUSIVE3",
            "required": true,
            "persistent": true,
            "title": "Include Tax 3",
            "remarks": "Is Invoice inclusive of tax ?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DISCOUNT",
            "required": false,
            "persistent": true,
            "title": "Discount",
            "remarks": "Savings, if invoice paid by discount date.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOTALCOST",
            "required": true,
            "persistent": true,
            "title": "Invoice Total",
            "remarks": "Total that is payable to vendor.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SYSCODE",
            "required": false,
            "persistent": true,
            "title": "System Flag",
            "remarks": "System flag required for user data entry.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOTALTAX5",
            "required": true,
            "persistent": true,
            "title": "Total Tax 5",
            "remarks": "Tax Amount",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TAX5GL",
            "required": false,
            "persistent": true,
            "title": "GL Tax 5",
            "remarks": "General Ledger Account for Local Tax.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INCLUSIVE4",
            "required": true,
            "persistent": true,
            "title": "Include Tax 4",
            "remarks": "Is Invoice inclusive of tax ?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INCLUSIVE5",
            "required": true,
            "persistent": true,
            "title": "Include Tax 5",
            "remarks": "Is Invoice inclusive of tax ?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VENDORINVOICENUM",
            "required": false,
            "persistent": true,
            "title": "Vendor Invoice",
            "remarks": "Vendor's Invoice number",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BASETOTALCOST",
            "required": false,
            "persistent": true,
            "title": "Total Base Cost",
            "remarks": "Total cost of the invoice in base currency",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "APSUSPENSEACCT",
            "required": false,
            "persistent": true,
            "title": "AP Suspense Account",
            "remarks": "The suspense account of the vendor on the invoice",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "APCONTROLACCT",
            "required": false,
            "persistent": true,
            "title": "AP Control Account",
            "remarks": "The control account of the vendor on the invoice",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FINANCIALPERIOD",
            "required": false,
            "persistent": true,
            "title": "Financial Period",
            "remarks": "Financial Period on Invoice Approval",
            "sameAsAttribute": "FINANCIALPERIOD",
            "sameAsObject": "FINANCIALPERIODS"
        },
        {
            "attributeName": "EXCHANGERATE2",
            "required": false,
            "persistent": true,
            "title": "EXCHANGERATE",
            "remarks": "Exchange Rate 2",
            "sameAsAttribute": "EXCHANGERATE",
            "sameAsObject": "EXCHANGE"
        },
        {
            "attributeName": "BANKACCOUNT",
            "required": false,
            "persistent": true,
            "title": "Bank",
            "remarks": "Vendor bank account for direct credits.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BANKNUM",
            "required": false,
            "persistent": true,
            "title": "Bank Reference #",
            "remarks": "Bank and branch identification reference number. Used to transfer funds electronically and allow transfer of dollars between buyer and seller.",
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
            "attributeName": "SENDERSYSID",
            "required": false,
            "persistent": true,
            "title": "Sender System ID",
            "remarks": "Column used by ERP-Integration (APIs)",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EINVOICE",
            "required": true,
            "persistent": true,
            "title": "E-invoice",
            "remarks": "Electronic Invoice Received?",
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
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Long Description for Short Description about the invoice.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VARIANCE",
            "required": false,
            "persistent": false,
            "title": "Variance",
            "remarks": "VARIANCE",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LINETOTAL",
            "required": false,
            "persistent": false,
            "title": "Line Total",
            "remarks": "LINETOTAL",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOTALTAX5FORUI",
            "required": false,
            "persistent": false,
            "title": "Total Tax 5",
            "remarks": "TOTALTAX5FORUI",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOTALTAX4FORUI",
            "required": false,
            "persistent": false,
            "title": "Total Tax 4",
            "remarks": "TOTALTAX4FORUI",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOTALTAX3FORUI",
            "required": false,
            "persistent": false,
            "title": "Total Tax 3",
            "remarks": "TOTALTAX3FORUI",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOTALTAX2FORUI",
            "required": false,
            "persistent": false,
            "title": "Total Tax 2",
            "remarks": "TOTALTAX2FORUI",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOTALTAX1FORUI",
            "required": false,
            "persistent": false,
            "title": "Total Tax",
            "remarks": "TOTALTAX1FORUI",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOTALCOSTFORUI",
            "required": false,
            "persistent": false,
            "title": "Invoice Total",
            "remarks": "TOTALCOSTFORUI",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BASETOTALCOSTFORUI",
            "required": false,
            "persistent": false,
            "title": "Total Base Cost",
            "remarks": "BASETOTALCOSTFORUI",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOTALTOALLOCATE",
            "required": false,
            "persistent": false,
            "title": "Total Cost",
            "remarks": "TOTALTOALLOCATE",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOTALALLOCATED",
            "required": false,
            "persistent": false,
            "title": "Total Cost",
            "remarks": "TOTALALLOCATED",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "UNINVOICEDTOTAL",
            "required": false,
            "persistent": false,
            "title": "Uninvoiced Total",
            "remarks": "UNINVOICEDTOTAL",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PRETAXTOTAL",
            "required": false,
            "persistent": false,
            "title": "Pretax Total",
            "remarks": "PRETAXTOTAL",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PHONE",
            "required": false,
            "persistent": false,
            "title": "Phone",
            "remarks": "PHONE",
            "sameAsAttribute": "PHONENUM",
            "sameAsObject": "PHONE"
        },
        {
            "attributeName": "REMITADDRESS5",
            "required": false,
            "persistent": false,
            "title": "Country",
            "remarks": "REMITADDRESS5",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REMITADDRESS4",
            "required": false,
            "persistent": false,
            "title": "ZIP/Postal Code",
            "remarks": "REMITADDRESS4",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REMITADDRESS3",
            "required": false,
            "persistent": false,
            "title": "State/Province",
            "remarks": "REMITADDRESS3",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REMITADDRESS2",
            "required": false,
            "persistent": false,
            "title": "City",
            "remarks": "REMITADDRESS2",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REMITADDRESS1",
            "required": false,
            "persistent": false,
            "title": "Address",
            "remarks": "REMITADDRESS1",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COMPANYNAME",
            "required": false,
            "persistent": false,
            "title": "Name",
            "remarks": "COMPANYNAME",
            "sameAsAttribute": "NAME",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "PRETAXTOTALFORUI",
            "required": false,
            "persistent": false,
            "title": "Pretax Total",
            "remarks": "Invoice total cost before the taxes are added.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INVOICEID",
            "required": true,
            "persistent": true,
            "title": "INVOICEID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SCHEDULEID",
            "required": false,
            "persistent": true,
            "title": "Payment Schedule",
            "remarks": "Payment schedule unique identifier.",
            "sameAsAttribute": "SCHEDULEID",
            "sameAsObject": "SCHEDULE"
        },
        {
            "attributeName": "CONTRACTREFNUM",
            "required": false,
            "persistent": true,
            "title": "Contract Reference",
            "remarks": "Contract Reference Number.",
            "sameAsAttribute": "CONTRACTNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "CONTRACTREFREV",
            "required": false,
            "persistent": true,
            "title": "Contract Reference Revision",
            "remarks": "Contract Reference Revision Number",
            "sameAsAttribute": "REVISIONNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "CONTRACTREFID",
            "required": false,
            "persistent": true,
            "title": "CONTRACTREFID.",
            "remarks": "Contract reference identifier.",
            "sameAsAttribute": "CONTRACTID",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "TARGINVSTATUS",
            "required": false,
            "persistent": true,
            "title": "Target Invoice Status",
            "remarks": "Stores target invoice status for invoice generated from schedule.",
            "sameAsAttribute": "TARGINVSTATUS",
            "sameAsObject": "SCHEDULE"
        },
        {
            "attributeName": "SCHEDULENUM",
            "required": false,
            "persistent": true,
            "title": "Payment Schedule",
            "remarks": "Payment Schedule",
            "sameAsAttribute": "SCHEDULENUM",
            "sameAsObject": "SCHEDULE"
        },
        {
            "attributeName": "NP_STATUSMEMO",
            "required": false,
            "persistent": false,
            "title": "Change Status Memo",
            "remarks": "Status change memo, temporary non-persistent field used by MEA",
            "sameAsAttribute": "MEMO",
            "sameAsObject": "WFTRANSACTION"
        },
        {
            "attributeName": "LANGCODE",
            "required": true,
            "persistent": true,
            "title": "Language Code",
            "remarks": "Language Column",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        },
        {
            "attributeName": "HASLD",
            "required": true,
            "persistent": true,
            "title": "Has Long Description",
            "remarks": "Boolean flag to indicate if there is any long description for this record",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SCHEDULEREV",
            "required": false,
            "persistent": true,
            "title": "Schedule Revision",
            "remarks": "Revision number of the referenced schedule.",
            "sameAsAttribute": "REVISIONNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "STATUSIFACE",
            "required": true,
            "persistent": false,
            "title": "Has Status Changed",
            "remarks": "Non persistent boolean field to indicate whether the status has been changed after the stateful object is fetched from the database.",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "GLPOSTDATE",
            "required": true,
            "persistent": true,
            "title": "G/L Posting Date",
            "remarks": "G/L Posting Date used to determine Financial Period",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REVINVOICENUM",
            "required": false,
            "persistent": true,
            "title": "Reverse Invoice",
            "remarks": "The identifier that associates the invoice with a reversal.",
            "sameAsAttribute": "INVOICENUM",
            "sameAsObject": "INVOICE"
        },
        {
            "attributeName": "REVREASON",
            "required": false,
            "persistent": true,
            "title": "Reversal Reason",
            "remarks": "Reason to create reverse invoice",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NP_INVOICENUM",
            "required": false,
            "persistent": false,
            "title": "Invoice",
            "remarks": "Reverse Invoice Number",
            "sameAsAttribute": "INVOICENUM",
            "sameAsObject": "INVOICE"
        },
        {
            "attributeName": "NP_REVREASON",
            "required": false,
            "persistent": false,
            "title": "Reversal Reason",
            "remarks": "Reason to create reverse invoice.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NP_GLPOSTDATE",
            "required": false,
            "persistent": false,
            "title": "G/L Posting Date",
            "remarks": "G/L Posting Date used to determine Financial Period",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NP_STATUS",
            "required": false,
            "persistent": false,
            "title": "Status",
            "remarks": "The status of the reverse invoice.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NP_DESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "Short Description about the invoice.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NP_ISREVERSE",
            "required": false,
            "persistent": false,
            "title": "Is Reverse",
            "remarks": "Indicating this is a reverse invoice.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "COMPANIES",
            "target": "COMPANIES",
            "remarks": "Relationship to the Companies table, used to find the company(vendor) used for a given invoice. (invoice.vendor = companies.company). The resulting set will contain zero or one object.",
            "whereClause": "company=:vendor and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMPANIESORG",
            "target": "COMPANIES",
            "remarks": "Relationship to the Companies table, used to find the company(vendor) used for a given invoice. (invoice.orgid = companies.orgid). The resulting set will contain zero or one object.",
            "whereClause": "orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "INVC_VENDOR",
            "target": "COMPANIES",
            "remarks": null,
            "whereClause": "company=:vendor and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONSTRANSACTION",
            "target": "CONSTRANSACTION",
            "remarks": "Realtionship from Invoice to nonpersistent CONSTRANSACTION.",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "CONTRACTREF",
            "target": "CONTRACT",
            "remarks": "Relationship to the Contract table, used to find a contract record for a given invoice (contract.contractid = invoice.contractrefid and contract.orgid = invoice.orgid). The resulting set will contain zero or one object.",
            "whereClause": "contractid = :contractrefid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTREFLINE",
            "target": "CONTRACTLINE",
            "remarks": "Relationship  to the CONTRACTLINE table, used to find all contract line records for a given purchase. (contractlineid in (select contreflineid from poline where ponum=po.ponum and siteid=po.siteid)). The resulting set  will contain zero or more objects.",
            "whereClause": "contractlineid in (select contreflineid from invoiceline where ponum=:ponum and siteid=:siteid)",
            "cardinality": null
        },
        {
            "name": "CPYPOLINE",
            "target": "CPYPOLINE",
            "remarks": "Relationship to non-persistent CPYPOLINE object",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "DOCLINKS",
            "target": "DOCLINKS",
            "remarks": "Relationship to the DocLinks table, used to find all documents for a given invoice. (doclinks.keytable = 'INVOICE' and doclinks.keycolumn = 'INVOICENUM' and doclinks.keyvalue = :invoicenum$DOCLINKS.KEYVALUE). The resulting set will contain zero or more objects.",
            "whereClause": "(ownertable= 'INVOICE' and ownerid=:invoiceid) or (ownertable = 'COMPANIES' and ownerid in (select companiesid from companies where company=:vendor and orgid=:orgid)) or (ownertable = 'PO' and ownerid in (select poid from po where ponum=:ponum and status not in (select value from synonymdomain where domainid = 'POSTATUS' and maxvalue = 'REVISE') and siteid=:siteid)) or (ownertable = 'CONTRACT' and ownerid in (select contractid from contract where contractnum=:contractrefnum and revisionnum=:contractrefrev and orgid=:orgid)) or (ownertable = 'MRLINE' and ownerid in (select mrlineid from mrline where mrnum in (select mrnum from poline where ponum=:ponum and siteid=:siteid))) or (ownertable = 'PR' and ownerid in (select prid from pr where prnum in (select prnum from prline where ponum=:ponum and siteid=:siteid))) or (ownertable = 'RFQ' and ownerid in (select rfqid from rfq where rfqnum in (select rfqnum from rfqline where ponum=:ponum and siteid=:siteid)))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "target": "DRILLDOWN",
            "remarks": "Relationship from the INVOICE to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REVINVORIGINAL",
            "target": "INVOICE",
            "remarks": "Relationship to get the original invoice for a given reverse invoice. Result set consists of one mbo.",
            "whereClause": "invoicenum = :originvoicenum and siteid = :siteid",
            "cardinality": null
        },
        {
            "name": "REVINVREVERSE",
            "target": "INVOICE",
            "remarks": "Relationship to get the reverse invoice for a givenoriginal invoice. Result set consists of one mbo.",
            "whereClause": "invoicenum = :revinvoicenum and siteid = :siteid",
            "cardinality": null
        },
        {
            "name": "INVOICECHANGESTATUS",
            "target": "INVOICECHGSTAT",
            "remarks": "Relationship to the non-persistent InvoiceChgStat table. (No where clause). The resulting set will contain zero objects.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVOICECOST",
            "target": "INVOICECOST",
            "remarks": "Relationship to the InvoiceCost table, used to find all invoice cost lines for a given invoice. (invoice.invoicenum = invoicecost.invoicenum). The resulting set will contain zero or more objects.",
            "whereClause": "invoicenum=:invoicenum and siteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "INVOICELINE",
            "target": "INVOICELINE",
            "remarks": "Relationship to the InvoiceLine table, used to find all invoice lines for a given invoice. (invoice.invoicenum = invoiceline.invoicenum). The resulting set will contain zero or more objects.",
            "whereClause": "invoicenum=:invoicenum and siteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "TOLERANCELINES",
            "target": "INVOICELINE",
            "remarks": "Relationship to the InvoiceLine table, used to find all invoice lines which have potoleranceline as true. (invoice.invoicenum = invoiceline.invoicenum and potoleranceline = :yes). The resulting set will contain zero or more objects.",
            "whereClause": "invoicenum=:invoicenum and potoleranceline=:yes and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "PRORATENLINES",
            "target": "INVOICELINE",
            "remarks": "Relationship to the InvoiceLine table, used to find all invoice lines which have prorateservice as false. (invoice.invoicenum = invoiceline.invoicenum and prorateservice = :NO). The resulting set will contain zero or more objects.",
            "whereClause": "invoicenum=:invoicenum and prorateservice=:no and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRORATEYLINES",
            "target": "INVOICELINE",
            "remarks": "Relationship to the InvoiceLine table, used to find all invoice lines which have prorateservice as true. (invoice.invoicenum = invoiceline.invoicenum and prorateservice = :YES). The resulting set will contain zero or more objects.",
            "whereClause": "invoicenum=:invoicenum and prorateservice=:yes and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVOICEMATCH",
            "target": "INVOICEMATCH",
            "remarks": "Relationship to the InvoiceMatch table, used to find all invoice match records written for a given invoice on its approval. (invoice.invoicenum = invoicematch.invoicenum). The resulting set will contain zero or more objects.",
            "whereClause": "invoicenum=:invoicenum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVOICESTATUS",
            "target": "INVOICESTATUS",
            "remarks": "Relationship to the InvoiceStatus table, used to find all statuses that this invoice has gone through. (invoice.invoicenum = invoicestatus.invoicenum). The resulting set will contain one or more objects.",
            "whereClause": "invoicenum=:invoicenum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVOICETERM",
            "target": "INVOICETERM",
            "remarks": "Relationship to the INVOICETERM table, used to find all invoice term records for a given invoice. (invoiceterm.invoicenum = invoice.invoicenum). The resulting set will contain zero or more objects.",
            "whereClause": "invoicenum=:invoicenum and siteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "INVOICETRANS",
            "target": "INVOICETRANS",
            "remarks": "Relationship to the InvoiceTrans table for a given invoice",
            "whereClause": "invoicenum = :invoicenum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "INVC_ENTERBY",
            "target": "LABOR",
            "remarks": null,
            "whereClause": "laborcode=:enterby and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABTRANS",
            "target": "LABTRANS",
            "remarks": "invoice to labtrans",
            "whereClause": "invoicenum=:invoicenum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "MATRECTRANS",
            "target": "MATRECTRANS",
            "remarks": "Relationship to the MatRecTrans table, used to find all parent material receipts that have been used on a given invoice. (invoice.invoicenum = matrectrans.invoicenum and matrectrans.belongsto is null). The resulting set will contain zero or more objects.",
            "whereClause": "invoicenum = :invoicenum and belongsto is null and positeid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MATRECTRANSVIEW",
            "target": "MATRECTRANS",
            "remarks": "Relationship to the MATRECTRANS line table, used to find all MATRECTRANS line records for a given INVOICE. The resulting set will contain zero or more objects.",
            "whereClause": "exists (select 1 from invoiceline where matrectrans.porevisionnum = invoiceline.porevisionnum and matrectrans.ponum = invoiceline.ponum and matrectrans.polinenum = invoiceline.polinenum and matrectrans.siteid = invoiceline.positeid and invoiceline.invoicenum = :invoicenum and invoiceline.siteid=:siteid)",
            "cardinality": null
        },
        {
            "name": "POMATRECTRANS",
            "target": "MATRECTRANS",
            "remarks": "Relationship to the MatRecTrans table, used to find all parent material receipts created against the ponum used for this invoice. (invoice.ponum = matrectrans.ponum and matrectrans.belongsto is null). The resulting set will contain zero or more objects.",
            "whereClause": "ponum = :ponum and issuetype not in (select value from synonymdomain where domainid = 'ISSUETYP' and maxvalue in ('INVOICE', 'TRANSFER')) and status in (select value from synonymdomain where domainid = 'RECEIPTSTATUS' and maxvalue = 'COMP') and belongsto is null and ((exists (select value from  synonymdomain where domainid = 'INVTYPE' and maxvalue in ('INVOICE','DEBIT') and value = :documenttype)) or (exists (select value from synonymdomain where domainid = 'INVTYPE' and maxvalue = 'CREDIT' and value = :documenttype) and quantity < 0)) and ponum in (select ponum from poline where poline.ponum = :ponum and poline.siteid = :positeid and poline.scheduleid is null) and positeid = :positeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POMATRECTRANSVOID",
            "target": "MATRECTRANS",
            "remarks": "Relationship to the MatRecTrans table, used to find all parent material receipts created against the ponum used for this invoice. The resulting set will contain zero or more objects.",
            "whereClause": "(not exists (select itemnum from inventory where location=matrectrans.fromstoreloc and siteid=matrectrans.fromsiteid and itemnum=matrectrans.itemnum and itemsetid=matrectrans.itemsetid and consignment=:yes) and not exists (select itemnum from inventory where location=matrectrans.tostoreloc and siteid=matrectrans.siteid and itemnum=matrectrans.itemnum and itemsetid=matrectrans.itemsetid and consignment=:yes) and ponum = :ponum and issuetype not in (:&synonymlist&_issuetyp[VOIDRECEIPT]) and (issuetype in (:&synonymlist&_issuetyp[RECEIPT,RETURN]) and matrectransid not in (select receiptref from matrectrans where issuetype in (:&synonymlist&_issuetyp[VOIDRECEIPT])  and ponum = :ponum))) AND (ponum = :ponum and issuetype not in (:&synonymlist&_issuetyp[INVOICE,TRANSFER]) and status in (:&synonymlist&_receiptstatus[COMP]) and belongsto is null and ((exists (select value from  synonymdomain where domainid = 'INVTYPE' and maxvalue in ('INVOICE','DEBIT') and value = :documenttype)) or (exists (select value from synonymdomain where domainid = 'INVTYPE' and maxvalue = 'CREDIT' and value = :documenttype) and quantity < 0)) and ponum in (select ponum from poline where poline.ponum = :ponum and poline.siteid = :positeid and poline.scheduleid is null) and positeid = :positeid)",
            "cardinality": null
        },
        {
            "name": "REVMATRECTRANS",
            "target": "MATRECTRANS",
            "remarks": "Relationship to the MatRecTrans table for a given invoice",
            "whereClause": "invoicenum = :invoicenum and fromsiteid=:siteid",
            "cardinality": null
        },
        {
            "name": "INVOICELINESPECCLASS",
            "target": "PDSPEC",
            "remarks": "Relationship to the pdspec table, used to find the pdspec records for a given invoice (pdownerid=:invoiceid and refobjectname='INVOICELINE'). The resulting set will contain zero or more objects.",
            "whereClause": "pdownerid=:invoiceid and refobjectname='INVOICELINE' ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PDSPECCLASS",
            "target": "PDSPEC",
            "remarks": "Relationship to the pdspec table, used to find the pdspec records for a given invoice (pdownerid=:invoiceid and refobjectname='INVOICELINE'). The resulting set will contain zero or more objects.",
            "whereClause": "pdownerid=:invoiceid and refobjectname='INVOICELINE' ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PO",
            "target": "PO",
            "remarks": "Relationship to the PO table, used to find all purchase orders for a given invoice. (invoice.ponum = po.ponum). The resulting set will contain zero or one object.",
            "whereClause": "ponum=:ponum and siteid=:positeid and status not in (select value from synonymdomain where domainid = 'POSTATUS' and maxvalue in ('REVISE', 'PNDREV', 'CAN'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVC_PO",
            "target": "PO",
            "remarks": null,
            "whereClause": "ponum=:ponum and siteid=:positeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POLINE",
            "target": "POLINE",
            "remarks": "Relationship to the POLine table, used to find all purchase order lines for a given invoice. (poline.ponum = invoice.ponum and and poline.siteid =  invoice.siteid and poline.scheduleid is null). The resulting set will contain zero or more objects.",
            "whereClause": "ponum = :ponum and siteid = :positeid and scheduleid is null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POLINEVIEW",
            "target": "POLINE",
            "remarks": "Relationship to the PO line table,  used to find all PO line records for a given INVOICE. The resulting set will contain zero or more objects.",
            "whereClause": "exists (select 1 from invoiceline where poline.revisionnum = invoiceline.porevisionnum and poline.ponum = invoiceline.ponum and poline.polinenum = invoiceline.polinenum and poline.siteid = invoiceline.positeid and invoiceline.invoicenum = :invoicenum and invoiceline.siteid=:siteid)",
            "cardinality": null
        },
        {
            "name": "INVOICEPOTERM",
            "target": "POTERM",
            "remarks": "Relationship to the POTERM table, used to find all po term records for a given purchase order. (poterm.ponum = invoice.ponum). The resulting set will contain zero or more objects.",
            "whereClause": "ponum=:ponum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRLINEVIEW",
            "target": "PRLINE",
            "remarks": "Relationship to the PO line table,  used to find all PO line records for a given INVOICE. The resulting set will contain zero or more objects.",
            "whereClause": "exists (select 1 from poline  where exists ( select 1 from invoiceline where poline.revisionnum = invoiceline.porevisionnum and poline.ponum = invoiceline.ponum and poline.polinenum = invoiceline.polinenum and poline.siteid = invoiceline.positeid and invoiceline.invoicenum = :invoicenum and invoiceline.siteid=:siteid) and prline.ponum=poline.ponum and prline.siteid=poline.siteid and prline.polinenum=poline.polinenum)",
            "cardinality": null
        },
        {
            "name": "REVINVINPUT",
            "target": "REVINVINPUT",
            "remarks": "Relationship to the non-persistent RevInvInput table. (No where clause). The resulting set will contain zero objects.",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "RFQLINEVIEW",
            "target": "RFQLINE",
            "remarks": "Relationship to the RFQ line table,  used to find all RFQ line records for a given INVOICE. (polineid in (select polineid from prline where prnum=pr.prnum and siteid=pr.siteid). The resulting set will contain zero or more objects.",
            "whereClause": "polinenum in (select polinenum from invoiceline where invoicenum=:invoicenum and siteid=:siteid) and ponum in (select ponum from invoiceline where invoicenum=:invoicenum and siteid=:siteid) and siteid in (select positeid from invoiceline where invoicenum=:invoicenum and siteid=:siteid)",
            "cardinality": null
        },
        {
            "name": "SCHLEASEVIEW",
            "target": "SCHLEASEVIEW",
            "remarks": "Relationship to the SchLeaseView view, used to find the lease contract schedule for a given invoice. (schleaseview.scheduleid = invoice.scheduleid and schleaseview.orgid = invoice.orgid)",
            "whereClause": "scheduleid = :scheduleid and orgid= :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SERVRECTRANS",
            "target": "SERVRECTRANS",
            "remarks": "Relationship to the ServRecTrans table, used to find all parent service receipts that have been used on a given invoice. (invoice.invoicenum = servrectrans.invoicenum and servrectrans.belongsto is null). The resulting set will contain zero or more objects.",
            "whereClause": "invoicenum = :invoicenum and belongsto is null and positeid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SERVRECTRANSVIEW",
            "target": "SERVRECTRANS",
            "remarks": "Relationship to the SERVRECTRANS line table, used to find all SERVRECTRANS line records for a given INVOICE. The resulting set will contain zero or more objects.",
            "whereClause": "exists (select 1 from invoiceline where servrectrans.porevisionnum = invoiceline.porevisionnum and servrectrans.ponum = invoiceline.ponum and servrectrans.polinenum = invoiceline.polinenum and servrectrans.siteid = invoiceline.positeid and invoiceline.invoicenum = :invoicenum and invoiceline.siteid=:siteid)",
            "cardinality": null
        },
        {
            "name": "REVSERVRECTRANS",
            "target": "SERVRECTRANS",
            "remarks": "Relationship to the ServRecTrans table for a given invoice",
            "whereClause": "invoicenum = :invoicenum and fromsiteid=:siteid",
            "cardinality": null
        },
        {
            "name": "POSERVRECTRANS",
            "target": "SERVRECTRANS",
            "remarks": "Relationship to the ServRecTrans table, used to find all parent service receipts created against the ponum used for this invoice. (invoice.ponum = servrectrans.ponum and servrectrans.belongsto is null). The resulting set will contain zero or more objects.",
            "whereClause": "ponum = :ponum and issuetype not in (select value from synonymdomain where domainid = 'ISSUETYP' and maxvalue in ('INVOICE', 'TRANSFER')) and status in (select value from synonymdomain where domainid = 'RECEIPTSTATUS' and maxvalue = 'COMP') and belongsto is null and ponum in (select ponum from poline where poline.ponum = :ponum and poline.scheduleid is null) and positeid = :positeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POSERVRECTRANSVOID",
            "target": "SERVRECTRANS",
            "remarks": "Relationship to the ServRecTrans table, used to find all parent service receipts created against the ponum used for this invoice. The resulting set will contain zero or more objects.",
            "whereClause": "(ponum = :ponum and issuetype not in (:&synonymlist&_issuetyp[VOIDRECEIPT]) and (issuetype in (:&synonymlist&_issuetyp[RECEIPT,RETURN]) and servrectransid not in (select receiptref from servrectrans where issuetype in (:&synonymlist&_issuetyp[VOIDRECEIPT]) and ponum = :ponum))) and (ponum = :ponum and issuetype not in (:&synonymlist&_issuetyp[INVOICE,TRANSFER]) and status in (:&synonymlist&_receiptstatus[COMP]) and belongsto is null and ponum in (select ponum from poline where poline.ponum = :ponum and poline.scheduleid is null) and positeid = :positeid)",
            "cardinality": null
        },
        {
            "name": "STATUSDESC",
            "target": "SYNONYMDOMAIN",
            "remarks": "Relationship to synonymdomain table, used to find description for the status, it will contain one object.",
            "whereClause": "domainid='IVSTATUS' and value=:status and :&DOMAINFILTER&_STATUS",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFASSIGNMENT",
            "target": "WFASSIGNMENT",
            "remarks": "Relationship to active assignments on this invoice. (ownertable = 'INVOICE' and ownerid = :invoiceid and assignstatus in (select value from synonymdomain where domainid='WFASGNSTATUS' and maxvalue='ACTIVE')). Zero to many member set.",
            "whereClause": "ownertable = 'INVOICE' and wfassignment.ownerid = :invoiceid and assignstatus in (select value from synonymdomain where domainid='WFASGNSTATUS' and maxvalue='ACTIVE')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFTOOLBAR",
            "target": "WFTOOLBAR",
            "remarks": "Relationship to virutal set that manages the toolbar buttons. (empty). Any number member set.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFTRANSACTION",
            "target": "WFTRANSACTION",
            "remarks": "Relationship to workflow transactions. (ownertable = 'INVOICE' and ownerid = :invoiceid). Zero to many member set.",
            "whereClause": "ownertable = 'INVOICE' and ownerid = :invoiceid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKFLOWMAP",
            "target": "WORKFLOWMAP",
            "remarks": "Get virtual set to display process maps",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "REVINVORIGINAL",
            "source": "INVOICE",
            "remarks": "Relationship to get the original invoice for a given reverse invoice. Result set consists of one mbo.",
            "whereClause": "invoicenum = :originvoicenum and siteid = :siteid",
            "cardinality": null
        },
        {
            "name": "REVINVREVERSE",
            "source": "INVOICE",
            "remarks": "Relationship to get the reverse invoice for a givenoriginal invoice. Result set consists of one mbo.",
            "whereClause": "invoicenum = :revinvoicenum and siteid = :siteid",
            "cardinality": null
        },
        {
            "name": "INVOICE",
            "source": "INVOICELINE",
            "remarks": "Relationship to the Invoice table, used to find the owner invoice for a given invoice line. (invoiceline.invoicenum = invoice.invoicenum). The resulting set will contain one object.",
            "whereClause": "invoicenum=:invoicenum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVOICE",
            "source": "INVOICETRANS",
            "remarks": "Relationship to the Invoice table, used to find the owner invoice for a given invoice transaction created on the approval of the invoice. (invoicetrans.invoicenum = invoice.invoicenum). The resulting set will contain one object.",
            "whereClause": "invoicenum=:invoicenum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVOICE",
            "source": "MATRECTRANS",
            "remarks": "Relationship to the Invoice table, used to find the invoice for the receipt. (invoice.invoicenum = matrectrans.invoicenum). The resulting set will contain zero or one object.",
            "whereClause": "invoicenum=:invoicenum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVOICE",
            "source": "POLINE",
            "remarks": "Relationship to the Invoice table, used to find all invoice records for a given purchase order. (invoice.ponum = poline.ponum). The resulting set will contain zero or more objects.",
            "whereClause": "ponum=:ponum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SCHEDULEINVOICE",
            "source": "POLINE",
            "remarks": "Relationship to the Invoice table, used to find the payment schedule invoice for a given po line. (invoice.scheduleid = poline.scheduleid and invoice.orgid = poline.orgid)",
            "whereClause": "scheduleid = :scheduleid and orgid= :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVOICE",
            "source": "SCHLEASEVIEW",
            "remarks": "Relationship to the Invoice table, used to find all invoices for a given contract. (invoice.contractrefnum = schleaseview.contractnum and invoice.contractrefrev = schleaseview.revisionnum and invoice.orgid = schleaseview.orgid)",
            "whereClause": "contractrefnum = :contractnum and contractrefrev = :revisionnum and orgid= :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SCHEDULEINVOICE",
            "source": "SCHLEASEVIEW",
            "remarks": "Relationship to the Invoice table, used to find all invoices for a given contract which are not cancelled. (invoice.contractrefnum = schleaseview.contractnum and invoice.contractrefrev = schleaseview.revisionnum and status not in (select synonymdomain.value from synonymdomain where synonymdomain.domainid = 'IVSTATUS' and synonymdomain.maxvalue = 'CANCEL') and invoice.orgid = schleaseview.orgid)",
            "whereClause": "contractrefnum = :contractnum and contractrefrev = :revisionnum and status not in (select value from synonymdomain where domainid = 'IVSTATUS' and maxvalue = 'CANCEL') and orgid= :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVOICE",
            "source": "SCHPURCHVIEW",
            "remarks": null,
            "whereClause": "scheduleid = :scheduleid and orgid= :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVOICE",
            "source": "SCHWARRANTYVIEW",
            "remarks": "Relationship to the Invoice table, used to find all invoices for a given contract. (invoice.contractrefnum = schwarrantyview.contractnum and invoice.contractrefrev = schwarrantyview.revisionnum and invoice.orgid = schwarrantyview.orgid)",
            "whereClause": "contractrefnum = :contractnum and orgid= :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVOICE",
            "source": "SERVRECTRANS",
            "remarks": "Relationship to the Invoice table, used to find all invoice records for a given service receipt. (invoice.invoicenum = servrectrans.invoicenum). The resulting set will contain one object.",
            "whereClause": "invoicenum = :invoicenum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ]
}