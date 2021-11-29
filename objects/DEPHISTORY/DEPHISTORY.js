mos = {
    "objectName": "DEPHISTORY",
    "className": "psdi.app.asset.DepHistorySet",
    "description": "The history of an asset's depreciation",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "DEPHISTORYID",
    "primaryKeyColumns": [
        "ORGID",
        "DEPRECIATIONNUM",
        "CHANGEDATE"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ASSET",
            "targetObject": "DEPHISTORY",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "NEXTASSETSITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 44",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "DEPHISTORY",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "NEXTASSETSITEID, NEXTASSET",
            "relNum": "1 to 1",
            "status": "VERIFIED",
            "description": "The asset to which the depreciation schedules were swapped to",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "DEPHISTORY",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "NEXTASSETSITEID, PREVIOUSASSET",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 50",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "DEPHISTORY",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "NEXTASSETSITEID, SWAPPEDTOASSET",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 53",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "DEPHISTORY",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "PREVIOUSASSETSITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 45",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "DEPHISTORY",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "PREVIOUSASSETSITEID, NEXTASSET",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 48",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "DEPHISTORY",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "PREVIOUSASSETSITEID, PREVIOUSASSET",
            "relNum": "1 to 1",
            "status": "VERIFIED",
            "description": "The asset to which the depreciation schedule was previously attached",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "DEPHISTORY",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "PREVIOUSASSETSITEID, SWAPPEDTOASSET",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 54",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "DEPHISTORY",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": "1 to 1",
            "status": "VERIFIED",
            "description": "The asset assigned to the depreciation schedule",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "DEPHISTORY",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, NEXTASSET",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 49",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "DEPHISTORY",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, PREVIOUSASSET",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 52",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "DEPHISTORY",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, SWAPPEDTOASSET",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 55",
            "longDescription": null
        },
        {
            "objectName": "DEPRECIATION",
            "targetObject": "DEPHISTORY",
            "parentKeys": "ORGID, DEPRECIATIONNUM",
            "targetKeys": "ORGID, DEPRECIATIONNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Depreciation History",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "DEPHISTORY",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 94",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "DEPHISTORY",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who changed the depreciation schedule",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "DEPHISTORY",
            "parentKeys": "SITEID",
            "targetKeys": "NEXTASSETSITEID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 59",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "DEPHISTORY",
            "parentKeys": "SITEID",
            "targetKeys": "PREVIOUSASSETSITEID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 60",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "DEPHISTORY",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 61",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "ASSETID",
            "required": false,
            "persistent": true,
            "title": "Asset",
            "remarks": "Unique ID of the asset",
            "sameAsAttribute": "ASSETID",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": true,
            "title": "Asset",
            "remarks": "The asset assigned to the depreciation schedule",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "CHANGEBY",
            "required": false,
            "persistent": true,
            "title": "Change By",
            "remarks": "Person who changed the depreciation schedule",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": false,
            "persistent": true,
            "title": "Change Date",
            "remarks": "Date that the depreciation schedule changed",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DEPRECIATIONNUM",
            "required": true,
            "persistent": true,
            "title": "Depreciation ID",
            "remarks": "ID of the depreciation",
            "sameAsAttribute": "DEPRECIATIONNUM",
            "sameAsObject": "DEPRECIATION"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "ID of the organization",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "PREVIOUSASSET",
            "required": false,
            "persistent": true,
            "title": "Previous Asset",
            "remarks": "The asset to which the depreciation schedule was previously attached",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "PREVIOUSASSETSITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "ID of the previous asset's site",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "SALVAGEAMT",
            "required": false,
            "persistent": true,
            "title": "Salvage Amount",
            "remarks": "Expected value of the asset at the end of its expected life",
            "sameAsAttribute": "SALVAGEAMT",
            "sameAsObject": "DEPRECIATION"
        },
        {
            "attributeName": "SITEID",
            "required": true,
            "persistent": true,
            "title": "Site",
            "remarks": "ID of the site",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "STARTINGCOST",
            "required": false,
            "persistent": true,
            "title": "Starting Cost",
            "remarks": "Cost of the asset. This value is used as the starting point to calculate the depreciation schedule",
            "sameAsAttribute": "STARTINGCOST",
            "sameAsObject": "DEPRECIATION"
        },
        {
            "attributeName": "SWAPPEDTOASSET",
            "required": false,
            "persistent": true,
            "title": "Swapped To Asset",
            "remarks": "The asset to which the depreciation schedules were swapped to",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "NEXTASSET",
            "required": false,
            "persistent": true,
            "title": "Next Asset",
            "remarks": "The asset to which the depreciation schedules were swapped to",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "NEXTASSETSITEID",
            "required": false,
            "persistent": true,
            "title": "Next Asset Site",
            "remarks": "The ID of the asset's site to which the depreciation schedules were swapped",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "DEPHISTORYID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "DEPHISTORYNEXTASSET",
            "target": "ASSET",
            "remarks": "Relationship to the DEPHISTORY object for field nextasset.",
            "whereClause": "assetnum=:nextasset and siteid=:nextassetsiteid",
            "cardinality": null
        },
        {
            "name": "DEPHISTORYPREVIOUSASSET",
            "target": "ASSET",
            "remarks": "Relationship to the DEPHISTORY object for field previousasset.",
            "whereClause": "assetnum=:previousasset and siteid=:previousassetsiteid",
            "cardinality": null
        },
        {
            "name": "DEPSCHEDHISTORY",
            "target": "DEPSCHEDHISTORY",
            "remarks": "Relationship to the DEPSCHEDHISTORY object.",
            "whereClause": "depreciationnum=:depreciationnum and orgid=:orgid",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "DEPHISTORY",
            "source": "ASSET",
            "remarks": "Relationship to the DEPHISTORY object.",
            "whereClause": "assetnum=:assetnum",
            "cardinality": null
        },
        {
            "name": "DEPHISTORY",
            "source": "DEPRECIATION",
            "remarks": "Relationship to the DEPRECIATION object.",
            "whereClause": "depreciationnum=:depreciationnum and orgid=:orgid",
            "cardinality": null
        }
    ]
}