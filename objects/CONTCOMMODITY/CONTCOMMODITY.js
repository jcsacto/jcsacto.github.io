mos = {
    "objectName": "CONTCOMMODITY",
    "className": "psdi.app.contract.ContCommoditySet",
    "description": "Contract Commodity table.",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "CONTCOMMODITYID",
    "primaryKeyColumns": [
        "CONTCOMMODITYID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "COMMODITIES",
            "targetObject": "CONTCOMMODITY",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITY, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "CONTCOMMODITY",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "PARENT, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Parent Commodity",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "CONTCOMMODITY",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "CONTCOMMODITY",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "CONTCOMMODITY",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item Set",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "CONTRACTNUM",
            "required": false,
            "persistent": true,
            "title": "Contract",
            "remarks": "Contract Number to which the Commodity has been associated with.",
            "sameAsAttribute": "CONTRACTNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "COMMODITY",
            "required": true,
            "persistent": true,
            "title": "Commodity Code",
            "remarks": "Commodity Identifier",
            "sameAsAttribute": "COMMODITY",
            "sameAsObject": "COMMODITIES"
        },
        {
            "attributeName": "ITEMSETID",
            "required": false,
            "persistent": true,
            "title": "Item Set",
            "remarks": "Item Set Identifier",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS"
        },
        {
            "attributeName": "PARENT",
            "required": false,
            "persistent": true,
            "title": "Parent",
            "remarks": "Parent of this commodity.",
            "sameAsAttribute": "COMMODITY",
            "sameAsObject": "COMMODITIES"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "CONTCOMMODITYID",
            "required": true,
            "persistent": true,
            "title": "CONTCOMMODITYID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REVISIONNUM",
            "required": true,
            "persistent": true,
            "title": "Revision",
            "remarks": "Revision number of the contract.",
            "sameAsAttribute": "REVISIONNUM",
            "sameAsObject": "CONTRACT"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "COMM_CONTCOMGRP",
            "target": "COMMODITIES",
            "remarks": null,
            "whereClause": "commodity = :commodity and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMM_CONTCONCON",
            "target": "COMMODITIES",
            "remarks": null,
            "whereClause": "commodity = :commodity and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMM_CONTPARENT",
            "target": "CONTCOMMODITY",
            "remarks": null,
            "whereClause": "contractnum = :contractnum and revisionnum=:revisionnum and orgid = :orgid and parent = :commodity and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACT",
            "target": "CONTRACT",
            "remarks": "Relationship to the CONTRACT table, used to find the contract records. The resulting set will contain one object.",
            "whereClause": "contractnum=:contractnum and revisionnum=:revisionnum and orgid=:orgid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "CONTCOMMODITY",
            "source": "AREASAFFECTED",
            "remarks": null,
            "whereClause": "commodity=:affectedcommodity",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTCOMMODITY",
            "source": "COMMODITIES",
            "remarks": "Relationship to the CONTCOMMODITY table, used to find the contract records. The resulting set will contain none or many  object.",
            "whereClause": "commodity = :commodity and parent=:parent and contractnum in (select contractnum from contract where contract.contractnum=contcommodity.contractnum and contract.revisionnum=contcommodity.revisionnum and contract.status in (select value from synonymdomain where domainid='CONTRACTSTATUS' and maxvalue='APPR'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTCOMMODITYGRP",
            "source": "COMMODITIES",
            "remarks": null,
            "whereClause": "((commodity=:commodity and contractnum not in (select contractnum from contcommodity where parent=:commodity)) or parent=:commodity) and contractnum in (select contractnum from contract where contract.contractnum=contcommodity.contractnum and contract.revisionnum=contcommodity.revisionnum and contract.status in (select value from synonymdomain where domainid='CONTRACTSTATUS' and maxvalue='APPR'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMM_CONTPARENT",
            "source": "CONTCOMMODITY",
            "remarks": null,
            "whereClause": "contractnum = :contractnum and revisionnum=:revisionnum and orgid = :orgid and parent = :commodity and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMM_CONTGRP",
            "source": "LEASEVIEW",
            "remarks": "Relationship to the ContCommodity table used to find all commodities that dont have a parent. (leaseview.contractnum = contcommodity.contractnum and leaseview.revisionnum=contcommodity.revisionnum and leaseview.orgid=contcommodity.orgid). The resulting set might contain one or more objects.",
            "whereClause": "contractnum = :contractnum and revisionnum=:revisionnum and orgid = :orgid and commodity in (select commodity from contcommodity where parent is null)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTCOMMODITY",
            "source": "LEASEVIEW",
            "remarks": "Relationship to the ContCommodity table, used to find all commodities for a given contract. (contcommodity.contractnum = leaseview.contractnum and contcommodity.revisionnum=leaseview.revisionnum and contcommodity.orgid=leaseview.orgid). The resulting set will contain zero or more objects.",
            "whereClause": "contractnum=:contractnum and revisionnum=:revisionnum and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMM_CONTGRP",
            "source": "MASTERVIEW",
            "remarks": "Relationship to the ContCommodity table used to find all ContCommodity records for a given contract (contractnum = :contractnum and revisionnum=:revisionnum and commoditygroup in (select commodity from commodities where parent is null))",
            "whereClause": "contractnum = :contractnum and revisionnum=:revisionnum and orgid = :orgid and commodity in (select commodity from contcommodity where parent is null)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTCOMMODITY",
            "source": "MASTERVIEW",
            "remarks": "Relationship to the ContCommodity table, used to find all commodities for a given master contract. (contcommodity.contractnum = masterview.contractnum and contcommodity.revisionnum=masterview.revisionnum). The resulting set will contain zero or more objects.",
            "whereClause": "contractnum=:contractnum and revisionnum=:revisionnum and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMM_CONTGRP",
            "source": "PURCHVIEW",
            "remarks": null,
            "whereClause": "contractnum = :contractnum and revisionnum=:revisionnum and orgid = :orgid and commodity in (select commodity from contcommodity where parent is null)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTCOMMODITY",
            "source": "PURCHVIEW",
            "remarks": "Relationship to the ContCommodity table, used to find all commodities for a given contract. (contcommodity.contractnum = purchview.contractnum and contcommodity.revisionnum=purchview.revisionnum). The resulting set will contain zero or more objects.",
            "whereClause": "contractnum=:contractnum and revisionnum=:revisionnum and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMM_CONTGRP",
            "source": "SFWVIEW",
            "remarks": "Relationship to the contcommodity table. (contcommodity.contractnum = sfwview.contractnum and contcommodity.revisionnum=sfwview.revisionnum and contcommodity.orgid = sfwview.orgid and contcommodity.commodity in (select commodity from contcommodity where parent is null)",
            "whereClause": "contractnum = :contractnum and revisionnum=:revisionnum and orgid = :orgid and commodity in (select commodity from contcommodity where parent is null)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTCOMMODITY",
            "source": "SFWVIEW",
            "remarks": "Relationship to the ContCommodity table, used to find all commodities for a given contract. (contcommodity.contractnum = sfwview.contractnum and contcommodity.revisionnum=sfwview.revisionnum). The resulting set will contain zero or more objects.",
            "whereClause": "contractnum=:contractnum and revisionnum=:revisionnum and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTCOMMODITY",
            "source": "TICKET",
            "remarks": null,
            "whereClause": "commodity=:commodity and contractnum in (select contractnum from contract where contract.contractnum=contcommodity.contractnum and contract.revisionnum=contcommodity.revisionnum and contract.status in (select value from synonymdomain where domainid='CONTRACTSTATUS' and maxvalue='APPR'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTCOMMODITYGRP",
            "source": "TICKET",
            "remarks": null,
            "whereClause": "((commodity=:commodity and contractnum not in (select contractnum from contcommodity where parent=:commodity)) or parent=:commodity) and contractnum in (select contractnum from contract where contract.contractnum=contcommodity.contractnum and contract.revisionnum=contcommodity.revisionnum and contract.status in (select value from synonymdomain where domainid='CONTRACTSTATUS' and maxvalue='APPR'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTCOMMODITY",
            "source": "TKTEMPLATE",
            "remarks": null,
            "whereClause": "commodity=:commodity and contractnum in (select contractnum from contract where contract.contractnum=contcommodity.contractnum and contract.revisionnum=contcommodity.revisionnum and contract.status in (select value from synonymdomain where domainid='CONTRACTSTATUS' and maxvalue='APPR'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTCOMMODITYGRP",
            "source": "TKTEMPLATE",
            "remarks": null,
            "whereClause": "((commodity=:commodity and contractnum not in (select contractnum from contcommodity where parent=:commodity)) or parent=:commodity) and contractnum in (select contractnum from contract where contract.contractnum=contcommodity.contractnum and contract.revisionnum=contcommodity.revisionnum and contract.status in (select value from synonymdomain where domainid='CONTRACTSTATUS' and maxvalue='APPR'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTCOMMODITY",
            "source": "WARRANTYVIEW",
            "remarks": "Relationship to the ContCommodity table, used to find all commodities for a given contract. (contcommodity.contractnum = warrantyview.contractnum and contcommodity.revisionnum=warrantyview.revisionnum). The resulting set will contain zero or more objects.",
            "whereClause": "contractnum=:contractnum and revisionnum=:revisionnum and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMM_CONTGRP",
            "source": "WARRANTYVIEW",
            "remarks": "Relationship to the ContCommodity table used to find all commodities that dont have a parent. (warrantyview.contractnum = contcommodity.contractnum and warrantyview.revisionnum=contcommodity.revisionnum and warrantyview.orgid=contcommodity.orgid). The resulting set might contain one or more objects.",
            "whereClause": "contractnum = :contractnum and revisionnum=:revisionnum and orgid = :orgid and commodity in (select commodity from contcommodity where parent is null)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTCOMMODITY",
            "source": "WORKORDER",
            "remarks": null,
            "whereClause": "commodity=:commodity and contractnum in (select contractnum from contract where contract.contractnum=contcommodity.contractnum and contract.revisionnum=contcommodity.revisionnum and contract.status in (select value from synonymdomain where domainid='CONTRACTSTATUS' and maxvalue='APPR'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTCOMMODITYGRP",
            "source": "WORKORDER",
            "remarks": null,
            "whereClause": "((commodity=:commodity and contractnum not in (select contractnum from contcommodity where parent=:commodity)) or parent=:commodity) and contractnum in (select contractnum from contract where contract.contractnum=contcommodity.contractnum and contract.revisionnum=contcommodity.revisionnum and contract.status in (select value from synonymdomain where domainid='CONTRACTSTATUS' and maxvalue='APPR'))",
            "cardinality": "UNDEFINED"
        }
    ]
}