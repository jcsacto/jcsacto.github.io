mos = {
    "objectName": "LABORVIEWCHGSTAT",
    "className": "psdi.app.contract.virtual.LaborViewChgStatSet",
    "description": "Non-persistent table used for status change.",
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
            "attributeName": "STATUS",
            "required": true,
            "persistent": false,
            "title": "New Status",
            "remarks": "Change To Status",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "STATDATE",
            "required": true,
            "persistent": false,
            "title": "Status Date",
            "remarks": "Status Date",
            "sameAsAttribute": "STATUSDATE",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": false,
            "title": "Memo",
            "remarks": "Memo field.",
            "sameAsAttribute": "MEMO",
            "sameAsObject": "WFTRANSACTION"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "LABORVIEWCHGSTAT",
            "source": "LABORVIEW",
            "remarks": "Relationship to the non-persistent LaborViewChangeStatus object. (No where clause). The resulting set will contain zero objects. Note: This relationship is used only for the Change Status action page to change the status of a given labor contract.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}