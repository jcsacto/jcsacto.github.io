mos = {
    "objectName": "MAXRECORDLOCK",
    "className": "psdi.app.system.MaxRecordLockSet",
    "description": "Table to track locked records",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXRECORDLOCKID",
    "primaryKeyColumns": [
        "LOCKSESSIONID",
        "OWNERID",
        "OWNERTABLE",
        "LOCKDATETIME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXRECORDLOCK",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OWNERTABLE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Owning Object",
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
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXRECORDLOCK",
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
            "attributeName": "LOCKSESSIONID",
            "required": true,
            "persistent": true,
            "title": "Lock Session ID",
            "remarks": "The Session ID of the user locking this record",
            "sameAsAttribute": "MAXSESSIONUID",
            "sameAsObject": "MAXSESSION"
        },
        {
            "attributeName": "OWNERID",
            "required": true,
            "persistent": true,
            "title": "Object ID",
            "remarks": "Object ID for the locked record",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OWNERTABLE",
            "required": true,
            "persistent": true,
            "title": "Object Name",
            "remarks": "Table name for the locked record",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "LOCKDATETIME",
            "required": true,
            "persistent": true,
            "title": "Edit Time",
            "remarks": "The date and time that the user placed the record in edit mode",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXRECORDLOCKID",
            "required": true,
            "persistent": true,
            "title": "UniqueID",
            "remarks": "Unique ID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SERVERHOST",
            "required": false,
            "persistent": true,
            "title": "Server Host",
            "remarks": "The Name of the host",
            "sameAsAttribute": "SERVERHOST",
            "sameAsObject": "MAXSESSION"
        },
        {
            "attributeName": "SERVERNAME",
            "required": false,
            "persistent": true,
            "title": "Server Name",
            "remarks": "The Name of the server",
            "sameAsAttribute": "SERVERNAME",
            "sameAsObject": "MAXSESSION"
        },
        {
            "attributeName": "USERID",
            "required": false,
            "persistent": true,
            "title": "User ID",
            "remarks": "User identifier",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "DISPLAYNAME",
            "required": false,
            "persistent": true,
            "title": "Name",
            "remarks": "Person who locked the record",
            "sameAsAttribute": "DISPLAYNAME",
            "sameAsObject": "PERSON"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "MAXRECORDLOCK",
            "source": "MAXAPPS",
            "remarks": "Relationship between MaxApps and Recordlock",
            "whereClause": "ownertable = :maintbname",
            "cardinality": null
        },
        {
            "name": "LOCKEDRECORDS",
            "source": "MAXSESSION",
            "remarks": "all locked records for this session",
            "whereClause": "locksessionid=:maxsessionuid",
            "cardinality": null
        }
    ]
}