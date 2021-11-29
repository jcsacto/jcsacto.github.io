mos = {
    "objectName": "REPORTDESIGN",
    "className": "psdi.app.report.ReportDesignSet",
    "description": "Report Design",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "REPORTDESIGNID",
    "primaryKeyColumns": [
        "REPORTNAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "PERSON",
            "targetObject": "REPORTDESIGN",
            "parentKeys": "PERSONID",
            "targetKeys": "IMPORTEDBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Imported By",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "REPORTDESIGNID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REPORTNAME",
            "required": true,
            "persistent": true,
            "title": "Report Name",
            "remarks": "Report Name",
            "sameAsAttribute": "REPORTNAME",
            "sameAsObject": "REPORT"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Report Design Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REPORTFILENAME",
            "required": true,
            "persistent": true,
            "title": "Report File Name",
            "remarks": "Report File Name",
            "sameAsAttribute": "REPORTNAME",
            "sameAsObject": "REPORT"
        },
        {
            "attributeName": "DESIGN",
            "required": true,
            "persistent": true,
            "title": "Design Content",
            "remarks": "Report Design XML content",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RESOURCES",
            "required": false,
            "persistent": true,
            "title": "Resources data",
            "remarks": "Resources data (zip format)",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISLIBRARY",
            "required": true,
            "persistent": true,
            "title": "Is Library",
            "remarks": "Is Library?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HASRESOURCE",
            "required": true,
            "persistent": false,
            "title": "resource yorn",
            "remarks": "resource yorn",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IMPORTEDBY",
            "required": true,
            "persistent": true,
            "title": "Imported by",
            "remarks": "Imported by user",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "IMPORTEDDATE",
            "required": true,
            "persistent": true,
            "title": "Imported date",
            "remarks": "Imported date",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "REPORTDESIGN_DEPEND",
            "target": "REPORTDEPEND",
            "remarks": "Report Libraries",
            "whereClause": "reportname=:reportname",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "REPORTDESIGN_LABEL",
            "target": "REPORTLABEL",
            "remarks": "Relationship between REPORTDESIGN and REPORTLABEL table",
            "whereClause": "reportname=:reportname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REPORTDESIGN_PARAM",
            "target": "REPORTPARAM",
            "remarks": "Report Parameters",
            "whereClause": "reportname=:reportname",
            "cardinality": "MULTIPLE"
        }
    ],
    "incomingRelationships": [
        {
            "name": "REPORTDESIGN",
            "source": "REPORT",
            "remarks": "Relationship between REPORT and REPORTDESIGN tables",
            "whereClause": "reportname=:reportname and appname=:appname",
            "cardinality": "SINGLE"
        },
        {
            "name": "REPORT_DESIGN",
            "source": "REPORT",
            "remarks": "Report Design",
            "whereClause": "reportname=:reportname",
            "cardinality": "SINGLE"
        },
        {
            "name": "REPORTDESIGN",
            "source": "REPORTDEPEND",
            "remarks": "Relationship between REPORTDESIGN and REPORTDEPEND tables",
            "whereClause": "reportname=:depreportname",
            "cardinality": "UNDEFINED"
        }
    ]
}