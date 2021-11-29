mos = {
    "objectName": "MAXTABLE",
    "className": "psdi.app.configure.MaxTableSet",
    "description": "Maximo Table",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXTABLEID",
    "primaryKeyColumns": [
        "TABLENAME"
    ],
    "logicalRelationships": [
        {
            "objectName": "MAXTABLE",
            "targetObject": "MAXSEQUENCE",
            "parentKeys": "TABLENAME",
            "targetKeys": "TBNAME",
            "relNum": "many to many",
            "status": "VERIFIED",
            "description": "The name of the table where the sequence is used.",
            "longDescription": null
        },
        {
            "objectName": "MAXTABLE",
            "targetObject": "MAXSYSINDEXES",
            "parentKeys": "TABLENAME",
            "targetKeys": "TBNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "The indexes defined on the table.",
            "longDescription": null
        },
        {
            "objectName": "MAXTABLE",
            "targetObject": "MAXTABLE",
            "parentKeys": "TABLENAME",
            "targetKeys": "LANGTABLENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "The table that stores the translated text for this table.",
            "longDescription": null
        },
        {
            "objectName": "MAXTABLE",
            "targetObject": "MAXTABLE",
            "parentKeys": "TABLENAME",
            "targetKeys": "EAUDITTBNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "The table that store e-audit data for this table.",
            "longDescription": null
        },
        {
            "objectName": "MAXTABLE",
            "targetObject": "MAXTABLE",
            "parentKeys": "TABLENAME",
            "targetKeys": "EXTTABLENAME",
            "relNum": "1 to 1",
            "status": "VERIFIED",
            "description": "Table that stores columns for the extended view on this table.",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "MAXTABLE",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "TABLENAME, CONTENTATTRIBUTE",
            "relNum": "0 to 1",
            "status": "VERIFIED",
            "description": "The attribute that is used to identify imported data.",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "MAXTABLE",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "TABLENAME, UNIQUECOLUMNNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "The column that acts as the unique ID for the table.",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "MAXTABLE",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "TABLENAME, LANGCOLUMNNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "The column in the table that stores the language code for the record.",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXTABLE",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "ALTIXNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 101",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXTABLE",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "CONTENTATTRIBUTE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 102",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXTABLE",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "EAUDITTBNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 103",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXTABLE",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "EXTTABLENAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 104",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXTABLE",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "LANGCOLUMNNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 105",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXTABLE",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "LANGTABLENAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 106",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXTABLE",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "TABLENAME",
            "relNum": "0 or 1",
            "status": "VERIFIED",
            "description": "The table that stores the data for this object.",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXTABLE",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "UNIQUECOLUMNNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 108",
            "longDescription": null
        },
        {
            "objectName": "MAXSYSINDEXES",
            "targetObject": "MAXTABLE",
            "parentKeys": "NAME",
            "targetKeys": "ALTIXNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "The name of the index that serves as the Alternative index",
            "longDescription": "What is the alternative index? qqqq"
        },
        {
            "objectName": "MAXTABLE",
            "targetObject": "MAXTABLE",
            "parentKeys": "TABLENAME",
            "targetKeys": "EAUDITTBNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "The table that store e-audit data for this table.",
            "longDescription": null
        },
        {
            "objectName": "MAXTABLE",
            "targetObject": "MAXTABLE",
            "parentKeys": "TABLENAME",
            "targetKeys": "EXTTABLENAME",
            "relNum": "1 to 1",
            "status": "VERIFIED",
            "description": "Table that stores columns for the extended view on this table.",
            "longDescription": null
        },
        {
            "objectName": "MAXTABLE",
            "targetObject": "MAXTABLE",
            "parentKeys": "TABLENAME",
            "targetKeys": "LANGTABLENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "The table that stores the translated text for this table.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "TABLENAME",
            "required": true,
            "persistent": true,
            "title": "Table ",
            "remarks": "Table name",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "ADDROWSTAMP",
            "required": true,
            "persistent": true,
            "title": "Add Rowstamp",
            "remarks": "Indicates whether this table should have a Rowstamp column",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EAUDITTBNAME",
            "required": false,
            "persistent": true,
            "title": "E-audit Table",
            "remarks": "Name of the Audit Table, if EAUDIT is enabled",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "ISAUDITTABLE",
            "required": true,
            "persistent": true,
            "title": "Is Audit Table",
            "remarks": "True if this is an Electronic Audit table (referenced as eaudittbname by another object)",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RESTOREDATA",
            "required": true,
            "persistent": true,
            "title": "Restore Data",
            "remarks": "Indicates whether data needs to be restored",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STORAGEPARTITION",
            "required": false,
            "persistent": true,
            "title": "Storage Partition",
            "remarks": "Database dependent named storage partition for the table. This is Tablespace for Oracle and Segment for Microsoft SQLServer.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TEXTSEARCHENABLED",
            "required": true,
            "persistent": true,
            "title": "Text Search Enabled",
            "remarks": "Indicates whether any of the attributes on this table may be flagged for text search",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LANGTABLENAME",
            "required": false,
            "persistent": true,
            "title": "Language Table",
            "remarks": "The name of this table's language table",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "LANGCOLUMNNAME",
            "required": false,
            "persistent": true,
            "title": "Language Column",
            "remarks": "Name of the language column on this table",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "UNIQUECOLUMNNAME",
            "required": false,
            "persistent": true,
            "title": "Unique Column",
            "remarks": "Name of the column that composes the one-column unique index for this table",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "ISLANGTABLE",
            "required": true,
            "persistent": true,
            "title": "Is Language Table",
            "remarks": "Identifies whether this is a language table",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXTABLEID",
            "required": true,
            "persistent": true,
            "title": "MAXTABLEID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ALTIXNAME",
            "required": false,
            "persistent": true,
            "title": "Alternate Index",
            "remarks": "Alternate index name for record identification by external systems, when primarykeycolseq or unique key are not appropriate.  This index may or may not be unique and it used only to support external data retrieval.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "TRIGROOT",
            "required": true,
            "persistent": true,
            "title": "Trigger Root",
            "remarks": "Trigger name root.  The actual trigger name will be composed of this root plus a suffix.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONTENTATTRIBUTE",
            "required": false,
            "persistent": true,
            "title": "Content Attribute",
            "remarks": "Name of the attribute used as a unique identifier for content delivery.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "STORAGETYPE",
            "required": true,
            "persistent": true,
            "title": "Storage Type",
            "remarks": "Storage Type",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EXTTABLENAME",
            "required": false,
            "persistent": true,
            "title": "Extension Table Name",
            "remarks": "Extension Table Name",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "MAXTABLE",
            "source": "MAXOBJECT",
            "remarks": "MaxObject to MaxTable.  If this is a persistent table, the result set will contain one object.",
            "whereClause": ":isview = :no and :persistent = :yes and tablename = :entityname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXTABLE",
            "source": "MAXOBJECTCFG",
            "remarks": "MaxObjectCfg to MaxTable.  If this is a persistent table that has been configured, the result set will contain one object.",
            "whereClause": ":isview = :no and tablename = :entityname",
            "cardinality": "UNDEFINED"
        }
    ]
}