mos = {
    "objectName": "ASSETZEROCOSTS",
    "className": "psdi.app.asset.virtual.AssetZeroCostsSet",
    "description": "Parameters for Zero Asset Costs",
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
            "attributeName": "YTDCOST",
            "required": true,
            "persistent": false,
            "title": "Zero Year to Date Costs",
            "remarks": "Should year-to-date costs be zeroed?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOTALCOST",
            "required": true,
            "persistent": false,
            "title": "Zero Total Costs",
            "remarks": "Should total cost be zeroed?",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "ASSETZEROCOSTS",
            "source": "ASSET",
            "remarks": "Relationship to the nonpersistent parameter set for zeroing out asset costs.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}