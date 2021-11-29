mos = {
    "objectName": "MAXINTMSGTRK",
    "className": "psdi.iface.app.intmsgtrk.MaxIntMsgTrkSet",
    "description": "Integration Message Tracking",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXINTMSGTRKID",
    "primaryKeyColumns": [
        "MEAMSGID"
    ],
    "logicalRelationships": [
        {
            "objectName": "MAXINTMSGTRK",
            "targetObject": "MAXINTMSGTRKDTL",
            "parentKeys": "MEAMSGID",
            "targetKeys": "MEAMSGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Integration Message Tracking Details",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXEXTSYSTEM",
            "targetObject": "MAXINTMSGTRK",
            "parentKeys": "EXTSYSNAME",
            "targetKeys": "EXTSYSNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "External System",
            "longDescription": null
        },
        {
            "objectName": "MAXIFACEIN",
            "targetObject": "MAXINTMSGTRK",
            "parentKeys": "IFACENAME",
            "targetKeys": "IFACENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Enterprise Services Interface",
            "longDescription": null
        },
        {
            "objectName": "MAXQUEUE",
            "targetObject": "MAXINTMSGTRK",
            "parentKeys": "QUEUENAME",
            "targetKeys": "QUEUENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MEA Queue",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "MAXINTMSGTRKID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IFACENAME",
            "required": true,
            "persistent": true,
            "title": "Integration Component",
            "remarks": "Enterprise Service/Publish Channel name",
            "sameAsAttribute": "IFACENAME",
            "sameAsObject": "MAXIFACEIN"
        },
        {
            "attributeName": "MEAMSGID",
            "required": true,
            "persistent": true,
            "title": "Message ID",
            "remarks": "Internal Message ID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IFACETYPE",
            "required": false,
            "persistent": true,
            "title": "Adapter",
            "remarks": "Identifies the type of this message.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INTEGRATIONMODE",
            "required": false,
            "persistent": true,
            "title": "Integration Mode",
            "remarks": "Method of integration (HTTP, EJB, WebService etc.)",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SEARCHFIELDDATA",
            "required": false,
            "persistent": true,
            "title": "Search ID",
            "remarks": "Data in search fields of the message (configured by user on interface basis)",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORIGMSG",
            "required": false,
            "persistent": false,
            "title": "Original Message",
            "remarks": "Original Message as seen by MEA",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "QUEUENAME",
            "required": false,
            "persistent": true,
            "title": "Queue Name",
            "remarks": "Queue name where msg was accepted (applicable when JMS Queuing/Asynchronous integration is in effect).",
            "sameAsAttribute": "QUEUENAME",
            "sameAsObject": "MAXQUEUE"
        },
        {
            "attributeName": "INITIALDATETIME",
            "required": false,
            "persistent": true,
            "title": "Received Date & Time",
            "remarks": "Datetime when Message was first received by MEA",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MESSAGETYPE",
            "required": false,
            "persistent": true,
            "title": "Operation",
            "remarks": "Operation associated with Enterprise Service/Publish Channel",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EXTSYSNAME",
            "required": false,
            "persistent": true,
            "title": "System",
            "remarks": "Message Sender",
            "sameAsAttribute": "EXTSYSNAME",
            "sameAsObject": "MAXEXTSYSTEM"
        },
        {
            "attributeName": "STATUS",
            "required": false,
            "persistent": true,
            "title": "Current Status",
            "remarks": "Shows last Message Status",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EXTMSGIDFIELDDATA",
            "required": false,
            "persistent": true,
            "title": "External Message ID",
            "remarks": "External Message Id Field Data",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MSGDATA",
            "required": false,
            "persistent": true,
            "title": "Stored Massage",
            "remarks": "Stored Massage",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MSGLENGTH",
            "required": false,
            "persistent": true,
            "title": "Stored Message Length",
            "remarks": "Stored Message Length",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "MAXINTMSGTRKDTL",
            "target": "MAXINTMSGTRKDTL",
            "remarks": "Relationship to get transaction details",
            "whereClause": "meamsgid=:meamsgid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": []
}