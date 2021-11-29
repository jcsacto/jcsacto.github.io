mos = {
    "objectName": "DMPKGSTAGING",
    "className": "psdi.dm.pkg.DMPkgStagingSet",
    "description": "Specifies all components of a package instance",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [
        "PKGDEFNAME",
        "SOURCE",
        "PACKAGE",
        "TYPE",
        "CFGDATAORDER"
    ],
    "logicalRelationships": [
        {
            "objectName": "DMPKGSTAGING",
            "targetObject": "DMERROR",
            "parentKeys": "PKGDEFNAME, SOURCE, PACKAGE, TYPE, CFGDATAORDER",
            "targetKeys": "PKGDEFNAME, SOURCE, PACKAGE, TYPE, CFGDATAORDER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Error for Staging Components.",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
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
            "objectName": "MAXINTOBJECT",
            "targetObject": "DMPKGSTAGING",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "CFGOBJECT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Staging Components for object Structure.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "SOURCE",
            "required": true,
            "persistent": true,
            "title": "Source",
            "remarks": "Identifies the source Maximo environment where this package was defined and created",
            "sameAsAttribute": "SOURCE",
            "sameAsObject": "DMPACKAGEDEF"
        },
        {
            "attributeName": "PACKAGE",
            "required": true,
            "persistent": true,
            "title": "Package",
            "remarks": "Identifies the instance of a package definition",
            "sameAsAttribute": "PACKAGE",
            "sameAsObject": "DMPACKAGE"
        },
        {
            "attributeName": "TYPE",
            "required": true,
            "persistent": true,
            "title": "Type",
            "remarks": "Identifies the type of the staging table record",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CFGDATAORDER",
            "required": true,
            "persistent": true,
            "title": "Configuration Data Order",
            "remarks": "Identifies the order in which the particular staging record should be processed during deployment in a target environment",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONTENT",
            "required": true,
            "persistent": true,
            "title": "Content",
            "remarks": "Contains the XML-formatted or text-formatted data either created through the create process or to be deployed through the deploy process",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CMPSRCFILENAME",
            "required": false,
            "persistent": true,
            "title": "Compiled Source File Name",
            "remarks": "Specifies the file name and extension of the file uploaded by user for inclusion in the current package",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DISTSTATUS",
            "required": true,
            "persistent": true,
            "title": "Distribution Status",
            "remarks": "Indicates whether all staging records for a package have been distributed nto the current target environment from a source environment; the value in this column may be 1 or 0 and helps determine whether distribution was successful or not",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CFGOBJECT",
            "required": false,
            "persistent": true,
            "title": "Migration Object",
            "remarks": "Specifies the name of the configuration object on which the current staging record is based. There may be no value for this attribute when the record is not based on a specific configuration object.",
            "sameAsAttribute": "INTOBJECTNAME",
            "sameAsObject": "MAXINTOBJECT"
        },
        {
            "attributeName": "CFGOBJECTCOUNT",
            "required": false,
            "persistent": true,
            "title": "Configuration Object Count",
            "remarks": "Specifies the number of records of the particular configuration object that are stored in the XML placed in the CONTENT column",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REDISTRIBUTESRC",
            "required": false,
            "persistent": true,
            "title": "Redistribute Source",
            "remarks": "Specifies whether the package is being redistributed from the current Maximo environment",
            "sameAsAttribute": "SOURCE",
            "sameAsObject": "DMPACKAGEDEF"
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
            "attributeName": "MANIFEST",
            "required": false,
            "persistent": false,
            "title": "Manifest",
            "remarks": "Non-persistent column for manifest.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "DMSTAGINGPKG",
            "target": "DMPACKAGE",
            "remarks": "Package records for a staging record",
            "whereClause": "pkgdefname = :pkgdefname and source = :source and package=:package",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "DMPKGMETASTAGE",
            "source": "DMPACKAGE",
            "remarks": "all package staging records of type pkgmetadata for a package",
            "whereClause": "pkgdefname = :pkgdefname and source = :source and package = :package and type  = 'PKGMETADATA' ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMPKGSTAGING",
            "source": "DMPACKAGE",
            "remarks": "Relationship to get the staging records for a package",
            "whereClause": "pkgdefname = :pkgdefname and source = :source and package=:package",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMCFGMETASTAGE",
            "source": "DMPACKAGE",
            "remarks": "all package staging records of type cfgdata for a package",
            "whereClause": "pkgdefname = :pkgdefname and source = :source and package = :package and type  = 'CFGDATA' ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMCMPSRCSTAGE",
            "source": "DMPACKAGE",
            "remarks": "all package staging records of type cmpsrc for a package",
            "whereClause": "pkgdefname = :pkgdefname and source = :source and package = :package and type  = 'CMPSRC' ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMDDMETASTAGE",
            "source": "DMPACKAGE",
            "remarks": "all package staging record of type ddmetadata for a package",
            "whereClause": "pkgdefname = :pkgdefname and source = :source and package = :package and type  = 'DDMETADATA' ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MANIFEST",
            "source": "DMPACKAGE",
            "remarks": "Relationship to get manifest.",
            "whereClause": "pkgdefname = :pkgdefname and source = :source and package = :package and type  = 'MANIFEST' ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMPKGSTAGING",
            "source": "DMPACKAGEDEF",
            "remarks": "Get all staging records for a package definition",
            "whereClause": "pkgdefname=:pkgdefname and source=:source",
            "cardinality": null
        },
        {
            "name": "DMPKGSTAGING",
            "source": "DMPKGCMPSRC",
            "remarks": "Relationship to get the staging record for a compiled source file.",
            "whereClause": "pkgdefname=:pkgdefname and source=:source and package=:package",
            "cardinality": "UNDEFINED"
        }
    ]
}