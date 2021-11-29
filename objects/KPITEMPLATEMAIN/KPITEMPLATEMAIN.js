mos = {
    "objectName": "KPITEMPLATEMAIN",
    "className": "psdi.app.kpi.KPITemplateMainSet",
    "description": "KPI Template Main Record.  Each KPITEMPLATE will have 1 or more KPITEMPLATEMAIN records.",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "KPITEMPLATEMAINID",
    "primaryKeyColumns": [
        "KPITEMPLATENUM",
        "KPITEMPLATEMAINNUM"
    ],
    "logicalRelationships": [
        {
            "objectName": "KPITEMPLATEMAIN",
            "targetObject": "KPIMAIN",
            "parentKeys": "KPITEMPLATENUM, KPITEMPLATEMAINNUM",
            "targetKeys": "KPITEMPLATENUM, KPITEMPLATEMAINNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "KPI Template",
            "longDescription": null
        },
        {
            "objectName": "KPITEMPLATEMAIN",
            "targetObject": "KPITEMPLATEVARVALUE",
            "parentKeys": "KPITEMPLATENUM, KPITEMPLATEMAINNUM",
            "targetKeys": "KPITEMPLATENUM, KPITEMPLATEMAINNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "KPI Template",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "KPITEMPLATE",
            "targetObject": "KPITEMPLATEMAIN",
            "parentKeys": "KPITEMPLATENUM",
            "targetKeys": "KPITEMPLATENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "KPI Template",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "KPITEMPLATEMAINNUM",
            "required": true,
            "persistent": true,
            "title": "KPI",
            "remarks": "Unique KPI identifier for the this template",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "KPITEMPLATENUM",
            "required": true,
            "persistent": true,
            "title": "Related Template",
            "remarks": "Template Name",
            "sameAsAttribute": "KPITEMPLATENUM",
            "sameAsObject": "KPITEMPLATE"
        },
        {
            "attributeName": "ISPUBLIC",
            "required": true,
            "persistent": true,
            "title": "Public",
            "remarks": "Enable other users to run the report.",
            "sameAsAttribute": "ISPUBLIC",
            "sameAsObject": "KPIMAIN"
        },
        {
            "attributeName": "ISACTIVE",
            "required": true,
            "persistent": true,
            "title": "Active",
            "remarks": "Maps to the KPIMAIN.REALTIME",
            "sameAsAttribute": "REALTIME",
            "sameAsObject": "KPIMAIN"
        },
        {
            "attributeName": "TARGET",
            "required": true,
            "persistent": true,
            "title": "Target",
            "remarks": "The target, or desired, value for the KPI.",
            "sameAsAttribute": "TARGET",
            "sameAsObject": "KPIMAIN"
        },
        {
            "attributeName": "CAUTIONMIN",
            "required": true,
            "persistent": true,
            "title": "Caution At",
            "remarks": "The value where the indicators would change to a user-set color to indicate that the result of the KPI is in a caution stage. Note: If the Caution At value is greater than the Alert At value, the direction of the KPI will change to indicate that a higher number is more ideal than a lower number.",
            "sameAsAttribute": "CAUTIONMIN",
            "sameAsObject": "KPIMAIN"
        },
        {
            "attributeName": "CAUTIONMAX",
            "required": true,
            "persistent": true,
            "title": "Alert At",
            "remarks": "The value where the indicators would change to a user-set color to indicate that the result of the KPI is in an alert stage.",
            "sameAsAttribute": "CAUTIONMAX",
            "sameAsObject": "KPIMAIN"
        },
        {
            "attributeName": "KPITEMPLATEMAINID",
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
            "name": "KPIINSTANCE",
            "target": "KPIMAIN",
            "remarks": "Relationship for KPIMAIN records for the given KPI Instance",
            "whereClause": "kpitemplatenum=:kpitemplatenum and kpitemplatemainnum=:kpitemplatemainnum",
            "cardinality": null
        },
        {
            "name": "KPITEMPLATEVARVALUES",
            "target": "KPITEMPLATEVARVALUE",
            "remarks": "Relationship for KPI Variable Values for a given KPI Template Main Record",
            "whereClause": "kpitemplatenum=:kpitemplatenum and kpitemplatemainnum=:kpitemplatemainnum",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "KPITEMPLATEMAINS",
            "source": "KPITEMPLATE",
            "remarks": "Relationship for KPI Template Main Records for a given KPI Template.  Each KPI Template will have 1 or more KPI Template Main Records",
            "whereClause": "kpitemplatenum=:kpitemplatenum",
            "cardinality": null
        }
    ]
}