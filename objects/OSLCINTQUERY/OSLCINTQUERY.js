mos = {
    "objectName": "OSLCINTQUERY",
    "className": "com.ibm.tivoli.maximo.oslc.consumer.app.interaction.OslcInteractionQuerySet",
    "description": "OSLC Interaction Query",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "OSLCINTQUERYID",
    "primaryKeyColumns": [
        "INTERACTIONNAME",
        "PROVIDERNAME",
        "QUERYNUM"
    ],
    "logicalRelationships": [
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
            "objectName": "OSLCINTQUERY",
            "targetObject": "OSLCINTQUERYPARAMS",
            "parentKeys": "INTERACTIONNAME, PROVIDERNAME, QUERYNUM",
            "targetKeys": "INTERACTIONNAME, PROVIDERNAME, QUERYNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "OSLC Integration Query",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
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
            "objectName": "PERSON",
            "targetObject": "OSLCINTQUERY",
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
            "attributeName": "INTERACTIONNAME",
            "required": true,
            "persistent": true,
            "title": "Interaction",
            "remarks": "Identifies the OSLC interaction, that is, the interaction between the consumer application and the OSLC provider application.",
            "sameAsAttribute": "INTERACTIONNAME",
            "sameAsObject": "OSLCINTERACTION"
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
            "attributeName": "QUERYNUM",
            "required": true,
            "persistent": true,
            "title": "Query Priority",
            "remarks": "The priority of the query that is configured and retrieved for a specific interaction. The queries are run in the order that is listed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORDERBY",
            "required": false,
            "persistent": true,
            "title": "Order By",
            "remarks": "A value that determines the order of the result set.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WHERECLAUSE",
            "required": false,
            "persistent": true,
            "title": "Where Clause",
            "remarks": "A filter condition clause that follows the OSLC WHERE notation.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CLASSNAME",
            "required": false,
            "persistent": true,
            "title": "Query Class",
            "remarks": "A Java class that is used to build a custom WHERE clause. If you do not require a custom class, you can use the query parameters or the WHERE clause value.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "QUERYTYPE",
            "required": true,
            "persistent": true,
            "title": "Query Type",
            "remarks": "The option that identifies how the query clause is built. Valid values are WHERE, CUSTOM, or PARAMETER.",
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
            "attributeName": "OSLCINTQUERYID",
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
            "name": "OSLCINTQUERYPARAMS",
            "target": "OSLCINTQUERYPARAMS",
            "remarks": "Relation to OSLC Interaction Query Paramaters",
            "whereClause": "interactionname=:interactionname and querynum=:querynum",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "OSLCINTQUERY",
            "source": "OSLCINTERACTION",
            "remarks": "Relation to Interaction Query",
            "whereClause": "interactionname=:interactionname and providername=:providername",
            "cardinality": null
        }
    ]
}