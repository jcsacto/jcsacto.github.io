mos = {
    "objectName": "SKDLABORMODPARAM",
    "className": "com.ibm.tivoli.maximo.skd.app.SKDLaborModParamSet",
    "description": "Labor assignment model parameters",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "SKDLABORMODPARAMID",
    "primaryKeyColumns": [
        "INPUTNAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "SKDLABORMODPARAM",
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
            "remarks": "Identifies the labor assignment template.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INPUTDESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the labor assignment template.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CMATCHSKILL",
            "required": true,
            "persistent": true,
            "title": "Match Skills",
            "remarks": "Indicates that the work's required skills must be met when assigning labor and crew.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CSKDWINDOW",
            "required": true,
            "persistent": true,
            "title": "Schedule Window",
            "remarks": "Indicates that the schedule window is considered when assigning labor and crew.",
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
            "remarks": "Indicates that the interruption of interruptible tasks should be minimized when assigning labor and crew.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OMAXASSIGNWO",
            "required": true,
            "persistent": true,
            "title": "Maximize the Number of Assigned Work Orders",
            "remarks": "Indicates that as many work orders as possible should be assigned when assigning labor and crew.",
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
            "remarks": "Minimize the task completion time when assigning labor and crew.",
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
            "remarks": "Indicates whether the labor and crew assignment model should enforce the asset maintenance schedule when assigning labor and crew. Select Enforce to schedule work during the asset maintenance schedule. Select Ignore to schedule work at the earliest available time.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VENFORCEAOS",
            "required": true,
            "persistent": true,
            "title": "Enforce Asset Operating Schedule",
            "remarks": "Indicates whether the labor and crew assignment model should enforce the asset operating schedule when assigning labor and crew. Select Enforce to schedule work when the asset is not operating. Select Ignore to schedule work at the earliest available time.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VENFORCELMS",
            "required": true,
            "persistent": true,
            "title": "Enforce Location Maintenance Schedule",
            "remarks": "Indicates whether the labor and crew model should enforce the location maintenance schedule when assigning labor and crew. Select Enforce to schedule work during the location maintenance schedule. Select Ignore to schedule work at the earliest available time.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VENFORCELOS",
            "required": true,
            "persistent": true,
            "title": "Enforce Location Operating Schedule",
            "remarks": "Indicates whether the labor and crew model should enforce the location operating schedule when assigning labor and crew. Select Enforce to schedule work when the location is not operating. Select Ignore to schedule work at the earliest available time.",
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
            "remarks": "Set to 1 if parameters are specified through labor assignment template dialog or the default is set to 0.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SKDLABORMODPARAMID",
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
            "remarks": "Relationship to the SKDProjectScenerio table, used to find all project scenerio's using labor assignment template. ",
            "whereClause": "inputobjid =:skdlabormodparamid",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "LABORMODPARAM",
            "source": "SKDPROJECTSCENARIO",
            "remarks": "Labor assignment model Parameters",
            "whereClause": "skdlabormodparamid=:inputobjid",
            "cardinality": null
        }
    ]
}