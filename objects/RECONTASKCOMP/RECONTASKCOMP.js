mos = {
    "objectName": "RECONTASKCOMP",
    "className": "psdi.app.recontask.ReconTaskCompSet",
    "description": "Connection between recon task and comparison rules",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "RECONTASKCOMPID",
    "primaryKeyColumns": [
        "TASKNAME",
        "COMPRULENAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "RECONTASK",
            "targetObject": "RECONTASKCOMP",
            "parentKeys": "TASKNAME",
            "targetKeys": "TASKNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Reconcilation Task",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "RECONTASKCOMPID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TASKNAME",
            "required": true,
            "persistent": true,
            "title": "Task",
            "remarks": "Task Name",
            "sameAsAttribute": "TASKNAME",
            "sameAsObject": "RECONTASK"
        },
        {
            "attributeName": "COMPRULENAME",
            "required": true,
            "persistent": true,
            "title": "Comparison",
            "remarks": "Name of the comparison rule to use when Maximo executes this reconciliation task.",
            "sameAsAttribute": "RULENAME",
            "sameAsObject": "RECONRULE"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "RECONTASKCOMP_RECONCOMPRULE",
            "target": "RECONCOMPRULE",
            "remarks": "Comparison Rules for a Task",
            "whereClause": "rulename=:comprulename",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "RECONRULE_RECONTASKCOMP",
            "source": "RECONRULE",
            "remarks": "ReconRule to ReconTaskComp",
            "whereClause": "comprulename=:rulename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONTASK_RECONTASKCOMP",
            "source": "RECONTASK",
            "remarks": "Comparison Rules for a Task",
            "whereClause": "taskname=:taskname",
            "cardinality": "UNDEFINED"
        }
    ]
}