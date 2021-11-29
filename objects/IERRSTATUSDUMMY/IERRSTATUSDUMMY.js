mos = {
    "objectName": "IERRSTATUSDUMMY",
    "className": "psdi.iface.app.interror.MaxIntErrorStatusDummySet",
    "description": "Integration Error dummy set for status history",
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
            "attributeName": "MESSAGEID",
            "required": false,
            "persistent": false,
            "title": "Message ID",
            "remarks": "Message ID",
            "sameAsAttribute": "MESSAGEID",
            "sameAsObject": "MAXINTERROR"
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": false,
            "title": "Memo",
            "remarks": "Memo",
            "sameAsAttribute": "MEMO",
            "sameAsObject": "WFTRANSACTION"
        },
        {
            "attributeName": "CHANGEBY",
            "required": false,
            "persistent": false,
            "title": "Change By",
            "remarks": "Change By",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEDATE",
            "required": false,
            "persistent": false,
            "title": "Change Date",
            "remarks": "Change Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "IERRSTATUSDUMMY",
            "source": "MAXINTERROR",
            "remarks": "Relationship to the MaxIntErrorStatusDummy non-persistent table, used to find all status for a given asset. (ierrstatusdummy.messageid = maxinterror.messageid). This resulting set will contain zero or more objects.",
            "whereClause": "messageid=:messageid",
            "cardinality": "UNDEFINED"
        }
    ]
}