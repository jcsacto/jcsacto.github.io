mos = {
    "objectName": "DMCOLLASYNCJOBMSG",
    "className": "psdi.mbo.custapp.NonPersistentCustomMboSet",
    "description": "Non persistent object to show message of async job",
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
            "attributeName": "MESSAGE",
            "required": false,
            "persistent": false,
            "title": "Async Message",
            "remarks": "Message from async job",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "DMCOLLASYNCJOBMSG",
            "source": "DMCOLLECTION",
            "remarks": "Relationship from DMCOLLECTION to DMCOLLASYNCJOBMSG",
            "whereClause": "1=1",
            "cardinality": null
        }
    ]
}