mos = {
    "objectName": "TLOAMASSETCONTRACT",
    "className": "psdi.app.common.CommonMboSet",
    "description": "Assets by their Contracts",
    "longDescription": null,
    "isView": true,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [
        "ASSETID",
        "CONTRACTNUM"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ASSET",
            "targetObject": "TLOAMASSETCONTRACT",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 154",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "TLOAMASSETCONTRACT",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "ASSETID",
            "required": true,
            "persistent": true,
            "title": "Asset",
            "remarks": "unique id",
            "sameAsAttribute": "ASSETID",
            "sameAsObject": "ASSET",
            "viewColumnName": "ASSETID",
            "tableName": "ASSET",
            "tableColumnName": "ASSETID"
        },
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
        },
        {
            "attributeName": "CONTRACTNUM",
            "required": true,
            "persistent": true,
            "title": "Contract",
            "remarks": "The unique identification number of an associated contract on a Master Contract.",
            "sameAsAttribute": "CONTRACTNUM",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "CONTRACTNUM",
            "tableName": "CONTRACT",
            "tableColumnName": "CONTRACTNUM"
        },
        {
            "attributeName": "CONTRACTTYPE",
            "required": false,
            "persistent": true,
            "title": "Contract Type",
            "remarks": "Indicator of the current contract type.",
            "sameAsAttribute": "CONTRACTTYPE",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "CONTRACTTYPE",
            "tableName": "CONTRACT",
            "tableColumnName": "CONTRACTTYPE"
        },
        {
            "attributeName": "SITEID",
            "required": true,
            "persistent": true,
            "title": "Site",
            "remarks": "Site Identifier",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE",
            "viewColumnName": "SITEID",
            "tableName": "ASSET",
            "tableColumnName": "SITEID"
        },
        {
            "attributeName": "REVISIONNUM",
            "required": true,
            "persistent": true,
            "title": "Revision",
            "remarks": "Revision number of the associated contract. This number indicates the number of times the associated contract has been revised. An associated contract that has been created and not revised will show a number of 0.",
            "sameAsAttribute": "REVISIONNUM",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "REVISIONNUM",
            "tableName": "CONTRACT",
            "tableColumnName": "REVISIONNUM"
        },
        {
            "attributeName": "HISTORYFLAG",
            "required": true,
            "persistent": true,
            "title": "History",
            "remarks": "History flag.",
            "sameAsAttribute": "HISTORYFLAG",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "HISTORYFLAG",
            "tableName": "CONTRACT",
            "tableColumnName": "HISTORYFLAG"
        }
    ],
    "viewinfo": {
        "autosect": false,
        "viewwhere": "asset.assetid=contractasset.assetid and contractasset.contractnum=contract.contractnum and contractasset.revisionnum=contract.revisionnum or asset.assetid=warrantyasset.assetid and warrantyasset.contractnum=contract.contractnum and warrantyasset.revisionnum=contract.revisionnum",
        "viewselect": "select distinct asset.assetid,asset.assetnum, contract.contractnum,contract.contracttype, asset.siteid, contract.revisionnum, contract.historyflag,asset.rowstamp",
        "viewfrom": "from contract,contractasset,warrantyasset,asset"
    },
    "outgoingRelationships": [],
    "incomingRelationships": []
}