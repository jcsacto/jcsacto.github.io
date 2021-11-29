mos = {
    "objectName": "REPORTJOB",
    "className": "psdi.app.report.ReportJobSet",
    "description": "Listing of Currently running report Jobs",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "REPORTJOBID",
    "primaryKeyColumns": [
        "REPORTJOBID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXAPPS",
            "targetObject": "REPORTJOB",
            "parentKeys": "APP",
            "targetKeys": "APPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "REPORTJOB",
            "parentKeys": "PERSONID",
            "targetKeys": "USERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person",
            "longDescription": null
        },
        {
            "objectName": "REPORT",
            "targetObject": "REPORTJOB",
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
            "attributeName": "APPNAME",
            "required": true,
            "persistent": true,
            "title": "Application",
            "remarks": "Application Name",
            "sameAsAttribute": "APP",
            "sameAsObject": "MAXAPPS"
        },
        {
            "attributeName": "REPORTNAME",
            "required": true,
            "persistent": true,
            "title": "Report File Name",
            "remarks": "Report File Name",
            "sameAsAttribute": "REPORTNAME",
            "sameAsObject": "REPORT"
        },
        {
            "attributeName": "ISIMMEDIATE",
            "required": false,
            "persistent": true,
            "title": "Is Immediate Job",
            "remarks": "Is Immediate Job",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STARTTIME",
            "required": false,
            "persistent": true,
            "title": "Start Time",
            "remarks": "Start Time",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USERID",
            "required": false,
            "persistent": true,
            "title": "User",
            "remarks": "User ID",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "HOSTNAME",
            "required": false,
            "persistent": true,
            "title": "Host Name",
            "remarks": "Name of the host where this report is executed",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SERVERNAME",
            "required": false,
            "persistent": true,
            "title": "Server Name",
            "remarks": "Name of the server where this report is executed",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUS",
            "required": false,
            "persistent": true,
            "title": "Status",
            "remarks": "Status of this Job",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PROCESSINGTIME",
            "required": false,
            "persistent": false,
            "title": "Processing Time",
            "remarks": "Processing Time",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REPORTJOBID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LASTACTIVETIME",
            "required": false,
            "persistent": true,
            "title": "Last Active Time",
            "remarks": "Time that last database request made, updated once in 3 minutes",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "REPORT",
            "target": "REPORT",
            "remarks": "Relationship from REPORTJOB to REPORT",
            "whereClause": "appname=:appname and reportname=:reportname",
            "cardinality": null
        }
    ],
    "incomingRelationships": []
}