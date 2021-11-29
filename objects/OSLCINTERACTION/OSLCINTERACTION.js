mos = {
    "objectName": "OSLCINTERACTION",
    "className": "com.ibm.tivoli.maximo.oslc.consumer.app.interaction.OslcInteractionSet",
    "description": "OSLC Interaction",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "OSLCINTERACTIONID",
    "primaryKeyColumns": [
        "INTERACTIONNAME",
        "PROVIDERNAME"
    ],
    "logicalRelationships": [
        {
            "objectName": "OSLCINTERACTION",
            "targetObject": "OSLCINTGRPMEMBERS",
            "parentKeys": "INTERACTIONNAME, PROVIDERNAME",
            "targetKeys": "INTERACTIONNAME, PROVIDERNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "OSLC Interaction",
            "longDescription": null
        },
        {
            "objectName": "OSLCINTERACTION",
            "targetObject": "OSLCINTQUERY",
            "parentKeys": "INTERACTIONNAME, PROVIDERNAME",
            "targetKeys": "INTERACTIONNAME, PROVIDERNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Integration Query",
            "longDescription": null
        },
        {
            "objectName": "OSLCINTERACTION",
            "targetObject": "OSLCINTQUERYPARAMS",
            "parentKeys": "INTERACTIONNAME, PROVIDERNAME",
            "targetKeys": "INTERACTIONNAME, PROVIDERNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "OSLC Interaction",
            "longDescription": null
        },
        {
            "objectName": "OSLCINTERACTION",
            "targetObject": "OSLCPREFILLMAP",
            "parentKeys": "INTERACTIONNAME, PROVIDERNAME",
            "targetKeys": "INTERACTIONNAME, PROVIDERNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Pre-fill Map",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "OSLCINTERACTION",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "OSLCINTERACTION",
            "parentKeys": "APP",
            "targetKeys": "APPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Starting Application",
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
            "objectName": "MAXRELATIONSHIP",
            "targetObject": "OSLCINTERACTION",
            "parentKeys": "PARENT, NAME",
            "targetKeys": "APPOBJECT, LINKRELATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 1",
            "longDescription": null
        },
        {
            "objectName": "OSLCPROVIDER",
            "targetObject": "OSLCINTERACTION",
            "parentKeys": "PROVIDERNAME",
            "targetKeys": "PROVIDERNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Interactions",
            "longDescription": null
        },
        {
            "objectName": "OSLCRESOURCETYPES",
            "targetObject": "OSLCINTERACTION",
            "parentKeys": "RESOURCETYPE",
            "targetKeys": "RESOURCETYPE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Resource Type",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "OSLCINTERACTION",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "SIGOPTION",
            "targetObject": "OSLCINTERACTION",
            "parentKeys": "APP, OPTIONNAME",
            "targetKeys": "APPNAME, MAPOPTION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Signature Security Option",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "INTERACTIONNAME",
            "required": true,
            "persistent": true,
            "title": "Interaction",
            "remarks": "Identifies the OSLC interaction, that is, the interaction between the consumer application and the OSLC provider application.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INTERACTIONTYPE",
            "required": true,
            "persistent": true,
            "title": "Interaction Type",
            "remarks": "The type of OSLC interaction. The CREATIONDIALOG interaction creates data in the provider application. The SELECTIONDIALOG interaction links data in the provider application to data in the consumer application by using a selection dialog from the provider application. The QUERYCAPABILITY interaction retrieves resource data from a provider.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "The description of the OSLC interaction.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PROVIDERNAME",
            "required": true,
            "persistent": true,
            "title": "Provider",
            "remarks": "Identifies the OSLC provider application.",
            "sameAsAttribute": "PROVIDERNAME",
            "sameAsObject": "OSLCPROVIDER"
        },
        {
            "attributeName": "RESOURCETYPE",
            "required": false,
            "persistent": true,
            "title": "Resource Type",
            "remarks": "The resource type or record type of the data in the OSLC provider application. A resource type identifies the type of data, such as a defect or a ticket, that is shared between the consumer application and the provider application. If the shape document for a resource type is specified, it describes the data of the resource type.",
            "sameAsAttribute": "RESOURCETYPE",
            "sameAsObject": "OSLCRESOURCETYPES"
        },
        {
            "attributeName": "RESOURCETYPEURI",
            "required": true,
            "persistent": true,
            "title": "Resource Type URI",
            "remarks": "The fully qualified name of a class of data that is available in an OSLC provider application.",
            "sameAsAttribute": "RESOURCETYPEURI",
            "sameAsObject": "OSLCRESOURCETYPES"
        },
        {
            "attributeName": "USAGE",
            "required": false,
            "persistent": true,
            "title": "Usage URI",
            "remarks": "The fully qualified name of a subclass of data within the resource type. The URI is retrieved from the OSLC provider application.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SERVICEPROVIDER",
            "required": false,
            "persistent": true,
            "title": "Service Provider URI",
            "remarks": "The service provider URI that supports the selected resource type and usage URI. If an interaction is configured to support all service providers, no URI can be specified here.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RESOURCEURI",
            "required": false,
            "persistent": true,
            "title": "Resource URI",
            "remarks": "Resource URI",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PREFILLCLASS",
            "required": false,
            "persistent": true,
            "title": "Interaction Mapping Class",
            "remarks": "The java class to be used as part of the mapping logic when the specified field mapping definitions are not sufficient for mapping.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ALLPROVIDERS",
            "required": true,
            "persistent": false,
            "title": "Use All Service Providers",
            "remarks": "Specifies whether the interaction supports all the OSLC application service providers that support the specified combination of resource type and usage type.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "APPNAME",
            "required": true,
            "persistent": true,
            "title": "Application",
            "remarks": "The application that the end user will start the interaction from. ",
            "sameAsAttribute": "APP",
            "sameAsObject": "MAXAPPS"
        },
        {
            "attributeName": "TABNAME",
            "required": false,
            "persistent": true,
            "title": "Application Tab",
            "remarks": "The tab that the user interface changes are implemented on. The end user starts the interaction from this tab.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "APPOBJECT",
            "required": true,
            "persistent": true,
            "title": "Mapping Object",
            "remarks": "The main object of the specified application that the mapping can be configured from.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "LINKTYPE",
            "required": true,
            "persistent": true,
            "title": "Link Type",
            "remarks": "The base URI that groups links for different interactions on the same resource and usage combination. The combination might be for one or more OSLC providers.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LINKRELATION",
            "required": true,
            "persistent": true,
            "title": "Link Relationship",
            "remarks": "The object relationship that  associates the application main object with its related OSLC links.",
            "sameAsAttribute": "NAME",
            "sameAsObject": "MAXRELATIONSHIP"
        },
        {
            "attributeName": "UPDATEPROPNAME",
            "required": false,
            "persistent": true,
            "title": "Association Property",
            "remarks": "If the OSLC provider can store a link to the application object in a property, you can select the property that contains the link. If a shape document is not specified for the resource type, you can type a value instead of selecting one.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "UPDATEPROPNS",
            "required": false,
            "persistent": true,
            "title": "Association Property Namespace",
            "remarks": "If a shape document is specified for the resource type, the namespace is displayed after the association property is selected. If a shape document is not specified for the resource type, you can type a value.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INTOBJECTNAME",
            "required": false,
            "persistent": true,
            "title": "Object Structure",
            "remarks": "Object Structure",
            "sameAsAttribute": "INTOBJECTNAME",
            "sameAsObject": "MAXINTOBJECT"
        },
        {
            "attributeName": "MAPOPTION",
            "required": false,
            "persistent": true,
            "title": "Push Button Signature Option",
            "remarks": "The signature option that is associated with the push button that launches the interaction from the consumer application. The signature option enables security groups to be granted access to the interaction. The field value matches the interaction name. The value is generated during interaction creation.",
            "sameAsAttribute": "OPTIONNAME",
            "sameAsObject": "SIGOPTION"
        },
        {
            "attributeName": "GENAPP",
            "required": true,
            "persistent": false,
            "title": "Create Interaction Tab, Table, and Push Button in Application",
            "remarks": "Specifies whether the wizard should generate user interface (UI) changes in the consumer application. If this option is not selected, you must use the Application Designer application to make UI changes so that the interaction is available to end users.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BUTTONLABEL",
            "required": false,
            "persistent": false,
            "title": "Push Button Label",
            "remarks": "The label for the button to be added to the consumer application. The end user clicks the button to start the interaction. You can edit the default label value.",
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
            "attributeName": "OSLCINTERACTIONID",
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
            "attributeName": "INTGROUPNAME",
            "required": false,
            "persistent": false,
            "title": "Interaction Group",
            "remarks": "The name of the interaction group.",
            "sameAsAttribute": "INTGROUPNAME",
            "sameAsObject": "OSLCINTGROUP"
        },
        {
            "attributeName": "INTGRPDESC",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "The description of the Interaction Group.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONDITIONNUM",
            "required": false,
            "persistent": false,
            "title": "Condition",
            "remarks": "The condition from the Conditional Expression Manager application that must be met for the interaction to be run for an interaction group.",
            "sameAsAttribute": "CONDITIONNUM",
            "sameAsObject": "CONDITION"
        },
        {
            "attributeName": "GENBUTTON",
            "required": true,
            "persistent": false,
            "title": "Create Push Button in the Application",
            "remarks": "Specifies whether the wizard generates user interface (UI) changes in the consumer application. If this option is not selected, you must use the Application Designer application to make UI changes so that the interaction is available to end users.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LINKPROPNAME",
            "required": false,
            "persistent": true,
            "title": "Link Property",
            "remarks": "The Resource Description Framework (RDF) path that is used to retrieve the resource URI from the query result document.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LINKPROPLABEL",
            "required": false,
            "persistent": true,
            "title": "Link Label",
            "remarks": "The RDF path that is used to retrieve the description that is associated with the resource URI from the query result document.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SELECTCLAUSE",
            "required": true,
            "persistent": true,
            "title": "Select Clause",
            "remarks": "A comma-separated list of attributes that you want to return from the resource query. To return all the attributes, specify the asterisk (*).",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BUTTONID",
            "required": false,
            "persistent": true,
            "title": "Interaction Button",
            "remarks": "The control ID for the button in the application user interface (UI) that initiates the interaction.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INTGRPDESC_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description Long description",
            "remarks": "Long Description for Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ALNDOMAIN",
            "target": "ALNDOMAIN",
            "remarks": "Relation to get ALN Domain Description Name. It will return one row.",
            "whereClause": "domainid='OSLCINTTYPE' and value=:interactiontype",
            "cardinality": null
        },
        {
            "name": "APPLICATIONAUTH",
            "target": "APPLICATIONAUTH",
            "remarks": "Relation to get all Authorization groups for the Application. This relation will return 0 or more rows.",
            "whereClause": "app=:appname and optionname = 'READ'",
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
            "name": "USAGE",
            "target": "OSLCGENERATOR",
            "remarks": "Display all Usage URIs",
            "whereClause": "",
            "cardinality": null
        },
        {
            "name": "OSLCINTQUERY",
            "target": "OSLCINTQUERY",
            "remarks": "Relation to Interaction Query",
            "whereClause": "interactionname=:interactionname and providername=:providername",
            "cardinality": null
        },
        {
            "name": "OSLCPREFILLMAP",
            "target": "OSLCPREFILLMAP",
            "remarks": "Relation to get all OSLC mapping for an interaction",
            "whereClause": "interactionname=:interactionname and providername=:providername",
            "cardinality": null
        },
        {
            "name": "OSLCRESOURCETYPES",
            "target": "OSLCRESOURCETYPES",
            "remarks": "Relation to get all Resource Types for an interaction",
            "whereClause": "resourcetype=:resourcetype",
            "cardinality": null
        },
        {
            "name": "SIGOPTION",
            "target": "SIGOPTION",
            "remarks": "Relation to get Sigoption desricption. This relation will return 1 row.",
            "whereClause": "app=:appname and optionname = :mapoption",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "OSLCINTERACTION",
            "source": "OSLCINTGRPMEMBERS",
            "remarks": "Relation to get OSLC Interaction. It will return one row.",
            "whereClause": "providername=:providername and interactionname=:interactionname",
            "cardinality": null
        },
        {
            "name": "OSLCINTERACTION",
            "source": "OSLCPROVIDER",
            "remarks": "Relation to get all interactions for OSLC provider",
            "whereClause": "providername=:providername",
            "cardinality": null
        },
        {
            "name": "OSLCINTERACTION",
            "source": "OSLCRESOURCETYPES",
            "remarks": "Relation to get all interactions for resource Type",
            "whereClause": "resourcetype=:resourcetype",
            "cardinality": null
        }
    ]
}