mos = {
    "objectName": "CONTRACTTYPETERM",
    "className": "psdi.app.contract.ContractTypeTermSet",
    "description": "Contract Type Terms Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "CONTRACTTYPETERMID",
    "primaryKeyColumns": [
        "CONTRACTTYPETERMID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "CONTRACTTYPE",
            "targetObject": "CONTRACTTYPETERM",
            "parentKeys": "ORGID, CONTRACTTYPEID",
            "targetKeys": "ORGID, CONTRACTTYPEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract Type",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "CONTRACTTYPETERM",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "CONTRACTTYPETERM",
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
            "attributeName": "CONTRACTTYPEID",
            "required": true,
            "persistent": true,
            "title": "Contract Type",
            "remarks": "Identifies the contract type",
            "sameAsAttribute": "CONTRACTTYPEID",
            "sameAsObject": "CONTRACTTYPE"
        },
        {
            "attributeName": "TERMID",
            "required": false,
            "persistent": true,
            "title": "Term ",
            "remarks": "Identifies terms and conditions",
            "sameAsAttribute": "TERMID",
            "sameAsObject": "TERM"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Description of the term or condition",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Long Description for of the term",
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
            "attributeName": "CONTRACTTYPETERMID",
            "required": true,
            "persistent": true,
            "title": "CONTRACTTYPETERMID",
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
            "name": "CONTRACTTYPE",
            "target": "CONTRACTTYPE",
            "remarks": "Relationship to the ContractType table, used to find contract type records for a given contract type and organization. (contracttypeterm.contracttypeid = contracttype.contracttypeid and contracttypeterm.orgid = contracttype.orgid). The resulting set will contain zero or one object.",
            "whereClause": "contracttypeid = :contracttypeid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TERM",
            "target": "TERM",
            "remarks": "Relationship to the Term table, used to find a term record for a given CONTRACTTYPE term. (term.termid = contracttypeterm.termid and term.orgid = contracttypeterm.orgid). The resulting set will contain zero or one object.",
            "whereClause": "termid = :termid and orgid = :orgid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "CONTRACTTYPETERM",
            "source": "CONTRACTTYPE",
            "remarks": "Relationship to the ContractTypeTerm table, used to find contract type term records for a given contract type and organization. (contracttypeterm.contracttypeid = contracttype.contracttypeid and contracttypeterm.orgid = contracttype.orgid). The resulting set will contain more than one object.",
            "whereClause": "contracttypeid = :contracttypeid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTTYPETERM",
            "source": "LABORVIEW",
            "remarks": "Relationship to the ContractTypeTerm table used to find all ContractTerms for a given Contract Type (contracttypeterm.contracttypeid=laborview.contracttype and contracttypeterm.orgid=laborview.orgid)",
            "whereClause": "contracttypeid=:contracttype and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTTYPETERM",
            "source": "LEASEVIEW",
            "remarks": "Relationship to the ContractTypeTerm table used to find all ContractTerms for a given Contract Type (contracttypeterm.contracttypeid=laborview.contracttype and contracttypeterm.orgid=laborview.orgid)",
            "whereClause": "contracttypeid=:contracttype and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTTYPETERM",
            "source": "MASTERVIEW",
            "remarks": "Relationship to the ContractTypeTerm table used to find all ContractTerms for a given Contract Type (contracttypeterm.contracttypeid=masterview.contracttype and contracttypeterm.orgid=masterview.orgid)",
            "whereClause": "contracttypeid=:contracttype and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTTYPETERM",
            "source": "PURCHVIEW",
            "remarks": "Relationship to the ContractTypeTerm table used to find all ContractTerms for a given Contract Type (contracttypeterm.contracttypeid=purchview.contracttype and contracttypeterm.orgid=purchview.orgid)",
            "whereClause": "contracttypeid=:contracttype and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTTYPETERM",
            "source": "SFWVIEW",
            "remarks": "Relationship to the ContractTypeTerm table used to find all ContractTerms for a given Contract Type (contracttypeterm.contracttypeid=sfwview.contracttype and contracttypeterm.orgid=sfwview.orgid)",
            "whereClause": "contracttypeid=:contracttype and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTTYPETERM",
            "source": "WARRANTYVIEW",
            "remarks": "Relationship to the ContractTypeTerm table used to find all ContractTerms for a given Contract Type (contracttypeterm.contracttypeid=warrantyview.contracttype and contracttypeterm.orgid=warrantyview.orgid)",
            "whereClause": "contracttypeid=:contracttype and orgid=:orgid",
            "cardinality": "UNDEFINED"
        }
    ]
}