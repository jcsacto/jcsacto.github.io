mos = {
    "objectName": "RECONASSETLINK",
    "className": "psdi.app.reconlink.asset.ReconAssetLinkSet",
    "description": "Asset Link Result view.",
    "longDescription": null,
    "isView": true,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": null,
    "primaryKeyColumns": [
        "RECONLINKID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "RECONLINK",
            "targetObject": "RECONASSETLINK",
            "parentKeys": "RECONLINKID",
            "targetKeys": "RECONLINKID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Reconcilation Link",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "RECONASSETLINK",
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
            "attributeName": "RECONLINKID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": "RECONLINKID",
            "sameAsObject": "RECONLINK",
            "viewColumnName": "RECONLINKID",
            "tableName": "RECONLINK",
            "tableColumnName": "RECONLINKID"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "Site of the linked asset.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE",
            "viewColumnName": "SITEID",
            "tableName": "RECONLINK",
            "tableColumnName": "SITEID"
        },
        {
            "attributeName": "NODEID",
            "required": false,
            "persistent": true,
            "title": "Deployed Asset",
            "remarks": "Node ID for the linked deployed asset. This is the unique identifier of the deployed asset.",
            "sameAsAttribute": "NODEID",
            "sameAsObject": "RECONLINK",
            "viewColumnName": "NODEID",
            "tableName": "RECONLINK",
            "tableColumnName": "NODEID"
        },
        {
            "attributeName": "LINKDATE",
            "required": true,
            "persistent": true,
            "title": "Link Date",
            "remarks": "Date and time the link result record was created.",
            "sameAsAttribute": "LINKDATE",
            "sameAsObject": "RECONLINK",
            "viewColumnName": "LINKDATE",
            "tableName": "RECONLINK",
            "tableColumnName": "LINKDATE"
        },
        {
            "attributeName": "ASSETID",
            "required": true,
            "persistent": true,
            "title": "Asset",
            "remarks": "Unique identifier of the linked IT asset.",
            "sameAsAttribute": "ASSETID",
            "sameAsObject": "ASSET",
            "viewColumnName": "ASSETID",
            "tableName": "RECONLINK",
            "tableColumnName": "ASSETID"
        },
        {
            "attributeName": "LINKRULENAME",
            "required": false,
            "persistent": true,
            "title": "Rule Name",
            "remarks": "Link Rule Name",
            "sameAsAttribute": "RULENAME",
            "sameAsObject": "RECONRULE",
            "viewColumnName": "LINKRULENAME",
            "tableName": "RECONLINK",
            "tableColumnName": "LINKRULENAME"
        },
        {
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": true,
            "title": "Asset",
            "remarks": "Asset number of the authorized IT Asset",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "RECONLINK",
            "viewColumnName": "ASSETNUM",
            "tableName": "RECONLINK",
            "tableColumnName": "ASSETNUM"
        },
        {
            "attributeName": "ASSETCLASS",
            "required": false,
            "persistent": true,
            "title": "Asset Class",
            "remarks": "Class of Deployed Asset",
            "sameAsAttribute": "ASSETCLASS",
            "sameAsObject": "RECONLINK",
            "viewColumnName": "ASSETCLASS",
            "tableName": "RECONLINK",
            "tableColumnName": "ASSETCLASS"
        },
        {
            "attributeName": "RECONTYPE",
            "required": false,
            "persistent": true,
            "title": "Data Set 1",
            "remarks": "Used to categorize the type of reconciliation task being configured",
            "sameAsAttribute": "RECONTYPE",
            "sameAsObject": "RECONLINK",
            "viewColumnName": "RECONTYPE",
            "tableName": "RECONLINK",
            "tableColumnName": "RECONTYPE"
        },
        {
            "attributeName": "COMPSET",
            "required": false,
            "persistent": true,
            "title": "Data Set 2",
            "remarks": "Used to categorize set of data being compared in this reconciliation type.",
            "sameAsAttribute": "COMPSET",
            "sameAsObject": "RECONLINK",
            "viewColumnName": "COMPSET",
            "tableName": "RECONLINK",
            "tableColumnName": "COMPSET"
        },
        {
            "attributeName": "GUID",
            "required": false,
            "persistent": true,
            "title": "guid",
            "remarks": "Unique Identifier from TADDM source record.",
            "sameAsAttribute": "GUID",
            "sameAsObject": "ACTCI",
            "viewColumnName": "GUID",
            "tableName": "RECONLINK",
            "tableColumnName": "GUID"
        }
    ],
    "viewinfo": {
        "autosect": true,
        "viewwhere": "recontype in (select value from synonymdomain where domainid ='RECONTYPE' and maxvalue in ('ASSET')) and compset in (select value from synonymdomain where domainid ='RECONTYPE' and maxvalue in ('DEPLOYED ASSET'))"
    },
    "outgoingRelationships": [
        {
            "name": "RECONASSETLINK_ASSET",
            "target": "ASSET",
            "remarks": "Relationship to the ASSET object, used to find the ASSET record for the reconassetlink based on the assetnum.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONASSETLINK_DPA",
            "target": "DEPLOYEDASSET",
            "remarks": "Relationship to the DEPLOYEDASSET object, used to find the DEPLOYEDASSET record for the reconassetlink based on the nodeid.",
            "whereClause": "nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": []
}