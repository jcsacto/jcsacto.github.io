mos = {
    "objectName": "PERSCOMMODITY",
    "className": "psdi.app.person.PersCommoditySet",
    "description": "Person Commodity Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "PERSCOMMODITYID",
    "primaryKeyColumns": [
        "PERSONID",
        "COMMODITY",
        "ITEMSETID",
        "ORGID",
        "SITEID",
        "LOCATION"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "COMMODITIES",
            "targetObject": "PERSCOMMODITY",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITY, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "PERSCOMMODITY",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "PARENT, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Parent Commodity",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "PERSCOMMODITY",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "PERSCOMMODITY",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PERSCOMMODITY",
            "parentKeys": "PERSONID",
            "targetKeys": "PERSONID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "PERSCOMMODITY",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item Set",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PERSCOMMODITY",
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
            "attributeName": "PERSONID",
            "required": true,
            "persistent": true,
            "title": "Person",
            "remarks": "The person who is associated with the commodity.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "COMMODITY",
            "required": true,
            "persistent": true,
            "title": "Commodity Code",
            "remarks": "Identifies the commodity that is associated with the current record.",
            "sameAsAttribute": "COMMODITY",
            "sameAsObject": "COMMODITIES"
        },
        {
            "attributeName": "ITEMSETID",
            "required": false,
            "persistent": true,
            "title": "Item Set",
            "remarks": "The item set that is associated with the current record.",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS"
        },
        {
            "attributeName": "PARENT",
            "required": false,
            "persistent": true,
            "title": "Parent",
            "remarks": "Identifies the parent commodity that is associated with the current record.",
            "sameAsAttribute": "COMMODITY",
            "sameAsObject": "COMMODITIES"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Identifies the organization that is associated with the current record.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "Identifies the site that is associated with the current record.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": true,
            "title": "Storeroom",
            "remarks": "The storeroom location where the commodity is stored.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "PERSCOMMODITYID",
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
            "name": "COMM_PERSCOMCOM",
            "target": "COMMODITIES",
            "remarks": "Returns the Commodity specified in a PersCommodity row; will return one row",
            "whereClause": "commodity = :commodity and itemsetid = :itemsetid",
            "cardinality": null
        },
        {
            "name": "COMM_PERSCOMGRP",
            "target": "COMMODITIES",
            "remarks": "Returns the Commodity specified in a PersCommodity row; will return one row",
            "whereClause": "commodity = :commodity and itemsetid = :itemsetid",
            "cardinality": null
        },
        {
            "name": "COMM_COMPARENT",
            "target": "PERSCOMMODITY",
            "remarks": "Returns Commodity Codes for a given Commodity Group, i.e. those rows where the group Commodity is the parent; returns none, one, or many rows",
            "whereClause": "personid = :personid and parent = :commodity and itemsetid = :itemsetid and commodity is not null",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "COMM_PERSCOMDEL",
            "source": "COMMODITIES",
            "remarks": "Returns PersCommodity records associated with a Commodity Code.  Will return zero, one, or many records.",
            "whereClause": "commodity = :commodity and itemsetid = :itemsetid",
            "cardinality": null
        },
        {
            "name": "COMM_PERSGRPDEL",
            "source": "COMMODITIES",
            "remarks": "Returns PersCommodity records associated with the Commodity Group.  Will return zero, one, or many records.",
            "whereClause": "commodity = :commodity and itemsetid = :itemsetid",
            "cardinality": null
        },
        {
            "name": "COMM_COMPARENT",
            "source": "PERSCOMMODITY",
            "remarks": "Returns Commodity Codes for a given Commodity Group, i.e. those rows where the group Commodity is the parent; returns none, one, or many rows",
            "whereClause": "personid = :personid and parent = :commodity and itemsetid = :itemsetid and commodity is not null",
            "cardinality": null
        },
        {
            "name": "PERSCOMMODITY",
            "source": "PERSON",
            "remarks": "Returns all PersCommodity rows associated with a Person.  Will return zero, one, or many rows.",
            "whereClause": "personid = :personid",
            "cardinality": null
        },
        {
            "name": "COMM_PERSGRP",
            "source": "PERSON",
            "remarks": "Selects Commodity groups associated with the current person; returns none, one, or more records",
            "whereClause": "personid = :personid and parent is null",
            "cardinality": null
        }
    ]
}