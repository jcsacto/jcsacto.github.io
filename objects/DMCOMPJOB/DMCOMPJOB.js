mos = {
    "objectName": "DMCOMPJOB",
    "className": "psdi.dm.DMCompJobSet",
    "description": "Database Comparison Job",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "DMCOMPJOBID",
    "primaryKeyColumns": [
        "PKGDEFNAME",
        "SOURCE",
        "COMPJOBNUM"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
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
            "objectName": "DMPKGDSTTRGT",
            "targetObject": "DMCOMPJOB",
            "parentKeys": "TARGETNAME",
            "targetKeys": "REMOTETARGETNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Target for database Comparison job.",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "DMCOMPJOB",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Object for Database Comparison Job.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "DMCOMPJOB",
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
            "attributeName": "PKGDEFNAME",
            "required": true,
            "persistent": true,
            "title": "Package Definition Name",
            "remarks": "Name of the package definition as entered by the user",
            "sameAsAttribute": "PKGDEFNAME",
            "sameAsObject": "DMPACKAGEDEF"
        },
        {
            "attributeName": "SOURCE",
            "required": true,
            "persistent": true,
            "title": "Source",
            "remarks": "The name of the product source environment where the package is defined. The name is a combination of the database host name, the database identifier, and the database schema name.",
            "sameAsAttribute": "SOURCE",
            "sameAsObject": "DMPACKAGEDEF"
        },
        {
            "attributeName": "COMPJOBNUM",
            "required": true,
            "persistent": true,
            "title": "Job Number",
            "remarks": "Identifies the database comparison job that was submitted for the package definition.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REMOTETARGETNAME",
            "required": true,
            "persistent": true,
            "title": "Remote Target Name",
            "remarks": "The name that is assigned to the target database in the Manage Targets window. The source database is compared to the specified target database.",
            "sameAsAttribute": "TARGETNAME",
            "sameAsObject": "DMPKGDSTTRGT"
        },
        {
            "attributeName": "STARTDATE",
            "required": true,
            "persistent": true,
            "title": "Start Date",
            "remarks": "The date when the database comparison started.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDDATE",
            "required": false,
            "persistent": true,
            "title": "End Date",
            "remarks": "The date when the database comparison stopped.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEBY",
            "required": true,
            "persistent": true,
            "title": "Initiated By",
            "remarks": "The user who initiated the compare job",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "STATUS",
            "required": true,
            "persistent": true,
            "title": "Status",
            "remarks": "The status is one of the following values: Submitted, In progress, Error, or Complete.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OBJECTNAME",
            "required": false,
            "persistent": true,
            "title": "Current Object",
            "remarks": "Identifies the object currently being processed",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "DMCOMPJOBID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COLLECTION",
            "required": false,
            "persistent": false,
            "title": "Collection Name",
            "remarks": "Collection name",
            "sameAsAttribute": "COLLECTION",
            "sameAsObject": "DMCOLLECTION"
        },
        {
            "attributeName": "COLLDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "A description of the migration collection. Specify a description that helps you to identify the collection or to explain the purpose of the collection.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "DMCOLLECTION"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "DMCOLLECTION",
            "target": "DMCOLLECTION",
            "remarks": "Relationship to Collections.",
            "whereClause": "collection=:collection and source=:source",
            "cardinality": null
        },
        {
            "name": "DMCOMPARESYNCJOB",
            "target": "DMCOMPARESYNCJOB",
            "remarks": "Relationship from DMCOMPJOB to DMCOMPARESYNCJOB",
            "whereClause": "1=1",
            "cardinality": null
        },
        {
            "name": "DMCOMPASYNCMSG",
            "target": "DMCOMPASYNCMSG",
            "remarks": "Relationship to the non persistent object DMCOMPASYNCMSG",
            "whereClause": "1=1",
            "cardinality": null
        },
        {
            "name": "DMCOMPDELSYNCJOB",
            "target": "DMCOMPDELSYNCJOB",
            "remarks": "Relationship from DMCOMPJOB to DMCOMPDELSYNCJOB",
            "whereClause": "1=1",
            "cardinality": null
        },
        {
            "name": "DMCOMPRESULT",
            "target": "DMCOMPRESULT",
            "remarks": "One to many relationship from Database Comparison Job to Database Comparison Result",
            "whereClause": "compjobnum = :compjobnum",
            "cardinality": null
        },
        {
            "name": "DMCOMPRESULTTOCOLLECTION",
            "target": "DMCOMPRESULT",
            "remarks": "Relationship to all records to add to a Collection.",
            "whereClause": "compjobnum=:compjobnum and result in (select value from synonymdomain where domainid = 'DMCOMPRESULT' and maxvalue not in ('MATCH', 'REMOTEONLY'))",
            "cardinality": null
        },
        {
            "name": "DMPACKAGEDEF",
            "target": "DMPACKAGEDEF",
            "remarks": "Relationship between Database Comparison Job and DM Package Definition",
            "whereClause": "pkgdefname = :pkgdefname and source = :source",
            "cardinality": null
        },
        {
            "name": "DMCOMPASYNCJOBMSG",
            "target": "MAXASYNCJOBMSG",
            "remarks": "Relationship to the MAXASYNCJOBMSG",
            "whereClause": "jobnum=:compjobnum",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "DMCOMPJOB",
            "source": "DMCOMPRESULT",
            "remarks": "Relationship from Database Comparison Result to Database Comparison Job",
            "whereClause": "compjobnum = :compjobnum",
            "cardinality": null
        },
        {
            "name": "DMCOMPJOB",
            "source": "DMPACKAGEDEF",
            "remarks": "Relationship between DM Package Definition and Database Comparison Job",
            "whereClause": "pkgdefname = :pkgdefname and source = :source",
            "cardinality": null
        },
        {
            "name": "DMCOMPJOBNODELETE",
            "source": "DMPACKAGEDEF",
            "remarks": "Show everything but the deleted jobs.",
            "whereClause": "pkgdefname = :pkgdefname and source = :source and status not in (select value from synonymdomain where domainid='DMCOMPJOBSTATUS' and maxvalue = 'DELETE')",
            "cardinality": null
        }
    ]
}