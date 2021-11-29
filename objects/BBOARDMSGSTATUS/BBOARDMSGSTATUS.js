mos = {
    "objectName": "BBOARDMSGSTATUS",
    "className": "psdi.app.bulletinboard.BBoardMSGStatusSet",
    "description": "To track BB message status(read/un read)",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "BBOARDMSGSTATUSID",
    "primaryKeyColumns": [
        "BBOARDMSGSTATUSID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "BULLETINBOARD",
            "targetObject": "BBOARDMSGSTATUS",
            "parentKeys": "BULLETINBOARDID",
            "targetKeys": "BULLETINBOARDID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Which users have seen this bulletin.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "BBOARDMSGSTATUS",
            "parentKeys": "PERSONID",
            "targetKeys": "USERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who has seen the bulletin.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "BBOARDMSGSTATUSID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BULLETINBOARDID",
            "required": true,
            "persistent": true,
            "title": "Bulletin Board Id",
            "remarks": "Links with BulletinBoard table using this id",
            "sameAsAttribute": "BULLETINBOARDID",
            "sameAsObject": "BULLETINBOARD"
        },
        {
            "attributeName": "ISVIEWED",
            "required": true,
            "persistent": true,
            "title": "Viewed",
            "remarks": "Identifies this message is read by user from Maximo BB start center",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USERID",
            "required": true,
            "persistent": true,
            "title": "User Id",
            "remarks": "Identifies this person has read BB message",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "VIEWEDDATE",
            "required": true,
            "persistent": true,
            "title": "Viewed Date",
            "remarks": "Message Viewed date",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "BBMSGVIEWSTATUS",
            "source": "BULLETINBOARD",
            "remarks": "Relationship to BBOARDMSGSTATUS Table used for particular BB message is viewed/un viewed by particular user",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}