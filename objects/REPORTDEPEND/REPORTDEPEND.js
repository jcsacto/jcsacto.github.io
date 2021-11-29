mos = {
    "objectName": "REPORTDEPEND",
    "className": "psdi.app.report.ReportDependSet",
    "description": "Report Dependency Information",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "REPORTDEPENDID",
    "primaryKeyColumns": [
        "REPORTNAME",
        "DEPREPORTNAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "REPORTDEPENDID",
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
            "attributeName": "DEPREPORTNAME",
            "required": true,
            "persistent": true,
            "title": "Dependent Report Name",
            "remarks": "Dependent Report Name",
            "sameAsAttribute": "REPORTNAME",
            "sameAsObject": "REPORT"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "REPORTDEPEND",
            "target": "REPORTDEPEND",
            "remarks": "Relationship between REPORTDEPEND and REPORTDEPEND tables",
            "whereClause": "reportname=:depreportname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REPORTDESIGN",
            "target": "REPORTDESIGN",
            "remarks": "Relationship between REPORTDESIGN and REPORTDEPEND tables",
            "whereClause": "reportname=:depreportname",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "REPORTDEPEND",
            "source": "REPORT",
            "remarks": "Relationship between REPORT and REPORTDEPEND tables",
            "whereClause": "reportname=:reportname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REPORTDEPEND",
            "source": "REPORTDEPEND",
            "remarks": "Relationship between REPORTDEPEND and REPORTDEPEND tables",
            "whereClause": "reportname=:depreportname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REPORTDESIGN_DEPEND",
            "source": "REPORTDESIGN",
            "remarks": "Report Libraries",
            "whereClause": "reportname=:reportname",
            "cardinality": "MULTIPLE"
        }
    ]
}