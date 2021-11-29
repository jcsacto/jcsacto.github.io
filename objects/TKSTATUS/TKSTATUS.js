mos = {
    "objectName": "TKSTATUS",
    "className": "psdi.app.ticket.TKStatusSet",
    "description": "The Ticket Status Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "TKSTATUSID",
    "primaryKeyColumns": [
        "TKSTATUSID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ORGANIZATION",
            "targetObject": "TKSTATUS",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "TKSTATUS",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "TKSTATUS",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "TICKETID",
            "required": true,
            "persistent": true,
            "title": "Ticket",
            "remarks": "Identifier of the Ticket",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CLASS",
            "required": true,
            "persistent": true,
            "title": "Ticket Class",
            "remarks": "Type of the ticket",
            "sameAsAttribute": "CLASS",
            "sameAsObject": "TICKET"
        },
        {
            "attributeName": "STATUS",
            "required": true,
            "persistent": true,
            "title": "Status",
            "remarks": "Status of the ticket. Default statuses are NEW, QUEUED, PENDING, INPROG, RESOLVED, and CLOSED. See the online Help for more information on statuses.",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "TICKET"
        },
        {
            "attributeName": "CHANGEBY",
            "required": true,
            "persistent": true,
            "title": "Changed By",
            "remarks": "Identifies the person who modified or changed the status.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "Date on which ticket status changed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": true,
            "title": "Memo",
            "remarks": "Optional memo entry about this status change.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "Unique Identifier of the Site",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Constraint Identifier of the organization",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "TKSTATUSID",
            "required": true,
            "persistent": true,
            "title": "TKSTATUSID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "TKSTATUS",
            "source": "TICKET",
            "remarks": null,
            "whereClause": "ticketid=:ticketid and class=:class",
            "cardinality": "UNDEFINED"
        }
    ]
}