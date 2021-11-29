mos = {
    "objectName": "REPORTUSAGELOG",
    "className": "psdi.mbo.custapp.CustomMboSet",
    "description": "Report Usage Log",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "REPORTUSAGELOGID",
    "primaryKeyColumns": [
        "REPORTUSAGELOGID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXAPPS",
            "targetObject": "REPORTUSAGELOG",
            "parentKeys": "APP",
            "targetKeys": "APPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "REPORTUSAGELOG",
            "parentKeys": "PERSONID",
            "targetKeys": "USERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person",
            "longDescription": null
        },
        {
            "objectName": "REPORT",
            "targetObject": "REPORTUSAGELOG",
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
            "attributeName": "REPORTUSAGELOGID",
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
            "title": "Report Name",
            "remarks": "Report Name",
            "sameAsAttribute": "REPORTNAME",
            "sameAsObject": "REPORT"
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
            "attributeName": "ENTERDATE",
            "required": true,
            "persistent": true,
            "title": "Entry Date",
            "remarks": "Date and Time when report entry is in database",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IMMEDIATEJOB",
            "required": true,
            "persistent": true,
            "title": "Immediate Job",
            "remarks": "Immediate or Scheduled Job",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STARTDATE",
            "required": true,
            "persistent": true,
            "title": "Start Date and Time",
            "remarks": "Date and Time when the report started execution",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDDATE",
            "required": true,
            "persistent": true,
            "title": "End Date and Time",
            "remarks": "Date and Time when Report finished execution",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RUNTIME",
            "required": true,
            "persistent": true,
            "title": "Total Execution Time",
            "remarks": "Total time to execute report in Milli-Seconds",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SUCCESS",
            "required": true,
            "persistent": true,
            "title": "Success",
            "remarks": "Is Report Execution Successful or not?",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "HOSTNAME",
            "required": true,
            "persistent": true,
            "title": "Server Host Name",
            "remarks": "Server on which the report is run",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SERVERNAME",
            "required": true,
            "persistent": true,
            "title": "Server",
            "remarks": "MXServer name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISTRANSIENT",
            "required": true,
            "persistent": true,
            "title": "Is Transient",
            "remarks": "Specifies whether this report was saved in the Report table.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CANCELJOB",
            "required": true,
            "persistent": true,
            "title": "Cancelled Job",
            "remarks": "Is this job cancelled?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EMAILFILETYPE",
            "required": false,
            "persistent": true,
            "title": "File Type",
            "remarks": "File Format of Emailed Report",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ULSTATUS",
            "required": false,
            "persistent": true,
            "title": "Report Status",
            "remarks": "Report Status",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ULMSG",
            "required": false,
            "persistent": true,
            "title": "Log Message",
            "remarks": "Non Localized log message that can be optionally provided when a ULSTATUS is set",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "REPORT",
            "target": "REPORT",
            "remarks": "Relationship to REPORT from REPORTUSAGELOG tables",
            "whereClause": "reportname=:reportname and appname=:appname",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "REPORTUSAGELOG",
            "source": "REPORT",
            "remarks": "Relationship between REPORT and REPORTUSAGELOG tables",
            "whereClause": "reportname=:reportname and appname=:appname",
            "cardinality": "MULTIPLE"
        }
    ]
}