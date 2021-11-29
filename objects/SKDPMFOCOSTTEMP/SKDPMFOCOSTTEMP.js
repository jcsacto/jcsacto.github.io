mos = {
    "objectName": "SKDPMFOCOSTTEMP",
    "className": "com.ibm.tivoli.maximo.skd.app.SKDPMFOCostSet",
    "description": "Temp SKD PM Forecast Cost",
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
            "title": "Month",
            "remarks": "The month that the costs are displayed for.",
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
            "remarks": "The year that the PM costs are displayed for.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOTALLABHRS",
            "required": false,
            "persistent": true,
            "title": "Total Labor Hours",
            "remarks": "Total labor hours of the PM forecast during the scheduled time period.",
            "sameAsAttribute": "LABORHRS",
            "sameAsObject": "JOBLABOR"
        },
        {
            "attributeName": "TOTALLABCOST",
            "required": false,
            "persistent": true,
            "title": "Total Labor Cost",
            "remarks": "Total labor cost of the PM forecast during the scheduled time period.",
            "sameAsAttribute": "LINECOST",
            "sameAsObject": "JOBLABOR"
        },
        {
            "attributeName": "TOTALMATCOST",
            "required": false,
            "persistent": true,
            "title": "Total Material Cost",
            "remarks": "Total material cost of the PM forecast during the scheduled time period.",
            "sameAsAttribute": "LINECOST",
            "sameAsObject": "JOBITEM"
        },
        {
            "attributeName": "TOTALTOOLCOST",
            "required": false,
            "persistent": true,
            "title": "Total Tool Cost",
            "remarks": "Total tool cost of the PM forecast during the scheduled time period.",
            "sameAsAttribute": "LINECOST",
            "sameAsObject": "JOBITEM"
        },
        {
            "attributeName": "TOTALSERVCOST",
            "required": false,
            "persistent": true,
            "title": "Total service cost of the PM forecast during the scheduled time period.",
            "remarks": "Total Service Cost of the PM forecast.",
            "sameAsAttribute": "LINECOST",
            "sameAsObject": "JOBITEM"
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
            "remarks": "The date when the week starts for cost calculation.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDWEEKDATE",
            "required": false,
            "persistent": true,
            "title": "End Week Date",
            "remarks": "The date when week ends for cost calculation.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}