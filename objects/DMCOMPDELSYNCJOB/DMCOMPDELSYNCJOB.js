mos = {
    "objectName": "DMCOMPDELSYNCJOB",
    "className": "psdi.dm.virtual.DmCompareDelAsyncJobSubmitter",
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
            "name": "DMCOMPDELSYNCJOB",
            "source": "DMCOMPJOB",
            "remarks": "Relationship from DMCOMPJOB to DMCOMPDELSYNCJOB",
            "whereClause": "1=1",
            "cardinality": null
        }
    ]
}