mos = {
    "objectName": "MAXENDPOINTDTL",
    "className": "psdi.iface.app.endpoint.MaxEndPointDtlSet",
    "description": "End Point Detail",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXENDPOINTDTLID",
    "primaryKeyColumns": [
        "ENDPOINTNAME",
        "PROPERTY"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
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
            "objectName": "PERSON",
            "targetObject": "MAXENDPOINTDTL",
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
            "attributeName": "MAXENDPOINTDTLID",
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
            "remarks": "ENDPOINTNAME",
            "sameAsAttribute": "ENDPOINTNAME",
            "sameAsObject": "MAXENDPOINT"
        },
        {
            "attributeName": "PROPERTY",
            "required": true,
            "persistent": true,
            "title": "Property",
            "remarks": "Property needed by the handler for processing class to operate. When you add an end point, the MEA displays the names of the handler properties you must specify for the end point. For more information, see How Do I Specify . . . Handler Properties for the appropriate handler.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VALUE",
            "required": false,
            "persistent": true,
            "title": "Value",
            "remarks": "Value of the corresponding end point property. For information about end point properties, see How Do I Specify . . . Handler Properties for the appropriate handler.",
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
            "attributeName": "PASSWORD",
            "required": false,
            "persistent": true,
            "title": "Encrypted Value",
            "remarks": "For an end point with a password property, this field allows maintenance of the password in an encrypted manner.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ALLOWOVERRIDE",
            "required": true,
            "persistent": true,
            "title": "Allow Override",
            "remarks": "Allow Override",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "MAXENDPOINTDTL",
            "source": "MAXENDPOINT",
            "remarks": "Relationship to theMaxEndPointDtl table, used to find all end point detail records for a given endpointname. The resulting set will contain zero or more objects.",
            "whereClause": "endpointname=:endpointname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXENDPOINTDTL",
            "source": "MAXEXTSYSTEM",
            "remarks": "Relationship to theMaxEndPointDtl table, used to find all end point detail records for a given endpointname. The resulting set will contain zero or more objects.",
            "whereClause": "endpointname=:endpointname",
            "cardinality": "UNDEFINED"
        }
    ]
}