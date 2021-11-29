mos = {
    "objectName": "PMFORECASTCRONPARAM",
    "className": "psdi.app.pm.virtual.PMForecastCronParamSet",
    "description": "PM Forecast crontask param validation mbo",
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
            "attributeName": "SITEID",
            "required": false,
            "persistent": false,
            "title": "Site",
            "remarks": "specific site for the PM Forecast Crontask instance",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": false,
            "title": "Organization",
            "remarks": "specific organization for the PM Forecast Crontask instance",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "LOGFILE",
            "required": false,
            "persistent": false,
            "title": "Log File",
            "remarks": "Log file path",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EMAILTO",
            "required": false,
            "persistent": false,
            "title": "E-mail To",
            "remarks": "E-mail to address",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WHERECLAUSE",
            "required": false,
            "persistent": false,
            "title": "Where Clause",
            "remarks": "SQL expression that will be used to retrieve the PM records.",
            "sameAsAttribute": "CLAUSE",
            "sameAsObject": "QUERY"
        },
        {
            "attributeName": "FORECASTFORDAYS",
            "required": true,
            "persistent": false,
            "title": "Forecast for Days",
            "remarks": "The number of days for which you want to forecast the PM.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "PMFORECASTCRONPARAM",
            "source": "CRONTASKINSTANCE",
            "remarks": "Relationship to the PMFORECASTCRONPARAM table. Used to get the crontask parameter for a given instance.",
            "whereClause": "crontaskname=:crontaskname and instancename=:instancename",
            "cardinality": null
        }
    ]
}