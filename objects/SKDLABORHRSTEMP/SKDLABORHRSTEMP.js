mos = {
    "objectName": "SKDLABORHRSTEMP",
    "className": "com.ibm.tivoli.maximo.skd.app.SKDLaborHrsSet",
    "description": "SKD Labor hours.",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "SKDLABORHRSTEMPID",
    "primaryKeyColumns": [
        "CONTENTUID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "SKDPROJECTID",
            "required": false,
            "persistent": true,
            "title": "Project ID",
            "remarks": "Identifies the scheduler project.",
            "sameAsAttribute": "SKDPROJECTID",
            "sameAsObject": "SKDPROJECT"
        },
        {
            "attributeName": "YEAR",
            "required": false,
            "persistent": true,
            "title": "Year",
            "remarks": "Identifies the year that the hours are displayed for.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MONTHP",
            "required": false,
            "persistent": true,
            "title": "Month",
            "remarks": "Identifies the month that the hours are displayed for.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DAYP",
            "required": false,
            "persistent": true,
            "title": "Day",
            "remarks": "Identifies the day that the hours are displayed for.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WEEKDAYP",
            "required": false,
            "persistent": true,
            "title": "Week Day",
            "remarks": "Identifies the week day that the hours are displayed for.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DAILY",
            "required": false,
            "persistent": true,
            "title": "Date",
            "remarks": "The date that the labor hours are displayed for.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TIMEPERIOD",
            "required": false,
            "persistent": true,
            "title": "Time Period",
            "remarks": "Identifies the day, week, or month that the labor hours are displayed for.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PERIOD",
            "required": false,
            "persistent": true,
            "title": "Period Number",
            "remarks": "Identifies the period that is used to calculate labor hours. The period can be the day, week, or month number. For example, November is 11. ",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CRAFT",
            "required": false,
            "persistent": true,
            "title": "Craft",
            "remarks": "Identifies the craft that performed the work.",
            "sameAsAttribute": "CRAFT",
            "sameAsObject": "CRAFT"
        },
        {
            "attributeName": "PLANDURLABORHRS",
            "required": false,
            "persistent": true,
            "title": "Planned Duration Hours",
            "remarks": "Identifies the total number of work duration hours that are planned for a specific craft for this time period.",
            "sameAsAttribute": "ACTINTLABHRS",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "PLANWPLABORHRS",
            "required": false,
            "persistent": true,
            "title": "Planned  Labor Hours",
            "remarks": "Identifies the total number of labor resource hours that are planned for a specific craft for this time period.",
            "sameAsAttribute": "ACTINTLABHRS",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "AVAILLABORHRS",
            "required": false,
            "persistent": true,
            "title": "Available Labor Hours",
            "remarks": "Identifies the total number of labor hours that are available for the specific craft for this time period (day, week, or month).",
            "sameAsAttribute": "ACTINTLABHRS",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "CREATEDATE",
            "required": false,
            "persistent": true,
            "title": "Created Date",
            "remarks": "The date and time when the labor hours was created.",
            "sameAsAttribute": "CREATEDATE",
            "sameAsObject": "SKDPROJECT"
        },
        {
            "attributeName": "CONTENTUID",
            "required": false,
            "persistent": true,
            "title": "Content Unique ID",
            "remarks": "Content Unique ID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STARTWEEKDATE",
            "required": false,
            "persistent": true,
            "title": "Start Week Date",
            "remarks": "Identifies the date that the week starts for labor hours calculation.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STARTTIME",
            "required": false,
            "persistent": true,
            "title": "Start Date",
            "remarks": "The start time of activity.",
            "sameAsAttribute": "STARTTIME",
            "sameAsObject": "SKDACTIVITY"
        },
        {
            "attributeName": "SKDLABORHRSTEMPID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}