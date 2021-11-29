mos = {
    "objectName": "MAXINTERRORMSG",
    "className": "psdi.iface.app.interror.MaxIntErrorMsgSet",
    "description": "Error message table for MAXINTERROR",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXINTERRORMSGID",
    "primaryKeyColumns": [
        "MESSAGEID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXINTERROR",
            "targetObject": "MAXINTERRORMSG",
            "parentKeys": "MESSAGEID",
            "targetKeys": "MESSAGEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Integration Error",
            "longDescription": null
        },
        {
            "objectName": "MAXINTERROREXTRACT",
            "targetObject": "MAXINTERRORMSG",
            "parentKeys": "EXTRACTFILEID",
            "targetKeys": "EXTRACTFILEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Error File",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXINTERRORMSG",
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
            "attributeName": "MAXINTERRORMSGID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MESSAGEID",
            "required": true,
            "persistent": true,
            "title": "Message ID",
            "remarks": "Message ID of the message in JMS Queue",
            "sameAsAttribute": "MESSAGEID",
            "sameAsObject": "MAXINTERROR"
        },
        {
            "attributeName": "ERRORDATE",
            "required": true,
            "persistent": true,
            "title": "Error Date",
            "remarks": "Timestamp of the error",
            "sameAsAttribute": "STATUSDATE",
            "sameAsObject": "MAXINTERROR"
        },
        {
            "attributeName": "ERRORDATA",
            "required": false,
            "persistent": false,
            "title": "Error Data",
            "remarks": "Error Data",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "required": true,
            "persistent": true,
            "title": "Change By",
            "remarks": "Change By",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "TRYCOUNT",
            "required": false,
            "persistent": true,
            "title": "Try Count",
            "remarks": "Number of attempts to process error message",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ERROR",
            "required": true,
            "persistent": true,
            "title": "Error Message",
            "remarks": "Error Message",
            "sameAsAttribute": "VALUE",
            "sameAsObject": "MAXMESSAGES"
        },
        {
            "attributeName": "EXTRACTFILEID",
            "required": false,
            "persistent": true,
            "title": "Extract File Id",
            "remarks": "Extract File Id",
            "sameAsAttribute": "EXTRACTFILEID",
            "sameAsObject": "MAXINTERROREXTRACT"
        },
        {
            "attributeName": "EXTRACTFILESEQ",
            "required": false,
            "persistent": true,
            "title": "Extract File Sequence",
            "remarks": "Extract File Sequence",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MSGDATA",
            "required": false,
            "persistent": true,
            "title": "Message Data",
            "remarks": "Message Data",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MSGLENGTH",
            "required": false,
            "persistent": true,
            "title": "Message Length",
            "remarks": "Message Length",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INTERRORDATA",
            "required": false,
            "persistent": false,
            "title": "Internal Data",
            "remarks": "Error Data in internal format",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INTMSGDATA",
            "required": false,
            "persistent": true,
            "title": "Error Data in internal format",
            "remarks": "Error Data in internal format",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INTMSGLENGTH",
            "required": false,
            "persistent": true,
            "title": "Message Length",
            "remarks": "Message Length",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MSGID",
            "required": false,
            "persistent": true,
            "title": "Error Message ID",
            "remarks": "Unique ID to be displayed when the message is displayed. The unique ID conforms to the TMS message ID format.",
            "sameAsAttribute": "MSGID",
            "sameAsObject": "MAXMESSAGES"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "MAXINTERRORMSG",
            "source": "MAXINTERROR",
            "remarks": "Relationship to the MAXINTERRORMSG table, used to find error message for the error file . The resulting set will contain one row.",
            "whereClause": "messageid=:messageid",
            "cardinality": "UNDEFINED"
        }
    ]
}