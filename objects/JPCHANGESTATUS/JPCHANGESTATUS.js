mos = {
    "objectName": "JPCHANGESTATUS",
    "className": "psdi.app.jobplan.virtual.JPChangeStatusSet",
    "description": "Parameters for Job Plan Change Status",
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
            "remarks": "Change to Status",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "JOBPLAN"
        },
        {
            "attributeName": "ASOFDATE",
            "required": false,
            "persistent": false,
            "title": "As Of Date",
            "remarks": "As Of Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": false,
            "title": "Memo",
            "remarks": "Memo",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCREVNUM",
            "required": false,
            "persistent": false,
            "title": "Revision",
            "remarks": "Revision",
            "sameAsAttribute": "PLUSCREVNUM",
            "sameAsObject": "JOBPLAN"
        },
        {
            "attributeName": "PLUSCSTATUSDATE",
            "required": false,
            "persistent": false,
            "title": "Status Date",
            "remarks": "Status Date",
            "sameAsAttribute": "PLUSCSTATUSDATE",
            "sameAsObject": "JOBPLAN"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "JPCHANGESTATUS",
            "source": "JOBPLAN",
            "remarks": "Relationship to the non-persistent JPChangeStatus table. The resulting set will contain zero or more objects.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}