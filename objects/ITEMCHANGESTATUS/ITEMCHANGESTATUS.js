mos = {
    "objectName": "ITEMCHANGESTATUS",
    "className": "psdi.app.item.virtual.ItemChangeStatusSet",
    "description": "Parameters for Item Change Status",
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
            "remarks": "Change to Status.",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "ASOFDATE",
            "required": true,
            "persistent": false,
            "title": "Status Date",
            "remarks": "Date of the status change",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": false,
            "title": "Memo",
            "remarks": "Memo for status change",
            "sameAsAttribute": "MEMO",
            "sameAsObject": "WFTRANSACTION"
        },
        {
            "attributeName": "ITEMNUM",
            "required": false,
            "persistent": false,
            "title": "Item",
            "remarks": "Item Number",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "ITEMSETID",
            "required": false,
            "persistent": false,
            "title": "ItemSet",
            "remarks": "Item Set Identifier.",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS"
        },
        {
            "attributeName": "ITEMSTATUS",
            "required": false,
            "persistent": false,
            "title": "Status",
            "remarks": "Current Item Status",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "Item Description",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "DESCRIPTION Long description",
            "remarks": "Long description for DESCRIPTION",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ROLLDOWN",
            "required": true,
            "persistent": false,
            "title": "RollDown",
            "remarks": "Checkbox to indicate if the status change needs to be rolled down to Organization/Inventory.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "STATUSDESC",
            "target": "SYNONYMDOMAIN",
            "remarks": "Relationship to synonymdomain table, used to find description for the status, it will contain one object.",
            "whereClause": "domainid='ITEMSTATUS' and value=:itemstatus and :&DOMAINFILTER&_STATUS",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "ITEMCHANGESTATUS",
            "source": "ITEM",
            "remarks": "Relationship to the non-persistent ITEMCHANGESTATUS table for changing status. (No where clause).",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}