mos = {
    "objectName": "REPORTEXPVALUE",
    "className": "psdi.app.report.ReportExpValueSet",
    "description": "Values that may be included in an ad hoc expression",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "REPORTEXPVALUEID",
    "primaryKeyColumns": [
        "EXPRID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "EXPRID",
            "required": true,
            "persistent": true,
            "title": "Expression Id",
            "remarks": "The unique identifier for the keyword.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EXPRESSION",
            "required": true,
            "persistent": true,
            "title": "Expression",
            "remarks": "The expression keyword.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REMARKS",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Additional information about the keyword. This might include examples of how the users might use the keyword in an expression.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REPORTEXPVALUEID",
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