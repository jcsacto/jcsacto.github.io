mos = {
    "objectName": "COMMLOG",
    "className": "psdi.common.commlog.CommLogSet",
    "description": "The Communication Log Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "COMMLOGUID",
    "primaryKeyColumns": [
        "COMMLOGID"
    ],
    "logicalRelationships": [
        {
            "objectName": "COMMLOG",
            "targetObject": "COMMLOG",
            "parentKeys": "COMMLOGID",
            "targetKeys": "UNIQUEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 1",
            "longDescription": null
        },
        {
            "objectName": "COMMLOG",
            "targetObject": "COMMLOGDOCS",
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
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "COMMLOG",
            "targetObject": "COMMLOG",
            "parentKeys": "COMMLOGID",
            "targetKeys": "UNIQUEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 1",
            "longDescription": null
        },
        {
            "objectName": "EMAIL",
            "targetObject": "COMMLOG",
            "parentKeys": "EMAILADDRESS",
            "targetKeys": "REPLYTO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Reply To Email Address",
            "longDescription": null
        },
        {
            "objectName": "EMAIL",
            "targetObject": "COMMLOG",
            "parentKeys": "EMAILADDRESS",
            "targetKeys": "SENDFROM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Send From Email Address",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "COMMLOG",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "ORGOBJECT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Originating Object",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "COMMLOG",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OWNERTABLE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Owning Object",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "COMMLOG",
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
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SENDTO",
            "required": false,
            "persistent": true,
            "title": "To",
            "remarks": "Single/multiple Recipient of the Communication",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SENDFROM",
            "required": true,
            "persistent": true,
            "title": "Send From",
            "remarks": "From address of the Communication",
            "sameAsAttribute": "EMAILADDRESS",
            "sameAsObject": "EMAIL"
        },
        {
            "attributeName": "SUBJECT",
            "required": false,
            "persistent": true,
            "title": "Subject",
            "remarks": "Subject of the communication",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CREATEBY",
            "required": true,
            "persistent": true,
            "title": "Created By",
            "remarks": "Creator of the Communication Log",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CREATEDATE",
            "required": true,
            "persistent": true,
            "title": "Date",
            "remarks": "Creation Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OWNERID",
            "required": true,
            "persistent": true,
            "title": "Owner ID",
            "remarks": "Unique id of owner record",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OWNERTABLE",
            "required": true,
            "persistent": true,
            "title": "Owner Table",
            "remarks": "Table name of the owner record",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "CC",
            "required": false,
            "persistent": true,
            "title": "cc",
            "remarks": "cc'ed recipient of communication.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BCC",
            "required": false,
            "persistent": true,
            "title": "bcc",
            "remarks": "bcc'ed recipients of communication.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REPLYTO",
            "required": false,
            "persistent": true,
            "title": "Reply To",
            "remarks": "Reply to email address",
            "sameAsAttribute": "EMAILADDRESS",
            "sameAsObject": "EMAIL"
        },
        {
            "attributeName": "INBOUND",
            "required": true,
            "persistent": true,
            "title": "Inbound",
            "remarks": "Is communication inbound or outbound?",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MESSAGE",
            "required": false,
            "persistent": true,
            "title": "Message",
            "remarks": "Message body for Commlog",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGOBJECT",
            "required": false,
            "persistent": true,
            "title": "Originating Object",
            "remarks": "Application that is generating the communication",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "UNIQUEID",
            "required": false,
            "persistent": true,
            "title": "Unique ID",
            "remarks": "UID of the originating objec",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "KEEPFAILED",
            "required": true,
            "persistent": true,
            "title": "Keep Failed Message",
            "remarks": "Should failed message be deleted",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "COMMLOGDOCS",
            "target": "COMMLOGDOCS",
            "remarks": "Relationship to get attached documents of a commLog record.",
            "whereClause": "commlogid=:commlogid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "target": "DOCLINKS",
            "remarks": " Relationship to the Doclink table, used to find all document records for a given COMMLOG.",
            "whereClause": "ownertable = 'COMMLOG' and ownerid = :commloguid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LSNRCOMMDOC",
            "target": "DOCLINKS",
            "remarks": "doclinks for commlog",
            "whereClause": "ownertable = 'COMMLOG' and ownerid = :commloguid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMLOG_EMAIL",
            "target": "EMAIL",
            "remarks": "Relationship to get EMAIL set.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ESCALATION",
            "target": "ESCALATION",
            "remarks": "Relationship to get the original escalation",
            "whereClause": "escalationid=:uniqueid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMLOG_ROLE",
            "target": "MAXROLE",
            "remarks": "Relationship to get maxrole set.",
            "whereClause": "(objectname='WOCHANGE' and :ownertable='CHANGE') or (objectname='WOACTIVITY' and :ownertable='ACTIVITY') or (objectname='WORELEASE' and :ownertable='RELEASE') or objectname=:ownertable or objectname is null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMLOG_PERSONGROUP",
            "target": "PERSONGROUP",
            "remarks": "Relationship to get PERSONGROUP set.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TICKET",
            "target": "TICKET",
            "remarks": "use for ticket record",
            "whereClause": "ticketuid=:ownerid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFPROCESS",
            "target": "WFPROCESS",
            "remarks": "Relationship to get the original workflow process",
            "whereClause": "wfprocessid=:uniqueid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKORDER",
            "target": "WORKORDER",
            "remarks": "Relationship to get WO",
            "whereClause": "workorderid=:ownerid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "COMMLOG",
            "source": "BULLETINBOARD",
            "remarks": "Relationship to the COMMLOG table used to get all communication log entries for a bulletin board.",
            "whereClause": "ownerid=:bulletinboarduid and ownertable='BULLETINBOARD'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMLOG",
            "source": "COMMTEMPLATE",
            "remarks": "Relationship for commlog",
            "whereClause": "ownerid=:commtemplateid and ownertable=:objectname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMLOG",
            "source": "DMPACKAGEDEF",
            "remarks": "Relationship to get communication logs.",
            "whereClause": "ownerid=:dmpackagedefid and ownertable='DMPACAKAGEDEF'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMLOG",
            "source": "INBOUNDCOMM",
            "remarks": "Relationship to the COMMLOG table used to get all communication log entries for a inboundcomm",
            "whereClause": "ownerid=:inboundcommid and ownertable='INBOUNDCOMM'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMLOG",
            "source": "INBOUNDCOMMCFG",
            "remarks": "Relationship to the COMMLOG table used to get all communication log entries for a inboundcommcfg",
            "whereClause": "ownerid=:inboundcommcfgid and ownertable='INBOUNDCOMMCFG'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMLOG",
            "source": "KPIMAIN",
            "remarks": "Relationship to the COMMLOG table used to get all communication log entries for a kpi",
            "whereClause": "ownerid=:kpimainid and ownertable='KPIMAIN'",
            "cardinality": null
        },
        {
            "name": "COMMLOG",
            "source": "PO",
            "remarks": "Relationship to the commlog records, used to find the worklog records for a given PO.",
            "whereClause": "ownerid=:poid and ownertable='PO'",
            "cardinality": null
        },
        {
            "name": "COMMLOG",
            "source": "PR",
            "remarks": "Relationship to the commlog records, used to find the worklog records for a given PR.",
            "whereClause": "ownerid=:prid and ownertable='PR'",
            "cardinality": null
        },
        {
            "name": "COMMLOG",
            "source": "TICKET",
            "remarks": "Relationship to get communication logs for a ticket.",
            "whereClause": "(ownerid=:ticketuid ) and ownertable in (select value from synonymdomain where domainid='TKCLASS')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMLOG",
            "source": "WORKORDER",
            "remarks": "Relationship to the COMMLOG table, used to get all communication log entries for a work order.",
            "whereClause": "exists (select 1 from workorder where workorderid = commlog.ownerid and woclass = commlog.ownertable and workorder.wogroup = :wogroup and workorder.siteid = :siteid )",
            "cardinality": "MULTIPLE"
        }
    ]
}