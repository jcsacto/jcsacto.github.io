mos = {
    "objectName": "MFMAILTRACK",
    "className": "com.ibm.tivoli.maximo.mfmail.tracking.EmailTrackingSet",
    "description": "Maximo for E-mail tracking table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MFMAILTRACKID",
    "primaryKeyColumns": [
        "MFMAILTRACKID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MFMAILTRACK",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "MBONAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "ASSIGNID",
            "required": false,
            "persistent": true,
            "title": "Assign ID",
            "remarks": "ID of WFASSIGN",
            "sameAsAttribute": "ASSIGNID",
            "sameAsObject": "WFASSIGNMENT"
        },
        {
            "attributeName": "EXFORMAT",
            "required": false,
            "persistent": true,
            "title": "Format identifier",
            "remarks": "Format identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EXPECTEDFROM",
            "required": true,
            "persistent": true,
            "title": "Expected From",
            "remarks": "List of e-mail addresses which we will accept mail",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LASTUPDATE",
            "required": true,
            "persistent": true,
            "title": "Last Update",
            "remarks": "Last update date/time of this entry",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAILSTATUS",
            "required": true,
            "persistent": true,
            "title": "Mail Status",
            "remarks": "Status of mail processing",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MBONAME",
            "required": true,
            "persistent": true,
            "title": "MBO name",
            "remarks": "Name of Mbo which we track",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "SECSTRING",
            "required": false,
            "persistent": true,
            "title": "Security String",
            "remarks": "Mail identification string",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUS",
            "required": false,
            "persistent": true,
            "title": "Status",
            "remarks": "Status",
            "sameAsAttribute": "VALUE",
            "sameAsObject": "SYNONYMDOMAIN"
        },
        {
            "attributeName": "TYPE",
            "required": false,
            "persistent": true,
            "title": "Type",
            "remarks": "Type",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "UNIQUEUID",
            "required": true,
            "persistent": true,
            "title": "Unique ID",
            "remarks": "Unique column value",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MFMAILTRACKID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}