mos = {
    "objectName": "ASSETWORKZONE",
    "className": "com.ibm.tivoli.maximo.workzone.AssetWorkZoneSet",
    "description": "Assets that are part of a workzone",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "ASSETWORKZONEID",
    "primaryKeyColumns": [
        "TYPE",
        "ORGID",
        "ASSETNUM",
        "SITEID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ASSET",
            "targetObject": "ASSETWORKZONE",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 39",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "ASSETWORKZONE",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "ASSETWORKZONE",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site",
            "longDescription": null
        },
        {
            "objectName": "WORKZONE",
            "targetObject": "ASSETWORKZONE",
            "parentKeys": "WORKZONE, ORGID",
            "targetKeys": "WORKZONE, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset Work Zone",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "ASSETNUM",
            "required": true,
            "persistent": true,
            "title": "Asset",
            "remarks": "Asset",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "WORKZONE",
            "required": true,
            "persistent": true,
            "title": "Work Zone",
            "remarks": "Identifies the work zone that is associated with the asset. You can choose from work zones that are defined in the Work Zones application. You can define more than one work zone for an asset, but you cannot define the same work zone multiple times for a single asset.",
            "sameAsAttribute": "WORKZONE",
            "sameAsObject": "WORKZONE"
        },
        {
            "attributeName": "TYPE",
            "required": true,
            "persistent": true,
            "title": "Work Zone Type",
            "remarks": "The type of the work zone",
            "sameAsAttribute": "TYPE",
            "sameAsObject": "WORKZONE"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "The orgid the workzone belongs to",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": true,
            "persistent": true,
            "title": "Site",
            "remarks": "The site the asset belongs to.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ASSETWORKZONEID",
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
            "name": "ASSET",
            "target": "ASSET",
            "remarks": "Relationship from assetworkzone to asset",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "WORKZONE",
            "target": "WORKZONE",
            "remarks": "Relationship from assetworkzone to workzone",
            "whereClause": "workzone=:workzone and type=:type and orgid=:orgid",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "ASSETWORKZONE",
            "source": "ASSET",
            "remarks": "Relationship from asset to assetworkzone",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "ASSETWORKZONE",
            "source": "WORKZONE",
            "remarks": "Relationship from workzone to assetworkzone",
            "whereClause": "workzone=:workzone and type=:type and orgid=:orgid",
            "cardinality": null
        }
    ]
}