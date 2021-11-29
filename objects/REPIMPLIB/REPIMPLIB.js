mos = {
    "objectName": "REPIMPLIB",
    "className": "psdi.app.report.virtual.ReportDialogImportLibSet",
    "description": "Import Library Table to house non persistent data",
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
            "attributeName": "FILELOC",
            "required": true,
            "persistent": false,
            "title": "File Library Location",
            "remarks": "Library file location",
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
            "attributeName": "REPORTNAME",
            "required": false,
            "persistent": false,
            "title": "Library File Name",
            "remarks": "Library File Name",
            "sameAsAttribute": "REPORTNAME",
            "sameAsObject": "REPORT"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Library File Description",
            "remarks": "Library File Description",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "REPORTDESIGN"
        },
        {
            "attributeName": "REPRESDSTR",
            "required": false,
            "persistent": false,
            "title": "Report Resource Data Stream",
            "remarks": "Report Resource Data Stream",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REPORTDSTR",
            "required": false,
            "persistent": false,
            "title": "Report Library DataStream",
            "remarks": "Report Library DataStream",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NEWLIBDESCR",
            "required": false,
            "persistent": false,
            "title": "New Library Description",
            "remarks": "New Library Description",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "REPORTDESIGN"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}