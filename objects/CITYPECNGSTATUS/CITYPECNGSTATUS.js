mos = {
    "objectName": "CITYPECNGSTATUS",
    "className": "psdi.app.citype.virtual.CdmCiTypeChangeStatusSet",
    "description": "Non-persistent table for CIType change status Dialog.",
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
            "remarks": "Non persistent field - stored upon completion of transaction to the CITYPESTATUS table.",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "CDMCITYPES"
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": false,
            "title": "Memo",
            "remarks": "Non persistent field - stored upon completion of transaction to the CITYPESTATUS table",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUSDATE",
            "required": false,
            "persistent": false,
            "title": "Changed Date",
            "remarks": "Status Change Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "CITYPECHANGESTATUS",
            "source": "CDMCITYPES",
            "remarks": "Relationship to the non-persistent CITYPECHANGESTATUS table. (There is no where clause for non-persistent objects).",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}