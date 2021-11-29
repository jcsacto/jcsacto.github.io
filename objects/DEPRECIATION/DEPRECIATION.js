mos = {
    "objectName": "DEPRECIATION",
    "className": "psdi.app.asset.DepreciationSet",
    "description": "Defines the settings for an asset's depreciation",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "DEPRECIATIONID",
    "primaryKeyColumns": [
        "ORGID",
        "DEPRECIATIONNUM"
    ],
    "logicalRelationships": [
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
            "objectName": "DEPRECIATION",
            "targetObject": "DEPSCHED",
            "parentKeys": "ORGID, DEPRECIATIONNUM",
            "targetKeys": "ORGID, DEPRECIATIONNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Depreciation Schedule",
            "longDescription": null
        },
        {
            "objectName": "DEPRECIATION",
            "targetObject": "DEPSCHEDHISTORY",
            "parentKeys": "ORGID, DEPRECIATIONNUM",
            "targetKeys": "ORGID, DEPRECIATIONNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Depreciation Schedule History",
            "longDescription": null
        },
        {
            "objectName": "DEPRECIATION",
            "targetObject": "DEPTRANS",
            "parentKeys": "ORGID, DEPRECIATIONNUM",
            "targetKeys": "ORGID, DEPRECIATIONNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Depreciation Transactions",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "ITEM",
            "targetObject": "DEPRECIATION",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item depreciating",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "DEPRECIATION",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization where the depreciation occurs.",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "DEPRECIATION",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 17",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "DEPRECIATIONNUM",
            "required": true,
            "persistent": true,
            "title": "ID of the depreciation ",
            "remarks": "ID of the depreciation",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "SALVAGEAMT",
            "required": false,
            "persistent": true,
            "title": "Salvage Amount",
            "remarks": "Expected value of the asset at the end of its expected life",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STARTINGCOST",
            "required": false,
            "persistent": true,
            "title": "Starting Cost",
            "remarks": "Cost of the asset. This value is used as the starting point to calculate the depreciation schedule",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STARTINGPOINT",
            "required": false,
            "persistent": true,
            "title": "Starting Point",
            "remarks": "Indicates when the depreciation schedules with be generated for rotating assets created during purchases for this item",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
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
            "attributeName": "ITEMNUM",
            "required": false,
            "persistent": true,
            "title": "Item",
            "remarks": "The ID of the item",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "ITEMSETID",
            "required": false,
            "persistent": true,
            "title": "Item Set",
            "remarks": "The ID of the item set",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS"
        },
        {
            "attributeName": "DELETEDEPRECIATION",
            "required": false,
            "persistent": false,
            "title": "Delete Depreciation",
            "remarks": "Delete Depreciation.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STARTDATE",
            "required": false,
            "persistent": false,
            "title": "Start Date",
            "remarks": "Date that depreciation on the asset begins",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DEPRECIATIONID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REMOVEDEP",
            "required": false,
            "persistent": false,
            "title": "Remove Depreciation",
            "remarks": "Virtual Field used in Manage Depreciation Dialog",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DELETEDEP",
            "required": false,
            "persistent": false,
            "title": "Delete Depreciation",
            "remarks": "Virtual Field used in Manage Depreciation Dialog",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TEMPLATEID",
            "required": false,
            "persistent": true,
            "title": "Template",
            "remarks": "Unique ID of the asset template",
            "sameAsAttribute": "TEMPLATEID",
            "sameAsObject": "ASSET"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ASSET",
            "target": "ASSET",
            "remarks": "Relationship to the DEPRECIATION object.",
            "whereClause": "assetid=:assetid",
            "cardinality": null
        },
        {
            "name": "DEPHISTORY",
            "target": "DEPHISTORY",
            "remarks": "Relationship to the DEPRECIATION object.",
            "whereClause": "depreciationnum=:depreciationnum and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "DEPSCHEDULE",
            "target": "DEPSCHED",
            "remarks": "Relationship to the Depreciation Schedules table, used to find all depreciatin schedules records for a given depreciation. (depreciation.orgid=depsched.orgid and depreciation.depreciationnum=depsched.depreciationnum). The resulting set will contain zero or more objects.",
            "whereClause": "orgid=:orgid and depreciationnum=:depreciationnum",
            "cardinality": null
        },
        {
            "name": "STARTINGPOINT",
            "target": "SYNONYMDOMAIN",
            "remarks": "Relationship to get the Depreciation Starting Point",
            "whereClause": "domainid = 'DEPSTARTINGPOINT' and value = :STARTINGPOINT",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "DEPRECIATION",
            "source": "ASSET",
            "remarks": "Relationship to the DEPRECIATION object.",
            "whereClause": "assetid=:assetid",
            "cardinality": null
        },
        {
            "name": "DEPRECIATION",
            "source": "ITEM",
            "remarks": "Relationship to get the Depreciation",
            "whereClause": "ITEMNUM = :ITEMNUM and  ITEMSETID= :ITEMSETID",
            "cardinality": null
        },
        {
            "name": "PLUSCDEPSCHEDULE",
            "source": "PLUSCTEMPLATE",
            "remarks": "Relationship to the Depreciation table, used to find all depreciatin schedule records for a given asset template. (plusctemplate.orgid=depreciation.orgid and plusctemplate.templateid=depreciation.templateid). The resulting set will contain zero or more objects.",
            "whereClause": "orgid=:orgid and templateid=:templateid",
            "cardinality": null
        }
    ]
}