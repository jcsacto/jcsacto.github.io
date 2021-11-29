mos = {
    "objectName": "DISPATCHASSIGN",
    "className": "psdi.app.workorder.virtual.DispatchAssignSet",
    "description": "Non_Persistent Table to Dispatch Assignment",
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
            "attributeName": "WONUM",
            "required": false,
            "persistent": false,
            "title": "Work Order",
            "remarks": "Work order number to which this requirement applies.",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "Description of the work order.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "SCHEDULEDATE",
            "required": false,
            "persistent": false,
            "title": "Start Date",
            "remarks": "Rescheduled date and time for this requirement.",
            "sameAsAttribute": "SCHEDULEDATE",
            "sameAsObject": "ASSIGNMENT"
        },
        {
            "attributeName": "FINISHDATE",
            "required": false,
            "persistent": false,
            "title": "Finish Date",
            "remarks": "Assigned date and time for someone to finish this requirement.",
            "sameAsAttribute": "FINISHDATE",
            "sameAsObject": "ASSIGNMENT"
        },
        {
            "attributeName": "STATUS",
            "required": false,
            "persistent": false,
            "title": "Status",
            "remarks": "Status of the work order.",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": false,
            "title": "Memo",
            "remarks": "Status Memo",
            "sameAsAttribute": "MEMO",
            "sameAsObject": "WFTRANSACTION"
        },
        {
            "attributeName": "ASSIGNMENTID",
            "required": true,
            "persistent": false,
            "title": "AssignmentID",
            "remarks": "Unique ID of the corresponding assignment",
            "sameAsAttribute": "ASSIGNMENTID",
            "sameAsObject": "ASSIGNMENT"
        },
        {
            "attributeName": "PRINTREPORT",
            "required": true,
            "persistent": false,
            "title": "Print Work Order(s)",
            "remarks": "Check box indicating if the records selected should print a report.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REPORTNAME",
            "required": false,
            "persistent": false,
            "title": "Report Name",
            "remarks": "The report that will be printed if the printreport flag is enabled",
            "sameAsAttribute": "REPORTNAME",
            "sameAsObject": "REPORT"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ASSIGNDISPATCH",
            "target": "ASSIGNMENT",
            "remarks": "Relationship from DispatchAssign back to Assignments.",
            "whereClause": "assignmentid =:assignmentid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "DISPATCHASSIGN",
            "source": "WMASSIGNMENT",
            "remarks": "Relationship to the non-persistent set used to dispatch assignments.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}