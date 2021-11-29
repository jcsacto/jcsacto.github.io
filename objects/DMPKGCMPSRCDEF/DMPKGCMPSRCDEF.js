mos = {
    "objectName": "DMPKGCMPSRCDEF",
    "className": "psdi.dm.cmpsrc.DMPkgCmpSrcDefSet",
    "description": "Specifies compiled source files for a package",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "DMPKGCMPSRCDEFID",
    "primaryKeyColumns": [
        "PKGDEFNAME",
        "SOURCE",
        "CMPSRCFILE"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "DMPACKAGEDEF",
            "targetObject": "DMPKGCMPSRCDEF",
            "parentKeys": "PKGDEFNAME, SOURCE",
            "targetKeys": "PKGDEFNAME, SOURCE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Compiled Sources for Package Definition.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "DMPKGCMPSRCDEFID",
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
            "remarks": "Source Maximo environment where package definition is created",
            "sameAsAttribute": "SOURCE",
            "sameAsObject": "DMPACKAGEDEF"
        },
        {
            "attributeName": "CMPSRCFILE",
            "required": true,
            "persistent": true,
            "title": "File Name",
            "remarks": "Identifies the folder and file name of the file included in package definition",
            "sameAsAttribute": "CMPSRCFILE",
            "sameAsObject": "DMPKGCMPSRC"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Description of the complied source file",
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
            "attributeName": "UPLOADED",
            "required": true,
            "persistent": false,
            "title": "Uploaded",
            "remarks": "Non-persistent flag to indicate whether compiled source file has been uploaded.",
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
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "DMPKGCMPSRCDEF",
            "source": "DMPACKAGE",
            "remarks": "Relationship to get the compiled sources.",
            "whereClause": "pkgdefname=:pkgdefname and source=:source",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMPKGCMPSRCDEF",
            "source": "DMPACKAGEDEF",
            "remarks": "Relationship to get compiled source definitions",
            "whereClause": "pkgdefname = :pkgdefname and source = :source",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMPKGCMPSRCDEF",
            "source": "DMPKGCMPSRC",
            "remarks": "Relationship to get the compiled source file in definition.",
            "whereClause": "pkgdefname=:pkgdefname and source=:source and cmpsrcfile=:cmpsrcfile",
            "cardinality": "UNDEFINED"
        }
    ]
}