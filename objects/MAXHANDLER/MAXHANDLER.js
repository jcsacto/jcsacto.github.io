mos = {
    "objectName": "MAXHANDLER",
    "className": "psdi.iface.app.endpoint.MaxHandlerSet",
    "description": "MAXIMO Handler",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXHANDLERID",
    "primaryKeyColumns": [
        "HANDLERNAME"
    ],
    "logicalRelationships": [
        {
            "objectName": "MAXHANDLER",
            "targetObject": "MAXENDPOINT",
            "parentKeys": "HANDLERNAME",
            "targetKeys": "HANDLERNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Handler",
            "longDescription": null
        },
        {
            "objectName": "MAXHANDLER",
            "targetObject": "MAXIM",
            "parentKeys": "HANDLERNAME",
            "targetKeys": "HANDLERNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Handler",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "PERSON",
            "targetObject": "MAXHANDLER",
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
            "attributeName": "HANDLERNAME",
            "required": true,
            "persistent": true,
            "title": "Handler",
            "remarks": "Identifies a handler. This value must be unique.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HANDLERCLASSNAME",
            "required": true,
            "persistent": true,
            "title": "Handler Class Name",
            "remarks": "Location of the Java class file that defines that the way the handler routes outbound messages, and the parameters required to route any message.",
            "sameAsAttribute": "CLASSNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "CHANGEBY",
            "required": true,
            "persistent": true,
            "title": "Changed By",
            "remarks": "CHANGEBY",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "CHANGEDATE",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USERDEFINED",
            "required": true,
            "persistent": true,
            "title": "User Defined",
            "remarks": "Specifies whether the handler was predefined (MEA-supplied) or created by a user. If the check box is selected, a user created the handler.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXHANDLERID",
            "required": true,
            "persistent": true,
            "title": "MAXHANDLERID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USEWITH",
            "required": true,
            "persistent": true,
            "title": "Consumed By",
            "remarks": "Consumed By",
            "sameAsAttribute": "USEWITH",
            "sameAsObject": "MAXINTOBJECT"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "MAXENDPOINT",
            "target": "MAXENDPOINT",
            "remarks": "Relationship to theMaxEndPoint table, used to find all end point records for a given handlername. The resulting set will contain zero or more objects.",
            "whereClause": "handlername=:handlername",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXEXTSYSTEM",
            "target": "MAXEXTSYSTEM",
            "remarks": "Relationship to the MAXEXTSYSTEM table, used to find all the External Systems that are using a given Handler (maxhandler.handlername = maxextsystem.handlername) The resulting set will contain zero or more objects.",
            "whereClause": "handlername=:handlername",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXIM",
            "target": "MAXIM",
            "remarks": "Relationship to the Integration Module table . The resulting set will contain one or more row.",
            "whereClause": "handlername=:handlername",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "MAXHANDLER",
            "source": "MAXENDPOINT",
            "remarks": "Relationship to the MAXHANDLER table, used to find the handler record for a given handlername (maxextsystem.handlername = maxhandler.handlername) The resulting set will contain zero or one object.",
            "whereClause": "handlername=:handlername",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXHANDLER",
            "source": "MAXIM",
            "remarks": "Relationship to the MAXHANDLER table, used to find the  handler for an IM . The resulting set will contain one or multiple rows.",
            "whereClause": "handlername=:handlername",
            "cardinality": "UNDEFINED"
        }
    ]
}