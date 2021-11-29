mos = {
    "objectName": "SKDCOSTTEMP",
    "className": "com.ibm.tivoli.maximo.skd.app.SKDCostSet",
    "description": "SKD Cost",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [
        "CONTENTUID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "SKDPROJECTID",
            "required": false,
            "persistent": true,
            "title": "Project ID",
            "remarks": "Project ID",
            "sameAsAttribute": "SKDPROJECTID",
            "sameAsObject": "SKDPROJECT"
        },
        {
            "attributeName": "TIMEPERIOD",
            "required": false,
            "persistent": true,
            "title": "Time Period",
            "remarks": "Time Period",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PERIOD",
            "required": false,
            "persistent": true,
            "title": "Period No",
            "remarks": "Period",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "YEAR",
            "required": false,
            "persistent": true,
            "title": "Year",
            "remarks": "Year",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CESTLABCOST",
            "required": false,
            "persistent": true,
            "title": "Committed Estimated Labor Cost",
            "remarks": "Committed Estimated Labor Cost",
            "sameAsAttribute": "ESTLABCOST",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "SESTLABCOST",
            "required": false,
            "persistent": true,
            "title": "Saved Estimated Labor Cost",
            "remarks": "Saved Estimated Labor Cost",
            "sameAsAttribute": "ESTLABCOST",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ALABCOST",
            "required": false,
            "persistent": true,
            "title": "Actual Labor Cost",
            "remarks": "Actual Labor Cost",
            "sameAsAttribute": "ACTLABCOST",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "CESTMATCOST",
            "required": false,
            "persistent": true,
            "title": "Committed Estimated Material Cost",
            "remarks": "Committed Estimated Material Cost",
            "sameAsAttribute": "ESTMATCOST",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "SESTMATCOST",
            "required": false,
            "persistent": true,
            "title": "Saved Estimated Material Cost",
            "remarks": "Saved Estimated Material Cost",
            "sameAsAttribute": "ESTMATCOST",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "AMATCOST",
            "required": false,
            "persistent": true,
            "title": "Actual Material Cost",
            "remarks": "Actual Material Cost",
            "sameAsAttribute": "ACTMATCOST",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "CESTSERVCOST",
            "required": false,
            "persistent": true,
            "title": "Committed Estimated Service Cost",
            "remarks": "Committed Estimated Service Cost",
            "sameAsAttribute": "ESTSERVCOST",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "SESTSERVCOST",
            "required": false,
            "persistent": true,
            "title": "Saved Estimated Service Cost",
            "remarks": "Saved Estimated Service Cost",
            "sameAsAttribute": "ESTSERVCOST",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ASERVCOST",
            "required": false,
            "persistent": true,
            "title": "Actual Service Cost",
            "remarks": "Total actual service cost against this work order.",
            "sameAsAttribute": "ACTSERVCOST",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "CESTTOOLCOST",
            "required": false,
            "persistent": true,
            "title": "Committed Estimated Tool Cost",
            "remarks": "Committed Estimated Tool Cost",
            "sameAsAttribute": "ESTTOOLCOST",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "SESTTOOLCOST",
            "required": false,
            "persistent": true,
            "title": "Saved Estimated Tool Cost",
            "remarks": "Saved Estimated Tool Cost",
            "sameAsAttribute": "ESTTOOLCOST",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ATOOLCOST",
            "required": false,
            "persistent": true,
            "title": "Actual Tool Cost",
            "remarks": "Actual Tool Cost",
            "sameAsAttribute": "ACTTOOLCOST",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "CONTENTUID",
            "required": false,
            "persistent": true,
            "title": "Content Unique ID",
            "remarks": "Content Unique ID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STARTWEEKDATE",
            "required": false,
            "persistent": true,
            "title": "Start Week Date",
            "remarks": "The date when week starts for cost calculation",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDWEEKDATE",
            "required": false,
            "persistent": true,
            "title": "End Week Date",
            "remarks": "The date when week ends for cost calculation",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}