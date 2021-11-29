mos = {
    "objectName": "DCLNODESINBV",
    "className": "psdi.app.common.CommonMboSet",
    "description": "Assetnums that shouldn't display in topology business view",
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
            "required": true,
            "persistent": true,
            "title": "Asset",
            "remarks": "Asset Number",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET",
            "viewColumnName": "ASSETNUM",
            "tableName": "ASSET",
            "tableColumnName": "ASSETNUM"
        }
    ],
    "viewinfo": {
        "autosect": false,
        "viewwhere": "asset.classstructureid is null or classstructure.showinassettopo=0",
        "viewselect": "select distinct asset.assetnum as assetnum",
        "viewfrom": "asset left join classstructure on asset.classstructureid = classstructure.classstructureid"
    },
    "outgoingRelationships": [],
    "incomingRelationships": []
}