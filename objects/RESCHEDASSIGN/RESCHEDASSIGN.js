mos = {
    "objectName": "RESCHEDASSIGN",
    "className": "psdi.app.workorder.virtual.ReschedAssignSet",
    "description": "Non-persistent Mbo for rescheduling assignments",
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
            "attributeName": "RESCHEDDATE",
            "required": false,
            "persistent": false,
            "title": "Reschedule Date",
            "remarks": "Date to which assignments of selected work orders will be rescheduled.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RESCHED",
            "required": true,
            "persistent": false,
            "title": "Reschedule the assignments",
            "remarks": "Indicates if the assignments of the selected wo should be rescheduled. Clear the check box to unassign the labor from the assignments and change the status of the assignments to WAITASGN. Assignments in COMPLETE or WAITASGN status will not be affected.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}