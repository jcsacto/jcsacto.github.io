mos = {
    "objectName": "TLOAMPROMOTE",
    "className": "psdi.app.dpldasset.virtual.PromoteNodeSet",
    "description": "Non-persistent Computer Promotion Records",
    "longDescription": null,
    "isView": true,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [
        "NODEID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "DEPLOYEDASSET",
            "targetObject": "TLOAMPROMOTE",
            "parentKeys": "NODEID",
            "targetKeys": "NODEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 41",
            "longDescription": null
        },
        {
            "objectName": "DEPLOYEDASSET",
            "targetObject": "TLOAMPROMOTE",
            "parentKeys": "NODEID",
            "targetKeys": "TLOAMPARENTID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 42",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "TLOAMPROMOTE",
            "parentKeys": "SITEID",
            "targetKeys": "DPLDSITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "NODEID",
            "required": true,
            "persistent": true,
            "title": "Node Id",
            "remarks": "Node Id",
            "sameAsAttribute": "NODEID",
            "sameAsObject": "DEPLOYEDASSET",
            "viewColumnName": "NODEID",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "NODEID"
        },
        {
            "attributeName": "ASSETCLASS",
            "required": true,
            "persistent": true,
            "title": "Asset Class",
            "remarks": "Asset Class",
            "sameAsAttribute": "ASSETCLASS",
            "sameAsObject": "DEPLOYEDASSET",
            "viewColumnName": "ASSETCLASS",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "ASSETCLASS"
        },
        {
            "attributeName": "NODENAME",
            "required": true,
            "persistent": true,
            "title": "Node",
            "remarks": "Node Name",
            "sameAsAttribute": "NODENAME",
            "sameAsObject": "DEPLOYEDASSET",
            "viewColumnName": "NODENAME",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "NODENAME"
        },
        {
            "attributeName": "DOMAINNAME",
            "required": true,
            "persistent": true,
            "title": "Domain",
            "remarks": "Domain Name",
            "sameAsAttribute": "DOMAINNAME",
            "sameAsObject": "DEPLOYEDASSET",
            "viewColumnName": "DOMAINNAME",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "DOMAINNAME"
        },
        {
            "attributeName": "GUID",
            "required": false,
            "persistent": true,
            "title": "GUID",
            "remarks": "Actual CI's GUID",
            "sameAsAttribute": "GUID",
            "sameAsObject": "DEPLOYEDASSET",
            "viewColumnName": "GUID",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "GUID"
        },
        {
            "attributeName": "TLOAMHASH",
            "required": false,
            "persistent": true,
            "title": "Partition ID",
            "remarks": "The unique ID which is used to identify a partition from a discovery perspective.  This field can be used by reconciliation to link and audit authorized partitions.",
            "sameAsAttribute": "TLOAMHASH",
            "sameAsObject": "DEPLOYEDASSET",
            "viewColumnName": "TLOAMHASH",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "TLOAMHASH"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Description",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "DEPLOYEDASSET",
            "viewColumnName": "DESCRIPTION",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "DESCRIPTION"
        },
        {
            "attributeName": "DPLDSITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "Site Id",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE",
            "viewColumnName": "DPLDSITEID",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "SITEID"
        },
        {
            "attributeName": "SERIALNUMBER",
            "required": false,
            "persistent": true,
            "title": "Serial Number",
            "remarks": "Serial Number",
            "sameAsAttribute": "SERIALNUMBER",
            "sameAsObject": "DEPLOYEDASSET",
            "viewColumnName": "SERIALNUMBER",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "SERIALNUMBER"
        },
        {
            "attributeName": "TLOAMISPROMOTED",
            "required": false,
            "persistent": true,
            "title": "Promoted?",
            "remarks": "Indicates whether or not the Deployed Asset was previously promoted using the promotion process.",
            "sameAsAttribute": "TLOAMISPROMOTED",
            "sameAsObject": "DEPLOYEDASSET",
            "viewColumnName": "TLOAMISPROMOTED",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "TLOAMISPROMOTED"
        },
        {
            "attributeName": "TLOAMPARENTID",
            "required": false,
            "persistent": true,
            "title": "Parent Node Id",
            "remarks": "Parent Node Id",
            "sameAsAttribute": "NODEID",
            "sameAsObject": "DEPLOYEDASSET",
            "viewColumnName": "TLOAMPARENTID",
            "tableName": "DPACOMPUTER",
            "tableColumnName": "TLOAMPARENTID"
        },
        {
            "attributeName": "ASSETSITEID",
            "required": false,
            "persistent": false,
            "title": "Linked Asset Site",
            "remarks": "Site of asset linked through reconciliation links",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": false,
            "title": "Linked Asset",
            "remarks": "Asset linked through reconciliation links",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "PARENTASSETNUM",
            "required": false,
            "persistent": false,
            "title": "Parent Asset",
            "remarks": "Asset linked through reconciliation links to parent node. This asset will be the parent of the promoted asset.",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "PARENTSITEID",
            "required": false,
            "persistent": false,
            "title": "Parent Asset Site",
            "remarks": "Site of parent asset. If present, this site will be used for the promoted asset.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": false,
            "title": "Location",
            "remarks": "Location to which created assets will be assigned. Location of parent is used if parent is known.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "STATUS",
            "required": false,
            "persistent": false,
            "title": "Status",
            "remarks": "Initial status for created assets",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": false,
            "title": "Site",
            "remarks": "Site for created assets",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": false,
            "title": "Organization",
            "remarks": "Organization for created assets",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "ITEMSETID",
            "required": false,
            "persistent": false,
            "title": "Item Set",
            "remarks": "Item Set for created assets",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS"
        },
        {
            "attributeName": "ITEMNUM",
            "required": false,
            "persistent": false,
            "title": "Item",
            "remarks": "Item number for created rotating assets",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "CLASSSTRUCTUREID",
            "required": false,
            "persistent": false,
            "title": "Classification",
            "remarks": "Classification for created assets",
            "sameAsAttribute": "CLASSSTRUCTUREID",
            "sameAsObject": "CLASSSTRUCTURE"
        },
        {
            "attributeName": "PROMOTECHILDREN",
            "required": true,
            "persistent": false,
            "title": "Promote Partitions",
            "remarks": "If checked, promote all child partitions along with these nodes, regardless of whether they were selected in the Computers list. This field will be enabled when children exist for the node.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TLOAMPARTITION",
            "required": true,
            "persistent": false,
            "title": "Partition",
            "remarks": "If this is a partition?",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "viewinfo": {
        "autosect": false,
        "viewwhere": null,
        "viewselect": "deployedasset.nodeid, deployedasset.assetclass, deployedasset.nodename, deployedasset.domainname, deployedasset.guid, deployedasset.tloamhash,deployedasset.description, deployedasset.siteid as dpldsiteid, deployedasset.serialnumber, deployedasset.tloamispromoted,dpacomputer.tloamparentid",
        "viewfrom": "from deployedasset left join dpacomputer on deployedasset.nodeid = dpacomputer.nodeid"
    },
    "outgoingRelationships": [
        {
            "name": "ASSET",
            "target": "ASSET",
            "remarks": "Relationship from Computer Promotion to Assets. Returns zero or one record.",
            "whereClause": "assetnum = :assetnum and siteid = :siteid",
            "cardinality": null
        },
        {
            "name": "CLASSSTRUCTURE",
            "target": "CLASSSTRUCTURE",
            "remarks": "Relationship from Computer Promotion to Classstructure Returns zero or more records.",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": null
        },
        {
            "name": "CLASSSTRUCTUREIT",
            "target": "CLASSSTRUCTURE",
            "remarks": "Relationship from Computer Promotion to lookup for Classstructure, limited to the root IT calssification only.",
            "whereClause": "classstructureid in (select a.classstructureid from classancestor a where a.ancestor=(coalesce((select varvalue from maxvars where siteid = :siteid and varname = 'ITASSET'),(select varvalue from maxvars where siteid is null and varname = 'ITASSET'))))",
            "cardinality": null
        },
        {
            "name": "COMPUTERSYSTEM",
            "target": "COMPUTERSYSTEM",
            "remarks": "Relationship from Computer Promotion Records to Computer Systems. Returns one and only one record.",
            "whereClause": "nodeid = :nodeid",
            "cardinality": null
        },
        {
            "name": "PARENTCOMPUTER",
            "target": "COMPUTERSYSTEM",
            "remarks": "Relationship from Computer Promotion Records to parent Computer Systems. Returns none or one record.",
            "whereClause": "nodeid = :tloamparentid",
            "cardinality": null
        },
        {
            "name": "DEPLOYEDASSET",
            "target": "DEPLOYEDASSET",
            "remarks": "Relationship from Asset Promotion Records to Deployed Asset. Returns one and only one record.",
            "whereClause": "nodeid = :nodeid",
            "cardinality": null
        },
        {
            "name": "DRILLDOWN",
            "target": "DRILLDOWN",
            "remarks": "Relationship from non-persistent Computer Promotion to Drilldown (no where clause). Returns one record.",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "INVENTORY",
            "target": "INVENTORY",
            "remarks": "Relationship from Computer Promotion to Inventory, used to find all inventory items for a given item and location. Returns zero or one record.",
            "whereClause": "itemnum=:itemnum and location=:location and itemsetid = :itemsetid and siteid = :siteid",
            "cardinality": null
        },
        {
            "name": "ITEM",
            "target": "ITEM",
            "remarks": "Relationship from Computer Promotion to Item. Returns zero or one record.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": null
        },
        {
            "name": "ITEMORGINFOSTATUS",
            "target": "ITEMORGINFO",
            "remarks": "Relationship from Computer Promotion to Item-Org Info to find active items. Returns zero or more records.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and orgid=:orgid and status in (select value from synonymdomain where domainid = 'ITEMSTATUS' and maxvalue in ('ACTIVE', 'PLANNING', 'PENDOBS') )",
            "cardinality": null
        },
        {
            "name": "LOCATIONS",
            "target": "LOCATIONS",
            "remarks": "Relationship from Computer Promotion to Locations. Returns zero or one record.",
            "whereClause": "location = :location and siteid = :siteid",
            "cardinality": null
        },
        {
            "name": "NETDEVICE",
            "target": "NETDEVICE",
            "remarks": "Relationship from Deployed Asset Promotion Records to Network Devices. Returns one and only one record.",
            "whereClause": "nodeid = :nodeid",
            "cardinality": null
        },
        {
            "name": "NETPRINTER",
            "target": "NETPRINTER",
            "remarks": "Relationship from Deployed Asset Promotion Records to Network Printers. Returns one and only one record.",
            "whereClause": "nodeid = :nodeid",
            "cardinality": null
        },
        {
            "name": "TLOAMPRMVALUE",
            "target": "TLOAMPRMVALUE",
            "remarks": "Relationship from Computer Promote to Promotion Values. Returns one record.",
            "whereClause": "1=1",
            "cardinality": null
        },
        {
            "name": "CHILDREN",
            "target": "TLOAMPROMOTE",
            "remarks": "Relationship from Computer Promote to get child Computer Promote records. Returns zero or more records.",
            "whereClause": "tloamparentid = :nodeid",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "TLOAMPROMOTE",
            "source": "TLOAMPRMVALUE",
            "remarks": "Relationship from Computer Promotion Values to Computer Promoteion. Returns zero or more records.",
            "whereClause": "1=1",
            "cardinality": null
        },
        {
            "name": "CHILDREN",
            "source": "TLOAMPROMOTE",
            "remarks": "Relationship from Computer Promote to get child Computer Promote records. Returns zero or more records.",
            "whereClause": "tloamparentid = :nodeid",
            "cardinality": null
        }
    ]
}