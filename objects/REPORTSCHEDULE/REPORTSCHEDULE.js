mos = {
    "objectName": "REPORTSCHEDULE",
    "className": "psdi.app.report.virtual.ReportScheduleSet",
    "description": "Used to list scheduled external reports.",
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
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "Report description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "JOBSTATE",
            "required": false,
            "persistent": false,
            "title": "Job State",
            "remarks": "Scheduled job current state",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SUBMISSIONTIME",
            "required": false,
            "persistent": false,
            "title": "Submission Time",
            "remarks": "Time of submission",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NEXTSTARTTIME",
            "required": false,
            "persistent": false,
            "title": "Next Start Time",
            "remarks": "Next scheduled start time",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OWNER",
            "required": false,
            "persistent": false,
            "title": "Owner",
            "remarks": "Scheduled event owner",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}