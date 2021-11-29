mos = {
    "objectName": "REPORTPROCSCHED",
    "className": "psdi.app.report.ReportProcSchedSet",
    "description": "This Mbo contains the time periods when a report marked ScheduleOnly can be scheduled",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "REPORTPROCSCHEDID",
    "primaryKeyColumns": [
        "APPNAME",
        "REPORTNAME",
        "DAY",
        "STARTSCHEDULABLE"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXAPPS",
            "targetObject": "REPORTPROCSCHED",
            "parentKeys": "APP",
            "targetKeys": "APPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application",
            "longDescription": null
        },
        {
            "objectName": "REPORT",
            "targetObject": "REPORTPROCSCHED",
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
            "title": "Application Name",
            "remarks": "The application that the report is executed from",
            "sameAsAttribute": "APP",
            "sameAsObject": "MAXAPPS"
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
            "attributeName": "DAY",
            "required": true,
            "persistent": true,
            "title": "Day",
            "remarks": "Schedulable processing day of the week",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STARTSCHEDULABLE",
            "required": true,
            "persistent": true,
            "title": "Start Time",
            "remarks": "Start of schedulable processing time",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDSCHEDULABLE",
            "required": true,
            "persistent": true,
            "title": "End Time",
            "remarks": "End of schedulable processing time",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REPORTPROCSCHEDID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TIMEZONE",
            "required": true,
            "persistent": true,
            "title": "Time Zone",
            "remarks": "Report reserved time Time Zone",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ALNDOMAIN",
            "target": "ALNDOMAIN",
            "remarks": "Relation from REPORTPROCRESERVE to ALNDOMAIN",
            "whereClause": "domainid='DAYSOFWEEK' and value=:day",
            "cardinality": null
        },
        {
            "name": "REPORT",
            "target": "REPORT",
            "remarks": "Relationship from REPORTPROCSCHED to REPORT table",
            "whereClause": "reportname=:reportname and appname=:appname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REPORTPROCRESERVE",
            "target": "REPORTPROCRESERVE",
            "remarks": "Relationship from REPORTPROCSCHED to REPORTPROCRESERVE table",
            "whereClause": "reportname=:reportname and appname=:appname",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "REPORTPROCSCHED",
            "source": "REPORT",
            "remarks": "Relationship from REPORT to REPORTPROCSCHED table",
            "whereClause": "reportname=:reportname and appname=:appname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REPORTPROCSCHED",
            "source": "REPORTPROCRESERVE",
            "remarks": "Relationship from Relationship from REPORTPROCRESERVE to REPORTPROCSCHED table",
            "whereClause": "reportname=:reportname and appname=:appname",
            "cardinality": "UNDEFINED"
        }
    ]
}