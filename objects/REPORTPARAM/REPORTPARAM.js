mos = {
    "objectName": "REPORTPARAM",
    "className": "psdi.app.report.ReportParamSet",
    "description": "Report Parameter Information",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "REPORTPARAMID",
    "primaryKeyColumns": [
        "REPORTNAME",
        "PARAMNAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "REPORTPARAMID",
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
            "attributeName": "PARAMNAME",
            "required": true,
            "persistent": true,
            "title": "Parameter Name",
            "remarks": "Parameter Name",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "REPORTDESIGN_PARAM",
            "source": "REPORTDESIGN",
            "remarks": "Report Parameters",
            "whereClause": "reportname=:reportname",
            "cardinality": "MULTIPLE"
        }
    ]
}