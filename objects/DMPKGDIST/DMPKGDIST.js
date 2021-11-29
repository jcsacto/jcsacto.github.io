mos = {
    "objectName": "DMPKGDIST",
    "className": "psdi.dm.distribution.DMPkgDistSet",
    "description": "Specifies destination for a package definition",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "DMPKGDISTID",
    "primaryKeyColumns": [
        "PKGDEFNAME",
        "SOURCE",
        "TARGETNAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
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
            "objectName": "PERSON",
            "targetObject": "DMPKGDIST",
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
            "attributeName": "DMPKGDISTID",
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
            "remarks": "Name of the Maximo source where package definition is created",
            "sameAsAttribute": "SOURCE",
            "sameAsObject": "DMPACKAGEDEF"
        },
        {
            "attributeName": "TARGETNAME",
            "required": true,
            "persistent": true,
            "title": "Target Name",
            "remarks": "Identifies the target to which package is distributed to",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEBY",
            "required": true,
            "persistent": true,
            "title": "Change By",
            "remarks": "User Is of the user who changed target for package definition",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Change Date",
            "remarks": "Date and time information when target is changed for a package",
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
            "name": "DMMESSAGE",
            "target": "DMMESSAGE",
            "remarks": "all message records for a distribution",
            "whereClause": "pkgdefname = :pkgdefname and source = :source",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMPKGDISTMSG",
            "target": "DMMESSAGE",
            "remarks": "all message records for a distribution",
            "whereClause": "pkgdefname = :pkgdefname and source = :source",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMPKGDISTTRACK",
            "target": "DMPKGDISTTRACK",
            "remarks": "all distribution tracking records for a package",
            "whereClause": "pkgdefname = :pkgdefname and source = :source and targetname=:targetname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMPKGDSTTRGT",
            "target": "DMPKGDSTTRGT",
            "remarks": "Relationship to get target info.",
            "whereClause": "targetname=:targetname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ALLDMPKGDSTTRGT",
            "target": "DMPKGDSTTRGT",
            "remarks": "Relationship to get all targets",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMPKGDISTTARGET",
            "target": "DMPKGDSTTRGT",
            "remarks": "target information for a target name",
            "whereClause": "targetname = :targetname",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "DMPKGDIST",
            "source": "DMPACKAGE",
            "remarks": "all distribution records for a package",
            "whereClause": "pkgdefname = :pkgdefname and source = :source",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMPKGDIST",
            "source": "DMPACKAGEDEF",
            "remarks": "Relationship to get distribution records for a definition",
            "whereClause": "pkgdefname = :pkgdefname and source = :source",
            "cardinality": "UNDEFINED"
        }
    ]
}