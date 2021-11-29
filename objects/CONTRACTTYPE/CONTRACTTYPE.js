mos = {
    "objectName": "CONTRACTTYPE",
    "className": "psdi.app.contract.ContractTypeSet",
    "description": "Contract Type Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "CONTRACTTYPEUID",
    "primaryKeyColumns": [
        "ORGID",
        "CONTRACTTYPEID"
    ],
    "logicalRelationships": [
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
            "objectName": "CONTRACTTYPE",
            "targetObject": "PROPERTYDEFAULT",
            "parentKeys": "ORGID, CONTRACTTYPEID",
            "targetKeys": "ORGID, CONTRACTTYPEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract Type",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "ORGANIZATION",
            "targetObject": "CONTRACTTYPE",
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
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Description of the contract type",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXCONTRACTTYPE",
            "required": true,
            "persistent": true,
            "title": "Internal Contract Type",
            "remarks": "Internal contract type. Same as value list CONTRACTTYPE.",
            "sameAsAttribute": "MAXVALUE",
            "sameAsObject": "SYNONYMDOMAIN"
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
            "attributeName": "CONTRACTTYPEUID",
            "required": true,
            "persistent": true,
            "title": "CONTRACTTYPEUID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONTENTUID",
            "required": true,
            "persistent": true,
            "title": "CONTENTUID",
            "remarks": "Content Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "CONTRACTTYPETERM",
            "target": "CONTRACTTYPETERM",
            "remarks": "Relationship to the ContractTypeTerm table, used to find contract type term records for a given contract type and organization. (contracttypeterm.contracttypeid = contracttype.contracttypeid and contracttypeterm.orgid = contracttype.orgid). The resulting set will contain more than one object.",
            "whereClause": "contracttypeid = :contracttypeid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PROPERTYASSOC",
            "target": "PROPERTYASSOC",
            "remarks": "Relationship to the PropertyAssoc table, used to find property associate records for a given internal contract type. (propertyassoc.maxcontracttype = contracttype.maxcontracttype). The resulting set will contain more than one object.",
            "whereClause": "maxcontracttype = :maxcontracttype",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PROPERTYDEFAULT",
            "target": "PROPERTYDEFAULT",
            "remarks": "Relationship to the PropertyDefault table, used to find property default records for a given organization and contract type. (propertydefault.orgid = contracttype.orgid and propertydefault.contracttypeid = contracttype.contracttypeid). The resulting set will contain more than one object.",
            "whereClause": "contracttypeid = :contracttypeid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PROPERTYINTERNAL",
            "target": "PROPERTYDEFAULT",
            "remarks": "Relationship to the PropertyDefault table, used to find property default records for a given organization and internal contract type. (propertydefault.orgid = contracttype.orgid and propertydefault.contracttypeid = contracttype.maxcontracttype). The resulting set will contain more than one object.",
            "whereClause": "contracttypeid = :maxcontracttype and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PROPERTYINPUT",
            "target": "PROPERTYINPUT",
            "remarks": "Relationship to the non-persistent PropertyInput table. (No where clause). The resulting set will contain zero objects.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "CONTRACTTYPE",
            "source": "CONTRACTTYPETERM",
            "remarks": "Relationship to the ContractType table, used to find contract type records for a given contract type and organization. (contracttypeterm.contracttypeid = contracttype.contracttypeid and contracttypeterm.orgid = contracttype.orgid). The resulting set will contain zero or one object.",
            "whereClause": "contracttypeid = :contracttypeid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTTYPE",
            "source": "ORGANIZATION",
            "remarks": null,
            "whereClause": "orgid=:orgid",
            "cardinality": "UNDEFINED"
        }
    ]
}