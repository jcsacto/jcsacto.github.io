mos = {
    "objectName": "REPIMPREP",
    "className": "psdi.app.report.virtual.ReportDialogImportRepSet",
    "description": "Import placeholder for report import data",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": false,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "REPORTNAME",
            "required": true,
            "persistent": false,
            "title": "Report Design File",
            "remarks": "Report Design File",
            "sameAsAttribute": "REPORTNAME",
            "sameAsObject": "REPORT"
        },
        {
            "attributeName": "APPNAME",
            "required": true,
            "persistent": false,
            "title": "APP Name",
            "remarks": "Application Name",
            "sameAsAttribute": "APP",
            "sameAsObject": "MAXAPPS"
        },
        {
            "attributeName": "FILELOC",
            "required": true,
            "persistent": false,
            "title": "Report Design File Location",
            "remarks": "Report Design File Location",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REPRESLOC",
            "required": false,
            "persistent": false,
            "title": "Report Resource File Location",
            "remarks": "Report Resource File Location",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REPORTDSTR",
            "required": false,
            "persistent": false,
            "title": "Report Design DataStream",
            "remarks": "Report Design DataStream",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REPRESDSTR",
            "required": false,
            "persistent": false,
            "title": "Report Resource DataStream",
            "remarks": "Report Resource DataStream",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": true,
            "persistent": false,
            "title": "Report Descrption",
            "remarks": "Report Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}