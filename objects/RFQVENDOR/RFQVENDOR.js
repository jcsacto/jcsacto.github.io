mos = {
    "objectName": "RFQVENDOR",
    "className": "psdi.app.rfq.RFQVendorSet",
    "description": "Vendor Targeted to Receive Request for Quotation",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "RFQVENDORID",
    "primaryKeyColumns": [
        "SITEID",
        "RFQNUM",
        "VENDOR"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "COMPANIES",
            "targetObject": "RFQVENDOR",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor on RFQ Vendor",
            "longDescription": null
        },
        {
            "objectName": "CURRENCY",
            "targetObject": "RFQVENDOR",
            "parentKeys": "CURRENCYCODE",
            "targetKeys": "CURRENCYCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Record Currency",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "RFQVENDOR",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "RFQVENDOR",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "RFQ",
            "targetObject": "RFQVENDOR",
            "parentKeys": "SITEID, RFQNUM",
            "targetKeys": "SITEID, RFQNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "RFQ",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "RFQVENDOR",
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
            "attributeName": "RFQNUM",
            "required": true,
            "persistent": true,
            "title": "RFQ",
            "remarks": "Request for Quotation (RFQ) Number.",
            "sameAsAttribute": "RFQNUM",
            "sameAsObject": "RFQ"
        },
        {
            "attributeName": "VENDOR",
            "required": true,
            "persistent": true,
            "title": "Vendor",
            "remarks": "Company that will receive the RFQ.",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "CONTACT",
            "required": false,
            "persistent": true,
            "title": "Contact",
            "remarks": "Person at the company who will receive the RFQ.",
            "sameAsAttribute": "CONTACT",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "PHONE",
            "required": false,
            "persistent": true,
            "title": "Phone",
            "remarks": "Business telephone number of the vendor contact.",
            "sameAsAttribute": "PHONENUM",
            "sameAsObject": "PHONE"
        },
        {
            "attributeName": "FAXPHONE",
            "required": false,
            "persistent": true,
            "title": "Fax",
            "remarks": "Fax number of the vendor contact.",
            "sameAsAttribute": "FAX",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "EMAIL",
            "required": false,
            "persistent": true,
            "title": "E-mail",
            "remarks": "E-mail address of the vendor contact.",
            "sameAsAttribute": "EMAIL",
            "sameAsObject": "COMPCONTACT"
        },
        {
            "attributeName": "CUSTOMERNUM",
            "required": false,
            "persistent": true,
            "title": "Customer #",
            "remarks": "Number used by the vendor to identify your company.",
            "sameAsAttribute": "CUSTOMERNUM",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "FOB",
            "required": false,
            "persistent": true,
            "title": "FOB Point",
            "remarks": "Free On Board Point. The point where responsibility and liability are transferred. The FOB point is usually either the destination or the shipping point.",
            "sameAsAttribute": "FOB",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "FREIGHTTERMS",
            "required": false,
            "persistent": true,
            "title": "Freight Terms",
            "remarks": "Describes what is being shipped. Any riders to the shipping agreement should be included here. To enter or view additional information, click the Long Description button. For example, Fresh Fruit. Perishable. Must meet delivery dates.",
            "sameAsAttribute": "FREIGHTTERMS",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "SHIPVIA",
            "required": false,
            "persistent": true,
            "title": "Ship Via",
            "remarks": "Specifies how the goods should be shipped. For example, First Class Mail.",
            "sameAsAttribute": "SHIPVIA",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "PAYMENTTERMS",
            "required": false,
            "persistent": true,
            "title": "Payment Terms",
            "remarks": "Specified terms of payment for this vendor. For example, net 30.",
            "sameAsAttribute": "PAYMENTTERMS",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "CURRENCYCODE",
            "required": true,
            "persistent": true,
            "title": "Currency",
            "remarks": "Currency the vendor uses, if it is different than your company's base curency. This value is used for currency conversion.",
            "sameAsAttribute": "CURRENCYCODE",
            "sameAsObject": "CURRENCY"
        },
        {
            "attributeName": "EXCHANGERATE",
            "required": false,
            "persistent": true,
            "title": "Exchange Rate",
            "remarks": "Exchange rate at time of quotation",
            "sameAsAttribute": "EXCHANGERATE",
            "sameAsObject": "EXCHANGE"
        },
        {
            "attributeName": "EXCHANGEDATE",
            "required": false,
            "persistent": true,
            "title": "Exchange Date",
            "remarks": "Date of exchange rate",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BUYAHEAD",
            "required": true,
            "persistent": true,
            "title": "Buy Ahead Rate",
            "remarks": "Is this a buy ahead rate? ie: entered directly by the user and not calculated from the list of active exchange rates.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INTERNAL",
            "required": true,
            "persistent": true,
            "title": "Internal",
            "remarks": "Is this an internal PO? ie: vendor is of type STOREROOM.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REPLIEDDATE",
            "required": false,
            "persistent": true,
            "title": "Vendor Reply Date",
            "remarks": "Date the vendor replied to the RFQ.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLCREDITACCT",
            "required": false,
            "persistent": true,
            "title": "GL Credit Account",
            "remarks": "Credit GL Account default for vendor",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INCLUSIVE1",
            "required": true,
            "persistent": true,
            "title": "Pay Tax to Vendor",
            "remarks": "Specifies if the vendor is authorized to collect taxes and you will pay the tax amount to the vendor. Select the checkbox if you want to pay taxes to the vendor. Clear the checkbox if there is no tax, or if you want to pay taxes directly to the taxing authority.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INCLUSIVE2",
            "required": true,
            "persistent": true,
            "title": "Include Tax 2",
            "remarks": "Vendors invoices inclusive of Tax 2?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INCLUSIVE3",
            "required": true,
            "persistent": true,
            "title": "Include Tax 3",
            "remarks": "Vendors invoices inclusive of Tax 3?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INCLUSIVE4",
            "required": true,
            "persistent": true,
            "title": "Include Tax 4",
            "remarks": "Vendors invoices inclusive of Tax 4?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INCLUSIVE5",
            "required": true,
            "persistent": true,
            "title": "Include Tax 5",
            "remarks": "Vendors invoices inclusive of Tax 5?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VENDORQUOTENUM",
            "required": false,
            "persistent": true,
            "title": "Vendor Quote #",
            "remarks": "Identifies the quotation received from the vendor.",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "SITEID",
            "required": true,
            "persistent": true,
            "title": "Site",
            "remarks": "Site Identifier",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "FREIGHTTERMS_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Freight Terms Long Description",
            "remarks": "Long Description for Freight terms",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RFQVENDORID",
            "required": true,
            "persistent": true,
            "title": "RFQVENDORID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
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
        }
    ],
    "outgoingRelationships": [
        {
            "name": "COMPANIES",
            "target": "COMPANIES",
            "remarks": "Relationship to the Companies table, used to find company records for a given request for quotation vendor. (companies.company = rfqvendor.vendor). The resulting set will contain zero or one objects.",
            "whereClause": "company=:vendor and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMPCONTACT",
            "target": "COMPCONTACT",
            "remarks": "Relationship to the Companies table, used to find company records for a given request for quotation vendor. (compcontact.company = rfqvendor.vendor and compcontact.contact = rfqvendor.contact). The resulting set will contain zero or one objects.",
            "whereClause": "company = :vendor and contact = :contact and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CREATECONTRACT",
            "target": "CONTRACTFROMRFQ",
            "remarks": "Relationship to the non-persistent ContractFromRFQ table. (No where clause). The resulting set will contain zero objects.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POFROMRFQINPUT",
            "target": "POFROMRFQINPUT",
            "remarks": "Relationship to the non-persistent CreatePOFromRFQ table. (No where clause). The resulting set will contain zero objects.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "QUOTATIONLINEVENDOR",
            "target": "QUOTATIONLINE",
            "remarks": "Relationship to the QuotationLine table, used to find all quotation line records for a given request for quotation vendor. (rfqvendor.rfqnum = quotationline.rfqnum and rfqvendor.vendor = quotationline.vendor). The resulting set will contain zero or one objects.",
            "whereClause": "rfqnum = :rfqnum and vendor = :vendor and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RFQVENDORTERM",
            "target": "RFQVENDORTERM",
            "remarks": "Relationship to the RFQVENDORTERM table, used to find all rfqvendor term records for a given request for quotation. (rfqvendorterm.rfqnum = rfq.rfqnum). The resulting set will contain zero or more objects.",
            "whereClause": "rfqnum=:rfqnum and vendor=:vendor and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "RFQVENDOR",
            "source": "QUOTATIONLINE",
            "remarks": "QuotationLine to RFQVendor",
            "whereClause": "rfqnum=:rfqnum and vendor=:vendor and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "RFQVENDOR",
            "source": "RFQ",
            "remarks": "Relationship to the RFQVendor table, used to find all vendor records for a given request for quotation. (rfq.rfqnum = rfqvendor.rfqnum). The resulting set will contain zero or more objects.",
            "whereClause": "rfqnum=:rfqnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ]
}