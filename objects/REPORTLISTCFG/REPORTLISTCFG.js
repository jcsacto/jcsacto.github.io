mos = {
    "objectName": "REPORTLISTCFG",
    "className": "psdi.app.reportlistcfg.ReportListCfgSet",
    "description": "Report List Portlet",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "REPORTLISTCFGID",
    "primaryKeyColumns": [
        "LAYOUTID",
        "APPNAME",
        "REPORTNAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "LAYOUT",
            "targetObject": "REPORTLISTCFG",
            "parentKeys": "LAYOUTID",
            "targetKeys": "LAYOUTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship from the Report List Portlet Configuration to the Start Center Layout",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "REPORTLISTCFG",
            "parentKeys": "APP",
            "targetKeys": "APPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application",
            "longDescription": null
        },
        {
            "objectName": "REPORT",
            "targetObject": "REPORTLISTCFG",
            "parentKeys": "APPNAME, REPORTNAME",
            "targetKeys": "APPNAME, REPORTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship from Reports List Portlet to the Report",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "REPORTLISTCFGID",
            "required": true,
            "persistent": true,
            "title": "Report List Configuration Id",
            "remarks": "unique identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LAYOUTID",
            "required": false,
            "persistent": true,
            "title": "Layout Id",
            "remarks": "Layout",
            "sameAsAttribute": "LAYOUTID",
            "sameAsObject": "LAYOUT"
        },
        {
            "attributeName": "REPORTNAME",
            "required": false,
            "persistent": true,
            "title": "Report File Name",
            "remarks": "Name of the report",
            "sameAsAttribute": "REPORTNAME",
            "sameAsObject": "REPORT"
        },
        {
            "attributeName": "LISTORDER",
            "required": false,
            "persistent": true,
            "title": "Order",
            "remarks": "Order in which the report list will be shown",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "APPNAME",
            "required": false,
            "persistent": true,
            "title": "Application",
            "remarks": "Name of the application for the report",
            "sameAsAttribute": "APP",
            "sameAsObject": "MAXAPPS"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "REPORT",
            "target": "REPORT",
            "remarks": "Relationship of ReportListCfg Object with Report Object. Used to return all Reports in a Report List Portlet Configuration.",
            "whereClause": "reportname=:reportname and appname=:appname",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "REPORTLISTCFG",
            "source": "LAYOUT",
            "remarks": "Relationship between REPORTLISTCFG Object and LAYOUT object. Used to return Report List Portlet configuration for a given portlet.",
            "whereClause": "layoutid = :layoutid",
            "cardinality": null
        },
        {
            "name": "REPORT_LIST",
            "source": "REPORT",
            "remarks": "Relationship between REPORT and REPORTLISTCFG table",
            "whereClause": "reportname=:reportname and appname =:appname",
            "cardinality": null
        }
    ]
}