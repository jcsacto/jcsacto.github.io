mos = {
    "objectName": "REPORTFILEEXPORT",
    "className": "psdi.app.report.ReportFileExportSet",
    "description": "Table for report export file types.",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "REPORTFILEEXPORTID",
    "primaryKeyColumns": [
        "FILETYPE"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "FILETYPE",
            "required": false,
            "persistent": true,
            "title": "File Type",
            "remarks": "Export File Type for Report Viewer",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "File Type Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISDEFAULT",
            "required": false,
            "persistent": true,
            "title": "Default",
            "remarks": "Defines default file type from the Report Viewer",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DISPLAY",
            "required": false,
            "persistent": true,
            "title": "Display",
            "remarks": "Defines if file type will display in the Report Viewer",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REPORTFILEEXPORTID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}