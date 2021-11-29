mos = {
    "objectName": "SKDSPATIALPARAM",
    "className": "com.ibm.tivoli.maximo.skd.app.SKDSpatialParamSet",
    "description": "Spatial scheduling model parameters",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "SKDSPATIALPARAMID",
    "primaryKeyColumns": [
        "INPUTNAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "SKDSPATIALPARAM",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Record Language",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "INPUTNAME",
            "required": true,
            "persistent": true,
            "title": "Name",
            "remarks": "Identifies the spatial scheduling template.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INPUTDESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the spatial scheduling template.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CMATCHSKILL",
            "required": true,
            "persistent": true,
            "title": "Match Skills",
            "remarks": "Indicates that the work's required skills must be met when assigning labor and crews based on their location and work location.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CSKDWINDOW",
            "required": true,
            "persistent": true,
            "title": "Schedule Window",
            "remarks": "Indicates that the work's scheduled dates should not occur outside the schedule window.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CINCLUDEPRIORITY",
            "required": true,
            "persistent": true,
            "title": "Complete High Priority Work First",
            "remarks": "Indicates that the highest priority work should be assigned to resources as soon as possible.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OMINTASKINTERRUPT",
            "required": true,
            "persistent": true,
            "title": "Minimize Task Interruptions",
            "remarks": "Indicates that the interruption of interruptible tasks should be minimized when assigning labor and crews based on their location and work location.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OMAXASSIGNWO",
            "required": true,
            "persistent": true,
            "title": "Maximize the Number of Assigned Work Orders",
            "remarks": "Indicates that as many work orders as possible should be assigned when assigning labor and crews based on their location and work location.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OMAXSUMPRWO",
            "required": true,
            "persistent": true,
            "title": "Maximize the Sum-product of Prioritized Work Orders",
            "remarks": "Indicates that as much high priority work as possible should be assigned, and then available time filled with other work.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OMINTASKTIME",
            "required": true,
            "persistent": true,
            "title": "Minimize Task Completion Time",
            "remarks": "Minimize the overall work completion time when assigning labor and crews based on their location and work location.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OMINTRAVELTIME",
            "required": true,
            "persistent": true,
            "title": "Minimize Travel Time",
            "remarks": "Indicates that travel time should be minimized when assigning labor and crews based on their location and work location.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CINCLUDETRAVELTIME",
            "required": true,
            "persistent": true,
            "title": "Include Travel Time in Total Time",
            "remarks": "Indicates that travel time is considered when assigning labor and crew based on their location and work location.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CPERCTBUFFER",
            "required": true,
            "persistent": true,
            "title": "Travel Time Buffer %",
            "remarks": "Indicates the percentage of additional time to be added to the travel time between work locations.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VPRIORITYDIR",
            "required": true,
            "persistent": true,
            "title": "Priority Direction",
            "remarks": "Indicates whether priority is in ascending or descending order when leveling resources.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VENFORCEAMS",
            "required": true,
            "persistent": true,
            "title": "Enforce Asset Maintenance Schedule",
            "remarks": "Indicates whether the spatial scheduling model should enforce the asset maintenance schedule when assigning labor and crews based on their location and work location. Select Enforce to schedule work during the asset maintenance schedule. Select Ignore to schedule work at the earliest available time. Select Consider to allow the model to schedule work outside of the maintenance schedule if necessary.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VENFORCEAOS",
            "required": true,
            "persistent": true,
            "title": "Enforce Asset Operating Schedule",
            "remarks": "Indicates whether the spatial scheduling model should enforce the asset operating schedule when assigning labor and crews based on their location and work location. Select Enforce to schedule work when the asset is not operating. Select Ignore to schedule work at the earliest available time. Select Consider to allow the model to schedule work during asset operation if necessary.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VENFORCELMS",
            "required": true,
            "persistent": true,
            "title": "Enforce Location Maintenance Schedule",
            "remarks": "Indicates whether the spatial scheduling model should enforce the location maintenance schedule when assigning labor and crews based on their location and work location. Select Enforce to schedule work during the location maintenance schedule. Select Ignore to schedule work at the earliest available time. Select Consider to allow the model to schedule work outside of the maintenance schedule if necessary.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VENFORCELOS",
            "required": true,
            "persistent": true,
            "title": "Enforce Location Operating Schedule",
            "remarks": "Indicates whether the spatial scheduling model should enforce the location operating schedule when assigning labor and crews based on their location and work location. Select Enforce to schedule work when the location is not operating. Select Ignore to schedule work at the earliest available time. Select Consider to allow the model to schedule work during location operation if necessary.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VRESOLUTIONMIN",
            "required": true,
            "persistent": true,
            "title": "Resolution Minutes",
            "remarks": "The increment of time used when planning capacity, in minutes.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISTEMPLATE",
            "required": true,
            "persistent": true,
            "title": "Is Template",
            "remarks": "Set to 1 if parameters are specified through spatial scheduling template dialog or the default is set to 0.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SKDSPATIALPARAMID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
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
            "attributeName": "INPUTDESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description Long description",
            "remarks": "Long Description for Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LANGCODE",
            "required": true,
            "persistent": true,
            "title": "Language Code",
            "remarks": "Language Code",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        },
        {
            "attributeName": "CASSIGNTIMEBUFFER",
            "required": true,
            "persistent": true,
            "title": "Assign Time Buffer Minutes",
            "remarks": "Indicates the minutes of additional time to be added to the current time.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "SKDPROJECTSCENARIO",
            "target": "SKDPROJECTSCENARIO",
            "remarks": "Relationship to the SKDProjectScenerio table, used to find all project scenerio's using spatial scheduling template. ",
            "whereClause": "inputobjid =:skdspatialparamid",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "SPATIALPARAM",
            "source": "SKDPROJECTSCENARIO",
            "remarks": "Spatial scheduling model parameters",
            "whereClause": "skdspatialparamid=:inputobjid",
            "cardinality": null
        }
    ]
}