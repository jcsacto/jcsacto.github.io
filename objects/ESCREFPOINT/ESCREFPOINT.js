mos = {
    "objectName": "ESCREFPOINT",
    "className": "psdi.app.escalation.EscalationReferencePointSet",
    "description": "Contains attrs. to define a Refrence point",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "REFPOINTID",
    "primaryKeyColumns": [
        "REFPOINTNUM",
        "ESCALATION"
    ],
    "logicalRelationships": [
        {
            "objectName": "ESCREFPOINT",
            "targetObject": "ESCNOTIFICATION",
            "parentKeys": "REFPOINTNUM, ESCALATION",
            "targetKeys": "REFPOINTNUM, ESCALATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Escalation Reference Point",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "ACTION",
            "targetObject": "ESCREFPOINT",
            "parentKeys": "ACTION",
            "targetKeys": "ACTION",
            "relNum": "1 to 1",
            "status": "VERIFIED",
            "description": "Action to perform at escalation point",
            "longDescription": null
        },
        {
            "objectName": "CALENDAR",
            "targetObject": "ESCREFPOINT",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "CALCORGID, CALCCALENDAR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Calendar",
            "longDescription": null
        },
        {
            "objectName": "ESCALATION",
            "targetObject": "ESCREFPOINT",
            "parentKeys": "ESCALATION",
            "targetKeys": "ESCALATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Escalation",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "ESCREFPOINT",
            "parentKeys": "ORGID",
            "targetKeys": "CALCORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 76",
            "longDescription": null
        },
        {
            "objectName": "SHIFT",
            "targetObject": "ESCREFPOINT",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "CALCORGID, CALCSHIFT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Shift",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "ESCALATION",
            "required": false,
            "persistent": true,
            "title": "Escalation",
            "remarks": "Escalation",
            "sameAsAttribute": "ESCALATION",
            "sameAsObject": "ESCALATION"
        },
        {
            "attributeName": "REFPOINTNUM",
            "required": true,
            "persistent": true,
            "title": "Escalation Point",
            "remarks": "Automatically generated number that identifies an escalation point associated with the escalation.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EVENTCONDITION",
            "required": false,
            "persistent": true,
            "title": "Escalation Point Condition",
            "remarks": "In addition to the header Condition, a filter at the escalation point level that further defines the set of records you want the escalation point to target. The filter is expressed in the form of a SQL where clause. If the conditions for this escalation point are met, any actions or notifications associated with this escalation point are triggered. You can enter the SQL condition manually, or click the Detail Menu button to use the SQL Expression Builder.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ELAPSEDINTERVAL",
            "required": false,
            "persistent": true,
            "title": "Elapsed Time Interval",
            "remarks": "Together with the Interval Unit of Measure field, indicates the time period to measure against the value in the Elapsed Time Attribute field. Must be a numeric value. A positive numeric value indicates a time period in the past. A negative numeric value indicates a time period in the future.",
            "sameAsAttribute": "VALUE",
            "sameAsObject": "SLACOMMITMENTS"
        },
        {
            "attributeName": "INTERVALUOM",
            "required": false,
            "persistent": true,
            "title": "Interval Unit of Measure",
            "remarks": "Together with the Elapsed Time Interval field, indicates the unit of time to measure against the value in the Elapsed Time Attribute field. Click the Select Value button to choose a time interval, such as HOURS or WEEKS.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REPEAT",
            "required": true,
            "persistent": true,
            "title": "Repeat",
            "remarks": "Specifies whether to continue monitoring for records that meet this escalation point's criteria after the first instance is found. If selected, the escalation will continue to trigger actions and/or notifications associated with this escalation poin when the conditions are met. If the check box is cleared (the default), the escalation only runs once when the conditions are met.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REFPOINTID",
            "required": true,
            "persistent": true,
            "title": "Unique ID",
            "remarks": "Unique ID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VALIDATIONERROR",
            "required": true,
            "persistent": false,
            "title": "Validation Error",
            "remarks": "Flags the refrence point if condition validation failed",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EVENTATTRIBUTE",
            "required": false,
            "persistent": true,
            "title": "Elapsed Time Attribute",
            "remarks": "Describes a date or date-time attribute of the business object selected for the escalation. For example, TARGETFINISH is an attribute of INCIDENT object. Used with the Elapsed Time Interval and Interval Unit of Measure fields to trigger an escalation if the elapsed time criteria are met.",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "ACTION",
            "required": false,
            "persistent": true,
            "title": "Action",
            "remarks": "Sets of actions that are grouped together in a specific sequence, which can then be associated with an escalation point. Click the Detail Menu button to choose an action group or go to the Actions application to create one.",
            "sameAsAttribute": "ACTION",
            "sameAsObject": "ACTION"
        },
        {
            "attributeName": "CONDITION",
            "required": false,
            "persistent": false,
            "title": "condition Code",
            "remarks": "NP - Condition",
            "sameAsAttribute": "EVENTCONDITION",
            "sameAsObject": "ESCREFPOINT"
        },
        {
            "attributeName": "EXPOBJECT",
            "required": false,
            "persistent": false,
            "title": "ExpObject",
            "remarks": "ExpObject",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
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
            "name": "ESCACTION",
            "target": "ACTION",
            "remarks": "Relationship for action",
            "whereClause": "action =:action",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ESCACTIONGRP",
            "target": "ACTIONGROUP",
            "remarks": "Relationship for action tab",
            "whereClause": "action =:action",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ESCNOTIFICATION",
            "target": "ESCNOTIFICATION",
            "remarks": "Relationship for notifications",
            "whereClause": "refpointid =:refpointid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "EXPBUILDER",
            "target": "EXPBUILDER",
            "remarks": "Relationship for EXPBUILD",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "ESCREFPOINT",
            "source": "ESCALATION",
            "remarks": "Relationship for reference points",
            "whereClause": "escalation =:escalation",
            "cardinality": "UNDEFINED"
        }
    ]
}