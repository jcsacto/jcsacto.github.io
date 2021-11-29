mos = {
    "objectName": "RECONTASKLINK",
    "className": "psdi.app.recontask.ReconTaskLinkSet",
    "description": "Connection between ReconTask and Link Rules",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "RECONTASKLINKID",
    "primaryKeyColumns": [
        "TASKNAME",
        "LINKRULENAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "RECONTASK",
            "targetObject": "RECONTASKLINK",
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
            "attributeName": "RECONTASKLINKID",
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
            "attributeName": "LINKRULENAME",
            "required": true,
            "persistent": true,
            "title": "Link",
            "remarks": "Name of the link rule to use when this reconciliation task is executed.",
            "sameAsAttribute": "RULENAME",
            "sameAsObject": "RECONRULE"
        },
        {
            "attributeName": "CASCADEPOSITION",
            "required": true,
            "persistent": true,
            "title": "Sequence",
            "remarks": "Sequence number that specifies the order in which to process link rule clauses. Each sequence number must be unique, and it must be greater than zero. The default is increments of 10 in ascending order. When you save the record, Maximo applies changes made to sequence numbers and re-sorts the clauses in ascending numerical order.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "RECONTASKLINK_RECONLINKRULE",
            "target": "RECONLINKRULE",
            "remarks": "Link Rules for a Task",
            "whereClause": "rulename=:linkrulename",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "RECONRULE_RECONTASKLINK",
            "source": "RECONRULE",
            "remarks": "ReconRule to ReconTaskLink",
            "whereClause": "linkrulename=:rulename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONTASK_RECONTASKLINK",
            "source": "RECONTASK",
            "remarks": "Link Rules for a Task",
            "whereClause": "taskname=:taskname",
            "cardinality": "UNDEFINED"
        }
    ]
}