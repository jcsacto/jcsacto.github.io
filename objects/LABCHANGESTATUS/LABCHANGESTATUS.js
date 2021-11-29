mos = {
    "objectName": "LABCHANGESTATUS",
    "className": "psdi.app.labor.virtual.LaborChangeStatusSet",
    "description": "non persistent table for changing labor status",
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
            "remarks": "non persistent status field for labor",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "LABOR"
        },
        {
            "attributeName": "STATDATE",
            "required": false,
            "persistent": false,
            "title": "Status Date",
            "remarks": "Changed date for labchangestatus",
            "sameAsAttribute": "CHANGEDATE",
            "sameAsObject": "LABORSTATUS"
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": false,
            "title": "Memo",
            "remarks": "Reason for status change",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "LABCHANGESTATUS",
            "source": "LABOR",
            "remarks": "Relationship to the non-persistent LABCHANGESTATUS table. (No where clause.)  The resulting set will contain zero objects.  Note: this relationship is used only for the change status action page to give the status of the current labor.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}