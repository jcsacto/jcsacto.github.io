mos = {
    "objectName": "SLARECORDS",
    "className": "psdi.app.sla.SLARecordsSet",
    "description": "Contains applied SLAs",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "SLARECORDSID",
    "primaryKeyColumns": [
        "SLANUM",
        "OWNERTABLE",
        "OWNERID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "CALENDAR",
            "targetObject": "SLARECORDS",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "CALCORGID, CALCCALENDAR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Calendar used for target calculations.",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "SLARECORDS",
            "parentKeys": "ORGID",
            "targetKeys": "CALCORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization used for target calculations.",
            "longDescription": null
        },
        {
            "objectName": "SHIFT",
            "targetObject": "SLARECORDS",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "CALCORGID, CALCSHIFT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Shift used for target calculations.",
            "longDescription": null
        },
        {
            "objectName": "SLA",
            "targetObject": "SLARECORDS",
            "parentKeys": "SLANUM",
            "targetKeys": "SLANUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Other records this SLA was applied to.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "SLANUM",
            "required": true,
            "persistent": true,
            "title": "SLA",
            "remarks": "Identifier of the SLA",
            "sameAsAttribute": "SLANUM",
            "sameAsObject": "SLA"
        },
        {
            "attributeName": "OWNERTABLE",
            "required": true,
            "persistent": true,
            "title": "Owner Table",
            "remarks": "Owner Table",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OWNERID",
            "required": true,
            "persistent": true,
            "title": "Owner ID",
            "remarks": "Owner ID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RESPONSEDATE",
            "required": false,
            "persistent": true,
            "title": "Response Time",
            "remarks": "Response Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RESOLUTIONDATE",
            "required": false,
            "persistent": true,
            "title": "Resolution Time",
            "remarks": "Resolution Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONTACTDATE",
            "required": false,
            "persistent": true,
            "title": "Contact Time",
            "remarks": "Contact Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SLARECORDSID",
            "required": true,
            "persistent": true,
            "title": "SLARECORDSID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SELECTMODE",
            "required": false,
            "persistent": false,
            "title": "Select Mode",
            "remarks": "Select Mode",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "name": "SLA",
            "target": "SLA",
            "remarks": "Relationship to sla.",
            "whereClause": "slanum = :slanum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SLARECTICKET",
            "target": "TICKET",
            "remarks": "Relationship to Ticket",
            "whereClause": ":ownertable = 'TICKET' and :ownerid = ticketuid",
            "cardinality": null
        },
        {
            "name": "WORKORDER",
            "target": "WORKORDER",
            "remarks": "Relationship to workorder.",
            "whereClause": ":ownertable = 'WORKORDER' and :ownerid = workorderid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "SLARECORDS",
            "source": "SLA",
            "remarks": "Relationship to the SLARecords table, used to find the SLARecords for a given SLA. (sla.slanum = slarecords.slanum). The resulting set will contain zero or more objects.",
            "whereClause": "slanum = :slanum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SLARECORDS",
            "source": "TICKET",
            "remarks": "Relationship to the SLARECORDS, which leads to the SLAs applied to this ticket.",
            "whereClause": "ownertable = 'TICKET' and ownerid = :ticketuid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SLARECORDS",
            "source": "WORKORDER",
            "remarks": "Relationship to the SLARECORDS, which leads to the SLAs applied to this workorder.",
            "whereClause": "ownertable = 'WORKORDER' and ownerid = :workorderid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SLARECORDS_TASKS",
            "source": "WORKORDER",
            "remarks": "Relationship to the SLARECORDS, including the ones for assoicated acitivities.",
            "whereClause": " ownertable = 'WORKORDER' and (ownerid = :workorderid or ownerid in (select workorderid from workorder where parent = :wonum and siteid = :siteid and istask=:yes)) ",
            "cardinality": "UNDEFINED"
        }
    ]
}