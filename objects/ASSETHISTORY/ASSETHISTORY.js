mos = {
    "objectName": "ASSETHISTORY",
    "className": "psdi.app.asset.AssetHistorySet",
    "description": "The ASSETHISTORY Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "ASSETHISTORYID",
    "primaryKeyColumns": [
        "ASSETHISTORYID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ASSET",
            "targetObject": "ASSETHISTORY",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "AssetHistory records for the current Asset. Shows cost information for each work order to which the Asset belongs.",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "ASSETHISTORY",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "ASSETHISTORY",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "ASSETHISTORY",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Order",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "ASSETNUM",
            "required": true,
            "persistent": true,
            "title": "Asset",
            "remarks": "Asset Number",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "WONUM",
            "required": true,
            "persistent": true,
            "title": "Work Order",
            "remarks": "Work Order Number",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "TOTALCOST",
            "required": false,
            "persistent": true,
            "title": "Total Cost",
            "remarks": "Total Cost",
            "sameAsAttribute": "TOTALCOST",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "YTDCOST",
            "required": false,
            "persistent": true,
            "title": "YTD Cost",
            "remarks": "Year To Date Cost",
            "sameAsAttribute": "YTDCOST",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "TOTUNCHARGEDCOST",
            "required": false,
            "persistent": true,
            "title": "Total Uncharged Cost",
            "remarks": "Total Uncharged Cost",
            "sameAsAttribute": "TOTUNCHARGEDCOST",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "BUDGETCOST",
            "required": false,
            "persistent": true,
            "title": "Budget Cost",
            "remarks": "Budgeted Cost",
            "sameAsAttribute": "BUDGETCOST",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "SITEID",
            "required": true,
            "persistent": true,
            "title": "Site",
            "remarks": "Site Identifier",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "ASSETHISTORYID",
            "required": true,
            "persistent": true,
            "title": "ASSETHISTORYID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "ASSETHISTORY",
            "source": "ASSET",
            "remarks": "Relationship to the AssetHistory table, used to find history records for a given asset. (assethistory.assetnum = asset.assetnum). This resulting set will contain zero or more objects.",
            "whereClause": "assetnum = :assetnum and siteid=:siteid",
            "cardinality": "MULTIPLE"
        }
    ]
}