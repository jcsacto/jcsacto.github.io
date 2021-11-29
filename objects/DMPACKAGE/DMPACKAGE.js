mos = {
    "objectName": "DMPACKAGE",
    "className": "psdi.dm.pkg.DMPackageSet",
    "description": "Specify the instance of a package",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "DMPACKAGEID",
    "primaryKeyColumns": [
        "PKGDEFNAME",
        "SOURCE",
        "PACKAGE"
    ],
    "logicalRelationships": [
        {
            "objectName": "DMPACKAGE",
            "targetObject": "DMERROR",
            "parentKeys": "PKGDEFNAME, SOURCE, PACKAGE",
            "targetKeys": "PKGDEFNAME, SOURCE, PACKAGE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Errors for Migration Manager package.",
            "longDescription": null
        },
        {
            "objectName": "DMPACKAGE",
            "targetObject": "DMMESSAGE",
            "parentKeys": "PKGDEFNAME, SOURCE, PACKAGE",
            "targetKeys": "PKGDEFNAME, SOURCE, PACKAGE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Messages for Migration Manager package.",
            "longDescription": null
        },
        {
            "objectName": "DMPACKAGE",
            "targetObject": "DMPKGCMPSRC",
            "parentKeys": "PKGDEFNAME, SOURCE, PACKAGE",
            "targetKeys": "PKGDEFNAME, SOURCE, PACKAGE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Package for Compiled Sources.",
            "longDescription": null
        },
        {
            "objectName": "DMPACKAGE",
            "targetObject": "DMPKGDISTTRACK",
            "parentKeys": "PKGDEFNAME, SOURCE, PACKAGE",
            "targetKeys": "PKGDEFNAME, SOURCE, PACKAGE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Package for Tracking Information.",
            "longDescription": null
        },
        {
            "objectName": "DMPACKAGE",
            "targetObject": "DMPKGSTAGING",
            "parentKeys": "PKGDEFNAME, SOURCE, PACKAGE",
            "targetKeys": "PKGDEFNAME, REDISTRIBUTESRC, PACKAGE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Staging Components for Package.",
            "longDescription": null
        },
        {
            "objectName": "DMPACKAGE",
            "targetObject": "DMPKGSTAGING",
            "parentKeys": "PKGDEFNAME, SOURCE, PACKAGE",
            "targetKeys": "PKGDEFNAME, SOURCE, PACKAGE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Staging Components for Package.",
            "longDescription": null
        },
        {
            "objectName": "DMPACKAGE",
            "targetObject": "DMPKGSTATUS",
            "parentKeys": "PKGDEFNAME, SOURCE, PACKAGE",
            "targetKeys": "PKGDEFNAME, REDISTRIBUTESRC, PACKAGE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "History status for Migration Manager Package.",
            "longDescription": null
        },
        {
            "objectName": "DMPACKAGE",
            "targetObject": "DMPKGSTATUS",
            "parentKeys": "PKGDEFNAME, SOURCE, PACKAGE",
            "targetKeys": "PKGDEFNAME, SOURCE, PACKAGE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "History status for Migration Manager Package.",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
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
            "objectName": "PERSON",
            "targetObject": "DMPACKAGE",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "DMPACKAGE",
            "parentKeys": "PERSONID",
            "targetKeys": "CREATEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who created the record.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "DMPACKAGEID",
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
            "remarks": "Identifies the source MAXIMO environment where package is created",
            "sameAsAttribute": "SOURCE",
            "sameAsObject": "DMPACKAGEDEF"
        },
        {
            "attributeName": "PACKAGE",
            "required": true,
            "persistent": true,
            "title": "Package",
            "remarks": "Identifies the instance of a package definition; this is a generated name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUS",
            "required": true,
            "persistent": true,
            "title": "Status",
            "remarks": "Specifies the status of this package",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FILENAME",
            "required": false,
            "persistent": true,
            "title": "File Name",
            "remarks": "Specifies the file name of this package, if a file has been generated",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "README",
            "required": false,
            "persistent": true,
            "title": "Read-Me Information",
            "remarks": "Information entered by the person creating the package that serves as read me when this package is deployed in a target Maximo environment",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CREATEBY",
            "required": true,
            "persistent": true,
            "title": "Create By",
            "remarks": "User ID of the user that created this package",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CREATEDATE",
            "required": true,
            "persistent": true,
            "title": "Create Date",
            "remarks": "Date and time information when this package was first created",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEBY",
            "required": true,
            "persistent": true,
            "title": "Change By",
            "remarks": "User ID of the user that changed this package (status change only)",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "STATUSDATE",
            "required": true,
            "persistent": true,
            "title": "Status Date",
            "remarks": "Date and time information when package was last changed",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REDISTRIBUTESRC",
            "required": false,
            "persistent": true,
            "title": "Redistribution Source",
            "remarks": "Specifies whether the package is being redistributed from the current Maximo environment",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PROGRESSSTATUS",
            "required": true,
            "persistent": true,
            "title": "Progress Status",
            "remarks": "Specifies the create/deploy progress status of a package; this is not a true status; it is indicative of progress and is managed entirely by DM",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PKGDEFNAME",
            "required": true,
            "persistent": true,
            "title": "Package Definition Name",
            "remarks": "Name of the package definition as entered by the user",
            "sameAsAttribute": "PKGDEFNAME",
            "sameAsObject": "DMPACKAGEDEF"
        },
        {
            "attributeName": "DIRECTION",
            "required": false,
            "persistent": false,
            "title": "Direction",
            "remarks": "Indicate whether the package is being distributed from current Maximo or deployed to current Maximo",
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
            "attributeName": "ISPREVIEW",
            "required": false,
            "persistent": false,
            "title": "Preview",
            "remarks": "Deploy the package in preview mode or not.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PREVIEWSQL",
            "required": false,
            "persistent": false,
            "title": "Include Database Configuration Commands",
            "remarks": "Include sql and ddl command in preview log or not",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ROLLBACKPOINT",
            "required": false,
            "persistent": false,
            "title": "Rollback Point",
            "remarks": "Point at which rollback will be called for preview mode.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "DMERROR",
            "target": "DMERROR",
            "remarks": "Errors encountered when deploying this package",
            "whereClause": "pkgdefname = :pkgdefname and source = :source and package = :package",
            "cardinality": null
        },
        {
            "name": "DMMAPDEF",
            "target": "DMMAPDEF",
            "remarks": "Relationship to the dmmapdef table",
            "whereClause": "source=:source and pkgdefname=:pkgdefname",
            "cardinality": null
        },
        {
            "name": "DMMESSAGE",
            "target": "DMMESSAGE",
            "remarks": "Relationship to get messages for the package.",
            "whereClause": "pkgdefname=:pkgdefname and source=:source and package=:package",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMPACKAGEDEF",
            "target": "DMPACKAGEDEF",
            "remarks": "Package definition record for a package",
            "whereClause": "pkgdefname = :pkgdefname and source = :source",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMPKGCMPSRC",
            "target": "DMPKGCMPSRC",
            "remarks": "dmpkgcmpsrc records for dmpackage",
            "whereClause": "pkgdefname = :pkgdefname and source = :source and package = :package",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMPKGCMPSRCDEF",
            "target": "DMPKGCMPSRCDEF",
            "remarks": "Relationship to get the compiled sources.",
            "whereClause": "pkgdefname=:pkgdefname and source=:source",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMPKGDIST",
            "target": "DMPKGDIST",
            "remarks": "all distribution records for a package",
            "whereClause": "pkgdefname = :pkgdefname and source = :source",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMPKGDISTTRACK",
            "target": "DMPKGDISTTRACK",
            "remarks": "Relationship to get distribution tracking for a package",
            "whereClause": "pkgdefname = :pkgdefname and source = :source and package = :package",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMPKGDSTTRGTALL",
            "target": "DMPKGDSTTRGT",
            "remarks": "All available targets.",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "DMPKGMETASTAGE",
            "target": "DMPKGSTAGING",
            "remarks": "all package staging records of type pkgmetadata for a package",
            "whereClause": "pkgdefname = :pkgdefname and source = :source and package = :package and type  = 'PKGMETADATA' ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMPKGSTAGING",
            "target": "DMPKGSTAGING",
            "remarks": "Relationship to get the staging records for a package",
            "whereClause": "pkgdefname = :pkgdefname and source = :source and package=:package",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMCFGMETASTAGE",
            "target": "DMPKGSTAGING",
            "remarks": "all package staging records of type cfgdata for a package",
            "whereClause": "pkgdefname = :pkgdefname and source = :source and package = :package and type  = 'CFGDATA' ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMCMPSRCSTAGE",
            "target": "DMPKGSTAGING",
            "remarks": "all package staging records of type cmpsrc for a package",
            "whereClause": "pkgdefname = :pkgdefname and source = :source and package = :package and type  = 'CMPSRC' ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMDDMETASTAGE",
            "target": "DMPKGSTAGING",
            "remarks": "all package staging record of type ddmetadata for a package",
            "whereClause": "pkgdefname = :pkgdefname and source = :source and package = :package and type  = 'DDMETADATA' ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MANIFEST",
            "target": "DMPKGSTAGING",
            "remarks": "Relationship to get manifest.",
            "whereClause": "pkgdefname = :pkgdefname and source = :source and package = :package and type  = 'MANIFEST' ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMPKGSTATUS",
            "target": "DMPKGSTATUS",
            "remarks": "Relationship to get the status  records for a package",
            "whereClause": "pkgdefname = :pkgdefname and source = :source and package=:package",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "EDITERRORDATA",
            "target": "EDITERRORDATA",
            "remarks": "Relation to the set for editing the error data.",
            "whereClause": null,
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "DMPACKAGE",
            "source": "DMPACKAGEDEF",
            "remarks": "all package records for a package definition",
            "whereClause": "pkgdefname = :pkgdefname and source = :source",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INPROGPKG",
            "source": "DMPACKAGEDEF",
            "remarks": "Get all packages that are in progress.",
            "whereClause": "pkgdefname=:pkgdefname and source=:source and status in (select value from synonymdomain where domainid='DMPACKAGESTATUS' and maxvalue in ('CREATE_INPROGRESS', 'DEPLOY_INPROGRESS'))",
            "cardinality": null
        },
        {
            "name": "DMSTAGINGPKG",
            "source": "DMPKGSTAGING",
            "remarks": "Package records for a staging record",
            "whereClause": "pkgdefname = :pkgdefname and source = :source and package=:package",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PACKAGEDEPLOYINPROGRES",
            "source": "MAXREPLACEPROC",
            "remarks": "Relationshipt to test for packages in DEPLOY_INPROGRESS.",
            "whereClause": null,
            "cardinality": null
        }
    ]
}