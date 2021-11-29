mos = {
    "objectName": "ODMERUNMONITOR",
    "className": "com.ibm.tivoli.maximo.skd.optimization.ODMERunMonitorSet",
    "description": "Non-persistent table for monitoring ODME run",
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
        },
        {
            "attributeName": "SKDPROJECTID",
            "required": true,
            "persistent": false,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "ODMERUNMONITOR",
            "source": "SKDODMERUN",
            "remarks": "Relationship to get ODME run status for a given SKDODMERUN record.",
            "whereClause": "skdprojectid=:skdprojectid",
            "cardinality": null
        },
        {
            "name": "ODMERUNMONITOR",
            "source": "SKDPROJECT",
            "remarks": "Relationship to get ODME run status for a given scenario.",
            "whereClause": "skdprojectid=:skdprojectid",
            "cardinality": null
        }
    ]
}