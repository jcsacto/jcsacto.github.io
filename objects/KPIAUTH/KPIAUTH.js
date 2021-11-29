mos = {
    "objectName": "KPIAUTH",
    "className": "psdi.app.kpi.KPIAuthSet",
    "description": "KPI Authority",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "KPIAUTHID",
    "primaryKeyColumns": [
        "KPINAME",
        "GROUPNAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "KPIMAIN",
            "targetObject": "KPIAUTH",
            "parentKeys": "KPINAME",
            "targetKeys": "KPINAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "KPI",
            "longDescription": null
        },
        {
            "objectName": "MAXGROUP",
            "targetObject": "KPIAUTH",
            "parentKeys": "GROUPNAME",
            "targetKeys": "GROUPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Group Name",
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
            "attributeName": "GROUPNAME",
            "required": true,
            "persistent": true,
            "title": "Group",
            "remarks": "The name of the security group.",
            "sameAsAttribute": "GROUPNAME",
            "sameAsObject": "MAXGROUP"
        },
        {
            "attributeName": "KPIAUTHID",
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
            "name": "MAXGROUP",
            "target": "MAXGROUP",
            "remarks": "Relationship from the KPI Schedule table to the crontask instance table",
            "whereClause": "groupname=:groupname",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "KPIAUTH",
            "source": "KPIMAIN",
            "remarks": "Relationship from the KPIMAIN table to the KPISchedule table",
            "whereClause": "kpiname=:kpiname",
            "cardinality": null
        }
    ]
}