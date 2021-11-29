mos = {
    "objectName": "DMCOLLPKGEXCEPTION",
    "className": "psdi.dm.collection.DMCollPKGExceptionSet",
    "description": "Migration Collections package exceptions.",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "DMCOLLPKGEXCEPTIONID",
    "primaryKeyColumns": [
        "EXCEPTION"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "DMCOLLRELRULE",
            "targetObject": "DMCOLLPKGEXCEPTION",
            "parentKeys": "RELRULE",
            "targetKeys": "EXCEPTION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Exception realating to this rule.",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "DMCOLLPKGEXCEPTION",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
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
        }
    ],
    "columns": [
        {
            "attributeName": "EXCEPTION",
            "required": true,
            "persistent": true,
            "title": "Exception",
            "remarks": "The name of the exception.The exception determines whether multiple package definitions are created from a migration collection. The name is the primary key.",
            "sameAsAttribute": "RELRULE",
            "sameAsObject": "DMCOLLRELRULE"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "The description of the exception.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USERDEFINED",
            "required": true,
            "persistent": true,
            "title": "User defined",
            "remarks": "Indicates whether the exception is created by a user.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENABLED",
            "required": true,
            "persistent": true,
            "title": "Enabled",
            "remarks": "Select this option to enable the exception. System-defined exceptions are enabled by default.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EXCEPTIONCFGOBJECT",
            "required": true,
            "persistent": true,
            "title": "Exception Object Structure",
            "remarks": "Select the object structure whose order within its migration group and migration group order across all migration groups are both lower than the dependent object structure order and its migration group order. Review the migration groups and object structures in the Migration Groups application.",
            "sameAsAttribute": "INTOBJECTNAME",
            "sameAsObject": "MAXINTOBJECT"
        },
        {
            "attributeName": "DEPENDENTCFGOBJECT",
            "required": true,
            "persistent": true,
            "title": "Dependent Object Structure",
            "remarks": "Select the object structure whose order within its migration group and migration group order across all migration groups are both higher than the exception object structure order and its migration group order. Review the migration groups and object structures in the Migration Groups application.",
            "sameAsAttribute": "INTOBJECTNAME",
            "sameAsObject": "MAXINTOBJECT"
        },
        {
            "attributeName": "EXCEPTIONCONDITION",
            "required": false,
            "persistent": true,
            "title": "Exception Condition",
            "remarks": "Specifies an SQL WHERE condition that is applied to the primary business object of the exception object structure.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EXCEPTIONINSTR",
            "required": false,
            "persistent": true,
            "title": "Exception instructions",
            "remarks": "Describes the procedures to follow when an exception applies to a migration collection.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EXPOBJECT",
            "required": false,
            "persistent": false,
            "title": "Object Name",
            "remarks": "Expression builder Object",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "DMCOLLRELRULEID",
            "required": false,
            "persistent": false,
            "title": "Unique Id from DMCOLLRELRULEID",
            "remarks": "Unique Id from DMCOLLRELRULEID.",
            "sameAsAttribute": "DMCOLLRELRULEID",
            "sameAsObject": "DMCOLLRELRULE"
        },
        {
            "attributeName": "PRIMARYOBJECT",
            "required": true,
            "persistent": false,
            "title": "Primary Object from DMCOLLRELRULEID",
            "remarks": "The primary object of an object structure for which a management application exists.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "RELATEDOBJECT",
            "required": true,
            "persistent": false,
            "title": "Related Object from DMCOLLRELRULEID",
            "remarks": "The related object, which is a primary object of an object structure for which no management application exists.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "DMCOLLPKGEXCEPTIONID",
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
            "remarks": "Language Column",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "DMCOLLRELRULE",
            "target": "DMCOLLRELRULE",
            "remarks": "Relationship from DMCOLLPKGEXCEPTION to DMCOLLRELRULE.",
            "whereClause": "dmcollrelruleid=:dmcollrelruleid",
            "cardinality": null
        },
        {
            "name": "DMRELRULEEX",
            "target": "DMCOLLRELRULE",
            "remarks": "Get split rule information",
            "whereClause": "relrule=:exception",
            "cardinality": null
        },
        {
            "name": "DMCOLLRELRULECOLS",
            "target": "DMCOLLRELRULECOLS",
            "remarks": "Relationship from DMCOLLPKGEXCEPTION to DMCOLLRELRULECOLS.",
            "whereClause": "dmcollrelruleid=:dmcollrelruleid",
            "cardinality": null
        },
        {
            "name": "EXPBUILDER",
            "target": "EXPBUILDER",
            "remarks": "Relationship to SQLBuilder.",
            "whereClause": "1=1",
            "cardinality": null
        }
    ],
    "incomingRelationships": []
}