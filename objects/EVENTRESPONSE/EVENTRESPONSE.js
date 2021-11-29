mos = {
    "objectName": "EVENTRESPONSE",
    "className": "psdi.app.eventresponse.EventResponseSet",
    "description": "Event Responses to specific Mbos",
    "longDescription": "The attributes SourceID, RefID, and TargetID store the unique ID values of the records in the tables specified by SourceTable, RefTable, and TargetTable.",
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "ERID",
    "primaryKeyColumns": [
        "ERID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ACTION",
            "targetObject": "EVENTRESPONSE",
            "parentKeys": "ACTION",
            "targetKeys": "VALIDATEACTIONID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Action to perform when the event is in the validation phase",
            "longDescription": null
        },
        {
            "objectName": "ACTION",
            "targetObject": "EVENTRESPONSE",
            "parentKeys": "ACTION",
            "targetKeys": "PRESAVEACTIONID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Action to perform when the event is in the pre-save phase. This is just after the event.",
            "longDescription": null
        },
        {
            "objectName": "ACTION",
            "targetObject": "EVENTRESPONSE",
            "parentKeys": "ACTION",
            "targetKeys": "EVENTACTIONID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Action to perform when the event is in the event phase. This is happens just before the event.",
            "longDescription": null
        },
        {
            "objectName": "ACTION",
            "targetObject": "EVENTRESPONSE",
            "parentKeys": "ACTION",
            "targetKeys": "POSTCOMMITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Action to perform when the event is in the post-commit phase. This is after changes have been written to the database.",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "EVENTRESPONSE",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "REFTABLE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Type of object on which we are monitoring events.",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "EVENTRESPONSE",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "SOURCETABLE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Source of the Event Response",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "EVENTRESPONSE",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "TARGETTABLE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Object that will be affected by the response",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "VALIDATEACTIONID",
            "required": false,
            "persistent": true,
            "title": "Validate ActionID",
            "remarks": "Actions to perform for event validation",
            "sameAsAttribute": "ACTION",
            "sameAsObject": "ACTION"
        },
        {
            "attributeName": "PRESAVEACTIONID",
            "required": false,
            "persistent": true,
            "title": "PreSave ActionID",
            "remarks": "Actions to perform for the pre-save event action",
            "sameAsAttribute": "ACTION",
            "sameAsObject": "ACTION"
        },
        {
            "attributeName": "EVENTACTIONID",
            "required": false,
            "persistent": true,
            "title": "Event ActionID",
            "remarks": "Actions to perform for an event action",
            "sameAsAttribute": "ACTION",
            "sameAsObject": "ACTION"
        },
        {
            "attributeName": "POSTCOMMITID",
            "required": false,
            "persistent": true,
            "title": "Post Commit Action",
            "remarks": "Actions to perform on Post-Commit of an event",
            "sameAsAttribute": "ACTION",
            "sameAsObject": "ACTION"
        },
        {
            "attributeName": "EVENTNAME",
            "required": true,
            "persistent": true,
            "title": "Event",
            "remarks": "Name of the event to respond to.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ERID",
            "required": true,
            "persistent": true,
            "title": "Unqiue ID",
            "remarks": "Unique ID identifying this record",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INSTALLATIONDATE",
            "required": true,
            "persistent": true,
            "title": "Installation Date",
            "remarks": "Date this response was registered.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SOURCETABLE",
            "required": false,
            "persistent": true,
            "title": "Source Table",
            "remarks": "Name of Mbo generating the response",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "SOURCEID",
            "required": false,
            "persistent": true,
            "title": "Source",
            "remarks": "Unique key of the Mbo to monitor.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REFTABLE",
            "required": false,
            "persistent": true,
            "title": "Ref Table",
            "remarks": "Name of Mbo which registered the response",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "REFID",
            "required": false,
            "persistent": true,
            "title": "Ref ID",
            "remarks": "Unique key of the Mbo which registered the response",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TARGETTABLE",
            "required": false,
            "persistent": true,
            "title": "Target Table",
            "remarks": "Name of the Mbo to perform the response action on.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "TARGETID",
            "required": false,
            "persistent": true,
            "title": "Target ID",
            "remarks": "Unique key of the Mbo to perform the response on.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "EVENTRESPONSE",
            "source": "WFINSTANCE",
            "remarks": "This relationship gets the workflow instance to stop. (wfid=:wfid). One member set.",
            "whereClause": "reftable = 'WFINSTANCE' and refid = :wfid",
            "cardinality": "UNDEFINED"
        }
    ]
}