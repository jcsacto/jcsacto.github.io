mos = {
    "objectName": "MAXINTERROR",
    "className": "psdi.iface.app.interror.MaxIntErrorSet",
    "description": "Integration Error managment",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "MAXINTERRORID",
    "primaryKeyColumns": [
        "MESSAGEID"
    ],
    "logicalRelationships": [
        {
            "objectName": "MAXINTERROR",
            "targetObject": "MAXINTERRORMSG",
            "parentKeys": "MESSAGEID",
            "targetKeys": "MESSAGEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Integration Error",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
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
            "objectName": "MAXIFACEIN",
            "targetObject": "MAXINTERROR",
            "parentKeys": "IFACENAME",
            "targetKeys": "IFACENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Enterprise Services Interface",
            "longDescription": null
        },
        {
            "objectName": "MAXQUEUE",
            "targetObject": "MAXINTERROR",
            "parentKeys": "QUEUENAME",
            "targetKeys": "QUEUENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MEA Queue",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXINTERROR",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXINTERROR",
            "parentKeys": "PERSONID",
            "targetKeys": "USERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "MAXINTERRORID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "QUEUENAME",
            "required": true,
            "persistent": true,
            "title": "Queue JNDI name",
            "remarks": "JNDI name of the JMS queue.",
            "sameAsAttribute": "QUEUENAME",
            "sameAsObject": "MAXQUEUE"
        },
        {
            "attributeName": "EXTSYSNAME",
            "required": true,
            "persistent": true,
            "title": "External System",
            "remarks": "Identifies the external system. This value must be unique. This is the name that must be specified as the SenderID in all inbound messages from that system and as the RecipientID in outbound XML or interface table transactions.",
            "sameAsAttribute": "EXTSYSNAME",
            "sameAsObject": "MAXEXTSYSTEM"
        },
        {
            "attributeName": "MESSAGEID",
            "required": true,
            "persistent": true,
            "title": "Message ID",
            "remarks": "Message ID of the message in JMS Queue",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IFACENAME",
            "required": true,
            "persistent": true,
            "title": "Service/Channel",
            "remarks": "Interface Name",
            "sameAsAttribute": "IFACENAME",
            "sameAsObject": "MAXIFACEIN"
        },
        {
            "attributeName": "USERID",
            "required": false,
            "persistent": true,
            "title": "User ID",
            "remarks": "Id of a user who is processing error transaction",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "DELETEFLAG",
            "required": true,
            "persistent": true,
            "title": "Delete Flag",
            "remarks": "Delete Flag",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUS",
            "required": true,
            "persistent": true,
            "title": "Status",
            "remarks": "Status of the error transaction.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUSDATE",
            "required": true,
            "persistent": true,
            "title": "Status Date",
            "remarks": "Timestamp to indicate when Status of the error has been changed",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": true,
            "title": "Memo",
            "remarks": "Status Memo",
            "sameAsAttribute": "MEMO",
            "sameAsObject": "WFTRANSACTION"
        },
        {
            "attributeName": "MESSAGETYPE",
            "required": false,
            "persistent": false,
            "title": "Message Type",
            "remarks": "Message Type",
            "sameAsAttribute": "VALUE",
            "sameAsObject": "ALNDOMAIN"
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
            "attributeName": "CHANGEBY",
            "required": false,
            "persistent": true,
            "title": "Change By",
            "remarks": "Change By",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "IERRCHANGESTATUS",
            "target": "IERRCHANGESTATUS",
            "remarks": "Relationship to the IERRCHANGESTATUS table, used to build status change screen . The resulting set will contain zero rows.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "IERRSTATUSDUMMY",
            "target": "IERRSTATUSDUMMY",
            "remarks": "Relationship to the MaxIntErrorStatusDummy non-persistent table, used to find all status for a given asset. (ierrstatusdummy.messageid = maxinterror.messageid). This resulting set will contain zero or more objects.",
            "whereClause": "messageid=:messageid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXINTERRORMSG",
            "target": "MAXINTERRORMSG",
            "remarks": "Relationship to the MAXINTERRORMSG table, used to find error message for the error file . The resulting set will contain one row.",
            "whereClause": "messageid=:messageid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": []
}