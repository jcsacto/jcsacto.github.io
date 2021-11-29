mos = {
    "objectName": "CONTRACTTERM",
    "className": "psdi.app.contract.ContractTermSet",
    "description": "Contract Terms",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "CONTRACTTERMID",
    "primaryKeyColumns": [
        "CONTRACTTERMID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "CONTRACT",
            "targetObject": "CONTRACTTERM",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "CONTRACTTERM",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "CONTRACTTERM",
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
            "attributeName": "CONTRACTNUM",
            "required": true,
            "persistent": true,
            "title": "Contract",
            "remarks": "Contract Number",
            "sameAsAttribute": "CONTRACTNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "SEQNUM",
            "required": false,
            "persistent": true,
            "title": "Sequence",
            "remarks": "Sequence the terms for printing purposes.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TERMID",
            "required": false,
            "persistent": true,
            "title": "Term",
            "remarks": "A written description identifying the term.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "A written description defining the term.",
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
            "remarks": "Long Description for Contract Term Description",
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
            "attributeName": "SENDTOVENDOR",
            "required": true,
            "persistent": true,
            "title": "Send to Vendor",
            "remarks": "Selecting this feature intiates this term being sent to the vendor on the contract.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONTRACTTERMID",
            "required": true,
            "persistent": true,
            "title": "CONTRACTTERMID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REVISIONNUM",
            "required": true,
            "persistent": true,
            "title": "Revision",
            "remarks": "Revision number of the contract. This number indicates the number of times the contract has been revised. A contract that has been created and not revised will show a number of 0.",
            "sameAsAttribute": "REVISIONNUM",
            "sameAsObject": "CONTRACT"
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
            "remarks": "Relationship to the Term table, used to find a term record for a given CONTRACT term. (term.termid = contractterm.termid and term.orgid = contractterm.orgid). The resulting set will contain zero or one object.",
            "whereClause": "termid = :termid and orgid = :orgid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "CONTRACTTERM",
            "source": "CONTRACT",
            "remarks": "Relationship to the CONTRACTTERM table, used to find all contract term records for a given contract. (contractterm.contractnum = contract.contractnum and contractterm.orgid = contract.orgid). The resulting set will contain zero or more objects.",
            "whereClause": "contractnum = :contractnum and revisionnum=:revisionnum and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTTERM",
            "source": "LABORVIEW",
            "remarks": "Relationship to the CONTRACTTERM table, used to find all contract term records for a given contract. (contractterm.contractnum = contract.contractnum). The resulting set will contain zero or more objects.",
            "whereClause": "contractnum = :contractnum and revisionnum = :revisionnum and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTTERM",
            "source": "LEASEVIEW",
            "remarks": "Relationship to the CONTRACTTERM table, used to find all contract term records for a given contract. (contractterm.contractnum = contract.contractnum). The resulting set will contain zero or more objects.",
            "whereClause": "contractnum = :contractnum and revisionnum = :revisionnum and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTTERM",
            "source": "PURCHVIEW",
            "remarks": "Relationship to the CONTRACTTERM table, used to find all contract term records for a given contract. (contractterm.contractnum = contract.contractnum). The resulting set will contain zero or more objects.",
            "whereClause": "contractnum = :contractnum and revisionnum = :revisionnum and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTTERM",
            "source": "SFWVIEW",
            "remarks": "Relationship to the ContractTerm table, used to find all contract terms for a given software contract. (sfwview.contractnum=contractterm.contractnum and sfwview.revisionnum=contractterm.revisionnum and sfwview.orgid=contractterm.orgid)",
            "whereClause": "contractnum = :contractnum and revisionnum =:revisionnum and orgid =:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTTERM",
            "source": "WARRANTYVIEW",
            "remarks": "Relationship to the CONTRACTTERM table, used to find all contract term records for a given contract. (contractterm.contractnum = contract.contractnum). The resulting set will contain zero or more objects.",
            "whereClause": "contractnum = :contractnum and revisionnum = :revisionnum and orgid = :orgid",
            "cardinality": "UNDEFINED"
        }
    ]
}