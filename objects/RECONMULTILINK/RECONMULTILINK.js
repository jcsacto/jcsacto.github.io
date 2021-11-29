mos = {
    "objectName": "RECONMULTILINK",
    "className": "psdi.app.common.CommonMboSet",
    "description": "Recon Multi Link Results",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "RECONMULTILINKID",
    "primaryKeyColumns": [
        "RECONMULTILINKID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "SITE",
            "targetObject": "RECONMULTILINK",
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
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "Site of the linked asset",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "NODEID",
            "required": true,
            "persistent": true,
            "title": "Deployed Asset",
            "remarks": "Node ID for the linked deployed asset.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LINKDATE",
            "required": true,
            "persistent": true,
            "title": "Link Date",
            "remarks": "Date and time the link result record was created.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSETID",
            "required": false,
            "persistent": true,
            "title": "Asset",
            "remarks": "Unique identifier of the linked IT asset.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LINKRULENAME",
            "required": false,
            "persistent": true,
            "title": "Rule Name",
            "remarks": "Link Rule Name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": true,
            "title": "Asset",
            "remarks": "Asset number of the authorized IT Asset",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSETCLASS",
            "required": false,
            "persistent": true,
            "title": "Asset Class",
            "remarks": "Class of Deployed Asset",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RECONTYPE",
            "required": false,
            "persistent": true,
            "title": "Data Set 1",
            "remarks": "Used to categorize the type of reconciliation task being configured",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COMPSET",
            "required": false,
            "persistent": true,
            "title": "Data Set 2",
            "remarks": "Used to categorize set of data being compared in this reconciliation type.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GUID",
            "required": false,
            "persistent": true,
            "title": "Guid",
            "remarks": "Unique Identifier from TADDM source record.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RECONTASKID",
            "required": false,
            "persistent": true,
            "title": "Task Id",
            "remarks": "Reconciliation Task ID",
            "sameAsAttribute": "RECONTASKID",
            "sameAsObject": "RECONTASK"
        },
        {
            "attributeName": "RECONMULTILINKID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ASSET",
            "target": "ASSET",
            "remarks": "Relationship from reconmultilink to asset",
            "whereClause": "assetid=:assetid",
            "cardinality": null
        },
        {
            "name": "DEPLOYEDASSET",
            "target": "DEPLOYEDASSET",
            "remarks": "Relationship from reconmultilink to deployedasset",
            "whereClause": "nodeid=:nodeid",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "RECONMULTILINK",
            "source": "RECONASSETRESULT",
            "remarks": "Relationship from reconassetresult to reconmultilink",
            "whereClause": "recontaskid=:recontaskid",
            "cardinality": null
        }
    ]
}