mos = {
    "objectName": "PROMOTEACTCI",
    "className": "psdi.app.actualci.virtual.PromoteActCISet",
    "description": "Promote Actual CI to CI",
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
            "attributeName": "CICLASSID",
            "required": false,
            "persistent": false,
            "title": "CI Classification",
            "remarks": "CI Classification",
            "sameAsAttribute": "CLASSSTRUCTUREID",
            "sameAsObject": "CLASSSTRUCTURE"
        },
        {
            "attributeName": "COPYATTRIBUTES",
            "required": true,
            "persistent": false,
            "title": "Copy Attributes",
            "remarks": "Copy Attributes",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOEMAILADDR",
            "required": false,
            "persistent": false,
            "title": "E-Mail Address Notification",
            "remarks": "The email address of the person who receives the reorder notification.",
            "sameAsAttribute": "EMAILADDRESS",
            "sameAsObject": "EMAIL"
        },
        {
            "attributeName": "ASYNC",
            "required": true,
            "persistent": false,
            "title": "Run in Background Mode",
            "remarks": "Checking this box indicates you want this reorder process is to be asynchronized, or run in the background.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "CICLASSID",
            "target": "CLASSSTRUCTURE",
            "remarks": "Relationship to the classstucture table, used to find the classstucture record for classstructure id",
            "whereClause": "classstructureid=:ciclassid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "PROMOTEACTCI",
            "source": "ACTCI",
            "remarks": "Relationship from actci to promoteactci",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}