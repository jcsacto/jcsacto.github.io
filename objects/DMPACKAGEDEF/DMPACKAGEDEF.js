mos = {
    "objectName": "DMPACKAGEDEF",
    "className": "psdi.dm.DMPackageDefSet",
    "description": "Provides package definition for Deployment Manager",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "DMPACKAGEDEFID",
    "primaryKeyColumns": [
        "PKGDEFNAME",
        "SOURCE"
    ],
    "logicalRelationships": [
        {
            "objectName": "DMPACKAGEDEF",
            "targetObject": "DMCOMPJOB",
            "parentKeys": "PKGDEFNAME, SOURCE",
            "targetKeys": "PKGDEFNAME, SOURCE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Database Comparison job for Package Definition.",
            "longDescription": null
        },
        {
            "objectName": "DMPACKAGEDEF",
            "targetObject": "DMERROR",
            "parentKeys": "PKGDEFNAME, SOURCE",
            "targetKeys": "PKGDEFNAME, SOURCE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Error for Package Definition.",
            "longDescription": null
        },
        {
            "objectName": "DMPACKAGEDEF",
            "targetObject": "DMMAPDEF",
            "parentKeys": "PKGDEFNAME, SOURCE",
            "targetKeys": "PKGDEFNAME, SOURCE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Mapping for Package Definition.",
            "longDescription": null
        },
        {
            "objectName": "DMPACKAGEDEF",
            "targetObject": "DMMESSAGE",
            "parentKeys": "PKGDEFNAME, SOURCE",
            "targetKeys": "PKGDEFNAME, SOURCE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Messages for Package Definition.",
            "longDescription": null
        },
        {
            "objectName": "DMPACKAGEDEF",
            "targetObject": "DMPACKAGE",
            "parentKeys": "PKGDEFNAME, SOURCE",
            "targetKeys": "PKGDEFNAME, SOURCE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Package for Package Definition.",
            "longDescription": null
        },
        {
            "objectName": "DMPACKAGEDEF",
            "targetObject": "DMPKGCFGGRPDEF",
            "parentKeys": "PKGDEFNAME, SOURCE",
            "targetKeys": "PKGDEFNAME, SOURCE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Package Definition.",
            "longDescription": null
        },
        {
            "objectName": "DMPACKAGEDEF",
            "targetObject": "DMPKGCFGOBJDEF",
            "parentKeys": "PKGDEFNAME, SOURCE",
            "targetKeys": "PKGDEFNAME, SOURCE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Package Definition",
            "longDescription": null
        },
        {
            "objectName": "DMPACKAGEDEF",
            "targetObject": "DMPKGCMPSRC",
            "parentKeys": "PKGDEFNAME, SOURCE",
            "targetKeys": "PKGDEFNAME, SOURCE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Package Definition for Compiled Sources.",
            "longDescription": null
        },
        {
            "objectName": "DMPACKAGEDEF",
            "targetObject": "DMPKGCMPSRCDEF",
            "parentKeys": "PKGDEFNAME, SOURCE",
            "targetKeys": "PKGDEFNAME, SOURCE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Compiled Sources for Package Definition.",
            "longDescription": null
        },
        {
            "objectName": "DMPACKAGEDEF",
            "targetObject": "DMPKGDEFSTATUS",
            "parentKeys": "PKGDEFNAME, SOURCE",
            "targetKeys": "PKGDEFNAME, SOURCE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Status History",
            "longDescription": null
        },
        {
            "objectName": "DMPACKAGEDEF",
            "targetObject": "DMPKGDIST",
            "parentKeys": "PKGDEFNAME, SOURCE",
            "targetKeys": "PKGDEFNAME, SOURCE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Destination for Package Definition.",
            "longDescription": null
        },
        {
            "objectName": "DMPACKAGEDEF",
            "targetObject": "DMPKGDISTTRACK",
            "parentKeys": "PKGDEFNAME, SOURCE",
            "targetKeys": "PKGDEFNAME, SOURCE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Package Definition for Tracking Information.",
            "longDescription": null
        },
        {
            "objectName": "DMPACKAGEDEF",
            "targetObject": "DMPKGEVENTTRK",
            "parentKeys": "PKGDEFNAME, SOURCE",
            "targetKeys": "PKGDEFNAME, SOURCE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Tracking Events for Package Definition.",
            "longDescription": null
        },
        {
            "objectName": "DMPACKAGEDEF",
            "targetObject": "DMPKGSTAGING",
            "parentKeys": "PKGDEFNAME, SOURCE",
            "targetKeys": "PKGDEFNAME, REDISTRIBUTESRC",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Staging Components for Package Definition.",
            "longDescription": null
        },
        {
            "objectName": "DMPACKAGEDEF",
            "targetObject": "DMPKGSTAGING",
            "parentKeys": "PKGDEFNAME, SOURCE",
            "targetKeys": "PKGDEFNAME, SOURCE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Staging Components for Package Definition.",
            "longDescription": null
        },
        {
            "objectName": "DMPACKAGEDEF",
            "targetObject": "DMPKGSTATUS",
            "parentKeys": "PKGDEFNAME, SOURCE",
            "targetKeys": "PKGDEFNAME, REDISTRIBUTESRC",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "History status for Migration Manager Package Definition.",
            "longDescription": null
        },
        {
            "objectName": "DMPACKAGEDEF",
            "targetObject": "DMPKGSTATUS",
            "parentKeys": "PKGDEFNAME, SOURCE",
            "targetKeys": "PKGDEFNAME, SOURCE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "History status for Migration Manager Package Definition.",
            "longDescription": null
        },
        {
            "objectName": "DMPACKAGEDEF",
            "targetObject": "DMPKGTRACKHIST",
            "parentKeys": "PKGDEFNAME, SOURCE",
            "targetKeys": "PKGDEFNAME, SOURCE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "History tracking for Package Definition.",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "DMPACKAGEDEF",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "MAXROLE",
            "targetObject": "DMPACKAGEDEF",
            "parentKeys": "MAXROLE",
            "targetKeys": "DMROLE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Role used by Package Definition.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "DMPACKAGEDEF",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "DMPACKAGEDEFID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SOURCE",
            "required": true,
            "persistent": true,
            "title": "Source",
            "remarks": "The name of the product source environment where the package is defined. The name is a combination of the database host name, the database identifier, and the database schema name.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Description of package definition",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LANGCODE",
            "required": true,
            "persistent": true,
            "title": "Language Code",
            "remarks": "Language Code",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "DESCRIPTION Long description",
            "remarks": "Long description for DESCRIPTION",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEBY",
            "required": true,
            "persistent": true,
            "title": "Change By",
            "remarks": "User ID of the user that changed the package definition",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Change Date",
            "remarks": "Date and time information when the package was last changed",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TYPE",
            "required": true,
            "persistent": true,
            "title": "Type",
            "remarks": "Type of the package - SNAPSHOT or CHANGE",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ACTIVE",
            "required": true,
            "persistent": true,
            "title": "Active",
            "remarks": "Indicates if package is active or inactive",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BATCHSIZE",
            "required": true,
            "persistent": true,
            "title": "Batch Size",
            "remarks": "Indicates the number of configuration records that will be collected during create process for all configuration objects of this package.  The number of records applies only to the root MBO of the given configuration object",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DMROLE",
            "required": false,
            "persistent": true,
            "title": "Change Role",
            "remarks": "Specifies a maxrole record pointing to role types",
            "sameAsAttribute": "MAXROLE",
            "sameAsObject": "MAXROLE"
        },
        {
            "attributeName": "PKGDEFNAME",
            "required": true,
            "persistent": true,
            "title": "Package Definition Name",
            "remarks": "Name of the package definition as entered by the user",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "MSGFILTER",
            "required": false,
            "persistent": false,
            "title": "Filter",
            "remarks": "Non-persistent field for filtering messages",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FILTERPKG",
            "required": false,
            "persistent": false,
            "title": "Filter Package",
            "remarks": "Non-persistent field to store the package to be filtered by.",
            "sameAsAttribute": "PACKAGE",
            "sameAsObject": "DMPACKAGE"
        },
        {
            "attributeName": "STATUSDATE",
            "required": true,
            "persistent": true,
            "title": "Status Date",
            "remarks": "Date and time the status was last changed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUS",
            "required": true,
            "persistent": true,
            "title": "Status",
            "remarks": "package definition status",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONTENTID",
            "required": true,
            "persistent": true,
            "title": "Content Id",
            "remarks": "Unique attribute for content delivery",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "XMLACTION",
            "required": true,
            "persistent": true,
            "title": "Processing Action",
            "remarks": "Processing action used for package creation",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NP_XMLACTION",
            "required": false,
            "persistent": false,
            "title": "Processing Action",
            "remarks": "non-persistent attribute for the processing action overriding default value",
            "sameAsAttribute": "XMLACTION",
            "sameAsObject": "DMPACKAGEDEF"
        },
        {
            "attributeName": "MAPOPTION",
            "required": false,
            "persistent": false,
            "title": "Mapping Options",
            "remarks": "Select this option to show all the migration objects or to show only the migration objects that have selected attributes.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAPOBJECT",
            "required": false,
            "persistent": false,
            "title": "Mapping Object definition",
            "remarks": "Non Persistent for Mapping CFGObject",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAPOBJECTDESC",
            "required": false,
            "persistent": false,
            "title": "Mapping Object Description",
            "remarks": "Non Persistent for Mapping Object Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "COMMLOG",
            "target": "COMMLOG",
            "remarks": "Relationship to get communication logs.",
            "whereClause": "ownerid=:dmpackagedefid and ownertable='DMPACAKAGEDEF'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMCFGGROUP",
            "target": "DMCFGGROUP",
            "remarks": "Relationship for config groups associated with a package definition ",
            "whereClause": "cfgobjgroup in (select cfgobjgroup from dmpkgcfggrpdef g where g.pkgdefname=:pkgdefname and g.source=:source)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PKGMETADATACFGGROUP",
            "target": "DMCFGGROUP",
            "remarks": "Relationship for package metadata config groups",
            "whereClause": "cfgobjgroup='MIGRATION'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMCFGOBJECT",
            "target": "DMCFGOBJECT",
            "remarks": "Relationship to get all config objects for a package def.",
            "whereClause": "cfgobjgroup in (select cfgobjgroup from dmpkgcfggrpdef where pkgdefname=:pkgdefname and source=:source) or cfgobjgroup in (select dependentgroup from dmdependency where dependinggroup in (select cfgobjgroup from dmpkgcfggrpdef where pkgdefname=:pkgdefname and source=:source))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAPCFGOBJ",
            "target": "DMCFGOBJECT",
            "remarks": "Relationship for getting Configuration Object description",
            "whereClause": "cfgobject=:mapobject",
            "cardinality": null
        },
        {
            "name": "DMCOLLPACKAGEMAP",
            "target": "DMCOLLPACKAGEMAP",
            "remarks": "Relationship from DMPACKAGEDEF to DMCOLLPACKAGEMAP",
            "whereClause": "dmpackagedefid=:dmpackagedefid",
            "cardinality": null
        },
        {
            "name": "DMCOMPJOB",
            "target": "DMCOMPJOB",
            "remarks": "Relationship between DM Package Definition and Database Comparison Job",
            "whereClause": "pkgdefname = :pkgdefname and source = :source",
            "cardinality": null
        },
        {
            "name": "DMCOMPJOBNODELETE",
            "target": "DMCOMPJOB",
            "remarks": "Show everything but the deleted jobs.",
            "whereClause": "pkgdefname = :pkgdefname and source = :source and status not in (select value from synonymdomain where domainid='DMCOMPJOBSTATUS' and maxvalue = 'DELETE')",
            "cardinality": null
        },
        {
            "name": "DMDEPLOYABLEPKG",
            "target": "DMDEPLOYABLEPKG",
            "remarks": "Relationship to get deployable packages",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAPPEDATTRIBUTES",
            "target": "DMMAPPEDATTRIBUTES",
            "remarks": "Relationship to table that siplays mapped attributes.",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "DMMAPRULES",
            "target": "DMMAPRULES",
            "remarks": "DMMAPRULES table.",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "MAPPING_TREE",
            "target": "DMMAPTREE",
            "remarks": "Relationship for Mapping tree",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "MAPPING_TREE_RULE",
            "target": "DMMAPTREERULE",
            "remarks": "Relationship for Mapping Rules tree",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "DMMESSAGE",
            "target": "DMMESSAGE",
            "remarks": "all message records for a package definition",
            "whereClause": "pkgdefname = :pkgdefname and source = :source",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMPACKAGE",
            "target": "DMPACKAGE",
            "remarks": "all package records for a package definition",
            "whereClause": "pkgdefname = :pkgdefname and source = :source",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INPROGPKG",
            "target": "DMPACKAGE",
            "remarks": "Get all packages that are in progress.",
            "whereClause": "pkgdefname=:pkgdefname and source=:source and status in (select value from synonymdomain where domainid='DMPACKAGESTATUS' and maxvalue in ('CREATE_INPROGRESS', 'DEPLOY_INPROGRESS'))",
            "cardinality": null
        },
        {
            "name": "DMPKGCFGGRPDEF",
            "target": "DMPKGCFGGRPDEF",
            "remarks": "Groups for a package and source",
            "whereClause": "pkgdefname = :pkgdefname and source = :source",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMPKGCFGOBJDEF",
            "target": "DMPKGCFGOBJDEF",
            "remarks": "Relationship to get the set of package related config object details",
            "whereClause": "pkgdefname = :pkgdefname and source = :source",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMPKGCMPSRCDEF",
            "target": "DMPKGCMPSRCDEF",
            "remarks": "Relationship to get compiled source definitions",
            "whereClause": "pkgdefname = :pkgdefname and source = :source",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMPKGDEFCHANGESTAT",
            "target": "DMPKGDEFCHANGESTAT",
            "remarks": "Relationship to get the non-persistent DMPKGDEFCHANGESTAT table.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMPKGDEFSTATUS",
            "target": "DMPKGDEFSTATUS",
            "remarks": "Relationship to get the statuses of the definition",
            "whereClause": "pkgdefname=:pkgdefname and source=:source",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMPKGDIST",
            "target": "DMPKGDIST",
            "remarks": "Relationship to get distribution records for a definition",
            "whereClause": "pkgdefname = :pkgdefname and source = :source",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMPKGDISTTRACK",
            "target": "DMPKGDISTTRACK",
            "remarks": "Relationship to get all distribution trackings for this definition.",
            "whereClause": "pkgdefname=:pkgdefname and source=:source",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMPKGDSTTRGT",
            "target": "DMPKGDSTTRGT",
            "remarks": "Relationship to get targets that are associated with the package definition",
            "whereClause": "targetname in (select targetname from dmpkgdist where pkgdefname=:pkgdefname and source=:source)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMPKGDSTTRGTALLDB",
            "target": "DMPKGDSTTRGT",
            "remarks": "Relationship to get targets that are Database targets.",
            "whereClause": "type in (select value from synonymdomain where domainid = 'DMPKGTRGTTYPE' and maxvalue = 'DATABASE')",
            "cardinality": null
        },
        {
            "name": "DMPKGEVENTTRK",
            "target": "DMPKGEVENTTRK",
            "remarks": "Relationship to get all tracked events for this definition.",
            "whereClause": "pkgdefname=:pkgdefname and source=:source",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMPKGEVENTTRK_ROOT",
            "target": "DMPKGEVENTTRK",
            "remarks": "Relationship to get tracked events for the root level mbo.",
            "whereClause": "pkgdefname=:pkgdefname and source=:source and parentobject is null",
            "cardinality": null
        },
        {
            "name": "DMPKGSTAGING",
            "target": "DMPKGSTAGING",
            "remarks": "Get all staging records for a package definition",
            "whereClause": "pkgdefname=:pkgdefname and source=:source",
            "cardinality": null
        },
        {
            "name": "DMPKGSTATUS",
            "target": "DMPKGSTATUS",
            "remarks": "Relationship to get all statuses for this definition.",
            "whereClause": "pkgdefname=:pkgdefname and source=:source",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMPKGTRACKHIST",
            "target": "DMPKGTRACKHIST",
            "remarks": "Relationship to get all trackinghistory for this definition.",
            "whereClause": "pkgdefname=:pkgdefname and source=:source",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PKGDEF_TREE",
            "target": "DMSTRUC",
            "remarks": "Relationship for package definition hier tree",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMPKGDEFLONGDESC",
            "target": "LONGDESCRIPTION",
            "remarks": "long description record for dmpackagedef",
            "whereClause": "ldkey=:dmpackagedefid and ldownertable = 'DMPACKAGEDEF'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAPMBOOBJ",
            "target": "MAXOBJECT",
            "remarks": "Relationship for getting MBO Object description",
            "whereClause": "objectname = :mapobjectdesc",
            "cardinality": null
        },
        {
            "name": "STATUSDESC",
            "target": "SYNONYMDOMAIN",
            "remarks": "Relationship to synonymdomain table, used to find description for the status, it will contain one object. ",
            "whereClause": "domainid='DMPKGDEFSTATUS' and value=:status and :&DOMAINFILTER&_STATUS",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "DMPACKAGEDEF",
            "source": "DMCOLLECTION",
            "remarks": "Relationship from DMCOLLECTION to DMPACKAGEDEF",
            "whereClause": "exists (select 1 from dmcollpackagemap where dmcollpackagemap.dmpackagedefid = dmpackagedef.dmpackagedefid and dmcollpackagemap.dmcollectionid=:dmcollectionid)",
            "cardinality": null
        },
        {
            "name": "DMPACKAGEDEFDEL",
            "source": "DMCOLLECTION",
            "remarks": "Relationship from DMCOLLECTION to DMPACKAGEDEF",
            "whereClause": "exists (select 1 from dmcollpackagemap where dmcollpackagemap.dmpackagedefid = dmpackagedef.dmpackagedefid and dmcollpackagemap.dmcollectionid=:dmcollectionid)",
            "cardinality": null
        },
        {
            "name": "DMPCOLLPKGDEF",
            "source": "DMCOLLECTION",
            "remarks": "Get package definition for source",
            "whereClause": "source=:source",
            "cardinality": null
        },
        {
            "name": "DMPACKAGEDEF",
            "source": "DMCOMPJOB",
            "remarks": "Relationship between Database Comparison Job and DM Package Definition",
            "whereClause": "pkgdefname = :pkgdefname and source = :source",
            "cardinality": null
        },
        {
            "name": "DMPACKAGEDEF",
            "source": "DMPACKAGE",
            "remarks": "Package definition record for a package",
            "whereClause": "pkgdefname = :pkgdefname and source = :source",
            "cardinality": "UNDEFINED"
        }
    ]
}