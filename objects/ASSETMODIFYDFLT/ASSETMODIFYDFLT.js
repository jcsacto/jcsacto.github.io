mos = {
    "objectName": "ASSETMODIFYDFLT",
    "className": "psdi.app.asset.virtual.AssetModifyDfltSet",
    "description": "Asset modify default values",
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
            "attributeName": "DFLTASSETATTRID",
            "required": false,
            "persistent": false,
            "title": "Attribute",
            "remarks": "Default asset attribute id",
            "sameAsAttribute": "ASSETATTRID",
            "sameAsObject": "ASSETATTRIBUTE"
        },
        {
            "attributeName": "DFLTALNVALUE",
            "required": false,
            "persistent": false,
            "title": "Alphanumeric Value",
            "remarks": "Default alnvalue",
            "sameAsAttribute": "VALUE",
            "sameAsObject": "ALNDOMAIN"
        },
        {
            "attributeName": "DFLTNUMVALUE",
            "required": false,
            "persistent": false,
            "title": "Numeric Value",
            "remarks": "Default numvalue",
            "sameAsAttribute": "VALUE",
            "sameAsObject": "NUMERICDOMAIN"
        },
        {
            "attributeName": "DFLTTABLEVALUE",
            "required": false,
            "persistent": false,
            "title": "Table Value",
            "remarks": "Table Value for Move/Modify in Assets",
            "sameAsAttribute": "TABLEVALUE",
            "sameAsObject": "ASSETSPEC"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "DFLTASSETATTRID",
            "target": "ASSETATTRIBUTE",
            "remarks": "Relationship to the assetattribute records, used to find the assetattribute record.",
            "whereClause": "assetattrid=:dfltassetattrid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": []
}