mos = {
    "objectName": "MAXOBJECTCFG",
    "className": "psdi.app.configure.MaxObjectCfgSet",
    "description": "Maximo Object Configuration",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "MAXOBJECTID",
    "primaryKeyColumns": [
        "OBJECTNAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "MAXOBJECTCFG",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXOBJECTCFG",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "ENTITYNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 85",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXOBJECTCFG",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "EXTENDSOBJECT",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 86",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXOBJECTCFG",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "The configuration version of the MaxObject.",
            "longDescription": null
        },
        {
            "objectName": "MAXSERVICE",
            "targetObject": "MAXOBJECTCFG",
            "parentKeys": "SERVICENAME",
            "targetKeys": "SERVICENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 2",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "OBJECTNAME",
            "required": true,
            "persistent": true,
            "title": "Object",
            "remarks": "Name of the business object.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "CLASSNAME",
            "required": false,
            "persistent": true,
            "title": "Class",
            "remarks": "The Java class that is used to represent and manage the business object.",
            "sameAsAttribute": "CLASSNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": true,
            "persistent": true,
            "title": "Description",
            "remarks": "A clear description of the object.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "EAUDITENABLED",
            "required": true,
            "persistent": true,
            "title": "Audit Enabled",
            "remarks": "When checked, indicates that Electronic Auditing (EAUDIT) is enabled for this object.",
            "sameAsAttribute": "EAUDITENABLED",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "EAUDITFILTER",
            "required": false,
            "persistent": true,
            "title": "E-audit Filter",
            "remarks": "User defined filter for an Electronic Audit record.",
            "sameAsAttribute": "EAUDITFILTER",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "ENTITYNAME",
            "required": false,
            "persistent": true,
            "title": "Entity",
            "remarks": "The name of the database object upon which the business object depends. The database object can be a table or a view.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "ESIGFILTER",
            "required": false,
            "persistent": true,
            "title": "E-signature Filter",
            "remarks": "User defined filter for an Electronic Signature.",
            "sameAsAttribute": "ESIGFILTER",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "EXTENDSOBJECT",
            "required": false,
            "persistent": true,
            "title": "Extends Object",
            "remarks": "The business object that the specified business object extends. Extend an object only when the corresponding entity of the specified business object is a view.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "IMPORTED",
            "required": true,
            "persistent": true,
            "title": "Imported",
            "remarks": "Indicates that the object was created in the database and imported into the product environment.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISVIEW",
            "required": true,
            "persistent": true,
            "title": "View",
            "remarks": "When checked, indicates that this is a view; when clear, indicates that this is a table.",
            "sameAsAttribute": "ISVIEW",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "PERSISTENT",
            "required": true,
            "persistent": true,
            "title": "Persistent",
            "remarks": "Indicates a persistent object that can be a view or a table. An object must be persistent for you to define an index on it.",
            "sameAsAttribute": "PERSISTENT",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "SERVICENAME",
            "required": true,
            "persistent": true,
            "title": "Service",
            "remarks": "The name of the start up service for the product on which the business object depends.",
            "sameAsAttribute": "SERVICENAME",
            "sameAsObject": "MAXSERVICE"
        },
        {
            "attributeName": "SITEORGTYPE",
            "required": true,
            "persistent": true,
            "title": "Level",
            "remarks": "The organizational level to which the object applies.",
            "sameAsAttribute": "SITEORGTYPE",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "USERDEFINED",
            "required": true,
            "persistent": true,
            "title": "User Defined",
            "remarks": "Indicates that the object was created by a user.",
            "sameAsAttribute": "USERDEFINED",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "CHANGED",
            "required": true,
            "persistent": true,
            "title": "Changed",
            "remarks": "Indicates whether this object has been changed via Configure",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAINOBJECT",
            "required": true,
            "persistent": true,
            "title": "Main Object",
            "remarks": "Indicates a main object for business applications and workflows.",
            "sameAsAttribute": "MAINOBJECT",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "ISAUDITTABLE",
            "required": true,
            "persistent": false,
            "title": "Is Audit Table",
            "remarks": "When checked, indicates that this is an Electronic Audit table (referenced as eaudittbname by another object).  (Value from MaxTableCfg.)",
            "sameAsAttribute": "ISAUDITTABLE",
            "sameAsObject": "MAXTABLE"
        },
        {
            "attributeName": "EAUDITTBNAME",
            "required": false,
            "persistent": false,
            "title": "Audit Table",
            "remarks": "Name of the Audit Table, if EAUDIT is enabled.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
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
            "attributeName": "INTERNAL",
            "required": true,
            "persistent": true,
            "title": "Internal",
            "remarks": "Indicates that the object is reserved for internal use by the platform and cannot be altered by using the Database Configuration application.",
            "sameAsAttribute": "INTERNAL",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "STORAGEPARTITION",
            "required": false,
            "persistent": false,
            "title": "Storage Partition",
            "remarks": "Database dependent, named storage partition, for the table. This is Tablespace for Oracle and Segment for Microsoft SQLServer.",
            "sameAsAttribute": "STORAGEPARTITION",
            "sameAsObject": "MAXTABLE"
        },
        {
            "attributeName": "ADDROWSTAMP",
            "required": true,
            "persistent": false,
            "title": "Add Rowstamp",
            "remarks": "Indicates whether this table should have a Rowstamp column.",
            "sameAsAttribute": "ADDROWSTAMP",
            "sameAsObject": "MAXTABLE"
        },
        {
            "attributeName": "RESTOREDATA",
            "required": true,
            "persistent": false,
            "title": "Restore Data",
            "remarks": "Indicates whether or not the data needs to be restored.",
            "sameAsAttribute": "RESTOREDATA",
            "sameAsObject": "MAXTABLE"
        },
        {
            "attributeName": "TEXTSEARCHENABLED",
            "required": true,
            "persistent": false,
            "title": "Text Search Enabled",
            "remarks": "When checked, indicates that any of the attributes on this table may be flagged for a text search.",
            "sameAsAttribute": "TEXTSEARCHENABLED",
            "sameAsObject": "MAXTABLE"
        },
        {
            "attributeName": "AUTOSELECT",
            "required": true,
            "persistent": false,
            "title": "Automatically Select",
            "remarks": "When selected, indicates a dynamic view, which automatically updates with any changes made to the data in the underlying tables.",
            "sameAsAttribute": "AUTOSELECT",
            "sameAsObject": "MAXVIEW"
        },
        {
            "attributeName": "VIEWSELECT",
            "required": false,
            "persistent": false,
            "title": "View Select",
            "remarks": "The Select clause for the view, used by DB Config when AutoSelect is not checked. This should be entered in the format select table1.col1 as A, table2.col2 as B, ...",
            "sameAsAttribute": "VIEWSELECT",
            "sameAsObject": "MAXVIEW"
        },
        {
            "attributeName": "VIEWWHERE",
            "required": false,
            "persistent": false,
            "title": "View Where",
            "remarks": "Where Clause to be specified when creating the view",
            "sameAsAttribute": "VIEWWHERE",
            "sameAsObject": "MAXVIEW"
        },
        {
            "attributeName": "LANGTABLENAME",
            "required": false,
            "persistent": false,
            "title": "Language Table",
            "remarks": "The name of this table's language table.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "LANGCOLUMNNAME",
            "required": false,
            "persistent": false,
            "title": "Language Column",
            "remarks": "The name of the language column on this table.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "UNIQUECOLUMNNAME",
            "required": false,
            "persistent": false,
            "title": "Unique Column",
            "remarks": "Contains the name of the column that composes a one-column unique index on this table. There will also be related data in MaxSysIndexes and MaxSysKeys for this index. There will also be an associated entry in MaxSequence that indicates the sequence name used for generating values for this column. (A table may contain more than one unique index, but only one of them will be associated with the UniqueColumnName.) This column is used in Long Description and Multi-Language processing.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "ISLANGTABLE",
            "required": true,
            "persistent": false,
            "title": "Is Language Table",
            "remarks": "Identifies whether this is a language table.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "JOINOBJECT",
            "required": false,
            "persistent": false,
            "title": "Join to Object",
            "remarks": "The secondary object that is used in the join for this view.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "MAXOBJECTID",
            "required": true,
            "persistent": true,
            "title": "MAXOBJECTCFGID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VIEWFROM",
            "required": false,
            "persistent": false,
            "title": "View From",
            "remarks": "The From clause to be used by Database Configuration when Automatically Select? is not checked.",
            "sameAsAttribute": "VIEWFROM",
            "sameAsObject": "MAXVIEW"
        },
        {
            "attributeName": "ALTIXNAME",
            "required": false,
            "persistent": false,
            "title": "Alternate Index",
            "remarks": "Alternate index name for record identification by external systems, when primarykeycolseq or unique key are not appropriate.  This index may or may not be unique and it used only to support external data retrieval.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "TRIGROOT",
            "required": false,
            "persistent": false,
            "title": "Trigger Root",
            "remarks": "Trigger name root.  The actual trigger name will be composed of this root plus a suffix.",
            "sameAsAttribute": "TRIGROOT",
            "sameAsObject": "MAXTABLE"
        },
        {
            "attributeName": "CONTENTATTRIBUTE",
            "required": false,
            "persistent": false,
            "title": "Content Attribute",
            "remarks": "Name of the attribute used as a unique identifier for content delivery.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "TEXTDIRECTION",
            "required": false,
            "persistent": true,
            "title": "Text Direction",
            "remarks": "The orientation of text that you enter into fields.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STORAGETYPE",
            "required": false,
            "persistent": false,
            "title": "Storage Type",
            "remarks": "Storage Type",
            "sameAsAttribute": "STORAGETYPE",
            "sameAsObject": "MAXTABLE"
        },
        {
            "attributeName": "STORAGETYPEDESC",
            "required": false,
            "persistent": false,
            "title": "Storage Type",
            "remarks": "Storage Type Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RESOURCETYPE",
            "required": false,
            "persistent": true,
            "title": "Resource Type",
            "remarks": "Resource Type",
            "sameAsAttribute": "RESOURCETYPE",
            "sameAsObject": "MAXOBJECT"
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
            "name": "AMOUNTFORMAT",
            "target": "AMOUNTFORMAT",
            "remarks": "Relationship to AmountFormat table.  Non-persistent MboSet (1=1). The result set will contain zero entries (a Mbo must be added to process).",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRPOLDTAB",
            "target": "DRPOLDTAB",
            "remarks": "Relationship to DRPOLDTAB virtual object",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "GLCONFIGURE",
            "target": "GLCONFIGURE",
            "remarks": "Relationship to GLConfigure table (1=1).  The result set will contain all the rows in the GLConfigure table.",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXATTRIBUTECFG",
            "target": "MAXATTRIBUTECFG",
            "remarks": "MaxObjectCfg to its attributes.  The result set will contain one or more objects.",
            "whereClause": "objectname = :objectname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SKIPSELECT",
            "target": "MAXATTRIBUTECFG",
            "remarks": "Used to display the multi select dialog box.",
            "whereClause": "objectname = :objectname and userdefined = 1 and attributename not in (select attributename from maxattributeskipcopy where objectname=:objectname)",
            "cardinality": null
        },
        {
            "name": "SKIPATT",
            "target": "MAXATTRIBUTESKIPCOPY",
            "remarks": "List of User defined attributes to be skipped during duplicate.",
            "whereClause": "objectname = :objectname",
            "cardinality": null
        },
        {
            "name": "MAXDOMAINLINK",
            "target": "MAXDOMAINLINK",
            "remarks": "Relationship from MaxObjectCfg to MaxDomainLink",
            "whereClause": "objectname = :objectname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXDOMVALCOND",
            "target": "MAXDOMVALCOND",
            "remarks": "Relationship from MAXOBJECTCFG to MAXDOMVALCOND",
            "whereClause": "objectname = :objectname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXINTOBJDETAIL",
            "target": "MAXINTOBJDETAIL",
            "remarks": "Relationship to check if object exists in Object Structure Dateil table. It will return 0 or more rows.",
            "whereClause": "objectname=:objectname",
            "cardinality": null
        },
        {
            "name": "MAXOBJECT",
            "target": "MAXOBJECT",
            "remarks": "MaxObjectCfg to MaxObject.  The result set will contain one object if the object has been configured, or zero if the object is new and has not yet been configured.",
            "whereClause": "objectname = :objectname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWOBJECTS",
            "target": "MAXOBJECTCFG",
            "remarks": "Relationship from MaxObjectCfg (table) to MaxObjectCfg (views), giving the views that join with this table.  Will return zero, one or more rows.",
            "whereClause": ":isview = :no and isview = :yes and (extendsobject = :objectname or exists (select * from maxviewcolumncfg where viewname = maxobjectcfg.entityname and tablename = :entityname))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXRELATIONSHIP",
            "target": "MAXRELATIONSHIP",
            "remarks": "MaxObjectCfg to MaxRelationship",
            "whereClause": "parent = :objectname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXSEQUENCE",
            "target": "MAXSEQUENCE",
            "remarks": "Relationship from MaxObjectCfg to MaxSequence",
            "whereClause": "tbname = :entityname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXSERVICE",
            "target": "MAXSERVICE",
            "remarks": "MaxObjectCfg to MaxService.  The result set will contain one object.",
            "whereClause": "servicename = :servicename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXSYSINDEXES",
            "target": "MAXSYSINDEXES",
            "remarks": "MaxObjectCfg to MaxSysIndexes.  If this is a persistent table, the result set will contain one object for each index on this table.",
            "whereClause": ":isview = :no and :persistent = :yes and tbname = :entityname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXSYSINDEXESUNIQUE",
            "target": "MAXSYSINDEXES",
            "remarks": "MaxObjectCfg to MaxSysIndexes, getting unique indexes only.  The result set will not include the index for the uniquecolumnname, nor will it include indexes that are marked for deletion.",
            "whereClause": ":isview = :no and :persistent = :yes and tbname = :entityname and uniquerule = 'U' and changed != 'D' and exists (select * from maxsyskeys where maxsyskeys.ixname = maxsysindexes.name and maxsyskeys.colname != :uniquecolumnname)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXTABLE",
            "target": "MAXTABLE",
            "remarks": "MaxObjectCfg to MaxTable.  If this is a persistent table that has been configured, the result set will contain one object.",
            "whereClause": ":isview = :no and tablename = :entityname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXTABLECFG",
            "target": "MAXTABLECFG",
            "remarks": "MaxObjectCfg to MaxTableCfg.  If this is a persistent table, the result set will contain one object.",
            "whereClause": ":isview = :no and :persistent = :yes and tablename = :entityname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMOBJAUDIT",
            "target": "MAXTABLECFG",
            "remarks": "object is an eaudit table or not",
            "whereClause": "eaudittbname = :objectname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXVARINPUTNUMTAX",
            "target": "MAXVARINPUT",
            "remarks": "Relationship to the MaxVarInput table to get an instance of the non-pers MaxVarInput mbo for managing system-level Number of Taxes maxvar.",
            "whereClause": "1=1",
            "cardinality": null
        },
        {
            "name": "MAXVIEW",
            "target": "MAXVIEW",
            "remarks": "MaxObjectCfg to MaxView.  If this is a persistent view that has been configured, the result set will contain one object.",
            "whereClause": ":isview = :yes and viewname = :entityname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXVIEWCFG",
            "target": "MAXVIEWCFG",
            "remarks": "MaxObjectCfg to MaxViewCfg.  If this is a persistent view, the result set will contain one object.",
            "whereClause": ":isview = :yes and :persistent = :yes and viewname = :entityname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXVIEWCOLUMNCFG",
            "target": "MAXVIEWCOLUMNCFG",
            "remarks": "MaxObjectCfg to MaxViewColumnCfg.  If this is a persistent view that has been configured, the result set will contain one or more objects.",
            "whereClause": ":isview = :yes and viewname = :entityname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RESTDATA",
            "target": "RESTDATA",
            "remarks": "Relationship to RESTDATA virtual object",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "MAXOBJECTCFG",
            "source": "DRPOLDTAB",
            "remarks": "DrpOldTab to MaxObjectCfg, will contain one object",
            "whereClause": "entityname = :tablename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXOBJECTCFG",
            "source": "GLCONFIGURE",
            "remarks": "Relationship to MaxObjectCfg table. (1=1). The result set will contain all the rows in the MaxObjectCfg table.",
            "whereClause": "1 = 1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXOBJECTCFG",
            "source": "MAXATTRIBUTECFG",
            "remarks": "The object for this attribute.  Result set will contain one row.",
            "whereClause": "objectname = :objectname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SAMEASPARENTOBJ",
            "source": "MAXATTRIBUTECFG",
            "remarks": "Relationship to MaxObjectCfg where this is a sameas child and we are retrieving the sameas parent from a different object.  If this is a sameas child, the result set will contain one entry. This does not retrieve Mbos from this object or from this object's audit table.",
            "whereClause": "objectname = :sameasobject",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SAMEASOTHERCHILDRENOBJ",
            "source": "MAXATTRIBUTECFG",
            "remarks": "Relationship to MaxAttributeCfg where this is a sameas child and we are retrieving the other sameas children from different objects.  If this is a sameas child, the result set will contain zero or more entries. This does not retrieve Mbos from this object or from this object's audit table.",
            "whereClause": "objectname != :objectname and objectname != :sameasobject and objectname in (select objectname from maxattributecfg where sameasobject = :sameasobject and sameasattribute = :sameasattribute)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SAMEASCHILDRENOBJ",
            "source": "MAXATTRIBUTECFG",
            "remarks": "Relationship to MaxAttributeCfg where this is a sameas parent and we are retrieving the sameas children from different objects.  If this is a sameas parent, the result set will typically contain one or more entries. This does not retrieve Mbos from this object or from this object's audit table.",
            "whereClause": "objectname != :objectname and objectname in (select objectname from maxattributecfg where sameasobject = :objectname and sameasattribute = :attributename)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "EXTENDS",
            "source": "MAXATTRIBUTESKIPCOPY",
            "remarks": "Objects extending this object.",
            "whereClause": "extendsobject = :objectname",
            "cardinality": null
        },
        {
            "name": "MAXOBJECTCFG",
            "source": "MAXDOMAINLINK",
            "remarks": "Relationship from MaxDomainLink to MaxObjectCfg",
            "whereClause": "objectname = :objectname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWOBJECTS",
            "source": "MAXOBJECTCFG",
            "remarks": "Relationship from MaxObjectCfg (table) to MaxObjectCfg (views), giving the views that join with this table.  Will return zero, one or more rows.",
            "whereClause": ":isview = :no and isview = :yes and (extendsobject = :objectname or exists (select * from maxviewcolumncfg where viewname = maxobjectcfg.entityname and tablename = :entityname))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXOBJECTCFG",
            "source": "RESTDATA",
            "remarks": "RestData to MaxObjectCfg, will contain one object",
            "whereClause": "entityname = :tablename",
            "cardinality": "UNDEFINED"
        }
    ]
}