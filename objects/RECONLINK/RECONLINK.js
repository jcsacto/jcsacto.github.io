mos = {
    "objectName": "RECONLINK",
    "className": "psdi.app.reconlink.ReconLinkSet",
    "description": "Link Results object used in Reconciliation processing",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "RECONLINKID",
    "primaryKeyColumns": [
        "RECONLINKID"
    ],
    "logicalRelationships": [
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
            "objectName": "RECONLINK",
            "targetObject": "RECONCILINK",
            "parentKeys": "RECONLINKID",
            "targetKeys": "RECONLINKID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Recon Link",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "SITE",
            "targetObject": "RECONLINK",
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
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "Site of the linked asset.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "NODEID",
            "required": false,
            "persistent": true,
            "title": "Deployed Asset",
            "remarks": "Node ID for the linked deployed asset. This is the unique identifier of the deployed asset.",
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
            "required": true,
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
            "sameAsAttribute": "RULENAME",
            "sameAsObject": "RECONRULE"
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
            "title": "guid",
            "remarks": "Unique Identifier from TADDM source record.",
            "sameAsAttribute": "GUID",
            "sameAsObject": "ACTCI"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "RECONLINK_ASSET",
            "target": "ASSET",
            "remarks": "Asset for a Reconciliation Link",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TLOAMASSETLINK",
            "target": "ASSET",
            "remarks": "Link between RECONLINK and ASSET",
            "whereClause": "assetid=:assetid and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "RECONLINK_DEPLOYEDASSET",
            "target": "DEPLOYEDASSET",
            "remarks": "Deployed Asset for a Reconciliation Link",
            "whereClause": "nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "TLOAMRECONLINK",
            "source": "COMPUTERSYSTEM",
            "remarks": "Link between COMPUTERSYSTEM and RECONLINK",
            "whereClause": "nodeid=:nodeid and recontype in (select value from synonymdomain where domainid = 'RECONTYPE' and maxvalue = 'ASSET') and compset in (select value from synonymdomain where domainid = 'RECONTYPE' and maxvalue = 'DEPLOYED ASSET')",
            "cardinality": null
        },
        {
            "name": "RECONLINK",
            "source": "COMPUTERSYSTEM",
            "remarks": "delete rerefenced reconciliation link results",
            "whereClause": "nodeid=:nodeid and recontype in (select value from synonymdomain where domainid = 'RECONTYPE' and maxvalue = 'ASSET') and compset in (select value from synonymdomain where domainid = 'RECONTYPE' and maxvalue = 'DEPLOYED ASSET')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONLINK",
            "source": "DEPLOYEDASSET",
            "remarks": "delete rerefenced reconciliation link results",
            "whereClause": "nodeid=:nodeid and recontype in (select value from synonymdomain where domainid = 'RECONTYPE' and maxvalue = 'ASSET') and compset in (select value from synonymdomain where domainid = 'RECONTYPE' and maxvalue = 'DEPLOYED ASSET')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONLINK",
            "source": "NETDEVICE",
            "remarks": "delete rerefenced reconciliation link results",
            "whereClause": "nodeid=:nodeid and recontype in (select value from synonymdomain where domainid = 'RECONTYPE' and maxvalue = 'ASSET') and compset in (select value from synonymdomain where domainid = 'RECONTYPE' and maxvalue = 'DEPLOYED ASSET')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TLOAMRECONLINK",
            "source": "NETDEVICE",
            "remarks": "Link between NETDEVICE and RECONLINK",
            "whereClause": "nodeid=:nodeid and recontype in (select value from synonymdomain where domainid = 'RECONTYPE' and maxvalue = 'ASSET') and compset in (select value from synonymdomain where domainid = 'RECONTYPE' and maxvalue = 'DEPLOYED ASSET')",
            "cardinality": null
        },
        {
            "name": "RECONLINK",
            "source": "NETPRINTER",
            "remarks": "delete rerefenced reconciliation link results",
            "whereClause": "nodeid=:nodeid and recontype in (select value from synonymdomain where domainid = 'RECONTYPE' and maxvalue = 'ASSET') and compset in (select value from synonymdomain where domainid = 'RECONTYPE' and maxvalue = 'DEPLOYED ASSET')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TLOAMRECONLINK",
            "source": "NETPRINTER",
            "remarks": "Link between NPASSET and RECONLINK",
            "whereClause": "nodeid=:nodeid and recontype in (select value from synonymdomain where domainid = 'RECONTYPE' and maxvalue = 'ASSET') and compset in (select value from synonymdomain where domainid = 'RECONTYPE' and maxvalue = 'DEPLOYED ASSET')",
            "cardinality": null
        }
    ]
}