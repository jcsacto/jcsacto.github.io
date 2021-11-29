mos = {
    "objectName": "PLUSCTOOLDS",
    "className": "psdi.plusc.app.item.virtual.PlusCToolDSSet",
    "description": "Virtual MBO on DataSheet info for PlusCToolItem",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": false,
    "isMainObject": true,
    "uniqueId": null,
    "primaryKeyColumns": [],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "DSPLANNUM",
            "required": true,
            "persistent": false,
            "title": "Data Sheet",
            "remarks": "DataSheet identifier",
            "sameAsAttribute": "DSPLANNUM",
            "sameAsObject": "PLUSDSPLAN"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": true,
            "persistent": false,
            "title": "Description",
            "remarks": "DESCRIPTION",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUS",
            "required": false,
            "persistent": false,
            "title": "Status",
            "remarks": "STATUS",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "PLUSDSPLAN"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}