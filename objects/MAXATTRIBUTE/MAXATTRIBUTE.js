mos = {
    "objectName": "MAXATTRIBUTE",
    "className": "psdi.app.configure.MaxAttributeSet",
    "description": "Maximo Attribute",
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
    "logicalRelationships": [
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "APPFIELDDEFAULTS",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "OBJECTNAME, ATTRIBUTENAME",
            "relNum": "0 to 1",
            "status": "VERIFIED",
            "description": "The field default for an attribute.",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "ASTMSOVER",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "MOOBJECT, MOATTRIBUTE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Attribute to Include",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "ATTRFORMULA",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "OBJECTNAME, ATTRIBUTENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Attribute Formule",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "DMMAPDEF",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "OBJECTNAME, ATTRIBUTENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Attribute for Mapping.",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "DMMAPPINGATTRIBUTEVIEW",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "OBJECTNAME, ATTRIBUTENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Attribute to be added for mapping.",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "JSONATTRIBUTEMAP",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "OBJECTNAME, ATTRIBUTENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Attribute",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "KPITEMPLATEVAR",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "OBJECTNAME, ATTRIBUTENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Attribute",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "MAXATTRIBUTE",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "COLUMNNAME, SAMEASATTRIBUTE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 6",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "MAXATTRIBUTE",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "ENTITYNAME, SAMEASATTRIBUTE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 7",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "MAXATTRIBUTE",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "HANDLECOLUMNNAME, SAMEASATTRIBUTE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 8",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "MAXATTRIBUTE",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "OBJECTNAME, SAMEASATTRIBUTE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 9",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "MAXATTRIBUTE",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "SAMEASOBJECT, SAMEASATTRIBUTE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Points to the attribute which determines the MaxType, Length, and Scale of the linked attribute.",
            "longDescription": null
        },
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
            "objectName": "MAXATTRIBUTE",
            "targetObject": "MAXATTRIBUTESKIPCOPY",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "OBJECTNAME, ATTRIBUTENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 21",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "MAXCONDDETAIL",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "MBONAME, COLUMNNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 22",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "MAXCONDDETAIL",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "MBONAME, MBOCOLUMNNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 23",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "MAXCONDDETAIL",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "MBONAME, RELATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 24",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "MAXDOMAINLINK",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "OBJECTNAME, ATTRIBUTENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 25",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "MAXDYNAMICDOMLINK",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "OBJECTNAME, ATTRIBUTENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 26",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "MAXINTERACTION",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "INTMAINOBJECT, REQRELATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 27",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "MAXINTERACTION",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "INTMAINOBJECT, RESPRELATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 28",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "MAXINTMAPPING",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "MAPOBJECT, RELATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 29",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "MAXINTMAPPING",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "OBJECTNAME, RELATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 30",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "MAXINTOBJCOLS",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "OBJECTNAME, NAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "user defined data field",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "MAXLOOKUPMAP",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "SOURCE, LOOKUPATTR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Look Up Attribute",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "MAXLOOKUPMAP",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "SOURCE, SOURCEKEY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Source Attribute",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "MAXLOOKUPMAP",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "SOURCE, TARGETATTR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 34",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "MAXLOOKUPMAP",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "TARGET, LOOKUPATTR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 35",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "MAXLOOKUPMAP",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "TARGET, SOURCEKEY",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 36",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "MAXLOOKUPMAP",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "TARGET, TARGETATTR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Target Attribute",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "MAXREPLACEPROC",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "MBONAME, FIELDNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "The target field.",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "MAXREPLACEPROC",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "MBONAME, RELATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 39",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "MAXSEQUENCE",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "TBNAME, NAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "The name of the table column where the sequence is used.",
            "longDescription": null
        },
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
            "targetKeys": "TABLENAME, LANGCOLUMNNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "The column in the table that stores the language code for the record.",
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
            "targetObject": "MAXVIEWCOLUMN",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "TABLENAME, TABLECOLUMNNAME",
            "relNum": "1 to 1",
            "status": "VERIFIED",
            "description": "Attribute this view attribute is based upon.",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "MAXVIEWCOLUMN",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "VIEWNAME, VIEWCOLUMNNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Attribute information for view attribute.",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "MFMAILWF",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "MBONAME, SELATTR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Attribute",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "OSLCSPDEFN",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "PROVIDEROBJNAME, DESCRIPTIONATTR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Description Attribute",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "OSLCSPDEFN",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "PROVIDEROBJNAME, IDATTR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Service Provider Attribute",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "OSLCSPDEFN",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "PROVIDEROBJNAME, TITLEATTR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Title Attribute",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "REPORTADHOC",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "OBJECTNAME, FILTERATTRIBUTENAME1",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 44",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "REPORTADHOC",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "OBJECTNAME, FILTERATTRIBUTENAME2",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 45",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "REPORTADHOC",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "OBJECTNAME, FILTERATTRIBUTENAME3",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 46",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "REPORTADHOC",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "OBJECTNAME, GROUPATTRIBUTENAME1",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 47",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "REPORTADHOC",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "OBJECTNAME, GROUPATTRIBUTENAME2",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 48",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "REPORTADHOC",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "OBJECTNAME, GROUPATTRIBUTENAME3",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 49",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "REPORTADHOC",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "OBJECTNAME, SORTATTRIBUTENAME1",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 50",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "REPORTADHOC",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "OBJECTNAME, SORTATTRIBUTENAME2",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 51",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "REPORTADHOC",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "OBJECTNAME, SORTATTRIBUTENAME3",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 52",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "REPORTADHOCFIELD",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "OBJECTNAME, ATTRIBUTENAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 53",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "SCRIPTLAUNCHPOINT",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "OBJECTNAME, ATTRIBUTENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Attribute",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "SECURITYRESTRICT",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "OBJECTNAME, ATTRIBUTENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Attribute Restricted",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "SKDPROPERTYMAP",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "APPLINKOBJECT, ATTRIBUTENAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 56",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "SKDPROPERTYMAP",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "APPLINKOBJECT, SKDATTRIBUTENAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 57",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "SKDPROPERTYMAP",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "OBJECTNAME, ATTRIBUTENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Source Column",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "SKDPROPERTYMAP",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "OBJECTNAME, SKDATTRIBUTENAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 59",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "SKDPROPERTYMAP",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "SKDOBJECTNAME, ATTRIBUTENAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 60",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "SKDPROPERTYMAP",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "SKDOBJECTNAME, SKDATTRIBUTENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Target Column",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "MAXATTRIBUTE",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "COLUMNNAME, SAMEASATTRIBUTE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 6",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "MAXATTRIBUTE",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "ENTITYNAME, SAMEASATTRIBUTE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 7",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "MAXATTRIBUTE",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "HANDLECOLUMNNAME, SAMEASATTRIBUTE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 8",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "MAXATTRIBUTE",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "OBJECTNAME, SAMEASATTRIBUTE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 9",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "MAXATTRIBUTE",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "SAMEASOBJECT, SAMEASATTRIBUTE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Points to the attribute which determines the MaxType, Length, and Scale of the linked attribute.",
            "longDescription": null
        },
        {
            "objectName": "MAXDOMAIN",
            "targetObject": "MAXATTRIBUTE",
            "parentKeys": "DOMAINID",
            "targetKeys": "DOMAINID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 7",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXATTRIBUTE",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "COLUMNNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 55",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXATTRIBUTE",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "ENTITYNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 56",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXATTRIBUTE",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "HANDLECOLUMNNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 57",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXATTRIBUTE",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "The Mbo Object that owns the attributes.",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXATTRIBUTE",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "SAMEASOBJECT",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 59",
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
            "remarks": "Attribute name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ALIAS",
            "required": false,
            "persistent": true,
            "title": "Alias",
            "remarks": "Alias",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CANAUTONUM",
            "required": true,
            "persistent": true,
            "title": "Can Autonumber",
            "remarks": "Indicates whether this attribute is able to support autokey",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "remarks": "If this is a persistent attribute for a table or view, or a non-persistent attribute whose value comes from a base table, Entityname + Columnname indicate the persistent base table and column for this attribute",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "DEFAULTVALUE",
            "required": false,
            "persistent": true,
            "title": "Default Value",
            "remarks": "Default value",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "title": "E-audit Enabled",
            "remarks": "When checked, indicates that Electronic Auditing (EAUDIT) is enabled for this attribute.",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISLDOWNER",
            "required": true,
            "persistent": true,
            "title": "Long Description Owner",
            "remarks": "Indicates whether this a Long Description owner",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISPOSITIVE",
            "required": true,
            "persistent": true,
            "title": "Positive",
            "remarks": "For a numeric field, is checked if only positive values (and zero) are allowed; is cleared if both positive and negative are allowed",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LENGTH",
            "required": true,
            "persistent": true,
            "title": "Length",
            "remarks": "Attribute length",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXTYPE",
            "required": true,
            "persistent": true,
            "title": "Data Type",
            "remarks": "Maximo data type",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MUSTBE",
            "required": true,
            "persistent": true,
            "title": "Must Be",
            "remarks": "When checked, indicates that Maxtype, Length, and Scale of the attribute can NOT be changed; when field is clear, it indicates that they can be changed",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REQUIRED",
            "required": true,
            "persistent": true,
            "title": "Required",
            "remarks": "When checked, indicates that a value is required in this field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PERSISTENT",
            "required": true,
            "persistent": true,
            "title": "Persistent",
            "remarks": "When checked, indicates that this attribute (for a persistent view or table) is saved to the database.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PRIMARYKEYCOLSEQ",
            "required": false,
            "persistent": true,
            "title": "Primary Key Column Sequence",
            "remarks": "If a value exists in this field, it indicates that the column is used by business object components when constructing a dynamic where clause to update or delete a row in the database. Values in the Primary column must be sequential, unique, and greater than zero.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REMARKS",
            "required": true,
            "persistent": true,
            "title": "Remarks",
            "remarks": "Remark describing this attribute",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "remarks": "Attribute scale (positions to right of decimal)",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TITLE",
            "required": true,
            "persistent": true,
            "title": "Title",
            "remarks": "A clear, short column identifier to be substituted in messages, screen labels, etc.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USERDEFINED",
            "required": true,
            "persistent": true,
            "title": "User Defined",
            "remarks": "Indicates whether this attribute was added by a user",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SEARCHTYPE",
            "required": true,
            "persistent": true,
            "title": "Search Type",
            "remarks": "Indicates the type of search that is allowed for this attribute",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MLSUPPORTED",
            "required": true,
            "persistent": true,
            "title": "Multilanguage Supported",
            "remarks": "When checked, identifies that multilanguage is supported for this column. This field is read only.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MLINUSE",
            "required": true,
            "persistent": true,
            "title": "Multilanguage In Use",
            "remarks": "When checked, identifies that multilanguage is in use for this column. This flag can be set only if MLSupported is checked.",
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
            "attributeName": "MAXATTRIBUTEID",
            "required": true,
            "persistent": true,
            "title": "MAXATTRIBUTEID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RESTRICTED",
            "required": true,
            "persistent": true,
            "title": "Restricted",
            "remarks": "Identifies whether the value of this attribute can be set only by methods local to the business object; for example, calculation of the value involves a method call on the Mbo.  When an attribute is restricted, external processes should not attempt to set a value directly.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LOCALIZABLE",
            "required": true,
            "persistent": true,
            "title": "Localizable",
            "remarks": "Identifies whether the value of this attribute can be localized.",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "name": "MAXINTOBJDETAIL",
            "target": "MAXINTOBJDETAIL",
            "remarks": "Relationship from Maxattribute to Integration Object Details, used to get the Category value for the Create Report dialog",
            "whereClause": "objectname = :objectname and intobjectname in (select reportobject from maxapps where app =:&appname&)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SECURITYRESTRICT",
            "target": "SECURITYRESTRICT",
            "remarks": "Relationship from MaxAttribute to Security Restriction",
            "whereClause": "objectname = :objectname and attributename = :attributename",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "MAXATTRIBUTE",
            "source": "LAYOUT",
            "remarks": "Relationship from LAYOUT to MAXATTRIBUTE",
            "whereClause": "1=2",
            "cardinality": null
        },
        {
            "name": "MAXATTRIB",
            "source": "LMOATT",
            "remarks": "Self Relationship Of Maxattribute with itself. ",
            "whereClause": "attributename=:name",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXATTRIBUTE",
            "source": "MAXATTRIBUTECFG",
            "remarks": "MaxAttributeCfg to MaxAttribute.  If this table or view has been configured, the result set will contain one object.",
            "whereClause": "objectname = :objectname and attributename = :attributename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXATTRIBUTECOGNOS",
            "source": "MAXINTOBJDETAIL",
            "remarks": "Relationship with MaxAttribute",
            "whereClause": "objectname=:objectname",
            "cardinality": null
        },
        {
            "name": "MAXATTRIBUTE",
            "source": "MAXOBJECT",
            "remarks": "MaxObject to MaxAttribute.  The result set will contain one or more objects.",
            "whereClause": "objectname = :objectname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXATTRIBUTE",
            "source": "MFMAILATTRLST",
            "remarks": "Relationship to the MAXOBJECT table, used to find description for MBO name",
            "whereClause": "objectname = :objectname",
            "cardinality": null
        },
        {
            "name": "MAXATTRIBUTES",
            "source": "MFMAILCFG",
            "remarks": "Relationship to the MAXATTRIBUTE table, used to find the maxattributes for MAXATTRIBUTES field in MFMAILMATRIXCFG and MFMAILWFNODECFG table",
            "whereClause": "objectname = :mboname",
            "cardinality": null
        },
        {
            "name": "MAXATTRIBUTE",
            "source": "MFMAILWFNODECFG",
            "remarks": "Relationship to the MAXATTRIBUTE table, used to show the description of SELATTR field",
            "whereClause": "attributename = :selattr and objectname = (select mboname from mfmailcfg where mfmailcfgnum = :mfmailcfgnum)",
            "cardinality": null
        },
        {
            "name": "MAXATTRIBUTESELATTRS",
            "source": "MFMAILWFNODECFG",
            "remarks": "Relationship to the MAXATTRIBUTE table, used to show the description of SELATTR field",
            "whereClause": "objectname = (select mboname from mfmailcfg where mfmailcfgnum = :mfmailcfgnum)",
            "cardinality": null
        },
        {
            "name": "RECONATTRCLAUSE_DPADESC",
            "source": "RECONATTRCLAUSE",
            "remarks": "Data Set 2 description",
            "whereClause": "objectname='DEPLOYEDASSET' and attributename=:dpaattributename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONATTRCLAUSE_DPAUNITATTRIBUTEDESC",
            "source": "RECONATTRCLAUSE",
            "remarks": "Relationship to the MAXATTRIBUTE table, used to find  Title for a Deployed Asset Unit of Measure Attribute",
            "whereClause": "attributename=:dpaunitattribute",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONATTRCLAUSE_ITEMDESC",
            "source": "RECONATTRCLAUSE",
            "remarks": "Relationship to the MAXATTRIBUTE table, used to find Item attribute description",
            "whereClause": "objectname='ITEM' and attributename=:assetattributename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONATTRCLAUSE_ACTCIDESC",
            "source": "RECONATTRCLAUSE",
            "remarks": "Relationship to the MAXATTRIBUTE table, used to find CI attribute description",
            "whereClause": "objectname='ACTCI' and attributename=:assetattributename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONATTRCLAUSE_DPAATTRIBUTEDESC",
            "source": "RECONATTRCLAUSE",
            "remarks": "Relationship to the MAXATTRIBUTE table, used to find  Title for a Deployed Asset Attribute",
            "whereClause": "attributename=:dpaattributename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONATTRCLAUSE_ASSETDESC",
            "source": "RECONATTRCLAUSE",
            "remarks": "Relationship to the MAXATTRIBUTE table, used to find Asset attribute description",
            "whereClause": "objectname='ASSET' and attributename=:assetattributename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONATTRCLAUSE_CIDESC",
            "source": "RECONATTRCLAUSE",
            "remarks": "Relationship to the MAXATTRIBUTE table, used to find CI attribute description",
            "whereClause": "objectname='CI' and attributename=:assetattributename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONCOMPFLTRAST_DPADESC",
            "source": "RECONCOMPFLTRAST",
            "remarks": "Data Set 2 description",
            "whereClause": "objectname='DEPLOYEDASSET' and attributename=:dpaattributename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONCOMPFLTRAST_ITEMDESC",
            "source": "RECONCOMPFLTRAST",
            "remarks": "Relationship to the MAXATTRIBUTE table, used to find Item attribute description",
            "whereClause": "objectname='ITEM' and attributename=:assetattributename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONCOMPFLTRAST_DPAATTRIBUTEDESC",
            "source": "RECONCOMPFLTRAST",
            "remarks": "Data Set 2 Attribute description",
            "whereClause": "attributename=:dpaattributename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONCOMPFLTRAST_ASSETDESC",
            "source": "RECONCOMPFLTRAST",
            "remarks": "Relationship to the MAXATTRIBUTE table, used to find Asset attribute description",
            "whereClause": "objectname='ASSET' and attributename=:assetattributename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONCOMPFLTRDPA_DPADESC",
            "source": "RECONCOMPFLTRDPA",
            "remarks": "Data Set 2 description",
            "whereClause": "objectname='DEPLOYEDASSET' and attributename=:dpaattributename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONCOMPFLTRDPA_DPAATTRIBUTEDESC",
            "source": "RECONCOMPFLTRDPA",
            "remarks": "Relationship to the MAXATTRIBUTE table, used to find  Title for a Deployed Asset Attribute",
            "whereClause": "attributename=:dpaattributename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONCOMPFLTRDPA_ASSETDESC",
            "source": "RECONCOMPFLTRDPA",
            "remarks": "Relationship to the MAXATTRIBUTE table, used to find Data Set 1 attribute description",
            "whereClause": "objectname='ASSET' and attributename=:assetattributename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONCOMPFLTRDPA_CIDESC",
            "source": "RECONCOMPFLTRDPA",
            "remarks": "Relationship to the MAXATTRIBUTE table, used to find CI attribute description",
            "whereClause": "objectname='CI' and attributename=:assetattributename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONCOMPFLTRDPA_ACTCIDESC",
            "source": "RECONCOMPFLTRDPA",
            "remarks": "Relationship to the MAXATTRIBUTE table, used to find CI attribute description",
            "whereClause": "objectname='ACTCI' and attributename=:assetattributename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONLINKCLAUSE_DPAATTRIBUTEDESC",
            "source": "RECONLINKCLAUSE",
            "remarks": "Relationship to the MAXATTRIBUTE table, used to find  Title for a Deployed Asset Attribute",
            "whereClause": "attributename=:dpaattributename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONLINKCLAUSE_DPADESC",
            "source": "RECONLINKCLAUSE",
            "remarks": "Data Set 2 description",
            "whereClause": "objectname='DEPLOYEDASSET' and attributename=:dpaattributename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONLINKCLAUSE_DPAUNITATTRIBUTEDESC",
            "source": "RECONLINKCLAUSE",
            "remarks": "Relationship to the MAXATTRIBUTE table, used to find  Title for a Deployed Asset Unit of Measure Attribute",
            "whereClause": "attributename=:dpaunitattribute",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONLINKCLAUSE_ASSETDESC",
            "source": "RECONLINKCLAUSE",
            "remarks": "Relationship to the MAXATTRIBUTE table, used to find Asset attribute description",
            "whereClause": "objectname='ASSET' and attributename=:assetattributename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONLINKCLAUSE_CIDESC",
            "source": "RECONLINKCLAUSE",
            "remarks": "Relationship to the MAXATTRIBUTE table, used to find CI attribute description",
            "whereClause": "objectname='CI' and attributename=:assetattributename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONLINKCLAUSE_ACTCIDESC",
            "source": "RECONLINKCLAUSE",
            "remarks": "Relationship to the MAXATTRIBUTE table, used to find CI attribute description",
            "whereClause": "objectname='ACTCI' and attributename=:assetattributename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONRCDCLAUSE_DPAATTRIBUTEDESC",
            "source": "RECONRCDCLAUSE",
            "remarks": "Data Set 2 Attribute description",
            "whereClause": "attributename=:dpaattributename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONRCDCLAUSE_DPADESC",
            "source": "RECONRCDCLAUSE",
            "remarks": "Data Set 2 description",
            "whereClause": "objectname='DEPLOYEDASSET' and attributename=:dpaattributename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONRCDCLAUSE_ACTCIDESC",
            "source": "RECONRCDCLAUSE",
            "remarks": "Relationship to the MAXATTRIBUTE table, used to find CI attribute description",
            "whereClause": "objectname='ACTCI' and attributename=:assetattributename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONRCDCLAUSE_ASSETDESC",
            "source": "RECONRCDCLAUSE",
            "remarks": "Relationship to the MAXATTRIBUTE table, used to find Data Set 1 attribute description",
            "whereClause": "objectname='ASSET' and attributename=:assetattributename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONRCDCLAUSE_CIDESC",
            "source": "RECONRCDCLAUSE",
            "remarks": "Relationship to the MAXATTRIBUTE table, used to find CI attribute description",
            "whereClause": "objectname='CI' and attributename=:assetattributename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXATTRIBUTE",
            "source": "REPORTADHOC",
            "remarks": "Relationship from the REPORTADHOC table to the MAXATTRIBUTE table, used to find the available persistent attributes.",
            "whereClause": "persistent=1 or extended=1",
            "cardinality": null
        },
        {
            "name": "MAXATTRIBUTE_EXCLUDE",
            "source": "REPORTADHOC",
            "remarks": "Relationship to the MAXATTRIBUTE table that filters the attributes excluded from the selected object structure.",
            "whereClause": "(extended=1 or persistent=1) and not exists (select 1 from maxintobjcols where intobjfldtype = 'EXCLUDE' and intobjectname = :reportobject and maxintobjcols.objectname = maxattribute.objectname and maxintobjcols.name = maxattribute.attributename)",
            "cardinality": null
        },
        {
            "name": "MAXATTRIBUTECALC",
            "source": "REPORTADHOC",
            "remarks": "Relationship from the REPORTADHOC table to the MAXATTRIBUTE table for the calc tab.",
            "whereClause": "(persistent=1 or extended=1) and maxtype in ('AMOUNT','BIGINT','DATE','DATETIME','DECIMAL','DURATION','FLOAT','INTEGER','SMALLINT','TIME', 'YORN')",
            "cardinality": null
        },
        {
            "name": "MAXATTRIBUTECALC_EXCLUDE",
            "source": "REPORTADHOC",
            "remarks": "Relationship from the REPORTADHOC table to the MAXATTRIBUTE table for the calc tab.",
            "whereClause": "(extended=1 or persistent=1) and not exists (select 1 from maxintobjcols where intobjfldtype = 'EXCLUDE' and intobjectname = :reportobject and maxintobjcols.objectname = maxattribute.objectname and maxintobjcols.name = maxattribute.attributename) and maxtype in ('AMOUNT','BIGINT','DATE','DATETIME','DECIMAL','DURATION','FLOAT','INTEGER','SMALLINT','TIME', 'YORN')",
            "cardinality": null
        },
        {
            "name": "REPORTLOOKUP_MAXATTR",
            "source": "REPORTLOOKUP",
            "remarks": "List of Attributes for entered object",
            "whereClause": "attributename = :attributename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXATTRIBUTE",
            "source": "SCRIPTLAUNCHPOINT",
            "remarks": "Relationship to the  MAXATTRIBUTE table, used to find the all launch points of the script.  This resulting set will contain 1 or more objects.",
            "whereClause": "objectname = :objectname",
            "cardinality": null
        },
        {
            "name": "MAXATTRIBUTE",
            "source": "SECURITYRESTRICT",
            "remarks": "Relationship from Security Restriction to MaxGroup",
            "whereClause": "objectname = :objectname and attributename = :attributename",
            "cardinality": "UNDEFINED"
        }
    ]
}