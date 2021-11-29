mos = {
    "objectName": "DMPKGCMPSRC",
    "className": "psdi.dm.cmpsrc.DMPkgCmpSrcSet",
    "description": "Specifies compiled sources for a package instance",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "DMPKGCMPSRCID",
    "primaryKeyColumns": [
        "PKGDEFNAME",
        "SOURCE",
        "CMPSRCFILE",
        "PACKAGE"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
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
            "objectName": "DMPACKAGEDEF",
            "targetObject": "DMPKGCMPSRC",
            "parentKeys": "PKGDEFNAME, SOURCE",
            "targetKeys": "PKGDEFNAME, SOURCE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Package Definition for Compiled Sources.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "DMPKGCMPSRCID",
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
            "remarks": "Identifies the source MAXIMO environment where package is defined",
            "sameAsAttribute": "SOURCE",
            "sameAsObject": "DMPACKAGEDEF"
        },
        {
            "attributeName": "CMPSRCFILE",
            "required": true,
            "persistent": true,
            "title": "Compiled Source File",
            "remarks": "Identifies folder and name of the file included for this package",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PACKAGE",
            "required": true,
            "persistent": true,
            "title": "Package",
            "remarks": "Name of the package instance",
            "sameAsAttribute": "PACKAGE",
            "sameAsObject": "DMPACKAGE"
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
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Description of this particular file (as included in the current package)",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "DMPKGCMPSRCDEF"
        },
        {
            "attributeName": "DOWNLOADED",
            "required": true,
            "persistent": false,
            "title": "Downloaded",
            "remarks": "Non-persistent flag to indicate whether file has been downloaded.",
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
        }
    ],
    "outgoingRelationships": [
        {
            "name": "DMPKGCMPSRCDEF",
            "target": "DMPKGCMPSRCDEF",
            "remarks": "Relationship to get the compiled source file in definition.",
            "whereClause": "pkgdefname=:pkgdefname and source=:source and cmpsrcfile=:cmpsrcfile",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMPKGSTAGING",
            "target": "DMPKGSTAGING",
            "remarks": "Relationship to get the staging record for a compiled source file.",
            "whereClause": "pkgdefname=:pkgdefname and source=:source and package=:package",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "DMPKGCMPSRC",
            "source": "DMPACKAGE",
            "remarks": "dmpkgcmpsrc records for dmpackage",
            "whereClause": "pkgdefname = :pkgdefname and source = :source and package = :package",
            "cardinality": "UNDEFINED"
        }
    ]
}