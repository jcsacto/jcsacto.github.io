mos = {
    "objectName": "AUTOSCRIPTVARS",
    "className": "com.ibm.ism.script.autoscript.AutoScriptVarsSet",
    "description": "Store the variables used by the script",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "AUTOSCRIPTVARSID",
    "primaryKeyColumns": [
        "AUTOSCRIPT",
        "VARNAME"
    ],
    "logicalRelationships": [
        {
            "objectName": "AUTOSCRIPTVARS",
            "targetObject": "LAUNCHPOINTVARS",
            "parentKeys": "AUTOSCRIPT, VARNAME",
            "targetKeys": "AUTOSCRIPT, VARNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Launch Point Variables",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "AUTOSCRIPT",
            "targetObject": "AUTOSCRIPTVARS",
            "parentKeys": "AUTOSCRIPT",
            "targetKeys": "AUTOSCRIPT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Automation Script",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "AUTOSCRIPTVARSID",
            "required": true,
            "persistent": true,
            "title": "Script Variable Identifier",
            "remarks": "Unique ID column for auto script variable object",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AUTOSCRIPT",
            "required": true,
            "persistent": true,
            "title": "Script",
            "remarks": "Identifies the Script",
            "sameAsAttribute": "AUTOSCRIPT",
            "sameAsObject": "AUTOSCRIPT"
        },
        {
            "attributeName": "VARNAME",
            "required": true,
            "persistent": true,
            "title": "Variable",
            "remarks": "Name the variable",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VARBINDINGVALUE",
            "required": false,
            "persistent": true,
            "title": "Binding Value",
            "remarks": "Value for the variable. You can choose this value.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VARBINDINGTYPE",
            "required": true,
            "persistent": true,
            "title": "Binding Type",
            "remarks": "The binding type for the variable. If the binding type is ATTRIBUTE, you must specify a value in the Launch Point Binding Value field. If the binding type is LITERAL, you must specify the Literal Data Type and a Global Binding Value and, optionally, a Launch Point Binding Value. If the binding type is either MAXVAR or SYSPROP, you must specify the Global Binding Value and, optionally, you can specify a Launch Point Binding Value.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VARTYPE",
            "required": true,
            "persistent": true,
            "title": "Variable Type",
            "remarks": "The variable type can be INPUT, OUTPUT, or INPUT and OUTPUT. An INPUT variable passes information into a script. An OUTPUT variable passes information from the script. An INPUT and OUTPUT variable passes information into a script and passes information from the script.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Description of the variable",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ALLOWOVERRIDE",
            "required": true,
            "persistent": true,
            "title": "Override",
            "remarks": "If selected, it is possible to override the variable at the launch point level.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LITERALDATATYPE",
            "required": false,
            "persistent": true,
            "title": "Literal Data Type",
            "remarks": "Completed if the binding type is set to LITERAL. You can customize the type.",
            "sameAsAttribute": "MAXTYPE",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "ACCESSFLAG",
            "required": false,
            "persistent": true,
            "title": "Attribute Flag",
            "remarks": "Specify the attribute flag that control access and validation",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NOVALIDATION",
            "required": true,
            "persistent": false,
            "title": "Suppress Validation",
            "remarks": "If selected, validation is not applied to this field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NOACCESSCHECK",
            "required": true,
            "persistent": false,
            "title": "Suppress Access Control",
            "remarks": "If selected, access control is not applied to this field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NOACTION",
            "required": true,
            "persistent": false,
            "title": "Suppress Action",
            "remarks": "If selected, actions cannot be performed on this field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LPVARBINDVAL",
            "required": false,
            "persistent": false,
            "title": "Binding Value",
            "remarks": "Binding value associated with a specific launch point variable.",
            "sameAsAttribute": "VARBINDINGVALUE",
            "sameAsObject": "AUTOSCRIPTVARS"
        },
        {
            "attributeName": "ATTRIBUTEVALUENP",
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
            "name": "AUTOSCRIPT",
            "target": "AUTOSCRIPT",
            "remarks": "Relationship to the  AUTOSCRIPT table, used to find AutoScript recorda.  This resulting set will contain 1 object",
            "whereClause": "autoscript=:autoscript",
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
            "name": "AUTOSCRIPTVARS",
            "source": "AUTOSCRIPT",
            "remarks": "Relationship to the  AUTOSCRIPTVARS table, used to find the all variables of the script.  This resulting set will contain 1 or more objects",
            "whereClause": "autoscript=:autoscript",
            "cardinality": null
        },
        {
            "name": "AUTOSCRIPTVARS",
            "source": "LAUNCHPOINTVARS",
            "remarks": "Relationship to the  AUTOSCRIPTVARS table, used to a specific variable of the script.  This resulting set will contain 1 object",
            "whereClause": "autoscript=:autoscript and varname=:varname",
            "cardinality": null
        },
        {
            "name": "AUTOSCRIPTVARS",
            "source": "SCRIPTLAUNCHPOINT",
            "remarks": "Relationship to the  AUTOSCRIPTVARS table, used to find the all variables of the script.  This resulting set will contain 1 or more objects",
            "whereClause": "autoscript=:autoscript",
            "cardinality": null
        }
    ]
}