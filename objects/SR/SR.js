mos = {
    "objectName": "SR",
    "className": "psdi.app.ticket.SRSet",
    "description": "The SR view",
    "longDescription": "SR is a subclass of Ticket",
    "isView": true,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": null,
    "primaryKeyColumns": [
        "CLASS",
        "TICKETID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ACTCI",
            "targetObject": "SR",
            "parentKeys": "ACTCINUM",
            "targetKeys": "CINUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 25",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "SR",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "ASSETSITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 147",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "SR",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "ORIGRECSITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 148",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "SR",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 149",
            "longDescription": null
        },
        {
            "objectName": "CALENDAR",
            "targetObject": "SR",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "ASSETORGID, CALCCALENDAR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 27",
            "longDescription": null
        },
        {
            "objectName": "CALENDAR",
            "targetObject": "SR",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "CALCORGID, CALCCALENDAR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 28",
            "longDescription": null
        },
        {
            "objectName": "CALENDAR",
            "targetObject": "SR",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "ORGID, CALCCALENDAR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 29",
            "longDescription": null
        },
        {
            "objectName": "CALENDAR",
            "targetObject": "SR",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "ORIGRECORGID, CALCCALENDAR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 30",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "SR",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 65",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "SR",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ASSETORGID, VENDOR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 78",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "SR",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "CALCORGID, VENDOR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 79",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "SR",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 80",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "SR",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORIGRECORGID, VENDOR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 81",
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
            "objectName": "FAILURECODE",
            "targetObject": "SR",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ASSETORGID, FAILURECODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Failure Hierarchy.",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "SR",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ASSETORGID, FR1CODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "2nd level of the failure hierarchy",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "SR",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ASSETORGID, FR2CODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "3rd level of the failure hierarchy",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "SR",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ASSETORGID, PROBLEMCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "1st levelof the failure hierarchy",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "SR",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "CALCORGID, FAILURECODE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 45",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "SR",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "CALCORGID, FR1CODE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 46",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "SR",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "CALCORGID, FR2CODE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 47",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "SR",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "CALCORGID, PROBLEMCODE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 48",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "SR",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORGID, FAILURECODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Failure Hierarchy.",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "SR",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORGID, FR1CODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "2nd level of the failure hierarchy",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "SR",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORGID, FR2CODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "3rd level of the failure hierarchy",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "SR",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORGID, PROBLEMCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "1st levelof the failure hierarchy",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "SR",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORIGRECORGID, FAILURECODE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 53",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "SR",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORIGRECORGID, FR1CODE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 54",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "SR",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORIGRECORGID, FR2CODE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 55",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "SR",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORIGRECORGID, PROBLEMCODE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 56",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "SR",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "SR",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "ASSETSITEID, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 191",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "SR",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "ORIGRECSITEID, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 192",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "SR",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 193",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "SR",
            "parentKeys": "ORGID",
            "targetKeys": "ASSETORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 297",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "SR",
            "parentKeys": "ORGID",
            "targetKeys": "CALCORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 298",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "SR",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "SR",
            "parentKeys": "ORGID",
            "targetKeys": "ORIGRECORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 300",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SR",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SR",
            "parentKeys": "PERSONID",
            "targetKeys": "OWNER",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 370",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SR",
            "parentKeys": "PERSONID",
            "targetKeys": "SUPERVISOR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 371",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "SR",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "ASSIGNEDOWNERGROUP",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 22",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "SR",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "OWNERGROUP",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 23",
            "longDescription": null
        },
        {
            "objectName": "SHIFT",
            "targetObject": "SR",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "ASSETORGID, CALCSHIFT",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 25",
            "longDescription": null
        },
        {
            "objectName": "SHIFT",
            "targetObject": "SR",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "CALCORGID, CALCSHIFT",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 26",
            "longDescription": null
        },
        {
            "objectName": "SHIFT",
            "targetObject": "SR",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "ORGID, CALCSHIFT",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 27",
            "longDescription": null
        },
        {
            "objectName": "SHIFT",
            "targetObject": "SR",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "ORIGRECORGID, CALCSHIFT",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 28",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "SR",
            "parentKeys": "SITEID",
            "targetKeys": "ASSETSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 258",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "SR",
            "parentKeys": "SITEID",
            "targetKeys": "ORIGRECSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 259",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "SR",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SOLUTION",
            "targetObject": "SR",
            "parentKeys": "SOLUTION",
            "targetKeys": "SOLUTION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 4",
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
        }
    ],
    "columns": [
        {
            "attributeName": "TICKETID",
            "required": true,
            "persistent": true,
            "title": "Service Request",
            "remarks": "Identifies the service request.",
            "sameAsAttribute": "TICKETID",
            "sameAsObject": "TICKET",
            "viewColumnName": "TICKETID",
            "tableName": "TICKET",
            "tableColumnName": "TICKETID"
        },
        {
            "attributeName": "CLASS",
            "required": true,
            "persistent": true,
            "title": "Class",
            "remarks": "Class of the ticket",
            "sameAsAttribute": "CLASS",
            "sameAsObject": "TICKET",
            "viewColumnName": "CLASS",
            "tableName": "TICKET",
            "tableColumnName": "CLASS"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Summary",
            "remarks": "Describes the service request. To enter or view additional information, click the Long Description button. Additonal text that you enter appears in the Details field.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "TICKET",
            "viewColumnName": "DESCRIPTION",
            "tableName": "TICKET",
            "tableColumnName": "DESCRIPTION"
        },
        {
            "attributeName": "STATUS",
            "required": true,
            "persistent": true,
            "title": "Status",
            "remarks": "Status of the service request. If you are not viewing the Change Status dialog box, click the Change Status button in the toolbar to change the status. Note: this action may not be available to all users. Default statuses are NEW, QUEUED, PENDING, INPROG, RESOLVED, and CLOSED. See the online Help for more information on statuses.",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "TICKET",
            "viewColumnName": "STATUS",
            "tableName": "TICKET",
            "tableColumnName": "STATUS"
        },
        {
            "attributeName": "STATUSDATE",
            "required": true,
            "persistent": true,
            "title": "Status Date",
            "remarks": "Status DATETIME",
            "sameAsAttribute": "STATUSDATE",
            "sameAsObject": "TICKET",
            "viewColumnName": "STATUSDATE",
            "tableName": "TICKET",
            "tableColumnName": "STATUSDATE"
        },
        {
            "attributeName": "REPORTEDPRIORITY",
            "required": false,
            "persistent": true,
            "title": "Reported Priority",
            "remarks": "Priority of service request as determined by person making the request.",
            "sameAsAttribute": "REPORTEDPRIORITY",
            "sameAsObject": "TICKET",
            "viewColumnName": "REPORTEDPRIORITY",
            "tableName": "TICKET",
            "tableColumnName": "REPORTEDPRIORITY"
        },
        {
            "attributeName": "INTERNALPRIORITY",
            "required": false,
            "persistent": true,
            "title": "Internal Priority",
            "remarks": "Priority of the service request as determined by the service desk agent.",
            "sameAsAttribute": "INTERNALPRIORITY",
            "sameAsObject": "TICKET",
            "viewColumnName": "INTERNALPRIORITY",
            "tableName": "TICKET",
            "tableColumnName": "INTERNALPRIORITY"
        },
        {
            "attributeName": "IMPACT",
            "required": false,
            "persistent": true,
            "title": "Impact",
            "remarks": "The Business Impact/severity of the Ticket",
            "sameAsAttribute": "IMPACT",
            "sameAsObject": "TICKET",
            "viewColumnName": "IMPACT",
            "tableName": "TICKET",
            "tableColumnName": "IMPACT"
        },
        {
            "attributeName": "URGENCY",
            "required": false,
            "persistent": true,
            "title": "Urgency",
            "remarks": "A reflection of the speed in which a Ticket should be resolved",
            "sameAsAttribute": "URGENCY",
            "sameAsObject": "TICKET",
            "viewColumnName": "URGENCY",
            "tableName": "TICKET",
            "tableColumnName": "URGENCY"
        },
        {
            "attributeName": "REPORTEDBY",
            "required": false,
            "persistent": true,
            "title": "Reported By",
            "remarks": "Identifies person making the service request. Enter a value or click the Select Value button.",
            "sameAsAttribute": "DISPLAYNAME",
            "sameAsObject": "PERSON",
            "viewColumnName": "REPORTEDBY",
            "tableName": "TICKET",
            "tableColumnName": "REPORTEDBY"
        },
        {
            "attributeName": "REPORTDATE",
            "required": false,
            "persistent": true,
            "title": "Reported Date",
            "remarks": "Date when the service request was made. Enter a date or click the Select Date button.",
            "sameAsAttribute": "REPORTDATE",
            "sameAsObject": "TICKET",
            "viewColumnName": "REPORTDATE",
            "tableName": "TICKET",
            "tableColumnName": "REPORTDATE"
        },
        {
            "attributeName": "AFFECTEDPERSON",
            "required": false,
            "persistent": true,
            "title": "Affected User",
            "remarks": "Identifies person affected by the issue. Enter a value or click the Select Value button.",
            "sameAsAttribute": "DISPLAYNAME",
            "sameAsObject": "PERSON",
            "viewColumnName": "AFFECTEDPERSON",
            "tableName": "TICKET",
            "tableColumnName": "AFFECTEDPERSON"
        },
        {
            "attributeName": "AFFECTEDDATE",
            "required": false,
            "persistent": true,
            "title": "Affected Date",
            "remarks": "Date when user was affected by issue. Enter a date or click the Select Date button and select a date.",
            "sameAsAttribute": "AFFECTEDDATE",
            "sameAsObject": "TICKET",
            "viewColumnName": "AFFECTEDDATE",
            "tableName": "TICKET",
            "tableColumnName": "AFFECTEDDATE"
        },
        {
            "attributeName": "SOURCE",
            "required": false,
            "persistent": true,
            "title": "Source",
            "remarks": "Source of Ticket Generation like email",
            "sameAsAttribute": "SOURCE",
            "sameAsObject": "TICKET",
            "viewColumnName": "SOURCE",
            "tableName": "TICKET",
            "tableColumnName": "SOURCE"
        },
        {
            "attributeName": "SUPERVISOR",
            "required": false,
            "persistent": true,
            "title": "Supervisor",
            "remarks": "Supervisor",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON",
            "viewColumnName": "SUPERVISOR",
            "tableName": "TICKET",
            "tableColumnName": "SUPERVISOR"
        },
        {
            "attributeName": "OWNER",
            "required": false,
            "persistent": true,
            "title": "Owner",
            "remarks": "Owner of the service request. This person has overall responsibility for the service request. You can enter a value either in this field or the Owner Group field. Use the Select Action menu to assign an owner. Note: this action may not be available to all users.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON",
            "viewColumnName": "OWNER",
            "tableName": "TICKET",
            "tableColumnName": "OWNER"
        },
        {
            "attributeName": "OWNERGROUP",
            "required": false,
            "persistent": true,
            "title": "Owner Group",
            "remarks": "Owner group of the service request. This group has overall responsibility for the service request. You can enter a value either in this field or the Owner field. Use the Select Action menu to assign an owner group. Note: this action may not be available to all users.",
            "sameAsAttribute": "PERSONGROUP",
            "sameAsObject": "PERSONGROUP",
            "viewColumnName": "OWNERGROUP",
            "tableName": "TICKET",
            "tableColumnName": "OWNERGROUP"
        },
        {
            "attributeName": "ISGLOBAL",
            "required": true,
            "persistent": true,
            "title": "Is Global Issue",
            "remarks": "Flag used to determine if a Ticket is a Global Issue",
            "sameAsAttribute": "ISGLOBAL",
            "sameAsObject": "TICKET",
            "viewColumnName": "ISGLOBAL",
            "tableName": "TICKET",
            "tableColumnName": "ISGLOBAL"
        },
        {
            "attributeName": "RELATEDTOGLOBAL",
            "required": true,
            "persistent": true,
            "title": "Related to Global Issue",
            "remarks": "Flag used to determine if a Ticket is related to a global issue Ticket",
            "sameAsAttribute": "RELATEDTOGLOBAL",
            "sameAsObject": "TICKET",
            "viewColumnName": "RELATEDTOGLOBAL",
            "tableName": "TICKET",
            "tableColumnName": "RELATEDTOGLOBAL"
        },
        {
            "attributeName": "GLOBALTICKETID",
            "required": false,
            "persistent": true,
            "title": "Global Ticket",
            "remarks": "Global Ticket ID",
            "sameAsAttribute": "GLOBALTICKETID",
            "sameAsObject": "TICKET",
            "viewColumnName": "GLOBALTICKETID",
            "tableName": "TICKET",
            "tableColumnName": "GLOBALTICKETID"
        },
        {
            "attributeName": "GLOBALTICKETCLASS",
            "required": false,
            "persistent": true,
            "title": "Global Ticket Class",
            "remarks": "Class of the global ticket",
            "sameAsAttribute": "GLOBALTICKETCLASS",
            "sameAsObject": "TICKET",
            "viewColumnName": "GLOBALTICKETCLASS",
            "tableName": "TICKET",
            "tableColumnName": "GLOBALTICKETCLASS"
        },
        {
            "attributeName": "EXTERNALRECID",
            "required": false,
            "persistent": true,
            "title": "External Record",
            "remarks": "Ticket ID for any Ticket external to MAXIMO",
            "sameAsAttribute": "EXTERNALRECID",
            "sameAsObject": "TICKET",
            "viewColumnName": "EXTERNALRECID",
            "tableName": "TICKET",
            "tableColumnName": "EXTERNALRECID"
        },
        {
            "attributeName": "SITEVISIT",
            "required": true,
            "persistent": true,
            "title": "Site Visit Required",
            "remarks": "Falg used to indicate of a Ticket requires an on-site visit for investigation",
            "sameAsAttribute": "SITEVISIT",
            "sameAsObject": "TICKET",
            "viewColumnName": "SITEVISIT",
            "tableName": "TICKET",
            "tableColumnName": "SITEVISIT"
        },
        {
            "attributeName": "ORIGRECORDID",
            "required": false,
            "persistent": true,
            "title": "Originating Record",
            "remarks": "Ticket/WO ID that spawned or created one or more other tickets or work orders",
            "sameAsAttribute": "ORIGRECORDID",
            "sameAsObject": "TICKET",
            "viewColumnName": "ORIGRECORDID",
            "tableName": "TICKET",
            "tableColumnName": "ORIGRECORDID"
        },
        {
            "attributeName": "ORIGRECORDCLASS",
            "required": false,
            "persistent": true,
            "title": "Orginal Record Class",
            "remarks": "Class of the original record",
            "sameAsAttribute": "ORIGRECORDCLASS",
            "sameAsObject": "TICKET",
            "viewColumnName": "ORIGRECORDCLASS",
            "tableName": "TICKET",
            "tableColumnName": "ORIGRECORDCLASS"
        },
        {
            "attributeName": "GLACCOUNT",
            "required": false,
            "persistent": true,
            "title": "GL Account",
            "remarks": "GL Account",
            "sameAsAttribute": "GLACCOUNT",
            "sameAsObject": "TICKET",
            "viewColumnName": "GLACCOUNT",
            "tableName": "TICKET",
            "tableColumnName": "GLACCOUNT"
        },
        {
            "attributeName": "COMMODITYGROUP",
            "required": false,
            "persistent": true,
            "title": "Service Group",
            "remarks": "Identifies the group providing the service. Enter a value or click the Detail Menu button to select an option and retrieve a value.",
            "sameAsAttribute": "COMMODITY",
            "sameAsObject": "COMMODITIES",
            "viewColumnName": "COMMODITYGROUP",
            "tableName": "TICKET",
            "tableColumnName": "COMMODITYGROUP"
        },
        {
            "attributeName": "COMMODITY",
            "required": false,
            "persistent": true,
            "title": "Service",
            "remarks": "Service provided or purchased. Enter a value or click the Detail Menu button to select an option and retrieve a value.",
            "sameAsAttribute": "COMMODITY",
            "sameAsObject": "COMMODITIES",
            "viewColumnName": "COMMODITY",
            "tableName": "TICKET",
            "tableColumnName": "COMMODITY"
        },
        {
            "attributeName": "INHERITSTATUS",
            "required": true,
            "persistent": true,
            "title": "Inherit Status Changes",
            "remarks": "Inherit status from follow up record",
            "sameAsAttribute": "INHERITSTATUS",
            "sameAsObject": "TICKET",
            "viewColumnName": "INHERITSTATUS",
            "tableName": "TICKET",
            "tableColumnName": "INHERITSTATUS"
        },
        {
            "attributeName": "ISKNOWNERROR",
            "required": true,
            "persistent": true,
            "title": "Is Known Error",
            "remarks": "Is this a Known error",
            "sameAsAttribute": "ISKNOWNERROR",
            "sameAsObject": "TICKET",
            "viewColumnName": "ISKNOWNERROR",
            "tableName": "TICKET",
            "tableColumnName": "ISKNOWNERROR"
        },
        {
            "attributeName": "TARGETSTART",
            "required": false,
            "persistent": true,
            "title": "Target Start",
            "remarks": "Target Start Date",
            "sameAsAttribute": "TARGETSTART",
            "sameAsObject": "TICKET",
            "viewColumnName": "TARGETSTART",
            "tableName": "TICKET",
            "tableColumnName": "TARGETSTART"
        },
        {
            "attributeName": "TARGETFINISH",
            "required": false,
            "persistent": true,
            "title": "Target Finish",
            "remarks": "Target Finish Date",
            "sameAsAttribute": "TARGETFINISH",
            "sameAsObject": "TICKET",
            "viewColumnName": "TARGETFINISH",
            "tableName": "TICKET",
            "tableColumnName": "TARGETFINISH"
        },
        {
            "attributeName": "ACTUALSTART",
            "required": false,
            "persistent": true,
            "title": "Actual Start",
            "remarks": "Actual start date. Enter a date or click the Select Date button and select a date.",
            "sameAsAttribute": "ACTUALSTART",
            "sameAsObject": "TICKET",
            "viewColumnName": "ACTUALSTART",
            "tableName": "TICKET",
            "tableColumnName": "ACTUALSTART"
        },
        {
            "attributeName": "ACTUALFINISH",
            "required": false,
            "persistent": true,
            "title": "Actual Finish",
            "remarks": "Actual finish date. Enter a date or click the Select Date button and select a date.",
            "sameAsAttribute": "ACTUALFINISH",
            "sameAsObject": "TICKET",
            "viewColumnName": "ACTUALFINISH",
            "tableName": "TICKET",
            "tableColumnName": "ACTUALFINISH"
        },
        {
            "attributeName": "ORIGRECSITEID",
            "required": false,
            "persistent": true,
            "title": "Originating Record Site",
            "remarks": "Site Identifier of the originating Record",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE",
            "viewColumnName": "ORIGRECSITEID",
            "tableName": "TICKET",
            "tableColumnName": "ORIGRECSITEID"
        },
        {
            "attributeName": "ORIGRECORGID",
            "required": false,
            "persistent": true,
            "title": "Originating Record Oganization",
            "remarks": "Organization Identifier of the originating Record",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION",
            "viewColumnName": "ORIGRECORGID",
            "tableName": "TICKET",
            "tableColumnName": "ORIGRECORGID"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "Unique identifier of the site. Enter a value or click the Select Value button.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE",
            "viewColumnName": "SITEID",
            "tableName": "TICKET",
            "tableColumnName": "SITEID"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Constraint Identifier of the organization",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION",
            "viewColumnName": "ORGID",
            "tableName": "TICKET",
            "tableColumnName": "ORGID"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "Date on which Ticket changed",
            "sameAsAttribute": "CHANGEDATE",
            "sameAsObject": "TICKET",
            "viewColumnName": "CHANGEDATE",
            "tableName": "TICKET",
            "tableColumnName": "CHANGEDATE"
        },
        {
            "attributeName": "CHANGEBY",
            "required": true,
            "persistent": true,
            "title": "Changed By",
            "remarks": "Person who modified or changed",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON",
            "viewColumnName": "CHANGEBY",
            "tableName": "TICKET",
            "tableColumnName": "CHANGEBY"
        },
        {
            "attributeName": "HISTORYFLAG",
            "required": true,
            "persistent": true,
            "title": "History",
            "remarks": "History Flag",
            "sameAsAttribute": "HISTORYFLAG",
            "sameAsObject": "TICKET",
            "viewColumnName": "HISTORYFLAG",
            "tableName": "TICKET",
            "tableColumnName": "HISTORYFLAG"
        },
        {
            "attributeName": "TEMPLATE",
            "required": true,
            "persistent": true,
            "title": "Template",
            "remarks": "Template",
            "sameAsAttribute": "TEMPLATE",
            "sameAsObject": "TICKET",
            "viewColumnName": "TEMPLATE",
            "tableName": "TICKET",
            "tableColumnName": "TEMPLATE"
        },
        {
            "attributeName": "HASACTIVITY",
            "required": true,
            "persistent": true,
            "title": "Has Activity",
            "remarks": "Does this ticket has any activity",
            "sameAsAttribute": "HASACTIVITY",
            "sameAsObject": "TICKET",
            "viewColumnName": "HASACTIVITY",
            "tableName": "TICKET",
            "tableColumnName": "HASACTIVITY"
        },
        {
            "attributeName": "FAILURECODE",
            "required": false,
            "persistent": true,
            "title": "Failure Code",
            "remarks": "Indicates Top level of a Failure Hierarchy",
            "sameAsAttribute": "FAILURECODE",
            "sameAsObject": "FAILURECODE",
            "viewColumnName": "FAILURECODE",
            "tableName": "TICKET",
            "tableColumnName": "FAILURECODE"
        },
        {
            "attributeName": "PROBLEMCODE",
            "required": false,
            "persistent": true,
            "title": "Problem Code",
            "remarks": "Reason for failure",
            "sameAsAttribute": "FAILURECODE",
            "sameAsObject": "FAILURECODE",
            "viewColumnName": "PROBLEMCODE",
            "tableName": "TICKET",
            "tableColumnName": "PROBLEMCODE"
        },
        {
            "attributeName": "ACTLABHRS",
            "required": true,
            "persistent": true,
            "title": "Actual Labor Hours",
            "remarks": "Actual Labor Hours",
            "sameAsAttribute": "ACTLABHRS",
            "sameAsObject": "TICKET",
            "viewColumnName": "ACTLABHRS",
            "tableName": "TICKET",
            "tableColumnName": "ACTLABHRS"
        },
        {
            "attributeName": "ACTLABCOST",
            "required": true,
            "persistent": true,
            "title": "Actual Labor Cost",
            "remarks": "Actual Labor Cost",
            "sameAsAttribute": "ACTLABCOST",
            "sameAsObject": "TICKET",
            "viewColumnName": "ACTLABCOST",
            "tableName": "TICKET",
            "tableColumnName": "ACTLABCOST"
        },
        {
            "attributeName": "AFFECTEDPHONE",
            "required": false,
            "persistent": true,
            "title": "Phone",
            "remarks": "Telephone number of person affected by the issue.",
            "sameAsAttribute": "PHONENUM",
            "sameAsObject": "PHONE",
            "viewColumnName": "AFFECTEDPHONE",
            "tableName": "TICKET",
            "tableColumnName": "AFFECTEDPHONE"
        },
        {
            "attributeName": "REPORTEDPHONE",
            "required": false,
            "persistent": true,
            "title": "Phone",
            "remarks": "Telephone number of person making the service request.",
            "sameAsAttribute": "PHONENUM",
            "sameAsObject": "PHONE",
            "viewColumnName": "REPORTEDPHONE",
            "tableName": "TICKET",
            "tableColumnName": "REPORTEDPHONE"
        },
        {
            "attributeName": "AFFECTEDEMAIL",
            "required": false,
            "persistent": true,
            "title": "E-mail",
            "remarks": "E-mail address of person affected by the issue.",
            "sameAsAttribute": "EMAILADDRESS",
            "sameAsObject": "EMAIL",
            "viewColumnName": "AFFECTEDEMAIL",
            "tableName": "TICKET",
            "tableColumnName": "AFFECTEDEMAIL"
        },
        {
            "attributeName": "REPORTEDEMAIL",
            "required": false,
            "persistent": true,
            "title": "E-mail",
            "remarks": "E-mail address of person making the service request.",
            "sameAsAttribute": "EMAILADDRESS",
            "sameAsObject": "EMAIL",
            "viewColumnName": "REPORTEDEMAIL",
            "tableName": "TICKET",
            "tableColumnName": "REPORTEDEMAIL"
        },
        {
            "attributeName": "ASSETSITEID",
            "required": false,
            "persistent": true,
            "title": "Asset Site",
            "remarks": "Site of the asset on the service request. The default value is the site of the person record in the Affected User field. Enter a value or click the Select Value button. If the Asset Site field contains a value before you access the Select Value dialog box on the Asset or Location field, the list of assets or locations is always filtered by this value. You cannot edit this field after you have associated assets or locations with a record; you must remove the associations before you can edit this field.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE",
            "viewColumnName": "ASSETSITEID",
            "tableName": "TICKET",
            "tableColumnName": "ASSETSITEID"
        },
        {
            "attributeName": "TEMPLATEID",
            "required": false,
            "persistent": true,
            "title": "Template",
            "remarks": "Template Identifier",
            "sameAsAttribute": "TEMPLATEID",
            "sameAsObject": "TICKET",
            "viewColumnName": "TEMPLATEID",
            "tableName": "TICKET",
            "tableColumnName": "TEMPLATEID"
        },
        {
            "attributeName": "VENDOR",
            "required": false,
            "persistent": true,
            "title": "Vendor",
            "remarks": "Identifies the vendor for the service, service group, or asset. Enter a value or click the Detail Menu button to select an option and retrieve a value.",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES",
            "viewColumnName": "VENDOR",
            "tableName": "TICKET",
            "tableColumnName": "VENDOR"
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Long description of the service request. To check spelling of text you enter, click the Long Description button next to the Summary field.",
            "sameAsAttribute": "DESCRIPTION_LONGDESCRIPTION",
            "sameAsObject": "TICKET"
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
            "sameAsAttribute": "REMARKDESC_LONGDESCRIPTION",
            "sameAsObject": "TICKET"
        },
        {
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": true,
            "title": "Asset",
            "remarks": "Identifies the primary asset on the service request. If the service request is for an asset, enter its identifier in the Asset field or click the Detail Menu button to select an option and retrieve a value. The Select Value dialog box, by default, displays all assets where the person ID in the Affected Person field is associated with an asset as either an asset user or an asset custodian. If the Asset Site field contains a value before you use the Select Value dialog box, the list of assets is always filtered by that value. After you select an asset, Maximo copies the asset location to the Location field. You can enter related assets and/or locations in the Related Assets table window. NOTE: These actions may not be available to all users.",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET",
            "viewColumnName": "ASSETNUM",
            "tableName": "TICKET",
            "tableColumnName": "ASSETNUM"
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": true,
            "title": "Location",
            "remarks": "Identifies the ticket's location. This is not necessarily the asset's location, however, if an asset is entered, its location will default here. If the service request is for a location, enter its identifier in the Location field or click the Detail Menu button to select an option and retrieve a value. The Select Value dialog box, by default, displays all locations where the person ID in the Affected Person field is associated with a location record either as location user or as a location custodian. If the Asset Site field contains a value before you use the Select Value dialog box, the list of locations is always filtered by that value. After you select a location, Maximo copies it to the Location field. If the selected location has only a single asset associated with it, Maximo enters its identifier in the Asset field. You can enter related assets and/or locations in the Related Assets table window. NOTE: These options may not be available to all users.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS",
            "viewColumnName": "LOCATION",
            "tableName": "TICKET",
            "tableColumnName": "LOCATION"
        },
        {
            "attributeName": "ORIGWOID",
            "required": false,
            "persistent": false,
            "title": "Originating WO",
            "remarks": "Trigger field for cross over domain.",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "CLASSSTRUCTUREID",
            "required": false,
            "persistent": true,
            "title": "Classification",
            "remarks": "Class Structure Identifier",
            "sameAsAttribute": "CLASSSTRUCTUREID",
            "sameAsObject": "CLASSSTRUCTURE",
            "viewColumnName": "CLASSSTRUCTUREID",
            "tableName": "TICKET",
            "tableColumnName": "CLASSSTRUCTUREID"
        },
        {
            "attributeName": "ISKNOWNERRORDATE",
            "required": false,
            "persistent": true,
            "title": "Is Known Error Date",
            "remarks": "Datetime when the error known",
            "sameAsAttribute": "ISKNOWNERRORDATE",
            "sameAsObject": "TICKET",
            "viewColumnName": "ISKNOWNERRORDATE",
            "tableName": "TICKET",
            "tableColumnName": "ISKNOWNERRORDATE"
        },
        {
            "attributeName": "TARGETCONTACTDATE",
            "required": false,
            "persistent": true,
            "title": "Target Contact",
            "remarks": "Target Contact Date",
            "sameAsAttribute": "TARGETCONTACTDATE",
            "sameAsObject": "TICKET",
            "viewColumnName": "TARGETCONTACTDATE",
            "tableName": "TICKET",
            "tableColumnName": "TARGETCONTACTDATE"
        },
        {
            "attributeName": "ACTUALCONTACTDATE",
            "required": false,
            "persistent": true,
            "title": "Actual Contact",
            "remarks": "Actual contact date. Enter a date or click the Select Date button and select a date.",
            "sameAsAttribute": "ACTUALCONTACTDATE",
            "sameAsObject": "TICKET",
            "viewColumnName": "ACTUALCONTACTDATE",
            "tableName": "TICKET",
            "tableColumnName": "ACTUALCONTACTDATE"
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
            "remarks": "Symptom long description",
            "sameAsAttribute": "PROBLEMCODE_LONGDESCRIPTION",
            "sameAsObject": "TICKET"
        },
        {
            "attributeName": "FR1CODE",
            "required": false,
            "persistent": true,
            "title": "Cause",
            "remarks": "Cause",
            "sameAsAttribute": "FAILURECODE",
            "sameAsObject": "FAILURECODE",
            "viewColumnName": "FR1CODE",
            "tableName": "TICKET",
            "tableColumnName": "FR1CODE"
        },
        {
            "attributeName": "FR1CODE_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Cause",
            "remarks": "Cause long description",
            "sameAsAttribute": "FR1CODE_LONGDESCRIPTION",
            "sameAsObject": "TICKET"
        },
        {
            "attributeName": "FR2CODE",
            "required": false,
            "persistent": true,
            "title": "Resolution",
            "remarks": "Resolution",
            "sameAsAttribute": "FAILURECODE",
            "sameAsObject": "FAILURECODE",
            "viewColumnName": "FR2CODE",
            "tableName": "TICKET",
            "tableColumnName": "FR2CODE"
        },
        {
            "attributeName": "FR2CODE_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Resolution",
            "remarks": "Resolution long description",
            "sameAsAttribute": "FR2CODE_LONGDESCRIPTION",
            "sameAsObject": "TICKET"
        },
        {
            "attributeName": "TICKETUID",
            "required": false,
            "persistent": true,
            "title": "TICKETUID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": "TICKETUID",
            "sameAsObject": "TICKET",
            "viewColumnName": "TICKETUID",
            "tableName": "TICKET",
            "tableColumnName": "TICKETUID"
        },
        {
            "attributeName": "SOLUTION",
            "required": false,
            "persistent": true,
            "title": "Solution",
            "remarks": "Solution ID",
            "sameAsAttribute": "SOLUTION",
            "sameAsObject": "SOLUTION",
            "viewColumnName": "SOLUTION",
            "tableName": "TICKET",
            "tableColumnName": "SOLUTION"
        },
        {
            "attributeName": "DUPFLAG",
            "required": false,
            "persistent": false,
            "title": "Duplicate Flag",
            "remarks": "Duplicate Flag",
            "sameAsAttribute": "DUPFLAG",
            "sameAsObject": "TICKET"
        },
        {
            "attributeName": "ASSETUSER",
            "required": false,
            "persistent": false,
            "title": "User",
            "remarks": "Person ID in the Affected Person field is associated with an asset as an asset user. See the dialog box Help for more information.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "ASSETCUST",
            "required": false,
            "persistent": false,
            "title": "Custodian",
            "remarks": "Person ID in the Affected Person field is associated with the asset as an asset custodian. See the dialog box Help for more information.",
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
            "sameAsObject": "ORGANIZATION",
            "viewColumnName": "ASSETORGID",
            "tableName": "TICKET",
            "tableColumnName": "ASSETORGID"
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
            "sameAsObject": "LANGUAGE",
            "viewColumnName": "LANGCODE",
            "tableName": "TICKET",
            "tableColumnName": "LANGCODE"
        },
        {
            "attributeName": "ASSETFILTERBY",
            "required": true,
            "persistent": false,
            "title": "Filter By",
            "remarks": "Asset Filter By(all,user/custodia,public)",
            "sameAsAttribute": "ASSETFILTERBY",
            "sameAsObject": "TICKET"
        },
        {
            "attributeName": "SELECTSLAS_MODE",
            "required": false,
            "persistent": false,
            "title": "Select Mode",
            "remarks": "This field is for receiving the radio button values in the select slas dialog.",
            "sameAsAttribute": "SELECTSLAS_MODE",
            "sameAsObject": "TICKET"
        },
        {
            "attributeName": "REPORTEDBYNAME",
            "required": false,
            "persistent": false,
            "title": "Name",
            "remarks": "Name of person making the service request. Enter a value or click the Detail Menu button to select an option and retrieve a value.",
            "sameAsAttribute": "DISPLAYNAME",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "REPORTEDBYID",
            "required": false,
            "persistent": false,
            "title": "Reported By",
            "remarks": "Identifies person making the service request. Enter a value or click the Detail Menu button to select an option and retrieve a value.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "AFFECTEDPERSONID",
            "required": false,
            "persistent": false,
            "title": "Affected Person",
            "remarks": "Identifies person affected by the issue. Enter a value or click the Detail Menu button to select an option and retrieve a value.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "AFFECTEDUSERNAME",
            "required": false,
            "persistent": false,
            "title": "Name",
            "remarks": "Name of person affected by the issue. Enter a value or click the Detail Menu button to select an option and retrieve a value.",
            "sameAsAttribute": "DISPLAYNAME",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "SLAAPPLIED",
            "required": true,
            "persistent": false,
            "title": "SLA Applied",
            "remarks": "Specifies whether a service level agreement (SLA) has been applied to this record. If the check box is selected, a service level agreement has been applied to the record. If the check box is cleared, a service level agreement has not been applied to the record.",
            "sameAsAttribute": "SLAAPPLIED",
            "sameAsObject": "TICKET"
        },
        {
            "attributeName": "HASLD",
            "required": true,
            "persistent": true,
            "title": "Has Long Description",
            "remarks": "Boolean flag to indicate if there is any long description for this record",
            "sameAsAttribute": "HASLD",
            "sameAsObject": "TICKET",
            "viewColumnName": "HASLD",
            "tableName": "TICKET",
            "tableColumnName": "HASLD"
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
            "sameAsAttribute": "STATUSIFACE",
            "sameAsObject": "TICKET"
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
            "sameAsObject": "ACTCI",
            "viewColumnName": "CINUM",
            "tableName": "TICKET",
            "tableColumnName": "CINUM"
        },
        {
            "attributeName": "CREATEWOMULTI",
            "required": false,
            "persistent": true,
            "title": "Create WO Options",
            "remarks": "Identifies what happens to Multi table entries on Tickets when follow-up Work Orders are created",
            "sameAsAttribute": "CREATEWOMULTI",
            "sameAsObject": "TICKET",
            "viewColumnName": "CREATEWOMULTI",
            "tableName": "TICKET",
            "tableColumnName": "CREATEWOMULTI"
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
            "sameAsObject": "MULTIASSETLOCCI",
            "viewColumnName": "TARGETDESC",
            "tableName": "TICKET",
            "tableColumnName": "TARGETDESC"
        },
        {
            "attributeName": "TARGETDESC_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "TARGETDESC Long description",
            "remarks": "Long description for TARGETDESC",
            "sameAsAttribute": "TARGETDESC_LONGDESCRIPTION",
            "sameAsObject": "TICKET"
        },
        {
            "attributeName": "RELATEDGLOBALTICKETS",
            "required": false,
            "persistent": false,
            "title": "Related to Global tickets",
            "remarks": "Related to Global tickets",
            "sameAsAttribute": "RELATEDGLOBALTICKETS",
            "sameAsObject": "TICKET"
        },
        {
            "attributeName": "HASSOLUTION",
            "required": true,
            "persistent": true,
            "title": "Has Solution",
            "remarks": "Indicates whether this ticket has a solution or not. This can be either an adhoc one or a referenced solution.",
            "sameAsAttribute": "HASSOLUTION",
            "sameAsObject": "TICKET",
            "viewColumnName": "HASSOLUTION",
            "tableName": "TICKET",
            "tableColumnName": "HASSOLUTION"
        },
        {
            "attributeName": "SELFSERVSOLACCESS",
            "required": true,
            "persistent": true,
            "title": "Self-Service Access",
            "remarks": "Specifies whether the solution applied to this ticket is visible to the self-service user who opened the associated self-service Service Request. If the check box is selected, the self-service user can view this record. If the check box is cleared the solution record is not visible to the self-service user.",
            "sameAsAttribute": "SELFSERVSOLACCESS",
            "sameAsObject": "TICKET",
            "viewColumnName": "SELFSERVSOLACCESS",
            "tableName": "TICKET",
            "tableColumnName": "SELFSERVSOLACCESS"
        },
        {
            "attributeName": "ASSETRECONRSTKT",
            "required": false,
            "persistent": false,
            "title": "Ticket Asset Reconcilication Result",
            "remarks": "Trigger field for cross over domain.",
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
            "sameAsObject": "PERSONGROUP",
            "viewColumnName": "ASSIGNEDOWNERGROUP",
            "tableName": "TICKET",
            "tableColumnName": "ASSIGNEDOWNERGROUP"
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
            "attributeName": "CALCORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization associated with the calculation calendar, and used with the Calendar and Shift fields to calculate the Target Contact, Target Response, and Target Resolution dates on a ticket or work order. Click the Detail Menu button to select an organization or go to the Organizations application to create one.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION",
            "viewColumnName": "CALCORGID",
            "tableName": "TICKET",
            "tableColumnName": "CALCORGID"
        },
        {
            "attributeName": "CALCCALENDAR",
            "required": false,
            "persistent": true,
            "title": "Calendar",
            "remarks": "Business days and times used to calculate the Target Contact, Target Response, and Target Resolution dates on a ticket or work order. Click the Detail Menu to select a calendar or go to the Calendars application to create one.",
            "sameAsAttribute": "CALNUM",
            "sameAsObject": "CALENDAR",
            "viewColumnName": "CALCCALENDAR",
            "tableName": "TICKET",
            "tableColumnName": "CALCCALENDAR"
        },
        {
            "attributeName": "CALCSHIFT",
            "required": false,
            "persistent": true,
            "title": "Shift",
            "remarks": "Along with the calculation calendar, sets the business hours that calculate the Target Contact, Target Response, and Target Resolution dates on a ticket or work order. Click the Select Value button to choose a shift.",
            "sameAsAttribute": "SHIFTNUM",
            "sameAsObject": "SHIFT",
            "viewColumnName": "CALCSHIFT",
            "tableName": "TICKET",
            "tableColumnName": "CALCSHIFT"
        }
    ],
    "viewinfo": {
        "autosect": true,
        "viewwhere": "class in ( select value from synonymdomain where domainid='TKCLASS'  and maxvalue= 'SR'  )"
    },
    "outgoingRelationships": [
        {
            "name": "VIEWACTCI",
            "target": "CI",
            "remarks": "Relationship to the CI table, used to find a CI record for a given SR. (CI.cinum = SR.cinum). The resulting set will contain zero or one object.",
            "whereClause": "cinum=:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "target": "DOCLINKS",
            "remarks": "Relationship to the DocLinks table, used to find all document records for a given ticket.  (doclinks.keytable = 'SR' and doclinks.keycolumn = 'TICKETID' and doclinks.keyvalue = sr.ticketid$DOCLINKS.KEYVALUE and doclinks.orgid = sr.orgid). The resulting set will contain zero or more objects. Note: The SR.TICKETID field value will be formatted to match the DocLinks.KeyValue data type.",
            "whereClause": "(ownertable = 'SR' and ownerid = :ticketuid) or (  ownertable='PROBLEM' and ownerid in (select ticketuid from problem where ticketid=:origrecordid and class=:origrecordclass )) or (  ownertable='INCIDENT' and ownerid in (select ticketuid from incident where ticketid=:origrecordid and class=:origrecordclass)  ) or (  ownertable='WOCHANGE' and ownerid in (select workorderid from wochange where wonum=:origrecordid and woclass=:origrecordclass)  ) or (  ownertable='WORELEASE' and ownerid in (select workorderid from worelease where wonum=:origrecordid and woclass=:origrecordclass) ) or (ownertable='SOLUTION' and ownerid in (select solutionid from solution where solution=:solution)) or (ownertable='ASSET' and ownerid in (select assetuid from asset where assetnum=:assetnum and siteid=:assetsiteid)) or (ownertable='LOCATIONS' and ownerid in (select locationsid from locations where location=:location and siteid=:assetsiteid)) or (ownertable='WOACTIVITY' and ownerid in (select workorderid from woactivity where origrecordid=:ticketid and origrecordclass=:class)) or (ownertable='JOBPLAN' and ownerid in (select jobplanid from jobplan where jpnum in (select jpnum from woactivity where origrecordid=:ticketid and origrecordclass=:class))) or (ownertable='COMMLOG' and ownerid in (select commloguid from commlog where ownertable='SR' and ownerid=:ticketuid))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS_ASSETID",
            "target": "DOCLINKS",
            "remarks": "Relationship to the DocLinks table, used to find all document records for a given ticket. This relationship includes asset-related doclinks using assetid (global) instead of assetuid (site-specific). (doclinks.keytable = 'SR' and doclinks.keycolumn = 'TICKETID' and doclinks.keyvalue = sr.ticketid$DOCLINKS.KEYVALUE and doclinks.orgid = sr.orgid). The resulting set will contain zero or more objects. Note: The SR.TICKETID field value will be formatted to match the DocLinks.KeyValue data type.",
            "whereClause": "(ownertable = 'SR' and ownerid = :ticketuid) or (  ownertable='PROBLEM' and ownerid in (select ticketuid from problem where ticketid=:origrecordid and class=:origrecordclass )) or (  ownertable='INCIDENT' and ownerid in (select ticketuid from incident where ticketid=:origrecordid and class=:origrecordclass)  ) or (  ownertable='WOCHANGE' and ownerid in (select workorderid from wochange where wonum=:origrecordid and woclass=:origrecordclass)  ) or (  ownertable='WORELEASE' and ownerid in (select workorderid from worelease where wonum=:origrecordid and woclass=:origrecordclass) ) or (ownertable='SOLUTION' and ownerid in (select solutionid from solution where solution=:solution)) or (ownertable='ASSET' and ownerid in (select assetid from asset where assetnum=:assetnum and siteid=:assetsiteid)) or (ownertable='LOCATIONS' and ownerid in (select locationsid from locations where location=:location and siteid=:assetsiteid)) or (ownertable='WOACTIVITY' and ownerid in (select workorderid from woactivity where origrecordid=:ticketid and origrecordclass=:class)) or (ownertable='JOBPLAN' and ownerid in (select jobplanid from jobplan where jpnum in (select jpnum from woactivity where origrecordid=:ticketid and origrecordclass=:class))) or (ownertable='COMMLOG' and ownerid in (select commloguid from commlog where ownertable='SR' and ownerid=:ticketuid))",
            "cardinality": null
        },
        {
            "name": "STATUSDESC",
            "target": "SYNONYMDOMAIN",
            "remarks": "Relationship to synonymdomain table, used to find description for the status, it will contain one object.",
            "whereClause": "domainid='SRSTATUS' and value=:status and :&DOMAINFILTER&_STATUS",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SRSPECCLASS",
            "target": "TICKETSPEC",
            "remarks": "Relationship to the ticketspec table, used to find the ticketspec records for a given sr. (sr.ticketid=ticketspec.ticketid and sr.class=ticketspec.class and sr.classstructureid=ticketspec.classstructureid) The resulting set will contain zero or more object.",
            "whereClause": "refobjectid=:ticketuid and refobjectname='SR' and classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SERVICEADDRESS",
            "target": "TKSERVICEADDRESS",
            "remarks": "SR Service Address for Service Request",
            "whereClause": "ticketid = :ticketid and class = :class",
            "cardinality": null
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
            "remarks": "Relationship from the SR to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFASSIGNMENT",
            "target": "WFASSIGNMENT",
            "remarks": "Relationship to active assignments on this RFQ. (ownertable = 'RFQ' and ownerid = :rfqid and assignstatus in (select value from synonymdomain where domainid='WFASGNSTATUS' and maxvalue='ACTIVE')). Zero to many member set.",
            "whereClause": "ownertable = 'SR' and wfassignment.ownerid = :ticketuid and assignstatus in (select value from synonymdomain where domainid='WFASGNSTATUS' and maxvalue='ACTIVE')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFTOOLBAR",
            "target": "WFTOOLBAR",
            "remarks": "Relationship to virutal set that manages the toolbar buttons. (empty). Any number member set.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFTRANSACTION",
            "target": "WFTRANSACTION",
            "remarks": "Relationship to workflow transactions. (ownertable = 'PO' and ownerid = :poid). Zero to many member set.",
            "whereClause": "ownertable = 'SR' and ownerid = :ticketuid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKFLOWMAP",
            "target": "WORKFLOWMAP",
            "remarks": "Get virtual set to display process maps",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "SRASSET",
            "source": "ASSET",
            "remarks": "Relationship to TICKETS table.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SR",
            "source": "CI",
            "remarks": "Relationship to the SR table, used to find SR record for a given CI.",
            "whereClause": "cinum=:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SRCI",
            "source": "CI",
            "remarks": "Relationship to TICKETS table.",
            "whereClause": "cinum=:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SR",
            "source": "CLASSSTRUCTURE",
            "remarks": "Relationship to the SR table, used to find the SR records for a given classstructure. (classstructure.classstructureid = sr.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LSNRBPSR",
            "source": "INBOUNDCOMM",
            "remarks": "all sr records for inboundcomm",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LSNRBPUPDSR",
            "source": "INBOUNDCOMM",
            "remarks": "all sr records for the person for inboundcomm",
            "whereClause": "reportedby=:personid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LSNRSR",
            "source": "INBOUNDCOMM",
            "remarks": "SR for the inboundcomm objectkey",
            "whereClause": "ticketid = :objectkey",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LSNRBPFUSR",
            "source": "INBOUNDCOMM",
            "remarks": "sr record for inboundcomm",
            "whereClause": "ticketid = :objectkey",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "EMAILSR",
            "source": "INBOUNDCOMM",
            "remarks": "SR for inboundcomm",
            "whereClause": "reportedemail =:sendfrom",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SRLOC",
            "source": "LOCATIONS",
            "remarks": "Relationship to TICKETS table.",
            "whereClause": "location=:location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SRASSET",
            "source": "RECONASSETRESULT",
            "remarks": "Relationship to Service Request Ticket",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "NEWSR",
            "source": "TICKET",
            "remarks": "This relationship gets the last SR created by this ticket. (<long>) One member set.",
            "whereClause": "origrecordclass = :class and origrecordid = :ticketid and class in (select value from synonymdomain where domainid = 'TKCLASS' and maxvalue = 'SR') and reportdate = (select max(reportdate) from ticket where origrecordclass = :class and origrecordid = :ticketid and class in (select value from synonymdomain where domainid = 'TKCLASS' and maxvalue = 'SR'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SR",
            "source": "TKSERVICEADDRESS",
            "remarks": "Service Request for SR Service Address",
            "whereClause": "ticketid = :ticketid and class = :class",
            "cardinality": null
        },
        {
            "name": "NEWSR",
            "source": "WORKORDER",
            "remarks": "This relationship gets the last SR created by this work order. (<long>) One member set.",
            "whereClause": "origrecordclass = :woclass and origrecordid = :wonum and class in (select value from synonymdomain where domainid = 'TKCLASS' and maxvalue = 'SR') and reportdate = (select max(reportdate) from ticket where origrecordclass = :woclass and origrecordid = :wonum and class in (select value from synonymdomain where domainid = 'TKCLASS' and maxvalue = 'SR'))",
            "cardinality": "UNDEFINED"
        }
    ]
}