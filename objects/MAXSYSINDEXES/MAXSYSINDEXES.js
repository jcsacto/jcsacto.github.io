mos = {
    "objectName": "MAXSYSINDEXES",
    "className": "psdi.app.configure.MaxSysIndexesSet",
    "description": "The MAXSYSINDEXES Table",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXSYSINDEXESID",
    "primaryKeyColumns": [
        "NAME"
    ],
    "logicalRelationships": [
        {
            "objectName": "MAXSYSINDEXES",
            "targetObject": "MAXINTOBJDETAIL",
            "parentKeys": "NAME",
            "targetKeys": "ALTKEY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Alternative Index",
            "longDescription": null
        },
        {
            "objectName": "MAXSYSINDEXES",
            "targetObject": "MAXSYSKEYS",
            "parentKeys": "NAME",
            "targetKeys": "IXNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "The keys of the index.",
            "longDescription": "The keys are columns of the table indexed."
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
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXSYSINDEXES",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "NAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 97",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXSYSINDEXES",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "TBNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 98",
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
        }
    ],
    "columns": [
        {
            "attributeName": "NAME",
            "required": true,
            "persistent": true,
            "title": "Index",
            "remarks": "Index Name",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "TBNAME",
            "required": true,
            "persistent": true,
            "title": "Table",
            "remarks": "Table Name This Index Belongs To",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "UNIQUERULE",
            "required": true,
            "persistent": true,
            "title": "Unique Rule",
            "remarks": "Unique Index Flag (D=Duplicates, U=Unique)",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGED",
            "required": false,
            "persistent": true,
            "title": "Changed",
            "remarks": "Has This Index Been Altered By Configure?",
            "sameAsAttribute": "CHANGED",
            "sameAsObject": "MAXOBJECTCFG"
        },
        {
            "attributeName": "CLUSTERRULE",
            "required": true,
            "persistent": true,
            "title": "Clustered Index",
            "remarks": "SQL Server only - Clustered Index Flag (1=Clustered, 0=Non-Clustered)",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STORAGEPARTITION",
            "required": false,
            "persistent": true,
            "title": "Storage Partition",
            "remarks": "Database dependent, named storage partition, for the table. This is Tablespace for Oracle and Segment for Microsoft SQLServer.",
            "sameAsAttribute": "STORAGEPARTITION",
            "sameAsObject": "MAXTABLE"
        },
        {
            "attributeName": "UNIQUE",
            "required": true,
            "persistent": false,
            "title": "Enforce Uniqueness",
            "remarks": "When checked, indicates that this is a unique index.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VIEWCHANGED",
            "required": false,
            "persistent": false,
            "title": "Status",
            "remarks": "Status of configuration. Can be one of these values: To Be Added, To Be Changed, or Deleted",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REQUIRED",
            "required": true,
            "persistent": true,
            "title": "Internal",
            "remarks": "When checked, indicates this index cannnot be deleted by the user.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TEXTSEARCH",
            "required": true,
            "persistent": true,
            "title": "Text Search Index",
            "remarks": "Indicates whether this index has been created to enabvle text search",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXSYSINDEXESID",
            "required": true,
            "persistent": true,
            "title": "Maxsysindexes Id",
            "remarks": "Unique Id column",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "UNIQUEIDINDEX",
            "required": false,
            "persistent": false,
            "title": "Unique ID Index",
            "remarks": "Identifies whether this is the index for the Unique ID attribute",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "MAXINTOBJDETAIL",
            "target": "MAXINTOBJDETAIL",
            "remarks": "Relationship to check if index exists in Object Structure Detail table. It will return 0 or more rows.",
            "whereClause": "altkey=:name",
            "cardinality": null
        },
        {
            "name": "MAXSYSKEYS",
            "target": "MAXSYSKEYS",
            "remarks": "Relationship to MaxSysKeys table. (maxsyskeys.ixname = maxsysindexes.name). The result set will contain one or more objects.",
            "whereClause": "ixname = :name",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXTABLECFG",
            "target": "MAXTABLECFG",
            "remarks": "Relationship to check if index exists in Maxtable. It will return 0 or more rows.",
            "whereClause": "altixname=:name",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "MAXSYSINDEXES",
            "source": "MAXOBJECTCFG",
            "remarks": "MaxObjectCfg to MaxSysIndexes.  If this is a persistent table, the result set will contain one object for each index on this table.",
            "whereClause": ":isview = :no and :persistent = :yes and tbname = :entityname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXSYSINDEXESUNIQUE",
            "source": "MAXOBJECTCFG",
            "remarks": "MaxObjectCfg to MaxSysIndexes, getting unique indexes only.  The result set will not include the index for the uniquecolumnname, nor will it include indexes that are marked for deletion.",
            "whereClause": ":isview = :no and :persistent = :yes and tbname = :entityname and uniquerule = 'U' and changed != 'D' and exists (select * from maxsyskeys where maxsyskeys.ixname = maxsysindexes.name and maxsyskeys.colname != :uniquecolumnname)",
            "cardinality": "UNDEFINED"
        }
    ]
}