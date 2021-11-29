mos = {
    "objectName": "CONTRACTSTATUS",
    "className": "psdi.app.contract.ContractStatusSet",
    "description": "Contract Status table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "CONTRACTSTATUSID",
    "primaryKeyColumns": [
        "CONTRACTSTATUSID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "CONTRACT",
            "targetObject": "CONTRACTSTATUS",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Status History",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "CONTRACTSTATUS",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "CONTRACTSTATUS",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "CHANGEBY",
            "required": true,
            "persistent": true,
            "title": "Changed By",
            "remarks": "The login name of the person who last changed the contract.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Status Date",
            "remarks": "The date and time the status changed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": true,
            "title": "Memo",
            "remarks": "A note taken during the time of the status chnge.",
            "sameAsAttribute": "MEMO",
            "sameAsObject": "WFTRANSACTION"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization ",
            "remarks": "Organization Identifier.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "STATUS",
            "required": true,
            "persistent": true,
            "title": "Contract Status",
            "remarks": "Current status of this contract.",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "CONTRACT"
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
            "attributeName": "CONTRACTSTATUSID",
            "required": true,
            "persistent": true,
            "title": "CONTRACTSTATUSID",
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
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "CONTRACTSTATUS",
            "source": "LABORVIEW",
            "remarks": "Relationship to the ContractStatus table, used to find all contract statuses for a given contract. laborview.contractnum=contractstatus.contractnum and laborview.orgid=contractstatus.orgid)",
            "whereClause": "contractnum=:contractnum and revisionnum=:revisionnum and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTSTATUS",
            "source": "LEASEVIEW",
            "remarks": "Relationship to the ContractStatus table, used to find all contract statuses for a given contract. (leaseview.contractnum=contractstatus.contractnum and leaseview.orgid=contractstatus.orgid)",
            "whereClause": "contractnum=:contractnum and revisionnum=:revisionnum and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTSTATUS",
            "source": "MASTERVIEW",
            "remarks": "Relationship to the ContractStatus table, used to find all contract statuses for a given contract. (masterview.contractnum=contractstatus.contractnum and masterview.revisionnum=contractstatus.revisionnnum and masterview.orgid=contractstatus.orgid)",
            "whereClause": "contractnum=:contractnum and revisionnum=:revisionnum and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTSTATUS",
            "source": "PURCHVIEW",
            "remarks": "Relationship to the ContractStatus table, used to find all contract statuses for a given contract. (purchview.contractnum=contractstatus.contractnum and purchview.orgid=contractstatus.orgid)",
            "whereClause": "contractnum=:contractnum and revisionnum=:revisionnum and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTSTATUS",
            "source": "SFWVIEW",
            "remarks": "Relationship to the ContractStatus table, used to find all contract statuses for a given contract. (sfwview.contractnum=contractstatus.contractnum and sfwview.orgid=contractstatus.orgid)",
            "whereClause": "contractnum = :contractnum and revisionnum = :revisionnum and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTSTATUS",
            "source": "WARRANTYVIEW",
            "remarks": "Relationship to the ContractStatus table, used to find all contract statuses for a given contract. (purchview.contractnum=contractstatus.contractnum and warrantyview.orgid=contractstatus.orgid)",
            "whereClause": "contractnum=:contractnum and revisionnum=:revisionnum and orgid=:orgid",
            "cardinality": "UNDEFINED"
        }
    ]
}