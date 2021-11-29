mos = {
    "objectName": "TICKET",
    "className": "psdi.app.ticket.TicketSet",
    "description": "The Ticket table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "TICKETUID",
    "primaryKeyColumns": [
        "CLASS",
        "TICKETID"
    ],
    "logicalRelationships": [
        {
            "objectName": "TICKET",
            "targetObject": "FAILUREREMARK",
            "parentKeys": "CLASS, TICKETID",
            "targetKeys": "TICKETCLASS, TICKETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Failure Remark linked to a ticket.",
            "longDescription": null
        },
        {
            "objectName": "TICKET",
            "targetObject": "FAILUREREPORT",
            "parentKeys": "CLASS, TICKETID",
            "targetKeys": "TICKETCLASS, TICKETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Failure Report attached to a ticket.",
            "longDescription": null
        },
        {
            "objectName": "TICKET",
            "targetObject": "INCIDENT",
            "parentKeys": "CLASS, TICKETID",
            "targetKeys": "CLASS, TICKETID",
            "relNum": "0 to 1",
            "status": "INVALIDATED",
            "description": "Incident Ticket Subclass",
            "longDescription": null
        },
        {
            "objectName": "TICKET",
            "targetObject": "LABTRANS",
            "parentKeys": "CLASS, TICKETID",
            "targetKeys": "TICKETCLASS, TICKETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Labor Transactions related to the Ticket",
            "longDescription": null
        },
        {
            "objectName": "TICKET",
            "targetObject": "PROBLEM",
            "parentKeys": "CLASS, TICKETID",
            "targetKeys": "CLASS, TICKETID",
            "relNum": "0 to 1",
            "status": "INVALIDATED",
            "description": "Problem Ticket Subclass",
            "longDescription": null
        },
        {
            "objectName": "TICKET",
            "targetObject": "SR",
            "parentKeys": "CLASS, TICKETID",
            "targetKeys": "CLASS, TICKETID",
            "relNum": "0 to 1",
            "status": "INVALIDATED",
            "description": "SR Ticket Subclass",
            "longDescription": null
        },
        {
            "objectName": "TICKET",
            "targetObject": "TICKET",
            "parentKeys": "ORIGRECORDID",
            "targetKeys": "TICKETID",
            "relNum": "0 to 1",
            "status": "VERIFIED",
            "description": "Originating Ticket",
            "longDescription": null
        },
        {
            "objectName": "TICKET",
            "targetObject": "TICKETSPEC",
            "parentKeys": "CLASS, TICKETID",
            "targetKeys": "CLASS, TICKETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Ticket Specifications",
            "longDescription": null
        },
        {
            "objectName": "TICKET",
            "targetObject": "TKOWNERHISTORY",
            "parentKeys": "CLASS, TICKETID",
            "targetKeys": "CLASS, TICKETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Ticket Ownership History",
            "longDescription": null
        },
        {
            "objectName": "TICKET",
            "targetObject": "TKSERVICEADDRESS",
            "parentKeys": "CLASS, TICKETID",
            "targetKeys": "CLASS, TICKETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Ticket",
            "longDescription": null
        },
        {
            "objectName": "TICKET",
            "targetObject": "WORKORDER",
            "parentKeys": "ORIGRECSITEID, ORIGRECORDID",
            "targetKeys": "SITEID, WONUM",
            "relNum": "0 to 1",
            "status": "VERIFIED",
            "description": "Originating Work Order",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "ACTCI",
            "targetObject": "TICKET",
            "parentKeys": "ACTCINUM",
            "targetKeys": "CINUM",
            "relNum": "0 to 1",
            "status": "VERIFIED",
            "description": "Actual CI for Ticket",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "TICKET",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "ASSETSITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset on Ticket",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "TICKET",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "ORIGRECSITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 152",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "TICKET",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset on Ticket",
            "longDescription": null
        },
        {
            "objectName": "CALENDAR",
            "targetObject": "TICKET",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "ASSETORGID, CALCCALENDAR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 31",
            "longDescription": null
        },
        {
            "objectName": "CALENDAR",
            "targetObject": "TICKET",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "CALCORGID, CALCCALENDAR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Calendar used for target calculations",
            "longDescription": null
        },
        {
            "objectName": "CALENDAR",
            "targetObject": "TICKET",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "ORGID, CALCCALENDAR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 33",
            "longDescription": null
        },
        {
            "objectName": "CALENDAR",
            "targetObject": "TICKET",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "ORIGRECORGID, CALCCALENDAR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 34",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "TICKET",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "0 to 1",
            "status": "VERIFIED",
            "description": "Ticket Class Structure",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "TICKET",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ASSETORGID, VENDOR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 82",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "TICKET",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "CALCORGID, VENDOR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 83",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "TICKET",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor for Ticket",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "TICKET",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORIGRECORGID, VENDOR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 85",
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
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "TICKET",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ASSETORGID, FAILURECODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Failure Hierarchy.",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "TICKET",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ASSETORGID, FR1CODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "2nd level of the failure hierarchy",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "TICKET",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ASSETORGID, FR2CODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "3rd level of the failure hierarchy",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "TICKET",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ASSETORGID, PROBLEMCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "1st levelof the failure hierarchy",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "TICKET",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "CALCORGID, FAILURECODE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 61",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "TICKET",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "CALCORGID, FR1CODE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 62",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "TICKET",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "CALCORGID, FR2CODE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 63",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "TICKET",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "CALCORGID, PROBLEMCODE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 64",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "TICKET",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORGID, FAILURECODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Failure Hierarchy.",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "TICKET",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORGID, FR1CODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "2nd level of the failure hierarchy",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "TICKET",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORGID, FR2CODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "3rd level of the failure hierarchy",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "TICKET",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORGID, PROBLEMCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "1st levelof the failure hierarchy",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "TICKET",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORIGRECORGID, FAILURECODE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 69",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "TICKET",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORIGRECORGID, FR1CODE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 70",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "TICKET",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORIGRECORGID, FR2CODE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 71",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "TICKET",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORIGRECORGID, PROBLEMCODE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 72",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "TICKET",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "TICKET",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "ASSETSITEID, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 195",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "TICKET",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "ORIGRECSITEID, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 196",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "TICKET",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location of the Ticket",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "TICKET",
            "parentKeys": "ORGID",
            "targetKeys": "ASSETORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization the Asset belongs to.",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "TICKET",
            "parentKeys": "ORGID",
            "targetKeys": "CALCORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization used for target calculations",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "TICKET",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "TICKET",
            "parentKeys": "ORGID",
            "targetKeys": "ORIGRECORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 311",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "TICKET",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "TICKET",
            "parentKeys": "PERSONID",
            "targetKeys": "OWNER",
            "relNum": "0 to 1",
            "status": "VERIFIED",
            "description": "Owner of Ticket",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "TICKET",
            "parentKeys": "PERSONID",
            "targetKeys": "SUPERVISOR",
            "relNum": "0 to 1",
            "status": "VERIFIED",
            "description": "Supervisor",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "TICKET",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "ASSIGNEDOWNERGROUP",
            "relNum": "0 to 1",
            "status": "VERIFIED",
            "description": "Assigned Owner Group",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "TICKET",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "OWNERGROUP",
            "relNum": "0 to 1",
            "status": "VERIFIED",
            "description": "Owner Group",
            "longDescription": null
        },
        {
            "objectName": "SHIFT",
            "targetObject": "TICKET",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "ASSETORGID, CALCSHIFT",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 29",
            "longDescription": null
        },
        {
            "objectName": "SHIFT",
            "targetObject": "TICKET",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "CALCORGID, CALCSHIFT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Shift used for target calculations",
            "longDescription": null
        },
        {
            "objectName": "SHIFT",
            "targetObject": "TICKET",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "ORGID, CALCSHIFT",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 31",
            "longDescription": null
        },
        {
            "objectName": "SHIFT",
            "targetObject": "TICKET",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "ORIGRECORGID, CALCSHIFT",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 32",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "TICKET",
            "parentKeys": "SITEID",
            "targetKeys": "ASSETSITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset''s site",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "TICKET",
            "parentKeys": "SITEID",
            "targetKeys": "ORIGRECSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 265",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "TICKET",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SOLUTION",
            "targetObject": "TICKET",
            "parentKeys": "SOLUTION",
            "targetKeys": "SOLUTION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 5",
            "longDescription": null
        },
        {
            "objectName": "TICKET",
            "targetObject": "TICKET",
            "parentKeys": "ORIGRECORDID",
            "targetKeys": "TICKETID",
            "relNum": "0 to 1",
            "status": "VERIFIED",
            "description": "Originating Ticket",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "TICKETID",
            "required": true,
            "persistent": true,
            "title": "Ticket",
            "remarks": "Identifies the ticket.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CLASS",
            "required": true,
            "persistent": true,
            "title": "Class",
            "remarks": "Class of the ticket. Default values are SR (service request), INCIDENT, and PROBLEM.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Description of the ticket. If you are editing a ticket, you can enter or view additional information by clicking the Long Description button.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUS",
            "required": true,
            "persistent": true,
            "title": "Status",
            "remarks": "Status of the ticket. Default statuses are NEW, QUEUED, PENDING, INPROG, RESOLVED, and CLOSED. See the Help for a Service Desk application for more information on statuses.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUSDATE",
            "required": true,
            "persistent": true,
            "title": "Status Date",
            "remarks": "Status DATETIME",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REPORTEDPRIORITY",
            "required": false,
            "persistent": true,
            "title": "Reported Priority",
            "remarks": "Priority of the Reported Ticket",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INTERNALPRIORITY",
            "required": false,
            "persistent": true,
            "title": "Internal Priority",
            "remarks": "Priority as determined by the Servoce Desk Agent",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IMPACT",
            "required": false,
            "persistent": true,
            "title": "Impact",
            "remarks": "The Business Impact/severity of the Ticket",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "URGENCY",
            "required": false,
            "persistent": true,
            "title": "Urgency",
            "remarks": "A reflection of the speed in which a Ticket should be resolved",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REPORTEDBY",
            "required": false,
            "persistent": true,
            "title": "Reported By",
            "remarks": "Identifies the person reporting the issue on the ticket.",
            "sameAsAttribute": "DISPLAYNAME",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "REPORTDATE",
            "required": false,
            "persistent": true,
            "title": "Reported Date",
            "remarks": "Date when the ticket was reported",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AFFECTEDPERSON",
            "required": false,
            "persistent": true,
            "title": "Person Affected",
            "remarks": "Person Affected",
            "sameAsAttribute": "DISPLAYNAME",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "AFFECTEDDATE",
            "required": false,
            "persistent": true,
            "title": "Problem Date",
            "remarks": "Time when user experiences issue",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SOURCE",
            "required": false,
            "persistent": true,
            "title": "Source",
            "remarks": "Source of Ticket Generation like email",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SUPERVISOR",
            "required": false,
            "persistent": true,
            "title": "Supervisor",
            "remarks": "Supervisor",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "OWNER",
            "required": false,
            "persistent": true,
            "title": "Owner",
            "remarks": "Identifies the owner for this ticket. The owner or owner group manages the ticket.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "OWNERGROUP",
            "required": false,
            "persistent": true,
            "title": "Owner Group",
            "remarks": "Identifies the owner group for this ticket. The owner or owner group manages the ticket.",
            "sameAsAttribute": "PERSONGROUP",
            "sameAsObject": "PERSONGROUP"
        },
        {
            "attributeName": "ISGLOBAL",
            "required": true,
            "persistent": true,
            "title": "Is Global Issue",
            "remarks": "Flag used to determine if a Ticket is a Global Issue",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RELATEDTOGLOBAL",
            "required": true,
            "persistent": true,
            "title": "Related to Global Issue",
            "remarks": "Flag used to determine if a Ticket is related to a global issue Ticket",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLOBALTICKETID",
            "required": false,
            "persistent": true,
            "title": "Global Ticket",
            "remarks": "Global Ticket ID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLOBALTICKETCLASS",
            "required": false,
            "persistent": true,
            "title": "Global Ticket Class",
            "remarks": "Class of the global ticket",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EXTERNALRECID",
            "required": false,
            "persistent": true,
            "title": "External Rec ID",
            "remarks": "Ticket ID for any Ticket external to MAXIMO",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SITEVISIT",
            "required": true,
            "persistent": true,
            "title": "Site Visit Required",
            "remarks": "Falg used to indicate of a Ticket requires an on-site visit for investigation",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORIGRECORDID",
            "required": false,
            "persistent": true,
            "title": "Originating Record",
            "remarks": "Ticket/WO ID that spawned or created one or more other tickets or work orders",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORIGRECORDCLASS",
            "required": false,
            "persistent": true,
            "title": "Orginal Record Class",
            "remarks": "Class of the original record",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLACCOUNT",
            "required": false,
            "persistent": true,
            "title": "GL Account",
            "remarks": "GL Account",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COMMODITYGROUP",
            "required": false,
            "persistent": true,
            "title": "Commodity Group",
            "remarks": "Service group for which you are viewing records.",
            "sameAsAttribute": "COMMODITY",
            "sameAsObject": "COMMODITIES"
        },
        {
            "attributeName": "COMMODITY",
            "required": false,
            "persistent": true,
            "title": "Commodity Code",
            "remarks": "Service for which you are viewing records.",
            "sameAsAttribute": "COMMODITY",
            "sameAsObject": "COMMODITIES"
        },
        {
            "attributeName": "INHERITSTATUS",
            "required": true,
            "persistent": true,
            "title": "Inherit Status Changes",
            "remarks": "Inherit status from follow up record",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISKNOWNERROR",
            "required": true,
            "persistent": true,
            "title": "Is Known Error",
            "remarks": "Specifies whether this ticket has been marked by a service desk agent as a known error.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TARGETSTART",
            "required": false,
            "persistent": true,
            "title": "Target Start",
            "remarks": "Target Start Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TARGETFINISH",
            "required": false,
            "persistent": true,
            "title": "Target Finish",
            "remarks": "Target Finish Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ACTUALSTART",
            "required": false,
            "persistent": true,
            "title": "Actual Start",
            "remarks": "Actual Start Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ACTUALFINISH",
            "required": false,
            "persistent": true,
            "title": "Actual Finish",
            "remarks": "Actual Finish Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORIGRECSITEID",
            "required": false,
            "persistent": true,
            "title": "Originating Record Site",
            "remarks": "Site Identifier of the originating Record",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ORIGRECORGID",
            "required": false,
            "persistent": true,
            "title": "Originating Record Oganization",
            "remarks": "Organization Identifier of the originating Record",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "Identifier of the site.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Identifier of the organization.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "Date on which Ticket changed",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEBY",
            "required": true,
            "persistent": true,
            "title": "Changed By",
            "remarks": "Person who modified or changed",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "HISTORYFLAG",
            "required": true,
            "persistent": true,
            "title": "History",
            "remarks": "Indicates whether this is a history record.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TEMPLATE",
            "required": true,
            "persistent": true,
            "title": "Template",
            "remarks": "Template",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HASACTIVITY",
            "required": true,
            "persistent": true,
            "title": "Has Activity",
            "remarks": "Does this ticket has any activity",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FAILURECODE",
            "required": false,
            "persistent": true,
            "title": "Failure Code",
            "remarks": "Indicates Top level of a Failure Hierarchy",
            "sameAsAttribute": "FAILURECODE",
            "sameAsObject": "FAILURECODE"
        },
        {
            "attributeName": "PROBLEMCODE",
            "required": false,
            "persistent": true,
            "title": "Problem Code",
            "remarks": "Reason for failure",
            "sameAsAttribute": "FAILURECODE",
            "sameAsObject": "FAILURECODE"
        },
        {
            "attributeName": "ACTLABHRS",
            "required": true,
            "persistent": true,
            "title": "Actual Labor Hours",
            "remarks": "Actual Labor Hours",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ACTLABCOST",
            "required": true,
            "persistent": true,
            "title": "Actual Labor Cost",
            "remarks": "Actual Labor Cost",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AFFECTEDPHONE",
            "required": false,
            "persistent": true,
            "title": "Affected Phone",
            "remarks": "Affted User's Phone",
            "sameAsAttribute": "PHONENUM",
            "sameAsObject": "PHONE"
        },
        {
            "attributeName": "REPORTEDPHONE",
            "required": false,
            "persistent": true,
            "title": "Reported Phone",
            "remarks": "Reported User's Phone",
            "sameAsAttribute": "PHONENUM",
            "sameAsObject": "PHONE"
        },
        {
            "attributeName": "AFFECTEDEMAIL",
            "required": false,
            "persistent": true,
            "title": "Affected E-mail",
            "remarks": "Affected User's Email",
            "sameAsAttribute": "EMAILADDRESS",
            "sameAsObject": "EMAIL"
        },
        {
            "attributeName": "REPORTEDEMAIL",
            "required": false,
            "persistent": true,
            "title": "Reported E-mail",
            "remarks": "Reported User's Email",
            "sameAsAttribute": "EMAILADDRESS",
            "sameAsObject": "EMAIL"
        },
        {
            "attributeName": "ASSETSITEID",
            "required": false,
            "persistent": true,
            "title": "Asset Site",
            "remarks": "Asset's Site",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "TEMPLATEID",
            "required": false,
            "persistent": true,
            "title": "Template",
            "remarks": "Template Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VENDOR",
            "required": false,
            "persistent": true,
            "title": "Vendor",
            "remarks": "Vendor code in companies table.",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Long description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REMARKDESC",
            "required": false,
            "persistent": false,
            "title": "Remark Description",
            "remarks": "Failure Remark Description",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "FAILUREREMARK"
        },
        {
            "attributeName": "REMARKENTERDATE",
            "required": false,
            "persistent": false,
            "title": "Remark Date",
            "remarks": "Remark enter date",
            "sameAsAttribute": "ENTERDATE",
            "sameAsObject": "FAILUREREMARK"
        },
        {
            "attributeName": "REMARKDESC_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Remark long description",
            "remarks": "Remark long  description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": true,
            "title": "Asset",
            "remarks": "Default assetnum",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": true,
            "title": "Location",
            "remarks": "Default Location",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "ORIGWOID",
            "required": false,
            "persistent": false,
            "title": "Originating WO",
            "remarks": "Originating WO ID",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "CLASSSTRUCTUREID",
            "required": false,
            "persistent": true,
            "title": "Class Structure",
            "remarks": "Class Structure Identifier",
            "sameAsAttribute": "CLASSSTRUCTUREID",
            "sameAsObject": "CLASSSTRUCTURE"
        },
        {
            "attributeName": "ISKNOWNERRORDATE",
            "required": false,
            "persistent": true,
            "title": "Is Known Error Date",
            "remarks": "Datetime when the error known",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TARGETCONTACTDATE",
            "required": false,
            "persistent": true,
            "title": "Target Contact",
            "remarks": "Target contact date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ACTUALCONTACTDATE",
            "required": false,
            "persistent": true,
            "title": "Actual Contact Date",
            "remarks": "Actual contact date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORIGTKID",
            "required": false,
            "persistent": false,
            "title": "Originating Ticket",
            "remarks": "non-persistent attribute that triggers copying of crossover attributes.",
            "sameAsAttribute": "TICKETID",
            "sameAsObject": "TICKET"
        },
        {
            "attributeName": "PROBLEMCODE_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Symptom",
            "remarks": "Symptom",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FR1CODE",
            "required": false,
            "persistent": true,
            "title": "Cause",
            "remarks": "Cause",
            "sameAsAttribute": "FAILURECODE",
            "sameAsObject": "FAILURECODE"
        },
        {
            "attributeName": "FR1CODE_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Cause",
            "remarks": "Cause long description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FR2CODE",
            "required": false,
            "persistent": true,
            "title": "Resolution",
            "remarks": "Resolution",
            "sameAsAttribute": "FAILURECODE",
            "sameAsObject": "FAILURECODE"
        },
        {
            "attributeName": "FR2CODE_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Resolution",
            "remarks": "Resolution long description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TICKETUID",
            "required": true,
            "persistent": true,
            "title": "TICKETUID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SOLUTION",
            "required": false,
            "persistent": true,
            "title": "Solution",
            "remarks": "Solution ID",
            "sameAsAttribute": "SOLUTION",
            "sameAsObject": "SOLUTION"
        },
        {
            "attributeName": "DUPFLAG",
            "required": false,
            "persistent": false,
            "title": "Duplicate Flag",
            "remarks": "Duplicate Flag",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSETUSER",
            "required": false,
            "persistent": false,
            "title": "User",
            "remarks": "User of the Asset",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "ASSETCUST",
            "required": false,
            "persistent": false,
            "title": "Custodian",
            "remarks": "Asset Custodian",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "ASSETORGID",
            "required": false,
            "persistent": true,
            "title": "Asset Organization",
            "remarks": "Organozation of the ticket asset",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "NP_STATUSMEMO",
            "required": false,
            "persistent": false,
            "title": "Change Status Memo",
            "remarks": "Status change memo, temporary non-persistent field used by MEA",
            "sameAsAttribute": "MEMO",
            "sameAsObject": "WFTRANSACTION"
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
            "attributeName": "ASSETFILTERBY",
            "required": true,
            "persistent": false,
            "title": "Filter By",
            "remarks": "Asset Filter By(all,user/custodia,public)",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SELECTSLAS_MODE",
            "required": false,
            "persistent": false,
            "title": "Select Mode",
            "remarks": "This field is for receiving the radio button values in the select slas dialog.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REPORTEDBYNAME",
            "required": false,
            "persistent": false,
            "title": "Name",
            "remarks": "Name of reported person",
            "sameAsAttribute": "DISPLAYNAME",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "REPORTEDBYID",
            "required": false,
            "persistent": false,
            "title": "Reported By",
            "remarks": "Personid of the reported person",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "AFFECTEDPERSONID",
            "required": false,
            "persistent": false,
            "title": "Affected Person",
            "remarks": "Id of the affected person",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "AFFECTEDUSERNAME",
            "required": false,
            "persistent": false,
            "title": "Name",
            "remarks": "Name of affected user",
            "sameAsAttribute": "DISPLAYNAME",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "SLAAPPLIED",
            "required": true,
            "persistent": false,
            "title": "SLA Applied",
            "remarks": "Has an SLA been applied to this Ticket?",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "FILTERDATE",
            "required": false,
            "persistent": false,
            "title": "Date",
            "remarks": "Date",
            "sameAsAttribute": "REPORTDATE",
            "sameAsObject": "TICKET"
        },
        {
            "attributeName": "STATUSIFACE",
            "required": true,
            "persistent": false,
            "title": "Has Status Changed",
            "remarks": "Non persistent boolean field to indicate whether the status has been changed after the stateful object is fetched from the database.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LOCTCKT",
            "required": false,
            "persistent": false,
            "title": "Ticket Location",
            "remarks": "Trigger field for cross over domain.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "ASSETTCKT",
            "required": false,
            "persistent": false,
            "title": "Ticket Asset",
            "remarks": "Trigger field for cross over domain.",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "CINUM",
            "required": false,
            "persistent": true,
            "title": "Configuration Item",
            "remarks": "CI Number",
            "sameAsAttribute": "ACTCINUM",
            "sameAsObject": "ACTCI"
        },
        {
            "attributeName": "CREATEWOMULTI",
            "required": false,
            "persistent": true,
            "title": "Create WO Options",
            "remarks": "Identifies what happens to Multi table entries on Tickets when follow-up Work Orders are created",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TCKTCI",
            "required": false,
            "persistent": false,
            "title": "Ticket CI",
            "remarks": "Trigger field for cross over domain.",
            "sameAsAttribute": "ACTCINUM",
            "sameAsObject": "ACTCI"
        },
        {
            "attributeName": "TARGETDESC",
            "required": false,
            "persistent": true,
            "title": "Target Description",
            "remarks": "Temporary target description for targeting CIs",
            "sameAsAttribute": "TARGETDESC",
            "sameAsObject": "MULTIASSETLOCCI"
        },
        {
            "attributeName": "TARGETDESC_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "TARGETDESC Long description",
            "remarks": "Long description for TARGETDESC",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FEATURE",
            "required": false,
            "persistent": false,
            "title": "Feature",
            "remarks": "An object that exists on or alongside a linear asset that is not a point asset (for example, milepost, guardrail)",
            "sameAsAttribute": "FEATURE",
            "sameAsObject": "FEATURES"
        },
        {
            "attributeName": "FEATURELABEL",
            "required": false,
            "persistent": false,
            "title": "Feature Label",
            "remarks": "Unique label used to differentiate features.",
            "sameAsAttribute": "LABEL",
            "sameAsObject": "ASSETFEATURE"
        },
        {
            "attributeName": "STARTFEATURELABEL",
            "required": false,
            "persistent": false,
            "title": "Reference Point",
            "remarks": "Unique label used to differentiate features.",
            "sameAsAttribute": "LABEL",
            "sameAsObject": "ASSETFEATURE"
        },
        {
            "attributeName": "ENDFEATURELABEL",
            "required": false,
            "persistent": false,
            "title": "Reference Point",
            "remarks": "Unique label used to differentiate features.",
            "sameAsAttribute": "LABEL",
            "sameAsObject": "ASSETFEATURE"
        },
        {
            "attributeName": "RELATEDGLOBALTICKETS",
            "required": false,
            "persistent": false,
            "title": "Related to Global tickets",
            "remarks": "Related to Global tickets",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SELFSERVSOLACCESS",
            "required": true,
            "persistent": true,
            "title": "Self-Service Access",
            "remarks": "Specifies whether the solution applied to this ticket is visible to the self-service user who opened the associated self-service Service Request. If the check box is selected, the self-service user can view this record. If the check box is cleared the solution record is not visible to the self-service user.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HASSOLUTION",
            "required": true,
            "persistent": true,
            "title": "Has Solution",
            "remarks": "Indicates whether this ticket has a solution or not. This can be either an adhoc one or a referenced solution.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSIGNEDOWNERGROUP",
            "required": false,
            "persistent": true,
            "title": "Assigned Owner Group",
            "remarks": "Assigned Owner Group of the ticket record. This group has overall responsibility for the solution. Use the Select Action menu to assign an owner group. You can enter a value either in this field or the Owner field.",
            "sameAsAttribute": "PERSONGROUP",
            "sameAsObject": "PERSONGROUP"
        },
        {
            "attributeName": "CALCORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization associated with the calculation calendar, and used with the Calendar and Shift fields to calculate the Target Contact, Target Response, and Target Resolution dates on a ticket or work order. Click the Detail Menu button to select an organization or go to the Organizations application to create one.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "CALCCALENDAR",
            "required": false,
            "persistent": true,
            "title": "Calendar",
            "remarks": "Business days and times used to calculate the Target Contact, Target Response, and Target Resolution dates on a ticket or work order. Click the Detail Menu to select a calendar or go to the Calendars application to create one.",
            "sameAsAttribute": "CALNUM",
            "sameAsObject": "CALENDAR"
        },
        {
            "attributeName": "CALCSHIFT",
            "required": false,
            "persistent": true,
            "title": "Shift",
            "remarks": "Along with the calculation calendar, sets the business hours that calculate the Target Contact, Target Response, and Target Resolution dates on a ticket or work order. Click the Select Value button to choose a shift.",
            "sameAsAttribute": "SHIFTNUM",
            "sameAsObject": "SHIFT"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ASSET",
            "target": "ASSET",
            "remarks": null,
            "whereClause": "assetnum=:assetnum and siteid=:assetsiteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LINEARASSET",
            "target": "ASSET",
            "remarks": "Relationship to the Asset table, used to find this Ticket's linear Asset. (ticket.assetnum=asset.assetnum and ticket.assetsiteid=asset.siteid). The resulting set will contain one object.",
            "whereClause": "assetnum=:assetnum and siteid=:assetsiteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETLOCCOMM",
            "target": "ASSETLOCCOMM",
            "remarks": null,
            "whereClause": "commodity=:commodity and assettype is null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETLOCCOMMGRPVIEW",
            "target": "ASSETLOCCOMM",
            "remarks": null,
            "whereClause": "commoditygroup=:commoditygroup and assettype is null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETTYPECOMM",
            "target": "ASSETLOCCOMM",
            "remarks": null,
            "whereClause": "commodity=:commodity and assettype is not null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETTYPECOMMGRPVIEW",
            "target": "ASSETLOCCOMM",
            "remarks": null,
            "whereClause": "commoditygroup=:commoditygroup and assettype is not null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CI",
            "target": "CI",
            "remarks": "relationship from Ticket to the CI table",
            "whereClause": "cinum=:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMCI",
            "target": "CI",
            "remarks": null,
            "whereClause": "service=:commodity",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMGRPCI",
            "target": "CI",
            "remarks": null,
            "whereClause": "servicegroup=:commoditygroup",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETCI",
            "target": "CI",
            "remarks": "CI record for the ticket",
            "whereClause": "assetnum=:assetnum and assetlocsiteid=:assetsiteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONCI",
            "target": "CI",
            "remarks": "CI record for the tickets location",
            "whereClause": "location=:location and assetlocsiteid=:assetsiteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VCICOLLECT",
            "target": "CI",
            "remarks": "Relationship to the CI table, used to find a CI record for a given ticket record. (CI.cinum = ticket.cinum). The resulting set will contain zero or one object.",
            "whereClause": "cinum = :cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCIRELHIS",
            "target": "CI",
            "remarks": "Relationship to the CI table, used to find a CI record for a given ticket record. (CI.cinum = ticket.cinum). The resulting set will contain zero or one object.",
            "whereClause": "cinum = :cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSANCESTOR",
            "target": "CLASSANCESTOR",
            "remarks": "Relationship to the classancestor table, used to find the ancestor records for a given classstructure. (ticket.classstructureid = classancestor.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSPEC",
            "target": "CLASSSPEC",
            "remarks": "Relationship to the ClassSpec table, used to find all class specification records for a given ticket (classspec.classstructureid = ticket.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSTRUCTURE",
            "target": "CLASSSTRUCTURE",
            "remarks": "Relationship to the classstructure table, used to find the classstructure for a given ticket record. (ticket.classstructureid = classstructure.classstructureid and  ticket.orgid = classstructure.orgid). The resulting set will contain zero or 1 object.",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMLOG",
            "target": "COMMLOG",
            "remarks": "Relationship to get communication logs for a ticket.",
            "whereClause": "(ownerid=:ticketuid ) and ownertable in (select value from synonymdomain where domainid='TKCLASS')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONFIRMLABTRANS",
            "target": "CONFIRMLABTRANS",
            "remarks": null,
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTCOMMODITY",
            "target": "CONTCOMMODITY",
            "remarks": null,
            "whereClause": "commodity=:commodity and contractnum in (select contractnum from contract where contract.contractnum=contcommodity.contractnum and contract.revisionnum=contcommodity.revisionnum and contract.status in (select value from synonymdomain where domainid='CONTRACTSTATUS' and maxvalue='APPR'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTCOMMODITYGRP",
            "target": "CONTCOMMODITY",
            "remarks": null,
            "whereClause": "((commodity=:commodity and contractnum not in (select contractnum from contcommodity where parent=:commodity)) or parent=:commodity) and contractnum in (select contractnum from contract where contract.contractnum=contcommodity.contractnum and contract.revisionnum=contcommodity.revisionnum and contract.status in (select value from synonymdomain where domainid='CONTRACTSTATUS' and maxvalue='APPR'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "target": "DRILLDOWN",
            "remarks": null,
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "FAILURE",
            "target": "FAILURECODE",
            "remarks": "Relationship to the failurecode table, used to find the failurecode  for the failurecode of the ticket. This resulting set will contain one object.",
            "whereClause": "failurecode=:failurecode and orgid=:assetorgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TKFAILLIST",
            "target": "FAILURELIST",
            "remarks": null,
            "whereClause": "parent in (select failurelist from failurelist where failurecode = :failurecode and parent is null) and orgid=:assetorgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "FAILUREREMARK",
            "target": "FAILUREREMARK",
            "remarks": null,
            "whereClause": "ticketid=:ticketid and ticketclass=:class",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "FAILUREREPORT",
            "target": "FAILUREREPORT",
            "remarks": null,
            "whereClause": "ticketid=:ticketid and ticketclass=:class",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NEWINCIDENT",
            "target": "INCIDENT",
            "remarks": "This relationship gets the last incident created by this ticket. (<long>) One member set.",
            "whereClause": "origrecordclass = :class and origrecordid = :ticketid and class in (select value from synonymdomain where domainid = 'TKCLASS' and maxvalue = 'INCIDENT') and reportdate = (select max(reportdate) from ticket where origrecordclass = :class and origrecordid = :ticketid and class in (select value from synonymdomain where domainid = 'TKCLASS' and maxvalue = 'INCIDENT'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABOR",
            "target": "LABOR",
            "remarks": null,
            "whereClause": "laborcode=:reportedby and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABTRANS",
            "target": "LABTRANS",
            "remarks": null,
            "whereClause": "labtransid in (((select labtransid from labtrans where ticketid=:ticketid and ticketclass=:class) union all select labtransid from labtrans where refwo in (select wonum from workorder where (origrecordid=:ticketid and origrecordclass=:class and woclass in (select value from synonymdomain where domainid='WOCLASS' and maxvalue='ACTIVITY')))))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ACTIVELABTRANS",
            "target": "LABTRANS",
            "remarks": null,
            "whereClause": "ticketid=:ticketid and ticketclass=:class and timerstatus in (select value from synonymdomain where domainid = 'TIMERSTATUS' and maxvalue = 'ACTIVE')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "UNAPPROVEDLABTRANS",
            "target": "LABTRANS",
            "remarks": "Relationship to the LabTrans table, used to find all unApproved labtrans for a ticket. This resulting set will contain zero or more objects.",
            "whereClause": "ticketid=:ticketid and ticketclass=:class and genapprservreceipt=0",
            "cardinality": null
        },
        {
            "name": "LOCATION",
            "target": "LOCATIONS",
            "remarks": null,
            "whereClause": "location=:location and siteid=:assetsiteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ALLMULTIASSETLOCCI",
            "target": "MULTIASSETLOCCI",
            "remarks": "all asset/loc/CI  records for the ticket",
            "whereClause": "recordkey=:ticketid and recordclass=:class",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LINEARRELATED",
            "target": "MULTIASSETLOCCI",
            "remarks": "A copy of TicketPrimaryAsset created especially for the LinearDetailsRelated include section in Library.xml.  It will return the primary AssetLocCI record for the Ticket : one or zero records.",
            "whereClause": "recordkey=:ticketid and recordclass=:class and isprimary=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MULTIASSETLOCCI",
            "target": "MULTIASSETLOCCI",
            "remarks": "all asset/loc/CI records for the ticket,except the primary one",
            "whereClause": "recordkey=:ticketid and recordclass=:class and isprimary=0",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TICKETPRIMARYASSET",
            "target": "MULTIASSETLOCCI",
            "remarks": "primary asset/loc/CI  record for the ticket",
            "whereClause": "recordkey=:ticketid and recordclass=:class and isprimary=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "OWNERPERSON",
            "target": "PERSON",
            "remarks": null,
            "whereClause": "personid=:owner",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSON",
            "target": "PERSON",
            "remarks": null,
            "whereClause": "personid=:reportedby",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "AFFECTEDPERSON",
            "target": "PERSON",
            "remarks": null,
            "whereClause": "personid=:affectedperson",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSONS",
            "target": "PERSONGROUPVIEW",
            "remarks": null,
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NEWPROBLEM",
            "target": "PROBLEM",
            "remarks": "This relationship gets the last problem created by this ticket. (<long>) One member set.",
            "whereClause": "origrecordclass = :class and origrecordid = :ticketid and class in (select value from synonymdomain where domainid = 'TKCLASS' and maxvalue = 'PROBLEM') and reportdate = (select max(reportdate) from ticket where origrecordclass = :class and origrecordid = :ticketid and class in (select value from synonymdomain where domainid = 'TKCLASS' and maxvalue = 'PROBLEM'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ONLYRELATEDRECORD",
            "target": "RELATEDRECORD",
            "remarks": "Relationship to the relatedrecord table, used to find all related relatedrecords. This result set will contain zero or more objects.",
            "whereClause": "recordkey=:ticketid and class=:class and relatetype in (select value from synonymdomain where domainid ='RELATETYPE' and maxvalue='RELATED')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATEDGLOBALREC",
            "target": "RELATEDRECORD",
            "remarks": null,
            "whereClause": "recordkey=:ticketid and class=:class and relatetype in (select value from synonymdomain where domainid ='RELATETYPE' and maxvalue in ('ISGLOBAL'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATEDORIGINATOR",
            "target": "RELATEDRECORD",
            "remarks": null,
            "whereClause": "recordkey=:ticketid and class=:class and relatetype in (select value from synonymdomain where domainid ='RELATETYPE' and maxvalue in ('ORIGINATOR'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATEDRECORD",
            "target": "RELATEDRECORD",
            "remarks": null,
            "whereClause": "recordkey=:ticketid and class=:class",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATEDSOLUTIONS",
            "target": "RELATEDRECORD",
            "remarks": "Return the solution applied to the SR related tickets. As SRs do not have a solution applied to them, this will not look for current ticket solution.",
            "whereClause": "recordkey=:ticketid and class =:class and relatedreckey in (select ticketid from ticket where hassolution=1)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATEDTICKET",
            "target": "RELATEDRECORD",
            "remarks": null,
            "whereClause": "recordkey=:ticketid and class =:class and relatedrecclass in (select value from synonymdomain where domainid ='TKCLASS' and maxvalue in ('SR', 'PROBLEM', 'INCIDENT'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATEDWO",
            "target": "RELATEDRECORD",
            "remarks": null,
            "whereClause": "recordkey=:ticketid and class =:class and relatedrecclass in (select value from synonymdomain where domainid ='WOCLASS' and maxvalue in ('CHANGE', 'RELEASE','ACTIVITY', 'WORKORDER'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SELFSERVRELATEDSOLUTIONS",
            "target": "RELATEDRECORD",
            "remarks": "Return the solution applied to the SR related tickets where the solution is available to the self-service users.",
            "whereClause": "recordkey=:ticketid and class =:class and relatedreckey in (select ticketid from ticket where selfservsolaccess=1)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMSLA",
            "target": "SLA",
            "remarks": null,
            "whereClause": "commodity=:commodity",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMSLAGRP",
            "target": "SLA",
            "remarks": null,
            "whereClause": "commoditygroup=:commoditygroup",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SLARECORDS",
            "target": "SLARECORDS",
            "remarks": "Relationship to the SLARECORDS, which leads to the SLAs applied to this ticket.",
            "whereClause": "ownertable = 'TICKET' and ownerid = :ticketuid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SOLUTION",
            "target": "SOLUTION",
            "remarks": "Relationship to the SOLUTION table, used to find all solutions in a status of active. (solution.status=ACTIVE). The resulting set will contain zero or more objects.",
            "whereClause": "status in (select value from synonymdomain where domainid='SOLUTIONSTATUS' and maxvalue in ('ACTIVE'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TKSOLUTION",
            "target": "SOLUTION",
            "remarks": "Relationship to the solotion table, used to find the solution. The resulting set will contain zero or one object",
            "whereClause": "SOLUTION=:SOLUTION",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NEWSR",
            "target": "SR",
            "remarks": "This relationship gets the last SR created by this ticket. (<long>) One member set.",
            "whereClause": "origrecordclass = :class and origrecordid = :ticketid and class in (select value from synonymdomain where domainid = 'TKCLASS' and maxvalue = 'SR') and reportdate = (select max(reportdate) from ticket where origrecordclass = :class and origrecordid = :ticketid and class in (select value from synonymdomain where domainid = 'TKCLASS' and maxvalue = 'SR'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SRVCOMMODRELREC",
            "target": "SRVCOMMODRELREC",
            "remarks": null,
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TICKET",
            "target": "TICKET",
            "remarks": null,
            "whereClause": "origrecordid=:ticketid and origrecordclass=:class",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NEWTICKET",
            "target": "TICKET",
            "remarks": "This relationship gets the last ticket created by this ticket. (origrecordclass = :class and origrecordid = :ticketid and reportdate = (select max(reportdate) from ticket where origrecordclass = :class and origrecordid = :ticketid)). One member set.",
            "whereClause": "origrecordclass = :class and origrecordid = :ticketid and reportdate = (select max(reportdate) from ticket where origrecordclass = :class and origrecordid = :ticketid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ORIGTICKET",
            "target": "TICKET",
            "remarks": null,
            "whereClause": "ticketid=:origrecordid and class=:origrecordclass",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIMILARTICKETS",
            "target": "TICKET",
            "remarks": "Relationship to Ticket table when the historyflag is no and the classstructureid is equal to other ticket classstructureids. The relationship will contain zero or more objects.",
            "whereClause": "historyflag=:no and classstructureid=:classstructureid and (ticketid != :ticketid or class!=:class) and not exists (select 1 from relatedrecord rec where rec.relatedreckey=ticket.ticketid and rec.relatedrecclass=ticket.class and recordkey=:ticketid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SELTICKET",
            "target": "TICKET",
            "remarks": "Relationship to the ticket table, used to find all tickets except itself. This result set will contain zero or more objects.",
            "whereClause": "ticketid!=:ticketid or class!=:class",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TKRELATEDTOGLOBAL",
            "target": "TICKET",
            "remarks": null,
            "whereClause": "globalticketid = :ticketid and globalticketclass=:class",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TKTQBE",
            "target": "TICKET",
            "remarks": "Relationship to the Ticket table, used to find the ticket records containing the classtructureid node. (Gets the classstructureid from classancestor where ancestor=classstructureid). This resulting set will contain zero or more objects.",
            "whereClause": "in (select classstructureid from classancestor where ancestor=:1)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWTKTAFF",
            "target": "TICKET",
            "remarks": "Relationship to the tickets table, used to find all tickets for the person specified in the Affected User field.  The resulting set will contain zero or many.",
            "whereClause": "affectedperson=:affectedperson",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWTKTREP",
            "target": "TICKET",
            "remarks": "Relationship to the tickets table, used to find all tickets for the person specified in the Reported By field.  The resulting set will contain zero or many.",
            "whereClause": "reportedby=:reportedby",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMTICKET",
            "target": "TICKET",
            "remarks": null,
            "whereClause": "commodity=:commodity",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMTICKETGRP",
            "target": "TICKET",
            "remarks": null,
            "whereClause": "commoditygroup=:commoditygroup",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "GLOBALTICKET",
            "target": "TICKET",
            "remarks": null,
            "whereClause": "ticketid=:globalticketid  and class=:globalticketclass",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "GLOBALTKUSER",
            "target": "TICKET",
            "remarks": "get this ticket and all tickets related to this global ticket",
            "whereClause": "(ticketid = :ticketid and class=:class) or (globalticketid = :ticketid and globalticketclass=:class)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TICKETGRANDTOTAL",
            "target": "TICKETGRANDTOTAL",
            "remarks": null,
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TICKETSPEC",
            "target": "TICKETSPEC",
            "remarks": "Relationship to the ticketspec table, used to find the ticketspec records for a given ticket. (ticket.ticketuid=ticketspec.refobjectid) The resulting set will contain zero or more object.",
            "whereClause": "refobjectid=:ticketuid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TICKETSPECCLASS",
            "target": "TICKETSPEC",
            "remarks": "Relationship to the ticketspec table, used to find the ticketspec records for a given ticket. (ticket.ticketid=ticketspec.ticketid and ticket.class=ticketspec.class and ticket.classstructureid=ticketspec.classstructureid) The resulting set will contain zero or more object.",
            "whereClause": "ticketid= :ticketid and class=:class and classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TICKETTOTAL",
            "target": "TICKETTOTAL",
            "remarks": null,
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TKCHANGESTATUS",
            "target": "TKCHANGESTATUS",
            "remarks": null,
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TKGRANDTOTAL",
            "target": "TKGRANDTOTAL",
            "remarks": null,
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "OWNERHISTORY",
            "target": "TKOWNERHISTORY",
            "remarks": null,
            "whereClause": "ticketid=:ticketid and class=:class ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SERVICEADDRESS",
            "target": "TKSERVICEADDRESS",
            "remarks": "TICKET Service Address for TICKET",
            "whereClause": "ticketid = :ticketid and class = :class",
            "cardinality": null
        },
        {
            "name": "TKSTATUS",
            "target": "TKSTATUS",
            "remarks": null,
            "whereClause": "ticketid=:ticketid and class=:class",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TKTEMPLATE",
            "target": "TKTEMPLATE",
            "remarks": null,
            "whereClause": "class=:class and (:orgid is null or (orgid=:orgid or orgid is null) ) and status in (select value from synonymdomain where domainid = 'TEMPLATESTATUS' and maxvalue = 'ACTIVE')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TKTOTAL",
            "target": "TKTOTAL",
            "remarks": null,
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "target": "VIEWCONTINPUT",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "target": "VIEWWOPMS",
            "remarks": "Relationship from the TICKET to the non-persistent VIEWWOPMS table. (Nowhere clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOACTIVITY",
            "target": "WOACTIVITY",
            "remarks": null,
            "whereClause": "origrecordid=:ticketid and origrecordclass=:class and woclass in (select value from synonymdomain where domainid ='WOCLASS' and maxvalue='ACTIVITY')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NEWACTIVITY",
            "target": "WOACTIVITY",
            "remarks": "This relationship gets the last activity created by this ticket. (<long>) One member set.",
            "whereClause": "origrecordclass = :class and origrecordid = :ticketid and woclass in (select value from synonymdomain where domainid = 'WOCLASS' and maxvalue = 'ACTIVITY') and reportdate = (select max(reportdate) from workorder where origrecordclass = :class and origrecordid = :ticketid and woclass in (select value from synonymdomain where domainid = 'WOCLASS' and maxvalue = 'ACTIVITY'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NEWCHANGE",
            "target": "WOCHANGE",
            "remarks": "This relationship gets the last change created by this ticket. (<long>) One member set.",
            "whereClause": "origrecordclass = :class and origrecordid = :ticketid and reportdate = (select max(reportdate) from wochange where origrecordclass = :class and origrecordid = :ticketid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NEWRELEASE",
            "target": "WORELEASE",
            "remarks": "This relationship gets the last release created by this ticket. (<long>) One member set.",
            "whereClause": "origrecordclass = :class and origrecordid = :ticketid and woclass in (select value from synonymdomain where domainid = 'WOCLASS' and maxvalue = 'RELEASE') and reportdate = (select max(reportdate) from workorder where origrecordclass = :class and origrecordid = :ticketid and woclass in (select value from synonymdomain where domainid = 'WOCLASS' and maxvalue = 'RELEASE'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MODIFYWORKLOG",
            "target": "WORKLOG",
            "remarks": "Relationship to the worklog records, used to find the worklog records for a given ticket.",
            "whereClause": "recordkey=:ticketid and class=:class",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKLOG",
            "target": "WORKLOG",
            "remarks": "Relationship to the ticket's worklog records, used to find the worklog records for a given ticket.",
            "whereClause": " ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CUSTOMTKWORKLOG",
            "target": "WORKLOG",
            "remarks": "Relationship to get WORKLOG of current TICKET.",
            "whereClause": "recordkey=:ticketid and class=:class",
            "cardinality": null
        },
        {
            "name": "COMMWO",
            "target": "WORKORDER",
            "remarks": null,
            "whereClause": "commodity=:commodity",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMWOGRP",
            "target": "WORKORDER",
            "remarks": null,
            "whereClause": "commoditygroup=:commoditygroup",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ACTIVITY",
            "target": "WORKORDER",
            "remarks": null,
            "whereClause": "origrecordid=:ticketid and origrecordclass=:class and woclass in (select value from synonymdomain where domainid ='WOCLASS' and maxvalue='ACTIVITY')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKORDER",
            "target": "WORKORDER",
            "remarks": null,
            "whereClause": "origrecordid=:ticketid and origrecordclass=:class and woclass in (select value from synonymdomain where domainid ='WOCLASS' and maxvalue !='ACTIVITY')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOREP",
            "target": "WORKORDER",
            "remarks": "Relationship to the workorder table, used to find all workorders for the person specified in the Reported By fields.  The resulting set will contain zero or many.",
            "whereClause": "(reportedby=:reportedby or onbehalfof=:reportedby) and historyflag=:no and istask=:no",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOAFF",
            "target": "WORKORDER",
            "remarks": "Relationship to the workorder table, used to find all workorders for the person specified in the Affected User field. The resulting set will contain zero or many.",
            "whereClause": "(reportedby=:affectedperson or onbehalfof=:affectedperson) and historyflag=:no and istask=:no",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NEWWORKORDER",
            "target": "WORKORDER",
            "remarks": "This relationship gets the last work order created by this ticket. (origrecordclass = :class and origrecordid = :ticketid and reportdate = (select max(reportdate) from ticket where origrecordclass = :class and origrecordid = :ticketid)). One member set.",
            "whereClause": "origrecordclass = :class and origrecordid = :ticketid and reportdate = (select max(reportdate) from workorder where origrecordclass = :class and origrecordid = :ticketid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ORIGWO",
            "target": "WORKORDER",
            "remarks": null,
            "whereClause": "wonum=:origrecordid and woclass=:origrecordclass",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKVIEW",
            "target": "WORKVIEW",
            "remarks": "Relationship to the workview table, used to find the workview  for a ticket. This resulting set will contain zero or one object.",
            "whereClause": "recordkey=:ticketid and class=:class",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHOWALLTASKRELATION",
            "target": "WOTASKRELATION",
            "remarks": "Relationship to the ShowAllTaskRelationSet used by UI for display. This is a special MboSet used for displaying all predessor tasks related to the entire work hierarchy under a given workorder.",
            "whereClause": "wonum in (select wonum from woancestor where ancestor = :woactivity.wogroup and siteid=:siteid)",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "COMMTICKET",
            "source": "AREASAFFECTED",
            "remarks": "Relationship from Areas Affected Service field to the TICKET table - used to View Related Records for Service.",
            "whereClause": "commodity=:affectedcommodity",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWTKT",
            "source": "ASSET",
            "remarks": "Relationship to ticket object.",
            "whereClause": "assetnum=:assetnum and assetsiteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TICKET",
            "source": "CI",
            "remarks": "Relationship to the TICKET table, used to find TICKET record for a given CI.",
            "whereClause": "cinum=:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TICKET",
            "source": "CLASSSTRUCTURE",
            "remarks": "Relationship to the ticket table, used to find the ticket records for a given classstructure. (classstructure.classstructureid = ticket.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid in (select classstructureid from classancestor where ancestor=:classstructureid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TICKETS_ONLY",
            "source": "CLASSSTRUCTURE",
            "remarks": "Relationship to the ticket table, used to find the ticket records for a given classstructure. (classstructure.classstructureid = ticket.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TICKET",
            "source": "COMMLOG",
            "remarks": "use for ticket record",
            "whereClause": "ticketuid=:ownerid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMTICKET",
            "source": "COMMODITIES",
            "remarks": null,
            "whereClause": "commodity = :commodity",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMTICKETGRP",
            "source": "COMMODITIES",
            "remarks": null,
            "whereClause": "commoditygroup = :commodity",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TICKET",
            "source": "LABTRANS",
            "remarks": "Relationship to the ticket table on labtrans. (ticketid=:ticketid and class=:ticketclass.)  This will return 0 or more objects ",
            "whereClause": "ticketid=:ticketid and class=:ticketclass",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABREP_LABTRANSENTERBY_TICKET",
            "source": "LABTRANSENTERBY",
            "remarks": "Relationship from labtransenterby to ticket ",
            "whereClause": "ticketid=:ticketid and class=:class",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TICKET",
            "source": "LOCATIONS",
            "remarks": "Relationship to the TICKET table, used to find the active tickets for the location. The resulting set will contain one or more objects.",
            "whereClause": "location=:location and assetsiteid=:siteid and ticket.status not in (select value from synonymdomain where domainid in ('SRSTATUS', 'INCIDENTSTATUS','PROBLEMSTATUS') and maxvalue in ('CLOSED', 'RESOLVED'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWTKT",
            "source": "LOCATIONS",
            "remarks": "Relationship to ticket object.",
            "whereClause": "location=:location",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TICKET",
            "source": "MULTIASSETLOCCI",
            "remarks": "Relationship from multiassetlocci to ticket table to get ticket related info",
            "whereClause": "ticketid=:recordkey and (siteid=:siteid or siteid is null)",
            "cardinality": null
        },
        {
            "name": "PERSONGROUPUSEDBYTICKET",
            "source": "PERSONGROUP",
            "remarks": "returns any rows if used by tickets",
            "whereClause": "(ownergroup = :persongroup) and (historyflag=:no)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATEDRECTK",
            "source": "RELATEDRECORD",
            "remarks": null,
            "whereClause": "ticketid=:relatedreckey and class=:relatedrecclass",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATEDRECTKT",
            "source": "RELATEDRECORD",
            "remarks": null,
            "whereClause": "ticketid=:relatedreckey and class=:relatedrecclass",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TICKET",
            "source": "RELATEDRECORD",
            "remarks": null,
            "whereClause": "ticketid=:recordkey and class=:class",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SLARECTICKET",
            "source": "SLARECORDS",
            "remarks": "Relationship to Ticket",
            "whereClause": ":ownertable = 'TICKET' and :ownerid = ticketuid",
            "cardinality": null
        },
        {
            "name": "SELFSERVTICKET",
            "source": "SOLUTION",
            "remarks": "solution to ticket relationship",
            "whereClause": "origrecordid=:solution",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TICKET",
            "source": "TICKET",
            "remarks": null,
            "whereClause": "origrecordid=:ticketid and origrecordclass=:class",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NEWTICKET",
            "source": "TICKET",
            "remarks": "This relationship gets the last ticket created by this ticket. (origrecordclass = :class and origrecordid = :ticketid and reportdate = (select max(reportdate) from ticket where origrecordclass = :class and origrecordid = :ticketid)). One member set.",
            "whereClause": "origrecordclass = :class and origrecordid = :ticketid and reportdate = (select max(reportdate) from ticket where origrecordclass = :class and origrecordid = :ticketid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ORIGTICKET",
            "source": "TICKET",
            "remarks": null,
            "whereClause": "ticketid=:origrecordid and class=:origrecordclass",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIMILARTICKETS",
            "source": "TICKET",
            "remarks": "Relationship to Ticket table when the historyflag is no and the classstructureid is equal to other ticket classstructureids. The relationship will contain zero or more objects.",
            "whereClause": "historyflag=:no and classstructureid=:classstructureid and (ticketid != :ticketid or class!=:class) and not exists (select 1 from relatedrecord rec where rec.relatedreckey=ticket.ticketid and rec.relatedrecclass=ticket.class and recordkey=:ticketid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SELTICKET",
            "source": "TICKET",
            "remarks": "Relationship to the ticket table, used to find all tickets except itself. This result set will contain zero or more objects.",
            "whereClause": "ticketid!=:ticketid or class!=:class",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TKRELATEDTOGLOBAL",
            "source": "TICKET",
            "remarks": null,
            "whereClause": "globalticketid = :ticketid and globalticketclass=:class",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TKTQBE",
            "source": "TICKET",
            "remarks": "Relationship to the Ticket table, used to find the ticket records containing the classtructureid node. (Gets the classstructureid from classancestor where ancestor=classstructureid). This resulting set will contain zero or more objects.",
            "whereClause": "in (select classstructureid from classancestor where ancestor=:1)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWTKTAFF",
            "source": "TICKET",
            "remarks": "Relationship to the tickets table, used to find all tickets for the person specified in the Affected User field.  The resulting set will contain zero or many.",
            "whereClause": "affectedperson=:affectedperson",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWTKTREP",
            "source": "TICKET",
            "remarks": "Relationship to the tickets table, used to find all tickets for the person specified in the Reported By field.  The resulting set will contain zero or many.",
            "whereClause": "reportedby=:reportedby",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMTICKET",
            "source": "TICKET",
            "remarks": null,
            "whereClause": "commodity=:commodity",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMTICKETGRP",
            "source": "TICKET",
            "remarks": null,
            "whereClause": "commoditygroup=:commoditygroup",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "GLOBALTICKET",
            "source": "TICKET",
            "remarks": null,
            "whereClause": "ticketid=:globalticketid  and class=:globalticketclass",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "GLOBALTKUSER",
            "source": "TICKET",
            "remarks": "get this ticket and all tickets related to this global ticket",
            "whereClause": "(ticketid = :ticketid and class=:class) or (globalticketid = :ticketid and globalticketclass=:class)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TICKET",
            "source": "TKSERVICEADDRESS",
            "remarks": "TICKET for TICKET Service Address",
            "whereClause": "ticketid = :ticketid and class = :class",
            "cardinality": null
        },
        {
            "name": "COMMTICKET",
            "source": "TKTEMPLATE",
            "remarks": null,
            "whereClause": "commodity=:commodity",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMTICKETGRP",
            "source": "TKTEMPLATE",
            "remarks": null,
            "whereClause": "commoditygroup=:commoditygroup",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TICKET",
            "source": "WORKLOG",
            "remarks": "use for ticket record",
            "whereClause": "ticketid=:recordkey and class=:class",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NEWTICKET",
            "source": "WORKORDER",
            "remarks": "This relationship gets the last ticket created by this work order. (origrecordclass = :woclass and origrecordid = :wonum and reportdate = (select max(reportdate) from ticket where origrecordclass = :woclass and origrecordid = :wonum)). One member set.",
            "whereClause": "origrecordclass = :woclass and origrecordid = :wonum and reportdate = (select max(reportdate) from ticket where origrecordclass = :woclass and origrecordid = :wonum)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ORIGTICKET",
            "source": "WORKORDER",
            "remarks": null,
            "whereClause": "ticketid=:origrecordid and class=:origrecordclass",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMTICKET",
            "source": "WORKORDER",
            "remarks": null,
            "whereClause": "commodity=:commodity",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMTICKETGRP",
            "source": "WORKORDER",
            "remarks": null,
            "whereClause": "commoditygroup=:commoditygroup",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TICKET",
            "source": "WORKVIEW",
            "remarks": "Relationship to the Ticket table, used to get the ticket record for the current workview.",
            "whereClause": "ticketid=:recordkey and class=:class",
            "cardinality": "UNDEFINED"
        }
    ]
}