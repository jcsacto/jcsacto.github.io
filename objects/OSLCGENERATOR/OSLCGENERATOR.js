mos = {
    "objectName": "OSLCGENERATOR",
    "className": "com.ibm.tivoli.maximo.oslc.consumer.app.interaction.OslcGeneratorSet",
    "description": "OSLC Generator",
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
            "attributeName": "SERVICEPROVIDER",
            "required": false,
            "persistent": false,
            "title": "Service Provider",
            "remarks": "Service Provider",
            "sameAsAttribute": "SERVICEPROVIDER",
            "sameAsObject": "OSLCINTERACTION"
        },
        {
            "attributeName": "TITLE",
            "required": false,
            "persistent": false,
            "title": "Title",
            "remarks": "Title",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USAGE",
            "required": false,
            "persistent": false,
            "title": "Usage URI",
            "remarks": "Usage URI",
            "sameAsAttribute": "USAGE",
            "sameAsObject": "OSLCINTERACTION"
        },
        {
            "attributeName": "PROPERTYNAME",
            "required": false,
            "persistent": false,
            "title": "Property Name",
            "remarks": "Property Name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TABNAME",
            "required": false,
            "persistent": false,
            "title": "Application Tab",
            "remarks": "Specifies the application that the interaction is bound to",
            "sameAsAttribute": "TABNAME",
            "sameAsObject": "OSLCINTERACTION"
        },
        {
            "attributeName": "RESOURCELINK",
            "required": false,
            "persistent": false,
            "title": "Resource Link",
            "remarks": "Resource Link",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "The description of the OSLC provider.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PROVIDERNAME",
            "required": false,
            "persistent": false,
            "title": "Provider",
            "remarks": "Identifies the OSLC provider application.",
            "sameAsAttribute": "PROVIDERNAME",
            "sameAsObject": "OSLCPROVIDER"
        },
        {
            "attributeName": "INTERACTIONNAME",
            "required": false,
            "persistent": false,
            "title": "Interaction",
            "remarks": "Identifies the OSLC interaction, that is, the interaction between the consumer application and the OSLC provider application.",
            "sameAsAttribute": "INTERACTIONNAME",
            "sameAsObject": "OSLCINTERACTION"
        },
        {
            "attributeName": "NATIVEPREVIEW",
            "required": true,
            "persistent": false,
            "title": "Native Preview",
            "remarks": "Indicates whether a read-only dialog for the provider resource data is rendered when the provider application does not support a preview dialog box.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IMGNAME",
            "required": false,
            "persistent": false,
            "title": " ",
            "remarks": "Name of the image to use for the UI preview button",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HASLD",
            "required": true,
            "persistent": false,
            "title": "Has Long Description",
            "remarks": "Boolean flag to indicate if there is any long description for this record",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RESOURCELINK_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Resource Link Long description",
            "remarks": "Long Description for Resource Link",
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
        }
    ],
    "outgoingRelationships": [
        {
            "name": "OSLCNATIVEPREVIEW",
            "target": "OSLCNATIVEPREVIEW",
            "remarks": "Relation to get native preview properties",
            "whereClause": "",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "USAGE",
            "source": "OSLCINTERACTION",
            "remarks": "Display all Usage URIs",
            "whereClause": "",
            "cardinality": null
        }
    ]
}