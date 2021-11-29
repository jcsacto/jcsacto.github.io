mos = {
    "objectName": "SHOWWFCONDITION",
    "className": "psdi.workflow.virtual.ShowWFConditionSet",
    "description": "Non-Persistent used table to edit a work flow cond",
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
            "attributeName": "TITLE",
            "required": false,
            "persistent": false,
            "title": "Title",
            "remarks": "Name of the node.",
            "sameAsAttribute": "TITLE",
            "sameAsObject": "WFNODE"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "Description of the node",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "WFNODE"
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Long Description for Description of the node",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NODEID",
            "required": false,
            "persistent": false,
            "title": "Node ID",
            "remarks": "The WFTASK type node that this task is related to.",
            "sameAsAttribute": "NODEID",
            "sameAsObject": "WFNODE"
        },
        {
            "attributeName": "PROCESSNAME",
            "required": false,
            "persistent": false,
            "title": "Process",
            "remarks": "Name of the owning process.",
            "sameAsAttribute": "PROCESSNAME",
            "sameAsObject": "WFPROCESS"
        },
        {
            "attributeName": "PROCESSREV",
            "required": false,
            "persistent": false,
            "title": "Process Revision",
            "remarks": "Process Revision",
            "sameAsAttribute": "PROCESSREV",
            "sameAsObject": "WFPROCESS"
        },
        {
            "attributeName": "CUSTOMCLASS",
            "required": false,
            "persistent": false,
            "title": "Custom Class",
            "remarks": "The name of the custom java class to run as part of processing this condition",
            "sameAsAttribute": "CLASSNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "CONDITION",
            "required": false,
            "persistent": false,
            "title": "Condition Code",
            "remarks": "A string which will be evaluated by the workflow engine to determine a true or false value.",
            "sameAsAttribute": "USERSQL",
            "sameAsObject": "EXPBUILDER"
        },
        {
            "attributeName": "LANGCODE",
            "required": false,
            "persistent": false,
            "title": "Language Code",
            "remarks": "Language Column",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        },
        {
            "attributeName": "USERSQL",
            "required": false,
            "persistent": false,
            "title": "Expression",
            "remarks": "User Entered Expression",
            "sameAsAttribute": "USERSQL",
            "sameAsObject": "EXPBUILDER"
        },
        {
            "attributeName": "ISCUSTOMCLASS",
            "required": true,
            "persistent": false,
            "title": "Custom Class",
            "remarks": "Custom Class",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "EXPBUILDTREE",
            "target": "EXPBUILDTREE",
            "remarks": "Relationship for exptree.",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFEXPBUILDER",
            "target": "WFEXPBUILDER",
            "remarks": "Relationship to get expression builder for object type.",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "SHOWWFCONDITION",
            "source": "WFNODE",
            "remarks": "Relationship to the ShowWFCondition non-persistantobject, used to edit a WFCONDITION.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}