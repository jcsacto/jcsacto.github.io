mos = {
    "objectName": "WORKTYPE",
    "className": "psdi.app.workorder.WorkTypeSet",
    "description": "The WORKTYPE table",
    "longDescription": "WorkType specifies options for types of Work Orders.",
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "WORKTYPEID",
    "primaryKeyColumns": [
        "WORKTYPEID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ORGANIZATION",
            "targetObject": "WORKTYPE",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "WORKTYPE",
            "required": true,
            "persistent": true,
            "title": "Work Type",
            "remarks": "Defines the type for the selected class of work order. For example, for a release, work types are significant, major, or minor. For a change, work types are delta, full, or package. For a work order, work types are corrective maintenance, capital project, emergency maintenance, event report, and preventive maintenance. You also can define work types for any of work order class. For each type, you can set prompt information.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WTYPEDESC",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the work order's type. To enter or view additional information, click the Long Description button.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PROMPTFAIL",
            "required": true,
            "persistent": true,
            "title": "Failure Prompt",
            "remarks": "Indicates whether Maximo displays a message to users informing them if they did not enter failure information when they complete or close the work order. If the check box is selected, Maximo will display the message. If the check box is cleared (the default), Maximo will not display the message.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PROMPTDOWN",
            "required": true,
            "persistent": true,
            "title": "Downtime Prompt",
            "remarks": "Indicates whether Maximo displays a message to users informing them they have left an asset in the Down status while completing or closing a work order. If the check box is selected, Maximo will display the message if the asset is left in the Down position when the status is changed to complete or closedl. If the check box is cleared (the default), Maximo will not display a message.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "WOCLASS",
            "required": true,
            "persistent": true,
            "title": "Work Order Class",
            "remarks": "Class of the work order whose type you are defining, for example, activity, change, release, or work order.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WORKTYPEID",
            "required": true,
            "persistent": true,
            "title": "WORKTYPEID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TYPE",
            "required": true,
            "persistent": true,
            "title": "Type",
            "remarks": "Categorize the Work type as Repair or Overhaul",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STARTSTATUS",
            "required": false,
            "persistent": true,
            "title": "Start Status",
            "remarks": "Status denoting a task's start for sequencing purposes",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "COMPLETESTATUS",
            "required": false,
            "persistent": true,
            "title": "Complete Status",
            "remarks": "Status denoting a task's completion for sequencing purposes",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "KEEPTASKSTATUSHIST",
            "required": true,
            "persistent": true,
            "title": "Record Status History for Work Order Tasks",
            "remarks": "Record Status History for Work Order Tasks",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONTENTUID",
            "required": true,
            "persistent": true,
            "title": "Content Unique Id",
            "remarks": "Content Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "WORKTYPE",
            "source": "ORGANIZATION",
            "remarks": "Relationship to the WorkType table, used to find all work type records for a given organization. (organization.orgid = worktype.orgid). The resulting set will contain one or more objects.",
            "whereClause": "orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKTYPE",
            "source": "PM",
            "remarks": "Relationship to the WorkType table, used to find all work type records for a given organization. (organization.orgid = worktype.orgid). The resulting set will contain one or more objects.",
            "whereClause": "orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKTYPE",
            "source": "WORKORDER",
            "remarks": "Relationship to the WorkType table, used to find the work type for a work order. (WorkType.WorkType = workorder.WorkType). This resulting set will contain zero or one object.",
            "whereClause": "worktype = :worktype and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WO_WORKTYPE",
            "source": "WORKORDER",
            "remarks": null,
            "whereClause": "worktype=:worktype and orgid=:orgid",
            "cardinality": "UNDEFINED"
        }
    ]
}