mos = {
    "objectName": "BBSTATUSHISTORY",
    "className": "psdi.app.bulletinboard.PmBBStatusHistorySet",
    "description": "Bulletin Board Status History",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "BBSTATUSHISTORYID",
    "primaryKeyColumns": [
        "BBSTATUSHISTORYID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "BULLETINBOARD",
            "targetObject": "BBSTATUSHISTORY",
            "parentKeys": "BULLETINBOARDID",
            "targetKeys": "BULLETINBOARDID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Status History.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "BBSTATUSHISTORY",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEDBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "BBSTATUSHISTORYID",
            "required": true,
            "persistent": true,
            "title": "statushistory",
            "remarks": "Status history for bb message",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BULLETINBOARDID",
            "required": true,
            "persistent": true,
            "title": "BulletinBoardid",
            "remarks": "Identifier of the Bulletin Board Message",
            "sameAsAttribute": "BULLETINBOARDID",
            "sameAsObject": "BULLETINBOARD"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "ChangeDate",
            "remarks": "This column stores the value of the changed date.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEDBY",
            "required": true,
            "persistent": true,
            "title": "ChangedBy",
            "remarks": "The changedby column will store the person name who changed the status",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "STATUS",
            "required": true,
            "persistent": true,
            "title": "Status",
            "remarks": "The status column is used for storing the status history of the bulletin board message.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "BBSTATUSHISTORY",
            "source": "BULLETINBOARD",
            "remarks": "bb status history",
            "whereClause": "bulletinboardid = :bulletinboardid",
            "cardinality": "UNDEFINED"
        }
    ]
}