mos = {
    "objectName": "KPIHISTORY",
    "className": "psdi.app.kpi.KPIHistorySet",
    "description": "Records KPI History every time a KPi is run",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "KPIHISTORYID",
    "primaryKeyColumns": [
        "KPIHISTORYID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "KPIHISTORYID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "KPIVALUE",
            "required": false,
            "persistent": true,
            "title": "KPI Value",
            "remarks": "Enter a value for the KPI.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RECORDEDON",
            "required": false,
            "persistent": true,
            "title": "Recorded On",
            "remarks": "Enter a date for when the KPI was recorded.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "KPIMAINID",
            "required": false,
            "persistent": true,
            "title": "KPI Id",
            "remarks": "KPI Unique Id",
            "sameAsAttribute": "KPIMAINID",
            "sameAsObject": "KPIMAIN"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "KPI_HISTORY",
            "source": "KPIMAIN",
            "remarks": "Relationship between KPIMAIN and KPIHISTORY table",
            "whereClause": "kpimainid=:kpimainid",
            "cardinality": "UNDEFINED"
        }
    ]
}