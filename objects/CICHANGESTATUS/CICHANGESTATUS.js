mos = {
    "objectName": "CICHANGESTATUS",
    "className": "psdi.app.ci.virtual.CIChangeStatusSet",
    "description": "Non-persistant CI Change Status Table",
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
            "attributeName": "NEWSTATUS",
            "required": true,
            "persistent": false,
            "title": "New Status",
            "remarks": "New status of CI",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "CI"
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": false,
            "title": "Memo",
            "remarks": "Memo for status change",
            "sameAsAttribute": "MEMO",
            "sameAsObject": "CISTATUS"
        },
        {
            "attributeName": "STATUSDATE",
            "required": true,
            "persistent": false,
            "title": "Status Date",
            "remarks": "Date when the status was changed",
            "sameAsAttribute": "CHANGEDATE",
            "sameAsObject": "CISTATUS"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "CICHANGESTATUS",
            "source": "CI",
            "remarks": "Relationship to the nonpersistent object used for CI change status.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}