mos = {
    "objectName": "EMAIL",
    "className": "psdi.app.person.EmailSet",
    "description": "The Email Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "EMAILID",
    "primaryKeyColumns": [
        "EMAILADDRESS"
    ],
    "logicalRelationships": [
        {
            "objectName": "EMAIL",
            "targetObject": "AUTOSCRIPT",
            "parentKeys": "EMAILADDRESS",
            "targetKeys": "CREATEDBYEMAIL",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Created By Email Address",
            "longDescription": null
        },
        {
            "objectName": "EMAIL",
            "targetObject": "AUTOSCRIPT",
            "parentKeys": "EMAILADDRESS",
            "targetKeys": "OWNEREMAIL",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Owner Email Address",
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
            "objectName": "EMAIL",
            "targetObject": "COMMTEMPLATE",
            "parentKeys": "EMAILADDRESS",
            "targetKeys": "REPLYTO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Email address to reply to.",
            "longDescription": null
        },
        {
            "objectName": "EMAIL",
            "targetObject": "COMMTEMPLATE",
            "parentKeys": "EMAILADDRESS",
            "targetKeys": "SENDFROM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Email address to use as the sender.",
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
            "objectName": "EMAIL",
            "targetObject": "INCIDENT",
            "parentKeys": "EMAILADDRESS",
            "targetKeys": "AFFECTEDEMAIL",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 9",
            "longDescription": null
        },
        {
            "objectName": "EMAIL",
            "targetObject": "INCIDENT",
            "parentKeys": "EMAILADDRESS",
            "targetKeys": "REPORTEDEMAIL",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 10",
            "longDescription": null
        },
        {
            "objectName": "EMAIL",
            "targetObject": "PROBLEM",
            "parentKeys": "EMAILADDRESS",
            "targetKeys": "AFFECTEDEMAIL",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 11",
            "longDescription": null
        },
        {
            "objectName": "EMAIL",
            "targetObject": "PROBLEM",
            "parentKeys": "EMAILADDRESS",
            "targetKeys": "REPORTEDEMAIL",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 12",
            "longDescription": null
        },
        {
            "objectName": "EMAIL",
            "targetObject": "REPORTOUTPUT",
            "parentKeys": "EMAILADDRESS",
            "targetKeys": "EMAILADDRESS",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Email address of the initiating user.",
            "longDescription": null
        },
        {
            "objectName": "EMAIL",
            "targetObject": "REPORTOUTPUTAUTH",
            "parentKeys": "EMAILADDRESS",
            "targetKeys": "EMAILADDRESS",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Email address of the authorized user.",
            "longDescription": null
        },
        {
            "objectName": "EMAIL",
            "targetObject": "SKDPROJECTEMWO",
            "parentKeys": "EMAILADDRESS",
            "targetKeys": "TOEMAILADDR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Email where to send Emergency Work Notifications",
            "longDescription": null
        },
        {
            "objectName": "EMAIL",
            "targetObject": "SKDPROJECTSCENARIO",
            "parentKeys": "EMAILADDRESS",
            "targetKeys": "TOEMAILADDR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Where to email process notifications",
            "longDescription": null
        },
        {
            "objectName": "EMAIL",
            "targetObject": "SR",
            "parentKeys": "EMAILADDRESS",
            "targetKeys": "AFFECTEDEMAIL",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 15",
            "longDescription": null
        },
        {
            "objectName": "EMAIL",
            "targetObject": "SR",
            "parentKeys": "EMAILADDRESS",
            "targetKeys": "REPORTEDEMAIL",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 16",
            "longDescription": null
        },
        {
            "objectName": "EMAIL",
            "targetObject": "TICKET",
            "parentKeys": "EMAILADDRESS",
            "targetKeys": "AFFECTEDEMAIL",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Email address of the affected.",
            "longDescription": null
        },
        {
            "objectName": "EMAIL",
            "targetObject": "TICKET",
            "parentKeys": "EMAILADDRESS",
            "targetKeys": "REPORTEDEMAIL",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Email address reporting the ticket",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "PERSON",
            "targetObject": "EMAIL",
            "parentKeys": "PERSONID",
            "targetKeys": "PERSONID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Email Addresses",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "EMAILID",
            "required": true,
            "persistent": true,
            "title": "E-mail ID",
            "remarks": "Email ID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PERSONID",
            "required": true,
            "persistent": true,
            "title": "Person",
            "remarks": "Person",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "EMAILADDRESS",
            "required": true,
            "persistent": true,
            "title": "E-mail",
            "remarks": "The primary email address used to contact this person. To display all email addresses of this person, click the icon to display the Emails table window. The primary emial address may not be deleted unless it is the only email address.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TYPE",
            "required": false,
            "persistent": true,
            "title": "Type",
            "remarks": "The type of email address used to contact this person.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISPRIMARY",
            "required": true,
            "persistent": true,
            "title": "Primary ",
            "remarks": "Indicates that this is the primary email address that is used to contact this person. Only one email address can be set to primary; by default, the first email address entered is set to primary.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SENDTO",
            "required": true,
            "persistent": false,
            "title": "To",
            "remarks": "Recipient type is TO.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CC",
            "required": true,
            "persistent": false,
            "title": "cc",
            "remarks": "Recipient type is cc.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BCC",
            "required": true,
            "persistent": false,
            "title": "bcc",
            "remarks": "Recipient type is BCC.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "PERSON",
            "target": "PERSON",
            "remarks": "Relationship from EMAIL to the PERSON table.",
            "whereClause": "personid=:personid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "COMMLOG_EMAIL",
            "source": "COMMLOG",
            "remarks": "Relationship to get EMAIL set.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "EMAIL",
            "source": "LABOR",
            "remarks": "Relationship to the EMAIL table.  (email.personid=labor.personid.)  The resulting set will contain one or more objects.",
            "whereClause": "personid=:personid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "EMAIL",
            "source": "MAXLICUSAGE",
            "remarks": "Relationship from MAXLICUSAGE to EMAIL table.",
            "whereClause": "personid=(select personid from maxuser where userid=:userid) and isprimary=1",
            "cardinality": null
        },
        {
            "name": "EMAIL",
            "source": "MAXUSER",
            "remarks": "MaxUser to Email, by PersonID",
            "whereClause": "personid = :personid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "EMAIL",
            "source": "PERSON",
            "remarks": "Relationship to the email table. Used to find all the email records of this person. (email.personid=person.personid). The resulting set will be zero or more records.",
            "whereClause": "personid=:personid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "PRIMARYEMAIL",
            "source": "PERSON",
            "remarks": "Relationship to the email table where personid=personid and isprimary=Y.  (person.personid=email.personid AND email.isprimary=Y.)  This will return 1 object.",
            "whereClause": "personid=:personid and  isprimary=:yes",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "EMAIL",
            "source": "REPORTPARAMETER",
            "remarks": "Relationship from the Report Request Page to EMAIL table to support the email lookup",
            "whereClause": "emailaddress is NOT NULL and personid in (select personid from maxuser where status in (select value from synonymdomain where domainid='MAXUSERSTATUS' and maxvalue='ACTIVE'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "EMAIL",
            "source": "REPORTSCHED",
            "remarks": "Relationship from the Report Scheduling Status tab and View Scheduled Reports action dialog to EMAIL table to support the email lookup",
            "whereClause": "emailaddress is NOT NULL and personid in (select personid from maxuser where status in (select value from synonymdomain where domainid='MAXUSERSTATUS' and maxvalue='ACTIVE'))",
            "cardinality": "UNDEFINED"
        }
    ]
}