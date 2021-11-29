mos = {
    "objectName": "JOBLABOR",
    "className": "psdi.app.jobplan.JobLaborSet",
    "description": "The JOBLABOR Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "JOBLABORID",
    "primaryKeyColumns": [
        "JOBLABORID"
    ],
    "logicalRelationships": [
        {
            "objectName": "JOBLABOR",
            "targetObject": "JOBITEM",
            "parentKeys": "JOBLABORID",
            "targetKeys": "JOBLABORREF",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Job Labor",
            "longDescription": null
        },
        {
            "objectName": "JOBLABOR",
            "targetObject": "JOBMATERIAL",
            "parentKeys": "JOBLABORID",
            "targetKeys": "JOBLABORREF",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Job Labor",
            "longDescription": null
        },
        {
            "objectName": "JOBLABOR",
            "targetObject": "JOBSERVICE",
            "parentKeys": "JOBLABORID",
            "targetKeys": "JOBLABORREF",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Job Labor",
            "longDescription": null
        },
        {
            "objectName": "JOBLABOR",
            "targetObject": "JOBTOOL",
            "parentKeys": "JOBLABORID",
            "targetKeys": "JOBLABORREF",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Job Labor",
            "longDescription": null
        },
        {
            "objectName": "JOBLABOR",
            "targetObject": "PMFORECASTLABOR",
            "parentKeys": "JOBLABORID",
            "targetKeys": "JOBLABORID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Job Labor",
            "longDescription": null
        },
        {
            "objectName": "JOBLABOR",
            "targetObject": "WPITEM",
            "parentKeys": "JOBLABORID",
            "targetKeys": "WPLABORREF",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Job Labor",
            "longDescription": null
        },
        {
            "objectName": "JOBLABOR",
            "targetObject": "WPMATERIAL",
            "parentKeys": "JOBLABORID",
            "targetKeys": "WPLABORREF",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Job Labor",
            "longDescription": null
        },
        {
            "objectName": "JOBLABOR",
            "targetObject": "WPSERVICE",
            "parentKeys": "JOBLABORID",
            "targetKeys": "WPLABORREF",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Job Labor",
            "longDescription": null
        },
        {
            "objectName": "JOBLABOR",
            "targetObject": "WPTOOL",
            "parentKeys": "JOBLABORID",
            "targetKeys": "WPLABORREF",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Job Labor",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "AMCREW",
            "targetObject": "JOBLABOR",
            "parentKeys": "ORGID, AMCREW",
            "targetKeys": "ORGID, AMCREW",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew",
            "longDescription": null
        },
        {
            "objectName": "AMCREWT",
            "targetObject": "JOBLABOR",
            "parentKeys": "AMCREWTYPE, ORGID",
            "targetKeys": "AMCREWTYPE, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Type",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "JOBLABOR",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor on Job Labor",
            "longDescription": null
        },
        {
            "objectName": "CONDITION",
            "targetObject": "JOBLABOR",
            "parentKeys": "CONDITIONNUM",
            "targetKeys": "CONDITIONNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Condition",
            "longDescription": null
        },
        {
            "objectName": "CRAFT",
            "targetObject": "JOBLABOR",
            "parentKeys": "CRAFT, ORGID",
            "targetKeys": "CRAFT, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Craft",
            "longDescription": null
        },
        {
            "objectName": "CRAFTSKILL",
            "targetObject": "JOBLABOR",
            "parentKeys": "CRAFT, SKILLLEVEL, ORGID",
            "targetKeys": "CRAFT, SKILLLEVEL, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Craft Skill Level",
            "longDescription": null
        },
        {
            "objectName": "JOBPLAN",
            "targetObject": "JOBLABOR",
            "parentKeys": "JPNUM, ORGID, SITEID, PLUSCREVNUM",
            "targetKeys": "JPNUM, ORGID, SITEID, PLUSCJPREVNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Job Plan",
            "longDescription": null
        },
        {
            "objectName": "LABOR",
            "targetObject": "JOBLABOR",
            "parentKeys": "ORGID, LABORCODE",
            "targetKeys": "ORGID, LABORCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Labor",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "JOBLABOR",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "JOBLABOR",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "CREWWORKGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Work Group",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "JOBLABOR",
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
            "attributeName": "JPNUM",
            "required": true,
            "persistent": true,
            "title": "Job Plan",
            "remarks": "Reference For Jobplan Table",
            "sameAsAttribute": "JPNUM",
            "sameAsObject": "JOBPLAN"
        },
        {
            "attributeName": "LABORCODE",
            "required": false,
            "persistent": true,
            "title": "Labor",
            "remarks": "Identification Number For Craft",
            "sameAsAttribute": "LABORCODE",
            "sameAsObject": "LABOR"
        },
        {
            "attributeName": "LABORHRS",
            "required": true,
            "persistent": true,
            "title": "Hours",
            "remarks": "Labor Hours Required For A Job Plan Operation",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "JL1",
            "required": false,
            "persistent": true,
            "title": "Jl1",
            "remarks": "Extra Field",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "JL2",
            "required": false,
            "persistent": true,
            "title": "Jl2",
            "remarks": "Extra Field",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "JL3",
            "required": false,
            "persistent": true,
            "title": "Jl3",
            "remarks": "Extra Field",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "JL4",
            "required": false,
            "persistent": true,
            "title": "Jl4",
            "remarks": "Extra Field",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "JL5",
            "required": false,
            "persistent": true,
            "title": "Jl5",
            "remarks": "Extra Field",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "JL6",
            "required": false,
            "persistent": true,
            "title": "Jl6",
            "remarks": "Extra Field",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VENDOR",
            "required": false,
            "persistent": true,
            "title": "Vendor",
            "remarks": "Company code for Contractor who is a supplier of labor resources.",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "JL7",
            "required": false,
            "persistent": true,
            "title": "JL7",
            "remarks": "Extra Field",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "JL8",
            "required": false,
            "persistent": true,
            "title": "JL8",
            "remarks": "Extra Field",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "JL9",
            "required": false,
            "persistent": true,
            "title": "JL9",
            "remarks": "Extra Field",
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
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "Site Identifier",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "JPTASK",
            "required": false,
            "persistent": true,
            "title": "Task",
            "remarks": "Job Plan Task Number",
            "sameAsAttribute": "TASKID",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "PAYRATE",
            "required": false,
            "persistent": false,
            "title": "Rate",
            "remarks": "PAYRATE",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LINECOST",
            "required": false,
            "persistent": false,
            "title": "Line Cost",
            "remarks": "LINECOST",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "JOBLABORID",
            "required": true,
            "persistent": true,
            "title": "JOBLABORID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "JOBPLANID",
            "required": true,
            "persistent": true,
            "title": "JOBPLANID",
            "remarks": "Unique JobPlan Identifier",
            "sameAsAttribute": "JOBPLANID",
            "sameAsObject": "JOBPLAN"
        },
        {
            "attributeName": "CRAFT",
            "required": false,
            "persistent": true,
            "title": "Craft",
            "remarks": "Craft",
            "sameAsAttribute": "CRAFT",
            "sameAsObject": "CRAFT"
        },
        {
            "attributeName": "SKILLLEVEL",
            "required": false,
            "persistent": true,
            "title": "Skill Level",
            "remarks": "Skill Level",
            "sameAsAttribute": "SKILLLEVEL",
            "sameAsObject": "CRAFTSKILL"
        },
        {
            "attributeName": "CONTRACTNUM",
            "required": false,
            "persistent": true,
            "title": "Labor Contract",
            "remarks": "Contract",
            "sameAsAttribute": "CONTRACTNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "QUANTITY",
            "required": false,
            "persistent": true,
            "title": "Quantity",
            "remarks": "Quantity",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCJPREVNUM",
            "required": true,
            "persistent": true,
            "title": "Job Plan Revision Number",
            "remarks": "Revision number of associated job plan.",
            "sameAsAttribute": "PLUSCREVNUM",
            "sameAsObject": "JOBPLAN"
        },
        {
            "attributeName": "CONDITIONNUM",
            "required": false,
            "persistent": true,
            "title": "Set a Condition",
            "remarks": "You can set a condition that is evaluated when planned labor is copied to a work order.The planned labor is copied only when the specified condition is met. You enable conditions for job plans in the Organizations application. You create the conditions that are used in job plans in the Conditional Expression Manager application.",
            "sameAsAttribute": "CONDITIONNUM",
            "sameAsObject": "CONDITION"
        },
        {
            "attributeName": "AMCREW",
            "required": false,
            "persistent": true,
            "title": "Crew",
            "remarks": "Identifies the crew that performed the work.",
            "sameAsAttribute": "AMCREW",
            "sameAsObject": "AMCREW"
        },
        {
            "attributeName": "AMCREWTYPE",
            "required": false,
            "persistent": true,
            "title": "Crew Type",
            "remarks": "The type of crew that should perform the work.",
            "sameAsAttribute": "AMCREWTYPE",
            "sameAsObject": "AMCREWT"
        },
        {
            "attributeName": "CREWWORKGROUP",
            "required": false,
            "persistent": true,
            "title": "Crew Work Group",
            "remarks": "The service center or resource pool that will perform the work.",
            "sameAsAttribute": "PERSONGROUP",
            "sameAsObject": "PERSONGROUP"
        },
        {
            "attributeName": "APPTREQUIRED",
            "required": true,
            "persistent": true,
            "title": "Appointment Required",
            "remarks": "Indicates if an appointment is required for the labor record. If the labor record is assigned to a task, this value is inherited from the task. If the labor record is not assigned to a task,  this value is inherited from the job plan.",
            "sameAsAttribute": "APPTREQUIRED",
            "sameAsObject": "JOBPLAN"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "AMCREW",
            "target": "AMCREW",
            "remarks": "Relationship to the Crew table.",
            "whereClause": "amcrew=:amcrew and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "AMCREWLABPOS",
            "target": "AMCREWLABPOS",
            "remarks": "Relationship to the AMCREWLABPOS table.",
            "whereClause": "amcrew=:amcrew and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "AMCREWT",
            "target": "AMCREWT",
            "remarks": "Relationship to the Crew Type table.",
            "whereClause": "amcrewtype=:amcrewtype and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "AMCREWTOOLSQ",
            "target": "AMCREWTOOLSQ",
            "remarks": "Relationship to the AMCREWTOOLSQ table.",
            "whereClause": "amcrew=:amcrew and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "AMCTCRAFT",
            "target": "AMCTCRAFT",
            "remarks": "Relationship to the Crew Type Crafts table.",
            "whereClause": "amcrewtype=:amcrewtype and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "AMCTTOOL",
            "target": "AMCTTOOL",
            "remarks": "Relationship to the Crew Type Tools table.",
            "whereClause": "amcrewtype=:amcrewtype and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "COMPANY",
            "target": "COMPANIES",
            "remarks": "Relationship to the Job Labors vendor records, used to find the vendor records for a given Job Labor.",
            "whereClause": "company = :vendor and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONDITION",
            "target": "CONDITION",
            "remarks": "Relationship from Job Labor to Condition.",
            "whereClause": "conditionnum = :conditionnum",
            "cardinality": null
        },
        {
            "name": "CRAFT",
            "target": "CRAFT",
            "remarks": "Relationship to the Job Labors craft record, used to find the craft set for a given Job Labor.",
            "whereClause": "craft = :craft and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CRAFTSKILL",
            "target": "CRAFTSKILL",
            "remarks": "Relationship to the Job Labors craftskill record, used to find the craft skill for a given Job Labor.",
            "whereClause": "craft = :craft and orgid=:orgid and (skilllevel=:skilllevel or ((skilllevel is null or skilllevel = '') and (:skilllevel is null or :skilllevel = '')))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABOR",
            "target": "LABOR",
            "remarks": "Relationship to the Job Labor's labor records, used to find the labor records for a given Job Labor. (labor.laborcode=joblabor.laborcode). The resulting set will contain zero or one record.",
            "whereClause": "laborcode=:laborcode and orgid=:orgid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "JOBLABOR",
            "source": "AMCREW",
            "remarks": "Relationship to check if the crew is being used by a JobPlan.",
            "whereClause": "amcrew=:amcrew and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "JOBLABOR",
            "source": "AMCREWT",
            "remarks": "Relationship to check if the crew type is being used by a JobPlan.",
            "whereClause": "amcrewtype=:amcrewtype and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "JOBLABOR",
            "source": "JOBPLAN",
            "remarks": "Relationship to the Job Plan's JobLabor records, used to find all the labor records for a given Job Plan. (joblabor.jpnum=jobplan.jpnum). The resulting set will contain zero or more records.",
            "whereClause": "jobplanid=:jobplanid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "JOBLABOR",
            "source": "PMFORECASTLABOR",
            "remarks": "Relationship to JOBLABOR table.",
            "whereClause": "joblaborid=:joblaborid",
            "cardinality": null
        },
        {
            "name": "WPLABOR",
            "source": "WOGENFORECAST",
            "remarks": "Relationship to the JobLabor information for this work order information. Zero to many members.",
            "whereClause": "(jpnum = :jpnum and jptask is null) or (jpnum = :parentjp and jptask = :taskid) and (siteid=:siteid or siteid is null)",
            "cardinality": "UNDEFINED"
        }
    ]
}