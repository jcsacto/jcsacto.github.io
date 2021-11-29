mos = {
    "objectName": "DMCOLLECTION",
    "className": "psdi.dm.collection.DMCollectionSet",
    "description": "Migration Collections",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "DMCOLLECTIONID",
    "primaryKeyColumns": [
        "COLLECTION",
        "SOURCE"
    ],
    "logicalRelationships": [
        {
            "objectName": "DMCOLLECTION",
            "targetObject": "DMCOLLECTIONOBJECT",
            "parentKeys": "COLLECTION, SOURCE",
            "targetKeys": "COLLECTION, SOURCE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Objects belonging to this Migration collection Object.",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "DMCOLLECTION",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "MAXASYNCJOB",
            "targetObject": "DMCOLLECTION",
            "parentKeys": "JOBNUM",
            "targetKeys": "JOBNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Database Validation job number.",
            "longDescription": null
        },
        {
            "objectName": "MAXROLE",
            "targetObject": "DMCOLLECTION",
            "parentKeys": "MAXROLE",
            "targetKeys": "DMCOLLROLE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Role tracked by Change collection.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "DMCOLLECTION",
            "parentKeys": "PERSONID",
            "targetKeys": "OWNER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "User tracked by Change collection.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "COLLECTION",
            "required": true,
            "persistent": true,
            "title": "Collection Name",
            "remarks": "The name of the migration collection. Specify a name that helps you to identify the collection.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SOURCE",
            "required": true,
            "persistent": true,
            "title": "Source",
            "remarks": "The name of the product source environment where this is defined. The name is a combination of the database host name, the database identifier, and the database schema name.",
            "sameAsAttribute": "SOURCE",
            "sameAsObject": "DMPACKAGEDEF"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "A description of the migration collection. Specify a description that helps you to identify the collection or to explain the purpose of the collection.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OWNER",
            "required": false,
            "persistent": true,
            "title": "Owner",
            "remarks": "The owner of the migration collection. Only the owner can add and delete configuration records and delete the collection.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "ISPUBLIC",
            "required": true,
            "persistent": true,
            "title": "Is Public",
            "remarks": "Specifies whether the migration collection is public or private. If a collection is private, only its owner can manage it.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CREATEDATE",
            "required": true,
            "persistent": true,
            "title": "Create Date",
            "remarks": "Date and time the collection was created",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ADDTOTHIS",
            "required": false,
            "persistent": false,
            "title": "Add To Migration Collection",
            "remarks": "Add the current object to this collection",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DMCOLLROLE",
            "required": false,
            "persistent": true,
            "title": "Collection Role",
            "remarks": "Specify a role to restrict the events that are added.",
            "sameAsAttribute": "MAXROLE",
            "sameAsObject": "MAXROLE"
        },
        {
            "attributeName": "JOBNUM",
            "required": false,
            "persistent": true,
            "title": "Job Number",
            "remarks": "Job number of the validate async job.",
            "sameAsAttribute": "JOBNUM",
            "sameAsObject": "MAXASYNCJOB"
        },
        {
            "attributeName": "ISJOBRUNNING",
            "required": true,
            "persistent": true,
            "title": "Is Job Running",
            "remarks": "Is validate async job is running for this migration collection",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PKGDEFERROR",
            "required": false,
            "persistent": true,
            "title": "Package creation error",
            "remarks": "Errors during package creation",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DMCOLLECTIONID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HASLD",
            "required": true,
            "persistent": true,
            "title": "Has Long Description",
            "remarks": "Boolean flag to indicate if there is any long description for this record",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description Long description",
            "remarks": "Long Description for Description",
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
        }
    ],
    "outgoingRelationships": [
        {
            "name": "DMCOLLASYNCJOB",
            "target": "DMCOLLASYNCJOB",
            "remarks": "Relationship from DMCOLLECTION to DMCOLLASYNCJOB",
            "whereClause": "collection=:collection and source=:source",
            "cardinality": null
        },
        {
            "name": "DMCOLLASYNCJOBMSG",
            "target": "DMCOLLASYNCJOBMSG",
            "remarks": "Relationship from DMCOLLECTION to DMCOLLASYNCJOBMSG",
            "whereClause": "1=1",
            "cardinality": null
        },
        {
            "name": "DOWNLOADS",
            "target": "DMCOLLECTIONOBJECT",
            "remarks": "List of configurations selected for downloading.",
            "whereClause": "collection=:collection and source=:source",
            "cardinality": null
        },
        {
            "name": "DMCOLLOBJ",
            "target": "DMCOLLECTIONOBJECT",
            "remarks": "Relationship to find all DMCOLLECTIONOBJECTs for a DMCOLLECTION",
            "whereClause": "collection=:collection and source=:source",
            "cardinality": null
        },
        {
            "name": "DMCOLLOBJCOMPARE",
            "target": "DMCOLLECTIONOBJECT",
            "remarks": "Relationship to find all dmcollectionobjects for a dmcollection",
            "whereClause": "collection=:collection and source=:source",
            "cardinality": null
        },
        {
            "name": "DMCOLLOBJVLDT",
            "target": "DMCOLLECTIONOBJECT",
            "remarks": "Relationship to find invalid DMCOLLECTIONOBJECTs for a DMCOLLECTION",
            "whereClause": "collection=:collection and source=:source and validationresult is not null",
            "cardinality": null
        },
        {
            "name": "DMCOLLECTIONRELOBJ",
            "target": "DMCOLLECTIONRELOBJ",
            "remarks": "Relationship from DMCOLLECTION to DMCOLLECTIONRELOBJ ",
            "whereClause": "dmcollectionid=:dmcollectionid",
            "cardinality": null
        },
        {
            "name": "DMCOLLEVENTTRK",
            "target": "DMCOLLEVENTTRK",
            "remarks": "Relationship from DMCOLLECTION to DMCOLLEVENTTRK",
            "whereClause": "dmcollectionid=:dmcollectionid",
            "cardinality": null
        },
        {
            "name": "DMCOLLPACKAGEMAP",
            "target": "DMCOLLPACKAGEMAP",
            "remarks": "Relationship from DMCOLLECTION to DMCOLLPACKAGEMAP",
            "whereClause": "dmcollectionid=:dmcollectionid",
            "cardinality": null
        },
        {
            "name": "DMPACKAGEDEF",
            "target": "DMPACKAGEDEF",
            "remarks": "Relationship from DMCOLLECTION to DMPACKAGEDEF",
            "whereClause": "exists (select 1 from dmcollpackagemap where dmcollpackagemap.dmpackagedefid = dmpackagedef.dmpackagedefid and dmcollpackagemap.dmcollectionid=:dmcollectionid)",
            "cardinality": null
        },
        {
            "name": "DMPACKAGEDEFDEL",
            "target": "DMPACKAGEDEF",
            "remarks": "Relationship from DMCOLLECTION to DMPACKAGEDEF",
            "whereClause": "exists (select 1 from dmcollpackagemap where dmcollpackagemap.dmpackagedefid = dmpackagedef.dmpackagedefid and dmcollpackagemap.dmcollectionid=:dmcollectionid)",
            "cardinality": null
        },
        {
            "name": "DMPCOLLPKGDEF",
            "target": "DMPACKAGEDEF",
            "remarks": "Get package definition for source",
            "whereClause": "source=:source",
            "cardinality": null
        },
        {
            "name": "IMPORTCOLLECTION",
            "target": "IMPORTCOLLECTION",
            "remarks": "Link to Import parameters set",
            "whereClause": null,
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "DMCOLLECTION",
            "source": "DMCOMPJOB",
            "remarks": "Relationship to Collections.",
            "whereClause": "collection=:collection and source=:source",
            "cardinality": null
        }
    ]
}