mos = {
    "objectName": "INTGENERATOR",
    "className": "com.ibm.tivoli.maximo.interaction.app.createint.IntGeneratorSet",
    "description": "Generate Composite App",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": false,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "APPNAME",
            "required": false,
            "persistent": false,
            "title": "Application",
            "remarks": "Specify the application that the interaction will be bound to",
            "sameAsAttribute": "APP",
            "sameAsObject": "MAXAPPS"
        },
        {
            "attributeName": "URL",
            "required": true,
            "persistent": false,
            "title": "WSDL URL",
            "remarks": "Specify the name and location of a Web service described using the Web Services Description Language (WSDL). You can use a URL that is accessed using HTTP, or the URL of a file system that the application can access. You must enter a valid and accessible URL in order to create the interaction.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PORTNAME",
            "required": false,
            "persistent": false,
            "title": "Port",
            "remarks": "Specifies the port selected for the interaction.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OPERATION",
            "required": false,
            "persistent": false,
            "title": "Operation",
            "remarks": "Specifies the operation selected for the interaction.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SERVICENAME",
            "required": false,
            "persistent": false,
            "title": "Web Service",
            "remarks": "Web Service",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXTYPE",
            "required": false,
            "persistent": false,
            "title": "Type",
            "remarks": "Specifies the data type of the attribute",
            "sameAsAttribute": "MAXTYPE",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "ATTRIBUTENAME",
            "required": false,
            "persistent": false,
            "title": "Attribute Name",
            "remarks": "Specifies the name of the attribute.",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "APPLYRESPONSE",
            "required": true,
            "persistent": false,
            "title": "Apply Response",
            "remarks": "Select this check box if the response data from the Web service should be applied to the application the interaction was launched from",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PARENTOBJNAME",
            "required": false,
            "persistent": false,
            "title": "Parent Object",
            "remarks": "Parent Object",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "SELECTED",
            "required": true,
            "persistent": false,
            "title": "Select",
            "remarks": "Represents a selection from one or more available choices.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REQUESTXML",
            "required": false,
            "persistent": false,
            "title": "Request XML",
            "remarks": "Request XML",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RESPONSEXML",
            "required": false,
            "persistent": false,
            "title": "Response XML",
            "remarks": "Response XML",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SOURCEELEMENT",
            "required": false,
            "persistent": false,
            "title": "Source Element",
            "remarks": "Specifies the source element of the request from which this object is derived.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PROCESSORDER",
            "required": false,
            "persistent": false,
            "title": "Process Order",
            "remarks": "Process Order",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COMMITRESPONSE",
            "required": true,
            "persistent": false,
            "title": "Commit Response",
            "remarks": "Select this check box if the Web service response data that is applied to the application should be committed to the application tables as part of the interaction. If you uncheck this box, user must save the application record in order to commit the Web service response data.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SHOWSINGLERESPONSE",
            "required": true,
            "persistent": false,
            "title": "Show Single Response",
            "remarks": "Show Single Response",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DOMAINID",
            "required": false,
            "persistent": false,
            "title": "Domain",
            "remarks": "Domain",
            "sameAsAttribute": "DOMAINID",
            "sameAsObject": "MAXDOMAIN"
        },
        {
            "attributeName": "REQCLASSNAME",
            "required": false,
            "persistent": false,
            "title": "Mapping Custom Class",
            "remarks": "Specify the fully qualified Java class that implements mapping between application objects and the request objects. A Java class can be implemented if the mapping features of this application are insufficient and more complex mapping is required.",
            "sameAsAttribute": "CLASSNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "RESPCLASSNAME",
            "required": false,
            "persistent": false,
            "title": "Mapping Custom Class",
            "remarks": "Specify the fully qualified Java class that implements mapping between the response objects and application objects. A Java class can be implemented if the mapping features of this application are insufficient and more complex mapping is required.",
            "sameAsAttribute": "CLASSNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "SCHEMAONLY",
            "required": true,
            "persistent": false,
            "title": "Schema Only",
            "remarks": "Schema Only",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DEFAULTVALUE",
            "required": false,
            "persistent": false,
            "title": "Default Value",
            "remarks": "Specify the default value of the attribute",
            "sameAsAttribute": "DEFAULTVALUE",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "USEPARENT",
            "required": true,
            "persistent": false,
            "title": "Use Application Parent Object",
            "remarks": "Indicates whether the immediate parent object of an object will be used to map to a request object. If most of the information that will be sent to the Web service is in the main application object, select this check box.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RECORDTYPE",
            "required": false,
            "persistent": false,
            "title": "Record Type",
            "remarks": "Record Type",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OBJECTNAME",
            "required": false,
            "persistent": false,
            "title": "Object Name",
            "remarks": "Object Name",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "VALUE",
            "required": false,
            "persistent": false,
            "title": "Value",
            "remarks": "Value",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HIERARCHYPATH",
            "required": false,
            "persistent": false,
            "title": "Object Location Path",
            "remarks": "Specifies the path from root to the object within the request object structure.",
            "sameAsAttribute": "HIERARCHYPATH",
            "sameAsObject": "MAXINTOBJDETAIL"
        },
        {
            "attributeName": "READONLY",
            "required": true,
            "persistent": false,
            "title": "Read Only",
            "remarks": "Specify whether the object's attribute will be editable or read-only in the interaction user interface",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INTMODE",
            "required": false,
            "persistent": false,
            "title": "Interaction Mode",
            "remarks": "Specify whether the parameters of the interaction request or response user interface are visible or hidden. Select Show Request and Response to use an interaction window that shows both request and the response fields. Select Silent to have the interaction operate without showing any fields to the user.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PORTTYPENAME",
            "required": false,
            "persistent": false,
            "title": "Port Type",
            "remarks": "Port Type",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAPOPTION",
            "required": false,
            "persistent": false,
            "title": "Application Signature Option",
            "remarks": "Specifies the signature option to launch the interaction from within the application.This signature option also enables security groups to be granted access to the interaction. This field is read-only and uses the interaction name value",
            "sameAsAttribute": "OPTIONNAME",
            "sameAsObject": "SIGOPTION"
        },
        {
            "attributeName": "OPTDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Application Menu Title",
            "remarks": "Specify the title of the Select Action menu item that will be added to the application",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WSIOOBJNAME",
            "required": false,
            "persistent": false,
            "title": "Object",
            "remarks": "Specifies the object that will be part of the request object structure.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "PARENTHIERARCHY",
            "required": false,
            "persistent": false,
            "title": "Parent Object Hierarchy",
            "remarks": "Parent Object Hierarchy",
            "sameAsAttribute": "HIERARCHYPATH",
            "sameAsObject": "MAXINTOBJDETAIL"
        },
        {
            "attributeName": "RELOBJECTNAME",
            "required": false,
            "persistent": false,
            "title": "Related Object",
            "remarks": "Related Object",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "TITLE",
            "required": false,
            "persistent": false,
            "title": "Field Title",
            "remarks": "Specifies the description of the object or attribute.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REQOSNAME",
            "required": false,
            "persistent": false,
            "title": "Request Object Structure",
            "remarks": "Specifies the object structure that will enable a Web service request.",
            "sameAsAttribute": "INTOBJECTNAME",
            "sameAsObject": "MAXINTOBJECT"
        },
        {
            "attributeName": "REQRELATION",
            "required": false,
            "persistent": false,
            "title": "Request Relation",
            "remarks": "Request Relation",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "RESPOSNAME",
            "required": false,
            "persistent": false,
            "title": "Response Object Structure",
            "remarks": "Specifies the object structure that will enable a Web service response.",
            "sameAsAttribute": "INTOBJECTNAME",
            "sameAsObject": "MAXINTOBJECT"
        },
        {
            "attributeName": "RESPRELATION",
            "required": false,
            "persistent": false,
            "title": "Response Relation",
            "remarks": "Response Relation",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "INTERACTION",
            "required": true,
            "persistent": false,
            "title": "Interaction",
            "remarks": "Specify a unique name for the interaction.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INVCHANNELNAME",
            "required": false,
            "persistent": false,
            "title": "Invocation Channel",
            "remarks": "Specifies the Invocation Channel that will be used to invoke the Web service",
            "sameAsAttribute": "IFACENAME",
            "sameAsObject": "MAXIFACEIN"
        },
        {
            "attributeName": "ISREQMULTIPLE",
            "required": true,
            "persistent": false,
            "title": "ISREQMULTIPLE",
            "remarks": "ISREQMULTIPLE",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISRESPMULTIPLE",
            "required": true,
            "persistent": false,
            "title": "ISRESPMULTIPLE",
            "remarks": "ISRESPMULTIPLE",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "APPOBJECT",
            "required": false,
            "persistent": false,
            "title": "Primary Mapping Object",
            "remarks": "Specify the primary object of the application from where mapping can be configured",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "DOMAINTYPE",
            "required": false,
            "persistent": false,
            "title": "Domain Type",
            "remarks": "Domain Type",
            "sameAsAttribute": "DOMAINTYPE",
            "sameAsObject": "MAXDOMAIN"
        },
        {
            "attributeName": "APPRELATION",
            "required": false,
            "persistent": false,
            "title": "Interaction Main Object",
            "remarks": "Interaction Main Object",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "BINDINGNAME",
            "required": false,
            "persistent": false,
            "title": "Binding",
            "remarks": "Binding Name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BINDINGTYPE",
            "required": false,
            "persistent": false,
            "title": "Binding Type",
            "remarks": "Binding Type",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "Provide a description for the interaction.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDPOINTNAME",
            "required": false,
            "persistent": false,
            "title": "End Point",
            "remarks": "Specifies the Endpoint that will be used to invoke the Web service",
            "sameAsAttribute": "ENDPOINTNAME",
            "sameAsObject": "MAXENDPOINT"
        },
        {
            "attributeName": "ENDPOINTURL",
            "required": false,
            "persistent": false,
            "title": "End Point URL",
            "remarks": "End Point URL",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INPUTELEMENT",
            "required": false,
            "persistent": false,
            "title": "Input Element",
            "remarks": "Input Element",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OUTPUTELEMENT",
            "required": false,
            "persistent": false,
            "title": "Output Element",
            "remarks": "Output Element",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REQUIRED",
            "required": true,
            "persistent": false,
            "title": "Required",
            "remarks": "Required field on the Request Object",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PROCESSRESPONSE",
            "required": true,
            "persistent": false,
            "title": "Process Response",
            "remarks": "Select this check box if the response from the Web service should be processed as part of the interaction.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SPECIALPROCESS",
            "required": false,
            "persistent": false,
            "title": "Process As",
            "remarks": "Process As",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GENMENUOPTION",
            "required": true,
            "persistent": false,
            "title": "Generate Menu Action",
            "remarks": "Generate Menu Action",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PASSWORD",
            "required": false,
            "persistent": false,
            "title": "Encrypted Value",
            "remarks": "For a filed marked as a password, this field allows maintenance of the password in an encrypted manner.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GENERATEDIALOG",
            "required": true,
            "persistent": false,
            "title": "Generate dialog",
            "remarks": "Generate Dialog",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENCRYPTVALUE",
            "required": true,
            "persistent": false,
            "title": "Encrypt Value",
            "remarks": "Encrypt Value",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "APPLICATIONAUTH",
            "target": "APPLICATIONAUTH",
            "remarks": "Relation to get all Authorization groups for the Application. This relation will return 0 or more rows.",
            "whereClause": "app=:appname and optionname = 'READ'",
            "cardinality": null
        },
        {
            "name": "RELATIONSHIPTREE",
            "target": "EXPBUILDTREE",
            "remarks": "Relationship to get relationship tree for object type",
            "whereClause": "objectname=:objectname",
            "cardinality": null
        },
        {
            "name": "REQATTRIBUTES",
            "target": "INTGENERATOR",
            "remarks": "Relation to build request attributes set",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "RESPATTRIBUTES",
            "target": "INTGENERATOR",
            "remarks": "Relation to build response attribute set.",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "REQUESTMAPPING",
            "target": "INTGENERATOR",
            "remarks": "Relationship to define all request mapping",
            "whereClause": "REQUESTMAPPING",
            "cardinality": null
        },
        {
            "name": "REQUESTMBOS",
            "target": "INTGENERATOR",
            "remarks": "Relation to build request object set",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "RESPONSEMAPPING",
            "target": "INTGENERATOR",
            "remarks": "Relationship to get all response mapping",
            "whereClause": "RESPONSEMAPPING",
            "cardinality": null
        },
        {
            "name": "RESPONSEMBOS",
            "target": "INTGENERATOR",
            "remarks": "relationship to build response object set.",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "SCHEMAOPER",
            "target": "INTGENERATOR",
            "remarks": "relation to build schema operation set",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "SCHEMAPORTS",
            "target": "INTGENERATOR",
            "remarks": "Relation to build schema port set",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "SCHEMASERVICES",
            "target": "INTGENERATOR",
            "remarks": "Relationship to show all Schema Services for the WSDL",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "SELECTATTR",
            "target": "INTGENERATOR",
            "remarks": "Fill multiselect attributes",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "MAXAPPS",
            "target": "MAXAPPS",
            "remarks": "Relation to get Application Description Name. It will return one row.",
            "whereClause": "app=:appname",
            "cardinality": null
        },
        {
            "name": "MAXINTERACTION",
            "target": "MAXINTERACTION",
            "remarks": "Relationship to persist Interaction",
            "whereClause": "interaction=:interaction",
            "cardinality": null
        },
        {
            "name": "RESPOS",
            "target": "MAXINTOBJDETAIL",
            "remarks": "Relation to get response Object Structure data. It will return 1 row.",
            "whereClause": "intobjectname=:resposname",
            "cardinality": null
        },
        {
            "name": "REQOS",
            "target": "MAXINTOBJDETAIL",
            "remarks": "Relation to get request Object Structure data. It will return 1 row.",
            "whereClause": "intobjectname=:reqosname",
            "cardinality": null
        },
        {
            "name": "MAXINTPOLICY",
            "target": "MAXINTPOLICY",
            "remarks": "Relationship to show policy for an interaction",
            "whereClause": "interaction=:interaction",
            "cardinality": null
        },
        {
            "name": "REQUESTOBJECT",
            "target": "MAXOBJECT",
            "remarks": "Relation to get request object information. It will return 1 row.",
            "whereClause": "objectname=:wsioobjname",
            "cardinality": null
        },
        {
            "name": "RESPONSEOBJECT",
            "target": "MAXOBJECT",
            "remarks": "Relation to get request object information. It will return 1 row.",
            "whereClause": "objectname=:wsioobjname",
            "cardinality": null
        },
        {
            "name": "RESPONSEWSIO",
            "target": "WSIOTREE",
            "remarks": "Relationship to build response WSIO Tree",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "RESPONSEWSIOOPT",
            "target": "WSIOTREE",
            "remarks": "Relationship to build optimized responseWSIO Tree",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "REQUESTWSIO",
            "target": "WSIOTREE",
            "remarks": "Relation to build Request WSIO Tree",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "REQUESTWSIOOPT",
            "target": "WSIOTREE",
            "remarks": "Relationship to build optimized request WSIO Tree",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "RESPMAPATTR",
            "target": "WSIOTREE",
            "remarks": "Show all attributes for response",
            "whereClause": null,
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "REQATTRIBUTES",
            "source": "INTGENERATOR",
            "remarks": "Relation to build request attributes set",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "RESPATTRIBUTES",
            "source": "INTGENERATOR",
            "remarks": "Relation to build response attribute set.",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "REQUESTMAPPING",
            "source": "INTGENERATOR",
            "remarks": "Relationship to define all request mapping",
            "whereClause": "REQUESTMAPPING",
            "cardinality": null
        },
        {
            "name": "REQUESTMBOS",
            "source": "INTGENERATOR",
            "remarks": "Relation to build request object set",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "RESPONSEMAPPING",
            "source": "INTGENERATOR",
            "remarks": "Relationship to get all response mapping",
            "whereClause": "RESPONSEMAPPING",
            "cardinality": null
        },
        {
            "name": "RESPONSEMBOS",
            "source": "INTGENERATOR",
            "remarks": "relationship to build response object set.",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "SCHEMAOPER",
            "source": "INTGENERATOR",
            "remarks": "relation to build schema operation set",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "SCHEMAPORTS",
            "source": "INTGENERATOR",
            "remarks": "Relation to build schema port set",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "SCHEMASERVICES",
            "source": "INTGENERATOR",
            "remarks": "Relationship to show all Schema Services for the WSDL",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "SELECTATTR",
            "source": "INTGENERATOR",
            "remarks": "Fill multiselect attributes",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "SELECTATTR",
            "source": "MAXINTMAPPING",
            "remarks": "Fill multiselect attributes",
            "whereClause": null,
            "cardinality": null
        }
    ]
}