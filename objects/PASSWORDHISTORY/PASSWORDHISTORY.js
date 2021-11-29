mos = {
    "objectName": "PASSWORDHISTORY",
    "className": "psdi.app.signature.PasswordHistorySet",
    "description": "User password history",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "PASSWORDHISTORYID",
    "primaryKeyColumns": [
        "USERID",
        "CHANGEDATE"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "PERSON",
            "targetObject": "PASSWORDHISTORY",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PASSWORDHISTORY",
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
            "attributeName": "USERID",
            "required": true,
            "persistent": true,
            "title": "User",
            "remarks": "Identifies the user whose password has been changed",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "Date the password was changed",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PASSWORD",
            "required": true,
            "persistent": true,
            "title": "Password",
            "remarks": "New value of the password as of the change date (encrypted)",
            "sameAsAttribute": "PASSWORD",
            "sameAsObject": "MAXUSER"
        },
        {
            "attributeName": "CHANGEBY",
            "required": true,
            "persistent": true,
            "title": "Changed By",
            "remarks": "Identifies the user who changed the password",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "PASSWORDHISTORYID",
            "required": true,
            "persistent": true,
            "title": "PASSWORDHISTORYID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "MAXUSER",
            "target": "MAXUSER",
            "remarks": "User associated with this PasswordHistory",
            "whereClause": "userid = :userid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "PASSWORDHISTORY",
            "source": "MAXUSER",
            "remarks": "Password history for a specified user",
            "whereClause": "userid = :userid",
            "cardinality": "UNDEFINED"
        }
    ]
}