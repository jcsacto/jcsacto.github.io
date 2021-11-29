mos = {
    "objectName": "PLUSCDSCHGSTATUS",
    "className": "psdi.plusc.app.pluscds.virtual.PlusCDSChngStatusSet",
    "description": "Parameters fo Data Sheet Change Status",
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
            "attributeName": "MEMO",
            "required": false,
            "persistent": false,
            "title": "Memo",
            "remarks": "Memo for status change",
            "sameAsAttribute": "MEMO",
            "sameAsObject": "WFTRANSACTION"
        },
        {
            "attributeName": "STATDATE",
            "required": false,
            "persistent": false,
            "title": "As of Date",
            "remarks": "Data of Status Change",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUS",
            "required": false,
            "persistent": false,
            "title": "New Status",
            "remarks": "Change Status",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "PLUSDSPLAN"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "PLUSCDSCHGSTATUS",
            "source": "PLUSDSPLAN",
            "remarks": null,
            "whereClause": "dsplannum=:dsplannum",
            "cardinality": null
        }
    ]
}