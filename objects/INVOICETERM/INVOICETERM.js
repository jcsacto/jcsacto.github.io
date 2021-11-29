mos = {
    "objectName": "INVOICETERM",
    "className": "psdi.app.invoice.InvoiceTermSet",
    "description": "Invoice Terms and Conditions",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "INVOICETERMID",
    "primaryKeyColumns": [
        "INVOICETERMID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
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
            "objectName": "LANGUAGE",
            "targetObject": "INVOICETERM",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "INVOICETERM",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "INVOICETERM",
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
            "sameAsAttribute": "INVOICENUM",
            "sameAsObject": "INVOICE"
        },
        {
            "attributeName": "SEQNUM",
            "required": false,
            "persistent": true,
            "title": "Sequence",
            "remarks": "Sequence the terms logically for printing purposes",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TERMID",
            "required": false,
            "persistent": true,
            "title": "Term",
            "remarks": "Term ID is the unique key used to identify the term or group",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Invoice Term Description",
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
            "remarks": "Long Description for Invoice Term Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CANEDIT",
            "required": true,
            "persistent": true,
            "title": "Can Edit",
            "remarks": "Can this term be edited?  Set to N when the term is a default or from a contract.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INVOICETERMID",
            "required": true,
            "persistent": true,
            "title": "INVOICETERMID",
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
            "name": "TERM",
            "target": "TERM",
            "remarks": "Relationship to the Term table, used to find a term record for a given INVOICE term. (term.termid = invoiceterm.termid and term.orgid = invoiceterm.orgid). The resulting set will contain zero or one object.",
            "whereClause": "termid = :termid and orgid = :orgid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "INVOICETERM",
            "source": "INVOICE",
            "remarks": "Relationship to the INVOICETERM table, used to find all invoice term records for a given invoice. (invoiceterm.invoicenum = invoice.invoicenum). The resulting set will contain zero or more objects.",
            "whereClause": "invoicenum=:invoicenum and siteid=:siteid",
            "cardinality": "MULTIPLE"
        }
    ]
}