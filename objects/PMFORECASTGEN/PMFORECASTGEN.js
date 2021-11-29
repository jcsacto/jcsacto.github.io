mos = {
    "objectName": "PMFORECASTGEN",
    "className": "psdi.app.pm.virtual.PMForecastGenSet",
    "description": "Parameters for PM's forecast generation",
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
            "attributeName": "GENUNTILDATE",
            "required": true,
            "persistent": false,
            "title": "Forecast Until",
            "remarks": "The date until which the PM will be forecasted. The date entered in this field re-calculates the value in the Forecast For (Days) field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GENDURATION",
            "required": true,
            "persistent": false,
            "title": "Forecast For (Days)",
            "remarks": "The number of days for which you want to forecast the PM. The value entered in this field re-calculates the date in the Forecast Until field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASYNC",
            "required": true,
            "persistent": false,
            "title": "Run Forecast Generation in the Background",
            "remarks": "Select this box to generate the forecasted PM while performing other tasks. The forecasted PM records display on the Forecast tab.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOEMAILADDR",
            "required": false,
            "persistent": false,
            "title": "Notification E-mail for Forecast Generation",
            "remarks": "The e-mail address of the person who receives the forecast generation notice. The default value is the e-mail address of the current user.",
            "sameAsAttribute": "EMAILADDRESS",
            "sameAsObject": "EMAIL"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "PMFORECASTGEN",
            "source": "PM",
            "remarks": "Relationship to PMForecastGen table, used by the Generate Forecast dialog to generate the forecast .",
            "whereClause": null,
            "cardinality": null
        }
    ]
}