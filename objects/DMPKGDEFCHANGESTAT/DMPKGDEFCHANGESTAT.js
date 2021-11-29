mos = {
    "objectName": "DMPKGDEFCHANGESTAT",
    "className": "psdi.dm.virtual.DMPkgDefChangeStatusSet",
    "description": "Parameters for package definition Change Status",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
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
            "remarks": "New status of the package definition",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "DMPACKAGEDEF"
        },
        {
            "attributeName": "STATUSDATE",
            "required": true,
            "persistent": false,
            "title": "Status Date",
            "remarks": "Date and time of the status change to the package definition.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": false,
            "title": "Memo",
            "remarks": "Note about the status change.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "DMPKGDEFCHANGESTAT",
            "source": "DMPACKAGEDEF",
            "remarks": "Relationship to get the non-persistent DMPKGDEFCHANGESTAT table.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}