mos = {
    "objectName": "KPIGCONFIG",
    "className": "psdi.app.kpigconfig.KPIGConfigSet",
    "description": "KPI Graph Portlet Configuration",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "KPIGCONFIGID",
    "primaryKeyColumns": [
        "KPIGCONFIGID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "KPIMAIN",
            "targetObject": "KPIGCONFIG",
            "parentKeys": "KPINAME",
            "targetKeys": "KPINAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship from the KPI Graph Portlet to the KPI",
            "longDescription": null
        },
        {
            "objectName": "LAYOUT",
            "targetObject": "KPIGCONFIG",
            "parentKeys": "LAYOUTID",
            "targetKeys": "LAYOUTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship from the KPI Graph Portlet Configuration to the Star Center Layout",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "KPIGCONFIGID",
            "required": true,
            "persistent": true,
            "title": "Config Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LAYOUTID",
            "required": false,
            "persistent": true,
            "title": "Layout",
            "remarks": "Layout Id",
            "sameAsAttribute": "LAYOUTID",
            "sameAsObject": "LAYOUT"
        },
        {
            "attributeName": "KPINAME",
            "required": false,
            "persistent": true,
            "title": "KPI",
            "remarks": "KPI Name",
            "sameAsAttribute": "KPINAME",
            "sameAsObject": "KPIMAIN"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "KPIMAIN",
            "target": "KPIMAIN",
            "remarks": "Relationship of KPIGConfig Object with KPI Object. Used to return all KPIs in a KPIGraph Portlet Configuration",
            "whereClause": "kpiname = :kpiname",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "KPI_GRAPH",
            "source": "KPIMAIN",
            "remarks": "Relationship between KPIMAIN and KPIGCONFIG table",
            "whereClause": "kpiname=:kpiname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "KPIGRAPHCONFIG",
            "source": "LAYOUT",
            "remarks": "Relationship between KPIGCONFIG Object and LAYOUT object. Used to return kpi graph portlet configuration for a given portlet.",
            "whereClause": "layoutid = :layoutid",
            "cardinality": "UNDEFINED"
        }
    ]
}