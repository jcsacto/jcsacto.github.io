mos = {
    "objectName": "OSLCINTQUERYPARAMS",
    "className": "com.ibm.tivoli.maximo.oslc.consumer.app.interaction.OslcIntQueryParamsSet",
    "description": "OSLC Query Paramters",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "OSLCINTQUERYPARAMSID",
    "primaryKeyColumns": [
        "INTERACTIONNAME",
        "PROVIDERNAME",
        "QUERYNUM",
        "PROPNAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
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
            "objectName": "OSLCINTQUERY",
            "targetObject": "OSLCINTQUERYPARAMS",
            "parentKeys": "INTERACTIONNAME, PROVIDERNAME, QUERYNUM",
            "targetKeys": "INTERACTIONNAME, PROVIDERNAME, QUERYNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "OSLC Integration Query",
            "longDescription": null
        },
        {
            "objectName": "OSLCINTQUERY",
            "targetObject": "OSLCINTQUERYPARAMS",
            "parentKeys": "INTERACTIONNAME, QUERYNUM",
            "targetKeys": "INTERACTIONNAME, QUERYNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Query Parameters",
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
            "objectName": "PERSON",
            "targetObject": "OSLCINTQUERYPARAMS",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Last Changed By",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "PROVIDERNAME",
            "required": false,
            "persistent": true,
            "title": "Provider",
            "remarks": "Identifies the OSLC provider application.",
            "sameAsAttribute": "PROVIDERNAME",
            "sameAsObject": "OSLCPROVIDER"
        },
        {
            "attributeName": "INTERACTIONNAME",
            "required": false,
            "persistent": true,
            "title": "Interaction",
            "remarks": "Identifies the OSLC interaction, that is, the interaction between the consumer application and the OSLC provider application.",
            "sameAsAttribute": "INTERACTIONNAME",
            "sameAsObject": "OSLCINTERACTION"
        },
        {
            "attributeName": "QUERYNUM",
            "required": true,
            "persistent": true,
            "title": "Query Priority",
            "remarks": "The priority of the query that is configured and retrieved for a specific interaction. The queries are run in the order that is listed.",
            "sameAsAttribute": "QUERYNUM",
            "sameAsObject": "OSLCINTQUERY"
        },
        {
            "attributeName": "PROPNAME",
            "required": true,
            "persistent": true,
            "title": "Property",
            "remarks": "The resource attribute name that is returned from the shape document for a provider. The resource attribute name is mapped to attributes in the consumer application.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PROPTYPE",
            "required": true,
            "persistent": true,
            "title": "Property Type",
            "remarks": "The option that identifies the property, such as a String, Integer, Date, or Boolean.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PROPMETADATA",
            "required": false,
            "persistent": true,
            "title": "Property MetaData",
            "remarks": "Identifies Property MetaData.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAPEXPRESSION",
            "required": false,
            "persistent": true,
            "title": "Mapping Expression",
            "remarks": "An attribute or related attribute of the mapping object. The value of this field becomes the default value for the field that is specified as the target resource property field. The expression must be a valid object attribute or related object attribute. If an object attribute belongs to an object that is related to the primary mapping object, use dot-decimal notation to identify the object attribute.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISLITERAL",
            "required": true,
            "persistent": true,
            "title": "Is Literal",
            "remarks": "Identifies whether the value in the Mapping Expression column is an attribute or a simple value that is set in the WHERE clause.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OPERAND",
            "required": true,
            "persistent": true,
            "title": "Operator",
            "remarks": "The operation that is used in the WHERE clause for a specific property.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OBJECTNAME",
            "required": false,
            "persistent": true,
            "title": "Object Name",
            "remarks": "The main object of the specified application that the mapping can be configured from.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
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
            "attributeName": "OSLCINTQUERYPARAMSID",
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
            "name": "OSLCINTQUERYPARAMS",
            "source": "OSLCINTQUERY",
            "remarks": "Relation to OSLC Interaction Query Paramaters",
            "whereClause": "interactionname=:interactionname and querynum=:querynum",
            "cardinality": null
        }
    ]
}