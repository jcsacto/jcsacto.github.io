mos = {
    "objectName": "CALENDAR",
    "className": "psdi.app.calendar.CalendarSet",
    "description": "The CALENDAR Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "CALENDARID",
    "primaryKeyColumns": [
        "ORGID",
        "CALNUM"
    ],
    "logicalRelationships": [
        {
            "objectName": "CALENDAR",
            "targetObject": "AMCREW",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "ORGID, CALNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Calendar",
            "longDescription": null
        },
        {
            "objectName": "CALENDAR",
            "targetObject": "AMCREWLABOR",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "ORGID, CALNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Labor Calendar",
            "longDescription": null
        },
        {
            "objectName": "CALENDAR",
            "targetObject": "AMCREWTOOL",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "ORGID, CALNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Tool Calendar",
            "longDescription": null
        },
        {
            "objectName": "CALENDAR",
            "targetObject": "ASSET",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "ORGID, CALNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset Calendar",
            "longDescription": null
        },
        {
            "objectName": "CALENDAR",
            "targetObject": "ASSETSTATUS",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "ORGID, CALNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Calendar when the Asset''s status was changed.",
            "longDescription": null
        },
        {
            "objectName": "CALENDAR",
            "targetObject": "CI",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "ASSETLOCORGID, CALNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "CI Calenar",
            "longDescription": null
        },
        {
            "objectName": "CALENDAR",
            "targetObject": "ESCALATION",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "ESCCALORGID, ESCCALENDAR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Escalation Calendar",
            "longDescription": null
        },
        {
            "objectName": "CALENDAR",
            "targetObject": "ESCALATION",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "ORGID, ESCCALENDAR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 5",
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
            "objectName": "CALENDAR",
            "targetObject": "INCIDENT",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "ASSETORGID, CALCCALENDAR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 7",
            "longDescription": null
        },
        {
            "objectName": "CALENDAR",
            "targetObject": "INCIDENT",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "CALCORGID, CALCCALENDAR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 8",
            "longDescription": null
        },
        {
            "objectName": "CALENDAR",
            "targetObject": "INCIDENT",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "ORGID, CALCCALENDAR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 9",
            "longDescription": null
        },
        {
            "objectName": "CALENDAR",
            "targetObject": "INCIDENT",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "ORIGRECORGID, CALCCALENDAR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 10",
            "longDescription": null
        },
        {
            "objectName": "CALENDAR",
            "targetObject": "JOBPLAN",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "ORGID, CALENDAR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Job Plan Calendar",
            "longDescription": null
        },
        {
            "objectName": "CALENDAR",
            "targetObject": "LOCOPER",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "ORGID, CALNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location''s Calendar",
            "longDescription": null
        },
        {
            "objectName": "CALENDAR",
            "targetObject": "PERSONCAL",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "ORGID, CALNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person Calendar",
            "longDescription": null
        },
        {
            "objectName": "CALENDAR",
            "targetObject": "PM",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "ORGID, CALENDAR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Calendar used by PM",
            "longDescription": null
        },
        {
            "objectName": "CALENDAR",
            "targetObject": "PROBLEM",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "ASSETORGID, CALCCALENDAR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 15",
            "longDescription": null
        },
        {
            "objectName": "CALENDAR",
            "targetObject": "PROBLEM",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "CALCORGID, CALCCALENDAR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 16",
            "longDescription": null
        },
        {
            "objectName": "CALENDAR",
            "targetObject": "PROBLEM",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "ORGID, CALCCALENDAR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 17",
            "longDescription": null
        },
        {
            "objectName": "CALENDAR",
            "targetObject": "PROBLEM",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "ORIGRECORGID, CALCCALENDAR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 18",
            "longDescription": null
        },
        {
            "objectName": "CALENDAR",
            "targetObject": "SKDACTIVITYQBE",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "ORGID, CALNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "SKD Activity QBE Calendar",
            "longDescription": null
        },
        {
            "objectName": "CALENDAR",
            "targetObject": "SKDEXTRACAPCREWVIEW",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "ORGID, CALNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Extra Capacity Crew Calendar",
            "longDescription": null
        },
        {
            "objectName": "CALENDAR",
            "targetObject": "SKDEXTRACAPCREWVIEW",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "ORGID1, CALNUM",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 24",
            "longDescription": null
        },
        {
            "objectName": "CALENDAR",
            "targetObject": "SKDPROJECT",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "ORGID, CALNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Calendar for Gantt View",
            "longDescription": null
        },
        {
            "objectName": "CALENDAR",
            "targetObject": "SLA",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "CALCORGID, CALCCALENDAR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Calendar used to calculate target date.",
            "longDescription": null
        },
        {
            "objectName": "CALENDAR",
            "targetObject": "SLA",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "CALCORGID, SLACALENDAR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 21",
            "longDescription": null
        },
        {
            "objectName": "CALENDAR",
            "targetObject": "SLA",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "ORGID, CALCCALENDAR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 22",
            "longDescription": null
        },
        {
            "objectName": "CALENDAR",
            "targetObject": "SLA",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "ORGID, SLACALENDAR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 23",
            "longDescription": null
        },
        {
            "objectName": "CALENDAR",
            "targetObject": "SLA",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "SLAORGID, CALCCALENDAR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 24",
            "longDescription": null
        },
        {
            "objectName": "CALENDAR",
            "targetObject": "SLA",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "SLAORGID, SLACALENDAR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "SLA''s Calendar",
            "longDescription": null
        },
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
            "objectName": "CALENDAR",
            "targetObject": "WMASSIGNMENT",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "ORGID, CALENDAR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Assignment Calendar",
            "longDescription": null
        },
        {
            "objectName": "CALENDAR",
            "targetObject": "WOACTIVITY",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "CALCORGID, CALCCALENDAR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Calendar used for target calculations",
            "longDescription": null
        },
        {
            "objectName": "CALENDAR",
            "targetObject": "WOACTIVITY",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "CALCORGID, CALENDAR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 37",
            "longDescription": null
        },
        {
            "objectName": "CALENDAR",
            "targetObject": "WOACTIVITY",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "ORGID, CALCCALENDAR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 38",
            "longDescription": null
        },
        {
            "objectName": "CALENDAR",
            "targetObject": "WOACTIVITY",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "ORGID, CALENDAR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Calendar for Activity",
            "longDescription": null
        },
        {
            "objectName": "CALENDAR",
            "targetObject": "WOCHANGE",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "CALCORGID, CALCCALENDAR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Calendar used for target calculations",
            "longDescription": null
        },
        {
            "objectName": "CALENDAR",
            "targetObject": "WOCHANGE",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "CALCORGID, CALENDAR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 41",
            "longDescription": null
        },
        {
            "objectName": "CALENDAR",
            "targetObject": "WOCHANGE",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "ORGID, CALCCALENDAR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 42",
            "longDescription": null
        },
        {
            "objectName": "CALENDAR",
            "targetObject": "WOCHANGE",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "ORGID, CALENDAR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Calendar for Change",
            "longDescription": null
        },
        {
            "objectName": "CALENDAR",
            "targetObject": "WOGEN",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "ORGID, CALENDAR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 44",
            "longDescription": null
        },
        {
            "objectName": "CALENDAR",
            "targetObject": "WORELEASE",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "CALCORGID, CALCCALENDAR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Calendar used for target calculations",
            "longDescription": null
        },
        {
            "objectName": "CALENDAR",
            "targetObject": "WORELEASE",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "CALCORGID, CALENDAR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 46",
            "longDescription": null
        },
        {
            "objectName": "CALENDAR",
            "targetObject": "WORELEASE",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "ORGID, CALCCALENDAR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 47",
            "longDescription": null
        },
        {
            "objectName": "CALENDAR",
            "targetObject": "WORELEASE",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "ORGID, CALENDAR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Calendar for Release",
            "longDescription": null
        },
        {
            "objectName": "CALENDAR",
            "targetObject": "WORKORDER",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "CALCORGID, CALCCALENDAR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Target Calculation Calendar",
            "longDescription": null
        },
        {
            "objectName": "CALENDAR",
            "targetObject": "WORKORDER",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "CALCORGID, CALENDAR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 50",
            "longDescription": null
        },
        {
            "objectName": "CALENDAR",
            "targetObject": "WORKORDER",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "ORGID, CALCCALENDAR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 51",
            "longDescription": null
        },
        {
            "objectName": "CALENDAR",
            "targetObject": "WORKORDER",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "ORGID, CALENDAR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Order Calendar",
            "longDescription": null
        },
        {
            "objectName": "CALENDAR",
            "targetObject": "WORKPERIOD",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "ORGID, CALNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Workperiods generated for a calendar.",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "CALENDAR",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "CALENDAR",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "CALNUM",
            "required": true,
            "persistent": true,
            "title": "Calendar",
            "remarks": "Identifies the calendar, for example NIGHT, for a night shift calendar. This value must be unique for all calendars within an organization.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the calendar, for example, Standard Night Shift Calendar.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STARTDATE",
            "required": true,
            "persistent": true,
            "title": "Start Date",
            "remarks": "Date on which you can begin to use the calendar.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDDATE",
            "required": true,
            "persistent": true,
            "title": "End Date",
            "remarks": "Last day on which you can use the calendar.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Identifies the organization the calendar belongs to.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Long Description for Calendar Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CALENDARID",
            "required": true,
            "persistent": true,
            "title": "CALENDARID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "HASLD",
            "required": true,
            "persistent": true,
            "title": "Has Long Description",
            "remarks": "Boolean flag to indicate if there is any long description for this record",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "APPLYNONWORKTIME",
            "target": "APPLYNONWORKTIME",
            "remarks": "Relationship to the nonpersistent parameter set to apply  non work time.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CALCWORKHOURS",
            "target": "CALCWORKHOURS",
            "remarks": "Relationship to the nonpersistent parameter set to Calculate Work Hours.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DELETEWORKPERIOD",
            "target": "DELETEWORKPERIOD",
            "remarks": "Relationship to the nonpersistent parameter set to delete workperiods.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "target": "DOCLINKS",
            "remarks": "Relationship to the Doclink table, used to find all document records for a given calendar) This will return 0 or more objects",
            "whereClause": "ownertable = 'CALENDAR' and ownerid = :calendarid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LONGDESC",
            "target": "LONGDESCRIPTION",
            "remarks": "Relationship to get long description table from CALENDAR.",
            "whereClause": "ldkey=:calendarid and ldownertable = 'CALENDAR'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NONWORKTIME",
            "target": "NONWORKTIME",
            "remarks": null,
            "whereClause": "enddate >=:startdate and startdate <= :enddate ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SELECTORGSHIFT",
            "target": "SHIFT",
            "remarks": null,
            "whereClause": "orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKPERIOD",
            "target": "WORKPERIOD",
            "remarks": "Relationship to the Calendar's WorkPeriod record(s). Used to find workperiod set for a given Calendar. (WorkPeriod.calnum=Calendar.calnum and workdate between Calendar.startdate and Calendar.enddate). The resulting set will contain zero or more objects.",
            "whereClause": "calnum=:calnum and orgid=:orgid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "CALENDAR",
            "source": "PERSONCAL",
            "remarks": "Relationship to the calendar table.  Used to find the calendar whose calnumis contained in this personcals calnum.  (personcal.calnum=calendar.calnum).  The resulting set will return zero or one object.",
            "whereClause": "calnum=:calnum and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSONGROUPTEAM_CALENDAR",
            "source": "PERSONGROUPTEAM",
            "remarks": "Temp relationship to get a calendar for a persongroupteam member",
            "whereClause": "calnum in (select calnum from personcal where personid=:respparty)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SKDCALENDAR",
            "source": "SKDPROJECT",
            "remarks": "Calendar for a project",
            "whereClause": "calnum=:calnum and orgid = :orgid",
            "cardinality": null
        },
        {
            "name": "CALENDAR",
            "source": "WORKORDER",
            "remarks": "Relationship to the calendar table, used to find the calendar for a work order.\t(calendar.calnum = Workorder.calendar). This resulting set will contain zero or one object. If the workorder's Calendar attribute isn't null, this set will have one member.",
            "whereClause": "calnum=:calendar and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WO_CALENDAR",
            "source": "WORKORDER",
            "remarks": null,
            "whereClause": "calnum=:calendar and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CALENDAR",
            "source": "WORKPERIOD",
            "remarks": "Relationship between WORKPERIOD and CALENDAR tables.",
            "whereClause": "orgid = :orgid and calnum = :calnum",
            "cardinality": null
        }
    ]
}