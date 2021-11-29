mos = {
    "objectName": "REPORTLOOKUP",
    "className": "psdi.app.report.ReportLookupSet",
    "description": "Record for each lookup on a request page",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "REPORTLOOKUPID",
    "primaryKeyColumns": [
        "APPNAME",
        "REPORTNAME",
        "PARAMETERNAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXAPPS",
            "targetObject": "REPORTLOOKUP",
            "parentKeys": "APP",
            "targetKeys": "APPNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 48",
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
        }
    ],
    "columns": [
        {
            "attributeName": "REPORTLOOKUPID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PARAMETERNAME",
            "required": false,
            "persistent": true,
            "title": "Parameter Name",
            "remarks": "Parameter Name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ATTRIBUTENAME",
            "required": false,
            "persistent": true,
            "title": "Attribute Name",
            "remarks": "Attribute Name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LOOKUPNAME",
            "required": false,
            "persistent": true,
            "title": "Lookup Name",
            "remarks": "Lookup Name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SEQUENCE",
            "required": false,
            "persistent": true,
            "title": "Display Sequence",
            "remarks": "Display Sequence",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LABELOVERRIDE",
            "required": false,
            "persistent": true,
            "title": "Display Name",
            "remarks": "Parameter display name on request page",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DEFAULTVALUE",
            "required": false,
            "persistent": true,
            "title": "Default Value",
            "remarks": "Default Value",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REQUIRED",
            "required": true,
            "persistent": true,
            "title": "Required",
            "remarks": "Is lookup required",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HIDDEN",
            "required": true,
            "persistent": true,
            "title": "Hidden",
            "remarks": "Is this a hidden input?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REPORTNAME",
            "required": false,
            "persistent": true,
            "title": "Report Filename",
            "remarks": "Report Filename",
            "sameAsAttribute": "REPORTNAME",
            "sameAsObject": "REPORT"
        },
        {
            "attributeName": "OPERATOR",
            "required": false,
            "persistent": true,
            "title": "Operator",
            "remarks": "Operator used in query",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MULTILOOKUP",
            "required": true,
            "persistent": true,
            "title": "Multi-Lookup Enabled",
            "remarks": "Is this a multiple lookup enabled field",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REPORTNUM",
            "required": false,
            "persistent": true,
            "title": "Report Number",
            "remarks": "Report Number",
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
            "name": "RELATIONSHIPTREE",
            "target": "EXPBUILDTREE",
            "remarks": "Relationship for REPORT LOOKUP TREE",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REPORTLOOKUP_MAXATTR",
            "target": "MAXATTRIBUTE",
            "remarks": "List of Attributes for entered object",
            "whereClause": "attributename = :attributename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REPORT_LOOKUPS",
            "target": "REPORTLOOKUPLIST",
            "remarks": "List of Lookups",
            "whereClause": "lookupname = :lookupname",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "REPORT_LOOKUP",
            "source": "REPORT",
            "remarks": "Relationship between REPORT and REPORTLOOKUP table",
            "whereClause": "reportnum = :reportnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMREPORTLOOKUP",
            "source": "REPORT",
            "remarks": "all reportlookup records for a report",
            "whereClause": "reportname=:reportname and appname=:appname",
            "cardinality": "MULTIPLE"
        }
    ]
}