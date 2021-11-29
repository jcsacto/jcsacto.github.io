mos = {
    "objectName": "POTERM",
    "className": "psdi.app.po.POTermSet",
    "description": "PO Terms and Conditions",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "POTERMID",
    "primaryKeyColumns": [
        "POTERMID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "POTERM",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "POTERM",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "POTERM",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "SITEID, PONUM, REVISIONNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PO Terms",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "POTERM",
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
            "attributeName": "PONUM",
            "required": true,
            "persistent": true,
            "title": "PO",
            "remarks": "Purchase Order Number",
            "sameAsAttribute": "PONUM",
            "sameAsObject": "PO"
        },
        {
            "attributeName": "SEQNUM",
            "required": false,
            "persistent": true,
            "title": "Sequence",
            "remarks": "Sequences the terms logically for printing purposes.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TERMID",
            "required": false,
            "persistent": true,
            "title": "Term",
            "remarks": "Identifies the term or condition being referenced.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the condition or term. To enter or view additional information, click the Long Description button.",
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
            "remarks": "Long Description for PO Term Description",
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
            "attributeName": "SENDTOVENDOR",
            "required": true,
            "persistent": true,
            "title": "Send to Vendor",
            "remarks": "Specifies whether this record will be sent to the vendor. The record may be included in a detail report, or sent electronically for e-commerce transactions. If the check box is selected, the record is sent to the vendor. If the check box is cleared, the record is not sent.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "POTERMID",
            "required": true,
            "persistent": true,
            "title": "POTERMID",
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
        },
        {
            "attributeName": "REVISIONNUM",
            "required": true,
            "persistent": true,
            "title": "Revision",
            "remarks": "Revision number of the purchase order. Indicates how many times a purchase order has been revised.",
            "sameAsAttribute": "REVISIONNUM",
            "sameAsObject": "CONTRACT"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "TERM",
            "target": "TERM",
            "remarks": "Relationship to the Term table, used to find a term record for a given PO term. (term.termid = poterm.termid and term.orgid = poterm.orgid). The resulting set will contain zero or one object.",
            "whereClause": "termid = :termid and orgid = :orgid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "INVOICEPOTERM",
            "source": "INVOICE",
            "remarks": "Relationship to the POTERM table, used to find all po term records for a given purchase order. (poterm.ponum = invoice.ponum). The resulting set will contain zero or more objects.",
            "whereClause": "ponum=:ponum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POTERM",
            "source": "PO",
            "remarks": "Relationship to the POTERM table, used to find all po term records for a given purchase order. (poline.ponum = po.ponum). The resulting set will contain zero or more objects.",
            "whereClause": "ponum=:ponum and revisionnum=:revisionnum and siteid=:siteid",
            "cardinality": "MULTIPLE"
        }
    ]
}