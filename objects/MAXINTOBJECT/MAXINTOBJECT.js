mos = {
    "objectName": "MAXINTOBJECT",
    "className": "psdi.iface.app.intobject.MaxIntObjectSet",
    "description": "Object Structure",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXINTOBJECTID",
    "primaryKeyColumns": [
        "INTOBJECTNAME"
    ],
    "logicalRelationships": [
        {
            "objectName": "MAXINTOBJECT",
            "targetObject": "DMCFGOBJECT",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "CFGOBJECT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Object Structure used by Migration group.",
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
            "objectName": "MAXINTOBJECT",
            "targetObject": "DMCOLLECTIONRELOBJ",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "CFGOBJECT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Object Structure used in Migration Collection.",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJECT",
            "targetObject": "DMCOLLEVENTTRK",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "INTOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Object Structure for event tracking.",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJECT",
            "targetObject": "DMCOLLPKGEXCEPTION",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "DEPENDENTCFGOBJECT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Dependent Object Structure of this Exception. This exception need to be resolved before the dependent exceptions can be resolved.",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJECT",
            "targetObject": "DMCOLLPKGEXCEPTION",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "EXCEPTIONCFGOBJECT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Object Structure of this Exception.",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJECT",
            "targetObject": "DMCOMPRESULT",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "CFGOBJECT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Object Structure for Database Comparison result.",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJECT",
            "targetObject": "DMERROR",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "CFGOBJECT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Object Structure for the error.",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJECT",
            "targetObject": "DMMAPDEF",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "CFGOBJECT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Object Structure for Mapping.",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJECT",
            "targetObject": "DMPKGCFGOBJDEF",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "CFGOBJECT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Object Structure for Migration group SQL Where clause.",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJECT",
            "targetObject": "DMPKGSTAGING",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "CFGOBJECT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Staging Components for object Structure.",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJECT",
            "targetObject": "LAYOUT",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "INTOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Object Structure",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJECT",
            "targetObject": "MAXCONDDETAIL",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "INTOBJECTNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 13",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJECT",
            "targetObject": "MAXIFACECOND",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "INTOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Object Structure",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJECT",
            "targetObject": "MAXIFACEIN",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "INTOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Object Structure",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJECT",
            "targetObject": "MAXIFACEINDETAIL",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "INTOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Object Structure",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJECT",
            "targetObject": "MAXIFACEINVOKE",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "INTOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Request Object Structure",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJECT",
            "targetObject": "MAXIFACEINVOKE",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "REPLYINTOBJNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Response Object Structure",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJECT",
            "targetObject": "MAXIFACEOUT",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "INTOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Object Structure",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJECT",
            "targetObject": "MAXIFACEPROC",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "INTOBJECTNAME",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Object Structure",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJECT",
            "targetObject": "MAXINTLISTENER",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "INTOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Object Structure",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJECT",
            "targetObject": "MAXINTMAPPING",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "INTOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Object Structure",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJECT",
            "targetObject": "MAXINTOBJALIAS",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "INTOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Object Structure",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJECT",
            "targetObject": "MAXINTOBJAPP",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "INTOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Object Structure",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJECT",
            "targetObject": "MAXINTOBJCOLS",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "INTOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Object Structure",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJECT",
            "targetObject": "MAXINTOBJDETAIL",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "INTOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Object Structure",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJECT",
            "targetObject": "MAXPROCCOLS",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "INTOBJECTNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 27",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJECT",
            "targetObject": "MAXREPLACEPROC",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "INTOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Object Structure",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJECT",
            "targetObject": "MAXTRANSFORMPROC",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "INTOBJECTNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 29",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJECT",
            "targetObject": "OSLCINTERACTION",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "INTOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Object Structure",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJECT",
            "targetObject": "OSLCQUERY",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "INTOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Object Structure",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJECT",
            "targetObject": "OSLCRESOURCE",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "INTOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Object Structure",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJECT",
            "targetObject": "OSLCRESOURCEDETAIL",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "INTOBJECTNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 32",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJECT",
            "targetObject": "OSLCRESOURCEDETAIL",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "LINKEDOSNAME",
            "relNum": "1 to 1",
            "status": "VERIFIED",
            "description": "Linked Resource",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJECT",
            "targetObject": "OSOSLCACTION",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "INTOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Object Structure",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJECT",
            "targetObject": "OSOSLCMAP",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "INTOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Object Structure",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJECT",
            "targetObject": "OSOSLCMAP",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "LINKOSNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Linked Object Structure",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJECT",
            "targetObject": "REPORTADHOC",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "REPORTOBJECT",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 36",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJECT",
            "targetObject": "REPORTOSAUTH",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "INTOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Object Structure",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "MAXINTOBJECT",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "MAXINTOBJECT",
            "parentKeys": "APP",
            "targetKeys": "APP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "MAXINTOBJECT",
            "parentKeys": "APP",
            "targetKeys": "AUTHAPP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Authorizing Application",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXINTOBJECT",
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
            "attributeName": "INTOBJECTNAME",
            "required": true,
            "persistent": true,
            "title": "Object Structure",
            "remarks": "Identifies the integration object. This value must be unique.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the integration object. To enter or view additional information, click the Long Description button.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SELFREFERENCING",
            "required": true,
            "persistent": true,
            "title": "Self Reference",
            "remarks": "SELFREFERENCING",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USERDEFINED",
            "required": true,
            "persistent": true,
            "title": "User Defined",
            "remarks": "Specifies whether the corresponding object was predefined (MEA-supplied) or added by a user. If the check box is selected, a user created the object.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEBY",
            "required": true,
            "persistent": true,
            "title": "Changed By",
            "remarks": "CHANGEBY",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "CHANGEDATE",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "DESCRIPTION_LONGDESCRIPTION",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXINTOBJECTID",
            "required": true,
            "persistent": true,
            "title": "MAXINTOBJECTID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "XMLDATA",
            "required": false,
            "persistent": false,
            "title": "Request XML",
            "remarks": "XML representation of the selected integration object. It reflects the included and excluded persistent, non-persistent.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LANGCODE",
            "required": true,
            "persistent": true,
            "title": "Language Code",
            "remarks": "Language Column",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
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
            "attributeName": "DEFCLASS",
            "required": false,
            "persistent": true,
            "title": "Outbound Definition Class",
            "remarks": "Path to a Java class file that contains outbound processing and filtering code. This is a processing class that is typically used to filter the content of any MOS created by Maximo. It is applicable only for Publishing and/ or filtering query responses. This class is not always required",
            "sameAsAttribute": "CLASSNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "PROCCLASS",
            "required": false,
            "persistent": true,
            "title": "Inbound Processing Class",
            "remarks": "Path to a Java class file that contains Inbound processing code. This is a processing class that facilitates the creation/ update of the MBOs that constitute the MOS. Note that this class does not contain any processing logic for query support it is only for facilitating Content Management (Create/ Update/ Delete) Services. This class is not always required.",
            "sameAsAttribute": "CLASSNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "QUERYONLY",
            "required": true,
            "persistent": true,
            "title": "Query Only",
            "remarks": "This is a Boolean indicator identifying if the MOS can be used to create/ update Maximo MBOs",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONFIGURABLE",
            "required": true,
            "persistent": true,
            "title": "Configurable",
            "remarks": "Identifies if the MOS is configurable i.e. if the user can Add/ Modify any of the MOS properties.This flag will always be 'Y' for all user-defined MOSs.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FLATSUPPORTED",
            "required": true,
            "persistent": true,
            "title": "Support Flat Structure",
            "remarks": "This is a Boolean indicator identifying if the MOS supports Flat File/ Interface table processing. This defaults to 'N",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USEWITH",
            "required": true,
            "persistent": true,
            "title": "Consumed By",
            "remarks": "Indicates from where in Maximo the Maximo Object Structure is accessible. Possible values include: ALL, INTEGRATION and DEPLOYMENT MGR. If you choose ALL, the MOS can be used from any Maximo application. If you choose INTEGRATION, the template is available from the INTEGRATION applications, but cannot be used in other app. Chosing either DEPLOYMENT MGR or someother app limits the use of the MOS to within that specific application. Click the Select Value button to indicate from where the MOS can be accessed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ALIASCONFLICT",
            "required": true,
            "persistent": true,
            "title": "Alias Conflict",
            "remarks": "Identifies the status of the Alias Validation Process",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USEWITHDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "UseWith Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MESSAGETYPE",
            "required": false,
            "persistent": false,
            "title": "Operation",
            "remarks": "Message type. The Value of this field comes from SYNONYMDOMAIN \"MESSAGETYPE\"",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RESPONSEXML",
            "required": false,
            "persistent": false,
            "title": "Response XML",
            "remarks": "XML representation of the selected integration object. It reflects the included and excluded persistent, non-persistent.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "APP",
            "required": false,
            "persistent": true,
            "title": "Application",
            "remarks": "The application using this object structure. Only applies to report object structures.",
            "sameAsAttribute": "APP",
            "sameAsObject": "MAXAPPS"
        },
        {
            "attributeName": "AUTHAPP",
            "required": false,
            "persistent": true,
            "title": "Authorized Application",
            "remarks": "The specified application can authorize inbound queue-based or synchronous integration messages to this object structure. The application can also authorize export of data from this object structure.",
            "sameAsAttribute": "APP",
            "sameAsObject": "MAXAPPS"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "DMMAXINTOBJLONGDESC",
            "target": "LONGDESCRIPTION",
            "remarks": "long description record for maxintobject",
            "whereClause": "ldkey=:maxintobjectid and ldownertable = 'MAXINTOBJECT'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXAPPS",
            "target": "MAXAPPS",
            "remarks": "Relationship to the MAXAPPS table, used for Report Object Structures. The resulting set will contain zero or one object.",
            "whereClause": "app=:app",
            "cardinality": null
        },
        {
            "name": "MAXIFACEIN",
            "target": "MAXIFACEIN",
            "remarks": "Relationship to the MAXIFACEIN table, used to find all services for a given MAXINTOBJECT. (MAXINTOBJECT.intobjectname=MAXIFACEIN.intobjectname) The resulting set will contain zero or more objects.",
            "whereClause": "intobjectname=:intobjectname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXIFACEINVOKE",
            "target": "MAXIFACEINVOKE",
            "remarks": "Relationship to the MAXIFACEINVOKE table, used to find all invoke channels for a given MAXINTOBJECT. (MAXINTOBJECT.intobjectname=MAXIFACEINVOKE.intobjectname) The resulting set will contain zero or more objects.",
            "whereClause": "intobjectname=:intobjectname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXIFACEOUT",
            "target": "MAXIFACEOUT",
            "remarks": "Relationship to the MAXIFACEOUT table, used to find all publishing channels for a given MAXINTOBJECT. (MAXINTOBJECT.intobjectname=MAXIFACEOUT.intobjectname) The resulting set will contain zero or more objects.",
            "whereClause": "intobjectname=:intobjectname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXINTOBJALIAS",
            "target": "MAXINTOBJALIAS",
            "remarks": "Relationship to the MAXINTOBJALIAS table, used to find all alias columns for a given MAXINTOBJECT. (MAXINTOBJECT.intobjectname=MAXINTOBJLAIAS.intobjectname) The resulting set will contain zero or more objects.",
            "whereClause": "intobjectname=:intobjectname",
            "cardinality": null
        },
        {
            "name": "MAXINTOBJAPP",
            "target": "MAXINTOBJAPP",
            "remarks": "Get all applications for this Object Structure. This relationship will return zero or more rows.",
            "whereClause": "intobjectname=:intobjectname",
            "cardinality": null
        },
        {
            "name": "MAXINTOBJAPPEXPORT",
            "target": "MAXINTOBJAPP",
            "remarks": "Relationship to Show all Applications Available for Data Export. It will return 0 or more rows",
            "whereClause": "intobjectname = :intobjectname and usewith in (select value from synonymdomain where domainid='APPINTUSEWITH' and maxvalue = 'APPEXPORT')",
            "cardinality": null
        },
        {
            "name": "MAXINTOBJAPPIMPORT",
            "target": "MAXINTOBJAPP",
            "remarks": "Relationship to Show all Applications Available for Data Import. It will return 0 or more rows",
            "whereClause": "intobjectname = :intobjectname and usewith in (select value from synonymdomain where domainid='APPINTUSEWITH' and maxvalue = 'APPIMPORT')",
            "cardinality": null
        },
        {
            "name": "MAXINTOBJCOLS",
            "target": "MAXINTOBJCOLS",
            "remarks": "Relationship to the MAXINTOBJCOLS table, used to find all columns for a given MAXINTOBJECT. (MAXINTOBJECT.intobjectname=MAXINTOBJCOLS.intobjectname) The resulting set will contain zero or more objects.",
            "whereClause": "intobjectname=:intobjectname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXINTOBJDETAIL",
            "target": "MAXINTOBJDETAIL",
            "remarks": "Relationship to the MAXINTOBJDETAIL table, used to find all MAXINTOBJDETAIL for a given MAXINTOBJECT. (MAXINTOBJECT.intobjectname=MAXINTOBJDETAIL.intobjectname) The resulting set will contain zero or more objects.",
            "whereClause": "intobjectname=:intobjectname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DUPOBJDETAIL",
            "target": "MAXINTOBJDETAIL",
            "remarks": "Relationship to the MAXINTOBJDETAIL table, used to find all MAXINTOBJDETAIL for a given MAXINTOBJECT. (MAXINTOBJECT.intobjectname=MAXINTOBJDETAIL.intobjectname) The resulting set will contain zero or more objects.",
            "whereClause": "intobjectname=:intobjectname and objectname in (select objectname from maxintobjdetail where intobjectname=:intobjectname group by objectname having count(*) > 1)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DISTINCTOBJDETAIL",
            "target": "MAXINTOBJDETAIL",
            "remarks": "Relationship to the MAXINTOBJDETAIL table, used to find unique MAXINTOBJDETAIL records for a given MAXINTOBJECT. The resulting set will contain zero or more objects.",
            "whereClause": "intobjectname=:intobjectname and maxintobjdetailid in (select max(maxintobjdetailid) from maxintobjdetail where intobjectname=:intobjectname group by objectname)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXWSREGISTRY",
            "target": "MAXWSREGISTRY",
            "remarks": "Relationship to get all WS Registry records for Object Structure. It will return zero or more records.",
            "whereClause": "servicename=:intobjectname  and source = 'Object Structure Service'",
            "cardinality": null
        },
        {
            "name": "OSLCRESOURCE",
            "target": "OSLCRESOURCE",
            "remarks": "Relation to OSLC Resource mapping. This relationship returns one row.",
            "whereClause": "intobjectname=:intobjectname",
            "cardinality": null
        },
        {
            "name": "OSOSLCACTION",
            "target": "OSOSLCACTION",
            "remarks": "Relation to object structure actions ",
            "whereClause": "intobjectname=:intobjectname",
            "cardinality": null
        },
        {
            "name": "REPORTOSAUTH",
            "target": "REPORTOSAUTH",
            "remarks": "Relationship to the REPORTOSAUTH table, used to find the security group authorizations for this report object structure.",
            "whereClause": "intobjectname = :intobjectname",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "MAXINTOBJECT",
            "source": "AUTOSCRIPT",
            "remarks": "Relationship to the MaxIntObject table, used to find object records for a given intobectname . The resulting set will contain one row.",
            "whereClause": "intobjectname=:intobjectname",
            "cardinality": null
        },
        {
            "name": "DMCFGOBJINTOBJ",
            "source": "DMCFGOBJECT",
            "remarks": "User defined int object for dmcfgobject",
            "whereClause": "intobjectname=:cfgobject and userdefined =1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMCFGOBJINTOBJECT",
            "source": "DMCFGOBJECT",
            "remarks": "Int object for dmcfgobject",
            "whereClause": "intobjectname=:cfgobject",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXINTOBJECT",
            "source": "LAYOUT",
            "remarks": "Relationship from LAYOUT to MAXATTRIBUTE",
            "whereClause": "intobjectname=:intobjectname",
            "cardinality": null
        },
        {
            "name": "MAXINTOBJECT",
            "source": "MAXIFACEIN",
            "remarks": "Relationship to the MaxIntObject table, used to find object records for a given intobectname . The resulting set will contain one row.",
            "whereClause": "intobjectname=:intobjectname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXINTOBJECT",
            "source": "MAXIFACEINDETAIL",
            "remarks": "Relationship to the MaxIntObject table, used to find object records for a given intobjectname . The resulting set will contain one row.",
            "whereClause": "intobjectname=:intobjectname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXINTOBJECT",
            "source": "MAXIFACEINVOKE",
            "remarks": "get the maxintobject for request object structure",
            "whereClause": "intobjectname=:intobjectname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXINTOBJECTRESP",
            "source": "MAXIFACEINVOKE",
            "remarks": "get the maxintobject for response object structure",
            "whereClause": "intobjectname=:replyintobjname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXINTOBJECT",
            "source": "MAXIFACELOAD",
            "remarks": "Relationship to get Object Structure description. It will return one row.",
            "whereClause": "intobjectname=:intobjectname",
            "cardinality": null
        },
        {
            "name": "MAXINTOBJECT",
            "source": "MAXIFACEOUT",
            "remarks": "get the maxintobject for object structure",
            "whereClause": "intobjectname=:intobjectname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REQUESTOBJECTS",
            "source": "MAXINTERACTION",
            "remarks": "Relationship to get Object Structure information for Request Object",
            "whereClause": "intobjectname=:reqosname",
            "cardinality": null
        },
        {
            "name": "RESPONSEOBJECTS",
            "source": "MAXINTERACTION",
            "remarks": "Relationship to get Object Structure information for Response Object",
            "whereClause": "intobjectname=:resposname",
            "cardinality": null
        },
        {
            "name": "MAXINTOBJECT",
            "source": "MAXINTOBJAPP",
            "remarks": "Relationship to get Object Structure description. It will return one row.",
            "whereClause": "intobjectname=:intobjectname",
            "cardinality": null
        },
        {
            "name": "MAXINTOBJECT",
            "source": "OSLCRESOURCE",
            "remarks": "Relation to get Object Struture description. This relationship returns one row.",
            "whereClause": "intobjectname=:intobjectname",
            "cardinality": null
        },
        {
            "name": "MAXINTOBJECT",
            "source": "REPORTADHOC",
            "remarks": "Relationship from the REPORTADHOC table to the MAXINTOBJECT table.",
            "whereClause": "intobjectname=:reportobject",
            "cardinality": null
        }
    ]
}