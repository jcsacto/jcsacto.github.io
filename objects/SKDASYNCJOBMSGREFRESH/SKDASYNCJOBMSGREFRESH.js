mos = {
    "objectName": "SKDASYNCJOBMSGREFRESH",
    "className": "com.ibm.tivoli.maximo.skd.app.virtual.SKDAsyncJobMsgRefreshSet",
    "description": "Non-persistent table to show Async Commit Job Messages and Date on a dialog.",
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
            "attributeName": "COMMITMSGSTATUS",
            "required": false,
            "persistent": false,
            "title": "Status",
            "remarks": "Commit Message Status",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "SKDASYNCJOBMSGREFRESH",
            "source": "SKDPROJECT",
            "remarks": "Relationship to the non persistent object SKDASYNCJOBMSGREFRESH",
            "whereClause": null,
            "cardinality": null
        }
    ]
}