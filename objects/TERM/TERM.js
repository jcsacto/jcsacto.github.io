mos = {
    "objectName": "TERM",
    "className": "psdi.app.po.TermSet",
    "description": "Terms and Conditions",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "TERMUID",
    "primaryKeyColumns": [
        "TERMUID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "TERM",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "TERM",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "TERMID",
            "required": true,
            "persistent": true,
            "title": "Term",
            "remarks": "Identifies the term or condition. This value must be unique for all terms.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the term or condition. To enter or view additional information, click the Long Description button.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DEFAULTPO",
            "required": true,
            "persistent": true,
            "title": "Default on PO",
            "remarks": "Specifies whether the term will appear on new POs by default. If the check box is selected, the term will appear as a default term on new POs. If the checkbox is cleared, the term will not appear by default on new POs.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TYPE",
            "required": false,
            "persistent": true,
            "title": "Type",
            "remarks": "Identifies the type of term or condition. The type is user-defined.",
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
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Long Description for Term Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CANEDIT",
            "required": true,
            "persistent": true,
            "title": "Editable",
            "remarks": "Specifies whether the term can be edited when accessed from other applications. If the check box is selected, users can edit the term when accessed from other applications. If the checkbox is cleared (the default), users cannot edit the term in other applications.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TERMUID",
            "required": true,
            "persistent": true,
            "title": "TERMUID",
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
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "TERM",
            "source": "CONTRACTTERM",
            "remarks": "Relationship to the Term table, used to find a term record for a given CONTRACT term. (term.termid = contractterm.termid and term.orgid = contractterm.orgid). The resulting set will contain zero or one object.",
            "whereClause": "termid = :termid and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TERM",
            "source": "CONTRACTTYPETERM",
            "remarks": "Relationship to the Term table, used to find a term record for a given CONTRACTTYPE term. (term.termid = contracttypeterm.termid and term.orgid = contracttypeterm.orgid). The resulting set will contain zero or one object.",
            "whereClause": "termid = :termid and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TERM",
            "source": "INVOICETERM",
            "remarks": "Relationship to the Term table, used to find a term record for a given INVOICE term. (term.termid = invoiceterm.termid and term.orgid = invoiceterm.orgid). The resulting set will contain zero or one object.",
            "whereClause": "termid = :termid and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TERM",
            "source": "ORGANIZATION",
            "remarks": "Relationship to the TERM table, used to find all term records for a given organization.",
            "whereClause": "orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TERMORG",
            "source": "ORGANIZATION",
            "remarks": "Relationship to the APPLIEDTERM table, used to find all purchase contract term records for a given contract.  The resulting set will contain zero or more objects",
            "whereClause": "orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DEFAULTPOTERM",
            "source": "PO",
            "remarks": "Relationship to the Term table, used to find all term records with isdefault flag set to true. This resulting set will contain zero or more objects.",
            "whereClause": "defaultpo=:yes and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TERM",
            "source": "POTERM",
            "remarks": "Relationship to the Term table, used to find a term record for a given PO term. (term.termid = poterm.termid and term.orgid = poterm.orgid). The resulting set will contain zero or one object.",
            "whereClause": "termid = :termid and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TERM",
            "source": "PRTERM",
            "remarks": "Relationship to the Term table, used to find a term record for a given PR term. (term.termid = prterm.termid and term.orgid = prterm.orgid). The resulting set will contain zero or one object.",
            "whereClause": "termid = :termid and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TERM",
            "source": "RFQTERM",
            "remarks": "Relationship to the Term table, used to find a term record for a given RFQ term. (term.termid = rfqterm.termid and term.orgid = rfqterm.orgid). The resulting set will contain zero or one object.",
            "whereClause": "termid = :termid and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TERM",
            "source": "RFQVENDORTERM",
            "remarks": "Relationship to the Term table, used to find a term record for a given RFQVENDOR term. (term.termid = rfqvendorterm.termid and term.orgid = rfqvendorterm.orgid). The resulting set will contain zero or one object.",
            "whereClause": "termid = :termid and orgid = :orgid",
            "cardinality": "UNDEFINED"
        }
    ]
}