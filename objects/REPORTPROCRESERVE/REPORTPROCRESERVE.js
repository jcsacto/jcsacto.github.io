mos = {
    "objectName": "REPORTPROCRESERVE",
    "className": "psdi.app.report.ReportProcReserveSet",
    "description": "Holds reserved processing times for complex, batch reports.",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "REPORTPROCRESERVEID",
    "primaryKeyColumns": [
        "APPNAME",
        "REPORTNAME",
        "DAY",
        "STARTRESERVE"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXAPPS",
            "targetObject": "REPORTPROCRESERVE",
            "parentKeys": "APP",
            "targetKeys": "APPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application",
            "longDescription": null
        },
        {
            "objectName": "REPORT",
            "targetObject": "REPORTPROCRESERVE",
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
            "title": "Application",
            "remarks": "The application that the report is executed from",
            "sameAsAttribute": "APP",
            "sameAsObject": "MAXAPPS"
        },
        {
            "attributeName": "DAY",
            "required": true,
            "persistent": true,
            "title": "Day",
            "remarks": "Reserved processing day of the week",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STARTRESERVE",
            "required": true,
            "persistent": true,
            "title": "Start Reserve",
            "remarks": "Start of reserved processing time",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDRESERVE",
            "required": true,
            "persistent": true,
            "title": "End Reserve",
            "remarks": "End of reserved processing time",
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
        },
        {
            "attributeName": "TOTALRESERVEDHOURS",
            "required": false,
            "persistent": false,
            "title": "Total Reserved Hours",
            "remarks": "The total amount of time reserved in seconds",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REPORTPROCRESERVEID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "REPORT",
            "target": "REPORT",
            "remarks": "Relationship between REPORTPROCRESERVE and REPORT tables",
            "whereClause": "reportname=:reportname and appname=:appname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REPORTPROCSCHED",
            "target": "REPORTPROCSCHED",
            "remarks": "Relationship from Relationship from REPORTPROCRESERVE to REPORTPROCSCHED table",
            "whereClause": "reportname=:reportname and appname=:appname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TIMEZONE",
            "target": "SYNONYMDOMAIN",
            "remarks": "Time zone domain values for ReportProcReserve",
            "whereClause": "domainid='TIMEZONE' and value=:timezone",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "REPORTPROCRESERVE",
            "source": "REPORT",
            "remarks": "Relationship from REPORT to REPORTPROCRESERVE",
            "whereClause": "reportname=:reportname and appname=:appname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REPORTPROCRESERVE",
            "source": "REPORTPROCSCHED",
            "remarks": "Relationship from REPORTPROCSCHED to REPORTPROCRESERVE table",
            "whereClause": "reportname=:reportname and appname=:appname",
            "cardinality": "UNDEFINED"
        }
    ]
}