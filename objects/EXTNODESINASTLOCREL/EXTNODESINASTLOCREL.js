mos = {
    "objectName": "EXTNODESINASTLOCREL",
    "className": "psdi.app.common.CommonMboSet",
    "description": "Assetnums that exist in assetlocrealtion table",
    "longDescription": null,
    "isView": true,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [
        "ASSETNUM"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": true,
            "title": "Source Asset",
            "remarks": "Source asset or location is related to a target asset or location.",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET",
            "viewColumnName": "ASSETNUM",
            "tableName": "ASSETLOCRELATION",
            "tableColumnName": "SOURCEASSETNUM"
        }
    ],
    "viewinfo": {
        "autosect": false,
        "viewwhere": null,
        "viewselect": "select distinct sourceassetnum as assetnum  from assetlocrelation union select distinct targetassetnum as assetnum",
        "viewfrom": "assetlocrelation"
    },
    "outgoingRelationships": [],
    "incomingRelationships": []
}