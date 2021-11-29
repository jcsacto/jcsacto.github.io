mos = {
    "objectName": "TRANSFERMSG",
    "className": "psdi.app.dbchange.virtual.TransferMsgSet",
    "description": "Transfer Messages MboSet",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "TRANSFERMSGID",
    "primaryKeyColumns": [],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "PROJECT",
            "targetObject": "TRANSFERMSG",
            "parentKeys": "PROJECT",
            "targetKeys": "TOPROJECT",
            "relNum": null,
            "status": "UNVERIFIED",
            "description": "Relationship 2",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "TOPROJECT",
            "required": true,
            "persistent": true,
            "title": "Target Project",
            "remarks": "The project where to transfer the messages.",
            "sameAsAttribute": "PROJECT",
            "sameAsObject": "PROJECT"
        },
        {
            "attributeName": "TRANSFERMSGID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "TRANSFER",
            "source": "EDITMESSAGE",
            "remarks": "Transfer Messages dialog",
            "whereClause": "1=1",
            "cardinality": null
        }
    ]
}