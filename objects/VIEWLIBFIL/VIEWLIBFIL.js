mos = {
    "objectName": "VIEWLIBFIL",
    "className": "psdi.app.report.virtual.ViewLibraryFileSet",
    "description": "Holder for view report file",
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