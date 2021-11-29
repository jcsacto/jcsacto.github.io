mos = {
    "objectName": "QUICKPRINT",
    "className": "psdi.app.report.virtual.QuickPrintSet",
    "description": "Non persistant Mbo to handle report printing",
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
            "attributeName": "REPORTID",
            "required": false,
            "persistent": false,
            "title": "ReportID",
            "remarks": "REPORTID",
            "sameAsAttribute": "REPORTID",
            "sameAsObject": "REPORT"
        },
        {
            "attributeName": "REPORTNUM",
            "required": false,
            "persistent": false,
            "title": "ReportNum",
            "remarks": "REPORTNUM",
            "sameAsAttribute": "REPORTNUM",
            "sameAsObject": "REPORT"
        },
        {
            "attributeName": "BASETABLENAME",
            "required": false,
            "persistent": false,
            "title": "Basetablename",
            "remarks": "BASETABLENAME",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "REPORTFOLDER",
            "required": false,
            "persistent": false,
            "title": "ReportFolder",
            "remarks": "REPORTFOLDER",
            "sameAsAttribute": "REPORTFOLDER",
            "sameAsObject": "REPORT"
        },
        {
            "attributeName": "REPORTNAME",
            "required": false,
            "persistent": false,
            "title": "Report Name",
            "remarks": "REPORTNAME",
            "sameAsAttribute": "REPORTNAME",
            "sameAsObject": "REPORT"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "DESCRIPTION",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "REPORT"
        },
        {
            "attributeName": "APPNAME",
            "required": false,
            "persistent": false,
            "title": "ApplicationName",
            "remarks": "APPNAME",
            "sameAsAttribute": "APP",
            "sameAsObject": "MAXAPPS"
        },
        {
            "attributeName": "RUNTYPE",
            "required": false,
            "persistent": false,
            "title": "RunType",
            "remarks": "RUNTYPE",
            "sameAsAttribute": "RUNTYPE",
            "sameAsObject": "REPORT"
        },
        {
            "attributeName": "ATTACHEDDOC",
            "required": true,
            "persistent": false,
            "title": "Attach Documents",
            "remarks": "ATTACHEDDOC",
            "sameAsAttribute": "ATTACHEDDOC",
            "sameAsObject": "REPORT"
        },
        {
            "attributeName": "TOOLBARLOCATION",
            "required": false,
            "persistent": false,
            "title": "Toolbar Location",
            "remarks": "TOOLBARLOCATION",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOOLBARICON",
            "required": false,
            "persistent": false,
            "title": "Toolbar Icon",
            "remarks": "TOOLBARICON",
            "sameAsAttribute": "TOOLBARICON",
            "sameAsObject": "REPORT"
        },
        {
            "attributeName": "TOOLBARSEQUENCE",
            "required": false,
            "persistent": false,
            "title": "Toolbar Seq",
            "remarks": "TOOLBARSEQUENCE",
            "sameAsAttribute": "TOOLBARSEQUENCE",
            "sameAsObject": "REPORT"
        },
        {
            "attributeName": "DESTINATIONFOLDER",
            "required": false,
            "persistent": false,
            "title": "Destination Folder",
            "remarks": "DESTINATIONFOLDER",
            "sameAsAttribute": "DESTINATIONFOLDER",
            "sameAsObject": "REPORT"
        },
        {
            "attributeName": "NOREQUESTPAGE",
            "required": true,
            "persistent": false,
            "title": "No request Page",
            "remarks": "NOREQUESTPAGE",
            "sameAsAttribute": "NOREQUESTPAGE",
            "sameAsObject": "REPORT"
        },
        {
            "attributeName": "DETAIL",
            "required": true,
            "persistent": false,
            "title": "Detail",
            "remarks": "DETAIL",
            "sameAsAttribute": "DETAIL",
            "sameAsObject": "REPORT"
        },
        {
            "attributeName": "LANGCODE",
            "required": false,
            "persistent": false,
            "title": "Language Code",
            "remarks": "LANGCODE",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        },
        {
            "attributeName": "USEWHEREWITHPARAM",
            "required": true,
            "persistent": false,
            "title": "Use Parameters",
            "remarks": "USEWHEREWITHPARAM",
            "sameAsAttribute": "USEWHEREWITHPARAM",
            "sameAsObject": "REPORT"
        },
        {
            "attributeName": "RECORDLIMIT",
            "required": false,
            "persistent": false,
            "title": "Record Limit",
            "remarks": "RECORDLIMIT",
            "sameAsAttribute": "RECORDLIMIT",
            "sameAsObject": "REPORT"
        },
        {
            "attributeName": "PRIORITY",
            "required": false,
            "persistent": false,
            "title": "Priority",
            "remarks": "PRIORITY",
            "sameAsAttribute": "TOOLBARSEQUENCE",
            "sameAsObject": "REPORT"
        },
        {
            "attributeName": "QUICKPRINTTYPE",
            "required": false,
            "persistent": false,
            "title": "Quickprinttype",
            "remarks": "QUICKPRINTTYPE",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}