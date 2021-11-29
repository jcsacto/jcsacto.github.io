mos = {
    "objectName": "WOGENFORECAST",
    "className": "psdi.app.pm.virtual.WogenForecastSet",
    "description": "Non Persistent Table to forecast wogen",
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
            "attributeName": "PARENT",
            "required": false,
            "persistent": false,
            "title": "Parent",
            "remarks": "The parent work order of this work order",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "STATUS",
            "required": false,
            "persistent": false,
            "title": "WO Status",
            "remarks": "The work order's status",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "WORKTYPE",
            "required": false,
            "persistent": false,
            "title": "Work Type",
            "remarks": "Work Order's Work Type",
            "sameAsAttribute": "WORKTYPE",
            "sameAsObject": "WORKTYPE"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "Work Order Description",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": false,
            "title": "Asset",
            "remarks": "Asset Number",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": false,
            "title": "Location",
            "remarks": "Asset Location",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "JPNUM",
            "required": false,
            "persistent": false,
            "title": "Job Plan",
            "remarks": "Job Plan Number",
            "sameAsAttribute": "JPNUM",
            "sameAsObject": "JOBPLAN"
        },
        {
            "attributeName": "ESTDUR",
            "required": false,
            "persistent": false,
            "title": "Estimated Duration",
            "remarks": "Estimated Work Order Duration",
            "sameAsAttribute": "ESTDUR",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ESTLABHRS",
            "required": false,
            "persistent": false,
            "title": "Estimated Labor Hours",
            "remarks": "Estimated Labor Hours",
            "sameAsAttribute": "ESTLABHRS",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "PMNUM",
            "required": false,
            "persistent": false,
            "title": "PM",
            "remarks": "Preventive Maintenance Number",
            "sameAsAttribute": "PMNUM",
            "sameAsObject": "PM"
        },
        {
            "attributeName": "HASCHILDREN",
            "required": true,
            "persistent": false,
            "title": "Has Children",
            "remarks": "Has Children Flag",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WOPRIORITY",
            "required": false,
            "persistent": false,
            "title": "WO Priority",
            "remarks": "Work Order Priority",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TARGCOMPDATE",
            "required": false,
            "persistent": false,
            "title": "Target Completion Date",
            "remarks": "Target Completion Date",
            "sameAsAttribute": "TARGCOMPDATE",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "TARGSTARTDATE",
            "required": false,
            "persistent": false,
            "title": "Target Start",
            "remarks": "Target Start Date",
            "sameAsAttribute": "TARGSTARTDATE",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "CALENDAR",
            "required": false,
            "persistent": false,
            "title": "Calendar",
            "remarks": "Work Order's Calendar",
            "sameAsAttribute": "CALNUM",
            "sameAsObject": "CALENDAR"
        },
        {
            "attributeName": "DOWNTIME",
            "required": true,
            "persistent": false,
            "title": "Downtime",
            "remarks": "Down Time Required Flag",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CREWID",
            "required": false,
            "persistent": false,
            "title": "Crew ID",
            "remarks": "Crew for the Work Order",
            "sameAsAttribute": "CREWID",
            "sameAsObject": "LABOR"
        },
        {
            "attributeName": "SUPERVISOR",
            "required": false,
            "persistent": false,
            "title": "Supervisor",
            "remarks": "Work Order Supervisor",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CALCPRIORITY",
            "required": false,
            "persistent": false,
            "title": "Calculated Priority",
            "remarks": "Calculated Priority",
            "sameAsAttribute": "CALCPRIORITY",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "WOSEQUENCE",
            "required": false,
            "persistent": false,
            "title": "WO Sequence",
            "remarks": "Sub-WorkOrder Sequence",
            "sameAsAttribute": "WOSEQUENCE",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "PMDUEDATE",
            "required": false,
            "persistent": false,
            "title": "PM Due Date",
            "remarks": "Date When PM originally generated the workorder",
            "sameAsAttribute": "PMDUEDATE",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "PMEXTDATE",
            "required": false,
            "persistent": false,
            "title": "PM Extended Date",
            "remarks": "From the Extended Date of the PM",
            "sameAsAttribute": "PMEXTDATE",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "PMNEXTDUEDATE",
            "required": false,
            "persistent": false,
            "title": "PM Next Due Date",
            "remarks": "Original Next Due Date from the PM",
            "sameAsAttribute": "PMNEXTDUEDATE",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": false,
            "title": "Organization",
            "remarks": "Orgainization Identifier",
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
            "attributeName": "TASKID",
            "required": false,
            "persistent": false,
            "title": "Task",
            "remarks": "Work Order Task Identifier",
            "sameAsAttribute": "TASKID",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "GLACCOUNT",
            "required": false,
            "persistent": false,
            "title": "GL Account",
            "remarks": "Default GL Account",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WOPM1",
            "required": false,
            "persistent": false,
            "title": "Extra 1",
            "remarks": "WOPM Extra Field #1",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WOPM2",
            "required": false,
            "persistent": false,
            "title": "Extra 2",
            "remarks": "WOPM Extra Field #2",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WOPM3",
            "required": false,
            "persistent": false,
            "title": "Extra 3",
            "remarks": "WOPM Extra Field #3",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WOPM4",
            "required": false,
            "persistent": false,
            "title": "Extra 4",
            "remarks": "WOPM Extra Field #4",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WOPM5",
            "required": false,
            "persistent": false,
            "title": "Extra 5",
            "remarks": "WOPM Extra Field #5",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WOPM6",
            "required": false,
            "persistent": false,
            "title": "Extra 6",
            "remarks": "WOPM Extra Field #6",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WOPM7",
            "required": false,
            "persistent": false,
            "title": "Extra 7",
            "remarks": "WOPM Extra Field #7",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STORELOC",
            "required": false,
            "persistent": false,
            "title": "Storeroom",
            "remarks": "Storeroom Location",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "ISTASK",
            "required": true,
            "persistent": false,
            "title": "Task",
            "remarks": "Is the workorder a task?",
            "sameAsAttribute": "ISTASK",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "WONUM",
            "required": false,
            "persistent": false,
            "title": "Work Order",
            "remarks": "Work Order Number",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ASSETLOCPRIORITY",
            "required": false,
            "persistent": false,
            "title": "Asset/Location Priority",
            "remarks": "Work Place Priority",
            "sameAsAttribute": "ASSETLOCPRIORITY",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "PARENTJP",
            "required": false,
            "persistent": false,
            "title": "Parent Job Plan",
            "remarks": "Unique Identifier For Parent Job Plan",
            "sameAsAttribute": "JPNUM",
            "sameAsObject": "JOBPLAN"
        },
        {
            "attributeName": "PARENTCHGSSTATUS",
            "required": true,
            "persistent": false,
            "title": "Inherit Status Changes",
            "remarks": "Flags whether the parent work order should change the childs status",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INTERRUPTIBLE",
            "required": true,
            "persistent": false,
            "title": "Interruptible",
            "remarks": "Interruptible Flag",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Long Description",
            "remarks": "Long Description text",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STORELOCSITE",
            "required": false,
            "persistent": false,
            "title": "Storeroom Site",
            "remarks": "Storeroom's Site",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ASSET",
            "target": "ASSET",
            "remarks": "Relationship to the Asset Mbo for the assetnum referenced on this Mbo One or zero members.",
            "whereClause": "assetnum= :assetnum and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WPLABOR",
            "target": "JOBLABOR",
            "remarks": "Relationship to the JobLabor information for this work order information. Zero to many members.",
            "whereClause": "(jpnum = :jpnum and jptask is null) or (jpnum = :parentjp and jptask = :taskid) and (siteid=:siteid or siteid is null)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WPMATERIAL",
            "target": "JOBMATERIAL",
            "remarks": "Relationship to the JobMaterial information for this work order information. Zero to many members.",
            "whereClause": "(jpnum = :jpnum and jptask is null) or (jpnum = :parentjp and jptask = :taskid) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WPTOOL",
            "target": "JOBTOOL",
            "remarks": "Relationship to the JobTool information for this work order information. Zero to many members.",
            "whereClause": "(jpnum = :jpnum and jptask is null) or (jpnum = :parentjp and jptask = :taskid) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONS",
            "target": "LOCATIONS",
            "remarks": "Relationship to the locations Mbo for the location referenced on this Mbo. One or zero members.",
            "whereClause": "location=:location and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "target": "VIEWWOPMS",
            "remarks": "Relationship from the WOGENFORECAST to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "WOGENFORECAST",
            "source": "WOGEN",
            "remarks": "Relationship to the non-persistent WOGENFORECAST table. (No where clause). The resulting set will contain zero objects. This relationship is used only for the WO Generation Forecasting.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}