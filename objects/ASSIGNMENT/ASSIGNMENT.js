mos = {
    "objectName": "ASSIGNMENT",
    "className": "psdi.app.workorder.AssignmentSet",
    "description": "The ASSIGNMENT Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "ASSIGNMENTID",
    "primaryKeyColumns": [
        "ASSIGNMENTID"
    ],
    "logicalRelationships": [
        {
            "objectName": "ASSIGNMENT",
            "targetObject": "ASSIGNMENT",
            "parentKeys": "ASSIGNMENTID",
            "targetKeys": "PARENTASSIGNID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Parent Assignment",
            "longDescription": null
        },
        {
            "objectName": "ASSIGNMENT",
            "targetObject": "SLRTRAVELTIME",
            "parentKeys": "ASSIGNMENTID",
            "targetKeys": "FROMASSIGNID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "From Assignment",
            "longDescription": null
        },
        {
            "objectName": "ASSIGNMENT",
            "targetObject": "SLRTRAVELTIME",
            "parentKeys": "ASSIGNMENTID",
            "targetKeys": "TOASSIGNID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "To Assignment",
            "longDescription": null
        },
        {
            "objectName": "ASSIGNMENT",
            "targetObject": "WMASSIGNMENT",
            "parentKeys": "ASSIGNMENTID",
            "targetKeys": "ASSIGNMENTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Assignment",
            "longDescription": null
        },
        {
            "objectName": "ASSIGNMENT",
            "targetObject": "WMASSIGNTMP",
            "parentKeys": "ASSIGNMENTID",
            "targetKeys": "ASSIGNMENTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Assignment",
            "longDescription": null
        },
        {
            "objectName": "ASSIGNMENT",
            "targetObject": "WORKLOG",
            "parentKeys": "ASSIGNMENTID",
            "targetKeys": "ASSIGNMENTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Assignment",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "AMCREW",
            "targetObject": "ASSIGNMENT",
            "parentKeys": "ORGID, AMCREW",
            "targetKeys": "ORGID, AMCREW",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew",
            "longDescription": null
        },
        {
            "objectName": "AMCREWT",
            "targetObject": "ASSIGNMENT",
            "parentKeys": "AMCREWTYPE, ORGID",
            "targetKeys": "AMCREWTYPE, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Type",
            "longDescription": null
        },
        {
            "objectName": "ASSIGNMENT",
            "targetObject": "ASSIGNMENT",
            "parentKeys": "ASSIGNMENTID",
            "targetKeys": "PARENTASSIGNID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Parent Assignment",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "ASSIGNMENT",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor on Assignment",
            "longDescription": null
        },
        {
            "objectName": "CRAFT",
            "targetObject": "ASSIGNMENT",
            "parentKeys": "CRAFT, ORGID",
            "targetKeys": "CRAFT, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Craft",
            "longDescription": null
        },
        {
            "objectName": "CRAFTSKILL",
            "targetObject": "ASSIGNMENT",
            "parentKeys": "CRAFT, SKILLLEVEL, ORGID",
            "targetKeys": "CRAFT, SKILLLEVEL, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Craft Skill Level",
            "longDescription": null
        },
        {
            "objectName": "LABOR",
            "targetObject": "ASSIGNMENT",
            "parentKeys": "ORGID, LABORCODE",
            "targetKeys": "ORGID, LABORCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Labor",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "ASSIGNMENT",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "ASSIGNMENT",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "CREWWORKGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Work Group",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "ASSIGNMENT",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "ASSIGNMENT",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Assignment created for the Work Order",
            "longDescription": null
        },
        {
            "objectName": "WPLABOR",
            "targetObject": "ASSIGNMENT",
            "parentKeys": "SITEID, WONUM, WPLABORID",
            "targetKeys": "SITEID, WONUM, WPLABORID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Plan Labor",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "WPLABORID",
            "required": false,
            "persistent": true,
            "title": "WP Labor ID",
            "remarks": "ID to identify the EXACT WPLABOR record used to generate this row.",
            "sameAsAttribute": "WPLABORID",
            "sameAsObject": "WPLABOR"
        },
        {
            "attributeName": "WONUM",
            "required": true,
            "persistent": true,
            "title": "Work Order",
            "remarks": "The work order number to which this requirement applies.",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "CRAFT",
            "required": false,
            "persistent": true,
            "title": "Craft",
            "remarks": "Craft needed to meet this requirement.",
            "sameAsAttribute": "CRAFT",
            "sameAsObject": "CRAFT"
        },
        {
            "attributeName": "LABORHRS",
            "required": false,
            "persistent": true,
            "title": "Hours",
            "remarks": "Length of time the craft is required.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUS",
            "required": true,
            "persistent": true,
            "title": "Status",
            "remarks": "The status of the requirement.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SCHEDULEDATE",
            "required": false,
            "persistent": true,
            "title": "Scheduled Start",
            "remarks": "Scheduled start date and time for this assignment.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LABORCODE",
            "required": false,
            "persistent": true,
            "title": "Labor",
            "remarks": "Person assigned to this requirement.",
            "sameAsAttribute": "LABORCODE",
            "sameAsObject": "LABOR"
        },
        {
            "attributeName": "STARTDATE",
            "required": false,
            "persistent": true,
            "title": "Start Date",
            "remarks": "The datetime someone was assigned to start this requirement",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FINISHDATE",
            "required": false,
            "persistent": true,
            "title": "Scheduled Finish",
            "remarks": "The datetime someone was assigned to finish this requirement",
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
            "attributeName": "NAME",
            "required": false,
            "persistent": false,
            "title": "Name",
            "remarks": "NAME",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CRAFTCODE",
            "required": false,
            "persistent": false,
            "title": "Craft",
            "remarks": "CRAFTCODE",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LABOR",
            "required": false,
            "persistent": false,
            "title": "Labor",
            "remarks": "LABOR",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RATE",
            "required": false,
            "persistent": false,
            "title": "Rate",
            "remarks": "RATE",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TASKID",
            "required": false,
            "persistent": false,
            "title": "Task",
            "remarks": "Identifies the task for the assignment.",
            "sameAsAttribute": "TASKID",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ASSIGNMENTID",
            "required": true,
            "persistent": true,
            "title": "ASSIGNMENTID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SKILLLEVEL",
            "required": false,
            "persistent": true,
            "title": "Skill Level",
            "remarks": "Skill level assigned to the craft.",
            "sameAsAttribute": "SKILLLEVEL",
            "sameAsObject": "CRAFTSKILL"
        },
        {
            "attributeName": "CONTRACTNUM",
            "required": false,
            "persistent": true,
            "title": "Contract",
            "remarks": "Contract number for an outside rate.",
            "sameAsAttribute": "CONTRACTNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "VENDOR",
            "required": false,
            "persistent": true,
            "title": "Vendor",
            "remarks": "Vendor associated with this assigned labor.",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "WORKDATE",
            "required": false,
            "persistent": true,
            "title": "Work Date",
            "remarks": "The day that labor availability was calculated for. This date can be different from the assignment dates if the shift crosses midnight.",
            "sameAsAttribute": "WORKDATE",
            "sameAsObject": "WORKPERIOD"
        },
        {
            "attributeName": "PARENTASSIGNID",
            "required": false,
            "persistent": true,
            "title": "Parent Assignment ID",
            "remarks": "The AssignmentID of the assignment this assignment was split off from.",
            "sameAsAttribute": "ASSIGNMENTID",
            "sameAsObject": "ASSIGNMENT"
        },
        {
            "attributeName": "LASTFLDSET",
            "required": false,
            "persistent": false,
            "title": "Last Field Set",
            "remarks": "Tells field classes which field of a group will be the las one set.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CREWWORKGROUP",
            "required": false,
            "persistent": true,
            "title": "Crew Work Group",
            "remarks": "Crew Work Group",
            "sameAsAttribute": "PERSONGROUP",
            "sameAsObject": "PERSONGROUP"
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
            "remarks": "Type of Crew",
            "sameAsAttribute": "AMCREWTYPE",
            "sameAsObject": "AMCREWT"
        },
        {
            "attributeName": "STARTTIME",
            "required": false,
            "persistent": false,
            "title": "Start Time",
            "remarks": "Start Time",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDTIME",
            "required": false,
            "persistent": false,
            "title": "End Time",
            "remarks": "End Time",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EXISTREC",
            "required": true,
            "persistent": false,
            "title": "Exist Record",
            "remarks": "Exist Record",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ACTDUR",
            "required": false,
            "persistent": false,
            "title": "Actual Duration",
            "remarks": "Actual Duration",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "APPTREQUIRED",
            "required": true,
            "persistent": true,
            "title": "Appointment Required",
            "remarks": "Indicates if an appointment is required for the assignment.",
            "sameAsAttribute": "APPTREQUIRED",
            "sameAsObject": "JOBPLAN"
        },
        {
            "attributeName": "APPOINTMENT",
            "required": true,
            "persistent": true,
            "title": "Appointment Made",
            "remarks": "Indicates if an appointment has been scheduled.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WORKLOG",
            "required": true,
            "persistent": true,
            "title": "WORKLOG",
            "remarks": "Indicates if work log exists for the assignment.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "AMCREW",
            "target": "AMCREW",
            "remarks": "Relationship from table Assignment to Crew.",
            "whereClause": "amcrew=:amcrew and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "AMCREWT",
            "target": "AMCREWT",
            "remarks": "Relationship between ASSIGNMENT table and AMCREWT table.",
            "whereClause": "amcrewtype=:amcrewtype and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "ASSIGNCREW",
            "target": "ASSIGNCREW",
            "remarks": "Relationship to the non-persistent parameter set for dispatch Crew.",
            "whereClause": "",
            "cardinality": null
        },
        {
            "name": "ASSIGNLABOR",
            "target": "ASSIGNLABOR",
            "remarks": "Relationship to the nonpersistent parameter set for Dispatch Labor.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CRAFT",
            "target": "CRAFT",
            "remarks": "Relationship to CRAFT table to allow subsequent retrieval of craft related data such as craftrate",
            "whereClause": "craft=:craft and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CRAFTSKILL",
            "target": "CRAFTSKILL",
            "remarks": "Relationship to the CRAFTSKILL table for retrieving information about an  assignment's craft.  The resulting set will contain zero or one objects.",
            "whereClause": "craft=:craft and orgid=:orgid and (skilllevel=:skilllevel or (:skilllevel is null and skilllevel is null))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABOR",
            "target": "LABOR",
            "remarks": "Relationship to the Labor table, used to find the labor for a given assignment. (labor.laborcode=assignment.laborcode). This resulting set will contain zero or one object.",
            "whereClause": "laborcode=:laborcode and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABTRANSCREW",
            "target": "LABTRANS",
            "remarks": "Relationship from table ASSIGNMENT to LABTRANS for Crews.",
            "whereClause": "amcrew=:amcrew and refwo=:wonum",
            "cardinality": null
        },
        {
            "name": "TRAVELTIMEFROMME",
            "target": "SLRTRAVELTIME",
            "remarks": "Get the travel time where this assignment is the initial location",
            "whereClause": "fromassignid=:assignmentid",
            "cardinality": null
        },
        {
            "name": "TRAVELTIMETOME",
            "target": "SLRTRAVELTIME",
            "remarks": "Get the travel time where this assignment is the initial location",
            "whereClause": "toassignid=:assignmentid",
            "cardinality": null
        },
        {
            "name": "TOOLTRANSCREW",
            "target": "TOOLTRANS",
            "remarks": "Relationship from table ASSIGNMENT to TOOLTRANS for Crews.",
            "whereClause": "amcrew=:amcrew and refwo=:wonum",
            "cardinality": null
        },
        {
            "name": "WORKORDER",
            "target": "WORKORDER",
            "remarks": "Relationship to the Workorder table, used to find the work order for a given assignment. (workorder.wonum=assignment.wonum). This resulting set will contain one object.",
            "whereClause": "wonum=:wonum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WPLABOR",
            "target": "WPLABOR",
            "remarks": "Relationship to the WpLabor table, used to find the work plan labor for a given assignment.\t(Wplabor.wonum=Assignment.wonum and Wplabor.WpLaborId=Assignment.WpLaborId). This resulting set will contain one object.",
            "whereClause": "wonum = :wonum and wplaborid = :wplaborid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "ASSIGNMENT",
            "source": "AMCREW",
            "remarks": "Relationship from table AMCREW to ASSIGNMENT.",
            "whereClause": "amcrew=:amcrew and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "AMCREWWORKORDERS",
            "source": "AMCREW",
            "remarks": "Find the active workorders for the crew.",
            "whereClause": "orgid=:orgid and status in (select value from synonymdomain where maxvalue in ('ASSIGNED','STARTED','COMPLETE') and domainid='ASSTAT') and amcrew=:amcrew",
            "cardinality": null
        },
        {
            "name": "LABORWOS",
            "source": "AMCREWLABOR",
            "remarks": "Finds the workorders that the labor is assigned to that has a scheduled start and scheduled finish date",
            "whereClause": "orgid=:orgid  and laborcode=:laborcode and (craft is null or craft=:craft) and (skilllevel is null or skilllevel=:skilllevel) and (vendor is null or vendor=:vendor) and (contractnum is null or contractnum=:contractnum)",
            "cardinality": null
        },
        {
            "name": "ASSIGNDISPATCH",
            "source": "DISPATCHASSIGN",
            "remarks": "Relationship from DispatchAssign back to Assignments.",
            "whereClause": "assignmentid =:assignmentid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSIGNMENT",
            "source": "LABOR",
            "remarks": "Relationship to the ASSIGNMENT table.  (assignment.laborcode=labor.laborcode.)  The resulting set will contain one or more objects.",
            "whereClause": "laborcode=:laborcode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSIGNMENT",
            "source": "LABORCRAFTRATE",
            "remarks": "Relationship to the ASSIGNMENT table.  (assignment.laborcode = laborcraftrate.laborcode.)  The resulting set will contain one or more objects.",
            "whereClause": "laborcode=:laborcode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSIGNMENTNOTHISTORY",
            "source": "LABORCRAFTRATE",
            "remarks": "Relationship to the assignment table where laborcode=laborcode, orgid=:orgid and the workorder is a non-history workorder.",
            "whereClause": "laborcode=:laborcode and ((craft=:craft and :craft is not null) or (:craft is null and craft is null)) and ((skilllevel=:skilllevel and :skilllevel is not null) or (:skilllevel is null and skilllevel is null)) and ((vendor=:vendor and :vendor is not null) or (:vendor is null and vendor is null)) and ((contractnum=:contractnum and :contractnum is not null) or (:contractnum is null and contractnum is null)) and wonum in (select wonum from workorder where historyflag=:no and orgid=:orgid) and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSIGNMENT",
            "source": "SKDACTIVITY",
            "remarks": "Relationship from the SKDActivity table to the Assignment table",
            "whereClause": "assignmentid=:objectid",
            "cardinality": null
        },
        {
            "name": "ASSIGNMENT",
            "source": "SKDEMAVAILRES",
            "remarks": "Assignment records for the emergency work orders available resources",
            "whereClause": "assignmentid=:assignmentid",
            "cardinality": null
        },
        {
            "name": "FROMASSIGNMENT",
            "source": "SLRTRAVELTIME",
            "remarks": "Get the final assignment of a SLRTRAVELTIMEs",
            "whereClause": "assignmentid=:fromassignid",
            "cardinality": null
        },
        {
            "name": "TOASSIGNMENT",
            "source": "SLRTRAVELTIME",
            "remarks": "Get the final assignment of a SLRTRAVELTIMEs",
            "whereClause": "assignmentid=:toassignid",
            "cardinality": null
        },
        {
            "name": "ASSIGNMENT",
            "source": "WMASSIGNMENT",
            "remarks": "Relationship to the Assignment Table; used to find Assignments that are equivalent to WMAssignments.",
            "whereClause": "assignmentid=:assignmentid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSIGNMENT",
            "source": "WORKORDER",
            "remarks": "Relationship to the Assignment table, used to find all assignments for a work order. (assignment.wonum = workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "wonum=:wonum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSIGNMENT_QBE",
            "source": "WORKORDER",
            "remarks": "Relationship from workorder to wpservice for qbe ",
            "whereClause": "exists (select 1 from workorder yy where ((yy.istask = :yes and yy.parent = :wonum ) or (yy.wonum = :wonum)) and assignment.wonum = yy.wonum and yy.siteid = :siteid) and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSIGNMENTNOWPLABORID",
            "source": "WORKORDER",
            "remarks": "Relationship to the Assignment table, used to find all assignments for a work order that does not have reference to WPLABOR. (assignment.wonum = workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "wonum=:wonum and siteid=:siteid and wplaborid is null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PLANNEDLABOR",
            "source": "WORKORDER",
            "remarks": "Relationship to the Assignment table, used to find all not completed assignments for a work order. (assignment.wonum = workorder.wonum and assignment.status not in (Select value  from valuelist where listname='ASSTAT' and maxvalue !='COMPLETE')). This resulting set will contain zero or more objects.",
            "whereClause": "wonum=:wonum and status in  (select value  from synonymdomain where domainid='ASSTAT' and maxvalue !='COMPLETE') and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHOWASSIGNMENT",
            "source": "WORKORDER",
            "remarks": "Relationship to the ShowAssignment Set used by UI for display. This is a  special MboSet used for displaying the planned assignments for a given workorder.\twonum in (select wonum from workorder where (wonum=:wonum or (parent=:wonum and istask = :yes)) and siteid=:siteid ). The resulting set will contain zero or more objects.",
            "whereClause": "wonum in (select wonum from workorder where (wonum=:wonum or (parent=:wonum and istask = :yes)) and siteid=:siteid )",
            "cardinality": "UNDEFINED"
        }
    ]
}