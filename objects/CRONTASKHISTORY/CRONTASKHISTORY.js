mos = {
    "objectName": "CRONTASKHISTORY",
    "className": "psdi.app.system.CrontaskHistorySet",
    "description": "Crontask history records of their actions",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "CRONTASKHISTORYID",
    "primaryKeyColumns": [
        "CRONTASKNAME",
        "INSTANCENAME",
        "SEQUENCE"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "CRONTASKDEF",
            "targetObject": "CRONTASKHISTORY",
            "parentKeys": "CRONTASKNAME",
            "targetKeys": "CRONTASKNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 1",
            "longDescription": null
        },
        {
            "objectName": "CRONTASKDEF",
            "targetObject": "CRONTASKHISTORY",
            "parentKeys": "CRONTASKNAME",
            "targetKeys": "INSTANCENAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 2",
            "longDescription": null
        },
        {
            "objectName": "CRONTASKINSTANCE",
            "targetObject": "CRONTASKHISTORY",
            "parentKeys": "CRONTASKNAME, INSTANCENAME",
            "targetKeys": "CRONTASKNAME, INSTANCENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "CronTask History",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "CRONTASKNAME",
            "required": true,
            "persistent": true,
            "title": "Cron Task Name",
            "remarks": "Name of the crontask",
            "sameAsAttribute": "CRONTASKNAME",
            "sameAsObject": "CRONTASKDEF"
        },
        {
            "attributeName": "INSTANCENAME",
            "required": true,
            "persistent": true,
            "title": "Instance Name",
            "remarks": "Crontask Instance Name",
            "sameAsAttribute": "CRONTASKNAME",
            "sameAsObject": "CRONTASKDEF"
        },
        {
            "attributeName": "SERVERNAME",
            "required": true,
            "persistent": true,
            "title": "Server Name",
            "remarks": "Name of the Application Server where the cron task is running",
            "sameAsAttribute": "SERVERNAME",
            "sameAsObject": "MAXSESSION"
        },
        {
            "attributeName": "SERVERHOST",
            "required": true,
            "persistent": true,
            "title": "Server Host",
            "remarks": "Host name or IP Address of the server that the crontask is running.",
            "sameAsAttribute": "SERVERHOST",
            "sameAsObject": "MAXSESSION"
        },
        {
            "attributeName": "ACTIVITY",
            "required": true,
            "persistent": true,
            "title": "Activity",
            "remarks": "The crontask's activity that is being recorded",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STARTTIME",
            "required": true,
            "persistent": true,
            "title": "Start Time",
            "remarks": "The timestamp when the activity is started",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDTIME",
            "required": true,
            "persistent": true,
            "title": "End Time",
            "remarks": "End timestamp when the crontask activity is finished.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RUNTIMEERROR",
            "required": false,
            "persistent": true,
            "title": "Runtime Error",
            "remarks": "The runtime error encountered when the crontask activity is executed",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SEQUENCE",
            "required": true,
            "persistent": true,
            "title": "Sequence",
            "remarks": "Sequence number in the order of execution of the activities",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CRONTASKHISTORYID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "CRONTASKHISTORY",
            "source": "CRONTASKINSTANCE",
            "remarks": "The crontask history record for a crontask insance.",
            "whereClause": "crontaskname=:crontaskname and instancename=:instancename",
            "cardinality": "UNDEFINED"
        }
    ]
}