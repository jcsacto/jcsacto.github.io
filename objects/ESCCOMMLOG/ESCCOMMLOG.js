mos = {
    "objectName": "ESCCOMMLOG",
    "className": "psdi.app.escalation.EscalationCommLogSet",
    "description": "Commlog view for escalation",
    "longDescription": null,
    "isView": true,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [
        "COMMLOGID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "COMMLOG",
            "targetObject": "ESCCOMMLOG",
            "parentKeys": "COMMLOGID",
            "targetKeys": "COMMLOGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Communication Logs",
            "longDescription": null
        },
        {
            "objectName": "COMMLOG",
            "targetObject": "ESCCOMMLOG",
            "parentKeys": "COMMLOGID",
            "targetKeys": "UNIQUEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Communication Logs",
            "longDescription": null
        },
        {
            "objectName": "EMAIL",
            "targetObject": "ESCCOMMLOG",
            "parentKeys": "EMAILADDRESS",
            "targetKeys": "REPLYTO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Reply to Email Address",
            "longDescription": null
        },
        {
            "objectName": "EMAIL",
            "targetObject": "ESCCOMMLOG",
            "parentKeys": "EMAILADDRESS",
            "targetKeys": "SENDFROM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Send From Email Address",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "ESCCOMMLOG",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "ORGOBJECT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Originating Object",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "ESCCOMMLOG",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OWNERTABLE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Owning Object",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "ESCCOMMLOG",
            "parentKeys": "PERSONID",
            "targetKeys": "CREATEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who created the record.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "COMMLOGID",
            "required": true,
            "persistent": true,
            "title": "Communication ID",
            "remarks": "Communication Log Identifier",
            "sameAsAttribute": "COMMLOGID",
            "sameAsObject": "COMMLOG",
            "viewColumnName": "COMMLOGID",
            "tableName": "COMMLOG",
            "tableColumnName": "COMMLOGID"
        },
        {
            "attributeName": "SENDTO",
            "required": true,
            "persistent": true,
            "title": "To",
            "remarks": "Single/multiple Recipient of the Communication",
            "sameAsAttribute": "SENDTO",
            "sameAsObject": "COMMLOG",
            "viewColumnName": "SENDTO",
            "tableName": "COMMLOG",
            "tableColumnName": "SENDTO"
        },
        {
            "attributeName": "SENDFROM",
            "required": true,
            "persistent": true,
            "title": "Send From",
            "remarks": "From address of the Communication",
            "sameAsAttribute": "EMAILADDRESS",
            "sameAsObject": "EMAIL",
            "viewColumnName": "SENDFROM",
            "tableName": "COMMLOG",
            "tableColumnName": "SENDFROM"
        },
        {
            "attributeName": "SUBJECT",
            "required": false,
            "persistent": true,
            "title": "Subject",
            "remarks": "Subject of the communication",
            "sameAsAttribute": "SUBJECT",
            "sameAsObject": "COMMLOG",
            "viewColumnName": "SUBJECT",
            "tableName": "COMMLOG",
            "tableColumnName": "SUBJECT"
        },
        {
            "attributeName": "CREATEBY",
            "required": true,
            "persistent": true,
            "title": "Created By",
            "remarks": "Creator of the Communication Log",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON",
            "viewColumnName": "CREATEBY",
            "tableName": "COMMLOG",
            "tableColumnName": "CREATEBY"
        },
        {
            "attributeName": "CREATEDATE",
            "required": true,
            "persistent": true,
            "title": "Date",
            "remarks": "Creation Date",
            "sameAsAttribute": "CREATEDATE",
            "sameAsObject": "COMMLOG",
            "viewColumnName": "CREATEDATE",
            "tableName": "COMMLOG",
            "tableColumnName": "CREATEDATE"
        },
        {
            "attributeName": "OWNERID",
            "required": true,
            "persistent": true,
            "title": "Owner ID",
            "remarks": "Unique id of owner record",
            "sameAsAttribute": "OWNERID",
            "sameAsObject": "COMMLOG",
            "viewColumnName": "OWNERID",
            "tableName": "COMMLOG",
            "tableColumnName": "OWNERID"
        },
        {
            "attributeName": "OWNERTABLE",
            "required": true,
            "persistent": true,
            "title": "Owner Table",
            "remarks": "Table name of the owner record",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT",
            "viewColumnName": "OWNERTABLE",
            "tableName": "COMMLOG",
            "tableColumnName": "OWNERTABLE"
        },
        {
            "attributeName": "CC",
            "required": false,
            "persistent": true,
            "title": "cc",
            "remarks": "cc'ed recipient of communication.",
            "sameAsAttribute": "CC",
            "sameAsObject": "COMMLOG",
            "viewColumnName": "CC",
            "tableName": "COMMLOG",
            "tableColumnName": "CC"
        },
        {
            "attributeName": "BCC",
            "required": false,
            "persistent": true,
            "title": "bcc",
            "remarks": "bcc'ed recipients of communication.",
            "sameAsAttribute": "BCC",
            "sameAsObject": "COMMLOG",
            "viewColumnName": "BCC",
            "tableName": "COMMLOG",
            "tableColumnName": "BCC"
        },
        {
            "attributeName": "REPLYTO",
            "required": false,
            "persistent": true,
            "title": "Reply To",
            "remarks": "Reply to email address",
            "sameAsAttribute": "EMAILADDRESS",
            "sameAsObject": "EMAIL",
            "viewColumnName": "REPLYTO",
            "tableName": "COMMLOG",
            "tableColumnName": "REPLYTO"
        },
        {
            "attributeName": "INBOUND",
            "required": true,
            "persistent": true,
            "title": "Inbound",
            "remarks": "Is communication inbound or outbound?",
            "sameAsAttribute": "INBOUND",
            "sameAsObject": "COMMLOG",
            "viewColumnName": "INBOUND",
            "tableName": "COMMLOG",
            "tableColumnName": "INBOUND"
        },
        {
            "attributeName": "TEMPLATEID",
            "required": false,
            "persistent": false,
            "title": "Template",
            "remarks": "Template Id",
            "sameAsAttribute": "TEMPLATEID",
            "sameAsObject": "COMMTEMPLATE"
        },
        {
            "attributeName": "COMMLOGUID",
            "required": true,
            "persistent": true,
            "title": "COMMLOGUID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": "COMMLOGUID",
            "sameAsObject": "COMMLOG",
            "viewColumnName": "COMMLOGUID",
            "tableName": "COMMLOG",
            "tableColumnName": "COMMLOGUID"
        },
        {
            "attributeName": "MESSAGE",
            "required": false,
            "persistent": true,
            "title": "Message",
            "remarks": "Message body for Commlog",
            "sameAsAttribute": "MESSAGE",
            "sameAsObject": "COMMLOG",
            "viewColumnName": "MESSAGE",
            "tableName": "COMMLOG",
            "tableColumnName": "MESSAGE"
        },
        {
            "attributeName": "ORGOBJECT",
            "required": false,
            "persistent": true,
            "title": "Owner Table",
            "remarks": "Application that is generating the communication",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT",
            "viewColumnName": "ORGOBJECT",
            "tableName": "COMMLOG",
            "tableColumnName": "ORGOBJECT"
        },
        {
            "attributeName": "UNIQUEID",
            "required": false,
            "persistent": true,
            "title": "Unique ID",
            "remarks": "UID of the originating objec",
            "sameAsAttribute": "UNIQUEID",
            "sameAsObject": "COMMLOG",
            "viewColumnName": "UNIQUEID",
            "tableName": "COMMLOG",
            "tableColumnName": "UNIQUEID"
        },
        {
            "attributeName": "ORGNAME",
            "required": false,
            "persistent": false,
            "title": "ID",
            "remarks": "Name of original escalation or workflow process",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORIGOBJID",
            "required": false,
            "persistent": false,
            "title": "Id",
            "remarks": "NP Attr. to display the objectid",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGAPP",
            "required": false,
            "persistent": false,
            "title": "Originating application",
            "remarks": "The application that is to be considered this log originator. This can be different from the ORGOBJECT field.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "ISSENDFAIL",
            "required": true,
            "persistent": true,
            "title": "Send Failed",
            "remarks": "Flag to track emails that failed",
            "sameAsAttribute": "ISSENDFAIL",
            "sameAsObject": "COMMLOG",
            "viewColumnName": "ISSENDFAIL",
            "tableName": "COMMLOG",
            "tableColumnName": "ISSENDFAIL"
        },
        {
            "attributeName": "KEEPFAILED",
            "required": true,
            "persistent": true,
            "title": "Keep Failed Message",
            "remarks": "Should failed message be deleted",
            "sameAsAttribute": "KEEPFAILED",
            "sameAsObject": "COMMLOG",
            "viewColumnName": "KEEPFAILED",
            "tableName": "COMMLOG",
            "tableColumnName": "KEEPFAILED"
        }
    ],
    "viewinfo": {
        "autosect": true,
        "viewwhere": "orgobject = 'ESCALATION'"
    },
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "COMMLOG",
            "source": "ESCALATION",
            "remarks": "Relationship for commlog",
            "whereClause": "uniqueid in (select escalationid from escalation where  escalation=:escalation) and (ownertable=:objectname or (ownertable in (select value from synonymdomain where domainid in ('TKCLASS', 'WOCLASS') and maxvalue=:objectname)))",
            "cardinality": "UNDEFINED"
        }
    ]
}