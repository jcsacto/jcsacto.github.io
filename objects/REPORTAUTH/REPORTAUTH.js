mos = {
    "objectName": "REPORTAUTH",
    "className": "psdi.app.report.ReportAuthSet",
    "description": "Report authorization for security groups",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "REPORTAUTHID",
    "primaryKeyColumns": [
        "APPNAME",
        "REPORTNAME",
        "GROUPNAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXAPPS",
            "targetObject": "REPORTAUTH",
            "parentKeys": "APP",
            "targetKeys": "APPNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 44",
            "longDescription": null
        },
        {
            "objectName": "MAXGROUP",
            "targetObject": "REPORTAUTH",
            "parentKeys": "GROUPNAME",
            "targetKeys": "GROUPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Groups who can access this report.",
            "longDescription": null
        },
        {
            "objectName": "REPORT",
            "targetObject": "REPORTAUTH",
            "parentKeys": "APPNAME, REPORTNAME",
            "targetKeys": "APPNAME, REPORTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Report authorizations.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "REPORTAUTHID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REPORTNUM",
            "required": false,
            "persistent": true,
            "title": "Report Number",
            "remarks": "Report Number",
            "sameAsAttribute": "REPORTNUM",
            "sameAsObject": "REPORT"
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
            "attributeName": "REPORTNAME",
            "required": true,
            "persistent": true,
            "title": "Report File Name",
            "remarks": "Report File Name",
            "sameAsAttribute": "REPORTNAME",
            "sameAsObject": "REPORT"
        },
        {
            "attributeName": "APPNAME",
            "required": true,
            "persistent": true,
            "title": "Application",
            "remarks": "Name of the application for the report",
            "sameAsAttribute": "APP",
            "sameAsObject": "MAXAPPS"
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
            "name": "REPORTAUTH",
            "source": "REPORT",
            "remarks": "REPORTAUTH Relationship from REPORT to REPORTAUTH",
            "whereClause": "reportnum = :reportnum",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "REPORTAUTHPUBLIC",
            "source": "REPORTADHOC",
            "remarks": "Relationship from REPORTADHOC to REPORTAUTH, used to determine if the report is Public.",
            "whereClause": "reportname=:reportname and appname=:appname and groupname in (select varvalue from maxvars where varname = 'ALLUSERGROUP')",
            "cardinality": null
        }
    ]
}