mos = {
    "objectName": "COMMODITIES",
    "className": "psdi.app.item.CommoditySet",
    "description": "Commodity Groups and Commodity Codes Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "COMMODITIESID",
    "primaryKeyColumns": [
        "COMMODITY",
        "ITEMSETID"
    ],
    "logicalRelationships": [
        {
            "objectName": "COMMODITIES",
            "targetObject": "ASSETLOCCOMM",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITY, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "ASSETLOCCOMM",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITYGROUP, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity Group",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "CI",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "SERVICE, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "CI",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "SERVICEGROUP, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity Group",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "COMMODITIES",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "PARENT, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Parent Commodity",
            "longDescription": null
        },
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
            "objectName": "COMMODITIES",
            "targetObject": "CONTRACTLINE",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITY, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "CONTRACTLINE",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITYGROUP, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity Group",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "INVOICELINE",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITY, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "INVOICELINE",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITYGROUP, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity Group",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "INVUSELINE",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITY, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "INVUSELINE",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITYGROUP, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity Group",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "ITEM",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITY, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "ITEM",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITYGROUP, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity Group",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "ITEMCONDITION",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITY, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "ITEMCONDITION",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITYGROUP, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity Group",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "LEASEVIEWLINE",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITY, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "LEASEVIEWLINE",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITYGROUP, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity Group",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "MATRECTRANS",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITY, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "MATRECTRANS",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITYGROUP, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity Group",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "MATUSETRANS",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITY, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "MATUSETRANS",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITYGROUP, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity Group",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "MRLINE",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITY, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "MRLINE",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITYGROUP, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity Group",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "PERSCOMMODITY",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITY, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "PERSCOMMODITY",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "PARENT, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Parent Commodity",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "POLINE",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITY, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "POLINE",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITYGROUP, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity Group",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "PRLINE",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITY, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity Code",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "PRLINE",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITYGROUP, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity Group Code",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "QUOTATIONLINE",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITY, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "QUOTATIONLINE",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITYGROUP, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity Group",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "REORDERPAD",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITY, ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 36",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "REORDERPAD",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITYGROUP, ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 37",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "RFQLINE",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITY, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "RFQLINE",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITYGROUP, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity Group",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "SERVICEITEMS",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITY, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "SERVICEITEMS",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITYGROUP, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity Group",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "SERVRECTRANS",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITY, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "SERVRECTRANS",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITYGROUP, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity Group",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "SFWVIEWLINE",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITY, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "SFWVIEWLINE",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITYGROUP, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity Group",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "SKDEXTRACAPTOOLVIEW",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITY, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Extra Capacity Tool Commodity",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "SKDEXTRACAPTOOLVIEW",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITY, ITEMSETID1",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 47",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "SKDEXTRACAPTOOLVIEW",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITYGROUP, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Extra Capacity Tool Commodity Group",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "SKDEXTRACAPTOOLVIEW",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITYGROUP, ITEMSETID1",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 49",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "TOOLINV",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITY, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "TOOLINV",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITYGROUP, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity Group",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "TOOLITEM",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITY, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "TOOLITEM",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITYGROUP, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity Group",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "WARRANTYVIEWLINE",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITY, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "WARRANTYVIEWLINE",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITYGROUP, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity Group",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "COMMODITIES",
            "targetObject": "COMMODITIES",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "PARENT, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Parent Commodity",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "COMMODITIES",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "COMMODITIES",
            "parentKeys": "PERSONID",
            "targetKeys": "OWNER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Owner",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "COMMODITIES",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "OWNERGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Group Owning Commodity",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "COMMODITIES",
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
            "attributeName": "COMMODITY",
            "required": true,
            "persistent": true,
            "title": "Commodity Group",
            "remarks": "The unique value for the commodity group that is used to classify items and services.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Names or describes the commodity group that is used to classify items and services.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PARENT",
            "required": false,
            "persistent": true,
            "title": "Parent",
            "remarks": "Identifies the parent commodity that is associated with the current record.",
            "sameAsAttribute": "COMMODITY",
            "sameAsObject": "COMMODITIES"
        },
        {
            "attributeName": "ISSERVICE",
            "required": true,
            "persistent": true,
            "title": "Service",
            "remarks": "Indicates whether the commodity can be used by a service type item and service level agreements (SLA).",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SERVICETYPE",
            "required": true,
            "persistent": true,
            "title": "Type",
            "remarks": "You can select the type of service. The service types are Procure, Provide, or Both.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ITEMSETID",
            "required": true,
            "persistent": true,
            "title": "Item Set",
            "remarks": "Identifies the item set.",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS"
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "You can enter additional information to accompany the description.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COMMODITIESID",
            "required": true,
            "persistent": true,
            "title": "Commodity ID",
            "remarks": "The unique identifier of the commodity.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OWNER",
            "required": false,
            "persistent": true,
            "title": "Contact",
            "remarks": "The contact person for this service group. You create contacts in the People application.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "OWNERGROUP",
            "required": false,
            "persistent": true,
            "title": "Contact Group",
            "remarks": "The group of contact people for this service group. You create contact groups in the Person Groups application.",
            "sameAsAttribute": "PERSONGROUP",
            "sameAsObject": "PERSONGROUP"
        },
        {
            "attributeName": "LANGCODE",
            "required": true,
            "persistent": true,
            "title": "Language Code",
            "remarks": "Language Code.",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        },
        {
            "attributeName": "HASLD",
            "required": true,
            "persistent": true,
            "title": "Has Long Description",
            "remarks": "Indicates whether a long description has been entered for the current record.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ASSETLOCCOMM",
            "target": "ASSETLOCCOMM",
            "remarks": "Relationship to the ASSETLOCCOMM table, used to find the assettype records. The resulting set will contain zero or many object.",
            "whereClause": "commodity = :commodity and itemsetid = :itemsetid and assettype is null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETLOCCOMMGRP",
            "target": "ASSETLOCCOMM",
            "remarks": "Relationship to the ASSETLOCCOMM table, used to find the records for the commodity group. The resulting set will contain zero or many object.",
            "whereClause": "commoditygroup = :commodity and itemsetid = :itemsetid and commodity is null and assettype is null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETLOCCOMMGRPVIEW",
            "target": "ASSETLOCCOMM",
            "remarks": null,
            "whereClause": "commoditygroup = :commodity and itemsetid = :itemsetid and assettype is null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETTYPECOMM",
            "target": "ASSETLOCCOMM",
            "remarks": "Relationship to the ASSETLOCCOMM table, used to find the assettype records. The resulting set will contain zero or many object.",
            "whereClause": "commodity = :commodity and itemsetid = :itemsetid and assettype is not null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETTYPECOMMGRP",
            "target": "ASSETLOCCOMM",
            "remarks": null,
            "whereClause": "commoditygroup = :commodity and itemsetid = :itemsetid and commodity is null and assettype is not null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETTYPECOMMGRPVIEW",
            "target": "ASSETLOCCOMM",
            "remarks": null,
            "whereClause": "commoditygroup = :commodity and itemsetid = :itemsetid and assettype is not null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMCI",
            "target": "CI",
            "remarks": "Relatinship to the CI table",
            "whereClause": "service = :commodity",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMGRPCI",
            "target": "CI",
            "remarks": "Relatinship to the CI table",
            "whereClause": "servicegroup = :commodity",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMODITYCHILDREN",
            "target": "COMMODITIES",
            "remarks": null,
            "whereClause": "parent=:commodity and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMODITYLIST",
            "target": "COMMODITIES",
            "remarks": null,
            "whereClause": "parent is null and isservice=:yes and (commodity not in (select c.commodity from commodities c, commodities p where c.commodity = p.parent)) and commodity != :commodity and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMODITYPARENT",
            "target": "COMMODITIES",
            "remarks": null,
            "whereClause": "commodity=:parent and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMM_DELETECHILD",
            "target": "COMMODITIES",
            "remarks": null,
            "whereClause": "parent = :commodity and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMM_GROUP",
            "target": "COMMODITIES",
            "remarks": null,
            "whereClause": "parent is not null and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMM_GROUPTBL",
            "target": "COMMODITIES",
            "remarks": null,
            "whereClause": "parent is null and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMM_PARENT",
            "target": "COMMODITIES",
            "remarks": null,
            "whereClause": "parent = :commodity and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMM_COMPCOMDEL",
            "target": "COMPCOMMODITY",
            "remarks": null,
            "whereClause": "commodity = :commodity and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMM_COMPGRPDEL",
            "target": "COMPCOMMODITY",
            "remarks": null,
            "whereClause": "commodity = :commodity and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTCOMMODITY",
            "target": "CONTCOMMODITY",
            "remarks": "Relationship to the CONTCOMMODITY table, used to find the contract records. The resulting set will contain none or many  object.",
            "whereClause": "commodity = :commodity and parent=:parent and contractnum in (select contractnum from contract where contract.contractnum=contcommodity.contractnum and contract.revisionnum=contcommodity.revisionnum and contract.status in (select value from synonymdomain where domainid='CONTRACTSTATUS' and maxvalue='APPR'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTCOMMODITYGRP",
            "target": "CONTCOMMODITY",
            "remarks": null,
            "whereClause": "((commodity=:commodity and contractnum not in (select contractnum from contcommodity where parent=:commodity)) or parent=:commodity) and contractnum in (select contractnum from contract where contract.contractnum=contcommodity.contractnum and contract.revisionnum=contcommodity.revisionnum and contract.status in (select value from synonymdomain where domainid='CONTRACTSTATUS' and maxvalue='APPR'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMM_ITMCOMDEL",
            "target": "ITEM",
            "remarks": null,
            "whereClause": "commodity = :commodity and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMM_ITMGRPDEL",
            "target": "ITEM",
            "remarks": null,
            "whereClause": "commoditygroup = :commodity and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMM_PERSCOMDEL",
            "target": "PERSCOMMODITY",
            "remarks": "Returns PersCommodity records associated with a Commodity Code.  Will return zero, one, or many records.",
            "whereClause": "commodity = :commodity and itemsetid = :itemsetid",
            "cardinality": null
        },
        {
            "name": "COMM_PERSGRPDEL",
            "target": "PERSCOMMODITY",
            "remarks": "Returns PersCommodity records associated with the Commodity Group.  Will return zero, one, or many records.",
            "whereClause": "commodity = :commodity and itemsetid = :itemsetid",
            "cardinality": null
        },
        {
            "name": "CONTACTPERSON",
            "target": "PERSON",
            "remarks": null,
            "whereClause": "personid = :owner",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTACTPERSONGROUP",
            "target": "PERSONGROUP",
            "remarks": null,
            "whereClause": "persongroup = :ownergroup",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMSLA",
            "target": "SLA",
            "remarks": null,
            "whereClause": "commodity = :commodity",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMSLAGRP",
            "target": "SLA",
            "remarks": null,
            "whereClause": "commoditygroup = :commodity",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SRVCOMMODRELREC",
            "target": "SRVCOMMODRELREC",
            "remarks": null,
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SYNONYMDOMAIN",
            "target": "SYNONYMDOMAIN",
            "remarks": null,
            "whereClause": "domainid='SERVICETYPE' and value=:servicetype",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMTICKET",
            "target": "TICKET",
            "remarks": null,
            "whereClause": "commodity = :commodity",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMTICKETGRP",
            "target": "TICKET",
            "remarks": null,
            "whereClause": "commoditygroup = :commodity",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMWO",
            "target": "WORKORDER",
            "remarks": null,
            "whereClause": "commodity = :commodity",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMWOGRP",
            "target": "WORKORDER",
            "remarks": null,
            "whereClause": "commoditygroup = :commodity",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "ACCDEFCOMMODITY",
            "source": "ACCOUNTDEFAULTS",
            "remarks": "Relationship to the Commodities table, used to find the commodity for a given accountdefault type. (commodities.commodity = accountdefaults.groupvalue and parent is null). The resulting set will contain zero or one object.",
            "whereClause": "commodity = :groupvalue and parent is null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "AFFECTEDCOMMODITY",
            "source": "AREASAFFECTED",
            "remarks": "Relationship from Areas Affected Commodity to the Commodities table - used to get commodity description.",
            "whereClause": "commodity=:affectedcommodity",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMODITIES",
            "source": "ASSETLOCCOMM",
            "remarks": "Relationship to the COMMODITIES table, used to find the COMMODITIES for the ASSETLOCCOMM. The resulting set will contain one or more objects.",
            "whereClause": "commodity= :commodity",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMODITYGROUPS",
            "source": "ASSETLOCCOMM",
            "remarks": "Relationship to the COMMODITIES table, used to find the COMMODITIES for the ASSETLOCCOMM. The resulting set will contain one or more objects.",
            "whereClause": "commodity=:commoditygroup",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMODITY",
            "source": "CI",
            "remarks": "Relationship to the Commodities table, used to find commodity for a given CI service",
            "whereClause": "commodity=:service and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SERVICE",
            "source": "CI",
            "remarks": "Relationship to the Commodities table, used to find commodity for a given CI service",
            "whereClause": "commodity=:service and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SERVICEGROUP",
            "source": "CI",
            "remarks": "Relationship to the Commodities table, used to find commodity for a given CI servicegroup",
            "whereClause": "commodity=:servicegroup and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMODITYCHILDREN",
            "source": "COMMODITIES",
            "remarks": null,
            "whereClause": "parent=:commodity and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMODITYLIST",
            "source": "COMMODITIES",
            "remarks": null,
            "whereClause": "parent is null and isservice=:yes and (commodity not in (select c.commodity from commodities c, commodities p where c.commodity = p.parent)) and commodity != :commodity and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMODITYPARENT",
            "source": "COMMODITIES",
            "remarks": null,
            "whereClause": "commodity=:parent and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMM_DELETECHILD",
            "source": "COMMODITIES",
            "remarks": null,
            "whereClause": "parent = :commodity and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMM_GROUP",
            "source": "COMMODITIES",
            "remarks": null,
            "whereClause": "parent is not null and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMM_GROUPTBL",
            "source": "COMMODITIES",
            "remarks": null,
            "whereClause": "parent is null and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMM_PARENT",
            "source": "COMMODITIES",
            "remarks": null,
            "whereClause": "parent = :commodity and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMM_COMPCOMCOM",
            "source": "COMPCOMMODITY",
            "remarks": null,
            "whereClause": "commodity = :commodity and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMM_COMPCOMGRP",
            "source": "COMPCOMMODITY",
            "remarks": null,
            "whereClause": "commodity = :commodity and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMM_COMPCOMM",
            "source": "COMPCOMMODITY",
            "remarks": null,
            "whereClause": "parent = :commodity and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMM_CONTCOMGRP",
            "source": "CONTCOMMODITY",
            "remarks": null,
            "whereClause": "commodity = :commodity and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMM_CONTCONCON",
            "source": "CONTCOMMODITY",
            "remarks": null,
            "whereClause": "commodity = :commodity and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMM_ITMGRP",
            "source": "ITEM",
            "remarks": null,
            "whereClause": "commodity = :commodity and parent is not null and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMODITIES",
            "source": "ITEM",
            "remarks": "Relationship to the Commodities table, used to find the commodity associated with the Item. (commodities.commodity = item.commodity and commodities.itemsetid = item.itemsetid). The resulting set will contain one object.",
            "whereClause": "commodity = :commodity and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMODITYGROUP",
            "source": "ITEM",
            "remarks": "Relationship to the Commodities table, used to find the commodity associated with the Item's CommodityGroup. (commodities.commodity = item.commoditygroup and commodities.itemsetid = item.itemsetid). The resulting set will contain one object.",
            "whereClause": "commodity = :commoditygroup and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMM_PERSCOMCOM",
            "source": "PERSCOMMODITY",
            "remarks": "Returns the Commodity specified in a PersCommodity row; will return one row",
            "whereClause": "commodity = :commodity and itemsetid = :itemsetid",
            "cardinality": null
        },
        {
            "name": "COMM_PERSCOMGRP",
            "source": "PERSCOMMODITY",
            "remarks": "Returns the Commodity specified in a PersCommodity row; will return one row",
            "whereClause": "commodity = :commodity and itemsetid = :itemsetid",
            "cardinality": null
        },
        {
            "name": "PERSONGROUPUSEDBYCOMMODITIES",
            "source": "PERSONGROUP",
            "remarks": "returns any rows if used by commodities",
            "whereClause": "(ownergroup = :persongroup)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMODITIES",
            "source": "PLUSCTPMETER",
            "remarks": "relationship to the commodites table (plusctpmeter.commodity = commodities.commodity",
            "whereClause": "commodity = :commodity",
            "cardinality": null
        },
        {
            "name": "COMMODITIES",
            "source": "PO",
            "remarks": "Relationship to the Commodities table to show only the commodities with servicetype as BOTH and PROCURE",
            "whereClause": "servicetype in (select value from synonymdomain where domainid='SERVICETYPE' and maxvalue in ('BOTH','PROCURE'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMM_PRLINEGRP",
            "source": "POLINE",
            "remarks": null,
            "whereClause": "commodity = :commodity and parent is not null and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMM_PRLINEGRP",
            "source": "PRLINE",
            "remarks": null,
            "whereClause": "commodity = :commodity and parent is not null and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMM_PRLINEGRP",
            "source": "RFQLINE",
            "remarks": null,
            "whereClause": "commodity = :commodity and parent is not null and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMODITY",
            "source": "SLA",
            "remarks": "Relationship to the commodity table, used to find the parent record for the commodity. (sla.commodity = commodities.commodity). The resulting set will contain one objects.",
            "whereClause": "commodity = :commodity",
            "cardinality": "UNDEFINED"
        }
    ]
}