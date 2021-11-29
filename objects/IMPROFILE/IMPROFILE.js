mos = {
    "objectName": "IMPROFILE",
    "className": "com.ibm.tivoli.imi.app.imiconf.IMProfileSet",
    "description": "Instant Messaging Profile",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "IMPROFILEID",
    "primaryKeyColumns": [
        "IMPROFILEID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "IMPROFILEID",
            "required": true,
            "persistent": true,
            "title": "Instant Messaging Profile Identifier",
            "remarks": "Instant Messaging profile identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Instant Messaging Profile Description",
            "remarks": "Instant Messaging profile description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DRIVER",
            "required": false,
            "persistent": true,
            "title": "Instant Messaging Driver",
            "remarks": "Instant Messaging driver related to a specific Instant Messaging vendor",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SERVERHOSTNAME",
            "required": true,
            "persistent": true,
            "title": "Instant Messaging Server Hostname",
            "remarks": "Instant Messaging server hostname",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SERVERPORT",
            "required": false,
            "persistent": true,
            "title": "Instant Messaging Server Port",
            "remarks": "Instant Messaging server port",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SERVICE",
            "required": false,
            "persistent": true,
            "title": "Service",
            "remarks": "Service",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COMMUNITY",
            "required": false,
            "persistent": true,
            "title": "Community",
            "remarks": "Community (specific for IBM Sametime)",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONNECTIONTIMEOUT",
            "required": false,
            "persistent": true,
            "title": "Connection Timeout",
            "remarks": "The limit of milliseconds to open an IM connection",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}