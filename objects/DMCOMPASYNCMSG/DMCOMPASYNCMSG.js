mos = {
    "objectName": "DMCOMPASYNCMSG",
    "className": "psdi.dm.virtual.DMCompAsyncJobMsgSet",
    "description": "Non persistent table to show async commit job messages for comparison.",
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
            "attributeName": "DMCOMPMSGSTATUS",
            "required": false,
            "persistent": false,
            "title": "Error",
            "remarks": "Commit Message Status",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "DMCOMPASYNCMSG",
            "source": "DMCOMPJOB",
            "remarks": "Relationship to the non persistent object DMCOMPASYNCMSG",
            "whereClause": "1=1",
            "cardinality": null
        }
    ]
}