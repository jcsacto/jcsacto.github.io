mos = {
    "objectName": "JOBPLAN",
    "className": "psdi.app.jobplan.JobPlanSet",
    "description": "The JOBPLAN Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "JOBPLANID",
    "primaryKeyColumns": [
        "JPNUM",
        "ORGID",
        "SITEID",
        "PLUSCREVNUM"
    ],
    "logicalRelationships": [
        {
            "objectName": "JOBPLAN",
            "targetObject": "JOBITEM",
            "parentKeys": "JPNUM, ORGID, SITEID, PLUSCREVNUM",
            "targetKeys": "JPNUM, ORGID, SITEID, PLUSCJPREVNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Job Plan",
            "longDescription": null
        },
        {
            "objectName": "JOBPLAN",
            "targetObject": "JOBITEM",
            "parentKeys": "JPNUM, ORGID, SITEID, PLUSCREVNUM",
            "targetKeys": "JPNUM, ORGID, STORELOCSITE, PLUSCJPREVNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 2",
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
            "objectName": "JOBPLAN",
            "targetObject": "JOBMATERIAL",
            "parentKeys": "JPNUM, ORGID, SITEID, PLUSCREVNUM",
            "targetKeys": "JPNUM, ORGID, SITEID, PLUSCJPREVNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Job Plan",
            "longDescription": null
        },
        {
            "objectName": "JOBPLAN",
            "targetObject": "JOBMATERIAL",
            "parentKeys": "JPNUM, ORGID, SITEID, PLUSCREVNUM",
            "targetKeys": "JPNUM, ORGID, STORELOCSITE, PLUSCJPREVNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 5",
            "longDescription": null
        },
        {
            "objectName": "JOBPLAN",
            "targetObject": "JOBPLANCLASS",
            "parentKeys": "JOBPLANID",
            "targetKeys": "JOBPLANID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Job Plan Classes",
            "longDescription": null
        },
        {
            "objectName": "JOBPLAN",
            "targetObject": "JOBPLANSPEC",
            "parentKeys": "JPNUM, ORGID, SITEID, PLUSCREVNUM",
            "targetKeys": "JPNUM, ORGID, SITEID, PLUSCJPREVNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Job Plan",
            "longDescription": null
        },
        {
            "objectName": "JOBPLAN",
            "targetObject": "JOBSERVICE",
            "parentKeys": "JPNUM, ORGID, SITEID, PLUSCREVNUM",
            "targetKeys": "JPNUM, ORGID, SITEID, PLUSCJPREVNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Job Plan",
            "longDescription": null
        },
        {
            "objectName": "JOBPLAN",
            "targetObject": "JOBSERVICE",
            "parentKeys": "JPNUM, ORGID, SITEID, PLUSCREVNUM",
            "targetKeys": "JPNUM, ORGID, STORELOCSITE, PLUSCJPREVNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 8",
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
            "objectName": "JOBPLAN",
            "targetObject": "JOBTASKSPEC",
            "parentKeys": "JPNUM, ORGID, SITEID, PLUSCREVNUM",
            "targetKeys": "JPNUM, ORGID, SITEID, PLUSCJPREVNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Job Plan",
            "longDescription": null
        },
        {
            "objectName": "JOBPLAN",
            "targetObject": "JOBTOOL",
            "parentKeys": "JPNUM, ORGID, SITEID, PLUSCREVNUM",
            "targetKeys": "JPNUM, ORGID, SITEID, PLUSCJPREVNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Job Plan",
            "longDescription": null
        },
        {
            "objectName": "JOBPLAN",
            "targetObject": "JOBTOOL",
            "parentKeys": "JPNUM, ORGID, SITEID, PLUSCREVNUM",
            "targetKeys": "JPNUM, ORGID, STORELOCSITE, PLUSCJPREVNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 15",
            "longDescription": null
        },
        {
            "objectName": "JOBPLAN",
            "targetObject": "JPASSETSPLINK",
            "parentKeys": "JPNUM, ORGID, SITEID, PLUSCREVNUM",
            "targetKeys": "JPNUM, ORGID, SITEID, PLUSCJPREVNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Job Plan",
            "longDescription": null
        },
        {
            "objectName": "JOBPLAN",
            "targetObject": "PLUSCJPDATASHEET",
            "parentKeys": "JPNUM, ORGID, SITEID, PLUSCREVNUM",
            "targetKeys": "JPNUM, ORGID, SITEID, PLUSCJPREVNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Job Plan",
            "longDescription": null
        },
        {
            "objectName": "JOBPLAN",
            "targetObject": "PLUSCJPSTATUS",
            "parentKeys": "JPNUM, ORGID, SITEID, PLUSCREVNUM",
            "targetKeys": "JPNUM, ORGID, SITEID, JPREVNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Status History",
            "longDescription": null
        },
        {
            "objectName": "JOBPLAN",
            "targetObject": "WMASSIGNMENT",
            "parentKeys": "JPNUM, ORGID, SITEID, PLUSCREVNUM",
            "targetKeys": "JPNUM, ORGID, REPFACSITEID, PLUSCJPREVNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 19",
            "longDescription": null
        },
        {
            "objectName": "JOBPLAN",
            "targetObject": "WMASSIGNMENT",
            "parentKeys": "JPNUM, ORGID, SITEID, PLUSCREVNUM",
            "targetKeys": "JPNUM, ORGID, SITEID, PLUSCJPREVNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Job Plan",
            "longDescription": null
        },
        {
            "objectName": "JOBPLAN",
            "targetObject": "WOACTIVITY",
            "parentKeys": "JPNUM, ORGID, SITEID, PLUSCREVNUM",
            "targetKeys": "JPNUM, CALCORGID, REPFACSITEID, PLUSCJPREVNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 21",
            "longDescription": null
        },
        {
            "objectName": "JOBPLAN",
            "targetObject": "WOACTIVITY",
            "parentKeys": "JPNUM, ORGID, SITEID, PLUSCREVNUM",
            "targetKeys": "JPNUM, CALCORGID, SITEID, PLUSCJPREVNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 22",
            "longDescription": null
        },
        {
            "objectName": "JOBPLAN",
            "targetObject": "WOACTIVITY",
            "parentKeys": "JPNUM, ORGID, SITEID, PLUSCREVNUM",
            "targetKeys": "JPNUM, ORGID, REPFACSITEID, PLUSCJPREVNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 23",
            "longDescription": null
        },
        {
            "objectName": "JOBPLAN",
            "targetObject": "WOACTIVITY",
            "parentKeys": "JPNUM, ORGID, SITEID, PLUSCREVNUM",
            "targetKeys": "JPNUM, ORGID, SITEID, PLUSCJPREVNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Job Plan copied to Activity",
            "longDescription": null
        },
        {
            "objectName": "JOBPLAN",
            "targetObject": "WOCHANGE",
            "parentKeys": "JPNUM, ORGID, SITEID, PLUSCREVNUM",
            "targetKeys": "JPNUM, CALCORGID, REPFACSITEID, PLUSCJPREVNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 25",
            "longDescription": null
        },
        {
            "objectName": "JOBPLAN",
            "targetObject": "WOCHANGE",
            "parentKeys": "JPNUM, ORGID, SITEID, PLUSCREVNUM",
            "targetKeys": "JPNUM, CALCORGID, SITEID, PLUSCJPREVNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 26",
            "longDescription": null
        },
        {
            "objectName": "JOBPLAN",
            "targetObject": "WOCHANGE",
            "parentKeys": "JPNUM, ORGID, SITEID, PLUSCREVNUM",
            "targetKeys": "JPNUM, ORGID, REPFACSITEID, PLUSCJPREVNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 27",
            "longDescription": null
        },
        {
            "objectName": "JOBPLAN",
            "targetObject": "WOCHANGE",
            "parentKeys": "JPNUM, ORGID, SITEID, PLUSCREVNUM",
            "targetKeys": "JPNUM, ORGID, SITEID, PLUSCJPREVNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Job Plan copied to Change",
            "longDescription": null
        },
        {
            "objectName": "JOBPLAN",
            "targetObject": "WORELEASE",
            "parentKeys": "JPNUM, ORGID, SITEID, PLUSCREVNUM",
            "targetKeys": "JPNUM, CALCORGID, REPFACSITEID, PLUSCJPREVNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 29",
            "longDescription": null
        },
        {
            "objectName": "JOBPLAN",
            "targetObject": "WORELEASE",
            "parentKeys": "JPNUM, ORGID, SITEID, PLUSCREVNUM",
            "targetKeys": "JPNUM, CALCORGID, SITEID, PLUSCJPREVNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 30",
            "longDescription": null
        },
        {
            "objectName": "JOBPLAN",
            "targetObject": "WORELEASE",
            "parentKeys": "JPNUM, ORGID, SITEID, PLUSCREVNUM",
            "targetKeys": "JPNUM, ORGID, REPFACSITEID, PLUSCJPREVNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 31",
            "longDescription": null
        },
        {
            "objectName": "JOBPLAN",
            "targetObject": "WORELEASE",
            "parentKeys": "JPNUM, ORGID, SITEID, PLUSCREVNUM",
            "targetKeys": "JPNUM, ORGID, SITEID, PLUSCJPREVNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Job Plan applied to Work Order",
            "longDescription": null
        },
        {
            "objectName": "JOBPLAN",
            "targetObject": "WORKORDER",
            "parentKeys": "JPNUM, ORGID, SITEID, PLUSCREVNUM",
            "targetKeys": "JPNUM, CALCORGID, REPFACSITEID, PLUSCJPREVNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 33",
            "longDescription": null
        },
        {
            "objectName": "JOBPLAN",
            "targetObject": "WORKORDER",
            "parentKeys": "JPNUM, ORGID, SITEID, PLUSCREVNUM",
            "targetKeys": "JPNUM, CALCORGID, SITEID, PLUSCJPREVNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 34",
            "longDescription": null
        },
        {
            "objectName": "JOBPLAN",
            "targetObject": "WORKORDER",
            "parentKeys": "JPNUM, ORGID, SITEID, PLUSCREVNUM",
            "targetKeys": "JPNUM, ORGID, REPFACSITEID, PLUSCJPREVNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 35",
            "longDescription": null
        },
        {
            "objectName": "JOBPLAN",
            "targetObject": "WORKORDER",
            "parentKeys": "JPNUM, ORGID, SITEID, PLUSCREVNUM",
            "targetKeys": "JPNUM, ORGID, SITEID, PLUSCJPREVNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Job Plan applied to the Work Order",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "ACTION",
            "targetObject": "JOBPLAN",
            "parentKeys": "ACTION",
            "targetKeys": "FLOWACTION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Flow Action",
            "longDescription": null
        },
        {
            "objectName": "AMCREW",
            "targetObject": "JOBPLAN",
            "parentKeys": "ORGID, AMCREW",
            "targetKeys": "ORGID, AMCREW",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew",
            "longDescription": null
        },
        {
            "objectName": "CALENDAR",
            "targetObject": "JOBPLAN",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "ORGID, CALENDAR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Job Plan Calendar",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "JOBPLAN",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "LABOR",
            "targetObject": "JOBPLAN",
            "parentKeys": "LABORCODE",
            "targetKeys": "LABORCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Lead on this Job Plan",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "JOBPLAN",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "MAXLAUNCHENTRY",
            "targetObject": "JOBPLAN",
            "parentKeys": "LAUNCHENTRYNAME",
            "targetKeys": "LAUNCHENTRYNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Launch Entry",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "JOBPLAN",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "JOBPLAN",
            "parentKeys": "PERSONID",
            "targetKeys": "LABORCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Lead for Job Plan",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "JOBPLAN",
            "parentKeys": "PERSONID",
            "targetKeys": "OWNER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Owner of work orders created with this job plan.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "JOBPLAN",
            "parentKeys": "PERSONID",
            "targetKeys": "PLUSCCHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Last person who changed the job plan.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "JOBPLAN",
            "parentKeys": "PERSONID",
            "targetKeys": "SUPERVISOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Supervisor for job plan work.",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "JOBPLAN",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "ASSIGNEDOWNERGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Owner Group of work orders created with this job plan.",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "JOBPLAN",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "OWNERGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Owner Group of work orders created with this job plan.",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "JOBPLAN",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "PERSONGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person Group, copied to Work Order.",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "JOBPLAN",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "CREWWORKGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Resource pool that will perform the work order.",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "JOBPLAN",
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
            "remarks": "Unique Identifier For Job Plan",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "One Line Short Description Of Job Plan",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "JPDURATION",
            "required": true,
            "persistent": true,
            "title": "Duration",
            "remarks": "Duration Of Job Plan In Hours",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LABORCODE",
            "required": false,
            "persistent": true,
            "title": "Lead",
            "remarks": "Defines the Lead person who will be copied to the work order created with this job plan",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "DOWNTIME",
            "required": true,
            "persistent": true,
            "title": "Downtime",
            "remarks": "Does the Asset have to be down for this WO?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SUPERVISOR",
            "required": false,
            "persistent": true,
            "title": "Supervisor",
            "remarks": "Supervisor of job.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CALENDAR",
            "required": false,
            "persistent": true,
            "title": "Calendar",
            "remarks": "Calendar to determine shift work is to be done on.",
            "sameAsAttribute": "CALNUM",
            "sameAsObject": "CALENDAR"
        },
        {
            "attributeName": "PRIORITY",
            "required": false,
            "persistent": true,
            "title": "WO Priority",
            "remarks": "Priority of job.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CREWID",
            "required": false,
            "persistent": true,
            "title": "Crew",
            "remarks": "ID for a given crew within a craft.",
            "sameAsAttribute": "CREWID",
            "sameAsObject": "LABOR"
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
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Long Description for One Line Short Description Of Job Plan",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "JOBPLANID",
            "required": true,
            "persistent": true,
            "title": "JOBPLANID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PERSONGROUP",
            "required": false,
            "persistent": true,
            "title": "Work Group",
            "remarks": "Persongroup identifier",
            "sameAsAttribute": "PERSONGROUP",
            "sameAsObject": "PERSONGROUP"
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
            "attributeName": "LANGCODE",
            "required": true,
            "persistent": true,
            "title": "Language Code",
            "remarks": "Language Column",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        },
        {
            "attributeName": "STATUS",
            "required": true,
            "persistent": true,
            "title": "Status",
            "remarks": "Job Plan Status",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NP_STATUSMEMO",
            "required": false,
            "persistent": false,
            "title": "Change Status Memo",
            "remarks": "Status change memo, temporary non-persistent field used by MEA",
            "sameAsAttribute": "MEMO",
            "sameAsObject": "WFTRANSACTION"
        },
        {
            "attributeName": "INTERRUPTIBLE",
            "required": true,
            "persistent": true,
            "title": "Interruptible",
            "remarks": "Is this WO allowed to be stopped and restarted during resource scheduling",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "STATUSIFACE",
            "required": true,
            "persistent": false,
            "title": "Has Status Changed",
            "remarks": "Non persistent boolean field to indicate whether the status has been changed after the stateful object is fetched from the database.",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "DEFAULTWOCLASS",
            "required": false,
            "persistent": false,
            "title": "Default WO Class",
            "remarks": "non-persistent attribute that stores the default jobplanclass for this job plan.",
            "sameAsAttribute": "WOCLASS",
            "sameAsObject": "WORKTYPE"
        },
        {
            "attributeName": "TEMPLATETYPE",
            "required": true,
            "persistent": true,
            "title": "Template Type",
            "remarks": "Template Type of the Job Plan",
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
            "attributeName": "FLOWCONTROLLED",
            "required": true,
            "persistent": true,
            "title": "Flow Controlled",
            "remarks": "Flag used to indicate a records participation in flow control.",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "ASSIGNEDOWNERGROUP",
            "required": false,
            "persistent": true,
            "title": "Assigned Owner Group",
            "remarks": "Identifies the owner group who will be responsible for the work order created with this job plan.  Use the Select Action menu to assign an owner group. You can enter a value either in this field or in the Owner field.",
            "sameAsAttribute": "PERSONGROUP",
            "sameAsObject": "PERSONGROUP"
        },
        {
            "attributeName": "PLUSCCHANGEBY",
            "required": true,
            "persistent": true,
            "title": "Changed By",
            "remarks": "Displays the user name of the person logged in when the job plan was created or changed.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "PLUSCCHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "Displays the date the status was changed. This field is editable only on the Change Status dialog box.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCREVCOM",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Enter the reason for the change. This field is editable only when the revision is first created.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCREVNUM",
            "required": true,
            "persistent": true,
            "title": "Revision",
            "remarks": "Displays the revision level of the current job plan.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCSTATUSDATE",
            "required": false,
            "persistent": true,
            "title": "Last status change date",
            "remarks": "Displays the date the status was changed. This field is editable only on the Change Status dialog box.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USEMBODATA",
            "required": true,
            "persistent": false,
            "title": "usembodata",
            "remarks": "usembodata",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCREVCOM_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description Long description",
            "remarks": "Long Description for Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INCTASKSINSCHED",
            "required": true,
            "persistent": true,
            "title": "Include Tasks in Schedule",
            "remarks": "Indicates that tasks of records created from this job plan will be included in the schedule view.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STCONOFFSET",
            "required": false,
            "persistent": true,
            "title": "Start Constraint Offset",
            "remarks": "The amount of time (in hours) to be subtracted from the Target Start date in order to calculate the Start No Earlier Than date of the work record.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FNCONOFFSET",
            "required": false,
            "persistent": true,
            "title": "Finish Constraint Offset",
            "remarks": "The amount of time (in hours) to be added to the Target Finish date in order to calculate the Finish No Later Than date of the work record.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HASNESTEDJP",
            "required": true,
            "persistent": true,
            "title": "Nested Job Plans",
            "remarks": "Indicates if this Job Plan has nested Job Plans.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AMCREW",
            "required": false,
            "persistent": true,
            "title": "Crew",
            "remarks": "Defines the Crew who will be copied to the work order created with this job plan.",
            "sameAsAttribute": "AMCREW",
            "sameAsObject": "AMCREW"
        },
        {
            "attributeName": "CREWWORKGROUP",
            "required": false,
            "persistent": true,
            "title": "Crew Work Group",
            "remarks": "Resource pool that will perform the work order.",
            "sameAsAttribute": "PERSONGROUP",
            "sameAsObject": "PERSONGROUP"
        },
        {
            "attributeName": "REQASSTDWNTIME",
            "required": true,
            "persistent": true,
            "title": "Require Asset Downtime",
            "remarks": "Indicates if the asset requires downtime while work is performed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "APPTREQUIRED",
            "required": true,
            "persistent": true,
            "title": "Appointment Required",
            "remarks": "Indicates if an appointment is required for the job plan. Tasks that are created for this job plan inherit this value, but can be modified.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AOS",
            "required": true,
            "persistent": true,
            "title": "Requires Asset Downtime",
            "remarks": "Indicates that the work cannot be performed while the asset is operating.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AMS",
            "required": true,
            "persistent": true,
            "title": "Requires Dedicated Asset Maintenance Window",
            "remarks": "Indicates that the work must be performed during a dedicated maintenance window.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LOS",
            "required": true,
            "persistent": true,
            "title": "Requires Location Downtime",
            "remarks": "Indicates that the work must be performed when the location is not in use, and available for maintenance.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LMS",
            "required": true,
            "persistent": true,
            "title": "Requires Dedicated Location Maintenance Window",
            "remarks": "Indicates that the work must be performed during a dedicated maintenance window.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REPAIRLOCFLAG",
            "required": true,
            "persistent": true,
            "title": "Repair Facility Required",
            "remarks": "Indicates whether the repair location is required.",
            "sameAsAttribute": "REPAIRLOCFLAG",
            "sameAsObject": "WORKORDER"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "CLASSSPEC",
            "target": "CLASSSPEC",
            "remarks": "Relationship to the ClassSpec table, used to find all class specification records for a given jobplan (classspec.classstructureid = jobplan.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSTRUCTURE",
            "target": "CLASSSTRUCTURE",
            "remarks": "Relationship to the classstructure table, used to find the classstructure records for a given jobplan (classstructure.classstructureid=jobplan.classstructureid). The resulting set will contain zero or one object.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "target": "DOCLINKS",
            "remarks": "Relationship to the Job Plan's DocLinks records, used to find all documents for a given Job Plan. (doclinks.keytable = 'JOBPLAN' and doclinks.keycolumn = 'JPNUM' and jobplan.jpnum = doclinks.keyvalue). The resulting set will contain zero or one record.",
            "whereClause": "(ownertable = 'JOBPLAN' and ownerid = :jobplanid) or   (ownertable='ASSET' and ownerid in (select asset.assetuid from asset, jpassetsplink where asset.assetnum = jpassetsplink.assetnum and asset.siteid = jpassetsplink.siteid and jpassetsplink.jobplanid=:jobplanid ))  or (ownertable='ITEM' and ownerid in (select item.itemid from item, jpassetsplink where item.itemnum=jpassetsplink.itemnum and item.itemsetid=jpassetsplink.itemsetid and jpassetsplink.jobplanid=:jobplanid)) or (ownertable='LOCATIONS' and ownerid in (select locations.locationsid from locations, jpassetsplink where locations.location = jpassetsplink.location and locations.siteid = jpassetsplink.siteid and jpassetsplink.jobplanid=:jobplanid )) or (ownertable='SAFETYPLAN' and ownerid in  (select safetyplan.safetyplanuid from safetyplan, jpassetsplink where safetyplan.safetyplanid = jpassetsplink.safetyplanid and safetyplan.siteid = jpassetsplink.siteid and jpassetsplink.jobplanid=:jobplanid)) or (ownertable='ITEM' and ownerid in (select item.itemid from item, jobmaterial where item.itemnum=jobmaterial.itemnum and item.itemsetid=jobmaterial.itemsetid and jobmaterial.jobplanid=:jobplanid)) or (ownertable='LOCATIONS' and ownerid in (select locations.locationsid from locations, jobmaterial where locations.location = jobmaterial.location and locations.siteid = jobmaterial.siteid and jobmaterial.jobplanid=:jobplanid )) or (ownertable='ITEM' and ownerid in (select item.itemid from item, jobservice where item.itemnum=jobservice.itemnum and item.itemsetid=jobservice.itemsetid and jobservice.jobplanid=:jobplanid)) or (ownertable='LOCATIONS' and ownerid in (select locations.locationsid from locations, jobservice where locations.location = jobservice.location and locations.siteid = jobservice.siteid and jobservice.jobplanid=:jobplanid )) or (ownertable='ITEM' and ownerid in (select item.itemid from item, jobtool where item.itemnum=jobtool.itemnum and item.itemsetid=jobtool.itemsetid and jobtool.jobplanid=:jobplanid)) or (ownertable='LOCATIONS' and ownerid in (select locations.locationsid from locations, jobtool where locations.location = jobtool.location and locations.siteid = jobtool.siteid and jobtool.jobplanid=:jobplanid ))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS_ASSETID",
            "target": "DOCLINKS",
            "remarks": "Relationship to the Job Plan's DocLinks records, used to find all documents for a given Job Plan. This relationship includes asset-related doclinks using assetid (global) instead of assetuid (site-specific). (doclinks.keytable = 'JOBPLAN' and doclinks.keycolumn = 'JPNUM' and jobplan.jpnum = doclinks.keyvalue). The resulting set will contain zero or one record.",
            "whereClause": "(ownertable = 'JOBPLAN' and ownerid = :jobplanid) or   (ownertable='ASSET' and ownerid in (select asset.assetid from asset, jpassetsplink where asset.assetnum = jpassetsplink.assetnum and asset.siteid = jpassetsplink.siteid and jpassetsplink.jobplanid=:jobplanid ))  or (ownertable='ITEM' and ownerid in (select item.itemid from item, jpassetsplink where item.itemnum=jpassetsplink.itemnum and item.itemsetid=jpassetsplink.itemsetid and jpassetsplink.jobplanid=:jobplanid)) or (ownertable='LOCATIONS' and ownerid in (select locations.locationsid from locations, jpassetsplink where locations.location = jpassetsplink.location and locations.siteid = jpassetsplink.siteid and jpassetsplink.jobplanid=:jobplanid )) or (ownertable='SAFETYPLAN' and ownerid in  (select safetyplan.safetyplanuid from safetyplan, jpassetsplink where safetyplan.safetyplanid = jpassetsplink.safetyplanid and safetyplan.siteid = jpassetsplink.siteid and jpassetsplink.jobplanid=:jobplanid)) or (ownertable='ITEM' and ownerid in (select item.itemid from item, jobmaterial where item.itemnum=jobmaterial.itemnum and item.itemsetid=jobmaterial.itemsetid and jobmaterial.jobplanid=:jobplanid)) or (ownertable='LOCATIONS' and ownerid in (select locations.locationsid from locations, jobmaterial where locations.location = jobmaterial.location and locations.siteid = jobmaterial.siteid and jobmaterial.jobplanid=:jobplanid )) or (ownertable='ITEM' and ownerid in (select item.itemid from item, jobservice where item.itemnum=jobservice.itemnum and item.itemsetid=jobservice.itemsetid and jobservice.jobplanid=:jobplanid)) or (ownertable='LOCATIONS' and ownerid in (select locations.locationsid from locations, jobservice where locations.location = jobservice.location and locations.siteid = jobservice.siteid and jobservice.jobplanid=:jobplanid )) or (ownertable='ITEM' and ownerid in (select item.itemid from item, jobtool where item.itemnum=jobtool.itemnum and item.itemsetid=jobtool.itemsetid and jobtool.jobplanid=:jobplanid)) or (ownertable='LOCATIONS' and ownerid in (select locations.locationsid from locations, jobtool where locations.location = jobtool.location and locations.siteid = jobtool.siteid and jobtool.jobplanid=:jobplanid ))",
            "cardinality": null
        },
        {
            "name": "DRILLDOWN",
            "target": "DRILLDOWN",
            "remarks": "Relationship from the JOBPLAN to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "JOBITEM",
            "target": "JOBITEM",
            "remarks": "Relationship to the Job Plan's JobItem records, used to find all the Material/services records for a given Job Plan. (jobitem.jpnum=jobplan.jpnum). The resulting set will contain zero or more records.",
            "whereClause": "jobplanid=:jobplanid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "JOBLABOR",
            "target": "JOBLABOR",
            "remarks": "Relationship to the Job Plan's JobLabor records, used to find all the labor records for a given Job Plan. (joblabor.jpnum=jobplan.jpnum). The resulting set will contain zero or more records.",
            "whereClause": "jobplanid=:jobplanid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "JOBMATERIAL",
            "target": "JOBMATERIAL",
            "remarks": "Relationship to the Job Plan's JobMaterial records, used to find all the Material/item records for a given Job Plan. (jobmaterial.jpnum=jobplan.jpnum). The resulting set will contain zero or more records.",
            "whereClause": "jobplanid=:jobplanid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "PLUSCJPREVHIST",
            "target": "JOBPLAN",
            "remarks": "Relationship for the Revision History window. Selects all revisions of the parent job plan.",
            "whereClause": "jpnum=:jpnum and ((orgid=:orgid and siteid=:siteid) or (orgid=:orgid and siteid is null) or (orgid is null and siteid is null))",
            "cardinality": null
        },
        {
            "name": "JOBPLANCLASS",
            "target": "JOBPLANCLASS",
            "remarks": "Relationship to the JobPlanClass table, used to find the JobPlanClasses for this JobPlan.(jobplanclass.jobplanid=jobplan.jobplanid). The resulting set will contain zero or more objects.",
            "whereClause": "jobplanid=:jobplanid",
            "cardinality": "SINGLE"
        },
        {
            "name": "JOBPLANCLASSDEFAULT",
            "target": "JOBPLANCLASS",
            "remarks": "Relationship to the JobPlanClass table, used to find the default JobPlanClass for this JobPlan. (jobplanclass.jobplanid=jobplan.jobplanid and jobplanclass.isdefault=1). The resulting set will contain zero or one object.",
            "whereClause": "jobplanid=:jobplanid and isdefault=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "JOBPLANFILTER",
            "target": "JOBPLANFILTER",
            "remarks": "Relationship to the Job Plan's non-persistent JobPlanFilter Set. The resulting set will contain zero objects.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "JOBPLANSPEC",
            "target": "JOBPLANSPEC",
            "remarks": "Relationship to the jobplanspec table, used to find the jobplanspec records for a given jobplan (jobplan.jobplanid=jobplanspec.refobjectid). The resulting set will contain zero or more objects.",
            "whereClause": "refobjectid=:jobplanid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "JOBPLANSPECCLASS",
            "target": "JOBPLANSPEC",
            "remarks": "Relationship to the jobplanspec table, used to find the jobplanspec records for a given jobplan (jobplan.jpnum=jobplanspec.jpnum and jobplan.classstructureid=jobplanspec.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "jpnum = :jpnum and pluscjprevnum =:pluscrevnum and classstructureid = :classstructureid and ((orgid=:orgid and siteid=:siteid) or (orgid=:orgid and siteid is null) or (orgid is null and siteid is null))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "JOBSERVICE",
            "target": "JOBSERVICE",
            "remarks": "Relationship to the Job Plan's JobServices records, used to find all the service/std service records for a given Job Plan. (jobservices.jpnum=jobplan.jpnum). The resulting set will contain zero or more records.",
            "whereClause": "jobplanid=:jobplanid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "JOBTASK",
            "target": "JOBTASK",
            "remarks": "Relationship to the Job Plan's JobTask records, used to find all the task records for a given Job Plan. (jobtask.jpnum=jobplan.jpnum). The resulting set will contain zero or more records.",
            "whereClause": "jobplanid=:jobplanid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "PLUSCJPREVHISTLINE",
            "target": "JOBTASK",
            "remarks": "Relationship for the Revision History window. Selects all revisions of the parent job plan.",
            "whereClause": "jpnum=:jpnum and ((orgid=:orgid and siteid=:siteid) or (orgid=:orgid and siteid is null) or (orgid is null and siteid is null)) and pluscjprevnum in (:pluscrevnum, (select max(pluscjprevnum) from jobtask where jpnum=:jpnum and pluscjprevnum < :pluscrevnum)) and jptask in (select jptask from jobtask where jpnum=:jpnum and pluscrevstatus in (select value from synonymdomain where maxvalue in ('ADDED','CHANGED'))  and pluscjprevnum = :pluscrevnum)",
            "cardinality": null
        },
        {
            "name": "PLUSCJOBTASK",
            "target": "JOBTASK",
            "remarks": "jobplanid=:jobplanid",
            "whereClause": "jobplanid=:jobplanid",
            "cardinality": null
        },
        {
            "name": "JOBTASKSPECCLASS",
            "target": "JOBTASKSPEC",
            "remarks": "Relationship to the jobtaskspec table, used to find the jobtaskspec records for a given jobplan (jobtaskspec.jpnum=jobplan.jpnum and jobtaskspec.siteid=jobplan.siteid). The resulting set will contain zero or more objects.",
            "whereClause": "jpnum = :jpnum and pluscjprevnum =:pluscrevnum and((orgid=:orgid and siteid=:siteid) or (orgid=:orgid and (:siteid is null or :siteid='')) or ((:orgid is null or :orgid='') and (:siteid is null or :siteid='')))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "JOBTOOL",
            "target": "JOBTOOL",
            "remarks": "Relationship to the Job Plan's JobTool records, used to find all the tool records for a given Job Plan. (jobtool.jpnum=jobplan.jpnum). The resulting set will contain zero or more records.",
            "whereClause": "jobplanid=:jobplanid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "JPASSETSPLINK",
            "target": "JPASSETSPLINK",
            "remarks": "Relationship to the Job Plan's Work Asset records, used to find all the work assets for a given Job Plan. (jpassetsplink.jpnum=jobplan.jpnum). The resulting set will contain zero or more records.",
            "whereClause": "jobplanid=:jobplanid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "JPCHANGESTATUS",
            "target": "JPCHANGESTATUS",
            "remarks": "Relationship to the non-persistent JPChangeStatus table. The resulting set will contain zero or more objects.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "JPDUMMYSTATUS",
            "target": "JPDUMMYSTATUS",
            "remarks": "Job Plan to JPDUMMYSTATUS relationship.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "JPTASKLOOKUP",
            "target": "JPTASKLOOKUP",
            "remarks": "Relationship from the jobplan to its tasks.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "JPTASKRELATION",
            "target": "JPTASKRELATION",
            "remarks": "Relationship from the job plan task to its predecessor tasks.",
            "whereClause": "jobplanid=:jobplanid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "JPTOTAL",
            "target": "JPTOTAL",
            "remarks": "Relationship to the nonpersistent set used to display job plan totals.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LONGDESCRIPTION",
            "target": "LONGDESCRIPTION",
            "remarks": "Relationship to the longdescription table, used to find all longdescription records for jobplan. The resulting set will contain zero or more objects.",
            "whereClause": "ldkey=:jobplanid and ldownertable = 'JOBPLAN'",
            "cardinality": null
        },
        {
            "name": "PLUSCJPDSJOBPLAN",
            "target": "PLUSCJPDATASHEET",
            "remarks": null,
            "whereClause": "JPNUM=:JPNUM",
            "cardinality": null
        },
        {
            "name": "PLUSCJPREVISIONINPUT",
            "target": "PLUSCJPREVINPUT",
            "remarks": "Relationship to the non-persistent RevisionInput object. (No where clause). The resulting set will contain zero objects.",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "PLUSCJPSTATUS",
            "target": "PLUSCJPSTATUS",
            "remarks": "Relationship to the status history object.",
            "whereClause": "jpnum=:jpnum and jprevnum=:pluscrevnum and ((orgid=:orgid and siteid=:siteid) or (orgid=:orgid and siteid is null) or (orgid is null and siteid is null))",
            "cardinality": null
        },
        {
            "name": "STATUSDESC",
            "target": "SYNONYMDOMAIN",
            "remarks": "Relationship to SYNONYMDOMAIN.",
            "whereClause": "domainid='JOBPLANSTATUS' and value=:status and :&DOMAINFILTER&_STATUS",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PLUSCWORKORDER",
            "target": "WORKORDER",
            "remarks": "Relationship to the WorkOrder table, used to find the jobplan for a work order. (Jobplan.jpnum = Workorder.jpnum).",
            "whereClause": "jpnum=:jpnum and pluscjprevnum = :pluscrevnum and ((orgid=:orgid and siteid=:siteid) or (orgid=:orgid and siteid is null) or (orgid is null and siteid is null))",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "JOBPLAN",
            "source": "AMCREW",
            "remarks": "Relationship to check if the crew is being used by a JobPlan.",
            "whereClause": "amcrew=:amcrew",
            "cardinality": null
        },
        {
            "name": "JOBPLAN",
            "source": "CHARPOINTACTION",
            "remarks": "Relationship to the jobplan records, used to find the jobplan records for a given jpnum and is system level.",
            "whereClause": "jpnum=:jpnum and siteid is null and orgid is null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "JPFORSITEORGSYS",
            "source": "CHARPOINTACTION",
            "remarks": "Relationship to the jobplan object, used to find the jobplan for a given CharPointAction's jpnum.  (jpnum=:jpnum and (siteid=:siteid or (siteid is null and orgid=:orgid) or (siteid is null and orgid is null))).  The resulting set will contain one object",
            "whereClause": "jpnum=:jpnum and (siteid=:siteid or (siteid is null and orgid=:orgid) or (siteid is null and orgid is null)) and status in (select value from synonymdomain where domainid='JOBPLANSTATUS' and maxvalue ='ACTIVE')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "JOBPLAN",
            "source": "CLASSSTRUCTURE",
            "remarks": "Relationship to the jobplan table, used to find the jobplan records for a given classstructure. (classstructure.classstructureid = jobplan.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "JOBPLAN_ONLY",
            "source": "CLASSSTRUCTURE",
            "remarks": "Relationship to the jobplan table, used to find the jobplan records for a given classstructure.(classstructure.classstructureid =jobplan.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid =:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "JOBPLAN",
            "source": "JOBITEM",
            "remarks": "Relationship from jobitem to jobplan",
            "whereClause": "jpnum=:jpnum and siteid=:siteid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "JOBPLANREV",
            "source": "JOBITEM",
            "remarks": "Relationship from jobitem to jobplan",
            "whereClause": "jpnum=:jpnum and ((orgid=:orgid and siteid=:siteid) or (orgid=:orgid and siteid is null) or (orgid is null and siteid is null)) and pluscrevnum=:pluscjprevnum",
            "cardinality": null
        },
        {
            "name": "PLUSCJPREVHIST",
            "source": "JOBPLAN",
            "remarks": "Relationship for the Revision History window. Selects all revisions of the parent job plan.",
            "whereClause": "jpnum=:jpnum and ((orgid=:orgid and siteid=:siteid) or (orgid=:orgid and siteid is null) or (orgid is null and siteid is null))",
            "cardinality": null
        },
        {
            "name": "JOBPLAN",
            "source": "JOBTASK",
            "remarks": "Relationship to the jobplan table, used to find the jobplan records for a given nested jobplan for a given jobtask.",
            "whereClause": "jpnum=:nestedjpnum and ((orgid=:orgid and siteid=:siteid) or (orgid=:orgid and siteid is null) or (orgid is null and siteid is null) or (:orgid is null and :siteid is null) or (:orgid is null)) and status in (select value from synonymdomain where domainid='JOBPLANSTATUS' and maxvalue ='ACTIVE')",
            "cardinality": null
        },
        {
            "name": "JOBPLAN",
            "source": "LABOR",
            "remarks": "Relationship to the JOBPLAN table.  (jobplan.laborcode=labor.laborcode.)  The resulting set will contain one or more objects.",
            "whereClause": "laborcode=:laborcode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "JOBPLAN",
            "source": "MASTERPM",
            "remarks": "Relationship to the MasterPM's Jobplan records, used to find the jobplan records for a given MasterPM. (jobplan.jpnum = masterpm.jpnum). The resulting set will contain zero or one record.",
            "whereClause": "jpnum = :jpnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PLUSCJOBPLAN",
            "source": "MASTERPM",
            "remarks": "Relationship to the Master PM's Jobplan records, used to find the jobplan records for a given Master PM, taking the status into account to filter out revised job plans. (jobplan.jpnum = pm.jpnum). The resulting set will contain zero or one record.",
            "whereClause": "jpnum = :jpnum and status in (select value from synonymdomain where domainid='JOBPLANSTATUS' and maxvalue ='ACTIVE')",
            "cardinality": null
        },
        {
            "name": "JOBPLAN",
            "source": "MASTERPMSEQ",
            "remarks": "Relationship to the MasterPMSequence's Jobplan Set,used to find the jobplan records for a given MasterPM. (jobplan.jpnum = masterpmsequence.jpnum). The resulting set will contain zero or one record.",
            "whereClause": "jpnum=:jpnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PLUSCJOBPLAN",
            "source": "MASTERPMSEQ",
            "remarks": "Relationship to the Master PM's Jobplan records, used to find the jobplan records for a given Master PM, taking the status into account to filter out revised job plans. (jobplan.jpnum = pm.jpnum). The resulting set will contain zero or one record.",
            "whereClause": "jpnum = :jpnum and status in (select value from synonymdomain where domainid='JOBPLANSTATUS' and maxvalue ='ACTIVE')",
            "cardinality": null
        },
        {
            "name": "MP_LLJP",
            "source": "MEASUREPOINT",
            "remarks": "Relationship to the jobplan records, used to find the jobplans records for a given lljpnum and is system level.",
            "whereClause": "jpnum=:lljpnum and siteid is null and orgid is null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MP_LLJPFORSITEORGSYS",
            "source": "MEASUREPOINT",
            "remarks": "Relationship to the jobplan object, used to find the jobplan for a given MeaurePoint's lower limit jobplan number. ( jpnum=:lljpnum and (siteid=:siteid or (siteid is null and orgid=:orgid) or (siteid is null and orgid is null)) ).  The resulting set will contain one object",
            "whereClause": "jpnum=:lljpnum and (siteid=:siteid or (siteid is null and orgid=:orgid) or (siteid is null and orgid is null)) and status in (select value from synonymdomain where domainid='JOBPLANSTATUS' and maxvalue ='ACTIVE')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MP_ULJP",
            "source": "MEASUREPOINT",
            "remarks": "Relationship to the jobplan records, used to find the jobplans records for a given uljpnum and is system level.",
            "whereClause": "jpnum=:uljpnum and siteid is null and orgid is null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MP_ULJPFORSITEORGSYS",
            "source": "MEASUREPOINT",
            "remarks": "Relationship to the jobplan object, used to find the jobplan for a given MeaurePoint's upper limit jobplan number. ( jpnum=:uljpnum and (siteid=:siteid or (siteid is null and orgid=:orgid) or (siteid is null and orgid is null)) ).  The resulting set will contain one object",
            "whereClause": "jpnum=:uljpnum and (siteid=:siteid or (siteid is null and orgid=:orgid) or (siteid is null and orgid is null)) and status in (select value from synonymdomain where domainid='JOBPLANSTATUS' and maxvalue ='ACTIVE')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSONGROUPUSEDBYJOBPLAN",
            "source": "PERSONGROUP",
            "remarks": "returns any rows if used by pms",
            "whereClause": "((persongroup = :persongroup) or (ownergroup = :persongroup))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSONGROUPUSEDBYJOBTASK",
            "source": "PERSONGROUP",
            "remarks": "Relationship to find jobtask that are assigned to the person",
            "whereClause": "status in (select value from synonymdomain where domainid='JOBPLANSTATUS' and maxvalue='ACTIVE') and jpnum in (select jpnum from jobtask where jobplan.jpnum=jobtask.jpnum and jobplan.pluscrevnum=jobtask.pluscjprevnum and (jobplan.orgid=jobtask.orgid or (jobplan.orgid is null and jobtask.orgid is null)) and (jobplan.siteid=jobtask.siteid or (jobplan.siteid is null and jobtask.siteid is null)) and (ownergroup = :persongroup))",
            "cardinality": null
        },
        {
            "name": "JOBPLAN",
            "source": "PM",
            "remarks": "Relationship to the PM's Jobplan records, used to find the jobplan records for a given PM. (jobplan.jpnum = pm.jpnum). The resulting set will contain zero or one record.",
            "whereClause": "jpnum=:jpnum and ((orgid=:orgid and siteid=:siteid) or (orgid=:orgid and siteid is null) or (orgid is null and siteid is null) or (:orgid is null and :siteid is null) or (:orgid is null))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PLUSCJOBPLAN",
            "source": "PM",
            "remarks": "Relationship to the PM's Jobplan records, used to find the jobplan records for a given PM, taking the status into account to filter out revised job plans. (jobplan.jpnum = pm.jpnum). The resulting set will contain zero or one record.",
            "whereClause": "jpnum=:jpnum and ((orgid=:orgid and siteid=:siteid) or (orgid=:orgid and siteid is null) or (orgid is null and siteid is null) or (:orgid is null and :siteid is null) or (:orgid is null)) and status in (select value from synonymdomain where domainid='JOBPLANSTATUS' and maxvalue ='ACTIVE')",
            "cardinality": null
        },
        {
            "name": "JOBPLAN",
            "source": "PMFORECASTJP",
            "remarks": "Relationship to the PMFORECASTJP's Jobplan records, used to find the jobplan records for a given PMForecastJP.",
            "whereClause": "jpnum=:jpnum and ((orgid=:orgid and siteid=:siteid) or (orgid=:orgid and siteid is null) or (orgid is null and siteid is null) or (:orgid is null and :siteid is null) or (:orgid is null)) and status in (select value from synonymdomain where domainid='JOBPLANSTATUS' and maxvalue ='ACTIVE')",
            "cardinality": null
        },
        {
            "name": "JOBPLAN",
            "source": "PMSEQUENCE",
            "remarks": "Relationship to the PMSequence's Jobplan Set,used to find the jobplan records for a given PM. (jobplan.jpnum = pmsequence.jpnum). The resulting set will contain zero or one record.",
            "whereClause": "jpnum=:jpnum and ((orgid=:orgid and siteid=:siteid) or (orgid=:orgid and siteid is null) or (orgid is null and siteid is null) or (:orgid is null and :siteid is null) or (:orgid is null))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PLUSCJOBPLAN",
            "source": "PMSEQUENCE",
            "remarks": "Relationship to the PM's Jobplan records, used to find the jobplan records for a given PM, taking the status into account to filter out revised job plans. (jobplan.jpnum = pm.jpnum). The resulting set will contain zero or one record.",
            "whereClause": "jpnum=:jpnum and ((orgid=:orgid and siteid=:siteid) or (orgid=:orgid and siteid is null) or (orgid is null and siteid is null) or (:orgid is null and :siteid is null) or (:orgid is null)) and status in (select value from synonymdomain where domainid='JOBPLANSTATUS' and maxvalue ='ACTIVE')",
            "cardinality": null
        },
        {
            "name": "JOBPLAN",
            "source": "ROUTE_STOP",
            "remarks": "Relationship to the RouteStop's Job Plan records, used to find Job Plan records for a given RouteStop. (jobplan.jpnum=route_stop.jpnum). The resulting set will contain zero or one record.",
            "whereClause": "jpnum=:jpnum and ((orgid=:orgid and siteid=:siteid) or (orgid=:orgid and siteid is null) or (orgid is null and siteid is null)) and status in (select value from synonymdomain where domainid='JOBPLANSTATUS' and maxvalue ='ACTIVE')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "JOBPLAN",
            "source": "TKTEMPLTACTIVITY",
            "remarks": null,
            "whereClause": "jpnum=:jpnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "JOBPLAN",
            "source": "WORKORDER",
            "remarks": "Relationship to the JobPlan table, used to find the jobplan for a work order. (Jobplan.jpnum = Workorder.jpnum). This resulting set will contain zero or one object.",
            "whereClause": "jpnum=:jpnum and ((orgid=:orgid and siteid=:siteid) or (orgid=:orgid and siteid is null) or (orgid is null and siteid is null)) and status in (select value from synonymdomain where domainid='JOBPLANSTATUS' and maxvalue ='ACTIVE')",
            "cardinality": "SINGLE"
        },
        {
            "name": "WO_JOBPLAN",
            "source": "WORKORDER",
            "remarks": null,
            "whereClause": "jpnum=:jpnum and siteid=:siteid",
            "cardinality": "SINGLE"
        },
        {
            "name": "WO_REV_JOBPLAN",
            "source": "WORKORDER",
            "remarks": "Relationship to display the current description in WO for revised Jobplan.",
            "whereClause": "jpnum=:jpnum and ((orgid=:orgid and siteid=:siteid) or (orgid=:orgid and siteid is null) or (orgid is null and siteid is null)) and pluscrevnum=:pluscjprevnum",
            "cardinality": null
        }
    ]
}