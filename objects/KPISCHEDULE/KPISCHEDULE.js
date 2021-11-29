mos = {
    "objectName": "KPISCHEDULE",
    "className": "psdi.app.kpi.KPIScheduleSet",
    "description": "KPI Schedule",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "KPISCHEDULEID",
    "primaryKeyColumns": [
        "KPINAME",
        "INSTANCENAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "CRONTASKDEF",
            "targetObject": "KPISCHEDULE",
            "parentKeys": "CRONTASKNAME",
            "targetKeys": "INSTANCENAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 10",
            "longDescription": null
        },
        {
            "objectName": "KPIMAIN",
            "targetObject": "KPISCHEDULE",
            "parentKeys": "KPINAME",
            "targetKeys": "KPINAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "KPI",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "KPINAME",
            "required": true,
            "persistent": true,
            "title": "The name of the KPI",
            "remarks": "The name of the KPI",
            "sameAsAttribute": "KPINAME",
            "sameAsObject": "KPIMAIN"
        },
        {
            "attributeName": "INSTANCENAME",
            "required": true,
            "persistent": true,
            "title": "Cron Task Instance Name",
            "remarks": "The name of the crontask instance.",
            "sameAsAttribute": "CRONTASKNAME",
            "sameAsObject": "CRONTASKDEF"
        },
        {
            "attributeName": "KPISCHEDULEID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "CRONTASKINSTANCE",
            "target": "CRONTASKINSTANCE",
            "remarks": "Relationship from the KPI Schedule table to the crontask instance table",
            "whereClause": "crontaskname='KPICronTask' and instancename=:instancename",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "KPISCHEDULE",
            "source": "KPIMAIN",
            "remarks": "Relationship from the KPIMAIN table to the KPISchedule table",
            "whereClause": "kpiname=:kpiname",
            "cardinality": null
        }
    ]
}