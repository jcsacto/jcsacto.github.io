mos = {
    "objectName": "WOTASKLOOKUP",
    "className": "psdi.app.workorder.virtual.WOTaskLookupSet",
    "description": "Non-Persistent table to lookup workorder tasks",
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
            "remarks": "Work order the task refers to",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "TASKID",
            "required": false,
            "persistent": false,
            "title": "Task",
            "remarks": "Work order task id",
            "sameAsAttribute": "TASKID",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "Description of the work order task",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": false,
            "title": "Organization",
            "remarks": "Organization Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": false,
            "title": "Site",
            "remarks": "Site Identifier",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "DISPLAYWONUM",
            "required": false,
            "persistent": false,
            "title": "Work Order",
            "remarks": "Work Order number to display",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "RELTYPE",
            "required": true,
            "persistent": false,
            "title": "Relationship",
            "remarks": "The dependency between work records which determines scheduling order.  This includes Finish to Start, Finish to Finish, Start to Start, and Start to Finish.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LEADLAGHOURS",
            "required": false,
            "persistent": false,
            "title": "Lead/Lag Hours",
            "remarks": "The overlap of, or delay between, work records that have a dependency.  Enter a positive duration for a Lag (delay).  Enter a negative duration for a Lead (overlap).",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "WOTASKLOOKUP",
            "source": "WORKORDER",
            "remarks": "Relationship from the work order to its tasks.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}