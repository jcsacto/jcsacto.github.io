mos = {
    "objectName": "TKOWNERHISTORY",
    "className": "psdi.app.ticket.OwnerHistorySet",
    "description": "Ticket owner history",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "TKOWNERHISTORYID",
    "primaryKeyColumns": [
        "TICKETID",
        "CLASS",
        "OWNDATE"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ORGANIZATION",
            "targetObject": "TKOWNERHISTORY",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "TKOWNERHISTORY",
            "parentKeys": "PERSONID",
            "targetKeys": "OWNER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Owner",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "TKOWNERHISTORY",
            "parentKeys": "PERSONID",
            "targetKeys": "OWNERCHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Owner Changed by",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "TKOWNERHISTORY",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "ASSIGNEDOWNERGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Assigned Owner Group",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "TKOWNERHISTORY",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "OWNERGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Owner Group",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "TKOWNERHISTORY",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
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
        }
    ],
    "columns": [
        {
            "attributeName": "TICKETID",
            "required": true,
            "persistent": true,
            "title": "Ticket ",
            "remarks": "Ticket identifier",
            "sameAsAttribute": "TICKETID",
            "sameAsObject": "TICKET"
        },
        {
            "attributeName": "CLASS",
            "required": true,
            "persistent": true,
            "title": "Class",
            "remarks": "Ticket class",
            "sameAsAttribute": "CLASS",
            "sameAsObject": "TICKET"
        },
        {
            "attributeName": "OWNERGROUP",
            "required": false,
            "persistent": true,
            "title": "Owner Group",
            "remarks": "Owner group of the ticket as of this date.",
            "sameAsAttribute": "PERSONGROUP",
            "sameAsObject": "PERSONGROUP"
        },
        {
            "attributeName": "OWNER",
            "required": false,
            "persistent": true,
            "title": "Owner",
            "remarks": "Owner of the ticket as of this date.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "OWNDATE",
            "required": false,
            "persistent": true,
            "title": "Date",
            "remarks": "Date of ownership change.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "site of the ticket",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization identifier of the ticket",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "TKOWNERHISTORYID",
            "required": true,
            "persistent": true,
            "title": "TKOWNERHISTORYID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OWNERCHANGEBY",
            "required": false,
            "persistent": true,
            "title": "Changed By",
            "remarks": "Identifies the person who changed the ownership.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "ASSIGNEDOWNERGROUP",
            "required": false,
            "persistent": true,
            "title": "Assigned Owner Group",
            "remarks": "Assigned Owner Group of the ticket history record. This group has overall responsibility for the solution.",
            "sameAsAttribute": "PERSONGROUP",
            "sameAsObject": "PERSONGROUP"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "OWNERHISTORY",
            "source": "TICKET",
            "remarks": null,
            "whereClause": "ticketid=:ticketid and class=:class ",
            "cardinality": "UNDEFINED"
        }
    ]
}