mos = {
    "objectName": "DELETEWORKPERIOD",
    "className": "psdi.app.calendar.virtual.DeleteWorkPeriodSet",
    "description": "Non-Persistent table to delete workperiod set",
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
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "DELETEWORKPERIOD",
            "source": "CALENDAR",
            "remarks": "Relationship to the nonpersistent parameter set to delete workperiods.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}