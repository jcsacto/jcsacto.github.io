mos = {
    "objectName": "KPITRENDCFG",
    "className": "psdi.app.kpi.KPITrendCfgSet",
    "description": "Trend Settings for a KPI",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "KPITRENDCFGID",
    "primaryKeyColumns": [
        "KPITRENDCFGID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "KPITRENDCFGID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "KPIMAINID",
            "required": false,
            "persistent": true,
            "title": "KPI Id",
            "remarks": "KPI Id",
            "sameAsAttribute": "KPIMAINID",
            "sameAsObject": "KPIMAIN"
        },
        {
            "attributeName": "DATERANGE",
            "required": false,
            "persistent": true,
            "title": "Predefined Date Range",
            "remarks": "Select a date range over which you want to see historical data displayed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CUSTSTARTDATE",
            "required": false,
            "persistent": true,
            "title": "From",
            "remarks": "Enter the start date for a period over which you want to see historical data displayed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CUSTENDDATE",
            "required": false,
            "persistent": true,
            "title": "To",
            "remarks": "Enter the end date for a period over which you want to see historical data displayed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CUSTDATERANGE",
            "required": false,
            "persistent": true,
            "title": "Show Details In",
            "remarks": "Select the units (days, weeks, months, years) that you want the chart drawn in.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COMPAREWITH",
            "required": false,
            "persistent": false,
            "title": "Compare With",
            "remarks": "A listing of KPIs selected, using the Select KPIs button, to compare to the KPI shown in the KPI Name field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONTENTUID",
            "required": true,
            "persistent": true,
            "title": "CONTENTUID",
            "remarks": "Content Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "KPI_TREND",
            "source": "KPIMAIN",
            "remarks": "Relationship to the KPITRENDCFG, used to find trend settings for a given KPI. The resulting set will contain zero or one object",
            "whereClause": "kpimainid=:kpimainid",
            "cardinality": "UNDEFINED"
        }
    ]
}