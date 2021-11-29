mos = {
    "objectName": "INVOICELINE",
    "className": "psdi.app.invoice.InvoiceLineSet",
    "description": "The Invoice Line Items Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "INVOICELINEID",
    "primaryKeyColumns": [
        "SITEID",
        "INVOICENUM",
        "INVOICELINENUM"
    ],
    "logicalRelationships": [
        {
            "objectName": "INVOICELINE",
            "targetObject": "INVOICECOST",
            "parentKeys": "SITEID, INVOICENUM, INVOICELINENUM",
            "targetKeys": "POSITEID, INVOICENUM, INVOICELINENUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 1",
            "longDescription": null
        },
        {
            "objectName": "INVOICELINE",
            "targetObject": "INVOICECOST",
            "parentKeys": "SITEID, INVOICENUM, INVOICELINENUM",
            "targetKeys": "SITEID, INVOICENUM, INVOICELINENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Invoice Line",
            "longDescription": null
        },
        {
            "objectName": "INVOICELINE",
            "targetObject": "INVOICECOST",
            "parentKeys": "SITEID, INVOICENUM, INVOICELINENUM",
            "targetKeys": "TOSITEID, INVOICENUM, INVOICELINENUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 3",
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
            "objectName": "INVOICELINE",
            "targetObject": "LABTRANS",
            "parentKeys": "SITEID, INVOICENUM, INVOICELINENUM",
            "targetKeys": "SITEID, INVOICENUM, INVOICELINENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Invoice Line",
            "longDescription": null
        },
        {
            "objectName": "INVOICELINE",
            "targetObject": "SERVRECTRANS",
            "parentKeys": "SITEID, PONUM, POLINENUM",
            "targetKeys": "POSITEID, PONUM, POLINENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PO",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "ASSET",
            "targetObject": "INVOICELINE",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "POSITEID, LEASEASSET",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 47",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "INVOICELINE",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, LEASEASSET",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 48",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "INVOICELINE",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "INVOICELINE",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITY, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "INVOICELINE",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITYGROUP, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity Group",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "INVOICELINE",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Company on Invoice Line",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "INVOICELINE",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTREFNUM, CONTRACTREFREV, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "INVOICELINE",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTREFNUM, POREVISIONNUM, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 19",
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
            "objectName": "ITEM",
            "targetObject": "INVOICELINE",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "ITEMCONDITION",
            "targetObject": "INVOICELINE",
            "parentKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "targetKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item Condition",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "INVOICELINE",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "MATRECTRANS",
            "targetObject": "INVOICELINE",
            "parentKeys": "MATRECTRANSID",
            "targetKeys": "CONSTRANSID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Invoice Lines",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "INVOICELINE",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "ORIGINATOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Originating Consignment Transaction Object",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "INVOICELINE",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "INVOICEUNIT, POSITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 107",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "INVOICELINE",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "INVOICEUNIT, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 108",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "INVOICELINE",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "INVOICEUNIT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "INVOICELINE",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "INVOICELINE",
            "parentKeys": "PERSONID",
            "targetKeys": "ENTERBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who entered the record.",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "INVOICELINE",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "POSITEID, PONUM, CONTRACTREFREV",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 8",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "INVOICELINE",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "POSITEID, PONUM, POREVISIONNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 9",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "INVOICELINE",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "SITEID, PONUM, CONTRACTREFREV",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 10",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "INVOICELINE",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "SITEID, PONUM, POREVISIONNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 11",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "INVOICELINE",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 21",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "INVOICELINE",
            "parentKeys": "SITEID",
            "targetKeys": "POSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 70",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "INVOICELINE",
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
            "remarks": "Invoice number this line belongs to.",
            "sameAsAttribute": "INVOICENUM",
            "sameAsObject": "INVOICE"
        },
        {
            "attributeName": "VENDOR",
            "required": true,
            "persistent": true,
            "title": "Vendor",
            "remarks": "Supplier of invoice.",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "PONUM",
            "required": false,
            "persistent": true,
            "title": "PO",
            "remarks": "The PO that this line item refers to",
            "sameAsAttribute": "PONUM",
            "sameAsObject": "PO"
        },
        {
            "attributeName": "INVOICELINENUM",
            "required": true,
            "persistent": true,
            "title": "Line",
            "remarks": "System generated invoice line item number.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "POLINENUM",
            "required": false,
            "persistent": true,
            "title": "PO Line",
            "remarks": "The line item on the PO that refers to this invoice line item.",
            "sameAsAttribute": "PRLINENUM",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "ITEMNUM",
            "required": false,
            "persistent": true,
            "title": "Item",
            "remarks": "Item number of this invoice line.",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "The description of the item.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "INVOICEQTY",
            "required": false,
            "persistent": true,
            "title": "Quantity",
            "remarks": "Quantity invoiced on this line.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INVOICEUNIT",
            "required": false,
            "persistent": true,
            "title": "Order Unit",
            "remarks": "Unit of measure for this item.",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "UNITCOST",
            "required": false,
            "persistent": true,
            "title": "Unit Cost",
            "remarks": "Unit price of item or service.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LINECOST",
            "required": true,
            "persistent": true,
            "title": "Line Cost",
            "remarks": "The total line cost for the item or service.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RECEIPTREQD",
            "required": true,
            "persistent": true,
            "title": "Receipt Required",
            "remarks": "Does this Invoice Line require a receipt to match ?.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TAX1CODE",
            "required": false,
            "persistent": true,
            "title": "Tax Code",
            "remarks": "Code used for calculation of tax. Tax1 Code",
            "sameAsAttribute": "TAXCODE",
            "sameAsObject": "TAX"
        },
        {
            "attributeName": "TAX1",
            "required": true,
            "persistent": true,
            "title": "Tax 1",
            "remarks": "Calculated TAX1.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TAX2CODE",
            "required": false,
            "persistent": true,
            "title": "Tax Code 2",
            "remarks": "Code used for calculation of tax. Tax2 Code.",
            "sameAsAttribute": "TAXCODE",
            "sameAsObject": "TAX"
        },
        {
            "attributeName": "TAX2",
            "required": true,
            "persistent": true,
            "title": "Tax 2",
            "remarks": "Calculated TAX2.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TAX3CODE",
            "required": false,
            "persistent": true,
            "title": "Tax Code 3",
            "remarks": "Code used for calculation of tax. Tax3 Code.",
            "sameAsAttribute": "TAXCODE",
            "sameAsObject": "TAX"
        },
        {
            "attributeName": "TAX3",
            "required": true,
            "persistent": true,
            "title": "Tax 3",
            "remarks": "Calculated TAX3.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INVOICELIN1",
            "required": false,
            "persistent": true,
            "title": "Invoice Line 1",
            "remarks": "Crossover from PLIN1.",
            "sameAsAttribute": "IN19",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "INVOICELIN2",
            "required": false,
            "persistent": true,
            "title": "Invoicelin2",
            "remarks": "Crossover from PLIN2.",
            "sameAsAttribute": "IN20",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "INVOICELIN3",
            "required": false,
            "persistent": true,
            "title": "Invoice Line 3",
            "remarks": "Crossover from PLIN3.",
            "sameAsAttribute": "IN21",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "INVOICELIN4",
            "required": false,
            "persistent": true,
            "title": "Invoice Line 4",
            "remarks": "Crossover from PLIN4.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INVOICELIN5",
            "required": false,
            "persistent": true,
            "title": "Invoice Line 5",
            "remarks": "Crossover from PLIN5.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENTERBY",
            "required": true,
            "persistent": true,
            "title": "Entered By",
            "remarks": "The person who entered this line of invoice",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "ENTERDATE",
            "required": true,
            "persistent": true,
            "title": "Entered Date",
            "remarks": "Date and time this line item entered",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TAX4CODE",
            "required": false,
            "persistent": true,
            "title": "Tax Code 4",
            "remarks": "Code used for calculation of tax. Tax4 Code.",
            "sameAsAttribute": "TAXCODE",
            "sameAsObject": "TAX"
        },
        {
            "attributeName": "TAX4",
            "required": true,
            "persistent": true,
            "title": "Tax 4",
            "remarks": "Calculated TAX4.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TAX5CODE",
            "required": false,
            "persistent": true,
            "title": "Tax Code 5",
            "remarks": "Code used for calculation of tax. Tax5 Code.",
            "sameAsAttribute": "TAXCODE",
            "sameAsObject": "TAX"
        },
        {
            "attributeName": "TAX5",
            "required": true,
            "persistent": true,
            "title": "Tax 5",
            "remarks": "Calculated TAX5.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LOADEDCOST",
            "required": true,
            "persistent": true,
            "title": "Loaded Cost",
            "remarks": "Line cost loaded with taxes & special charges.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PRORATED",
            "required": true,
            "persistent": true,
            "title": "Prorated",
            "remarks": "Has line amount been prorated (allocated)?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PRORATECOST",
            "required": false,
            "persistent": true,
            "title": "Prorated Cost",
            "remarks": "Amount of special charges loaded onto the line item.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PRORATESERVICE",
            "required": true,
            "persistent": true,
            "title": "Prorate Service",
            "remarks": "Should cost of service be prorated (loaded) to line items cost when invoicing?",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "INVOICELIN6",
            "required": false,
            "persistent": true,
            "title": "INVOICELIN6",
            "remarks": "Extra Field",
            "sameAsAttribute": "IN24",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "INVOICELIN7",
            "required": false,
            "persistent": true,
            "title": "INVOICELIN7",
            "remarks": "Extra Field",
            "sameAsAttribute": "IN25",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "INVOICELIN8",
            "required": false,
            "persistent": true,
            "title": "INVOICELIN8",
            "remarks": "Extra Field",
            "sameAsAttribute": "IN26",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "INVOICELIN9",
            "required": false,
            "persistent": true,
            "title": "INVOICELIN9",
            "remarks": "Extra Field",
            "sameAsAttribute": "IN27",
            "sameAsObject": "ITEM"
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
            "attributeName": "LINETYPE",
            "required": true,
            "persistent": true,
            "title": "Line Type",
            "remarks": "For invoices that do not reference a Purchase Order, the allowed line types are Service or Standard Service. For invoices that reference a purchase order, the information in the Line Type field is based on the value on the referenced purchase order line.",
            "sameAsAttribute": "LINETYPE",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "ITEMSETID",
            "required": false,
            "persistent": true,
            "title": "Item Set",
            "remarks": "Item set identifier for this item.",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS"
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Long Description for The description of the item.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SERVRECTRANSID",
            "required": false,
            "persistent": false,
            "title": "ID",
            "remarks": "SERVRECTRANSID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MATRECTRANSID",
            "required": false,
            "persistent": false,
            "title": "Receipt ID",
            "remarks": "MATRECTRANSID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TAX5FORUI",
            "required": false,
            "persistent": false,
            "title": "Tax 5",
            "remarks": "TAX5FORUI",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TAX4FORUI",
            "required": false,
            "persistent": false,
            "title": "Tax 4",
            "remarks": "TAX4FORUI",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TAX3FORUI",
            "required": false,
            "persistent": false,
            "title": "Tax 3",
            "remarks": "TAX3FORUI",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TAX2FORUI",
            "required": false,
            "persistent": false,
            "title": "Tax 2",
            "remarks": "TAX2FORUI",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TAX1FORUI",
            "required": false,
            "persistent": false,
            "title": "Tax",
            "remarks": "TAX1FORUI",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LOADEDCOSTFORUI",
            "required": false,
            "persistent": false,
            "title": "Loaded Cost",
            "remarks": "LOADEDCOSTFORUI",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LINECOSTFORUI",
            "required": false,
            "persistent": false,
            "title": "Line Cost",
            "remarks": "LINECOSTFORUI",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "QTYFORUI",
            "required": false,
            "persistent": false,
            "title": "Quantity",
            "remarks": "QTYFORUI",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISDISTRIBUTED",
            "required": true,
            "persistent": false,
            "title": "Distributed",
            "remarks": "ISDISTRIBUTED",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONDITIONCODE",
            "required": false,
            "persistent": true,
            "title": "Condition Code",
            "remarks": "item condition code for the invoice line",
            "sameAsAttribute": "CONDITIONCODE",
            "sameAsObject": "ITEMCONDITION"
        },
        {
            "attributeName": "COMMODITYGROUP",
            "required": false,
            "persistent": true,
            "title": "Commodity Group",
            "remarks": "Commodity Group",
            "sameAsAttribute": "COMMODITY",
            "sameAsObject": "COMMODITIES"
        },
        {
            "attributeName": "COMMODITY",
            "required": false,
            "persistent": true,
            "title": "Commodity Code",
            "remarks": "Commodity",
            "sameAsAttribute": "COMMODITY",
            "sameAsObject": "COMMODITIES"
        },
        {
            "attributeName": "INVOICELINEID",
            "required": true,
            "persistent": true,
            "title": "INVOICELINEID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "remarks": "Contract Reference Revision Number.",
            "sameAsAttribute": "REVISIONNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "CONTRACTREFID",
            "required": false,
            "persistent": true,
            "title": "CONTRACTREFID.",
            "remarks": "Contract Reference ID",
            "sameAsAttribute": "CONTRACTID",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "LEASEASSET",
            "required": false,
            "persistent": true,
            "title": "Lease Asset",
            "remarks": "Asset that this payment line is for.",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
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
            "attributeName": "CONTREFLINEID",
            "required": false,
            "persistent": true,
            "title": "Contract Reference Line ID",
            "remarks": "Identifies the contract line that was used to find the price for this line",
            "sameAsAttribute": "CONTRACTLINEID",
            "sameAsObject": "CONTRACTLINE"
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
            "attributeName": "HASLD",
            "required": true,
            "persistent": true,
            "title": "Has Long Description",
            "remarks": "Boolean flag to indicate if there is any long description for this record",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CLASSSTRUCTUREID",
            "required": false,
            "persistent": true,
            "title": "Class Structure",
            "remarks": "Classification Structure identifier",
            "sameAsAttribute": "CLASSSTRUCTUREID",
            "sameAsObject": "CLASSSTRUCTURE"
        },
        {
            "attributeName": "PRICEVAR",
            "required": false,
            "persistent": false,
            "title": "Price Variance",
            "remarks": "Price Variance",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONSTRANSID",
            "required": false,
            "persistent": true,
            "title": "Unique Identifier",
            "remarks": "Originating Consignment Transaction Object ID",
            "sameAsAttribute": "MATRECTRANSID",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "ORIGINATOR",
            "required": false,
            "persistent": true,
            "title": "Originating Transaction",
            "remarks": "Originating Consignment Transaction Object",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
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
            "attributeName": "TAXEXEMPT",
            "required": true,
            "persistent": true,
            "title": "Tax Exempt",
            "remarks": "Select this check box if the item, the tool, or the service is not taxable. The buyer for your organization determines the tax-exempt status of items, of tools, and of services.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "QTYOVERRECEIVED",
            "required": false,
            "persistent": true,
            "title": "Over Received Quantity",
            "remarks": "The quantity of items that were over received.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COSTOVERRECEIVED",
            "required": false,
            "persistent": true,
            "title": "Over Received Amount",
            "remarks": "The amount that was over received.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "POTOLERANCELINE",
            "required": false,
            "persistent": true,
            "title": "PO Line Tolerance",
            "remarks": "PO Line has a tolerance set",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "CLASSSPEC",
            "target": "CLASSSPEC",
            "remarks": "Relationship to the classspec table, used to find the classspec record for a given pdspec. (classstructureid=:classstructureid) The resulting set will contain one object.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSTRUCTURE",
            "target": "CLASSSTRUCTURE",
            "remarks": "Relationship to the ClassStructure table, used to find a class structure record for a given item specification. (itemspec.classstructureid = classstructure.classstructureid). The resulting set will contain zero or one object.",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMPANIES",
            "target": "COMPANIES",
            "remarks": "Relationship to the Companies table, used to find the company(vendor) for a given invoice line. (invoiceline.vendor = companies.company). The resulting set will contain zero or one object.",
            "whereClause": "company = :vendor and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTREF",
            "target": "CONTRACT",
            "remarks": "Relationship to the Contract table, used to find a contract record for a given invoice line (contract.contractid = invoiceline.contractrefid and contract.orgid = invoiceline.orgid). The resulting set will contain zero or one object.",
            "whereClause": "contractid = :contractrefid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTREFLINE",
            "target": "CONTRACTLINE",
            "remarks": "Relationship to the ContractLine table, used to find a contract line record for a given invoice line contract reference id. (contractline.contractlineid = invoiceline.contreflineid and contractline.orgid = invoiceline.orgid. The resulting set will contain one object.",
            "whereClause": "contractlineid = :contreflineid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "target": "DRILLDOWN",
            "remarks": "Relationship from the INVOICELINE to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVENTORY",
            "target": "INVENTORY",
            "remarks": "Relationship to the Inventory table, used to find the inventory item for a given invoice line. (invoiceline.itemnum = inventory.itemnum and inventory.itemsetid = invoiceline.itemsetid). The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVOICE",
            "target": "INVOICE",
            "remarks": "Relationship to the Invoice table, used to find the owner invoice for a given invoice line. (invoiceline.invoicenum = invoice.invoicenum). The resulting set will contain one object.",
            "whereClause": "invoicenum=:invoicenum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVOICECOST",
            "target": "INVOICECOST",
            "remarks": "Relationship to the InvoiceCost table, used to find all invoice cost lines for a given invoice line. (invoiceline.invoicenum = invoicecost.invoicenum and invoiceline.invoicelinenum = invoicecost.invoicelinenum). The resulting set will contain one or more objects.",
            "whereClause": "invoicenum=:invoicenum and invoicelinenum=:invoicelinenum and siteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "INVOICEMATCH",
            "target": "INVOICEMATCH",
            "remarks": "Relationship to the InvoiceMatch table, used to find all invoice match lines created for a given invoice line on approval of the invoice. (invoiceline.ponum = invoicematch.ponum and invoiceline.polinenum = invoicematch.polinenum). The resulting set will contain zero or one object.",
            "whereClause": "invoicenum=:invoicenum and invoicelinenum=:invoicelinenum and siteid=:siteid and reversed=:no",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVOICETRANS",
            "target": "INVOICETRANS",
            "remarks": "Relationship to the InvoiceTrans table, used to find the invoice transactions written for a given invoice line on the approval of the invoice. (invoiceline.invoicenum = invoicetrans.invoicenum and invoiceline.invoicelinenum = invoiceline.invoicelinenum). The resulting set will contain zero or more objects.",
            "whereClause": "invoicenum=:invoicenum and invoicelinenum=:invoicelinenum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEM",
            "target": "ITEM",
            "remarks": "Relationship to the Item table, used to find the item records for a given invoice line. (item.itemnum = invoiceline.itemnum and item.itemsetid = invoiceline.itemsetid). The resulting set will contain one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMCONDITION",
            "target": "ITEMCONDITION",
            "remarks": "Relationship to the itemcondition table, used to find the itemcondition records for a given Invoice Line record. (itemcondition.itemnum = invoiceline.itemnum and itemcondition.itemsetid=invoiceline.itemsetid and itemcondition.conditioncode=invoiceline.conditioncode). The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid and conditioncode=:conditioncode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMORGINFO",
            "target": "ITEMORGINFO",
            "remarks": "Relationship to the ItemOrgInfo table, used to find an item for a given invoice line. (invoiceline.itemnum = itemorginfo.itemnum and invoiceline.itemsetid = itemorginfo.itemsetid and invoiceline.orgid = itemorginfo.orgid). The resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MATRECTRANSVIEW",
            "target": "MATRECTRANS",
            "remarks": "Relationship to the MATRECTRANS line table, used to find all MATRECTRANS line records for a given  INVOICE line. (polinenum in (select polinenum from prline where ponum=prline.ponum and siteid=prline.siteid and polinenum=prline.polinenum) and positeid=prline.siteid). The resulting set will  contain zero or more objects.",
            "whereClause": "porevisionnum in (select porevisionnum from invoiceline where invoicenum=:invoicenum and positeid=:positeid and polinenum=:polinenum) and polinenum in (select polinenum from invoiceline where invoicenum=:invoicenum and positeid=:positeid and polinenum=:polinenum) and  ponum in (select ponum from invoiceline where invoicenum=:invoicenum and positeid=:positeid) and positeid  in (select positeid from invoiceline where invoicenum=:invoicenum and positeid=:positeid)",
            "cardinality": null
        },
        {
            "name": "INVOICELINESPEC",
            "target": "PDSPEC",
            "remarks": "Relationship to the InvoiceLine table, used to find a invoice line in the pdspec table. (refobjectid=:invoicelineid).  The resulting set will contain zero or more objects.",
            "whereClause": "refobjectid=:invoicelineid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVOICELINESPECCLASS",
            "target": "PDSPEC",
            "remarks": "Relationship to the pdspec table, used to find the pdspec records for a given invoice (refobjectid=:invoicelineid and refobjectname='INVOICELINE' and classstructureid=:classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "refobjectid=:invoicelineid and refobjectname='INVOICELINE' and classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PO",
            "target": "PO",
            "remarks": "Relationship to the PO table, used to find the PO for a given invoice line. (invoiceline.ponum = po.ponum). The resulting set will contain zero or one object.",
            "whereClause": "ponum=:ponum and siteid=:positeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POLINE",
            "target": "POLINE",
            "remarks": "Relationship to the POLine table, used to find the PO line for a given invoice line. (invoiceline.ponum = poline.ponum and invoiceline.polinenum = poline.polinenum). The resulting set will contain zero or one object.",
            "whereClause": "ponum = :ponum and polinenum = :polinenum and siteid=:positeid and revisionnum = :porevisionnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POLINEVIEW",
            "target": "POLINE",
            "remarks": "Relationship to the PO line table, used to find all PO line records for a given INVOICE line. (polineid in (select polineid from prline where ponum=poline.ponum and siteid=poline.siteid  and polinenum=poline.polinenum)). The resulting set will contain zero or more objects.",
            "whereClause": "revisionnum in (select porevisionnum from invoiceline where invoicenum=:invoicenum and siteid=:siteid and invoicelinenum=:invoicelinenum) and polinenum in (select polinenum from invoiceline where invoicenum=:invoicenum and siteid=:siteid and invoicelinenum=:invoicelinenum) and  ponum in (select ponum from invoiceline where invoicenum=:invoicenum and siteid=:siteid and invoicelinenum=:invoicelinenum) and siteid  in (select positeid from invoiceline where invoicenum=:invoicenum and siteid=:siteid and invoicelinenum=:invoicelinenum)",
            "cardinality": null
        },
        {
            "name": "PRLINEVIEW",
            "target": "PRLINE",
            "remarks": "Relationship to the PO line table, used to find all PO line records for a given INVOICE line. (polineid in (select polineid from prline where ponum=poline.ponum and siteid=poline.siteid  and polinenum=poline.polinenum)). The resulting set will contain zero or more objects.",
            "whereClause": "polinenum in (select polinenum from invoiceline where invoicenum=:invoicenum and siteid=:siteid and polinenum=:polinenum) and  ponum in (select ponum from invoiceline where invoicenum=:invoicenum and siteid=:siteid and polinenum=:polinenum) and siteid  in (select positeid from invoiceline where invoicenum=:invoicenum and siteid=:siteid and polinenum=:polinenum)",
            "cardinality": null
        },
        {
            "name": "RFQLINEVIEW",
            "target": "RFQLINE",
            "remarks": "Relationship to the RFQ line table, used to find all RFQ line records for a given INVOICE line. (polineid in (select polineid from prline where ponum=poline.ponum and  siteid=poline.siteid and polinenum=poline.polinenum)). The resulting set will contain zero or more objects.",
            "whereClause": "polinenum in (select polinenum from invoiceline where invoicenum=:invoicenum and siteid=:siteid and polinenum=:polinenum) and  ponum in (select ponum from invoiceline where invoicenum=:invoicenum and siteid=:siteid) and siteid  in (select positeid from invoiceline where invoicenum=:invoicenum and siteid=:siteid)",
            "cardinality": null
        },
        {
            "name": "SERVRECTRANS",
            "target": "SERVRECTRANS",
            "remarks": "Relationship to the ServRecTrans table, used to find the service receipt for a given invoice line. (invoiceline.ponum = servrectrans.ponum and invoiceline.polinenum = servrectrans.polinenum).  The resulting set will contain zero or more objects.",
            "whereClause": "ponum = :ponum and polinenum = :polinenum and positeid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SERVRECTRANSVIEW",
            "target": "SERVRECTRANS",
            "remarks": "Relationship to the  SERVRECTRANS line table, used to find all SERVRECTRANS line records for a given INVOICE line. (polinenum in (select polinenum from prline where ponum=prline.ponum and siteid=prline.siteid and  polinenum=prline.polinenum) and positeid=prline.siteid). The resulting set will contain zero or more objects.",
            "whereClause": "porevisionnum in (select porevisionnum from invoiceline where invoicenum=:invoicenum and positeid=:positeid and polinenum=:polinenum) and polinenum in (select polinenum from invoiceline where invoicenum=:invoicenum and positeid=:positeid and polinenum=:polinenum) and  ponum in (select ponum from invoiceline where invoicenum=:invoicenum and positeid=:positeid) and positeid  in (select positeid from invoiceline where invoicenum=:invoicenum and positeid=:positeid) and (invoicenum=:invoicenum or invoicenum is null)",
            "cardinality": null
        },
        {
            "name": "SERVRECTRANSVIEW1",
            "target": "SERVRECTRANS",
            "remarks": "Relationship to the  SERVRECTRANS line table, used to find all SERVRECTRANS line records for a given INVOICE line. (polinenum in (select polinenum from prline where ponum=prline.ponum and siteid=prline.siteid and  polinenum=prline.polinenum) and positeid=prline.siteid). The resulting set will contain zero or more objects.",
            "whereClause": "porevisionnum in (select porevisionnum from invoiceline where invoicenum=:invoicenum and positeid=:positeid and polinenum is null) and polinenum is null and  ponum in (select ponum from invoiceline where invoicenum=:invoicenum and positeid=:positeid) and positeid  in (select positeid from invoiceline where invoicenum=:invoicenum and positeid=:positeid) and (invoicenum=:invoicenum or invoicenum is null)",
            "cardinality": null
        },
        {
            "name": "VIEWCONTINPUT",
            "target": "VIEWCONTINPUT",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "target": "VIEWWOPMS",
            "remarks": "Relationship from the INVOICELINE to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": "",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "INVOICELINE",
            "source": "CLASSSTRUCTURE",
            "remarks": "Relationship to the invoiceline table, used to find the invoiceline records for a given classstructure. (classstructure.classstructureid = invoiceline.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVOICELINE_ONLY",
            "source": "CLASSSTRUCTURE",
            "remarks": "Relationship to the invoiceline table, used to find the invoiceline records for a given classstructure.(classstructure.classstructureid =invoicelne .classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid =:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVOICELINE",
            "source": "INVOICE",
            "remarks": "Relationship to the InvoiceLine table, used to find all invoice lines for a given invoice. (invoice.invoicenum = invoiceline.invoicenum). The resulting set will contain zero or more objects.",
            "whereClause": "invoicenum=:invoicenum and siteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "TOLERANCELINES",
            "source": "INVOICE",
            "remarks": "Relationship to the InvoiceLine table, used to find all invoice lines which have potoleranceline as true. (invoice.invoicenum = invoiceline.invoicenum and potoleranceline = :yes). The resulting set will contain zero or more objects.",
            "whereClause": "invoicenum=:invoicenum and potoleranceline=:yes and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "PRORATENLINES",
            "source": "INVOICE",
            "remarks": "Relationship to the InvoiceLine table, used to find all invoice lines which have prorateservice as false. (invoice.invoicenum = invoiceline.invoicenum and prorateservice = :NO). The resulting set will contain zero or more objects.",
            "whereClause": "invoicenum=:invoicenum and prorateservice=:no and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRORATEYLINES",
            "source": "INVOICE",
            "remarks": "Relationship to the InvoiceLine table, used to find all invoice lines which have prorateservice as true. (invoice.invoicenum = invoiceline.invoicenum and prorateservice = :YES). The resulting set will contain zero or more objects.",
            "whereClause": "invoicenum=:invoicenum and prorateservice=:yes and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVOICELINE",
            "source": "INVOICECOST",
            "remarks": "Relationship to the InvoiceLine table, used to find the owner invoice line for a given invoice cost line. (invoicecost.invoicenum = invoiceline.invoicenum and invoicecost.invoicelinenum = invoiceline.invoicelinenum). The resulting set will contain one object.",
            "whereClause": "invoicenum=:invoicenum and invoicelinenum=:invoicelinenum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVOICELINE",
            "source": "INVOICETRANS",
            "remarks": "Relationship to the InvoiceLine table, used to find the invoice line for which this invoice transaction was created. (invoicetrans.invoicenum = invoiceline.invoicenum and invoicetrans.invoicelinenum = invoiceline.invoicelinenum and invoiceline.invoicelinenum is not null). The resulting set will contain one object.",
            "whereClause": "invoicenum=:invoicenum and invoicelinenum=:invoicelinenum and invoicelinenum is not null and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVOICELINEVIEW",
            "source": "MATRECTRANS",
            "remarks": "Relationship to the InvoiceLine table, used to find all invoice line records for a given purchase order line. (invoiceline.ponum = poline.ponum and invoiceline.siteid = poline.siteid and  invoiceline.polinenum = poline.polinenum). The resulting set will contain zero or more objects.",
            "whereClause": "polinenum = :polinenum and ponum = :ponum and positeid = :positeid",
            "cardinality": null
        },
        {
            "name": "INVOICELINE",
            "source": "MEASUREUNIT",
            "remarks": "Relationship to the invoiceline table, used to find all non-historical invoiceline records using this measureunit. (invoiceline.orderunit=measureunit.measureunitid and exists (select 1 from invoice where invoice.invoicenum=invoiceline.invoicenum and invoice.historyflag = :no)  This relationship will find zero or more objects.",
            "whereClause": "invoiceunit=:measureunitid and exists (select 1 from invoice where invoice.invoicenum=invoiceline.invoicenum and invoice.historyflag = :no)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVOICELINE",
            "source": "PDSPEC",
            "remarks": "Relationship to the InvoiceLine table, used to find a rfq line in the pdspec table. (invoicelineid=:refobjectid).  The resulting set will contain zero or more objects.",
            "whereClause": "invoicelineid=:refobjectid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVOICELINE",
            "source": "PO",
            "remarks": "Relationship to the InvoiceLine table, used to find all invoice line records for a given purchase order. (invoiceline.ponum = po.ponum and invoiceline.positeid = po.siteid). The resulting set will contain zero or more objects.",
            "whereClause": "ponum=:ponum and positeid=:siteid",
            "cardinality": null
        },
        {
            "name": "INVOICELINEVIEW",
            "source": "PO",
            "remarks": "Relationship to the InvoiceLine table, used to find all invoice line records for a given purchase order line. (invoiceline.ponum = poline.ponum and invoiceline.siteid = poline.siteid and  invoiceline.polinenum = poline.polinenum). The resulting set will contain zero or more objects.",
            "whereClause": "(polinenum in (select polinenum from matrectrans where ponum=:ponum and positeid=:siteid) and ponum = :ponum and positeid = :siteid) or (polinenum in (select polinenum from servrectrans where ponum=:ponum and positeid=:siteid) and ponum = :ponum and positeid = :siteid)",
            "cardinality": null
        },
        {
            "name": "INVOICELINE",
            "source": "POLINE",
            "remarks": "Relationship to the InvoiceLine table, used to find all invoice line records for a given purchase order line. (invoiceline.ponum = poline.ponum and invoiceline.siteid = poline.siteid and  invoiceline.polinenum = poline.polinenum). The resulting set will contain zero or more objects.",
            "whereClause": "ponum=:ponum and positeid=:siteid and polinenum=:polinenum",
            "cardinality": null
        },
        {
            "name": "INVOICELINE",
            "source": "PR",
            "remarks": "Relationship to the INVOICELINE line table, used to find all INVOICELINE line records for a given purchase requisition. (polinenum in (select polinenum from prline where prnum=prline.prnum and siteid=prline.siteid) and positeid = pr.siteid). The resulting set will contain zero or more objects.",
            "whereClause": "polinenum in (select polinenum from prline where prnum=:prnum and siteid=:siteid) and ponum in (select ponum from prline where prnum=:prnum and siteid=:siteid) and positeid = :siteid",
            "cardinality": null
        },
        {
            "name": "INVOICELINE",
            "source": "PRLINE",
            "remarks": "Relationship to the INVOICELINE line table, used to find all INVOICELINE line records for a given purchase requisition line. (polinenum in (select polinenum from prline where ponum=prline.ponum and siteid=prline.siteid and polinenum=prline.polinenum) and positeid=prline.siteid). The resulting set will contain zero or more objects.",
            "whereClause": "polinenum in (select polinenum from prline where ponum=:ponum and siteid=:siteid and polinenum=:polinenum) and ponum in (select ponum from prline where prnum=:prnum and siteid=:siteid) and positeid = :siteid",
            "cardinality": null
        },
        {
            "name": "INVOICELINEFORCONTRACT",
            "source": "PURCHVIEW",
            "remarks": "Relationship to the InvoiceLine table, used to find all invoiceline for a given contract. (invoiceline.contractrefnum = purchview.contractnum). The resulting set will contain one or more objects.",
            "whereClause": "contractrefnum = :contractnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVOICELINE",
            "source": "SCHPURCHVIEW",
            "remarks": null,
            "whereClause": "invoicenum in (select invoicenum from invoice where invoice.scheduleid = :scheduleid and invoice.orgid = :orgid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVOICELINEVIEW",
            "source": "SERVRECTRANS",
            "remarks": "Relationship to the InvoiceLine table, used to find all invoice line records for a given purchase order line. (invoiceline.ponum = poline.ponum and invoiceline.siteid = poline.siteid and  invoiceline.polinenum = poline.polinenum). The resulting set will contain zero or more objects.",
            "whereClause": "polinenum = :polinenum and ponum = :ponum and positeid = :positeid",
            "cardinality": null
        },
        {
            "name": "INVOICELINEVIEW1",
            "source": "SERVRECTRANS",
            "remarks": "Relationship to the InvoiceLine table, used to find all invoice line records for a given purchase order line. (invoiceline.ponum = poline.ponum and invoiceline.siteid = poline.siteid and  invoiceline.polinenum = poline.polinenum). The resulting set will contain zero or more objects.",
            "whereClause": "polinenum = :polinenum and ponum = :ponum and positeid = :positeid and (invoicenum=:invoicenum or invoicenum is null)",
            "cardinality": null
        },
        {
            "name": "INVOICELINEFORCONTRACT",
            "source": "SFWVIEW",
            "remarks": "Relationship to the InvoiceLine table, used to find all invoiceline for a given contract. (invoiceline.contractrefnum = sfwview.contractnum). The resulting set will contain one or more objects.",
            "whereClause": "contractrefnum = :contractnum",
            "cardinality": "UNDEFINED"
        }
    ]
}