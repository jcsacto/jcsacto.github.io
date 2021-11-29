mos = {
    "objectName": "PMFORECASTMATERIAL",
    "className": "psdi.mbo.custapp.CustomMboSet",
    "description": "Material information for PM Forecast id",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "PMFORECASTMATERIALID",
    "primaryKeyColumns": [
        "PMFORECASTMATERIALID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "JOBITEM",
            "targetObject": "PMFORECASTMATERIAL",
            "parentKeys": "JOBITEMID",
            "targetKeys": "JOBITEMID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Job Item",
            "longDescription": null
        },
        {
            "objectName": "PMFORECASTJP",
            "targetObject": "PMFORECASTMATERIAL",
            "parentKeys": "PMFORECASTJPID",
            "targetKeys": "PMFORECASTJPID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PM Forecast Job Plan",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "PMFORECASTJPID",
            "required": false,
            "persistent": true,
            "title": "PMFORECASTJPID",
            "remarks": "This field identifies PMFORCASTJP record.",
            "sameAsAttribute": "PMFORECASTJPID",
            "sameAsObject": "PMFORECASTJP"
        },
        {
            "attributeName": "JOBITEMID",
            "required": false,
            "persistent": true,
            "title": "JOBITEMID",
            "remarks": "Unique Identifier for JobMaterial table",
            "sameAsAttribute": "JOBITEMID",
            "sameAsObject": "JOBITEM"
        },
        {
            "attributeName": "THISMATCOST",
            "required": false,
            "persistent": true,
            "title": "Material Cost",
            "remarks": "Material cost for this forecast segment.",
            "sameAsAttribute": "LINECOST",
            "sameAsObject": "JOBITEM"
        },
        {
            "attributeName": "PMFORECASTMATERIALID",
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
            "name": "JOBMATERIAL",
            "target": "JOBMATERIAL",
            "remarks": "Relationship to JOBMATERIAL table.",
            "whereClause": "jobitemid=:jobitemid",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "PMFORECASTMATERIAL",
            "source": "PMFORECASTJP",
            "remarks": "Relationship to PMFORECASTMATERIAL table.",
            "whereClause": "pmforecastjpid=:pmforecastjpid",
            "cardinality": null
        }
    ]
}