mos = {
    "objectName": "CONTRACTAUTH",
    "className": "psdi.app.contract.ContractAuthSet",
    "description": "Contract Authorization table.",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "CONTRACTAUTHID",
    "primaryKeyColumns": [
        "CONTRACTNUM",
        "REVISIONNUM",
        "ORGID",
        "AUTHORGID",
        "AUTHSITEID",
        "VENDOR"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ADDRESS",
            "targetObject": "CONTRACTAUTH",
            "parentKeys": "ORGID, ADDRESSCODE",
            "targetKeys": "AUTHORGID, BILLTO",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 2",
            "longDescription": null
        },
        {
            "objectName": "ADDRESS",
            "targetObject": "CONTRACTAUTH",
            "parentKeys": "ORGID, ADDRESSCODE",
            "targetKeys": "ORGID, BILLTO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Bill To Address",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "CONTRACTAUTH",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "AUTHORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor on Contract Authorization Organization",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "CONTRACTAUTH",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor on Contract Authorization",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "CONTRACTAUTH",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, AUTHORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 6",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "CONTRACTAUTH",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "CONTRACTAUTH",
            "parentKeys": "ORGID",
            "targetKeys": "AUTHORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Authorized Organization",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "CONTRACTAUTH",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "CONTRACTAUTH",
            "parentKeys": "PERSONID",
            "targetKeys": "BILLTOATTN",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Bill to Attention",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "CONTRACTAUTH",
            "parentKeys": "SITEID",
            "targetKeys": "AUTHSITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site Authorization",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "CONTRACTNUM",
            "required": true,
            "persistent": true,
            "title": "Contract",
            "remarks": "Unique ID Number for the current contract.",
            "sameAsAttribute": "CONTRACTNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "AUTHORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization identifier for the organization that is authorized to use the contract.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "AUTHSITEID",
            "required": true,
            "persistent": true,
            "title": "Site",
            "remarks": "Site identifier for the site that is authorized to use the contract",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "VENDOR",
            "required": true,
            "persistent": true,
            "title": "Vendor",
            "remarks": "Vendor associated with an authorized site for this contract.",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "BILLTO",
            "required": false,
            "persistent": true,
            "title": "Bill To",
            "remarks": "Bill To Code.",
            "sameAsAttribute": "ADDRESSCODE",
            "sameAsObject": "ADDRESS"
        },
        {
            "attributeName": "BILLTOATTN",
            "required": false,
            "persistent": true,
            "title": "Attention",
            "remarks": "Bill To Attention.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CONTRACTAUTHID",
            "required": true,
            "persistent": true,
            "title": "ContractAuth ID",
            "remarks": "Unique identifier for every ContractAuth record.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization identifier.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "REVISIONNUM",
            "required": false,
            "persistent": true,
            "title": "Revision",
            "remarks": "Revision number of the contract.",
            "sameAsAttribute": "REVISIONNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "ISDEFAULT",
            "required": true,
            "persistent": true,
            "title": "Default",
            "remarks": "Checking this box indicates this is the default vendor.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONTRACTID",
            "required": true,
            "persistent": true,
            "title": "Contract ID",
            "remarks": "Contract Identifier",
            "sameAsAttribute": "CONTRACTID",
            "sameAsObject": "CONTRACT"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "BILLTO",
            "target": "ADDRESS",
            "remarks": "Relationship to the Address table, used to find all Address records for a given ContractAuth.(contractauth.billto=address.addresscode). The resulting set will contain one record.",
            "whereClause": "addresscode = :billto and orgid=:authorgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMPANY",
            "target": "COMPANIES",
            "remarks": "Relationship to the Organization table, used to find all Company records for a given ContractAuth. (contractauth.vendor=companies.company). The resulting set will contain one record.",
            "whereClause": "company=:vendor and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACT",
            "target": "CONTRACT",
            "remarks": "Relationship to the Contract table, used to find a contract record for a given contract number (contract.contractnum=contractauth.contractnum and contract.revisionnum=contractauth.revisionnum and contract.orgid=contractauth.orgid). The resulting set will contain zero or one object.",
            "whereClause": "contractnum=:contractnum and revisionnum=:revisionnum and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ORGANIZATION",
            "target": "ORGANIZATION",
            "remarks": "Relationship to the Organization table, used to find all Organization records for a given ContractAuth. (contractauth.orgid=organization.orgid). The resulting set will contain one or more records.",
            "whereClause": "orgid=:authorgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "BILLTOATTN",
            "target": "PERSON",
            "remarks": "Relationship to the Labor table, used to find all Labor records for a given ContractAuth. (contractauth.billtoattn=labor.laborcode). The resulting set will contain one record.",
            "whereClause": "personid=:billtoattn",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SITE",
            "target": "SITE",
            "remarks": "Relationship to the Site table, used to find all Site records for a given ContractAuth. (contractauth.siteid=site.siteid). The resulting set will contain one or more records.",
            "whereClause": "siteid=:authsiteid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "AUTHDEFAULT",
            "source": "CONTRACT",
            "remarks": "Relationship to the Contract table, used to find a contract record for a given contract number (contract.contractnum=contractauth.contractnum and contract.revisionnum=contractauth.revisionnum and contractauth.isdefault=:yes and contract.orgid=contractauth.orgid). The resulting set will contain zero or one record.",
            "whereClause": "contractnum=:contractnum and revisionnum=:revisionnum and isdefault=:yes and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTAUTH",
            "source": "CONTRACT",
            "remarks": "Relationship to the ContractAuth table used to find all ContractAuth for a given Contract",
            "whereClause": "contractnum=:contractnum and revisionnum=:revisionnum and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTAUTH",
            "source": "CREATERELINPUT",
            "remarks": "Relationship to the ContractAuth table, used to find all ContractAuth records for a given site and org. (createrelinput.orgid=contractauth.orgid and createrelinput.siteid=contractauth.authsiteid)",
            "whereClause": "contractnum=:contractnum and revisionnum=:revisionnum and authsiteid=:siteid and authorgid=:orgid and isdefault=:yes",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTAUTH",
            "source": "LEASEVIEW",
            "remarks": "Relationship to the ContractAuth table, used to find all ContractAuth records for a given lease contract. (contractauth.contractnum=leaseview.contractnum). The resulting set will contain one or more records.",
            "whereClause": "contractnum = :contractnum and revisionnum = :revisionnum and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTAUTH",
            "source": "MASTERVIEW",
            "remarks": "Relationship to the ContractAuth table, used to find all ContractAuth records for a given master contract. (contractauth.contractnum=masterview.contractnum). The resulting set will contain one or more records.",
            "whereClause": "contractnum = :contractnum and revisionnum = :revisionnum and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTAUTH",
            "source": "PURCHVIEW",
            "remarks": "Relationship to the ContractAuth table, used to find all ContractAuth records for a given purchase contract. (contractauth.contractnum=purchview.contractnum). The resulting set will contain one or more records.",
            "whereClause": "contractnum = :contractnum and revisionnum = :revisionnum and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTAUTH",
            "source": "SFWVIEW",
            "remarks": "Relationship to the ContractAuth table, used to find all ContractAuth records for a given software contract. (contractauth.contractnum=sfwview.contractnum). The resulting set will contain one or more records.",
            "whereClause": "contractnum = :contractnum and revisionnum = :revisionnum and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTAUTH",
            "source": "WARRANTYVIEW",
            "remarks": "Relationship to the ContractAuth table, used to find all ContractAuth records for a given warranty contract. (contractauth.contractnum=warrantyview.contractnum). The resulting set will contain one or more records.",
            "whereClause": "contractnum = :contractnum and revisionnum = :revisionnum and orgid = :orgid",
            "cardinality": "UNDEFINED"
        }
    ]
}