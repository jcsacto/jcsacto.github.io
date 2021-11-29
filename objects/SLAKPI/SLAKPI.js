mos = {
    "objectName": "SLAKPI",
    "className": "psdi.app.sla.SLAKPISet",
    "description": "The middle table between sla and contract",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "SLAKPIID",
    "primaryKeyColumns": [
        "SLANUM",
        "KPINAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "KPIMAIN",
            "targetObject": "SLAKPI",
            "parentKeys": "KPINAME",
            "targetKeys": "KPINAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Between KPI and SLA",
            "longDescription": null
        },
        {
            "objectName": "SLA",
            "targetObject": "SLAKPI",
            "parentKeys": "SLANUM",
            "targetKeys": "SLANUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Link to KPI",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "SLAKPIID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SLANUM",
            "required": true,
            "persistent": true,
            "title": "SLA",
            "remarks": "SLA ID",
            "sameAsAttribute": "SLANUM",
            "sameAsObject": "SLA"
        },
        {
            "attributeName": "KPINAME",
            "required": true,
            "persistent": true,
            "title": "KPI",
            "remarks": "Identifies the KPI that you want to associate to the service level agreement (SLA). Click the Detail Menu to select a KPI or go to the KPI Manager and create one.",
            "sameAsAttribute": "KPINAME",
            "sameAsObject": "KPIMAIN"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "KPIMAIN",
            "target": "KPIMAIN",
            "remarks": "Define slakpi to kpimain relationship",
            "whereClause": "kpiname = :kpiname",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "SLAKPI",
            "source": "SLA",
            "remarks": "Define sla to slakpi relationship",
            "whereClause": "slanum = :slanum",
            "cardinality": "UNDEFINED"
        }
    ]
}