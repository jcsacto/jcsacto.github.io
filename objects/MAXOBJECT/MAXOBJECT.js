mos = {
    "objectName": "MAXOBJECT",
    "className": "psdi.app.configure.MaxObjectSet",
    "description": "Maximo Object",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXOBJECTID",
    "primaryKeyColumns": [
        "OBJECTNAME"
    ],
    "logicalRelationships": [
        {
            "objectName": "MAXOBJECT",
            "targetObject": "ACTCISPEC",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "REFOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Reference Object",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "ACTION",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "The Action is restricted to Mbos of this object type.",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "APPFIELDDEFAULTS",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 3",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "ASSETFEATURESPEC",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "REFOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Reference Object",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "ASTMSOVER",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "MOOBJECT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Included MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "ATTRFORMULA",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "CISPEC",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "REFOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Reference Object",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "CLASSSPECUSEWITH",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "CLASSUSEWITH",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "COMMLOG",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "ORGOBJECT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Originating Object",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "COMMLOG",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OWNERTABLE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Owning Object",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "COMMTEMPLATE",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "The Mbo Object type this CommTemplate is designed for.",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "CONTRACTDEFAULT",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "PROPERTYID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 12",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "CONTRACTPROPERTY",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "PROPERTYID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 13",
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
            "objectName": "MAXOBJECT",
            "targetObject": "DMCOLLECTIONRELOBJ",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Object used in Migration Collection.",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "DMCOLLLOOKUPRULE",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "LOOKUPOBJECT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Object Structure main Object for the lookup rule.",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "DMCOLLRELRULE",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "PRIMARYOBJECT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Primary Object for this rule.",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "DMCOLLRELRULE",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "RELATEDOBJECT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Related Object for this rule.",
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
            "objectName": "MAXOBJECT",
            "targetObject": "DMCOMPRESULT",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "ENTITYNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Database Table for Database Comparison result.",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "DMCOMPRESULT",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Object for Database Comparison result.",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "DMMAPDEF",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Object for Mapping.",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "DMMAPPINGATTRIBUTEVIEW",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Object for Attribute to be added for mapping.",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "DMPKGEVENTTRK",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Tracking Events for Object.",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "DMPKGEVENTTRK",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "PARENTOBJECT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Tracking Events for Parent Object in Object Structure.",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "DMPKGTRACKHIST",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "History tracking for Object.",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "DMPKGTRACKHIST",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "PARENTOBJECT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "History tracking for Parent Object in Object Structure.",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "DOCLINKS",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OWNERTABLE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "The Mbo Object the document is linked.",
            "longDescription": "The OwnerID column is the unique ID of the specific record to which the documents are linked."
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "ESCALATION",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "The Mbo Object the escalation executes on.",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "ESCCOMMLOG",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "ORGOBJECT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Originating Object",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "ESCCOMMLOG",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OWNERTABLE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Owning Object",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "ESCREPEATTRACK",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "The Mbo Object the escalation executes on.",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "ESCSTATUS",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "The Mbo Object the escalation executes on.",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "EVENTRESPONSE",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "REFTABLE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Type of object on which we are monitoring events.",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "EVENTRESPONSE",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "SOURCETABLE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Source of the Event Response",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "EVENTRESPONSE",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "TARGETTABLE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Object that will be affected by the response",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "FEATURESPEC",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "REFOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Reference Object",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "IMGLIB",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "REFOBJECT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Referenced Object",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "INBCOMMSECURITY",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "INBOUNDCOMM",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "INVLIFOFIFOCOST",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "REFOBJECT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "INVOICELINE",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "ORIGINATOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Originating Consignment Transaction Object",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "JOBPLANSPEC",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "REFOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Reference Object",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "JOBTASKSPEC",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "REFOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Reference Object",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "JSONATTRIBUTEMAP",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "JSONOBJECTMAP",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "JSONOBJECTMAP",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "PARENTOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Parent Object Type",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "KPITEMPLATEVAR",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "LBSCREWVIEW",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "REFOBJECT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Reference Object",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "LBSLABORVIEW",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "REFOBJECT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Reference Object",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "LBSLOCATION",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "REFOBJECT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Reference Object",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "LMO",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "RESPONSEMBO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Response MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "LMO",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "SOURCEMBO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Source MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "LOGICALRELATIONSHIP",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "The Mbo Object where the relationship originates.",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "LOGICALRELATIONSHIP",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "TARGETOBJ",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "The Mbo Object target of the relationship.",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "LOGINTRACKING",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OWNERTABLE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Owning Object",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "LONGDESCRIPTION",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "LDOWNERCOL",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 51",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "LONGDESCRIPTION",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "LDOWNERTABLE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "The Mbo Object that owns the long description",
            "longDescription": "The LDKey is the unique ID of the specific record that owns the long description"
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAPTIP",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAPTIPDEFAULTS",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAPTIPMENU",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXAPPS",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "MAINTBNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "The Mbo Object that is the main source of data for the application.",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXASYNCJOB",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
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
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXATTRIBUTESKIPCOPY",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 65",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXCONDDETAIL",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "MBONAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXDOMAINLINK",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXDOMVALCOND",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "0 to many",
            "status": "VERIFIED",
            "description": "Object Condition value is applied to.",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXDYNAMICDOMLINK",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXIFACEIN",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "IFACETBNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Interface Table",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXIFACEOUT",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "IFACETBNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Interface Table",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXIFACEPROC",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXINTERACTION",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "INTMAINOBJECT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Main Object",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXINTLISTENER",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXINTMAPPING",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "MAPOBJECT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Mapped Object",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXINTMAPPING",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXINTOBJAPP",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "PRIMARYOBJECT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Primary Object",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXINTOBJCOLS",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXINTOBJDETAIL",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "ALTKEY",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 79",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXINTOBJDETAIL",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXLOOKUPMAP",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "SOURCE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Source MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXLOOKUPMAP",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "TARGET",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Target MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXOBJECT",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "ENTITYNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 83",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXOBJECT",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "EXTENDSOBJECT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "The Mbo Object this Mbo Object is extened from.",
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
            "objectName": "MAXOBJECT",
            "targetObject": "MAXRECORDLOCK",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OWNERTABLE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Owning Object",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXRELATIONSHIP",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "CHILD",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "The Mbo Object target of a UI relationship.",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXRELATIONSHIP",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "PARENT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "The Mbo Object originator of a UI relationship.",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXREPLACEPROC",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "MBONAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXROLE",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Mbo object this role is designed for.",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXROWSTAMP",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "TABLENAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 93",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXSEQUENCE",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "NAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 94",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXSEQUENCE",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "SEQUENCENAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 95",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXSEQUENCE",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "TBNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 96",
            "longDescription": null
        },
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
            "objectName": "MAXOBJECT",
            "targetObject": "MAXSYSKEYS",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "COLNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 99",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXSYSKEYS",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "IXNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 100",
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
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXTABLEDOMAIN",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Object used for Domain",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXVIEW",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "VIEWNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "For Mbo Objects that are stored as views.",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXVIEWCFG",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "VIEWNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 119",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXVIEWCOLUMN",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "SAMESTORAGEAS",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 120",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXVIEWCOLUMN",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "TABLECOLUMNNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 121",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXVIEWCOLUMN",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "TABLENAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 122",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXVIEWCOLUMN",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "VIEWCOLUMNNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 123",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXVIEWCOLUMN",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "VIEWNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 124",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXVIEWCOLUMNCFG",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "SAMESTORAGEAS",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 125",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXVIEWCOLUMNCFG",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "TABLECOLUMNNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 126",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXVIEWCOLUMNCFG",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "TABLENAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 127",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXVIEWCOLUMNCFG",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "VIEWCOLUMNNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 128",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXVIEWCOLUMNCFG",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "VIEWNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 129",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MFMAILCFG",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "MBONAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MFMAILST",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "MBONAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MFMAILTRACK",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "MBONAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MFMAILWF",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "MBONAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "OBJECTAPPAUTH",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "OBJECTFORMULA",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "OSLCDOMAIN",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "PROVIDEROBJNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Service Provider",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "OSLCINTERACTION",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "APPOBJECT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application Main Object",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "OSLCINTGROUP",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Main Object",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "OSLCINTGRPAPPS",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "APPOBJECT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application Object",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "OSLCINTQUERYPARAMS",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application Main Object",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "OSLCSPDEFN",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "PROVIDEROBJNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Provider Object",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "PALETTEITEM",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "PDSPEC",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "REFOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Reference Object",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "PROCOBJ",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Object used by the Time Zone Process.",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "PROPERTYASSOC",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "PROPERTYID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 141",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "PROPERTYDEFAULT",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "PROPERTYID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 142",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "RECONASSETRESULT",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "AUTHOBJECT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "RECONASSETRESULT",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "DPAOBJECT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Data Set 2 MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "RECONATTRCLAUSE",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "ASSETOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "RECONATTRCLAUSE",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "DPAOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Data Set 2 MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "RECONCIRESULT",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "ACTCIOBJECT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "RECONCIRESULT",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "AUTHOBJECT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "RECONLINKCLAUSE",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "ASSETOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "RECONLINKCLAUSE",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "DPAOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Data Set 2 MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "RECONRCDCLAUSE",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "ASSETOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "RECONRCDCLAUSE",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "DPAOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Data Set 2 MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "RECONRESULT",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "AUTHOBJECT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "RECONRESULT",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "DPAOBJECT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Data Set 2 MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "RECONRULECLAUSE",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "ASSETOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "RECONRULECLAUSE",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "DPAOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Data Set 2 MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "RECORDTIMEZONE",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Time Zone for Object. The Objectname specifis which Object is used.",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "REPORT",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "BASETABLENAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 158",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "REPORTADHOC",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 159",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "REPORTADHOCFIELD",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 160",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "REPORTLABEL",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SCRIPTLAUNCHPOINT",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SECURITYRESTRICT",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SERVICEADDRESS",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SKDACTION",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SKDACTION",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "SKDOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "SKD Storage MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SKDACTIVITY",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SKDACTIVITY",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "REFOBJNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Referenced MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SKDASSETLOCQUERY",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "EXPOBJECT",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "M",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SKDASSETLOCQUERY",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO returned from query",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SKDASSETLOCQUERY",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "SKDOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "SKD MBO where data is stored",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SKDCONSTRAINT",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SKDCONSTRAINT",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "REFOBJNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Referenced MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SKDDATAGROUP",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "SKDOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "SKD MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SKDOBJECT",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SKDOBJECT",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "SAMEASOBJECT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Same As Object",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SKDOBJECT",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "SKDOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Scheduler Storage Object",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SKDOBJECTMGR",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Input MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SKDOBJECTMGR",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "SKDOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Output SKD MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SKDODMAPP",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "INPUTOBJ",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Input Object to ODM Application",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SKDPROJECTASSTS",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Parent MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SKDPROJECTOBJ",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "MAXOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SKDPROJECTOBJ",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Parent MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SKDPROJECTSCENARIO",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "INPUTOBJ",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Input Parameter MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SKDPROPERTY",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "SKDOBJECTNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 176",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SKDPROPERTYMAP",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "APPLINKOBJECT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Main Object type of Application to open hyperlink",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SKDPROPERTYMAP",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 178",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SKDPROPERTYMAP",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "SKDOBJECTNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 179",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SKDQUERY",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 180",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SKDQUERY",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "SKDOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO where to store data.",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SKDQUERY",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "P_OBJECTNAME",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 195",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SKDRESERVATION",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SKDRESERVATION",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "REFOBJNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Referenced MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SKDRESOBJECT",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "RESOURCEOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Resource MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SKDRESOURCE",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SKDRESOURCE",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "REFOBJNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Referenced MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SKDRESOURCEUSE",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SKDRESOURCEUSE",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "REFOBJNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Referenced MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SKDUSERPROP",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "SKDOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SLA",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Type of Object this SLA applies to.",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SOLUTIONSPEC",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "REFOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Reference Object",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "TAXORDER",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "TABLENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "TICKETSPEC",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "REFOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Reference Object",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "TIMEZONERULE",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "The object for which the Time Zone rule is defined.",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "TKTEMPLATESPEC",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "REFOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Reference Object",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "TKTEMPLTACTYSPEC",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "REFOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Reference Object5",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "WFACTIVATION",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OWNERTABLE",
            "relNum": "1 to 1",
            "status": "VERIFIED",
            "description": "The type of Mbo Object this activation is for.",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "WFAPPTOOLBAR",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "The type of Mbo Object these buttons are for.",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "WFASSIGNMENT",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OWNERTABLE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "The target Mbo Object of the Workflow Assignment",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "WFINSTANCE",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OWNERTABLE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "The target Mbo Object of the Workflow Instance",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "WFPROCESS",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "The Mbo type the Workflow process executes only, exclusively.",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "WFTRANSACTION",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OWNERTABLE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "The target Mbo Object of the Workflow transaction",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "WORKORDERSPEC",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "REFOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Reference Object",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "MAXOBJECT",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXOBJECT",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "ENTITYNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 83",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXOBJECT",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "EXTENDSOBJECT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "The Mbo Object this Mbo Object is extened from.",
            "longDescription": null
        },
        {
            "objectName": "MAXSERVICE",
            "targetObject": "MAXOBJECT",
            "parentKeys": "SERVICENAME",
            "targetKeys": "SERVICENAME",
            "relNum": "1 to 1",
            "status": "VERIFIED",
            "description": "The service that provides the Mbo Object.",
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
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CLASSNAME",
            "required": false,
            "persistent": true,
            "title": "Java Class",
            "remarks": "The Java class that is used to represent and manage the business object.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": true,
            "persistent": true,
            "title": "Description",
            "remarks": "Object description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EAUDITENABLED",
            "required": true,
            "persistent": true,
            "title": "E-audit Enabled",
            "remarks": "When checked, indicates that Electronic Auditing (EAUDIT) is enabled for this object.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EAUDITFILTER",
            "required": false,
            "persistent": true,
            "title": "E-audit Filter",
            "remarks": "User defined filter for an Electronic Audit record",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "remarks": "User defined filter for an Electronic Signature",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "title": "Is View",
            "remarks": "True if this is a view, False if this is a table",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PERSISTENT",
            "required": true,
            "persistent": true,
            "title": "Persistent",
            "remarks": "Indicates a persistent object that can be a view or a table. An object must be persistent for you to define an index on it.",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "title": "Site/Organization Type",
            "remarks": "The organizational level to which the object applies.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USERDEFINED",
            "required": true,
            "persistent": true,
            "title": "User Defined",
            "remarks": "Indicates that the object was created by a user.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAINOBJECT",
            "required": true,
            "persistent": true,
            "title": "Main Object",
            "remarks": "Indicates a main object for business applications and workflows.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INTERNAL",
            "required": true,
            "persistent": true,
            "title": "Internal",
            "remarks": "Indicates that the object is reserved for internal use by the platform and cannot be altered by using the Database Configuration application.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXOBJECTID",
            "required": true,
            "persistent": true,
            "title": "MAXOBJECTID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "RESOURCETYPE",
            "required": false,
            "persistent": true,
            "title": "Resource Type",
            "remarks": "Resource Type",
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
            "name": "MAXAPPS",
            "target": "MAXAPPS",
            "remarks": "MaxObject to any app for which this is the main object",
            "whereClause": "maintbname = :objectname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXATTRIBUTE",
            "target": "MAXATTRIBUTE",
            "remarks": "MaxObject to MaxAttribute.  The result set will contain one or more objects.",
            "whereClause": "objectname = :objectname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXTABLE",
            "target": "MAXTABLE",
            "remarks": "MaxObject to MaxTable.  If this is a persistent table, the result set will contain one object.",
            "whereClause": ":isview = :no and :persistent = :yes and tablename = :entityname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXVIEW",
            "target": "MAXVIEW",
            "remarks": "MaxObject to MaxView.  If this is a persistent view, the result set will contain one object.",
            "whereClause": ":isview = :yes and :persistent = :yes and viewname = :entityname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SECURITYRESTRICT",
            "target": "SECURITYRESTRICT",
            "remarks": "Relationship from MaxObject to Security Restriction",
            "whereClause": "objectname = :objectname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SECURITYRESTRICTROW",
            "target": "SECURITYRESTRICT",
            "remarks": "Relationship from MaxObject to Security Restriction for row restrictions only",
            "whereClause": "objectname = :objectname and :type in (select maxvalue from synonymdomain where domainid = 'RESTRICTTYPE' and maxvalue = 'ROW')",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "RULEMBOOBJ",
            "source": "DMMAPRULES",
            "remarks": "Mbo Object Relationship",
            "whereClause": "objectname = :mboobject",
            "cardinality": null
        },
        {
            "name": "MAPMBOOBJ",
            "source": "DMPACKAGEDEF",
            "remarks": "Relationship for getting MBO Object description",
            "whereClause": "objectname = :mapobjectdesc",
            "cardinality": null
        },
        {
            "name": "INBMAXOBJ",
            "source": "INBCOMMSECURITY",
            "remarks": "Maximo Business Object for INBCOMMSECURITY",
            "whereClause": "objectname=:objectname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REQUESTOBJECT",
            "source": "INTGENERATOR",
            "remarks": "Relation to get request object information. It will return 1 row.",
            "whereClause": "objectname=:wsioobjname",
            "cardinality": null
        },
        {
            "name": "RESPONSEOBJECT",
            "source": "INTGENERATOR",
            "remarks": "Relation to get request object information. It will return 1 row.",
            "whereClause": "objectname=:wsioobjname",
            "cardinality": null
        },
        {
            "name": "MAXOBJECT",
            "source": "MAXAPPS",
            "remarks": "Relationship from MaxApps to MaxObject for maintbname",
            "whereClause": "objectname = :maintbname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXOBJECT",
            "source": "MAXDOMVALCOND",
            "remarks": "Relationship from MAXDOMVALCOND to MAXOBJECT",
            "whereClause": "objectname = :objectname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXOBJECT",
            "source": "MAXINTOBJDETAIL",
            "remarks": "relationship to the object details",
            "whereClause": "objectname=:intobjectname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXOBJECTCOGNOS",
            "source": "MAXINTOBJDETAIL",
            "remarks": "Relationship with MaxObject",
            "whereClause": "objectname=:objectname",
            "cardinality": null
        },
        {
            "name": "MAXOBJECT",
            "source": "MAXLECONTEXT",
            "remarks": "Relationship between Launch Context and MBOs, that shows the MBO type for this Launch Context.",
            "whereClause": "resourcetype=:objectname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXOBJECT",
            "source": "MAXOBJECTCFG",
            "remarks": "MaxObjectCfg to MaxObject.  The result set will contain one object if the object has been configured, or zero if the object is new and has not yet been configured.",
            "whereClause": "objectname = :objectname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXOBJECT",
            "source": "MFMAILCFG",
            "remarks": "Relationship to the MAXOBJECT table, used to find description for MBO name",
            "whereClause": "objectname = :mboname",
            "cardinality": null
        },
        {
            "name": "MAXOBJECT",
            "source": "OSLCINTGRPAPPS",
            "remarks": "Relation to get Object Description Name. It will return one row.",
            "whereClause": "objectname=:appobject",
            "cardinality": null
        },
        {
            "name": "MAXOBJECT",
            "source": "SECURITYRESTRICT",
            "remarks": "Relationship from Security Restriction to MaxObject",
            "whereClause": "objectname = :objectname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXOBJECTROW",
            "source": "SECURITYRESTRICT",
            "remarks": "Relationship from Security Restriction to MaxObject for row restrictions only",
            "whereClause": "objectname = :objectname and :type in (select maxvalue from synonymdomain where domainid = 'RESTRICTTYPE' and maxvalue = 'ROW')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXOBJECT",
            "source": "SKDQUERY",
            "remarks": "To get the MAXOBJECT for a Schedule's Query MAXOBJECT table.",
            "whereClause": "1=1",
            "cardinality": null
        }
    ]
}