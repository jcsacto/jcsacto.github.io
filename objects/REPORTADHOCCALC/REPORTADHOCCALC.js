mos = {
    "objectName": "REPORTADHOCCALC",
    "className": "psdi.app.report.ReportAdHocCalcSet",
    "description": "Table for ad-hoc report definitions",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "REPORTADHOCCALCID",
    "primaryKeyColumns": [
        "REPORTADHOCCALCID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXAPPS",
            "targetObject": "REPORTADHOCCALC",
            "parentKeys": "APP",
            "targetKeys": "APPNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 40",
            "longDescription": null
        },
        {
            "objectName": "REPORT",
            "targetObject": "REPORTADHOCCALC",
            "parentKeys": "APPNAME, REPORTNAME",
            "targetKeys": "APPNAME, REPORTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Ad hoc report calculations.",
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
            "attributeName": "EXPRESSION",
            "required": true,
            "persistent": true,
            "title": "Expression",
            "remarks": "Expression",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": true,
            "persistent": true,
            "title": "Name",
            "remarks": "Name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EXPORDER",
            "required": false,
            "persistent": true,
            "title": "Order",
            "remarks": "The position of the expression result on the report.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DATATYPE",
            "required": true,
            "persistent": true,
            "title": "Data Type",
            "remarks": "Specify the data type that the calculation must result in.",
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
            "attributeName": "TARGETID",
            "required": true,
            "persistent": true,
            "title": "Target ID",
            "remarks": "Target ID for tree UI",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REPORTADHOCCALCID",
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
            "name": "REPORTADHOCCALC",
            "source": "REPORTADHOC",
            "remarks": "Relationship from the REPORTADHOC table to the REPORTADHOCCALC table.",
            "whereClause": "REPORTNAME=:REPORTNAME and APPNAME=:APPNAME",
            "cardinality": null
        },
        {
            "name": "REPORTADHOCCALC_TEMP",
            "source": "REPORTADHOC",
            "remarks": "Relationship from REPORTADHOC to REPORTADHOCCALC that returns an empty set.",
            "whereClause": "1=5",
            "cardinality": null
        }
    ]
}