mos = {
    "objectName": "MAXTABLECFG",
    "className": "psdi.app.configure.MaxTableCfgSet",
    "description": "Maximo Table Configuration",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXTABLEID",
    "primaryKeyColumns": [
        "TABLENAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXTABLECFG",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "ALTIXNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 109",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXTABLECFG",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "CONTENTATTRIBUTE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 110",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXTABLECFG",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "EAUDITTBNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 111",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXTABLECFG",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "EXTTABLENAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 112",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXTABLECFG",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "LANGCOLUMNNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 113",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXTABLECFG",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "LANGTABLENAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 114",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXTABLECFG",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "TABLENAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 115",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXTABLECFG",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "UNIQUECOLUMNNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 116",
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
            "sameAsAttribute": "ADDROWSTAMP",
            "sameAsObject": "MAXTABLE"
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
            "sameAsAttribute": "ISAUDITTABLE",
            "sameAsObject": "MAXTABLE"
        },
        {
            "attributeName": "RESTOREDATA",
            "required": true,
            "persistent": true,
            "title": "Restore Data",
            "remarks": "Indicates whether data needs to be restored",
            "sameAsAttribute": "RESTOREDATA",
            "sameAsObject": "MAXTABLE"
        },
        {
            "attributeName": "STORAGEPARTITION",
            "required": false,
            "persistent": true,
            "title": "Storage Partition",
            "remarks": "Database dependent named storage partition for the table. This is Tablespace for Oracle and Segment for Microsoft SQLServer.",
            "sameAsAttribute": "STORAGEPARTITION",
            "sameAsObject": "MAXTABLE"
        },
        {
            "attributeName": "TEXTSEARCHENABLED",
            "required": true,
            "persistent": true,
            "title": "Text Search Enabled",
            "remarks": "Indicates whether any of the attributes on this table may be flagged for text search",
            "sameAsAttribute": "TEXTSEARCHENABLED",
            "sameAsObject": "MAXTABLE"
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
            "title": "MAXTABLECFGID",
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
            "sameAsAttribute": "TRIGROOT",
            "sameAsObject": "MAXTABLE"
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
            "sameAsAttribute": "STORAGETYPE",
            "sameAsObject": "MAXTABLE"
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
    "outgoingRelationships": [
        {
            "name": "MAXATTRIBUTECFG",
            "target": "MAXATTRIBUTECFG",
            "remarks": "Attributes directly owned by this table.  The result set will contain one or more objects.",
            "whereClause": "objectname in (select maxobjectcfg.objectname from maxobjectcfg where isview = :no and maxobjectcfg.entityname = :tablename)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATEDATTRIBUTES",
            "target": "MAXATTRIBUTECFG",
            "remarks": "All attributes derived from this table but not directly owned by this table.  The result set will contain zero or more objects.",
            "whereClause": "entityname = :tablename and objectname not in (select maxobjectcfg.objectname from maxobjectcfg where isview = :no and maxobjectcfg.entityname = :tablename)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXRELATIONSHIP",
            "target": "MAXRELATIONSHIP",
            "remarks": "MaxTableCfg to MaxRelationship where this table is the parent. The result set will contain zero or more objects.",
            "whereClause": "parent = :tablename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXRELATIONSHIPCHILD",
            "target": "MAXRELATIONSHIP",
            "remarks": "MaxTableCfg to MaxRelationship where this table is the child. The result set will contain zero or more objects.",
            "whereClause": "child = :tablename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATEDVIEWATTRIBUTES",
            "target": "MAXVIEWCOLUMNCFG",
            "remarks": "All view columns derived from this table.  The result set will contain zero or more objects.",
            "whereClause": "tablename = :tablename or (maxviewcolumncfg.tablename is null and maxviewcolumncfg.samestorageas is not null and exists (select * from maxviewcolumncfg c2 where c2.viewname = maxviewcolumncfg.viewname and c2.viewcolumnname = maxviewcolumncfg.samestorageas and c2.tablename = :tablename))",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "MAXTABLECFG",
            "source": "MAXOBJECTCFG",
            "remarks": "MaxObjectCfg to MaxTableCfg.  If this is a persistent table, the result set will contain one object.",
            "whereClause": ":isview = :no and :persistent = :yes and tablename = :entityname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMOBJAUDIT",
            "source": "MAXOBJECTCFG",
            "remarks": "object is an eaudit table or not",
            "whereClause": "eaudittbname = :objectname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXTABLECFG",
            "source": "MAXSYSINDEXES",
            "remarks": "Relationship to check if index exists in Maxtable. It will return 0 or more rows.",
            "whereClause": "altixname=:name",
            "cardinality": null
        }
    ]
}