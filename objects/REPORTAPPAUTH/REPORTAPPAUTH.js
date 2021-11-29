mos = {
    "objectName": "REPORTAPPAUTH",
    "className": "psdi.app.report.ReportAppAuthSet",
    "description": "Report app-level authorization for security groups",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "REPORTAPPAUTHID",
    "primaryKeyColumns": [
        "GROUPNAME",
        "APPNAME",
        "RUNTYPE"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXAPPS",
            "targetObject": "REPORTAPPAUTH",
            "parentKeys": "APP",
            "targetKeys": "APPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application",
            "longDescription": null
        },
        {
            "objectName": "MAXGROUP",
            "targetObject": "REPORTAPPAUTH",
            "parentKeys": "GROUPNAME",
            "targetKeys": "GROUPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Group Name",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "REPORTAPPAUTHID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GROUPNAME",
            "required": true,
            "persistent": true,
            "title": "Group",
            "remarks": "Group identifier",
            "sameAsAttribute": "GROUPNAME",
            "sameAsObject": "MAXGROUP"
        },
        {
            "attributeName": "APPNAME",
            "required": true,
            "persistent": true,
            "title": "Application",
            "remarks": "Authorization will be granted for all reports registered to this application.",
            "sameAsAttribute": "APP",
            "sameAsObject": "MAXAPPS"
        },
        {
            "attributeName": "RUNTYPE",
            "required": false,
            "persistent": true,
            "title": "Report Type",
            "remarks": "Type of report the authorization applies to.",
            "sameAsAttribute": "RUNTYPE",
            "sameAsObject": "REPORT"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "MAXGROUP",
            "target": "MAXGROUP",
            "remarks": "MAXGROUP Relationship from REPORT to MAXGROUP",
            "whereClause": "groupname = :groupname",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "REPORTAPPAUTH",
            "source": "REPORT",
            "remarks": "REPORTAPPAUTH Relationship from REPORT to REPORTAPPAUTH",
            "whereClause": "appname=:appname and runtype=:runtype",
            "cardinality": "MULTIPLE"
        }
    ]
}