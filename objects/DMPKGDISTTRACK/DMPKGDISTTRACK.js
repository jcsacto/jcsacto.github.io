mos = {
    "objectName": "DMPKGDISTTRACK",
    "className": "psdi.dm.distribution.DMPkgDistTrackingSet",
    "description": "Tracking information of package",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "DMPKGDISTTRACKID",
    "primaryKeyColumns": [
        "PKGDEFNAME",
        "SOURCE",
        "PACKAGE",
        "TARGETNAME",
        "DISTRIBUTIONDATE"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
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
            "objectName": "PERSON",
            "targetObject": "DMPKGDISTTRACK",
            "parentKeys": "PERSONID",
            "targetKeys": "DISTRIBUTEDBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who distributed Tracking Information.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "DMPKGDISTTRACKID",
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
            "remarks": "Identifies the MAXIMO source environment where package is created",
            "sameAsAttribute": "SOURCE",
            "sameAsObject": "DMPACKAGEDEF"
        },
        {
            "attributeName": "PACKAGE",
            "required": true,
            "persistent": true,
            "title": "Package",
            "remarks": "Identifies instance of package definition",
            "sameAsAttribute": "PACKAGE",
            "sameAsObject": "DMPACKAGE"
        },
        {
            "attributeName": "TARGETNAME",
            "required": true,
            "persistent": true,
            "title": "Target",
            "remarks": "Name of the destination",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DISTRIBUTIONDATE",
            "required": true,
            "persistent": true,
            "title": "Distribution Date",
            "remarks": "Date and time information when package was distributed",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUS",
            "required": true,
            "persistent": true,
            "title": "Status",
            "remarks": "Status of the distribution",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUSMSG",
            "required": false,
            "persistent": true,
            "title": "Status Message",
            "remarks": "Status messgaes for distribution",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DISTRIBUTEDBY",
            "required": false,
            "persistent": true,
            "title": "Distributed By",
            "remarks": "User Id of the user who started distribution",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
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
            "name": "DMPKGDISTTRACK",
            "source": "DMPACKAGE",
            "remarks": "Relationship to get distribution tracking for a package",
            "whereClause": "pkgdefname = :pkgdefname and source = :source and package = :package",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMPKGDISTTRACK",
            "source": "DMPACKAGEDEF",
            "remarks": "Relationship to get all distribution trackings for this definition.",
            "whereClause": "pkgdefname=:pkgdefname and source=:source",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMPKGDISTTRACK",
            "source": "DMPKGDIST",
            "remarks": "all distribution tracking records for a package",
            "whereClause": "pkgdefname = :pkgdefname and source = :source and targetname=:targetname",
            "cardinality": "UNDEFINED"
        }
    ]
}