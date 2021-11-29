mos = {
    "objectName": "ASSETLOCCOMM",
    "className": "psdi.app.item.AssetLocCommSet",
    "description": "Relationships commodity-asset/assettype/location.",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "ASSETLOCCOMMID",
    "primaryKeyColumns": [
        "ASSETLOCCOMMID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ASSET",
            "targetObject": "ASSETLOCCOMM",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Current Asset''s AssetLocComm records. Shows the service groups to which this Asset belongs.",
            "longDescription": null
        },
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
            "objectName": "LOCATIONS",
            "targetObject": "ASSETLOCCOMM",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 10",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "ASSETLOCCOMM",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "ASSETLOCCOMM",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item Set",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "ASSETLOCCOMM",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "COMMODITY",
            "required": false,
            "persistent": true,
            "title": "Commodity Code",
            "remarks": "Commodity",
            "sameAsAttribute": "COMMODITY",
            "sameAsObject": "COMMODITIES"
        },
        {
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": true,
            "title": "Asset",
            "remarks": "Identifies the asset you want to associate with the service group. Click the Detail Menu button to select an asset or go to the Assets application to create one.",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "ASSETTYPE",
            "required": false,
            "persistent": true,
            "title": "Asset Type",
            "remarks": "Identifies the asset type you want to associate with the service group. Click the Select Value button to choose an asset type.",
            "sameAsAttribute": "ASSETTYPE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": true,
            "title": "Location",
            "remarks": "Identifies the location you want to associate with the service group. Click the Detail Menu button to select a location or go to the Locations application to create one.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "SITEID",
            "required": true,
            "persistent": true,
            "title": "Site",
            "remarks": "Identifies the site where the asset or location exists.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "ITEMSETID",
            "required": false,
            "persistent": true,
            "title": "Item Set",
            "remarks": "Item Set Id",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS"
        },
        {
            "attributeName": "ASSETLOCCOMMID",
            "required": true,
            "persistent": true,
            "title": "ASSETLOCCOMMID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSETDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "Describes the asset or location you want to associate with the service group.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSETDESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Long Description",
            "remarks": "Long Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COMMODITYGROUP",
            "required": true,
            "persistent": true,
            "title": "Commodity Group",
            "remarks": "Commodity Group",
            "sameAsAttribute": "COMMODITY",
            "sameAsObject": "COMMODITIES"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ASSET",
            "target": "ASSET",
            "remarks": "Relationship to the ASSET table, used to find the asset records. The resulting set will contain one object.",
            "whereClause": "assetnum = :assetnum and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMODITIES",
            "target": "COMMODITIES",
            "remarks": "Relationship to the COMMODITIES table, used to find the COMMODITIES for the ASSETLOCCOMM. The resulting set will contain one or more objects.",
            "whereClause": "commodity= :commodity",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMODITYGROUPS",
            "target": "COMMODITIES",
            "remarks": "Relationship to the COMMODITIES table, used to find the COMMODITIES for the ASSETLOCCOMM. The resulting set will contain one or more objects.",
            "whereClause": "commodity=:commoditygroup",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONS",
            "target": "LOCATIONS",
            "remarks": "Relationship to the LOCATIONS table, used to find the asset records. The resulting set will contain one object.",
            "whereClause": "location = :location and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SYNONYMDOMAIN",
            "target": "SYNONYMDOMAIN",
            "remarks": null,
            "whereClause": "domainid='ASSETTYPE' and value=:assettype",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "target": "VIEWCONTINPUT",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "ASSETLOCCOMM",
            "source": "AREASAFFECTED",
            "remarks": null,
            "whereClause": "commodity=:affectedcommodity and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETTYPECOMM",
            "source": "AREASAFFECTED",
            "remarks": null,
            "whereClause": "commodity=:affectedcommodity",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETLOCCOMM",
            "source": "ASSET",
            "remarks": "Relationship to the ASSETLOCCOMM table, used to find the ASSETLOCCOMMs for the asset. The resulting set will contain one or more objects.",
            "whereClause": "assetnum= :assetnum and siteid= :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETLOCCOMM",
            "source": "COMMODITIES",
            "remarks": "Relationship to the ASSETLOCCOMM table, used to find the assettype records. The resulting set will contain zero or many object.",
            "whereClause": "commodity = :commodity and itemsetid = :itemsetid and assettype is null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETLOCCOMMGRP",
            "source": "COMMODITIES",
            "remarks": "Relationship to the ASSETLOCCOMM table, used to find the records for the commodity group. The resulting set will contain zero or many object.",
            "whereClause": "commoditygroup = :commodity and itemsetid = :itemsetid and commodity is null and assettype is null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETLOCCOMMGRPVIEW",
            "source": "COMMODITIES",
            "remarks": null,
            "whereClause": "commoditygroup = :commodity and itemsetid = :itemsetid and assettype is null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETTYPECOMM",
            "source": "COMMODITIES",
            "remarks": "Relationship to the ASSETLOCCOMM table, used to find the assettype records. The resulting set will contain zero or many object.",
            "whereClause": "commodity = :commodity and itemsetid = :itemsetid and assettype is not null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETTYPECOMMGRP",
            "source": "COMMODITIES",
            "remarks": null,
            "whereClause": "commoditygroup = :commodity and itemsetid = :itemsetid and commodity is null and assettype is not null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETTYPECOMMGRPVIEW",
            "source": "COMMODITIES",
            "remarks": null,
            "whereClause": "commoditygroup = :commodity and itemsetid = :itemsetid and assettype is not null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETLOCCOMM",
            "source": "LOCATIONS",
            "remarks": "Relationship to the ASSETLOCCOMM table, used to find the ASSETLOCCOMMs for the location. The resulting set will contain one or more objects.",
            "whereClause": "location= :location and siteid= :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETLOCCOMM",
            "source": "TICKET",
            "remarks": null,
            "whereClause": "commodity=:commodity and assettype is null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETLOCCOMMGRPVIEW",
            "source": "TICKET",
            "remarks": null,
            "whereClause": "commoditygroup=:commoditygroup and assettype is null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETTYPECOMM",
            "source": "TICKET",
            "remarks": null,
            "whereClause": "commodity=:commodity and assettype is not null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETTYPECOMMGRPVIEW",
            "source": "TICKET",
            "remarks": null,
            "whereClause": "commoditygroup=:commoditygroup and assettype is not null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETLOCCOMM",
            "source": "TKTEMPLATE",
            "remarks": null,
            "whereClause": "commodity=:commodity and assettype is null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETLOCCOMMGRPVIEW",
            "source": "TKTEMPLATE",
            "remarks": null,
            "whereClause": "commoditygroup=:commoditygroup and assettype is null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETTYPECOMM",
            "source": "TKTEMPLATE",
            "remarks": null,
            "whereClause": "commodity=:commodity and assettype is not null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETTYPECOMMGRPVIEW",
            "source": "TKTEMPLATE",
            "remarks": null,
            "whereClause": "commoditygroup=:commoditygroup and assettype is not null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETTYPECOMM",
            "source": "WORKORDER",
            "remarks": null,
            "whereClause": "commodity=:commodity and assettype is not  null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETTYPECOMMGRPVIEW",
            "source": "WORKORDER",
            "remarks": null,
            "whereClause": "commoditygroup=:commoditygroup and assettype is not null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETLOCCOMM",
            "source": "WORKORDER",
            "remarks": null,
            "whereClause": "commodity=:commodity and assettype is null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETLOCCOMMGRPVIEW",
            "source": "WORKORDER",
            "remarks": null,
            "whereClause": "commoditygroup = :commoditygroup and assettype is null",
            "cardinality": "UNDEFINED"
        }
    ]
}