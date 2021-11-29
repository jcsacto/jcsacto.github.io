mos = {
    "objectName": "PROMOTEPROJECT",
    "className": "psdi.app.dbchange.virtual.PromoteProjectSet",
    "description": "Promote all messages from one project to another",
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
            "attributeName": "FROMPROJECT",
            "required": true,
            "persistent": false,
            "title": "From Project",
            "remarks": "Where to copy the messages from",
            "sameAsAttribute": "PROJECT",
            "sameAsObject": "PROJECT"
        },
        {
            "attributeName": "TOPROJECT",
            "required": true,
            "persistent": false,
            "title": "To Project",
            "remarks": "Project where to promote the messages",
            "sameAsAttribute": "PROJECT",
            "sameAsObject": "PROJECT"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "PROPROMOTE",
            "source": "EDITMESSAGE",
            "remarks": "Bring up the dialog to promote a project's messages.",
            "whereClause": "",
            "cardinality": null
        }
    ]
}