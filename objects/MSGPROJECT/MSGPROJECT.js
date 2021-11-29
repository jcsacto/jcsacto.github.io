mos = {
    "objectName": "MSGPROJECT",
    "className": "psdi.app.dbchange.MsgProjectSet",
    "description": "Message Project list",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MSGPROJECTID",
    "primaryKeyColumns": [
        "MSGID",
        "PROJECT"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "EDITMESSAGE",
            "targetObject": "MSGPROJECT",
            "parentKeys": "MSGID",
            "targetKeys": "MSGID",
            "relNum": null,
            "status": "UNVERIFIED",
            "description": "Relationship 1",
            "longDescription": null
        },
        {
            "objectName": "PROJECT",
            "targetObject": "MSGPROJECT",
            "parentKeys": "PROJECT",
            "targetKeys": "PROJECT",
            "relNum": null,
            "status": "UNVERIFIED",
            "description": "Relationship 1",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "MSGID",
            "required": true,
            "persistent": true,
            "title": "Message ID",
            "remarks": "ID of the message",
            "sameAsAttribute": "MSGID",
            "sameAsObject": "EDITMESSAGE"
        },
        {
            "attributeName": "PROJECT",
            "required": true,
            "persistent": true,
            "title": "Project",
            "remarks": "Project the message is a member of.",
            "sameAsAttribute": "PROJECT",
            "sameAsObject": "PROJECT"
        },
        {
            "attributeName": "MSGPROJECTID",
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