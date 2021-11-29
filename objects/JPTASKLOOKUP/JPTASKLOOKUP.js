mos = {
    "objectName": "JPTASKLOOKUP",
    "className": "psdi.app.jobplan.virtual.JPTaskLookupSet",
    "description": "Non-Persistent table to lookup job plan tasks",
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
            "attributeName": "JPNUM",
            "required": false,
            "persistent": false,
            "title": "Job Plan",
            "remarks": "Job Plan Number The Task Refers To",
            "sameAsAttribute": "JPNUM",
            "sameAsObject": "JOBPLAN"
        },
        {
            "attributeName": "JPTASK",
            "required": false,
            "persistent": false,
            "title": "Task",
            "remarks": "Job Plan Task Number",
            "sameAsAttribute": "TASKID",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "Description of Task in Job Plan",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "JOBTASK"
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
            "attributeName": "JOBTASKID",
            "required": false,
            "persistent": false,
            "title": "JOBTASKID",
            "remarks": "Unique Identifier to the task",
            "sameAsAttribute": "JOBTASKID",
            "sameAsObject": "JOBTASK"
        },
        {
            "attributeName": "JOBPLANID",
            "required": false,
            "persistent": false,
            "title": "JOBPLANID",
            "remarks": "Unique JobPlan Identifier",
            "sameAsAttribute": "JOBPLANID",
            "sameAsObject": "JOBPLAN"
        },
        {
            "attributeName": "NESTEDJPNUM",
            "required": false,
            "persistent": false,
            "title": "Nested Job Plan",
            "remarks": "Identifies the Job Plan that will be applied to the child Work Order that is created for this task.",
            "sameAsAttribute": "JPNUM",
            "sameAsObject": "JOBPLAN"
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
        },
        {
            "attributeName": "CONDITIONNUM",
            "required": false,
            "persistent": false,
            "title": "Condition",
            "remarks": "You can set a condition that is evaluated when a task is copied to a work order. If the condition is met, the task and its corresponding resources (if their conditions are met) are copied to the work order. If the condition is not met, none of the components of the job plan are copied to the work order.",
            "sameAsAttribute": "CONDITIONNUM",
            "sameAsObject": "CONDITION"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "CONDITION",
            "target": "CONDITION",
            "remarks": "Relationship from Job Plan Task Lookup to Condition.",
            "whereClause": "conditionnum = :conditionnum",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "JPTASKLOOKUP",
            "source": "JOBPLAN",
            "remarks": "Relationship from the jobplan to its tasks.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}