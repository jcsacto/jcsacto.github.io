mos = {
    "objectName": "INBOUNDCOMM",
    "className": "psdi.common.emailstner.InboundCommSet",
    "description": "Contains attributes to define an EMail message",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "INBOUNDCOMMID",
    "primaryKeyColumns": [
        "INBOUNDCOMMID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXOBJECT",
            "targetObject": "INBOUNDCOMM",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "INBOUNDCOMM",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "INBOUNDCOMM",
            "parentKeys": "PERSONID",
            "targetKeys": "PERSONID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person Sending Email",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "INBOUNDCOMMID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CC",
            "required": false,
            "persistent": true,
            "title": "cc",
            "remarks": "Email is cc to",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BCC",
            "required": false,
            "persistent": true,
            "title": "bcc",
            "remarks": "Email is bcc to",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SUBJECT",
            "required": false,
            "persistent": true,
            "title": "Subject",
            "remarks": "Email subject",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PRIORITY",
            "required": false,
            "persistent": true,
            "title": "Priority",
            "remarks": "Email priority",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OBJECTKEY",
            "required": false,
            "persistent": true,
            "title": "Objectkey",
            "remarks": "Object Key",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RECEIVEDATE",
            "required": false,
            "persistent": true,
            "title": "Received Date",
            "remarks": "Receive Date of Email",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SENDDATE",
            "required": false,
            "persistent": true,
            "title": "Send Date",
            "remarks": "Sending Date of EMail",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CREATEDATE",
            "required": true,
            "persistent": true,
            "title": "Created Date",
            "remarks": "Creation Date of EMail",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "Change Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEBY",
            "required": true,
            "persistent": true,
            "title": "Changed By",
            "remarks": "Change By",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "STATUS",
            "required": true,
            "persistent": true,
            "title": "Status",
            "remarks": "Email Status",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EMAILADDRESS",
            "required": true,
            "persistent": true,
            "title": "E-mail Address",
            "remarks": "Email Address",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAILSERVER",
            "required": true,
            "persistent": true,
            "title": "Mail Server",
            "remarks": "Mail Server Name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SENDFROM",
            "required": true,
            "persistent": true,
            "title": "Send From",
            "remarks": "From Column",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SENDTO",
            "required": true,
            "persistent": true,
            "title": "Send To",
            "remarks": "To Column",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUSDATE",
            "required": true,
            "persistent": true,
            "title": "Status Date",
            "remarks": "Status Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REPLYTO",
            "required": false,
            "persistent": true,
            "title": "Reply To",
            "remarks": "Reply To",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAILID",
            "required": false,
            "persistent": true,
            "title": "Mail ID",
            "remarks": "Mail unique id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MSGBODY",
            "required": false,
            "persistent": true,
            "title": "Message Body",
            "remarks": "Email Message Body",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OBJECTNAME",
            "required": false,
            "persistent": true,
            "title": "Object Name",
            "remarks": "Business object specified in the email",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "ACTION",
            "required": false,
            "persistent": true,
            "title": "Action",
            "remarks": "Action specified in the email",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ERROR",
            "required": false,
            "persistent": true,
            "title": "Error",
            "remarks": "Error column to store error information",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PERSONID",
            "required": true,
            "persistent": true,
            "title": "Person Identifier",
            "remarks": "Identfies the person sending email",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "COMMLOG",
            "target": "COMMLOG",
            "remarks": "Relationship to the COMMLOG table used to get all communication log entries for a inboundcomm",
            "whereClause": "ownerid=:inboundcommid and ownertable='INBOUNDCOMM'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "target": "DOCLINKS",
            "remarks": "doclinks for inboundcomm",
            "whereClause": "ownertable = 'INBOUNDCOMM' and ownerid = :inboundcommid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INBCOMMSEC",
            "target": "INBCOMMSECURITY",
            "remarks": "all security records for objectname in staging table",
            "whereClause": "emailaddress= :emailaddress and mailserver =:mailserver",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LSNRCFG",
            "target": "INBOUNDCOMMCFG",
            "remarks": "inboundcommcfg record for inboundcomm",
            "whereClause": "emailaddress = :emailaddress and mailserver = :mailserver",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LSNRBPIN",
            "target": "INCIDENT",
            "remarks": "all incident records for inboundcomm",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LSNRBPUPDIN",
            "target": "INCIDENT",
            "remarks": "all Incident records for the person for inboundcomm",
            "whereClause": "reportedby=:personid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LSNRBPUPDPR",
            "target": "PROBLEM",
            "remarks": "all Problem records for the person for inboundcomm",
            "whereClause": "reportedby=:personid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LSNRBPPR",
            "target": "PROBLEM",
            "remarks": "all problem records for inboundcomm",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LSNRBPSR",
            "target": "SR",
            "remarks": "all sr records for inboundcomm",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LSNRBPUPDSR",
            "target": "SR",
            "remarks": "all sr records for the person for inboundcomm",
            "whereClause": "reportedby=:personid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LSNRSR",
            "target": "SR",
            "remarks": "SR for the inboundcomm objectkey",
            "whereClause": "ticketid = :objectkey",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LSNRBPFUSR",
            "target": "SR",
            "remarks": "sr record for inboundcomm",
            "whereClause": "ticketid = :objectkey",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "EMAILSR",
            "target": "SR",
            "remarks": "SR for inboundcomm",
            "whereClause": "reportedemail =:sendfrom",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "INBOUNDCOMM",
            "source": "INBOUNDCOMMCFG",
            "remarks": "inboundcomm resord for inboundcommcfg",
            "whereClause": "emailaddress = :emailaddress and mailserver = :mailserver",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PURGEINB",
            "source": "INBOUNDCOMMCFG",
            "remarks": "all inboundcomm records with status not in NEW,INPROCESS or WORKFLOW",
            "whereClause": "emailaddress = :emailaddress and mailserver = :mailserver and status not in (select value from synonymdomain where domainid='EMAILSTATUS' and maxvalue in ('NEW','INPROCESS','WORKFLOW'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LSNRDELETE",
            "source": "INBOUNDCOMMCFG",
            "remarks": "active inboundcomm records for inboundcommcfg",
            "whereClause": "emailaddress = :emailaddress and mailserver = :mailserver and status not in (select value from synonymdomain where domainid='EMAILSTATUS' and maxvalue in ('INVALID','COMPLETE','ERROR'))",
            "cardinality": "UNDEFINED"
        }
    ]
}