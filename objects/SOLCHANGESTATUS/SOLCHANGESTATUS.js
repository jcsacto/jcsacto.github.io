mos = {
    "objectName": "SOLCHANGESTATUS",
    "className": "psdi.app.solution.virtual.SolChangeStatusSet",
    "description": "Solution Change Status Non-Persistent Table.",
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
            "remarks": "Sets a new status for the solution. Predefined statuses include DRAFT, ACTIVE, and INACTIVE. Click the drop-down menu to choose a status.",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "SOLUTION"
        },
        {
            "attributeName": "ASOFDATE",
            "required": false,
            "persistent": false,
            "title": "Status Date",
            "remarks": "Calendar date and time the status was changed. Click the Select Date and Time button to use the calendar control.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": false,
            "title": "Memo",
            "remarks": "Briefly describes the reason for the status change.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "SOLUTIONCHANGESTATUS",
            "source": "SOLUTION",
            "remarks": "Relationship to the non-persistent SolutionChangeStatus table. (No where clause). The resulting set will contain zero objects. Note: This relationship is used only for the Change Status action page to change the status of a given solution.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}