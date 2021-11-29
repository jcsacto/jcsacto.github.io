mos = {
    "objectName": "NONWORKTIME",
    "className": "psdi.app.calendar.NonworktimeSet",
    "description": "This table stores records like hollidays, sicktime",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "NONWORKTIMEID",
    "primaryKeyColumns": [
        "STARTDATE",
        "ENDDATE"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "NONWORKTIMEID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STARTDATE",
            "required": true,
            "persistent": true,
            "title": "Start Date",
            "remarks": "Date on which the nonwork time begins.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDDATE",
            "required": true,
            "persistent": true,
            "title": "End Date",
            "remarks": "Date on which the nonwork period ends. For a one-day holiday, the start date and end date are the same.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TYPE",
            "required": true,
            "persistent": true,
            "title": "Type",
            "remarks": "Reason for not working. Click the select value button to select a valid value.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Short phrase describing the nonwork time, for example, Thanksgiving Day (Canada) or August Vacation.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "NONWORKTIME",
            "source": "CALENDAR",
            "remarks": null,
            "whereClause": "enddate >=:startdate and startdate <= :enddate ",
            "cardinality": "UNDEFINED"
        }
    ]
}