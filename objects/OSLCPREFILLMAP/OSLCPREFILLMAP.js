mos = {
    "objectName": "OSLCPREFILLMAP",
    "className": "com.ibm.tivoli.maximo.oslc.consumer.app.interaction.OslcPrefillMapSet",
    "description": "OSLC Interaction",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "OSLCPREFILLMAPID",
    "primaryKeyColumns": [
        "INTERACTIONNAME",
        "PROVIDERNAME",
        "RESPROPNAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "OSLCINTERACTION",
            "targetObject": "OSLCPREFILLMAP",
            "parentKeys": "INTERACTIONNAME, PROVIDERNAME",
            "targetKeys": "INTERACTIONNAME, PROVIDERNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Pre-fill Map",
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
        },
        {
            "objectName": "PERSON",
            "targetObject": "OSLCPREFILLMAP",
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
            "attributeName": "INTERACTIONNAME",
            "required": true,
            "persistent": true,
            "title": "Interaction",
            "remarks": "Interaction Name",
            "sameAsAttribute": "INTERACTIONNAME",
            "sameAsObject": "OSLCINTERACTION"
        },
        {
            "attributeName": "RESPROPNAME",
            "required": true,
            "persistent": true,
            "title": "Target Resource Property",
            "remarks": "The name of the field on the creation dialog box that is to be provided with a default value. The listed values are from the shape document. If a shape document is not specified for the resource type, you can type a value.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RESPROPNS",
            "required": true,
            "persistent": true,
            "title": "Target Resource Property Namespace",
            "remarks": "If a shape document is specified for the resource type, the namespace is displayed after the target resource property is selected. If there is no associated shape document, you can type a value.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAPEXPRESSION",
            "required": true,
            "persistent": true,
            "title": "Source Mapping Expression",
            "remarks": "An attribute or related attribute of the mapping object. The value of this field is used as the default for the field that is specified as the target resource property field on the creation dialog box. The expression must be a valid object attribute or related object attribute. You can use dot notation to identify an object attribute that is from an object that is related to the primary mapping object.",
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
            "attributeName": "RESOURCEREF",
            "required": true,
            "persistent": true,
            "title": "Resource Property is URI",
            "remarks": "Specifies whether the resource property value is a link URI, not a literal value.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OBJECTNAME",
            "required": false,
            "persistent": true,
            "title": "Object Name",
            "remarks": "Object Name",
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
            "attributeName": "OSLCPREFILLMAPID",
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
            "name": "RELATIONSHIPTREE",
            "target": "EXPBUILDTREE",
            "remarks": "Relationship to get relationship tree for object type.",
            "whereClause": "objectname=:objectname",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "OSLCPREFILLMAP",
            "source": "OSLCINTERACTION",
            "remarks": "Relation to get all OSLC mapping for an interaction",
            "whereClause": "interactionname=:interactionname and providername=:providername",
            "cardinality": null
        }
    ]
}