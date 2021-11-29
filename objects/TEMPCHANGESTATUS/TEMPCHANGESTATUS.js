mos = {
    "objectName": "TEMPCHANGESTATUS",
    "className": "psdi.app.ticket.virtual.TempChangeStatusSet",
    "description": "Ticket Template Change Status Non-Persistent Table",
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
            "remarks": "New status for the ticket template. Predefined statuses include ACTIVE and INACTIVE. Change the status of a template to ACTIVE when you are ready for Maximo users to begin applying the template to ticket records. Change the status to INACTIVE if you do not want the template to be used.",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "TKTEMPLATE"
        },
        {
            "attributeName": "ASOFDATE",
            "required": false,
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
            "remarks": "Memo of the status change",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "TKTEMPCHANGESTATUS",
            "source": "TKTEMPLATE",
            "remarks": "Relationship to the non-persistent TKTempChangeStatus table. (No where clause). The resulting set will contain zero objects. Note: This relationship is used only for the Change Status action page to change the status of a given ticket template.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}