mos = {
    "objectName": "SLACONTRACT",
    "className": "psdi.app.sla.SLAContractSet",
    "description": "The middle table between sla and contract",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "SLACONTRACTID",
    "primaryKeyColumns": [
        "SLANUM",
        "CONTRACTNUM"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "SLA",
            "targetObject": "SLACONTRACT",
            "parentKeys": "SLANUM",
            "targetKeys": "SLANUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Link to Contracts",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "SLACONTRACTID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SLANUM",
            "required": true,
            "persistent": true,
            "title": "SLA",
            "remarks": "SLA ID",
            "sameAsAttribute": "SLANUM",
            "sameAsObject": "SLA"
        },
        {
            "attributeName": "CONTRACTNUM",
            "required": true,
            "persistent": true,
            "title": "Contract",
            "remarks": "Identifies the contract that you want to associate to this service level agreement (SLA). You can associate only SLAs of type VENDOR (or a synonym of vendor) to a contract. Once you associate a contract to a vendor SLA, you cannot change the SLA to any other type unless you first remove the contract. Click the Detail Menu to select a contract.",
            "sameAsAttribute": "CONTRACTNUM",
            "sameAsObject": "CONTRACT"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "CONTRACT",
            "target": "CONTRACT",
            "remarks": "Define slacontract to contract relationship",
            "whereClause": "contractnum =:contractnum and status not in (select value from synonymdomain where domainid = 'CONTRACTSTATUS' and maxvalue in ('REVISE', 'PNDREV') )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SLA",
            "target": "SLA",
            "remarks": "Relationship to the SLA table, used to find all slas for a given sla contract. (slacontract.slanum = sla.slanum). The resulting set will contain zero or one object.",
            "whereClause": "slanum=:slanum",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "SLACONTRACT",
            "source": "LABORVIEW",
            "remarks": "Relationship to the SLAContract table, used to find all slacontracts for a given labor contract. (laborview.contractnum = slacontract.contractnum). The resulting set will contain zero or more object.",
            "whereClause": "contractnum=:contractnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SLACONTRACT",
            "source": "LEASEVIEW",
            "remarks": "Relationship to the SLAContract table, used to find all slacontracts for a given lease contract. (leaseview.contractid = slacontract.contractid). The resulting set will contain zero or more object.",
            "whereClause": "contractnum=:contractnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SLACONTRACT",
            "source": "MASTERVIEW",
            "remarks": "Relationship to the SLAContract table, used to find all slacontracts for a given purchase contract. (masterview.contractid = slacontract.contractid). The resulting set will contain zero or more object.",
            "whereClause": "contractnum=:contractnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SLACONTRACT",
            "source": "PURCHVIEW",
            "remarks": "Relationship to the SLAContract table, used to find all slacontracts for a given purchase contract. (purchview.contractid = slacontract.contractid). The resulting set will contain zero or more object.",
            "whereClause": "contractnum=:contractnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SLACONTRACT",
            "source": "SFWVIEW",
            "remarks": "Relationship to the SLAContract table, used to find all slacontracts for a given software contract. (sfwview.contractid = slacontract.contractid). The resulting set will contain zero or more object.",
            "whereClause": "contractnum=:contractnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTRECORDS",
            "source": "SLA",
            "remarks": "Relationship to slacontract, used to bridge to the contracts asscoiated with an sla",
            "whereClause": "slanum = :slanum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SLACONTRACT",
            "source": "WARRANTYVIEW",
            "remarks": "Relationship to the SLAContract table, used to find all slacontracts for a given purchase contract. (warrantyview.contractnum = slacontract.contractnum). The resulting set will contain zero or more object.",
            "whereClause": "contractnum=:contractnum",
            "cardinality": "UNDEFINED"
        }
    ]
}