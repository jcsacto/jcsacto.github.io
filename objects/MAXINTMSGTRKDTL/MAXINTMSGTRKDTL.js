mos = {
    "objectName": "MAXINTMSGTRKDTL",
    "className": "psdi.iface.app.intmsgtrk.MaxIntMsgTrkDtlSet",
    "description": "Integration Message Tracking Detail",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXINTMSGTRKDTLID",
    "primaryKeyColumns": [
        "MEAMSGID",
        "STATUS"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
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
    "columns": [
        {
            "attributeName": "MAXINTMSGTRKDTLID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MEAMSGID",
            "required": true,
            "persistent": true,
            "title": "Internal Message ID",
            "remarks": "Internal Message ID",
            "sameAsAttribute": "MEAMSGID",
            "sameAsObject": "MAXINTMSGTRK"
        },
        {
            "attributeName": "STATUS",
            "required": true,
            "persistent": true,
            "title": "Status",
            "remarks": "Status",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "MAXINTMSGTRK"
        },
        {
            "attributeName": "STATUSDATE",
            "required": false,
            "persistent": true,
            "title": "Status Date",
            "remarks": "Status Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ERRORTEXT",
            "required": false,
            "persistent": true,
            "title": "Error",
            "remarks": "Error message text when status is Error",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "MAXINTMSGTRKDTL",
            "source": "MAXINTMSGTRK",
            "remarks": "Relationship to get transaction details",
            "whereClause": "meamsgid=:meamsgid",
            "cardinality": "UNDEFINED"
        }
    ]
}