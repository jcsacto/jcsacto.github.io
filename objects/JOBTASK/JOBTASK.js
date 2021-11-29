mos = {
    "objectName": "JOBTASK",
    "className": "psdi.app.jobplan.JobTaskSet",
    "description": "The JobTask Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "JOBTASKID",
    "primaryKeyColumns": [
        "JPNUM",
        "JPTASK",
        "ORGID",
        "SITEID",
        "PLUSCJPREVNUM"
    ],
    "logicalRelationships": [
        {
            "objectName": "JOBTASK",
            "targetObject": "JOBTASKSPEC",
            "parentKeys": "JOBTASKID",
            "targetKeys": "REFOBJECTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Job Task",
            "longDescription": null
        },
        {
            "objectName": "JOBTASK",
            "targetObject": "WOACTIVITY",
            "parentKeys": "JOBTASKID",
            "targetKeys": "JOBTASKID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Job Task",
            "longDescription": null
        },
        {
            "objectName": "JOBTASK",
            "targetObject": "WOCHANGE",
            "parentKeys": "JOBTASKID",
            "targetKeys": "JOBTASKID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Job Task",
            "longDescription": null
        },
        {
            "objectName": "JOBTASK",
            "targetObject": "WORELEASE",
            "parentKeys": "JOBTASKID",
            "targetKeys": "JOBTASKID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Job Task",
            "longDescription": null
        },
        {
            "objectName": "JOBTASK",
            "targetObject": "WORKORDER",
            "parentKeys": "JOBTASKID",
            "targetKeys": "JOBTASKID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Job Task used to create Work Order",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "ACTION",
            "targetObject": "JOBTASK",
            "parentKeys": "ACTION",
            "targetKeys": "FLOWACTION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Flow Action",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "JOBTASK",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CONDITION",
            "targetObject": "JOBTASK",
            "parentKeys": "CONDITIONNUM",
            "targetKeys": "CONDITIONNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Condition to include the Task",
            "longDescription": null
        },
        {
            "objectName": "JOBPLAN",
            "targetObject": "JOBTASK",
            "parentKeys": "JPNUM, ORGID, SITEID, PLUSCREVNUM",
            "targetKeys": "JPNUM, ORGID, SITEID, PLUSCJPREVNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Previous Job Plan",
            "longDescription": null
        },
        {
            "objectName": "JOBPLAN",
            "targetObject": "JOBTASK",
            "parentKeys": "JPNUM, ORGID, SITEID, PLUSCREVNUM",
            "targetKeys": "JPNUM, ORGID, SITEID, PLUSCNESTEDJPREVNUM",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Job Plan",
            "longDescription": null
        },
        {
            "objectName": "JOBPLAN",
            "targetObject": "JOBTASK",
            "parentKeys": "JPNUM, ORGID, SITEID, PLUSCREVNUM",
            "targetKeys": "NESTEDJPNUM, ORGID, SITEID, PLUSCJPREVNUM",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Job Plan",
            "longDescription": null
        },
        {
            "objectName": "JOBPLAN",
            "targetObject": "JOBTASK",
            "parentKeys": "JPNUM, ORGID, SITEID, PLUSCREVNUM",
            "targetKeys": "NESTEDJPNUM, ORGID, SITEID, PLUSCNESTEDJPREVNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Nested Job Plan",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "JOBTASK",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "MAXLAUNCHENTRY",
            "targetObject": "JOBTASK",
            "parentKeys": "LAUNCHENTRYNAME",
            "targetKeys": "LAUNCHENTRYNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Launch Entry",
            "longDescription": null
        },
        {
            "objectName": "METER",
            "targetObject": "JOBTASK",
            "parentKeys": "METERNAME",
            "targetKeys": "METERNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Meter where to take a measurement.",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "JOBTASK",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "JOBTASK",
            "parentKeys": "PERSONID",
            "targetKeys": "OWNER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Owner of Work",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "JOBTASK",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "ASSIGNEDOWNERGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Owner Group of Work",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "JOBTASK",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "OWNERGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Owner Group of Work",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "JOBTASK",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "CREWWORKGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Group for Work",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "JOBTASK",
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
            "remarks": "Job Plan Number The Task Refers To",
            "sameAsAttribute": "JPNUM",
            "sameAsObject": "JOBPLAN"
        },
        {
            "attributeName": "JPTASK",
            "required": true,
            "persistent": true,
            "title": "Task",
            "remarks": "Job Plan Task Number",
            "sameAsAttribute": "TASKID",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Description of Task in Job Plan",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TASKDURATION",
            "required": true,
            "persistent": true,
            "title": "Duration",
            "remarks": "Estimated Duration for the task in hours",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "JO1",
            "required": false,
            "persistent": true,
            "title": "Jo1",
            "remarks": "Extra Field",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "JO2",
            "required": false,
            "persistent": true,
            "title": "Jo2",
            "remarks": "Extra Field",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "JO3",
            "required": false,
            "persistent": true,
            "title": "Jo3",
            "remarks": "Extra Field",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "JO4",
            "required": false,
            "persistent": true,
            "title": "Jo4",
            "remarks": "Extra Field",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "JO5",
            "required": false,
            "persistent": true,
            "title": "Jo5",
            "remarks": "Extra Field",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "JO6",
            "required": false,
            "persistent": true,
            "title": "Jo6",
            "remarks": "Extra Field",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "JO7",
            "required": false,
            "persistent": true,
            "title": "Jo7",
            "remarks": "Extra Field",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "JO8",
            "required": false,
            "persistent": true,
            "title": "Jo8",
            "remarks": "Extra Field",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "TASKSEQUENCE",
            "required": false,
            "persistent": true,
            "title": "Sequence",
            "remarks": "Task Sequence",
            "sameAsAttribute": "WOSEQUENCE",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Long Description for Description of Task in Job Plan",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "METERNAME",
            "required": false,
            "persistent": true,
            "title": "Meter",
            "remarks": "Generic meter name to associate with the job task. Point Number on a work order is established through the combination of this Meter Name and the work order's asset or location.",
            "sameAsAttribute": "METERNAME",
            "sameAsObject": "METER"
        },
        {
            "attributeName": "JOBTASKID",
            "required": true,
            "persistent": true,
            "title": "JOBTASKID",
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
            "attributeName": "LANGCODE",
            "required": true,
            "persistent": true,
            "title": "Language Code",
            "remarks": "Language Column",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        },
        {
            "attributeName": "HASLD",
            "required": true,
            "persistent": true,
            "title": "Has Long Description",
            "remarks": "Boolean flag to indicate if there is any long description for this record",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NESTEDJPNUM",
            "required": false,
            "persistent": true,
            "title": "Nested Job Plan",
            "remarks": "Identifies the Job Plan that will be applied to the child Work Order that is created for this task.",
            "sameAsAttribute": "JPNUM",
            "sameAsObject": "JOBPLAN"
        },
        {
            "attributeName": "CLASSSTRUCTUREID",
            "required": false,
            "persistent": true,
            "title": "Class Structure",
            "remarks": "Class Structure Identifier",
            "sameAsAttribute": "CLASSSTRUCTUREID",
            "sameAsObject": "CLASSSTRUCTURE"
        },
        {
            "attributeName": "NESTEDJOBPLANID",
            "required": false,
            "persistent": true,
            "title": "Nested JobPlanId",
            "remarks": "unique identifier for this job task's nested job plan.",
            "sameAsAttribute": "JOBPLANID",
            "sameAsObject": "JOBPLAN"
        },
        {
            "attributeName": "OWNER",
            "required": false,
            "persistent": true,
            "title": "Owner",
            "remarks": "The person who will be responsible for the work order created with this job plan",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "OWNERGROUP",
            "required": false,
            "persistent": true,
            "title": "Owner Group",
            "remarks": "The person group who will be responsible for the work order created with this job plan",
            "sameAsAttribute": "PERSONGROUP",
            "sameAsObject": "PERSONGROUP"
        },
        {
            "attributeName": "FLOWACTION",
            "required": false,
            "persistent": true,
            "title": "Flow Action",
            "remarks": "The action to be performed (if any) when the workorder is started via process flow control",
            "sameAsAttribute": "ACTION",
            "sameAsObject": "ACTION"
        },
        {
            "attributeName": "FLOWCONTROLLED",
            "required": true,
            "persistent": true,
            "title": "Flow Controlled",
            "remarks": "Flag used to indicate a record's participation in flow control.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SUSPENDFLOW",
            "required": true,
            "persistent": true,
            "title": "Suspend Flow Control",
            "remarks": "Flag used to suspend and resume flow control on a parent record.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FLOWACTIONASSIST",
            "required": true,
            "persistent": true,
            "title": "Flow Action Assist",
            "remarks": "Suppresses the automatic firing of the action in flow control",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LAUNCHENTRYNAME",
            "required": false,
            "persistent": true,
            "title": "Launch Entry Name",
            "remarks": "Launch Entry",
            "sameAsAttribute": "LAUNCHENTRYNAME",
            "sameAsObject": "MAXLAUNCHENTRY"
        },
        {
            "attributeName": "PREDECESSORTASKS",
            "required": false,
            "persistent": true,
            "title": "Predecessors",
            "remarks": "A non-persistent field to display the tasks predecessor tasks.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSIGNEDOWNERGROUP",
            "required": false,
            "persistent": true,
            "title": "Assigned Owner Group",
            "remarks": "Identifies the owner group who will be responsible for the work order created with this job task. Use the Select Action menu to assign an owner group. You can enter a value either in this field or in the Owner field.",
            "sameAsAttribute": "PERSONGROUP",
            "sameAsObject": "PERSONGROUP"
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
            "attributeName": "PLUSCREVSTATUS",
            "required": false,
            "persistent": true,
            "title": "Job Task change status in revision",
            "remarks": "Tells you when a job task has been added or changed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCNESTEDJPREVNUM",
            "required": false,
            "persistent": true,
            "title": "Nested Job Plan Revision Number",
            "remarks": "Revision number of associated nested job plan.",
            "sameAsAttribute": "PLUSCREVNUM",
            "sameAsObject": "JOBPLAN"
        },
        {
            "attributeName": "CONDITIONNUM",
            "required": false,
            "persistent": true,
            "title": "Set a Condition",
            "remarks": "You can set a condition that is evaluated when a task is copied to a work order. If the condition is met, the task and its corresponding resources (if their conditions are met) are copied to the work order. If the condition is not met, none of the components of the job plan are copied to the work order. You enable conditions for job plans in the Organizations application. You create the conditions that are used in job plans in the Conditional Expression Manager application.",
            "sameAsAttribute": "CONDITIONNUM",
            "sameAsObject": "CONDITION"
        },
        {
            "attributeName": "APPTREQUIRED",
            "required": true,
            "persistent": true,
            "title": "Appointment Required",
            "remarks": "Indicates if an appointment is required for the task. This value is inherited from the job plan. Labor records that are assigned to this task inherit this value, but can be modified.",
            "sameAsAttribute": "APPTREQUIRED",
            "sameAsObject": "JOBPLAN"
        },
        {
            "attributeName": "INCTASKSINSCHED",
            "required": true,
            "persistent": true,
            "title": "Include in Schedule",
            "remarks": "Indicates this job task will be included in the schedule view.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CREWWORKGROUP",
            "required": false,
            "persistent": true,
            "title": "Crew Work Group",
            "remarks": "The identifier of the person group that is used in the Crews applications. You define crew work groups in the Person Groups application.",
            "sameAsAttribute": "PERSONGROUP",
            "sameAsObject": "PERSONGROUP"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "CLASSSPEC",
            "target": "CLASSSPEC",
            "remarks": "Relationship to the ClassSpec table, used to find all class specification records for a given jobtask (classspec.classstructureid = jobtask.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSTRUCTURE",
            "target": "CLASSSTRUCTURE",
            "remarks": "Relationship to the classstructure table, used to find the classstructure records for a given jobtask (classstructure.classstructureid=jobtask.classstructureid). The resulting set will contain zero or one object.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONDITION",
            "target": "CONDITION",
            "remarks": "Relationship from Job Tasks to Condition.",
            "whereClause": "conditionnum = :conditionnum",
            "cardinality": null
        },
        {
            "name": "DOCLINKS",
            "target": "DOCLINKS",
            "remarks": "Relationship to the DocLinks records, used to find all documents for a given Job Task. (ownertable = 'JOBTASK' and ownerid in (select jobtaskid from jobtask where jobplanid = :jobplanid)). The resulting set will contain zero or more records.",
            "whereClause": "(ownertable = 'JOBTASK' and ownerid = :jobtaskid) or (ownertable='JOBPLAN' and ownerid in (select jobplanid from jobtask where jobplanid=:jobplanid)) or (ownertable='ITEM' and ownerid in (select item.itemid from item, jobitem where item.itemnum=jobitem.itemnum and item.itemsetid=jobitem.itemsetid and jobitem.jobplanid=:jobplanid and jobitem.jptask=:jptask)) or (ownertable='LOCATIONS' and ownerid in (select locations.locationsid from locations, jobitem where locations.location = jobitem.location and locations.siteid = jobitem.siteid and jobitem.jobplanid=:jobplanid and jobitem.jptask=:jptask))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "JOBPLAN",
            "target": "JOBPLAN",
            "remarks": "Relationship to the jobplan table, used to find the jobplan records for a given nested jobplan for a given jobtask.",
            "whereClause": "jpnum=:nestedjpnum and ((orgid=:orgid and siteid=:siteid) or (orgid=:orgid and siteid is null) or (orgid is null and siteid is null) or (:orgid is null and :siteid is null) or (:orgid is null)) and status in (select value from synonymdomain where domainid='JOBPLANSTATUS' and maxvalue ='ACTIVE')",
            "cardinality": null
        },
        {
            "name": "JOBPLANCLASSDEFAULT",
            "target": "JOBPLANCLASS",
            "remarks": "Relationship to the JobPlanClass table, used to find the default JobPlanClass for this JobTask. (jobplanclass.jobplanid=jobtask.nestedjobplanid and jobplanclass.isdefault=1). The resulting set will contain zero or one object.",
            "whereClause": "jobplanid=:nestedjobplanid and isdefault=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "JOBTASKSPEC",
            "target": "JOBTASKSPEC",
            "remarks": "Relationship to the jobtaskspec table, used to find the jobtaskspec records for a given jobtask (jobtask.jobtaskid=jobtaskspec.refobjectid). The resulting set will contain zero or more objects.",
            "whereClause": "refobjectid=:jobtaskid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "JOBTASKSPECCLASS",
            "target": "JOBTASKSPEC",
            "remarks": "Relationship to the jobtaskspec table, used to find the jobtaskspec records for a given jobtask (jobtask.jpnum=jobtaskspec.jpnum and jobtask.jptask=jobtaskspec.jptask and jobtask.classstructureid=jobtaskspec.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "jpnum=:jpnum and jptask=:jptask and pluscjprevnum =:pluscjprevnum and classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "JOBTASK",
            "source": "CLASSSTRUCTURE",
            "remarks": "Relationship to the jobtask table, used to find the jobtask records for a given classstructure. (classstructure.classstructureid = jobtask.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "JOBTASK_ONLY",
            "source": "CLASSSTRUCTURE",
            "remarks": "Relationship to the jobtask table, used to find the jobtask records for a given classstructure.(classstructure.classstructureid =jobtask.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid =:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "JOBTASK",
            "source": "JOBPLAN",
            "remarks": "Relationship to the Job Plan's JobTask records, used to find all the task records for a given Job Plan. (jobtask.jpnum=jobplan.jpnum). The resulting set will contain zero or more records.",
            "whereClause": "jobplanid=:jobplanid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "PLUSCJPREVHISTLINE",
            "source": "JOBPLAN",
            "remarks": "Relationship for the Revision History window. Selects all revisions of the parent job plan.",
            "whereClause": "jpnum=:jpnum and ((orgid=:orgid and siteid=:siteid) or (orgid=:orgid and siteid is null) or (orgid is null and siteid is null)) and pluscjprevnum in (:pluscrevnum, (select max(pluscjprevnum) from jobtask where jpnum=:jpnum and pluscjprevnum < :pluscrevnum)) and jptask in (select jptask from jobtask where jpnum=:jpnum and pluscrevstatus in (select value from synonymdomain where maxvalue in ('ADDED','CHANGED'))  and pluscjprevnum = :pluscrevnum)",
            "cardinality": null
        },
        {
            "name": "PLUSCJOBTASK",
            "source": "JOBPLAN",
            "remarks": "jobplanid=:jobplanid",
            "whereClause": "jobplanid=:jobplanid",
            "cardinality": null
        },
        {
            "name": "JOBTASK",
            "source": "METER",
            "remarks": "Relationship to the JobTask table, used to find all jobtasks having this meter. (jobtask.metername = meter.metername). The resulting set will contain zero or more objects.",
            "whereClause": "metername = :metername",
            "cardinality": "UNDEFINED"
        }
    ]
}