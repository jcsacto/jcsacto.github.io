mos = {
    "objectName": "DEPPREVIEW",
    "className": "psdi.app.asset.DepPreviewSet",
    "description": "Mbo that represents a depreciation item preview",
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
            "attributeName": "PERIODNUM",
            "required": false,
            "persistent": false,
            "title": "Period",
            "remarks": "System-generated sequential number that identifies the period in the depreciation schedule",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DEPDATE",
            "required": false,
            "persistent": false,
            "title": "Date",
            "remarks": "Date when this depreciation period becomes valid",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DEPMETERLTD",
            "required": false,
            "persistent": false,
            "title": "Meter Life to Date",
            "remarks": "Meter life-to-date reading that is the starting point for this depreciation period. This period becomes valid when the asset reaches this meter life-to-date reading",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DEPAMT",
            "required": false,
            "persistent": false,
            "title": "Depreciation Amount",
            "remarks": "Amount the asset will depreciate in this period",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CURRENTVALUE",
            "required": false,
            "persistent": false,
            "title": "Depreciated Value",
            "remarks": "Current value of the asset in this depreciation period",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOTALDEP",
            "required": false,
            "persistent": false,
            "title": "Total Depreciation",
            "remarks": "Total depreciation amount for this asset up to and including this period",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "DEPPREVIEW",
            "source": "DEPSCHED",
            "remarks": "Relationship to the DEPPREVIEW",
            "whereClause": "",
            "cardinality": null
        }
    ]
}