mos = {
    "objectName": "DMCOMPARESYNCJOB",
    "className": "psdi.dm.virtual.DmCompareAsyncJobSubmitter",
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
            "attributeName": "COMPJOBNUM",
            "required": false,
            "persistent": false,
            "title": "Job Number",
            "remarks": "Identifies the specific compare job submitted by a user",
            "sameAsAttribute": "COMPJOBNUM",
            "sameAsObject": "DMCOMPJOB"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "DMCOMPARESYNCJOB",
            "source": "DMCOMPJOB",
            "remarks": "Relationship from DMCOMPJOB to DMCOMPARESYNCJOB",
            "whereClause": "1=1",
            "cardinality": null
        }
    ]
}