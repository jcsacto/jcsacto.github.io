mos = {
    "objectName": "PROCESSMONITOR",
    "className": "psdi.app.configure.virtual.ProcessMonitorSet",
    "description": "Process Monitor",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": false,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "STATUS",
            "required": false,
            "persistent": false,
            "title": "Status",
            "remarks": "Status of the process.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONFIRM",
            "required": true,
            "persistent": false,
            "title": "Confirm",
            "remarks": "Multiuse confirmation checkbox.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COMPLETIONSTATUS",
            "required": false,
            "persistent": false,
            "title": "Completion Status",
            "remarks": "The completion status of the job (1=running, 2=completed successfully, 3=completed with error).  Static variables are in ProcessMonitorSetRemote.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}