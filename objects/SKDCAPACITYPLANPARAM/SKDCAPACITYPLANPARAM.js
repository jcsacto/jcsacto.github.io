mos = {
    "objectName": "SKDCAPACITYPLANPARAM",
    "className": "com.ibm.tivoli.maximo.skd.app.SKDCapacityPlanParamSet",
    "description": "Capacity planning model parameters",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "SKDCAPACITYPLANPARAMID",
    "primaryKeyColumns": [
        "INPUTNAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "SKDCAPACITYPLANPARAM",
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
            "remarks": "Identifies the capacity planning template.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INPUTDESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the capacity planning template.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CMATCHSKILL",
            "required": true,
            "persistent": true,
            "title": "Match Skills",
            "remarks": "Indicates that the work's required skills must be met when planning capacity.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CINCLUDEPRIORITY",
            "required": true,
            "persistent": true,
            "title": "Include Priority",
            "remarks": "Indicates that priority is considered when planning capacity.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CINCLUDEEXTLABOR",
            "required": true,
            "persistent": true,
            "title": "Include External Labor and Crew",
            "remarks": "Indicates that using external labor and crew is allowed when planning capacity.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CSKDWINDOW",
            "required": true,
            "persistent": true,
            "title": "Schedule Window",
            "remarks": "Indicates that the schedule window is considered when planning capacity.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VPRIORITYDIR",
            "required": true,
            "persistent": true,
            "title": "Priority Direction",
            "remarks": "Indicates whether priority is in ascending or descending order when planning capacity.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VENFORCEAMS",
            "required": true,
            "persistent": true,
            "title": "Enforce Asset Maintenance Schedule",
            "remarks": "Indicates whether the capacity planning model should enforce the asset maintenance schedule when planning capacity. Select Enforce to schedule work during the asset maintenance schedule. Select Ignore to schedule work at the earliest available time. Select Consider to allow the model to schedule work outside of the maintenance schedule if necessary.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VENFORCEAOS",
            "required": true,
            "persistent": true,
            "title": "Enforce Asset Operating Schedule",
            "remarks": "Indicates whether the capacity planning model should enforce the asset operating schedule when planning capacity. Select Enforce to schedule work when the asset is not operating. Select Ignore to schedule work at the earliest available time. Select Consider to allow the model to schedule work during asset operation if necessary.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VENFORCELMS",
            "required": true,
            "persistent": true,
            "title": "Enforce Location Maintenance Schedule",
            "remarks": "Indicates whether the capacity planning model should enforce the location maintenance schedule when planning capacity. Select Enforce to schedule work during the location maintenance schedule. Select Ignore to schedule work at the earliest available time. Select Consider to allow the model to schedule work outside of the maintenance schedule if necessary.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VPERCTAVAIL",
            "required": true,
            "persistent": true,
            "title": "Percentage Availability %",
            "remarks": "Indicates the percentage of available resources for this schedule. For example, if you have 10 electricians, but only 7 are available, select 70%.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AVITERATIONLIMIT",
            "required": true,
            "persistent": true,
            "title": "Iterations Limit",
            "remarks": "The number of times the capacity planning model runs before returning a result. The higher the limit is, the more precise the results are.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISTEMPLATE",
            "required": true,
            "persistent": true,
            "title": "Is Template",
            "remarks": "Set to 1 if parameters are specified through capacity planning template dialog or the default is set to 0.",
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
            "attributeName": "AVSOLNPRECISION",
            "required": true,
            "persistent": true,
            "title": "Solution Precision",
            "remarks": "Solution precision when planning capacity.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VENFORCELOS",
            "required": true,
            "persistent": true,
            "title": "Enforce Location Operating Schedule",
            "remarks": "Indicates whether the capacity planning model should enforce the location operating schedule when planning capacity. Select Enforce to schedule work when the location is not operating. Select Ignore to schedule work at the earliest available time. Select Consider to allow the model to schedule work during location operation if necessary.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VSTARTDATE",
            "required": false,
            "persistent": true,
            "title": "Start Date",
            "remarks": "Indicates the date on which the work can start.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VENDDATE",
            "required": false,
            "persistent": true,
            "title": "End Date",
            "remarks": "Indicates the date by which all work must be complete.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SKDCAPACITYPLANPARAMID",
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
        }
    ],
    "outgoingRelationships": [
        {
            "name": "SKDPROJECTSCENARIO",
            "target": "SKDPROJECTSCENARIO",
            "remarks": "Relationship to the SKDProjectScenerio table, used to find all project scenerio's using capacity planning template. ",
            "whereClause": "inputobjid =:skdcapacityplanparamid",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "CAPACITYPLANPARAM",
            "source": "SKDPROJECTSCENARIO",
            "remarks": "Capacity Planning Parameter.",
            "whereClause": "skdcapacityplanparamid=:inputobjid ",
            "cardinality": null
        },
        {
            "name": "CAPPLANPARAM",
            "source": "SKDPROJECTSCENARIO",
            "remarks": "Capacity Planning Parameter",
            "whereClause": "skdcapacityplanparamid=:inputobjid",
            "cardinality": null
        }
    ]
}