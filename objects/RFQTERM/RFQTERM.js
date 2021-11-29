mos = {
    "objectName": "RFQTERM",
    "className": "psdi.app.rfq.RFQTermSet",
    "description": "RFQ Terms and Conditions",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "RFQTERMID",
    "primaryKeyColumns": [
        "RFQTERMID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "RFQTERM",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "RFQTERM",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "RFQ",
            "targetObject": "RFQTERM",
            "parentKeys": "SITEID, RFQNUM",
            "targetKeys": "SITEID, RFQNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "RFQ",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "RFQTERM",
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
            "remarks": "Request for Quotation Number",
            "sameAsAttribute": "RFQNUM",
            "sameAsObject": "RFQ"
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
            "remarks": "Long Description for RFQ Term Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CANEDIT",
            "required": true,
            "persistent": true,
            "title": "Can Edit",
            "remarks": "Can this term be edited?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RFQTERMID",
            "required": true,
            "persistent": true,
            "title": "RFQTERMID",
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
            "remarks": "Relationship to the Term table, used to find a term record for a given RFQ term. (term.termid = rfqterm.termid and term.orgid = rfqterm.orgid). The resulting set will contain zero or one object.",
            "whereClause": "termid = :termid and orgid = :orgid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "RFQTERM",
            "source": "RFQ",
            "remarks": "Relationship to the RFQTERM table, used to find all rfq term records for a given request for quotation. (rfqterm.rfqnum = rfq.rfqnum). The resulting set will contain zero or more objects.",
            "whereClause": "rfqnum=:rfqnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ]
}