mos = {
    "objectName": "ASSIGNREPLOC",
    "className": "psdi.app.workorder.AssignRepLocSet",
    "description": "Location Assignment table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "ASSIGNREPLOCID",
    "primaryKeyColumns": [
        "ASSIGNREPLOCID"
    ],
    "logicalRelationships": [
        {
            "objectName": "ASSIGNREPLOC",
            "targetObject": "WORKLOG",
            "parentKeys": "ASSIGNREPLOCID",
            "targetKeys": "ASSIGNREPLOCID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location Assignment",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "LOCATIONS",
            "targetObject": "ASSIGNREPLOC",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "REPLOCSITEID, REPAIRLOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Repair Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "ASSIGNREPLOC",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "REPLOCSITEID, TOPLEVELLOCATION",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 40",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "ASSIGNREPLOC",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, REPAIRLOCATION",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 41",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "ASSIGNREPLOC",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, TOPLEVELLOCATION",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 42",
            "longDescription": null
        },
        {
            "objectName": "LOCSYSTEM",
            "targetObject": "ASSIGNREPLOC",
            "parentKeys": "SITEID, SYSTEMID",
            "targetKeys": "REPLOCSITEID, SYSTEMID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 1",
            "longDescription": null
        },
        {
            "objectName": "LOCSYSTEM",
            "targetObject": "ASSIGNREPLOC",
            "parentKeys": "SITEID, SYSTEMID",
            "targetKeys": "SITEID, SYSTEMID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location System",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "ASSIGNREPLOC",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "ASSIGNREPLOC",
            "parentKeys": "SITEID",
            "targetKeys": "REPLOCSITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "ASSIGNREPLOC",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "ASSIGNREPLOC",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "REPLOCSITEID, WONUM",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Work Order",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "ASSIGNREPLOC",
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
            "required": true,
            "persistent": true,
            "title": "Work Order",
            "remarks": "The work order number that is assigned to this repair location.",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "REPAIRLOCATION",
            "required": false,
            "persistent": true,
            "title": "Location",
            "remarks": "Specifies the repair facility location.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "REPLOCSITEID",
            "required": false,
            "persistent": true,
            "title": "Repair Facility Site",
            "remarks": "Identifies the site of the repair location.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "TOPLEVELLOCATION",
            "required": false,
            "persistent": true,
            "title": "Top Level Location",
            "remarks": "Identifies the top-level parent of the repair location.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "STATUS",
            "required": true,
            "persistent": true,
            "title": "Status",
            "remarks": "Status of the repair location assignment.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STARTDATE",
            "required": false,
            "persistent": true,
            "title": "Scheduled Start",
            "remarks": "The date/time when the work is scheduled to begin.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FINISHDATE",
            "required": false,
            "persistent": true,
            "title": "Scheduled Finish",
            "remarks": "The date/time when the work is scheduled to end.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HOURS",
            "required": false,
            "persistent": true,
            "title": "Hours",
            "remarks": "Duration of the work.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Identifies the organization.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": true,
            "persistent": true,
            "title": "Site",
            "remarks": "Identifies the site.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "SYSTEMID",
            "required": false,
            "persistent": true,
            "title": "System",
            "remarks": "Identifies the locations system.",
            "sameAsAttribute": "SYSTEMID",
            "sameAsObject": "LOCSYSTEM"
        },
        {
            "attributeName": "APPOINTMENT",
            "required": true,
            "persistent": true,
            "title": "Appointment",
            "remarks": "Indicates whether an appointment is scheduled.",
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
            "attributeName": "WORKLOG",
            "required": true,
            "persistent": true,
            "title": "WORKLOG",
            "remarks": "Indicates if work log exists for the assignment.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PRIMARYFLAG",
            "required": true,
            "persistent": true,
            "title": "Primary Flag",
            "remarks": "First assignment record for WO is primary all others are secondary.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSIGNREPLOCID",
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
            "name": "ASSIGNLOC",
            "target": "ASSIGNLOC",
            "remarks": "Relationship to the nonpersistent parameter set for dispatch location.",
            "whereClause": "",
            "cardinality": null
        },
        {
            "name": "REPLOCATION",
            "target": "LOCATIONS",
            "remarks": "Relationship to LOCATIONS table.",
            "whereClause": "location=:repairlocation and siteid=:replocsiteid",
            "cardinality": null
        },
        {
            "name": "WORKORDER",
            "target": "WORKORDER",
            "remarks": "Relationship to the Workorder table, used to find the work order for a given assignment. (workorder.wonum=assignreploc.wonum). This resulting set will contain one object.",
            "whereClause": "wonum=:wonum and siteid=:siteid",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "REPLOCASSIGN",
            "source": "LOCATIONS",
            "remarks": "Relationship to ASSIGNREPLOC table.",
            "whereClause": "repairlocation=:location and replocsiteid=:siteid",
            "cardinality": null
        },
        {
            "name": "ASSIGNREPLOC",
            "source": "LOCATIONS",
            "remarks": "Relationship to ASSIGNREPLOC table.",
            "whereClause": "repairlocation=:location and replocsiteid=:siteid",
            "cardinality": null
        },
        {
            "name": "PRIMARYASSIGNREPLOC",
            "source": "WORKORDER",
            "remarks": "Relationship to ASSIGNREPLOC table with the primaryflag as true.",
            "whereClause": "wonum=:wonum and siteid=:siteid and primaryflag =:yes",
            "cardinality": null
        },
        {
            "name": "ASSIGNREPLOC",
            "source": "WORKORDER",
            "remarks": "Relationship to ASSIGNREPLOC table.",
            "whereClause": "wonum=:wonum and siteid=:siteid",
            "cardinality": null
        }
    ]
}