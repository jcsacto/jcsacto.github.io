mos = {
    "objectName": "ASSETTOPOCACHE",
    "className": "psdi.app.asset.topology.AssetTopologyCacheMboSet",
    "description": "Cache Table for Asset Topology",
    "longDescription": "Temporary Cache table.",
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "ASSETTOPOCACHEID",
    "primaryKeyColumns": [
        "ASSETTOPOCACHEID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "SOURCEASSETNUM",
            "required": false,
            "persistent": true,
            "title": "Source Asset Number",
            "remarks": "Source Asset Number",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "TARGETASSETNUM",
            "required": false,
            "persistent": true,
            "title": "Target Asset Number",
            "remarks": "Target Asset Number",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "ASSETPATH",
            "required": false,
            "persistent": true,
            "title": "Asset Path Traversed",
            "remarks": "Aset Path Traversed",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEDATE",
            "required": false,
            "persistent": true,
            "title": "Change Date",
            "remarks": "Change Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSETTOPOCACHEID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "ASSETCACHEREL",
            "source": "ASSET",
            "remarks": "Relation between asset and cache",
            "whereClause": "sourceassetnum=:assetnum or targetassetnum=:assetnum",
            "cardinality": null
        }
    ]
}