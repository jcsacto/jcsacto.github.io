mos = {
    "objectName": "FSNOBJRELATION",
    "className": null,
    "description": "Fusion Object Relation",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [
        "CRID",
        "PARENTOID",
        "CHILDOID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "CRID",
            "required": true,
            "persistent": true,
            "title": "Class Relation",
            "remarks": "Class Relation ID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PARENTOID",
            "required": true,
            "persistent": true,
            "title": "Parent Object",
            "remarks": "Parent Object ID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHILDOID",
            "required": true,
            "persistent": true,
            "title": "Child Object",
            "remarks": "Child Object ID",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}