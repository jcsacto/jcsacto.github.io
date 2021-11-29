mos = {
    "objectName": "REPORTADHOCSUM",
    "className": "psdi.app.report.ReportAdHocSumSet",
    "description": "Table for ad-hoc report definitions",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "REPORTADHOCSUMID",
    "primaryKeyColumns": [
        "REPORTNAME",
        "APPNAME",
        "OBJECTID",
        "ATTRIBUTENAME",
        "SUMFUNCTION"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXAPPS",
            "targetObject": "REPORTADHOCSUM",
            "parentKeys": "APP",
            "targetKeys": "APPNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 42",
            "longDescription": null
        },
        {
            "objectName": "REPORT",
            "targetObject": "REPORTADHOCSUM",
            "parentKeys": "APPNAME, REPORTNAME",
            "targetKeys": "APPNAME, REPORTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Ad hoc report summaries.",
            "longDescription": null
        }
    ],
    "columns": [
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
        },
        {
            "attributeName": "SUMFUNCTION",
            "required": true,
            "persistent": true,
            "title": "Summary Type",
            "remarks": "Type of summary operation.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ATTRIBUTENAME",
            "required": true,
            "persistent": true,
            "title": "Attribute Name",
            "remarks": "Name of the attribute",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "EXPRESSION",
            "required": true,
            "persistent": true,
            "title": "Summary",
            "remarks": "Summary",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": true,
            "persistent": true,
            "title": "Name",
            "remarks": "The name of the summary that is displayed on the report.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EXPORDER",
            "required": false,
            "persistent": true,
            "title": "Order",
            "remarks": "The order that the summary is displayed on the report.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DATATYPE",
            "required": false,
            "persistent": false,
            "title": "Resulting summary datatype",
            "remarks": "Resulting summary datatype",
            "sameAsAttribute": "MAXTYPE",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "OBJECTID",
            "required": false,
            "persistent": true,
            "title": "Object ID",
            "remarks": "Unique identifier of the object within the object structure, if this report was designed against one.",
            "sameAsAttribute": "OBJECTID",
            "sameAsObject": "MAXINTOBJDETAIL"
        },
        {
            "attributeName": "CATEGORY",
            "required": false,
            "persistent": false,
            "title": "Category",
            "remarks": "Description of the object that owns this field.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "MAXINTOBJDETAIL"
        },
        {
            "attributeName": "REPORTADHOCSUMID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "REPORTADHOCSUM",
            "source": "REPORTADHOC",
            "remarks": "Relationship from the REPORTADHOC table to the REPORTADHOCSUM table.",
            "whereClause": "REPORTNAME=:REPORTNAME and APPNAME=:APPNAME",
            "cardinality": null
        },
        {
            "name": "REPORTADHOCSUM_TEMP",
            "source": "REPORTADHOC",
            "remarks": "Relationship from REPORTADHOC to REPORTADHOCSUM that returns an empty set.",
            "whereClause": "1=5",
            "cardinality": null
        }
    ]
}