mos = {
    "objectName": "MAXASYNCJOBMSG",
    "className": "psdi.app.system.MaxAsyncJobMsgSet",
    "description": "Messages from async jobs",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXASYNCJOBMSGID",
    "primaryKeyColumns": [
        "JOBNUM",
        "SEQUENCE"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXASYNCJOB",
            "targetObject": "MAXASYNCJOBMSG",
            "parentKeys": "JOBNUM",
            "targetKeys": "JOBNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asynchronous Job",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "JOBNUM",
            "required": true,
            "persistent": true,
            "title": "Job Number",
            "remarks": "PK - foreign key from MaxAsyncJobs",
            "sameAsAttribute": "JOBNUM",
            "sameAsObject": "MAXASYNCJOB"
        },
        {
            "attributeName": "SEQUENCE",
            "required": true,
            "persistent": true,
            "title": "Sequence",
            "remarks": "Sequence of the message",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MSGDATE",
            "required": true,
            "persistent": true,
            "title": "Message Date",
            "remarks": "When the message was written",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MSGTYPE",
            "required": true,
            "persistent": true,
            "title": "Message Type",
            "remarks": "Type of message.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MESSAGE",
            "required": true,
            "persistent": true,
            "title": "Message",
            "remarks": "Message of the job run.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VIEWED",
            "required": true,
            "persistent": true,
            "title": "Viewed",
            "remarks": "Whether the message has been viewed.  Default is 0.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXASYNCJOBMSGID",
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
            "name": "DMCOMPASYNCJOBMSG",
            "source": "DMCOMPJOB",
            "remarks": "Relationship to the MAXASYNCJOBMSG",
            "whereClause": "jobnum=:compjobnum",
            "cardinality": null
        },
        {
            "name": "MAXASYNCJOBMSG",
            "source": "MAXASYNCJOB",
            "remarks": "Relationship to get messages from MAXASYNCJOB",
            "whereClause": "jobnum=:jobnum",
            "cardinality": null
        }
    ]
}