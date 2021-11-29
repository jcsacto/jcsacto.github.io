mos = {
    "objectName": "LOGINTRACKING",
    "className": "psdi.app.signature.LoginTrackingSet",
    "description": "Login Tracking table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "LOGINTRACKINGID",
    "primaryKeyColumns": [
        "LOGINTRACKINGID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXAPPS",
            "targetObject": "LOGINTRACKING",
            "parentKeys": "APP",
            "targetKeys": "APP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "LOGINTRACKING",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OWNERTABLE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Owning Object",
            "longDescription": null
        },
        {
            "objectName": "MAXSESSION",
            "targetObject": "LOGINTRACKING",
            "parentKeys": "MAXSESSIONUID",
            "targetKeys": "MAXSESSIONUID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Maximo Session",
            "longDescription": null
        },
        {
            "objectName": "MAXUSER",
            "targetObject": "LOGINTRACKING",
            "parentKeys": "USERID",
            "targetKeys": "USERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "User",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "LOGINTRACKING",
            "parentKeys": "PERSONID",
            "targetKeys": "ADMINUSERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Administrator",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "LOGINTRACKING",
            "parentKeys": "PERSONID",
            "targetKeys": "USERID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 151",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "ATTEMPTDATE",
            "required": true,
            "persistent": true,
            "title": "Attempt Date",
            "remarks": "Timestamp of attempted login",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ATTEMPTRESULT",
            "required": true,
            "persistent": true,
            "title": "Attempt Result",
            "remarks": "Result of the login attempt. Valid values are Success, Failure, Logout and Timeout.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NAME",
            "required": false,
            "persistent": true,
            "title": "Full Name",
            "remarks": "Full Name of User",
            "sameAsAttribute": "DISPLAYNAME",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "APP",
            "required": false,
            "persistent": true,
            "title": "Application",
            "remarks": "When the login attempt is a re-authentication for E-Sig, this is the application being accessed.",
            "sameAsAttribute": "APP",
            "sameAsObject": "MAXAPPS"
        },
        {
            "attributeName": "REASON",
            "required": false,
            "persistent": true,
            "title": "Reason",
            "remarks": "Reason for ESIG",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TRANSID",
            "required": false,
            "persistent": true,
            "title": "Transaction ID",
            "remarks": "Transaction identifier for ESIG",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "KEYVALUE1",
            "required": false,
            "persistent": true,
            "title": "E-signature Key 1",
            "remarks": "Key value 1 for ESIG",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "KEYVALUE2",
            "required": false,
            "persistent": true,
            "title": "E-signature Key 2",
            "remarks": "Key value 2 for ESIG",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "KEYVALUE3",
            "required": false,
            "persistent": true,
            "title": "E-signature Key 3",
            "remarks": "Key value 3 for ESIG",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "KEYVALUE4",
            "required": false,
            "persistent": true,
            "title": "E-signature Key 4",
            "remarks": "Key value 4 for ESIG",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "KEYVALUE5",
            "required": false,
            "persistent": true,
            "title": "E-signature Key 5",
            "remarks": "Key value 5 for ESIG",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "KEYVALUE6",
            "required": false,
            "persistent": true,
            "title": "E-signature Key 6",
            "remarks": "Key value 6 for ESIG",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "KEYVALUE7",
            "required": false,
            "persistent": true,
            "title": "E-signature Key 7",
            "remarks": "Key value 7 for ESIG",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USERID",
            "required": false,
            "persistent": true,
            "title": "User",
            "remarks": "User identifier",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "LOGINTRACKINGID",
            "required": true,
            "persistent": true,
            "title": "LOGINTRACKINGID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OWNERTABLE",
            "required": false,
            "persistent": true,
            "title": "Owner Table",
            "remarks": "Owner table for login tracking record",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "OWNERID",
            "required": false,
            "persistent": true,
            "title": "Owner Id",
            "remarks": "Unique id for the owner table",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ADMINUSERID",
            "required": false,
            "persistent": true,
            "title": "Administrative User",
            "remarks": "When an administrative user logs out another user, this is the user ID of the administrative user.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "MAXSESSIONUID",
            "required": false,
            "persistent": true,
            "title": "Session ID",
            "remarks": "The session ID associated with this activity.",
            "sameAsAttribute": "MAXSESSIONUID",
            "sameAsObject": "MAXSESSION"
        },
        {
            "attributeName": "LOGINID",
            "required": false,
            "persistent": true,
            "title": "Login ID",
            "remarks": "The entered loginid for a successful or unsuccessful verification attempt.",
            "sameAsAttribute": "LOGINID",
            "sameAsObject": "MAXUSER"
        },
        {
            "attributeName": "CLIENTHOST",
            "required": false,
            "persistent": true,
            "title": "Client Host",
            "remarks": "Host name of the user's client (remote host).",
            "sameAsAttribute": "CLIENTHOST",
            "sameAsObject": "MAXSESSION"
        },
        {
            "attributeName": "CURRENTCOUNT",
            "required": false,
            "persistent": true,
            "title": "Current Session Count",
            "remarks": "Count of active sessions as of this attemptdate.  This refers to all sessions in the system, not just for this userid.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CLIENTADDR",
            "required": false,
            "persistent": true,
            "title": "Client Address",
            "remarks": "IP Address of the user's client (remote address).",
            "sameAsAttribute": "CLIENTHOST",
            "sameAsObject": "MAXSESSION"
        },
        {
            "attributeName": "SERVERNAME",
            "required": false,
            "persistent": true,
            "title": "Server",
            "remarks": "MXServer name",
            "sameAsAttribute": "SERVERNAME",
            "sameAsObject": "MAXSESSION"
        },
        {
            "attributeName": "SERVERHOST",
            "required": false,
            "persistent": true,
            "title": "Server Host",
            "remarks": "Host name or IP Address of the MXServer for this session",
            "sameAsAttribute": "SERVERHOST",
            "sameAsObject": "MAXSESSION"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "MAXUSER",
            "target": "MAXUSER",
            "remarks": "The user who owns this LoginTracking record",
            "whereClause": "userid = :userid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "LOGINTRACKING",
            "source": "MAXUSER",
            "remarks": "Login tracking records for a specified user",
            "whereClause": "userid = :userid",
            "cardinality": "UNDEFINED"
        }
    ]
}