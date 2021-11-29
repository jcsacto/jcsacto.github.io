mos = {
    "objectName": "DMCOLLECTIONOBJECT",
    "className": "psdi.dm.collection.DMCollectionObjectSet",
    "description": "Migration collection object",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "DMCOLLECTIONOBJECTID",
    "primaryKeyColumns": [
        "COLLECTION",
        "SOURCE",
        "OBJECT",
        "OBJECTID"
    ],
    "logicalRelationships": [
        {
            "objectName": "DMCOLLECTIONOBJECT",
            "targetObject": "DMCOLLECTIONEXPORT",
            "parentKeys": "DMCOLLECTIONOBJECTID",
            "targetKeys": "DMCOLLECTIONOBJECTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Migration Collection Object",
            "longDescription": null
        },
        {
            "objectName": "DMCOLLECTIONOBJECT",
            "targetObject": "DMCOLLECTIONRELOBJ",
            "parentKeys": "DMCOLLECTIONOBJECTID",
            "targetKeys": "DMCOLLECTIONOBJECTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Migration Collection Object",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "DMCOLLECTION",
            "targetObject": "DMCOLLECTIONOBJECT",
            "parentKeys": "COLLECTION, SOURCE",
            "targetKeys": "COLLECTION, SOURCE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Objects belonging to this Migration collection Object.",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "DMCOLLECTIONOBJECT",
            "parentKeys": "APP",
            "targetKeys": "APP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application for the Migration Object data.",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJECT",
            "targetObject": "DMCOLLECTIONOBJECT",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "INTOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Object Structure for the Migration Object data.",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "DMCOLLECTIONOBJECT",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Object for the Migration Object data.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "DMCOLLECTIONOBJECT",
            "parentKeys": "PERSONID",
            "targetKeys": "CREATEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who created the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "DMCOLLECTIONOBJECT",
            "parentKeys": "PERSONID",
            "targetKeys": "EVENTUSER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "User for the Migration Object data.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "COLLECTION",
            "required": true,
            "persistent": true,
            "title": "Collection Name",
            "remarks": "Collection name",
            "sameAsAttribute": "COLLECTION",
            "sameAsObject": "DMCOLLECTION"
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
            "remarks": "Description of this collection object",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "APP",
            "required": false,
            "persistent": true,
            "title": "Application",
            "remarks": "Specifies the application that contains the configuration records that you want in the migration collection.",
            "sameAsAttribute": "APP",
            "sameAsObject": "MAXAPPS"
        },
        {
            "attributeName": "OBJECT",
            "required": true,
            "persistent": true,
            "title": "Object",
            "remarks": "Specifies the name of the object that contains the configuration records that you want in the migration collection.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "OBJECTID",
            "required": true,
            "persistent": true,
            "title": "Object Id",
            "remarks": "Identifies the unique internal ID of the object",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PRIMARYKEYS",
            "required": true,
            "persistent": true,
            "title": "Primary Keys",
            "remarks": "A list of comma-separated name-value pairs that indicate primary key columns and the corresponding values. Only the configuration records that meet these criteria become part of the migration collection.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EVENT",
            "required": false,
            "persistent": true,
            "title": "Event",
            "remarks": "For configurations that are added automatically, indicates the type of event (ADD, UPDATE, or DELETE) that caused the record to be added to the collection.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EVENTUSER",
            "required": false,
            "persistent": true,
            "title": "Event User",
            "remarks": "For configurations that are added automatically, identifies the user that triggered the event.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CREATEBY",
            "required": false,
            "persistent": true,
            "title": "Create By",
            "remarks": "User ID of the user that created this entry",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CREATEDATE",
            "required": true,
            "persistent": true,
            "title": "Create Date",
            "remarks": "Create date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INTOBJECTNAME",
            "required": false,
            "persistent": true,
            "title": "Object Structure",
            "remarks": "Object Structure used to create output",
            "sameAsAttribute": "INTOBJECTNAME",
            "sameAsObject": "MAXINTOBJECT"
        },
        {
            "attributeName": "CREATEMODE",
            "required": true,
            "persistent": true,
            "title": "Create Mode",
            "remarks": "Indicates whether the record in the migration collection was created manually or automatically.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VALIDATIONRESULT",
            "required": false,
            "persistent": true,
            "title": "Validation Result",
            "remarks": "What problen found in validation.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DMCOLLECTIONOBJECTID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PKGDEFORDER",
            "required": false,
            "persistent": true,
            "title": "Package Definition Exception Order",
            "remarks": "Package Definition Exception Order",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "DMCOLLECTIONEXPORT",
            "target": "DMCOLLECTIONEXPORT",
            "remarks": "List of files generated by the configuration.",
            "whereClause": "dmcollectionobjectid = :dmcollectionobjectid",
            "cardinality": null
        },
        {
            "name": "DMCOLLECTIONRELOBJ",
            "target": "DMCOLLECTIONRELOBJ",
            "remarks": "Relationship from DMCOLLECTIONOBJECT to DMCOLLECTIONRELOBJ",
            "whereClause": "dmcollectionobjectid=:dmcollectionobjectid",
            "cardinality": null
        },
        {
            "name": "MAXAPPS",
            "target": "MAXAPPS",
            "remarks": "A relationship from DMCOLLECTIONOBJECT to MAXAPPS",
            "whereClause": "(app not in ('CHANGEPSWD','LOGGING') ) and ( maintbname in (select objectname from maxintobjdetail where parentobjid is null and intobjectname in (select intobjectname from maxintobject where usewith in (select value from synonymdomain where domainid='INTUSEWITH' and maxvalue='MIGRATIONMGR'))))",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "DOWNLOADS",
            "source": "DMCOLLECTION",
            "remarks": "List of configurations selected for downloading.",
            "whereClause": "collection=:collection and source=:source",
            "cardinality": null
        },
        {
            "name": "DMCOLLOBJ",
            "source": "DMCOLLECTION",
            "remarks": "Relationship to find all DMCOLLECTIONOBJECTs for a DMCOLLECTION",
            "whereClause": "collection=:collection and source=:source",
            "cardinality": null
        },
        {
            "name": "DMCOLLOBJCOMPARE",
            "source": "DMCOLLECTION",
            "remarks": "Relationship to find all dmcollectionobjects for a dmcollection",
            "whereClause": "collection=:collection and source=:source",
            "cardinality": null
        },
        {
            "name": "DMCOLLOBJVLDT",
            "source": "DMCOLLECTION",
            "remarks": "Relationship to find invalid DMCOLLECTIONOBJECTs for a DMCOLLECTION",
            "whereClause": "collection=:collection and source=:source and validationresult is not null",
            "cardinality": null
        },
        {
            "name": "DMCOLLECTIONOBJECT",
            "source": "DMCOLLECTIONRELOBJ",
            "remarks": "Relationship from DMCOLLECTIONRELOBJ to DMCOLLECTIONOBJECT",
            "whereClause": "dmcollectionobjectid = :dmcollectionobjectid",
            "cardinality": null
        }
    ]
}