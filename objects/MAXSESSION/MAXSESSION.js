mos = {
    "objectName": "MAXSESSION",
    "className": "psdi.app.signature.MAXSessionSet",
    "description": "Information about MXServer sessions",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXSESSIONUID",
    "primaryKeyColumns": [
        "MAXSESSIONUID"
    ],
    "logicalRelationships": [
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
            "objectName": "MAXSESSION",
            "targetObject": "MAXRECORDLOCK",
            "parentKeys": "MAXSESSIONUID",
            "targetKeys": "LOCKSESSIONID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Maximo Session",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "PERSON",
            "targetObject": "MAXSESSION",
            "parentKeys": "PERSONID",
            "targetKeys": "USERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "MAXSESSIONUID",
            "required": true,
            "persistent": true,
            "title": "MAXSESSIONUID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SERVERHOST",
            "required": true,
            "persistent": true,
            "title": "Server Host",
            "remarks": "Host name or IP Address of the MXServer for this session",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SERVERNAME",
            "required": true,
            "persistent": true,
            "title": "Server",
            "remarks": "MXServer name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USERID",
            "required": true,
            "persistent": true,
            "title": "User",
            "remarks": "User identifier",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "DISPLAYNAME",
            "required": false,
            "persistent": true,
            "title": "Name",
            "remarks": "Display name from the Person record of the logged in user.",
            "sameAsAttribute": "DISPLAYNAME",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CLIENTHOST",
            "required": true,
            "persistent": true,
            "title": "Client Host",
            "remarks": "Host name of the user's client (remote host).",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LOGINDATETIME",
            "required": true,
            "persistent": true,
            "title": "Log On Date/Time",
            "remarks": "Login date and time",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISSYSTEM",
            "required": true,
            "persistent": true,
            "title": "System",
            "remarks": "True if this is the session that MXServer connects to the database with. False for all other sessions. The System User setting on a User record has no bearing on this field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "APPLICATION",
            "required": false,
            "persistent": true,
            "title": "Application",
            "remarks": "Indicates the application for a connection from external systems such as ERP, MEA, and MS Project. This has nothing to do with applications for internal connections such as Work Orders, Purchase Orders, Changes, etc.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RELOADCACHE",
            "required": false,
            "persistent": true,
            "title": "Reload Cache",
            "remarks": "If this is a system connection, then reloadcache specifies which cache objects need to be reloaded (if any).",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SERVERTIMESTAMP",
            "required": false,
            "persistent": true,
            "title": "Server Timestamp",
            "remarks": "Timestamp of the Application Server to make sure the Application Server is running",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SYSTEMIDLETIME",
            "required": true,
            "persistent": false,
            "title": "System Idle Time",
            "remarks": "The time elapsed since the user's last session activity.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LOGOUT",
            "required": true,
            "persistent": false,
            "title": "Log Out",
            "remarks": "Non-persistent field used to log out a user in the Manage Sessions dialog in the Users application.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LOGOUTANDBLOCK",
            "required": true,
            "persistent": false,
            "title": "Log Out and Block",
            "remarks": "Non-persistent field used to log out a user and change the status to BLOCKED in the Manage Sessions dialog in the Users application.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ACTIVE",
            "required": true,
            "persistent": true,
            "title": "Active",
            "remarks": "Indicates whether the session is active.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LASTACTIVITY",
            "required": false,
            "persistent": true,
            "title": "Last Activity",
            "remarks": "The timestamp of the most recent user activity for this session",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ADMINLOGOUT",
            "required": true,
            "persistent": true,
            "title": "Admin Logout",
            "remarks": "Indicates that the session has been administratively logged out.  Eventually, the row will be removed by the User Monitor in SecurityService.",
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
        }
    ],
    "outgoingRelationships": [
        {
            "name": "LOCKEDRECORDS",
            "target": "MAXRECORDLOCK",
            "remarks": "all locked records for this session",
            "whereClause": "locksessionid=:maxsessionuid",
            "cardinality": null
        },
        {
            "name": "MAXUSER",
            "target": "MAXUSER",
            "remarks": "User associated with this session",
            "whereClause": "userid = :userid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "MAXSESSION",
            "source": "MAXUSER",
            "remarks": "Sessions owned by a specified user",
            "whereClause": "userid = :userid",
            "cardinality": "UNDEFINED"
        }
    ]
}