mos = {
    "objectName": "WORKPERIOD",
    "className": "psdi.app.calendar.WorkPeriodSet",
    "description": "The WORKPERIOD Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "WORKPERIODID",
    "primaryKeyColumns": [
        "ORGID",
        "CALNUM",
        "WORKDATE",
        "SHIFTNUM"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "CALENDAR",
            "targetObject": "WORKPERIOD",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "ORGID, CALNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Workperiods generated for a calendar.",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "WORKPERIOD",
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
            "remarks": "Calendar Work Period Is Tied To",
            "sameAsAttribute": "CALNUM",
            "sameAsObject": "CALENDAR"
        },
        {
            "attributeName": "WORKDATE",
            "required": true,
            "persistent": true,
            "title": "Work Date",
            "remarks": "Date Of Work Period",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SHIFTNUM",
            "required": true,
            "persistent": true,
            "title": "Shift",
            "remarks": "Shift assigned to this work period.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STARTTIME",
            "required": true,
            "persistent": true,
            "title": "Start Time",
            "remarks": "Time when the shift begins.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDTIME",
            "required": true,
            "persistent": true,
            "title": "End Time",
            "remarks": "Time when the shift ends.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WORKHOURS",
            "required": true,
            "persistent": true,
            "title": "Shift Hours",
            "remarks": "Number of hours in the work period.",
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
            "attributeName": "WORKPERIODID",
            "required": true,
            "persistent": true,
            "title": "WORKPERIODID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NOTES",
            "required": false,
            "persistent": true,
            "title": "Notes",
            "remarks": "Short field in which you can add notes about the work period.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DAY",
            "required": false,
            "persistent": false,
            "title": "Day",
            "remarks": "Day of the week",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PATTERNDAYSEQ",
            "required": false,
            "persistent": true,
            "title": "Sequence of Pattern Day",
            "remarks": "Ordinal number identifing a specific day within a repeating pattern of days.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "CALENDAR",
            "target": "CALENDAR",
            "remarks": "Relationship between WORKPERIOD and CALENDAR tables.",
            "whereClause": "orgid = :orgid and calnum = :calnum",
            "cardinality": null
        },
        {
            "name": "CALENDARBREAK",
            "target": "CALENDARBREAK",
            "remarks": "List breaks for a given workperiod.",
            "whereClause": "shiftnum=:shiftnum and patterndayseq=:patterndayseq and orgid=:orgid",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "WORKPERIOD",
            "source": "AMCREW",
            "remarks": "Relationship to WORKPERIOD.",
            "whereClause": "orgid=:orgid  and calnum=:calnum  and shiftnum=:shiftnum",
            "cardinality": null
        },
        {
            "name": "WORKPERIOD",
            "source": "ASSET",
            "remarks": "Relationship to WorkPeriod table. This relationship joins the two tables in ROS.",
            "whereClause": "calnum=:calnum and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "WORKPERIOD",
            "source": "CALENDAR",
            "remarks": "Relationship to the Calendar's WorkPeriod record(s). Used to find workperiod set for a given Calendar. (WorkPeriod.calnum=Calendar.calnum and workdate between Calendar.startdate and Calendar.enddate). The resulting set will contain zero or more objects.",
            "whereClause": "calnum=:calnum and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKPERIOD",
            "source": "LABORCRAFTRATE",
            "remarks": "Relationship from LaborCraftRate to WorkPeriod",
            "whereClause": "orgid = (select orgid from personcal where personid = (select personid from labor where laborcode = :laborcode and orgid = :orgid) and isprimary = 1) and calnum = (select calnum from personcal where personid = (select personid from labor where laborcode = :laborcode and orgid = :orgid) and isprimary = 1) and shiftnum = (select shiftnum from personcal where personid = (select personid from labor where laborcode = :laborcode and orgid = :orgid) and isprimary = 1)",
            "cardinality": null
        },
        {
            "name": "LABTRANSWORKPERIOD",
            "source": "LABTRANSENTERBY",
            "remarks": "Relationship from non persistent table LABTRANSENTERBY to WORKPERIOD.",
            "whereClause": "workdate>:workdate and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "WORKPERIOD",
            "source": "PERSON",
            "remarks": "Relationship from person to workperiod.",
            "whereClause": "orgid=(select orgid from personcal where personid=:personid and isprimary=1) and calnum=(select calnum from personcal where personid=:personid and isprimary=1) and shiftnum=(select shiftnum from personcal where personid=:personid and isprimary=1)",
            "cardinality": null
        },
        {
            "name": "SKDWORKPERIOD",
            "source": "SKDPROJECT",
            "remarks": "workperiod for a project",
            "whereClause": "calnum=:calnum and orgid = :orgid",
            "cardinality": null
        }
    ]
}