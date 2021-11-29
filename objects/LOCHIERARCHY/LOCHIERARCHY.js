mos = {
    "objectName": "LOCHIERARCHY",
    "className": "psdi.app.location.LocHierarchySet",
    "description": "The Location Hierarchy table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "LOCHIERARCHYID",
    "primaryKeyColumns": [
        "SITEID",
        "LOCATION",
        "SYSTEMID",
        "PARENT"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "LOCATIONS",
            "targetObject": "LOCHIERARCHY",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Parents of this location",
            "longDescription": "This is across all systems this location is a member of. In hierarchies there will be at most one parent, in networked systems there can be any number of parents."
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "LOCHIERARCHY",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, PARENT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Children of this location",
            "longDescription": "This is across all systems this location is a member of. "
        },
        {
            "objectName": "LOCSYSTEM",
            "targetObject": "LOCHIERARCHY",
            "parentKeys": "SITEID, SYSTEMID",
            "targetKeys": "SITEID, SYSTEMID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 2",
            "longDescription": null
        },
        {
            "objectName": "LOCSYSTEM",
            "targetObject": "LOCHIERARCHY",
            "parentKeys": "SYSTEMID",
            "targetKeys": "SYSTEMID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Hierarchy records for a system.",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "LOCHIERARCHY",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "LOCHIERARCHY",
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
            "attributeName": "PARENT",
            "required": false,
            "persistent": true,
            "title": "Parent",
            "remarks": "The parent of this location",
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
            "attributeName": "CHILDREN",
            "required": true,
            "persistent": true,
            "title": "Children",
            "remarks": "Has children",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GISPARAM1",
            "required": false,
            "persistent": true,
            "title": "GIS Parameter 1",
            "remarks": "Graphical Information System interface parameter 1",
            "sameAsAttribute": "GISPARAM1",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "GISPARAM2",
            "required": false,
            "persistent": true,
            "title": "GIS Parameter 2",
            "remarks": "Graphical Information System interface parameter 2",
            "sameAsAttribute": "GISPARAM2",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "GISPARAM3",
            "required": false,
            "persistent": true,
            "title": "GIS Parameter 3",
            "remarks": "Graphical Information System interface parameter 3",
            "sameAsAttribute": "GISPARAM3",
            "sameAsObject": "LOCATIONS"
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
            "attributeName": "NEWPARENT",
            "required": false,
            "persistent": false,
            "title": "New Parent",
            "remarks": "NEWPARENT",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "LOCHIERARCHYID",
            "required": true,
            "persistent": true,
            "title": "LOCHIERARCHYID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "DRILLDOWN",
            "target": "DRILLDOWN",
            "remarks": "Relationship from the LOCHIERARCHY to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCANCESTOR",
            "target": "LOCANCESTOR",
            "remarks": "Relationship to the LocAncestor table, used to find all ancestors of the current LocHierarchy record in the system. (locchierarchy.location = locancestor.location and lochierarchy.systemid = locancestor.systemid). The resulting set will contain zero or more objects.",
            "whereClause": "location=:location and systemid = :systemid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCANCESTORANYSYSTEM",
            "target": "LOCANCESTOR",
            "remarks": "Relationship to the LocAncestor table, used to find ancestors with any system for a given Location Hierarchy. (locchierarchy.parent = locancestor.location and lochierarchy.parent = locancestor.ancestor). The resulting set will contain zero or more objects.",
            "whereClause": "location=:parent and ancestor = :parent and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCANCESTORPARENT",
            "target": "LOCANCESTOR",
            "remarks": "Relationship to the LocAncestor table, used to find the location ancestor record which represents the current LocHierarchy's parent. (locchierarchy.location = locancestor.location and lochierarchy.parent = locancestor.ancestor and lochierarchy.systemid = locancestor.systemid). The resulting set will contain one object.",
            "whereClause": "location=:location and ancestor = :parent and systemid = :systemid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCANCESTORSELF",
            "target": "LOCANCESTOR",
            "remarks": "Relationship to the LocAncestor table, used to find the location ancestor record where location and ancestor are the same. (locchierarchy.location = locancestor.location and lochierarchy.location = locancestor.ancestor and lochierarchy.systemid = locsncestor.systemid). The resulting set will contain one object.",
            "whereClause": "location=:location and ancestor = :location and systemid = :systemid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PARENTSANCESTORS",
            "target": "LOCANCESTOR",
            "remarks": "Relationship to the LocAncestor table, used to find the parent's ancestors for a given Location Hierarchy.  (locchierarchy.parent = locancestor.location and locchierarchy.systemid = locancestor.systemid). The resulting set will contain zero or more objects.",
            "whereClause": "location=:parent and systemid = :systemid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PARENTSANCESTORS_EXCLUDE_TOPLEVEL",
            "target": "LOCANCESTOR",
            "remarks": "Relationship to the LocAncestor table, used to find the parent's ancestors for a given Location Hierarchy, excluding the locancestor record which represents the top-level ancestor. (locchierarchy.parent = locancestor.location and locchierarchy.systemid = locancestor.systemid) and locancestor.ancestor in (select a.location  from lochierarchy a, locancestor b where b.location=lochierarchy.parent and  b.ancestor=a.location and a.systemid=b.systemid and a.systemid=lochierarchy.systemid and a.parent is not nul ). The resulting set will contain zero or more objects.",
            "whereClause": "location=:parent and systemid = :systemid  and ancestor in (select lochierarchy.location from lochierarchy where lochierarchy.location=locancestor.ancestor and lochierarchy.systemid=locancestor.systemid and lochierarchy.parent is not null) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PARENTASDESCENDANT",
            "target": "LOCANCESTOR",
            "remarks": "Relationship to the LocAncestor table, used to find if the proposed LocHierarchy parent already exists as a descendant of the child in this hierarchy's networked system. (locancestor.ancestor = lochierarchy.location and locancestor.location = lochierarchy.parent and locancestor.systemid = lochierarchy.systemid). The resulting set will contain zero or one object.",
            "whereClause": "ancestor=:location and location=:parent and systemid = :systemid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ANCESTORHIERARCHIES",
            "target": "LOCANCESTOR",
            "remarks": "Relationship to the LocAncestor table, used to find whether or not the parent already exists in the system. (locchierarchy.location = locancestor.location and lochierarchy.location != locancestor.ancestor and locchierarchy.systemid = locancestor.systemid). The resulting set will contain zero or more objects.  It is not possible for a child node to point to a parent which does not already exist in the system.",
            "whereClause": "location=:location and ancestor != :location and systemid = :systemid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ANCESTORHIERARCHIES_EXCLUDE_TOPLEVEL",
            "target": "LOCANCESTOR",
            "remarks": "Relationship to the LocAncestor table, used to find whether or not the parent already exists in the system, excluding the locancestor record which represents the top-level ancestor. (locchierarchy.parent = locancestor.location and locchierarchy.systemid = locancestor.systemid) and locancestor.ancestor in (select a.location  from lochierarchy a, locancestor b where b.location=lochierarchy.parent and  b.ancestor=a.location and a.systemid=b.systemid and a.systemid=lochierarchy.systemid and a.parent is not nul ). The resulting set will contain zero or more objects.",
            "whereClause": "location=:location and ancestor != :location and systemid = :systemid  and ancestor in (select lochierarchy.location from lochierarchy where lochierarchy.location=locancestor.ancestor and lochierarchy.systemid=locancestor.systemid and lochierarchy.parent is not null) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CHILDANCESTORS",
            "target": "LOCANCESTOR",
            "remarks": "Relationship to the LocAncestor table, used to find the children for a given Location Hierarchy. (locchierarchy.location = locancestor.ancestor and locchierarchy.systemid = locancestor.systemid). The resulting set will contain zero or more objects.",
            "whereClause": "ancestor=:location and systemid = :systemid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CHILDLOCATIONS",
            "target": "LOCATIONS",
            "remarks": "Relationship to the Locations table, used to find the location's child nodes in the hierarchy. (lochierarchy.location = locations.location). The resulting set will contain zero or more objects.",
            "whereClause": "location=:location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NEWPARENT",
            "target": "LOCATIONS",
            "remarks": "Relationship to the Locations table, used to find the information for the operating location which is being entered as a new parent of the lochierarchy.  (locchierarchy.parent =locations.location). The resulting set will contain one object.",
            "whereClause": "location=:newparent and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONS",
            "target": "LOCATIONS",
            "remarks": "Relationship to the Locations table, used to find the Locations object associated with this LocHierarchy's Parent. The WHERE clause is: locations.location = lochierarchy.location and locations.siteid = lochierarchy.siteid. The resulting set will contain one object.",
            "whereClause": "location = :parent and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCHIERARCHY",
            "target": "LOCHIERARCHY",
            "remarks": "Relationship to the LocHierarchy, used to find the same LocHierarchy record for a given LocHierarchy. (locchierarchy.location = locchierarchy.location and locchierarchy.parent = locchierarchy.parent and lochierarchy.systemid = locchierarchy.systemid). The resulting set will contain one object.",
            "whereClause": "location=:location and parent = :parent and systemid = :systemid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCHIERARCHY_OTHER",
            "target": "LOCHIERARCHY",
            "remarks": "Relationship to the LocHierarchy table, used to find other LocHierarchy records for the given operating location in the same system. (lochierarchy.location = lochierarchy.location and lochierarchy.systemid = lochierarchy.systemid). The resulting set will contain zero or more objects.",
            "whereClause": "location=:location and systemid = :systemid and parent is null and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "HIERARCHYINSYSYTEM",
            "target": "LOCHIERARCHY",
            "remarks": "Relationship to the LocHierarchy table, used to find whether or not there are multiple hierarchies in the system. (locchierarchy.systemid =locchierarchy.systemid). The resulting set will contain one or more objects.",
            "whereClause": "systemid = :systemid and parent is null and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INSYSTEM",
            "target": "LOCHIERARCHY",
            "remarks": "Relationship to the LocHierarchy table, used to find whether or not the child location entered already has a prent in the system. (locchierarchy.location = locchierarchy.location and lochierarchy.systemid = locchierarchy.systemid and lochierarchy.parent is not null). The resulting set will contain zero or more objects. A child location can have only one parent if the system is hierarchical. Attempting to make a child node point to multiple parents is not allowed in a hierachical system.",
            "whereClause": "location=:location and systemid = :systemid and parent is not null and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MULTIHIERSYS",
            "target": "LOCHIERARCHY",
            "remarks": "Relationship to the LocHierarchy table, used to find whether or not there are multiple hierarchies in the system. (locchierarchy.systemid =locchierarchy.systemid and locchierarchy.parent is null). The resulting set will contain one or more objects.",
            "whereClause": "systemid = :systemid and parent is null and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PARENTS",
            "target": "LOCHIERARCHY",
            "remarks": "Relationship to the LocHierarchy table, used to find the parent locations represented as different LocHierarchy records where the location is the current LocHierarchy's parent. (lochierarchy.location = lochierarchy.parent and lochierarchy.systemid = lochierarchy.systemid). The resulting set will contain zero or more objects.",
            "whereClause": "location=:parent and systemid = :systemid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CHILDREN",
            "target": "LOCHIERARCHY",
            "remarks": "Relationship to the LocHierarchy table, used to find the child locations represented as different LocHierarchy records where the parent is the current LocHierarchy's location. (lochierarchy.parent = lochierarchy.location and lochierarchy.systemid = lochierarchy.systemid). The resulting set will contain zero or more objects.",
            "whereClause": "parent=:location and systemid = :systemid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCSYSTEM",
            "target": "LOCSYSTEM",
            "remarks": "Relationship to the LocSystem table, used to find the system which the location hierarchy belongs. (lochierarchy.systemid = locsystem.systemid). The resulting set will contain one object.",
            "whereClause": "systemid=:systemid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "target": "VIEWCONTINPUT",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "target": "VIEWWOPMS",
            "remarks": "Relationship from the LOCHIERARCHY to the non-persistent VIEWWOPMS table (No where clause).  The resulting set will contain zero objects.  This relationship is used when the View Work Details dialog is launched from a child location field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "CHILDLOCHIERARCHY",
            "source": "DRILLDOWN",
            "remarks": "Relationship to the LocHierarchy table, used to find the child lochierarchy records of the current location in focus in the drilldown hierarchy. (lochierarchy.parent= drilldown.locInHierarchy and lochierarchy.systemid = drilldown.systemid). The resulting set will contain zero or more objects.",
            "whereClause": "parent= :locinhierarchy and systemid = :systemid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCHIERARCHY",
            "source": "LOCATIONS",
            "remarks": "Relationship to the LocHierarchy table, used to find the operating location as a node in the hierarchy within the selected system. (locations.location=lochierarchy.location and lochierarchy.systemid = locations.systemid and lochirarchy.parent is not null). The resulting set will contain zero or one object. The LocHierarchy record found from this relationship helps to identify the parent of the current location or to determine if the operating location is a top-level node if there is no parent. SystemId is a non-persistent column for the Location object. See the attribute defined in psdi.app.location.Location for more information.",
            "whereClause": "location=:location and systemid=:systemid and parent is not null and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCHIERARCHY_TOP",
            "source": "LOCATIONS",
            "remarks": "Relationship to the LocHierarchy table, used to find the hierarchy records representing the top location in the given system. (locations.systemid=lochierarchy.systemid and lochierarchy.parent is null). The resulting set will contain zero or more objects.",
            "whereClause": "systemid=:systemid and parent is null and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCHIERARCHYSELF",
            "source": "LOCATIONS",
            "remarks": "Relationship to the LocHierarchy table, used to find the operating location as a node in the hierarchy within the selected system. (locations.location=lochierarchy.location and lochierarchy.systemid = locations.systemid ). The resulting set will contain zero or one object. The LocHierarchy record found from this relationship helps to identify the parent of the current location or to determine if the operating location is a top-level node if there is no parent. SystemId is a non-persistent column for the Location object. See the attribute defined in psdi.app.location.Location for more information.",
            "whereClause": "location=:location and systemid=:systemid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCHIERLOCONLY",
            "source": "LOCATIONS",
            "remarks": "Relationship to the LocHierarchy table, used to find all hierarchy records for an operating location for all systems. (locations.location=lochierarchy.location). The resulting set will contain zero or more objects. An operating location may exist in multiple hierarchies in a networked system. It may also be found as a node in a hierarchical system.",
            "whereClause": "location=:location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CHILDREN",
            "source": "LOCATIONS",
            "remarks": "Relationship to the LocHierarchy table, used to find the operating location's child nodes in the hierarchy within the selected system. (locations.location=lochierarchy.parent and lochierarchy.systemid=locations.systemid and lochierarchy.siteid=locations.siteid). The resulting set will contain zero or more objects. SystemId is a non-persistent column for the Location object. See the attribute defined in psdi.app.location.Location for more information.",
            "whereClause": "parent=:location and systemid=:systemid and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INSYSTEM_PARENT",
            "source": "LOCATIONS",
            "remarks": "Relationship to the LocHierarchy table, used to check whether or not the parent entered already exists in the hierarchy for the selected system. (lochierarchy.systemid = locations.systemid and locations.parent = lochierarchy.location). This resulting set will contain zero or more objects. It is not possible to associate a child with a parent if the parent does not exist in the hierarchy yet. SystemId is a non-persistent column for the Location object. See the attribute defined in psdi.app.location.Location for more information.",
            "whereClause": "location=:parent and systemid = :systemid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCHIERARCHY",
            "source": "LOCHIERARCHY",
            "remarks": "Relationship to the LocHierarchy, used to find the same LocHierarchy record for a given LocHierarchy. (locchierarchy.location = locchierarchy.location and locchierarchy.parent = locchierarchy.parent and lochierarchy.systemid = locchierarchy.systemid). The resulting set will contain one object.",
            "whereClause": "location=:location and parent = :parent and systemid = :systemid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCHIERARCHY_OTHER",
            "source": "LOCHIERARCHY",
            "remarks": "Relationship to the LocHierarchy table, used to find other LocHierarchy records for the given operating location in the same system. (lochierarchy.location = lochierarchy.location and lochierarchy.systemid = lochierarchy.systemid). The resulting set will contain zero or more objects.",
            "whereClause": "location=:location and systemid = :systemid and parent is null and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "HIERARCHYINSYSYTEM",
            "source": "LOCHIERARCHY",
            "remarks": "Relationship to the LocHierarchy table, used to find whether or not there are multiple hierarchies in the system. (locchierarchy.systemid =locchierarchy.systemid). The resulting set will contain one or more objects.",
            "whereClause": "systemid = :systemid and parent is null and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INSYSTEM",
            "source": "LOCHIERARCHY",
            "remarks": "Relationship to the LocHierarchy table, used to find whether or not the child location entered already has a prent in the system. (locchierarchy.location = locchierarchy.location and lochierarchy.systemid = locchierarchy.systemid and lochierarchy.parent is not null). The resulting set will contain zero or more objects. A child location can have only one parent if the system is hierarchical. Attempting to make a child node point to multiple parents is not allowed in a hierachical system.",
            "whereClause": "location=:location and systemid = :systemid and parent is not null and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MULTIHIERSYS",
            "source": "LOCHIERARCHY",
            "remarks": "Relationship to the LocHierarchy table, used to find whether or not there are multiple hierarchies in the system. (locchierarchy.systemid =locchierarchy.systemid and locchierarchy.parent is null). The resulting set will contain one or more objects.",
            "whereClause": "systemid = :systemid and parent is null and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PARENTS",
            "source": "LOCHIERARCHY",
            "remarks": "Relationship to the LocHierarchy table, used to find the parent locations represented as different LocHierarchy records where the location is the current LocHierarchy's parent. (lochierarchy.location = lochierarchy.parent and lochierarchy.systemid = lochierarchy.systemid). The resulting set will contain zero or more objects.",
            "whereClause": "location=:parent and systemid = :systemid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CHILDREN",
            "source": "LOCHIERARCHY",
            "remarks": "Relationship to the LocHierarchy table, used to find the child locations represented as different LocHierarchy records where the parent is the current LocHierarchy's location. (lochierarchy.parent = lochierarchy.location and lochierarchy.systemid = lochierarchy.systemid). The resulting set will contain zero or more objects.",
            "whereClause": "parent=:location and systemid = :systemid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCHIERARCHY",
            "source": "LOCSYSTEM",
            "remarks": "Relationship to the LocHierarchy table, used to find the location hierarchies in a given system. (locsystem.systemid=lochierarchy.systemid). The resulting set will contain zero or more objects.",
            "whereClause": "systemid=:systemid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCHIERARCHY_CHILDREN",
            "source": "LOCSYSTEM",
            "remarks": "Relationship to the LocHierarchy table, used to find the child location hierarchy records for the operating location in a given system. (lochierarchy.systemid=locsystem.systemid and lochierarchy.parent=locsystem.location). The resulting set will contain zero or more objects. Location is a non-persistent column for the LocSystem object. See the attribute defined in psdi.app.location.LocSystem for more information.",
            "whereClause": "systemid=:systemid and parent=:location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCHIERARCHY_PARENTS",
            "source": "LOCSYSTEM",
            "remarks": "Relationship to the LocHierarchy table, used to find the parent location hierarchy records for the operating location in a given system. (lochierarchy.systemid=locsystem.systemid and lochierarchy.location = locsystem.location and lochierarchy.parent is NOT NULL). The resulting set will contain zero or more objects. Location is a non-persistent column for the LocSystem object. See the attribute defined in psdi.app.location.LocSystem for more information.",
            "whereClause": "systemid=:systemid and location=:location and parent is not null and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCHIERARCHY_TOPLEVEL",
            "source": "LOCSYSTEM",
            "remarks": "Relationship to the LocHierarchy table, used to find the top-level location hierarchy records for the operating location in a given system. (lochierarchy.systemid=locsystem.systemid and lochierarchy.location = locsystem.location and lochierarchy.parent is NULL). The resulting set will contain zero or one object. Location is a non-persistent column for the LocSystem object. See the attribute defined in psdi.app.location.LocSystem for more information.",
            "whereClause": "systemid=:systemid and location=:location and parent is null and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ]
}