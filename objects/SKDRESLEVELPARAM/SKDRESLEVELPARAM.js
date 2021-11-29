mos = {
    "objectName": "SKDRESLEVELPARAM",
    "className": "com.ibm.tivoli.maximo.skd.app.SKDResLevelParamSet",
    "description": "Resource leveling model parameters",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "SKDRESLEVELPARAMID",
    "primaryKeyColumns": [
        "INPUTNAME"
    ],
    "logicalRelationships": [
        {
            "objectName": "SKDRESLEVELPARAM",
            "targetObject": "SKDPROJECTSCENARIO",
            "parentKeys": "INPUTNAME",
            "targetKeys": "INPUTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "ODM Input Parameters",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "SKDRESLEVELPARAM",
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
            "remarks": "Identifies the resource leveling template.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INPUTDESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the resource leveling template.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CMATCHSKILL",
            "required": true,
            "persistent": true,
            "title": "Match Skills",
            "remarks": "Indicates that the work's required skills must be met when leveling resources.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CINCLUDEPRIORITY",
            "required": true,
            "persistent": true,
            "title": "Include Priority",
            "remarks": "Indicates that priority is considered when leveling resources.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CINCLUDEEXTLABOR",
            "required": true,
            "persistent": true,
            "title": "Include External Labor and Crew",
            "remarks": "Indicates that using external labor and crew is allowed when leveling resources.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CSKDWINDOW",
            "required": true,
            "persistent": true,
            "title": "Schedule Window",
            "remarks": "Indicates that the schedule window is considered when leveling resources.",
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
            "remarks": "Indicates whether the resource leveling model should enforce the asset maintenance schedule when leveling resources. Select Enforce to schedule work during the asset maintenance schedule. Select Ignore to schedule work at the earliest available time. Select Consider to allow the model to schedule work outside of the maintenance schedule if necessary.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VENFORCEAOS",
            "required": true,
            "persistent": true,
            "title": "Enforce Asset Operating Schedule",
            "remarks": "Indicates whether the resource leveling model should enforce the asset operating schedule when leveling resources. Select Enforce to schedule work when the asset is not operating. Select Ignore to schedule work at the earliest available time. Select Consider to allow the model to schedule work during asset operation if necessary.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VENFORCELMS",
            "required": true,
            "persistent": true,
            "title": "Enforce Location Maintenance Schedule",
            "remarks": "Indicates whether the resource leveling model should enforce the location maintenance schedule when leveling resources. Select Enforce to schedule work during the location maintenance schedule. Select Ignore to schedule work at the earliest available time. Select Consider to allow the model to schedule work outside of the maintenance schedule if necessary.",
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
            "remarks": "The number of times the resource leveling model runs before returning a result. The higher the limit is, the more precise the results are.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISTEMPLATE",
            "required": true,
            "persistent": true,
            "title": "Is Template",
            "remarks": "Set to 1 if parameters are specified through resourse leveling template dialog or the default is set to 0.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VRESOLUTIONMIN",
            "required": true,
            "persistent": true,
            "title": "Resolution Minutes",
            "remarks": "Indicates the number of minutes to which the scheduled work increments should be rounded off to.  For example, if the resolution minutes is set to 15,  scheduled work will be rounded off to the next 15 minute interval.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AVSOLNPRECISION",
            "required": true,
            "persistent": true,
            "title": "Solution Precision",
            "remarks": "Solution precision when leveling resources.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VENFORCELOS",
            "required": true,
            "persistent": true,
            "title": "Enforce Location Operating Schedule",
            "remarks": "Indicates whether the resource leveling model should enforce the location operating schedule when leveling resources. Select Enforce to schedule work when the location is not operating. Select Ignore to schedule work at the earliest available time. Select Consider to allow the model to schedule work during location operation if necessary.",
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
            "attributeName": "SKDRESLEVELPARAMID",
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
            "remarks": "Relationship to the SKDProjectScenerio table, used to find all project scenerio's using resource leveling template.",
            "whereClause": "inputobjid =:skdreslevelparamid",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "RESLEVELPARAM",
            "source": "SKDPROJECTSCENARIO",
            "remarks": "Resource Leveling Parameter",
            "whereClause": "skdreslevelparamid=:inputobjid",
            "cardinality": null
        }
    ]
}