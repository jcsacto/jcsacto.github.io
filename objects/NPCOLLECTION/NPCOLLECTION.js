mos = {
    "objectName": "NPCOLLECTION",
    "className": "psdi.app.collection.NPCollectionSet",
    "description": "Non Persistent Object for Collection.",
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
            "attributeName": "COLLECTIONNUM",
            "required": false,
            "persistent": false,
            "title": "Collection",
            "remarks": "CollectionNum",
            "sameAsAttribute": "COLLECTIONNUM",
            "sameAsObject": "COLLECTION"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "COLLECTION",
            "target": "COLLECTION",
            "remarks": "Relationship to the COLLECTION table, used to find a COLLECTION record for a given NPCOLLECTION record.",
            "whereClause": "collectionnum = :collectionnum",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": []
}