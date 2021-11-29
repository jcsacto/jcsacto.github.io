mos = {
    "objectName": "PRTERM",
    "className": "psdi.app.pr.PRTermSet",
    "description": "PR Terms",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "PRTERMID",
    "primaryKeyColumns": [
        "PRTERMID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "PRTERM",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "PRTERM",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PR",
            "targetObject": "PRTERM",
            "parentKeys": "SITEID, PRNUM",
            "targetKeys": "SITEID, PRNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PR Terms",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PRTERM",
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
            "attributeName": "PRNUM",
            "required": true,
            "persistent": true,
            "title": "PR",
            "remarks": "Purchase Requisition Number",
            "sameAsAttribute": "PRNUM",
            "sameAsObject": "PR"
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
            "remarks": "Long Description for PR Term Description",
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
            "remarks": "Specifies whether this record should be sent to the vendor. If the check box is selected, the record is sent to the vendor. If the check box is cleared, the record is not sent.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PRTERMID",
            "required": true,
            "persistent": true,
            "title": "PRTERMID",
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
            "remarks": "Relationship to the Term table, used to find a term record for a given PR term. (term.termid = prterm.termid and term.orgid = prterm.orgid). The resulting set will contain zero or one object.",
            "whereClause": "termid = :termid and orgid = :orgid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "PRTERM",
            "source": "PR",
            "remarks": "Relationship to the PRTERM table, used to find all pr term records for a given purchase req. (prterm.prnum = pr.prnum). The resulting set will contain zero or more objects.",
            "whereClause": "prnum=:prnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ]
}