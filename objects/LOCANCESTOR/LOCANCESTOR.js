mos = {
    "objectName": "LOCANCESTOR",
    "className": "psdi.app.location.LocAncestorSet",
    "description": "The Location Ancestor Look-up table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "LOCANCESTORID",
    "primaryKeyColumns": [
        "SITEID",
        "LOCATION",
        "SYSTEMID",
        "ANCESTOR"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "LOCATIONS",
            "targetObject": "LOCANCESTOR",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, ANCESTOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location and Ancestors",
            "longDescription": "List of this location and all of its parent locations. Note that this is across all hierarchies which this location is a member of."
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "LOCANCESTOR",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location and Descendants",
            "longDescription": "List of this location and all the locations under it. Note that this is across all hierarchies which this location is a member of."
        },
        {
            "objectName": "LOCSYSTEM",
            "targetObject": "LOCANCESTOR",
            "parentKeys": "SITEID, SYSTEMID",
            "targetKeys": "SITEID, SYSTEMID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 1",
            "longDescription": null
        },
        {
            "objectName": "LOCSYSTEM",
            "targetObject": "LOCANCESTOR",
            "parentKeys": "SYSTEMID",
            "targetKeys": "SYSTEMID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Ancestor records for a hierarchical system.",
            "longDescription": "Systems can be a network or a hierarchy. Systems can include multiple sites."
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "LOCANCESTOR",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "LOCANCESTOR",
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
            "attributeName": "LOCATION",
            "required": true,
            "persistent": true,
            "title": "Location",
            "remarks": "Location Identifier",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "ANCESTOR",
            "required": true,
            "persistent": true,
            "title": "Search Location Hierarchy",
            "remarks": "An ancestor of this location",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "SYSTEMID",
            "required": true,
            "persistent": true,
            "title": "System",
            "remarks": "System of this hierarchy",
            "sameAsAttribute": "SYSTEMID",
            "sameAsObject": "LOCSYSTEM"
        },
        {
            "attributeName": "SITEID",
            "required": true,
            "persistent": true,
            "title": "Site",
            "remarks": "Site Identifier",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "LOCANCESTORID",
            "required": true,
            "persistent": true,
            "title": "LOCANCESTORID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "VIEWCONTINPUT",
            "target": "VIEWCONTINPUT",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "PRIMARYSYSLOCASSET",
            "source": "ASSET",
            "remarks": "Relationship to the LocAncestor table, used to find all location ancestors in the primary system locations. (locancestor.location = asset.location and locancestor.systemid = ( select primarysystem from site where site.siteid = asset.siteid)). This resulting set will contain zero or more objects.",
            "whereClause": "location =:location and systemid = ( select systemid from locsystem where primarysystem = 1 and siteid =:siteid) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCANCESTOR",
            "source": "CI",
            "remarks": "Relationship to the LocAncestor table, used to find the ancestors of a given ci.",
            "whereClause": "location =:location and siteid = :assetlocsiteid ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCANCESTOR",
            "source": "LOCATIONS",
            "remarks": "Relationship to the LocAncestor table, used to find the ancestors of a given operating location in the hierarchies within all systems. (locations.location=locancestor.location). The resulting set will contain zero or more objects.",
            "whereClause": "location=:location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCANCESTOR",
            "source": "LOCHIERARCHY",
            "remarks": "Relationship to the LocAncestor table, used to find all ancestors of the current LocHierarchy record in the system. (locchierarchy.location = locancestor.location and lochierarchy.systemid = locancestor.systemid). The resulting set will contain zero or more objects.",
            "whereClause": "location=:location and systemid = :systemid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCANCESTORANYSYSTEM",
            "source": "LOCHIERARCHY",
            "remarks": "Relationship to the LocAncestor table, used to find ancestors with any system for a given Location Hierarchy. (locchierarchy.parent = locancestor.location and lochierarchy.parent = locancestor.ancestor). The resulting set will contain zero or more objects.",
            "whereClause": "location=:parent and ancestor = :parent and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCANCESTORPARENT",
            "source": "LOCHIERARCHY",
            "remarks": "Relationship to the LocAncestor table, used to find the location ancestor record which represents the current LocHierarchy's parent. (locchierarchy.location = locancestor.location and lochierarchy.parent = locancestor.ancestor and lochierarchy.systemid = locancestor.systemid). The resulting set will contain one object.",
            "whereClause": "location=:location and ancestor = :parent and systemid = :systemid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCANCESTORSELF",
            "source": "LOCHIERARCHY",
            "remarks": "Relationship to the LocAncestor table, used to find the location ancestor record where location and ancestor are the same. (locchierarchy.location = locancestor.location and lochierarchy.location = locancestor.ancestor and lochierarchy.systemid = locsncestor.systemid). The resulting set will contain one object.",
            "whereClause": "location=:location and ancestor = :location and systemid = :systemid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PARENTSANCESTORS",
            "source": "LOCHIERARCHY",
            "remarks": "Relationship to the LocAncestor table, used to find the parent's ancestors for a given Location Hierarchy.  (locchierarchy.parent = locancestor.location and locchierarchy.systemid = locancestor.systemid). The resulting set will contain zero or more objects.",
            "whereClause": "location=:parent and systemid = :systemid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PARENTSANCESTORS_EXCLUDE_TOPLEVEL",
            "source": "LOCHIERARCHY",
            "remarks": "Relationship to the LocAncestor table, used to find the parent's ancestors for a given Location Hierarchy, excluding the locancestor record which represents the top-level ancestor. (locchierarchy.parent = locancestor.location and locchierarchy.systemid = locancestor.systemid) and locancestor.ancestor in (select a.location  from lochierarchy a, locancestor b where b.location=lochierarchy.parent and  b.ancestor=a.location and a.systemid=b.systemid and a.systemid=lochierarchy.systemid and a.parent is not nul ). The resulting set will contain zero or more objects.",
            "whereClause": "location=:parent and systemid = :systemid  and ancestor in (select lochierarchy.location from lochierarchy where lochierarchy.location=locancestor.ancestor and lochierarchy.systemid=locancestor.systemid and lochierarchy.parent is not null) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PARENTASDESCENDANT",
            "source": "LOCHIERARCHY",
            "remarks": "Relationship to the LocAncestor table, used to find if the proposed LocHierarchy parent already exists as a descendant of the child in this hierarchy's networked system. (locancestor.ancestor = lochierarchy.location and locancestor.location = lochierarchy.parent and locancestor.systemid = lochierarchy.systemid). The resulting set will contain zero or one object.",
            "whereClause": "ancestor=:location and location=:parent and systemid = :systemid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ANCESTORHIERARCHIES",
            "source": "LOCHIERARCHY",
            "remarks": "Relationship to the LocAncestor table, used to find whether or not the parent already exists in the system. (locchierarchy.location = locancestor.location and lochierarchy.location != locancestor.ancestor and locchierarchy.systemid = locancestor.systemid). The resulting set will contain zero or more objects.  It is not possible for a child node to point to a parent which does not already exist in the system.",
            "whereClause": "location=:location and ancestor != :location and systemid = :systemid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ANCESTORHIERARCHIES_EXCLUDE_TOPLEVEL",
            "source": "LOCHIERARCHY",
            "remarks": "Relationship to the LocAncestor table, used to find whether or not the parent already exists in the system, excluding the locancestor record which represents the top-level ancestor. (locchierarchy.parent = locancestor.location and locchierarchy.systemid = locancestor.systemid) and locancestor.ancestor in (select a.location  from lochierarchy a, locancestor b where b.location=lochierarchy.parent and  b.ancestor=a.location and a.systemid=b.systemid and a.systemid=lochierarchy.systemid and a.parent is not nul ). The resulting set will contain zero or more objects.",
            "whereClause": "location=:location and ancestor != :location and systemid = :systemid  and ancestor in (select lochierarchy.location from lochierarchy where lochierarchy.location=locancestor.ancestor and lochierarchy.systemid=locancestor.systemid and lochierarchy.parent is not null) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CHILDANCESTORS",
            "source": "LOCHIERARCHY",
            "remarks": "Relationship to the LocAncestor table, used to find the children for a given Location Hierarchy. (locchierarchy.location = locancestor.ancestor and locchierarchy.systemid = locancestor.systemid). The resulting set will contain zero or more objects.",
            "whereClause": "ancestor=:location and systemid = :systemid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MALOCPRIMARYSYSLOC",
            "source": "MULTIASSETLOCCI",
            "remarks": "To retrieve WOs whose MultiAssetLocCI list contains locations in a given Location Hierarchy",
            "whereClause": "location =:location and systemid = ( select systemid from locsystem where primarysystem = 1 and siteid =:siteid) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRIMARYSYSLOCPM",
            "source": "PM",
            "remarks": "Relationship to the PM's Primary system locations records, used to find all PM's in the Primary system locations. (locancestor.location =pm.location and locancestor.systemid =( select primarysystem from site where siteid =:siteid) ).  The resulting set will contain zero or more records.",
            "whereClause": "location =:location and systemid =( select systemid from locsystem where primarysystem = '1' and siteid =:siteid) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCANCESTORANCESTORS",
            "source": "VIEWWOPMS",
            "remarks": "Relationship from VIEWWOPMS to the LOCANCESTOR object, used to see if the VIEWWOPMS location has any ancestors.  The result set will contain zero or more objects.",
            "whereClause": "siteid=:siteid and location=:location and ancestor!=location",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCANCESTORCHILDREN",
            "source": "VIEWWOPMS",
            "remarks": "Relationship from VIEWWOPMS to the LOCANCESTOR object, used to see if any children locations exist for the VIEWWOPMS location.  The result set will contain zero or more objects.",
            "whereClause": "siteid=:siteid and ancestor=:location and ancestor!=location",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRIMARYSYSLOCWO",
            "source": "WMASSIGNMENT",
            "remarks": "Allows retrieval of all WMAssignments in the primary system's locations.",
            "whereClause": "location =:location and systemid = ( select systemid from locsystem where primarysystem = '1' and siteid =:siteid) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRIMARYSYSLOCWO",
            "source": "WORKORDER",
            "remarks": "Relationship to the workorder table itself, used to find all work orders in the Primary system locations. Used to find all work orders in the Primary system locations. (location in ( Select  location  from locancestor where systemid = ( select primarysystem from site where siteid = workorder.siteid)). This resulting set will contain zero or more objects.",
            "whereClause": "location =:location and systemid = ( select systemid from locsystem where primarysystem = '1' and siteid =:siteid) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ]
}