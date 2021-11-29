mos = {
    "objectName": "MAXASYNCJOB",
    "className": "psdi.app.system.MaxAsyncJobSet",
    "description": "Asynchronous jobs",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXASYNCJOBID",
    "primaryKeyColumns": [
        "JOBNUM"
    ],
    "logicalRelationships": [
        {
            "objectName": "MAXASYNCJOB",
            "targetObject": "DMCOLLECTION",
            "parentKeys": "JOBNUM",
            "targetKeys": "JOBNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Database Validation job number.",
            "longDescription": null
        },
        {
            "objectName": "MAXASYNCJOB",
            "targetObject": "MAXASYNCJOBMSG",
            "parentKeys": "JOBNUM",
            "targetKeys": "JOBNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asynchronous Job",
            "longDescription": null
        },
        {
            "objectName": "MAXASYNCJOB",
            "targetObject": "MAXASYNCJOBPARAM",
            "parentKeys": "JOBNUM",
            "targetKeys": "JOBNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asynchronous Job",
            "longDescription": null
        },
        {
            "objectName": "MAXASYNCJOB",
            "targetObject": "SKDPROJECT",
            "parentKeys": "JOBNUM",
            "targetKeys": "JOBNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asynchronous Job",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXASYNCJOB",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXUSER",
            "targetObject": "MAXASYNCJOB",
            "parentKeys": "USERID",
            "targetKeys": "USERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXASYNCJOB",
            "parentKeys": "PERSONID",
            "targetKeys": "USERID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 161",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "JOBNAME",
            "required": true,
            "persistent": true,
            "title": "Job Name",
            "remarks": "Name of the job",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Description of the job",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RUNIMMEDIATELY",
            "required": true,
            "persistent": true,
            "title": "Run immediately",
            "remarks": "Flag to indicate whether async task will be run immediately or as scheduled",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OBJECTNAME",
            "required": true,
            "persistent": true,
            "title": "Object Name",
            "remarks": "Name of the main object used in the job",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "CLASSNAME",
            "required": true,
            "persistent": true,
            "title": "Class Name",
            "remarks": "Fully qualified name of the Java class that implements this job execution",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USERID",
            "required": true,
            "persistent": true,
            "title": "User ID",
            "remarks": "User who submitted the job",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "LOCALE",
            "required": false,
            "persistent": true,
            "title": "Locale",
            "remarks": "User's locale at the time of submission",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUS",
            "required": false,
            "persistent": true,
            "title": "Status",
            "remarks": "Status of job",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SCHEDULETIME",
            "required": false,
            "persistent": true,
            "title": "Scheduled Time",
            "remarks": "The earliest time that this job should be run.  Default is null, whenever the async cron task picks up the job.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RETRY",
            "required": true,
            "persistent": true,
            "title": "Retry",
            "remarks": "Flag to indicate whether this job should be retried after a server failure.  The retry will only be done for INPROGRESS jobs and if the server crashed/shutdown.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUSDATE",
            "required": true,
            "persistent": true,
            "title": "Status Date",
            "remarks": "Status Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SERVERHOST",
            "required": false,
            "persistent": true,
            "title": "Server Hostname",
            "remarks": "Hostname/ip address of the server, similar to what is stored in maxsession",
            "sameAsAttribute": "SERVERHOST",
            "sameAsObject": "MAXSESSION"
        },
        {
            "attributeName": "SERVERNAME",
            "required": false,
            "persistent": true,
            "title": "Server Name",
            "remarks": "Name of the Maximo server",
            "sameAsAttribute": "SERVERNAME",
            "sameAsObject": "MAXSESSION"
        },
        {
            "attributeName": "EMAIL",
            "required": true,
            "persistent": true,
            "title": "Email",
            "remarks": "Whether to use email to notify messages",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EMAILADDRESS",
            "required": false,
            "persistent": true,
            "title": "Email Address",
            "remarks": "Email address of the person(s) who wants notification.  Valid only if email flag is set to 1.  If left empty, the job submission logic will use the email address of the person submitted the job.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SUBMITTIME",
            "required": true,
            "persistent": true,
            "title": "Submit Time",
            "remarks": "Date time of the job submission",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WHERECLAUSE",
            "required": false,
            "persistent": true,
            "title": "Where Clause",
            "remarks": "Where clause to identify the objects",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "JOBNUM",
            "required": true,
            "persistent": true,
            "title": "Job Number",
            "remarks": "Auto-keyed unique identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXASYNCJOBID",
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
            "name": "MAXASYNCJOBMSG",
            "target": "MAXASYNCJOBMSG",
            "remarks": "Relationship to get messages from MAXASYNCJOB",
            "whereClause": "jobnum=:jobnum",
            "cardinality": null
        },
        {
            "name": "MAXASYNCJOBPARAM",
            "target": "MAXASYNCJOBPARAM",
            "remarks": "Relationship to get params from MAXASYNCJOB",
            "whereClause": "jobnum=:jobnum",
            "cardinality": null
        }
    ],
    "incomingRelationships": []
}