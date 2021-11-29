mos = {
    "objectName": "QUALCHANGESTATUS",
    "className": "psdi.app.qual.virtual.QualChangeStatusSet",
    "description": "NP Table for Changing status of Qualification",
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
            "attributeName": "STATUS",
            "required": true,
            "persistent": false,
            "title": "New Status",
            "remarks": "NP Status",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "LABOR"
        },
        {
            "attributeName": "STATUSDATE",
            "required": true,
            "persistent": false,
            "title": "Status Date",
            "remarks": "NP Status Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": false,
            "title": "Memo",
            "remarks": "NP Memo",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "QUALCHANGESTATUS",
            "source": "QUALIFICATION",
            "remarks": "Relationship to the non-persistent QualChangeStatus table.(No whereclause.)  This will return 0 objects.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}