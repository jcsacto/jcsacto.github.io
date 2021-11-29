mos = {
    "objectName": "PMFORECASTTOOL",
    "className": "psdi.mbo.custapp.CustomMboSet",
    "description": "Tool information for PM Forecast id",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "PMFORECASTTOOLID",
    "primaryKeyColumns": [
        "PMFORECASTTOOLID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "JOBITEM",
            "targetObject": "PMFORECASTTOOL",
            "parentKeys": "JOBITEMID",
            "targetKeys": "JOBITEMID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Job Item",
            "longDescription": null
        },
        {
            "objectName": "PMFORECASTJP",
            "targetObject": "PMFORECASTTOOL",
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
            "remarks": "Unique Identifier for JobTool table",
            "sameAsAttribute": "JOBITEMID",
            "sameAsObject": "JOBITEM"
        },
        {
            "attributeName": "THISTOOLCOST",
            "required": false,
            "persistent": true,
            "title": "Tool Cost",
            "remarks": "Tool cost for this forecast segment.",
            "sameAsAttribute": "LINECOST",
            "sameAsObject": "JOBITEM"
        },
        {
            "attributeName": "PMFORECASTTOOLID",
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
            "name": "JOBTOOL",
            "target": "JOBTOOL",
            "remarks": "Relationship to JOBTOOL table.",
            "whereClause": "jobitemid=:jobitemid",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "PMFORECASTTOOL",
            "source": "PMFORECASTJP",
            "remarks": "Relationship to PMFORECASTTOOL table.",
            "whereClause": "pmforecastjpid=:pmforecastjpid",
            "cardinality": null
        }
    ]
}