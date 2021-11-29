mos = {
    "objectName": "MAXEXTSYSTEM",
    "className": "psdi.iface.app.extsystem.MaxExtSystemSet",
    "description": "External System",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "MAXEXTSYSTEMID",
    "primaryKeyColumns": [
        "EXTSYSNAME"
    ],
    "logicalRelationships": [
        {
            "objectName": "MAXEXTSYSTEM",
            "targetObject": "MAXEXTBOOLVAL",
            "parentKeys": "EXTSYSNAME",
            "targetKeys": "EXTSYSNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "External System",
            "longDescription": null
        },
        {
            "objectName": "MAXEXTSYSTEM",
            "targetObject": "MAXEXTCTLVAL",
            "parentKeys": "EXTSYSNAME",
            "targetKeys": "EXTSYSNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "External System",
            "longDescription": null
        },
        {
            "objectName": "MAXEXTSYSTEM",
            "targetObject": "MAXEXTIFACEIN",
            "parentKeys": "EXTSYSNAME",
            "targetKeys": "EXTSYSNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "External System",
            "longDescription": null
        },
        {
            "objectName": "MAXEXTSYSTEM",
            "targetObject": "MAXEXTIFACEOUT",
            "parentKeys": "EXTSYSNAME",
            "targetKeys": "EXTSYSNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "External System",
            "longDescription": null
        },
        {
            "objectName": "MAXEXTSYSTEM",
            "targetObject": "MAXEXTLISTVAL",
            "parentKeys": "EXTSYSNAME",
            "targetKeys": "EXTSYSNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "External System",
            "longDescription": null
        },
        {
            "objectName": "MAXEXTSYSTEM",
            "targetObject": "MAXEXTOVER",
            "parentKeys": "EXTSYSNAME",
            "targetKeys": "EXTSYSNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "External System",
            "longDescription": null
        },
        {
            "objectName": "MAXEXTSYSTEM",
            "targetObject": "MAXEXTSYSCONTROL",
            "parentKeys": "EXTSYSNAME",
            "targetKeys": "EXTSYSNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "External System",
            "longDescription": null
        },
        {
            "objectName": "MAXEXTSYSTEM",
            "targetObject": "MAXEXTXREFVAL",
            "parentKeys": "EXTSYSNAME",
            "targetKeys": "EXTSYSNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "External System",
            "longDescription": null
        },
        {
            "objectName": "MAXEXTSYSTEM",
            "targetObject": "MAXINTERROR",
            "parentKeys": "EXTSYSNAME",
            "targetKeys": "EXTSYSNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "External System",
            "longDescription": null
        },
        {
            "objectName": "MAXEXTSYSTEM",
            "targetObject": "MAXINTERROREXTRACT",
            "parentKeys": "EXTSYSNAME",
            "targetKeys": "EXTSYSNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "External System",
            "longDescription": null
        },
        {
            "objectName": "MAXEXTSYSTEM",
            "targetObject": "MAXINTMSGTRK",
            "parentKeys": "EXTSYSNAME",
            "targetKeys": "EXTSYSNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "External System",
            "longDescription": null
        },
        {
            "objectName": "MAXEXTSYSTEM",
            "targetObject": "MAXLISTOVERVAL",
            "parentKeys": "EXTSYSNAME",
            "targetKeys": "EXTSYSNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "External System",
            "longDescription": null
        },
        {
            "objectName": "MAXEXTSYSTEM",
            "targetObject": "MAXWSREGISTRY",
            "parentKeys": "EXTSYSNAME",
            "targetKeys": "EXTSYSNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "External System",
            "longDescription": null
        },
        {
            "objectName": "MAXEXTSYSTEM",
            "targetObject": "MAXXREFOVERVAL",
            "parentKeys": "EXTSYSNAME",
            "targetKeys": "EXTSYSNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "External System",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "MAXEXTSYSTEM",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
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
            "objectName": "MAXQUEUE",
            "targetObject": "MAXEXTSYSTEM",
            "parentKeys": "QUEUENAME",
            "targetKeys": "INCONTQUEUENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MEA Queue",
            "longDescription": null
        },
        {
            "objectName": "MAXQUEUE",
            "targetObject": "MAXEXTSYSTEM",
            "parentKeys": "QUEUENAME",
            "targetKeys": "INSEQQUEUENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MEA Queue",
            "longDescription": null
        },
        {
            "objectName": "MAXQUEUE",
            "targetObject": "MAXEXTSYSTEM",
            "parentKeys": "QUEUENAME",
            "targetKeys": "OUTSEQQUEUENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MEA Queue",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXEXTSYSTEM",
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
            "attributeName": "EXTSYSNAME",
            "required": true,
            "persistent": true,
            "title": "System",
            "remarks": "Identifies the external system. This value must be unique. This is the name that must be specified as the SenderID in all inbound messages from that system and as the RecipientID in outbound XML or interface table transactions.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the external system. To enter or view additional information, click the Long Description button.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENABLED",
            "required": true,
            "persistent": true,
            "title": "Enabled",
            "remarks": "Specifies whether the external system is available for integration processing. If the check box is selected, the external system is available. If the check box is cleared (default), the external system is unavailable. A user sets this value.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INSEQQUEUENAME",
            "required": false,
            "persistent": true,
            "title": "Inbound Sequential Queue",
            "remarks": "Identifies the inbound sequential queue to which the MEA writes inbound messages. Multiple external systems can use the same inbound sequential queue.",
            "sameAsAttribute": "QUEUENAME",
            "sameAsObject": "MAXQUEUE"
        },
        {
            "attributeName": "INCONTQUEUENAME",
            "required": false,
            "persistent": true,
            "title": "Inbound Continuous Queue",
            "remarks": "Identifies the inbound continuous queue to which the MEA writes inbound messages for interfaces that have the \"\"Use Continuous Queue\"\" check box selected. Multiple external systems can use the same inbound continuous queue.",
            "sameAsAttribute": "QUEUENAME",
            "sameAsObject": "MAXQUEUE"
        },
        {
            "attributeName": "OUTSEQQUEUENAME",
            "required": false,
            "persistent": true,
            "title": "Outbound Sequential Queue",
            "remarks": "Identifies the queue that the external system will use for processing outbound messages. Multiple external systems can use the same outbound queue.",
            "sameAsAttribute": "QUEUENAME",
            "sameAsObject": "MAXQUEUE"
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
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "DESCRIPTION_LONGDESCRIPTION",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXEXTSYSTEMID",
            "required": true,
            "persistent": true,
            "title": "MAXEXTSYSTEMID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDPOINTNAME",
            "required": false,
            "persistent": true,
            "title": "End Point",
            "remarks": "Identifies the end point used by the external system. Outbound transactions are sent to this end point.",
            "sameAsAttribute": "ENDPOINTNAME",
            "sameAsObject": "MAXENDPOINT"
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
            "attributeName": "BIDICONFIG",
            "required": false,
            "persistent": true,
            "title": "BIDI CONFIG",
            "remarks": "BIDI CONFIG",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "JMSMSGENCODING",
            "required": false,
            "persistent": true,
            "title": "Text Message Encoding",
            "remarks": "Text Message Encoding",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "BIDIEXTSYS",
            "target": "ALNDOMAIN",
            "remarks": "Bidi configuration for an external system",
            "whereClause": "domainid='BIDICONFIG' and value=:bidiconfig",
            "cardinality": null
        },
        {
            "name": "DMMAXEXTSYSLONGDESC",
            "target": "LONGDESCRIPTION",
            "remarks": "long description record for maxextsystem",
            "whereClause": "ldkey=:maxextsystemid and ldownertable = 'MAXEXTSYSTEM'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXENDPOINT",
            "target": "MAXENDPOINT",
            "remarks": "Relationship to the MaxEndPoint table, used to find all end point records for a given endpointname. The resulting set will contain zero or more objects.",
            "whereClause": "endpointname=:endpointname",
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
            "name": "MAXEXTIFACEIN",
            "target": "MAXEXTIFACEIN",
            "remarks": "Relationship to the MAXEXTIFACEIN table, used to find all external inbound interfaces for a given external system (maxextsystem.extsysname = maxextifacein.extsysname) The resulting set will contain zero or more objects.",
            "whereClause": "extsysname=:extsysname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXEXTIFACEOUT",
            "target": "MAXEXTIFACEOUT",
            "remarks": "Relationship to the MAXEXTIFACEOUT table, used to find all external outbound interfaces for a given external system (maxextsystem.extsysname = maxextifaceout.extsysname) The resulting set will contain zero or more objects.",
            "whereClause": "extsysname=:extsysname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXEXTSYSCONTROL",
            "target": "MAXEXTSYSCONTROL",
            "remarks": "Relationship to the MaxExtsysControl table, used to find all control values for the given ext system. The resulting set will contain zero or more objects.",
            "whereClause": "extsysname=:extsysname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXCONTROLVALUE",
            "target": "MAXEXTSYSCONTROL",
            "remarks": "Relationship to the MaxIfaceControl table, used to find all value type control records for a given ifacetype. The resulting set will contain zero or more objects.",
            "whereClause": "extsysname=:extsysname and controltype in (select value from synonymdomain where domainid='CONTROLTYPE' and maxvalue = 'VALUE')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXIFACETBDATA",
            "target": "MAXIFACETBDATA",
            "remarks": "Relationship to the MAXIFACETBDATA non-persistent object, used for Int Table GUI.",
            "whereClause": "extsysname=:extsysname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXQUEUEINCONT",
            "target": "MAXQUEUE",
            "remarks": "Relationship to the MAXQUEUE table, used to find the Inbound Continuous Queue record for a given Queue Name (maxqueue.queuename = maxextsystem.incontqueuename and maxqueue.isinbound = :yes and maxqueue.issequential = :no) The resulting set will contain zero or one object.",
            "whereClause": "queuename=:incontqueuename and isinbound = :yes and issequential = :no",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXQUEUEINSEQ",
            "target": "MAXQUEUE",
            "remarks": "Relationship to the MAXQUEUE table, used to find the Inbound Sequential Queue record for a given Queue Name (maxqueue.queuename = maxextsystem.inseqqueuename and maxqueue.isinbound = :yes and maxqueue.issequential = :yes) The resulting set will contain zero or one object.",
            "whereClause": "queuename=:inseqqueuename and isinbound = :yes and issequential = :yes",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXQUEUEOUT",
            "target": "MAXQUEUE",
            "remarks": "Relationship to the MAXQUEUE table, used to find the Outbound Queue record for a given Queue Name (maxqueue.queuename = maxextsystem.outseqqueuename and maxqueue.isinbound = :no) The resulting set will contain zero or one object.",
            "whereClause": "queuename=:outseqqueuename and isinbound = :no",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "MAXEXTSYSTEM",
            "source": "MAXENDPOINT",
            "remarks": "Relationship to the Maxextsystem table, used to find all External systems that are using the given endpoint(endpointname=:endpointname). The resulting set will contain zero or more objects.",
            "whereClause": "endpointname=:endpointname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXEXTSYSTEM",
            "source": "MAXEXTIFACEIN",
            "remarks": "Relationship to get the Extsystem",
            "whereClause": "extsysname=:extsysname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXEXTSYSTEM",
            "source": "MAXEXTIFACEOUT",
            "remarks": "Relationship to get the Extsystem",
            "whereClause": "extsysname=:extsysname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXEXTSYSTEM",
            "source": "MAXHANDLER",
            "remarks": "Relationship to the MAXEXTSYSTEM table, used to find all the External Systems that are using a given Handler (maxhandler.handlername = maxextsystem.handlername) The resulting set will contain zero or more objects.",
            "whereClause": "handlername=:handlername",
            "cardinality": "UNDEFINED"
        }
    ]
}