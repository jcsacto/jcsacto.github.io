mos = {
    "objectName": "CALCWORKHOURS",
    "className": "psdi.app.calendar.virtual.CalcWorkHoursSet",
    "description": "Non Persistent table for the calendar's workhrs",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": false,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "STARTDATE",
            "required": false,
            "persistent": false,
            "title": "Start Date",
            "remarks": "Calendar Start Day",
            "sameAsAttribute": "STARTDATE",
            "sameAsObject": "CALENDAR"
        },
        {
            "attributeName": "ENDDATE",
            "required": false,
            "persistent": false,
            "title": "End Date",
            "remarks": "Calendar End Day",
            "sameAsAttribute": "ENDDATE",
            "sameAsObject": "CALENDAR"
        },
        {
            "attributeName": "WORKHOURS",
            "required": false,
            "persistent": false,
            "title": "Work Hours",
            "remarks": "Total Work Hours Calculated",
            "sameAsAttribute": "WORKHOURS",
            "sameAsObject": "WORKPERIOD"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "CALCWORKHOURS",
            "source": "CALENDAR",
            "remarks": "Relationship to the nonpersistent parameter set to Calculate Work Hours.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}