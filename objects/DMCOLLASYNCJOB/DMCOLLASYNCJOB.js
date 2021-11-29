mos = {
    "objectName": "DMCOLLASYNCJOB",
    "className": "psdi.dm.collection.virtual.DmCollAsyncJobSubmitter",
    "description": "Non persistent object to create a async job",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": false,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "COLLECTION",
            "required": false,
            "persistent": false,
            "title": "Collection Name",
            "remarks": "Collection name",
            "sameAsAttribute": "COLLECTION",
            "sameAsObject": "DMCOLLECTION"
        },
        {
            "attributeName": "SOURCE",
            "required": false,
            "persistent": false,
            "title": "Source",
            "remarks": "The name of the product source environment where this is defined. The name is a combination of the database host name, the database identifier, and the database schema name.",
            "sameAsAttribute": "SOURCE",
            "sameAsObject": "DMPACKAGEDEF"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "DMCOLLASYNCJOB",
            "source": "DMCOLLECTION",
            "remarks": "Relationship from DMCOLLECTION to DMCOLLASYNCJOB",
            "whereClause": "collection=:collection and source=:source",
            "cardinality": null
        }
    ]
}