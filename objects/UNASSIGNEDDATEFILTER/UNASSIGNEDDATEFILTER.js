mos = {
    "objectName": "UNASSIGNEDDATEFILTER",
    "className": "com.ibm.tivoli.maximo.map.virtual.UnassignedDateFilterSet",
    "description": "Virtual table for unassigned workorder date filter dialog",
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
            "attributeName": "FROMDATE",
            "required": false,
            "persistent": false,
            "title": "From",
            "remarks": "Scheduled Start From",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TODATE",
            "required": false,
            "persistent": false,
            "title": "To",
            "remarks": "Scheduled Start To",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WOPRIORITY",
            "required": false,
            "persistent": false,
            "title": "Priority",
            "remarks": "Identifies the importance of the work order, from 0-999, where 0 is the lowest priority and 999 is the highest.",
            "sameAsAttribute": "WOPRIORITY",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "WORKTYPE",
            "required": false,
            "persistent": false,
            "title": "Work Type",
            "remarks": "Identifies the work order's type. Some example types are: preventive maintenance, corrective maintenance, emergency maintenace, capital project, and event report.",
            "sameAsAttribute": "WORKTYPE",
            "sameAsObject": "WORKTYPE"
        },
        {
            "attributeName": "STATUS",
            "required": false,
            "persistent": false,
            "title": "Status",
            "remarks": "Status of the work order, for example, in progress, waiting on material, waiting for approval, completed, or closed.",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "TARGSTARTDATE",
            "required": false,
            "persistent": false,
            "title": "Start",
            "remarks": "Target from date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TARGCOMPDATE",
            "required": false,
            "persistent": false,
            "title": "Finish",
            "remarks": "Target To Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}