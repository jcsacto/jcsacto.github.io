mos = {
    "objectName": "SCRIPTLAUNCHPOINT",
    "className": "com.ibm.ism.script.autoscript.ScriptLaunchPointSet",
    "description": "Launch Point information for the script",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "SCRIPTLAUNCHPOINTID",
    "primaryKeyColumns": [
        "LAUNCHPOINTNAME",
        "AUTOSCRIPT"
    ],
    "logicalRelationships": [
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
    "targetLogicalRelationships": [
        {
            "objectName": "AUTOSCRIPT",
            "targetObject": "SCRIPTLAUNCHPOINT",
            "parentKeys": "AUTOSCRIPT",
            "targetKeys": "AUTOSCRIPT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Automation Script",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "SCRIPTLAUNCHPOINT",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "OBJECTNAME, ATTRIBUTENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Attribute",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SCRIPTLAUNCHPOINT",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "LAUNCHPOINTNAME",
            "required": true,
            "persistent": true,
            "title": "Launch Point",
            "remarks": "Name of the launch point.",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Description of the launch point.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LAUNCHPOINTTYPE",
            "required": true,
            "persistent": true,
            "title": "Launch Point Type",
            "remarks": "Specifies the type of launch point",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OBJECTNAME",
            "required": false,
            "persistent": true,
            "title": "Object",
            "remarks": "The object that launches the script.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "OBJECTEVENT",
            "required": false,
            "persistent": true,
            "title": "Event",
            "remarks": "Specify the event associated with the launch point",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ATTRIBUTENAME",
            "required": false,
            "persistent": true,
            "title": "Attribute",
            "remarks": "Specify the attribute associated with the launch point.",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "SCRIPTLAUNCHPOINTID",
            "required": true,
            "persistent": true,
            "title": "Unique Identifier",
            "remarks": "Unique Identifier for SCRIPTLAUNCHPOINT",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONDITION",
            "required": false,
            "persistent": true,
            "title": "Object Event Condition",
            "remarks": "A filter that identifies the set of records for the business object that is targeted by this script. The filter is expressed in the form of an SQL WHERE clause. You can enter this condition manually, or click the Detail Menu button to use the SQL Expression Builder.",
            "sameAsAttribute": "CONDITION",
            "sameAsObject": "ESCALATION"
        },
        {
            "attributeName": "ADD",
            "required": true,
            "persistent": false,
            "title": "Add",
            "remarks": "If selected, the script is activated by the add event. The launch point must have at least one activation event, and you can select multiple events.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "UPDATE",
            "required": true,
            "persistent": false,
            "title": "Update",
            "remarks": "If selected, the script is activated by the update event. The launch point must have at least one activation event, and you can select multiple events.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DELETE",
            "required": true,
            "persistent": false,
            "title": "Delete",
            "remarks": "If selected, the script is activated by the delete event. The launch point must have at least one activation event, and you can select multiple events.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SCRIPTORIGIN",
            "required": false,
            "persistent": false,
            "title": "Script Name",
            "remarks": "Specify if the launch point uses a new or existing script. If you select  Existing, specify the script to reuse. If you select New, the wizard guides you through the script creation process",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AUTOSCRIPTNP",
            "required": false,
            "persistent": false,
            "title": "Script",
            "remarks": "Script name",
            "sameAsAttribute": "AUTOSCRIPT",
            "sameAsObject": "AUTOSCRIPT"
        },
        {
            "attributeName": "ACTIVE",
            "required": true,
            "persistent": true,
            "title": "Active",
            "remarks": "Launchpoint is active",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ACTIONNAME",
            "required": false,
            "persistent": false,
            "title": "Action",
            "remarks": "The action takes its name from the launch point, or you can modify the action name with the name of an existing action. When you create the script, a new action is saved in the database, and you can configure the action in the Actions application.",
            "sameAsAttribute": "ACTION",
            "sameAsObject": "ACTION"
        },
        {
            "attributeName": "ACTIONDESC",
            "required": false,
            "persistent": false,
            "title": "Action",
            "remarks": "Action Description",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "ACTION"
        },
        {
            "attributeName": "EVCONTEXT",
            "required": false,
            "persistent": false,
            "title": "Event Context",
            "remarks": "Non-persistent field used for event context radio buttons",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EVENTTYPE",
            "required": false,
            "persistent": false,
            "title": "Event Type",
            "remarks": "Non-persistent field used for event type radio buttons",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ATTRIBUTEEVENT",
            "required": false,
            "persistent": false,
            "title": "Events",
            "remarks": "Attribute Event",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "AUTOSCRIPT",
            "target": "AUTOSCRIPT",
            "remarks": "Relationship to the  AUTOSCRIPT table, used to find the Script.  This resulting set will contain 1 object",
            "whereClause": "autoscript=:autoscript",
            "cardinality": null
        },
        {
            "name": "AUTOSCRIPTNP",
            "target": "AUTOSCRIPT",
            "remarks": "Relationship to the  AUTOSCRIPT table, used to find the Script.  This resulting set will contain 1 object",
            "whereClause": "autoscript=:autoscriptnp",
            "cardinality": null
        },
        {
            "name": "AUTOSCRIPTVARS",
            "target": "AUTOSCRIPTVARS",
            "remarks": "Relationship to the  AUTOSCRIPTVARS table, used to find the all variables of the script.  This resulting set will contain 1 or more objects",
            "whereClause": "autoscript=:autoscript",
            "cardinality": null
        },
        {
            "name": "EXPBUILDER",
            "target": "EXPBUILDER",
            "remarks": "Relationship to get expression builder for object type.",
            "whereClause": "1=1",
            "cardinality": null
        },
        {
            "name": "SCREXPBUILDER",
            "target": "EXPBUILDER",
            "remarks": "Relationship to get expression builder for object type.",
            "whereClause": "1=1",
            "cardinality": null
        },
        {
            "name": "LAUNCHPOINTVARS",
            "target": "LAUNCHPOINTVARS",
            "remarks": "Relationship to the  LAUNCHPOINTVARS table, used to find the all variables of the script launch point.  This resulting set will contain 1 or more objects",
            "whereClause": "autoscript=:autoscript and launchpointname=:launchpointname",
            "cardinality": null
        },
        {
            "name": "MAXATTRIBUTE",
            "target": "MAXATTRIBUTE",
            "remarks": "Relationship to the  MAXATTRIBUTE table, used to find the all launch points of the script.  This resulting set will contain 1 or more objects.",
            "whereClause": "objectname = :objectname",
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
            "name": "SCRIPTLAUNCHPOINT",
            "source": "AUTOSCRIPT",
            "remarks": "Relationship to the  SCRIPTLAUNCHPOINT table, used to find the all launch points of the script.  This resulting set will contain 1 or more objects",
            "whereClause": "autoscript=:autoscript",
            "cardinality": null
        },
        {
            "name": "SCRIPTLAUNCHPOINT",
            "source": "AUTOSCRIPTTESTNP",
            "remarks": "Relation to Autoscript test details. This relationship will return 1 or more rows",
            "whereClause": "launchpointname=:launchpointname",
            "cardinality": null
        }
    ]
}