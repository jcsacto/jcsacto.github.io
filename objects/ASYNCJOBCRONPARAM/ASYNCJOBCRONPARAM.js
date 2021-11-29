mos = {
    "objectName": "ASYNCJOBCRONPARAM",
    "className": "psdi.app.common.CommonMboSet",
    "description": "Validation mbo fom async job crontask parameters",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": false,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "JOBNAMES",
            "required": false,
            "persistent": false,
            "title": "Job Names",
            "remarks": "Common seperated list of all asynchronous job names that the crontask instance will be responsible for.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONDITION",
            "required": false,
            "persistent": false,
            "title": "Condition",
            "remarks": "Additional condition that the jobs need to meet in order for this crontask instance to process it.",
            "sameAsAttribute": "CONDITIONNUM",
            "sameAsObject": "CONDITION"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}