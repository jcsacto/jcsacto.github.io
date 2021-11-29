mos = {
    "objectName": "CONTRACTSWLIC",
    "className": "psdi.app.contract.software.ContractSWLicSet",
    "description": "Software License table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "CONTRACTSWLICID",
    "primaryKeyColumns": [
        "CONTRACTNUM",
        "REVISIONNUM",
        "ORGID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "CONTRACT",
            "targetObject": "CONTRACTSWLIC",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "CONTRACTSWLIC",
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
            "attributeName": "CONTRACTSWLICID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
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
            "attributeName": "REVISIONNUM",
            "required": true,
            "persistent": true,
            "title": "Revision",
            "remarks": "Revision Number",
            "sameAsAttribute": "REVISIONNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "OrgID",
            "remarks": "Organization identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "INCLUDESMAINT",
            "required": true,
            "persistent": true,
            "title": "Includes Maintenance",
            "remarks": "Includes Maintenance",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TRANSFERABLE",
            "required": true,
            "persistent": true,
            "title": "Transferable",
            "remarks": "Can this software License be transferred to another user.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLOBALUSAGE",
            "required": true,
            "persistent": true,
            "title": "Global Usage",
            "remarks": "Global Usage",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "METRIC",
            "required": false,
            "persistent": true,
            "title": "Metric",
            "remarks": "How the usage of the software is measured.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAINTFEE",
            "required": false,
            "persistent": true,
            "title": "Maintenance Fee",
            "remarks": "Maintenance Fee",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LICENSEKEYSUSED",
            "required": true,
            "persistent": true,
            "title": "License Keys Used",
            "remarks": "Are keys used to track this license.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "PROPERTYDEFAULT",
            "target": "PROPERTYDEFAULT",
            "remarks": "Relationship to the PropertyDefault table, used to find the PropertyDefault records whose propertyid match that of the PurchView. (propertydefault.contracttypeid=SWLICENSE). The resulting set will contain zero or more objects.",
            "whereClause": "contracttypeid in ( select value from synonymdomain where domainid='CONTRACTTYPE' and maxvalue ='SWLICENSE') and orgid=:orgid and propertyid not in (select propertyid from propertydefault where contracttypeid in ( select value from synonymdomain where domainid='CONTRACTTYPE' and maxvalue='PURCHASE'))",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "CONTRACTSWLIC",
            "source": "PURCHVIEW",
            "remarks": "Relationship to the ContractSWLic table, used to find all ContractSWLic records for a given purchase contract. (ContractSWLic.contractnum=ContractSWLic.contractnum). The resulting set will contain one or more records.",
            "whereClause": "contractnum = :contractnum and revisionnum = :revisionnum and orgid = :orgid",
            "cardinality": "UNDEFINED"
        }
    ]
}