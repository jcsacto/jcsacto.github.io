mos = {
    "objectName": "SKDPMFOCOST",
    "className": "com.ibm.tivoli.maximo.skd.app.SKDPMFOCostSet",
    "description": "SKD PM Forecast Cost",
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
            "title": "Total Service Cost",
            "remarks": "Total service cost of the PM forecast during the scheduled time period.",
            "sameAsAttribute": "LINECOST",
            "sameAsObject": "JOBITEM"
        },
        {
            "attributeName": "TOTALCOST",
            "required": false,
            "persistent": true,
            "title": "Total Cost",
            "remarks": "Total Cost of the PM forecast scheduled during the time period.",
            "sameAsAttribute": "LINECOST",
            "sameAsObject": "JOBLABOR"
        },
        {
            "attributeName": "CREATEDATE",
            "required": false,
            "persistent": true,
            "title": "Created Date",
            "remarks": "The date and time when the pm forecast cost was created.",
            "sameAsAttribute": "CREATEDATE",
            "sameAsObject": "SKDPROJECT"
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
    "incomingRelationships": [
        {
            "name": "SKDPMCOSTMONTH",
            "source": "SKDPROJECT",
            "remarks": "Relationship from SKDPROJECT to SKDPMFOCOST to find monthly PM Forecast cost",
            "whereClause": "skdprojectid=:skdprojectid and timeperiod not in (select value from synonymdomain where domainid='TIMEPERIOD' and maxvalue in ('13','14') and defaults=1)",
            "cardinality": null
        },
        {
            "name": "SKDPMCOSTWEEK",
            "source": "SKDPROJECT",
            "remarks": "Relationship from SKDPROJECT to SKDPMFOCOST to find weekly PM Forecast cost",
            "whereClause": "skdprojectid=:skdprojectid and timeperiod=(select value from synonymdomain where domainid='TIMEPERIOD' and maxvalue='13' and defaults=1)",
            "cardinality": null
        },
        {
            "name": "SKDPMCOSTYEAR",
            "source": "SKDPROJECT",
            "remarks": "Relationship from SKDPROJECT to SKDPMFOCOST to find yearly PM Forecast cost",
            "whereClause": "skdprojectid=:skdprojectid and timeperiod=(select value from synonymdomain where domainid='TIMEPERIOD' and maxvalue='14' and defaults=1)",
            "cardinality": null
        },
        {
            "name": "SKDPMFOCOST",
            "source": "SKDPROJECT",
            "remarks": "Relationship from SKDPROJECT to SKDPMFOCOST to find all PM Forecast cost",
            "whereClause": "skdprojectid=:skdprojectid",
            "cardinality": null
        }
    ]
}