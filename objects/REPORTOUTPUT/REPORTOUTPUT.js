mos = {
    "objectName": "REPORTOUTPUT",
    "className": "psdi.app.report.ReportOutputSet",
    "description": "Contains the scheduled report output and its meta info",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "REPORTOUTPUTID",
    "primaryKeyColumns": [
        "JOBNUM"
    ],
    "logicalRelationships": [
        {
            "objectName": "REPORTOUTPUT",
            "targetObject": "REPORTOUTPUTAUTH",
            "parentKeys": "JOBNUM",
            "targetKeys": "JOBNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Report output authorizations.",
            "longDescription": null
        },
        {
            "objectName": "REPORTOUTPUT",
            "targetObject": "REPORTOUTPUTCNT",
            "parentKeys": "JOBNUM",
            "targetKeys": "JOBNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Scheduled report output content.",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "EMAIL",
            "targetObject": "REPORTOUTPUT",
            "parentKeys": "EMAILADDRESS",
            "targetKeys": "EMAILADDRESS",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Email address of the initiating user.",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "REPORTOUTPUT",
            "parentKeys": "APP",
            "targetKeys": "APPNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 49",
            "longDescription": null
        },
        {
            "objectName": "MAXUSER",
            "targetObject": "REPORTOUTPUT",
            "parentKeys": "USERID",
            "targetKeys": "USERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "User ID of the initiating user.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "REPORTOUTPUT",
            "parentKeys": "PERSONID",
            "targetKeys": "USERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person",
            "longDescription": null
        },
        {
            "objectName": "REPORT",
            "targetObject": "REPORTOUTPUT",
            "parentKeys": "APPNAME, REPORTNAME",
            "targetKeys": "APPNAME, REPORTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Scheduled report output (Report Viewer app).",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "JOBNUM",
            "required": true,
            "persistent": true,
            "title": "Job Number",
            "remarks": "Auto-keyed unique identifier",
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
            "title": "Application",
            "remarks": "Application Name",
            "sameAsAttribute": "APP",
            "sameAsObject": "MAXAPPS"
        },
        {
            "attributeName": "USERID",
            "required": true,
            "persistent": true,
            "title": "Created By",
            "remarks": "Maximo User who initiated report output request",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "EMAILADDRESS",
            "required": true,
            "persistent": true,
            "title": "Sender email",
            "remarks": "Sender Email",
            "sameAsAttribute": "EMAILADDRESS",
            "sameAsObject": "EMAIL"
        },
        {
            "attributeName": "CREATEDDATE",
            "required": true,
            "persistent": true,
            "title": "Created Date",
            "remarks": "Date the report output was created",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REPORTOUTPUTID",
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
            "remarks": "Returns only one REPORT entry",
            "whereClause": "appname=:appname and reportname=:reportname",
            "cardinality": null
        },
        {
            "name": "REPORTOUTPUTAUTH",
            "target": "REPORTOUTPUTAUTH",
            "remarks": "Returns zero or more REPORTOUTPUTAUTH entries",
            "whereClause": "jobnum=:jobnum",
            "cardinality": null
        },
        {
            "name": "REPORTOUTPUTCNT",
            "target": "REPORTOUTPUTCNT",
            "remarks": "Returns only one REPORTOUTPUTCNT entry",
            "whereClause": "jobnum=:jobnum",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "REPORTOUTPUT",
            "source": "REPORTOUTPUTAUTH",
            "remarks": "Returns zero or more REPORTOUTPUT entries",
            "whereClause": "jobnum=:jobnum",
            "cardinality": null
        }
    ]
}