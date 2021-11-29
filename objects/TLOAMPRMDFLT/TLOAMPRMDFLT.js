mos = {
    "objectName": "TLOAMPRMDFLT",
    "className": "psdi.app.dpldasset.PromoteDefaultSet",
    "description": "Computer Promotions Saved Values",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "TLOAMPRMDFLTID",
    "primaryKeyColumns": [
        "DEFAULTNAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "TLOAMPRMDFLT",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "TLOAMPRMDFLT",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "TLOAMPRMDFLT",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "TLOAMPRMDFLT",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "TLOAMPRMDFLT",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 62",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "TLOAMPRMDFLT",
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
            "attributeName": "DEFAULTNAME",
            "required": true,
            "persistent": true,
            "title": "Default name",
            "remarks": "Name of default value set, to be passed to promotion escalation action.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": true,
            "title": "Location",
            "remarks": "Location to which created assets will be assigned",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "STATUS",
            "required": false,
            "persistent": true,
            "title": "Status",
            "remarks": "Initial status for created assets",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "Site for created assets.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Site for created assets",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "ITEMSETID",
            "required": false,
            "persistent": true,
            "title": "Item Set",
            "remarks": "Site for created assets",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS"
        },
        {
            "attributeName": "ITEMNUM",
            "required": false,
            "persistent": true,
            "title": "Item",
            "remarks": "Item number for created rotating assets",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "CLASSSTRUCTUREID",
            "required": false,
            "persistent": true,
            "title": "Classification",
            "remarks": "Classification for created assets",
            "sameAsAttribute": "CLASSSTRUCTUREID",
            "sameAsObject": "CLASSSTRUCTURE"
        },
        {
            "attributeName": "PROMOTECHILDREN",
            "required": true,
            "persistent": true,
            "title": "Promote Partitions",
            "remarks": "If checked, promote all child partitions along with these nodes, regardless of whether they were selected in the Computers list.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TLOAMPRMDFLTID",
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
            "name": "CLASSSTRUCTURE",
            "target": "CLASSSTRUCTURE",
            "remarks": "Relationship from Computer Promotion Defaults to Classstructure Returns zero or one record.",
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
            "name": "DRILLDOWN",
            "target": "DRILLDOWN",
            "remarks": "Relationship from non-persistent Computer Promotion Defaults to Drilldown (no where clause). Returns one record.",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "INVENTORY",
            "target": "INVENTORY",
            "remarks": "Relationship from Computer Promotion Defaults to Inventory, used to find all inventory items for a given item and location. Returns zero or one record.",
            "whereClause": "itemnum=:itemnum and location=:location and itemsetid = :itemsetid and siteid = :siteid",
            "cardinality": null
        },
        {
            "name": "ITEM",
            "target": "ITEM",
            "remarks": "Relationship from Computer Promotion Defaults to Item. Returns zero or one record.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": null
        },
        {
            "name": "ITEMORGINFOSTATUS",
            "target": "ITEMORGINFO",
            "remarks": "Relationship from Computer Promotion Defaults to Item-Org Info to find active items. Returns zero or one record.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and orgid=:orgid and status in (select value from synonymdomain where domainid = 'ITEMSTATUS' and maxvalue in ('ACTIVE', 'PLANNING', 'PENDOBS') )",
            "cardinality": null
        },
        {
            "name": "LOCATIONS",
            "target": "LOCATIONS",
            "remarks": "Relationship from Computer Promotion Defaults to Locations. Returns zero or one record.",
            "whereClause": "location = :location and siteid = :siteid",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "TLOAMPRMDFLT",
            "source": "COMPUTERSYSTEM",
            "remarks": "computer system default",
            "whereClause": "defaultname='DO_NOT_CHANGE_THIS_DPLDASSET'",
            "cardinality": null
        },
        {
            "name": "TLOAMPRMDFLT",
            "source": "NETDEVICE",
            "remarks": "network device default",
            "whereClause": "defaultname='DO_NOT_CHANGE_THIS_NDASSET'",
            "cardinality": null
        },
        {
            "name": "TLOAMPRMDFLT",
            "source": "NETPRINTER",
            "remarks": "network printer default",
            "whereClause": "defaultname='DO_NOT_CHANGE_THIS_NPASSET'",
            "cardinality": null
        }
    ]
}