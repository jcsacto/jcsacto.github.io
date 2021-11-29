mos = {
    "objectName": "CONFIRMLABTRANS",
    "className": "psdi.app.labor.virtual.ConfirmLabtransSet",
    "description": "Confirm labtrans on stop timer popup",
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
            "attributeName": "STARTDATE",
            "required": false,
            "persistent": false,
            "title": "Start Date",
            "remarks": "The start date for the timer.",
            "sameAsAttribute": "STARTDATE",
            "sameAsObject": "LABTRANS"
        },
        {
            "attributeName": "STARTTIME",
            "required": false,
            "persistent": false,
            "title": "Start Time",
            "remarks": "The start time for the timer. ",
            "sameAsAttribute": "STARTTIME",
            "sameAsObject": "LABTRANS"
        },
        {
            "attributeName": "FINISHDATE",
            "required": false,
            "persistent": false,
            "title": "Finish Date",
            "remarks": "The finish date for the timer. If you modify this field, Maximo recalculates the Hours field.",
            "sameAsAttribute": "FINISHDATE",
            "sameAsObject": "LABTRANS"
        },
        {
            "attributeName": "FINISHTIME",
            "required": false,
            "persistent": false,
            "title": "Finish Time",
            "remarks": "The finish time for the timer. You can edit this field or the Hours field. If you modify this field, Maximo recalculates the value in the Hours field.",
            "sameAsAttribute": "FINISHTIME",
            "sameAsObject": "LABTRANS"
        },
        {
            "attributeName": "HOURS",
            "required": false,
            "persistent": false,
            "title": "Hours",
            "remarks": "Total hours working on this ticket. You can edit this field or the Finish Time field. If you modify this field, Maximo recalculates the value in the Finish Time field.",
            "sameAsAttribute": "REGULARHRS",
            "sameAsObject": "LABTRANS"
        },
        {
            "attributeName": "CLASS",
            "required": false,
            "persistent": false,
            "title": "Ticket Class",
            "remarks": "Identifies the class of the ticket.",
            "sameAsAttribute": "CLASS",
            "sameAsObject": "TICKET"
        },
        {
            "attributeName": "RECORDKEY",
            "required": false,
            "persistent": false,
            "title": "Record Key",
            "remarks": "Identifies the ticket or work order.",
            "sameAsAttribute": "RECORDKEY",
            "sameAsObject": "WORKVIEW"
        },
        {
            "attributeName": "STOPTIMERCOMP",
            "required": false,
            "persistent": false,
            "title": "By default, change the work order status to COMP when a user stops a labor timer",
            "remarks": "Indicates if the status of the work order is automatically changed to complete when a user stops the timer.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "CONFIRMLABTRANS",
            "source": "TICKET",
            "remarks": null,
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONFIRMLABTRANS",
            "source": "WORKORDER",
            "remarks": null,
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}