mos = {
    "objectName": "CREATESERVREC",
    "className": "psdi.app.labor.virtual.CreateServRecSet",
    "description": "Non Persistent table to create Service Receipts",
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
            "attributeName": "ISSUMMARY",
            "required": true,
            "persistent": false,
            "title": "Is Summary",
            "remarks": "Is Summarized lines selected?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STARTDATE",
            "required": false,
            "persistent": false,
            "title": "Start Date",
            "remarks": "Start Day",
            "sameAsAttribute": "STARTDATE",
            "sameAsObject": "LABTRANS"
        },
        {
            "attributeName": "ENDDATE",
            "required": false,
            "persistent": false,
            "title": "End Date",
            "remarks": "End Day",
            "sameAsAttribute": "FINISHDATE",
            "sameAsObject": "LABTRANS"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "CREATESERVREC",
            "source": "LABOR",
            "remarks": "Relationship to the nonpersistent parameter set to create service receipts.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}