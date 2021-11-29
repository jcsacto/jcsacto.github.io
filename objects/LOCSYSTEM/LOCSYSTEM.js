mos = {
    "objectName": "LOCSYSTEM",
    "className": "psdi.app.location.LocSystemSet",
    "description": "The Systems of Locations table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "LOCSYSTEMID",
    "primaryKeyColumns": [
        "SITEID",
        "SYSTEMID"
    ],
    "logicalRelationships": [
        {
            "objectName": "LOCSYSTEM",
            "targetObject": "ASSIGNREPLOC",
            "parentKeys": "SITEID, SYSTEMID",
            "targetKeys": "REPLOCSITEID, SYSTEMID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 1",
            "longDescription": null
        },
        {
            "objectName": "LOCSYSTEM",
            "targetObject": "ASSIGNREPLOC",
            "parentKeys": "SITEID, SYSTEMID",
            "targetKeys": "SITEID, SYSTEMID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location System",
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
            "objectName": "LOCSYSTEM",
            "targetObject": "SKDPROJECT",
            "parentKeys": "SITEID, SYSTEMID",
            "targetKeys": "ASSETSITEID, SYSTEMID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 5",
            "longDescription": null
        },
        {
            "objectName": "LOCSYSTEM",
            "targetObject": "SKDPROJECT",
            "parentKeys": "SITEID, SYSTEMID",
            "targetKeys": "ENDLOCSITEID, SYSTEMID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 6",
            "longDescription": null
        },
        {
            "objectName": "LOCSYSTEM",
            "targetObject": "SKDPROJECT",
            "parentKeys": "SITEID, SYSTEMID",
            "targetKeys": "MNTLOCATIONSITEID, SYSTEMID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 7",
            "longDescription": null
        },
        {
            "objectName": "LOCSYSTEM",
            "targetObject": "SKDPROJECT",
            "parentKeys": "SITEID, SYSTEMID",
            "targetKeys": "STARTLOCSITEID, SYSTEMID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 8",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "DOCTYPES",
            "targetObject": "LOCSYSTEM",
            "parentKeys": "DOCTYPE",
            "targetKeys": "DOCTYPE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Document Type",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "LOCSYSTEM",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "LOCSYSTEM",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "LOCSYSTEM",
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
            "attributeName": "SYSTEMID",
            "required": true,
            "persistent": true,
            "title": "System",
            "remarks": "Identifier for a locations system",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Description of the system",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NETWORK",
            "required": true,
            "persistent": true,
            "title": "Network",
            "remarks": "Indicates if this is a networked system",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DOCTYPE",
            "required": false,
            "persistent": true,
            "title": "Document Folder",
            "remarks": "The document type",
            "sameAsAttribute": "DOCTYPE",
            "sameAsObject": "DOCTYPES"
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
            "attributeName": "SOURCESYSID",
            "required": false,
            "persistent": true,
            "title": "Source System ID",
            "remarks": "Source System ID",
            "sameAsAttribute": "OWNER1SYSID",
            "sameAsObject": "MXCOLLAB"
        },
        {
            "attributeName": "OWNERSYSID",
            "required": false,
            "persistent": true,
            "title": "Owner System ID",
            "remarks": "Owner System ID",
            "sameAsAttribute": "OWNER1SYSID",
            "sameAsObject": "MXCOLLAB"
        },
        {
            "attributeName": "EXTERNALREFID",
            "required": false,
            "persistent": true,
            "title": "External Reference ID",
            "remarks": "External Reference ID",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Long Description for Description of the system",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": false,
            "title": "Location",
            "remarks": "LOCATION",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "PRIMARYSYSTEM",
            "required": true,
            "persistent": true,
            "title": "Primary System",
            "remarks": "Is this primary system or not ?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LOCSYSTEMID",
            "required": true,
            "persistent": true,
            "title": "LOCSYSTEMID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LANGCODE",
            "required": true,
            "persistent": true,
            "title": "Language Code",
            "remarks": "Language Column",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        },
        {
            "attributeName": "HASLD",
            "required": true,
            "persistent": true,
            "title": "Has Long Description",
            "remarks": "Boolean flag to indicate if there is any long description for this record",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ADDRESS",
            "required": true,
            "persistent": true,
            "title": "Address system",
            "remarks": "Identifies this system as the hierarchical system that creates relationships between addresses.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "LOCHIERARCHY",
            "target": "LOCHIERARCHY",
            "remarks": "Relationship to the LocHierarchy table, used to find the location hierarchies in a given system. (locsystem.systemid=lochierarchy.systemid). The resulting set will contain zero or more objects.",
            "whereClause": "systemid=:systemid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCHIERARCHY_CHILDREN",
            "target": "LOCHIERARCHY",
            "remarks": "Relationship to the LocHierarchy table, used to find the child location hierarchy records for the operating location in a given system. (lochierarchy.systemid=locsystem.systemid and lochierarchy.parent=locsystem.location). The resulting set will contain zero or more objects. Location is a non-persistent column for the LocSystem object. See the attribute defined in psdi.app.location.LocSystem for more information.",
            "whereClause": "systemid=:systemid and parent=:location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCHIERARCHY_PARENTS",
            "target": "LOCHIERARCHY",
            "remarks": "Relationship to the LocHierarchy table, used to find the parent location hierarchy records for the operating location in a given system. (lochierarchy.systemid=locsystem.systemid and lochierarchy.location = locsystem.location and lochierarchy.parent is NOT NULL). The resulting set will contain zero or more objects. Location is a non-persistent column for the LocSystem object. See the attribute defined in psdi.app.location.LocSystem for more information.",
            "whereClause": "systemid=:systemid and location=:location and parent is not null and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCHIERARCHY_TOPLEVEL",
            "target": "LOCHIERARCHY",
            "remarks": "Relationship to the LocHierarchy table, used to find the top-level location hierarchy records for the operating location in a given system. (lochierarchy.systemid=locsystem.systemid and lochierarchy.location = locsystem.location and lochierarchy.parent is NULL). The resulting set will contain zero or one object. Location is a non-persistent column for the LocSystem object. See the attribute defined in psdi.app.location.LocSystem for more information.",
            "whereClause": "systemid=:systemid and location=:location and parent is null and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "LOCSYSTEM",
            "source": "DRILLDOWN",
            "remarks": "Relationship to the Locsystem table, used to find the information for the system to which an operating location is associated. (locsystem.systemid = drilldown.systemid). The resulting set will contain one object.",
            "whereClause": "systemid=:systemid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCSYSTEMS_FOR_LOCATION",
            "source": "DRILLDOWN",
            "remarks": "Relationship to the Locsystem table, used to find the systems the current location is associated with. (exists (select * from lochierarchy where locsystem.systemid=lochierarchy.systemid and locsystem.siteid=lochierarchy.siteid and lochierarchy.location=drilldown.locvalue )). The resulting set will contain zero or more objects.",
            "whereClause": "exists (select * from lochierarchy where locsystem.systemid=lochierarchy.systemid and locsystem.siteid=lochierarchy.siteid and lochierarchy.location=:locvalue )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCSYSTEM",
            "source": "LOCATIONS",
            "remarks": "Relationship to the LocSystem table, used to find the current selected system for the operating location. (locsystem.systemid=locations.systemid). The resulting set will contain one object. An operating location can belong to many systems. SystemId is a non-persistent column which represents the current selected system. See the attribute defined in psdi.app.location.Location for more information.",
            "whereClause": "systemid=:systemid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCSYSTEMS_FOR_LOCATION",
            "source": "LOCATIONS",
            "remarks": "Relationship to the LocSystem table, used to find all systems this operating location belongs to. (where exists (select * from lochierarchy where locsystem.systemid=lochierarchy.systemid and lochierarchy.location=locations.location). The resulting set will contain zero or more objects.",
            "whereClause": "exists (select * from lochierarchy where locsystem.systemid=lochierarchy.systemid and locsystem.siteid=lochierarchy.siteid and lochierarchy.location=:location ) and siteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "INSYSTEM",
            "source": "LOCATIONS",
            "remarks": "Relationship to the LocSystem table, used to check whether or not a location hierarchy already exists for a given system. (locsystem.systemid = locations.systemid and exists(select lochierarchy.systemid from lochierarchy where lochierarchy.systemid=locsystem.systemid and lochierarchy.siteid=locsystem.siteid). The resulting set will contain zero or more objects.  Note: If a new location is being associated to a system where no hierarchies exist, the location will automatically become top-level in this system. SystemId is a non-persistent column for the Location object. See the attribute defined in psdi.app.location.Location for more information.",
            "whereClause": "systemid = :systemid and exists(select lochierarchy.systemid from lochierarchy where lochierarchy.systemid=locsystem.systemid and lochierarchy.siteid=locsystem.siteid) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCSYSTEM",
            "source": "LOCHIERARCHY",
            "remarks": "Relationship to the LocSystem table, used to find the system which the location hierarchy belongs. (lochierarchy.systemid = locsystem.systemid). The resulting set will contain one object.",
            "whereClause": "systemid=:systemid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCSYSTEM",
            "source": "SITE",
            "remarks": "Relationship to the LocSystem table, used to find the systems in this site. The resulting set will contain one or more objects.",
            "whereClause": "orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRIMARYSYSTEM",
            "source": "SITE",
            "remarks": "Relationship to the Locsystem table, used to find the primary location system record for the site. (locsystem.systemid = site.primarysystem and locsystem.siteid = site.siteid). If primarysystem is not null, this relationship will find one object.",
            "whereClause": "siteid=:siteid and primarysystem=:yes",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCSYSTEM",
            "source": "SKDPROJECT",
            "remarks": "Relationship to the Locsystem table, used to find the information for the system of the location scheduling project. The resulting set will contain one object.",
            "whereClause": "systemid=:systemid",
            "cardinality": null
        }
    ]
}