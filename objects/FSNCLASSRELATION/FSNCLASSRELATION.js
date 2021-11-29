mos = {
    "objectName": "FSNCLASSRELATION",
    "className": null,
    "description": "Fusion Class Relation",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [
        "CRID"
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
            "attributeName": "PARENTCID",
            "required": true,
            "persistent": true,
            "title": "Parent Class",
            "remarks": "Parent Class ID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHILDCID",
            "required": true,
            "persistent": true,
            "title": "Child Class",
            "remarks": "Child Class ID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RELATIONTYPE",
            "required": true,
            "persistent": true,
            "title": "Relation Type",
            "remarks": "Relation Type",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}