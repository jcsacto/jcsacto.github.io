mos = {
    "objectName": "PERSCHANGESTATUS",
    "className": "psdi.app.person.virtual.PersonChangeStatusSet",
    "description": "Non persistent personchangestatus table",
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
            "remarks": "The new status of this person.",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "STATDATE",
            "required": false,
            "persistent": false,
            "title": "Status Date",
            "remarks": "The date and time the current status was changed.",
            "sameAsAttribute": "STATUSDATE",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": false,
            "title": "Memo",
            "remarks": "Brief description stating the reason for the change in status.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "PERSON",
            "target": "PERSON",
            "remarks": "Relationship to the person table.  (No where clause).  The resulting set will contain zero objects.  Note: This relationship is used only for the Change Status action page.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "PERSCHANGESTATUS",
            "source": "PERSON",
            "remarks": "Relationship to the non-persisten PersonChangeStatus table.  (No where clause).  The resulting set will contain zero objects.  Note:  This relationship is used only for the Change Status action page to change the status of a  given purchase order.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}