mos = {
    "objectName": "MAXINTVIEWQUEUE",
    "className": "psdi.iface.app.extsystem.MaxIntViewQueueSet",
    "description": "View Queue Results Non-Persistent Object",
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
            "attributeName": "FILENAME",
            "required": false,
            "persistent": false,
            "title": "File Name",
            "remarks": "File Name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EXTSYSNAME",
            "required": false,
            "persistent": false,
            "title": "External System",
            "remarks": "External System",
            "sameAsAttribute": "EXTSYSNAME",
            "sameAsObject": "MAXEXTSYSTEM"
        },
        {
            "attributeName": "FILEURL",
            "required": false,
            "persistent": false,
            "title": "File URL",
            "remarks": "File URL",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IFACENAME",
            "required": false,
            "persistent": false,
            "title": "Service/Channel",
            "remarks": "Service/Channel",
            "sameAsAttribute": "IFACENAME",
            "sameAsObject": "MAXIFACEIN"
        },
        {
            "attributeName": "QUEUENAME",
            "required": false,
            "persistent": false,
            "title": "Queue JNDI name",
            "remarks": "Queue JNDI name",
            "sameAsAttribute": "QUEUENAME",
            "sameAsObject": "MAXQUEUE"
        },
        {
            "attributeName": "FILEPATH",
            "required": false,
            "persistent": false,
            "title": "File Path",
            "remarks": "File Path",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MESSAGEID",
            "required": false,
            "persistent": false,
            "title": "Message ID",
            "remarks": "Message ID",
            "sameAsAttribute": "MESSAGEID",
            "sameAsObject": "MAXINTERROR"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "MAXINTVIEWQUEUE",
            "source": "MAXQUEUE",
            "remarks": "Relation to MaxIntViewQueue object to show all viewd files.",
            "whereClause": null,
            "cardinality": null
        }
    ]
}