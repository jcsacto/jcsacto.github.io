mos = {
    "objectName": "JPTASKRELATION",
    "className": "psdi.app.jobplan.JpTaskRelationSet",
    "description": "Job Plan task precedence",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "JPTASKRELATIONID",
    "primaryKeyColumns": [
        "JPTASKRELATIONID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ORGANIZATION",
            "targetObject": "JPTASKRELATION",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "JPTASKRELATION",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "JPTASKRELATIONID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "JPNUM",
            "required": true,
            "persistent": true,
            "title": "Job Plan",
            "remarks": "Identifies the Job Plan",
            "sameAsAttribute": "JPNUM",
            "sameAsObject": "JOBPLAN"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "Site Identifier",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "JOBPLANID",
            "required": true,
            "persistent": true,
            "title": "JOBPLANID",
            "remarks": "Unique id to the job plan",
            "sameAsAttribute": "JOBPLANID",
            "sameAsObject": "JOBPLAN"
        },
        {
            "attributeName": "JPTASK",
            "required": true,
            "persistent": true,
            "title": "Task",
            "remarks": "The job plan task that owns this row",
            "sameAsAttribute": "TASKID",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "PREDJPNUM",
            "required": true,
            "persistent": true,
            "title": "Predecessor Job Plan",
            "remarks": "Identifies the predecessor job plan",
            "sameAsAttribute": "JPNUM",
            "sameAsObject": "JOBPLAN"
        },
        {
            "attributeName": "PREDJPTASK",
            "required": true,
            "persistent": true,
            "title": "Predecessor Task",
            "remarks": "Identifies the predecessor task",
            "sameAsAttribute": "TASKID",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "RELTYPE",
            "required": true,
            "persistent": true,
            "title": "Relationship",
            "remarks": "The dependency between work records which determines scheduling order.  This includes Finish to Start, Finish to Finish, Start to Start, and Start to Finish.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LEADLAGHOURS",
            "required": false,
            "persistent": true,
            "title": "Lead/Lag Hours",
            "remarks": "The overlap of, or delay between, work records that have a dependency.  Enter a positive duration for a Lag (delay).  Enter a negative duration for a Lead (overlap).",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "JPTASKRELATION",
            "source": "JOBPLAN",
            "remarks": "Relationship from the job plan task to its predecessor tasks.",
            "whereClause": "jobplanid=:jobplanid",
            "cardinality": "MULTIPLE"
        }
    ]
}