mos = {
    "objectName": "MAXINTERACTION",
    "className": "com.ibm.tivoli.maximo.interaction.app.manageint.MaxInteractionSet",
    "description": "WSDL Interactions",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXINTERACTIONID",
    "primaryKeyColumns": [
        "INTERACTION"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "MAXINTERACTION",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "MAXINTERACTION",
            "parentKeys": "APP",
            "targetKeys": "APPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application",
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
            "objectName": "MAXIFACEIN",
            "targetObject": "MAXINTERACTION",
            "parentKeys": "IFACENAME",
            "targetKeys": "CHANNELNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Enterprise Services Interface",
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
            "objectName": "MAXRELATIONSHIP",
            "targetObject": "MAXINTERACTION",
            "parentKeys": "PARENT, NAME",
            "targetKeys": "INTMAINOBJECT, REQRELATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relation to Request Object",
            "longDescription": null
        },
        {
            "objectName": "MAXRELATIONSHIP",
            "targetObject": "MAXINTERACTION",
            "parentKeys": "PARENT, NAME",
            "targetKeys": "INTMAINOBJECT, RESPRELATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relation to Response Object",
            "longDescription": null
        },
        {
            "objectName": "MAXRELATIONSHIP",
            "targetObject": "MAXINTERACTION",
            "parentKeys": "NAME",
            "targetKeys": "REQRELATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relation to Request Object",
            "longDescription": null
        },
        {
            "objectName": "MAXRELATIONSHIP",
            "targetObject": "MAXINTERACTION",
            "parentKeys": "NAME",
            "targetKeys": "RESPRELATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relation to Response Object",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXINTERACTION",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "SIGOPTION",
            "targetObject": "MAXINTERACTION",
            "parentKeys": "APP, OPTIONNAME",
            "targetKeys": "APPNAME, DIALOGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 4",
            "longDescription": null
        },
        {
            "objectName": "SIGOPTION",
            "targetObject": "MAXINTERACTION",
            "parentKeys": "APP, OPTIONNAME",
            "targetKeys": "APPNAME, MAPOPTION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Signature Option to Launch Interaction.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "INTERACTION",
            "required": true,
            "persistent": true,
            "title": "Interaction",
            "remarks": "Specifies a unique name for the interaction",
            "sameAsAttribute": "INTERACTION",
            "sameAsObject": "INTGENERATOR"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Provides a description for the interaction",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "APPNAME",
            "required": false,
            "persistent": true,
            "title": "Application",
            "remarks": "Specifies the application that the interaction is bound to",
            "sameAsAttribute": "APP",
            "sameAsObject": "MAXAPPS"
        },
        {
            "attributeName": "INTMAINOBJECT",
            "required": false,
            "persistent": true,
            "title": "Primary Mapping Object",
            "remarks": "Specifies the primary object of the application from where mapping can be configured",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "CHANNELNAME",
            "required": false,
            "persistent": true,
            "title": "Invocation Channel",
            "remarks": "Invocation Channel",
            "sameAsAttribute": "IFACENAME",
            "sameAsObject": "MAXIFACEIN"
        },
        {
            "attributeName": "MAPOPTION",
            "required": false,
            "persistent": true,
            "title": "Application Signature Option",
            "remarks": "Specifies the signature option to launch the interaction from within the application.This signature option also enables security groups to be granted access to the interaction. This field is read-only and uses the interaction name value",
            "sameAsAttribute": "OPTIONNAME",
            "sameAsObject": "SIGOPTION"
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
            "attributeName": "APPLYRESPONSE",
            "required": true,
            "persistent": true,
            "title": "Apply Response",
            "remarks": "Apply Response",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INTMODE",
            "required": false,
            "persistent": true,
            "title": "Interaction Mode",
            "remarks": "Specifies whether the parameters of the interaction request or response user interface are visible or hidden. Select Show Request and Response to use an interaction window that shows both request and the response fields. Select Silent to have the interaction operate without showing any fields to the user.",
            "sameAsAttribute": "INTMODE",
            "sameAsObject": "INTGENERATOR"
        },
        {
            "attributeName": "DIALOGID",
            "required": false,
            "persistent": true,
            "title": "Dialog ID",
            "remarks": "Specifies the identifier of the dialog created for this interaction. The dialog is part of the presentation associated with the application and can be viewed using Application Designer.",
            "sameAsAttribute": "OPTIONNAME",
            "sameAsObject": "SIGOPTION"
        },
        {
            "attributeName": "REQUESTXML",
            "required": false,
            "persistent": true,
            "title": "Request XML",
            "remarks": "Request XML",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RESPONSEXML",
            "required": false,
            "persistent": true,
            "title": "Response XML",
            "remarks": "Response XML",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ACTIVE",
            "required": true,
            "persistent": true,
            "title": "Active",
            "remarks": "Specifies if the interaction is currently active. You can deactivate an existing interaction to make changes.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COMMITRESPONSE",
            "required": true,
            "persistent": true,
            "title": "Commit Response",
            "remarks": "Specifies if the Web service response data that is applied to the application should be committed to the application tables as part of the interaction. If you uncheck this box, user must save the application record in order to commit the web service response data.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SHOWSINGLERESPONSE",
            "required": true,
            "persistent": true,
            "title": "Show Single Response",
            "remarks": "Select this check box if the response from the Web service should be displayed even if there is only a single record returned",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REQCLASSNAME",
            "required": false,
            "persistent": true,
            "title": "Mapping Custom Class",
            "remarks": "Mapping Custom Class",
            "sameAsAttribute": "CLASSNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "RESPCLASSNAME",
            "required": false,
            "persistent": true,
            "title": "Mapping Custom Class",
            "remarks": "Mapping Custom Class",
            "sameAsAttribute": "CLASSNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "STATUS",
            "required": false,
            "persistent": false,
            "title": "Status",
            "remarks": "Status",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "PROCESSMONITOR"
        },
        {
            "attributeName": "PORTNAME",
            "required": false,
            "persistent": true,
            "title": "Port",
            "remarks": "Specifies the port selected from the Web service for the interaction",
            "sameAsAttribute": "PORTNAME",
            "sameAsObject": "INTGENERATOR"
        },
        {
            "attributeName": "OPERATION",
            "required": false,
            "persistent": true,
            "title": "Operation",
            "remarks": "Specifies the operation selected from the Web service for the interaction",
            "sameAsAttribute": "OPERATION",
            "sameAsObject": "INTGENERATOR"
        },
        {
            "attributeName": "SERVICENAME",
            "required": false,
            "persistent": true,
            "title": "Web Service",
            "remarks": "Specifies the name of the Web Service this interaction is built on",
            "sameAsAttribute": "SERVICENAME",
            "sameAsObject": "INTGENERATOR"
        },
        {
            "attributeName": "URL",
            "required": false,
            "persistent": true,
            "title": "WSDL URL",
            "remarks": "Specifies the name and location of a Web service described using the Web Services Description Language (WSDL). You can use a URL that is accessed using HTTP, or the URL of a file system that the application can access. You must enter a valid and accessible URL in order to create the interaction.",
            "sameAsAttribute": "URL",
            "sameAsObject": "INTGENERATOR"
        },
        {
            "attributeName": "REQOSNAME",
            "required": false,
            "persistent": false,
            "title": "Request Object Structure Name",
            "remarks": "Request Object Structure Name",
            "sameAsAttribute": "INTOBJECTNAME",
            "sameAsObject": "MAXINTOBJECT"
        },
        {
            "attributeName": "RESPOSNAME",
            "required": false,
            "persistent": false,
            "title": "Response Object Structure Name",
            "remarks": "Response Object Structure Name",
            "sameAsAttribute": "INTOBJECTNAME",
            "sameAsObject": "MAXINTOBJECT"
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
            "attributeName": "OBP",
            "required": false,
            "persistent": true,
            "title": "Object Blue Print",
            "remarks": "Object Blue Print",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REQRELATION",
            "required": false,
            "persistent": true,
            "title": "Relation to Request Object",
            "remarks": "Specify the relationship from the application parent object to a related object",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "RESPRELATION",
            "required": false,
            "persistent": true,
            "title": "Relation to Response Object",
            "remarks": "Specify the relationship from the application request object to response object",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "MAXINTERACTIONID",
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
            "remarks": "Language Code",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        },
        {
            "attributeName": "INPUTELEMENT",
            "required": false,
            "persistent": true,
            "title": "Input Element",
            "remarks": "Input Element",
            "sameAsAttribute": "INPUTELEMENT",
            "sameAsObject": "INTGENERATOR"
        },
        {
            "attributeName": "GENMENUOPTION",
            "required": true,
            "persistent": true,
            "title": "Generate Menu Option",
            "remarks": "Generate Menu Option",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "MAXAPPS",
            "target": "MAXAPPS",
            "remarks": "Relationship to get Application Info",
            "whereClause": "app=:appname",
            "cardinality": null
        },
        {
            "name": "MAXIFACEINVOKE",
            "target": "MAXIFACEINVOKE",
            "remarks": "Get Invocation Channel iformation.It will return 1 row",
            "whereClause": "ifacename=:channelname",
            "cardinality": null
        },
        {
            "name": "MAXINTMAPPING",
            "target": "MAXINTMAPPING",
            "remarks": "Relationship to get all mappings for interaction",
            "whereClause": "interaction=:interaction",
            "cardinality": null
        },
        {
            "name": "RESPOBJECTS",
            "target": "MAXINTMAPPING",
            "remarks": "Relationship to show all Objects for response Object Structure",
            "whereClause": "intobjectname=:resposname",
            "cardinality": null
        },
        {
            "name": "REQOBJECTS",
            "target": "MAXINTMAPPING",
            "remarks": "Relationship to show all Objects for request Object Structure",
            "whereClause": "intobjectname=:reqosname",
            "cardinality": null
        },
        {
            "name": "REQUESTOBJECTS",
            "target": "MAXINTOBJECT",
            "remarks": "Relationship to get Object Structure information for Request Object",
            "whereClause": "intobjectname=:reqosname",
            "cardinality": null
        },
        {
            "name": "RESPONSEOBJECTS",
            "target": "MAXINTOBJECT",
            "remarks": "Relationship to get Object Structure information for Response Object",
            "whereClause": "intobjectname=:resposname",
            "cardinality": null
        },
        {
            "name": "MAXINTPOLICY",
            "target": "MAXINTPOLICY",
            "remarks": "Relationship to show all policeis for an interaction. Will return 1 or more rows",
            "whereClause": "interaction=:interaction",
            "cardinality": null
        },
        {
            "name": "SIGOPTION",
            "target": "SIGOPTION",
            "remarks": "Relationship to get sigoption information",
            "whereClause": "app=:appname and optionname=:mapoption",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "MAXINTERACTION",
            "source": "INTGENERATOR",
            "remarks": "Relationship to persist Interaction",
            "whereClause": "interaction=:interaction",
            "cardinality": null
        }
    ]
}