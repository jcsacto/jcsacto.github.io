mos = {
    "objectName": "REPORTRUNQUEUE",
    "className": "psdi.mbo.custapp.CustomMboSet",
    "description": "Report Run Queue",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "REPORTRUNQUEUEID",
    "primaryKeyColumns": [
        "REPORTRUNQUEUEID"
    ],
    "logicalRelationships": [
        {
            "objectName": "REPORTRUNQUEUE",
            "targetObject": "REPORTRUNLOCK",
            "parentKeys": "REPORTRUNQUEUEID",
            "targetKeys": "REPORTRUNQUEUEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Report Run Queue",
            "longDescription": null
        },
        {
            "objectName": "REPORTRUNQUEUE",
            "targetObject": "REPORTRUNPARAM",
            "parentKeys": "REPORTRUNQUEUEID",
            "targetKeys": "REPORTRUNQUEUEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Report Run Queue",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXAPPS",
            "targetObject": "REPORTRUNQUEUE",
            "parentKeys": "APP",
            "targetKeys": "APPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "REPORTRUNQUEUE",
            "parentKeys": "PERSONID",
            "targetKeys": "USERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person",
            "longDescription": null
        },
        {
            "objectName": "REPORT",
            "targetObject": "REPORTRUNQUEUE",
            "parentKeys": "APPNAME, REPORTNAME",
            "targetKeys": "APPNAME, REPORTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Report",
            "longDescription": null
        },
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
    "columns": [
        {
            "attributeName": "REPORTRUNQUEUEID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "APPNAME",
            "required": true,
            "persistent": true,
            "title": "Application Name",
            "remarks": "Application Name",
            "sameAsAttribute": "APP",
            "sameAsObject": "MAXAPPS"
        },
        {
            "attributeName": "REPORTNAME",
            "required": true,
            "persistent": true,
            "title": "Report Name",
            "remarks": "Report Name",
            "sameAsAttribute": "REPORTNAME",
            "sameAsObject": "REPORT"
        },
        {
            "attributeName": "USERID",
            "required": true,
            "persistent": true,
            "title": "User Id",
            "remarks": "User Id",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "SUBMITTIME",
            "required": true,
            "persistent": true,
            "title": "Submit time",
            "remarks": "Time when the report is submitted to the queue",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PRIORITY",
            "required": false,
            "persistent": true,
            "title": "Priority",
            "remarks": "Priority",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COUNTRY",
            "required": false,
            "persistent": true,
            "title": "Locale Country",
            "remarks": "Locale Country",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LANGUAGE",
            "required": true,
            "persistent": true,
            "title": "Locale Language",
            "remarks": "Locale Language",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VARIANT",
            "required": false,
            "persistent": true,
            "title": "Locale Variant",
            "remarks": "Locale Variant",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TIMEZONE",
            "required": true,
            "persistent": true,
            "title": "Time Zone",
            "remarks": "Time Zone",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LANGCODE",
            "required": true,
            "persistent": true,
            "title": "Language Code",
            "remarks": "Language Code",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RUNNING",
            "required": true,
            "persistent": true,
            "title": "Running",
            "remarks": "Is the report currently running?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REPORTSCHEDID",
            "required": true,
            "persistent": true,
            "title": "Report Schedule Id",
            "remarks": "Report Schedule Id",
            "sameAsAttribute": "REPORTSCHEDID",
            "sameAsObject": "REPORTSCHED"
        },
        {
            "attributeName": "EMAILUSERS",
            "required": true,
            "persistent": true,
            "title": "E-mail Addresses",
            "remarks": "Email Addresses",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EMAILCOMMENTS",
            "required": false,
            "persistent": true,
            "title": "E-mail Comments",
            "remarks": "Email Comments",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SERVERHOST",
            "required": false,
            "persistent": true,
            "title": "Server Host Name",
            "remarks": "Host Name of the server running the report",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SERVERNAME",
            "required": false,
            "persistent": true,
            "title": "Server Name",
            "remarks": "Name of the server",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EMAILSUBJECT",
            "required": false,
            "persistent": true,
            "title": "E-mail Subject",
            "remarks": "The subject of the email mailed out from a scheduled report that has run.",
            "sameAsAttribute": "EMAILSUBJECT",
            "sameAsObject": "REPORTSCHED"
        },
        {
            "attributeName": "EMAILFILETYPE",
            "required": true,
            "persistent": true,
            "title": "File Type",
            "remarks": "File Format of Emailed Report",
            "sameAsAttribute": "EMAILFILETYPE",
            "sameAsObject": "REPORTSCHED"
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
            "name": "REPORTRUNLOCK",
            "target": "REPORTRUNLOCK",
            "remarks": "Report Run Lock",
            "whereClause": "reportrunqueueid=:reportrunqueueid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REPORTRUNPARAM",
            "target": "REPORTRUNPARAM",
            "remarks": "Report Run Parameters",
            "whereClause": "reportrunqueueid=:reportrunqueueid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "REPORTRUNQUEUE",
            "source": "REPORTRUNLOCK",
            "remarks": "Report Run Queue",
            "whereClause": "reportrunqueueid=:reportrunqueueid",
            "cardinality": "UNDEFINED"
        }
    ]
}