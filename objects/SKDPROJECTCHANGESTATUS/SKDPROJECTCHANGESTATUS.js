mos = {
    "objectName": "SKDPROJECTCHANGESTATUS",
    "className": "com.ibm.tivoli.maximo.skd.app.virtual.SKDProjectChangeStatusSet",
    "description": "Non-persistant SKDPROJECT Change Status Table",
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
            "attributeName": "STATDATE",
            "required": true,
            "persistent": false,
            "title": "Status Date",
            "remarks": "Date when the status was changed",
            "sameAsAttribute": "CHANGEDATE",
            "sameAsObject": "SKDPROJECTSTATUS"
        },
        {
            "attributeName": "AUTOCOMMIT",
            "required": true,
            "persistent": false,
            "title": "Publish",
            "remarks": "Indicates that the schedule is published.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUS",
            "required": true,
            "persistent": false,
            "title": "New Status",
            "remarks": "New Status of Scheduler",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "SKDPROJECT"
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": false,
            "title": "Memo",
            "remarks": "Memo for status change.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BASELINENAME",
            "required": false,
            "persistent": false,
            "title": "Snapshot",
            "remarks": "Name of the snapshot.",
            "sameAsAttribute": "NAME",
            "sameAsObject": "SKDPROJECT"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "Snapshot description.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BASELINEMEMO",
            "required": false,
            "persistent": false,
            "title": "Publish Memo",
            "remarks": "Memo for publish.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "SKDPROJECTCHANGESTATUS",
            "source": "SKDPROJECT",
            "remarks": "Relationship to the non-persistent SKDProjectChangeStatus table. (There is no where clause for non-persistent objects). The resulting set will contain zero or more objects.",
            "whereClause": "",
            "cardinality": null
        }
    ]
}