mos = {
    "objectName": "PMFORECASTCOSTCRONPARAM",
    "className": "psdi.app.pm.virtual.PMForecastCostCronParamSet",
    "description": "PM Forecast Cost crontask param validation mbo",
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
            "remarks": "specific site for the PM Forecast Cost Crontask instance",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": false,
            "title": "Organization",
            "remarks": "specific organization for the PM Forecast Cost Crontask instance",
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
            "remarks": "Email to address",
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
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "PMFORECASTCOSTCRONPARAM",
            "source": "CRONTASKINSTANCE",
            "remarks": "Relationship to the PMFORECASTCOSTCRONPARAM table. Used to get the crontask parameter for a given instance.",
            "whereClause": "crontaskname=:crontaskname and instancename=:instancename",
            "cardinality": null
        }
    ]
}