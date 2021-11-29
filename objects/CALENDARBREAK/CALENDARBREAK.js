mos = {
    "objectName": "CALENDARBREAK",
    "className": "psdi.app.calendar.CalendarBreakSet",
    "description": "Calendar Breaks",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "CALENDARBREAKID",
    "primaryKeyColumns": [
        "ORGID",
        "CALENDARBREAKID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ORGANIZATION",
            "targetObject": "CALENDARBREAK",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization",
            "longDescription": null
        },
        {
            "objectName": "SHIFT",
            "targetObject": "CALENDARBREAK",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "ORGID, SHIFTNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Shift",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "SHIFTNUM",
            "required": true,
            "persistent": true,
            "title": "Shift",
            "remarks": "Identifier of shift that this pattern day belongs to.",
            "sameAsAttribute": "SHIFTNUM",
            "sameAsObject": "SHIFT"
        },
        {
            "attributeName": "PATTERNDAYSEQ",
            "required": true,
            "persistent": true,
            "title": "Sequence of Pattern Day",
            "remarks": "Ordinal number identifing a specific day within a repeating pattern of days.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BREAKTYPE",
            "required": true,
            "persistent": true,
            "title": "Break",
            "remarks": "The reason for the change from work time to non-work time.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "STARTTIME",
            "required": true,
            "persistent": true,
            "title": "Start Time",
            "remarks": "The time that the break starts on a given day in the pattern.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDTIME",
            "required": true,
            "persistent": true,
            "title": "End Time",
            "remarks": "The time that the break ends on a given day in the pattern.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WORKHOURS",
            "required": false,
            "persistent": true,
            "title": "Work Hours",
            "remarks": "The break duration.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CALENDARBREAKID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "REASONCODE",
            "target": "SYNONYMDOMAIN",
            "remarks": "Relationship to the synonymdomain table to get the break description.",
            "whereClause": "domainid='RSNCODE' and value=:breaktype",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "CALENDARBREAK",
            "source": "SHIFTPATTERNDAY",
            "remarks": "Relationship to the Shift's Calendar Break record(s). Used to find the break schedule for a given day for a given shift. (shiftnum=:shiftnum patterndayseq=:patterndayseq and orgid=:orgid). The resulting set will contain zero or many objects.",
            "whereClause": "shiftnum=:shiftnum and patterndayseq=:patterndayseq and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "CALENDARBREAK",
            "source": "WORKPERIOD",
            "remarks": "List breaks for a given workperiod.",
            "whereClause": "shiftnum=:shiftnum and patterndayseq=:patterndayseq and orgid=:orgid",
            "cardinality": null
        }
    ]
}