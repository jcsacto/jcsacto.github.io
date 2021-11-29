mos = {
    "objectName": "REVINVINPUT",
    "className": "psdi.app.invoice.virtual.RevInvoiceInputSet",
    "description": "Non-persistent table for creating reverse invce.",
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
            "attributeName": "INVOICENUM",
            "required": true,
            "persistent": false,
            "title": "Invoice",
            "remarks": "Reverse Invoice Number",
            "sameAsAttribute": "INVOICENUM",
            "sameAsObject": "INVOICE"
        },
        {
            "attributeName": "REVREASON",
            "required": true,
            "persistent": false,
            "title": "Reversal Reason",
            "remarks": "Reason to create reverse invoice.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLPOSTDATE",
            "required": true,
            "persistent": false,
            "title": "G/L Posting Date",
            "remarks": "G/L Posting Date used to determine Financial Period",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUS",
            "required": true,
            "persistent": false,
            "title": "Status",
            "remarks": "The status of the reverse invoice.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": false,
            "title": "Organization",
            "remarks": "Constraint Identifier of the organization",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": false,
            "title": "Site",
            "remarks": "The unique identifier of a site",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "Short Description about the invoice.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "REVINVINPUT",
            "source": "INVOICE",
            "remarks": "Relationship to the non-persistent RevInvInput table. (No where clause). The resulting set will contain zero objects.",
            "whereClause": null,
            "cardinality": null
        }
    ]
}