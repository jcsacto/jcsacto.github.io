mos = {
    "objectName": "ESIGLOGIN",
    "className": "psdi.app.signature.virtual.ESigLoginSet",
    "description": "Electronic Signature Authentication",
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
            "attributeName": "PASSWORD",
            "required": false,
            "persistent": false,
            "title": "Password",
            "remarks": "Entered password",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REASON",
            "required": false,
            "persistent": false,
            "title": "Reason For Change:",
            "remarks": "Reason for change",
            "sameAsAttribute": "REASON",
            "sameAsObject": "LOGINTRACKING"
        },
        {
            "attributeName": "USERID",
            "required": false,
            "persistent": false,
            "title": "User Name",
            "remarks": "Userid",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "MSGTEXT",
            "required": false,
            "persistent": false,
            "title": "MSGTEXT",
            "remarks": "Message",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGELIST",
            "required": false,
            "persistent": false,
            "title": "Change List",
            "remarks": "Reason For Change List",
            "sameAsAttribute": "REASON",
            "sameAsObject": "LOGINTRACKING"
        },
        {
            "attributeName": "LOGINID",
            "required": true,
            "persistent": false,
            "title": "LoginId",
            "remarks": "Login Id for an user",
            "sameAsAttribute": "LOGINID",
            "sameAsObject": "MAXUSER"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "PERSON",
            "target": "PERSON",
            "remarks": "Person Information",
            "whereClause": "personid = (select personid from maxuser where userid=:userid)",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": []
}