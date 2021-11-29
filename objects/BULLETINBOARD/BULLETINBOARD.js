mos = {
    "objectName": "BULLETINBOARD",
    "className": "psdi.app.bulletinboard.BBSet",
    "description": "Table to store and maintain bulletin messages",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "BULLETINBOARDUID",
    "primaryKeyColumns": [
        "BULLETINBOARDID"
    ],
    "logicalRelationships": [
        {
            "objectName": "BULLETINBOARD",
            "targetObject": "BBOARDAUDIENCE",
            "parentKeys": "BULLETINBOARDID",
            "targetKeys": "BULLETINBOARDID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Who should see the bulletin.",
            "longDescription": null
        },
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
            "objectName": "BULLETINBOARD",
            "targetObject": "BBSTATUSHISTORY",
            "parentKeys": "BULLETINBOARDID",
            "targetKeys": "BULLETINBOARDID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Status History.",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "PERSON",
            "targetObject": "BULLETINBOARD",
            "parentKeys": "PERSONID",
            "targetKeys": "POSTBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who posted the bulletin.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "BULLETINBOARDID",
            "required": true,
            "persistent": true,
            "title": "Message ID",
            "remarks": "Identifier of the bulletin board message.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SUBJECT",
            "required": true,
            "persistent": true,
            "title": "Subject",
            "remarks": "The subject of the bulletin board message.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MESSAGE",
            "required": false,
            "persistent": true,
            "title": "Message",
            "remarks": "The contents of the bulletin board message.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "POSTBY",
            "required": true,
            "persistent": true,
            "title": "Posted By",
            "remarks": "Identifier of the person who composed and posted this message on the Bulletin Board.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "POSTDATE",
            "required": true,
            "persistent": true,
            "title": "Post Date",
            "remarks": "The date and time that indicates when you want this message to be visible in the Bulletin Board.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EXPIREDATE",
            "required": true,
            "persistent": true,
            "title": "Expiration Date",
            "remarks": "The date and time that indicates when this message automatically gets removed from the bulletin board. The value entered in this field must be a future date and time.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BULLETINBOARDUID",
            "required": true,
            "persistent": true,
            "title": "BULLETINBOARDUID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUS",
            "required": true,
            "persistent": true,
            "title": "Status",
            "remarks": "The status column is used for storing the status of the bulletin board message",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "BBAUD",
            "target": "BBOARDAUDIENCE",
            "remarks": null,
            "whereClause": "bulletinboardid = :bulletinboardid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "BBGROUP",
            "target": "BBOARDAUDIENCE",
            "remarks": null,
            "whereClause": "bulletinboardid = :bulletinboardid and (msgorgid is null and msgsiteid is null and persongroup is not null)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "BBORG",
            "target": "BBOARDAUDIENCE",
            "remarks": null,
            "whereClause": "bulletinboardid = :bulletinboardid and (msgorgid is not null and msgsiteid is null and persongroup is null)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "BBSITE",
            "target": "BBOARDAUDIENCE",
            "remarks": null,
            "whereClause": "bulletinboardid = :bulletinboardid and (msgsiteid is not null and persongroup is null)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "BBMSGVIEWSTATUS",
            "target": "BBOARDMSGSTATUS",
            "remarks": "Relationship to BBOARDMSGSTATUS Table used for particular BB message is viewed/un viewed by particular user",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "BBSTATUSHISTORY",
            "target": "BBSTATUSHISTORY",
            "remarks": "bb status history",
            "whereClause": "bulletinboardid = :bulletinboardid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMLOG",
            "target": "COMMLOG",
            "remarks": "Relationship to the COMMLOG table used to get all communication log entries for a bulletin board.",
            "whereClause": "ownerid=:bulletinboarduid and ownertable='BULLETINBOARD'",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": []
}