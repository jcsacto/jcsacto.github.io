mos = {
    "objectName": "VIEWREPDEP",
    "className": "psdi.app.report.virtual.ViewReportDepSet",
    "description": "Report Dependency View Table",
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
            "required": false,
            "persistent": false,
            "title": "App Name",
            "remarks": "App Name",
            "sameAsAttribute": "APP",
            "sameAsObject": "MAXAPPS"
        },
        {
            "attributeName": "REPORTFILE",
            "required": true,
            "persistent": false,
            "title": "Library File",
            "remarks": "Library File",
            "sameAsAttribute": "REPORTNAME",
            "sameAsObject": "REPORT"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "Description",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "REPORTDESIGN"
        },
        {
            "attributeName": "RESEXT",
            "required": true,
            "persistent": false,
            "title": "Does Resource Exist",
            "remarks": "Does Resource Exist?",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}