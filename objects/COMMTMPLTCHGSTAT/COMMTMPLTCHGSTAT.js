mos = {
    "objectName": "COMMTMPLTCHGSTAT",
    "className": "psdi.common.commtmplt.virtual.CommTmpltChangeStatusSet",
    "description": "Parameters for CommTemplate Change Status.",
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
            "remarks": "New status of the communication template.",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "COMMTEMPLATE"
        },
        {
            "attributeName": "STATUSDATE",
            "required": false,
            "persistent": false,
            "title": "Status Date",
            "remarks": "Date and time of the status change to the communication template. Maximo defaults this value to the system date and time.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "COMMTMPLTCHANGESTATUS",
            "source": "COMMTEMPLATE",
            "remarks": "Relationship to the non-persistent COMMTMPLTCHANGESTAT table for changing status.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}