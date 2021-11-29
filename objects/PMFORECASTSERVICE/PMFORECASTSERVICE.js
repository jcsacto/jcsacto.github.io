mos = {
    "objectName": "PMFORECASTSERVICE",
    "className": "psdi.mbo.custapp.CustomMboSet",
    "description": "Service information for PM Forecast id",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "PMFORECASTSERVICEID",
    "primaryKeyColumns": [
        "PMFORECASTSERVICEID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "JOBITEM",
            "targetObject": "PMFORECASTSERVICE",
            "parentKeys": "JOBITEMID",
            "targetKeys": "JOBITEMID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Job Item",
            "longDescription": null
        },
        {
            "objectName": "PMFORECASTJP",
            "targetObject": "PMFORECASTSERVICE",
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
            "remarks": "Unique Identifier for JobService table",
            "sameAsAttribute": "JOBITEMID",
            "sameAsObject": "JOBITEM"
        },
        {
            "attributeName": "THISSERVCOST",
            "required": false,
            "persistent": true,
            "title": "Service Cost",
            "remarks": "Service cost for this forecast segment.",
            "sameAsAttribute": "LINECOST",
            "sameAsObject": "JOBITEM"
        },
        {
            "attributeName": "PMFORECASTSERVICEID",
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
            "name": "JOBSERVICE",
            "target": "JOBSERVICE",
            "remarks": "Relationship to JOBSERVICE table.",
            "whereClause": "jobitemid=:jobitemid",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "PMFORECASTSERVICE",
            "source": "PMFORECASTJP",
            "remarks": "Relationship to PMFORECASTSERVICE table.",
            "whereClause": "pmforecastjpid=:pmforecastjpid",
            "cardinality": null
        }
    ]
}