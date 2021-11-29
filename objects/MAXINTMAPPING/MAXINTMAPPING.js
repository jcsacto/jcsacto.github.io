mos = {
    "objectName": "MAXINTMAPPING",
    "className": "com.ibm.tivoli.maximo.interaction.app.manageint.MaxIntMappingSet",
    "description": "Interaction Mapping",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXINTMAPPINGID",
    "primaryKeyColumns": [
        "INTERACTION",
        "INTOBJECTNAME",
        "HIERARCHYPATH",
        "ISRESPONSE"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
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
            "objectName": "MAXRELATIONSHIP",
            "targetObject": "MAXINTMAPPING",
            "parentKeys": "NAME",
            "targetKeys": "RELATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application Relationship",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXINTMAPPING",
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
            "attributeName": "INTERACTION",
            "required": true,
            "persistent": true,
            "title": "Interaction Name",
            "remarks": "Specifies a unique name for the interaction",
            "sameAsAttribute": "INTERACTION",
            "sameAsObject": "INTGENERATOR"
        },
        {
            "attributeName": "ISRESPONSE",
            "required": true,
            "persistent": true,
            "title": "Is Respone",
            "remarks": "Is Response",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEBY",
            "required": false,
            "persistent": true,
            "title": "Change By",
            "remarks": "Change By",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": false,
            "persistent": true,
            "title": "Change Date",
            "remarks": "Change Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OBJECTNAME",
            "required": true,
            "persistent": true,
            "title": "Object Name",
            "remarks": "Object Name",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "MAPOBJECT",
            "required": false,
            "persistent": true,
            "title": "Application Object",
            "remarks": "Application Object",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "HIERARCHYPATH",
            "required": false,
            "persistent": true,
            "title": "Object Location Path",
            "remarks": "Object Location Path",
            "sameAsAttribute": "HIERARCHYPATH",
            "sameAsObject": "MAXINTOBJDETAIL"
        },
        {
            "attributeName": "RELATION",
            "required": false,
            "persistent": true,
            "title": "Application Relation",
            "remarks": "Specify the relationship from the application parent object to a related object",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "INTOBJECTNAME",
            "required": true,
            "persistent": true,
            "title": "Object Structure",
            "remarks": "Object Structure",
            "sameAsAttribute": "INTOBJECTNAME",
            "sameAsObject": "MAXINTOBJECT"
        },
        {
            "attributeName": "USEPARENT",
            "required": true,
            "persistent": false,
            "title": "Use Parent",
            "remarks": "Select this check box if the mapping should use only the application parent object",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PROCESSORDER",
            "required": false,
            "persistent": true,
            "title": "Process Order",
            "remarks": "Process Order",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SOURCEELEMENT",
            "required": false,
            "persistent": true,
            "title": "Source Element",
            "remarks": "Source Element",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXINTMAPPINGID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "SELECTATTR",
            "target": "INTGENERATOR",
            "remarks": "Fill multiselect attributes",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "MAXINTMAPPINGDETAIL",
            "target": "MAXINTMAPPINGDETAIL",
            "remarks": "Relationship to get all mapping details for an interaction object",
            "whereClause": "interaction=:interaction and hierarchypath=:hierarchypath",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "MAXINTMAPPING",
            "source": "MAXINTERACTION",
            "remarks": "Relationship to get all mappings for interaction",
            "whereClause": "interaction=:interaction",
            "cardinality": null
        },
        {
            "name": "RESPOBJECTS",
            "source": "MAXINTERACTION",
            "remarks": "Relationship to show all Objects for response Object Structure",
            "whereClause": "intobjectname=:resposname",
            "cardinality": null
        },
        {
            "name": "REQOBJECTS",
            "source": "MAXINTERACTION",
            "remarks": "Relationship to show all Objects for request Object Structure",
            "whereClause": "intobjectname=:reqosname",
            "cardinality": null
        }
    ]
}