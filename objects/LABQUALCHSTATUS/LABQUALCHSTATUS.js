mos = {
    "objectName": "LABQUALCHSTATUS",
    "className": "psdi.app.labor.virtual.LaborQualChangeStatusSet",
    "description": "Non Persistent LaborQual Change status",
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
            "remarks": "Non Persistent Status",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "LABOR"
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": false,
            "title": "Memo",
            "remarks": "Non Persistent Memo",
            "sameAsAttribute": "MEMO",
            "sameAsObject": "LABORSTATUS"
        },
        {
            "attributeName": "STATUSDATE",
            "required": true,
            "persistent": false,
            "title": "Status Date",
            "remarks": "Status Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "LABQUALCHSTATUS",
            "source": "LABORQUAL",
            "remarks": "Relationship to the non persistent LabQualChStatus table. (no whereclause)",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}