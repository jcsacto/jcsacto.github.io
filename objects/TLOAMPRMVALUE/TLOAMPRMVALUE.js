mos = {
    "objectName": "TLOAMPRMVALUE",
    "className": "psdi.app.dpldasset.virtual.PromoteValuesSet",
    "description": "Computer Promotions Values for Escalations",
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
            "attributeName": "LOCATION",
            "required": false,
            "persistent": false,
            "title": "Location",
            "remarks": "Location to which created assets will be assigned. If location given is an inventory location, any item given cannot have inactive status in inventory for that location.",
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
            "remarks": "Site for created assets. If site is entered in the Promote to Assets dialog for an individual record, that will be used if possible. Next the site on the Computer record will be used if it has been set. Finally, the default site will be tried.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": false,
            "title": "Organization",
            "remarks": "Site for created assets",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "ITEMSETID",
            "required": false,
            "persistent": false,
            "title": "Item Set",
            "remarks": "Site for created assets",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS"
        },
        {
            "attributeName": "ITEMNUM",
            "required": false,
            "persistent": false,
            "title": "Item",
            "remarks": "Item number for created rotating assets.",
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
            "remarks": "If checked, promote all child partitions along with these nodes, regardless of whether they were selected in the Computers list.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "CLASSSTRUCTURE",
            "target": "CLASSSTRUCTURE",
            "remarks": "Relationship from Computer Promotion Values to Classstructure Returns zero or one record.",
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
            "remarks": "Relationship from non-persistent Computer Promotion Values to Drilldown (no where clause). Returns one record.",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "INVENTORY",
            "target": "INVENTORY",
            "remarks": "Relationship from Computer Promotion Values to Inventory, used to find all inventory items for a given item and location. Returns zero or one record.",
            "whereClause": "itemnum=:itemnum and location=:location and itemsetid = :itemsetid and siteid = :siteid",
            "cardinality": null
        },
        {
            "name": "ITEM",
            "target": "ITEM",
            "remarks": "Relationship from Computer Promotion Values to Item. Returns zero or one record.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": null
        },
        {
            "name": "ITEMORGINFOSTATUS",
            "target": "ITEMORGINFO",
            "remarks": "Relationship from Computer Promotion Values to Item-Org Info to find active items. Returns zero or one record.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and orgid=:orgid and status in (select value from synonymdomain where domainid = 'ITEMSTATUS' and maxvalue in ('ACTIVE', 'PLANNING', 'PENDOBS') )",
            "cardinality": null
        },
        {
            "name": "LOCATIONS",
            "target": "LOCATIONS",
            "remarks": "Relationship from Computer Promotion Values to Locations. Returns zero or one record.",
            "whereClause": "location = :location and siteid = :siteid",
            "cardinality": null
        },
        {
            "name": "TLOAMPROMOTE",
            "target": "TLOAMPROMOTE",
            "remarks": "Relationship from Computer Promotion Values to Computer Promoteion. Returns zero or more records.",
            "whereClause": "1=1",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "TLOAMPRMVALUE",
            "source": "COMPUTERSYSTEM",
            "remarks": "non-persistent relationship",
            "whereClause": "1=1",
            "cardinality": null
        },
        {
            "name": "TLOAMPRMVALUE",
            "source": "NETDEVICE",
            "remarks": "non-persistent relationship",
            "whereClause": "1=1",
            "cardinality": null
        },
        {
            "name": "TLOAMPRMVALUE",
            "source": "NETPRINTER",
            "remarks": "non-persistent relationship",
            "whereClause": "1=1",
            "cardinality": null
        },
        {
            "name": "TLOAMPRMVALUE",
            "source": "TLOAMPROMOTE",
            "remarks": "Relationship from Computer Promote to Promotion Values. Returns one record.",
            "whereClause": "1=1",
            "cardinality": null
        }
    ]
}