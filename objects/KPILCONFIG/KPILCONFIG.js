mos = {
    "objectName": "KPILCONFIG",
    "className": "psdi.app.kpilconfig.KPILConfigSet",
    "description": "KPI List Portlet",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "KPILCONFIGID",
    "primaryKeyColumns": [
        "KPILCONFIGID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "KPIMAIN",
            "targetObject": "KPILCONFIG",
            "parentKeys": "KPINAME",
            "targetKeys": "KPINAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship from the KPI List Portlet to the KPI",
            "longDescription": null
        },
        {
            "objectName": "LAYOUT",
            "targetObject": "KPILCONFIG",
            "parentKeys": "LAYOUTID",
            "targetKeys": "LAYOUTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship from the KPI List Portlet Configuration to the Start Center Layout",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "KPILCONFIGID",
            "required": true,
            "persistent": true,
            "title": "KPI List Config Id",
            "remarks": "unique identifier",
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
            "remarks": "Enter the name of the KPI to filter on.",
            "sameAsAttribute": "KPINAME",
            "sameAsObject": "KPIMAIN"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "KPIMAIN",
            "target": "KPIMAIN",
            "remarks": "Relationship of KPILConfig Object with KPI Object. Used to return all KPIs in a KPI ListPortlet Configuration",
            "whereClause": "kpiname = :kpiname",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "KPI_LIST",
            "source": "KPIMAIN",
            "remarks": "Relationship between KPIMAIN and KPILCONFIG table",
            "whereClause": "kpiname=:kpiname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "KPILISTCONFIG",
            "source": "LAYOUT",
            "remarks": "Relationship between KPILCONFIG Object and LAYOUT object. Used to return KPI List Portlet portlet configuration for a given portlet.",
            "whereClause": "layoutid = :layoutid",
            "cardinality": "UNDEFINED"
        }
    ]
}