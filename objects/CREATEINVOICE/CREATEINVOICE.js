mos = {
    "objectName": "CREATEINVOICE",
    "className": "psdi.app.labor.virtual.CreateInvoiceSet",
    "description": "Create Invoice from labor transaction.",
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
            "required": false,
            "persistent": false,
            "title": "Organization",
            "remarks": "Organization identifier.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": false,
            "title": "Site",
            "remarks": "Site identifier.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "INVOICENUM",
            "required": false,
            "persistent": false,
            "title": "Invoice",
            "remarks": "Invoice number.",
            "sameAsAttribute": "INVOICENUM",
            "sameAsObject": "INVOICE"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "Invoice description",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "PR"
        },
        {
            "attributeName": "VENDOR",
            "required": false,
            "persistent": false,
            "title": "Vendor",
            "remarks": "Company",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "VENDORDESC",
            "required": false,
            "persistent": false,
            "title": "Vendor Description",
            "remarks": "Company description",
            "sameAsAttribute": "NAME",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "SUMMARIZEBY",
            "required": true,
            "persistent": false,
            "title": "Consolidate By Work Order",
            "remarks": "Summarize by.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "INVOICEVENDOR",
            "target": "COMPANIES",
            "remarks": null,
            "whereClause": "company = :vendor and orgid = :orgid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "CREATEINVOICE",
            "source": "LABTRANS",
            "remarks": null,
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}