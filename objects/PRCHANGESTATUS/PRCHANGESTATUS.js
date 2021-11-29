mos = {
    "objectName": "PRCHANGESTATUS",
    "className": "psdi.app.pr.virtual.PRChangeStatusSet",
    "description": "Non-persistent table for PR change status dialog",
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
            "remarks": "New status of the PR.",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "PR"
        },
        {
            "attributeName": "STATDATE",
            "required": true,
            "persistent": false,
            "title": "Status Date",
            "remarks": "Date when the status was changed.",
            "sameAsAttribute": "STATUSDATE",
            "sameAsObject": "PR"
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": false,
            "title": "Memo",
            "remarks": "Note about the status change.",
            "sameAsAttribute": "MEMO",
            "sameAsObject": "WFTRANSACTION"
        },
        {
            "attributeName": "GENSTATUSACTION",
            "required": true,
            "persistent": false,
            "title": "Memo",
            "remarks": "From general change status action",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "PRCHANGESTATUS",
            "source": "PR",
            "remarks": "Relationship to the non-persistent PRChangeStatus table. (There is no where clause for non-persistent objects). The resulting set will contain zero or more objects. Note : PRChangeStatus is a non-persistent MBO with whose help the dialog box binds with the object.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}