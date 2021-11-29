mos = {
    "objectName": "SFWVIEWCHGSTAT",
    "className": "psdi.app.contract.virtual.SFWViewChgStatSet",
    "description": "Parameters for software contract change status",
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
            "remarks": "The status you want the contract to hold",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "STATDATE",
            "required": true,
            "persistent": false,
            "title": "Status Date",
            "remarks": "Status Change Date",
            "sameAsAttribute": "STATUSDATE",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": false,
            "title": "Memo",
            "remarks": "Use this column to insert comments about status change",
            "sameAsAttribute": "MEMO",
            "sameAsObject": "WFTRANSACTION"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "SFWVIEWCHGSTAT",
            "source": "SFWVIEW",
            "remarks": "Relationship to the non-persistent SFWViewChangeStatus object. (No where clause). The resulting set will contain zero objects. Note: This relationship is used only for the Change Status action page to change the status of a given software contract.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}