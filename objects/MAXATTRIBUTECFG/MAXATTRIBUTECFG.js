mos = {
    "objectName": "MAXATTRIBUTECFG",
    "className": "psdi.app.configure.MaxAttributeCfgSet",
    "description": "Maximo Attribute Configuration",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXATTRIBUTEID",
    "primaryKeyColumns": [
        "OBJECTNAME",
        "ATTRIBUTENAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "MAXATTRIBUTECFG",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "COLUMNNAME, ATTRIBUTENAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 11",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "MAXATTRIBUTECFG",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "COLUMNNAME, SAMEASATTRIBUTE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 12",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "MAXATTRIBUTECFG",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "ENTITYNAME, ATTRIBUTENAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 13",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "MAXATTRIBUTECFG",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "ENTITYNAME, SAMEASATTRIBUTE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 14",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "MAXATTRIBUTECFG",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "HANDLECOLUMNNAME, ATTRIBUTENAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 15",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "MAXATTRIBUTECFG",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "HANDLECOLUMNNAME, SAMEASATTRIBUTE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 16",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "MAXATTRIBUTECFG",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "OBJECTNAME, ATTRIBUTENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 14",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "MAXATTRIBUTECFG",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "OBJECTNAME, SAMEASATTRIBUTE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 18",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "MAXATTRIBUTECFG",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "SAMEASOBJECT, ATTRIBUTENAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 19",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "MAXATTRIBUTECFG",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "SAMEASOBJECT, SAMEASATTRIBUTE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 20",
            "longDescription": null
        },
        {
            "objectName": "MAXDOMAIN",
            "targetObject": "MAXATTRIBUTECFG",
            "parentKeys": "DOMAINID",
            "targetKeys": "DOMAINID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 8",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXATTRIBUTECFG",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "COLUMNNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 60",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXATTRIBUTECFG",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "ENTITYNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 61",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXATTRIBUTECFG",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "HANDLECOLUMNNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 62",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXATTRIBUTECFG",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 63",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXATTRIBUTECFG",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "SAMEASOBJECT",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 64",
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
            "attributeName": "ATTRIBUTENAME",
            "required": true,
            "persistent": true,
            "title": "Attribute",
            "remarks": "Standard Maximo name of the attribute.",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "ALIAS",
            "required": false,
            "persistent": true,
            "title": "Alias",
            "remarks": "Alias",
            "sameAsAttribute": "ALIAS",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "AUTOKEYNAME",
            "required": false,
            "persistent": true,
            "title": "Autonumber",
            "remarks": "Autokey name",
            "sameAsAttribute": "AUTOKEYNAME",
            "sameAsObject": "AUTOKEY"
        },
        {
            "attributeName": "ATTRIBUTENO",
            "required": true,
            "persistent": true,
            "title": "Attribute #",
            "remarks": "Attribute number",
            "sameAsAttribute": "ATTRIBUTENO",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "CANAUTONUM",
            "required": true,
            "persistent": true,
            "title": "Can Autonumber",
            "remarks": "When checked, indicates that this attribute is able to support autokey.",
            "sameAsAttribute": "CANAUTONUM",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "CLASSNAME",
            "required": false,
            "persistent": true,
            "title": "Class",
            "remarks": "Field validation class name",
            "sameAsAttribute": "CLASSNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "COLUMNNAME",
            "required": false,
            "persistent": true,
            "title": "Column",
            "remarks": "The name of the column within the database table.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "DEFAULTVALUE",
            "required": false,
            "persistent": true,
            "title": "Default Value",
            "remarks": "Default value",
            "sameAsAttribute": "DEFAULTVALUE",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "DOMAINID",
            "required": false,
            "persistent": true,
            "title": "Domain",
            "remarks": "Name of the validation domain for this attribute",
            "sameAsAttribute": "DOMAINID",
            "sameAsObject": "MAXDOMAIN"
        },
        {
            "attributeName": "EAUDITENABLED",
            "required": true,
            "persistent": true,
            "title": "Audit Enabled",
            "remarks": "When checked, indicates that Electronic Auditing (EAUDIT) is enabled for this attribute.",
            "sameAsAttribute": "EAUDITENABLED",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "ENTITYNAME",
            "required": false,
            "persistent": true,
            "title": "Entity",
            "remarks": "If this is a persistent attribute for a table or view, or a non-persistent attribute whose value comes from a base table, Entityname + Columnname indicate the persistent base table and column for this attribute",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "ESIGENABLED",
            "required": true,
            "persistent": true,
            "title": "E-signature Enabled",
            "remarks": "When checked, indicates that Electronic Signature (ESIG) is enabled for this attribute.",
            "sameAsAttribute": "ESIGENABLED",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "ISLDOWNER",
            "required": true,
            "persistent": true,
            "title": "Long Description Owner",
            "remarks": "When checked, indicates that this a Long Description owner.",
            "sameAsAttribute": "ISLDOWNER",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "ISPOSITIVE",
            "required": true,
            "persistent": true,
            "title": "Positive",
            "remarks": "For a numeric field, when checked, only positive values (and zero) are allowed; when cleared, both positive and negative values are allowed.",
            "sameAsAttribute": "ISPOSITIVE",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "LENGTH",
            "required": true,
            "persistent": true,
            "title": "Length",
            "remarks": "The number characters that can be entered into this attribute.",
            "sameAsAttribute": "LENGTH",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "MAXTYPE",
            "required": true,
            "persistent": true,
            "title": "Type",
            "remarks": "Maximo data type.",
            "sameAsAttribute": "MAXTYPE",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "MUSTBE",
            "required": true,
            "persistent": true,
            "title": "Must Be",
            "remarks": "When checked, indicates that Maxtype, Length, and Scale of the attribute can NOT be changed. When cleared, indicates that they can be changed",
            "sameAsAttribute": "MUSTBE",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "REQUIRED",
            "required": true,
            "persistent": true,
            "title": "Required",
            "remarks": "When checked, indicates that a value is required in this field.",
            "sameAsAttribute": "REQUIRED",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "PERSISTENT",
            "required": true,
            "persistent": true,
            "title": "Persistent",
            "remarks": "When checked, indicates that this attribute (for a persistent view or table) is saved to the database.",
            "sameAsAttribute": "PERSISTENT",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "PRIMARYKEYCOLSEQ",
            "required": false,
            "persistent": true,
            "title": "Primary Column",
            "remarks": "If a value exists in this field, it indicates that the column is used by business object components when constructing a dynamic where clause to update or delete a row in the database. Values in the Primary column must be sequential, unique, and greater than zero.",
            "sameAsAttribute": "PRIMARYKEYCOLSEQ",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "REMARKS",
            "required": true,
            "persistent": true,
            "title": "Description",
            "remarks": "A clear description of this attribute.",
            "sameAsAttribute": "REMARKS",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "SAMEASATTRIBUTE",
            "required": false,
            "persistent": true,
            "title": "Same as Attribute",
            "remarks": "SameAsObject + SameAsAttribute indicate the master attribute that controls the maxtype, length, and scale of this attribute",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "SAMEASOBJECT",
            "required": false,
            "persistent": true,
            "title": "Same as Object",
            "remarks": "SameAsObject + SameAsAttribute indicate the master attribute that controls the maxtype, length, and scale of this attribute",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "SCALE",
            "required": true,
            "persistent": true,
            "title": "Scale",
            "remarks": "The column scale (if numeric). Number of digits to the right of the decimal point if the data type is DECIMAL or DURATION.",
            "sameAsAttribute": "SCALE",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "TITLE",
            "required": true,
            "persistent": true,
            "title": "Title",
            "remarks": "A clear, short column identifier to be substituted in messages, screen labels, etc.",
            "sameAsAttribute": "TITLE",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "USERDEFINED",
            "required": true,
            "persistent": true,
            "title": "User Defined",
            "remarks": "When checked, indicates that this attribute was added by a user.",
            "sameAsAttribute": "USERDEFINED",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "CHANGED",
            "required": true,
            "persistent": true,
            "title": "Changed",
            "remarks": "When checked, indicates that this attribute was changed using Configure.",
            "sameAsAttribute": "CHANGED",
            "sameAsObject": "MAXOBJECTCFG"
        },
        {
            "attributeName": "EAUDITTBNAME",
            "required": false,
            "persistent": false,
            "title": "E-audit Table",
            "remarks": "If this is a table that is audited, this field displays the name of the audit table, if any.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "VIEWCHANGED",
            "required": false,
            "persistent": false,
            "title": "Status",
            "remarks": "The configuration status of an attribute. A configuration is required for the statuses To be added, To be changed, and Deleted.",
            "sameAsAttribute": "VIEWCHANGED",
            "sameAsObject": "MAXOBJECTCFG"
        },
        {
            "attributeName": "SEARCHTYPE",
            "required": true,
            "persistent": true,
            "title": "Search Type",
            "remarks": "Indicates the type of search that is allowed for this attribute",
            "sameAsAttribute": "SEARCHTYPE",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "MLSUPPORTED",
            "required": true,
            "persistent": true,
            "title": "Multilanguage Supported",
            "remarks": "When checked, indicates that multilanguage is supported for this column. This field is read only.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MLINUSE",
            "required": true,
            "persistent": true,
            "title": "Multilanguage in Use",
            "remarks": "When checked, indicates that multilanguage is in use for this column. This can be set only if MLSupported is checked.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HANDLECOLUMNNAME",
            "required": false,
            "persistent": true,
            "title": "Handle Column Name",
            "remarks": "Name of the handle column, for supporting DB2 text search.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "LANGTABLENAME",
            "required": false,
            "persistent": false,
            "title": "Language Table",
            "remarks": "The name of this table's language table",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "ISHANDLECOLUMN",
            "required": true,
            "persistent": false,
            "title": "Is Handle Column",
            "remarks": "When checked, indicates that this is a \"\"handle\"\" column for DB2 text search.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXATTRIBUTEID",
            "required": true,
            "persistent": true,
            "title": "MAXATTRIBUTECFGID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SEQUENCENAME",
            "required": false,
            "persistent": false,
            "title": "Sequence Name",
            "remarks": "The name of the sequence to be used for generating values for this attribute",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "NEXTSEQUENCENO",
            "required": false,
            "persistent": false,
            "title": "Next Sequence Number",
            "remarks": "Next sequence number",
            "sameAsAttribute": "MAXRESERVED",
            "sameAsObject": "MAXSEQUENCE"
        },
        {
            "attributeName": "RESTRICTED",
            "required": true,
            "persistent": true,
            "title": "Restricted",
            "remarks": "Identifies whether the value of this attribute can be set only by methods local to the business object; for example, calculation of the value involves a method call on the Mbo.  When an attribute is restricted, external processes should not attempt to set a value directly.",
            "sameAsAttribute": "RESTRICTED",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "LOCALIZABLE",
            "required": true,
            "persistent": true,
            "title": "Localizable",
            "remarks": "Identifies whether the value of this attribute can be localized.",
            "sameAsAttribute": "LOCALIZABLE",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "TEXTDIRECTION",
            "required": false,
            "persistent": true,
            "title": "Text Direction",
            "remarks": "Text Direction",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COMPLEXEXPRESSION",
            "required": false,
            "persistent": true,
            "title": "Type of Complex Expression",
            "remarks": "Type of Complex Expression",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EXTENDED",
            "required": false,
            "persistent": true,
            "title": "Extended",
            "remarks": "Extended",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "AUTOKEY",
            "target": "AUTOKEY",
            "remarks": "Relationship to AutoKey table",
            "whereClause": "autokeyname = :autokeyname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXATTRIBUTE",
            "target": "MAXATTRIBUTE",
            "remarks": "MaxAttributeCfg to MaxAttribute.  If this table or view has been configured, the result set will contain one object.",
            "whereClause": "objectname = :objectname and attributename = :attributename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SAMEASCHILDREN",
            "target": "MAXATTRIBUTECFG",
            "remarks": "Relationship to MaxAttributeCfg where this is a \"sameas\" parent and we are retrieving the \"sameas\" children from different objects. If this is a \"sameas\" parent, the result set will typically contain one or more entries. This does not retrieve Mbos from this object or from this object's audit table.",
            "whereClause": "sameasobject = :objectname and sameasattribute = :attributename and objectname != :objectname and not exists (select * from maxobjectcfg where objectname = :objectname and entityname in (select tablename from maxtablecfg where eaudittbname in (select entityname from maxobjectcfg where objectname = maxattributecfg.objectname) ))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SAMEASOTHERCHILDREN",
            "target": "MAXATTRIBUTECFG",
            "remarks": "Relationship to MaxAttributeCfg where this is a \"sameas\" child and we are retrieving the other \"sameas\" children from different objects.  If this is a \"sameas\" child, the result set will contain zero or more entries. This does not retrieve Mbos from this object or from this object's audit table.",
            "whereClause": "sameasobject = :sameasobject and sameasattribute = :sameasattribute and sameasattribute is not null and objectname != :objectname and not exists (select * from maxobjectcfg where objectname = :objectname and entityname in (select tablename from maxtablecfg where eaudittbname in (select entityname from maxobjectcfg where objectname = maxattributecfg.objectname) ))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SAMEASPARENT",
            "target": "MAXATTRIBUTECFG",
            "remarks": "Relationship to MaxAttributeCfg where this is a \"sameas\" child and we are retrieving the \"sameas\" parent from a different object. If this is a \"sameas\" child, the result set will contain one entry. This does not retrieve Mbos from this object or from this object's audit table.",
            "whereClause": "objectname = :sameasobject and attributename = :sameasattribute and objectname != :objectname and not exists (select * from maxobjectcfg where objectname = :objectname and entityname in (select tablename from maxtablecfg where eaudittbname in (select entityname from maxobjectcfg where objectname = maxattributecfg.objectname) ))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TABLEATTRIBUTECFG",
            "target": "MAXATTRIBUTECFG",
            "remarks": "View's MaxAttributeCfg to its parent table's MaxAttributeCfg",
            "whereClause": "persistent = :yes and exists (select 1 from maxviewcolumncfg, maxobjectcfg where maxviewcolumncfg.viewname = :entityname and maxviewcolumncfg.viewcolumnname = :columnname and maxattributecfg.entityname = maxviewcolumncfg.tablename and maxattributecfg.columnname = maxviewcolumncfg.tablecolumnname and maxattributecfg.objectname = maxobjectcfg.objectname and maxviewcolumncfg.tablename = maxobjectcfg.entityname)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXATTRIBUTESKIPCOPY",
            "target": "MAXATTRIBUTESKIPCOPY",
            "remarks": "Relationship for Migration Manager.",
            "whereClause": "objectname = :objectname and attributename = :attributename",
            "cardinality": null
        },
        {
            "name": "MAXDOMAIN",
            "target": "MAXDOMAIN",
            "remarks": "MaxAttributeCfg to MaxDomain.  If domainid is not null, the result set will contain one object.",
            "whereClause": "domainid = :domainid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXDOMAINLINK",
            "target": "MAXDOMAINLINK",
            "remarks": "Relationship from MaxAttributeCfg to MaxDomainLink",
            "whereClause": "objectname = :objectname and attributename = :attributename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXDOMAINLINKEXACT",
            "target": "MAXDOMAINLINK",
            "remarks": "Relationship from MaxAttributeCfg to MaxDomainLink for the domain specified on maxattributecfg (if any)",
            "whereClause": "objectname = :objectname and attributename = :attributename and domainid = :domainid and :domainid is not null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXINTOBJCOLS",
            "target": "MAXINTOBJCOLS",
            "remarks": "Relationship to check if attribute exists in Object Structure Columns table. It will return 0 or more rows.",
            "whereClause": "name=:attributename and objectname=:objectname",
            "cardinality": null
        },
        {
            "name": "MAXLOOKUPMAP",
            "target": "MAXLOOKUPMAP",
            "remarks": "Relationship to get all the kep map entries for the maxattributecfg record. target=:objectname and lookupattr=:attributename",
            "whereClause": "target=:objectname and lookupattr=:attributename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXOBJECTCFG",
            "target": "MAXOBJECTCFG",
            "remarks": "The object for this attribute.  Result set will contain one row.",
            "whereClause": "objectname = :objectname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SAMEASPARENTOBJ",
            "target": "MAXOBJECTCFG",
            "remarks": "Relationship to MaxObjectCfg where this is a sameas child and we are retrieving the sameas parent from a different object.  If this is a sameas child, the result set will contain one entry. This does not retrieve Mbos from this object or from this object's audit table.",
            "whereClause": "objectname = :sameasobject",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SAMEASOTHERCHILDRENOBJ",
            "target": "MAXOBJECTCFG",
            "remarks": "Relationship to MaxAttributeCfg where this is a sameas child and we are retrieving the other sameas children from different objects.  If this is a sameas child, the result set will contain zero or more entries. This does not retrieve Mbos from this object or from this object's audit table.",
            "whereClause": "objectname != :objectname and objectname != :sameasobject and objectname in (select objectname from maxattributecfg where sameasobject = :sameasobject and sameasattribute = :sameasattribute)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SAMEASCHILDRENOBJ",
            "target": "MAXOBJECTCFG",
            "remarks": "Relationship to MaxAttributeCfg where this is a sameas parent and we are retrieving the sameas children from different objects.  If this is a sameas parent, the result set will typically contain one or more entries. This does not retrieve Mbos from this object or from this object's audit table.",
            "whereClause": "objectname != :objectname and objectname in (select objectname from maxattributecfg where sameasobject = :objectname and sameasattribute = :attributename)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXSEQUENCE",
            "target": "MAXSEQUENCE",
            "remarks": "Relationship from MaxAttributeCfg to MaxSequence, matching on tablename and columnname.  Will return zero or one row",
            "whereClause": "tbname = :entityname and name = :columnname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXVIEWCOLUMNCFG",
            "target": "MAXVIEWCOLUMNCFG",
            "remarks": "MaxAttributeCfg to MaxViewColumnCfg",
            "whereClause": "viewname = :entityname and viewcolumnname = :columnname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ALLMAXVIEWCOLUMNCF",
            "target": "MAXVIEWCOLUMNCFG",
            "remarks": "MaxAttributeCfg to MaxViewColumnCfg including any with samestorageas",
            "whereClause": "viewname = :entityname and (viewcolumnname = :columnname or samestorageas = :columnname)",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "SAMEASCHILDREN",
            "source": "MAXATTRIBUTECFG",
            "remarks": "Relationship to MaxAttributeCfg where this is a \"sameas\" parent and we are retrieving the \"sameas\" children from different objects. If this is a \"sameas\" parent, the result set will typically contain one or more entries. This does not retrieve Mbos from this object or from this object's audit table.",
            "whereClause": "sameasobject = :objectname and sameasattribute = :attributename and objectname != :objectname and not exists (select * from maxobjectcfg where objectname = :objectname and entityname in (select tablename from maxtablecfg where eaudittbname in (select entityname from maxobjectcfg where objectname = maxattributecfg.objectname) ))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SAMEASOTHERCHILDREN",
            "source": "MAXATTRIBUTECFG",
            "remarks": "Relationship to MaxAttributeCfg where this is a \"sameas\" child and we are retrieving the other \"sameas\" children from different objects.  If this is a \"sameas\" child, the result set will contain zero or more entries. This does not retrieve Mbos from this object or from this object's audit table.",
            "whereClause": "sameasobject = :sameasobject and sameasattribute = :sameasattribute and sameasattribute is not null and objectname != :objectname and not exists (select * from maxobjectcfg where objectname = :objectname and entityname in (select tablename from maxtablecfg where eaudittbname in (select entityname from maxobjectcfg where objectname = maxattributecfg.objectname) ))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SAMEASPARENT",
            "source": "MAXATTRIBUTECFG",
            "remarks": "Relationship to MaxAttributeCfg where this is a \"sameas\" child and we are retrieving the \"sameas\" parent from a different object. If this is a \"sameas\" child, the result set will contain one entry. This does not retrieve Mbos from this object or from this object's audit table.",
            "whereClause": "objectname = :sameasobject and attributename = :sameasattribute and objectname != :objectname and not exists (select * from maxobjectcfg where objectname = :objectname and entityname in (select tablename from maxtablecfg where eaudittbname in (select entityname from maxobjectcfg where objectname = maxattributecfg.objectname) ))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TABLEATTRIBUTECFG",
            "source": "MAXATTRIBUTECFG",
            "remarks": "View's MaxAttributeCfg to its parent table's MaxAttributeCfg",
            "whereClause": "persistent = :yes and exists (select 1 from maxviewcolumncfg, maxobjectcfg where maxviewcolumncfg.viewname = :entityname and maxviewcolumncfg.viewcolumnname = :columnname and maxattributecfg.entityname = maxviewcolumncfg.tablename and maxattributecfg.columnname = maxviewcolumncfg.tablecolumnname and maxattributecfg.objectname = maxobjectcfg.objectname and maxviewcolumncfg.tablename = maxobjectcfg.entityname)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXATTRIBUTECFG",
            "source": "MAXATTRIBUTESKIPCOPY",
            "remarks": "Used to display title.",
            "whereClause": "objectname = :objectname and attributename = :attributename",
            "cardinality": null
        },
        {
            "name": "MAXATTRIBUTECFG",
            "source": "MAXDOMAINLINK",
            "remarks": "Relationship from MaxDomainLink to MaxAttributeCfg",
            "whereClause": "objectname = :objectname and attributename = :attributename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXATTRIBUTECFGEXACT",
            "source": "MAXDOMAINLINK",
            "remarks": "Relationship from MaxDomainLink to MaxAttributeCfg for an exact match including domainid",
            "whereClause": "objectname = :objectname and attributename = :attributename and domainid = :domainid and domainid is not null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXATTRIBUTECFG",
            "source": "MAXOBJECTCFG",
            "remarks": "MaxObjectCfg to its attributes.  The result set will contain one or more objects.",
            "whereClause": "objectname = :objectname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SKIPSELECT",
            "source": "MAXOBJECTCFG",
            "remarks": "Used to display the multi select dialog box.",
            "whereClause": "objectname = :objectname and userdefined = 1 and attributename not in (select attributename from maxattributeskipcopy where objectname=:objectname)",
            "cardinality": null
        },
        {
            "name": "MAXATTRIBUTECFG",
            "source": "MAXTABLECFG",
            "remarks": "Attributes directly owned by this table.  The result set will contain one or more objects.",
            "whereClause": "objectname in (select maxobjectcfg.objectname from maxobjectcfg where isview = :no and maxobjectcfg.entityname = :tablename)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATEDATTRIBUTES",
            "source": "MAXTABLECFG",
            "remarks": "All attributes derived from this table but not directly owned by this table.  The result set will contain zero or more objects.",
            "whereClause": "entityname = :tablename and objectname not in (select maxobjectcfg.objectname from maxobjectcfg where isview = :no and maxobjectcfg.entityname = :tablename)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXATTRIBUTECFG",
            "source": "MAXVIEWCFG",
            "remarks": "Distinct set of attributes owned by this view.  The result set will contain one or more objects.",
            "whereClause": "objectname in (select maxobjectcfg.objectname from maxobjectcfg where isview = :yes and maxobjectcfg.entityname = :viewname)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXATTRIBUTECFG",
            "source": "MAXVIEWCOLUMNCFG",
            "remarks": "MaxViewColumnCfg to MaxAttributeCfg",
            "whereClause": "objectname = (select objectname from maxobject where entityname = :viewname and isview = :yes) and((entityname = :viewname and columnname = :viewcolumnname) or (entityname = :viewname and columnname = :samestorageas))",
            "cardinality": "UNDEFINED"
        }
    ]
}