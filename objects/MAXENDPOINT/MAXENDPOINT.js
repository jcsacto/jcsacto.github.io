mos = {
    "objectName": "MAXENDPOINT",
    "className": "psdi.iface.app.endpoint.MaxEndPointSet",
    "description": "Integration End Points",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXENDPOINTID",
    "primaryKeyColumns": [
        "ENDPOINTNAME"
    ],
    "logicalRelationships": [
        {
            "objectName": "MAXENDPOINT",
            "targetObject": "JSONRESOURCE",
            "parentKeys": "ENDPOINTNAME",
            "targetKeys": "ENDPOINTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Integration End Point",
            "longDescription": null
        },
        {
            "objectName": "MAXENDPOINT",
            "targetObject": "MAXENDPOINTDTL",
            "parentKeys": "ENDPOINTNAME",
            "targetKeys": "ENDPOINTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Integration End Point",
            "longDescription": null
        },
        {
            "objectName": "MAXENDPOINT",
            "targetObject": "MAXEXTIFACEOUT",
            "parentKeys": "ENDPOINTNAME",
            "targetKeys": "ENDPOINTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Integration End Point",
            "longDescription": null
        },
        {
            "objectName": "MAXENDPOINT",
            "targetObject": "MAXEXTSYSTEM",
            "parentKeys": "ENDPOINTNAME",
            "targetKeys": "ENDPOINTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Integration End Point",
            "longDescription": null
        },
        {
            "objectName": "MAXENDPOINT",
            "targetObject": "MAXIFACEINVOKE",
            "parentKeys": "ENDPOINTNAME",
            "targetKeys": "ENDPOINTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Invocation Channel",
            "longDescription": null
        },
        {
            "objectName": "MAXENDPOINT",
            "targetObject": "OMPIMRLN",
            "parentKeys": "ENDPOINTNAME",
            "targetKeys": "ENDPOINTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Integration End Point",
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
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "MAXENDPOINT",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
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
            "objectName": "PERSON",
            "targetObject": "MAXENDPOINT",
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
            "attributeName": "MAXENDPOINTID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDPOINTNAME",
            "required": true,
            "persistent": true,
            "title": "End Point",
            "remarks": "Identifies a location to which the MEA can send outbound messages. This value must be unique.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HANDLERNAME",
            "required": true,
            "persistent": true,
            "title": "Handler",
            "remarks": "Identifies the handler that the end point uses to send outbound messages.",
            "sameAsAttribute": "HANDLERNAME",
            "sameAsObject": "MAXHANDLER"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the end point. To enter or view additional information, click the Long Description button.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "DESCRIPTION_LONGDESCRIPTION",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "LANGCODE",
            "required": true,
            "persistent": true,
            "title": "Language Code",
            "remarks": "Language Column",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
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
            "attributeName": "USEWITH",
            "required": false,
            "persistent": false,
            "title": "Consumed By",
            "remarks": "Use with",
            "sameAsAttribute": "USEWITH",
            "sameAsObject": "MAXINTOBJECT"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "JSONRESOURCE",
            "target": "JSONRESOURCE",
            "remarks": "Relation to End Point object. This relationship will return 1 or more rows",
            "whereClause": "endpointname=:endpointname",
            "cardinality": null
        },
        {
            "name": "DMMAXENDPTLONGDESC",
            "target": "LONGDESCRIPTION",
            "remarks": "long description record for maxendpoint",
            "whereClause": "ldkey=:maxendpointid and ldownertable = 'MAXENDPOINT'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXENDPOINTDTL",
            "target": "MAXENDPOINTDTL",
            "remarks": "Relationship to theMaxEndPointDtl table, used to find all end point detail records for a given endpointname. The resulting set will contain zero or more objects.",
            "whereClause": "endpointname=:endpointname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXENDPOINTTEST",
            "target": "MAXENDPOINTTEST",
            "remarks": "Relationship to the test table . The resulting set will contain one row.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXEXTIFACEOUT",
            "target": "MAXEXTIFACEOUT",
            "remarks": "Relationship to all Publish Channel table. The resulting set will contain one or more row.",
            "whereClause": "endpointname=:endpointname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXEXTSYSTEM",
            "target": "MAXEXTSYSTEM",
            "remarks": "Relationship to the Maxextsystem table, used to find all External systems that are using the given endpoint(endpointname=:endpointname). The resulting set will contain zero or more objects.",
            "whereClause": "endpointname=:endpointname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXHANDLER",
            "target": "MAXHANDLER",
            "remarks": "Relationship to the MAXHANDLER table, used to find the handler record for a given handlername (maxextsystem.handlername = maxhandler.handlername) The resulting set will contain zero or one object.",
            "whereClause": "handlername=:handlername",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXIFACEINVOKE",
            "target": "MAXIFACEINVOKE",
            "remarks": "Relationship to all Invocations Channel table. The resulting set will contain one or more row.",
            "whereClause": "endpointname=:endpointname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "OMPIMLMORLN",
            "target": "OMPIMRLN",
            "remarks": "Relationship to the OMP IM and LMO relation table . The resulting set will contain one or more row.",
            "whereClause": "endpointname=:endpointname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "OSLCPROVIDER",
            "target": "OSLCPROVIDER",
            "remarks": "Relation to check if End Point used in a OSLC Provider.",
            "whereClause": "endpointname=:endpointname",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "MAXENDPOINT",
            "source": "JSONRESOURCE",
            "remarks": "Relation to JSON Object Map. This relationship will return 1 or more rows",
            "whereClause": "endpointname=:endpointname",
            "cardinality": null
        },
        {
            "name": "MAXENDPOINT",
            "source": "MAXEXTSYSTEM",
            "remarks": "Relationship to the MaxEndPoint table, used to find all end point records for a given endpointname. The resulting set will contain zero or more objects.",
            "whereClause": "endpointname=:endpointname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXENDPOINT",
            "source": "MAXHANDLER",
            "remarks": "Relationship to theMaxEndPoint table, used to find all end point records for a given handlername. The resulting set will contain zero or more objects.",
            "whereClause": "handlername=:handlername",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXENDPOINT",
            "source": "MAXIFACEINVOKE",
            "remarks": "get the endpoint",
            "whereClause": "endpointname=:endpointname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXENDPOINT",
            "source": "OMPIMRLN",
            "remarks": "Relationship to the MAXENDPOINT table, used to find the Endpoint for the current OMP and IM. The resulting set will contain zero or one rows.",
            "whereClause": "endpointname=:endpointname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXENDPOINT",
            "source": "OSLCPROVIDER",
            "remarks": "Relation to get End Point Description for an OSLC Provider",
            "whereClause": "endpointname=:endpointname",
            "cardinality": null
        }
    ]
}