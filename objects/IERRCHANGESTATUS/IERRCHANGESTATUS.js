mos = {
    "objectName": "IERRCHANGESTATUS",
    "className": "psdi.iface.app.interror.IntErrorChangeStatusSet",
    "description": "Integration Error status change",
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
            "required": false,
            "persistent": false,
            "title": "New Status",
            "remarks": "New status of the Integration Error",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "MAXINTERROR"
        },
        {
            "attributeName": "STATDATE",
            "required": false,
            "persistent": false,
            "title": "Status Date",
            "remarks": "Date when the status was changed.",
            "sameAsAttribute": "STATUSDATE",
            "sameAsObject": "MAXINTERROR"
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": false,
            "title": "Memo",
            "remarks": "Note about the status change.",
            "sameAsAttribute": "MEMO",
            "sameAsObject": "WFTRANSACTION"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "IERRCHANGESTATUS",
            "source": "MAXINTERROR",
            "remarks": "Relationship to the IERRCHANGESTATUS table, used to build status change screen . The resulting set will contain zero rows.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}