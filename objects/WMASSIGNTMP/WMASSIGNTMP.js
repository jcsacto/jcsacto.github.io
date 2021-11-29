mos = {
    "objectName": "WMASSIGNTMP",
    "className": "com.ibm.tivoli.maximo.amcrew.app.labor.WMAssignTmpSet",
    "description": "Table to store temporary WMASSIGNMENT data",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "WMASSIGNTMPID",
    "primaryKeyColumns": [
        "WMASSIGNTMPID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "AMCREW",
            "targetObject": "WMASSIGNTMP",
            "parentKeys": "ORGID, AMCREW",
            "targetKeys": "ORGID, AMCREW",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew",
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
            "objectName": "ORGANIZATION",
            "targetObject": "WMASSIGNTMP",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "WMASSIGNTMP",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "CREWWORKGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Work Group",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "WMASSIGNTMP",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WMASSIGNTMP",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Order",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "WONUM",
            "required": false,
            "persistent": true,
            "title": "Work Order",
            "remarks": "Identifies the work order for which you are reporting actuals.",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "TASKID",
            "required": false,
            "persistent": true,
            "title": "Task",
            "remarks": "Task ID",
            "sameAsAttribute": "TASKID",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Description.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "STARTTIME",
            "required": false,
            "persistent": true,
            "title": "Start Time",
            "remarks": "The time the reported work began.",
            "sameAsAttribute": "STARTTIME",
            "sameAsObject": "ASSIGNMENT"
        },
        {
            "attributeName": "ENDTIME",
            "required": false,
            "persistent": true,
            "title": "End Time",
            "remarks": "The time the reported work was completed.",
            "sameAsAttribute": "ENDTIME",
            "sameAsObject": "ASSIGNMENT"
        },
        {
            "attributeName": "EXISTREC",
            "required": false,
            "persistent": true,
            "title": "Exist Record",
            "remarks": "Exist Record",
            "sameAsAttribute": "EXISTREC",
            "sameAsObject": "ASSIGNMENT"
        },
        {
            "attributeName": "ESTDUR",
            "required": false,
            "persistent": true,
            "title": "Est Duration",
            "remarks": "Estimated Duration",
            "sameAsAttribute": "ESTDUR",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ACTDUR",
            "required": false,
            "persistent": true,
            "title": "Actual Duration",
            "remarks": "Actual Duration",
            "sameAsAttribute": "ACTDUR",
            "sameAsObject": "ASSIGNMENT"
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
            "attributeName": "SCHEDULEDATE",
            "required": false,
            "persistent": true,
            "title": "Schedule Date",
            "remarks": "Schedule Date",
            "sameAsAttribute": "SCHEDULEDATE",
            "sameAsObject": "ASSIGNMENT"
        },
        {
            "attributeName": "ASSIGNMENTID",
            "required": false,
            "persistent": true,
            "title": "Assigment ID",
            "remarks": "ID of the related assigment",
            "sameAsAttribute": "ASSIGNMENTID",
            "sameAsObject": "ASSIGNMENT"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization ID",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "Site ID",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "CREWWORKGROUP",
            "required": false,
            "persistent": true,
            "title": "Crew Work Group",
            "remarks": "Identifies the resource pool to which the labor belongs.",
            "sameAsAttribute": "PERSONGROUP",
            "sameAsObject": "PERSONGROUP"
        },
        {
            "attributeName": "WMASSIGNTMPID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "WORKORDER",
            "target": "WORKORDER",
            "remarks": "Relationship from table WMASSIGNTMP to WORKORDER.",
            "whereClause": "siteid=:siteid and ((wonum=:wonum and taskid=:taskid) or (parent=:wonum and taskid=:taskid) or (wonum=:wonum and taskid is null))",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "WMASSIGNTMP",
            "source": "LABTRANSENTERBY",
            "remarks": "Relationship from non persistent table LABTRANSENTERBY to WMASSIGNTMP.",
            "whereClause": "amcrew=:amcrew",
            "cardinality": null
        }
    ]
}