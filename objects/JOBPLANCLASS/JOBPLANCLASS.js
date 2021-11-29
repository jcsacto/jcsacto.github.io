mos = {
    "objectName": "JOBPLANCLASS",
    "className": "psdi.app.jobplan.JobPlanClassSet",
    "description": "Different job plan classes (CHANGE,RELEASE,etc)",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "JOBPLANCLASSID",
    "primaryKeyColumns": [
        "JOBPLANID",
        "WOCLASS"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "JOBPLAN",
            "targetObject": "JOBPLANCLASS",
            "parentKeys": "JOBPLANID",
            "targetKeys": "JOBPLANID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Job Plan Classes",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "JOBPLANCLASSID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "JOBPLANID",
            "required": true,
            "persistent": true,
            "title": "JobPlanID",
            "remarks": "Unique identifier of this JobPlanClass' JobPlan",
            "sameAsAttribute": "JOBPLANID",
            "sameAsObject": "JOBPLAN"
        },
        {
            "attributeName": "WOCLASS",
            "required": true,
            "persistent": true,
            "title": "Default WO Class",
            "remarks": "Class available to the specified job plan.",
            "sameAsAttribute": "WOCLASS",
            "sameAsObject": "WORKTYPE"
        },
        {
            "attributeName": "ISDEFAULT",
            "required": true,
            "persistent": true,
            "title": "Default",
            "remarks": "Is this the class used when work order based records are generated based on this Job Plan.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONTENTUID",
            "required": false,
            "persistent": true,
            "title": "Content ID",
            "remarks": "Content ID",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "WOCLASSDESC",
            "target": "SYNONYMDOMAIN",
            "remarks": "Relationship to synonymdomain table, used to find description for the woclass, it will contain one object",
            "whereClause": "domainid='WOCLASS' and value=:woclass",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "JOBPLANCLASS",
            "source": "JOBPLAN",
            "remarks": "Relationship to the JobPlanClass table, used to find the JobPlanClasses for this JobPlan.(jobplanclass.jobplanid=jobplan.jobplanid). The resulting set will contain zero or more objects.",
            "whereClause": "jobplanid=:jobplanid",
            "cardinality": "SINGLE"
        },
        {
            "name": "JOBPLANCLASSDEFAULT",
            "source": "JOBPLAN",
            "remarks": "Relationship to the JobPlanClass table, used to find the default JobPlanClass for this JobPlan. (jobplanclass.jobplanid=jobplan.jobplanid and jobplanclass.isdefault=1). The resulting set will contain zero or one object.",
            "whereClause": "jobplanid=:jobplanid and isdefault=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "JOBPLANCLASSDEFAULT",
            "source": "JOBTASK",
            "remarks": "Relationship to the JobPlanClass table, used to find the default JobPlanClass for this JobTask. (jobplanclass.jobplanid=jobtask.nestedjobplanid and jobplanclass.isdefault=1). The resulting set will contain zero or one object.",
            "whereClause": "jobplanid=:nestedjobplanid and isdefault=1",
            "cardinality": "UNDEFINED"
        }
    ]
}