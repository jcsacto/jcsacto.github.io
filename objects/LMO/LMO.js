mos = {
    "objectName": "LMO",
    "className": "psdi.iface.app.lmo.LMOSet",
    "description": "LMO Table",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "LMOID",
    "primaryKeyColumns": [
        "LMONAME",
        "LMONAMESPACE"
    ],
    "logicalRelationships": [
        {
            "objectName": "LMO",
            "targetObject": "LMOATT",
            "parentKeys": "LMONAME, LMONAMESPACE",
            "targetKeys": "LMONAME, LMONAMESPACE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "LMO",
            "longDescription": null
        },
        {
            "objectName": "LMO",
            "targetObject": "LMOIMRLN",
            "parentKeys": "LMONAME, LMONAMESPACE",
            "targetKeys": "LMONAME, LMONAMESPACE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "LMO",
            "longDescription": null
        },
        {
            "objectName": "LMO",
            "targetObject": "OMPIMLMORLN",
            "parentKeys": "LMONAME, LMONAMESPACE",
            "targetKeys": "LMONAME, LMONAMESPACE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "LMO",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "LMO",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "LMO",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "RESPONSEMBO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Response MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "LMO",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "SOURCEMBO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Source MBO",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "LMO",
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
            "attributeName": "LMOID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LMONAME",
            "required": true,
            "persistent": true,
            "title": "Name",
            "remarks": "Name + Namespace is unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LMONAMESPACE",
            "required": true,
            "persistent": true,
            "title": "Name Space",
            "remarks": "Name + Namespace is unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "LMO Description",
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
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "DESCRIPTION Long description",
            "remarks": "Long description for DESCRIPTION",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SOURCEMBO",
            "required": false,
            "persistent": true,
            "title": "Source Object Name",
            "remarks": "Source MBO",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "INVOCPATTERN",
            "required": true,
            "persistent": true,
            "title": "Invocation Pattern",
            "remarks": "Values for DOMAIN: Synchronous - Client issues a request and waits for the response. \tAsynchronous one-way - Client issues a request and a response is not expected. Asynchronous deferred response - Client issues a request and the response will be requested by the client at a later point in time. \tAsynchronous call back - Client issues a request and the target will call a service implemented by the client with the response.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEBY",
            "required": true,
            "persistent": true,
            "title": "Change By",
            "remarks": "Last user who updated the row",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Change Date",
            "remarks": "Change Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RESPONSEMBO",
            "required": false,
            "persistent": true,
            "title": "Response Object Name",
            "remarks": "Response MBO",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "HASLD",
            "required": true,
            "persistent": true,
            "title": "Has LD",
            "remarks": "Has LD",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "LMOATT",
            "target": "LMOATT",
            "remarks": "Relationship to the LMOATT table, used to find all attributes for a LMO . The resulting set will contain one or multiple rows.",
            "whereClause": "lmoname=:lmoname and lmonamespace=:lmonamespace",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LMOIMRLN",
            "target": "LMOIMRLN",
            "remarks": "Relationship to the LMOIMRLN table, used to find all IMs that implement the LMO. The resulting set will contain zero or more rows.",
            "whereClause": "lmoname=:lmoname and lmonamespace=:lmonamespace",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LMOIMCHLINK",
            "target": "MAXIM",
            "remarks": "Relationship to the IM table and invocation Channels . ",
            "whereClause": "imname in (select imname from lmoimrln where lmoname=:lmoname and lmonamespace=:lmonamespace) and maxchannelname is not null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LMOIMLINK",
            "target": "MAXIM",
            "remarks": "Relationship to the IM table, used to relate LMO OIL and IM Tables . ",
            "whereClause": "imname in (select imname from ompimlmorln where lmoname=:lmoname and lmonamespace=:lmonamespace)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LMOIMLINK2",
            "target": "MAXIM",
            "remarks": "Relationship to the IM table, used to relate LMO and IM Tables . ",
            "whereClause": "imname in (select imname from lmoimrln where lmoname=:lmoname and lmonamespace=:lmonamespace)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LMOOMPLINK",
            "target": "OMP",
            "remarks": "Relationship to the OMPtable, used to relate LMO OIL and OMP Tables . ",
            "whereClause": "ompguid in (select ompguid from ompimlmorln where lmoname=:lmoname and lmonamespace=:lmonamespace)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "OMPIMLMORLN",
            "target": "OMPIMLMORLN",
            "remarks": "OmpImLmoRel objects for the LMO",
            "whereClause": "lmoname=:lmoname and lmonamespace=:lmonamespace",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LMOOILLINK",
            "target": "OMPIMLMORLN",
            "remarks": "Relationship to the OIL Table . ",
            "whereClause": "name=:lmoname and namespace=:lmonamespace",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "LMO",
            "source": "LMOIMRLN",
            "remarks": "The Logical Management Operation associated with the IM. The resulting set will contain zero or one rows.",
            "whereClause": "lmoname=:lmoname and lmonamespace=:lmonamespace",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LMO",
            "source": "OMPIMLMORLN",
            "remarks": "Relationship to the LMO table, used to find the LMO. The resulting set will contain one row.",
            "whereClause": "lmoname=:lmoname and lmonamespace=:lmonamespace",
            "cardinality": "UNDEFINED"
        }
    ]
}