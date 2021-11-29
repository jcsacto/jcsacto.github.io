mos = {
    "objectName": "DMMESSAGE",
    "className": "psdi.dm.DMMessageSet",
    "description": "Processing messages associated with package",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "DMMESSAGEID",
    "primaryKeyColumns": [
        "DMMESSAGEID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
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
            "objectName": "PERSON",
            "targetObject": "DMMESSAGE",
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
            "attributeName": "DMMESSAGEID",
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
            "required": false,
            "persistent": true,
            "title": "Package",
            "remarks": "Identifies the instance of a package definition; this is a generated name",
            "sameAsAttribute": "PACKAGE",
            "sameAsObject": "DMPACKAGE"
        },
        {
            "attributeName": "MSG",
            "required": true,
            "persistent": true,
            "title": "Message",
            "remarks": "Specifies messages for package definition or instance",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MSGTYPE",
            "required": true,
            "persistent": true,
            "title": "Message Type",
            "remarks": "Specifies the message type associated with this record",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MSGDETAILS",
            "required": false,
            "persistent": true,
            "title": "Message Details",
            "remarks": "Specifies additional information for the message",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEBY",
            "required": true,
            "persistent": true,
            "title": "Change By",
            "remarks": "User Id of the user changing the record",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Change Date",
            "remarks": "Date and time information when this record is changed",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PKGDEFNAME",
            "required": true,
            "persistent": true,
            "title": "Package Definition Name",
            "remarks": "Name of the package as entered by the user",
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
            "name": "DMMESSAGE",
            "source": "DMPACKAGE",
            "remarks": "Relationship to get messages for the package.",
            "whereClause": "pkgdefname=:pkgdefname and source=:source and package=:package",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMMESSAGE",
            "source": "DMPACKAGEDEF",
            "remarks": "all message records for a package definition",
            "whereClause": "pkgdefname = :pkgdefname and source = :source",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMMESSAGE",
            "source": "DMPKGDIST",
            "remarks": "all message records for a distribution",
            "whereClause": "pkgdefname = :pkgdefname and source = :source",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMPKGDISTMSG",
            "source": "DMPKGDIST",
            "remarks": "all message records for a distribution",
            "whereClause": "pkgdefname = :pkgdefname and source = :source",
            "cardinality": "UNDEFINED"
        }
    ]
}