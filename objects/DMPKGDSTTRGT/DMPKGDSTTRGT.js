mos = {
    "objectName": "DMPKGDSTTRGT",
    "className": "psdi.dm.distribution.DMPkgDistTargetSet",
    "description": "Specifies target names for a package",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "DMPKGDSTTRGTID",
    "primaryKeyColumns": [
        "TARGETNAME"
    ],
    "logicalRelationships": [
        {
            "objectName": "DMPKGDSTTRGT",
            "targetObject": "DMCOMPJOB",
            "parentKeys": "TARGETNAME",
            "targetKeys": "REMOTETARGETNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Target for database Comparison job.",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "DMPKGDSTTRGT",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "DMPKGDSTTRGT",
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
            "attributeName": "DMPKGDSTTRGTID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TARGETNAME",
            "required": true,
            "persistent": true,
            "title": "Target Name",
            "remarks": "The name that is assigned to the target database in the Manage Targets window. The source database is compared to the specified target database.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TYPE",
            "required": true,
            "persistent": true,
            "title": "Type",
            "remarks": "Type of distribution - FILE or DATABASE",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "URL",
            "required": false,
            "persistent": true,
            "title": "Database URL or File Path",
            "remarks": "The URL of the target database. Define the URL and other properties of the database in the Manage Targets window.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USERNAME",
            "required": false,
            "persistent": true,
            "title": "User Name",
            "remarks": "User name for the target database - used if type is database",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PASSWORD",
            "required": false,
            "persistent": true,
            "title": "Password",
            "remarks": "Password used to connect to target database",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "The description of the target database.",
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
            "attributeName": "CHANGEBY",
            "required": true,
            "persistent": true,
            "title": "Change By",
            "remarks": "User ID of the user that created and changed this target",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Change Date",
            "remarks": "Date and time information when target entry is changed",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SCHEMANAME",
            "required": false,
            "persistent": true,
            "title": "Schema Name",
            "remarks": "Name of the database schema",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DRIVERNAME",
            "required": false,
            "persistent": true,
            "title": "Driver Name",
            "remarks": "The jdbc driver name for the database.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "DMPKGDSTTRGTALL",
            "source": "DMPACKAGE",
            "remarks": "All available targets.",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "DMPKGDSTTRGT",
            "source": "DMPACKAGEDEF",
            "remarks": "Relationship to get targets that are associated with the package definition",
            "whereClause": "targetname in (select targetname from dmpkgdist where pkgdefname=:pkgdefname and source=:source)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMPKGDSTTRGTALLDB",
            "source": "DMPACKAGEDEF",
            "remarks": "Relationship to get targets that are Database targets.",
            "whereClause": "type in (select value from synonymdomain where domainid = 'DMPKGTRGTTYPE' and maxvalue = 'DATABASE')",
            "cardinality": null
        },
        {
            "name": "DMPKGDSTTRGT",
            "source": "DMPKGDIST",
            "remarks": "Relationship to get target info.",
            "whereClause": "targetname=:targetname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ALLDMPKGDSTTRGT",
            "source": "DMPKGDIST",
            "remarks": "Relationship to get all targets",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMPKGDISTTARGET",
            "source": "DMPKGDIST",
            "remarks": "target information for a target name",
            "whereClause": "targetname = :targetname",
            "cardinality": "UNDEFINED"
        }
    ]
}