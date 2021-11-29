mos = {
    "objectName": "REPORTBROS",
    "className": "psdi.mbo.custapp.CustomMboSet",
    "description": "BROS Token Queue",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "REPORTBROSID",
    "primaryKeyColumns": [
        "BROSTOKEN"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXAPPS",
            "targetObject": "REPORTBROS",
            "parentKeys": "APP",
            "targetKeys": "APPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application",
            "longDescription": null
        },
        {
            "objectName": "REPORT",
            "targetObject": "REPORTBROS",
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
            "attributeName": "BROSTOKEN",
            "required": true,
            "persistent": true,
            "title": "BROS Temporary Token",
            "remarks": "BROS Temporary Token",
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
            "attributeName": "DPKEY",
            "required": false,
            "persistent": true,
            "title": "DP Key",
            "remarks": "Direct Print Key",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESIGN",
            "required": false,
            "persistent": true,
            "title": "Design Content",
            "remarks": "Report Design XML Content",
            "sameAsAttribute": "DESIGN",
            "sameAsObject": "REPORTDESIGN"
        },
        {
            "attributeName": "RESOURCES",
            "required": false,
            "persistent": true,
            "title": "Resource Content",
            "remarks": "Resources Content (zip format)",
            "sameAsAttribute": "RESOURCES",
            "sameAsObject": "REPORTDESIGN"
        },
        {
            "attributeName": "CSRFTOKEN",
            "required": false,
            "persistent": true,
            "title": "CSRF Token",
            "remarks": "CSRF Token",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "APPLYDATE",
            "required": true,
            "persistent": true,
            "title": "Apply Date",
            "remarks": "The system timestamp when record was inserted or updated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REPORTBROSID",
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
            "name": "REPORTBROSDPURL",
            "target": "REPORTBROSDPURL",
            "remarks": "Relationship from REPORTBROS to REPORTBROSDPURL table",
            "whereClause": "reportbrosid=:reportbrosid",
            "cardinality": null
        },
        {
            "name": "REPORTBROSPARAM",
            "target": "REPORTBROSPARAM",
            "remarks": "Relationship to the set for BROS transient reporting parameter tables",
            "whereClause": "reportbrosid=:reportbrosid",
            "cardinality": null
        }
    ],
    "incomingRelationships": []
}