mos = {
    "objectName": "LAUNCHPOINTVARS",
    "className": "com.ibm.ism.script.autoscript.ScriptLaunchPointVarsSet",
    "description": "Launch Point Variables",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "LAUNCHPOINTVARSID",
    "primaryKeyColumns": [
        "LAUNCHPOINTNAME",
        "AUTOSCRIPT",
        "VARNAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "AUTOSCRIPT",
            "targetObject": "LAUNCHPOINTVARS",
            "parentKeys": "AUTOSCRIPT",
            "targetKeys": "AUTOSCRIPT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Automation Script",
            "longDescription": null
        },
        {
            "objectName": "AUTOSCRIPTVARS",
            "targetObject": "LAUNCHPOINTVARS",
            "parentKeys": "AUTOSCRIPT, VARNAME",
            "targetKeys": "AUTOSCRIPT, VARNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Launch Point Variables",
            "longDescription": null
        },
        {
            "objectName": "SCRIPTLAUNCHPOINT",
            "targetObject": "LAUNCHPOINTVARS",
            "parentKeys": "LAUNCHPOINTNAME, AUTOSCRIPT",
            "targetKeys": "LAUNCHPOINTNAME, AUTOSCRIPT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Launch Point Variables",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "LAUNCHPOINTNAME",
            "required": true,
            "persistent": true,
            "title": "Launch Point",
            "remarks": "Name for the launch point",
            "sameAsAttribute": "LAUNCHPOINTNAME",
            "sameAsObject": "SCRIPTLAUNCHPOINT"
        },
        {
            "attributeName": "AUTOSCRIPT",
            "required": true,
            "persistent": true,
            "title": "Script",
            "remarks": "Name of the script",
            "sameAsAttribute": "AUTOSCRIPT",
            "sameAsObject": "AUTOSCRIPT"
        },
        {
            "attributeName": "VARNAME",
            "required": true,
            "persistent": true,
            "title": "Variable",
            "remarks": "Name of the variable used within the launch point",
            "sameAsAttribute": "VARNAME",
            "sameAsObject": "AUTOSCRIPTVARS"
        },
        {
            "attributeName": "VARBINDINGVALUE",
            "required": true,
            "persistent": true,
            "title": "Binding Value",
            "remarks": "Overridden value for the variable",
            "sameAsAttribute": "VARBINDINGVALUE",
            "sameAsObject": "AUTOSCRIPTVARS"
        },
        {
            "attributeName": "OVERRIDDEN",
            "required": true,
            "persistent": false,
            "title": "Overridden",
            "remarks": "Indicates if the value for the variable has been overridden",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LAUNCHPOINTVARSID",
            "required": true,
            "persistent": true,
            "title": "Unique Identifier",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VARBINDINGTYPE",
            "required": false,
            "persistent": false,
            "title": "VARBINDINGTYPE",
            "remarks": "Binding type for the variable",
            "sameAsAttribute": "VARBINDINGTYPE",
            "sameAsObject": "AUTOSCRIPTVARS"
        },
        {
            "attributeName": "LITERALDATATYPE",
            "required": false,
            "persistent": false,
            "title": "LITERALDATATYPE",
            "remarks": "A literal data type value. More information",
            "sameAsAttribute": "MAXTYPE",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "LPATTRIBUTEVALUENP",
            "required": false,
            "persistent": false,
            "title": "Binding Value",
            "remarks": "Binding value associated with a specific launch point attribute.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "AUTOSCRIPTVARS",
            "target": "AUTOSCRIPTVARS",
            "remarks": "Relationship to the  AUTOSCRIPTVARS table, used to a specific variable of the script.  This resulting set will contain 1 object",
            "whereClause": "autoscript=:autoscript and varname=:varname",
            "cardinality": null
        },
        {
            "name": "SCRATTRTREE",
            "target": "SCRATTRTREE",
            "remarks": "Relationship to get expression builder for object type.",
            "whereClause": "1=1",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "LAUNCHPOINTVARS",
            "source": "SCRIPTLAUNCHPOINT",
            "remarks": "Relationship to the  LAUNCHPOINTVARS table, used to find the all variables of the script launch point.  This resulting set will contain 1 or more objects",
            "whereClause": "autoscript=:autoscript and launchpointname=:launchpointname",
            "cardinality": null
        }
    ]
}