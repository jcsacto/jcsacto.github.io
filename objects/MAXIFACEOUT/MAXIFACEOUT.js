mos = {
    "objectName": "MAXIFACEOUT",
    "className": "psdi.iface.app.publish.MaxIfaceOutSet",
    "description": "MAXIMO Outbound Interfaces",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXIFACEOUTID",
    "primaryKeyColumns": [
        "IFACENAME"
    ],
    "logicalRelationships": [
        {
            "objectName": "MAXIFACEOUT",
            "targetObject": "MAXEXTIFACEOUT",
            "parentKeys": "IFACENAME",
            "targetKeys": "IFACENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Maximo Outbound Inferface",
            "longDescription": null
        },
        {
            "objectName": "MAXIFACEOUT",
            "targetObject": "MAXIFACEOUTCNTL",
            "parentKeys": "IFACENAME",
            "targetKeys": "IFACENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Maximo Outbound Inferface",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "MAXIFACEOUT",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "MAXIFACEIN",
            "targetObject": "MAXIFACEOUT",
            "parentKeys": "IFACENAME",
            "targetKeys": "IFACENAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 6",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJECT",
            "targetObject": "MAXIFACEOUT",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "INTOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Object Structure",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXIFACEOUT",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "IFACETBNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Interface Table",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXIFACEOUT",
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
            "remarks": "User Defined",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IFACENAME",
            "required": true,
            "persistent": true,
            "title": "Publish Channel",
            "remarks": "Publish Channel Name",
            "sameAsAttribute": "IFACENAME",
            "sameAsObject": "MAXIFACEIN"
        },
        {
            "attributeName": "IFACETYPE",
            "required": true,
            "persistent": true,
            "title": "Adapter",
            "remarks": "Publish Channel Adapter Name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INTOBJECTNAME",
            "required": true,
            "persistent": true,
            "title": "Object Structure",
            "remarks": "Publish Object Structure Name",
            "sameAsAttribute": "INTOBJECTNAME",
            "sameAsObject": "MAXINTOBJECT"
        },
        {
            "attributeName": "IFACEEXITCLASS",
            "required": false,
            "persistent": true,
            "title": "Processing Class",
            "remarks": "Fully Qualified Java Class File Name That Contains Outbound Processing Logic For This Channel.",
            "sameAsAttribute": "CLASSNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "IFACEUSEREXITCLASS",
            "required": false,
            "persistent": true,
            "title": "User Exit Class",
            "remarks": "Fully Qualified Java Class File Name That Contains Custom Processing Logic.",
            "sameAsAttribute": "CLASSNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "IFACEMAPNAME",
            "required": false,
            "persistent": true,
            "title": "XSL Map",
            "remarks": "Path to a class file that contains XSL mapping to be applied to the interface.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXIFACEOUTID",
            "required": true,
            "persistent": true,
            "title": "MAXIFACEOUTID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IFACETBNAME",
            "required": false,
            "persistent": true,
            "title": "Interface Table",
            "remarks": "Interface Table Name",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "EVENTFILTERCLASS",
            "required": false,
            "persistent": true,
            "title": "Event Filter Class",
            "remarks": "Event Filter Class Name",
            "sameAsAttribute": "CLASSNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "RETAINMBOS",
            "required": true,
            "persistent": true,
            "title": "Retain Mbo's",
            "remarks": "Retain Mbo's after creating the xml",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MESSAGETYPE",
            "required": true,
            "persistent": true,
            "title": "Operation",
            "remarks": "Operation Name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LISTENER",
            "required": true,
            "persistent": true,
            "title": "Enable Listener",
            "remarks": "Indicates if the event listener is enabled",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "XMLDATA",
            "required": false,
            "persistent": false,
            "title": "Sample XML",
            "remarks": "Sample XML",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HASLD",
            "required": true,
            "persistent": true,
            "title": "Has Long Description",
            "remarks": "Has Long Description",
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
            "attributeName": "STOREMSG",
            "required": true,
            "persistent": true,
            "title": "Store Message",
            "remarks": "Whether to store(save) the message. Option given due to performance implication",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USETXNTRACKING",
            "required": true,
            "persistent": true,
            "title": "Enable Message Tracking",
            "remarks": "Enable Transaction Tracking",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EXTMSGIDFIELD",
            "required": false,
            "persistent": true,
            "title": "External Message ID",
            "remarks": "Transaction ID field name as supplied by External System",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SEARCHFIELD",
            "required": false,
            "persistent": true,
            "title": "Search ID",
            "remarks": "Search Field name as set by Administrator for easy search",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SKIPDIFFOBJECT",
            "required": true,
            "persistent": true,
            "title": "Skip Different Object Types",
            "remarks": "Skip Different Object Types",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "DMMAXIFACEOUTLONGDESC",
            "target": "LONGDESCRIPTION",
            "remarks": "long description record for maxifaceout",
            "whereClause": "ldkey=:maxifaceoutid and ldownertable = 'MAXIFACEOUT'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXEXTIFACEOUT",
            "target": "MAXEXTIFACEOUT",
            "remarks": "Relationship to the MAXIFACEOUT table, used to find all in maps for a given ifacename . The resulting set will contain zero or more maps.",
            "whereClause": "ifacename=:ifacename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXIFACEOUTCNTL",
            "target": "MAXIFACEOUTCNTL",
            "remarks": "relating maxifaceout to maxifaceproc",
            "whereClause": "ifacename=:ifacename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXIFACEOUTCNTLDETAIL",
            "target": "MAXIFACEOUTCNTL",
            "remarks": "Relationship from maxifaceout to maxifaceoutcntl table",
            "whereClause": "ifacename=:ifacename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXIFACEPROC",
            "target": "MAXIFACEPROC",
            "remarks": "relating maxifaceout to maxifaceproc",
            "whereClause": "ifacename=:ifacename and usewith = 'PUBLISHCHANNEL'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXINTOBJDETAIL",
            "target": "MAXINTOBJDETAIL",
            "remarks": "Relationship to the MaxIntObjDetail table, used to find all object details records for a given intobectname. (maxitbobjdetail.intobectname = maxifaceout.intobectname) The resulting set will contain one or more objects.",
            "whereClause": "intobjectname=:intobjectname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXINTOBJECT",
            "target": "MAXINTOBJECT",
            "remarks": "get the maxintobject for object structure",
            "whereClause": "intobjectname=:intobjectname",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "MAXIFACEOUT",
            "source": "AUTOSCRIPT",
            "remarks": "Relationship to the MaxIfaceOut table, publish channel table, used to find publish channel records for a given ifacename . The resulting set will contain one row.",
            "whereClause": "ifacename=:ifacename",
            "cardinality": null
        },
        {
            "name": "MAXIFACEOUT",
            "source": "MAXEXTIFACEOUT",
            "remarks": "Relationship to the MAXIFACEOUT table to find more details of a given interface. The resulting set will contain zero or more objects.",
            "whereClause": "ifacename=:ifacename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXIFACEOUT",
            "source": "MAXINTOBJECT",
            "remarks": "Relationship to the MAXIFACEOUT table, used to find all publishing channels for a given MAXINTOBJECT. (MAXINTOBJECT.intobjectname=MAXIFACEOUT.intobjectname) The resulting set will contain zero or more objects.",
            "whereClause": "intobjectname=:intobjectname",
            "cardinality": "UNDEFINED"
        }
    ]
}