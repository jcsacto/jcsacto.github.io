mos = {
    "objectName": "MAXUSERSTATUS",
    "className": "psdi.app.signature.MaxUserStatusSet",
    "description": "User Status Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXUSERSTATUSID",
    "primaryKeyColumns": [
        "MAXUSERSTATUSID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXUSER",
            "targetObject": "MAXUSERSTATUS",
            "parentKeys": "USERID",
            "targetKeys": "USERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Status History",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXUSERSTATUS",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXUSERSTATUS",
            "parentKeys": "PERSONID",
            "targetKeys": "USERID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 222",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "STATUS",
            "required": true,
            "persistent": true,
            "title": "Status",
            "remarks": "Status",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "MAXUSER"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Change Date",
            "remarks": "Status Change Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEBY",
            "required": true,
            "persistent": true,
            "title": "Changed By",
            "remarks": "Name of user who changed status",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": true,
            "title": "Memo",
            "remarks": "Memo",
            "sameAsAttribute": "MEMO",
            "sameAsObject": "WFTRANSACTION"
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
            "attributeName": "MAXUSERSTATUSID",
            "required": true,
            "persistent": true,
            "title": "MAXUSERSTATUSID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "MAXUSERSTATUS",
            "source": "MAXUSER",
            "remarks": "Status history for a specified user",
            "whereClause": "userid = :userid",
            "cardinality": "UNDEFINED"
        }
    ]
}