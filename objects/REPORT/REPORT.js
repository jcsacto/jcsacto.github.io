mos = {
    "objectName": "REPORT",
    "className": "psdi.app.report.ReportSet",
    "description": "Base table for report app",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "REPORTID",
    "primaryKeyColumns": [
        "APPNAME",
        "REPORTNAME"
    ],
    "logicalRelationships": [
        {
            "objectName": "REPORT",
            "targetObject": "REPORTADHOC",
            "parentKeys": "APPNAME, REPORTNAME",
            "targetKeys": "APPNAME, REPORTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Ad hoc reports.",
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
        },
        {
            "objectName": "REPORT",
            "targetObject": "REPORTADHOCFIELD",
            "parentKeys": "APPNAME, REPORTNAME",
            "targetKeys": "APPNAME, REPORTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Ad hoc report selected fields.",
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
        },
        {
            "objectName": "REPORT",
            "targetObject": "REPORTAUTH",
            "parentKeys": "APPNAME, REPORTNAME",
            "targetKeys": "APPNAME, REPORTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Report authorizations.",
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
        },
        {
            "objectName": "REPORT",
            "targetObject": "REPORTJOB",
            "parentKeys": "APPNAME, REPORTNAME",
            "targetKeys": "APPNAME, REPORTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Report",
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
        },
        {
            "objectName": "REPORT",
            "targetObject": "REPORTLOOKUP",
            "parentKeys": "APPNAME, REPORTNAME",
            "targetKeys": "APPNAME, REPORTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Report Parameters",
            "longDescription": null
        },
        {
            "objectName": "REPORT",
            "targetObject": "REPORTOUTPUT",
            "parentKeys": "APPNAME, REPORTNAME",
            "targetKeys": "APPNAME, REPORTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Scheduled report output (Report Viewer app).",
            "longDescription": null
        },
        {
            "objectName": "REPORT",
            "targetObject": "REPORTPROCRESERVE",
            "parentKeys": "APPNAME, REPORTNAME",
            "targetKeys": "APPNAME, REPORTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Report",
            "longDescription": null
        },
        {
            "objectName": "REPORT",
            "targetObject": "REPORTPROCSCHED",
            "parentKeys": "APPNAME, REPORTNAME",
            "targetKeys": "APPNAME, REPORTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Report",
            "longDescription": null
        },
        {
            "objectName": "REPORT",
            "targetObject": "REPORTRUNQUEUE",
            "parentKeys": "APPNAME, REPORTNAME",
            "targetKeys": "APPNAME, REPORTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Report",
            "longDescription": null
        },
        {
            "objectName": "REPORT",
            "targetObject": "REPORTSCHED",
            "parentKeys": "APPNAME, REPORTNAME",
            "targetKeys": "APPNAME, REPORTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Report",
            "longDescription": null
        },
        {
            "objectName": "REPORT",
            "targetObject": "REPORTUSAGELOG",
            "parentKeys": "APPNAME, REPORTNAME",
            "targetKeys": "APPNAME, REPORTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Report",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "REPORT",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "REPORT",
            "parentKeys": "APP",
            "targetKeys": "APPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application this report is registered to.",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "REPORT",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "BASETABLENAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 158",
            "longDescription": null
        },
        {
            "objectName": "MAXUSER",
            "targetObject": "REPORT",
            "parentKeys": "USERID",
            "targetKeys": "LASTRUNBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "User ID of last user to run the report.",
            "longDescription": null
        },
        {
            "objectName": "MAXUSER",
            "targetObject": "REPORT",
            "parentKeys": "USERID",
            "targetKeys": "USERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "User ID of the owner if this is an ad hoc report.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "REPORT",
            "parentKeys": "PERSONID",
            "targetKeys": "LASTRUNBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Last Run By",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "REPORT",
            "parentKeys": "PERSONID",
            "targetKeys": "USERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "REPORTID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REPORTNUM",
            "required": true,
            "persistent": true,
            "title": "Report Number",
            "remarks": "Report Number",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BASETABLENAME",
            "required": false,
            "persistent": true,
            "title": "Base Table",
            "remarks": "Base table reference for lookups",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "REPORTFOLDER",
            "required": false,
            "persistent": true,
            "title": "Report Folder",
            "remarks": "Report Folder Name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REPORTNAME",
            "required": true,
            "persistent": true,
            "title": "Report File Name",
            "remarks": "Report File Name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Report Description",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "RUNTYPE",
            "required": true,
            "persistent": true,
            "title": "Report Type",
            "remarks": "Type of report to run",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ATTACHEDDOC",
            "required": true,
            "persistent": true,
            "title": "Print with Attached Docs",
            "remarks": "Print this report with attached documents?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOOLBARLOCATION",
            "required": true,
            "persistent": true,
            "title": "Toolbar Location",
            "remarks": "Display this in toolbar?  If so, when?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOOLBARICON",
            "required": true,
            "persistent": true,
            "title": "Toolbar Image",
            "remarks": "Which toolbar image to use",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOOLBARSEQUENCE",
            "required": false,
            "persistent": true,
            "title": "Toolbar Sequence",
            "remarks": "Order of toolbar quicklink buttons",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESTINATIONFOLDER",
            "required": false,
            "persistent": true,
            "title": "Destination Folder",
            "remarks": "Where the reports/queries should generate files",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NOREQUESTPAGE",
            "required": true,
            "persistent": true,
            "title": "No Request Page",
            "remarks": "Don't display this report in report list dialog",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DETAIL",
            "required": true,
            "persistent": true,
            "title": "Limit Records",
            "remarks": "Limits the number of application records that can be selected for the report.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LANGCODE",
            "required": false,
            "persistent": true,
            "title": "Language Code",
            "remarks": "Language Column",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        },
        {
            "attributeName": "USEWHEREWITHPARAM",
            "required": true,
            "persistent": true,
            "title": "Use Both Parameter Options",
            "remarks": "Runs reports with both the application query and user-specified parameters.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RECORDLIMIT",
            "required": false,
            "persistent": true,
            "title": "Max Record Limit",
            "remarks": "The maximum number of application records that can be selected for reports.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "QL",
            "required": true,
            "persistent": true,
            "title": "Browser View",
            "remarks": "Browser View",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DP",
            "required": true,
            "persistent": true,
            "title": "Direct Print",
            "remarks": "Direct Print",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PAD",
            "required": true,
            "persistent": true,
            "title": "Direct Print with Attachments",
            "remarks": "Direct Print with Attachments",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "QLLOC",
            "required": true,
            "persistent": true,
            "title": "Browser View Location",
            "remarks": "Browser View Location",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DPLOC",
            "required": true,
            "persistent": true,
            "title": "Direct Print Location",
            "remarks": "Direct Print Location",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PADLOC",
            "required": true,
            "persistent": true,
            "title": "Direct Print with Attachments  Location",
            "remarks": "Direct Print with Attachments Location",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PRIORITY",
            "required": false,
            "persistent": true,
            "title": "Priority",
            "remarks": "Handles Printing Priority",
            "sameAsAttribute": "TOOLBARSEQUENCE",
            "sameAsObject": "REPORT"
        },
        {
            "attributeName": "RPTNAMEBEFOREDUPLICATE",
            "required": false,
            "persistent": false,
            "title": "Reportname Before Duplicate",
            "remarks": "This field is used for duplicating the report",
            "sameAsAttribute": "REPORTNAME",
            "sameAsObject": "REPORT"
        },
        {
            "attributeName": "USERID",
            "required": false,
            "persistent": true,
            "title": "Created By",
            "remarks": "The User ID of the user who created this report. Only populated for Business Reports.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "FROMRUNREPORTS",
            "required": true,
            "persistent": false,
            "title": "From Runreports",
            "remarks": "Is this mbo loaded by Run Reports dialog",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DISPLAYORDER",
            "required": false,
            "persistent": true,
            "title": "Display Order",
            "remarks": "The sequence number by which reports are sorted if the value exists for the report",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SCHEDULEONLY",
            "required": true,
            "persistent": true,
            "title": "Schedule Only",
            "remarks": "Indicates that the report may only run during appointed times",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LASTRUNDATE",
            "required": false,
            "persistent": true,
            "title": "Last Run Date",
            "remarks": "Date report was last run",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LASTRUNBY",
            "required": false,
            "persistent": true,
            "title": "Last Run By",
            "remarks": "Report was last run by this user",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "LASTRUNDURATION",
            "required": false,
            "persistent": true,
            "title": "Last Run Duration",
            "remarks": "The last run duration",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EXCLUDEDYNAMICWHERE",
            "required": false,
            "persistent": true,
            "title": "Exclude Dynamic Where Clause",
            "remarks": "Only applies to ad hoc reports. If true, the report was created with Apply the Current Query selected to save any filters in the report SQL.  When the report is executed, the dynamic filter from the application will not be passed to the report.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PACKAGE",
            "required": false,
            "persistent": true,
            "title": "Package Name",
            "remarks": "Cognos Package Name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PACKAGELOC",
            "required": false,
            "persistent": true,
            "title": "Package Location",
            "remarks": "Location of Cognos Package",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EDITENABLED",
            "required": true,
            "persistent": true,
            "title": "Edit Enabled",
            "remarks": "Is the ad hoc report enabled for editing?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PARAMCOLUMNS",
            "required": false,
            "persistent": true,
            "title": "Number of Request Page Columns",
            "remarks": "The number of columns used to display parameters on the report request page.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "REPORTTOAPP",
            "target": "MAXAPPS",
            "remarks": "Report to Maxapps",
            "whereClause": "app = :appname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REPORTADHOC",
            "target": "REPORTADHOC",
            "remarks": "Relationship from Report to ReportAdHoc.",
            "whereClause": "reportname=:reportname and appname=:appname",
            "cardinality": null
        },
        {
            "name": "REPORTADHOCFIELD",
            "target": "REPORTADHOCFIELD",
            "remarks": "Relationship from Report to ReportAdHocField.",
            "whereClause": "reportname=:reportname and appname=:appname",
            "cardinality": null
        },
        {
            "name": "REPORTAPPAUTH",
            "target": "REPORTAPPAUTH",
            "remarks": "REPORTAPPAUTH Relationship from REPORT to REPORTAPPAUTH",
            "whereClause": "appname=:appname and runtype=:runtype",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "REPORTAUTH",
            "target": "REPORTAUTH",
            "remarks": "REPORTAUTH Relationship from REPORT to REPORTAUTH",
            "whereClause": "reportnum = :reportnum",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "REPORTDEPEND",
            "target": "REPORTDEPEND",
            "remarks": "Relationship between REPORT and REPORTDEPEND tables",
            "whereClause": "reportname=:reportname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REPORTDESIGN",
            "target": "REPORTDESIGN",
            "remarks": "Relationship between REPORT and REPORTDESIGN tables",
            "whereClause": "reportname=:reportname and appname=:appname",
            "cardinality": "SINGLE"
        },
        {
            "name": "REPORT_DESIGN",
            "target": "REPORTDESIGN",
            "remarks": "Report Design",
            "whereClause": "reportname=:reportname",
            "cardinality": "SINGLE"
        },
        {
            "name": "REPORT_LABEL",
            "target": "REPORTLABEL",
            "remarks": "Relationship between REPORT and REPORTLABEL table",
            "whereClause": "reportname = :reportname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REPORT_LIST",
            "target": "REPORTLISTCFG",
            "remarks": "Relationship between REPORT and REPORTLISTCFG table",
            "whereClause": "reportname=:reportname and appname =:appname",
            "cardinality": null
        },
        {
            "name": "REPORT_LOOKUP",
            "target": "REPORTLOOKUP",
            "remarks": "Relationship between REPORT and REPORTLOOKUP table",
            "whereClause": "reportnum = :reportnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMREPORTLOOKUP",
            "target": "REPORTLOOKUP",
            "remarks": "all reportlookup records for a report",
            "whereClause": "reportname=:reportname and appname=:appname",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "REPORTPROCRESERVE",
            "target": "REPORTPROCRESERVE",
            "remarks": "Relationship from REPORT to REPORTPROCRESERVE",
            "whereClause": "reportname=:reportname and appname=:appname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REPORTPROCSCHED",
            "target": "REPORTPROCSCHED",
            "remarks": "Relationship from REPORT to REPORTPROCSCHED table",
            "whereClause": "reportname=:reportname and appname=:appname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REPORTSCHED",
            "target": "REPORTSCHED",
            "remarks": "Relationship between REPORTSCHED and REPORT tables",
            "whereClause": "reportname=:reportname and appname=:appname",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "REPORTUSAGELOG",
            "target": "REPORTUSAGELOG",
            "remarks": "Relationship between REPORT and REPORTUSAGELOG tables",
            "whereClause": "reportname=:reportname and appname=:appname",
            "cardinality": "MULTIPLE"
        }
    ],
    "incomingRelationships": [
        {
            "name": "KPI_REPORT",
            "source": "KPIMAIN",
            "remarks": "Relationship between REPORT and KPIMAIN tables",
            "whereClause": "reportname=:reportname and appname=:reportappname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REPORT",
            "source": "REPORTADHOC",
            "remarks": "Relationship from the REPORTADHOC table to the REPORT table. The resulting set will contain one object.",
            "whereClause": "reportname=:reportname and appname=:appname",
            "cardinality": null
        },
        {
            "name": "REPORT",
            "source": "REPORTJOB",
            "remarks": "Relationship from REPORTJOB to REPORT",
            "whereClause": "appname=:appname and reportname=:reportname",
            "cardinality": null
        },
        {
            "name": "REPORT",
            "source": "REPORTLISTCFG",
            "remarks": "Relationship of ReportListCfg Object with Report Object. Used to return all Reports in a Report List Portlet Configuration.",
            "whereClause": "reportname=:reportname and appname=:appname",
            "cardinality": null
        },
        {
            "name": "REPORT",
            "source": "REPORTOUTPUT",
            "remarks": "Returns only one REPORT entry",
            "whereClause": "appname=:appname and reportname=:reportname",
            "cardinality": null
        },
        {
            "name": "REPORT",
            "source": "REPORTPARAMETER",
            "remarks": "Relationship between REPORT and REPORTPARAMETER tables",
            "whereClause": "reportname=:reportname and appname=:appname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REPORT",
            "source": "REPORTPROCRESERVE",
            "remarks": "Relationship between REPORTPROCRESERVE and REPORT tables",
            "whereClause": "reportname=:reportname and appname=:appname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REPORT",
            "source": "REPORTPROCSCHED",
            "remarks": "Relationship from REPORTPROCSCHED to REPORT table",
            "whereClause": "reportname=:reportname and appname=:appname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REPORT",
            "source": "REPORTSCHED",
            "remarks": "Relationship between REPORT and REPORTSCHED tables",
            "whereClause": "reportname=:reportname and appname=:appname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REPORT",
            "source": "REPORTUSAGELOG",
            "remarks": "Relationship to REPORT from REPORTUSAGELOG tables",
            "whereClause": "reportname=:reportname and appname=:appname",
            "cardinality": null
        }
    ]
}