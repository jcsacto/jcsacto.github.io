mos = {
    "objectName": "REPORTRUNLOCK",
    "className": "psdi.mbo.custapp.CustomMboSet",
    "description": "Report Run Lock",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "REPORTRUNLOCKID",
    "primaryKeyColumns": [
        "REPORTRUNQUEUEID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "REPORTRUNQUEUE",
            "targetObject": "REPORTRUNLOCK",
            "parentKeys": "REPORTRUNQUEUEID",
            "targetKeys": "REPORTRUNQUEUEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Report Run Queue",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "REPORTRUNLOCKID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REPORTRUNQUEUEID",
            "required": true,
            "persistent": true,
            "title": "Report Run Queue Id",
            "remarks": "Report Run Queue Id",
            "sameAsAttribute": "REPORTRUNQUEUEID",
            "sameAsObject": "REPORTRUNQUEUE"
        },
        {
            "attributeName": "LOCKTIME",
            "required": true,
            "persistent": true,
            "title": "Lock Time",
            "remarks": "Lock Time",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "REPORTRUNQUEUE",
            "target": "REPORTRUNQUEUE",
            "remarks": "Report Run Queue",
            "whereClause": "reportrunqueueid=:reportrunqueueid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "REPORTRUNLOCK",
            "source": "REPORTRUNQUEUE",
            "remarks": "Report Run Lock",
            "whereClause": "reportrunqueueid=:reportrunqueueid",
            "cardinality": "UNDEFINED"
        }
    ]
}