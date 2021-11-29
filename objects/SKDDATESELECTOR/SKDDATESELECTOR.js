mos = {
    "objectName": "SKDDATESELECTOR",
    "className": "psdi.app.common.virtual.skddateselector.SKDDateSelectorSet",
    "description": "Non Persistent object for Schedule Date Selector",
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
            "attributeName": "SKDLENGTH",
            "required": false,
            "persistent": false,
            "title": "Duration",
            "remarks": "Duration of the schedule.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STARTDATE",
            "required": false,
            "persistent": false,
            "title": "Schedule Start",
            "remarks": "The date that the schedule starts.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDDATE",
            "required": false,
            "persistent": false,
            "title": "Schedule End",
            "remarks": "The date that the schedule ends.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NOTES",
            "required": false,
            "persistent": false,
            "title": "Remarks",
            "remarks": "Comments about the schedule.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DAY",
            "required": false,
            "persistent": false,
            "title": "Every {control} day(s),",
            "remarks": "Repeats the task once every number of days you specify, for example, once every seven days.",
            "sameAsAttribute": "DAY",
            "sameAsObject": "DATESELECTOR"
        },
        {
            "attributeName": "DAYTIME",
            "required": false,
            "persistent": false,
            "title": "at time {control}",
            "remarks": "Time of day to repeat the task, for example, once every seven days at 2:00 AM. Follow the time with a space and then AM or PM.",
            "sameAsAttribute": "DAYTIME",
            "sameAsObject": "DATESELECTOR"
        },
        {
            "attributeName": "HOUR",
            "required": false,
            "persistent": false,
            "title": "Every {control} hour(s),",
            "remarks": "Repeats the task after the number of hours you specify.",
            "sameAsAttribute": "HOUR",
            "sameAsObject": "DATESELECTOR"
        },
        {
            "attributeName": "HOURMINUTE",
            "required": false,
            "persistent": false,
            "title": "on minute {control}",
            "remarks": "Repeats the task after the number of hours you specify.",
            "sameAsAttribute": "HOURMINUTE",
            "sameAsObject": "DATESELECTOR"
        },
        {
            "attributeName": "MINUTE",
            "required": false,
            "persistent": false,
            "title": "Every {control} minute(s)",
            "remarks": "Repeats the task after the number of hours you specify.",
            "sameAsAttribute": "MINUTE",
            "sameAsObject": "DATESELECTOR"
        },
        {
            "attributeName": "MONTH",
            "required": false,
            "persistent": false,
            "title": "Every {control} month(s),",
            "remarks": "Repeats the task after the number of hours you specify.",
            "sameAsAttribute": "MONTH",
            "sameAsObject": "DATESELECTOR"
        },
        {
            "attributeName": "MONTHDAYTIME",
            "required": false,
            "persistent": false,
            "title": "at time {control}",
            "remarks": "Time of day to repeat the task, for example, every three months on the 15th of the month at 2:00 AM. Follow the time with a space and then AM or PM.",
            "sameAsAttribute": "MONTHDAYTIME",
            "sameAsObject": "DATESELECTOR"
        },
        {
            "attributeName": "MONTHFIRST",
            "required": false,
            "persistent": false,
            "title": "on the {control}",
            "remarks": "Repeats the task once on either the first or last specified weekday of the month, for example, on the first Sunday of the month.",
            "sameAsAttribute": "MONTHFIRST",
            "sameAsObject": "DATESELECTOR"
        },
        {
            "attributeName": "MONTHWEEKDAY",
            "required": false,
            "persistent": false,
            "title": "{control} of the month,",
            "remarks": "Day of week to repeat the task, if you schedule the task for a specific day in a month. For example, the first Sunday of the month.",
            "sameAsAttribute": "MONTHWEEKDAY",
            "sameAsObject": "DATESELECTOR"
        },
        {
            "attributeName": "MONTHWEEKTIME",
            "required": false,
            "persistent": false,
            "title": "at time {control}",
            "remarks": "Day of week to repeat the task, if you schedule the task for a specific day in a month. For example, the first Sunday of the month.",
            "sameAsAttribute": "MONTHWEEKTIME",
            "sameAsObject": "DATESELECTOR"
        },
        {
            "attributeName": "MONTHDAY",
            "required": false,
            "persistent": false,
            "title": "on day {control}",
            "remarks": "Repeats the task after the number of hours you specify.",
            "sameAsAttribute": "MONTHDAY",
            "sameAsObject": "DATESELECTOR"
        },
        {
            "attributeName": "PATTERN",
            "required": false,
            "persistent": false,
            "title": "Pattern",
            "remarks": "String representation of the format",
            "sameAsAttribute": "PATTERN",
            "sameAsObject": "DATESELECTOR"
        },
        {
            "attributeName": "PREVIEW",
            "required": false,
            "persistent": false,
            "title": "Date Preview",
            "remarks": "String representation of the format",
            "sameAsAttribute": "PREVIEW",
            "sameAsObject": "DATESELECTOR"
        },
        {
            "attributeName": "RADIOMONTH",
            "required": false,
            "persistent": false,
            "title": "Month radio button",
            "remarks": "String representation of the format",
            "sameAsAttribute": "RADIOMONTH",
            "sameAsObject": "DATESELECTOR"
        },
        {
            "attributeName": "RADIOYEAR",
            "required": false,
            "persistent": false,
            "title": "Year radio button",
            "remarks": "String representation of the format",
            "sameAsAttribute": "RADIOYEAR",
            "sameAsObject": "DATESELECTOR"
        },
        {
            "attributeName": "REPEAT",
            "required": false,
            "persistent": false,
            "title": "Repeat",
            "remarks": "String representation of the format",
            "sameAsAttribute": "REPEAT",
            "sameAsObject": "DATESELECTOR"
        },
        {
            "attributeName": "SECOND",
            "required": false,
            "persistent": false,
            "title": "Every {control} second(s)",
            "remarks": "Repeats the task once every number of seconds you specify, for example, every 30 seconds.",
            "sameAsAttribute": "SECOND",
            "sameAsObject": "DATESELECTOR"
        },
        {
            "attributeName": "WEEK",
            "required": false,
            "persistent": false,
            "title": "Every {control} week(s),",
            "remarks": "Repeats the task once every number of weeks you specify, for example, every two weeks.",
            "sameAsAttribute": "WEEK",
            "sameAsObject": "DATESELECTOR"
        },
        {
            "attributeName": "WEEKDAY",
            "required": false,
            "persistent": false,
            "title": "on day {control}",
            "remarks": "Day of the week to repeat the task, for example, every two weeks on Sunday.",
            "sameAsAttribute": "WEEKDAY",
            "sameAsObject": "DATESELECTOR"
        },
        {
            "attributeName": "WEEKTIME",
            "required": false,
            "persistent": false,
            "title": "at time {control}",
            "remarks": "Time of day to repeat the task. Follow the time with a space and then AM or PM.",
            "sameAsAttribute": "WEEKTIME",
            "sameAsObject": "DATESELECTOR"
        },
        {
            "attributeName": "YEAR",
            "required": false,
            "persistent": false,
            "title": "Every {control} year(s),",
            "remarks": "Repeats the task once every number of years you specify, for example, every two years.",
            "sameAsAttribute": "YEAR",
            "sameAsObject": "DATESELECTOR"
        },
        {
            "attributeName": "YEARFIRST",
            "required": false,
            "persistent": false,
            "title": "on the {control}",
            "remarks": "Repeats the task once on either the first or last specified weekday of the year, for example, on the first Sunday of the year.",
            "sameAsAttribute": "YEARFIRST",
            "sameAsObject": "DATESELECTOR"
        },
        {
            "attributeName": "YEARMONTH",
            "required": false,
            "persistent": false,
            "title": "on {control}",
            "remarks": "Repeats the task on the month you specify, every X number of years.",
            "sameAsAttribute": "YEARMONTH",
            "sameAsObject": "DATESELECTOR"
        },
        {
            "attributeName": "YEARMONTHDAY",
            "required": false,
            "persistent": false,
            "title": "on day {control}",
            "remarks": "Repeats the task on the day of the month you specify, every X number of years.",
            "sameAsAttribute": "YEARMONTHDAY",
            "sameAsObject": "DATESELECTOR"
        },
        {
            "attributeName": "YEARMONTHTIME",
            "required": false,
            "persistent": false,
            "title": "at time {control}",
            "remarks": "Time of day to repeat the task, for example, every 2 years on January 1st at 12:00 AM. Follow the time with a space and then AM or PM.",
            "sameAsAttribute": "YEARMONTHTIME",
            "sameAsObject": "DATESELECTOR"
        },
        {
            "attributeName": "YEARWEEKDAY",
            "required": false,
            "persistent": false,
            "title": "{control} of  the year,",
            "remarks": "Day of week to repeat the task, for example, the first Sunday of the year.",
            "sameAsAttribute": "YEARWEEKDAY",
            "sameAsObject": "DATESELECTOR"
        },
        {
            "attributeName": "YEARWEEKTIME",
            "required": false,
            "persistent": false,
            "title": "at time {control}",
            "remarks": "Day of week to repeat the task, for example, the first Sunday of the year.",
            "sameAsAttribute": "YEARWEEKTIME",
            "sameAsObject": "DATESELECTOR"
        },
        {
            "attributeName": "SKDTYPE",
            "required": false,
            "persistent": false,
            "title": "Type",
            "remarks": "Type of the schedule",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}