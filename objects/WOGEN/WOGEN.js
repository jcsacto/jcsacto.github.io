mos = {
    "objectName": "WOGEN",
    "className": "psdi.app.pm.WogenSet",
    "description": "Work table for PM scheduling",
    "longDescription": "This table has temporary data for PM work scheduling.",
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "WOGENID",
    "primaryKeyColumns": [
        "SITEID",
        "RUNID",
        "RUNORDER"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "AMCREW",
            "targetObject": "WOGEN",
            "parentKeys": "ORGID, AMCREW",
            "targetKeys": "ORGID, AMCREW",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "WOGEN",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 169",
            "longDescription": null
        },
        {
            "objectName": "CALENDAR",
            "targetObject": "WOGEN",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "ORGID, CALENDAR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 44",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "WOGEN",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "WOGEN",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 226",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "WOGEN",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, STORELOC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 227",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "WOGEN",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WOGEN",
            "parentKeys": "PERSONID",
            "targetKeys": "LEAD",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 418",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WOGEN",
            "parentKeys": "PERSONID",
            "targetKeys": "OWNER",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 419",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WOGEN",
            "parentKeys": "PERSONID",
            "targetKeys": "SUPERVISOR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 420",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "WOGEN",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "ASSIGNEDOWNERGROUP",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 41",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "WOGEN",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "GROUPOWNER",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 42",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "WOGEN",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "OWNERGROUP",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 43",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "WOGEN",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "CREWWORKGROUP",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 60",
            "longDescription": null
        },
        {
            "objectName": "PM",
            "targetObject": "WOGEN",
            "parentKeys": "SITEID, PMNUM",
            "targetKeys": "SITEID, PMNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PM for a forecasted PM generated Work Order",
            "longDescription": null
        },
        {
            "objectName": "ROUTES",
            "targetObject": "WOGEN",
            "parentKeys": "SITEID, ROUTE",
            "targetKeys": "SITEID, ROUTE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Route on work order that would be generated by a PM.",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "WOGEN",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WOGEN",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, PARENT",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 79",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "RUNID",
            "required": true,
            "persistent": true,
            "title": "Run ID",
            "remarks": "Unique identifier for record of this run.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RUNDATE",
            "required": true,
            "persistent": true,
            "title": "Run Date",
            "remarks": "The date this run was created.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RUNORDER",
            "required": true,
            "persistent": true,
            "title": "Run Order",
            "remarks": "Run Order",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PARENT",
            "required": false,
            "persistent": true,
            "title": "Parent",
            "remarks": "The parent work order of this work order",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "STATUS",
            "required": true,
            "persistent": true,
            "title": "WO Status",
            "remarks": "The work order's status",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "WORKTYPE",
            "required": false,
            "persistent": true,
            "title": "Work Type",
            "remarks": "Work Order's Work Type",
            "sameAsAttribute": "WORKTYPE",
            "sameAsObject": "WORKTYPE"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Work Order Description",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": true,
            "title": "Asset",
            "remarks": "Asset Number",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": true,
            "title": "Location",
            "remarks": "Asset Location",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "JPNUM",
            "required": false,
            "persistent": true,
            "title": "Job Plan",
            "remarks": "Job Plan Number",
            "sameAsAttribute": "JPNUM",
            "sameAsObject": "JOBPLAN"
        },
        {
            "attributeName": "PMNUM",
            "required": false,
            "persistent": true,
            "title": "PM",
            "remarks": "Preventive Maintenance Number",
            "sameAsAttribute": "PMNUM",
            "sameAsObject": "PM"
        },
        {
            "attributeName": "WOPRIORITY",
            "required": false,
            "persistent": true,
            "title": "WO Priority",
            "remarks": "Work Order Priority",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TARGSTARTDATE",
            "required": false,
            "persistent": true,
            "title": "Target Start",
            "remarks": "Target Start Date",
            "sameAsAttribute": "TARGSTARTDATE",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "CALENDAR",
            "required": false,
            "persistent": true,
            "title": "Calendar",
            "remarks": "Work Order's Calendar",
            "sameAsAttribute": "CALNUM",
            "sameAsObject": "CALENDAR"
        },
        {
            "attributeName": "DOWNTIME",
            "required": true,
            "persistent": true,
            "title": "Downtime",
            "remarks": "Down Time Required Flag",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CREWID",
            "required": false,
            "persistent": true,
            "title": "Crew ID",
            "remarks": "Crew for the Work Order",
            "sameAsAttribute": "CREWID",
            "sameAsObject": "LABOR"
        },
        {
            "attributeName": "SUPERVISOR",
            "required": false,
            "persistent": true,
            "title": "Supervisor",
            "remarks": "Work Order Supervisor",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CALCPRIORITY",
            "required": false,
            "persistent": true,
            "title": "Calculated Priority",
            "remarks": "Calculated Priority",
            "sameAsAttribute": "CALCPRIORITY",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "WOSEQUENCE",
            "required": false,
            "persistent": true,
            "title": "WO Sequence",
            "remarks": "Sub-Workorder Sequence",
            "sameAsAttribute": "WOSEQUENCE",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "PMDUEDATE",
            "required": false,
            "persistent": true,
            "title": "PM Due Date",
            "remarks": "Date when PM originally generated the work order",
            "sameAsAttribute": "PMDUEDATE",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "PMEXTDATE",
            "required": false,
            "persistent": true,
            "title": "PM Extended Date",
            "remarks": "From the Extended Date of the PM",
            "sameAsAttribute": "PMEXTDATE",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "PMNEXTDUEDATE",
            "required": false,
            "persistent": true,
            "title": "PM Next Due Date",
            "remarks": "Original Next Due Date from the PM",
            "sameAsAttribute": "PMNEXTDUEDATE",
            "sameAsObject": "WORKORDER"
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
            "required": true,
            "persistent": true,
            "title": "Site",
            "remarks": "Site Identifier",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "GLACCOUNT",
            "required": false,
            "persistent": true,
            "title": "GL Account",
            "remarks": "Default GL Account",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WOPM1",
            "required": false,
            "persistent": true,
            "title": "Extra 1",
            "remarks": "WOPM Extra Field #1",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WOPM2",
            "required": false,
            "persistent": true,
            "title": "Extra 2",
            "remarks": "WOPM Extra Field #2",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WOPM3",
            "required": false,
            "persistent": true,
            "title": "Extra 3",
            "remarks": "WOPM Extra Field #3",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WOPM4",
            "required": false,
            "persistent": true,
            "title": "Extra 4",
            "remarks": "WOPM Extra Field #4",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WOPM5",
            "required": false,
            "persistent": true,
            "title": "Extra 5",
            "remarks": "WOPM Extra Field #5",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WOPM6",
            "required": false,
            "persistent": true,
            "title": "Extra 6",
            "remarks": "WOPM Extra Field #6",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WOPM7",
            "required": false,
            "persistent": true,
            "title": "Extra 7",
            "remarks": "WOPM Extra Field #7",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ROUTE",
            "required": false,
            "persistent": true,
            "title": "Route",
            "remarks": "Route Identifier",
            "sameAsAttribute": "ROUTE",
            "sameAsObject": "ROUTES"
        },
        {
            "attributeName": "STORELOC",
            "required": false,
            "persistent": true,
            "title": "Storeroom",
            "remarks": "Storeroom Location",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Long Description for Work Order Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OWNER",
            "required": false,
            "persistent": true,
            "title": "Owner",
            "remarks": "The person currently responsible for this record.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "GROUPOWNER",
            "required": false,
            "persistent": true,
            "title": "Group Owner",
            "remarks": "The group currently responsible for this record.",
            "sameAsAttribute": "PERSONGROUP",
            "sameAsObject": "PERSONGROUP"
        },
        {
            "attributeName": "PARENTCHGSSTATUS",
            "required": true,
            "persistent": true,
            "title": "Inherit Status Changes",
            "remarks": "Flags whether this work order should change its status when the parents status changes.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OWNERGROUP",
            "required": false,
            "persistent": true,
            "title": "OWNERGROUP",
            "remarks": "OWNERGROUP",
            "sameAsAttribute": "PERSONGROUP",
            "sameAsObject": "PERSONGROUP"
        },
        {
            "attributeName": "STORELOCSITE",
            "required": false,
            "persistent": false,
            "title": "Storeroom Site",
            "remarks": "Storeroom's Site",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
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
            "attributeName": "INTERRUPTIBLE",
            "required": true,
            "persistent": true,
            "title": "Interruptible",
            "remarks": "Interruptible Flag",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LEAD",
            "required": false,
            "persistent": true,
            "title": "Lead",
            "remarks": "This defines the lead person for the work order created by  PM",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
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
            "attributeName": "WOGENID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REPFACSITEID",
            "required": false,
            "persistent": false,
            "title": "Repair Facility Site",
            "remarks": "The site for the repair facility.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "REPAIRFACILITY",
            "required": false,
            "persistent": false,
            "title": "Repair Facility",
            "remarks": "Specifies the repair facility location. A repair facility can take ownership of work orders from multiple sites in the same organization. User security can be configured to give permission to view work orders in multiple sites if the work orders are owned by a single repair facility.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "USEASSETDEFREPFAC",
            "required": true,
            "persistent": false,
            "title": "Use Asset's Default Repair Facility",
            "remarks": "Specifies whether the default repair facility of the asset is specified on generated work orders for the asset.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSIGNEDOWNERGROUP",
            "required": false,
            "persistent": true,
            "title": "Assigned Owner Group",
            "remarks": "Identifies the owner group that is currently assigned to the  record. ",
            "sameAsAttribute": "PERSONGROUP",
            "sameAsObject": "PERSONGROUP"
        },
        {
            "attributeName": "PLUSCOVERDUEDATE",
            "required": false,
            "persistent": false,
            "title": "Calibration Overdue Date",
            "remarks": "Calibration Overdue Date",
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
            "attributeName": "CREWWORKGROUP",
            "required": false,
            "persistent": true,
            "title": "Crew Work Group",
            "remarks": "Identifies the resource pool to which the labor belongs.",
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
            "name": "VIEWCONTINPUT",
            "target": "VIEWCONTINPUT",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOGENFORECAST",
            "target": "WOGENFORECAST",
            "remarks": "Relationship to the non-persistent WOGENFORECAST table. (No where clause). The resulting set will contain zero objects. This relationship is used only for the WO Generation Forecasting.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": []
}