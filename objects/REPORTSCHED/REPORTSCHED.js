mos = {
    "objectName": "REPORTSCHED",
    "className": "psdi.app.report.ReportSchedSet",
    "description": "BIRT Report Scheduling table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "REPORTSCHEDID",
    "primaryKeyColumns": [
        "CRONTASKNAME",
        "INSTANCENAME"
    ],
    "logicalRelationships": [
        {
            "objectName": "REPORTSCHED",
            "targetObject": "REPORTRUNQUEUE",
            "parentKeys": "REPORTSCHEDID",
            "targetKeys": "REPORTSCHEDID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Report Schedule",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "CRONTASKDEF",
            "targetObject": "REPORTSCHED",
            "parentKeys": "CRONTASKNAME",
            "targetKeys": "CRONTASKNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 13",
            "longDescription": null
        },
        {
            "objectName": "CRONTASKDEF",
            "targetObject": "REPORTSCHED",
            "parentKeys": "CRONTASKNAME",
            "targetKeys": "INSTANCENAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 14",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "REPORTSCHED",
            "parentKeys": "APP",
            "targetKeys": "APPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "REPORTSCHED",
            "parentKeys": "PERSONID",
            "targetKeys": "USERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person",
            "longDescription": null
        },
        {
            "objectName": "REPORT",
            "targetObject": "REPORTSCHED",
            "parentKeys": "APPNAME, REPORTNAME",
            "targetKeys": "APPNAME, REPORTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Report",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "REPORTSCHEDID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REPORTNAME",
            "required": true,
            "persistent": true,
            "title": "Report File Name",
            "remarks": "The file name of the report",
            "sameAsAttribute": "REPORTNAME",
            "sameAsObject": "REPORT"
        },
        {
            "attributeName": "APPNAME",
            "required": true,
            "persistent": true,
            "title": "Application Name",
            "remarks": "The application that the report is executed from",
            "sameAsAttribute": "APP",
            "sameAsObject": "MAXAPPS"
        },
        {
            "attributeName": "USERID",
            "required": true,
            "persistent": true,
            "title": "User ID",
            "remarks": "The User ID of the user scheduling the report",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "TYPE",
            "required": true,
            "persistent": true,
            "title": "Scheduled Report Type",
            "remarks": "Represents the type of scheduled report. Either RECURRING:   If it is to continuously execute at a regularly specified time ONCE:        If it is to execute once at a point in the future",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EMAILUSERS",
            "required": true,
            "persistent": true,
            "title": "E-mail To",
            "remarks": "List of Users ther report email will be sent to",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EMAILCOMMENTS",
            "required": false,
            "persistent": true,
            "title": "E-mail Comments",
            "remarks": "Comments to be included in the report's email",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COUNTRY",
            "required": false,
            "persistent": true,
            "title": "Report Locale Country",
            "remarks": "Report Locale Country",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LANGUAGE",
            "required": true,
            "persistent": true,
            "title": "Report Locale Language",
            "remarks": "Report Locale Language",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VARIANT",
            "required": false,
            "persistent": true,
            "title": "Report Locale Variant",
            "remarks": "Report Locale Variant",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TIMEZONE",
            "required": true,
            "persistent": true,
            "title": "Report Time Zone",
            "remarks": "Report Time Zone",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LANGCODE",
            "required": true,
            "persistent": true,
            "title": "Report Language Code",
            "remarks": "Report Language Code",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NEXTRUNTIME",
            "required": false,
            "persistent": false,
            "title": "Next Run Time",
            "remarks": "NextRunTime column is used to hold the date in the UI for the date/time the schedule will run next.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CRONTASKNAME",
            "required": true,
            "persistent": true,
            "title": "Cron Task Name",
            "remarks": "The Cron Task Name of the Report's Cron Task Instance schedule",
            "sameAsAttribute": "CRONTASKNAME",
            "sameAsObject": "CRONTASKDEF"
        },
        {
            "attributeName": "INSTANCENAME",
            "required": true,
            "persistent": true,
            "title": "Cron Task Instance Name",
            "remarks": "The Cron Task Instance Name of the Report's Cron Task Instance schedule",
            "sameAsAttribute": "CRONTASKNAME",
            "sameAsObject": "CRONTASKDEF"
        },
        {
            "attributeName": "SCHEDULE",
            "required": false,
            "persistent": false,
            "title": "Schedule String",
            "remarks": "nonpersistent object for schedule string",
            "sameAsAttribute": "PATTERN",
            "sameAsObject": "DATESELECTOR"
        },
        {
            "attributeName": "SCHEDULEDISP",
            "required": false,
            "persistent": false,
            "title": "Schedule selected",
            "remarks": "Shows if a schedule is selected",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EMAILSUBJECT",
            "required": false,
            "persistent": true,
            "title": "E-mail Subject",
            "remarks": "The subject of the email mailed out from a scheduled report that has run.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ONCEDATETIME",
            "required": false,
            "persistent": false,
            "title": "Scheduled date/time for a one-time report",
            "remarks": "This column holds the date and time that the 'run-once' r",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EMAILFILETYPE",
            "required": true,
            "persistent": true,
            "title": "File Type",
            "remarks": "File Format of Emailed Report",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EMAILTYPE",
            "required": true,
            "persistent": true,
            "title": "Email type",
            "remarks": "Specifies what type of email should be sent out",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXIMOURL",
            "required": false,
            "persistent": true,
            "title": "Maximo Base URL",
            "remarks": "Maximo Base URL",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ALNDOMAIN",
            "target": "ALNDOMAIN",
            "remarks": "Relationship from REPORTSCHED to ALNDOMAIN",
            "whereClause": "domainid='REPORTSCHEDTYPE' and value=:type",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ALNDOMAIN2",
            "target": "ALNDOMAIN",
            "remarks": "Relationship from REPORTSCHED to ALNDOMAIN",
            "whereClause": "domainid='REPORTSCHDISP' and value=:SCHEDULEDISP",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CRONTASKINSTANCE",
            "target": "CRONTASKINSTANCE",
            "remarks": "Relationship between REPORTSCHED and CRONTASKINSTANCE tables",
            "whereClause": "crontaskname=:crontaskname and instancename=:instancename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DATESELECTOR",
            "target": "DATESELECTOR",
            "remarks": "DATESELECTOR Relationship from REPORTSCHED to DATESELECTOR",
            "whereClause": "pattern=:schedule",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "EMAIL",
            "target": "EMAIL",
            "remarks": "Relationship from the Report Scheduling Status tab and View Scheduled Reports action dialog to EMAIL table to support the email lookup",
            "whereClause": "emailaddress is NOT NULL and personid in (select personid from maxuser where status in (select value from synonymdomain where domainid='MAXUSERSTATUS' and maxvalue='ACTIVE'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REPORT",
            "target": "REPORT",
            "remarks": "Relationship between REPORT and REPORTSCHED tables",
            "whereClause": "reportname=:reportname and appname=:appname",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "REPORTSCHED",
            "source": "REPORT",
            "remarks": "Relationship between REPORTSCHED and REPORT tables",
            "whereClause": "reportname=:reportname and appname=:appname",
            "cardinality": "MULTIPLE"
        }
    ]
}