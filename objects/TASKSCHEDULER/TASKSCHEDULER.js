mos = {
    "objectName": "TASKSCHEDULER",
    "className": "psdi.app.common.CommonMboSet",
    "description": "Table to store cron task information",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [
        "SERVERNAME",
        "TASKNAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "SERVERNAME",
            "required": true,
            "persistent": true,
            "title": "Application Server",
            "remarks": "Name of the Application Server where the cron task is running",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TASKNAME",
            "required": true,
            "persistent": true,
            "title": "Cron Task",
            "remarks": "Name of the cron task",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LASTRUN",
            "required": false,
            "persistent": true,
            "title": "Last Run Time",
            "remarks": "Last Run time for the task",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SEED",
            "required": true,
            "persistent": true,
            "title": "Seed",
            "remarks": "Integer value to make sure one Application Server runs the task",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SERVERTIMESTAMP",
            "required": true,
            "persistent": true,
            "title": "Application Server Timestamp",
            "remarks": "Timestamp of the Application Server to make sure the Application Server is running",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LASTEND",
            "required": false,
            "persistent": true,
            "title": "Last End",
            "remarks": "Timestamp when the crontask run is finished",
            "sameAsAttribute": "LASTRUN",
            "sameAsObject": "TASKSCHEDULER"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}