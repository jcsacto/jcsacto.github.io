mos = {
    "objectName": "COMPCOMMODITY",
    "className": "psdi.app.company.CompCommoditySet",
    "description": "Company Commodity Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "COMPCOMMODITYID",
    "primaryKeyColumns": [
        "COMPCOMMODITYID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "COMMODITIES",
            "targetObject": "COMPCOMMODITY",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITY, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "COMPCOMMODITY",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "PARENT, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Parent Commodity",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "COMPCOMMODITY",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, COMPANY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Company on Company Commodity",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "COMPCOMMODITY",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "COMPCOMMODITY",
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
            "attributeName": "COMPANY",
            "required": true,
            "persistent": true,
            "title": "Company",
            "remarks": "Unique Identifier for Company",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "COMMODITY",
            "required": true,
            "persistent": true,
            "title": "Commodity Code",
            "remarks": "Commodity",
            "sameAsAttribute": "COMMODITY",
            "sameAsObject": "COMMODITIES"
        },
        {
            "attributeName": "ITEMSETID",
            "required": false,
            "persistent": true,
            "title": "Item Set",
            "remarks": "Item Set ID",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS"
        },
        {
            "attributeName": "PARENT",
            "required": false,
            "persistent": true,
            "title": "Parent",
            "remarks": "Parent",
            "sameAsAttribute": "COMMODITY",
            "sameAsObject": "COMMODITIES"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization ID",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "COMPCOMMODITYID",
            "required": true,
            "persistent": true,
            "title": "COMPCOMMODITYID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "COMM_COMPCOMCOM",
            "target": "COMMODITIES",
            "remarks": null,
            "whereClause": "commodity = :commodity and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMM_COMPCOMGRP",
            "target": "COMMODITIES",
            "remarks": null,
            "whereClause": "commodity = :commodity and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMM_COMPCOMM",
            "target": "COMMODITIES",
            "remarks": null,
            "whereClause": "parent = :commodity and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMM_COMPARENT",
            "target": "COMPCOMMODITY",
            "remarks": null,
            "whereClause": "company=:company and parent=:commodity and orgid=:orgid and itemsetid= :itemsetid and commodity is not null",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "COMM_COMPCOMDEL",
            "source": "COMMODITIES",
            "remarks": null,
            "whereClause": "commodity = :commodity and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMM_COMPGRPDEL",
            "source": "COMMODITIES",
            "remarks": null,
            "whereClause": "commodity = :commodity and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMM_COMPGRP",
            "source": "COMPANIES",
            "remarks": null,
            "whereClause": "company = :company and orgid=:orgid and parent is null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMM_COMPMAIN",
            "source": "COMPANIES",
            "remarks": null,
            "whereClause": "company = :company",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMM_COMPARENT",
            "source": "COMPCOMMODITY",
            "remarks": null,
            "whereClause": "company=:company and parent=:commodity and orgid=:orgid and itemsetid= :itemsetid and commodity is not null",
            "cardinality": "UNDEFINED"
        }
    ]
}