mos = {
    "objectName": "RECONCILINK",
    "className": "psdi.app.reconlink.ci.ReconCILinkSet",
    "description": "Displays CI result data only",
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
            "objectName": "ACTCI",
            "targetObject": "RECONCILINK",
            "parentKeys": "ACTCINUM",
            "targetKeys": "CINUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 21",
            "longDescription": null
        },
        {
            "objectName": "CI",
            "targetObject": "RECONCILINK",
            "parentKeys": "CIID",
            "targetKeys": "CIID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Configure Item",
            "longDescription": null
        },
        {
            "objectName": "RECONLINK",
            "targetObject": "RECONCILINK",
            "parentKeys": "RECONLINKID",
            "targetKeys": "RECONLINKID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Recon Link",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "RECONCILINK",
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
            "attributeName": "ACTCIID",
            "required": false,
            "persistent": true,
            "title": "Actual CI",
            "remarks": "Unique Identifier for the Actual CI.",
            "sameAsAttribute": "ACTCIID",
            "sameAsObject": "ACTCI",
            "viewColumnName": "ACTCIID",
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
            "attributeName": "CIID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": "CIID",
            "sameAsObject": "CI",
            "viewColumnName": "CIID",
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
            "attributeName": "ASSETCLASS",
            "required": false,
            "persistent": true,
            "title": "Asset Class3",
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
            "title": "Reconciliation Type",
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
            "title": "Comparison Set",
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
        },
        {
            "attributeName": "CINUM",
            "required": false,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": "ACTCINUM",
            "sameAsObject": "ACTCI",
            "viewColumnName": "CINUM",
            "tableName": "RECONLINK",
            "tableColumnName": "ASSETNUM"
        }
    ],
    "viewinfo": {
        "autosect": true,
        "viewwhere": "recontype in (select value from synonymdomain where domainid ='RECONTYPE' and maxvalue in ('CI')) and compset in (select value from synonymdomain where domainid ='RECONTYPE' and maxvalue in ('ACTUAL CI'))"
    },
    "outgoingRelationships": [
        {
            "name": "RECONCILINK_ACTCI",
            "target": "ACTCI",
            "remarks": "Relationship to the ACTCI table, used to find the ACTCI record for the reconcilink based on the actciid.",
            "whereClause": "actciid=:actciid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONCILINK_CI",
            "target": "CI",
            "remarks": "Relationship to the CI object, used to find the CI record for the reconcilink based on the cinum.",
            "whereClause": "cinum= :cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONCILINK_CIID",
            "target": "CI",
            "remarks": "Relationship to the CI object, used to find the CI record for the reconcilink based on the ciid.",
            "whereClause": "ciid=:ciid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VCICOLLECT",
            "target": "CI",
            "remarks": "View CI Collections",
            "whereClause": "cinum=:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWACTCI",
            "target": "CI",
            "remarks": "View Actual CI Details",
            "whereClause": "cinum=:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCIRELHIS",
            "target": "CI",
            "remarks": "View CI Relationship History",
            "whereClause": "cinum=:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "target": "VIEWWOPMS",
            "remarks": "Relationship from the RECONCILINK to the non-persistent VIEWWOPMS table. (Nowhere clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": null
        }
    ],
    "incomingRelationships": []
}