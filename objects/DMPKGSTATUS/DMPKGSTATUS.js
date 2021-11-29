mos = {
    "objectName": "DMPKGSTATUS",
    "className": "psdi.dm.pkg.DMPkgStatusSet",
    "description": "Specifies history of status changes for a package",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "DMPKGSTATUSID",
    "primaryKeyColumns": [
        "PKGDEFNAME",
        "SOURCE",
        "PACKAGE",
        "STATUS",
        "PROGRESSSTATUS",
        "REDISTRIBUTESRC"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
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
            "objectName": "PERSON",
            "targetObject": "DMPKGSTATUS",
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
            "attributeName": "DMPKGSTATUSID",
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
            "attributeName": "STATUS",
            "required": true,
            "persistent": true,
            "title": "Status",
            "remarks": "Specifies the status of this package",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "DMPACKAGE"
        },
        {
            "attributeName": "PROGRESSSTATUS",
            "required": true,
            "persistent": true,
            "title": "Progress Status",
            "remarks": "Specifies the create/deploy progress status of a package",
            "sameAsAttribute": "PROGRESSSTATUS",
            "sameAsObject": "DMPACKAGE"
        },
        {
            "attributeName": "CHANGEBY",
            "required": true,
            "persistent": true,
            "title": "Change By",
            "remarks": "User ID of the user that set status",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Status Date",
            "remarks": "Date and time information when package status was last changed",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": true,
            "title": "Memo",
            "remarks": "Short explanation of the status change",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REDISTRIBUTESRC",
            "required": false,
            "persistent": true,
            "title": "Redistribution Source",
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
            "name": "DMPKGSTATUS",
            "source": "DMPACKAGE",
            "remarks": "Relationship to get the status  records for a package",
            "whereClause": "pkgdefname = :pkgdefname and source = :source and package=:package",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMPKGSTATUS",
            "source": "DMPACKAGEDEF",
            "remarks": "Relationship to get all statuses for this definition.",
            "whereClause": "pkgdefname=:pkgdefname and source=:source",
            "cardinality": "UNDEFINED"
        }
    ]
}