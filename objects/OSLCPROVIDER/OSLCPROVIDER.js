mos = {
    "objectName": "OSLCPROVIDER",
    "className": "com.ibm.tivoli.maximo.oslc.consumer.app.provider.OslcProviderSet",
    "description": "OSLC Provider Registration",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "OSLCPROVIDERID",
    "primaryKeyColumns": [
        "PROVIDERNAME"
    ],
    "logicalRelationships": [
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
            "objectName": "OSLCPROVIDER",
            "targetObject": "OSLCINTGRPMEMBERS",
            "parentKeys": "PROVIDERNAME",
            "targetKeys": "PROVIDERNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Interaction Group Members",
            "longDescription": null
        },
        {
            "objectName": "OSLCPROVIDER",
            "targetObject": "OSLCINTQUERY",
            "parentKeys": "PROVIDERNAME",
            "targetKeys": "PROVIDERNAME",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 3",
            "longDescription": null
        },
        {
            "objectName": "OSLCPROVIDER",
            "targetObject": "OSLCINTQUERYPARAMS",
            "parentKeys": "PROVIDERNAME",
            "targetKeys": "PROVIDERNAME",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 4",
            "longDescription": null
        },
        {
            "objectName": "OSLCPROVIDER",
            "targetObject": "OSLCPREFILLMAP",
            "parentKeys": "PROVIDERNAME",
            "targetKeys": "PROVIDERNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 2",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "OSLCPROVIDER",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "MAXENDPOINT",
            "targetObject": "OSLCPROVIDER",
            "parentKeys": "ENDPOINTNAME",
            "targetKeys": "ENDPOINTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Integration End Point",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "OSLCPROVIDER",
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
            "attributeName": "PROVIDERNAME",
            "required": true,
            "persistent": true,
            "title": "Provider",
            "remarks": "Identifies the OSLC provider application.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CATALOGURI",
            "required": false,
            "persistent": true,
            "title": "Service Provider List URI",
            "remarks": "The URI that points to an individual service provider, a service provider catalog, or a service provider listing.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BASEURL",
            "required": true,
            "persistent": true,
            "title": "Public URI",
            "remarks": "The root URI that is used to access the OSLC provider application. The public URI typically contains the hostname, port, and application name.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "The description of the OSLC provider.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDPOINTNAME",
            "required": true,
            "persistent": true,
            "title": "End Point",
            "remarks": "The integration end point that enables an application to interact with the OSLC provider.",
            "sameAsAttribute": "ENDPOINTNAME",
            "sameAsObject": "MAXENDPOINT"
        },
        {
            "attributeName": "OSLCVERSION",
            "required": false,
            "persistent": true,
            "title": "OSLC Version",
            "remarks": "The OSLC version for OSLC provider.",
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
            "attributeName": "OSLCPROVIDERID",
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
            "attributeName": "USEREGISTRY",
            "required": true,
            "persistent": true,
            "title": "Use Provider Registry",
            "remarks": "Specifies whether to discover supported service providers through the Provider Registry. If the check box is selected, a validation ensures that an end point name is set in the mxe.oslc.prqueryrep system property, and that a corresponding end point is specified in the End Points application. The end point enables discovery of supported service providers through the Provider Registry. If the check box is cleared, service provider discovery is done by using the URI that is specified in the Service Provider List URI field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NATIVEPREVIEW",
            "required": true,
            "persistent": true,
            "title": "Generate Preview Dialog",
            "remarks": "Indicates whether a read-only dialog for the provider resource data is rendered when the provider application does not support a preview dialog box.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "CHANGEPUBLICURI",
            "target": "CHANGEPUBLICURI",
            "remarks": "Relation to non persistent object for changing public URI.",
            "whereClause": "",
            "cardinality": null
        },
        {
            "name": "MAXENDPOINT",
            "target": "MAXENDPOINT",
            "remarks": "Relation to get End Point Description for an OSLC Provider",
            "whereClause": "endpointname=:endpointname",
            "cardinality": null
        },
        {
            "name": "OSLCINTERACTION",
            "target": "OSLCINTERACTION",
            "remarks": "Relation to get all interactions for OSLC provider",
            "whereClause": "providername=:providername",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "OSLCPROVIDER",
            "source": "MAXENDPOINT",
            "remarks": "Relation to check if End Point used in a OSLC Provider.",
            "whereClause": "endpointname=:endpointname",
            "cardinality": null
        }
    ]
}