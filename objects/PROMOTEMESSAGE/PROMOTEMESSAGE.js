mos = {
    "objectName": "PROMOTEMESSAGE",
    "className": "psdi.app.dbchange.virtual.PromoteMessageSet",
    "description": "Dialog class used to move messages to new projects",
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
            "attributeName": "PROJECT",
            "required": true,
            "persistent": false,
            "title": "To Project",
            "remarks": "Project where to create the copy of the message.",
            "sameAsAttribute": "PROJECT",
            "sameAsObject": "PROJECT"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "PROMOTE",
            "source": "EDITMESSAGE",
            "remarks": "Get dialog class to promote message.",
            "whereClause": "",
            "cardinality": null
        }
    ]
}