mos = {
    "objectName": "ASSETISSUEITEMS",
    "className": "psdi.app.asset.virtual.AssetIssueItemsSet",
    "description": "Asset Issue Items Default Info",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": false,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": false,
            "title": "Site",
            "remarks": "Asset's siteid.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "STORELOC",
            "required": false,
            "persistent": false,
            "title": "Storeroom",
            "remarks": "User's default storeroom.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "ASSETISSUEITEMS",
            "source": "ASSET",
            "remarks": "User default site and storeroom",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}