mos = {
    "objectName": "INTOBJRELATION",
    "className": "psdi.iface.app.common.IntObjectRelationSet",
    "description": "iNTEGRATION OBJECT RELATION",
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
            "attributeName": "SOURCE",
            "required": false,
            "persistent": false,
            "title": "Source",
            "remarks": "SOURCE",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DEST",
            "required": false,
            "persistent": false,
            "title": "Destination",
            "remarks": "DEST",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RELATION",
            "required": false,
            "persistent": false,
            "title": "Relation",
            "remarks": "RELATION",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RELSQLWHERE",
            "required": false,
            "persistent": false,
            "title": "Where Clause",
            "remarks": "The clause used to set the condition for the join. If this condition is not met, the tables will not be joined",
            "sameAsAttribute": "CLAUSE",
            "sameAsObject": "QUERY"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}