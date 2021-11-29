mos = {
    "objectName": "ASYNCJOBCLEANUPCRONPARAM",
    "className": "psdi.app.common.CommonMboSet",
    "description": "Validation mbo for the parameters of async job clean up crontask",
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
            "attributeName": "BGTASKPURGEPERIOD",
            "required": false,
            "persistent": false,
            "title": "Scheduled task purge period",
            "remarks": "Number of hours after a async task is completed or failed that they will be removed from the queue.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FGTASKPURGEPERIOD",
            "required": false,
            "persistent": false,
            "title": "Immediate Task Purge Period",
            "remarks": "Number of hours after a foreground async task is completed or failed that they will be removed",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}